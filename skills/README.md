# Slides 主题技能库

本目录是 Baklib Slides 主题的**演示文稿生成技能源真**。生成或改写任何 `page.settings.html_content`（HTML 幻灯片）前，先读本索引，再按需打开对应 SKILL。

权威实现：`templates/channel.liquid`、`templates/page.liquid`、`src/javascripts/application.js`、`src/stylesheets/application.css`。

## 阅读顺序

| 顺序 | 技能 | 何时必读 |
|------|------|----------|
| 1 | [slide-generation](slide-generation/SKILL.md) | 写/改任何一张幻灯片 HTML。安全区、语义色、根骨架、禁令。 |
| 2 | [slide-components](slide-components/SKILL.md) | 从组件库选布局（Bento、Hero、Stats、定价等），再按素材变体。 |
| 3 | [design-systems](design-systems/SKILL.md) | 用户指定品牌气质（Claude / Apple / Notion 等）时映射 token。 |
| 4 | [slide-plugins](slide-plugins/SKILL.md) | 需要图表、流程图、代码高亮、入场动画、放大图、二维码时。 |

## 硬约束（所有技能共用）

- 只写玻璃卡片内部 HTML，**不要** `.swiper-slide` / `main` / 页面级宽高。
- 根节点：`flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）。
- 禁止：`h-screen`、`min-h-screen`、`w-screen`、`fixed`、`inset-0` 占满视口。
- 颜色优先 `primary` / `base-content` / `base-100` 等语义 Token，不要 `slate-*` / `teal-*`。
- 标题区 `pr-16` 以上，避开右上目录按钮。

## 外部技能

Office 导入见主题根目录 `skills-lock.json` 锁定的 `mineru-office-to-markdown`，导入后再按 `slide-generation` 转成单页 HTML。

根目录 [DESIGN.md](../DESIGN.md) 是本技能库的短指针，避免旧文档断链。
