---
name: slides-design-systems
description: >-
  Maps awesome-design-md brand languages (Apple, Claude, Cohere, Intercom,
  Mintlify, Notion, Pinterest) onto Baklib Slides html_content. Use when the
  user asks for a brand look, design system, visual tone, or named aesthetic
  for a presentation deck.
---

# Slides 设计系统

从工作区 `awesome-design-md` 拷贝的品牌分析，供幻灯片选气质。token 原文在 [references/](references/)，**不要改**。

必须同时遵守 [slide-generation](../slide-generation/SKILL.md)：安全区、语义色回退、根骨架。本技能只解决「像谁」，不覆盖布局禁令。

## 何时选用

| 系统 | 文件 | 适合 |
|------|------|------|
| Apple | [DESIGN-apple.md](references/DESIGN-apple.md) | 极简、大留白、产品硬件感、高端发布会 |
| Claude | [DESIGN-claude.md](references/DESIGN-claude.md) | 暖色编辑风、人文 AI、奶油底 + coral CTA |
| Cohere | [DESIGN-cohere.md](references/DESIGN-cohere.md) | 企业 AI / 数据平台、冷静科技感 |
| Intercom | [DESIGN-intercom.md](references/DESIGN-intercom.md) | SaaS 营销、直角材质板 + 圆角产品图 |
| Mintlify | [DESIGN-mintlify.md](references/DESIGN-mintlify.md) | 文档产品、开发者向、清爽绿强调 |
| Notion | [DESIGN-notion.md](references/DESIGN-notion.md) | 知识工作、中性灰、模块化卡片 |
| Pinterest | [DESIGN-pinterest.md](references/DESIGN-pinterest.md) | 视觉瀑布、消费品牌、图片主导 |

用户未点名品牌时：默认用主题语义色（`primary` / `base-*`），不必套这 7 套。

## 映射规则（必须）

1. **先读对应 DESIGN-*.md 的 `colors` / `typography` / 签名组件**，再写 HTML。
2. **封面**可用该品牌 display 气质（字重、字距、主色），但仍用 Tailwind 阶梯：`text-4xl md:text-6xl`，禁止把分析稿里的 `64px` / `48px` 写成 `text-[64px]` 铺满安全区。
3. **内页**必须压到 slide-generation 字号：标题 `text-3xl md:text-4xl`，正文 `text-base md:text-lg`。品牌感靠色、圆角、边框、留白，不靠撑字号。
4. 能映射到主题变量的用语义类：`bg-primary`、`text-base-content`。品牌特有色（如 Claude coral `#cc785c`）仅在用户明确要求「长得像 X」时用少量 `style` 或任意值，并保证对比度。
5. 不要引入 DESIGN 里的商用字体文件名当 `@font-face`；用 `font-sans` / `font-serif` 近似。
6. 组件结构仍从 [slide-components](../slide-components/SKILL.md) 选，再套本系统的色与层次。

## Agent 步骤

1. 确认品牌（或拒绝套用，走默认主题色）。
2. Read 对应 `references/DESIGN-*.md` 的 frontmatter + 签名模式（不必通读全文）。
3. 按 slide-generation 根骨架出 HTML。
4. 自检：无 `h-screen`；内页无 64px 标题；Baklib 字样旁无图形 Logo（工作区配图规范）。
