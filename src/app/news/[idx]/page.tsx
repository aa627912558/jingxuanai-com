import Script from 'next/script'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import NewsDetailClient from './NewsDetailClient'
import { slugify } from '@/lib/slug'
import { generateSummary } from '@/lib/minimax'

interface PageProps {
  params: { idx: string }
}

// Fallback news data - hardcoded for reliability
const FALLBACK_NEWS = [
  {
    title: 'DeepSeek急招Agent方向！一口气放17个岗位，重度Vibe Coding优先',
    link: 'https://www.qbitai.com/2026/03/392024.html',
    pubDate: 'Wed, 25 Mar 2026 06:39:13 +0000',
    source: '量子位',
    lang: 'zh',
    snippet: '明显从"基础模型研究"向"Agent产品化"倾斜',
  },
  {
    title: '中国AI音乐，悄悄把全球第一拿走了',
    link: 'https://www.qbitai.com/2026/03/391839.html',
    pubDate: 'Wed, 25 Mar 2026 06:36:11 +0000',
    source: '量子位',
    lang: 'zh',
    snippet: '还是人声、器乐双料第一',
  },
  {
    title: 'OpenAI关停Sora！25个月从封神到退场',
    link: 'https://www.qbitai.com/2026/03/391799.html',
    pubDate: 'Wed, 25 Mar 2026 00:13:11 +0000',
    source: '量子位',
    lang: 'zh',
    snippet: 'AI视频正在进入"中国时间"',
  },
]

const BASE_URL = 'https://jingxuanai-com.vercel.app'

async function getNewsItem(idx: string) {
  const index = parseInt(idx)
  if (isNaN(index) || index < 0) return null

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || BASE_URL
    const res = await fetch(`${baseUrl}/news-data.json`, {
      cache: 'no-store',
      next: { revalidate: 0 },
    })
    if (res.ok) {
      const data = await res.json()
      const item = (data.news || [])[index]
      if (item) {
        return {
          ...item,
          slug: item.slug || slugify(item.title),
        }
      }
    }
  } catch {
    // Fetch failed, use fallback
  }

  if (index < FALLBACK_NEWS.length) {
    const item = FALLBACK_NEWS[index]
    return {
      ...item,
      slug: slugify(item.title),
    }
  }

  return null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = await getNewsItem(params.idx as string)

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
  }
}

export default async function NewsDetailPage({ params }: PageProps) {
  const item = await getNewsItem(params.idx)

  if (!item) {
    notFound()
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: item.title,
    description: item.snippet || item.title,
    url: item.link,
    datePublished: new Date(item.pubDate).toISOString(),
    author: {
      '@type': 'Organization',
      name: item.source,
    },
    publisher: {
      '@type': 'Organization',
      name: '精选AI工具站',
      url: BASE_URL,
    },
    sourceOrganization: {
      '@type': 'Organization',
      name: item.source,
      url: item.link,
    },
    inLanguage: item.lang === 'zh' ? 'zh-CN' : 'en-US',
  }

  // Generate AI summary on-the-fly - DEBUG TEST
  let summary = 'DEBUG_SUMMARY_PLACEHOLDER';
  try {
    summary = await generateSummary(item.title, item.snippet || '', item.source);
  } catch {
    summary = 'ERROR_FALLBACK: ' + (item.snippet || '').slice(0, 100);
  }

  return (
    <>
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <NewsDetailClient item={item} summary={summary} />
    </>
  )
}
