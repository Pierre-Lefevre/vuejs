<!-- - template : peut être utilisé dans template, peut permettre de faire des boucles sans
créer de tags, peut permettre de faire un v-if qui se base sur un v-for sans polluer le DOM,
l'équivalent des Fragments <></> en React.

- component : permet de générer un cmpt dynamiquement

- KeepAlive : permet de préserver l'état d'un cmpt même s'il n'est plus affiché,
onUnmounted n'est plus appelé, à la place on peut utiliser les func onActivated() / onDesactivated() de l'API.

- Teleport : l'équivalent des Portals React, permet de déplacer un élément HTML ailleurs dans le DOM,
comme en React c'est util pour les modals.

- Suspense : exactement comme dans React -->

<template>
  <template></template>
  <component :is="monCmpt" />
  <KeepAlive></KeepAlive>
  <Teleport to="body"></Teleport>
  <Suspense></Suspense>
</template>

<script setup>
import { ref } from "vue";
</script>

<style></style>
