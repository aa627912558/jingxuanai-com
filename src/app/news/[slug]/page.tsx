import Script from 'next/script'
import { notFound } from 'next/navigation'
import { getSupabaseAdmin } from '@/lib/supabase'
import { slugify } from '@/lib/slug'
import NewsArticleClient from './NewsArticleClient'

interface Article {
  id: string
  title: string
  slug: string
  content: string
  source: string
  link: string | null
  lang: string
  status: string
  created_at: string
}

interface NewsItem {
  title: string
  link: string
  pubDate: string
  source: string
  lang: string
  snippet?: string
}

// Fallback news data for numeric index access
const FALLBACK_NEWS: NewsItem[] = [
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

async function getArticleBySlug(slug: string): Promise<{ type: 'article'; data: Article } | { type: 'news'; data: NewsItem & { slug: string } } | null> {
  // First try Supabase articles table (tutorial articles)
  try {
    const supabaseAdmin = getSupabaseAdmin()
    const { data } = await supabaseAdmin
      .from('articles')
      .select('id, title, slug, content, source, link, lang, status, created_at')
      .eq('slug', slug)
      .eq('status', 'published')
      .limit(1)
    if (data && data.length > 0) {
      return { type: 'article', data: data[0] as Article }
    }
  } catch {
    // Not found in articles, try news list
  }

  // Try as numeric index into news-data.json
  const index = parseInt(slug)
  if (!isNaN(index) && index >= 0) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || BASE_URL
      const res = await fetch(`${baseUrl}/news-data.json`, {
        cache: 'no-store',
        next: { revalidate: 0 },
      })
      if (res.ok) {
        const data = await res.json()
        const item = (data.news || [])[index] as NewsItem | undefined
        if (item) {
          return { type: 'news', data: { ...item, slug: slugify(item.title) } }
        }
      }
    } catch {
      // Fetch failed
    }

    // Fallback to hardcoded news
    if (index < FALLBACK_NEWS.length) {
      const item = FALLBACK_NEWS[index]
      return { type: 'news', data: { ...item, slug: slugify(item.title) } }
    }
  }

  return null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)
  const result = await getArticleBySlug(decodedSlug)

  if (!result) {
    return { title: '未找到 - 精选AI工具站' }
  }

  if (result.type === 'article') {
    const article = result.data
    const description = article.content.slice(0, 160).replace(/[#*`_]/g, '').trim()
    return {
      title: `${article.title} - 精选AI工具站`,
      description,
      keywords: [article.title, article.source, 'AI教程', '精选AI工具站'],
      openGraph: {
        title: article.title,
        description,
        type: 'article',
        publishedTime: article.created_at,
        authors: [article.source],
      },
    }
  }

  const item = result.data
  const description = `AI资讯：${item.title}。来源：${item.source}，发布时间：${new Date(item.pubDate).toLocaleString('zh-CN')}。精选AI工具站为你汇集全球AI最新动态。`
  return {
    title: `${item.title} - AI资讯 - 精选AI工具站`,
    description,
    keywords: ['AI资讯', item.source, 'AI新闻', item.title],
    openGraph: {
      title: item.title,
      description,
      type: 'article',
      publishedTime: item.pubDate,
      authors: [item.source],
    },
  }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)
  const result = await getArticleBySlug(decodedSlug)

  if (!result) {
    notFound()
  }

  if (result.type === 'news') {
    const item = result.data
    const articleJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: item.title,
      description: item.snippet || item.title,
      url: item.link,
      datePublished: new Date(item.pubDate).toISOString(),
      author: { '@type': 'Organization', name: item.source },
      publisher: { '@type': 'Organization', name: '精选AI工具站', url: BASE_URL },
      sourceOrganization: { '@type': 'Organization', name: item.source, url: item.link },
      inLanguage: item.lang === 'zh' ? 'zh-CN' : 'en-US',
    }
    return (
      <>
        <Script
          id="article-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <NewsArticleClient
          article={{
            id: slug,
            title: item.title,
            slug: item.slug,
            content: `> ${item.snippet || ''}\n\n**来源：** ${item.source}\n\n这是一篇来自 ${item.source} 的AI资讯。点击下方按钮阅读完整内容。`,
            source: item.source,
            link: item.link,
            lang: item.lang,
            status: 'published',
            created_at: item.pubDate,
            isNewsItem: true,
          } as Article & { isNewsItem?: boolean }}
        />
      </>
    )
  }

  const article = result.data
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.content.slice(0, 200).replace(/[#*`_]/g, ''),
    datePublished: article.created_at,
    author: { '@type': 'Organization', name: article.source },
    publisher: { '@type': 'Organization', name: '精选AI工具站', url: BASE_URL },
    inLanguage: article.lang === 'zh' ? 'zh-CN' : 'en-US',
  }

  return (
    <>
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <NewsArticleClient article={article} />
    </>
  )
}
