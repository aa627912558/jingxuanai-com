#!/usr/bin/env python3
"""
手动添加文章到 news-data.json
用法: python3 add-news.py "标题" "摘要" "深度分析" "标签1,标签2" "受众" "原文标题" "原文链接" "来源"
"""

import json
import sys
from datetime import datetime

NEWS_FILE = '/Users/jinsy/projects/jingxuanai-com/public/news-data.json'

def slugify(text):
    import re
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_-]+', '-', text)
    text = re.sub(r'^-+|-+$', '')
    return text[:80]

def add_article(title, summary, deep_analysis, tags_str, target_audience, original_title, link, source):
    with open(NEWS_FILE, 'r') as f:
        data = json.load(f)
    
    tags = [t.strip() for t in tags_str.split(',')]
    pub_date = datetime.utcnow().strftime('%a, %d %b %Y %H:%M:%S +0000')
    
    new_article = {
        "title": title,
        "summary": summary,
        "deep_analysis": deep_analysis,
        "tags": tags,
        "target_audience": target_audience,
        "original_title": original_title,
        "original_snippet": "",
        "link": link,
        "pubDate": pub_date,
        "source": source,
        "lang": "zh"
    }
    
    # 插入到最前面
    data['news'].insert(0, new_article)
    data['total'] = len(data['news'])
    data['fetchedAt'] = datetime.utcnow().isoformat() + 'Z'
    
    with open(NEWS_FILE, 'w') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"✅ 已添加: {title}")

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == '--list':
        with open(NEWS_FILE, 'r') as f:
            data = json.load(f)
        print(f"当前共 {data['total']} 篇文章:")
        for i, a in enumerate(data['news']):
            print(f"  {i+1}. {a['title'][:50]}")
    else:
        print("用法: python3 add-news.py --list  (查看现有文章)")
