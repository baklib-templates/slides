# 单页 HTML 示例与附录

配合 [slide-generation/SKILL.md](../SKILL.md)。复制后替换文案与图，并遵守安全区。

## 封面 / 标题页

```html
<div class="slide-content flex flex-1 min-h-0 w-full flex-col items-center justify-center text-center px-4 md:px-8">
  <div class="bg-primary text-primary-content p-5 md:p-6 rounded-full mb-6 md:mb-8 shadow-lg">
    <i class="fas fa-layer-group w-12 h-12 md:w-16 md:h-16" aria-hidden="true"></i>
  </div>
  <h1 class="text-4xl md:text-6xl font-black text-base-content leading-tight mb-4 md:mb-6">
    产品名称<br>
    <span class="text-primary">核心价值</span>一句话
  </h1>
  <p class="text-lg md:text-2xl text-base-content/70 max-w-3xl leading-relaxed">
    用一句副标题说明本场演示目的，不超过两行。
  </p>
</div>
```

## 左文右图

```html
<div class="slide-content flex flex-1 min-h-0 w-full flex-col">
  <header class="mb-4 md:mb-6 border-l-8 border-primary pl-4 md:pl-6 pr-16 shrink-0">
    <h1 class="text-3xl md:text-4xl font-black text-base-content">功能亮点</h1>
    <p class="text-lg text-base-content/60 font-light">三个差异化要点</p>
  </header>
  <div class="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
    <ul class="space-y-4 text-base md:text-lg text-base-content/80">
      <li class="flex gap-3 items-start">
        <i class="fas fa-check-circle text-primary w-6 h-6 shrink-0 mt-0.5" aria-hidden="true"></i>
        <span>要点一：简短说明</span>
      </li>
      <li class="flex gap-3 items-start">
        <i class="fas fa-check-circle text-primary w-6 h-6 shrink-0 mt-0.5" aria-hidden="true"></i>
        <span>要点二：简短说明</span>
      </li>
      <li class="flex gap-3 items-start">
        <i class="fas fa-check-circle text-primary w-6 h-6 shrink-0 mt-0.5" aria-hidden="true"></i>
        <span>要点三：简短说明</span>
      </li>
    </ul>
    <div class="relative rounded-2xl overflow-hidden bg-base-200 min-h-[200px] max-h-[45vh]">
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200"
        alt="产品界面示意图"
        class="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  </div>
</div>
```

## 三列卡片

```html
<div class="slide-content flex flex-1 min-h-0 w-full flex-col">
  <header class="mb-4 md:mb-6 border-l-8 border-primary pl-4 md:pl-6 pr-16 shrink-0">
    <h1 class="text-3xl md:text-4xl font-black text-base-content">三大痛点</h1>
    <p class="text-lg text-base-content/60 font-light">每卡只讲一点</p>
  </header>
  <div class="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch overflow-y-auto">
    <div class="bg-base-100 p-6 rounded-2xl border border-base-300 border-t-4 border-t-secondary shadow-sm flex flex-col">
      <i class="fas fa-database text-secondary w-10 h-10 mb-4" aria-hidden="true"></i>
      <h2 class="text-xl font-bold text-base-content mb-2">数据孤岛</h2>
      <p class="text-base-content/70 text-sm md:text-base flex-1">分散的系统无法统一管理与检索。</p>
    </div>
    <div class="bg-base-100 p-6 rounded-2xl border border-base-300 border-t-4 border-t-secondary shadow-sm flex flex-col">
      <i class="fas fa-chart-line text-secondary w-10 h-10 mb-4" aria-hidden="true"></i>
      <h2 class="text-xl font-bold text-base-content mb-2">成本过高</h2>
      <p class="text-base-content/70 text-sm md:text-base flex-1">自建与维护消耗大量研发资源。</p>
    </div>
    <div class="bg-base-100 p-6 rounded-2xl border border-base-300 border-t-4 border-t-secondary shadow-sm flex flex-col">
      <i class="fas fa-th-large text-secondary w-10 h-10 mb-4" aria-hidden="true"></i>
      <h2 class="text-xl font-bold text-base-content mb-2">体验割裂</h2>
      <p class="text-base-content/70 text-sm md:text-base flex-1">多渠道内容不同步，品牌声音不一。</p>
    </div>
  </div>
</div>
```

## 与组件库协作

1. 选题用 [slide-components](../../slide-components/SKILL.md) 与 `references/INDEX.md`。
2. 复制到正式页时套用 SKILL 根骨架，并做语义色替换。
3. **不要** swiper-slide 外壳，不要页面边距与宽高控制。

## 附录 A：channel 与 page

| 项目 | channel.liquid | page.liquid |
|------|----------------|-------------|
| 用途 | 全屏连播 | 单页预览 / 编辑 |
| 外壳 | Swiper + 玻璃卡片 + 控制栏 | 无 |
| 内容字段 | `slide.settings.html_content` | `page.settings.html_content` |

## 附录 B：PDF

`channel.pdf.liquid` 垂直堆叠各页，`@page { size: A4 landscape }`。避免 `min-h-screen`。

## 附录 C：存量示例

`statics/slides.liquid` 仍有 `slate-*` / `teal-*` / `h-80`。新稿以语义 Token 与 flex 安全区为准。

## 附录 D：单页自包含 CSS / JS

类名加页面前缀。渐变用 `hsl(var(--theme-color-base-100))`。优先用主题插件（`data-chart`、`data-enter`、`data-qr`），不要为单页改全局 `tailwind.config.js`。
