---
title: Bento Grid
prompt: |
  技能名：Bento Grid（不对称能力拼图）
  一句话：顶栏口号 + 大标题，下方 3 列 × 2 行 Bento，左右两格通高配产品截图/代码窗，中间两格为短能力卡。
  
  布局：
  - 浅灰/深色底，居中眉题 + 一行大标题
  - `lg:grid-cols-3 lg:grid-rows-2`：左列通高、右列通高、中列上下两格
  - 每格：短标题 + 1–2 句说明 + 视觉（截图、示意图或伪代码窗）
  
  内容要素：
  - 眉题（约 4–8 字）、主标题（约 8–20 字）
  - 4 个能力块：标题 + 短描述（各 20–40 字）
  - 视觉槽：左侧 1 张竖向产品/手机截图；中上、中下各 1 张横图或示意图（可浅/深色各一）；右侧代码/API 窗（标签页名 + 代码或空占位）
  
  适合场景：
  - 产品/方案要一次亮出 3–5 个能力，且至少有截图或界面示意
  - 平台总览、功能拼图、技术卖点墙
  - 客户有「多能力 + 配图」而不是单一大数字
  
  不适合：
  - 只有企业名 + 简介 + 4 个 count（无截图、无分点能力）→ 用 Stats 或 Dashboard
  - 需要定价、FAQ、联系表单、人员头像墙
  
  所需资源：
  - 文字：眉题、主标题、4 组能力文案
  - 图片：至少 3 张产品/界面图（竖 1 + 横 2）；无图可改纯色块或图标，会弱化本组件辨识度
  - 视频：无
  - 代码/界面：可选 1 段伪代码或 API 示意
  
  匹配信号：能力、功能拼图、Bento、截图墙、4 个卖点、产品界面
  定制指引：保留网格跨行结构；替换文案与图 URL；PPT 内压缩 `py-24`，根节点用 `flex-1 min-h-0 w-full`，勿加 `h-screen`。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：按客户内容拆成约 3–8 块。不要锁死示例的 `lg:grid-cols-3 lg:grid-rows-2` 或「左通高 + 中两格 + 右通高」。3 块可用 2+1 或通栏主卡+两小卡；4 块可沿用示例节奏；5–6 块用 3 列、部分 `row-span-2`/`col-span-2`；7–8 块缩小内边距或拆两页。
  - 重要性：1–2 块做主视觉（跨行/跨列、配截图或大数字）；其余 1×1 短文或图标。不要平均摊成每块一样大。
  - 缺资源降级：该块无截图则去掉 `img`，改图标、大数字、短代码窗或浅底色块；禁止留空白格。无代码示意则右卡改成能力文案。
  - 兄弟推荐：块都是均等短能力且无主从 → 2 Grid Features 或 Card Grid；只有数字无拼图 → Stats / Dashboard。
  - 最佳实践：可参考通行 Bento（CSS Grid span、一主多次、统一 gap 与圆角、移动端单列且保持阅读顺序），再套回本页浅底描边圆角卡。生成时允许检索网上 Bento Grid 佳例来补布局，但须保住本页基因，并遵守 slide-generation 技能。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 块少时拉大主卡；块多时加密网格而不是缩小到看不清。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 桌面跨行在手机上改为自上而下：主块最先、次块随后。
template: component
position: 1
site_id: "15303"
page_id: "590686"
---

<div class="bg-gray-50 py-24 sm:py-32 dark:bg-gray-900">
  <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-center text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">Deploy faster</h2>
    <p class="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl dark:text-white">Everything you need to deploy your app</p>
    <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
      <div class="relative lg:row-span-2">
        <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem] dark:bg-gray-800"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
          <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">Mobile friendly</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
          </div>
          <div class="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
            <div class="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl dark:shadow-none dark:outline dark:outline-1 dark:outline-white/20">
              <img src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png" alt="" class="size-full object-cover object-top" />
            </div>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow outline outline-1 outline-black/5 lg:rounded-l-[2rem] dark:outline-white/15"></div>
      </div>
      <div class="relative max-lg:row-start-1">
        <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] dark:bg-gray-800"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
          <div class="px-8 pt-8 sm:px-10 sm:pt-10">
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">Performance</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.</p>
          </div>
          <div class="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
            <img src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png" alt="" class="w-full max-lg:max-w-xs dark:hidden" />
            <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png" alt="" class="hidden w-full max-lg:max-w-xs dark:block" />
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow outline outline-1 outline-black/5 max-lg:rounded-t-[2rem] dark:outline-white/15"></div>
      </div>
      <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
        <div class="absolute inset-px rounded-lg bg-white dark:bg-gray-800"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
          <div class="px-8 pt-8 sm:px-10 sm:pt-10">
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">Security</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.</p>
          </div>
          <div class="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
            <img src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png" alt="" class="h-[min(152px,40cqw)] object-cover dark:hidden" />
            <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png" alt="" class="hidden h-[min(152px,40cqw)] object-cover dark:block" />
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow outline outline-1 outline-black/5 dark:outline-white/15"></div>
      </div>
      <div class="relative lg:row-span-2">
        <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem] dark:bg-gray-800"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
          <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">Powerful APIs</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.</p>
          </div>
          <div class="relative min-h-[30rem] w-full grow">
            <div class="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-1 outline-white/10 dark:bg-gray-900/60 dark:shadow-none">
              <div class="flex bg-gray-900 outline outline-1 outline-white/5">
                <div class="-mb-px flex text-sm/6 font-medium text-gray-400">
                  <div class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">NotificationSetting.jsx</div>
                  <div class="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                </div>
              </div>
              <div class="px-6 pb-14 pt-6">
                <!-- Your code example -->
              </div>
            </div>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow outline outline-1 outline-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem] dark:outline-white/15"></div>
      </div>
    </div>
  </div>
</div>
