export type ToolCategory = 
  | '全部'
  | '写作AI'
  | '图片AI'
  | '视频AI'
  | '音频AI'
  | '效率办公'
  | 'AI大模型'
  | '编程代码';

export interface AiTool {
  id: string;
  slug: string;
  name: string;
  website: string;
  description: string;
  type: ToolCategory;
  affiliateUrl: string;
  commissionRate: string;
  icon?: string;
  featured?: boolean;
  /** 3-5条功能特点 */
  features: string[];
  /** 详细使用教程/方法（HTML或Markdown格式） */
  usage_guide: string;
  /** 适用人群/场景 */
  use_cases: string[];
  /** 推荐同类工具ID列表 */
  related_tools: string[];
}
