<template>
  <div class="relative">
    <loading-indicator
      v-if="loadingStore.loading"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    />
    <ul v-else>
      <li
        v-for="item of store.cocktails"
        :key="item.strDrink"
        class="mb-24 overflow-x-auto"
      >
        <h2 class="mb-6 text-3xl sm:float-left">{{ item.strDrink }}</h2>
        <div class="mb-8 sm:max-w-[400px] lg:float-right lg:mb-4 lg:ml-4">
          <img
            :src="item.strDrinkThumb"
            :alt="item.strImageAttribution"
            loading="lazy"
          />
        </div>
        <section class="mb-6 sm:clear-left">
          <ul>
            <li>{{ item.strCategory }}</li>
            <li>{{ item.strAlcoholic }}</li>
            <li>{{ item.strGlass }}</li>
          </ul>
        </section>
        <section class="mb-6">
          <h3 class="mb-2 text-2xl">Instructions:</h3>
          <span>{{ item.strInstructions }}</span>
        </section>
        <section class="lg:clear-right">
          <h3 class="mb-2 text-2xl">List of ingredients:</h3>
          <dl class="inline-grid auto-cols-min grid-cols-2 gap-4 break-words">
            <template v-for="ingredient of item.ingredients" :key="ingredient">
              <dt>{{ ingredient.measure }}</dt>
              <dd>{{ ingredient.ingredient }}</dd>
            </template>
          </dl>
        </section>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { availableCocktails } from "~/consts/availableCocktails.const";
import { useCocktailStore } from "~/store/use-cocktail.store";
import { useLoadingIndicatorStore } from "~/store/use-loading-indicator-store";

definePageMeta({
  validate: async (route) => {
    return availableCocktails.includes(route.params.code as string);
  },
});

const route = useRoute();
const store = useCocktailStore();
const loadingStore = useLoadingIndicatorStore();
store.set(route.params.code as string);
</script>
