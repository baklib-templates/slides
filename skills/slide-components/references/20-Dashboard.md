---
title: Dashboard
prompt: |
  技能名：Dashboard（深色品牌 KPI 看板）
  一句话：深色一屏看板：左上品牌名+口号+一句话定位，右上图标徽章；中部 4 张 KPI 卡（大数字+标题+一句）；下部左图/趋势占位、右 CTA 条。
  
  布局：
  - 满高深灰底，flex 列
  - 顶：品牌区 | 圆形图标
  - 中：`lg:grid-cols-4` 四张 KPI 卡
  - 底：两张跨 2 列——趋势/配图卡 + 主色 CTA 卡
  
  内容要素：
  - 产品/企业名、口号、一句话描述
  - 4 个 count：数值 + 短标题 + 一句解释
  - 1 张配图或图表占位
  - 收口 CTA 标题
  
  适合场景：
  - 【次选/增强】客户有企业名 + 简介提炼口号 + 4 个 count，并希望「更像数据看板」而不是杂志风 Stats
  - 平台成绩、运营数据、交付规模
  - 需要深色科技感
  
  不适合：
  - 只要浅色公司介绍、不要卡片 → Stats
  - 要折线/环形动效和多块金融小卡 → Dashboard 2
  - 无任何数字
  
  所需资源：
  - 文字：品牌三件套 + 4 组 KPI（值/标题/解释）+ CTA
  - 图片：1 张趋势图或主题图（可占位）
  - 视频：无
  - 图标：1 个品牌象征 SVG（避免 Baklib 字旁再放图形 Logo）
  
  匹配信号：看板、KPI 卡片、深色数据、品牌+四指标、运营数字
  定制指引：四卡对应成立年份/员工/产值/知产等；口号从简介抽；底部图可换成客户产线或增长示意。根节点保持 `flex-1 min-h-0`，不要 `h-screen`。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：KPI 卡 3–6 张。3 张三列加大；4 张四列（示例）；5–6 张两行，底部图/CTA 可缩或删。无数字不要用本组件。
  - 缺资源降级：无趋势图则底部左卡改成第五个 KPI 或客户场景图；无 CTA 删右卡，四 KPI 拉满。口号可从简介抽取，无口号则只留企业名。
  - 重要性：品牌名+四数字为主；底图为辅。
  - 兄弟推荐：浅色杂志风简介+数字 → Stats；要折线环形多模块 → Dashboard 2。
  - 最佳实践：深底对比、数字最大、解释一句；Baklib 字旁不要再放图形 Logo。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 顶栏 shrink、KPI `flex-grow` 铺满。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 KPI 单列或两列，底图限高。
template: component
position: 20
site_id: "15303"
page_id: "590753"
---

<div class="h-full w-full flex flex-col p-8 md:p-16 bg-gray-900 text-white">

    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        
        <div class="mb-6 md:mb-0">
            <h2 class="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                AI 内容云平台
            </h2>
            <h1 class="text-5xl md:text-6xl font-extrabold text-white mt-1">
                Baklib
            </h1>
            <p class="text-xl text-gray-400 mt-2">
                新世界的知识资产基础设施平台建设者
            </p>
        </div>

        <div class="w-20 h-20 md:w-28 md:h-28 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 md:w-16 md:h-16 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>

            <div class="absolute inset-0 bg-indigo-600/50 rounded-full animate-ping opacity-75"></div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow">

        <div class="p-6 bg-gray-800 rounded-xl border border-indigo-700/50 shadow-2xl transition duration-300 hover:bg-gray-700">
            <p class="text-5xl font-extrabold text-indigo-400">9年</p>
            <h3 class="text-xl font-semibold text-white mt-2">成熟的团队丰富的经验</h3>
            <p class="text-sm text-gray-400 mt-1">专注知识管理和内容云服务</p>
        </div>

        <div class="p-6 bg-gray-800 rounded-xl border border-indigo-700/50 shadow-2xl transition duration-300 hover:bg-gray-700">
            <p class="text-5xl font-extrabold text-indigo-400">800+</p>
            <h3 class="text-xl font-semibold text-white mt-2">先进企业客户的选择</h3>
            <p class="text-sm text-gray-400 mt-1">覆盖科技、金融、教育等行业</p>
        </div>

        <div class="p-6 bg-gray-800 rounded-xl border border-indigo-700/50 shadow-2xl transition duration-300 hover:bg-gray-700">
            <p class="text-5xl font-extrabold text-indigo-400">10.5K</p>
            <h3 class="text-xl font-semibold text-white mt-2">在线知识库和网站数量</h3>
            <p class="text-sm text-gray-400 mt-1">高效驱动内部知识协同</p>
        </div>

        <div class="p-6 bg-gray-800 rounded-xl border border-indigo-700/50 shadow-2xl transition duration-300 hover:bg-gray-700">
            <p class="text-5xl font-extrabold text-indigo-400">1000+</p>
            <h3 class="text-xl font-semibold text-white mt-2">在线托管的数字资源数</h3>
            <p class="text-sm text-gray-400 mt-1">为企业沉淀核心数字资产</p>
        </div>

        <div class="md:col-span-2 lg:col-span-2 p-6 bg-gray-800 rounded-xl border border-indigo-700/50 shadow-2xl flex flex-col justify-center items-center">
            <h3 class="text-2xl font-semibold text-white mb-4">知识增长趋势图（占位符）</h3>
            <div class="w-full bg-gray-700 rounded-lg flex items-center justify-center">
                <img src="https://tanmer.baklib.com/-/dam/assets/organization_pry3c5/eyJfcmFpbHMiOnsiZGF0YSI6eyJpZCI6MjM4NDE2LCJwYXRoIjoiYm9vay3nn6Xor4bnrqHnkIYud2VicCIsInRpbWVzdGFtcCI6IjIwMjUtMTItMjlUMDA6MTU6MzguMzE1KzA4OjAwIiwidG9rZW4iOiIifSwicHVyIjoib3JnYW5pemF0aW9uX3ByeTNjNSJ9fQ--2dd49caff4cf0a8bc00b3e3abff669de7ee0813430edd048166976f99242a90c/book-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86.webp" class="w-full object-cover h-48"/>
            </div>
        </div>

        <div class="md:col-span-2 lg:col-span-2 p-6 bg-indigo-600 opacity-80 rounded-xl shadow-2xl flex flex-col justify-center items-start">
            <h3 class="text-2xl font-bold text-white mb-3">立即构建您的 AI 知识资产！</h3>
            <button class="bg-white text-indigo-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-200">
                开始免费试用
            </button>
        </div>
    </div>
</div>
