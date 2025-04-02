import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hurriyati / حريتي",
  description: "A list for Muslim-owned alternatives for everyday apps and websites.",
  head: [['link', { rel: 'icon', href: '/logo.ico' }]],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/', // Default language
    },
    ar: {
      label: 'العربية',
      lang: 'ar',
      dir: 'rtl', // Right-to-left support
      link: '/ar/',
      themeConfig: {
        nav: [
          { text: 'الرئيسية', link: './' },
          { text: 'دليل الموقع', link: './guide' }
        ]
      }
    },
    tr: {
      label: 'Türkçe',
      lang: 'tr',
      link: '/tr/',
      themeConfig: {
        nav: [
          { text: 'Ana Sayfa', link: './' },
          { text: 'Site Rehberi', link: './guide' }
        ]
      }
    },
    id: {
      label: 'Bahasa Indonesia',
      lang: 'id',
      link: '/id/',
      themeConfig: {
        nav: [
          { text: 'Beranda', link: './' },
          { text: 'Panduan Situs', link: './guide' }
        ]
      }
    }
  },

  themeConfig: {
    logo: '/logo.ico',
    nav: [
      { text: 'Home', link: './' },
      { text: 'Site Guide', link: './guide' }
    ],

    sidebar: {
      '/': [
        {
          text: '',
          items: [
            { text: '❓ Why is this important?', link: '/why' },
            { text: '📙 Site Guide', link: '/guide' }
          ]
        },
        {
          text: 'Apps',
          items: [
            { text: '🕋 Islam', link: '/apps#islam' },
            { text: '💬 Communication', link: '/apps#communication' },
            { text: '🔧 Everyday Utilities', link: '/apps#everyday-utilites' },
            { text: '🌐 Internet Browsing', link: '/apps#internet-browsing' },
            { text: '🌿 Health and Wellness', link: '/apps#health-and-wellness' },
          ],
          link: '/apps'
        }
      ],
      
      '/ar/': [
        {
          text: '',
          items: [
            { text: '❓ لماذا هذا مهم؟', link: '/ar/why' },
            { text: '📙 دليل الموقع', link: '/ar/guide' }
          ]
        },
        {
          text: 'التطبيقات',
          items: [
            { text: '🕋 الإسلام', link: '/ar/apps#islam' },
            { text: '💬 التواصل', link: '/ar/apps#communication' },
            { text: '🔧 الأدوات اليومية', link: '/ar/apps#everyday-utilites' },
            { text: '🌐 تصفح الإنترنت', link: '/ar/apps#internet-browsing' },
            { text: '🌿 الصحة واللياقة', link: '/ar/apps#health-and-wellness' },
          ],
          link: '/ar/apps'
        }
      ],

      '/tr/': [
        {
          text: '',
          items: [
            { text: '❓ Bu neden önemli?', link: '/tr/why' },
            { text: '📙 Site Kılavuzu', link: '/tr/guide' }
          ]
        },
        {
          text: 'Uygulamalar',
          items: [
            { text: '🕋 İslam', link: '/tr/apps#islam' },
            { text: '💬 İletişim', link: '/tr/apps#communication' },
            { text: '🔧 Günlük Araçlar', link: '/tr/apps#everyday-utilites' },
            { text: '🌐 İnternet Tarayıcıları', link: '/tr/apps#internet-browsing' },
            { text: '🌿 Sağlık ve Wellness', link: '/tr/apps#health-and-wellness' },
          ],
          link: '/tr/apps'
        }
      ],

      '/id/': [
        {
          text: '',
          items: [
            { text: '❓ Mengapa ini penting?', link: '/id/why' },
            { text: '📙 Panduan Situs', link: '/id/guide' }
          ]
        },
        {
          text: 'Aplikasi',
          items: [
            { text: '🕋 Islam', link: '/id/apps#islam' },
            { text: '💬 Komunikasi', link: '/id/apps#communication' },
            { text: '🔧 Utilitas Sehari-hari', link: '/id/apps#everyday-utilites' },
            { text: '🌐 Penjelajahan Internet', link: '/id/apps#internet-browsing' },
            { text: '🌿 Kesehatan dan Kebugaran', link: '/id/apps#health-and-wellness' },
          ],
          link: '/id/apps'
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hurriyati-Foundation/hurriyati-foundation.github.io' }
    ]
  },
})
