/// <reference types="node" />

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: '/window-resizer-wp/',
    head: {
      script:
        process.env.NODE_ENV === 'production'
          ? [
              {
                defer: true,
                src: 'https://cloud.umami.is/script.js',
                'data-website-id': '977297c5-5821-42b5-bdab-0336dc9c71ae',
              },
            ]
          : [],
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
      routes: ['/', '/welcome', '/contact-us', '/feedback'],
    },
  },
})
