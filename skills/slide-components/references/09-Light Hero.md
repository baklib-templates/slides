---
title: Light Hero
prompt: |
  技能名：Light Hero（浅色图文英雄 + 三条特性）
  一句话：左眉题/大标题/短文 + 3 条带图标特性；右一张产品界面大图。
  
  布局：
  - `lg:grid-cols-2` 左右对半分
  - 左：眉题、H2、段落、`dl` 三条（小图标 + 标题 + 一句）
  - 右：圆角产品截图（浅/深色可各一，按主题切换）
  
  内容要素：
  - 眉题、主标题、导语 40–80 字
  - 3 个特性：标题 + 一句
  - 1 张（或浅/深各 1）产品宽图
  
  适合场景：
  - 产品介绍开场、方案「是什么」页
  - 客户有 1 张主界面图 + 3 个短卖点
  
  不适合：
  - 4 个经营 count、无产品图 → Stats
  - 只要口号不要分点 → Hero（居中纯文本）
  
  所需资源：
  - 文字：页眉 + 3 条特性
  - 图片：1 张横向 UI/场景图
  - 视频：无
  
  匹配信号：浅色英雄、左文右图、三条特性、工作流、产品截图
  定制指引：保持两列；特性不要扩到 4 条以免挤图。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：特性 2–3 条（示例 3）。第 4 条起挤图，应删或改 2 Grid Features。
  - 缺资源降级：无产品图则退回居中纯文本 Hero，或只留左文铺满。无特性则只留标题导语+图。
  - 重要性：标题 > 图 > 三条特性。
  - 兄弟推荐：无图 → 11-Hero；深色+大图 → Dark Hero；四特性+左图 → Features 3。
  - 最佳实践：左文右图 50/50，图圆角、特性图标对齐。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 两列 `items-center` 撑满。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 先文后图。
template: component
position: 9
site_id: "15303"
page_id: "590710"
---

<div class="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
          <h2 class="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">Deploy faster</h2>
          <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">A better workflow</p>
          <p class="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
          <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900 dark:text-white">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="absolute left-1 top-1 size-5 text-indigo-600 dark:text-indigo-400">
                  <path d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
                Push to deploy.
              </dt>
              <dd class="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900 dark:text-white">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="absolute left-1 top-1 size-5 text-indigo-600 dark:text-indigo-400">
                  <path d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
                SSL certificates.
              </dt>
              <dd class="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900 dark:text-white">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="absolute left-1 top-1 size-5 text-indigo-600 dark:text-indigo-400">
                  <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                  <path d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
                Database backups.
              </dt>
              <dd class="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</dd>
            </div>
          </dl>
        </div>
      </div>
      <img width="2432" height="1442" src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot" class="hidden w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0 dark:block dark:ring-white/10" />
      <img width="2432" height="1442" src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0 dark:hidden dark:ring-white/10" />
    </div>
  </div>
</div>
