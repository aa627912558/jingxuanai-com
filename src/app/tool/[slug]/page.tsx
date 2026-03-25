import { notFound } from 'next/navigation'
import { TOOLS_DATA } from '@/lib/tools-data'
import ToolDetailClient from './ToolDetailClient'

// Generate static paths for all tools
export async function generateStaticParams() {
  return TOOLS_DATA.map((tool) => ({ slug: tool.slug }))
}

// SEO metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
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

  return <ToolDetailClient tool={tool} />
}
