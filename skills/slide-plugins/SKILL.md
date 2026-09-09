---
name: slide-plugins
description: >-
  Documents Baklib Slides window APIs and HTML snippets for daisyUI, Chart.js,
  Mermaid, highlight.js, GSAP enter animations, medium-zoom, and QR codes.
  Use when a slide needs charts, diagrams, code, motion, image zoom, or QR.
---

# Slides 插件用法

主题已打包并挂到 `window`。生成 `html_content` 时**只用这些写法**，不要再引入 CDN 脚本，不要每页内联一套 Chart/GSAP。

仍须遵守 [slide-generation](../slide-generation/SKILL.md) 安全区。翻页时 `slidesEnhancements.refresh` 会处理当前页。

| 全局 | 用途 |
|------|------|
| `window.Chart` | Chart.js |
| `window.mermaid` | Mermaid |
| `window.hljs` | highlight.js |
| `window.gsap` | GSAP |
| `window.mediumZoom` | 截图放大（自动绑 `.slide-html-host img`） |
| `window.QRCode` | 二维码库 |
| `window.lucide` | Lucide 图标 |
| `window.slidesEnhancements.refresh(root)` | 手动重跑增强 |

未安装：Astra、AOS、ECharts、CountUp。数字入场用 `data-enter` + 大号文本即可。

## daisyUI

独立 CSS 已加载。优先用组件类，不要再造按钮/徽章/折叠。

```html
<button class="btn btn-primary">开始演示</button>
<span class="badge badge-secondary">新</span>

<div class="stats shadow w-full bg-base-100">
  <div class="stat">
    <div class="stat-title">客户数</div>
    <div class="stat-value text-primary">128</div>
    <div class="stat-desc">本季度</div>
  </div>
</div>

<ul class="timeline timeline-vertical md:timeline-horizontal">
  <li>
    <div class="timeline-start">调研</div>
    <div class="timeline-middle"></div>
    <div class="timeline-end timeline-box">需求对齐</div>
    <hr />
  </li>
  <li>
    <div class="timeline-start">落地</div>
    <div class="timeline-middle"></div>
    <div class="timeline-end timeline-box">上线托管</div>
  </li>
</ul>

<div class="collapse collapse-arrow bg-base-200">
  <input type="checkbox" />
  <div class="collapse-title font-medium">常见问题</div>
  <div class="collapse-content text-sm">答案写在这里。</div>
</div>
```

颜色跟站点 `--color-primary` 等变量。布局仍用 Tailwind flex/grid。

## Chart.js

属性值用**单引号**包 JSON。外层给固定高度，避免撑破安全区。

```html
<div class="w-full h-[36vh] min-h-[200px]" data-enter="fade-up">
  <canvas data-chart='{"type":"bar","data":{"labels":["Q1","Q2","Q3","Q4"],"datasets":[{"label":"线索","data":[12,19,8,15],"backgroundColor":"hsl(var(--theme-color-primary) / 0.7)"}]},"options":{"plugins":{"legend":{"display":false}}}}'></canvas>
</div>
```

支持 `type`: `bar` / `line` / `pie` / `doughnut`。同一 canvas 不会重复初始化。

## Mermaid

```html
<pre class="mermaid w-full max-h-[50vh] overflow-auto text-sm">
flowchart LR
  A[知识库] --> B[Slides 站点]
  B --> C[全屏演示]
</pre>
```

不要在 `html_content` 里调用 `mermaid.initialize`。图过宽时让容器 `overflow-auto`。

## highlight.js

```html
<pre class="text-left text-sm max-h-[40vh] overflow-auto rounded-xl"><code class="language-javascript">const deck = { title: "方案汇报" };
console.log(deck.title);</code></pre>
```

已注册：`javascript`/`js`、`typescript`/`ts`、`html`/`xml`、`css`、`json`、`bash`/`shell`、`python`、`ruby`、`sql`、`yaml`、`markdown`。

## GSAP 入场

不要每页写时间线。给块加 `data-enter`：

| 值 | 效果 |
|----|------|
| `fade-up` | 上移淡入（默认首选） |
| `fade-in` | 仅淡入 |
| `fade-left` | 自左 |
| `fade-right` | 自右 |

```html
<div data-enter="fade-up" class="text-5xl font-black text-primary">98%</div>
<ul>
  <li data-enter="fade-up">要点一</li>
  <li data-enter="fade-up">要点二</li>
</ul>
```

翻页会重播当前页。尊重 `prefers-reduced-motion`。

## medium-zoom

`.slide-html-host` / `.slide-content` 内图片自动可点放大。只需正常写 `img`（带 `alt` 与 `max-h-[40vh]`）。二维码图不会被绑定。

## 二维码

```html
<div data-qr="https://www.baklib.com" data-qr-size="160" data-qr-alt="Baklib 官网"></div>
```

用于结语 / 联系 / 会后资料。`data-qr-size` 默认 160。

## Lucide

```html
<i data-lucide="layers" class="w-8 h-8 text-primary"></i>
```

Font Awesome 仍可用：`<i class="fas fa-check-circle" aria-hidden="true"></i>`。
