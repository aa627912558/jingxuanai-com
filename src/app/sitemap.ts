import { MetadataRoute } from 'next'
import { TOOLS_DATA } from '@/lib/tools-data'
import { promises as fs } from 'fs'
import path from 'path'

const BASE_URL = 'https://jingxuanai.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Load news count from pre-built news-data.json
  let newsCount = 50 // default fallback
  try {
    const newsDataPath = path.join(process.cwd(), 'public', 'news-data.json')
    const content = await fs.readFile(newsDataPath, 'utf8')
    const data = JSON.parse(content)
    newsCount = (data.news || []).length
  } catch {
    // use default
  }

  const toolUrls = TOOLS_DATA.map((tool) => ({
    url: `${BASE_URL}/tool/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const newsUrls = Array.from({ length: Math.min(newsCount, 100) }, (_, i) => ({
    url: `${BASE_URL}/news/${i}`,
    lastModified: new Date(),
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
