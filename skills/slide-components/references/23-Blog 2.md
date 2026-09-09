---
title: Blog 2
prompt: |
  技能名：Blog 2（六卡资讯瀑布）
  一句话：居中「最新文章」页眉，下方 3×2 图文卡（封面、分类、标题、摘要）。
  
  布局：
  - 页眉居中
  - `lg:grid-cols-3` 共 6 卡，比 Blog 更密、无作者行
  
  内容要素：
  - 栏目标题、导语
  - 6 篇：图、分类标签、标题、40–60 字摘要
  
  适合场景：
  - 内容矩阵、知识专题、多案例墙
  - 一次要铺 6 个主题
  
  不适合：
  - 3 个深度案例（用 Blog）、企业四指标、团队
  
  所需资源：
  - 文字：6 组卡片文案
  - 图片：6 张封面
  - 视频：无
  
  匹配信号：六篇博客、资讯瀑布、Latest Blog Posts
  定制指引：PPT 一屏 6 卡摘要必须短；可改成 6 个客户行业。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：3 卡改 Blog 或本组件一行三列；4 卡 2×2；6 卡 3×2（示例）；多于 6 拆页。摘要必须短。
  - 缺资源降级：无封面用分类色块；无分类标签可删。
  - 重要性：六卡均等，靠标题区分主题。
  - 兄弟推荐：3 则带作者 → Blog；产品货架 → Products。
  - 最佳实践：封面比例一致、标题两行截断。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 六卡 stretch 铺满。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 单列。
template: component
position: 23
site_id: "15303"
page_id: "590765"
---

<section class="mt-6 px-4 md:px-8">
   <div class="max-w-md mx-auto sm:max-w-4xl lg:max-w-6xl">
      <div class="mb-12 max-w-3xl">
         <h2 class="text-3xl font-bold mb-6 text-slate-900 md:text-4xl">Latest Blog Posts</h2>
         <p class="text-base text-slate-600 leading-relaxed">Explore our latest articles, insights,
            and practical tips to help you stay updated and build better products.</p>
      </div>

      <div class="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
         <article
            class="bg-gray-100 border border-slate-200 rounded-lg overflow-hidden">
            <div class="bg-gray-50 aspect-[23/16]">
               <img src="https://readymadeui.com/images/ai-img1.webp" alt="Design ai image"
                  class="w-full h-full object-cover object-top" />
            </div>
            <a href="#" class="p-6 block">
               <h3 class="text-lg font-semibold text-slate-900 mb-3">Creative Design Trends</h3>
               <p class="text-slate-600 text-base leading-relaxed line-clamp-3">Stay ahead of the
                  curve with the latest creative design trends shaping the digital world.</p>
            </a>
         </article>

         <article
            class="bg-gray-100 border border-slate-200 rounded-lg overflow-hidden">
            <div class="bg-gray-50 aspect-[23/16]">
               <img src="https://readymadeui.com/hotel-img.webp" alt="Hotel image"
                  class="w-full h-full object-cover object-top" />
            </div>
            <a href="#" class="p-6 block">
               <h3 class="text-lg font-semibold text-slate-900 mb-3">The Rise of Boutique Hotels</h3>
               <p class="text-slate-600 text-base leading-relaxed line-clamp-3">Explore how boutique
                  hotels are redefining luxury and guest experience in the travel industry.</p>
            </a>
         </article>

         <article
            class="bg-gray-100 border border-slate-200 rounded-lg overflow-hidden">
            <div class="bg-gray-50 aspect-[23/16]">
               <img src="https://readymadeui.com/team-image.webp" alt="Team image"
                  class="w-full h-full object-cover object-top" />
            </div>
            <a href="#" class="p-6 block">
               <h3 class="text-lg font-semibold text-slate-900 mb-3">Boost Team Productivity</h3>
               <p class="text-slate-600 text-base leading-relaxed line-clamp-3">Discover powerful
                  techniques to help your team collaborate better and get more done.</p>
            </a>
         </article>

         <article
            class="bg-gray-100 border border-slate-200 rounded-lg overflow-hidden">
            <div class="bg-gray-50 aspect-[23/16]">
               <img src="https://readymadeui.com/images/headphone-img8.webp" alt="Headphone image"
                  class="w-full h-full object-cover object-top" />
            </div>
            <a href="#" class="p-6 block">
               <h3 class="text-lg font-semibold text-slate-900 mb-3">Ecommerce Trends to Watch</h3>
               <p class="text-slate-600 text-base leading-relaxed line-clamp-3">Stay ahead with
                  insights into what’s driving the future of online shopping and digital retail.</p>
            </a>
         </article>

         <article
            class="bg-gray-100 border border-slate-200 rounded-lg overflow-hidden">
            <div class="bg-gray-50 aspect-[23/16]">
               <img src="https://readymadeui.com/hacks-watch.webp" alt="Watch image"
                  class="w-full h-full object-cover object-top" />
            </div>
            <a href="#" class="p-6 block">
               <h3 class="text-lg font-semibold text-slate-900 mb-3">Time Management Hacks</h3>
               <p class="text-slate-600 text-base leading-relaxed line-clamp-3">Master your schedule
                  with proven strategies that save hours each week and reduce stress.</p>
            </a>
         </article>

         <article
            class="bg-gray-100 border border-slate-200 rounded-lg overflow-hidden">
            <div class="bg-gray-50 aspect-[23/16]">
               <img src="https://readymadeui.com/Imagination.webp" alt="Imagination image"
                  class="w-full h-full object-cover object-top" />
            </div>
            <a href="#" class="p-6 block">
               <h3 class="text-lg font-semibold text-slate-900 mb-3">The Power of Creativity</h3>
               <p class="text-slate-600 text-base leading-relaxed line-clamp-3">Uncover how creative
                  thinking fuels innovation and helps brands stay competitive in any market.</p>
            </a>
         </article>
      </div>
   </div>
</section>
