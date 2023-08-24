// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css : [ '~/assets/css/main.pcss'],
  devtools: { enabled: false },
  modules: ["@pinia/nuxt",'@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      'tailwindcss/nesting': 'postcss-nesting',
      'postcss-custom-media': {}
    }
  },
  runtimeConfig: {
    mail: process.env.EMAIL,
    password: process.env.PASSWORD,
    myMail: process.env.MYMAIL
  }
});
