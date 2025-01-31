<template>
  <div>
    <h1>Страница index</h1>
    <h2>sdf {{ store.currentCode }}</h2>
    <h2>id: {{ route.params.type }}</h2>
  </div>
</template>
<script setup lang="ts">
import { useCocktailStore } from "~/store/use-cocktail.store";
const route = useRoute();
const store = useCocktailStore();
store.set(route.params.type as string);
</script>
