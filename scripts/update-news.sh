#!/bin/bash
cd /Users/jinsy/projects/jingxuanai-com

# 运行fetch-news.js抓取新闻
node scripts/fetch-news.js

# 提交推送
git add src/lib/news-data.json
git commit -m "chore: 更新AI资讯 $(date '+%Y-%m-%d %H:%M')" 2>/dev/null || exit 0
git push origin main 2>/dev/null || echo "git push failed"
