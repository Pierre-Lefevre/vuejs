<template>
  <h2>Compteur</h2>
  <p>Compteur : {{ count }} x 2 = {{ double }}</p>
  <button @click="increment">Increment</button>
</template>

<!-- historique de l'évolution de l'API, la V3 simplifie grandement la syntaxe, il faut préciser l'attribut setup -->

<!-- <script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
  computed: {
    double() {
      return this.count * 2;
    },
  },
};
</script> -->

<!-- <script>
import { computed, ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    const double = computed(() => count.value * 2);
    const increment = () => count.value++;
    return {
      count,
      double,
      increment,
    };
  },
};
</script> -->

<script setup>
import { computed, ref } from "vue";

const count = ref(0);
const double = computed(() => count.value * 2);
const increment = () => count.value++;
</script>

<style></style>
