<script setup lang="ts">
import { NuxtPage } from "#components";
import CocktailsList from './components/cocktails-list.vue';
</script>
<template>
  <div class="max-w-[1024px] m-auto mt-8 min-h-screen border">
    <div class="flex">
      <cocktails-list class="pt-8 border-r-2" />
      <NuxtPage class="pt-8 pl-8 flex-grow" />
    </div>
  </div>
</template>
