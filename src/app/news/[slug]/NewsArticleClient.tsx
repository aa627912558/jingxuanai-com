'use client'

import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArrowLeft, ExternalLink, Clock, Globe, BookOpen } from 'lucide-react'
import clsx from 'clsx'

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
  isNewsItem?: boolean
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

interface NewsArticleClientProps {
  article: Article
}

export default function NewsArticleClient({ article }: NewsArticleClientProps) {
  const isNewsItem = !!(article as Article & { isNewsItem?: boolean }).isNewsItem

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back link */}
      <Link
        href="/news"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-600 transition-colors mb-8 group"
      >
        <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
        {isNewsItem ? '返回AI资讯' : '返回AI教程'}
      </Link>

      {/* Main card */}
      <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-slate-100">
          {/* Source & lang badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className={clsx(
              'text-xs font-semibold px-2.5 py-1 rounded-full',
              article.lang === 'zh'
                ? 'bg-blue-50 text-blue-600'
                : 'bg-emerald-50 text-emerald-600'
            )}>
              {isNewsItem ? article.source : (article.source || '精选AI工具站')}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Globe size={11} />
              {article.lang === 'zh' ? '中文' : 'English'}
            </span>
            {isNewsItem && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                AI资讯
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug mb-4">
            {article.title}
          </h1>

          {/* Pub date */}
          <div className="flex items-center gap-1.5 text-sm text-slate-400">
            <Clock size={13} />
            <span>{formatFullDate(article.created_at)}</span>
          </div>
        </div>

        {/* Article content */}
        <div className="px-8 py-6">
          {isNewsItem ? (
            /* News item: show as a CTA card */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen size={28} className="text-indigo-500" />
              </div>
              <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-md mx-auto">
                {article.content}
              </p>
              {article.link && (
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors"
                >
                  <span>阅读原文</span>
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          ) : (
            /* Tutorial article: render markdown */
            <div className="prose prose-slate prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-strong:text-slate-900 prose-a:text-indigo-600 prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </div>
          )}
        </div>

        {/* Footer attribution */}
        <div className="px-8 py-5 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <p className="text-sm text-slate-500 flex items-center gap-1.5">
              <BookOpen size={13} className="text-slate-400" />
              {isNewsItem ? `来源 ${article.source}` : `教程来自 ${article.source || '精选AI工具站'}`}
            </p>
            {article.link && (
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <span>{isNewsItem ? '阅读原文' : '查看相关工具'}</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Footer nav */}
      <div className="mt-8 text-center">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
        >
          <ArrowLeft size={14} />
          {isNewsItem ? '查看更多AI资讯' : '查看更多AI教程'}
        </Link>
      </div>

      <div className="h-12" />
    </div>
  )
}
