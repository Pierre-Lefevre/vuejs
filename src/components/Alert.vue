<template>
  <div :class="classes">
    <slot> </slot>
    <button @click="emits('close')" aria-label="Close">&times;</button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: String,
});
const emits = defineEmits(["close"]);
const classes = computed(() => `alert alert-${props.type}`);
</script>

<style>
.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
}
</style>
