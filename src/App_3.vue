<template>
  <input type="text" v-model="page.title" />
  Temp écoulé : {{ time }}
  <Button @click="reset">Reset</Button>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";
import { useTimer } from "./composable/useTimer";
import Button from "./Button.vue";

/* const name = ref("");
watch(
  name,
  (newValue, oldValue) => {
    document.title = newValue;
  },
  { immediate: true }
); */

const page = ref({
  title: "",
});
/* watch(
  () => page.value.title,
  (newValue, oldValue) => {
    document.title = newValue;
  },
  { immediate: true }
); */

// équivalent à watch() mais de façon intelligent, il auto détermine les deps
watchEffect(() => {
  document.title = page.value.title;
});

const { time, reset } = useTimer();
</script>

<style></style>
