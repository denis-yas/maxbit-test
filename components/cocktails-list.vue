<template>
  <nav>
    <ul>
      <li v-for="item of availableCocktails" :key="item" class="h-16">
        <NuxtLink :to="{ path: '/' + item }" active-class="!bg-slate-400 text-white" class="pl-8 pr-8 bg-slate-100
           hover:bg-slate-200 h-full capitalize flex items-center text-2xl">
          {{ item }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { availableCocktails } from "~/consts/availableCocktails.const";
</script>
