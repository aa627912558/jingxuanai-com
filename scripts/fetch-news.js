/**
 * Pre-generate news data at build time.
 * Runs before `next build` via `npm run prebuild && npm run build`
 * Also syncs to Supabase for real-time delivery.
 */
const Parser = require('rss-parser')
const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s\u4e00-\u9fff-]/g, '') // remove special chars but keep CJK
    .replace(/\s+/g, '-')                   // spaces to hyphens
    .replace(/-+/g, '-')                   // multiple hyphens to one
    .slice(0, 80)                          // limit length
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

const FEEDS = [
  { name: '量子位', url: 'https://www.qbitai.com/feed', lang: 'zh' },
  // 英文源已禁用 - 只保留中文内容
  // { name: 'MIT Technology Review', url: 'https://www.technologyreview.com/feed/', lang: 'en' },
  // { name: 'VentureBeat AI', url: 'https://venturebeat.com/category/ai/feed/', lang: 'en' },
  // { name: 'Hugging Face Blog', url: 'https://huggingface.co/blog/feed.xml', lang: 'en' },
  // { name: 'OpenAI Blog', url: 'https://openai.com/blog/rss.xml', lang: 'en' },
  // { name: 'The Verge AI', url: 'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml', lang: 'en' },
  // { name: 'TechCrunch AI', url: 'https://techcrunch.com/category/artificial-intelligence/feed/', lang: 'en' },
]

// 原创中文文章 - 每次构建时保留在顶部
const ORIGINAL_ARTICLES = [
  {
    title: 'Apple与Google联手：Siri要借Gemini"弯道超车"了？',
    link: 'https://www.theverge.com/2026/3/25/26068937/apple-google-gemini-ai-deal-training-models',
    pubDate: '2026-03-26T16:00:00.000Z',
    source: 'The Verge AI',
    lang: 'zh',
    snippet: 'Apple获得Google数据中心完全访问权限，可使用Gemini蒸馏技术训练本地小模型。Apple Intelligence战略再进一步，Siri进化可能比想象中更快。',
    slug: 'apple-google-gemini-deal-siri-local-ai-models',
  },
  {
    title: '黄仁勋突然宣布：我们已经实现AGI了！',
    link: 'https://www.theverge.com/ai-artificial-intelligence/899086/jensen-huang-nvidia-agi',
    pubDate: '2026-03-26T15:00:00.000Z',
    source: 'The Verge AI',
    lang: 'zh',
    snippet: '英伟达CEO黄仁勋在Lex Fridman播客上宣布AGI已实现，但细看内容，AGI定义本身存在巨大争议。什么是AGI？谁来定义它？黄仁勋的宣布引发业内热议。',
    slug: 'jensen-huang-nvidia-agi-declared-lex-fridman',
  },
  {
    title: 'Google发布TurboQuant：内存暴降6倍，精度不损失',
    link: 'https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/',
    pubDate: '2026-03-26T14:00:00.000Z',
    source: 'Google Research',
    lang: 'zh',
    snippet: 'Google发布TurboQuant压缩算法，通过PolarQuant+QJL两步走的方式，把大模型内存占用降低至少6倍且零精度损失。对AI部署方来说，这意味着同等硬件能跑更大的模型。',
    slug: 'google-turboquant-ai-memory-compression-6x-zero-loss',
  },
]

async function syncToSupabase(newsItems) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    console.log('[fetch-news] Supabase not configured, skipping sync...')
    return
  }

  console.log('[fetch-news] Syncing to Supabase...')
  const supabase = createClient(supabaseUrl, serviceRoleKey)

  // Clear existing news and insert fresh
  const { error: deleteError } = await supabase.from('news').delete().neq('id', '00000000-0000-0000-0000-000000000000')
  if (deleteError) {
    console.error('[fetch-news] Failed to clear news:', deleteError)
    return
  }

  const insertData = newsItems.map((item) => ({
    title: item.title,
    link: item.link,
    pub_date: item.pubDate,
    source: item.source,
    lang: item.lang,
    snippet: item.snippet || '',
    slug: item.slug || slugify(item.title),
  }))

  const { error: insertError } = await supabase.from('news').insert(insertData)
  if (insertError) {
    console.error('[fetch-news] Failed to insert news:', insertError)
    return
  }

  console.log(`[fetch-news] Synced ${newsItems.length} items to Supabase`)
}

async function main() {
  console.log('Fetching news data for pre-build...')

  const results = await Promise.allSettled(
    FEEDS.map(async (feed) => {
      try {
        const parsed = await parser.parseURL(feed.url)
        return (parsed.items || []).slice(0, 10).map((item) => ({
          title: item.title || '无标题',
          link: item.link || '',
          pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
          source: feed.name,
          lang: feed.lang,
          snippet: item.contentSnippet || item.content || item.summary || '',
          slug: slugify(item.title || '无标题'),
        }))
      } catch (err) {
        console.error(`Failed to fetch ${feed.name}:`, err)
        return []
      }
    })
  )

  const allNews = []
  results.forEach((result) => {
    if (result.status === 'fulfilled') allNews.push(...result.value)
  })

  allNews.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())

  const seen = new Set()
  const deduped = allNews.filter((item) => {
    const key = item.title.slice(0, 50).toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  // 把原创文章插入到顶部
  const output = {
    news: [...ORIGINAL_ARTICLES, ...deduped],
    total: deduped.length + ORIGINAL_ARTICLES.length,
    fetchedAt: new Date().toISOString(),
  }

  const outDir = path.join(process.cwd(), 'public')
  fs.mkdirSync(outDir, { recursive: true })
  const outPath = path.join(outDir, 'news-data.json')
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf-8')
  console.log(`Wrote ${output.total} items to ${outPath}`)

  // Also sync to Supabase
  await syncToSupabase(output.news)
}

main().catch(console.error)
