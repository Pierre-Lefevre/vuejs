<template>
  <button class="secondary" :disabled="disabled" @click="emits('click')">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  disabled: Boolean,
});
const emits = defineEmits(["click"]);
</script>
