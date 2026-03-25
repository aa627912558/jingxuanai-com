import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { slugify } from '@/lib/slug'
import { generateSummary } from '@/lib/minimax'
import { getNewsData } from '@/lib/news-data'
import NewsDetailClient from './NewsDetailClient'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { news } = await getNewsData()
  const item = news.find((n) => slugify(n.title) === params.slug)

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
  const { news } = await getNewsData()
  const item = news.find((n) => slugify(n.title) === params.slug)

  if (!item) {
    notFound()
  }

  // Generate summary (will be cached)
  const summary = await generateSummary(item.title, item.snippet || '', item.source)

  return <NewsDetailClient item={item} summary={summary} />
}
