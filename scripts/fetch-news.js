/**
 * AI资讯抓取流程
 * 
 * 流程：
 * 1. 从RSS源抓取原始资讯
 * 2. Google Translate翻译标题+摘要为中文
 * 3. 筛选3-5条最有价值的
 * 4. 发布到Supabase
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
      if (!process.env[key]) process.env[key] = value
    }
  })
}

const Parser = require('rss-parser')
const { createClient } = require('@supabase/supabase-js')

// Google Translate API (免费额度每月500k字符)
const GOOGLE_TRANSLATE_URL = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh&dt=t&q='

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s\u4e00-\u9fff-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
}

/**
 * Google Translate 翻译
 */
async function translate(text) {
  if (!text || text.trim() === '') return text
  try {
    const encoded = encodeURIComponent(text)
    const response = await fetch(GOOGLE_TRANSLATE_URL + encoded)
    const data = await response.json()
    if (data && data[0]) {
      return data[0].map(item => item[0]).join('')
    }
    return text
  } catch (err) {
    console.error('[translate] Error:', err.message)
    return text
  }
}

/**
 * 批量翻译，带速率限制
 */
async function translateBatch(items, field = 'title') {
  const results = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const original = item[field]
    const translated = await translate(original)
    results.push({ ...item, [field]: translated })
    // 避免触发频率限制
    if (i < items.length - 1) {
      await new Promise(r => setTimeout(r, 100))
    }
  }
  return results
}

const parser = new Parser({
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
const FEEDS = [
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
  const results = await Promise.allSettled(
    FEEDS.map(async (feed) => {
      try {
        const parsed = await parser.parseURL(feed.url)
        return (parsed.items || []).slice(0, 15).map((item) => ({
          title: item.title || '无标题',
          link: item.link || '',
          pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
          source: feed.name,
          lang: feed.lang,
          snippet: (item.contentSnippet || item.content || item.summary || '').slice(0, 300),
        }))
      } catch (err) {
        console.error(`[fetch] Failed to fetch ${feed.name}:`, err.message)
        return []
      }
    })
  )

  const allNews = []
  results.forEach((result) => {
    if (result.status === 'fulfilled') allNews.push(...result.value)
  })

  // 按时间排序
  allNews.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())

  // 去重
  const seen = new Set()
  return allNews.filter((item) => {
    const key = item.title.slice(0, 50).toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

/**
 * 翻译英文文章
 */
async function translateArticles(items) {
  const enItems = items.filter(item => item.lang === 'en')
  const zhItems = items.filter(item => item.lang === 'zh')

  console.log(`[translate] English: ${enItems.length}, Chinese: ${zhItems.length}`)

  // 翻译英文标题和摘要
  const translatedItems = []
  for (const item of enItems) {
    console.log(`[translate] ${item.title.slice(0, 40)}...`)
    const translatedTitle = await translate(item.title)
    const translatedSnippet = await translate(item.snippet)
    translatedItems.push({
      ...item,
      title: translatedTitle,
      snippet: translatedSnippet,
      lang: 'zh', // 翻译后标记为中文
    })
  }

  return [...zhItems, ...translatedItems]
}

/**
 * 发布到Supabase
 */
async function publishToSupabase(newsItems) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    console.log('[publish] Supabase not configured, skipping...')
    return false
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey)

  // 只保留最新的5条资讯（删旧留新）
  console.log(`[publish] Clearing old news (keeping latest ${newsItems.length})...`)
  const { error: deleteError } = await supabase.from('news').delete().neq('id', '00000000-0000-0000-0000-000000000000')
  if (deleteError) {
    console.error('[publish] Failed to clear news:', deleteError)
    return false
  }

  // 插入新资讯
  const insertData = newsItems.map((item) => ({
    title: item.title,
    link: item.link,
    pub_date: item.pubDate,
    source: item.source,
    lang: item.lang,
    snippet: item.snippet || '',
    slug: slugify(item.title),
  }))

  const { error: insertError } = await supabase.from('news').insert(insertData)
  if (insertError) {
    console.error('[publish] Failed to insert news:', insertError)
    return false
  }

  return true
}

/**
 * 保存到本地文件（同时更新 news-data.json）
 */
function saveToLocal(newsItems) {
  const output = {
    news: newsItems,
    total: newsItems.length,
    fetchedAt: new Date().toISOString(),
  }

  const outDir = path.join(process.cwd(), 'public')
  fs.mkdirSync(outDir, { recursive: true })
  const outPath = path.join(outDir, 'news-data.json')
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf-8')
  console.log(`[save] Wrote ${output.total} items to ${outPath}`)
}

async function main() {
  console.log('=== AI资讯抓取流程开始 ===')
  console.log(`[${new Date().toISOString()}]`)

  // Step 1: 抓取所有RSS源
  console.log('\n[Step 1] 抓取RSS源...')
  const allNews = await fetchAllFeeds()
  console.log(`[Step 1] 共获取 ${allNews.length} 条资讯`)

  // Step 2: 翻译英文资讯
  console.log('\n[Step 2] 翻译英文资讯为中文...')
  const translatedNews = await translateArticles(allNews)
  console.log(`[Step 2] 翻译完成，共 ${translatedNews.length} 条`)

  // Step 3: 取最新的5条（最有价值的）
  const topNews = translatedNews.slice(0, 5)
  console.log(`\n[Step 3] 筛选最新5条：`)
  topNews.forEach((item, i) => {
    console.log(`  ${i + 1}. [${item.source}] ${item.title.slice(0, 50)}`)
  })

  // Step 4: 发布到Supabase
  console.log('\n[Step 4] 发布到Supabase...')
  const published = await publishToSupabase(topNews)
  if (published) {
    console.log('[Step 4] ✅ 发布成功')
  } else {
    console.log('[Step 4] ⚠️ Supabase发布失败，仅保存本地')
  }

  // Step 5: 保存到本地
  console.log('\n[Step 5] 保存到本地文件...')
  saveToLocal(topNews)

  console.log('\n=== AI资讯抓取流程完成 ===')
}

main().catch(console.error)
