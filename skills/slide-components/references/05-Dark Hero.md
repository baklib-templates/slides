---
title: Dark Hero
prompt: |
  技能名：Dark Hero（深色英雄页 + 产品大图）
  一句话：深色全幅英雄：左文（超大标题、短导语、主/次 CTA），右下 copilot 式产品大图。
  
  布局：
  - 近黑底；左文右图（图可贴底、带圆角阴影）
  - 无网格数字、无多卡
  - 装饰 SVG 光晕可选
  
  内容要素：
  - 主标题（1–2 行，强主张）
  - 导语 40–80 字
  - 主按钮 + 次按钮
  - 1 张横向产品/界面/场景大图
  
  适合场景：
  - 方案片头、产品发布、单页开场「先定调再讲细节」
  - 客户有一句口号 + 一张代表图，没有一堆指标
  
  不适合：
  - 企业简介 + 4 个 count（数字会无处安放）→ Stats / Dashboard
  - 需要多功能分点 → Bento / 2 Grid Features / Card Grid
  
  所需资源：
  - 文字：标题、导语、2 个 CTA
  - 图片：1 张宽图（产品 UI 或品牌视觉），约 16:10
  - 视频：无（若有宣传片，不要塞进本组件，另做视频页）
  
  匹配信号：深色开场、Hero、片头、口号、产品大图、CTA
  定制指引：保持深底与右图比例；PPT 内去掉过大 `py`；标题避开右上目录按钮。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：永远一主标题 + 至多一段导语 + 1–2 个 CTA。不要加四宫格。
  - 缺资源降级：无产品大图则改为纯文本居中（接近 Hero），深底保留；无次按钮则只留主 CTA。
  - 重要性：标题最大，图为辅。
  - 兄弟推荐：无图口号 → 11-Hero；浅色左文右图+三条特性 → Light Hero。
  - 最佳实践：深底英雄页一屏一句主张，图贴右下不抢标题。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 左文垂直居中，右图 `max-h` 拉满但不溢出。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 先文后图，图高度封顶。
template: component
position: 5
site_id: "15303"
page_id: "590696"
---

<div class="bg-white dark:bg-gray-900">
  <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
    <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 dark:bg-gray-800 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:ring-1 dark:after:ring-inset dark:after:ring-white/10 dark:after:sm:rounded-3xl">
      <svg viewBox="0 0 1024 1024" aria-hidden="true" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
        <circle r="512" cx="512" cy="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 class="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">Boost your productivity. Start using our app today.</h2>
        <p class="mt-6 text-pretty text-lg/8 text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-gray-700 dark:text-white dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/5 dark:hover:bg-gray-600 dark:focus-visible:outline-white"> Get started </a>
          <a href="#" class="text-sm/6 font-semibold text-white hover:text-gray-100">
            Learn more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div class="relative mt-16 h-80 lg:mt-8">
        <img width="1824" height="1080" src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" />
      </div>
    </div>
  </div>
</div>
