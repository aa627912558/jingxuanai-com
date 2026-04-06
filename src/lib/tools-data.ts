import { AiTool } from '@/types'

export const TOOLS_DATA: AiTool[] = [
  {
    id: "elevenlabs",
    icon: "/tool-icons/elevenlabs.png",
    slug: "elevenlabs",
    name: "ElevenLabs",
    website: "https://try.elevenlabs.io/uu3aajn549zp",
    description: "AI语音合成与配音，支持逼真多语言TTS声音生成",
    type: "音频AI",
    affiliateUrl: "https://try.elevenlabs.io/uu3aajn549zp",
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
    usage_guide: "第一步：注册与登录\\n访问 writesonic.com，点击 Sign Up 使用邮箱或 Google 账号注册。新用户有免费试用额度（需要验证邮箱）。\\n\\n第二步：了解主要功能模块\\nDashboard 首页可以看到 5 大功能入口：Article Writer（文章生成）、Chatsonic（对话写作）、Botsonic（AI客服机器人）、E-commerce（电商文案）、Social Media（社媒内容）。根据需求选择对应模块。\\n\\n第三步：生成博客文章（Article Writer）\\n进入 Article Writer，输入博主题或目标关键词（如「AI写作工具推荐」），选择文章长度（短/中/长），点击 Generate Outline。\\nAI 生成大纲后可手动调整结构（增删章节、重排顺序），确认后点击 Generate Article 生成完整文章。\\n生成后点击 Edit 在编辑器中修改，或直接导出为 Word/PDF。\\n\\n第四步：生成广告文案（Facebook/Google Ads）\\n进入 E-commerce 或 Facebook Ads 模板，输入产品名称、核心卖点、目标受众和广告类型。\\n点击 Generate，AI 一次性生成多个版本的广告文案，可选择最喜欢的一个进行 A/B 测试。\\nGoogle Ads 文案注意字符限制（Writesonic 会自动标注），确保在规定长度内。\\n\\n第五步：社媒内容（Social Media）\\n进入 Social Media 模块，选择发布平台（Instagram/Facebook/Twitter/LinkedIn/YouTube）。\\n输入产品信息或粘贴文章链接，AI 自动生成适配该平台风格的帖子内容，支持添加 hashtag。\\n\\n第六步：Chatsonic 对话写作\\nChatsonic 相当于「联网版 ChatGPT」，在对话框输入任何问题，它会结合实时搜索结果回答。\\n适合做市场调研、竞争分析、内容灵感激发使用。支持上传图片让 AI 分析。\\n\\n第七步：SEO 优化\\n文章生成后，点击右上角 SEO Analysis，输入目标关键词。\\n系统会给出 Content Score（满分100）和具体优化建议：关键词密度、H2 分布、Meta Description 等。\\n根据建议调整文章后再次评分，达到绿色分数（通常 60+）即可发布。",
    use_cases: [
      "内容营销：批量生成 SEO 博客文章，攻占长尾关键词",
      "跨境电商：生成 Amazon 商品描述、速卖通产品详情页",
      "社媒运营：快速生成适配多平台的日常发帖内容",
      "广告投放：Facebook/Google/TikTok 广告文案多版本 A/B 测试"
    ],
    pros: [
      "一站式多功能平台，覆盖从博客到广告到社媒的完整文案需求",
      "内置 SEO 分析工具，生成内容时同步优化搜索排名",
      "Chatsonic 支持实时联网，解决 AI 知识过期问题",
      "中文支持优秀，中文内容生成质量在同类工具中属于上乘",
      "Brand Voice 功能可学习品牌调性，多篇内容风格一致"
    ],
    cons: [
      "免费额度有限，高频使用需要订阅付费版",
      "长篇文章偶有逻辑断层，需要人工编辑校对",
      "GPT-3.5 基础模型在复杂推理任务上能力有限",
      "部分高级模板仅对付费用户开放"
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
    usage_guide: "第一步：注册与首次设置\\n访问 notion.so，点击 Sign Up 使用邮箱或 Google 账号注册。\\n首次进入会看到引导模板（Notion Basics），建议花 10 分钟快速过一遍，了解块编辑、页面嵌套和数据库基础概念。\\n\\n第二步：创建工作空间\\n点击左侧栏 + New Page 创建新页面，输入页面名称。\\n页面内可嵌套子页面（点击 + 图标或输入 /page），形成层级结构。\\n使用模板：点击页面内模板按钮，从模板库选择「会议记录」「项目管理」「读书笔记」等预设模板。\\n\\n第三步：块编辑基础\\n在任何页面输入 / 打开块菜单，常用块类型：\\n- /heading1/2/3：标题\\n- /bullet：无序列表\\n- /numbered：有序列表\\n- /todo：待办事项\\n- /toggle：折叠内容\\n- /code：代码块\\n- /image/file：插入图片或文件\\n拖拽块左侧 ⋮⋮ 图标可调整顺序和层级。\\n\\n第四步：数据库（Database）\\n输入 /database 创建数据库，支持 6 种视图：\\n- Table：电子表格式，适合结构化数据\\n- Board：看板卡片式，适合项目管理\\n- Calendar：日历视图，适合日程管理\\n- Gallery：卡片画廊，适合素材管理\\n- List：列表式，适合快速浏览\\n- Timeline：甘特图，适合长期项目排期\\n在 Table 视图中，点击右上角 + New 添加属性（Type）：Select、Multi-select、Person、Date、URL、Files 等。\\n\\n第五步：Notion AI 使用\\n在任何页面或选中文字后，按空格键或点击 Ask AI 按钮唤出 AI 助手：\\n- 选中文字后：Summarize（总结）、Improve writing（润色）、Translate（翻译）、Explain（解释）\\n- 空白处：直接提问或让 AI 帮你写内容\\n- /ai：输入指令让 AI 执行特定任务（如「帮我写一封感谢邮件」）\\n\\n第六步：团队协作\\n点击右上角 Share 邀请团队成员，设置权限（Full access/Can edit/Can comment/Can view）。\\n@提及同事添加评论，在评论中使用 /vote 创建投票。\\n开启 Page comments 对页面整体添加评论。\\n\\n第七步：连接与自动化\\nSettings & Members → Connections，连接 Slack、Google Drive、GitHub、Notion API 等。\\n使用 Notion API 可以读写页面内容，适合开发者搭建自动化工作流。",
    use_cases: [
      "个人知识管理：用数据库管理读书笔记、课程笔记、项目复盘",
      "团队协作：共享会议记录、OKR 追踪、团队 Wiki 知识库",
      "项目管理：用看板或 Timeline 管理产品开发里程碑和任务分配",
      "内容资产库：用 Gallery 视图管理图片、设计稿、文案素材"
    ],
    pros: [
      "All-in-One 平台，一站式替代笔记/文档/任务/表格等多个工具",
      "数据库功能极其强大，支持多种视图灵活切换",
      "Notion AI 内置免费额度，基础写作辅助不付费也能用",
      "模板库丰富，从创业百科到健身计划都有现成模板",
      "开放 API + 社区集成，支持连接 100+ 第三方工具"
    ],
    cons: [
      "免费版有页面数量限制（个人用户 1000 页，超出需付费）",
      "中文界面和搜索体验不如英文版完善",
      "数据库复杂功能有一定学习曲线，新手容易迷失",
      "离线体验较差，必须联网才能编辑（离线模式仅限桌面端）",
      "多人实时协作时性能下降，复杂页面加载较慢"
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
    usage_guide: "第一步：注册与连接\\n访问 surferseo.com，点击 Start 7-day Trial 注册账号。\\n注册后进入 Dashboard，需要先安装 Surfer 浏览器扩展（Chrome 推荐）或使用内置 Content Editor。\\n连接 Google 账号可导入 Search Console 数据，了解现有内容排名情况。\\n\\n第二步：Keyword Research（关键词研究）\\n点击左侧 Keyword Research，输入种子关键词（如「AI写作工具」）。\\n系统返回关键词列表，包含：\\n- Volume：月搜索量\\n- KD（Keyword Difficulty）：竞争难度\\n- CPC：广告点击成本\\n- Q（问题型关键词）：适合 FAQ 和 People Also Ask 区块\\n筛选低难度（KD < 30）+ 高相关性的关键词作为目标词。\\n点击关键词可查看 SERP 详情，了解竞争对手内容结构。\\n\\n第三步：Content Editor（写文章）\\n点击左侧 Content Editor，输入目标关键词，选择目标语言和文章类型（Article/Blog Post/Product Page）。\\n右侧面板显示 Content Score（0-100），实时反映当前内容的 SEO 完善程度。\\n按 NLP 建议添加关键词：用绿色标注已包含的关键词，黄色为建议添加，红色为缺失。\\nSurfer 会提示：目标关键词应出现在 H1/H2/H3 标题中、特定关键词密度建议、相关词和 LSI 关键词建议添加，以及内容长度建议。\\n\\n第四步：SERP Analysis（竞品分析）\\n在 Content Editor 页面点击 SERP Analysis，查看当前关键词下排名前 10 的页面。\\n分析每个竞争对手的：字数、H2 结构、内链数量、图片数量、外链数量。\\n学习竞争对手做得好的地方，识别内容缺口作为差异化方向。\\n\\n第五步：AI Outline（AI 大纲生成）\\n在 Content Editor 输入关键词后，点击 Generate Outline，AI 基于竞品分析结果生成文章大纲。\\n大纲包含 H2/H3 结构，每个章节有描述性引导语，可直接拖拽调整顺序。\\n确认大纲后，点击 Open in Editor 在 AI 辅助下撰写内容，边写边看 Content Score 变化。\\n\\n第六步：内链建议\\n撰写文章时，Surfer 自动扫描网站内容，给出内部链接建议。\\n点击建议可预览目标文章摘要，确认后自动插入锚文本链接。\\n\\n第七步：发布与追踪\\n文章发布后，在 Surfer Content Audit 中追踪排名变化。\\n定期查看哪些关键词排名上升，哪些文章需要进一步优化。",
    use_cases: [
      "内容营销团队：批量生产 SEO 友好的营销文章，提升有机搜索流量",
      "独立博主：优化文章结构，快速超越竞争对手排名",
      "SEO 专员：关键词研究 + 内容优化一体化工作流"
    ],
    pros: [
      "Content Editor 实时评分，边写边优化，无需事后检查",
      "AI Outline 功能基于真实竞品数据，大纲质量高",
      "NLP 语义分析先进，不仅看关键词密度还分析语义相关性",
      "内链建议功能帮助建立站内链接结构，提升整体域名权重",
      "与 Jasper、WordPress、Google Docs 等主流工具集成"
    ],
    cons: [
      "月订阅价格较高（$59/月起），个人博主负担较重",
      "仅支持英文关键词分析，对中文 SEO 支持有限",
      "Content Score 并不等于排名保证，内容质量仍是核心",
      "免费试用仅 7 天且功能受限，无法充分评估",
      "过度依赖 Surfer 建议可能导致内容同质化"
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
    usage_guide: "第一步：基础去背景（3步完成）\\n打开 remove.bg，拖拽图片到上传区域，或点击 Upload Image 选择本地文件。\\n等待 3-5 秒，AI 自动完成抠图，主体保留、背景消失。\\n点击 Download 下载 PNG 格式（透明背景）或 JPG（白色背景）。\\n\\n第二步：手动微调（边缘不完美时）\\n点击 Edit 进入编辑器，使用 Erase（擦除）和 Restore（恢复）工具精修边缘。\\n放大图片仔细处理头发丝、羽毛等复杂边缘区域。\\n使用 Refine Edge 工具平滑过渡边缘，减少锯齿感。\\n\\n第三步：更换背景\\n点击 Change Background，选择背景类型：\\n- Solid Color：纯色背景（可选颜色）\\n- Image：上传自定义背景图\\n- Smart Background：AI 自动生成与环境匹配的自然背景\\n确认背景合成效果自然后下载。\\n\\n第四步：添加阴影效果\\n点击 Effects 标签，选择阴影类型：\\n- Natural Shadow：自然投影，适合产品照\\n- Drop Shadow：硬边投影，适合图标类素材\\n- Long Shadow：长投影，现代设计风格\\n调整阴影的模糊度、偏移距离和透明度达到最佳效果。\\n\\n第五步：批量处理\\n点击 Batch 进入批量模式，最多一次上传 30 张图片。\\n设置统一处理参数（去背景/换背景/加阴影），点击 Process 批量处理。\\n处理完成后点击 Download All 打包下载，或逐一下载。\\n\\n第六步：API 接入（开发者）\\n注册后进入 Dashboard → API Key，复制个人 API Key。\\n调用示例（cURL）：\\n  curl -H 'API-Key: YOUR_KEY' -F 'image_file=@photo.jpg' https://api.remove.bg/v1.0/removebg\\n返回处理后的图片文件，支持设置输出尺寸。适合电商、影楼、设计工作室自动化批量处理。",
    use_cases: [
      "电商卖家：产品白底图快速生成，提升商品主图专业度",
      "设计师：抠图换背景，快速获取透明素材用于海报/名片/包装设计",
      "摄影师/影楼：证件照换背景，无需手动钢笔抠图"
    ],
    pros: [
      "操作极其简单，3步完成抠图，完全不需要设计基础",
      "AI 边缘处理精度高，复杂主体（头发、羽毛、毛绒玩具）效果出色",
      "处理速度快（3-5秒/张），批量处理效率高",
      "提供 API 接口，支持与企业系统集成，适合规模化使用",
      "Batch 批量处理功能对电商卖家非常实用"
    ],
    cons: [
      "免费版仅能下载小尺寸图片（626px），大尺寸需要付费",
      "每月免费额度有限（1 credits/月），超出需购买套餐",
      "处理极低分辨率或背景与主体对比度低的图片时效果较差",
      "无法处理非常复杂的场景（如半透明物体、烟雾、火焰）",
      "背景合成功能较为基础，不支持高级图像融合"
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
    usage_guide: "第一步：基础改写（Paraphraser）\\n访问 quillbot.com，无需注册可直接使用（免费版有功能限制）。\\n将需要改写的英文文本粘贴到左侧输入框。\\n点击 Paraphraser 输入框下方的模式选项：\\n- Standard：标准改写，平衡原创度和可读性\\n- Formal：正式语气，适合商务邮件和学术写作\\n- Simple：简单易懂，降低词汇难度\\n- Creative：创意改写，允许更大变化\\n- Fluency：提升流畅度，适合语法较多错误的原文\\n- Shorten：缩短表达长度\\n- Expand：扩展表达长度\\n拖动 Synonym 滑块（Low/Medium/High）控制词汇替换幅度。\\n右侧预览改写结果，点击 Copy 复制或点击 Rewrite Again 重新改写。\\n\\n第二步：语法检查（Grammar Checker）\\n将文本粘贴到 Grammar Checker（或在 Paraphraser 切换到该标签），AI 标出所有错误。\\n每条错误显示解释和修正建议，点击 Apply 接受单条修改，或点击 Apply All 一键接受全部。\\n\\n第三步：摘要生成（Summarizer）\\n切换到 Summarizer 标签，粘贴长篇文章或输入 URL（QuillBot 自动抓取内容）。\\n拖动 Summary Length 滑块调整摘要长度（1-10 句或百分比形式）。\\n点击 Summarize 生成摘要，适合快速了解长文章核心内容。\\n\\n第四步：翻译\\n切换到 Translator 标签，输入文本，默认翻译语言为 English。\\n点击语言选择器，切换源语言和目标语言（共 45+ 语言，支持中文互译）。\\n注意：QuillBot 翻译质量不如专业翻译工具，适合辅助理解。\\n\\n第五步：Co-Writer 综合写作\\n点击 Co-Writer 进入综合写作模式，提供从大纲到完稿的全流程辅助：\\n- 左侧输入主题或关键词，AI 生成文章大纲\\n- 选中段落可调用 Paraphraser 改写或 Grammar Checker 纠错\\n- 右下角有 Citations 引用查找功能\\n\\n第六步：Chrome 扩展\\n安装 QuillBot Chrome 扩展，在以下场景直接使用：\\n- Google Docs：选中文字点击扩展图标直接改写/纠错\\n- Gmail：写邮件时扩展纠错，避免发送带语法错误的邮件\\n- Twitter/X：发帖前改写，提升表达质量\\n\\n第七步：Premium 订阅\\n免费版每次改写限 125 字，Premium（$6.75/月）无限字数 + 所有模式解锁 + 抄袭检测。\\nAcademic 订阅（$9.95/月）额外包含期刊风格检查和引用格式化。",
    use_cases: [
      "英语写作辅助：留学生/职场人士提升英文邮件和报告质量",
      "内容编辑：快速润色和改写已有内容，提升原创度和可读性",
      "学术写作：论文降重、改写、语法检查和引用格式化"
    ],
    pros: [
      "完全免费版功能已经足够日常写作润色使用",
      "7 种改写模式覆盖面广，从正式商务到创意写作都能满足",
      "Chrome 扩展集成优秀，在 Gmail/Docs 等网页端随时调用",
      "Co-Writer 提供从大纲到完稿的一站式写作体验",
      "操作简单，无需学习成本，粘贴即可使用"
    ],
    cons: [
      "免费版有字数限制（125 字/次），长段落需分段处理",
      "改写质量中等，复杂学术内容的深度改写仍需人工审核",
      "仅支持英文（主打），中文场景完全无法使用",
      "翻译功能不如 DeepL 和 Google Translate 专业",
      "抄袭检测功能需付费，高级学术写作需额外订阅"
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
    usage_guide: "第一步：注册与工作区设置\\n访问 jasper.ai，点击 Start Free Trial（7天免费），使用邮箱或 Google 账号注册。\\n注册后创建 Workspace（工作区），输入公司/团队名称。\\n在 Account Settings 中设置默认语言（建议设为英文以获得最佳效果）。\\n\\n第二步：设置 Brand Voice（品牌声音）\\n点击左侧 Brand → Add a Brand，填写品牌基本信息：公司名称、tagline、产品类别、目标受众描述。\\n上传品牌文档：品牌指南、风格指南、现有营销文案（PDF/Word/TXT 均可）。\\nJasper AI 学习后，生成的所有内容会自动保持与品牌调性一致的风格、用词和语气。\\n\\n第三步：模板生成内容\\n进入 Dashboard → Templates，选择内容类型：\\n- Blog Post Intro Paragraph：博客开头段\\n- Product Description：产品描述\\n- Facebook Ad Headline：Facebook 广告标题\\n- Email Subject Line：邮件主题\\n填入必要信息（产品名、关键词、目标受众等），点击 Generate。\\nJasper 会生成多个版本供选择，可继续让 AI 改写或手动调整。\\n\\n第四步：Boss Mode 自由写作\\n进入 Jasper Editor，在输入框用自然语言描述需求，例如：\\n「帮我写一篇关于 AI 在电商中应用的文章，2000字，面向电商卖家，语气专业但易懂」\\n按 Ctrl+Enter 或 Cmd+Enter 提交，Jasper 开始逐句生成内容。\\n生成过程中可随时输入 /commands 指令：\\n- /fix grammar：修正语法\\n- /make it shorter/longer：调整长度\\n- /change tone：改换语气\\n- /summarize：总结前文\\n\\n第五步：Surfer SEO 集成（需订阅 Surfer）\\n在 Editor 右侧打开 Surfer SEO 面板，输入目标关键词。\\nContent Score 实时显示，Jasper 会自动参考 SEO 建议调整内容。\\n\\n第六步：Recipes（自动化工作流）\\n点击 Recipes 查看社区分享的提示词模板，例如「90天内容日历」「产品发布文案套件」。\\n点击 Use 套用模板，修改关键信息即可批量生成系列内容。\\n\\n第七步：Chrome 扩展\\n安装 Jasper Chrome 扩展后，在任意网页（Google Docs、Gmail、LinkedIn）点击扩展图标直接调用 AI 写作。\\n无需切换到 Jasper 网站，在工作流中直接使用。",
    use_cases: [
      "品牌企业营销团队：批量生成多渠道（官网/社媒/邮件）品牌一致的内容",
      "内容代理机构：为客户生产大规模 SEO 内容，保持品牌调性",
      "跨境电商：生成多语言产品描述和营销文案"
    ],
    pros: [
      "Brand Voice 功能强大，真正实现品牌调性一致的批量内容生产",
      "模板库丰富（50+），覆盖绝大多数常见文案场景",
      "Surfer SEO 集成让内容生成和 SEO 优化无缝衔接",
      "Boss Mode 自然语言交互灵活，适合复杂创意写作",
      "Chrome 扩展实用，在任何网页都能随时调用 AI"
    ],
    cons: [
      "价格较高（Starter 计划 $49/月起，Boss Mode $99/月起）",
      "对中文支持不如英文，中文内容需要更多人工润色",
      "需要熟悉 Templates 和 Commands 才能发挥最大效率",
      "免费试用仅 7 天且功能受限",
      "内容原创度非 100%，重要内容仍需事实核查"
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
    usage_guide: "第一步：注册与了解界面\\n访问 copy.ai，点击 Get Started 邮箱注册（无需信用卡）。\\n登录后 Dashboard 显示：Workflows（工作流）、Library（模板库）、Infobase（品牌知识库）。\\n左侧导航分为 Contents（内容生成）、Workflows（自动化）和 Infobase（品牌知识）。\\n\\n第二步：使用模板生成内容\\n点击 Library，选择内容类型分类或直接搜索（如「Facebook Ad」）。\\n选择模板后，填写必填信息：\\n- 产品/服务名称\\n- 核心卖点（3-5个）\\n- 目标受众\\n- Call to Action（期望用户做什么）\\n点击 Create Content，AI 生成 3 个版本供选择，点击选中版本可继续改写（Regenerate/Revise）。\\n\\n第三步：Infobase（品牌知识库）\\n点击 Infobase → Add Information，添加品牌信息：\\n- Brand Story：品牌故事和使命\\n- Products/Services：产品/服务详情\\n- Target Audience：目标受众画像\\n- Tone of Voice：品牌语气风格\\n添加后，生成任何内容时 AI 会自动参考 Infobase，生成的品牌一致性更强。\\n\\n第四步：Workflows（自动化工作流）\\n点击 Workflows → Create Workflow，预设工作流例如「Product Launch Sequence」：\\nStep 1: 生成产品名称 → Step 2: 生成产品描述 → Step 3: 生成落地页文案 → Step 4: 生成社交媒体帖子\\n一次填写核心信息，AI 沿工作流自动完成全套营销文案。\\n\\n第五步：多语言生成\\n在任何模板中切换语言选项，支持 95+ 语言。\\n生成英文内容后，点击 Translate 选择目标语言，AI 翻译保持原意同时适配当地文化表达。\\n\\n第六步：API 集成\\n进入 Settings → API 获取 Key，调用 REST API 批量生成内容。\\n示例：将 Copy.ai 集成到 CRM 系统，当销售创建新客户记录时自动生成个性化跟进邮件。",
    use_cases: [
      "B2B 销售团队：批量生成个性化销售邮件和外发信息",
      "产品运营：一次性生成新品发布全套文案（落地页 + 邮件 + 社媒）",
      "跨境电商：多语言产品描述和地区化营销内容"
    ],
    pros: [
      "Infobase 功能让品牌知识积累起来越用越准，生成内容一致性高",
      "Workflows 自动化工作流大大提升批量内容生产效率",
      "95+ 语言支持优秀，多语言出海团队首选",
      "模板分类清晰，90+ 场景覆盖全面",
      "API 集成能力强，适合企业级自动化场景"
    ],
    cons: [
      "免费版额度较少（100 credits/月），超出需付费",
      "长篇文章生成质量不如专业博客写作工具",
      "Infobase 需要手动维护，品牌信息更新后历史内容不会自动同步",
      "中文支持较弱，中文场景更适合 Writesonic 等工具"
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
    usage_guide: "第一步：注册\\n访问 rytr.me，点击 Start Free 邮箱注册，或直接用 Google 账号登录。\\n新用户每月有 5000 字符免费额度（永久），足够个人日常写作使用。\\n\\n第二步：选择用例（Use Case）\\nDashboard 首页点击 Use Case 下拉菜单，Rytr 提供 20+ 场景：\\n- Blog Section Writing：博客正文段落\\n- Email：邮件写作\\n- Ad Copy：广告文案\\n- Social Media：社媒帖子\\n- SEO Meta Title & Description：SEO 标题和描述\\n- Article/Guest Post：完整文章\\n- Lyrics：歌词创作\\n- Interview Questions：面试问题\\n选好后进入编辑器。\\n\\n第三步：配置写作参数\\n设置 4 个核心参数：\\n- Language：写作语言（支持中文，选「Chinese Simplified」）\\n- Tone：语气风格（Casual/Formal/Persuasive/Humorous 等）\\n- Key Points：关键要点（用逗号分隔，AI 围绕这些点展开）\\n- Number of Variants：生成几个版本（1-3）\\n\\n第四步：生成与编辑\\n点击 Ryse Me，AI 基于关键要点生成内容。\\n不满意可点击 Regenerate 重新生成，或手动在编辑器中修改。\\n使用 More 选项：\\n- Expand：扩展当前段落\\n- Rewrite：改写当前内容\\n- Append：追加内容\\n\\n第五步：查重检测\\n点击 Check Plagiarism，Rytr 调用第三方查重工具检测原创度。\\n重复率高的段落高亮显示，可针对性改写。\\n\\n第六步：批量生成\\n在左侧栏 My Team → Campaigns，创建写作项目，将同类型内容放在同一 Campaign 下管理。\\n可一次性生成多条内容（如 10 条相似产品的广告文案），统一风格管理。",
    use_cases: [
      "个人博主/自媒体：快速生成博客文章和社交媒体内容",
      "电商卖家：批量生成 Amazon/淘宝/Shopify 产品描述",
      "Freelancer 自由撰稿人：多客户、多风格内容高效生产"
    ],
    pros: [
      "价格极其实惠，个人免费版额度对轻度用户足够",
      "用例模板清晰明确，新手也能快速上手",
      "支持 30+ 语言，中文写作质量在低价工具中算优秀",
      "内置查重功能，写完直接检查原创度方便",
      "多风格选项灵活，同一内容可生成不同语气版本"
    ],
    cons: [
      "免费版输出有 Rytr 品牌水印，需要付费去除",
      "长篇文章逻辑连贯性较差，适合短文本而非深度内容",
      "缺乏 Brand Voice 功能，无法保持多篇内容的品牌一致性",
      "无 API 接口，无法与企业系统集成",
      "相较 Jasper 等高端工具，AI 生成内容的创意和质量上限较低"
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
    usage_guide: "第一步：注册与首次设置\\n访问 pictory.ai，点击 Start Free Trial（需信用卡验证，免费试用 3 个视频）。\\n登录后进入 Dashboard，有 4 个核心功能：Script to Video / Article to Video / Edit Videos using Text / Visuals to Video。\\n首次使用建议先设置 Brand（品牌）：Settings → Brand → 上传 Logo、选择品牌色（Pictory 会自动应用到所有视频）。\\n\\n第二步：文章转视频（Article to Video）\\n点击 Article to Video，粘贴博客文章 URL 或直接粘贴纯文本（建议 500-3000 字）。\\n点击 Proceed，AI 自动分析文本提取关键语句和主题。\\n预览 AI 生成的故事板：每个字幕片段对应一段视频素材，可手动替换/删除某个场景或调整字幕文字。\\n选择视频比例（16:9 横向 / 9:16 竖版 / 1:1 方形），适配不同平台。\\n\\n第三步：从长视频提取精彩片段（Video Highlights）\\n点击 Edit Videos using Text，上传长视频（支持 MP4，最大 6GB）。\\nAI 自动将视频转录为文字稿显示在左侧。\\n在文字稿中用鼠标选中感兴趣的内容片段（可多选），右侧预览对应视频位置。\\n点击 Create Highlights，AI 将选中片段组成为完整短片，可设置片头片尾。\\n\\n第四步：字幕与翻译\\n所有视频自动生成字幕，可在 Captions 中：\\n- 选择字幕样式（字体/颜色/背景/位置）\\n- 开启 Auto Translation，翻译成 20+ 语言\\n- 导出 SRT/VTT 字幕文件\\n\\n第五步：添加品牌元素\\n点击 Branding，在视频开头添加 Logo 动画（可选择出现时长和位置）。\\n设置片头片尾：可添加固定的片头标题和 CTA（如「关注我们」）。\\n所有设置保存为 Brand Kit，下次使用时一键应用。\\n\\n第六步：导出与分享\\n点击 Continue → Preview，满意后点击 Generate Video。\\n等待 2-5 分钟（视视频长度），生成后直接 Download MP4。\\n支持直接发布到 YouTube / Hootsuite / Sprout Social。",
    use_cases: [
      "内容营销：将博客文章/公众号长文转化为短视频，提升内容复用率",
      "教育培训：将 webinar/课程长视频提取精华片段做二次传播",
      "社交媒体运营：将品牌宣传视频拆分为多个短片适配不同平台"
    ],
    pros: [
      "文章转视频功能强大，将文字内容自动化视频化，大幅降低视频制作门槛",
      "AI 自动匹配合适素材，无需手动搜索和剪辑",
      "品牌套件功能让批量视频保持视觉一致性",
      "字幕翻译功能优秀，一份内容多语言版本一键生成",
      "Video Highlights 从长视频提取精华非常适合做短视频矩阵"
    ],
    cons: [
      "视频素材库质量参差不齐，部分素材较老旧",
      "AI 自动匹配的素材偶有与内容不匹配的情况，需手动调整",
      "免费试用限制较多（仅 3 个视频），完整功能需订阅 $19/月起",
      "处理速度较慢，长视频（10分钟以上）生成需等待较久",
      "不支持自定义字体，中文字幕字体选择受限"
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
    usage_guide: "第一步：注册与界面介绍\\n访问 heygen.com，点击 Start Creating Free（5 分钟免费视频）。\\n注册后进入 Studio 界面，左侧为模板和素材库，右侧为视频预览和编辑区。\\n主要功能入口：Create Video（新建视频）、Instant Avatar（快速数字人）、Photo Avatar（照片数字人）、VoiceCloner（声音克隆）。\\n\\n第二步：使用模板快速创建视频\\n点击 Templates，选择视频类型：\\n- Marketing：产品介绍、品牌宣传、活动推广\\n- Learning & Development：企业培训、在线课程\\n- News & Update：新闻播报、公告\\n- Custom：空白模板自由创作\\n选好模板后进入编辑：\\n1. 选择数字人：点击视频中的占位数字人，从 AI Avatars 库选择（按年龄/性别/风格筛选）。\\n2. 输入脚本：在左侧 Script 框输入讲解文字（注意字数限制，每段不超过 200 字）。\\n3. 调整配音：选择语言和声音（可选不同性别和风格），点击 Preview 预览效果。\\n4. 添加背景/音乐：在 Scenes 中添加背景图片或音乐。\\n\\n第三步：Photo Avatar（照片数字人）\\n点击 Photo Avatar → Upload Photo，上传一张正面清晰照片（建议五官完整、背景简洁）。\\n等待 1-2 分钟 AI 训练完成后，输入脚本，照片中的人物会以对口型方式朗读。\\n适用于：用真人照片生成虚拟代言人，一致性好且无需拍摄。\\n\\n第四步：Studio Avatar（专属数字人训练）\\n点击 Studio Avatar → Start Recording，按提示录制 2-5 分钟视频（需在安静环境，正面面对摄像头，说话清晰）。\\n上传 15-30 分钟视频可获得更好的训练效果。\\n训练完成后（通常 30-60 分钟），生成专属的数字人形象，可在所有视频中使用。\\n\\n第五步：声音克隆（Voice Cloner）\\n点击 VoiceCloner → Upload Audio，上传 1-5 分钟清晰音频（朗读或唱歌均可）。\\nAI 训练后生成克隆声音，之后在所有视频中可使用此声音，无需每次配音。\\n\\n第六步：多语言配音（Dubbing）\\n创建好视频后，点击 More Actions → Translate，选择目标语言（40+ 种）。\\nAI 自动翻译脚本并配音，一键生成多语言版本（如英文视频转中文/日语/西班牙语）。\\n非常适合：同一个视频内容本地化为多国家市场版本。\\n\\n第七步：导出\\n点击右上角 Publish，选择分辨率（720p/1080p），点击 Export 下载 MP4。",
    use_cases: [
      "跨境电商：用 AI 数字人多语言讲解产品，无需拍摄多个语言版本",
      "企业培训：批量制作多语言员工培训视频，降低培训团队差旅成本",
      "内容创作者：建立个人数字人 IP，自动化生成视频内容矩阵"
    ],
    pros: [
      "Photo Avatar 功能创新，只需一张照片即可生成数字人视频",
      "Studio Avatar 训练专属形象，适合品牌长期使用",
      "多语言配音（40+）一键本地化，跨境内容制作效率极高",
      "模板库丰富，可快速套用制作专业级营销视频",
      "VoiceCloner 声音克隆技术强，克隆声音真实自然"
    ],
    cons: [
      "免费版限制多（仅 5 分钟视频，有 HeyGen 水印），完整功能订阅 $29/月起",
      "Photo Avatar 对照片质量要求较高，低质量照片效果差",
      "Studio Avatar 训练需上传真人视频，涉及隐私合规问题需注意",
      "复杂场景（如多人物对话）支持有限",
      "生成视频最长 10 分钟，超长内容需分段处理"
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
  {
    id: "iask-ai",
    icon: "/tool-icons/iask-ai.png",
    slug: "iask-ai",
    name: "iAsk AI",
    website: "https://iask.ai",
    description: "免费AI搜索引擎，基于实时网络信息提供权威准确的AI问答",
    type: "AI大模型",
    affiliateUrl: "",
    commissionRate: "暂无佣金计划",
    features: [
      "完全免费的AI搜索问答引擎，无需注册即可使用",
      "基于实时网络信息搜索，回答包含权威来源引用",
      "幻觉率极低，专门针对准确性和事实性优化",
      "支持多语言搜索，涵盖中英文及全球主流语言",
      "MMLU-Pro评测得分85.85%，多项AI能力测试全球领先"
    ],
    usage_guide: "第一步：访问 iask.ai，在搜索框中输入任何问题。\n\n第二步：iAsk AI基于全球信息源进行搜索分析，返回带有引用来源的精准答案。\n\n第三步：每个回答下方显示引用来源链接，点击可跳转到原始网页核实信息。\n\n第四步：如需深入了解，可继续追问，iAsk会结合上下文提供更详细的解答。\n\n第五步：进阶用户可订阅iAsk Pro，获得更强大的AI搜索能力和更快的响应速度。",
    use_cases: [
      "学术研究：快速查找权威资料并获取带有来源的答案",
      "新闻追踪：实时了解最新事件和发展动态",
      "技术问题排查：获取准确的技术文档和解决方案"
    ],
    pros: [
      "完全免费使用，无需注册和付费",
      "引用来源权威可靠，减少虚假信息风险",
      "准确率极高，幻觉率在同类工具中最低",
      "响应速度快，无需等待长时间加载"
    ],
    cons: [
      "无官方affiliate计划（无变现价值）",
      "功能相对单一，无对话管理和内容保存功能",
      "Pro版本性价比不如直接订阅ChatGPT等主流AI"
    ],
    related_tools: ["perplexity", "kimi", "yiyan"],
  },
  {
    id: "deepl",
    icon: "/tool-icons/deepl.png",
    slug: "deepl",
    name: "DeepL",
    website: "https://www.deepl.com",
    description: "AI神经机器翻译工具，翻译质量领先行业，支持文档和API集成",
    type: "效率办公",
    affiliateUrl: "https://www.deepl.com/pro-api",
    commissionRate: "依协议（推荐API用户）",
    features: [
      "业界领先的翻译准确度，在多项盲测中超越Google翻译",
      "支持31种语言互译，覆盖全球主要语言",
      "文档翻译：直接上传PDF、Word、PPT整文档整页翻译",
      "AI写作助手（DeepL Write）：修正语法、优化表达风格",
      "提供API接口，支持企业级自动化翻译工作流集成"
    ],
    usage_guide: "第一步：访问 deepl.com/translator，进入在线翻译界面。\n\n第二步：在左侧输入框粘贴需要翻译的文本或上传文档（支持.pdf/.docx/.pptx）。\n\n第三步：选择源语言（自动检测）和目标语言，DeepL自动完成翻译。\n\n第四步：点击译文中的单个词汇或句子，可查看备选翻译并手动调整。\n\n第五步：注册DeepL账号（免费额度：50万字符/月），订阅Pro版获取无限翻译和高级功能。\n\n第六步：开发者可在 Settings → API Key 获取密钥，通过REST API批量翻译或集成到工作流。\n\n第七步：使用 DeepL Write（需账号）：在输入框输入英文文本，AI修正语法并优化表达风格。",
    use_cases: [
      "跨境电商：产品描述和客服对话多语言本地化",
      "企业文档：合同、报告、PPT等整文档专业翻译",
      "学术翻译：论文摘要和研究资料快速翻译参考"
    ],
    pros: [
      "翻译质量业界领先，尤其在专业术语和长句处理上优势明显",
      "文档翻译功能强大，整页整文档翻译保持格式",
      "中文翻译质量优秀，地道自然无明显机翻译感",
      "API接入简单，适合企业批量翻译自动化",
      "Write功能对英文写作提升帮助大"
    ],
    cons: [
      "免费版有字符额度限制（50万字符/月），超出需订阅",
      "部分小语种翻译质量不如主流语言",
      "文档翻译功能免费版不可用",
      "与Google Translate相比，覆盖语言数量较少"
    ],
    related_tools: ["chatpdf", "notion", "writesonic"],
  },
  {
    id: "adcreative-ai",
    icon: "/tool-icons/adcreative-ai.png",
    slug: "adcreative-ai",
    name: "AdCreative.ai",
    website: "https://www.adcreative.ai",
    description: "AI广告创意生成平台，批量生成高转化率广告素材和分析报告",
    type: "写作AI",
    affiliateUrl: "https://www.adcreative.ai",
    commissionRate: "30天Cookie首单佣金",
    features: [
      "AI广告创意批量生成：一次性生成上百个广告文案和视觉素材",
      "Creative Performance Score：AI预测每个广告的转化率评分",
      "竞品广告分析：输入竞争对手域名，AI分析其最佳广告策略",
      "视频广告生成：AI生成短视频广告，覆盖TikTok/Reels/YouTube",
      "一键生成各平台尺寸：自动适配Facebook/Instagram/Google/TikTok等"
    ],
    usage_guide: "第一步：访问 adcreative.ai，点击 Start for Free 使用邮箱或Google账号注册。\n\n第二步：创建品牌：在 Brand 页面输入公司名称、上传LOGO、选择品牌配色，AI学习品牌风格。\n\n第三步：生成广告创意\n- 进入 Generate Creatives，输入产品名称、目标受众、主要卖点（USP）。\n- 选择广告类型：Social Posts（社媒图文）、Display Ads（展示广告）、Video Ads（视频广告）。\n- 点击 Generate，AI一次性生成多个版本，每个版本附带 Performance Score（转化率预测）。\n\n第四步：竞品分析（需要订阅）\n- 进入 Competitor Insights，输入竞争对手网站域名。\n- AI自动抓取其在线广告素材，分析哪些广告策略最有效。\n- 基于竞品数据生成差异化广告创意。\n\n第五步：广告疲劳度分析\n- 上传现有广告数据，AI检测哪些广告已出现受众疲劳（CTR下降）。\n- 提示及时更换新广告素材。\n\n第六步：下载和使用\n- 选中满意的广告素材，点击 Download 下载 PNG/MP4。\n- 或直接点击 Publish 发布到连接的广告平台。\n\n第七步：追踪效果\n- 在 Conversion 页面查看不同广告的实际转化数据。\n- AI根据真实数据持续优化后续广告创意质量。",
    use_cases: [
      "广告投放团队：批量生成Facebook/Google/TikTok广告，缩短制作周期",
      "独立创业者：没有设计师也能产出专业广告素材",
      "电商卖家：生成高转化率商品主图和广告文案"
    ],
    pros: [
      "Creative Performance Score（AI预测评分）非常有价值，投放前就知道哪些广告更容易转化",
      "批量生成效率极高，一次生成数十个版本供选择",
      "竞品分析功能帮助制定差异化广告策略",
      "一键适配多平台尺寸，节省设计时间",
      "已有超过10亿个广告创意被全球顶级品牌使用"
    ],
    cons: [
      "免费试用仅7天且功能受限（仅10个创意额度）",
      "订阅价格较高（Starter $29/月起），中小企业负担较重",
      "生成的广告文案偏模板化，高端创意仍需人工优化",
      "视频广告生成质量不如专业视频制作工具",
      "主要面向B2C电商，B2B企业适用性相对有限"
    ],
    related_tools: ["writesonic", "canva", "anyword"],
  },
  {
    id: "claude",
    icon: "/tool-icons/claude.png",
    slug: "claude",
    name: "Claude",
    website: "https://claude.ai",
    description: "Anthropic推出的AI助手，支持超长上下文和文档分析",
    type: "AI大模型",
    affiliateUrl: "",
    commissionRate: "暂无佣金计划",
    features: [
      "支持20万Token超长上下文，可一次处理数百页文档",
      "Claude 3系列：Haiku（快速）/Sonnet（均衡）/Opus（旗舰）三档模型",
      "强大的文档分析：PDF、Word、PPT、CSV直接上传解读",
      "编程能力出色，支持代码生成、调试和架构设计",
      "内置安全策略，拒绝生成有害内容，适合企业使用"
    ],
    usage_guide: "第一步：访问 claude.ai，点击 Sign Up 使用邮箱、Google或Apple账号注册。\n\n第二步：进入对话界面，在输入框输入问题或任务描述。\n\n第三步：上传文档：点击左侧回形针图标，上传PDF/Word/PPT/CSV/TXT等文件，Claude会自动分析内容。\n\n第四步：选择模型：点击左上角模型切换器，在Haiku（快速）/Sonnet（均衡）/Opus（旗舰）之间选择。\n\n第五步：高级功能\n- Artifacts：生成代码、文档、网站的实时预览窗口\n- 团队协作（Team Plan）：创建团队工作区，共享对话和文档\n- Projects：针对特定项目创建专属上下文空间\n\n第六步：API接入\n- 访问 console.anthropic.com 创建API Key\n- 通过API调用Claude模型，适合开发者集成到自有应用",
    use_cases: [
      "长文档处理：一次分析整本书、完整代码库或数百页报告",
      "内容创作：文章写作、故事创作、营销文案一站式完成",
      "编程辅助：代码审查、重构设计、算法解释"
    ],
    pros: [
      "超长上下文（20万Token）使其在处理长文档时无可匹敌",
      "Claude 3 Opus在多项AI评测中达到领先水平",
      "编程能力强，尤其擅长复杂系统设计和架构讨论",
      "回答准确度高，幻觉率在主流AI助手中属于最低",
      "隐私保护意识强，企业用户放心使用"
    ],
    cons: [
      "无官方affiliate佣金计划",
      "免费版Claude.ai有消息数量限制，高频使用需订阅Pro（$20/月）",
      "中文表达偶尔不如英文地道",
      "图片理解能力弱于GPT-4V",
      "语音交互功能尚未完善"
    ],
    related_tools: ["kimi", "zhipuai", "perplexity"],
  },
  {
    id: "copilot",
    icon: "/tool-icons/copilot.png",
    slug: "copilot",
    name: "Microsoft Copilot",
    website: "https://copilot.microsoft.com",
    description: "微软AI助手，深度集成Windows和Microsoft 365全家桶",
    type: "AI大模型",
    affiliateUrl: "https://www.microsoft.com/en-us/bing/bing-chat",
    commissionRate: "暂无佣金计划",
    features: [
      "深度集成Windows 11系统，直接在桌面端使用AI助手",
      "Microsoft 365 Copilot：Word/Excel/PPT/Outlook全面AI辅助",
      "Bing搜索增强：实时联网，回答基于最新网络信息",
      "DALL-E 3图像生成：直接在聊天中生成高质量图片",
      "免费使用，无需订阅即可体验核心AI功能"
    ],
    usage_guide: "第一步：访问 copilot.microsoft.com 或在Windows 11任务栏点击Copilot图标。\n\n第二步：使用Microsoft账号登录（可用Outlook/Hotmail账号），开始免费AI对话。\n\n第三步：主要功能入口\n- 对话问答：在输入框输入问题，获取联网搜索结果和AI解答\n- 图像生成：输入 /create 或点击图像生成，输入描述让DALL-E 3生成图片\n- 网页总结：把网页URL发给Copilot，自动总结页面内容\n- 文档处理：告诉Copilot「帮我写一封邮件」「总结这份文档」等\n\n第四步：Microsoft 365 Copilot（需订阅，约$30/月）\n- Word：在文档中调用Copilot，写文章、总结、改写内容\n- Excel：分析数据、生成图表、输入公式建议\n- PowerPoint：输入主题自动生成PPT，或将Word文档一键转PPT\n- Outlook：AI辅助撰写邮件、自动分类收件箱\n\n第五步：开发者使用\n- 访问 bing.com/compose 使用免费AI写作助手\n- 开发者可申请Azure OpenAI API，使用GPT-4和DALL-E能力",
    use_cases: [
      "Windows日常办公：系统级AI助手，提升桌面操作效率",
      "Microsoft 365用户：Word/Excel/PPT文档处理效率倍增",
      "内容创作：结合Bing搜索实时信息和DALL-E 3图像生成"
    ],
    pros: [
      "完全免费即可使用核心AI功能，无需付费订阅",
      "DALL-E 3图像生成质量高，且完全免费使用",
      "深度集成Windows系统，在桌面端使用最方便",
      "Bing联网搜索，回答包含最新信息而非过期数据",
      "Microsoft 365 Copilot（付费）能极大提升办公效率"
    ],
    cons: [
      "无affiliate佣金计划",
      "Microsoft 365 Copilot订阅价格较高（$30/月/用户）",
      "纯对话功能不如ChatGPT丰富",
      "中国大陆访问不稳定，需要VPN",
      "Bing搜索在中文领域的信息覆盖不如百度"
    ],
    related_tools: ["notion", "gamma", "canva"],
  },
  {
    id: "wps-ai",
    icon: "/tool-icons/wps-ai.png",
    slug: "wps-ai",
    name: "WPS AI",
    website: "https://ai.wps.cn",
    description: "金山办公AI助手，集成在WPS Office中提供智能写作和文档处理",
    type: "效率办公",
    affiliateUrl: "",
    commissionRate: "暂无佣金计划",
    features: [
      "WPS文字AI：自动续写文章、润色改写、总结摘要",
      "WPS表格AI：数据智能分析、公式建议、图表生成",
      "WPS演示AI：一键生成PPT、模板推荐、内容优化",
      "PDF文档AI：全文翻译、要点提炼、问答解读",
      "深度集成WPS Office，无需额外下载，在软件内直接调用AI"
    ],
    usage_guide: "第一步：下载并安装 WPS Office（Windows/Mac/移动端均支持）。\n\n第二步：登录WPS账号，在WPS首页或各模块中找到「WPS AI」入口。\n\n第三步：WPS文字AI\n- 打开Word文档，选中文字后点击AI图标，调用续写/润色/翻译功能\n- 空白处点击AI，写入写作需求（如「帮我写一份项目计划书」）\n- 支持长文续写，最多可处理数万字文档\n\n第四步：WPS演示AI\n- 新建演示文稿时点击「智能生成」，输入主题（如「2024年Q3运营方案」）\n- AI自动生成完整PPT大纲和内容，可一键套用模板\n- 也可将Word文档直接导入，AI识别内容后自动生成PPT\n\n第五步：WPS表格AI\n- 打开Excel文件，选中数据区域，点击AI图标\n- 输入分析需求（如「分析这份销售数据的趋势」）\n- AI自动生成数据洞察、图表建议和公式\n\n第六步：PDF处理\n- 用WPS打开PDF，点击AI图标，选择「全文翻译」或「要点提炼」\n- 支持中英互译及多语言翻译",
    use_cases: [
      "职场人士日常办公：报告、方案、邮件快速撰写",
      "学生论文写作：续写、润色、查重和格式调整",
      "企业数据处理：Excel数据分析报表和PPT演示文稿生成"
    ],
    pros: [
      "深度集成WPS Office，使用体验流畅，无需切换工具",
      "PPT智能生成功能强大，大幅缩短制作时间",
      "对中文办公场景优化良好，本地化做得非常出色",
      "个人用户有免费使用额度",
      "支持Windows/Mac/iOS/Android全平台，数据同步方便"
    ],
    cons: [
      "AI功能需要WPS会员（稻壳会员），非完全免费",
      "相较于独立AI工具，功能深度有限",
      "高级AI功能（如长文续写）需订阅超级会员",
      "导出格式有限制，部分格式导出需付费"
    ],
    related_tools: ["notion", "gamma", "chatpdf"],
  },
  {
    id: "jimeng",
    icon: "/tool-icons/jimeng.png",
    slug: "jimeng",
    name: "即梦AI",
    website: "https://jimeng.jianying.com",
    description: "字节跳动推出的AI图像和视频生成工具，深度集成剪映",
    type: "图片AI",
    affiliateUrl: "",
    commissionRate: "暂无佣金计划",
    features: [
      "文生图：输入中文描述词生成高质量图片，支持多种艺术风格",
      "图生图：上传参考图，AI生成保持原图特征的变体作品",
      "AI视频生成：输入描述词或上传图片，生成短视频片段",
      "深度集成剪映：一键将AI生成的图片/视频导入剪映进一步编辑",
      "中文理解优秀：对中文提示词的理解和执行能力强"
    ],
    usage_guide: "第一步：访问 jimeng.jianying.com，使用抖音/头条账号登录。\n\n第二步：文生图\n- 在主界面输入中文描述词（如「古风少女在樱花树下，月光，动漫风格」）\n- 选择画面比例（1:1/16:9/9:16）和风格预设\n- 点击生成，等待10-20秒获得4张候选图片\n- 选中满意的图片，可继续「生成同款」或「变体」\n\n第三步：图生图\n- 点击上传按钮导入本地参考图\n- 调整风格强度（低=保留原图多，高=创意空间大）\n- 输入补充描述词，点击生成AI变体作品\n\n第四步：AI视频生成\n- 选择「图生视频」或「文生视频」\n- 上传图片或输入文字描述\n- 设置运动强度和时长，点击生成\n- 生成后可在剪映中进一步编辑（添加音乐/字幕/转场）\n\n第五步：高级设置\n- 负描述词：输入不希望出现的元素（如「低质量、模糊」）\n- 风格融合：同时选择多种风格叠加效果\n- 参考词广场：浏览他人优秀作品，学习高效提示词",
    use_cases: [
      "内容创作者：快速生成配图和短视频素材",
      "电商卖家：生成商品场景图和营销海报",
      "设计师灵感：快速生成概念图探索创意方向"
    ],
    pros: [
      "中文理解能力出色，对中文提示词响应准确",
      "集成剪映生态，对国内用户友好，上手容易",
      "视频生成功能免费可用（每日有额度限制）",
      "图片生成质量稳定，出图速度快",
      "作为字节系产品，账号体系完善，权益有保障"
    ],
    cons: [
      "无affiliate佣金计划",
      "每日免费额度有限，超出需付费（积分充值）",
      "风格偏向国内审美，国际化场景素材较少",
      "视频生成时长有限（最长15秒），不适合长视频",
      "商用版权需注意，建议仔细阅读使用条款"
    ],
    related_tools: ["midjourney", "leonardo-ai", "fliki"],
  },
  {
    id: "haituo-ai",
    icon: "/tool-icons/haituo-ai.png",
    slug: "haituo-ai",
    name: "海螺AI",
    website: "https://hailuoai.video",
    description: "MiniMax推出的AI对话和内容创作平台，支持语音交互和图像生成",
    type: "AI大模型",
    affiliateUrl: "",
    commissionRate: "暂无佣金计划",
    features: [
      "AI对话助手：支持多轮对话、知识问答和内容创作",
      "语音交互：支持语音输入和AI语音播报，对话更自然",
      "图像创作：文生图、图生图功能，生成质量优秀",
      "小说续写：针对网文创作者优化的长文续写能力",
      "免费额度充足：新用户注册赠送大量免费使用额度"
    ],
    usage_guide: "第一步：访问 hailuoai.video，使用手机号或微信注册登录。\n\n第二步：对话模式\n- 在对话框输入文字问题，体验AI对话和知识问答\n- 点击麦克风图标切换语音输入模式，AI用语音回答\n- 支持长文写作场景切换到「创作模式」\n\n第三步：图像创作\n- 点击左侧「图像」标签，进入图像生成界面\n- 选择文生图或图生图，输入描述词\n- 生成后可继续编辑或下载高清原图\n\n第四步：小说创作\n- 在创作模式中选择「小说续写」\n- 输入已有的小说片段，AI自动续写后续剧情\n- 支持调整续写风格（爽文/虐文/甜文等）\n\n第五步：积分与订阅\n- 每日登录赠送免费积分，足够日常轻度使用\n- 查看积分余额和消耗记录，合理规划使用",
    use_cases: [
      "日常对话问答和信息查询",
      "内容创作者：配图生成和文章续写",
      "语音交互：适合开车等不便打字场景"
    ],
    pros: [
      "语音交互体验流畅，自然对话感强",
      "新用户免费额度充足，体验成本低",
      "MiniMax自研模型，生成质量有保障",
      "图像生成效果在国产AI中表现优秀",
      "小说续写功能对网文作者有针对性帮助"
    ],
    cons: [
      "无affiliate佣金计划",
      "相比ChatGPT/Claude，长上下文能力有限",
      "图像生成版权条款需注意商用场景",
      "部分高级功能需要付费订阅",
      "海外生态和API支持有限"
    ],
    related_tools: ["kimi", "doubao", "tongyi"],
  },
  {
    id: "iflyrec",
    icon: "/tool-icons/iflyrec.png",
    slug: "iflyrec",
    name: "讯飞听见",
    website: "https://www.iflyrec.com",
    description: "科大讯飞语音转文字工具，支持会议录音转写、字幕生成和翻译",
    type: "音频AI",
    affiliateUrl: "https://www.iflyrec.com",
    commissionRate: "依协议",
    features: [
      "语音转文字：录音或上传音频，AI自动转写为文字稿",
      "多语言翻译：支持中文、英文、日文等10+语言实时翻译",
      "会议纪要生成：自动提炼会议要点、关键决策和待办事项",
      "字幕生成：视频音频自动生成字幕文件（SRT/ASS格式）",
      "说话人识别：自动区分不同发言人并标注说话段落"
    ],
    usage_guide: "第一步：访问 iflyrec.com，注册并登录账号。\n\n第二步：录音转写\n- 点击「录音」开始实时录音，AI同步转写成文字\n- 或点击「上传音频」导入 MP3/WAV/M4A 等格式文件\n- 支持最长5小时音频文件，单次处理无时间压力\n\n第三步：转写设置\n- 选择行业领域（医疗/法律/金融/通用），AI自动优化专业术语识别准确率\n- 开启「繁简转换」可输出繁体中文版本\n- 勾选「关键词优化」提升关键信息识别\n\n第四步：结果编辑与导出\n- 转写完成后进入编辑器，可手动修正错别字\n- 点击「生成会议纪要」，AI自动提炼关键信息和待办\n- 点击「导出」，支持Word/PDF/TXT格式，也支持导出字幕文件（SRT/ASS）\n\n第五步：字幕制作（针对视频）\n- 在「字幕导出」中选择目标格式\n- 可直接上传视频文件，讯飞听见自动提取音频并生成字幕\n- 支持时间轴校准，确保字幕与视频精准同步\n\n第六步：移动端使用\n- 下载讯飞听见APP（iOS/Android），录音转写随时进行\n- 重要会议可开启实时转写，他人说话实时显示为文字",
    use_cases: [
      "商务会议：录音转写+会议纪要，节省记录时间",
      "视频字幕：UP主/企业视频快速生成字幕和翻译",
      "采访整理：记者/律师快速将采访录音整理成文字稿"
    ],
    pros: [
      "语音识别准确率行业领先，尤其中文普通话",
      "多语言翻译质量可靠，适合跨境商务场景",
      "会议纪要自动生成功能实用性强",
      "支持超长音频（5小时）单次转写",
      "行业词库优化（医疗/法律/金融）提升专业场景准确率"
    ],
    cons: [
      "免费版有时长限制（录音转写每日60分钟），超出需付费",
      "部分方言识别能力有限",
      "转写后的编辑功能相对基础",
      "导出格式和功能在免费版有较多限制",
      "海外市场支持不如国内完善"
    ],
    related_tools: ["otter-ai", "tongyi", "xinghuo"],
  },
  {
    id: "glarity",
    icon: "/tool-icons/glarity.png",
    slug: "glarity",
    name: "Glarity",
    website: "https://glarity.app",
    description: "AI总结助手，浏览任意网页时一键总结页面内容和生成答案",
    type: "效率办公",
    affiliateUrl: "https://glarity.app",
    commissionRate: "依协议",
    features: [
      "跨平台总结：支持YouTube/Google/推特/B站等50+平台的视频和文章总结",
      "侧边栏AI问答：在浏览网页时，AI读取页面内容后回答你的问题",
      "多语言翻译：任意语言页面一键翻译成目标语言",
      "ChatGPT/Gemini双引擎：可自由切换AI模型获取最佳体验",
      "完全免费：核心功能完全免费使用，无需订阅"
    ],
    usage_guide: "第一步：访问 glarity.app，点击 Install 安装浏览器扩展（Chrome/Edge/Firefox均支持）。\n\n第二步：安装完成后，在浏览器扩展栏找到Glarity图标，点击登录或直接开始使用。\n\n第三步：YouTube视频总结\n- 打开任意YouTube视频，页面右侧自动出现Glarity总结面板\n- AI自动转录视频内容并生成中文摘要（可切换目标语言）\n- 摘要包含：视频核心观点、时间戳章节划分、关键信息点\n\n第四步：网页内容总结\n- 打开任意文章页面，点击扩展图标或使用快捷键（Ctrl+Shift+G）唤出Glarity\n- AI读取页面全文，生成150字以内的核心摘要\n- 也可直接在侧边栏输入问题，AI基于当前页面内容回答\n\n第五步：多语言翻译\n- 打开外文页面，点击翻译按钮\n- AI整页翻译为中文（或你设置的目标语言）\n- 翻译质量高于传统机译，保持原文语义和风格\n\n第六步：切换AI引擎\n- 点击扩展设置，可选择使用 ChatGPT 或 Gemini 作为总结引擎\n- 不同引擎在准确性和速度上各有优势，可按需切换\n\n第七步：自定义快捷键和偏好\n- 在设置中自定义唤起快捷键、默认翻译语言、总结详细程度",
    use_cases: [
      "视频学习：YouTube/B站教程视频快速了解核心内容",
      "新闻阅读：快速浏览外媒报道，无需逐字阅读",
      "市场调研：批量总结竞品页面和行业文章"
    ],
    pros: [
      "完全免费使用，良心产品无收费陷阱",
      "YouTube视频总结功能对学生和知识创作者极其有用",
      "支持50+平台，覆盖主流内容消费场景",
      "侧边栏问答功能比ChatGPT插件更精准（基于当前页面）",
      "轻量级扩展，占用资源少，使用流畅"
    ],
    cons: [
      "高频使用可能有API成本压力，未来有收费风险",
      "视频总结依赖视频字幕质量，无字幕视频效果有限",
      "隐私顾虑：需要读取所有访问页面的内容",
      "页面内容较多时，总结可能遗漏细节",
      "国内浏览器兼容性问题需注意（建议Chrome）"
    ],
    related_tools: ["chatpdf", "perplexity", "kimi"],
  },
  {
    id: "adobe-firefly",
    icon: "/tool-icons/adobe-firefly.png",
    slug: "adobe-firefly",
    name: "Adobe Firefly",
    website: "https://firefly.adobe.com",
    description: "Adobe创意生成式AI，支持文字生成图像、图像编辑和创意填充",
    type: "图片AI",
    affiliateUrl: "",
    commissionRate: "",
    features: [
      "文字生成图像：输入文字描述即可生成高质量图片，支持多种艺术风格",
      "创意填充：智能移除或添加图像元素，无缝拼接自然逼真",
      "文字效果：将普通文字转化为艺术字体和特效图案",
      "与Adobe生态深度集成：可直接在Photoshop、Illustrator中使用",
      "商业安全：训练数据经过筛选，生成内容可安全用于商业用途"
    ],
    usage_guide: "第一步：访问与登录\\n打开 firefly.adobe.com，使用Adobe账号登录（支持Google或Apple账号快速登录）。\\n\\n第二步：文字生成图像\\n在主界面输入英文描述词（Prompt），可添加风格标签如'photorealistic'、'oil painting'等。点击Generate生成4张候选图片，点击任意一张可继续 Variations 或下载。\\n\\n第三步：创意填充（Generative Fill）\\n上传图片，用画笔涂抹要修改的区域，输入文字描述想要添加或移除的内容。AI自动处理并自然融合。\\n\\n第四步：文字效果\\n进入Text to Image，输入单词或短语，选择字体风格模板，生成艺术字效果。\\n\\n第五步：导出与使用\\n点击右上角Export，输出PNG/JPG格式，可直接发送到Photoshop进一步编辑或导出到本地。",
    use_cases: [
      "平面设计师：快速生成概念图和素材",
      "营销人员：制作社交媒体配图和广告素材",
      "内容创作者：为文章和视频生成封面图片"
    ],
    pros: [
      "Adobe品牌保障，生成内容可商用",
      "与Photoshop无缝集成，工作流顺畅",
      "界面简洁易上手，适合初学者",
      "支持中文Prompt输入",
      "定期更新模型，生成质量持续提升"
    ],
    cons: [
      "免费额度有限，高频使用需订阅",
      "部分功能需要Creative Cloud订阅",
      "对复杂场景和手部生成仍有局限",
      "需要网络连接使用",
      "生成结果不可预测，有时需要多次尝试"
    ],
    related_tools: ["midjourney", "leonardo-ai", "remove-bg"],
  },
  {
    id: "pika-labs",
    icon: "/tool-icons/pika-labs.png",
    slug: "pika-labs",
    name: "Pika Labs",
    website: "https://pika.art",
    description: "AI视频生成工具，通过文字描述快速生成高质量视频片段",
    type: "视频AI",
    affiliateUrl: "",
    commissionRate: "",
    features: [
      "文字转视频：输入描述文字即可生成5秒视频片段，支持多种风格",
      "图像转视频：上传静态图片，AI自动生成动态视频效果",
      "视频编辑：支持对已有视频进行局部修改和风格调整",
      "支持多种画面比例：横版16:9、竖版9:16、方形1:1",
      "社区创意库：浏览和复用其他用户的创意Prompt"
    ],
    usage_guide: "第一步：注册与登录\\n访问 pika.art，点击Sign In使用Google账号或Discord账号快速登录。\\n\\n第二步：创建视频项目\\n登录后进入主界面，点击Create或输入框开始创作。\\n\\n第三步：输入描述\\n在输入框中用英文描述你想要生成的视频场景。越详细越好，包括：主体、动作、环境、光线、风格等。例如：'A cute cat playing with a ball of yarn in a sunny living room, soft lighting'。\\n\\n第四步：调整参数\\n可选择视频风格（Realistic动漫/Cinematic电影感等）、画面比例、时长。\\n\\n第五步：生成与下载\\n点击Generate开始生成，通常需要1-3分钟。生成完成后可预览、下载或继续生成Variations。",
    use_cases: [
      "短视频创作者：快速生成创意素材",
      "社交媒体运营：制作吸引眼球的帖子配图",
      "概念验证：视频项目前期快速可视化"
    ],
    pros: [
      "操作简单，无需视频制作经验",
      "生成速度相对较快",
      "支持多种视频风格选择",
      "社区可参考创意和Prompt",
      "免费额度足够日常体验"
    ],
    cons: [
      "免费版视频有水印",
      "单次生成仅5秒，长视频需多次生成拼接",
      "对手部和复杂运动场景生成效果不稳定",
      "文字描述对最终效果影响大",
      "服务器繁忙时需排队等待"
    ],
    related_tools: ["runway", "synthesia", "fliki"],
  },
  {
    id: "tavily-ai",
    icon: "/tool-icons/tavily-ai.png",
    slug: "tavily-ai",
    name: "Tavily AI",
    website: "https://tavily.com",
    description: "专为AI代理设计的实时搜索API，帮助大模型获取最新网络信息",
    type: "AI大模型",
    affiliateUrl: "",
    commissionRate: "",
    features: [
      "实时网络搜索：为AI代理和RAG系统提供最新网页数据",
      "结构化输出：搜索结果自动整理成标题、摘要、关键点JSON格式",
      "多语言支持：支持全球主流语言的搜索和内容提取",
      "高速响应：平均响应时间180ms，适合生产环境",
      "开发者友好：与OpenAI、Anthropic、Groq等主流LLM无缝集成"
    ],
    usage_guide: "第一步：注册获取API Key\\n访问 tavily.com，点击Get Started注册账号。注册后在Dashboard获取API Key。\\n\\n第二步：安装SDK\\n\\npm install tavily-python\\n或\\npip install tavily-python\\n\\n第三步：基础搜索调用\\nimport tavily\\\\nclient = tavily.Client(api_key=\\\"你的API_KEY\\\")\\\\nresponse = client.search(\\\"最新AI技术发展趋势\\\")\\\\nprint(response[\\\"results\\\"])\\n\\n第四步：深度研究模式\\nresponse = client.research(query=\\\"2024年AI在医疗领域的应用\\\")\\n返回包含完整摘要、关键发现和来源列表的深度报告。\\n\\n第五步：在AI应用中使用\\n将Tavily作为RAG系统的检索层，为大模型提供实时外部知识，避免幻觉。",
    use_cases: [
      "AI应用开发者：构建实时问答系统",
      "内容创作者：获取最新行业资讯和研究素材",
      "企业用户：市场调研和竞品分析自动化"
    ],
    pros: [
      "专为AI设计，输出格式适合RAG系统",
      "响应速度快，99.99%可用性保障",
      "1M+开发者使用，社区成熟",
      "支持深度研究模式，一键生成报告",
      "有免费额度，开发者友好"
    ],
    cons: [
      "免费版有调用频率限制",
      "深度研究模式消耗更多API配额",
      "搜索结果质量依赖网络资源时效性",
      "中文搜索效果略逊于英文",
      "企业级功能需要付费套餐"
    ],
    related_tools: ["perplexity", "chatpdf", "iask-ai"],
  },
  {
    id: "d-id",
    icon: "/tool-icons/d-id.png",
    slug: "d-id",
    name: "D-ID",
    website: "https://www.d-id.com",
    description: "AI数字人视频生成平台，照片即可生成逼真的数字人讲解视频",
    type: "视频AI",
    affiliateUrl: "",
    commissionRate: "",
    features: [
      "照片转视频：上传人物照片，AI生成说话或静态展示的数字人视频",
      "140+数字人模板：覆盖不同年龄、肤色、职业形象，可直接使用",
      "120+语言支持：配音可选择任意语言和声音风格",
      "API集成：支持与PPT、Canva、Google Slides等平台集成",
      "实时互动Agent：可创建AI数字人客服，实现实时语音对话"
    ],
    usage_guide: "第一步：注册与登录\\n访问 d-id.com，点击Start Free Trial注册账号。\\n\\n第二步：创建视频\\n点击Create Video，选择创建方式：\\n- Photo Animate：上传人物照片\\n- Avatar Template：从模板库选择数字人\\n\\n第三步：配置视频内容\\n输入要说的文字或上传字幕文件，选择配音语言和声音，调整背景和布局。\\n\\n第四步：生成视频\\n点击Generate Video，等待1-3分钟生成完成。预览满意后下载MP4格式。\\n\\n第五步：集成应用\\n如需批量生产，可使用API：访问 docs.d-id.com 查看REST API文档，通过API Key调用Create Video接口。",
    use_cases: [
      "企业培训：批量生成多语言员工培训视频",
      "营销视频：产品介绍、品牌故事个性化",
      "在线客服：AI数字人实时解答客户问题"
    ],
    pros: [
      "数字人效果逼真，口型同步准确",
      "支持120+语言，本地化成本低",
      "与Canva、PPT等工具集成方便",
      "API完善，适合企业级自动化",
      "可创建实时互动的AI Agent"
    ],
    cons: [
      "免费额度较少，高质量视频需付费",
      "上传照片需确保质量，太模糊效果差",
      "复杂动作场景生成效果有限",
      "需要版权授权的照片才能商用",
      "数字人表情变化相对单一"
    ],
    related_tools: ["synthesia", "heygen", "fliki"],
  },
  {
    id: "opus-clip",
    icon: "/tool-icons/opus-clip.png",
    slug: "opus-clip",
    name: "Opus Clip",
    website: "https://www.opus.pro",
    description: "AI视频剪辑工具，将长视频自动剪辑为多个病毒式传播短视频",
    type: "视频AI",
    affiliateUrl: "",
    commissionRate: "",
    features: [
      "ClipAnything：支持任何类型视频（播客、Vlog、游戏、访谈）智能剪辑",
      "AI重新构图：自动将横版视频转为竖版，AI追踪主体保持画面精彩",
      "精彩片段识别：AI自动识别视频中高光时刻和热门话题片段",
      "AI添加字幕：自动生成字幕并突出关键词，提高观看完播率",
      "团队协作：支持品牌模板、团队工作空间和工作流集成"
    ],
    usage_guide: "第一步：上传视频\\n访问 opus.pro，注册账号后点击Upload Video上传MP4文件（支持拖拽上传）。\\n\\n第二步：AI自动剪辑\\n上传后AI自动分析视频内容，识别精彩片段并生成多个短片候选。\\n\\n第三步：选择和编辑\\n浏览AI生成的短片候选，点击任意一个进入编辑页面。可以调整字幕样式、添加品牌Logo、修改文案。\\n\\n第四步：添加字幕和文案\\nOpus Clip自动生成字幕，可手动编辑错别字。文案区显示AI提取的高光语录，可一键复制。\\n\\n第五步：下载和发布\\n点击Export下载MP4（支持1080p），可一键分享到TikTok、YouTube Shorts、Instagram Reels。",
    use_cases: [
      "YouTube创作者：将长视频内容转化为短视频矩阵",
      "播客主理人：从访谈节目中提取精华片段",
      "内容营销：批量生产社交媒体短视频内容"
    ],
    pros: [
      "AI自动识别高光时刻，省时高效",
      "支持全类型视频，不限于播客",
      "AI字幕自动生成且样式可定制",
      "一键发布到多平台",
      "被16M+创作者使用，口碑好"
    ],
    cons: [
      "免费版功能有限，高级功能需付费",
      "AI识别准确率非100%，需人工筛选",
      "长视频处理需要等待时间",
      "主要面向英文内容，中文支持一般",
      "处理4K视频可能需要更长时间"
    ],
    related_tools: ["kapwing", "veed", "invideo"],
  },
  {
    id: "magic-eraser",
    icon: "/tool-icons/magic-eraser.png",
    slug: "magic-eraser",
    name: "Magic Eraser",
    website: "https://magicstudio.com/magiceraser/",
    description: "AI智能图片去物体工具，一键移除照片中不需要的人物或物体",
    type: "图片AI",
    affiliateUrl: "",
    commissionRate: "",
    features: [
      "AI去物体：涂抹选中区域后一键移除，支持复杂边缘处理",
      "批量处理：Pro版支持一次处理50张图片",
      "无需注册：免费版无需账号即可使用",
      "保持画质：AI自动填充背景，保持原图分辨率和质量",
      "阴影和倒影处理：智能识别并移除物体及其投射的阴影"
    ],
    usage_guide: "第一步：上传图片\\n访问 magicstudio.com/magiceraser/，直接拖拽或点击上传图片。支持JPG、PNG、AVIF、WEBP格式。\\n\\n第二步：涂抹选择\\n使用画笔工具涂抹要去除的区域。拖动滑块调整画笔大小。推荐放大图片后精细涂抹。\\n\\n第三步：去除\\n点击Erase按钮，AI处理并自动填充背景。效果不理想可重复涂抹再次去除。\\n\\n第四步：下载\\n点击Download保存到本地。免费版下载低分辨率，Pro版可下载原分辨率。\\n\\nPro技巧：\\n1. 涂抹时同时覆盖物体和其阴影\\n2. 去除多个物体时逐个处理效果更好\\n3. 对细长物体分段处理\\n4. 效果不理想时可撤销重试，AI会生成不同结果",
    use_cases: [
      "电商卖家：清理商品图片中的杂物和背景",
      "房产中介：移除房屋照片中的行人和车辆",
      "摄影师：修复照片中的瑕疵和不速之客"
    ],
    pros: [
      "完全免费使用，无需注册",
      "操作极其简单，无需任何技术背景",
      "处理速度快，几秒钟完成",
      "支持多种图片格式",
      "AI填充效果自然"
    ],
    cons: [
      "免费版有水印和分辨率限制",
      "对复杂背景效果可能不理想",
      "无法处理极其精细的毛发或烟雾",
      "没有API接口，不适合批量自动化",
      "隐私政策需注意，建议不要处理敏感图片"
    ],
    related_tools: ["remove-bg", "photoroom", "pixlr"],
  },
  {
    id: "vidiq",
    icon: "/tool-icons/vidiq.png",
    slug: "vidiq",
    name: "vidIQ",
    website: "https://vidiq.com",
    description: "YouTube增长必备工具，提供关键词研究、视频创意和频道分析",
    type: "效率办公",
    affiliateUrl: "",
    commissionRate: "",
    features: [
      "关键词发现：挖掘YouTube搜索量高、竞争度低的黄金关键词",
      "视频创意：基于数据分析提供个性化视频主题建议",
      "竞争对手分析：查看任意YouTube频道的详细数据和策略",
      "AI Coach：GPT驱动的视频策略指导和问题解答",
      "缩略图评分：AI分析缩略图并给出优化建议"
    ],
    usage_guide: "第一步：安装浏览器扩展\\n访问 vidiq.com，点击Install Extension安装Chrome扩展。\\n\\n第二步：连接YouTube\\n打开YouTube Studio，vidIQ扩展会自动激活。在扩展面板登录账号。\\n\\n第三步：关键词研究\\n在YouTube搜索框输入主关键词，vidIQ显示搜索量、竞争度评分。点击Open Panel查看完整关键词列表。\\n\\n第四步：获取视频创意\\n点击 vidIQ Dashboard → Video IQ，输入频道Niche，获取AI推荐的视频主题和标题。\\n\\n第五步：优化现有视频\\n打开任意YouTube视频，vidIQ显示该视频的SEO评分和优化建议。按照建议修改标题、标签、描述。",
    use_cases: [
      "YouTube新手：快速找到适合自己的细分领域",
      "内容创作者：获取源源不断的视频创意灵感",
      "MCN机构：批量管理多个频道的SEO策略"
    ],
    pros: [
      "浏览器扩展使用方便，不影响工作流",
      "关键词数据来自YouTube官方，准确可靠",
      "AI Coach提供个性化策略建议",
      "免费版功能足够日常使用",
      "被全球顶级YouTuber信赖使用"
    ],
    cons: [
      "高级功能需要付费订阅",
      "数据更新有延迟，非实时",
      "主要面向英文YouTube，中文内容支持有限",
      "付费版价格相对较高",
      "功能较多，上手需要一定学习成本"
    ],
    related_tools: ["perplexity", "surfer-seo", "chatpdf"],
  },
  {
    id: "stockimg-ai",
    icon: "/tool-icons/stockimg-ai.png",
    slug: "stockimg-ai",
    name: "Stockimg AI",
    website: "https://stockimg.ai",
    description: "AI图片生成平台，快速生成Logo、海报、书籍封面、Stock图片等",
    type: "图片AI",
    affiliateUrl: "",
    commissionRate: "",
    features: [
      "多功能图片生成：Logo、海报、书籍封面、壁纸、Stock图片一键生成",
      "预设模板：丰富的行业模板，可快速套用修改",
      "高质量输出：支持生成高分辨率图片，适合印刷和数字媒体",
      "团队协作：支持团队共享项目和企业定制",
      "API支持：开发者可集成到自己的应用中"
    ],
    usage_guide: "第一步：注册与登录\\n访问 stockimg.ai，点击Get Started注册账号。\\n\\n第二步：选择图片类型\\n首页显示多种生成类型：Logo、Poster、Book Cover、Wallpaper、Illustration等，点击进入对应生成界面。\\n\\n第三步：输入描述\\n输入英文描述词，越详细越好。例如生成Logo时输入公司名称、行业、想要的风格、颜色偏好。\\n\\n第四步：选择样式和参数\\n可选择生成风格（简约、复古、现代等）、颜色偏好、输出尺寸。\\n\\n第五步：生成与编辑\\n点击Generate，AI生成4张候选图。点击任意一张可放大、重新生成Variations或进入编辑界面微调。满意后Download下载。",
    use_cases: [
      "设计师：快速生成设计灵感和素材",
      "创业者：零设计基础也能做出专业Logo和品牌物料",
      "内容创作者：生成文章配图和社交媒体封面"
    ],
    pros: [
      "一站式多功能图片生成平台",
      "预设模板丰富，快速上手",
      "生成速度快，质量稳定",
      "有API接口，适合开发者集成",
      "企业版支持品牌定制"
    ],
    cons: [
      "免费版生成数量有限",
      "生成内容不能完全定制化控制",
      "版权归属需阅读使用条款",
      "中文支持有限，英文Prompt效果更好",
      "高分辨率输出需要付费"
    ],
    related_tools: ["adobe-firefly", "leonardo-ai", "midjourney"],
  },
  {
    id: "windsurf",
    icon: "/tool-icons/windsurf.png",
    slug: "windsurf",
    name: "Windsurf AI",
    website: "https://windsurf.com",
    description: "AI编程助手，由Codeium团队打造，为开发者提供智能编码体验",
    type: "编程代码",
    affiliateUrl: "",
    commissionRate: "",
    features: [
      "Cascade AI：超强AI对话和代码生成能力，支持多步骤复杂任务",
      "Memories功能：AI记住项目结构和偏好设置，越用越懂你",
      "MCP支持：可连接Figma、Slack、Stripe等第三方服务",
      "多文件编辑：支持同时编辑多个文件，AI自动处理依赖关系",
      "实时预览：内置Web Preview，无需切换工具即可看效果"
    ],
    usage_guide: "第一步：下载安装\\n访问 windsurf.com，点击Download下载安装包。支持VS Code插件模式或独立IDE。\\n\\n第二步：项目初始化\\n打开Windsurf，创建新项目或打开已有代码目录。AI自动分析项目结构。\\n\\n第三步：AI编程\\n在编辑器底部Cascade对话框输入需求，如：\\n- '创建个React登录页面'\\n- '修复这个bug'\\n- '给这个函数写单元测试'\\nAI自动生成代码并可一键应用到项目中。\\n\\n第四步：Memories设置\\n点击Memories面板，告诉AI你的项目偏好、技术栈、代码规范。AI会记住并在后续编程中遵循。\\n\\n第五步：MCP集成\\n进入Settings → MCP，添加Figma、Slack等MCP服务器，扩展AI能力边界。",
    use_cases: [
      "全栈开发：前后端代码快速生成",
      "代码审查：AI辅助发现Bug和优化点",
      "学习编程：AI讲解代码原理和最佳实践"
    ],
    pros: [
      "完全免费，基础功能无需付费",
      "比Cursor体验更流畅，界面更简洁",
      "Memories功能让AI越来越懂你的项目",
      "MCP支持连接丰富第三方工具",
      "由Codeium团队打造，1M+用户验证"
    ],
    cons: [
      "高级功能需要付费订阅",
      "独立IDE vs VS Code插件需二选一",
      "对超大型项目处理可能较慢",
      "中文支持一般，英文Prompt效果更好",
      "部分高级AI功能需要科学上网"
    ],
    related_tools: ["cursor", "copilot", "figma"],
  },
  {
    id: "adsbolic",
    icon: "/tool-icons/adsbolic.png",
    slug: "adsbolic",
    name: "Adsolic",
    website: "https://adsolic.com",
    description: "AI广告素材生成工具，快速创建Google、Meta等平台的广告创意",
    type: "效率办公",
    affiliateUrl: "",
    commissionRate: "",
    features: [
      "多平台广告生成：支持Google Ads、Meta、LinkedIn、TikTok等多平台",
      "AI创意建议：基于产品信息自动生成广告文案和视觉方案",
      "A/B测试素材：批量生成多版本广告素材供测试",
      "品牌资产管理：上传品牌素材库，确保广告一致性",
      "效果预测：AI评估广告素材点击率潜力"
    ],
    usage_guide: "第一步：注册与登录\\n访问 adsolic.com，点击Start Free Trial注册账号。\\n\\n第二步：创建广告项目\\n点击New Campaign，输入产品名称、描述、目标受众、CTA按钮。\\n\\n第三步：选择广告平台和格式\\n选择投放平台（Google/Meta/LinkedIn等）和广告格式（图组、视频、轮播等）。\\n\\n第四步：AI生成广告\\n点击Generate Ads，AI基于产品信息和平台特性自动生成广告文案和素材。\\n\\n第五步：预览和导出\\n预览不同尺寸的适配效果，满意后导出。导出格式支持JPG、PNG、MP4。",
    use_cases: [
      "跨境电商卖家：批量制作多平台广告素材",
      "营销 agency：为客户快速生成广告提案",
      "中小企业：没有设计师也能做出专业广告"
    ],
    pros: [
      "一站式多平台广告素材生成",
      "AI自动化程度高，省时省力",
      "支持批量生成A/B测试版本",
      "品牌资产管理功能实用",
      "免费试用，可评估后再付费"
    ],
    cons: [
      "免费版功能限制多",
      "生成创意质量依赖输入信息质量",
      "AI生成的文案可能需要人工润色",
      "版权问题需注意审查",
      "相对新兴工具，社区和教程较少"
    ],
    related_tools: ["adcreative-ai", "anyword", "copymatic"],
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
