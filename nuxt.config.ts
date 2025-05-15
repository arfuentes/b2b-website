// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],
  
  // Google Fonts configuration
  googleFonts: {
    families: {
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Nunito: [200, 300, 400, 500, 600, 700, 800, 900]
    },
    display: 'swap',
    download: true
  },
  
  // i18n configuration
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'es',
        name: 'Español',
        file: 'es.json'
      }
    ],
    lazy: false,
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root',
      alwaysRedirect: true
    }
  },
  
  app: {
    head: {
      title: 'SaaS Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A powerful SaaS platform' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  
  // Auto-import components
  components: {
    dirs: ['~/components']
  },
  
  // For API integration
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'https://api.test.zamdit.com/web'
    }
  }
})