<template>
  <nav>
    <ul>
      <li v-for="item of availableCocktails" :key="item">
        <NuxtLink :to="{ name: 'home', params: { type: item } }">{{
          item
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { availableCocktails } from "~/consts/availableCocktails.const";
</script>

<style></style>
