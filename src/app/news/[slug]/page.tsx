import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { slugify } from '@/lib/slug'
import { generateSummary } from '@/lib/minimax'
import NewsDetailClient from './NewsDetailClient'

interface PageProps {
  params: { slug: string }
}

async function getNewsItems() {
  // Call our own API (which uses the pre-generated static JSON)
  // Using absolute URL ensures we hit Vercel Edge Cache consistently
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jingxuanai-com.vercel.app'
  const res = await fetch(`${baseUrl}/news-data.json`, {
    // Don't use Next.js cache - fetch fresh each time from CDN
    cache: 'no-store',
  })
  if (!res.ok) return []
  const data = await res.json()
  // Ensure every item has a slug (regenerate if missing)
  return (data.news || []).map((item: any) => ({
    ...item,
    slug: item.slug || slugify(item.title),
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const news = await getNewsItems()
  const item = news.find((n: any) => n.slug === params.slug)

  if (!item) {
    return {
      title: '资讯未找到 - 精选AI工具站',
    }
  }

  const description = `AI资讯：${item.title}。来源：${item.source}，发布时间：${new Date(item.pubDate).toLocaleString('zh-CN')}。精选AI工具站为你汇集全球AI最新动态。`

  return {
    title: `${item.title} - AI资讯 - 精选AI工具站`,
    description,
    keywords: `AI资讯, ${item.source}, AI新闻, ${item.title}`,
    openGraph: {
      title: item.title,
      description: description,
      type: 'article',
      publishedTime: item.pubDate,
      authors: [item.source],
    },
    twitter: {
      card: 'summary',
      title: item.title,
      description: description,
    },
  }
}

export default async function NewsDetailPage({ params }: PageProps) {
  const news = await getNewsItems()
  const item = news.find((n: any) => n.slug === params.slug)

  if (!item) {
    notFound()
  }

  const summary = await generateSummary(item.title, item.snippet || '', item.source)

  return <NewsDetailClient item={item} summary={summary} />
}
