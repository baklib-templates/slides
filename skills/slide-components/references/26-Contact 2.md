---
title: Contact 2
prompt: |
  技能名：Contact 2（三入口卡 + 表单 + 地图）
  一句话：上排三张入口卡（在线聊/拜访/电话）；下排左表单（姓名、邮箱、电话、留言）右地图或办公图。
  
  布局：
  - 上：`md:grid-cols-3` 三卡（图标、标题、一句、链接）
  - 下：`lg:grid-cols-2` 表单 | 大图
  - 比 Contact Us 信息架构更完整，更占版面
  
  内容要素：
  - 3 个联系通道：标题、说明、邮箱/地图链/电话
  - 表单字段文案
  - 1 张地图或办公室照片
  
  适合场景：
  - 正式商务联络页、多渠道获客、既要表单又要地址
  - 客户提供邮箱、地址/地图、电话、工时
  
  不适合：
  - 只要三行电话邮箱、版面要干净 → Contact Us
  - 企业介绍数字页
  
  所需资源：
  - 文字：三通道文案 + 真实联系方式
  - 图片：1 张地图截图或办公外立面
  - 视频：无
  
  匹配信号：联系方式、地图、三入口、Get in touch、拜访总部
  定制指引：演示勿使用 `min-h-screen`；三通道必须换成客户真实信息。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：入口卡 2–3 张（缺渠道就少一张，上排改两列或通栏）。表单字段按需 2–4 个。
  - 缺资源降级：无地图则右栏改办公图或删掉让表单铺满下排。无表单则三卡+地址铺满。禁止 `min-h-screen`。
  - 重要性：真实联系方式 > 装饰地图。
  - 兄弟推荐：只要三行电话邮箱、版面干净 → Contact Us。
  - 最佳实践：三卡图标风格统一；地图有 `alt`。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 上三卡 + 下两列 stretch 铺满。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 三卡单列，再表单，再地图。
template: component
position: 26
site_id: "15303"
page_id: "590769"
---

<section class="p-8 md:p-12 bg-gray-50 min-h-screen">
  <div class="max-w-6xl mx-auto space-y-8">

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div class="bg-white p-6 rounded-xl shadow-lg border border-blue-100 flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
        <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
          <span class="text-2xl text-orange-500">💬</span>
        </div>
        <h3 class="text-lg font-semibold text-gray-800">Chat to support</h3>
        <p class="text-sm text-gray-500 mt-1">Speak to our friendly team.</p>
        <a href="mailto:support@tarapy.com" class="text-sm font-medium text-orange-500 hover:text-orange-600 mt-2">
          support@tarapy.com
        </a>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-lg border border-orange-100 flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
        <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
          <span class="text-2xl text-orange-500">📍</span>
        </div>
        <h3 class="text-lg font-semibold text-gray-800">Visit us</h3>
        <p class="text-sm text-gray-500 mt-1">Visit our office HQ.</p>
        <a href="#" class="text-sm font-medium text-blue-600 hover:text-blue-700 mt-2">
          View on Google Maps
        </a>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-lg border border-teal-100 flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
        <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
          <span class="text-2xl text-orange-500">☎️</span>
        </div>
        <h3 class="text-lg font-semibold text-gray-800">Contact Us</h3>
        <p class="text-sm text-gray-500 mt-1">Mon-Fri from 8am to 5pm.</p>
        <a href="tel:+12395550106" class="text-sm font-medium text-gray-700 hover:text-gray-900 mt-2">
          (239) 555-0106
        </a>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      
      <div class="h-96 lg:h-auto relative bg-primary">
        <img 
          src="https://tanmer.baklib.com/-/dam/assets/organization_pry3c5/eyJfcmFpbHMiOnsiZGF0YSI6eyJpZCI6MjU3MDQ1LCJwYXRoIjoiY2lyY2xlLnBuZyIsInRpbWVzdGFtcCI6IjIwMjYtMDItMTFUMjM6NDg6MjMuMTMwKzA4OjAwIiwidG9rZW4iOiIifSwicHVyIjoib3JnYW5pemF0aW9uX3ByeTNjNSJ9fQ--65efae5d3345bbcd4d6ac624912ecc549b058ef2cac62fec6cd71bbdf34a68a7/circle.png" 
          alt="" 
          class="absolute inset-0 w-full h-full aspect-3/2 object-cover"
        />
        </div>
      
      <div class="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Get in touch</h2>
        
        <form class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
            <input 
              type="email" 
              placeholder="Email" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          
          <div>
            <textarea 
              placeholder="Message" 
              rows="7" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-teal-700 text-white font-semibold py-3 rounded-lg hover:bg-teal-800 transition duration-200 shadow-md"
          >
            Submit
          </button>
        </form>
      </div>

    </div>

  </div>
</section>
