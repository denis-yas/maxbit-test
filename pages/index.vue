<template>
  <div>
    <ul>
      <li v-for="item of a" :key="item.strDrink">
        <h2>{{ item.strDrink }}</h2>
        <img :src="item.strDrinkThumb" :alt="item.strImageAttribution">
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
            <dt>{{ item.strMeasure1 }}</dt>
            <dd>{{ item.strIngredient1 }}</dd>
          </dl>
        </section>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCocktailStore } from "~/store/use-cocktail.store";
const route = useRoute();
const store = useCocktailStore();
store.set(route.params.type as string);

const a = computed(() => {
  const a = store.cocktails;
  return a;
});
</script>
