---
title: Mult-Publish
prompt: |
  技能名：Mult-Publish（左多端拼图 + 右卖点列表）
  一句话：左 3 张错落设备图（手机/平板/桌面），右大标题 + 段落 + 3 条勾选卖点。
  
  布局：
  - `lg:grid-cols-12`：左 7 列图片拼贴，右 5 列文案
  - 图片区 `grid-cols-12`：4/3/5 列宽，三张圆角图高低错落
  - 文案：H2、一段说明、3 条带圆点勾的加粗短语
  
  内容要素：
  - 主标题（可换行）、正文 60–120 字
  - 3 条卖点（前半加粗 + 后半解释）
  - 3 张图：竖图手机、中等平板、较宽桌面/笔记本
  
  适合场景：
  - 多端适配、统一发布、一套内容多终端、响应式门户
  - 客户强调「电脑/平板/手机都能看」或有三端截图
  
  不适合：
  - 纯企业数字介绍、报价、联系我们
  - 只有一张图 → 用 Light Hero 或 Dark Hero
  
  所需资源：
  - 文字：标题、说明、3 条卖点
  - 图片：3 张设备/界面图（比例建议竖、方、横）
  - 视频：无
  
  匹配信号：多端、响应式、手机平板电脑、一端创作、阅读体验
  定制指引：保持左图右文比例；图用客户站点三端截图替换最佳。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：设备图 2–3 张（少一张就少一列，重新分 12 栅格）。卖点 2–4 条；1 条则并入导语。
  - 缺资源降级：只有 1 张图改为左文右单图（接近 Light Hero）；无图则右文左图标列表，不要破图框。
  - 重要性：左拼图是主视觉，右文不要长过三卖点。
  - 兄弟推荐：无多端图、只要三条特性 → Light Hero / 2 Grid Features。
  - 最佳实践：三端图圆角与阴影一致，高度错落但底对齐。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 左右 `items-center` 拉满。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 图在上（可横滑禁止，改为纵向堆叠）、文在下。
template: component
position: 8
site_id: "15303"
page_id: "590705"
---

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
    <div class="lg:col-span-7">
      <div class="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
        <div class="col-span-4">
          <img class="rounded-xl" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=920&q=80" alt="Baklib 手机端展示">
        </div>
        <div class="col-span-3">
          <img class="rounded-xl" src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=920&q=80" alt="Baklib 平板端展示">
        </div>
        <div class="col-span-5">
          <img class="rounded-xl" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=920&q=80" alt="Baklib 电脑端展示">
        </div>
        </div>
      </div>
    <div class="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
      <div class="space-y-6 sm:space-y-8">
        <div class="space-y-2 md:space-y-4">
          <h2 class="font-bold text-3xl lg:text-4xl text-foreground">
            Baklib 完美多端适配，<br>打造无缝阅读体验
          </h2>
          <p class="text-muted-foreground-1">
            无需复杂开发或额外排版，您的知识库即可自动响应并适配所有设备屏幕。无论是电脑、平板还是手机，都能为您的用户呈现最舒适的视觉效果。
          </p>
        </div>
        <ul class="space-y-2 sm:space-y-4">
          <li class="flex gap-x-3">
            <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-primary-50 text-primary-600 dark:bg-primary-500/20 dark:text-primary-200">
              <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <div class="grow">
              <span class="text-sm sm:text-base text-muted-foreground-1">
                <span class="font-bold">一端创作</span> – 多端实时同步展示，告别重复排版
              </span>
            </div>
          </li>

          <li class="flex gap-x-3">
            <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-primary-50 text-primary-600 dark:bg-primary-500/20 dark:text-primary-200">
              <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <div class="grow">
              <span class="text-sm sm:text-base text-muted-foreground-1">
                <span class="font-bold">智能响应式布局</span>，完美兼容各种屏幕尺寸
              </span>
            </div>
          </li>

          <li class="flex gap-x-3">
            <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-primary-50 text-primary-600 dark:bg-primary-500/20 dark:text-primary-200">
              <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <div class="grow">
              <span class="text-sm sm:text-base text-muted-foreground-1">
                全面提升 <span class="font-bold">移动端用户体验</span> 与搜索引擎排名 (SEO)
              </span>
            </div>
          </li>
        </ul>
        </div>
    </div>
    </div>
  </div>
