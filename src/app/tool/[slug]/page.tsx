import Script from 'next/script'
import { notFound } from 'next/navigation'
import { TOOLS_DATA } from '@/lib/tools-data'
import { getSupabaseAdmin } from '@/lib/supabase'
import ToolDetailClient from './ToolDetailClient'

// Generate static paths for all tools
export async function generateStaticParams() {
  return TOOLS_DATA.map((tool) => ({ slug: tool.slug }))
}

// Article type for SSR-fetched data
interface Article {
  id: string
  title: string
  slug: string
  status: string
}

// SEO metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  const tool = TOOLS_DATA.find((t) => t.slug === slug)
  if (!tool) return { title: 'Tool Not Found' }

  return {
    title: `${tool.name} - 精选AI工具站`,
    description: `${tool.description} | ${tool.features.slice(0, 2).join('，')}`,
    keywords: [tool.name, tool.type, ...tool.features.slice(0, 3).map(f => f.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, '').slice(0, 20)), 'AI工具', '精选AI工具站'],
    openGraph: {
      title: `${tool.name} - 精选AI工具站`,
      description: tool.description,
      type: 'article',
    },
  }
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tool = TOOLS_DATA.find((t) => t.slug === slug)

  if (!tool) notFound()

  // Fetch related articles server-side using admin key (more reliable, no client-side env vars needed)
  let articles: Article[] = []
  try {
    const supabaseAdmin = getSupabaseAdmin()
    const { data } = await supabaseAdmin
      .from('articles')
      .select('id, title, slug, status')
      .eq('status', 'published')
      .ilike('link', `%/tool/${tool.slug}`)
      .order('created_at', { ascending: false })
      .limit(10)
    if (data) articles = data
  } catch (e) {
    console.error('[ToolDetailPage] Failed to fetch articles:', e)
  }

  const toolJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    url: tool.website,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
    },
    aggregateRating: undefined,
    ...(tool.commissionRate && {
      additionalProperty: {
        '@type': 'PropertyValue',
        name: 'commissionRate',
        value: tool.commissionRate,
      },
    }),
  }

  // FAQPage schema for AI tools
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `${tool.name}是什么？`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: tool.description,
        },
      },
      {
        '@type': 'Question',
        name: `${tool.name}支持哪些使用场景？`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: tool.use_cases.join('、'),
        },
      },
      {
        '@type': 'Question',
        name: `${tool.name}有哪些主要功能？`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: tool.features.join('；'),
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="tool-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolJsonLd) }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ToolDetailClient tool={tool} initialArticles={articles} />
    </>
  )
}
