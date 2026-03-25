import Parser from 'rss-parser'

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
  {
    name: '量子位',
    url: 'https://www.qbitai.com/feed',
    lang: 'zh',
  },
  {
    name: 'MIT Technology Review',
    url: 'https://www.technologyreview.com/feed/',
    lang: 'en',
  },
  {
    name: 'VentureBeat AI',
    url: 'https://venturebeat.com/category/ai/feed/',
    lang: 'en',
  },
  {
    name: 'Hugging Face Blog',
    url: 'https://huggingface.co/blog/feed.xml',
    lang: 'en',
  },
  {
    name: 'OpenAI Blog',
    url: 'https://openai.com/blog/rss.xml',
    lang: 'en',
  },
  {
    name: 'The Verge AI',
    url: 'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml',
    lang: 'en',
  },
  {
    name: 'TechCrunch AI',
    url: 'https://techcrunch.com/category/artificial-intelligence/feed/',
    lang: 'en',
  },
]

export interface NewsItem {
  title: string
  link: string
  pubDate: string
  source: string
  lang: string
  snippet?: string
}

async function fetchFeed(feed: { name: string; url: string; lang: string }): Promise<NewsItem[]> {
  try {
    const parsed = await parser.parseURL(feed.url)
    return (parsed.items || []).slice(0, 10).map(item => ({
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
}

export interface NewsResponse {
  news: NewsItem[]
  total: number
  fetchedAt: string
}

// Use globalThis to cache news within the same Lambda instance.
// This persists across requests in the same serverless warm instance.
const GLOBAL_CACHE_KEY = '__news_cache__' as any
const CACHE_TTL_MS = 30 * 60 * 1000 // 30 minutes

interface CacheEntry {
  data: NewsResponse
  cachedAt: number
}

function getGlobalCache(): CacheEntry | undefined {
  const g = global as any
  const entry = g[GLOBAL_CACHE_KEY]
  if (!entry) return undefined
  if (Date.now() - entry.cachedAt > CACHE_TTL_MS) {
    delete g[GLOBAL_CACHE_KEY]
    return undefined
  }
  return entry
}

function setGlobalCache(data: NewsResponse): void {
  const g = global as any
  g[GLOBAL_CACHE_KEY] = { data, cachedAt: Date.now() }
}

export async function getNewsData(): Promise<NewsResponse> {
  // Check in-memory global cache first (persists within Lambda instance)
  const cached = getGlobalCache()
  if (cached) {
    console.log(`[news-data] Using in-memory cache (${cached.data.news.length} items)`)
    return cached.data
  }

  console.log('[news-data] Cache miss, fetching from RSS feeds...')
  const results = await Promise.allSettled(FEEDS.map(fetchFeed))
  const allNews: NewsItem[] = []

  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      allNews.push(...result.value)
    }
  })

  // Sort by date, newest first
  allNews.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())

  // Deduplicate by title similarity
  const seen = new Set<string>()
  const deduped = allNews.filter(item => {
    const key = item.title.slice(0, 50).toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  const response: NewsResponse = {
    news: deduped,
    total: deduped.length,
    fetchedAt: new Date().toISOString(),
  }

  setGlobalCache(response)
  console.log(`[news-data] Fetched and cached ${response.news.length} items`)

  return response
}
