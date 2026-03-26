import { NextResponse } from 'next/server'
import { isAdminRequest, adminResponse } from '@/lib/admin-auth'
import { getNewsData, insertNewsItem } from '@/lib/news-data'

export const revalidate = 0

// GET /api/admin/news - List all news (for admin panel)
export async function GET(request: Request) {
  if (!isAdminRequest(request)) return adminResponse()

  try {
    const data = await getNewsData()
    return NextResponse.json({ success: true, news: data.news, total: data.total })
  } catch (err) {
    console.error('Admin news list error:', err)
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 })
  }
}

// POST /api/admin/news - Create a new news item
export async function POST(request: Request) {
  if (!isAdminRequest(request)) return adminResponse()

  try {
    const body = await request.json()
    const { title, link, pubDate, source, lang, snippet, slug } = body

    if (!title || !link) {
      return NextResponse.json({ error: 'title and link are required' }, { status: 400 })
    }

    const success = await insertNewsItem({
      title,
      link: link || '',
      pubDate: pubDate || new Date().toISOString(),
      source: source || 'Manual',
      lang: lang || 'zh',
      snippet: snippet || '',
      slug: slug || '',
    })

    if (!success) {
      return NextResponse.json({ error: 'Failed to insert news item' }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'News item created' })
  } catch (err) {
    console.error('Admin news insert error:', err)
    return NextResponse.json({ error: 'Failed to create news item' }, { status: 500 })
  }
}
