<template>
  <div>
    <Head>
      <Title>
        {{ title }}
      </Title>
    </Head>
    <h1>This is post {{ route.params.id }}</h1>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: "something",
});
const title = ref("Hello");
const route = useRoute();
</script>
