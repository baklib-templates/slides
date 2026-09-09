---
title: Blog
prompt: |
  技能名：Blog（三列资讯/案例卡）
  一句话：左上栏目标题+导语，下方 3 张竖向内容卡（封面图、分类日期、标题、摘要、作者头像）。
  
  布局：
  - 顶部分隔线上方：标题 + 一句栏目说明
  - `lg:grid-cols-3` 三卡；每卡上图下文
  - 卡内：分类点 + 日期、标题、2 行摘要、圆形作者头像 + 名 + 角色
  
  内容要素：
  - 栏目标题、导语
  - 3 篇文章/案例：封面、分类、日期、标题、摘要（40–80 字）、作者名与角色
  
  适合场景：
  - 客户案例、成功故事、相关资讯、交付里程碑三则
  - 方案中「看看别人怎么做」的证据页
  
  不适合：
  - 企业四指标、报价、团队名录
  - 6 篇以上要铺开 → 用 Blog 2
  
  所需资源：
  - 文字：3 组完整卡片文案
  - 图片：3 张封面（约 16:10）+ 3 张小头像
  - 视频：无
  
  匹配信号：博客、资讯、案例三则、文章列表、作者
  定制指引：可把「文章」改成「案例/里程碑」；日期可用项目阶段。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：2 卡 `md:grid-cols-2` 加宽；3 卡沿用三列；4 卡可 2×2；5–6 卡改 Blog 2 或拆页。1 卡不要用本组件，改 Light Hero 或 Sections。
  - 缺资源降级：无封面用纯色+图标；无作者则删头像行；无日期可改阶段名。
  - 重要性：三卡摘要长度齐；其中一则可略大标题但不破栅格。
  - 兄弟推荐：6 篇无作者 → Blog 2；要货架价格 → Products。
  - 最佳实践：上图下文、分类+日期一行、标题最多两行截断。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 三卡 `items-stretch` 等高。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 单列，封面 `max-h-[40vh]`。
template: component
position: 6
site_id: "15303"
page_id: "590699"
---

<div class="bg-white py-24 sm:py-32 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">From the blog</h2>
      <p class="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">Learn how to grow your business with our expert advice.</p>
    </div>
    <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 dark:border-gray-700">
      <article class="flex max-w-xl flex-col items-start justify-between">
        <div class="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" class="text-gray-500 dark:text-gray-400">Mar 16, 2020</time>
          <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800">Marketing</a>
        </div>
        <div class="group relative grow">
          <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
            <a href="#">
              <span class="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4 justify-self-end">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-10 rounded-full bg-gray-50 dark:bg-gray-800" />
          <div class="text-sm/6">
            <p class="font-semibold text-gray-900 dark:text-white">
              <a href="#">
                <span class="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p class="text-gray-600 dark:text-gray-400">Co-Founder / CTO</p>
          </div>
        </div>
      </article>
      <article class="flex max-w-xl flex-col items-start justify-between">
        <div class="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-10" class="text-gray-500 dark:text-gray-400">Mar 10, 2020</time>
          <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800">Sales</a>
        </div>
        <div class="group relative grow">
          <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
            <a href="#">
              <span class="absolute inset-0"></span>
              How to use search engine optimization to drive sales
            </a>
          </h3>
          <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.</p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4 justify-self-end">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-10 rounded-full bg-gray-50 dark:bg-gray-800" />
          <div class="text-sm/6">
            <p class="font-semibold text-gray-900 dark:text-white">
              <a href="#">
                <span class="absolute inset-0"></span>
                Lindsay Walton
              </a>
            </p>
            <p class="text-gray-600 dark:text-gray-400">Front-end Developer</p>
          </div>
        </div>
      </article>
      <article class="flex max-w-xl flex-col items-start justify-between">
        <div class="flex items-center gap-x-4 text-xs">
          <time datetime="2020-02-12" class="text-gray-500 dark:text-gray-400">Feb 12, 2020</time>
          <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800">Business</a>
        </div>
        <div class="group relative grow">
          <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
            <a href="#">
              <span class="absolute inset-0"></span>
              Improve your customer experience
            </a>
          </h3>
          <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.</p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4 justify-self-end">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-10 rounded-full bg-gray-50 dark:bg-gray-800" />
          <div class="text-sm/6">
            <p class="font-semibold text-gray-900 dark:text-white">
              <a href="#">
                <span class="absolute inset-0"></span>
                Tom Cook
              </a>
            </p>
            <p class="text-gray-600 dark:text-gray-400">Director of Product</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
