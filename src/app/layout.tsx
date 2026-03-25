import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: '精选AI工具站 - 发现最好用的AI工具',
  description: '汇集全网优质AI工具，按类型分类展示，支持affiliate返佣导航，帮助你快速找到合适的AI产品。',
  keywords: 'AI工具, AI导航, AI工具站, AI软件, AI网站, 写作AI, 图片AI, 视频AI, AI推荐',
  openGraph: {
    title: '精选AI工具站',
    description: '汇集全网优质AI工具，按类型分类展示',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-slate-50">
        <Header />
        <main>{children}</main>

        <footer className="bg-white border-t border-slate-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">精</span>
                </div>
                <span className="text-sm text-slate-600 font-medium">精选AI工具站</span>
              </div>
              <p className="text-sm text-slate-400">
                © 2025 精选AI工具站 · 工具排名不分先后
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
