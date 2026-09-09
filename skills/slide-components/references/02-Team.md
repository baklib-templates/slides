---
title: Team
prompt: |
  技能名：Team（领导/团队名录）
  一句话：左侧栏标题+一段团队介绍，右侧 2 列头像名录（圆形头像 + 姓名 + 职位）。
  
  布局：
  - 浅色底；`xl:grid-cols-3`：左 1 列文案，右 2 列跨占 2
  - 人员列表 `sm:grid-cols-2`，每项横向：64px 圆头像 + 姓名/职位
  
  内容要素：
  - 区块标题（如「核心团队」「项目组成员」）
  - 介绍段（80–160 字，可从企业简介改写为「我们是谁」）
  - 4–8 人：姓名、职位；头像图
  
  适合场景：
  - 介绍顾问团队、实施团队、客户对接人、领导班子
  - 方案里需要建立「人」的信任，而不是产品功能
  
  不适合：
  - 只有企业名 + 4 个经营数字、没有人名头像 → 用 Stats / Dashboard
  - 大头卡片社交风（要 LinkedIn/Twitter）→ 用 Team Cards
  
  所需资源：
  - 文字：标题、简介、每人姓名+职位
  - 图片：每人 1 张正方形头像（建议 256px 人脸裁切）；缺图可用姓名首字色块，但会偏离本组件
  - 视频：无
  
  匹配信号：团队、管理层、顾问、对接人、头像、姓名职位
  定制指引：人数可 4/6/8；保持左文右表；PPT 内减小 `py-24`/`gap-20`。
  伸缩与变体：
  - 原则：本页 HTML 是圆角、层次、字号节奏与主从关系的视觉基因，不是必须逐节点复制的化石。块数、跨行跨列、有无媒体一律由客户当页素材决定。
  - 数量规则：`ul/li` 按真实人数增删，不要为凑版留空假人。1–2 人：右栏单列、加大头像与字号；3–6 人：`sm:grid-cols-2`；7–10 人：右栏 `lg:grid-cols-3` 或缩小 `gap`；11+ 人：拆成两页，或改 Team Cards。
  - 缺资源降级：每人有图才输出该 `li` 的 `img`；没图用 Font Awesome `fa-user` 或姓名首字圆（固定 `size-16` 槽宽，避免一行有图一行塌陷）。简介可缺，标题仍在。
  - 重要性：左栏介绍可随人数缩短；人少则左栏加长「我们是谁」。
  - 兄弟推荐：有高质量半身照、要海报/社交风 → 18-Team Cards；只要经营数字无人名 → Stats。
  - 最佳实践：名录项垂直对齐、职位一行截断；头像圆形一致。
  
  整屏与移动端：
  - 硬约束：根节点 `flex flex-col flex-1 min-h-0 w-full`（可加 `slide-content`）；禁止 `h-screen` / `min-h-screen` / `w-screen` / `fixed`。PC 铺满的是玻璃卡片内 `.slide-html-host`，不是浏览器视口。压缩原稿过大的 `py-24`/`py-32`。
  - PC：主区 `flex-1 min-h-0` + `justify-center` 或 `items-stretch`，16:9 安全区内铺满、避免上下大块留白。条目过多时先缩 `gap`/字号/列数，再允许 `overflow-y-auto`，禁止撑破视口。 人少加大 `gap` 与字号让左右栏撑满；人多加密栅格。左介绍 + 右名录在桌面保持垂直拉满。
  - 移动端：`grid-cols-1 md:grid-cols-*`；图 `max-w-full max-h-[40vh] object-cover`；标题区 `pr-16` 避开右上目录钮；窄屏可内部滚动，禁止横向溢出。 先标题简介、后名单单列。
template: component
position: 2
site_id: "15303"
page_id: "590689"
---

<div class="bg-white py-24 sm:py-32 dark:bg-gray-900">
  <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
    <div class="max-w-xl">
      <h2 class="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Meet our leadership</h2>
      <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
    </div>
    <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div class="flex items-center gap-x-6">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-16 rounded-full outline outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white">Leslie Alexander</h3>
            <p class="text-sm/6 font-semibold text-indigo-600 dark:text-indigo-400">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-x-6">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-16 rounded-full outline outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white">Michael Foster</h3>
            <p class="text-sm/6 font-semibold text-indigo-600 dark:text-indigo-400">Co-Founder / CTO</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-x-6">
          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-16 rounded-full outline outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white">Dries Vincent</h3>
            <p class="text-sm/6 font-semibold text-indigo-600 dark:text-indigo-400">Business Relations</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-x-6">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-16 rounded-full outline outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white">Lindsay Walton</h3>
            <p class="text-sm/6 font-semibold text-indigo-600 dark:text-indigo-400">Front-end Developer</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-x-6">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-16 rounded-full outline outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white">Courtney Henry</h3>
            <p class="text-sm/6 font-semibold text-indigo-600 dark:text-indigo-400">Designer</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-x-6">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-16 rounded-full outline outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white">Tom Cook</h3>
            <p class="text-sm/6 font-semibold text-indigo-600 dark:text-indigo-400">Director of Product</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
