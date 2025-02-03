<template>
  <nav>
    <ul>
      <li v-for="item of availableCocktails" :key="item" class="h-16">
        <NuxtLink
          :to="{ path: '/' + item }"
          active-class="!bg-slate-400 text-white"
          class="flex h-full items-center bg-slate-100 pl-8 pr-8 text-2xl capitalize hover:bg-slate-200"
        >
          {{ item }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { availableCocktails } from "~/consts/availableCocktails.const";
</script>
