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

export async function getNewsData(): Promise<NewsResponse> {
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

  return {
    news: deduped,
    total: deduped.length,
    fetchedAt: new Date().toISOString(),
  }
}
