import type { Metadata } from 'next'
import NewsClient from './NewsClient'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'AI资讯 - 精选AI工具站',
  description: '汇集全球AI最新资讯、新闻与技术动态，包括OpenAI、Anthropic、机器之心、36氪AI等权威来源，帮助你紧跟AI发展趋势。',
  keywords: 'AI资讯, AI新闻, 人工智能新闻, AI动态, OpenAI, 机器之心, 36kr AI',
  openGraph: {
    title: 'AI资讯 - 精选AI工具站',
    description: '全球AI最新资讯与新闻，技术动态一网打尽',
    type: 'website',
  },
}

async function getNewsData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jingxuanai-com.vercel.app'
  const res = await fetch(`${baseUrl}/news-data.json`, { cache: 'no-store' })
  if (!res.ok) return { news: [], fetchedAt: '' }
  const data = await res.json()
  return { news: data.news || [], fetchedAt: data.fetchedAt || '' }
}

export default async function NewsPage() {
  const { news, fetchedAt } = await getNewsData()
  return <NewsClient initialNews={news} initialFetchedAt={fetchedAt} />
}
