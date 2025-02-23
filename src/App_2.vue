<template>
  <ul>
    <li>{{ person.firstname }}</li>
    <li>{{ person.lastname }}</li>
    <li>{{ person.age }}</li>
  </ul>
  <button @click.prevent="randomAge">Changer âge</button>
</template>

<script setup>
import { ref } from "vue";

const person = ref({
  firstname: "John",
  lastname: "Doe",
  age: 20,
});

const randomAge = () => {
  person.value.age = Math.round(Math.random() * 100);
};
</script>
