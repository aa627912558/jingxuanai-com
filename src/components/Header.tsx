'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg font-bold">精</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">精选AI工具站</h1>
              <p className="text-xs text-slate-500 leading-tight">发现最好的AI产品</p>
            </div>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-1">
            <Link
              href="/"
              className={clsx(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                pathname === '/'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
              )}
            >
              AI工具
            </Link>
            <Link
              href="/news"
              className={clsx(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                pathname === '/news'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
              )}
            >
              AI资讯
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
