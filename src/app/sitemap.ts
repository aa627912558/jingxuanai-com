import { MetadataRoute } from 'next'
import { TOOLS_DATA } from '@/lib/tools-data'
import { promises as fs } from 'fs'
import path from 'path'

const BASE_URL = 'https://jingxuanai.com'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s\u4e00-\u9fff-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Load news with titles from pre-built news-data.json
  let newsItems: { title: string; pubDate?: string }[] = []
  try {
    const newsDataPath = path.join(process.cwd(), 'public', 'news-data.json')
    const content = await fs.readFile(newsDataPath, 'utf8')
    const data = JSON.parse(content)
    newsItems = data.news || []
  } catch {
    // use empty
  }

  const toolUrls = TOOLS_DATA.map((tool) => ({
    url: `${BASE_URL}/tool/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Generate real news URLs using slugified titles
  const newsUrls: MetadataRoute.Sitemap = newsItems.map((item) => ({
    url: `${BASE_URL}/news/${slugify(item.title)}`,
    lastModified: item.pubDate ? new Date(item.pubDate) : new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.6,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...toolUrls,
    ...newsUrls,
  ]
}
