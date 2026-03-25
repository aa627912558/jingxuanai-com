import Parser from 'rss-parser'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { slugify } from './slug'

// ─── Parser & Feeds ─────────────────────────────────────────────────────────

const parser = new Parser({
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; JingXuanAI/1.0; +https://jingxuanai.com)',
  },
  timeout: 8000,
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

// ─── Types ───────────────────────────────────────────────────────────────────

export interface NewsItem {
  title: string
  link: string
  pubDate: string
  source: string
  lang: string
  snippet?: string
  slug: string
}

export interface NewsResponse {
  news: NewsItem[]
  total: number
  fetchedAt: string
}

// ─── Static JSON (production) ────────────────────────────────────────────────

const STATIC_NEWS_PATH = join(process.cwd(), 'public', 'news-data.json')

function loadStaticNews(): NewsResponse | null {
  try {
    if (!existsSync(STATIC_NEWS_PATH)) return null
    const raw = readFileSync(STATIC_NEWS_PATH, 'utf-8')
    return JSON.parse(raw) as NewsResponse
  } catch {
    return null
  }
}

// ─── Live RSS fetch (development fallback) ──────────────────────────────────

async function fetchFromFeeds(): Promise<NewsItem[]> {
  const results = await Promise.allSettled(FEEDS.map(async (feed) => {
    try {
      const parsed = await parser.parseURL(feed.url)
      return (parsed.items || []).slice(0, 10).map((item): NewsItem => ({
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
  }))

  const allNews: NewsItem[] = []
  results.forEach((r) => { if (r.status === 'fulfilled') allNews.push(...r.value) })

  allNews.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())

  const seen = new Set<string>()
  return allNews.filter((item) => {
    const key = item.title.slice(0, 50).toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

// ─── Global in-memory cache (within same Lambda warm instance) ───────────────

type CacheEntry = { data: NewsResponse; cachedAt: number }
const GLOBAL_KEY = '__news_cache__'
const CACHE_TTL_MS = 30 * 60 * 1000

function getGlobalCache(): CacheEntry | undefined {
  const entry = (global as Record<string, unknown>)[GLOBAL_KEY] as CacheEntry | undefined
  if (!entry) return undefined
  if (Date.now() - entry.cachedAt > CACHE_TTL_MS) {
    ;(global as Record<string, unknown>)[GLOBAL_KEY] = undefined
    return undefined
  }
  return entry
}

function setGlobalCache(data: NewsResponse): void {
  ;(global as Record<string, unknown>)[GLOBAL_KEY] = { data, cachedAt: Date.now() }
}

// ─── Main export ────────────────────────────────────────────────────────────

export async function getNewsData(): Promise<NewsResponse> {
  // 1. In-memory cache (warm Lambda reuse)
  const cached = getGlobalCache()
  if (cached) return cached.data

  // 2. Static JSON file (deployed with the app, always consistent)
  const staticData = loadStaticNews()
  if (staticData && staticData.news.length > 0) {
    // Ensure every item has a slug (regenerate if missing)
    const newsWithSlugs = staticData.news.map((item) => ({
      ...item,
      slug: item.slug || slugify(item.title),
    }))
    const dataWithSlugs = { ...staticData, news: newsWithSlugs }
    console.log(`[news-data] Using static JSON (${staticData.news.length} items)`)
    setGlobalCache(dataWithSlugs)
    return dataWithSlugs
  }

  // 3. Live RSS (development only, or if static file missing)
  console.log('[news-data] Static JSON not found, fetching live RSS...')
  const news = await fetchFromFeeds()
  const response: NewsResponse = {
    news,
    total: news.length,
    fetchedAt: new Date().toISOString(),
  }
  setGlobalCache(response)
  return response
}
