---
name: slide-generation
description: >-
  Generates one Baklib Slides html_content fragment that fits the channel.liquid
  fullscreen Swiper deck. Use when writing or reviewing slide HTML, PPT pages,
  方案汇报, 产品介绍, or page.settings.html_content for the slides theme.
---

# Slides 单页生成

指导 Agent 为 Slides 主题生成**一张**幻灯片的 `page.settings.html_content`。示例与附录见 [references/examples.md](references/examples.md)。组件选型见 [slide-components](../slide-components/SKILL.md)；插件写法见 [slide-plugins](../slide-plugins/SKILL.md)。

**权威实现**：`templates/channel.liquid`、`templates/page.liquid`、`src/stylesheets/application.css`、`src/javascripts/application.js`

## 何时使用

必须先遵循本文：

- 为 `channel` 下的 `page` 编写或改写 `html_content`
- AI 批量生成演示文稿单页
- 从组件库复制片段并适配为正式幻灯片
- 评审是否会在手机 / 平板 / 桌面全屏中溢出

**不适用**：改 `channel.liquid` 框架、首页、`components.liquid` 壳、`channel.pdf.liquid`（见 examples 附录 B）。

## 布局解剖

```
main (100vh, overflow-hidden)
├── 浮动目录按钮     fixed top-6 right-8 z-50
├── Swiper 外层      w-full h-full pb-12
│   └── .swiper-slide → 玻璃卡片 p-4 overflow-auto
│       └── .slide-html-host  flex-1 min-h-0   ← 注入点
└── 底部控制栏       fixed bottom-0
```

- 舒适高度约 `calc(100vh - 124px)`；标题页眉用 `pr-16 md:pr-20` 避开目录钮。
- Agent **只写玻璃卡片内部**；不要包 `.swiper-slide`、`.swiper-wrapper` 或 `main`。
- `html_content` 在 channel 中原样输出；`page.liquid` 无 Swiper 外壳。

**推论**：禁止 `h-screen` / `w-screen` / `min-h-screen` / `fixed` / `inset-0` 占满视口。

## 设计 Token

| 用途 | 推荐类 |
|------|--------|
| 主标题 / 强调 | `text-base-content`、`text-primary` |
| 正文 / 副标题 | `text-base-content/70`、`text-base-content/60` |
| 浅底 / 边框 | `bg-base-100`、`bg-base-200`、`border-base-300` |
| 深色块 | `bg-neutral text-neutral-content` |

避免：`slate-*`、`gray-*`、`teal-*`、硬编码 Hex。玻璃块可用 `.glass` 或 `bg-base-100/80 backdrop-blur-xl rounded-2xl`。

| 角色 | 字号 |
|------|------|
| 封面主标题 | `text-4xl md:text-6xl font-black` |
| 内页大标题 | `text-3xl md:text-4xl font-black` |
| 正文 | `text-base md:text-lg leading-relaxed` |
| KPI 数字 | `text-5xl md:text-6xl font-black` |

内页标题：

```html
<header class="mb-6 md:mb-8 border-l-8 border-primary pl-4 md:pl-6 pr-16 md:pr-20 shrink-0">
  <h1 class="text-3xl md:text-4xl font-black text-base-content mb-1">主标题</h1>
  <p class="text-lg md:text-xl text-base-content/60 font-light">副标题</p>
</header>
```

圆角：外层已 `rounded-3xl`；内卡 `rounded-xl` / `rounded-2xl`。装饰可用 `animate-float`，勿给根节点加动画。单页专用动效用带前缀的 `<style>`，不要改全局 CSS。优先用 [slide-plugins](../slide-plugins/SKILL.md) 的 `data-enter`。

## 尺寸禁令

必须：根节点 `flex flex-col flex-1 min-h-0 w-full`；图 `max-w-full` + `max-h-[40vh]`；栅格 `grid-cols-1 md:grid-cols-*`；长列表 `overflow-y-auto min-h-0 flex-1`。

禁止：`h-screen` / `min-h-screen` / `w-screen`；整页固定高度；无 `max-w-full` 的 `w-[1200px]`；再包 `swiper-slide`；`position: fixed`。

## 图标与媒体

```html
<i class="fas fa-check-circle w-8 h-8 text-primary" aria-hidden="true"></i>
<i data-lucide="layers" class="w-8 h-8 text-primary"></i>
```

图加 `alt`、`loading="lazy"`、`rounded-xl`。演示可用 Unsplash；生产用 DAM URL。对照 `ICON_GUIDE.md`。

## 最佳实践

1. 一页一主张：一个标题 + 最多 3–5 要点或 2–4 卡。
2. 每页仅一个 `h1`。
3. 浅底 `text-base-content`；深底 `text-neutral-content`。
4. 模板稿不写真实客户商标。
5. 图标 `aria-hidden="true"`。

## Agent 工作流

生成前确认：类型（封面 / 列表 / 图文 / KPI / 对比 / 流程 / 结语）、主标题、3 要点或 4 卡、是否要图/插件。

根骨架：

```html
<div class="slide-content flex flex-1 min-h-0 w-full flex-col">
  <header class="mb-4 md:mb-6 border-l-8 border-primary pl-4 md:pl-6 pr-16 shrink-0">
    <h1 class="text-3xl md:text-4xl font-black text-base-content">主标题</h1>
    <p class="text-lg text-base-content/60 font-light mt-1">副标题</p>
  </header>
  <div class="flex-1 min-h-0 flex flex-col justify-center">
  </div>
</div>
```

封面可省略 header，改为 `items-center justify-center text-center px-4`。完整示例见 [references/examples.md](references/examples.md)。

### 保存前校验

- [ ] 无 `swiper-slide` / `h-screen` / `min-h-screen`
- [ ] 根节点含 `flex-1 min-h-0 w-full`
- [ ] 语义色，无 `slate-*` / `teal-*`
- [ ] 标题 `pr-16`；图片有 `alt` 与高度约束
- [ ] 窄屏无横向溢出；过高可内部滚动
