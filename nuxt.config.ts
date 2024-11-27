// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@tresjs/nuxt"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/global.scss" as *;',
        },
      },
    },
  },
  tres: {
    glsl: true,
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
