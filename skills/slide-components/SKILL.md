---
name: slide-components
description: >-
  Picks and adapts reusable HTML slide layouts (Bento, Hero, Stats, Pricing,
  Team, Dashboard, FAQ, etc.) for Baklib Slides. Use when building a deck from
  the component library, matching customer assets to a layout, or adapting
  客户方案PPT components.
---

# Slides 组件库

27 个通用幻灯片组件（源自「客户方案PPT/组件库」，线上 ppt 站点 `site_id=15303` 仅溯源）。索引与原文在 [references/](references/)。

生成正式页时必须同时读 [slide-generation](../slide-generation/SKILL.md)：根节点 `flex flex-col flex-1 min-h-0 w-full`，禁止 `h-screen` / `swiper-slide`。

## 选用流程

1. 打开 [references/INDEX.md](references/INDEX.md)，用客户当页素材（标题、数字、配图、报价、团队）对照「提示词」。
2. 读中选文件的 YAML `prompt`（布局、场景、资源、伸缩与变体），不要只看标题。
3. 以该页 HTML 为**视觉基因**（圆角、层次、主从），按素材改块数；缺图降级为图标/大数字，禁止留空格。
4. 套上 slide-generation 根骨架；压缩原稿 `py-24` / `py-32`。
5. 需要品牌气质时再读 [design-systems](../design-systems/SKILL.md)；需要图/表/码时读 [slide-plugins](../slide-plugins/SKILL.md)。

## 速查（详见 INDEX）

| 素材信号 | 优先组件 |
|----------|----------|
| 3–8 个能力 + 截图 | Bento Grid、Card Grid、2 Grid Features |
| 只有 KPI 数字 | Stats、Dashboard |
| 定价两档 | Pricing |
| 团队头像 | Team、Team Cards |
| 深色发布会英雄 | Dark Hero |
| 浅色产品英雄 | Light Hero、Hero |
| FAQ / 联系 | FAQs、Contact Us、Contact 2 |
| 代码/API 窗 | Bento 右侧卡；代码高亮用 slide-plugins |

## 适配硬约束

- 根节点加 `slide-content flex flex-col flex-1 min-h-0 w-full`。
- 移动端 `grid-cols-1 md:grid-cols-*`；图 `max-h-[40vh] object-cover`。
- 标题 `pr-16` 避开目录钮。
- `site_id` / `page_id` 不要写回 slides 站点；那是 ppt 站溯源。
- 语义色替换：把示例里的 `gray-*` / 硬编码色改成 `base-*` / `primary`（除非用户指定 design-system）。
