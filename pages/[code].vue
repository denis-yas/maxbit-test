<template>
  <div>
    <ul>
      <li v-for="item of store.cocktails" :key="item.strDrink" class="mb-24 overflow-x-auto">
        <h2 class="text-3xl mb-6 sm:float-left">{{ item.strDrink }}</h2>
        <div class="mb-8 lg:ml-4 lg:mb-4 lg:float-right sm:max-w-[400px]">
          <img :src="item.strDrinkThumb" :alt="item.strImageAttribution" loading="lazy">
        </div>
        <section class="mb-6 sm:clear-left">
          <ul>
            <li>{{ item.strCategory }}</li>
            <li>{{ item.strAlcoholic }}</li>
            <li>{{ item.strGlass }}</li>
          </ul>
        </section>
        <section class="mb-6">
          <h3 class="text-2xl mb-2">Instructions:</h3>
          <span>{{ item.strInstructions }}</span>
        </section>
        <section class="lg:clear-right">
          <h3 class="text-2xl mb-2">List of ingredients:</h3>
          <dl class="inline-grid gap-4 grid-cols-2 break-words auto-cols-min">
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
import { availableCocktails } from '~/consts/availableCocktails.const';
import { useCocktailStore } from "~/store/use-cocktail.store";

definePageMeta({
  validate: async (route) => {
    return availableCocktails.includes(route.params.code as string);
  }
});


const route = useRoute();
const store = useCocktailStore();
store.set(route.params.code as string);
</script>
