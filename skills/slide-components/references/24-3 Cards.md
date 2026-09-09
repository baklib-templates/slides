---
title: 3 Cards
prompt: |
  技能名：3 Cards（玻璃拟态三主题卡）
  一句话：顶部分栏标题「精选推荐」，下方三张等高玻璃卡：装饰线/网格 + 主题标题 + 一段 80–120 字说明。
  
  布局：
  - 浅色模糊彩斑背景
  - `md:grid-cols-3` 三列等高
  - 卡内上装饰、中标题、下段落；无照片
  
  内容要素：
  - 页眉（中英或短标签）
  - 3 个主题：标题 + 较长段落（可讲模板/专题/方法论）
  
  适合场景：
  - 三个重点议题、三条内容产品线、三篇深度专题
  - 客户给 3 段完整说明、不配图
  
  不适合：
  - 4 个 count、6 个短功能、需要图
  - 对话/聊天气泡演示 → 3 Cards AI Chat
  
  所需资源：
  - 文字：页眉 + 3 段较完整文案（每段约 80–140 字）
  - 图片：无
  - 视频：无
  
  匹配信号：三卡、精选推荐、玻璃拟态、三主题长文
  定制指引：保留玻璃和装饰，勿改成带图卡片；三段字数尽量齐。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：2 卡两大列铺满；3 卡三列（示例）；4 卡改 Card Grid 或 2×2 并缩短正文。不要塞第 4 段长文进本玻璃三列。
  - 缺资源降级：无装饰 SVG 可只留玻璃底；不要改成带大图卡（那是 Blog）。三段字数尽量齐。
  - 重要性：三主题并列；可把战略卡放中间。
  - 兄弟推荐：要 AI 对话演示 → 3 Cards AI Chat；要图标六功能 → Card Grid。
  - 最佳实践：玻璃拟态、等高、段内留白一致。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 三卡 `items-stretch` 拉满；2 卡时加宽。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 单列，模糊彩斑减弱以免脏屏。
template: component
position: 24
site_id: "15303"
page_id: "590766"
---

<style>

        /* Custom Keyframes for the Flowing Lines */
        @keyframes flow {
            0% { stroke-dashoffset: 100; opacity: 0; }
            50% { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0; }
        }

        .animate-flow {
            stroke-dasharray: 10;
            animation: flow 2s linear infinite;
        }

        /* Glassmorphism Utilities that Tailwind's default palette needs help with */
        .glass-panel {
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.6);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        }

        .inner-card {
            background: rgba(255, 255, 255, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }
    </style>

<section class="flex items-center justify-center overflow-x-hidden p-4 sm:p-8"
      x-data="{ mounted: false }"
      x-init="setTimeout(() => mounted = true, 100)">

    <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div class="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div class="absolute top-[-10%] right-[20%] w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-[30%] w-[500px] h-[500px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
    </div>

    <div class="max-w-7xl w-full mx-auto relative z-10 transition-all duration-1000 ease-out transform"
         :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">

         <h2 class="text-2xl md:text-4xl text-shadow-lg mb-4 md:mb-8 text-slate-800 font-bold">
            精选推荐 / Featured
         </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

            <!-- Card 1 -->
            <div class="glass-panel rounded-3xl p-6 pb-8 flex flex-col justify-between h-[540px] hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden group">
                <div class="text-xs font-semibold text-slate-400 mb-2">01</div>

                <div class="flex-1 relative flex items-center justify-center mb-6">
                    <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300">
                        <path d="M150 80 L150 130" stroke="#CBD5E1" stroke-width="2" />
                        <path d="M150 170 L110 210" stroke="#CBD5E1" stroke-width="2" />
                        <path d="M150 170 L190 210" stroke="#CBD5E1" stroke-width="2" />

                        <path d="M150 80 L150 130" stroke="#8B5CF6" stroke-width="2" class="animate-flow" />
                        <path d="M150 170 L110 210" stroke="#8B5CF6" stroke-width="2" class="animate-flow" style="animation-delay: 0.5s" />
                        <path d="M150 170 L190 210" stroke="#8B5CF6" stroke-width="2" class="animate-flow" style="animation-delay: 0.5s" />
                    </svg>

                    <div class="absolute top-4 left-1/2 -translate-x-1/2 inner-card px-4 py-2 rounded-xl text-xs font-medium text-slate-600">
                        场景模板
                    </div>

                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-200 z-10">
                        <span class="text-white font-bold text-lg">20+</span>
                        <div class="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-20"></div>
                    </div>

                    <div class="absolute bottom-12 left-8 inner-card px-3 py-1.5 rounded-lg text-[10px] text-slate-500">
                        18类场景
                    </div>
                    <div class="absolute bottom-12 right-8 inner-card px-3 py-1.5 rounded-lg text-[10px] text-slate-500">
                        一键启用
                    </div>
                </div>

                <div class="space-y-4 relative z-20">
                    <div class="space-y-2">
                        <h3 class="text-xl font-semibold text-slate-800">一个平台，无限数字体验</h3>
                        <p class="text-xs text-slate-500 leading-relaxed">
                            Baklib 正式发布 20 款全新场景模板，将「一平台，无限数字体验」战略落地为全场景企业数字站点方案，覆盖官网、文档、招聘、内网等 18 类网站场景。
                        </p>
                    </div>
                    <a href="https://www.baklib.com/blog/c39c" target="_blank" class="block w-full py-2.5 px-4 text-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-xs shadow-md shadow-indigo-100 hover:shadow-lg hover:shadow-indigo-200 transition-all duration-200 hover:-translate-y-0.5">
                        阅读全文
                    </a>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="glass-panel rounded-3xl p-6 pb-8 flex flex-col justify-between h-[540px] hover:scale-[1.01] transition-transform duration-300 group">
                <div class="text-xs font-semibold text-slate-400 mb-2">02</div>

                <div class="flex-1 relative mb-6 overflow-hidden">
                    <div class="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 opacity-10">
                        <div class="border-r border-slate-400 h-full col-start-2"></div>
                        <div class="border-b border-slate-400 w-full row-start-3"></div>
                    </div>

                    <div class="absolute left-0 top-4 space-y-3 w-36">
                        <div class="inner-card p-2 rounded-lg flex items-center gap-2 transform translate-x-4 transition-transform duration-500">
                            <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[8px] text-blue-600">A</div>
                            <div class="text-[10px] text-slate-600 font-medium">多级导航</div>
                        </div>
                         <div class="inner-card p-2 rounded-lg flex items-center gap-2 opacity-80 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500 delay-75">
                            <div class="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-[8px] text-purple-600">B</div>
                            <div class="text-[10px] text-slate-600 font-medium">结构化目录</div>
                        </div>
                         <div class="inner-card p-2 rounded-lg flex items-center gap-2 opacity-60 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500 delay-100">
                            <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-[8px] text-green-600">C</div>
                            <div class="text-[10px] text-slate-600 font-medium">AI-Ready</div>
                        </div>
                    </div>

                    <svg class="absolute inset-0 w-full h-full pointer-events-none">
                        <path d="M140 50 C 180 50, 180 100, 220 100" fill="none" stroke="#E2E8F0" stroke-width="1.5" />
                        <circle cx="220" cy="100" r="3" fill="#8B5CF6" />
                    </svg>

                    <div class="absolute right-0 top-16 inner-card w-24 p-3 rounded-lg shadow-sm">
                        <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 mb-2 flex items-center justify-center text-[10px] text-white font-bold">Docs</div>
                        <div class="h-1.5 w-12 bg-slate-200 rounded-full mb-1"></div>
                        <div class="h-1.5 w-8 bg-slate-100 rounded-full"></div>
                    </div>
                </div>

                <div class="space-y-4">
                    <div class="space-y-2">
                        <h3 class="text-xl font-semibold text-slate-800">Docs文档知识库模版深度拆解</h3>
                        <p class="text-xs text-slate-500 leading-relaxed">
                            Docs 是一款专为知识管理与 Wiki 构建的深度拆解模版。以干净、结构化的多级导航 and 现代排版设计，助力企业快速构建高可用、AI-Ready 的知识库与产品文档站点。
                        </p>
                    </div>
                    <a href="https://site-yxmqzd8w.trial.baklib.site/" target="_blank" class="block w-full py-2.5 px-4 text-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-xs shadow-md shadow-indigo-100 hover:shadow-lg hover:shadow-indigo-200 transition-all duration-200 hover:-translate-y-0.5">
                        立即体验
                    </a>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="glass-panel rounded-3xl p-6 pb-8 flex flex-col justify-between h-[540px] hover:scale-[1.01] transition-transform duration-300 group">
                <div class="text-xs font-semibold text-slate-400 mb-2">03</div>

                <div class="flex-1 relative mb-6 flex items-center justify-center">
                    <div class="w-full h-48 inner-card rounded-xl overflow-hidden flex flex-col shadow-lg transform transition-all duration-500 group-hover:-translate-y-2">
                        <div class="h-8 border-b border-slate-100 flex items-center px-3 gap-2 bg-white/50">
                            <div class="w-2 h-2 rounded-full bg-red-400"></div>
                            <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
                            <div class="w-2 h-2 rounded-full bg-green-400"></div>
                            <div class="ml-auto text-[8px] text-slate-400 px-2 py-0.5 bg-slate-100 rounded">LLM Bot</div>
                        </div>

                        <div class="flex-1 flex bg-white/40">
                            <div class="w-12 border-r border-slate-100 p-2 space-y-2">
                                <div class="w-full aspect-square rounded bg-slate-100"></div>
                                <div class="w-full aspect-square rounded bg-slate-50 rounded-full"></div>
                            </div>
                            <div class="flex-1 p-3 relative">
                                <div class="flex items-center gap-2 mb-3">
                                    <div class="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white text-[10px] font-bold">Ai</div>
                                    <div class="flex-1">
                                        <div class="h-2 w-20 bg-slate-100 rounded mb-1"></div>
                                        <div class="h-1.5 w-12 bg-slate-50 rounded"></div>
                                    </div>
                                </div>

                                <div class="relative h-16 w-full mt-4 border-l border-b border-slate-200">
                                    <svg class="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                                        <path d="M0 64 L 20 50 L 40 55 L 60 30 L 80 40 L 100 10 L 120 20 L 140 5"
                                              fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                              class="path-draw" />
                                        <path d="M0 64 L 20 50 L 40 55 L 60 30 L 80 40 L 100 10 L 120 20 L 140 5 L 140 64 Z"
                                              fill="url(#gradient)" opacity="0.2" />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:1" />
                                                <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="absolute -right-2 top-10 inner-card px-2 py-1 rounded text-[8px] text-slate-500 shadow-sm animate-bounce">
                        GEO / AEO
                    </div>
                </div>

                <div class="space-y-4">
                    <div class="space-y-2">
                        <h3 class="text-xl font-semibold text-slate-800">AI大模型可见性(SEO/GEO)</h3>
                        <p class="text-xs text-slate-500 leading-relaxed">
                            如何让网站对 AI 大模型可见？本指南涵盖 llms.txt、.md 路由、Link 头与内容协商等六种有效 GEO/aeo 做法，以最干净、结构化的 Markdown 格式将核心内容无噪交给大模型。
                        </p>
                    </div>
                    <a href="https://www.baklib.com/blog/llm-website-visibility" target="_blank" class="block w-full py-2.5 px-4 text-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-xs shadow-md shadow-indigo-100 hover:shadow-lg hover:shadow-indigo-200 transition-all duration-200 hover:-translate-y-0.5">
                        阅读全文
                    </a>
                </div>
            </div>

        </div>
    </div>

    <style>
        .delay-75 { transition-delay: 75ms; }
        .delay-100 { transition-delay: 100ms; }

        @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
            animation: blob 7s infinite;
        }
        .animation-delay-2000 {
            animation-delay: 2s;
        }
        .animation-delay-4000 {
            animation-delay: 4s;
        }
    </style>
</section>
