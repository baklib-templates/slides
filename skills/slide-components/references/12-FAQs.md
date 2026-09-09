---
title: FAQs
prompt: |
  技能名：FAQs（手风琴问答）
  一句话：左固定「常见问题」标题，右一列可展开问答（题干 + 答案）。
  
  布局：
  - 左右分栏：左标题粘性，右 `dl` 列表
  - 每项可折叠（details/disclosure 或 Tailwind plus）；题干加号/箭头图标
  
  内容要素：
  - 栏目标题
  - 5–8 组 Q + A（答案 40–120 字）
  
  适合场景：
  - 实施疑虑、商务条款、安全合规、迁移问题、售后
  - 方案收尾「你们可能还想问」
  
  不适合：
  - 企业介绍数字、产品功能墙、联系表单（表单用 Contact）
  
  所需资源：
  - 文字：标题 + 成对问答（必须成对）
  - 图片：无
  - 视频：无
  
  匹配信号：FAQ、常见问题、问答、顾虑、折叠面板
  定制指引：6 条左右最稳；答案避免长文导致一屏狂滚。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：3–4 条可加大行距铺满；5–8 条一屏（示例约 6）；9+ 条主区 `overflow-y-auto` 或拆两页。不要为凑数写假问题。
  - 缺资源降级：无答案的项不输出。左标题可改成客户行业「你们可能想问」。
  - 重要性：前 3 问最关键，可默认展开第一项。
  - 兄弟推荐：要表单联系 → Contact Us；要功能点不是问答 → 2 Grid Features。
  - 最佳实践：题干一行、答案可折叠；图标与题干对齐。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 左标题粘性、右列表拉满高度。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 标题在上，问答单列。
template: component
position: 12
site_id: "15303"
page_id: "590719"
---

<!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->
<div class="bg-white dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
    <div class="mx-auto max-w-4xl">
      <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">Frequently asked questions</h2>
      <dl class="mt-16 divide-y divide-gray-900/10 dark:divide-white/10">
        <div class="py-6 first:pt-0 last:pb-0">
          <dt>
            <button type="button" command="--toggle" commandfor="faq-0" class="flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
              <span class="text-base/7 font-semibold">What&#039;s the best thing about Switzerland?</span>
              <span class="ml-6 flex h-7 items-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 [[aria-expanded='true']_&]:hidden">
                  <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 [&:not([aria-expanded='true']_*)]:hidden">
                  <path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </button>
          </dt>
          <el-disclosure id="faq-0" class="[&:not([hidden])]:contents">
            <dd class="mt-2 pr-12">
              <p class="text-base/7 text-gray-600 dark:text-gray-400">I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>
            </dd>
          </el-disclosure>
        </div>
        <div class="py-6 first:pt-0 last:pb-0">
          <dt>
            <button type="button" command="--toggle" commandfor="faq-1" class="flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
              <span class="text-base/7 font-semibold">How do you make holy water?</span>
              <span class="ml-6 flex h-7 items-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 [[aria-expanded='true']_&]:hidden">
                  <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 [&:not([aria-expanded='true']_*)]:hidden">
                  <path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </button>
          </dt>
          <el-disclosure id="faq-1" hidden class="[&:not([hidden])]:contents">
            <dd class="mt-2 pr-12">
              <p class="text-base/7 text-gray-600 dark:text-gray-400">You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.</p>
            </dd>
          </el-disclosure>
        </div>
        <div class="py-6 first:pt-0 last:pb-0">
          <dt>
            <button type="button" command="--toggle" commandfor="faq-2" class="flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
              <span class="text-base/7 font-semibold">What do you call someone with no body and no nose?</span>
              <span class="ml-6 flex h-7 items-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 [[aria-expanded='true']_&]:hidden">
                  <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 [&:not([aria-expanded='true']_*)]:hidden">
                  <path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </button>
          </dt>
          <el-disclosure id="faq-2" hidden class="[&:not([hidden])]:contents">
            <dd class="mt-2 pr-12">
              <p class="text-base/7 text-gray-600 dark:text-gray-400">Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.</p>
            </dd>
          </el-disclosure>
        </div>
        <div class="py-6 first:pt-0 last:pb-0">
          <dt>
            <button type="button" command="--toggle" commandfor="faq-3" class="flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
              <span class="text-base/7 font-semibold">Why do you never see elephants hiding in trees?</span>
              <span class="ml-6 flex h-7 items-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 [[aria-expanded='true']_&]:hidden">
                  <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 [&:not([aria-expanded='true']_*)]:hidden">
                  <path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </button>
          </dt>
          <el-disclosure id="faq-3" hidden class="[&:not([hidden])]:contents">
            <dd class="mt-2 pr-12">
              <p class="text-base/7 text-gray-600 dark:text-gray-400">Because they&#039;re so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>
            </dd>
          </el-disclosure>
        </div>
        <div class="py-6 first:pt-0 last:pb-0">
          <dt>
            <button type="button" command="--toggle" commandfor="faq-4" class="flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
              <span class="text-base/7 font-semibold">Why can&#039;t you hear a pterodactyl go to the bathroom?</span>
              <span class="ml-6 flex h-7 items-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 [[aria-expanded='true']_&]:hidden">
                  <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 [&:not([aria-expanded='true']_*)]:hidden">
                  <path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </button>
          </dt>
          <el-disclosure id="faq-4" hidden class="[&:not([hidden])]:contents">
            <dd class="mt-2 pr-12">
              <p class="text-base/7 text-gray-600 dark:text-gray-400">Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error.</p>
            </dd>
          </el-disclosure>
        </div>
        <div class="py-6 first:pt-0 last:pb-0">
          <dt>
            <button type="button" command="--toggle" commandfor="faq-5" class="flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
              <span class="text-base/7 font-semibold">Why did the invisible man turn down the job offer?</span>
              <span class="ml-6 flex h-7 items-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 [[aria-expanded='true']_&]:hidden">
                  <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 [&:not([aria-expanded='true']_*)]:hidden">
                  <path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </button>
          </dt>
          <el-disclosure id="faq-5" hidden class="[&:not([hidden])]:contents">
            <dd class="mt-2 pr-12">
              <p class="text-base/7 text-gray-600 dark:text-gray-400">He couldn&#039;t see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.</p>
            </dd>
          </el-disclosure>
        </div>
      </dl>
    </div>
  </div>
</div>
