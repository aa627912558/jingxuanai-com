import { NextResponse } from 'next/server'
import { isAdminRequest, adminResponse } from '@/lib/admin-auth'
import { getSupabaseAdmin } from '@/lib/supabase'
import { slugify } from '@/lib/slug'

interface RouteParams {
  params: { id: string }
}

// GET /api/admin/articles/[id] - Get a single article
export async function GET(request: Request, { params }: RouteParams) {
  if (!isAdminRequest(request)) return adminResponse()

  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) throw error
    return NextResponse.json({ success: true, article: data })
  } catch (err) {
    console.error('Admin article get error:', err)
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 })
  }
}

// PATCH /api/admin/articles/[id] - Update an article
export async function PATCH(request: Request, { params }: RouteParams) {
  if (!isAdminRequest(request)) return adminResponse()

  try {
    const body = await request.json()
    const { id } = params

    const supabase = getSupabaseAdmin()
    const updateData: Record<string, unknown> = { updated_at: new Date().toISOString() }

    if (body.title !== undefined) updateData.title = body.title
    if (body.content !== undefined) updateData.content = body.content
    if (body.slug !== undefined) updateData.slug = body.slug
    else if (body.title !== undefined) updateData.slug = slugify(body.title)
    if (body.source !== undefined) updateData.source = body.source
    if (body.link !== undefined) updateData.link = body.link
    if (body.lang !== undefined) updateData.lang = body.lang
    if (body.status !== undefined) updateData.status = body.status
    if (body.pub_date !== undefined) updateData.pub_date = body.pub_date

    const { error } = await supabase
      .from('articles')
      .update(updateData)
      .eq('id', id)

    if (error) {
      console.error('Update article error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'Article updated' })
  } catch (err) {
    console.error('Admin article update error:', err)
    return NextResponse.json({ error: 'Failed to update article' }, { status: 500 })
  }
}

// DELETE /api/admin/articles/[id] - Delete an article
export async function DELETE(request: Request, { params }: RouteParams) {
  if (!isAdminRequest(request)) return adminResponse()

  try {
    const supabase = getSupabaseAdmin()
    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', params.id)

    if (error) {
      console.error('Delete article error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'Article deleted' })
  } catch (err) {
    console.error('Admin article delete error:', err)
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 })
  }
}
