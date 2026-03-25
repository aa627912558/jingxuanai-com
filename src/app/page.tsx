import Script from 'next/script'
import HomePageClient from './HomePageClient'

const BASE_URL = 'https://jingxuanai-com.vercel.app'

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '精选AI工具站',
  description: '汇集全球优质AI工具，按类型分类展示，支持搜索和筛选，帮助用户快速找到合适的AI产品。',
  applicationCategory: 'BusinessApplication',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function HomePage() {
  return (
    <>
      <Script
        id="homepage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HomePageClient />
    </>
  )
}
