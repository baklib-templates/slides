---
title: 3 Cards AI Chat
prompt: |
  技能名：3 Cards AI Chat（左对话演示 + 右双特性）
  一句话：12 列布局：左 7 列「AI 问答」底图片+浮动聊天气泡；右 5 列上下两张特性卡（图标+标题+段落）。
  
  布局：
  - `lg:grid-cols-12`，左宽右窄
  - 左：场景底图 + 2–3 条聊天气泡（用户问 / AI 答）
  - 右：两张堆叠卡片，共 2 个长特性（本页示例另有第三特性可并入左或扩卡）
  
  内容要素：
  - 2–3 条对话（问句短、答句 1–2 句）
  - 2–3 个产品特性：标题 + 80–120 字
  - 左栏底图 1 张（办公/知识工作场景）
  
  适合场景：
  - 知识库 + AI 问答卖点、智能客服、检索助手
  - 客户要「看得见对话」而不是抽象功能图标
  - 有 2–3 段特性长文（如：汇聚文档 / 编辑器 / AI 回答）
  
  不适合：
  - 企业四指标、报价、纯团队
  - 只要三列等宽长文、不要聊天窗 → 3 Cards
  
  所需资源：
  - 文字：对话脚本 + 2–3 段特性
  - 图片：1 张左栏底图
  - 视频：无
  - 图标：2–3 个线性 SVG
  
  匹配信号：AI 助手、知识库、聊天气泡、问答演示、文档汇聚
  定制指引：气泡文案改成客户行业问法；特性三段可 2 卡+1 条融入对话。保留 12 列比例。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：气泡 2–4 轮；右特性 1–3 张。只有特性无对话 → 改 3 Cards。只有一句口号 → Hero。
  - 缺资源降级：无底图用浅色工作区+气泡；缺某一特性就少一张右卡，左对话区加宽铺满。
  - 重要性：对话窗是主演示，右卡是注解。
  - 兄弟推荐：三列等宽长文不要聊天窗 → 3 Cards。
  - 最佳实践：问短答短、气泡对齐左右；可参考产品内对话 UI，但遵守 slide-generation 技能与本页 12 列基因。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 左 7 右 5（可随右卡数量改成 8/4）拉满高度。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 先对话后特性，气泡区限高可内部滚动。
template: component
position: 27
site_id: "15303"
page_id: "590770"
---

<script>
        tailwind.config = {
            theme: {
                extend: {
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* 自定义 3D 透视类，Tailwind 默认不包含 perspective */
        .perspective-1000 {
            perspective: 1000px;
        }
        .preserve-3d {
            transform-style: preserve-3d;
        }
        /* 隐藏滚动条 */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
    <main class="max-w-7xl w-full mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">

            <div class="lg:col-span-5 flex flex-col gap-6">

                <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow duration-300 h-full flex flex-col justify-between">
                    <div class="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

                    <div class="relative h-48 w-full flex items-center justify-center mb-6">
                        <svg class="absolute inset-0 w-full h-full text-primary-200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="200" cy="100" r="80" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" class="opacity-30 animate-spin-slow" style="transform-origin: center; animation-duration: 20s;"/>
                            <circle cx="200" cy="100" r="50" class="fill-orange-500"/>

                            <line x1="200" y1="100" x2="120" y2="60" stroke="#8b5cf6" stroke-width="1.5" class="opacity-50" />
                            <line x1="200" y1="100" x2="280" y2="50" stroke="#8b5cf6" stroke-width="1.5" class="opacity-50" />
                            <line x1="200" y1="100" x2="250" y2="150" stroke="#8b5cf6" stroke-width="1.5" class="opacity-50" />

                            <circle r="4" fill="#8b5cf6">
                                <animateMotion dur="6s" repeatCount="indefinite" path="M200,100 L120,60 L200,100" />
                            </circle>
                            <circle r="4" fill="#8b5cf6">
                                <animateMotion dur="7s" repeatCount="indefinite" path="M200,100 L280,50 L200,100" />
                            </circle>
                        </svg>

                        <div class="relative z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary ring-4 ring-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <div class="absolute -top-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                                <svg class="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div class="relative z-10 mt-auto">
                        <h3 class="text-xl font-bold text-slate-900 mb-2">所有文档汇聚一处</h3>
                        <p class="text-sm text-slate-500 leading-relaxed">
                            无需再为了寻找所需信息而搜索一堆文档或询问同事。知识库是您存储所有重要文档的中心，从最佳实践描述到业务流程。
                        </p>
                    </div>
                </div>

                <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow duration-300 h-full flex flex-col justify-between">
                     <div class="relative h-40 w-full mb-6 flex items-center justify-center">
                        <div class="absolute inset-x-4 top-0 h-32 bg-orange-100 rounded-t-xl border border-slate-200 opacity-50 transform scale-95 origin-bottom"></div>
                        <div class="absolute inset-x-8 top-4 h-32 bg-teal-400 rounded-t-xl opacity-30 transform scale-90 origin-bottom"></div>

                        <div class="absolute w-64 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-primary-100 p-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-xs font-medium text-slate-600">创建知识库</span>
                                <div class="w-2 h-2 rounded-full bg-slate-300"></div>
                            </div>
                            <div class="space-y-2">
                                <div class="h-8 bg-slate-50 border border-slate-200 rounded-md flex items-center px-2">
                                    <span class="text-[10px] text-slate-400">输入文档名称...</span>
                                </div>
                                <div class="flex justify-end gap-2 pt-1">
                                    <div class="text-[10px] text-slate-400 py-1 px-2">取消</div>
                                    <div class="text-[10px] bg-orange-500 text-white py-1 px-3 rounded shadow-sm shadow-primary-500/40">创建</div>
                                </div>
                            </div>
                            <div class="absolute top-1/2 -right-12 w-12 h-[1px] bg-gradient-to-r from-teal-600 to-transparent"></div>
                        </div>
                     </div>

                     <div class="relative z-10 mt-auto">
                        <h3 class="text-xl font-bold text-slate-900 mb-2">轻松创建文档</h3>
                        <p class="text-sm text-slate-500 leading-relaxed">
                            我们的 AI 驱动的可视化编辑器将简化您的任务。它快速、直观，并具有一系列内置格式选项，让您可以专注于最重要的内容：内容本身。
                        </p>
                    </div>
                </div>

            </div>

            <div class="lg:col-span-7 h-full">
                <div class="bg-white rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden h-full flex flex-col"
                     x-data="{
                        messages: [
                            { id: 1, type: 'bot', text: 'Hi! 请问你需要什么资料?', delay: 500 },
                            { id: 2, type: 'user', text: '我想找文档创建的最新手册', delay: 1500 },
                            { id: 3, type: 'bot', text: 'AI 开始工作 ...', isTyping: true, delay: 2500 }
                        ],
                        visibleMessages: []
                     }"
                     x-init="
                        messages.forEach(msg => {
                            setTimeout(() => {
                                visibleMessages.push(msg);
                            }, msg.delay);
                        })
                     ">

                    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlNTVkZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

                    <div class="relative flex-1 w-full flex items-center justify-center overflow-hidden min-h-[400px] perspective-1000 group">

                        <div class="relative w-72 h-96 transform rotate-x-6 rotate-y-6 rotate-z-2 transition-transform duration-700 group-hover:rotate-y-12 group-hover:rotate-x-12 preserve-3d">

                            <div class="absolute inset-0 bg-white rounded-[2rem] shadow-2xl border-4 border-slate-50 overflow-hidden flex flex-col">
                                <div class="bg-primary-600 p-4 pt-6 text-white flex justify-between items-center z-20">
                                    <div class="flex items-center gap-2">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        <span class="font-medium text-sm">AI assistant</span>
                                    </div>
                                    <svg class="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </div>

                                <div class="flex-1 bg-slate-50 p-4 space-y-4 overflow-y-auto no-scrollbar relative">
                                    <div class="text-center text-[10px] text-slate-400 mb-4">3 Jul 2022</div>

                                    <template x-for="msg in visibleMessages" :key="msg.id">
                                        <div class="flex w-full" :class="msg.type === 'user' ? 'justify-end' : 'justify-start'"
                                             x-transition:enter="transition ease-out duration-300"
                                             x-transition:enter-start="opacity-0 transform translate-y-4"
                                             x-transition:enter-end="opacity-100 transform translate-y-0">

                                            <template x-if="msg.type === 'bot'">
                                                <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-1 shrink-0">
                                                    <span class="text-[10px] text-blue-600 font-bold">AI</span>
                                                </div>
                                            </template>

                                            <div class="max-w-[80%] rounded-2xl p-3 text-xs shadow-sm"
                                                 :class="msg.type === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none'">

                                                <template x-if="!msg.isTyping">
                                                    <p x-text="msg.text"></p>
                                                </template>

                                                <template x-if="msg.isTyping">
                                                    <div class="flex items-center gap-1">
                                                        <svg class="w-3 h-3 text-gray-600 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                                        <span x-text="msg.text"></span>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
                                    </template>
                                </div>

                                <div class="p-3 bg-white border-t border-slate-100">
                                    <div class="h-8 bg-slate-50 rounded-full border border-slate-200 flex items-center px-3 justify-between">
                                        <span class="text-[10px] text-slate-400">Message to AI</span>
                                        <div class="w-4 h-4 bg-teal-500 rounded flex items-center justify-center">
                                            <svg class="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="absolute inset-0 bg-primary-200 rounded-[2rem] -z-10 transform translate-x-4 translate-y-4 opacity-50"></div>

                            <div class="absolute -right-12 bottom-20 z-30 animate-float">
                                <div class="w-14 h-14 bg-teal-600 rounded-2xl shadow-xl shadow-primary-600/40 flex items-center justify-center transform rotate-12 ring-4 ring-white">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="p-8 relative z-10 bg-white">
                        <h3 class="text-xl font-bold text-slate-900 mb-3">AI 助手回答您的任何问题</h3>
                        <p class="text-sm text-slate-500 leading-relaxed max-w-lg">
                            AI 助手从您的知识库中提供即时、高质量的答案，确保信息的切题性。它支持乌克兰语、英语、西班牙语和其他语言。
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </main>
