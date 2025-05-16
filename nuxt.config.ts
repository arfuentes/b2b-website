// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@pinia/nuxt",
  ],

  // Google Fonts configuration
  googleFonts: {
    families: {
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Nunito: [200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: "swap",
    download: true,
  },

  // i18n configuration
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    customRoutes: "config",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "es",
        name: "Español",
        file: "es.json",
      },
    ],
    pages: {
      about: {
        en: "/about-us",
        es: "/sobre-nosotros",
      },
      assessments: {
        en: "/about-assessments",
        es: "/sobre-las-evaluaciones",
      },
      blog: {
        en: "/blog",
        es: "/blog",
      },
      "blog-slug": {
        en: "/blog/[slug]",
        es: "/blog/[slug]",
      },
      "blog-category-slug": {
        en: "/blog/category/[slug]",
        es: "/blog/categoria/[slug]",
      },
      "confirm-id-token": {
        en: "/confirm-demo/[id]/[token]",
        es: "/confirmar-demo/[id]/[token]",
      },
      contact: {
        en: "/contact-us",
        es: "/contactanos",
      },
      demo: {
        en: "/request-demo",
        es: "/solicitar-demo",
      },
      features: {
        en: "/features",
        es: "/caracteristicas",
      },
      prepare: {
        en: "/how-to-prepare",
        es: "/como-preparase",
      },
      pricing: {
        en: "/pricing",
        es: "/precios",
      },
      privacy: {
        en: "/privacy",
        es: "/privacidad",
      },
      questionnaires: {
        en: "/about-questionnaires",
        es: "/sobre-los-cuestionarios",
      },
      security: {
        en: "/security",
        es: "/seguridad",
      },
      terms: {
        en: "/terms",
        es: "/terminos",
      },
    },
    lazy: false,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_locale",
      redirectOn: "root",
      alwaysRedirect: true,
    },
  },

  app: {
    head: {
      title: "SaaS Platform",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "A powerful SaaS platform",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  // Auto-import components
  components: {
    dirs: ["~/components"],
  },

  // For API integration
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || "https://api.test.zamdit.com/web",
    },
  },
  gtag: {
    id: "X-XXXXXXXXXX",
  },
});
