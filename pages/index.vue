<template>
  <div>
    <h1>Страница index</h1>
    <h2>sdf {{ store.smth }}</h2>
  </div>
</template>
<script setup lang="ts">
import { useCocktailStore } from '~/store/use-cocktail.store';

const store = useCocktailStore();

</script>