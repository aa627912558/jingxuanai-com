import type { Metadata } from 'next'
import NewsClient from './NewsClient'
import { getNewsData } from '@/lib/news-data'

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

export default async function NewsPage() {
  const { news, fetchedAt } = await getNewsData()
  return <NewsClient initialNews={news} initialFetchedAt={fetchedAt} />
}
