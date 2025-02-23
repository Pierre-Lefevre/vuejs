<!-- vue.js autorise le passage implicite, pas besoin de préciser une props "class" -->
<!-- on peut utiliser plusieurs v-model (https://vuejs.org/guide/components/v-model.html#multiple-v-model-bindings) -->
<!-- @change="onChange" -->

<template>
  <label>
    <input type="checkbox" v-model="model" />
    {{ label }}
  </label>
</template>

<script setup>
const model = defineModel();
const props = defineProps({
  label: String,
});
const emits = defineEmits(["check", "uncheck"]);

const onChange = (e) => {
  if (e.currentTarget.checked) {
    emits("check", e.currentTarget);
  } else {
    emits("uncheck", e.currentTarget);
  }
};
</script>
