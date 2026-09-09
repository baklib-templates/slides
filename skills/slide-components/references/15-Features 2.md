---
title: Features 2
prompt: |
  技能名：Features 2（宽图横幅 + 六规格表）
  一句话：顶部全宽大图（底部渐隐），下方居中标题+导语，再下 3×2 规格表（项名 + 短值）。
  
  布局：
  - 顶 `h-96` 全宽图 + 白色渐变遮罩
  - 标题区叠在图下沿
  - `lg:grid-cols-3` 六格 `dt/dd`，上边框分隔
  
  内容要素：
  - 1 张氛围/产品宽图
  - 标题、导语
  - 6 组规格：字段名 + 一句话或短值（产地、材质、尺寸……可映射为资质字段）
  
  适合场景：
  - 产品技术规格、实施范围说明书、资质/参数一览
  - 客户有「一张主图 + 一组键值对」（6 项左右）
  - 若只有 4 个 count 且要大数字，仍优先 Stats；本组件适合「字段名+说明」而非巨型数字
  
  不适合：
  - 纯口号无参数、需要仪表盘曲线
  
  所需资源：
  - 文字：标题、导语、6 对键值
  - 图片：1 张全宽横图
  - 视频：无
  
  匹配信号：技术规格、参数表、键值对、宽图+说明、Technical Specifications
  定制指引：6 项可改为资质（认证、专利、产地、产能…）；值保持一行。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：规格 4 项两列；6 项 3×2（示例）；8 项缩小字号或拆页。2–3 项不要用本组件，改 2 Grid Features。
  - 缺资源降级：无顶图则删除 `h-96` 横幅，标题上移把空间给规格表。键无值则不输出该 `dt/dd`。
  - 重要性：表项均等；顶图是氛围不是信息主体。
  - 兄弟推荐：巨型数字 KPI → Stats；长能力说明 → Card Grid。
  - 最佳实践：键值一对一行、上边框分隔、值勿折成段。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 无图时规格区垂直居中铺满；有图时图约 35–40% 高，表占其余。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 顶图限高，规格单列。
template: component
position: 15
site_id: "15303"
page_id: "590728"
---

<div class="bg-white">
  <div aria-hidden="true" class="relative">
    <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-02-full-width.jpg" alt="" class="h-96 w-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-t from-white"></div>
  </div>

  <div class="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
    <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
      <p class="mt-4 text-gray-500">Organize is a system to keep your desk tidy and photo-worthy all day long. Procrastinate your work while you meticulously arrange items into dedicated trays.</p>
    </div>

    <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
      <div class="border-t border-gray-200 pt-4">
        <dt class="font-medium text-gray-900">Origin</dt>
        <dd class="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
      </div>
      <div class="border-t border-gray-200 pt-4">
        <dt class="font-medium text-gray-900">Material</dt>
        <dd class="mt-2 text-sm text-gray-500">Solid walnut base with rare earth magnets and polycarbonate add-ons.</dd>
      </div>
      <div class="border-t border-gray-200 pt-4">
        <dt class="font-medium text-gray-900">Dimensions</dt>
        <dd class="mt-2 text-sm text-gray-500">15&quot; x 3.75&quot; x .75&quot;</dd>
      </div>
      <div class="border-t border-gray-200 pt-4">
        <dt class="font-medium text-gray-900">Finish</dt>
        <dd class="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
      </div>
      <div class="border-t border-gray-200 pt-4">
        <dt class="font-medium text-gray-900">Includes</dt>
        <dd class="mt-2 text-sm text-gray-500">Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder</dd>
      </div>
      <div class="border-t border-gray-200 pt-4">
        <dt class="font-medium text-gray-900">Considerations</dt>
        <dd class="mt-2 text-sm text-gray-500">Made from natural materials. Grain and color vary with each item.</dd>
      </div>
    </dl>
  </div>
</div>
