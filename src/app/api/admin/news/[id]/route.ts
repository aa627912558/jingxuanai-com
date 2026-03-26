import { NextResponse } from 'next/server'
import { isAdminRequest, adminResponse } from '@/lib/admin-auth'
import { updateNewsItem, deleteNewsItem } from '@/lib/news-data'

interface RouteParams {
  params: { id: string }
}

// PATCH /api/admin/news/[id] - Update a news item
export async function PATCH(request: Request, { params }: RouteParams) {
  if (!isAdminRequest(request)) return adminResponse()

  try {
    const body = await request.json()
    const { id } = params

    const success = await updateNewsItem(id, body)
    if (!success) {
      return NextResponse.json({ error: 'Failed to update news item' }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'News item updated' })
  } catch (err) {
    console.error('Admin news update error:', err)
    return NextResponse.json({ error: 'Failed to update news item' }, { status: 500 })
  }
}

// DELETE /api/admin/news/[id] - Delete a news item
export async function DELETE(request: Request, { params }: RouteParams) {
  if (!isAdminRequest(request)) return adminResponse()

  try {
    const { id } = params
    const success = await deleteNewsItem(id)
    if (!success) {
      return NextResponse.json({ error: 'Failed to delete news item' }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'News item deleted' })
  } catch (err) {
    console.error('Admin news delete error:', err)
    return NextResponse.json({ error: 'Failed to delete news item' }, { status: 500 })
  }
}
