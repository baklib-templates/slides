---
title: Card Grid
prompt: |
  技能名：Card Grid（六宫格圆角功能卡）
  一句话：居中大标题+导语，下方 3×2 圆角浅底卡：圆标图标 + 功能名 + 两句说明 + Learn more。
  
  布局：
  - 页眉居中
  - `lg:grid-cols-3`，共 6 卡，边框圆角 3xl
  
  内容要素：
  - 标题（可含强调色单词）、导语
  - 6 个功能：SVG 图标、标题、40 字说明、链接文案
  
  适合场景：
  - 平台功能全景、模块清单（6 项）
  - 客户给了 5–6 条能力短文，无图或只靠图标
  
  不适合：
  - 恰好 4 个 count → Stats / 2 Grid Features
  - 只要 3 条长文案 → 3 Cards
  
  所需资源：
  - 文字：页眉 + 6 组功能文案
  - 图片：无（图标 SVG）
  - 视频：无
  
  匹配信号：六宫格、功能卡、Boost Your Work、模块清单
  定制指引：6 项最稳；4 项会空，8 项一屏溢出。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：3 卡一行拉满；4 卡 2×2；6 卡 3×2（示例最稳）；5 卡可 3+2 且第二行居中或末卡跨列；8 卡一屏溢出，拆页或缩摘要。不要为凑 6 编假功能。
  - 缺资源降级：无 Learn more 删链接；图标统一 FA。无导语可只留标题。
  - 重要性：默认同等；主功能可放左上并略加边框强调。
  - 兄弟推荐：4 个无链接能力 → 2 Grid Features；3 段长文无图标 → 3 Cards。
  - 最佳实践：圆角 3xl、图标圆底、说明两行。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 六卡 stretch；4 卡时加大 padding 铺满。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 单列。
template: component
position: 21
site_id: "15303"
page_id: "590763"
---

<section class="mt-6 px-4 md:px-8">
   <div class="max-w-7xl mx-auto">
      <div class="max-w-3xl mx-auto text-center mb-12 md:mb-16">
         <h2 class="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">
            Powerful Features to <span class="text-blue-700 whitespace-nowrap">Boost Your Work</span>
         </h2>
         <p class="text-base text-slate-600 leading-relaxed">Discover how it can transform the
            way you work
            with these amazing features.</p>
      </div>

      <div class="grid gap-8 max-w-lg mx-auto md:grid-cols-2 lg:grid-cols-3 md:max-w-full">
         <div class="bg-gray-50 border border-slate-300 rounded-3xl p-6">
            <div class="bg-blue-100 rounded-full flex items-center w-12 h-12 p-3 mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" class="size-full fill-blue-700"
                  viewBox="0 0 32 32" aria-hidden="true">
                  <path
                     d="M28.797 8.638c-.005-.01-.005-.022-.011-.032-.012-.021-.033-.033-.047-.053a3 3 0 0 0-1.049-1.036L17.499 1.634a3.01 3.01 0 0 0-2.999 0L4.309 7.517a3 3 0 0 0-1.048 1.036c-.014.02-.035.032-.047.053-.006.01-.005.021-.011.032a3 3 0 0 0-.394 1.478v11.767c0 1.068.575 2.063 1.5 2.599l10.19 5.884c.459.264.973.396 1.487.399q.007.002.014.003c.007.001.009-.003.014-.003a3 3 0 0 0 1.486-.399l10.191-5.884a3.01 3.01 0 0 0 1.5-2.599V10.116a3 3 0 0 0-.394-1.478m-2.106 14.111L17 28.344v-3.407a1 1 0 1 0-2 0v3.408L5.31 22.75c-.309-.178-.5-.51-.5-.866V10.682l4.521 2.61a.997.997 0 0 0 1.366-.366 1 1 0 0 0-.366-1.366L5.819 8.955l9.68-5.589a1 1 0 0 1 1.001 0l9.681 5.589-4.511 2.604a1 1 0 0 0 1 1.732l4.521-2.61v11.201c0 .357-.192.689-.5.867"
                     data-original="#000000" />
                  <path
                     d="m21.697 14.911-1.395-.503a4.51 4.51 0 0 1-2.724-2.724l-.502-1.396c-.163-.451-.596-.755-1.076-.755s-.913.304-1.076.756l-.502 1.396a4.51 4.51 0 0 1-2.725 2.724l-1.397.503c-.45.164-.752.596-.752 1.074s.302.91.755 1.075l1.394.502a4.52 4.52 0 0 1 2.725 2.725l.502 1.396c.163.452.595.756 1.076.756s.913-.304 1.076-.756l.502-1.396a4.52 4.52 0 0 1 2.724-2.725l1.398-.503c.45-.164.752-.596.752-1.074s-.302-.91-.755-1.075M16 18.901a6.5 6.5 0 0 0-2.915-2.915A6.5 6.5 0 0 0 16 13.071a6.5 6.5 0 0 0 2.915 2.915A6.5 6.5 0 0 0 16 18.901"
                     data-original="#000000" />
               </svg>
            </div>
            <h3 class="text-slate-900 text-lg font-semibold mb-3">AI Automation</h3>
            <p class="text-base leading-relaxed text-slate-600">Let our AI handle repetitive
               tasks so you can focus on
               creative work that matters.</p>
            <a href="#"
               class="text-sm inline-flex items-center font-medium hover:text-blue-700 mt-8">
               Learn more<svg xmlns="http://www.w3.org/2000/svg" class="size-3.5 ml-1.5 fill-current overflow-visible"
                  viewBox="0 0 24 24" aria-hidden="true">
                  <path
                     d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                     data-original="#000000"></path>
               </svg>
            </a>
         </div>

         <div class="bg-gray-50 border border-slate-300 rounded-3xl p-6">
            <div class="bg-blue-100 rounded-full flex items-center w-12 h-12 p-3 mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" class="size-full text-blue-700"
                  viewBox="0 0 682.667 682.667" aria-hidden="true">
                  <g transform="matrix(.92 0 0 .92 27.307 27.307)">
                     <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                           <path d="M0 512h512V0H0Z" data-original="#000000" />
                        </clipPath>
                     </defs>
                     <g stroke="currentColor" stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)"
                        transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                        <path fill="none"
                           d="M384 130v222c0 16.568 13.432 30 30 30h48c16.568 0 30-13.432 30-30V130c0-16.568-13.432-30-30-30h-48c-16.568 0-30 13.432-30 30ZM20 130v82c0 16.568 13.432 30 30 30h48c16.568 0 30-13.432 30-30v-82c0-16.568-13.432-30-30-30H50c-16.568 0-30 13.432-30 30ZM202 130v332c0 16.568 13.432 30 30 30h48c16.568 0 30-13.432 30-30V130c0-16.568-13.432-30-30-30h-48c-16.568 0-30 13.432-30 30Z"
                           data-original="#000000" />
                        <path d="M0 20h512" data-original="#000000" />
                     </g>
                  </g>
               </svg>
            </div>
            <h3 class="text-slate-900 text-lg font-semibold mb-3">Advanced Analytics</h3>
            <p class="text-base leading-relaxed text-slate-600">Get real-time insights and data
               visualizations to
               track productivity.</p>
            <a href="#"
               class="text-sm inline-flex items-center font-medium hover:text-blue-700 mt-8">
               Learn more<svg xmlns="http://www.w3.org/2000/svg" class="size-3.5 ml-1.5 fill-current overflow-visible"
                  viewBox="0 0 24 24" aria-hidden="true">
                  <path
                     d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                     data-original="#000000"></path>
               </svg>
            </a>
         </div>

         <div class="bg-gray-50 border border-slate-300 rounded-3xl p-6">
            <div class="bg-blue-100 rounded-full flex items-center w-12 h-12 p-3 mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" class="size-full fill-blue-700"
                  viewBox="0 0 510 510" aria-hidden="true">
                  <path
                     d="M255 51.997c90.981 0 165 74.019 165 165h30c-10.742-258.758-379.355-258.558-390 0h30c0-90.982 74.019-165 165-165"
                     data-original="#000000" />
                  <path
                     d="M463.516 348.24c36.024-37.438 8.977-101.394-43.516-101.243-52.491-.152-79.541 63.815-43.515 101.243a90.7 90.7 0 0 0-30.117 27.066 105.75 105.75 0 0 0-42.69-41.321c52.459-44.716 21.084-131.719-48.678-131.988-69.763.27-101.134 87.285-48.676 131.988a105.75 105.75 0 0 0-42.69 41.321 90.66 90.66 0 0 0-30.117-27.066c36.024-37.438 8.977-101.394-43.516-101.243-52.491-.152-79.541 63.815-43.515 101.243C18.79 363.603 0 393.145 0 426.997v60h510v-60c0-33.852-18.79-63.394-46.484-78.757M390 306.997c0-16.542 13.458-30 30-30 39.799 1.648 39.788 58.358 0 60-16.542 0-30-13.458-30-30m-180-30c0-24.813 20.186-45 45-45 59.699 2.471 59.681 87.538 0 90-24.814 0-45-20.187-45-45m-150 30c0-16.542 13.458-30 30-30 39.799 1.648 39.787 58.358 0 60-16.542 0-30-13.458-30-30m90 150H30v-30c3.305-79.618 116.724-79.556 120 0zm180 0H180v-30c4.131-99.522 145.906-99.445 150 0zm150 0H360v-30c3.305-79.618 116.724-79.556 120 0z"
                     data-original="#000000" />
               </svg>
            </div>
            <h3 class="text-slate-900 text-lg font-semibold mb-3">Team Collaboration</h3>
            <p class="text-base leading-relaxed text-slate-600">Seamlessly work with your team
               with shared projects
               and real-time updates.</p>
            <a href="#"
               class="text-sm inline-flex items-center font-medium hover:text-blue-700 mt-8">
               Learn more<svg xmlns="http://www.w3.org/2000/svg" class="size-3.5 ml-1.5 fill-current overflow-visible"
                  viewBox="0 0 24 24" aria-hidden="true">
                  <path
                     d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                     data-original="#000000"></path>
               </svg>
            </a>
         </div>

         <div class="bg-gray-50 border border-slate-300 rounded-3xl p-6">
            <div class="bg-blue-100 rounded-full flex items-center w-12 h-12 p-3 mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" class="size-full fill-blue-700"
                  viewBox="0 0 512 512" aria-hidden="true">
                  <path
                     d="m347.216 301.211-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83s-19.83 8.864-19.83 19.83v118.978c0 6.246 2.935 12.136 7.932 15.864l79.318 59.489a19.7 19.7 0 0 0 11.878 3.966c6.048 0 11.997-2.717 15.884-7.952 6.585-8.746 4.8-21.179-3.965-27.743"
                     data-original="#000000" />
                  <path
                     d="M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.833 256-256S397.167 0 256 0m0 472.341c-119.275 0-216.341-97.066-216.341-216.341S136.725 39.659 256 39.659c119.295 0 216.341 97.066 216.341 216.341S375.275 472.341 256 472.341"
                     data-original="#000000" />
               </svg>
            </div>
            <h3 class="text-slate-900 text-lg font-semibold mb-3">Smart Scheduling</h3>
            <p class="text-base leading-relaxed text-slate-600">Automatically optimize your
               calendar based on
               priorities and energy levels.</p>
            <a href="#"
               class="text-sm inline-flex items-center font-medium hover:text-blue-700 mt-8">
               Learn more<svg xmlns="http://www.w3.org/2000/svg" class="size-3.5 ml-1.5 fill-current overflow-visible"
                  viewBox="0 0 24 24" aria-hidden="true">
                  <path
                     d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                     data-original="#000000"></path>
               </svg>
            </a>
         </div>

         <div class="bg-gray-50 border border-slate-300 rounded-3xl p-6">
            <div class="bg-blue-100 rounded-full flex items-center w-12 h-12 p-3 mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" class="size-full fill-blue-700"
                  viewBox="0 0 214.27 214.27" aria-hidden="true">
                  <path
                     d="M196.926 55.171c-.11-5.785-.215-11.25-.215-16.537a7.5 7.5 0 0 0-7.5-7.5c-32.075 0-56.496-9.218-76.852-29.01a7.5 7.5 0 0 0-10.457 0c-20.354 19.792-44.771 29.01-76.844 29.01a7.5 7.5 0 0 0-7.5 7.5c0 5.288-.104 10.755-.215 16.541-1.028 53.836-2.436 127.567 87.331 158.682a7.5 7.5 0 0 0 4.912 0c89.774-31.116 88.368-104.849 87.34-158.686m-89.795 143.641c-76.987-27.967-75.823-89.232-74.79-143.351.062-3.248.122-6.396.164-9.482 30.04-1.268 54.062-10.371 74.626-28.285 20.566 17.914 44.592 27.018 74.634 28.285.042 3.085.102 6.231.164 9.477 1.032 54.121 2.195 115.388-74.798 143.356"
                     data-original="#000000" />
                  <path
                     d="m132.958 81.082-36.199 36.197-15.447-15.447a7.501 7.501 0 0 0-10.606 10.607l20.75 20.75a7.48 7.48 0 0 0 5.303 2.196 7.48 7.48 0 0 0 5.303-2.196l41.501-41.5a7.5 7.5 0 0 0 .001-10.606 7.5 7.5 0 0 0-10.606-.001"
                     data-original="#000000" />
               </svg>
            </div>
            <h3 class="text-slate-900 text-lg font-semibold mb-3">Enterprise Security</h3>
            <p class="text-base leading-relaxed text-slate-600">Bank-level encryption and
               compliance to keep your data
               safe and secure.</p>
            <a href="#"
               class="text-sm inline-flex items-center font-medium hover:text-blue-700 mt-8">
               Learn more<svg xmlns="http://www.w3.org/2000/svg" class="size-3.5 ml-1.5 fill-current overflow-visible"
                  viewBox="0 0 24 24" aria-hidden="true">
                  <path
                     d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                     data-original="#000000"></path>
               </svg>
            </a>
         </div>

         <div class="bg-gray-50 border border-slate-300 rounded-3xl p-6">
            <div class="bg-blue-100 rounded-full flex items-center w-12 h-12 p-3 mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" class="size-full fill-blue-700"
                  viewBox="0 0 510.115 510.115" aria-hidden="true">
                  <path
                     d="M435.369 74.746c-99.651-99.653-260.957-99.669-360.624 0-99.653 99.651-99.668 260.956 0 360.623 99.651 99.653 260.957 99.669 360.624 0 99.653-99.651 99.668-260.956 0-360.623m44.177 165.311h-74.488v22.5c0 12.406-10.093 22.5-22.5 22.5s-22.5-10.094-22.5-22.5v-22.5h-90v-60.534c25.409-3.65 45-25.564 45-51.966s-19.591-48.315-45-51.966V30.569c112.137 7.418 202.069 97.352 209.488 209.488M240.057 30.569v74.488h22.5c12.407 0 22.5 10.094 22.5 22.5s-10.093 22.5-22.5 22.5h-22.5v90h-60.534c-3.65-25.408-25.564-45-51.966-45s-48.315 19.592-51.966 45H30.57c7.418-112.136 97.35-202.07 209.487-209.488M30.57 270.057h74.488v-22.5c0-12.406 10.093-22.5 22.5-22.5s22.5 10.094 22.5 22.5v22.5h90v60.534c-25.409 3.65-45 25.564-45 51.966s19.591 48.315 45 51.966v45.022C127.92 472.128 37.988 382.194 30.57 270.057m239.487 209.489v-74.488h-22.5c-12.407 0-22.5-10.094-22.5-22.5s10.093-22.5 22.5-22.5h22.5v-90h60.534c3.65 25.408 25.564 45 51.966 45s48.315-19.592 51.966-45h45.022c-7.418 112.136-97.35 202.07-209.488 209.488"
                     data-original="#000000" />
               </svg>
            </div>
            <h3 class="text-slate-900 text-lg font-semibold mb-3">100+ Integrations</h3>
            <p class="text-base leading-relaxed text-slate-600">Connect with all your favorite
               tools to create a
               seamless workflow.</p>
            <a href="#"
               class="text-sm inline-flex items-center font-medium hover:text-blue-700 mt-8">
               Learn more<svg xmlns="http://www.w3.org/2000/svg" class="size-3.5 ml-1.5 fill-current overflow-visible"
                  viewBox="0 0 24 24" aria-hidden="true">
                  <path
                     d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                     data-original="#000000"></path>
               </svg>
            </a>
         </div>
      </div>
   </div>
</section>
