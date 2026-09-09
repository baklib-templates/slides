---
title: Features 3
prompt: |
  技能名：Features 3（左图主张 + 右四特性）
  一句话：左大标题+长导语+一张圆角图；右 2×2 四特性（小图标+标题+一句）。
  
  布局：
  - `lg:grid-cols-2` 对齐居中
  - 右 `sm:grid-cols-2` 四格
  
  内容要素：
  - 主标题、较长导语（80–140 字，可消化企业简介）
  - 1 张方形/接近 4:3 配图
  - 4 个特性：图标、标题、一句
  
  适合场景：
  - 「为什么选我们」：一段故事 + 四个支撑点 + 一张图
  - 客户有简介和四条能力，但四条不是巨型数字
  
  不适合：
  - 四个必须是超大 count → Stats / Dashboard
  - 无图且只要四图标 → 2 Grid Features
  
  所需资源：
  - 文字：标题、简介改写、4 条特性
  - 图片：1 张
  - 视频：无
  
  匹配信号：左图右特性、Work Easier、四特性+配图
  定制指引：导语可放 200 字压缩版；四特性不要改成四数字（字号体系不够）。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：右特性 2–4 项（示例 4）。2 项则右栏两大卡；3 项 2+1。不要把特性改成巨型 count。
  - 缺资源降级：无左图则右特性改成全宽 2×2（接近 2 Grid Features）；无长导语则短标题+图。
  - 重要性：左主张（可消化压缩简介）+ 右支撑点。
  - 兄弟推荐：无图四图标 → 2 Grid Features；四巨型数字 → Stats。
  - 最佳实践：左图圆角、右四格图标对齐。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 两列 `items-center` 拉满。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 先主张后四特性单列。
template: component
position: 22
site_id: "15303"
page_id: "590764"
---

<section class="mt-6 px-4 md:px-8">
   <div class="max-w-2xl mx-auto lg:max-w-7xl">
      <div class="grid lg:grid-cols-2 gap-x-8 gap-y-16 items-center">
         <div>
            <div class="max-w-3xl text-center lg:text-left">
               <h2 class="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">Work Easier Today</h2>
               <p class="text-base text-slate-600 leading-relaxed">We connect you with top
                  Unlock a world of possibilities with our exclusive features. Explore how our unique offerings can
                  transform your journey and empower you to achieve more.</p>
            </div>

            <hr class="my-12 border-slate-300" />

            <div class="grid gap-x-6 gap-y-12 sm:grid-cols-2">
               <div class="text-center lg:text-left">
                  <div class="w-10 h-10 p-2 rounded-md bg-blue-600 mb-6 flex items-center mx-auto lg:mx-0">
                     <svg xmlns="http://www.w3.org/2000/svg" class="size-full fill-white" viewBox="0 0 100 100"
                        aria-hidden="true">
                        <path
                           d="M65.156 4.42c-8.327 0-15.13 6.855-15.13 15.202s6.803 15.165 15.13 15.165c7.017 0 12.924-4.863 14.626-11.382h13.843a3.8 3.8 0 0 0 3.791-3.805 3.8 3.8 0 0 0-3.79-3.8h-13.86C78.053 9.294 72.16 4.42 65.156 4.42M6.391 15.8a3.8 3.8 0 0 0-3.79 3.805 3.8 3.8 0 0 0 3.79 3.8h36.397c-.21-1.234-.348-2.493-.348-3.783 0-1.304.134-2.575.348-3.821zm28.47 18.987c-7.018 0-12.92 4.89-14.619 11.418H6.392a4 4 0 0 0-.363 0 3.8 3.8 0 0 0-3.52 4.062 3.8 3.8 0 0 0 3.882 3.535H20.25c1.71 6.511 7.604 11.382 14.61 11.382 8.328 0 15.167-6.848 15.167-15.195s-6.84-15.202-15.166-15.202m22.383 11.418c.21 1.234.347 2.494.347 3.784 0 1.3-.134 2.57-.347 3.813h36.381a3.795 3.795 0 0 0 3.874-3.714 3.796 3.796 0 0 0-3.874-3.883zm7.912 18.979c-8.327 0-15.13 6.855-15.13 15.202S56.83 95.58 65.157 95.58c7.007 0 12.907-4.87 14.618-11.382h13.851a3.796 3.796 0 0 0 3.706-3.883 3.795 3.795 0 0 0-3.706-3.714H79.782c-1.701-6.527-7.608-11.418-14.626-11.418zM6.029 76.602a3.8 3.8 0 0 0-3.52 4.062 3.8 3.8 0 0 0 3.882 3.535h36.412a22.5 22.5 0 0 1-.348-3.813c0-1.29.138-2.55.348-3.784H6.39a4 4 0 0 0-.362 0z"
                           data-original="#000000" />
                     </svg>
                  </div>
                  <h3 class="text-slate-900 text-lg font-semibold mb-3">Customization</h3>
                  <p class="text-slate-600 text-base leading-relaxed">Easily tailor every aspect of
                     the platform to suit your business needs.</p>
               </div>

               <div class="text-center lg:text-left">
                  <div class="w-10 h-10 p-2 rounded-md bg-blue-600 mb-6 flex items-center mx-auto lg:mx-0">
                     <svg xmlns="http://www.w3.org/2000/svg" class="size-full fill-white text-white"
                        viewBox="0 0 682.667 682.667" aria-hidden="true">
                        <defs>
                           <clipPath id="a" clipPathUnits="userSpaceOnUse">
                              <path d="M0 512h512V0H0Z" data-original="#000000" />
                           </clipPath>
                        </defs>
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                           stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)"
                           transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                           <path
                              d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                              data-original="#000000" />
                           <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
                        </g>
                     </svg>
                  </div>
                  <h3 class="text-slate-900 text-lg font-semibold mb-3">Security</h3>
                  <p class="text-slate-600 text-base leading-relaxed">Your privacy is our top
                     priority and we implement industry-standard.</p>
               </div>

               <div class="text-center lg:text-left">
                  <div class="w-10 h-10 p-2 rounded-md bg-blue-600 mb-6 flex items-center mx-auto lg:mx-0">
                     <svg xmlns="http://www.w3.org/2000/svg" class="size-full fill-white text-white"
                        viewBox="0 0 682.667 682.667" aria-hidden="true">
                        <g transform="matrix(.95 0 0 .95 17.067 17.067)">
                           <defs>
                              <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                 <path d="M0 512h512V0H0Z" data-original="#000000" />
                              </clipPath>
                           </defs>
                           <g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-miterlimit="10" stroke-width="40"
                                 d="M164.496 275C141.917 298.08 128 329.162 128 364c0 70.692 57.307 128 128 128 70.692 0 128-57.308 128-128s-57.308-128-128-128"
                                 data-original="#000000" />
                              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
                                 stroke-width="40"
                                 d="M402.098 207c23.308-10.357 41.954-22.615 56.089-35.034C479.735 153.033 492 125.683 492 97V60c0-22.092-17.908-40-40-40H60c-22.091 0-40 17.908-40 40v37c0 28.683 12.265 56.033 33.813 74.966C76.615 192 111.158 211.813 158.068 224"
                                 data-original="#000000" />
                              <path
                                 d="M216 240c0 22.091 17.909 40 40 40s40-17.909 40-40-17.909-40-40-40-40 17.909-40 40"
                                 data-original="#000000" />
                           </g>
                        </g>
                     </svg>
                  </div>
                  <h3 class="text-slate-900 text-lg font-semibold mb-3">Support</h3>
                  <p class="text-slate-600 text-base leading-relaxed">Our expert support team is
                     available around the clock to assist you.</p>
               </div>

               <div class="text-center lg:text-left">
                  <div class="w-10 h-10 p-2 rounded-md bg-blue-600 mb-6 flex items-center mx-auto lg:mx-0">
                     <svg xmlns="http://www.w3.org/2000/svg" class="size-full fill-white" viewBox="0 0 512 512"
                        aria-hidden="true">
                        <path
                           d="M451 257v215c0 22.5-14.1 40-32.1 40H375c-18 0-32.1-17.6-32.1-40V257c0-22.5 14.1-40 32.1-40h43.9c17.9 0 32.1 17.6 32.1 40zm.7-126.1c-3 2.1-6.9 2.2-10.1.3l-30-18C362.2 195 292.5 272 157.9 272c-28.4 0-59.7-3.4-94.3-11-5-1.1-8.2-6-7.2-11.1 1-4.6 5.2-7.7 9.9-7.3 8.4.7 203.6 13.8 285.6-166.7L321.2 61c-4.6-2.2-6.6-7.8-4.4-12.4 1-2.1 2.7-3.7 4.8-4.6L423.5.7c4.7-2 10.2.2 12.2 4.9.3.7.5 1.4.6 2.1l19.3 113.9c.7 3.6-.9 7.3-3.9 9.3zM310.1 336v136c0 22.5-14.1 40-32.1 40h-44c-18 0-32.1-17.6-32.1-40V336c0-22.5 14.1-40 32.1-40h43.9c18.1-.1 32.2 17.5 32.2 40zm-137.8 65.8V472c0 22.4-14.1 40-32.1 40h-44c-18 0-32.1-17.6-32.1-40v-70.2c0-22.5 14.1-40 32.1-40h43.9c18.1-.1 32.2 17.5 32.2 40z"
                           data-original="#000000" />
                     </svg>
                  </div>
                  <h3 class="text-slate-900 text-lg font-semibold mb-3">Performance</h3>
                  <p class="text-slate-600 text-base leading-relaxed">Experience lightning-fast load
                     times and seamless performance.</p>
               </div>
            </div>
         </div>

         <div class="max-lg:-order-1">
            <div class="w-full aspect-[4/3]">
               <img src="https://readymadeui.com/images/about-us-img.svg"
                  class="w-full h-full object-contain rounded-md" alt="feature image" />
            </div>
         </div>
      </div>
   </div>
</section>
