---
title: Dashboard 2
prompt: |
  技能名：Dashboard 2（金融风多模块仪表盘）
  一句话：不规则 Bento 仪表盘：大英雄卡（口号+人物图）+ 折线小卡 + 净值大卡 + 环形分数 + 投资列表，偏 Fintech 数据秀。
  
  布局：
  - `lg:grid-cols-4` 不规则跨行跨列
  - 含 SVG 折线描边动画、环形 gauge、列表行
  - 视觉密度高，一屏信息量最大
  
  内容要素：
  - 主英雄：徽章、主标题、1 张人物/产品叠图
  - 多个指标卡：金额、涨跌幅、净值、分数、列表项（名称/投入/收益）
  
  适合场景：
  - 经营驾驶舱、财务/增长数据、要「像 App 仪表盘」的炫技页
  - 客户有多组金额、趋势、评分，而不只是 4 个静态 count
  
  不适合：
  - 【不要首选】仅企业名+200 字简介+4 个简单 count（模块过多，简介放不下）→ Stats 或 Dashboard
  - 联系、FAQ、团队
  
  所需资源：
  - 文字：主标题 + 多组指标名与数字 + 列表 3 行
  - 图片：1 张英雄底图 + 1 张人物/产品切图
  - 视频：无（动效用 SVG，不是视频）
  
  匹配信号：仪表盘、折线、环形分、净值、投资列表、fintech
  定制指引：可映射为产值趋势/回款/交付评分，但须准备多数字；不要把 200 字简介硬塞进英雄卡。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：模块可减不可空留。最少：英雄卡 + 2 个指标卡；完整示例信息密度最高。客户若只有 4 个静态 count，不要用本组件，改 Stats / Dashboard。
  - 缺资源降级：无人物图英雄卡改渐变+大标题；无折线数据用静态数字卡；无投资列表删该模块，把栅格重排铺满。
  - 重要性：1 个主英雄跨行跨列，其余小卡服务主数字。
  - 兄弟推荐：品牌+四 KPI 深色卡 → Dashboard；简介+四数字浅色 → Stats。
  - 最佳实践：不规则 Bento、统一圆角、动效仅 SVG 不自动播视频。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 整块 grid `flex-1` 铺满；删模块后重算 col-span。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 单列按阅读顺序：英雄 → 核心净值 → 其余。
template: component
position: 25
site_id: "15303"
page_id: "590768"
---

<style>
        /* Custom Animations */
        @keyframes drawLine {
            from { stroke-dashoffset: 1000; }
            to { stroke-dashoffset: 0; }
        }

        .animate-draw {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawLine 2.5s ease-out forwards;
        }

        @keyframes fillGauge {
            from { stroke-dashoffset: 251; } /* Circumference */
            to { stroke-dashoffset: var(--target-offset); }
        }

        .animate-gauge {
            stroke-dasharray: 251; /* 2 * PI * 40 */
            stroke-dashoffset: 251;
            animation: fillGauge 1.5s ease-out forwards 0.5s;
            transform: rotate(135deg);
            transform-origin: center;
        }

        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
    <section class=""
      x-data="{ loaded: false }"
      x-init="setTimeout(() => loaded = true, 100)">

    <div class="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ease-out"
         :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">

        <div class="col-span-1 md:col-span-2 lg:row-span-2 bg-gradient-to-b from-[#0a2e22] to-[#051912] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between h-[400px] lg:h-auto group text-white shadow-xl">
            <div class="absolute inset-0 z-0 opacity-40 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80')] bg-cover bg-center"></div>

            <div class="relative z-10 w-full max-w-xs">
                <div class="bg-white text-black font-bold px-3 py-1 rounded inline-block mb-6 text-sm">MSW</div>
                <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    The only web-site for your <span class="text-brand-green">personal finances!</span>
                </h1>
            </div>

            <div class="absolute bottom-0 right-[-20px] w-3/4 h-3/4 z-10 pointer-events-none">
                 <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      class="w-full h-full object-cover object-top mask-image-gradient"
                      style="-webkit-mask-image: linear-gradient(to top, black 80%, transparent 100%); mask-image: linear-gradient(to top, black 80%, transparent 100%); object-fit: contain; object-position: bottom right;"
                      alt="Man in suit">
            </div>
        </div>

        <div class="bg-indigo-50/50 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div class="flex justify-between items-start mb-8">
                <span class="text-slate-500 font-medium text-sm">Credit cards</span>
            </div>
            <div class="absolute top-12 left-0 right-0 h-16">
                <svg viewBox="0 0 200 60" class="w-full h-full" preserveAspectRatio="none">
                    <path d="M0,50 L20,40 L40,45 L60,20 L80,30 L100,15 L120,35 L140,25 L160,40 L180,10 L200,30" fill="none" stroke="#818cf8" stroke-width="3" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" class="animate-draw"/>
                    <path d="M0,50 L20,40 L40,45 L60,20 L80,30 L100,15 L120,35 L140,25 L160,40 L180,10 L200,30 L200,60 L0,60 Z" fill="rgba(129, 140, 248, 0.1)" stroke="none"/>
                </svg>
            </div>
            <div class="flex items-end justify-between mt-auto relative z-10 pt-10">
                <span class="text-2xl font-bold text-slate-800">$84,332</span>
                <span class="text-xs font-semibold text-slate-500 flex items-center">↑ 5%</span>
            </div>
        </div>

        <div class="bg-orange-50/50 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div class="flex justify-between items-start mb-8">
                <span class="text-slate-500 font-medium text-sm">Cash</span>
            </div>
            <div class="absolute top-12 left-0 right-0 h-16">
                <svg viewBox="0 0 200 60" class="w-full h-full" preserveAspectRatio="none">
                    <path d="M0,40 L30,50 L60,10 L90,30 L120,20 L150,25 L180,15 L200,20" fill="none" stroke="#fb923c" stroke-width="3" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" class="animate-draw" style="animation-delay: 0.2s"/>
                    <path d="M0,40 L30,50 L60,10 L90,30 L120,20 L150,25 L180,15 L200,20 L200,60 L0,60 Z" fill="rgba(251, 146, 60, 0.1)" stroke="none"/>
                </svg>
            </div>
            <div class="flex items-end justify-between mt-auto relative z-10 pt-10">
                <span class="text-2xl font-bold text-slate-800">$1,428</span>
                <span class="text-xs font-semibold text-slate-500 flex items-center">↑ 16%</span>
            </div>
        </div>

        <div class="col-span-1 md:col-span-2 bg-[#0d1117] rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[180px]">
            <div class="flex justify-between items-start z-10">
                <span class="text-gray-400 font-medium">My capital</span>
                <span class="text-xs text-gray-500">5m ago ↻</span>
            </div>

            <div class="flex justify-between items-end z-10 mt-4">
                <div>
                    <div class="text-xs text-gray-500 mb-1">Net worth</div>
                    <div class="text-4xl font-bold tracking-tight">$1,43,899.96</div>
                </div>
                <div class="text-brand-green text-sm font-medium mb-2">↑ 10%</div>
            </div>

            <div class="absolute bottom-0 right-0 w-2/3 h-2/3 pointer-events-none">
                 <svg viewBox="0 0 300 100" class="w-full h-full" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="greenGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stop-color="#00C66B" stop-opacity="0.2"/>
                            <stop offset="100%" stop-color="#00C66B" stop-opacity="0"/>
                        </linearGradient>
                    </defs>
                    <path d="M0,80 L40,70 L80,90 L120,50 L160,60 L200,30 L240,45 L280,20 L300,30"
                          fill="none" stroke="#00C66B" stroke-width="2" stroke-linejoin="round"
                          class="animate-draw" style="animation-delay: 0.4s"/>
                    <path d="M0,80 L40,70 L80,90 L120,50 L160,60 L200,30 L240,45 L280,20 L300,30 L300,100 L0,100 Z"
                          fill="url(#greenGradient)" stroke="none"/>
                 </svg>
            </div>
        </div>

        <div class="bg-white rounded-3xl p-6 shadow-sm flex flex-col items-center justify-between relative">
            <div class="w-full flex justify-between items-center mb-2">
                <span class="font-bold text-sm">Credit Score</span>
                <span class="text-[10px] bg-gray-100 px-2 py-1 rounded-full text-gray-500">More details</span>
            </div>

            <div class="relative w-40 h-24 overflow-hidden flex justify-center items-end mb-4">
                <svg viewBox="0 0 100 55" class="w-full h-full overflow-visible">
                    <path d="M10,50 A 40 40 0 0 1 90 50" fill="none" stroke="#f1f5f9" stroke-width="8" stroke-linecap="round"/>
                    <path d="M10,50 A 40 40 0 0 1 90 50" fill="none" stroke="#00C66B" stroke-width="8" stroke-linecap="round"
                          stroke-dasharray="125" stroke-dashoffset="125"
                          class="animate-[gaugeFill_1.5s_ease-out_forwards_0.5s]"
                          style="--target: 5"/> </svg>
                <div class="absolute bottom-0 text-center">
                    <div class="text-3xl font-bold text-slate-800">824</div>
                    <div class="text-xs text-gray-400">Your credit score is:</div>
                    <div class="text-xs font-semibold text-brand-green mt-1 bg-green-50 px-2 py-0.5 rounded-full inline-block">Excellent</div>
                </div>
                <div class="absolute bottom-2 left-0 text-[8px] text-gray-400">0</div>
                <div class="absolute bottom-2 right-0 text-[8px] text-gray-400">850</div>
            </div>
            <div class="w-full flex justify-between text-[10px] text-gray-400 font-medium px-2">
                <span>TransUnion</span>
                <span class="text-black font-bold">Equifax</span>
                <span>Experian</span>
            </div>
        </div>

        <div class="bg-white rounded-3xl p-6 shadow-sm flex flex-col items-center justify-between relative">
             <div class="w-full flex justify-between items-center mb-2">
                <span class="font-bold text-sm">Credit Score</span>
                <span class="text-[10px] bg-gray-100 px-2 py-1 rounded-full text-gray-500">More details</span>
            </div>
             <div class="relative w-40 h-24 overflow-hidden flex justify-center items-end mb-4">
                <svg viewBox="0 0 100 55" class="w-full h-full overflow-visible">
                    <path d="M10,50 A 40 40 0 0 1 90 50" fill="none" stroke="#f1f5f9" stroke-width="8" stroke-linecap="round"/>
                    <path d="M10,50 A 40 40 0 0 1 90 50" fill="none" stroke="#eebbc3" stroke-width="8" stroke-linecap="round"
                          stroke-dasharray="125" stroke-dashoffset="125"
                          class="animate-[gaugeFill_1.5s_ease-out_forwards_0.5s]"
                          style="--target: 50"/> <circle cx="50" cy="10" r="5" fill="white" stroke="#eebbc3" stroke-width="3"
                             class="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards_1.5s]"/>
                </svg>
                <div class="absolute bottom-0 text-center">
                    <div class="text-3xl font-bold text-slate-800">592</div>
                    <div class="text-xs text-gray-400">Your credit score is:</div>
                    <div class="text-xs font-semibold text-[#b86d78] mt-1 bg-red-50 px-2 py-0.5 rounded-full inline-block">Fair</div>
                </div>
                 <div class="absolute bottom-2 left-0 text-[8px] text-gray-400">0</div>
                <div class="absolute bottom-2 right-0 text-[8px] text-gray-400">850</div>
            </div>
            <div class="w-full flex justify-between text-[10px] text-gray-400 font-medium px-2">
                <span>TransUnion</span>
                <span class="text-black font-bold">Equifax</span>
                <span>Experian</span>
            </div>
        </div>

        <div class="col-span-1 md:col-span-2 bg-white rounded-3xl p-6 shadow-sm">
            <div class="flex justify-between items-end mb-6">
                <div>
                    <h3 class="text-sm font-bold text-gray-500 mb-1">Investments</h3>
                    <div class="text-3xl font-bold text-slate-900">$22,974.29 <span class="text-sm font-medium bg-green-100 text-green-700 px-2 py-1 rounded-md ml-2">37.86% ▲</span></div>
                    <div class="text-xs text-gray-400 mt-1">Earned <span class="font-bold text-slate-700">$3370,29</span> on investment</div>
                </div>
                <div class="flex gap-2">
                     <button class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 text-lg">+</button>
                     <button class="px-3 h-8 rounded-full border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50">View all</button>
                </div>
            </div>

            <div class="space-y-4">

                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all cursor-pointer group">
                    <div class="flex items-center gap-3 w-1/4">
                        <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold">A</div>
                        <div>
                            <div class="font-bold text-sm">AAPL</div>
                            <div class="text-[10px] text-gray-500">Apple Inc.</div>
                        </div>
                    </div>
                    <div class="w-1/6 hidden sm:block">
                        <div class="text-[10px] text-gray-400">Invested</div>
                        <div class="text-xs font-bold">$324.00</div>
                    </div>
                    <div class="w-1/6 hidden sm:block">
                        <div class="text-[10px] text-gray-400">Revenue</div>
                        <div class="text-xs font-bold text-green-600">24.33% ▲</div>
                    </div>
                    <div class="w-1/6">
                        <div class="text-[10px] text-gray-400 sm:hidden">Balance</div>
                        <div class="text-xs font-bold">$402,82</div>
                    </div>
                    <div class="w-1/5 h-8">
                         <svg viewBox="0 0 50 20" class="w-full h-full">
                            <path d="M0,15 Q10,18 20,10 T40,5 T50,10" fill="none" stroke="#00C66B" stroke-width="2" stroke-linecap="round"/>
                             <path d="M0,15 Q10,18 20,10 T40,5 T50,10 L50,20 L0,20 Z" fill="url(#greenGradient)" opacity="0.5"/>
                         </svg>
                    </div>
                </div>

                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all cursor-pointer group">
                    <div class="flex items-center gap-3 w-1/4">
                        <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-[10px] font-bold text-red-600">T</div>
                        <div>
                            <div class="font-bold text-sm">TSLA</div>
                            <div class="text-[10px] text-gray-500">Tesla Inc.</div>
                        </div>
                    </div>
                    <div class="w-1/6 hidden sm:block">
                        <div class="text-xs font-bold">$1280.00</div>
                    </div>
                    <div class="w-1/6 hidden sm:block">
                        <div class="text-xs font-bold text-orange-500">5.12% ▼</div>
                    </div>
                    <div class="w-1/6">
                        <div class="text-xs font-bold">$1214,47</div>
                    </div>
                    <div class="w-1/5 h-8">
                         <svg viewBox="0 0 50 20" class="w-full h-full">
                            <path d="M0,10 L10,12 L20,8 L30,15 L40,5 L50,12" fill="none" stroke="#fb923c" stroke-width="2" stroke-linecap="round"/>
                         </svg>
                    </div>
                </div>

                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all cursor-pointer group">
                     <div class="flex items-center gap-3 w-1/4">
                        <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">G</div>
                        <div>
                            <div class="font-bold text-sm">GOOG</div>
                            <div class="text-[10px] text-gray-500">Alphabet Inc.</div>
                        </div>
                    </div>
                    <div class="w-1/6 hidden sm:block">
                        <div class="text-xs font-bold">$18,000.00</div>
                    </div>
                    <div class="w-1/6 hidden sm:block">
                        <div class="text-xs font-bold text-green-600">18.65% ▲</div>
                    </div>
                    <div class="w-1/6">
                        <div class="text-xs font-bold">$21,357.00</div>
                    </div>
                    <div class="w-1/5 h-8">
                         <svg viewBox="0 0 50 20" class="w-full h-full">
                            <path d="M0,18 L10,15 L20,16 L30,10 L40,8 L50,5" fill="none" stroke="#00C66B" stroke-width="2" stroke-linecap="round"/>
                         </svg>
                    </div>
                </div>

            </div>
        </div>

    </div>

    <style>
        @keyframes gaugeFill {
            to { stroke-dashoffset: var(--target); }
        }
        @keyframes fadeIn {
            to { opacity: 1; }
        }
    </style>
</section>
