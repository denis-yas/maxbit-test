<template>
  <nav>
    <ul>
      <li v-for="item of availableCocktails" :key="item">
        <NuxtLink :to="{ path: '/' + item }" active-class="!bg-red-700 t"
          class="pl-4 pr-4 bg-sky-500 hover:bg-sky-700 block">
          {{ item }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { availableCocktails } from "~/consts/availableCocktails.const";
</script>
