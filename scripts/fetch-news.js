/**
 * Pre-generate news data at build time.
 * Runs before `next build` via `npm run prebuild && npm run build`
 */
const Parser = require('rss-parser')
const fs = require('fs')
const path = require('path')

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
  { name: 'MIT Technology Review', url: 'https://www.technologyreview.com/feed/', lang: 'en' },
  { name: 'VentureBeat AI', url: 'https://venturebeat.com/category/ai/feed/', lang: 'en' },
  { name: 'Hugging Face Blog', url: 'https://huggingface.co/blog/feed.xml', lang: 'en' },
  { name: 'OpenAI Blog', url: 'https://openai.com/blog/rss.xml', lang: 'en' },
  { name: 'The Verge AI', url: 'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml', lang: 'en' },
  { name: 'TechCrunch AI', url: 'https://techcrunch.com/category/artificial-intelligence/feed/', lang: 'en' },
]

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

  const output = {
    news: deduped,
    total: deduped.length,
    fetchedAt: new Date().toISOString(),
  }

  const outDir = path.join(process.cwd(), 'public')
  fs.mkdirSync(outDir, { recursive: true })
  const outPath = path.join(outDir, 'news-data.json')
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf-8')
  console.log(`Wrote ${output.total} items to ${outPath}`)
}

main().catch(console.error)
