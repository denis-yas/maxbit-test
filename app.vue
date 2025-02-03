<script setup lang="ts">
import { NuxtPage } from "#components";
import CocktailsList from "./components/cocktails-list.vue";
</script>
<template>
  <div class="m-auto mt-8 min-h-screen max-w-[1024px]">
    <div class="sm:flex">
      <cocktails-list class="flex-shrink-0 pt-8 sm:w-64" />
      <NuxtPage class="flex-grow pl-8 pr-8 pt-8" />
    </div>
  </div>
</template>
