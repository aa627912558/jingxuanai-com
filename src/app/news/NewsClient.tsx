'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { ExternalLink, Clock, Rss, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import clsx from 'clsx'

interface NewsItem {
  title: string
  link: string
  pubDate: string
  source: string
  lang: string
  snippet?: string
}

interface NewsClientProps {
  initialNews?: NewsItem[]
  initialFetchedAt?: string
}

const PAGE_SIZE = 20

function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffHours < 1) return '刚刚'
    if (diffHours < 24) return `${diffHours}小时前`
    if (diffDays < 7) return `${diffDays}天前`
    return date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })
  } catch {
    return dateStr
  }
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

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const detailUrl = `/news/${index}`
  return (
    <div className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-100 transition-all duration-200">
      <Link href={detailUrl} className="block">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className={clsx(
                'text-xs font-medium px-2 py-0.5 rounded-full',
                item.lang === 'zh'
                  ? 'bg-blue-50 text-blue-600'
                  : 'bg-emerald-50 text-emerald-600'
              )}>
                {item.source}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock size={11} />
                <span title={formatFullDate(item.pubDate)}>{formatDate(item.pubDate)}</span>
              </span>
            </div>
            <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2 mb-2">
              {item.title}
            </h3>
            {item.snippet && (
              <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                {item.snippet.replace(/<[^>]+>/g, '').slice(0, 120)}...
              </p>
            )}
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-end mt-3 pt-3 border-t border-slate-100">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-600 transition-colors font-medium"
        >
          阅读原文 <ExternalLink size={11} />
        </a>
      </div>
    </div>
  )
}
export default function NewsClient({ initialNews = [], initialFetchedAt = '' }: NewsClientProps) {
  const [news, setNews] = useState<NewsItem[]>(initialNews)
  const [loading, setLoading] = useState(initialNews.length === 0)
  const [error, setError] = useState('')
  const [fetchedAt, setFetchedAt] = useState(initialFetchedAt)
  const [page, setPage] = useState(1)
  const [langFilter, setLangFilter] = useState<'all' | 'zh' | 'en'>('all')
  const [sourceFilter, setSourceFilter] = useState<string>('all')

  useEffect(() => {
    // Only fetch if no initial news (server fetch failed or wasn't provided)
    if (initialNews.length > 0) return

    fetch('/api/news')
      .then(r => r.json())
      .then(data => {
        setNews(data.news || [])
        setFetchedAt(data.fetchedAt || '')
        setLoading(false)
      })
      .catch(() => {
        if (initialNews.length === 0) {
          setError('资讯加载失败，请稍后刷新重试')
        }
        setLoading(false)
      })
  }, [initialNews.length])

  const sources = useMemo(() => {
    const srcs = Array.from(new Set(news.map(n => n.source)))
    return srcs.sort()
  }, [news])

  const filteredNews = useMemo(() => {
    return news.filter(item => {
      if (langFilter !== 'all' && item.lang !== langFilter) return false
      if (sourceFilter !== 'all' && item.source !== sourceFilter) return false
      return true
    })
  }, [news, langFilter, sourceFilter])

  const totalPages = Math.ceil(filteredNews.length / PAGE_SIZE)
  const pagedNews = filteredNews.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Rss size={20} className="text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">AI资讯</h2>
        </div>
        <p className="text-slate-500 text-base max-w-xl mx-auto">
          汇集全球AI最新动态，实时更新，来自机器之心、36氪、MIT等权威来源
        </p>
        <p className="text-xs text-slate-400 mt-2">
          最后更新：{fetchedAt ? new Date(fetchedAt).toLocaleString('zh-CN') : '加载中...'}
          {' · '}{news.length} 条资讯
        </p>
      </div>

      {/* Filters */}
      {!loading && !error && (
      <div className="flex flex-wrap gap-3 mb-8 items-center">
        {/* Language filter */}
        <div className="flex gap-1 bg-white border border-slate-200 rounded-lg p-1">
          {([
            ['all', '全部'],
            ['zh', '中文'],
            ['en', 'English'],
          ] as const).map(([val, label]) => (
            <button
              key={val}
              onClick={() => { setLangFilter(val); setPage(1) }}
              className={clsx(
                'px-3 py-1.5 rounded-md text-sm font-medium transition-all',
                langFilter === val
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:bg-slate-50'
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Source filter */}
        <select
          value={sourceFilter}
          onChange={e => { setSourceFilter(e.target.value); setPage(1) }}
          className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">全部来源</option>
          {sources.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        {/* Results count */}
        <span className="text-sm text-slate-500 ml-auto">
          {filteredNews.length} 条结果
        </span>
      </div>
      )}

      {/* News List */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <Loader2 size={32} className="text-indigo-500 animate-spin" />
          <p className="text-slate-500">正在加载AI资讯...</p>
        </div>
      ) : error ? (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">😢</div>
          <p className="text-lg text-slate-600 font-medium">{error}</p>
          <button
            onClick={() => { setLoading(true); setError(''); fetch('/api/news').then(r => r.json()).then(d => { setNews(d.news||[]); setFetchedAt(d.fetchedAt||''); setLoading(false) }).catch(() => { setError('加载失败'); setLoading(false) }) }}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            重试
          </button>
        </div>
      ) : filteredNews.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">📰</div>
          <p className="text-lg text-slate-600 font-medium">暂无资讯</p>
          <p className="text-sm text-slate-400 mt-1">稍后再来看看吧</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3">
            {pagedNews.map((item, idx) => (
              <NewsCard key={`${item.link}-${idx}`} item={item} index={(page - 1) * PAGE_SIZE + idx} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="flex items-center gap-1 px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={15} /> 上一页
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                  let pageNum: number
                  if (totalPages <= 7) {
                    pageNum = i + 1
                  } else if (page <= 4) {
                    pageNum = i + 1
                  } else if (page >= totalPages - 3) {
                    pageNum = totalPages - 6 + i
                  } else {
                    pageNum = page - 3 + i
                  }
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={clsx(
                        'w-9 h-9 rounded-lg text-sm font-medium transition-colors',
                        page === pageNum
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      )}
                    >
                      {pageNum}
                    </button>
                  )
                })}
              </div>

              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="flex items-center gap-1 px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                下一页 <ChevronRight size={15} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
