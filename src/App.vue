<template>
  <form role="group" @submit.prevent="addMovie">
    <input type="text" v-model="movie" />
    <button :disabled="movie.length === 0">Ajouter</button>
  </form>
  <TransitionGroup name="list" tag="ul">
    <li v-for="movie in movies" :key="movie">
      {{ movie }}
      <button class="secondary" @click="removeMovie(movie)">x</button>
    </li>
  </TransitionGroup>
  <button @click="randomize">Réorganiser</button>
</template>

<script setup>
import { ref } from "vue";
import { shuffleArray } from "./functions/array";

const showSpoiler = ref(false);
const movies = ref([
  "Les Évadés",
  "Le Parrain",
  "The Dark Knight : Le Chevalier Noir",
  "Pulp Fiction",
  "Forrest Gump",
  "Inception",
]);

const movie = ref("");
const addMovie = () => {
  movies.value = [movie.value, ...movies.value];
  movie.value = "";
};
const removeMovie = (movie) => {
  movies.value = movies.value.filter((m) => m !== movie);
};
const toggleSpoiler = () => (showSpoiler.value = !showSpoiler.value);
const randomize = () => {
  movies.value = shuffleArray(movies.value);
};
</script>

<style>
.spoiler {
  padding: 1rem;
  border: 1px solid #ffffff58;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-leave-active {
  position: absolute;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
