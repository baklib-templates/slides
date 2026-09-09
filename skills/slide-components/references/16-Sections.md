---
title: Sections
prompt: |
  技能名：Sections（促销条 + 大图 + 三列口碑）
  一句话：顶栏促销/活动条（标题+短文+按钮），中部一张全宽大图，底部三列客户评价。
  
  布局：
  - 上：深色或高对比活动条
  - 中：1 张全宽场景图
  - 下：`lg:grid-cols-3` 三段引用（无头像也可）
  
  内容要素：
  - 活动标题、说明、CTA
  - 1 张横图
  - 3 条口碑（各 40–80 字）
  
  适合场景：
  - 活动/优惠节点、客户证言页、交付后评价
  - 有 3 条真实客户原话时很强
  
  不适合：
  - 企业四指标、功能列表、FAQ
  
  所需资源：
  - 文字：活动文案 + 3 条评价
  - 图片：1 张全宽图
  - 视频：无
  
  匹配信号：促销、口碑、证言、评价、one-time sale
  定制指引：活动条可改成「项目成果亮点」；评价署名前可加公司名。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：口碑 2 条两大列；3 条三列（示例）；4+ 拆页或内部滚动。活动条可改为成果亮点，不可缺标题。
  - 缺资源降级：无中图则口碑上移铺满；无 CTA 删按钮；无口碑则本组件不适合，改 Hero。
  - 重要性：中图最大，口碑等宽。
  - 兄弟推荐：多图错落无口碑 → Photo Sections；单句主张 → Hero。
  - 最佳实践：引用短、可加署名；活动条对比足够。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 三段垂直分配：条 shrink、图 flex-1、口碑 shrink。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 单列，图限高。
template: component
position: 16
site_id: "15303"
page_id: "590733"
---

<div class="relative overflow-hidden bg-white">
  <!-- Decorative background image and gradient -->
  <div aria-hidden="true" class="absolute inset-0">
    <div class="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
      <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-sale-full-width.jpg" alt="" class="size-full object-cover" />
    </div>
    <div class="absolute inset-0 bg-white/75"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-white via-white"></div>
  </div>

  <!-- Callout -->
  <section aria-labelledby="sale-heading" class="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <h2 id="sale-heading" class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Get 25% off during our one-time sale</h2>
      <p class="mx-auto mt-4 max-w-xl text-xl text-gray-600">Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.</p>
      <a href="#" class="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto">Get access to our one-time sale</a>
    </div>
  </section>

  <!-- Testimonials -->
  <section aria-labelledby="testimonial-heading" class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <h2 id="testimonial-heading" class="text-2xl font-bold tracking-tight text-gray-900">What are people saying?</h2>

      <div class="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        <blockquote class="sm:flex lg:block">
          <svg viewBox="0 0 24 18" width="24" height="18" aria-hidden="true" class="shrink-0 text-gray-300">
            <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
          </svg>
          <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
            <p class="text-lg text-gray-600">My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!</p>
            <cite class="mt-4 block font-semibold not-italic text-gray-900">Sarah Peters, New Orleans</cite>
          </div>
        </blockquote>
        <blockquote class="sm:flex lg:block">
          <svg viewBox="0 0 24 18" width="24" height="18" aria-hidden="true" class="shrink-0 text-gray-300">
            <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
          </svg>
          <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
            <p class="text-lg text-gray-600">I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!</p>
            <cite class="mt-4 block font-semibold not-italic text-gray-900">Kelly McPherson, Chicago</cite>
          </div>
        </blockquote>
        <blockquote class="sm:flex lg:block">
          <svg viewBox="0 0 24 18" width="24" height="18" aria-hidden="true" class="shrink-0 text-gray-300">
            <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
          </svg>
          <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
            <p class="text-lg text-gray-600">Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.</p>
            <cite class="mt-4 block font-semibold not-italic text-gray-900">Chris Paul, Phoenix</cite>
          </div>
        </blockquote>
      </div>
    </div>
  </section>
</div>
