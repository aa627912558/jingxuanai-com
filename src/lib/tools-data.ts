import { AiTool } from '@/types'

export const TOOLS_DATA: AiTool[] = [
  {
    id: "elevenlabs",
    icon: "/tool-icons/elevenlabs.png",
    slug: "elevenlabs",
    name: "ElevenLabs",
    website: "https://elevenlabs.io",
    description: "AI语音合成与配音，支持逼真多语言TTS声音生成",
    type: "音频AI",
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
    icon: "/tool-icons/veed.png",
    slug: "veed",
    name: "VEED",
    website: "https://www.veed.io",
    description: "在线AI视频编辑工具，快速生成字幕、配音和视频特效",
    type: "视频AI",
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
    icon: "/tool-icons/murf-ai.png",
    slug: "murf-ai",
    name: "Murf AI",
    website: "https://murf.ai",
    description: "专业AI语音生成器，适用于视频旁白、广告和电子学习",
    type: "音频AI",
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
    icon: "/tool-icons/synthesia.png",
    slug: "synthesia",
    name: "Synthesia",
    website: "https://www.synthesia.io",
    description: "AI数字人视频生成，输入文字即可生成专业讲解视频",
    type: "视频AI",
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
    icon: "/tool-icons/writesonic.png",
    slug: "writesonic",
    name: "Writesonic",
    website: "https://writesonic.com",
    description: "AI写作助手，快速生成文章、博客、广告文案和社交内容",
    type: "写作AI",
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
    icon: "/tool-icons/notion.png",
    slug: "notion",
    name: "Notion",
    website: "https://www.notion.so",
    description: "AI增强的笔记与协作平台，集成知识库、任务管理和数据库",
    type: "效率办公",
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
    icon: "/tool-icons/surfer-seo.png",
    slug: "surfer-seo",
    name: "Surfer SEO",
    website: "https://surferseo.com",
    description: "AI SEO分析工具，优化内容结构与关键词布局提升搜索排名",
    type: "效率办公",
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
    icon: "/tool-icons/remove-bg.png",
    slug: "remove-bg",
    name: "remove.bg",
    website: "https://www.remove.bg",
    description: "AI一键去除图片背景，保留主体轮廓精细边缘处理",
    type: "图片AI",
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
    icon: "/tool-icons/flexclip.png",
    slug: "flexclip",
    name: "FlexClip",
    website: "https://www.flexclip.com",
    description: "在线AI视频制作平台，模板丰富，支持文字转视频和配音",
    type: "视频AI",
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
    icon: "/tool-icons/invideo.png",
    slug: "invideo",
    name: "InVideo",
    website: "https://invideo.io",
    description: "AI视频生成平台，文字转视频、模板丰富、操作简单",
    type: "视频AI",
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
    icon: "/tool-icons/quillbot.png",
    slug: "quillbot",
    name: "QuillBot",
    website: "https://quillbot.com",
    description: "AI写作润色与改写工具，提供同义词替换和句式优化",
    type: "写作AI",
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
    icon: "/tool-icons/jasper.png",
    slug: "jasper",
    name: "Jasper",
    website: "https://www.jasper.ai",
    description: "企业级AI内容生成平台，支持品牌声音定制和批量创作",
    type: "写作AI",
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
    icon: "/tool-icons/copy-ai.png",
    slug: "copy-ai",
    name: "Copy.ai",
    website: "https://www.copy.ai",
    description: "AI文案生成工具，覆盖营销、销售和运营全场景文案需求",
    type: "写作AI",
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
    icon: "/tool-icons/rytr.png",
    slug: "rytr",
    name: "Rytr",
    website: "https://www.rytr.me",
    description: "经济实惠的AI写作助手，支持30+语言和20+写作场景",
    type: "写作AI",
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
    icon: "/tool-icons/pictory.png",
    slug: "pictory",
    name: "Pictory",
    website: "https://www.pictory.ai",
    description: "AI文章转视频工具，自动从长文本提取精彩片段生成短视频",
    type: "视频AI",
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
    icon: "/tool-icons/fliki.png",
    slug: "fliki",
    name: "Fliki",
    website: "https://www.fliki.ai",
    description: "AI文字转视频+配音平台，支持1000+逼真AI voices",
    type: "视频AI",
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
    icon: "/tool-icons/heygen.png",
    slug: "heygen",
    name: "HeyGen",
    website: "https://www.heygen.com",
    description: "AI数字人视频生成，支持多语言和个性化虚拟形象创建",
    type: "视频AI",
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
    icon: "/tool-icons/speechify.png",
    slug: "speechify",
    name: "Speechify",
    website: "https://speechify.com",
    description: "AI文字转语音阅读应用，支持网页、文档和电子书朗读",
    type: "音频AI",
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
    icon: "/tool-icons/play-ht.png",
    slug: "play-ht",
    name: "Play.ht",
    website: "https://play.ht",
    description: "AI文本转语音API，支持824种声音和135种语言",
    type: "音频AI",
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
    icon: "/tool-icons/descript.png",
    slug: "descript",
    name: "Descript",
    website: "https://www.descript.com",
    description: "AI视频和播客编辑工具，集视频剪辑、转录和配音于一体",
    type: "视频AI",
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
    icon: "/tool-icons/canva.png",
    slug: "canva",
    name: "Canva",
    website: "https://www.canva.com",
    description: "AI设计平台，图片海报、演示文稿和社交媒体图文一键生成",
    type: "图片AI",
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
    icon: "/tool-icons/adobe-cc.png",
    slug: "adobe-cc",
    name: "Adobe Creative Cloud",
    website: "https://www.adobe.com",
    description: "Adobe全家桶，Photoshop、Figma等创意工具AI增强版",
    type: "图片AI",
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
    icon: "/tool-icons/grammarly.png",
    slug: "grammarly",
    name: "Grammarly",
    website: "https://www.grammarly.com",
    description: "AI英语写作助手，语法纠错、风格建议和语气优化",
    type: "写作AI",
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
    icon: "/tool-icons/leonardo-ai.png",
    slug: "leonardo-ai",
    name: "Leonardo AI",
    website: "https://leonardo.ai",
    description: "AI图像生成平台，专注游戏和创意内容，支持风格控制",
    type: "图片AI",
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
    icon: "/tool-icons/photoroom.png",
    slug: "photoroom",
    name: "PhotoRoom",
    website: "https://www.photoroom.com",
    description: "AI产品图编辑工具，一键生成商业级产品展示图",
    type: "图片AI",
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
    icon: "/tool-icons/pixlr.png",
    slug: "pixlr",
    name: "Pixlr",
    website: "https://www.pixlr.com",
    description: "在线AI图像编辑器，PS替代品，支持AI生成和修图",
    type: "图片AI",
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
    icon: "/tool-icons/anyword.png",
    slug: "anyword",
    name: "Anyword",
    website: "https://www.anyword.com",
    description: "AI数据驱动文案生成，优化内容转化率的营销文案工具",
    type: "写作AI",
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
    icon: "/tool-icons/copymatic.png",
    slug: "copymatic",
    name: "Copymatic",
    website: "https://www.copymatic.ai",
    description: "AI长文章生成器，支持SEO优化和批量内容生产",
    type: "写作AI",
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
    icon: "/tool-icons/kittl.png",
    slug: "kittl",
    name: "Kittl",
    website: "https://www.kittl.com",
    description: "AI设计平台，支持图像生成、矢量设计和插画创作",
    type: "图片AI",
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
    icon: "/tool-icons/kapwing.png",
    slug: "kapwing",
    name: "Kapwing",
    website: "https://www.kapwing.com",
    description: "在线AI视频编辑器，支持字幕生成、视频剪辑和协作",
    type: "视频AI",
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
    icon: "/tool-icons/kits-ai.png",
    slug: "kits-ai",
    name: "Kits.ai",
    website: "https://www.kits.ai",
    description: "AI音乐生成和声音克隆平台，创作无版权音乐",
    type: "音频AI",
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
    icon: "/tool-icons/tensor-art.png",
    slug: "tensor-art",
    name: "Tensor.art",
    website: "https://tensor.art",
    description: "基于Stable Diffusion的AI图像生成平台，风格多样",
    type: "图片AI",
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
  {
    id: "kimi",
    icon: "/tool-icons/kimi.png",
    slug: "kimi",
    name: "Kimi",
    website: "https://kimi.moonshot.cn",
    description: "月之暗面推出的AI助手，支持超长上下文（200万字）",
    type: "AI大模型",
    affiliateUrl: "",
    commissionRate: "暂无佣金（使用有额度赠送）",
    features: [
      "超长上下文窗口，支持200万字无损理解",
      "支持上传PDF、Word、PPT等文件并深度解读",
      "搜索增强模式，实时获取互联网信息",
      "多轮对话能力强，适合复杂任务拆解",
      "支持代码解读和调试辅助"
    ],
    usage_guide: "第一步：访问kimi.moonshot.cn，点击右上角登录/注册。\\n\\n第二步：进入主界面，在对话框输入问题或需求。\\n\\n第三步：上传文件（可选）：点击对话框左侧回形针图标，上传PDF/Word/PPT。\\n\\n第四步：开启搜索模式：输入问题时点击右侧搜索图标，Kimi会结合实时信息回答。",
    use_cases: [
      "长文档总结与深度分析",
      "代码解读与调试",
      "深度研究与资料整理"
    ],
    related_tools: ["zhipuai", "tongyi", "yiyan"],
  },
  {
    id: "yiyan",
    icon: "/tool-icons/yiyan.png",
    slug: "yiyan",
    name: "文心一言",
    website: "https://yiyan.baidu.com",
    description: "百度推出的AI大模型，中文理解与创作能力强",
    type: "AI大模型",
    affiliateUrl: "",
    commissionRate: "暂无佣金",
    features: [
      "百度自研文心大模型，中文语言理解表现优秀",
      "支持多模态：文字、图像生成、代码解释",
      "集成百度搜索，实时获取最新信息",
      "丰富的创作模板：文案、诗歌、故事、营销内容",
      "企业版提供API接入，支持二次开发"
    ],
    usage_guide: "第一步：访问yiyan.baidu.com，使用百度账号登录。\\n\\n第二步：在对话框输入问题或选择预设场景（文案创作、代码助手等）。\\n\\n第三步：开启插件模式：可使用PPT生成、图片生成等扩展功能。\\n\\n第四步：企业用户可在控制台申请API Key，接入自身业务系统。",
    use_cases: [
      "中文内容创作与文案撰写",
      "知识问答与信息检索",
      "企业智能化接入"
    ],
    related_tools: ["kimi", "tongyi", "hunyuan"],
  },
  {
    id: "tongyi",
    icon: "/tool-icons/tongyi.png",
    slug: "tongyi",
    name: "通义千问",
    website: "https://tongyi.aliyun.com",
    description: "阿里云推出的大语言模型，免费额度充足",
    type: "AI大模型",
    affiliateUrl: "",
    commissionRate: "暂无佣金",
    features: [
      "阿里云自研大模型，支持中英双语及多轮对话",
      "免费额度充足，新用户注册送大量Token",
      "支持通义万相：AI图像生成与编辑",
      "提供API接口，支持企业级应用接入",
      "通义听悟：会议录音转文字与摘要"
    ],
    usage_guide: "第一步：访问tongyi.aliyun.com，点击立即开始。\\n\\n第二步：使用淘宝/支付宝账号扫码登录。\\n\\n第三步：在对话框输入问题，体验文字对话、代码辅助等功能。\\n\\n第四步：开发者可进入控制台申请API，调用通义千问和通义万相能力。",
    use_cases: [
      "日常问答与知识查询",
      "内容创作与文案生成",
      "企业应用接入与开发"
    ],
    related_tools: ["kimi", "yiyan", "xinghuo"],
  },
  {
    id: "xinghuo",
    icon: "/tool-icons/xinghuo.png",
    slug: "xinghuo",
    name: "讯飞星火",
    website: "https://www.xunfei.cn",
    description: "科大讯飞推出的AI大模型，语音交互能力强",
    type: "AI大模型",
    affiliateUrl: "",
    commissionRate: "暂无佣金",
    features: [
      "科大讯飞自研星火大模型，语音识别技术领先",
      "强大的语音交互能力，支持语音输入和播报",
      "多语种翻译，支持100+语言实时互译",
      "集成讯飞听见：录音转写、会议纪要一键生成",
      "提供API和企业定制化服务"
    ],
    usage_guide: "第一步：访问xinghuo.xunfei.cn或下载讯飞星火APP。\\n\\n第二步：注册并登录（网页版支持账号密码，APP需手机号）。\\n\\n第三步：输入问题，支持文字或语音输入，体验多轮对话。\\n\\n第四步：使用翻译、文档处理等插件功能提升效率。",
    use_cases: [
      "语音交互与实时翻译",
      "会议记录与内容整理",
      "智能客服与知识问答"
    ],
    related_tools: ["tongyi", "kimi", "zhipuai"],
  },
  {
    id: "zhipuai",
    icon: "/tool-icons/zhipuai.png",
    slug: "zhipuai",
    name: "智谱AI",
    website: "https://www.zhipuai.cn",
    description: "清华系AI大模型，对标GPT-4，性能强劲",
    type: "AI大模型",
    affiliateUrl: "",
    commissionRate: "暂无佣金",
    features: [
      "清华大学知识工程实验室出品，对标GPT-4水平",
      "支持128K超长上下文，复杂任务处理能力强",
      "GLM-4V多模态模型，支持图像理解和分析",
      "开源ChatGLM系列，开发者友好",
      "提供API和企业私有化部署方案"
    ],
    usage_guide: "第一步：访问bigmodel.cn注册账号。\\n\\n第二步：进入控制台，创建API Key。\\n\\n第三步：使用API或在线体验：输入问题/上传图片，体验GLM模型能力。\\n\\n第四步：开发者可调用GLM-4、GLM-4V、CogView等模型能力。",
    use_cases: [
      "复杂推理与深度分析",
      "多模态内容理解",
      "企业AI能力接入"
    ],
    related_tools: ["kimi", "baichuan", "lingyi"],
  },
  {
    id: "doubao",
    icon: "/tool-icons/doubao.png",
    slug: "doubao",
    name: "字节豆包",
    website: "https://www.doubao.com",
    description: "字节跳动推出的AI助手，豆包APP体验好",
    type: "AI大模型",
    affiliateUrl: "",
    commissionRate: "暂无佣金",
    features: [
      "字节跳动自研大模型，豆包APP体验流畅",
      "支持多轮对话、文件分析、搜索增强",
      "豆包Mars AI助手：抖音生态内集成",
      "AI写作辅助，覆盖文案、邮件、社交内容",
      "免费使用，额度充足"
    ],
    usage_guide: "第一步：访问doubao.com或下载豆包APP。\\n\\n第二步：使用手机号注册登录。\\n\\n第三步：在对话框输入问题，可上传图片或文件进行分析。\\n\\n第四步：探索抖音内的豆包AI助手，在抖音生态下直接使用。",
    use_cases: [
      "日常问答与内容创作",
      "抖音生态内AI互动",
      "文件解读与信息整理"
    ],
    related_tools: ["kimi", "tongyi", "hunyuan"],
  },
  {
    id: "hunyuan",
    icon: "/tool-icons/hunyuan.png",
    slug: "hunyuan",
    name: "腾讯混元",
    website: "https://hunyuan.tencent.com",
    description: "腾讯推出的大模型，与微信等腾讯产品深度整合",
    type: "AI大模型",
    affiliateUrl: "",
    commissionRate: "暂无佣金",
    features: [
      "腾讯自研大模型，支持中英双语和长文本理解",
      "与微信、企业微信、腾讯文档等深度整合",
      "支持多模态：图像理解和代码生成",
      "混元助手：智能对话、创作辅助、翻译等",
      "企业版提供API接入，支持腾讯云集成"
    ],
    usage_guide: "第一步：访问hunyuan.tencent.com，点击开始体验。\\n\\n第二步：使用微信扫码或QQ账号登录。\\n\\n第三步：输入问题，体验对话、创作、翻译等功能。\\n\\n第四步：企业用户可在腾讯云控制台申请API接入。",
    use_cases: [
      "微信生态内AI辅助",
      "企业办公与文档处理",
      "内容创作与营销文案"
    ],
    related_tools: ["yiyan", "doubao", "tongyi"],
  },
  {
    id: "shangtong",
    icon: "/tool-icons/shangtong.png",
    slug: "shangtong",
    name: "商量",
    website: "https://www.shangtong.cn",
    description: "商汤科技推出的大语言模型，AI能力全面",
    type: "AI大模型",
    affiliateUrl: "",
    commissionRate: "暂无佣金",
    features: [
      "商汤科技自研大模型，AI综合能力全面",
      "支持长文本理解、多轮对话、代码生成",
      "商量AI助手网页版直接使用，无需注册",
      "提供企业级API，支持行业定制化",
      "与商汤AI绘画、AI数字人等产品协同"
    ],
    usage_guide: "第一步：访问shangtong.cn，点击开始使用。\\n\\n第二步：无需注册，直接在对话框输入问题。\\n\\n第三步：体验对话、创作、代码等各类功能。\\n\\n第四步：企业用户可申请API接入，集成到自身业务系统。",
    use_cases: [
      "日常问答与知识查询",
      "代码编写与调试",
      "企业AI能力集成"
    ],
    related_tools: ["kimi", "zhipuai", "baichuan"],
  },
  {
    id: "baichuan",
    icon: "/tool-icons/baichuan.png",
    slug: "baichuan",
    name: "百川AI",
    website: "https://www.baichuan-ai.com",
    description: "王小川团队推出的大模型，对标GPT-4",
    type: "AI大模型",
    affiliateUrl: "",
    commissionRate: "暂无佣金",
    features: [
      "搜狗创始人王小川创立，对标GPT-4性能",
      "支持中英双语、超长上下文和多轮对话",
      "百川智能系列：Base/Chat/Insight多版本",
      "开源友好，提供开源模型供社区使用",
      "企业版提供API和私有化部署"
    ],
    usage_guide: "第一步：访问baichuan-ai.com注册账号。\\n\\n第二步：进入控制台，创建API Key。\\n\\n第三步：使用API或网页版体验百川大模型能力。\\n\\n第四步：开发者可接入开源模型或使用企业版API服务。",
    use_cases: [
      "复杂推理与深度分析",
      "多语言内容处理",
      "企业AI能力接入"
    ],
    related_tools: ["zhipuai", "lingyi", "shangtong"],
  },
  {
    id: "lingyi",
    icon: "/tool-icons/lingyi.png",
    slug: "lingyi",
    name: "零一万物",
    website: "https://www.01.ai",
    description: "李开复创办的AI 2.0平台，Yi系列大模型性能优异",
    type: "AI大模型",
    affiliateUrl: "",
    commissionRate: "暂无佣金",
    features: [
      "李开复创办，AI 2.0技术路线，实力雄厚",
      "Yi系列大模型：Yi-34B、Yi-9B等多规格可选",
      "开源模型性能优异，Yi-34B多项评测领先",
      "支持200K超长上下文，适合长文档处理",
      "提供API和云服务，企业友好"
    ],
    usage_guide: "第一步：访问01.ai注册开发者账号。\\n\\n第二步：进入控制台申请API Key。\\n\\n第三步：使用API调用Yi系列模型，支持多种使用方式。\\n\\n第四步：开源模型可在HuggingFace获取，私有部署使用。",
    use_cases: [
      "大规模语言处理任务",
      "长文档分析与总结",
      "企业AI能力集成"
    ],
    related_tools: ["baichuan", "zhipuai", "kimi"],
  },
  {
    id: "gamma",
    icon: "/tool-icons/gamma.png",
    slug: "gamma",
    name: "Gamma",
    website: "https://gamma.app",
    description: "AI演示文稿生成工具，输入主题即可快速生成专业PPT和网页",
    type: "效率办公",
    affiliateUrl: "https://gamma.app",
    commissionRate: "暂无佣金计划",
    features: [
      "AI一键生成演示文稿，输入主题或粘贴文本即可生成完整PPT",
      "内置丰富模板库，涵盖商业、教育、营销等多种场景",
      "支持嵌入图片、视频、图表和网页，内容表现力丰富",
      "实时协作功能，团队成员可同时编辑同一份演示",
      "一键切换主题风格，快速适配不同品牌调性"
    ],
    usage_guide: "第一步：访问 gamma.app，点击 Sign up 免费注册账号。\\n\\n第二步：创建新演示：点击 New Gamma，选择 Generate（AI生成）或 Paste（粘贴文本）。\\n\\n第三步：输入主题描述，例如：输入「2024年Q1电商增长策略」，AI自动生成10+页PPT大纲。\\n\\n第四步：编辑内容：选择模板后，可直接修改文字、添加图片、嵌入视频、调整布局。\\n\\n第五步：分享与导出：点击 Share 生成链接，或导出为 PDF/PPT 格式。",
    use_cases: [
      "商业提案与融资路演",
      "教育教学课件制作",
      "营销方案展示"
    ],
    related_tools: ["beautiful-ai", "canva", "microsoft-designer"],
  },
  {
    id: "midjourney",
    icon: "/tool-icons/midjourney.png",
    slug: "midjourney",
    name: "Midjourney",
    website: "https://www.midjourney.com",
    description: "AI图像生成工具，通过文字描述创作高质量艺术图像",
    type: "图片AI",
    affiliateUrl: "https://www.midjourney.com",
    commissionRate: "暂无官方佣金计划（可关注Discord社区活动）",
    features: [
      "输入文字描述（Prompt）即可生成精美艺术图像",
      "支持多种风格：写实、插画、动漫、概念艺术等",
      "Vary Region功能，局部修改图像特定区域",
      "Pan和Zoom功能，无限延展图像边缘",
      "社区画廊可参考他人提示词，学习高效创作方法"
    ],
    usage_guide: "第一步：注册 Discord 账号，加入 Midjourney Discord 服务器。\\n\\n第二步：在左侧栏找到 #general-channels，选择任一 generat e 频道。\\n\\n第三步：输入 /imagine 指令，在 prompt 后输入描述性文字，例如：a serene Japanese garden with cherry blossoms, soft lighting, 4k。\\n\\n第四步：等待约30秒，生成4张图像，使用 U1-U4 放大某张，V1-V4 生成变体。\\n\\n第五步：点击图片可保存高清版本，配合 --ar 16:9 等参数调整画面比例。",
    use_cases: [
      "插画师灵感创作",
      "游戏原画概念设计",
      "社交媒体配图"
    ],
    related_tools: ["leonardo-ai", "dalle", "stable-diffusion"],
  },
  {
    id: "runway",
    icon: "/tool-icons/runway.png",
    slug: "runway",
    name: "Runway",
    website: "https://runwayml.com",
    description: "AI视频生成与编辑平台，支持文生视频、图生视频和高级后期处理",
    type: "视频AI",
    affiliateUrl: "https://runwayml.com",
    commissionRate: "暂无佣金计划",
    features: [
      "Gen-2/Gen-3文生视频：输入文字描述生成高质量视频片段",
      "图生视频（Image to Video），让静态图片动起来",
      "AI高级后期：擦除物体、生成空白背景、智能调色",
      "运动跟踪（Motion Tracking），自动跟踪视频中移动的物体",
      "支持视频片段拼接和配音，适合完整短片制作"
    ],
    usage_guide: "第一步：访问 runwayml.com，注册并登录账号。\\n\\n第二步：进入主界面，选择 AI Tools - Text to Video 或 Image to Video。\\n\\n第三步：输入文字描述或上传图片，设置时长（4秒或更长）和运动强度。\\n\\n第四步：点击 Generate，AI生成视频需要1-2分钟。\\n\\n第五步：下载视频或继续使用 Inpainting/Color Correct 等工具进行后期处理。",
    use_cases: [
      "短视频内容创作",
      "广告片头生成",
      "电影概念可视化"
    ],
    related_tools: ["pictory", "fliki", "invideo"],
  },
  {
    id: "beautiful-ai",
    icon: "/tool-icons/beautiful-ai.png",
    slug: "beautiful-ai",
    name: "Beautiful.ai",
    website: "https://www.beautiful.ai",
    description: "AI智能演示文稿工具，自动优化布局让每页幻灯片都美观专业",
    type: "效率办公",
    affiliateUrl: "https://www.beautiful.ai",
    commissionRate: "暂无佣金计划",
    features: [
      "Smart Slide Templates：添加内容后AI自动匹配合适的布局",
      "品牌控制中心，统一管理LOGO、配色、字体，确保品牌一致性",
      "实时数据可视化，自动将数据转化为美观的图表",
      "演讲者备注与计时器，辅助演讲者把控节奏",
      "支持导出PDF/PPTX，离线使用"
    ],
    usage_guide: "第一步：访问 beautiful.ai，点击 Get Started 免费试用。\\n\\n第二步：选择 Presentation 创建一个空白演示，或从模板库选择。\\n\\n第三步：添加内容：点击 + 添加文字、图片或图表，AI自动调整位置和对齐。\\n\\n第四步：设置品牌：点击 Brand 标签页，上传LOGO、设置品牌色板，套用到所有幻灯片。\\n\\n第五步：点击 Present 或导出 PDF/PPT。",
    use_cases: [
      "企业级演示汇报",
      "销售提案与方案展示",
      "远程团队异步演示"
    ],
    related_tools: ["gamma", "canva", "notion"],
  },
  {
    id: "chatpdf",
    icon: "/tool-icons/chatpdf.png",
    slug: "chatpdf",
    name: "ChatPDF",
    website: "https://www.chatpdf.com",
    description: "AI文档阅读助手，上传PDF后用对话方式快速提取信息和总结",
    type: "效率办公",
    affiliateUrl: "https://www.chatpdf.com",
    commissionRate: "暂无佣金计划",
    features: [
      "上传PDF后直接对话提问，AI从文档中提取精准答案",
      "支持多文档同时分析，跨文档总结和对比",
      "自动生成文档摘要，节省阅读时间",
      "支持扫描件（OCR），图片格式的PDF也能处理",
      "可导出问答结果，方便整理会议纪要和学习笔记"
    ],
    usage_guide: "第一步：访问 chatpdf.com，无需注册直接使用（免费额度有限）。\\n\\n第二步：拖拽或点击上传PDF文件，等待AI分析完成。\\n\\n第三步：在对话框输入问题，例如：「这份报告的核心结论是什么？」或「第三章的技术参数有哪些？」\\n\\n第四步：AI基于文档内容给出带出处的答案，点击引用可定位到原文位置。\\n\\n第五步：可将对话导出为摘要文档，或继续上传更多PDF进行对比分析。",
    use_cases: [
      "学术论文速读与总结",
      "合同条款审查",
      "市场报告快速分析"
    ],
    related_tools: ["kimi", "notion", "zhipuai"],
  },
  {
    id: "perplexity",
    icon: "/tool-icons/perplexity.png",
    slug: "perplexity",
    name: "Perplexity",
    website: "https://www.perplexity.ai",
    description: "AI驱动的搜索引擎，基于实时网络信息给出带来源引用的答案",
    type: "AI大模型",
    affiliateUrl: "https://www.perplexity.ai",
    commissionRate: "暂无佣金计划",
    features: [
      "实时联网搜索，回答基于最新网络信息而非过时数据",
      "每个答案附带来源链接，可直接跳转到原始网页",
      "支持搜索建议和追问，深入挖掘信息",
      "提供专注模式和简洁界面，无广告干扰",
      "支持图片搜索和多语言，涵盖中英文查询"
    ],
    usage_guide: "第一步：访问 perplexity.ai，使用 Google 账号或邮箱注册登录。\\n\\n第二步：在搜索框输入问题，例如：「最新iPhone发布信息」或「2024年AI发展趋势」。\\n\\n第三步：查看AI生成的答案，每个论点后附有来源链接，点击可查看原始网页。\\n\\n第四步：使用追问功能，例如「能更详细解释吗？」或「还有其他相关信息吗？」\\n\\n第五步：切换侧边栏的 Collections 功能，可收藏和组织搜索结果。",
    use_cases: [
      "深度信息检索与调研",
      "新闻事件快速了解",
      "技术问题排查与解答"
    ],
    related_tools: ["kimi", "yiyan", "tongyi"],
  },
  {
    id: "cursor",
    icon: "/tool-icons/cursor.png",
    slug: "cursor",
    name: "Cursor",
    website: "https://cursor.com",
    description: "AI编程编辑器，基于VS Code内核内置GPT-4代码生成与重构",
    type: "编程代码",
    affiliateUrl: "https://cursor.com",
    commissionRate: "暂无佣金计划",
    features: [
      "AI代码补全：输入时实时生成代码建议，大幅提升编码速度",
      "Chat模式：直接用自然语言描述需求，AI生成完整代码模块",
      "代码重构与调试：选中代码后AI给出优化建议和Bug修复方案",
      "多文件理解：上传整个项目，AI理解代码结构后给出跨文件修改建议",
      "支持Python、JavaScript、TypeScript、Go等主流编程语言"
    ],
    usage_guide: "第一步：访问 cursor.com，点击 Download 下载安装 Cursor 编辑器。\\n\\n第二步：打开编辑器，使用 GitHub 账号或邮箱登录。\\n\\n第三步：新建文件或打开现有项目，AI自动开始代码补全（Ctrl+L 打开 Chat 面板）。\\n\\n第四步：在 Chat 中输入需求，例如「帮我写一个Python快速排序函数」或「解释这段代码的作用」。\\n\\n第五步：使用 /edit 指令或选中代码后按 Ctrl+K 进行AI辅助编辑和重构。",
    use_cases: [
      "软件开发快速原型",
      "代码审查与优化",
      "学习新编程语言"
    ],
    related_tools: ["github-copilot", "claude", "chatgpt"],
  },
  {
    id: "figma",
    icon: "/tool-icons/figma.png",
    slug: "figma",
    name: "Figma AI",
    website: "https://www.figma.com/ai",
    description: "Figma内置的AI设计助手，支持文生UI、图标生成和设计建议",
    type: "图片AI",
    affiliateUrl: "https://figma.com",
    commissionRate: "暂无佣金计划",
    features: [
      "Figma AI：平台原生AI功能，直接在设计文件中调用",
      "图像生成：输入描述生成设计素材和图标",
      "自动布局建议：AI分析设计稿给出优化建议",
      "文生UI组件：根据描述生成可编辑的UI界面设计",
      "样式转换：一键切换设计风格，保持组件一致性"
    ],
    usage_guide: "第一步：登录 figma.com，进入任意设计文件。\\n\\n第二步：点击右侧插件面板，搜索 Figma AI 或在工具栏找到 AI 入口。\\n\\n第三步：使用 Make Designs，输入描述如「移动端登录页面」，AI生成可编辑设计稿。\\n\\n第四步：使用 AI 图像生成，输入描述获得配图素材。\\n\\n第五步：选中任意图层，使用 AI 建议优化布局或生成变体版本。",
    use_cases: [
      "UI/UX设计师快速出稿",
      "产品经理原型制作",
      "创业团队快速验证概念"
    ],
    related_tools: ["canva", "framer-ai", "looka"],
  },
  {
    id: "stable-audio",
    icon: "/tool-icons/stable-audio.png",
    slug: "stable-audio",
    name: "Stable Audio",
    website: "https://www.stableaudio.com",
    description: "Stability AI推出的AI音乐生成工具，输入描述生成背景音乐和音效",
    type: "音频AI",
    affiliateUrl: "https://www.stableaudio.com",
    commissionRate: "暂无佣金计划",
    features: [
      "文生音乐：输入描述如「轻松愉快的咖啡厅背景音乐」，AI生成完整曲目",
      "支持多种风格和情绪选择，精准控制生成音乐的风格",
      "可生成不同长度的音频，适合短视频配乐或长时背景音乐",
      "支持音效生成：风雨声、脚步声、机器声等",
      "生成的音乐可直接用于商业项目（需遵守使用条款）"
    ],
    usage_guide: "第一步：访问 stableaudio.com，注册并登录账号（免费额度可用）。\\n\\n第二步：进入 Create 页面，选择 Music Generation 或 Sound Effect。\\n\\n第三步：输入描述，例如：「uplifting corporate background music, 120bpm, positive energy」。\\n\\n第四步：设置时长（最长3分钟）和音频质量，点击 Generate 生成。\\n\\n第五步：下载生成的音频文件，用于视频配乐、游戏音效或播客背景音。",
    use_cases: [
      "视频创作者背景音乐",
      "游戏音效设计",
      "播客片头/片尾音乐"
    ],
    related_tools: ["suno", "kits-ai", "elevenlabs"],
  },
  {
    id: "otter-ai",
    icon: "/tool-icons/otter-ai.png",
    slug: "otter-ai",
    name: "Otter.ai",
    website: "https://www.otter.ai",
    description: "AI会议转录工具，实时将语音转换为文字并自动生成会议摘要",
    type: "效率办公",
    affiliateUrl: "https://www.otter.ai",
    commissionRate: "暂无佣金计划",
    features: [
      "实时语音转文字，支持多人发言自动识别和分段",
      "自动识别说话人，无需手动标注",
      "AI会议摘要：自动提取关键议题、行动项和决策",
      "与Google Meet、Zoom、Teams等会议工具集成",
      "可导出为Word、PDF、SRT字幕格式"
    ],
    usage_guide: "第一步：访问 otter.ai，使用 Google 账号或微软账号注册登录。\\n\\n第二步：创建新会议或连接日历，自动加入即将开始的会议。\\n\\n第三步：会议开始后，Otter实时转录所有人的发言，显示在屏幕上。\\n\\n第四步：会议结束后，AI自动生成摘要（Summary），包含关键讨论点和行动项。\\n\\n第五步：点击任意文字跳转到对应音频位置，支持手动编辑和添加注释。",
    use_cases: [
      "商务会议记录",
      "面试录音整理",
      "学术讲座笔记"
    ],
    related_tools: ["tongyi", "notion", "perplexity"],
  },
  {
    id: "suno",
    icon: "/tool-icons/suno.png",
    slug: "suno",
    name: "Suno",
    website: "https://www.suno.ai",
    description: "AI音乐创作平台，支持文生歌曲，输入描述生成带人声和伴奏的完整音乐",
    type: "音频AI",
    affiliateUrl: "https://www.suno.ai",
    commissionRate: "暂无佣金计划",
    features: [
      "文生歌曲：输入歌词或描述，AI生成完整歌曲（含人声和伴奏）",
      "支持自定义歌词，可输入自己撰写的歌词让AI谱曲",
      "多种音乐风格：流行、摇滚、古典、电子、HipHop等",
      "生成的音乐片段可达2分钟以上，适合完整歌曲创作",
      "社区分享功能，可收听和参考其他用户的创作"
    ],
    usage_guide: "第一步：访问 suno.ai，点击 Sign up 免费注册账号。\\n\\n第二步：进入 Create 页面，选择 Custom Mode（可输入自定义歌词）或选择 Instrumental（纯音乐）。\\n\\n第三步：在 Lyrics 框输入歌词，或在 Style of Music 输入音乐风格描述。\\n\\n第四步：点击 Create，系统生成两段完整歌曲（含人声演唱）。\\n\\n第五步：点击播放试听，可延伸（Extend）或下载为MP3格式。",
    use_cases: [
      "音乐爱好者创作",
      "视频配乐自制",
      "歌词创作灵感激发"
    ],
    related_tools: ["stable-audio", "kits-ai", "elevenlabs"],
  },
  {
    id: "brandmark",
    icon: "/tool-icons/brandmark.png",
    slug: "brandmark",
    name: "Brandmark",
    website: "https://www.brandmark.io",
    description: "AI品牌设计工具，快速生成Logo、配色方案和字体搭配",
    type: "图片AI",
    affiliateUrl: "https://www.brandmark.io",
    commissionRate: "暂无佣金计划",
    features: [
      "AI Logo生成：输入公司名称和 tagline，自动生成多款Logo方案",
      "智能配色方案：根据Logo风格自动推荐配套品牌色板",
      "字体搭配建议：提供与品牌调性匹配的字体的组合",
      "品牌素材下载：提供PNG、SVG、EPS等多种格式",
      "社媒素材生成：一键生成社交媒体头像、封面等配套素材"
    ],
    usage_guide: "第一步：访问 brandmark.io，在输入框输入公司/项目名称。\\n\\n第二步：可选输入 tagline（品牌口号）和关键词，帮助AI更好理解品牌方向。\\n\\n第三步：点击 Generate，AI生成多款Logo设计方案。\\n\\n第四步：选择喜欢的方案，进入详情页查看配色、字体建议和品牌指南。\\n\\n第五步：下载所需素材（Logo、配色、字体建议书），免费版有水印。",
    use_cases: [
      "创业公司品牌建立",
      "副业项目品牌形象",
      "个人IP品牌设计"
    ],
    related_tools: ["looka", "canva", "figma"],
  },
  {
    id: "looka",
    icon: "/tool-icons/looka.png",
    slug: "looka",
    name: "Looka",
    website: "https://www.looka.com",
    description: "AI Logo设计平台，通过问答式交互生成个性化品牌Logo",
    type: "图片AI",
    affiliateUrl: "https://www.looka.com",
    commissionRate: "暂无佣金计划",
    features: [
      "问答式Logo设计：通过偏好选择（行业、风格、颜色）缩小设计范围",
      "海量图标库：提供数千个行业相关图标供参考选择",
      "实时预览：Logo在不同场景（名片、网站、T恤）上的效果预览",
      "品牌包服务：购买后获得完整品牌素材包",
      "支持修改：可在线微调Logo的各个元素"
    ],
    usage_guide: "第一步：访问 looka.com，点击 Get Started。\\n\\n第二步：回答5个问题：行业、喜欢的Logo风格、颜色偏好、标语、公司名称。\\n\\n第三步：AI基于你的偏好生成数十款Logo方案，滑动浏览选择最喜欢的。\\n\\n第四步：进入编辑器，可调整图标、颜色、字体、布局。\\n\\n第五步：购买下载（基础包$20），获得PNG/SVG/PDF多格式文件和品牌指南。",
    use_cases: [
      "中小企业品牌Logo",
      "个人工作室品牌建立",
      "产品线统一形象"
    ],
    related_tools: ["brandmark", "canva", "framer-ai"],
  },
  {
    id: "durable",
    icon: "/tool-icons/durable.png",
    slug: "durable",
    name: "Durable",
    website: "https://www.durable.co",
    description: "AI网站生成器，输入公司信息30秒即可生成完整商业网站",
    type: "效率办公",
    affiliateUrl: "https://www.durable.co",
    commissionRate: "暂无佣金计划",
    features: [
      "AI网站生成：输入公司名称、行业和描述，30秒生成完整网站",
      "内置SEO优化，生成的网站对搜索引擎友好",
      "支持在线编辑，可拖拽修改文字、图片和布局",
      "提供多种配色和模板，一键切换网站风格",
      "包含联系表单、地图、社交链接等商业必备功能"
    ],
    usage_guide: "第一步：访问 durable.co，点击 Generate my website。\\n\\n第二步：输入公司名称、行业描述和位置信息，AI自动生成网站。\\n\\n第三步：查看生成的网站，预览不同页面（首页、关于、服务、联系等）。\\n\\n第四步：进入编辑器修改内容，更换图片、调整文字、添加服务项目。\\n\\n第五步：绑定自定义域名（可选），发布网站。免费版有Durable品牌标识。",
    use_cases: [
      "小微企业快速建站",
      "个人副业展示页",
      "本地服务商线上 presence"
    ],
    related_tools: ["framer-ai", "gamma", "notion"],
  },
  {
    id: "framer-ai",
    icon: "/tool-icons/framer-ai.png",
    slug: "framer-ai",
    name: "Framer AI",
    website: "https://www.framer.ai",
    description: "AI网站设计工具，通过描述生成专业网站，支持高保真交互原型",
    type: "效率办公",
    affiliateUrl: "https://www.framer.ai",
    commissionRate: "暂无佣金计划",
    features: [
      "AI网站生成：输入描述快速生成精美网站页面",
      "专业动画系统：内置高质量页面过渡和元素动画",
      "响应式设计：自动适配桌面、平板和手机",
      "CMS内容管理：内置博客和产品展示管理系统",
      "A/B测试：支持不同版本页面测试转化率"
    ],
    usage_guide: "第一步：访问 framer.ai/signup，注册并登录账号。\\n\\n第二步：点击 Create New Site，选择 AI Generate 或从模板开始。\\n\\n第三步：描述你的网站，例如「一个现代简约的UX设计工作室官网」。\\n\\n第四步：AI生成页面后，进入编辑器精细调整布局、文字、图片和动画。\\n\\n第五步：发布网站，使用 framer.io 子域名，或绑定自己的域名。",
    use_cases: [
      "设计师作品集",
      "科技创业公司官网",
      "产品落地页"
    ],
    related_tools: ["durable", "gamma", "canva"],
  },
  {
    id: "shopify-magic",
    icon: "/tool-icons/shopify-magic.png",
    slug: "shopify-magic",
    name: "Shopify Magic",
    website: "https://www.shopify.com/magic",
    description: "Shopify内置AI工具，智能生成商品描述、邮件营销内容和客户服务回复",
    type: "效率办公",
    affiliateUrl: "https://www.shopify.com",
    commissionRate: "暂无佣金计划",
    features: [
      "AI商品描述生成：输入产品信息，自动生成吸引人的商品详情页文案",
      "邮件营销内容生成：创建促销邮件、客户跟进邮件等",
      "智能客服回复：AI辅助生成客户服务回复建议",
      "图片增强：AI优化商品主图和场景图",
      "多语言支持：自动翻译商品信息至多语言版本"
    ],
    usage_guide: "第一步：拥有 Shopify 店铺（14天免费试用），登录后台。\\n\\n第二步：在商品编辑页面，点击 Magic（魔法棒图标），AI自动生成商品描述。\\n\\n第三步：点击编辑描述，调整AI生成的内容或要求重新生成。\\n\\n第四步：在邮件营销模块（Email Marketing），使用AI生成促销邮件模板。\\n\\n第五步：在客服页面，AI根据客户问题生成回复建议，商家选择发送或修改。",
    use_cases: [
      "电商卖家快速上架",
      "跨境电商多语言运营",
      "Shopify店主效率提升"
    ],
    related_tools: ["notion", "writesonic", "canva"],
  },
  {
    id: "microsoft-designer",
    icon: "/tool-icons/microsoft-designer.png",
    slug: "microsoft-designer",
    name: "Microsoft Designer",
    website: "https://designer.microsoft.com",
    description: "微软AI设计工具，快速生成社交媒体图文、邀请函和营销海报",
    type: "图片AI",
    affiliateUrl: "https://designer.microsoft.com",
    commissionRate: "暂无佣金计划",
    features: [
      "文生设计：输入描述自动生成多种设计方案",
      "海量模板库：覆盖Instagram、Facebook、Twitter、小红书等社媒尺寸",
      "品牌套件：上传LOGO和配色，自动套用到所有设计",
      "AI图像生成（DALL-E）：直接在设计中使用AI生成的图片素材",
      "免费使用：微软账号即可，无需订阅Microsoft 365"
    ],
    usage_guide: "第一步：访问 designer.microsoft.com，使用微软账号登录。\\n\\n第二步：点击 Create a design，选择设计类型（海报/社媒图文/邀请函等）。\\n\\n第三步：输入设计描述，例如「瑜伽课程推广海报，清新绿色风格」。\\n\\n第四步：AI生成多个设计方案，选择最喜欢的一个进入编辑。\\n\\n第五步：在编辑器中修改文字、图片、布局，完成后导出PNG/JPG格式。",
    use_cases: [
      "社媒运营图文制作",
      "个人品牌视觉设计",
      "活动推广物料"
    ],
    related_tools: ["canva", "looka", "gamma"],
  },
  {
    id: "credo-ai",
    icon: "/tool-icons/credo-ai.png",
    slug: "credo-ai",
    name: "Credo AI",
    website: "https://www.credo.ai",
    description: "AI治理与合规平台，帮助企业评估、监控和降低AI系统风险",
    type: "效率办公",
    affiliateUrl: "https://www.credo.ai",
    commissionRate: "暂无佣金计划",
    features: [
      "AI风险评估：量化评估AI模型的公平性、隐私和安全性风险",
      "合规报告生成：自动生成符合监管要求（EU AI Act等）的合规文档",
      "模型监控：持续追踪AI模型在生产环境中的表现变化",
      "策略管理：集中管理企业的AI使用政策和伦理准则",
      "多方协作：支持法务、技术和业务团队共同管理AI合规"
    ],
    usage_guide: "第一步：访问 credo.ai，点击 Request Demo 或 Sign Up 注册账号。\\n\\n第二步：连接AI模型或系统，导入模型文档和数据样本。\\n\\n第三步：运行AI评估，Credo自动分析模型的偏差、隐私泄露和安全漏洞风险。\\n\\n第四步：查看可视化风险报告，获取具体的修复建议和优先级。\\n\\n第五步：生成合规文档，向监管机构或内部 stakeholders 展示AI系统的合规状态。",
    use_cases: [
      "企业AI合规管理",
      "金融机构AI审计",
      "政府AI项目评估"
    ],
    related_tools: ["notion", "zhipuai", "perplexity"],
  },
  {
    id: "salesforce-einstein",
    icon: "/tool-icons/salesforce-einstein.png",
    slug: "salesforce-einstein",
    name: "Salesforce Einstein",
    website: "https://www.salesforce.com/einstein/",
    description: "Salesforce内置AI平台，CRM数据驱动销售预测、客户服务和营销自动化",
    type: "效率办公",
    affiliateUrl: "https://www.salesforce.com",
    commissionRate: "暂无佣金计划",
    features: [
      "Einstein Copilot：CRM内置AI助手，自然语言查询和数据解读",
      "销售预测：基于历史数据AI预测商机转化率和收入",
      "客户洞察：自动分析客户行为，识别交叉销售和追加销售机会",
      "服务建议：AI推荐最佳客服回复和解决方案",
      "营销优化：AI优化邮件发送时间和内容个性化"
    ],
    usage_guide: "第一步：使用 Salesforce 账号登录（需要 Einstein 1 Platform 或以上版本）。\\n\\n第二步：在任意 Salesforce 页面，点击 Einstein 图标打开 Copilot 对话框。\\n\\n第三步：用自然语言提问，例如「本月业绩最好的销售是哪些人？」或「有哪些商机超过30天未跟进？」\\n\\n第四步：Einstein 分析 CRM 数据，给出带有数据来源的回答和建议。\\n\\n第五步：在 Opportunity 页面，查看 Einstein 的 AI 评分和预测，辅助销售决策。",
    use_cases: [
      "销售团队业绩管理",
      "客户服务智能化",
      "营销自动化优化"
    ],
    related_tools: ["notion", "perplexity", "zapier"],
  },
  {
    id: "zapier",
    icon: "/tool-icons/zapier.png",
    slug: "zapier",
    name: "Zapier",
    website: "https://www.zapier.com",
    description: "AI工作流自动化平台，连接5000+应用实现业务流程自动化",
    type: "效率办公",
    affiliateUrl: "https://www.zapier.com",
    commissionRate: "暂无佣金计划",
    features: [
      "应用集成：连接5000+应用（Slack、Google Sheets、Notion、Salesforce等）",
      "自动化工作流（Zap）：当A应用发生某事件时，自动触发B应用的操作",
      "AI支持：Zapier AI 可帮助构建复杂工作流和编写代码步骤",
      "多步骤Zap：支持条件分支、延迟、格式转换等复杂逻辑",
      "团队协作：共享Zap模板，团队成员共同管理自动化流程"
    ],
    usage_guide: "第一步：访问 zapier.com/sign-up，注册免费账号。\\n\\n第二步：点击 Make a Zap 开始创建自动化工作流。\\n\\n第三步：选择 Trigger App（触发应用）和 Event（例如「新邮件收到」），连接账号。\\n\\n第四步：添加 Action（执行应用），例如「将邮件附件保存到 Google Drive」。\\n\\n第五步：测试 Zap 是否正常工作，开启后即可自动化运行。可选升级付费版获取更多任务额度。",
    use_cases: [
      "办公自动化",
      "数据同步",
      "客户管理流程自动化"
    ],
    related_tools: ["notion", "salesforce-einstein", "chatpdf"],
  },
]



export const CATEGORIES = [
  '全部',
  '写作AI',
  '图片AI',
  '视频AI',
  '音频AI',
  '效率办公',
  'AI大模型',
  '编程代码',
] as const


export const CATEGORY_COLORS: Record<string, string> = {
  '写作AI': 'bg-blue-100 text-blue-700',
  '图片AI': 'bg-purple-100 text-purple-700',
  '视频AI': 'bg-pink-100 text-pink-700',
  '音频AI': 'bg-green-100 text-green-700',
  '效率办公': 'bg-orange-100 text-orange-700',
  'AI大模型': 'bg-red-100 text-red-700',
  '编程代码': 'bg-gray-100 text-gray-700',
}
