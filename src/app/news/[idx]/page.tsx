import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import NewsDetailClient from './NewsDetailClient'

interface PageProps {
  params: { idx: string }
}

function getNewsItems() {
  try {
    // Read directly from public/news-data.json
    const filePath = join(process.cwd(), 'public', 'news-data.json')
    if (!existsSync(filePath)) return []
    const raw = readFileSync(filePath, 'utf-8')
    const data = JSON.parse(raw)
    return data.news || []
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const idx = parseInt(params.idx)
  if (isNaN(idx) || idx < 0) {
    return { title: '资讯未找到 - 精选AI工具站' }
  }
  const news = getNewsItems()
  const item = news[idx]

  if (!item) {
    return { title: '资讯未找到 - 精选AI工具站' }
  }

  const description = `AI资讯：${item.title}。来源：${item.source}，发布时间：${new Date(item.pubDate).toLocaleString('zh-CN')}。精选AI工具站为你汇集全球AI最新动态。`

  return {
    title: `${item.title} - AI资讯 - 精选AI工具站`,
    description,
    keywords: `AI资讯, ${item.source}, AI新闻, ${item.title}`,
    openGraph: {
      title: item.title,
      description,
      type: 'article',
      publishedTime: item.pubDate,
      authors: [item.source],
    },
    twitter: {
      card: 'summary',
      title: item.title,
      description,
    },
    alternates: {
      canonical: `/news/${params.idx}`,
    },
  }
}

export default async function NewsDetailPage({ params }: PageProps) {
  const idx = parseInt(params.idx)
  if (isNaN(idx) || idx < 0) {
    notFound()
  }

  const news = getNewsItems()
  const item = news[idx]

  if (!item) {
    notFound()
  }

  return <NewsDetailClient item={item} />
}
