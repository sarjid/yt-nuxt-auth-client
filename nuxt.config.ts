// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
     '@pinia-plugin-persistedstate/nuxt',
    
  ],

imports: {
    dirs: ['./stores'],
  },

   pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
})
