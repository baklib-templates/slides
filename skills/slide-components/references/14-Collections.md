---
title: Collections
prompt: |
  技能名：Collections（三列主题合集）
  一句话：左上标题+导语，下方三张大图合集卡（图 + 合集名 + 一句定位）。
  
  布局：
  - 页眉左对齐
  - `lg:grid-cols-3`；每卡大图在上，标题+描述在下
  
  内容要素：
  - 栏目标题、导语 40–80 字
  - 3 个合集：封面、名称、一句说明
  
  适合场景：
  - 三条解决方案线、三个行业包、三套模板系列
  - 比 Products 更「主题」，比 Blog 更「少作者信息」
  
  不适合：
  - 四指标企业介绍、6 篇资讯、人员介绍
  
  所需资源：
  - 文字：页眉 + 3 组名称/说明
  - 图片：3 张 4:5 或 4:3 封面
  - 视频：无
  
  匹配信号：合集、系列、三条产品线、Shop by Collection
  定制指引：合集名保持短；说明一句即可。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：2 合集两大卡；3 合集三列（示例）；4 合集改 2×2 或 Products。不要输出空合集。
  - 缺资源降级：无封面用色块+图标；无导语可只留栏目标题。
  - 重要性：三卡均等，或第一张略强调边框。
  - 兄弟推荐：带价格 SKU → Products；六篇资讯 → Blog 2。
  - 最佳实践：封面比例统一、名称短、说明一句。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 三卡等高拉满。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 单列，封面限高。
template: component
position: 14
site_id: "15303"
page_id: "590725"
---

<div class="bg-white">
  <div class="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Shop by Collection</h2>
    <p class="mt-4 text-base text-gray-500">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>

    <div class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
      <a href="#" class="group block">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-collection-01.jpg" alt="Brown leather key ring with brass metal loops and rivets on wood table." class="aspect-[3/2] w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-[5/6]" />
        <h3 class="mt-4 text-base font-semibold text-gray-900">Handcrafted Collection</h3>
        <p class="mt-2 text-sm text-gray-500">Keep your phone, keys, and wallet together, so you can lose everything at once.</p>
      </a>
      <a href="#" class="group block">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-collection-02.jpg" alt="Natural leather mouse pad on white desk next to porcelain mug and keyboard." class="aspect-[3/2] w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-[5/6]" />
        <h3 class="mt-4 text-base font-semibold text-gray-900">Organized Desk Collection</h3>
        <p class="mt-2 text-sm text-gray-500">The rest of the house will still be a mess, but your desk will look great.</p>
      </a>
      <a href="#" class="group block">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-collection-03.jpg" alt="Person placing task list card into walnut card holder next to felt carrying case on leather desk pad." class="aspect-[3/2] w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-[5/6]" />
        <h3 class="mt-4 text-base font-semibold text-gray-900">Focus Collection</h3>
        <p class="mt-2 text-sm text-gray-500">Be more productive than enterprise project managers with a single piece of paper.</p>
      </a>
    </div>
  </div>
</div>
