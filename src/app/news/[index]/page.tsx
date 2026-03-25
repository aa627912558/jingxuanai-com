import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import NewsDetailClient from './NewsDetailClient'

interface PageProps {
  params: { index: string }
}

async function getNewsItems() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jingxuanai-com.vercel.app'
  const res = await fetch(`${baseUrl}/news-data.json`, {
    cache: 'no-store',
  })
  if (!res.ok) return []
  const data = await res.json()
  return data.news || []
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const idx = parseInt(params.index)
  if (isNaN(idx) || idx < 0) {
    return { title: '资讯未找到 - 精选AI工具站' }
  }
  const news = await getNewsItems()
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
      canonical: `/news/${params.index}`,
    },
  }
}

export default async function NewsDetailPage({ params }: PageProps) {
  const idx = parseInt(params.index)
  if (isNaN(idx) || idx < 0) {
    notFound()
  }

  const news = await getNewsItems()
  const item = news[idx]

  if (!item) {
    notFound()
  }

  return <NewsDetailClient item={item} />
}
