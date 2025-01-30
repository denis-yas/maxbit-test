import { createPinia, defineStore, setActivePinia } from "pinia";

import { availableCocktails } from "~/consts/availableCocktails.const";

export const useCocktailStore = defineStore("cocktail", () => {
  const smth = ref(5);

  return { smth };
});