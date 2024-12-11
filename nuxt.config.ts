// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true }
  },
  compatibilityDate: "2024-12-11",
  modules: ["@nuxt/content"]
})