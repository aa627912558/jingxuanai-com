'use client'

import { useState, useMemo } from 'react'
import { TOOLS_DATA, CATEGORIES, CATEGORY_COLORS } from '@/lib/tools-data'
import { AiTool, ToolCategory } from '@/types'
import { ExternalLink, Star, Search, X } from 'lucide-react'
import clsx from 'clsx'

function ToolCard({ tool }: { tool: AiTool }) {
  const categoryColor = CATEGORY_COLORS[tool.type] || 'bg-gray-100 text-gray-700'

  return (
    <a
      href={`/tool/${tool.slug}`}
      className="group bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100 transition-all duration-300 flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
          {tool.icon ? (
            // Use img tag for tool icons (public folder)
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={tool.icon}
              alt={tool.name}
              className="w-8 h-8 object-contain"
              onError={(e) => {
                // Fallback to first letter if image fails to load
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                target.nextElementSibling?.removeAttribute('hidden')
              }}
            />
          ) : null}
          <span
            className="text-base font-bold text-slate-600"
            hidden={!!tool.icon}
          >
            {tool.name.charAt(0)}
          </span>
        </div>
        <span className={clsx('text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0', categoryColor)}>
          {tool.type}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-1.5">
          {tool.name}
          <ExternalLink size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400 flex-shrink-0" />
        </h3>
        <p className="text-sm text-slate-500 mt-1 line-clamp-2 leading-relaxed">
          {tool.description}
        </p>
      </div>
    </a>
  )
}

export default function HomePageClient() {
  const [activeCategory, setActiveCategory] = useState<ToolCategory>('全部')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTools = useMemo(() => {
    let tools = activeCategory === '全部'
      ? TOOLS_DATA
      : TOOLS_DATA.filter(t => t.type === activeCategory)

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      tools = tools.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.type.toLowerCase().includes(q)
      )
    }

    return tools
  }, [activeCategory, searchQuery])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
          发现优质AI工具
        </h2>
        <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
          汇集全网热门AI工具，按类型分类展示，方便你快速找到合适的产品。<br className="hidden sm:block" />
          点击卡片即可跳转到工具官网。
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <Star size={14} className="text-amber-500" />
          <span className="text-sm text-slate-500">共收录 {TOOLS_DATA.length} 个优质AI工具</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="搜索工具名称或类型，如「写作」「配音」..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
        {searchQuery && (
          <p className="text-sm text-slate-500 mt-2 text-center">
            找到 <span className="font-semibold text-indigo-600">{filteredTools.length}</span> 个相关工具
          </p>
        )}
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as ToolCategory)}
            className={clsx('category-pill', activeCategory === cat && 'active')}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {/* Empty state */}
      {filteredTools.length === 0 && (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg text-slate-600 font-medium">没有找到相关工具</p>
          <p className="text-sm text-slate-400 mt-1">换个关键词试试，或者浏览全部工具</p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('全部') }}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            查看全部工具
          </button>
        </div>
      )}
    </div>
  )
}
