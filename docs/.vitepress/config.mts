import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hurryati",
  description: "A list for Muslim-owned alternatives for everyday apps and websites.",
  head: [['link', { rel: 'icon', href: '/logo.ico' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.ico',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Site Guide', link: '/Guide' }
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: '❓ Why is this important?', link: '/why' },
          /*{ text: '🔒 Privacy Guide', link: '/privacy' },*/ // I'll uncomment this later when we actually make it.
          { text: '📙 Site Guide', link: '/guide'}
        ]
      },

      {
        text: 'Apps',
        items: [
          { text: '🕋 Islam', link: '/apps#islam' },
          { text: '💬 Communication', link: '/apps#communication' },
          { text: '🌐 Internet Browsing', link: '/apps#internet-browsing' },
          { text: '🌿 Health and Wellness', link: '/apps#health-and-wellness' },
        ],
        link: '/apps'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hurriyati-Foundation/hurriyati-foundation.github.io' }
    ]
  }
})