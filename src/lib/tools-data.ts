import { AiTool } from '@/types'

export const TOOLS_DATA: AiTool[] = [
  {
    id: "elevenlabs",
    slug: "elevenlabs",
    name: "ElevenLabs",
    website: "https://elevenlabs.io",
    description: "AI语音合成与配音，支持逼真多语言TTS声音生成",
    type: "Audio/TTS",
    affiliateUrl: "https://impact.com/brand-profile/elevenlabs/",
    commissionRate: "首单$5-$25 + 续订20-30%",
    features: [
      "行业领先的语音克隆技术，仅需少量音频样本即可复制真实人声",
      "支持29种语言和120种以上声音风格，覆盖全球主流市场",
      "强大的情绪控制能力，可调节语气的快乐、悲伤、兴奋等状态",
      "提供API接口，支持与企业系统和自动化工作流无缝集成",
      "内置音效库和背景音乐，适合有声书、游戏和视频配音场景"
    ],
    usage_guide: "第一步：注册与登录\\n访问 elevenlabs.io 并注册账号。\\n\\n第二步：创建语音\\n使用预设声音：在 Voice Library 中选择预设声音，点击试听后使用。克隆自己的声音：进入 Voice Design，选择语言、性别、年龄段，调整情绪和风格参数后生成。声音克隆（专业版）：上传至少30分钟高质量音频，系统训练完成后即可使用克隆声音。\\n\\n第三步：生成配音\\n进入 Speech Synthesis 页面，输入需要转语音的文本，选择已保存的声音，调整语速和音调参数，点击 Generate 生成音频文件。\\n\\n第四步：导出使用\\n支持下载 MP3、WAV 等格式。API 用户可在 Dashboard 获取 API Key 实现自动化配音。",
    use_cases: [
      "内容创作者：YouTube视频配音、有声书制作、播客片段",
      "企业用户：产品视频本地化、客服语音IVR、培训课件配音",
      "独立开发者：游戏NPC对话、AI助手语音、语音交互应用"
    ],
    related_tools: ["speechify", "play-ht", "murf-ai"],
  },
  {
    id: "veed",
    slug: "veed",
    name: "VEED",
    website: "https://www.veed.io",
    description: "在线AI视频编辑工具，快速生成字幕、配音和视频特效",
    type: "Video Generation",
    affiliateUrl: "https://www.veed.io/affiliate",
    commissionRate: "首单20% + 续订20%",
    features: [
      "AI自动字幕：上传视频后自动识别语音生成字幕，准确率高达95%",
      "支持50+语言实时翻译，一键将字幕翻译成目标语言",
      "内置丰富素材库：贴纸、特效、转场、背景音乐一应俱全",
      "屏幕录制功能，浏览器内完成录制-编辑-发布全流程",
      "团队协作功能，支持多人同时编辑同一个视频项目"
    ],
    usage_guide: "第一步：上传视频\\n打开 veed.io，点击 Upload Video 或直接拖入文件。\\n\\n第二步：AI字幕制作\\n点击左侧 Subtitles - Auto Generate，生成后可手动校对错别字。\\n\\n第三步：添加配音\\n点击左侧 Audio - Record 直接录音，或上传本地音频文件。\\n\\n第四步：视频特效\\nTemplates：选择预设模板；Stickers：添加动态贴纸；Text：添加文字元素。\\n\\n第五步：导出\\n点击 Export，选择分辨率（720p/1080p/4K）。",
    use_cases: [
      "社媒短视频制作",
      "跨境电商视频字幕翻译",
      "在线教育内容本地化"
    ],
    related_tools: ["kapwing", "flexclip", "invideo"],
  },
  {
    id: "murf-ai",
    slug: "murf-ai",
    name: "Murf AI",
    website: "https://murf.ai",
    description: "专业AI语音生成器，适用于视频旁白、广告和电子学习",
    type: "Audio/TTS",
    affiliateUrl: "https://murf.ai/partner-with-us/affiliate",
    commissionRate: "20% x 24个月",
    features: [
      "支持40+语言和120种以上音色，本地化配音无障碍",
      "专业录音室级别音质，适用于商业广告和正式场合",
      "可上传脚本或PPT，自动匹配旁白与演示内容",
      "内置Studio风格编辑器，支持停顿、重音、多人对话编排",
      "提供声音API，支持WordPress、Articulate等平台插件集成"
    ],
    usage_guide: "第一步：创建项目\\n点击 Create New Project，选择项目类型。\\n\\n第二步：输入文本\\n在左侧编辑器中粘贴文本，或上传 Word/PDF/PPT。\\n\\n第三步：选择声音\\n点击 Voice 面板，选择语言和声音类型（男声/女声/中性），试听满意后选中。\\n\\n第四步：调整细节\\nPause/Emphasis/Speed/Pitch 调整。\\n\\n第五步：添加背景音乐\\n点击 Background Audio，从内置音乐库选择。\\n\\n第六步：导出\\nMP3/WAV/MP4（带画面），点击 Generate。",
    use_cases: [
      "广告视频配音",
      "在线课程配音",
      "企业培训视频"
    ],
    related_tools: ["elevenlabs", "speechify", "play-ht"],
  },
  {
    id: "synthesia",
    slug: "synthesia",
    name: "Synthesia",
    website: "https://www.synthesia.io",
    description: "AI数字人视频生成，输入文字即可生成专业讲解视频",
    type: "Video Generation",
    affiliateUrl: "https://www.synthesia.io/partners/affiliates",
    commissionRate: "25%佣金",
    features: [
      "无需拍摄，AI数字人代替真人出镜，节省拍摄成本",
      "140+数字人形象，覆盖不同年龄、肤色、职业着装",
      "支持60+语言配音，一键本地化，适应全球市场",
      "内置PPT转视频功能，上传幻灯片自动生成讲解视频",
      "自定义数字人形象，打造品牌专属虚拟代言人"
    ],
    usage_guide: "第一步：创建视频项目\\n点击 Create New Video，选择视频尺寸（横版/竖版/方形），输入标题。\\n\\n第二步：选择数字人\\n在右侧面板 AI Avatars 中选择数字人，点击数字人预览效果后拖入场景。\\n\\n第三步：撰写讲解脚本\\n在时间线上添加 Scene，每个场景对应一段讲解文字，数字人自动对口型。\\n\\n第四步：设置配音\\n默认使用文字转语音，选择语言和声音风格。\\n\\n第五步：导出\\n点击 Preview 预览，满意后 Export MP4。",
    use_cases: [
      "企业培训视频",
      "跨境营销多语言内容",
      "社媒批量生产"
    ],
    related_tools: ["heygen", "invideo", "fliki"],
  },
  {
    id: "writesonic",
    slug: "writesonic",
    name: "Writesonic",
    website: "https://writesonic.com",
    description: "AI写作助手，快速生成文章、博客、广告文案和社交内容",
    type: "Writing",
    affiliateUrl: "https://writesonic.com",
    commissionRate: "30%续订佣金",
    features: [
      "多功能AI写作平台，涵盖博客文章、广告文案、社交媒体、产品描述等场景",
      "内置SEO优化工具，写完即可查看关键词密度和优化建议",
      "支持25+种语言写作，中文内容生成质量优秀",
      "Chatsonic对话写作模式，支持实时联网获取最新信息",
      "Brand Voice功能，学习并保持品牌调性一致的写作风格"
    ],
    usage_guide: "注册writesonic.com。\\n\\n博客文章生成：Article Writer - 输入主题/关键词 - 生成大纲 - 生成全文。\\n\\n广告文案：选 Facebook/Google Ads 模板 - 输入产品信息 - 生成。\\n\\n社媒内容：Social Media 模块 - 选平台 - 生成内容。\\n\\nChatsonic：相当于有联网能力的ChatGPT，支持实时搜索最新信息。",
    use_cases: [
      "内容营销",
      "社媒运营",
      "产品介绍文案"
    ],
    related_tools: ["jasper", "copy-ai", "quillbot"],
  },
  {
    id: "notion",
    slug: "notion",
    name: "Notion",
    website: "https://www.notion.so",
    description: "AI增强的笔记与协作平台，集成知识库、任务管理和数据库",
    type: "Productivity",
    affiliateUrl: "https://www.notion.so/affiliates",
    commissionRate: "首年50%",
    features: [
      "All-in-One工作空间：笔记、文档、任务、数据库、Wiki一体化管理",
      "强大的数据库功能，支持看板、表格、日历、画廊等多种视图",
      "AI助手内置，直接在文档中调用AI生成、总结、翻译内容",
      "丰富的模板库，覆盖项目管理、个人成长、团队协作等场景",
      "支持API和自动化集成，可连接Slack、Google Drive、GitHub等100+工具"
    ],
    usage_guide: "注册notion.so。\\n\\n新建页面：+ - Page/Database。\\n\\n块编辑：输入 / 打开块菜单，拖拽调整顺序。\\n\\n数据库：Table/Board/Calendar/Gallery视图切换。\\n\\nAI：选中文字 - Ask AI - 总结/润色/翻译。",
    use_cases: [
      "个人知识管理",
      "团队协作",
      "项目管理"
    ],
    related_tools: ["canva", "grammarly", "surfer-seo"],
  },
  {
    id: "surfer-seo",
    slug: "surfer-seo",
    name: "Surfer SEO",
    website: "https://surferseo.com",
    description: "AI SEO分析工具，优化内容结构与关键词布局提升搜索排名",
    type: "Productivity",
    affiliateUrl: "https://www.surferseo.com/affiliate-program",
    commissionRate: "25%续佣 + $5/试用",
    features: [
      "Content Editor 实时编辑器，写文章时实时显示SEO评分和建议",
      "SERP分析，分析首页排名页面的关键词布局、反向链接等数据",
      "Keyword Research工具，发现高搜索量、低竞争度的长尾关键词",
      "内链建议，自动推荐文章中应添加的内部链接",
      "AI Outline生成，输入关键词自动生成文章大纲结构"
    ],
    usage_guide: "注册surferseo.com。\\n\\nContent Editor：输入关键词，实时查看 Content Score（满分100），绿色达标。\\n\\nSERP Analysis：分析首页竞争对手内容。\\n\\nKeyword Research：找低难度高搜索量关键词。\\n\\nAI Outline：输入主题生成文章大纲。",
    use_cases: [
      "SEO优化",
      "内容营销",
      "独立博客"
    ],
    related_tools: ["writesonic", "jasper", "quillbot"],
  },
  {
    id: "remove-bg",
    slug: "remove-bg",
    name: "remove.bg",
    website: "https://www.remove.bg",
    description: "AI一键去除图片背景，保留主体轮廓精细边缘处理",
    type: "Image Generation",
    affiliateUrl: "https://www.remove.bg/affiliates",
    commissionRate: "15%佣金",
    features: [
      "一键自动去背景，5秒内完成，无需任何操作技巧",
      "精细边缘处理技术，精确保留头发、毛发、烟雾等复杂边缘",
      "支持人像、产品、动物、车辆等多种主体类型",
      "提供API接口，支持与企业设计工作流和电商平台集成",
      "内置图片编辑功能：换背景、添加阴影、调色等一站式完成"
    ],
    usage_guide: "上传：remove.bg 拖入图片，3-5秒自动完成PNG透明背景。\\n\\n换背景：Edit - Change Background。\\n\\n加阴影：Effects - 选阴影类型（自然阴影/投射阴影/边缘光）。\\n\\nAPI：curl -H API-Key -F image_file=@photo.jpg api.remove.bg",
    use_cases: [
      "电商产品图",
      "证件照换背景",
      "设计素材抠图"
    ],
    related_tools: ["photoroom", "canva", "pixlr"],
  },
  {
    id: "flexclip",
    slug: "flexclip",
    name: "FlexClip",
    website: "https://www.flexclip.com",
    description: "在线AI视频制作平台，模板丰富，支持文字转视频和配音",
    type: "Video Generation",
    affiliateUrl: "https://www.flexclip.com/partner",
    commissionRate: "比例依协议",
    features: [
      "5000+预设视频模板，覆盖宣传片、幻灯片、社交媒体等场景",
      "AI文字转视频：输入文字描述自动匹配素材生成视频",
      "内置AI配音功能，输入文字直接生成配音，无需录音设备",
      "支持1分钟转录视频内容并生成字幕",
      "团队协作功能，支持多人同时编辑和评论"
    ],
    usage_guide: "Make a Video - 选尺寸（横版16:9/竖版9:16/方形1:1）。\\n\\nTemplates - Customize。\\n\\nAI文字转视频：AI Tools - Text to Video。\\n\\nAI配音：AI Voiceover - 选语言/风格 - 添加到时间线。\\n\\nAI字幕：Auto Subtitle。\\n\\nExport - 选择分辨率。",
    use_cases: [
      "电商视频",
      "企业宣传片",
      "YouTube视频"
    ],
    related_tools: ["invideo", "kapwing", "veed"],
  },
  {
    id: "invideo",
    slug: "invideo",
    name: "InVideo",
    website: "https://invideo.io",
    description: "AI视频生成平台，文字转视频、模板丰富、操作简单",
    type: "Video Generation",
    affiliateUrl: "https://invideo.io/affiliate-program",
    commissionRate: "比例依协议",
    features: [
      "6000+专业视频模板，覆盖YouTube、广告、幻灯片等场景",
      "AI文字转视频，输入博客文章URL或文字自动生成视频",
      "内置500万+免版权素材库，图片/视频/音乐可直接使用",
      "自动生成字幕并支持翻译成50+语言",
      "品牌工具包：预设LOGO、配色、字体，保持品牌一致性"
    ],
    usage_guide: "选 Templates/Blank/AI-Powered。\\n\\nAI Scripts 或粘贴URL，AI生成视频脚本和素材。\\n\\nAuto Subtitle - 翻译50+语言。\\n\\nExport - 分享到 YouTube/Facebook/Instagram。",
    use_cases: [
      "内容营销视频化",
      "社媒短视频",
      "跨境电商视频"
    ],
    related_tools: ["flexclip", "pictory", "fliki"],
  },
  {
    id: "quillbot",
    slug: "quillbot",
    name: "QuillBot",
    website: "https://quillbot.com",
    description: "AI写作润色与改写工具，提供同义词替换和句式优化",
    type: "Writing",
    affiliateUrl: "https://quillbot.com",
    commissionRate: "标准SaaS佣金",
    features: [
      "Paraphraser改写模式，支持7种改写风格（标准、正式、创意等）",
      "Grammar Checker语法检查，实时纠正英语语法、拼写和标点错误",
      "Co-Writer综合写作模式，AI辅助从头脑风暴到完稿的全流程",
      "Summarizer摘要生成，输入文章或粘贴URL快速生成摘要",
      "Translator翻译模式，支持45+语言互译"
    ],
    usage_guide: "Paraphraser：粘贴文本 - 选风格（Standard/Formal/Simple等）- Synonym 滑块控制幅度。\\n\\nGrammar Checker：Apply 接受修改。\\n\\nSummarizer：粘贴URL/文本 - 调整长度。\\n\\nChrome扩展在任意网页使用。",
    use_cases: [
      "英语写作润色",
      "学生论文改写",
      "内容编辑"
    ],
    related_tools: ["grammarly", "writesonic", "jasper"],
  },
  {
    id: "jasper",
    slug: "jasper",
    name: "Jasper",
    website: "https://www.jasper.ai",
    description: "企业级AI内容生成平台，支持品牌声音定制和批量创作",
    type: "Writing",
    affiliateUrl: "https://www.jasper.ai",
    commissionRate: "25-30%续佣",
    features: [
      "企业级AI写作，支持团队协作和品牌声音（Brand Voice）定制",
      "50+内容模板，覆盖博客、广告、邮件、社交媒体等场景",
      "Surfer SEO集成，生成内容自动优化SEO结构",
      "支持26种语言，适合全球化内容生产",
      "内置Chrome扩展，随时在任何网页调用AI写作能力"
    ],
    usage_guide: "注册jasper.ai。\\n\\nBrand Voice：Brand - Add a Brand - 上传品牌样本。\\n\\n模板：Dashboard - Templates - Generate。\\n\\nBoss Mode：Editor - 自然语言指令 - /快捷指令调整。\\n\\nRecipes：自动化工作流套用。",
    use_cases: [
      "企业营销",
      "内容代理",
      "博客批量生产"
    ],
    related_tools: ["writesonic", "copy-ai", "surfer-seo"],
  },
  {
    id: "copy-ai",
    slug: "copy-ai",
    name: "Copy.ai",
    website: "https://www.copy.ai",
    description: "AI文案生成工具，覆盖营销、销售和运营全场景文案需求",
    type: "Writing",
    affiliateUrl: "https://www.copy.ai",
    commissionRate: "25%续佣",
    features: [
      "90+内容类别，覆盖营销文案、销售邮件、社交媒体、产品描述等",
      "Infobase功能，将品牌信息整理成知识库，生成内容时自动调用",
      "支持95+种语言，多语言内容一键生成",
      "工作流（Workflow）功能，将多个文案任务串联成自动化流程",
      "提供API接口，支持与企业CRM、CMS系统集成"
    ],
    usage_guide: "注册copy.ai。\\n\\n模板：Library - 选模板 - 填信息 - Create Content。\\n\\nInfobase：添加品牌故事/卖点/受众，生成时自动参考。\\n\\nWorkflows：串联任务（产品名称 - 产品描述 - 广告）一次生成全套内容。",
    use_cases: [
      "销售邮件",
      "产品落地页",
      "运营文案"
    ],
    related_tools: ["jasper", "writesonic", "anyword"],
  },
  {
    id: "rytr",
    slug: "rytr",
    name: "Rytr",
    website: "https://www.rytr.me",
    description: "经济实惠的AI写作助手，支持30+语言和20+写作场景",
    type: "Writing",
    affiliateUrl: "https://www.rytr.me",
    commissionRate: "30%续佣",
    features: [
      "价格亲民，个人版免费额度充足，适合个人用户和小型团队",
      "支持30+语言，中文支持良好",
      "20+写作场景模板，覆盖博客、邮件、广告、歌词等",
      "内置查重工具，生成内容后可直接检查原创度",
      "多风格选项（正式/休闲/说服/简洁），满足不同场景需求"
    ],
    usage_guide: "注册rytr.me。\\n\\n选场景：博客/邮件/广告/社媒。\\n\\n选语言/风格：正式/休闲/说服/简洁。\\n\\n输入主题 - Ryse Me 生成。\\n\\n查重：Check Plagiarism。",
    use_cases: [
      "个人博主",
      "电商卖家",
      "Freelancer"
    ],
    related_tools: ["quillbot", "copy-ai", "anyword"],
  },
  {
    id: "pictory",
    slug: "pictory",
    name: "Pictory",
    website: "https://www.pictory.ai",
    description: "AI文章转视频工具，自动从长文本提取精彩片段生成短视频",
    type: "Video Generation",
    affiliateUrl: "https://www.pictory.ai",
    commissionRate: "比例依协议",
    features: [
      "文章转视频：粘贴文章URL或文本，自动提取核心内容生成视频",
      "从长视频中提取精彩片段（Highlights），适合做短视频二次传播",
      "自动生成字幕并支持多语言翻译",
      "内置品牌工具包，自动添加LOGO和水印",
      "基于AI选择最相关的素材片段，保持内容逻辑连贯"
    ],
    usage_guide: "文章转视频：Article to Video - 粘贴URL/文本 - AI提取内容 - 选模板 - 导出。\\n\\n视频Highlights：上传长视频 - AI生成片段 - 选片段 - 导出。\\n\\n字幕翻译：Captions - Translate。",
    use_cases: [
      "内容复用",
      "webinar传播",
      "企业培训"
    ],
    related_tools: ["invideo", "fliki", "kapwing"],
  },
  {
    id: "fliki",
    slug: "fliki",
    name: "Fliki",
    website: "https://www.fliki.ai",
    description: "AI文字转视频+配音平台，支持1000+逼真AI voices",
    type: "Video Generation",
    affiliateUrl: "https://www.fliki.ai",
    commissionRate: "比例依协议",
    features: [
      "文字转视频：输入脚本直接生成带画面和配音的完整视频",
      "1000+ AI voices，覆盖75+语言和多种口音风格",
      "内置丰富素材库，自动根据脚本内容匹配相关视频/图片素材",
      "支持从博客文章URL一键导入，自动生成视频内容",
      "提供嘴型同步功能，AI数字人出镜时口型与配音同步"
    ],
    usage_guide: "Create New Video - 选类型 - 输脚本 - 选语言/声音 - 导出。\\n\\n博客转视频：Blog to Video - 粘贴URL - AI自动生成。\\n\\nAI Avatar：选数字人 - 输入脚本 - 口型同步。",
    use_cases: [
      "内容视频化",
      "多语言营销",
      "教育视频"
    ],
    related_tools: ["invideo", "synthesia", "pictory"],
  },
  {
    id: "heygen",
    slug: "heygen",
    name: "HeyGen",
    website: "https://www.heygen.com",
    description: "AI数字人视频生成，支持多语言和个性化虚拟形象创建",
    type: "Video Generation",
    affiliateUrl: "https://www.heygen.com",
    commissionRate: "比例依协议",
    features: [
      "200+ AI数字人形象，支持全身和半身出镜",
      "照片数字人（Photo Avatar）：上传照片生成会说话的数字人",
      "工作室录制：上传真人视频训练专属数字人形象",
      "多语言配音：支持40+语言和口音，一键本地化",
      "丰富的视频模板，可快速套用生成各类营销视频"
    ],
    usage_guide: "Create Video - 选模板/空白 - 选数字人 - 输入脚本 - 导出。\\n\\nPhoto Avatar：上传照片 - 输入脚本 - 数字人对口型。\\n\\nStudio Avatar：上传15-30分钟视频 - 训练后生成专属形象。\\n\\nDubbing：翻译40+语言。",
    use_cases: [
      "品牌代言",
      "跨境电商",
      "内容创作"
    ],
    related_tools: ["synthesia", "fliki", "descript"],
  },
  {
    id: "speechify",
    slug: "speechify",
    name: "Speechify",
    website: "https://speechify.com",
    description: "AI文字转语音阅读应用，支持网页、文档和电子书朗读",
    type: "Audio/TTS",
    affiliateUrl: "https://speechify.com",
    commissionRate: "30%续佣",
    features: [
      "支持多格式内容朗读：网页、文档（PDF/TXT/DOCX）、电子书",
      "30+高质量AI声音可选，支持调节朗读速度和音调",
      "跨平台支持：网页端、手机APP（iOS/Android）、Chrome扩展",
      "文字高亮跟随，同步显示当前朗读位置",
      "书签功能，随时标记和跳转重要段落"
    ],
    usage_guide: "注册speechify.com或下载APP。\\n\\nChrome扩展：浏览网页点击扩展图标朗读。\\n\\n文档：Upload Files - PDF/TXT/DOCX。\\n\\n调速度：0.5x - 3x。\\n\\n高亮跟随，书签标记。",
    use_cases: [
      "通勤学习",
      "视障用户辅助",
      "快速浏览长文"
    ],
    related_tools: ["elevenlabs", "play-ht", "murf-ai"],
  },
  {
    id: "play-ht",
    slug: "play-ht",
    name: "Play.ht",
    website: "https://play.ht",
    description: "AI文本转语音API，支持824种声音和135种语言",
    type: "Audio/TTS",
    affiliateUrl: "https://play.ht",
    commissionRate: "比例依协议",
    features: [
      "824种AI声音，覆盖135种语言和多种方言",
      "提供语音克隆功能，几分钟音频即可复制真实人声",
      "强大的情感控制：可调整快乐、悲伤、兴奋等多种风格",
      "提供实时语音合成API，适合嵌入应用和网站",
      "内置语音预设场景：新闻播报、视频配音、有声书等"
    ],
    usage_guide: "注册play.ht - Dashboard。\\n\\n输入文本 - 选语言/声音 - Generate - Download。\\n\\nAPI：获取 API Key - REST API 调用。\\n\\n语音克隆：Voice Cloning - 上传5分钟音频 - 训练后使用。",
    use_cases: [
      "开发者集成",
      "播客制作",
      "有声书"
    ],
    related_tools: ["elevenlabs", "speechify", "murf-ai"],
  },
  {
    id: "descript",
    slug: "descript",
    name: "Descript",
    website: "https://www.descript.com",
    description: "AI视频和播客编辑工具，集视频剪辑、转录和配音于一体",
    type: "Video Generation",
    affiliateUrl: "https://descript.partnerstack.com",
    commissionRate: "约20%终身佣金",
    features: [
      "像编辑文档一样编辑视频和播客，颠覆传统时间线编辑方式",
      "AI自动转录，准确率高，支持多语言",
      "内置AI配音（Overdub），可修改录好的音频文字内容",
      "屏幕录制内置，自动转录并生成字幕",
      "发布到YouTube、Spotify等平台一键直达"
    ],
    usage_guide: "登录 - 上传视频/录音。\\n\\nAI自动转录，文字显示在时间线下。\\n\\n直接编辑文字，同步修改视频内容。\\n\\nOverdub：选中词句 - AI克隆声音替换。\\n\\nPublish - 选择平台。",
    use_cases: [
      "播客制作",
      "视频内容修正",
      "创作者工具"
    ],
    related_tools: ["heygen", "kapwing", "veed"],
  },
  {
    id: "canva",
    slug: "canva",
    name: "Canva",
    website: "https://www.canva.com",
    description: "AI设计平台，图片海报、演示文稿和社交媒体图文一键生成",
    type: "Image Generation",
    affiliateUrl: "https://www.canva.com/affiliates",
    commissionRate: "20-30%",
    features: [
      "10000+免费设计模板，覆盖海报、Logo、演示文稿、社交媒体等",
      "AI设计助手（Magic Design），输入描述自动生成设计稿",
      "AI图片生成器，输入文字描述生成图片",
      "品牌套件功能，统一管理LOGO、配色、字体",
      "团队协作和评论，支持多人同时编辑"
    ],
    usage_guide: "登录canva.com。\\n\\n选类型 - Templates - Customize。\\n\\nAI生成：Magic Design - 输入描述。\\n\\nAI图片：Apps - Text to Image。\\n\\nBrand Kit：上传LOGO/配色。\\n\\nExport：PNG/JPG/PDF。",
    use_cases: [
      "市场运营",
      "创业公司",
      "教育工作者"
    ],
    related_tools: ["remove-bg", "photoroom", "kittl"],
  },
  {
    id: "adobe-cc",
    slug: "adobe-cc",
    name: "Adobe Creative Cloud",
    website: "https://www.adobe.com",
    description: "Adobe全家桶，Photoshop、Figma等创意工具AI增强版",
    type: "Image Generation",
    affiliateUrl: "https://www.adobe.com/affiliates.html",
    commissionRate: "月订85%/年订8.33%",
    features: [
      "Photoshop AI：神经滤镜、智能抠图、一键去背景AI增强版",
      "Firefly AI：文字生成图片、生成填充，设计师友好",
      "Premiere Pro AI：自动剪辑、语音转字幕、AI色彩匹配",
      "Illustrator AI：文字矢量化、智能描摹",
      "全平台同步，团队资产库共享"
    ],
    usage_guide: "订阅adobe.com - Creative Cloud。\\n\\nPS AI：Filter - Neural Filters - 智能修复/风格迁移。\\n\\nFirefly：文字生成图片，生成填充。\\n\\nPr Pro：Auto Reframe 自动调整画面比例。",
    use_cases: [
      "专业设计师",
      "企业创意团队",
      "内容创作者"
    ],
    related_tools: ["canva", "remove-bg", "leonardo-ai"],
  },
  {
    id: "grammarly",
    slug: "grammarly",
    name: "Grammarly",
    website: "https://www.grammarly.com",
    description: "AI英语写作助手，语法纠错、风格建议和语气优化",
    type: "Writing",
    affiliateUrl: "https://www.grammarly.com/",
    commissionRate: "约$20-50/单",
    features: [
      "实时语法和拼写检查，纠正英语写作中的错误",
      "风格建议：根据写作场景（商务/学术/日常）提供专业建议",
      "语气检测：分析文本语气，提示是否过于正式/随意/消极等",
      "AI润色：一键优化句式，提升文章可读性",
      "跨平台支持：网页端、桌面APP、Chrome扩展、各大办公软件插件"
    ],
    usage_guide: "注册grammarly.com - 安装扩展。\\n\\nDashboard 编辑器 - 实时查看建议。\\n\\nChrome扩展：Gmail/Google Docs/Twitter 直接使用。\\n\\n桌面APP：导入Word文档检查。",
    use_cases: [
      "英语写作辅助",
      "职场邮件",
      "学生论文"
    ],
    related_tools: ["quillbot", "notion", "copy-ai"],
  },
  {
    id: "leonardo-ai",
    slug: "leonardo-ai",
    name: "Leonardo AI",
    website: "https://leonardo.ai",
    description: "AI图像生成平台，专注游戏和创意内容，支持风格控制",
    type: "Image Generation",
    affiliateUrl: "https://leonardo.ai",
    commissionRate: "比例依协议",
    features: [
      "游戏资产生成：角色、道具、场景、UI，专门针对游戏内容创作者",
      "风格控制模型（Prevalent/Leonardo/Pixel Art等），精准把控输出风格",
      "Canvas编辑：局部重绘、元素添加、图像扩展全能支持",
      "负面提示词优化，自动分析提示词质量并给出改进建议",
      "社区画廊：浏览和复用其他用户的优秀提示词和创作"
    ],
    usage_guide: "注册leonardo.ai。\\n\\n输入英文提示词 - 选模型 - Generate。\\n\\nCanvas：Inpaint 局部重绘，Outpaint 延展边缘。\\n\\nLoRA：Models 页面下载风格LoRA，生成时启用。",
    use_cases: [
      "游戏开发",
      "独立创作",
      "设计灵感"
    ],
    related_tools: ["tensor-art", "kittl", "canva"],
  },
  {
    id: "photoroom",
    slug: "photoroom",
    name: "PhotoRoom",
    website: "https://www.photoroom.com",
    description: "AI产品图编辑工具，一键生成商业级产品展示图",
    type: "Image Generation",
    affiliateUrl: "https://www.photoroom.com",
    commissionRate: "比例依协议",
    features: [
      "一键去背景，3秒完成，自动识别人像和产品",
      "AI背景生成：输入文字描述，为产品自动匹配合成商业级背景",
      "批量处理：一次处理多张图片，适合电商批量上传",
      "品牌模板：预设品牌水印、边框、LOGO，一键套用",
      "API支持：支持电商平台和独立站批量自动化集成"
    ],
    usage_guide: "上传：photoroom.com - 上传产品图，自动去除背景。\\n\\n换背景：Change Background - 输入描述（modern kitchen等）- AI生成并合成。\\n\\n批量：Batch - 上传多图 - 统一处理。\\n\\nExport PNG/JPG。",
    use_cases: [
      "电商卖家",
      "亚马逊卖家",
      "Shopify商家"
    ],
    related_tools: ["remove-bg", "canva", "pixlr"],
  },
  {
    id: "pixlr",
    slug: "pixlr",
    name: "Pixlr",
    website: "https://www.pixlr.com",
    description: "在线AI图像编辑器，PS替代品，支持AI生成和修图",
    type: "Image Generation",
    affiliateUrl: "https://www.pixlr.com",
    commissionRate: "比例依协议",
    features: [
      "在线图像编辑器，无需下载，打开浏览器即可使用",
      "AI增强功能：智能修图、一键磨皮、背景替换",
      "AI图像生成（Pixlr AI），输入描述生成图片",
      "批处理工具：批量调整图片大小、添加水印",
      "丰富的滤镜和特效，支持图层操作"
    ],
    usage_guide: "打开pixlr.com - Pixlr E（高级版）/ Pixlr X（简易版）。\\n\\nAI修图：AI Enhance - 自动优化。\\n\\nAI背景：Remove/Change Background。\\n\\nAI生成：AI Generator - 输入描述。\\n\\nExport：PNG/JPG/WebP。",
    use_cases: [
      "日常修图",
      "电商美工",
      "社媒图文"
    ],
    related_tools: ["canva", "remove-bg", "photoroom"],
  },
  {
    id: "anyword",
    slug: "anyword",
    name: "Anyword",
    website: "https://www.anyword.com",
    description: "AI数据驱动文案生成，优化内容转化率的营销文案工具",
    type: "Writing",
    affiliateUrl: "https://www.anyword.com",
    commissionRate: "比例依协议",
    features: [
      "数据驱动的AI文案：基于历史表现数据优化文案转化率",
      "Predictive Score（预测评分）：AI预测文案发布后的点击率和转化率",
      "支持多渠道文案生成：广告、邮件、落地页、社交媒体",
      "Brand Voice学习，生成符合品牌调性的内容",
      "A/B测试报告，追踪不同文案的实际表现差异"
    ],
    usage_guide: "注册anyword.com。\\n\\n建项目：选文案类型（Facebook/Google/Email等）。\\n\\n输信息：产品名称/卖点/受众。\\n\\n生成文案：Generate - 每个版本有 Predictive Score。\\n\\n测试：A/B测试 - 查看实际表现报告。",
    use_cases: [
      "广告优化师",
      "增长团队",
      "电商运营"
    ],
    related_tools: ["copy-ai", "jasper", "writesonic"],
  },
  {
    id: "copymatic",
    slug: "copymatic",
    name: "Copymatic",
    website: "https://www.copymatic.ai",
    description: "AI长文章生成器，支持SEO优化和批量内容生产",
    type: "Writing",
    affiliateUrl: "https://www.copymatic.ai",
    commissionRate: "比例依协议",
    features: [
      "AI长文章生成，支持SEO优化，一次性生成1000-3000字完整文章",
      "内置SEO工具：关键词密度检测、meta描述生成",
      "图片生成集成：AI为文章自动配图",
      "多语言支持：支持英文、中文等多语言内容生成",
      "网站文案生成：落地页、关于我们、服务介绍等页面一键生成"
    ],
    usage_guide: "注册copymatic.ai。\\n\\n文章：AI Article Writer - 主题/关键词 - 选长度 - Write Article。\\n\\nSEO：SEO Tools - 查关键词密度/H2分布。\\n\\n落地页：Website Copy - 选页面类型 - 生成。",
    use_cases: [
      "内容营销",
      "跨境电商文案",
      "联盟营销"
    ],
    related_tools: ["writesonic", "jasper", "surfer-seo"],
  },
  {
    id: "kittl",
    slug: "kittl",
    name: "Kittl",
    website: "https://www.kittl.com",
    description: "AI设计平台，支持图像生成、矢量设计和插画创作",
    type: "Image Generation",
    affiliateUrl: "https://www.kittl.com/@affiliate",
    commissionRate: "比例依协议",
    features: [
      "AI图像生成：输入描述生成高质量插画和设计素材",
      "矢量编辑器：内置完整矢量编辑工具，可直接制作Logo和图标",
      "预设模板：大量设计模板一键套用，支持自定义",
      "免版权素材库：图片、图标、背景等可直接商用",
      "品牌套件：保存品牌配色、字体、元素，保持设计一致性"
    ],
    usage_guide: "注册kittl.com。\\n\\nAI生成：AI Images - 输入描述 - 选风格。\\n\\n矢量设计：打开编辑器，使用矢量工具直接绘制Logo、图标、贴纸。\\n\\n模板套用：Templates - Customize。\\n\\n导出：PNG/SVG/PDF。",
    use_cases: [
      "Merch设计师",
      "独立品牌",
      "内容创作者插画"
    ],
    related_tools: ["canva", "leonardo-ai", "pixlr"],
  },
  {
    id: "kapwing",
    slug: "kapwing",
    name: "Kapwing",
    website: "https://www.kapwing.com",
    description: "在线AI视频编辑器，支持字幕生成、视频剪辑和协作",
    type: "Video Generation",
    affiliateUrl: "https://www.kapwing.com",
    commissionRate: "比例依协议",
    features: [
      "在线视频编辑器，无需下载，打开浏览器即可编辑",
      "AI自动字幕：上传视频自动生成并识别字幕，准确率高",
      "视频转GIF：一键将视频片段转换为GIF动画",
      "团队协作：多人同时编辑同一视频项目，实时评论",
      "丰富的素材库：贴纸、转场、背景音乐、字体可直接使用"
    ],
    usage_guide: "创建kapwing.com - Create New Project。\\n\\n字幕：Subtitles - Auto Generate。\\n\\n剪辑：时间线编辑，添加贴纸/音乐/转场。\\n\\n协作：Share - 邀请成员 - 实时协作。\\n\\nExport Video - 720p/1080p。",
    use_cases: [
      "社媒剪辑",
      "团队协作",
      "内容二次分发"
    ],
    related_tools: ["veed", "flexclip", "pictory"],
  },
  {
    id: "kits-ai",
    slug: "kits-ai",
    name: "Kits.ai",
    website: "https://www.kits.ai",
    description: "AI音乐生成和声音克隆平台，创作无版权音乐",
    type: "Audio/TTS",
    affiliateUrl: "https://www.kits.ai",
    commissionRate: "比例依协议",
    features: [
      "AI音乐生成：输入描述生成完整音乐曲目（器乐/声乐）",
      "声音克隆：用少量音频样本训练克隆特定歌手声音",
      "官方授权声音库：使用已获授权的艺术家声音进行音乐创作",
      "AI人声分离：从完整歌曲中提取人声或伴奏",
      "免版权音乐库：生成的音乐可直接用于YouTube/TikTok等平台"
    ],
    usage_guide: "注册kits.ai。\\n\\nAI音乐生成：AI Music - 描述风格/情绪/乐器 - Generate。\\n\\n声音克隆：Train Voice - 上传10分钟音频 - 训练后用。\\n\\n人声分离：Vocal Remover - 上传歌曲 - 提取人声/伴奏。",
    use_cases: [
      "音乐创作",
      "内容配乐",
      "独立游戏"
    ],
    related_tools: ["elevenlabs", "speechify", "play-ht"],
  },
  {
    id: "tensor-art",
    slug: "tensor-art",
    name: "Tensor.art",
    website: "https://tensor.art",
    description: "基于Stable Diffusion的AI图像生成平台，风格多样",
    type: "Image Generation",
    affiliateUrl: "https://tensor.art",
    commissionRate: "比例依协议",
    features: [
      "基于Stable Diffusion，模型丰富，支持多种绘画风格",
      "在线生图，无需本地部署GPU，打开网页即可使用",
      "支持ControlNet：精确控制图像构图、姿态、线稿",
      "模型广场：用户共享自训练模型和风格LoRA",
      "批量生成：一次生成多张图片，支持参数调整"
    ],
    usage_guide: "注册tensor.art。\\n\\n基础生图：输入英文提示词，选择模型和风格，点击 Generate 生成图像。\\n\\nControlNet：上传参考图（姿态图/线稿图），AI根据参考图生成新图像。\\n\\nLoRA模型：Models 页面下载风格LoRA，在生图时启用。",
    use_cases: [
      "AI艺术创作",
      "游戏美术",
      "概念设计"
    ],
    related_tools: ["leonardo-ai", "kittl", "pixlr"],
  },
]



export const CATEGORIES = [
  'All',
  'Writing',
  'Image Generation',
  'Video Generation',
  'Audio/TTS',
  'Productivity',
  'Code',
] as const


export const CATEGORY_COLORS: Record<string, string> = {
  'Writing': 'bg-blue-100 text-blue-700',
  'Image Generation': 'bg-purple-100 text-purple-700',
  'Video Generation': 'bg-pink-100 text-pink-700',
  'Audio/TTS': 'bg-green-100 text-green-700',
  'Productivity': 'bg-orange-100 text-orange-700',
  'Code': 'bg-gray-100 text-gray-700',
}
