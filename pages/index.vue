<template>
  <div>
    <ul>
      <li v-for="item of store.cocktails" :key="item.strDrink">
        <h2>{{ item.strDrink }}</h2>
        <img :src="item.strDrinkThumb" height="400" width="400" :alt="item.strImageAttribution" loading="lazy">
        <section>
          <span>{{ item.strCategory }}</span>
          <span>{{ item.strAlcoholic }}</span>
          <span>{{ item.strGlass }}</span>
        </section>
        <section>
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
import { useCocktailStore } from "~/store/use-cocktail.store";

definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
});


const route = useRoute();
const store = useCocktailStore();
store.set(route.params.type as string);
</script>
