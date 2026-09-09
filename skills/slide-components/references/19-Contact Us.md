---
title: Contact Us
prompt: |
  技能名：Contact Us（左联系信息 + 右留言表）
  一句话：两栏：左「联系我们」+ 邮箱/工时/电话（浅底图），右「留言咨询」表单（姓名、电话、公司、留言、提交）。
  
  布局：
  - `grid-cols-2`
  - 左：大标题 + 三行图标信息 + 装饰底图（低透明）
  - 右：白底阴影表单
  
  内容要素：
  - 左：标题、邮箱、工作时间、电话
  - 右：表单标签与按钮（演示页可不接后台）
  
  适合场景：
  - 方案结尾联系页、售前对接信息
  - 客户已提供对接邮箱/电话/工时
  
  不适合：
  - 企业简介+四指标
  - 还要地图、三入口卡片 → 用 Contact 2
  
  所需资源：
  - 文字：邮箱、工时、电话（必填）；表单文案可沿用
  - 图片：1 张低透明装饰图（办公/握手），可无
  - 视频：无
  
  匹配信号：联系我们、留言、邮箱电话、表单
  定制指引：演示 PPT 表单可 `pointer-events-none` 或保持静态；信息三件套必须换成客户真实对接人。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：左信息 2–4 行（邮箱/电话/工时/地址）。表单字段按客户要的留 2–4 个，不要为演示堆无用项。
  - 缺资源降级：无底图删除装饰 `img`。无表单则左栏铺满整页（单栏联系）。缺某一联系方式就删那一行，勿留「待补充」。
  - 重要性：真实对接信息 > 表单；演示表单可静态。
  - 兄弟推荐：还要地图+三入口卡 → Contact 2。
  - 最佳实践：图标与文字基线对齐；表单标签清晰。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 两列 `items-stretch` 等高铺满。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 先信息后表单，禁止 `min-h-screen`。
template: component
position: 19
site_id: "15303"
page_id: "590752"
---

<div class="grid grid-cols-2 gap-8">
  <!-- 左侧：联系信息区域 -->
  <div class="flex flex-col justify-center space-y-6 relative px-8">
      <!-- Pixabay 联系主题背景图（装饰用） -->
      <img 
          src="https://tanmer.baklib.com/-/dam/assets/organization_pry3c5/eyJfcmFpbHMiOnsiZGF0YSI6eyJpZCI6MjM4NDI1LCJwYXRoIjoiYm9vay3lrqLmiLfkvZPpqowud2VicCIsInRpbWVzdGFtcCI6IjIwMjUtMTItMjlUMDA6MTU6NDAuMzExKzA4OjAwIiwidG9rZW4iOiIifSwicHVyIjoib3JnYW5pemF0aW9uX3ByeTNjNSJ9fQ--b3844fa1aeed46afa26a6e2666732a384553acf3ef48bed5118bf4d4837443c0/book-%E5%AE%A2%E6%88%B7%E4%BD%93%E9%AA%8C.webp" 
          alt="联系我们" 
          class="absolute inset-0 w-full h-full object-cover rounded-lg opacity-20 -z-10"
      >
      <h2 class="text-4xl font-bold text-brand">联系我们</h2>
      <div class="space-y-4 text-lg text-gray-800">
          <div class="flex items-center">
              <i class="fa-solid fa-envelope text-brand text-2xl w-10"></i>
              <span>联系邮箱：song@tanmer.com</span>
          </div>
          <div class="flex items-center">
              <i class="fa-solid fa-clock text-brand text-2xl w-10"></i>
              <span>工作时间：8:00-18:00</span>
          </div>
          <div class="flex items-center">
              <i class="fa-solid fa-phone text-brand text-2xl w-10"></i>
              <span>联系电话：028-00283423</span>
          </div>
      </div>
  </div>

  <!-- 右侧：留言表单区域 -->
  <div class="bg-white p-8 rounded-lg shadow-md">
      <h3 class="text-2xl font-semibold text-gray-800 mb-6">留言咨询</h3>
      <form class="space-y-4">
          <!-- 姓名输入框 -->
          <div>
              <label for="name" class="block text-gray-700 mb-2">姓名</label>
              <input 
                  type="text" 
                  id="name" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="请输入您的姓名"
              >
          </div>
          <!-- 电话输入框 -->
          <div>
              <label for="phone" class="block text-gray-700 mb-2">电话</label>
              <input 
                  type="tel" 
                  id="phone" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="请输入您的联系电话"
              >
          </div>
          <!-- 公司输入框 -->
          <div>
              <label for="company" class="block text-gray-700 mb-2">公司</label>
              <input 
                  type="text" 
                  id="company" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="请输入您的公司名称"
              >
          </div>
          <!-- 留言文本域 -->
          <div>
              <label for="message" class="block text-gray-700 mb-2">留言</label>
              <textarea 
                  id="message" 
                  rows="4" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="请输入您的留言内容"
              ></textarea>
          </div>
          <!-- 提交按钮 -->
          <button 
              type="submit" 
              class="w-full bg-brand text-white py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors"
          >
              提交留言
          </button>
      </form>
  </div>
</div>
