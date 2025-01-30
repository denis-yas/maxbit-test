<script setup lang="ts">
import { NuxtPage } from '#components';

</script>

<template>
  <header>Коктейли</header>
  <div class="layout">
    <nav>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
      </ul>
    </nav>
    <NuxtPage class="layout__content"/>
  </div>
</template>

<style>
.layout {
  display: flex;
}

.layout__content {
  background-color: red;
  flex-grow: 1;
}

</style>