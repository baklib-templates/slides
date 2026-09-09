---
title: Images
prompt: |
  技能名：Images（资源库缩略图网格）
  一句话：无大标题，4 列媒体库：缩略图 + 文件名 + 体积，像 DAM/相册管理界面。
  
  布局：
  - `lg:grid-cols-4`（小屏 2/3 列）
  - 每项：4:3 图 + 文件名 + 大小；无长文
  
  内容要素：
  - 8 张图（可增减为 6–8）
  - 每张：文件名、体积或类型标签
  
  适合场景：
  - 展示 DAM/素材库、交付物清单（截图集合）、现场照片归档
  - 强调「资产可管理」而非讲故事
  
  不适合：
  - 企业介绍、需要标题导语的方案页（本组件几乎无文案位）
  - 少于 4 张图
  
  所需资源：
  - 文字：文件名/标签（极短）
  - 图片：6–8 张缩略图
  - 视频：无（若要视频封面，仍用静帧）
  
  匹配信号：图库、DAM、素材、缩略图、HEIC、资源网格
  定制指引：可加一行小标题但不破坏网格密度；文件名改成资产标题。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：4 张两列放大；6 张 3 列；8 张 4 列（示例）；9–12 张缩小缩略图或内部滚动。少于 4 张改 Photo Sections / Light Hero。
  - 缺资源降级：无文件名可用标题；无体积数字可改类型标签。禁止空槽。
  - 重要性：密度优先，一般不加长文页眉；若必须加标题，单行且不破坏网格。
  - 兄弟推荐：要故事画廊 → Photo Sections；要产品价 → Products。
  - 最佳实践：缩略图比例一致、hover 不改变布局。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 网格 `flex-1` 铺满，行数随 N 变。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 2 列，禁止 4 列挤成豆粒。
template: component
position: 17
site_id: "15303"
page_id: "590738"
---

<ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
  <li class="relative">
    <div class="group overflow-hidden rounded-lg bg-gray-100 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 dark:bg-gray-800 dark:focus-within:outline-indigo-500">
      <img src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="pointer-events-none aspect-[10/7] rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/5 group-hover:opacity-75 dark:outline-white/10" />
      <button type="button" class="absolute inset-0 focus:outline-none">
        <span class="sr-only">View details for IMG_4985.HEIC</span>
      </button>
    </div>
    <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 dark:text-white">IMG_4985.HEIC</p>
    <p class="pointer-events-none block text-sm font-medium text-gray-500 dark:text-gray-400">3.9 MB</p>
  </li>
  <li class="relative">
    <div class="group overflow-hidden rounded-lg bg-gray-100 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 dark:bg-gray-800 dark:focus-within:outline-indigo-500">
      <img src="https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80" alt="" class="pointer-events-none aspect-[10/7] rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/5 group-hover:opacity-75 dark:outline-white/10" />
      <button type="button" class="absolute inset-0 focus:outline-none">
        <span class="sr-only">View details for IMG_5214.HEIC</span>
      </button>
    </div>
    <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 dark:text-white">IMG_5214.HEIC</p>
    <p class="pointer-events-none block text-sm font-medium text-gray-500 dark:text-gray-400">4 MB</p>
  </li>
  <li class="relative">
    <div class="group overflow-hidden rounded-lg bg-gray-100 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 dark:bg-gray-800 dark:focus-within:outline-indigo-500">
      <img src="https://images.unsplash.com/photo-1614705827065-62c3dc488f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="pointer-events-none aspect-[10/7] rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/5 group-hover:opacity-75 dark:outline-white/10" />
      <button type="button" class="absolute inset-0 focus:outline-none">
        <span class="sr-only">View details for IMG_3851.HEIC</span>
      </button>
    </div>
    <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 dark:text-white">IMG_3851.HEIC</p>
    <p class="pointer-events-none block text-sm font-medium text-gray-500 dark:text-gray-400">3.8 MB</p>
  </li>
  <li class="relative">
    <div class="group overflow-hidden rounded-lg bg-gray-100 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 dark:bg-gray-800 dark:focus-within:outline-indigo-500">
      <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="pointer-events-none aspect-[10/7] rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/5 group-hover:opacity-75 dark:outline-white/10" />
      <button type="button" class="absolute inset-0 focus:outline-none">
        <span class="sr-only">View details for IMG_4278.HEIC</span>
      </button>
    </div>
    <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 dark:text-white">IMG_4278.HEIC</p>
    <p class="pointer-events-none block text-sm font-medium text-gray-500 dark:text-gray-400">4.1 MB</p>
  </li>
  <li class="relative">
    <div class="group overflow-hidden rounded-lg bg-gray-100 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 dark:bg-gray-800 dark:focus-within:outline-indigo-500">
      <img src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="pointer-events-none aspect-[10/7] rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/5 group-hover:opacity-75 dark:outline-white/10" />
      <button type="button" class="absolute inset-0 focus:outline-none">
        <span class="sr-only">View details for IMG_6842.HEIC</span>
      </button>
    </div>
    <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 dark:text-white">IMG_6842.HEIC</p>
    <p class="pointer-events-none block text-sm font-medium text-gray-500 dark:text-gray-400">4 MB</p>
  </li>
  <li class="relative">
    <div class="group overflow-hidden rounded-lg bg-gray-100 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 dark:bg-gray-800 dark:focus-within:outline-indigo-500">
      <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80" alt="" class="pointer-events-none aspect-[10/7] rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/5 group-hover:opacity-75 dark:outline-white/10" />
      <button type="button" class="absolute inset-0 focus:outline-none">
        <span class="sr-only">View details for IMG_3284.HEIC</span>
      </button>
    </div>
    <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 dark:text-white">IMG_3284.HEIC</p>
    <p class="pointer-events-none block text-sm font-medium text-gray-500 dark:text-gray-400">3.9 MB</p>
  </li>
  <li class="relative">
    <div class="group overflow-hidden rounded-lg bg-gray-100 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 dark:bg-gray-800 dark:focus-within:outline-indigo-500">
      <img src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="pointer-events-none aspect-[10/7] rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/5 group-hover:opacity-75 dark:outline-white/10" />
      <button type="button" class="absolute inset-0 focus:outline-none">
        <span class="sr-only">View details for IMG_4841.HEIC</span>
      </button>
    </div>
    <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 dark:text-white">IMG_4841.HEIC</p>
    <p class="pointer-events-none block text-sm font-medium text-gray-500 dark:text-gray-400">3.8 MB</p>
  </li>
  <li class="relative">
    <div class="group overflow-hidden rounded-lg bg-gray-100 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 dark:bg-gray-800 dark:focus-within:outline-indigo-500">
      <img src="https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="pointer-events-none aspect-[10/7] rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/5 group-hover:opacity-75 dark:outline-white/10" />
      <button type="button" class="absolute inset-0 focus:outline-none">
        <span class="sr-only">View details for IMG_5644.HEIC</span>
      </button>
    </div>
    <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 dark:text-white">IMG_5644.HEIC</p>
    <p class="pointer-events-none block text-sm font-medium text-gray-500 dark:text-gray-400">4 MB</p>
  </li>
</ul>
