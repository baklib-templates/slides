# 组件库索引

拷贝自工作区「客户方案PPT/组件库」。文中 `site_id=15303` / `page_id` 为原 ppt 站点溯源，不要写回 Slides 站点。

每页 YAML 的 `prompt` 是该 slide 的**匹配技能**：写清布局、槽位、适用场景、所需资源，以及**伸缩与变体 / 整屏与移动端**。

选用方式：用客户当页素材（企业名、简介、count、配图、报价、团队等）对照下表「提示词」与各文件全文 `prompt`，选最贴的组件（或按其「兄弟推荐」改选）。匹配后仍须读该页「伸缩与变体」：按素材改块数、缺图降级、不要死套示例 DOM。再基于该页 HTML 的视觉基因生成客户 slide，并遵守 [slide-generation](../../slide-generation/SKILL.md)（根节点 `flex-1 min-h-0 w-full`，PC 铺满安全区，移动端单列）。

| 序号 | 标题 | 提示词 | 文件 |
| --- | --- | --- | --- |
| 1 | Bento Grid | 顶栏口号 + 大标题，下方 3 列 × 2 行 Bento，左右两格通高配产品截图/代码窗，中间两格为短能力卡。 | [01-Bento Grid.md](01-Bento Grid.md) |
| 2 | Team | 左侧栏标题+一段团队介绍，右侧 2 列头像名录（圆形头像 + 姓名 + 职位）。 | [02-Team.md](02-Team.md) |
| 3 | Pricing | 居中定价标题 + 说明，下方左右两档套餐卡（浅色基础档 vs 深色主推档），各含价格、卖点和 CTA。 | [03-Pricing.md](03-Pricing.md) |
| 4 | Stats | 左上超大标题 + 一段简介，中部 4 条文字链，底部 4 个大号 KPI（数字在上、标签在下）。 | [04-Stats.md](04-Stats.md) |
| 5 | Dark Hero | 深色全幅英雄：左文（超大标题、短导语、主/次 CTA），右下 copilot 式产品大图。 | [05-Dark Hero.md](05-Dark Hero.md) |
| 6 | Blog | 左上栏目标题+导语，下方 3 张竖向内容卡（封面图、分类日期、标题、摘要、作者头像）。 | [06-Blog.md](06-Blog.md) |
| 7 | 2 Grid Features | 居中眉题+大标题+导语，下方 2×2 能力格，每格左侧色块图标 + 标题 + 说明。 | [07-2 Grid Features.md](07-2 Grid Features.md) |
| 8 | Mult-Publish | 左 3 张错落设备图（手机/平板/桌面），右大标题 + 段落 + 3 条勾选卖点。 | [08-Mult-Publish.md](08-Mult-Publish.md) |
| 9 | Light Hero | 左眉题/大标题/短文 + 3 条带图标特性；右一张产品界面大图。 | [09-Light Hero.md](09-Light Hero.md) |
| 10 | Photo Sections | 左大标题+段落+主按钮；右三列商品/场景照片交错堆叠，营造画廊感。 | [10-Photo Sections.md](10-Photo Sections.md) |
| 11 | Hero | 浅色居中英雄：顶部胶囊公告条、超大标题、一段导语、主/次两个按钮；背景只有模糊色块，无产品图。 | [11-Hero.md](11-Hero.md) |
| 12 | FAQs | 左固定「常见问题」标题，右一列可展开问答（题干 + 答案）。 | [12-FAQs.md](12-FAQs.md) |
| 13 | Products | 小标题 + 四列等宽卡片：方图、品名、颜色/标签、价格。 | [13-Products.md](13-Products.md) |
| 14 | Collections | 左上标题+导语，下方三张大图合集卡（图 + 合集名 + 一句定位）。 | [14-Collections.md](14-Collections.md) |
| 15 | Features 2 | 顶部全宽大图（底部渐隐），下方居中标题+导语，再下 3×2 规格表（项名 + 短值）。 | [15-Features 2.md](15-Features 2.md) |
| 16 | Sections | 顶栏促销/活动条（标题+短文+按钮），中部一张全宽大图，底部三列客户评价。 | [16-Sections.md](16-Sections.md) |
| 17 | Images | 无大标题，4 列媒体库：缩略图 + 文件名 + 体积，像 DAM/相册管理界面。 | [17-Images.md](17-Images.md) |
| 18 | Team Cards | 4 列白卡：大头封面图、姓名、角色；底部 X/LinkedIn 图标。 | [18-Team Cards.md](18-Team Cards.md) |
| 19 | Contact Us | 两栏：左「联系我们」+ 邮箱/工时/电话（浅底图），右「留言咨询」表单（姓名、电话、公司、留言、提交）。 | [19-Contact Us.md](19-Contact Us.md) |
| 20 | Dashboard | 深色一屏看板：左上品牌名+口号+一句话定位，右上图标徽章；中部 4 张 KPI 卡（大数字+标题+一句）；下部左图/趋势占位、右 CTA 条。 | [20-Dashboard.md](20-Dashboard.md) |
| 21 | Card Grid | 居中大标题+导语，下方 3×2 圆角浅底卡：圆标图标 + 功能名 + 两句说明 + Learn more。 | [21-Card Grid.md](21-Card Grid.md) |
| 22 | Features 3 | 左大标题+长导语+一张圆角图；右 2×2 四特性（小图标+标题+一句）。 | [22-Features 3.md](22-Features 3.md) |
| 23 | Blog 2 | 居中「最新文章」页眉，下方 3×2 图文卡（封面、分类、标题、摘要）。 | [23-Blog 2.md](23-Blog 2.md) |
| 24 | 3 Cards | 顶部分栏标题「精选推荐」，下方三张等高玻璃卡：装饰线/网格 + 主题标题 + 一段 80–120 字说明。 | [24-3 Cards.md](24-3 Cards.md) |
| 25 | Dashboard 2 | 不规则 Bento 仪表盘：大英雄卡（口号+人物图）+ 折线小卡 + 净值大卡 + 环形分数 + 投资列表，偏 Fintech 数据秀。 | [25-Dashboard 2.md](25-Dashboard 2.md) |
| 26 | Contact 2 | 上排三张入口卡（在线聊/拜访/电话）；下排左表单（姓名、邮箱、电话、留言）右地图或办公图。 | [26-Contact 2.md](26-Contact 2.md) |
| 27 | 3 Cards AI Chat | 12 列布局：左 7 列「AI 问答」底图片+浮动聊天气泡；右 5 列上下两张特性卡（图标+标题+段落）。 | [27-3 Cards AI Chat.md](27-3 Cards AI Chat.md) |
