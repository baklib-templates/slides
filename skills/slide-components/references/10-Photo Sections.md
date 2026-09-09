---
title: Photo Sections
prompt: |
  技能名：Photo Sections（左文 CTA + 右三列错落照片墙）
  一句话：左大标题+段落+主按钮；右三列商品/场景照片交错堆叠，营造画廊感。
  
  布局：
  - 全幅相对定位；左文垂直居中
  - 右：三列 `grid`，每列 2–3 张竖图，列之间垂直错位
  - 约 7 张图
  
  内容要素：
  - 主标题、一段氛围文案、1 个 CTA
  - 7 张竖向或接近 3:4 的照片
  
  适合场景：
  - 品牌形象、空间/门店/产线展示、视觉为主的开场
  - 客户有一批高质量实拍（产品、工厂、门店、活动）
  
  不适合：
  - 企业四指标、功能列表、长文本简介（照片墙会抢戏且装不下 200 字细读）
  - 图少于 4 张（结构会空）
  
  所需资源：
  - 文字：标题、短文（1 段）、按钮
  - 图片：6–7 张竖图，主题统一
  - 视频：无
  
  匹配信号：照片墙、画廊、夏季系列、视觉开场、多图错落
  定制指引：不要改成四宫格电商；保持三列错落。缺图时宁少一列，勿拉伸变形。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：照片建议 4–7 张。4–5 张改为两列错落；6–7 张三列（示例）。少于 4 张不要硬撑三列，改 Light Hero / Sections。多于 8 张拆页或改 Images。
  - 缺资源降级：缺图就减少列，禁止拉伸变形或重复同一张图凑数。
  - 重要性：左文短、右墙为主视觉。
  - 兄弟推荐：要文件名/DAM 感 → Images；要口碑+单图 → Sections。
  - 最佳实践：统一 3:4 竖图、列间垂直错位、圆角一致。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 照片墙拉满右半屏高度。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 文在上，图改为 2 列网格，取消大幅负偏移以免裁切。
template: component
position: 10
site_id: "15303"
page_id: "590711"
---

<div class="relative overflow-hidden bg-white">
  <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
    <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div class="sm:max-w-lg">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
        <p class="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
      </div>
      <div>
        <div class="mt-10">
          <!-- Decorative image grid -->
          <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div class="flex items-center space-x-6 lg:space-x-8">
                <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" class="size-full object-cover" />
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" class="size-full object-cover" />
                  </div>
                </div>
                <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" class="size-full object-cover" />
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" class="size-full object-cover" />
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" class="size-full object-cover" />
                  </div>
                </div>
                <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" class="size-full object-cover" />
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" class="size-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</a>
        </div>
      </div>
    </div>
  </div>
</div>
