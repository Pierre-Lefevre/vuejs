<template>
  <button @click="toggleSpoiler">Afficher / Masquer le spoiler</button>
  <FadeSlideTransition>
    <div v-if="showSpoiler" class="spoiler">
      A la fin dde la série Marc Cunnigan meurt !
    </div>
    <div v-else>Voir une information qui gâche la série</div>
  </FadeSlideTransition>
</template>

<script setup>
import { ref } from "vue";
import FadeSlideTransition from "./components/FadeSlideTransition.vue";

const showSpoiler = ref(false);
const toggleSpoiler = () => (showSpoiler.value = !showSpoiler.value);
</script>

<style>
.spoiler {
  padding: 1rem;
  border: 1px solid #ffffff58;
}
</style>
