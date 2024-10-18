// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
      head: {
        title: 'ClackyKeebs',
        meta: [
          { name: 'description', content: 'ClackyCats deskmats are back! Buy them at your regional vendor now!' },
          { name: 'og:type', content: 'website' },
          { name: 'og:title', content: 'ClackyCats are back!' },
          { name: 'og:url', content: 'https://clackykeebs.com' },
          { name: 'og:description', content: 'ClackyCats deskmats are back! Buy them at your regional vendor now!' },
          { name: 'og:image', content: 'https://clackykeebs.com/img/clackycats.png' },
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
          { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
          { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
          { rel: 'manifest', href: '/site.webmanifest' }
        ],
      }
    },
    ssr: false
})