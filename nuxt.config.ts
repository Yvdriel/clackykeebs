// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
      head: {
        title: 'DE Customs',
        meta: [
          { name: 'description', content: 'DE Customs: Ongeëvenaarde auto detailing, zowel binnen als buiten, met ultiem gemak.' },
          { name: 'og:type', content: 'website' },
          { name: 'og:title', content: 'DE Customs: Ongeëvenaarde auto detailing, zowel binnen als buiten, met ultiem gemak.' },
          { name: 'og:url', content: 'https://decustoms.com' },
          { name: 'og:description', content: 'DE Customs: Ongeëvenaarde auto detailing, zowel binnen als buiten, met ultiem gemak.' },
          { name: 'og:image', content: 'https://decustoms.com/img/decustoms-small.png' },
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