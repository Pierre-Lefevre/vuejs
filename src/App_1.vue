<template>
  <p
    :id="`p-${count}`"
    :style="{ color: count > 5 ? 'red' : 'green' }"
    :class="{ active: count > 5 }"
  >
    Compteur : {{ count }}
  </p>
  <!-- <div v-if="count >= 5">Bravo vous avez cliqué plus de 5 fois.</div>
  <div v-else>Bravo vous avez cliqué moins de 5 fois.</div> -->
  <button @click="increment">Incrémenter</button>
  <button @click="decrement">Décrémenter</button>
  <hr />
  <button @click="sortMovies">Réorganiser</button>
  <form action="" @submit.prevent="addMovie">
    <input type="text" placeholder="Nouveau film" v-model="movieName" />
    <button>Ajouter</button>
  </form>
  <ul>
    <li :key="movie" v-for="movie in movies">
      {{ movie }} <button @click="deleteMovie(movie)">Supprimer</button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
const movieName = ref("");
const movies = ref(["Matrix", "Lilo & Stitch", "Titanic"]);

const increment = (e) => {
  console.log(e);
  count.value++;
};

const decrement = () => {
  count.value--;
};

const deleteMovie = (movie) => {
  movies.value = movies.value.filter((m) => m !== movie);
};

const sortMovies = () => {
  movies.value = movies.value.sort((a, b) => (a > b ? 1 : -1));
};

const addMovie = () => {
  // event.preventDefault(); <- inutile avec "@submit.prevent"
  movies.value.push(movieName.value);
  movieName.value = "";
};
</script>

<!--
":" devant un attribue => interpète la valeur (comme v-bind)
"@" = "v-on"
-->

<style>
.active {
  color: red;
}
</style>
