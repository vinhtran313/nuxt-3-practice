<template>
  <div>
    <h1>About page {{ color }}</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "orange",
});
const dataFetched = await useFetch(
  "https://jsonplaceholder.typicode.com/users"
);
const color = useColor();
</script>
