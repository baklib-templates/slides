---
title: 2 Grid Features
prompt: |
  技能名：2 Grid Features（四宫格图标能力）
  一句话：居中眉题+大标题+导语，下方 2×2 能力格，每格左侧色块图标 + 标题 + 说明。
  
  布局：
  - 白底居中页眉
  - `lg:grid-cols-2` 四项；每项 `pl-16`，图标绝对定位在左上圆角方块内
  
  内容要素：
  - 眉题、主标题、导语（可放压缩后的企业/方案简介）
  - 4 个能力：图标（SVG）、标题、40–60 字说明
  
  适合场景：
  - 方案价值点、实施四步、产品四能力（偏文字，不靠截图）
  - 客户有 4 条能力说明，但没有大数字或没有界面图
  
  不适合：
  - 4 个是「成立日期/员工/产值/知产」这类 count → 用 Stats（数字要更大）
  - 需要截图拼图 → Bento；需要 6 卡 → Card Grid
  
  所需资源：
  - 文字：页眉三件套 + 4 组标题/说明
  - 图片：无（4 个 SVG 图标，可按主题换）
  - 视频：无
  
  匹配信号：四个功能、图标列表、2x2、价值点、无图能力墙
  定制指引：图标与文案一一替换；导语不要超过 80 字。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：2 项单列或两大卡；3 项可 3 列或 2+1；4 项沿用 2×2；5–6 项改 Card Grid。不要为凑 4 项编假能力。
  - 缺资源降级：无 SVG 用 Font Awesome；无导语可只留眉题+标题。
  - 重要性：四项默认均等；若有主能力可把第一项 `col-span-2`。
  - 兄弟推荐：要截图拼图 → Bento；6 个带 Learn more → Card Grid；四个是巨型 count → Stats。
  - 最佳实践：图标同色同尺寸、说明两行内。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 页眉压缩后四格拉满剩余高度。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 单列图标不缩小到无法点视。
template: component
position: 7
site_id: "15303"
page_id: "590704"
---

<div class="bg-white py-24 sm:py-32 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">Deploy faster</h2>
      <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance dark:text-white">Everything you need to deploy your app</p>
      <p class="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900 dark:text-white">
            <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-white">
                <path d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            Push to deploy
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600 dark:text-gray-400">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900 dark:text-white">
            <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-white">
                <path d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            SSL certificates
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600 dark:text-gray-400">Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900 dark:text-white">
            <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-white">
                <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            Simple queues
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600 dark:text-gray-400">Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900 dark:text-white">
            <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-white">
                <path d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            Advanced security
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600 dark:text-gray-400">Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
