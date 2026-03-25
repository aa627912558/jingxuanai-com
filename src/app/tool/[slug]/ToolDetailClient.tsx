'use client'

import Link from 'next/link'
import { AiTool } from '@/types'
import { CATEGORY_COLORS, TOOLS_DATA } from '@/lib/tools-data'
import { ExternalLink, ArrowLeft, ChevronRight, CheckCircle2, BookOpen, Users, Lightbulb } from 'lucide-react'
import clsx from 'clsx'

interface ToolDetailClientProps {
  tool: AiTool
}

export default function ToolDetailClient({ tool }: ToolDetailClientProps) {
  const categoryColor = CATEGORY_COLORS[tool.type] || 'bg-gray-100 text-gray-700'

  // Get related tools
  const relatedTools = (tool.related_tools || [])
    .map((id: string) => TOOLS_DATA.find((t: AiTool) => t.id === id))
    .filter(Boolean) as AiTool[]

  // Build affiliate URL with ref
  const affiliateUrl = `${tool.affiliateUrl}?ref=jingxuanai`

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-600 mb-6 transition-colors"
      >
        <ArrowLeft size={14} />
        返回工具列表
      </Link>

      {/* Hero Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold text-indigo-600">{tool.name.charAt(0)}</span>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{tool.name}</h1>
              <span className={clsx('text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0', categoryColor)}>
                {tool.type}
              </span>
            </div>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5">{tool.description}</p>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors shadow-sm"
              >
                <ExternalLink size={15} />
                官方网站直达
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Left 2 cols */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Features */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-indigo-500" />
              功能特点
            </h2>
            <ul className="space-y-2.5">
              {tool.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* Usage Guide */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen size={18} className="text-indigo-500" />
              使用方法 / 教程
            </h2>
            <div className="prose prose-slate max-w-none">
              <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                {tool.usage_guide}
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar - Right col */}
        <div className="flex flex-col gap-6">
          {/* Use Cases */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Users size={18} className="text-indigo-500" />
              适用场景
            </h2>
            <ul className="space-y-3">
              {tool.use_cases.map((useCase: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <ChevronRight size={14} className="text-slate-400 mt-0.5 flex-shrink-0" />
                  {useCase}
                </li>
              ))}
            </ul>
          </section>

          {/* Quick Info */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Lightbulb size={18} className="text-indigo-500" />
              工具信息
            </h2>
            <dl className="space-y-3">
              <div className="flex justify-between items-start gap-2">
                <dt className="text-xs text-slate-500 uppercase tracking-wide">分类</dt>
                <dd>
                  <span className={clsx('text-xs font-medium px-2 py-0.5 rounded-full', categoryColor)}>
                    {tool.type}
                  </span>
                </dd>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 text-sm font-medium rounded-xl transition-colors"
                >
                  访问官网 →
                </a>
              </div>
            </dl>
          </section>
        </div>
      </div>

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <section className="mt-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">同类工具推荐</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedTools.map((rt: AiTool) => {
              const rtColor = CATEGORY_COLORS[rt.type] || 'bg-gray-100 text-gray-700'
              return (
                <Link
                  key={rt.id}
                  href={`/tool/${rt.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-slate-600">{rt.name.charAt(0)}</span>
                    </div>
                    <span className={clsx('text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0', rtColor)}>
                      {rt.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 text-sm transition-colors mb-1">
                    {rt.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {rt.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* Footer spacing */}
      <div className="h-12" />
    </div>
  )
}
