import { NextResponse } from 'next/server'
import { getNewsData } from '@/lib/news-data'

export const revalidate = 3600 // ISR: revalidate every hour

export async function GET() {
  try {
    // Force refresh by calling getNewsData which checks file cache first,
    // but the file cache TTL ensures fresh-ish data
    const data = await getNewsData()
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (err) {
    console.error('News API error:', err)
    return NextResponse.json(
      { error: 'Failed to fetch news', news: [], total: 0, fetchedAt: '' },
      { status: 500 }
    )
  }
}
