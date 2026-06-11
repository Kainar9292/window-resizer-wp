export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: '/window-resizer-wp/',
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/welcome', '/contact-us'],
    },
  },
})
