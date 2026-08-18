# 图标库使用指南

本主题同时支持 **Lucide**（推荐）和 **Font Awesome 6** 两套图标库，可在幻灯片 HTML 内容中自由混用。

---

## Lucide 图标（推荐）

Lucide 是一套简洁的开源线型图标，已通过 esbuild 打包进 `assets/javascripts/main.js`，无需额外引入。

### 使用方式

```html
<!-- 基本用法：data-lucide 属性值即图标名（kebab-case） -->
<i data-lucide="layout-grid"></i>

<!-- 配合 Tailwind 控制尺寸和颜色 -->
<i data-lucide="arrow-right" class="w-6 h-6 text-primary"></i>
<i data-lucide="check-circle" class="w-8 h-8 text-green-500"></i>

<!-- 在按钮中嵌套 -->
<button class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg">
  <i data-lucide="download" class="w-4 h-4"></i>
  下载
</button>
```

> 页面加载后 `lucide.createIcons()` 会自动将所有 `data-lucide` 元素替换为对应 SVG。
> 若需手动触发（如动态插入 DOM 后），可调用 `window.lucide.createIcons()`。

### 常用图标速查（Lucide 原生名）

| 图标名 | 用途 | 示例 |
|--------|------|------|
| `layout-grid` | 布局/网格 | `<i data-lucide="layout-grid">` |
| `chevron-left` | 左箭头 | `<i data-lucide="chevron-left">` |
| `chevron-right` | 右箭头 | `<i data-lucide="chevron-right">` |
| `arrow-right` | 右向箭头 | `<i data-lucide="arrow-right">` |
| `arrow-up-right` | 外链/跳转 | `<i data-lucide="arrow-up-right">` |
| `box` | 产品/包装 | `<i data-lucide="box">` |
| `database` | 数据库 | `<i data-lucide="database">` |
| `activity` | 活动/趋势 | `<i data-lucide="activity">` |
| `layout-dashboard` | 看板 | `<i data-lucide="layout-dashboard">` |
| `users` | 团队/用户 | `<i data-lucide="users">` |
| `globe` | 全球/网络 | `<i data-lucide="globe">` |
| `circle-check` | 完成/通过 | `<i data-lucide="circle-check">` |
| `server` | 服务器 | `<i data-lucide="server">` |
| `layers` | 层叠/架构 | `<i data-lucide="layers">` |
| `code` | 代码 | `<i data-lucide="code">` |
| `bar-chart-3` | 柱状图 | `<i data-lucide="bar-chart-3">` |
| `cloud` | 云/上传 | `<i data-lucide="cloud">` |
| `square-check` | 勾选框 | `<i data-lucide="square-check">` |
| `lock` | 安全/锁定 | `<i data-lucide="lock">` |
| `settings` | 设置 | `<i data-lucide="settings">` |
| `bot` | AI/机器人 | `<i data-lucide="bot">` |
| `cpu` | 芯片/算力 | `<i data-lucide="cpu">` |
| `trending-up` | 增长趋势 | `<i data-lucide="trending-up">` |
| `zap` | 闪电/快速 | `<i data-lucide="zap">` |
| `star` | 收藏/评级 | `<i data-lucide="star">` |
| `heart` | 喜欢/收藏 | `<i data-lucide="heart">` |
| `share-2` | 分享 | `<i data-lucide="share-2">` |
| `mail` | 邮件 | `<i data-lucide="mail">` |
| `phone` | 电话 | `<i data-lucide="phone">` |
| `map-pin` | 地址/位置 | `<i data-lucide="map-pin">` |
| `calendar` | 日历/时间 | `<i data-lucide="calendar">` |
| `clock` | 时钟 | `<i data-lucide="clock">` |
| `search` | 搜索 | `<i data-lucide="search">` |
| `filter` | 筛选 | `<i data-lucide="filter">` |
| `download` | 下载 | `<i data-lucide="download">` |
| `upload` | 上传 | `<i data-lucide="upload">` |
| `file-text` | 文档 | `<i data-lucide="file-text">` |
| `image` | 图片 | `<i data-lucide="image">` |
| `video` | 视频 | `<i data-lucide="video">` |
| `mic` | 麦克风 | `<i data-lucide="mic">` |
| `lightbulb` | 创意/想法 | `<i data-lucide="lightbulb">` |
| `target` | 目标 | `<i data-lucide="target">` |
| `shield` | 安全/防护 | `<i data-lucide="shield">` |
| `award` | 奖励/成就 | `<i data-lucide="award">` |
| `rocket` | 发射/启动 | `<i data-lucide="rocket">` |
| `flag` | 旗帜/里程碑 | `<i data-lucide="flag">` |

完整图标列表：[lucide.dev/icons](https://lucide.dev/icons/)

---

## Font Awesome 6（兼容保留）

Font Awesome 6 Free 已通过字体文件本地化，CSS 在 `main.css` 中加载，无需额外引入。

### 使用方式

```html
<!-- 实心图标（fas）-->
<i class="fas fa-home"></i>

<!-- 线型图标（far）-->
<i class="far fa-heart"></i>

<!-- 品牌图标（fab）-->
<i class="fab fa-github"></i>

<!-- 带 Tailwind 尺寸和颜色 -->
<i class="fas fa-check-circle text-green-500 text-2xl"></i>
```

### Lucide → Font Awesome 对照（旧项目迁移参考）

| Lucide 图标名 | Font Awesome 等效 | 建议 |
|--------------|------------------|------|
| `layout-grid` | `fa-th-large` | 改用 Lucide |
| `chevron-left` | `fa-chevron-left` | 可互换 |
| `chevron-right` | `fa-chevron-right` | 可互换 |
| `arrow-right` | `fa-arrow-right` | 可互换 |
| `box` | `fa-box` | 改用 Lucide |
| `database` | `fa-database` | 改用 Lucide |
| `activity` | `fa-chart-line` | 改用 Lucide |
| `users` | `fa-users` | 可互换 |
| `globe` | `fa-globe` | 可互换 |
| `check-circle` | `fa-check-circle` | 改用 Lucide |
| `server` | `fa-server` | 改用 Lucide |
| `layers` | `fa-layer-group` | 改用 Lucide |
| `code` | `fa-code` | 可互换 |
| `bar-chart` | `fa-chart-bar` | 改用 Lucide |
| `cloud` | `fa-cloud` | 可互换 |
| `lock` | `fa-lock` | 可互换 |
| `settings` | `fa-gear` / `fa-cog` | 改用 Lucide |
| `bot` | `fa-robot` | 改用 Lucide |
| `cpu` | `fa-microchip` | 改用 Lucide |
| `trending-up` | `fa-arrow-trend-up` | 改用 Lucide |

完整图标列表：[fontawesome.com/icons](https://fontawesome.com/icons)

---

## 混用示例

Lucide 和 Font Awesome 可在同一幻灯片中共存：

```html
<div class="flex items-center gap-4">
  <!-- Lucide -->
  <i data-lucide="rocket" class="w-8 h-8 text-primary"></i>
  <!-- Font Awesome -->
  <i class="fab fa-github text-2xl text-gray-700"></i>
</div>
```
