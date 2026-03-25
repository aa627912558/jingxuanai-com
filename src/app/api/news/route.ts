import { NextResponse } from 'next/server'
import { getNewsData, refreshNewsCache } from '@/lib/news-data'

export const revalidate = 3600 // ISR: revalidate every hour

export async function GET() {
  try {
    // Always try to get fresh data for API response, use cache in getNewsData
    const data = await refreshNewsCache()
    return NextResponse.json(
      data,
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    )
  } catch (err) {
    console.error('News API error:', err)
    // Fallback to cached data even if refresh fails
    try {
      const data = await getNewsData()
      return NextResponse.json(data, { status: 200 })
    } catch {
      return NextResponse.json({ error: 'Failed to fetch news', news: [], total: 0, fetchedAt: '' }, { status: 500 })
    }
  }
}
