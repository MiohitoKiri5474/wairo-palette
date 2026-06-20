import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'nippon-color',
  description: 'Traditional Japanese colors for JavaScript',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Colors', link: '/colors' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: '@nippon-color/core', link: '/guide/core' },
          { text: '@nippon-color/css', link: '/guide/css' },
          { text: '@nippon-color/tailwind', link: '/guide/tailwind' },
        ],
      },
      { text: 'Color Reference', link: '/colors' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/miohitokiri5474/nippon-color' },
    ],
  },
})
