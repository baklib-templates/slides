# Baklib CMS — Slides theme

A **web-based fullscreen presentation** theme for Baklib-powered sites. Build channel-based slide decks with HTML content, Swiper transitions, keyboard navigation, and responsive layouts for desktop and mobile.

Template Git URL: https://github.com/baklib-templates/slides

---

## Features

- **Home** (`templates/index.liquid`): lists presentation channels as cards.
- **Channel** (`templates/channel.liquid`): fullscreen slide deck with Swiper, outline menu, progress bar, and prev/next controls.
- **Slide page** (`templates/page.liquid`): single-slide preview with custom HTML content.
- **Component library** (`templates/component.liquid`): reusable slide building blocks.
- Theme settings in `config/settings_schema.json`; storefront copy in `locales/*.json`; editor labels in `locales/*.schema.json`.

---

## Preview

|                 Home (channels)                  |                Cover (thumbnail)                 |
| :----------------------------------------------: | :----------------------------------------------: |
| ![Home](assets/images/theme/en/index.png)        | ![Cover](assets/images/theme/en/cover.png)       |
|              **Fullscreen channel**              |                                                  |
| ![Channel](assets/images/theme/en/channel.png)   |                                                  |

---

## Installation

Find **Slides** in the Baklib template marketplace, click install, and you're ready to go.

1. Create a **channel** page under the home page using the channel template.
2. Add child **page** entries — each page is one slide with HTML content.
3. Open the channel URL to present in fullscreen with keyboard or on-screen controls.

---

## Skills (for AI / next decks)

When generating slide HTML, start at **[skills/README.md](./skills/README.md)**:

- [slide-generation](./skills/slide-generation/SKILL.md) — safe area, tokens, root skeleton
- [slide-components](./skills/slide-components/SKILL.md) — 27 reusable layouts
- [design-systems](./skills/design-systems/SKILL.md) — Apple / Claude / Notion / …
- [slide-plugins](./skills/slide-plugins/SKILL.md) — daisyUI, Chart.js, Mermaid, highlight.js, GSAP, zoom, QR

Pointer for old links: [DESIGN.md](./DESIGN.md)

## Front-end plugins

Bundled (see `package.json` / `src/javascripts/application.js`): Font Awesome, Alpine.js, Lucide, Swiper, Chart.js, Mermaid, highlight.js, GSAP, medium-zoom, qrcode. daisyUI 5 ships as standalone `assets/css/daisyui.css` (not a Tailwind 3 plugin). CMS `html_content` still relies on the Tailwind CDN for arbitrary utilities.

## Other documents

- Chinese overview: [README.zh-CN.md](./README.zh-CN.md)
- Theme help: [www.baklib.ai/themes](https://www.baklib.ai/themes/slides)
