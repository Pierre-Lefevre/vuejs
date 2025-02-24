<template>
  <Transition name="fadeslide" mode="out-in">
    <slot></slot>
  </Transition>
</template>

<style>
.fadeslide-enter-active,
.fadeslide-leave-active {
  transition: 0.5s;
}

.fadeslide-enter-from,
.fadeslide-leave-to {
  opacity: 0;
}

.fadeslide-enter-from {
  transform: translateX(10px);
}

.fadeslide-leave-to {
  transform: translateX(-10px);
}
</style>
