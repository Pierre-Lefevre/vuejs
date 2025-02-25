<template>
  <article v-if="posts" v-for="post in posts" :key="post.id">
    {{ post.body }}
  </article>
  <p v-if="!posts && state === 'error'">Impossible de charger les articles</p>
</template>

<script setup>
import { useFetch } from "@/composable/useFetch";
import { ref, computed } from "vue";

const page = ref(1);
const { state, data: posts } = useFetch(
  computed(
    () =>
      `https://jsonplaceholder.typicode.com/posts?_limit=2&_page=${page.value}`
  )
);
</script>
