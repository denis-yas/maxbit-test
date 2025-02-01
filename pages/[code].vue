<template>
  <div>
    <ul>
      <li v-for="item of store.cocktails" :key="item.strDrink" class="mb-24 overflow-x-auto">
        <img :src="item.strDrinkThumb" height="400" width="400" :alt="item.strImageAttribution" class="float-right"
          loading="lazy">
        <h2 class="text-3xl mb-6">{{ item.strDrink }}</h2>
        <section class="mb-6">
          <span>{{ item.strCategory }}</span>
          <span>{{ item.strAlcoholic }}</span>
          <span>{{ item.strGlass }}</span>
        </section>
        <section class="mb-6">
          <h3>Instructions:</h3>
          <span>{{ item.strInstructions }}</span>
        </section>
        <section>
          <h3>List of ingredients:</h3>
          <dl>
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
store.set(route.params.type as string);
</script>
