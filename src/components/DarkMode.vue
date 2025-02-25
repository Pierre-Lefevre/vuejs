<template>
  <slot></slot>
</template>

<script setup>
import { provide, readonly } from "vue";

const darkMode = ref(true);

provide("darkMode", {
  darkMode: readonly(darkMode),
  toggleDarkMode: () => {
    darkMode.value = !darkMode.value;
  },
});
</script>

<!--
ailleurs dans le code pour accéder ou modifier la valeur :
const { darkMode } = inject('darkMode')
const { toggleDarkMode } = inject('darkMode')
-->
