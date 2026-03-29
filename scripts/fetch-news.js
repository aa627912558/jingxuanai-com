/**
 * AI资讯抓取流程 v3.0 - 资讯猴原创版
 *
 * 核心升级：
 * 1. 只抓今天/昨天的RSS资讯（避免重复处理）
 * 2. 按标题去重，已有的跳过
 * 3. 调用MiniMax生成原创博客文（500-800字，有观点有分析）
 * 4. 追加到 news-data.json（不覆盖，永久保存）
 * 5. 每天最多加3-5篇新文章
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
    max_tokens: maxTokens || 2000,
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

  const content = result.content || []
  const textBlocks = content.filter(c => c.type === 'text')
  return textBlocks.map(c => c.text).join('')
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
 * 用MiniMax模型对单条资讯生成原创博客文
 */
async function generateOriginalArticle(item) {
  var prompt = '你是一位专业的AI科技博主，擅长用通俗易懂的语言解读AI领域的最新动态，写出有观点、有态度、有深度的原创博客文章。\n\n请对以下这篇资讯进行深度分析，写成一篇完整的原创博客文章。\n\n## 原始资讯\n标题: ' + (item.title || '无标题') + '\n来源: ' + (item.source || '未知') + '\n发布时间: ' + (item.pubDate || '未知') + '\n摘要: ' + (item.snippet || item.rawContent || '无') + '\n\n## 输出要求\n请严格按照以下JSON格式输出，只输出JSON，不要任何前缀：\n\n{\n  "title": "吸引眼球的中文标题（15-30字，能引发好奇）",\n  "summary": "100字左右的摘要，2-3句话讲清楚这件事是什么",\n  "deep_analysis": "500-800字的原创博客文章，包含：\n    1. 这条新闻具体讲了什么\n    2. 对行业有什么影响\n    3. 未来发展趋势\n    4. 读者应该如何应对\n    要像专业博主写的内容，有观点、有态度、有价值，语言自然流畅，不要流水账式的摘要",\n  "tags": ["标签1", "标签2", "标签3", "标签4"],\n  "target_audience": "适合哪类读者（15字以内）"\n}\n\n## 风格要求\n- 标题要吸引眼球，有悬念或冲突感\n- 内容要有深度分析，不是简单复述\n- 要有自己的观点和判断，敢于下结论\n- 语言通俗但不失专业，不要书面八股\n- 不要用"首先、其次、最后"这种死板连接词\n- 不要用列表，要像真正的博客文章段落连贯\n\n请直接输出JSON：'

  try {
    var content = await callMiniMax([
      { role: 'user', content: prompt }
    ], 2000)

    var jsonStart = content.indexOf('{')
    var jsonEnd = content.lastIndexOf('}')
    if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
      var jsonStr = content.substring(jsonStart, jsonEnd + 1)
      try {
        var parsed = JSON.parse(jsonStr)
        return {
          title: parsed.title || item.title,
          summary: parsed.summary || item.snippet,
          deep_analysis: parsed.deep_analysis || item.snippet,
          tags: Array.isArray(parsed.tags) ? parsed.tags : ['AI'],
          target_audience: parsed.target_audience || 'AI从业者',
        }
      } catch (parseErr1) {
        var cleaned = jsonStr.replace(/[\x00-\x09\x0b\x0c\x0e-\x1f\x7f]/g, ' ')
        try {
          var parsed = JSON.parse(cleaned)
          return {
            title: parsed.title || item.title,
            summary: parsed.summary || item.snippet,
            deep_analysis: parsed.deep_analysis || item.snippet,
            tags: Array.isArray(parsed.tags) ? parsed.tags : ['AI'],
            target_audience: parsed.target_audience || 'AI从业者',
          }
        } catch (parseErr2) {
          var parsed = extractJsonByRegex(jsonStr)
          if (parsed) {
            return {
              title: parsed.title || item.title,
              summary: parsed.summary || item.snippet,
              deep_analysis: parsed.deep_analysis || item.snippet,
              tags: Array.isArray(parsed.tags) ? parsed.tags : ['AI'],
              target_audience: parsed.target_audience || 'AI从业者',
            }
          }
          console.error('[MiniMax] JSON解析异常，使用原始内容')
        }
      }
    } else {
      console.error('[MiniMax] 未找到JSON块，使用原始内容')
    }
  } catch (err) {
    console.error('[MiniMax] 生成失败: ' + err.message + '，使用原始内容')
  }

  return {
    title: item.title,
    summary: item.snippet || '',
    deep_analysis: item.snippet || '',
    tags: ['AI'],
    target_audience: 'AI从业者',
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
    console.log('[MiniMax] 正在生成原创文章 (' + (i + 1) + '/' + items.length + '): ' + item.title.slice(0, 40) + '...')
    var analyzed = await generateOriginalArticle(item)
    results.push(analyzed)
  }
  return results
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
 * 判断日期是否是今天或昨天
 */
function isTodayOrYesterday(dateStr) {
  try {
    var itemDate = new Date(dateStr)
    if (isNaN(itemDate.getTime())) return false

    var now = new Date()
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    var yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000)

    var itemDay = new Date(itemDate.getFullYear(), itemDate.getMonth(), itemDate.getDate())

    return itemDay.getTime() === today.getTime() || itemDay.getTime() === yesterday.getTime()
  } catch (e) {
    return false
  }
}

/**
 * 抓取所有RSS源（只取今天/昨天的）
 */
async function fetchAllFeeds() {
  var results = await Promise.allSettled(
    FEEDS.map(async function(feed) {
      try {
        var parsed = await parser.parseURL(feed.url)
        return (parsed.items || []).map(function(item) {
          return {
            title: item.title || '无标题',
            link: item.link || '',
            pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
            source: feed.name,
            lang: feed.lang,
            snippet: (item.contentSnippet || item.content || item.summary || '').slice(0, 500),
            rawContent: item.content || item.contentSnippet || '',
          }
        }).filter(function(item) {
          return isTodayOrYesterday(item.pubDate)
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

  return allNews
}

/**
 * 读取现有 news-data.json，保留所有文章
 */
function loadExistingNews() {
  var outPath = path.join(process.cwd(), 'public', 'news-data.json')
  try {
    if (fs.existsSync(outPath)) {
      var data = JSON.parse(fs.readFileSync(outPath, 'utf-8'))
      console.log('[load] 现有 ' + (data.news || []).length + ' 篇文章')
      return data.news || []
    }
  } catch (e) {
    console.error('[load] 读取现有文件失败: ' + e.message)
  }
  return []
}

/**
 * 检查文章是否已存在（按标题去重）
 */
function isDuplicate(newItem, existingNews) {
  var newTitle = (newItem.title || '').toLowerCase().trim()
  var newTitleKey = newTitle.slice(0, 60)

  return existingNews.some(function(existing) {
    var existingTitle = (existing.title || '').toLowerCase().trim()
    var existingTitleKey = existingTitle.slice(0, 60)
    return existingTitleKey === newTitleKey
  })
}

/**
 * 保存到本地文件（追加模式：保留所有现有文章，只追加新文章）
 */
function saveToLocal(existingNews, newArticles) {
  var outDir = path.join(process.cwd(), 'public')
  var outPath = path.join(outDir, 'news-data.json')

  // 合并：现有文章 + 新文章
  var allNews = existingNews.concat(newArticles)

  // 按时间排序
  allNews.sort(function(a, b) {
    return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  })

  var output = {
    news: allNews,
    total: allNews.length,
    fetchedAt: new Date().toISOString(),
    version: '3.0',
  }

  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf-8')
  console.log('[save] 保存 ' + output.total + ' 篇（原有 ' + existingNews.length + ' 篇 + 新增 ' + newArticles.length + ' 篇）到 ' + outPath)
}

async function main() {
  console.log('=== AI资讯抓取流程 v3.0 开始 ===')
  console.log('[' + new Date().toISOString() + ']')
  console.log('[MiniMax API] ' + (MINIMAX_API_KEY ? '已配置 (MiniMax-M2.5)' : '未配置（将跳过MiniMax分析）'))

  // Step 1: 读取现有文章（保留所有）
  console.log('\n[Step 1] 读取现有文章...')
  var existingNews = loadExistingNews()

  // Step 2: 抓取RSS（只取今天/昨天）
  console.log('\n[Step 2] 抓取RSS源（仅今天/昨天）...')
  var freshNews = await fetchAllFeeds()
  console.log('[Step 2] 共获取 ' + freshNews.length + ' 条今日/昨日资讯')

  if (freshNews.length === 0) {
    console.log('\n⚠️ 今日暂无新资讯，流程结束')
    return
  }

  // Step 3: 去重（跳过已存在的）
  var newCandidates = []
  freshNews.forEach(function(item) {
    if (!isDuplicate(item, existingNews)) {
      newCandidates.push(item)
    } else {
      console.log('[dedup] 跳过已存在: ' + item.title.slice(0, 50) + '...')
    }
  })
  console.log('[Step 3] 去重后候选 ' + newCandidates.length + ' 条')

  if (newCandidates.length === 0) {
    console.log('\n⚠️ 没有新资讯需要处理，流程结束')
    return
  }

  // Step 4: 限制每天最多3-5篇
  var MAX_NEW_ARTICLES = 5
  var candidatesToProcess = newCandidates.slice(0, MAX_NEW_ARTICLES)
  if (newCandidates.length > MAX_NEW_ARTICLES) {
    console.log('[Step 4] 限制为每天最多 ' + MAX_NEW_ARTICLES + ' 篇，跳过 ' + (newCandidates.length - MAX_NEW_ARTICLES) + ' 条')
  } else {
    console.log('[Step 4] 处理 ' + candidatesToProcess.length + ' 条新资讯')
  }

  // Step 5: MiniMax生成原创文章
  var newArticles = []
  if (MINIMAX_API_KEY) {
    console.log('\n[Step 5] MiniMax生成原创博客文（每条间隔2秒）...')
    var analyzedArticles = await analyzeBatch(candidatesToProcess)

    // 组装完整文章对象
    analyzedArticles.forEach(function(parsed, i) {
      var original = candidatesToProcess[i]
      newArticles.push({
        title: parsed.title,
        summary: parsed.summary,
        deep_analysis: parsed.deep_analysis,
        tags: parsed.tags,
        target_audience: parsed.target_audience,
        original_title: original.title,
        original_snippet: original.snippet,
        link: original.link,
        pubDate: original.pubDate,
        source: original.source,
        lang: 'zh',
        is_manual: false, // 自动生成
      })
    })

    console.log('\n[Step 5] 生成完成！新增 ' + newArticles.length + ' 篇原创文章')
    newArticles.forEach(function(item, i) {
      console.log('\n  ' + (i + 1) + '. [' + item.source + '] ' + item.title)
      console.log('     标签: ' + (item.tags || []).join(', '))
      console.log('     摘要: ' + (item.summary || '').slice(0, 60) + '...')
    })
  } else {
    console.log('\n[Step 5] ⚠️ 未配置MiniMax API Key，跳过生成')
    console.log('   请在 .env.local 中配置 MINIMAX_API_KEY')
    return
  }

  // Step 6: 保存到本地（追加，不覆盖）
  console.log('\n[Step 6] 保存到本地文件（追加模式）...')
  saveToLocal(existingNews, newArticles)

  console.log('\n=== AI资讯抓取流程完成 ===')
  console.log('✅ 新增 ' + newArticles.length + ' 篇原创文章')
  console.log('📚 现有文章库共 ' + (existingNews.length + newArticles.length) + ' 篇')
}

main().catch(console.error)
