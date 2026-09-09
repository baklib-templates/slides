---
title: Stats
prompt: |
  技能名：Stats（企业简介 + 四指标数字墙）
  一句话：左上超大标题 + 一段简介，中部 4 条文字链，底部 4 个大号 KPI（数字在上、标签在下）。
  
  布局：
  - 全幅浅色底 + 低透明度办公场景底图 + 粉紫光斑
  - 上方左对齐：超大标题（可放企业名或主张）+ 一段 80–200 字简介
  - 中部：2–4 条导航式文字链（可选，无链接可改成业务关键词）
  - 底部：`lg:grid-cols-4` 四个 count（`flex-col-reverse`：数字大、标签小）
  
  内容要素：
  - 主标题、简介正文
  - 可选 4 个锚点文案
  - 4 组 KPI：数值（日期/人数/产值/知产等）+ 指标名
  
  适合场景：
  - 【首选】客户只有「企业名称 + 约 200 字简介 + 4 个 count」（成立日期、员工数、年度产值、知产数量等）
  - 公司介绍页、客户画像开场、合作方资质速览
  - 要数字信任、不要产品截图或报价
  
  不适合：
  - 需要深色 KPI 卡 + 趋势图占位 → 用 Dashboard
  - 需要仪表盘/折线/环形图动效 → 用 Dashboard 2
  - 需要多人头像或产品货架
  
  所需资源：
  - 文字：企业名/主张、200 字内简介、4 个指标名+值（值可以是年份、人数、「2.3 亿」、件数）
  - 图片：1 张全幅氛围底图（办公/工厂/团队，低透明度）；没有则保留渐变光斑即可
  - 视频：无
  
  匹配信号：企业简介、成立日期、员工数量、年度产值、知产、KPI、四指标、数字墙、公司介绍
  定制指引：四个 dd/dt 一对一替换；标题用企业名或「关于某某」；简介不要超过约 200 字以免一屏溢出；弱化或删除中部链接。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：KPI 建议 3–6 个。3 个 `lg:grid-cols-3`；4 个沿用四列；5–6 个两行或末项跨列。2 个则加大数字，不要空出两列。7+ 拆页或改 Dashboard。
  - 缺资源降级：无底图只留渐变光斑；无中部链接则删除该行，把空间给简介与数字。简介超过约 200 字先压缩，勿挤爆 KPI。
  - 重要性：数字字号永远大于标签；标题可用企业名。
  - 兄弟推荐：要深色卡片+趋势图 → Dashboard；要折线/环形动效 → Dashboard 2。
  - 最佳实践：count 对齐、单位统一；日期类指标可写成年份而不用巨型长日期串。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 标题+简介靠上，KPI 贴底但仍在安全区，避免中部空洞。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 KPI 两列或单列，数字可略缩小。
template: component
position: 4
site_id: "15303"
page_id: "590693"
---

<div class="relative isolate overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=screen" alt="" class="absolute inset-0 -z-10 size-full object-cover object-right opacity-10 md:object-center dark:hidden" />
  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 hidden size-full object-cover object-right md:object-center dark:block" />
  <div aria-hidden="true" class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
    <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-15 dark:opacity-20"></div>
  </div>
  <div aria-hidden="true" class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0">
    <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-15 dark:opacity-20"></div>
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white">Work with us</h2>
      <p class="mt-8 text-pretty text-lg font-medium text-gray-700 sm:text-xl/8 dark:text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</p>
    </div>
    <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10 dark:text-white">
        <a href="#">Open roles <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
      </div>
      <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-gray-700 dark:text-gray-300">Offices worldwide</dt>
          <dd class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">12</dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-gray-700 dark:text-gray-300">Full-time colleagues</dt>
          <dd class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">300+</dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-gray-700 dark:text-gray-300">Hours per week</dt>
          <dd class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">40</dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-gray-700 dark:text-gray-300">Paid time off</dt>
          <dd class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">Unlimited</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
