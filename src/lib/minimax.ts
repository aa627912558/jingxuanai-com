/**
 * MiniMax AI Summary Generator
 * Uses MiniMax Chat API to generate 100-300 word summaries for news articles
 */

const MINIMAX_API_URL = 'https://api.minimax.chat/v1/text/chatcompletion_pro'

// In-memory cache for summaries (persists during server runtime)
const summaryCache = new Map<string, { summary: string; generatedAt: string }>()

interface MiniMaxResponse {
  id: string
  choices: Array<{
    finish_reason: string
    messages: Array<{ role: string; name?: string; content: string }>
  }>
}

export async function generateSummary(title: string, snippet: string, source: string): Promise<string> {
  const cacheKey = `${title.slice(0, 60)}`
  
  // Return cached summary if it exists
  if (summaryCache.has(cacheKey)) {
    const cached = summaryCache.get(cacheKey)!
    return cached.summary
  }

  const apiKey = process.env.MINIMAX_API_KEY || process.env.MINIMAX_API_Key

  if (!apiKey) {
    // Fallback: return a truncated snippet if no API key
    return snippet.replace(/<[^>]+>/g, '').slice(0, 200) + '...'
  }

  const prompt = `你是一个专业的AI科技新闻编辑。请为以下新闻撰写一篇100-300字的中文摘要。

新闻标题：${title}
新闻来源：${source}
新闻内容片段：${snippet.replace(/<[^>]+>/g, '').slice(0, 500)}

要求：
1. 摘要必须使用中文撰写
2. 字数控制在100-300字之间
3. 概括新闻的核心内容，不要加入个人评论
4. 语言简洁专业，适合AI科技领域读者
5. 只输出摘要内容，不要加"摘要："等前缀，不要加粗或特殊格式

摘要：`

  try {
    const response = await fetch(MINIMAX_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'abab6.5s-chat',
        tokens_to_generate: 512,
        messages: [
          {
            role: 'user',
            name: '',
            content: prompt,
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('MiniMax API error:', response.status, errorText)
      throw new Error(`MiniMax API error: ${response.status}`)
    }

    const data: MiniMaxResponse = await response.json()
    const summary = data.choices?.[0]?.messages?.[0]?.content?.trim() || snippet.slice(0, 200)

    // Cache the summary
    summaryCache.set(cacheKey, {
      summary,
      generatedAt: new Date().toISOString(),
    })

    return summary
  } catch (err) {
    console.error('Failed to generate summary:', err)
    // Fallback to snippet
    return snippet.replace(/<[^>]+>/g, '').slice(0, 200) + '...'
  }
}
