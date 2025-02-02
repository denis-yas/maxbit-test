import { availableCocktails } from './consts/availableCocktails.const';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxtjs/tailwindcss'],
  build: {
    transpile: ['rxjs'],
  },
  routeRules: {
    '/': { redirect: '/' + availableCocktails[0] },
  },
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // }
});
