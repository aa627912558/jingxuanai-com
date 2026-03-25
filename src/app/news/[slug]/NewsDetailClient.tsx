'use client'

import Link from 'next/link'
import { ArrowLeft, ExternalLink, Clock, Globe, Sparkles } from 'lucide-react'
import clsx from 'clsx'

interface NewsItem {
  title: string
  link: string
  pubDate: string
  source: string
  lang: string
  snippet?: string
}

function formatFullDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return dateStr
  }
}

interface NewsDetailClientProps {
  item: NewsItem
  summary: string
}

export default function NewsDetailClient({ item, summary }: NewsDetailClientProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back link */}
      <Link
        href="/news"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-600 transition-colors mb-8 group"
      >
        <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
        返回资讯列表
      </Link>

      {/* Main card */}
      <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-slate-100">
          {/* Source & lang badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className={clsx(
              'text-xs font-semibold px-2.5 py-1 rounded-full',
              item.lang === 'zh'
                ? 'bg-blue-50 text-blue-600'
                : 'bg-emerald-50 text-emerald-600'
            )}>
              {item.source}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Globe size={11} />
              {item.lang === 'zh' ? '中文资讯' : 'English'}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug mb-4">
            {item.title}
          </h1>

          {/* Pub date */}
          <div className="flex items-center gap-1.5 text-sm text-slate-400">
            <Clock size={13} />
            <span>{formatFullDate(item.pubDate)}</span>
          </div>
        </div>

        {/* AI Summary section */}
        <div className="px-8 py-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md flex items-center justify-center">
              <Sparkles size={13} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-indigo-700">AI 摘要</span>
          </div>
          <p className="text-slate-700 leading-relaxed text-[15px] whitespace-pre-line">
            {summary}
          </p>
        </div>

        {/* Source attribution */}
        <div className="px-8 py-5 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <p className="text-sm text-slate-500">
              资讯内容来自 <span className="font-medium text-slate-700">{item.source}</span>
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <span>阅读原文</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </article>

      {/* Related news placeholder */}
      <div className="mt-8 text-center">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
        >
          <ArrowLeft size={14} />
          查看更多AI资讯
        </Link>
      </div>
    </div>
  )
}
