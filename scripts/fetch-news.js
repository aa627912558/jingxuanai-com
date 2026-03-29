/**
 * AI资讯抓取流程 v2.0
 *
 * 升级内容：
 * 1. 抓取RSS原文（保留英文内容）
 * 2. 调用MiniMax文本模型(MiniMax-M2.5)做深度分析和博主风格改写
 * 3. 生成高质量中文内容：标题+摘要+深度解读+标签
 * 4. 发布到Supabase和news-data.json
 *
 * 运行方式：node scripts/fetch-news.js
 */

// 加载环境变量
const fs = require('fs')
const path = require('path')
const envPath = path.join(process.cwd(), '.env.local')
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8')
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=')
    if (key && valueParts.length > 0) {
      const value = valueParts.join('=').trim()
      if (!process.env[key]) {
        process.env[key] = value
      }
    }
  })
}

const Parser = require('rss-parser')
const { createClient } = require('@supabase/supabase-js')

// ============================================================
// MiniMax 文本模型 API (Anthropic Messages API 格式)
// ============================================================
const MINIMAX_API_URL = 'https://api.minimaxi.com/anthropic/v1/messages'
const MINIMAX_API_KEY = process.env.MINIMAX_API_KEY || process.env.MINIMAX_API_Key || ''

/**
 * 调用MiniMax文本模型 (MiniMax-M2.5 via Anthropic API)
 */
async function callMiniMax(messages, maxTokens) {
  if (!MINIMAX_API_KEY) {
    throw new Error('MINIMAX_API_KEY not configured')
  }

  const payload = {
    model: 'MiniMax-M2.5',
    max_tokens: maxTokens || 1500,
    thinking: { type: 'disabled' },
    messages: messages,
  }

  const response = await fetch(MINIMAX_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + MINIMAX_API_KEY,
      'Content-Type': 'application/json',
      'anthropic-version': '2023-06-01',
      'x-api-key': MINIMAX_API_KEY,
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error('MiniMax API error: ' + response.status + ' - ' + errorText)
  }

  const result = await response.json()

  if (result.base_resp && result.base_resp.status_code !== 0) {
    throw new Error('MiniMax API error: ' + (result.base_resp.status_msg || 'unknown'))
  }

  // 解析 Anthropic content 格式，提取纯文本
  const content = result.content || []
  const textBlocks = content.filter(c => c.type === 'text')
  return textBlocks.map(c => c.text).join('')
}

/**
 * 从解析结果构建返回对象
 */
function makeResultFromParsed(parsed, item) {
  return {
    title: parsed.title || item.title,
    summary: parsed.summary || item.snippet,
    deep_analysis: parsed.deep_analysis || item.snippet,
    tags: parsed.tags || ['AI'],
    target_audience: parsed.target_audience || 'AI从业者',
    original_title: item.title,
    original_snippet: item.snippet,
    link: item.link,
    pubDate: item.pubDate,
    source: item.source,
    lang: 'zh',
  }
}

/**
 * 用正则表达式从损坏的JSON中提取字段
 */
function extractJsonByRegex(jsonStr) {
  var result = {}
  var fieldPatterns = [
    ['title', /"title"\s*:\s*"([^"\\]*(?:\\.[^"\\]*)*)"/],
    ['summary', /"summary"\s*:\s*"([^"\\]*(?:\\.[^"\\]*)*)"/],
    ['deep_analysis', /"deep_analysis"\s*:\s*"([^"\\]*(?:\\.[^"\\]*)*)"/],
    ['tags', /"tags"\s*:\s*(\[[^\]]*\])/],
    ['target_audience', /"target_audience"\s*:\s*"([^"\\]*(?:\\.[^"\\]*)*)"/],
  ]
  var ok = false
  fieldPatterns.forEach(function(pattern) {
    var match = jsonStr.match(pattern[1])
    if (match) {
      try {
        result[pattern[0]] = pattern[0] === 'tags' ? JSON.parse(match[1]) : match[1]
        ok = true
      } catch (e) {
        // skip
      }
    }
  })
  return ok ? result : null
}

/**
 * 用MiniMax模型对单条资讯做深度分析和博主风格改写
 */
async function analyzeWithMiniMax(item) {
  var prompt = '你是一位专业的AI科技博主，擅长用通俗易懂的语言解读AI领域的最新动态。\n\n请对以下这篇资讯进行深度分析和改写，生成适合在中国社交媒体发布的高质量中文内容。\n\n## 原始资讯\n标题（英文）: ' + (item.title || '无标题') + '\n来源: ' + (item.source || '未知') + '\n发布时间: ' + (item.pubDate || '未知') + '\n摘要: ' + (item.snippet || item.rawContent || '无') + '\n\n## 输出要求\n请严格按照以下JSON格式输出，不要添加任何额外的注释或说明，只输出JSON：\n\n{\n  "title": "改写后的中文标题（吸引眼球，15-30字）",\n  "summary": "核心内容摘要，2-3句话，讲清楚这件事是什么",\n  "deep_analysis": "深度解读，300-500字，包含以下四个维度：\n    1. 这条新闻讲了什么（具体内容）\n    2. 对行业有什么影响（行业角度）\n    3. 未来会怎么发展（趋势预测）\n    4. 普通用户该怎么应对（实操建议）\n    要像专业博主写的内容，有观点、有态度、有价值，不要流水账。",\n  "tags": ["适合人群标签1", "适合人群标签2", "适合人群标签3"],\n  "target_audience": "适合哪类读者"\n}\n\n## 风格要求\n- 标题要吸引眼球，能引发好奇\n- 内容要有深度，不要浮于表面\n- 语言要通俗，但不失专业\n- 要有自己的观点和判断\n- 不要使用"首先、其次、最后"这种死板的连接词，要自然流畅\n\n请直接输出JSON，不要有任何前缀文字。'

  try {
    var content = await callMiniMax([
      { role: 'user', content: prompt }
    ], 1500)

    // 提取JSON块并尝试多种方式解析
    var jsonStart = content.indexOf('{')
    var jsonEnd = content.lastIndexOf('}')
    if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
      var jsonStr = content.substring(jsonStart, jsonEnd + 1)
      // 方法1：直接解析（如果AI输出正确的话）
      try {
        var parsed = JSON.parse(jsonStr)
        return makeResultFromParsed(parsed, item)
      } catch (parseErr1) {
        // 方法2：清理控制字符后再试
        var cleaned = jsonStr.replace(/[\x00-\x09\x0b\x0c\x0e-\x1f\x7f]/g, ' ')
        try {
          var parsed = JSON.parse(cleaned)
          return makeResultFromParsed(parsed, item)
        } catch (parseErr2) {
          // 方法3：用正则提取每个字段的值
          var parsed = extractJsonByRegex(jsonStr)
          if (parsed) {
            return makeResultFromParsed(parsed, item)
          }
          console.error('[MiniMax] JSON解析异常(直接:' + parseErr1.message + ', 清理后:' + parseErr2.message + ')，使用原始内容')
        }
      }
    } else {
      console.error('[MiniMax] 未找到JSON块，使用原始内容')
    }
  } catch (err) {
    console.error('[MiniMax] 分析失败: ' + err.message + '，使用原始内容')
  }

  // 降级返回原始内容
  return {
    title: item.title,
    summary: item.snippet,
    deep_analysis: item.snippet,
    tags: ['AI'],
    target_audience: 'AI从业者',
    original_title: item.title,
    original_snippet: item.snippet,
    link: item.link,
    pubDate: item.pubDate,
    source: item.source,
    lang: 'zh',
  }
}

/**
 * 批量处理资讯，带速率限制
 */
async function analyzeBatch(items) {
  const results = []
  for (var i = 0; i < items.length; i++) {
    var item = items[i]
    if (i > 0) {
      await new Promise(function(r) { setTimeout(r, 2000) })
    }
    console.log('[MiniMax] 正在分析 (' + (i + 1) + '/' + items.length + '): ' + item.title.slice(0, 40) + '...')
    var analyzed = await analyzeWithMiniMax(item)
    results.push(analyzed)
  }
  return results
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s\u4e00-\u9fff-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
}

var parser = new Parser({
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; JingXuanAI/1.0; +https://jingxuanai.com)',
  },
  timeout: 15000,
  customFields: {
    item: [
      ['media:content', 'mediaContent', { keepArray: false }],
      ['media:thumbnail', 'mediaThumbnail', { keepArray: false }],
    ],
  },
})

// RSS源配置
var FEEDS = [
  { name: '量子位', url: 'https://www.qbitai.com/feed', lang: 'zh' },
  { name: 'MIT Technology Review', url: 'https://www.technologyreview.com/feed/', lang: 'en' },
  { name: 'VentureBeat AI', url: 'https://venturebeat.com/category/ai/feed/', lang: 'en' },
  { name: 'Hugging Face Blog', url: 'https://huggingface.co/blog/feed.xml', lang: 'en' },
  { name: 'OpenAI Blog', url: 'https://openai.com/blog/rss.xml', lang: 'en' },
  { name: 'The Verge AI', url: 'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml', lang: 'en' },
  { name: 'TechCrunch AI', url: 'https://techcrunch.com/category/artificial-intelligence/feed/', lang: 'en' },
]

/**
 * 抓取所有RSS源
 */
async function fetchAllFeeds() {
  var results = await Promise.allSettled(
    FEEDS.map(async function(feed) {
      try {
        var parsed = await parser.parseURL(feed.url)
        return (parsed.items || []).slice(0, 15).map(function(item) {
          return {
            title: item.title || '无标题',
            link: item.link || '',
            pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
            source: feed.name,
            lang: feed.lang,
            snippet: (item.contentSnippet || item.content || item.summary || '').slice(0, 500),
            rawContent: item.content || item.contentSnippet || '',
          }
        })
      } catch (err) {
        console.error('[fetch] Failed to fetch ' + feed.name + ':', err.message)
        return []
      }
    })
  )

  var allNews = []
  results.forEach(function(result) {
    if (result.status === 'fulfilled') {
      allNews = allNews.concat(result.value)
    }
  })

  // 按时间排序
  allNews.sort(function(a, b) {
    return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  })

  // 去重
  var seen = {}
  return allNews.filter(function(item) {
    var key = item.title.slice(0, 50).toLowerCase()
    if (seen[key]) return false
    seen[key] = true
    return true
  })
}

/**
 * 发布到Supabase（只使用旧字段兼容新字段存储在JSON中）
 */
async function publishToSupabase(newsItems) {
  var supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  var serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    console.log('[publish] Supabase not configured, skipping...')
    return false
  }

  var supabase = createClient(supabaseUrl, serviceRoleKey)

  // 清空旧资讯
  console.log('[publish] Clearing old news...')
  var deleteResult = await supabase.from('news').delete().neq('id', '00000000-0000-0000-0000-000000000000')
  if (deleteResult.error) {
    console.error('[publish] Failed to clear news:', deleteResult.error)
    return false
  }

  // 插入新资讯（使用snippet字段存储summary，slug存储deep_analysis的JSON）
  var insertData = newsItems.map(function(item) {
    var extra = {
      original_title: item.original_title || item.title,
      deep_analysis: item.deep_analysis || '',
      tags: item.tags || [],
      target_audience: item.target_audience || '',
    }
    return {
      title: item.title,
      link: item.link,
      pub_date: item.pubDate,
      source: item.source,
      lang: item.lang,
      snippet: item.summary || item.snippet || '',
      slug: JSON.stringify(extra), // 将额外字段存入slug字段（临时方案，后续需扩展表结构）
    }
  })

  var insertResult = await supabase.from('news').insert(insertData)
  if (insertResult.error) {
    console.error('[publish] Failed to insert news:', insertResult.error)
    return false
  }

  return true
}

/**
 * 保存到本地文件
 */
function saveToLocal(newsItems) {
  var output = {
    news: newsItems,
    total: newsItems.length,
    fetchedAt: new Date().toISOString(),
    version: '2.0',
  }

  var outDir = path.join(process.cwd(), 'public')
  fs.mkdirSync(outDir, { recursive: true })
  var outPath = path.join(outDir, 'news-data.json')
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf-8')
  console.log('[save] Wrote ' + output.total + ' items to ' + outPath)
}

async function main() {
  console.log('=== AI资讯抓取流程 v2.0 开始 ===')
  console.log('[' + new Date().toISOString() + ']')
  console.log('[MiniMax API] ' + (MINIMAX_API_KEY ? '已配置 (MiniMax-M2.5)' : '未配置（将跳过MiniMax分析）'))

  // Step 1: 抓取所有RSS源
  console.log('\n[Step 1] 抓取RSS源...')
  var allNews = await fetchAllFeeds()
  console.log('[Step 1] 共获取 ' + allNews.length + ' 条资讯')

  // Step 2: 取最新的10条进行筛选
  var candidates = allNews.slice(0, 10)
  console.log('[Step 2] 候选资讯 ' + candidates.length + ' 条')

  // Step 3: MiniMax深度分析和改写
  if (MINIMAX_API_KEY) {
    console.log('\n[Step 3] MiniMax深度分析和博主风格改写...')
    console.log('（每条间隔2秒，避免频率限制，请耐心等待）')
    var analyzedNews = await analyzeBatch(candidates)

    // 取分析结果最好的5条
    var topNews = analyzedNews.slice(0, 5)
    console.log('\n[Step 3] 分析完成，筛选Top ' + topNews.length + ' 条')

    topNews.forEach(function(item, i) {
      console.log('\n  ' + (i + 1) + '. [' + item.source + '] ' + item.title)
      console.log('     标签: ' + ((item.tags || []).join(', ')))
      console.log('     摘要: ' + (item.summary || '').slice(0, 60) + '...')
    })

    // Step 4: 发布到Supabase
    console.log('\n[Step 4] 发布到Supabase...')
    var published = await publishToSupabase(topNews)
    if (published) {
      console.log('[Step 4] ✅ 发布成功')
    } else {
      console.log('[Step 4] ⚠️ Supabase发布失败，仅保存本地')
    }

    // Step 5: 保存到本地
    console.log('\n[Step 5] 保存到本地文件...')
    saveToLocal(topNews)
  } else {
    // 没有API Key时降级到简单模式
    console.log('\n[Step 3] ⚠️ 未配置MiniMax API Key，跳过深度分析')
    var topNews = candidates.slice(0, 5).map(function(item) {
      return {
        title: item.title,
        summary: item.snippet,
        deep_analysis: item.snippet,
        tags: ['AI'],
        target_audience: 'AI从业者',
        original_title: item.title,
        original_snippet: item.snippet,
        link: item.link,
        pubDate: item.pubDate,
        source: item.source,
        lang: item.lang,
      }
    })

    topNews.forEach(function(item, i) {
      console.log('\n  ' + (i + 1) + '. [' + item.source + '] ' + item.title)
    })

    var published = await publishToSupabase(topNews)
    console.log('[Step 4] ' + (published ? '✅ Supabase发布成功' : '⚠️ Supabase发布失败'))
    console.log('\n[Step 5] 保存到本地文件...')
    saveToLocal(topNews)

    console.log('\n⚠️ 警告：当前运行在降级模式，资讯未经AI深度分析')
    console.log('   请在 .env.local 中配置 MINIMAX_API_KEY 以启用完整功能')
  }

  console.log('\n=== AI资讯抓取流程完成 ===')
}

main().catch(console.error)
