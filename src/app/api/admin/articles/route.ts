import { NextResponse } from 'next/server'
import { isAdminRequest, adminResponse } from '@/lib/admin-auth'
import { getSupabaseAdmin } from '@/lib/supabase'
import { slugify } from '@/lib/slug'

export const revalidate = 0

// GET /api/admin/articles - List all articles
export async function GET(request: Request) {
  if (!isAdminRequest(request)) return adminResponse()

  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return NextResponse.json({ success: true, articles: data })
  } catch (err) {
    console.error('Admin articles list error:', err)
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}

// POST /api/admin/articles - Create a new article
export async function POST(request: Request) {
  if (!isAdminRequest(request)) return adminResponse()

  try {
    const body = await request.json()
    const { title, content, slug, source, link, lang, status } = body

    if (!title || !content) {
      return NextResponse.json({ error: 'title and content are required' }, { status: 400 })
    }

    const supabase = getSupabaseAdmin()
    const articleSlug = slug || slugify(title)

    const { error } = await supabase.from('articles').insert([{
      title,
      content,
      slug: articleSlug,
      source: source || '',
      link: link || '',
      lang: lang || 'zh',
      status: status || 'draft',
      pub_date: body.pub_date || null,
    }])

    if (error) {
      console.error('Insert article error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'Article created', slug: articleSlug })
  } catch (err) {
    console.error('Admin article create error:', err)
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 })
  }
}
