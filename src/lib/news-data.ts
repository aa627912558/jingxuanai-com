import Parser from 'rss-parser'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { slugify } from './slug'
import { getSupabaseAdmin } from './supabase'

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
  id?: string
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

// ─── Static JSON (backup/fallback) ─────────────────────────────────────────

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

// ─── Supabase ────────────────────────────────────────────────────────────────

async function loadFromSupabase(): Promise<NewsItem[] | null> {
  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('news')
      .select('id, title, link, pub_date, source, lang, snippet, slug')
      .order('pub_date', { ascending: false })
      .limit(100)

    if (error) {
      console.error('[news-data] Supabase error:', error)
      return null
    }

    if (!data || data.length === 0) return null

    return data.map((row) => ({
      id: row.id,
      title: row.title,
      link: row.link,
      pubDate: row.pub_date,
      source: row.source,
      lang: row.lang,
      snippet: row.snippet || '',
      slug: row.slug || slugify(row.title),
    }))
  } catch (err) {
    console.error('[news-data] Supabase fetch failed:', err)
    return null
  }
}

// ─── Live RSS fetch (last resort) ────────────────────────────────────────────

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

// ─── Global in-memory cache ──────────────────────────────────────────────────

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

  // 2. Supabase (primary source)
  const supabaseNews = await loadFromSupabase()
  if (supabaseNews && supabaseNews.length > 0) {
    const newsWithSlugs = supabaseNews.map((item) => ({
      ...item,
      slug: item.slug || slugify(item.title),
    }))
    const data: NewsResponse = {
      news: newsWithSlugs,
      total: newsWithSlugs.length,
      fetchedAt: new Date().toISOString(),
    }
    console.log(`[news-data] Using Supabase (${supabaseNews.length} items)`)
    setGlobalCache(data)
    return data
  }

  // 3. Static JSON file (fallback)
  const staticData = loadStaticNews()
  if (staticData && staticData.news.length > 0) {
    const newsWithSlugs = staticData.news.map((item) => ({
      ...item,
      slug: item.slug || slugify(item.title),
    }))
    const dataWithSlugs = { ...staticData, news: newsWithSlugs }
    console.log(`[news-data] Using static JSON (${staticData.news.length} items)`)
    setGlobalCache(dataWithSlugs)
    return dataWithSlugs
  }

  // 4. Live RSS (last resort)
  console.log('[news-data] All sources failed, fetching live RSS...')
  const news = await fetchFromFeeds()
  const response: NewsResponse = {
    news,
    total: news.length,
    fetchedAt: new Date().toISOString(),
  }
  setGlobalCache(response)
  return response
}

// ─── Admin helpers (for API routes) ────────────────────────────────────────

export async function insertNewsItem(item: Omit<NewsItem, 'id'>): Promise<boolean> {
  try {
    const supabase = getSupabaseAdmin()
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) return false
    const { error } = await supabase.from('news').insert([{
      title: item.title,
      link: item.link,
      pub_date: item.pubDate,
      source: item.source,
      lang: item.lang,
      snippet: item.snippet || '',
      slug: item.slug || slugify(item.title),
    }])
    if (error) {
      console.error('[news-data] Insert error:', error)
      return false
    }
    // Invalidate cache
    ;(global as Record<string, unknown>)[GLOBAL_KEY] = undefined
    return true
  } catch (err) {
    console.error('[news-data] Insert failed:', err)
    return false
  }
}

export async function updateNewsItem(id: string, updates: Partial<NewsItem>): Promise<boolean> {
  try {
    const supabase = getSupabaseAdmin()
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) return false
    const updateData: Record<string, unknown> = {}
    if (updates.title !== undefined) updateData.title = updates.title
    if (updates.link !== undefined) updateData.link = updates.link
    if (updates.pubDate !== undefined) updateData.pub_date = updates.pubDate
    if (updates.source !== undefined) updateData.source = updates.source
    if (updates.lang !== undefined) updateData.lang = updates.lang
    if (updates.snippet !== undefined) updateData.snippet = updates.snippet
    if (updates.slug !== undefined) updateData.slug = updates.slug
    updateData.updated_at = new Date().toISOString()

    const { error } = await supabase.from('news').update(updateData).eq('id', id)
    if (error) {
      console.error('[news-data] Update error:', error)
      return false
    }
    ;(global as Record<string, unknown>)[GLOBAL_KEY] = undefined
    return true
  } catch (err) {
    console.error('[news-data] Update failed:', err)
    return false
  }
}

export async function deleteNewsItem(id: string): Promise<boolean> {
  try {
    const supabase = getSupabaseAdmin()
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) return false
    const { error } = await supabase.from('news').delete().eq('id', id)
    if (error) {
      console.error('[news-data] Delete error:', error)
      return false
    }
    ;(global as Record<string, unknown>)[GLOBAL_KEY] = undefined
    return true
  } catch (err) {
    console.error('[news-data] Delete failed:', err)
    return false
  }
}
