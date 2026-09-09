// Slides 幻灯片主题 JavaScript

import Swiper from 'swiper';
import Alpine from 'alpinejs';
import * as lucide from 'lucide';
import { Chart } from 'chart.js/auto';
import mermaid from 'mermaid';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import python from 'highlight.js/lib/languages/python';
import ruby from 'highlight.js/lib/languages/ruby';
import sql from 'highlight.js/lib/languages/sql';
import yaml from 'highlight.js/lib/languages/yaml';
import markdown from 'highlight.js/lib/languages/markdown';
import { gsap } from 'gsap';
import mediumZoom from 'medium-zoom';
import QRCode from 'qrcode';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('shell', bash);
hljs.registerLanguage('python', python);
hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('yml', yaml);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('md', markdown);

window.lucide = lucide;
window.Alpine = Alpine;
window.Swiper = Swiper;
window.Chart = Chart;
window.mermaid = mermaid;
window.hljs = hljs;
window.gsap = gsap;
window.mediumZoom = mediumZoom;
window.QRCode = QRCode;

mermaid.initialize({
  startOnLoad: false,
  securityLevel: 'loose',
  theme: 'neutral',
});

function contentRoots(root) {
  if (root) return [root];
  const hosts = document.querySelectorAll('.slide-html-host, .slide-content');
  return hosts.length ? Array.from(hosts) : [document.body];
}

function activeContentRoot() {
  return (
    document.querySelector('.swiper-slide-active .slide-html-host') ||
    document.querySelector('.slide-html-host') ||
    document.querySelector('.slide-content') ||
    document.body
  );
}

function refreshLucide(root) {
  if (typeof lucide.createIcons !== 'function') return;
  lucide.createIcons({ root: root || document.body });
}

function refreshHighlight(root) {
  contentRoots(root).forEach((scope) => {
    scope.querySelectorAll('pre code').forEach((block) => {
      if (block.dataset.highlighted === 'yes') return;
      hljs.highlightElement(block);
    });
  });
}

function refreshMermaid(root) {
  const nodes = [];
  contentRoots(root).forEach((scope) => {
    scope.querySelectorAll('pre.mermaid, .mermaid').forEach((el) => {
      if (el.getAttribute('data-processed') === 'true') return;
      nodes.push(el);
    });
  });
  if (!nodes.length) return;
  mermaid.run({ nodes }).catch((err) => console.warn('[slides] mermaid', err));
}

function refreshCharts(root) {
  contentRoots(root).forEach((scope) => {
    scope.querySelectorAll('canvas[data-chart]').forEach((canvas) => {
      if (Chart.getChart(canvas)) return;
      try {
        const config = JSON.parse(canvas.getAttribute('data-chart') || '{}');
        if (!config || !config.type) return;
        config.options = Object.assign({ responsive: true, maintainAspectRatio: false }, config.options || {});
        new Chart(canvas, config);
      } catch (err) {
        console.warn('[slides] chart', err);
      }
    });
  });
}

function refreshQR(root) {
  contentRoots(root).forEach((scope) => {
    scope.querySelectorAll('[data-qr]').forEach(async (el) => {
      if (el.dataset.qrReady === '1') return;
      const text = el.getAttribute('data-qr');
      if (!text) return;
      const size = Number(el.getAttribute('data-qr-size') || 160);
      try {
        const dataUrl = await QRCode.toDataURL(text, {
          width: size,
          margin: 1,
          errorCorrectionLevel: 'M',
        });
        const img = document.createElement('img');
        img.src = dataUrl;
        img.alt = el.getAttribute('data-qr-alt') || 'QR code';
        img.width = size;
        img.height = size;
        img.className = el.getAttribute('data-qr-class') || 'rounded-lg';
        el.replaceChildren(img);
        el.dataset.qrReady = '1';
      } catch (err) {
        console.warn('[slides] qrcode', err);
      }
    });
  });
}

let zoomInstance = null;

function refreshZoom(root) {
  const images = [];
  contentRoots(root).forEach((scope) => {
    scope.querySelectorAll('img').forEach((img) => {
      if (img.closest('[data-qr]')) return;
      if (img.width && img.width < 48) return;
      images.push(img);
    });
  });
  if (!images.length) return;
  if (!zoomInstance) {
    zoomInstance = mediumZoom(images, { background: 'rgba(15, 23, 42, 0.72)', margin: 24 });
  } else {
    zoomInstance.attach(images);
  }
}

const ENTER_FROM = {
  'fade-up': { opacity: 0, y: 28, x: 0 },
  'fade-in': { opacity: 0, y: 0, x: 0 },
  'fade-left': { opacity: 0, x: -28, y: 0 },
  'fade-right': { opacity: 0, x: 28, y: 0 },
};

function playEnter(root) {
  const scope = root || activeContentRoot();
  if (!scope || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els = scope.querySelectorAll('[data-enter]');
  els.forEach((el, i) => {
    const kind = el.getAttribute('data-enter') || 'fade-up';
    const from = ENTER_FROM[kind] || ENTER_FROM['fade-up'];
    gsap.fromTo(
      el,
      from,
      { opacity: 1, x: 0, y: 0, duration: 0.45, delay: i * 0.07, ease: 'power2.out' }
    );
  });
}

function refresh(root) {
  const scope = root || undefined;
  refreshLucide(scope);
  refreshHighlight(scope);
  refreshMermaid(scope);
  refreshCharts(scope);
  refreshQR(scope);
  refreshZoom(scope);
  playEnter(scope || activeContentRoot());
}

window.slidesEnhancements = {
  refresh,
  playEnter,
};

document.addEventListener('DOMContentLoaded', () => refresh());

document.addEventListener('alpine:init', () => {
  Alpine.data('presentation', () => ({
    currentIndex: 0,
    menuOpen: false,
    swiper: null,
    logoSvg: `<svg viewBox="0 0 100 100" class="w-16 h-16 drop-shadow-md">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="100" height="100" rx="22" fill="url(#logoGradient)" />
              <path d="M35 70V30h14c8 0 13 4 13 10 0 4-2 7-6 8.5 5 1.5 8 5 8 10 0 7-6 11.5-15 11.5H35zm8-22h6c3.5 0 6-1.5 6-5s-2.5-5-6-5h-6v10zm0 15h7c4 0 7-2 7-6s-3-6-7-6h-7v12z" fill="white" />
              <circle cx="82" cy="70" r="6" fill="#ea580c" stroke="white" strokeWidth="2" />
          </svg>`,
    slides: [],
    get progress() {
      const slideCount = document.querySelectorAll('.swiper-slide').length;
      if (slideCount === 0) return 0;
      return ((this.currentIndex + 1) / slideCount) * 100;
    },
    initApp() {
      this.swiper = new Swiper('.mySwiper', {
        effect: 'slide',
        slidesPerView: 1,
        allowTouchMove: false,
        speed: 600,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        on: {
          slideChange: (s) => {
            this.currentIndex = s.activeIndex;
            const host = s.slides[s.activeIndex]?.querySelector('.slide-html-host');
            window.slidesEnhancements?.refresh(host || undefined);
          },
        },
      });

      const handleKeyDown = (e) => {
        if (!this.swiper) return;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          this.swiper.slidePrev();
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          this.swiper.slideNext();
        } else if (e.key === 'Home') {
          e.preventDefault();
          const slideCount = document.querySelectorAll('.swiper-slide').length;
          if (slideCount > 0) this.swiper.slideTo(0);
        } else if (e.key === 'End') {
          e.preventDefault();
          const slideCount = document.querySelectorAll('.swiper-slide').length;
          if (slideCount > 0) this.swiper.slideTo(slideCount - 1);
        }
      };

      document.addEventListener('keydown', handleKeyDown);
    },
    goToSlide(index) {
      if (this.swiper) {
        this.swiper.slideTo(index);
        this.menuOpen = false;
      }
    },
  }));
});

Alpine.start();

document.addEventListener('DOMContentLoaded', function () {
  const backTopBtn = document.querySelector('.back-top');
  if (!backTopBtn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backTopBtn.classList.remove('hidden');
    } else {
      backTopBtn.classList.add('hidden');
    }
  });

  backTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
