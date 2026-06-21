import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'wairo-palette',
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
          { text: '@wairo-palette/core', link: '/guide/core' },
          { text: '@wairo-palette/css', link: '/guide/css' },
          { text: '@wairo-palette/tailwind', link: '/guide/tailwind' },
        ],
      },
      { text: 'Color Reference', link: '/colors' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MiohitoKiri5474/wairo-palette' },
    ],
  },
})
