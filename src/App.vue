<template>
  <p :class="$style.text">text</p>
  <select name="" id="" v-model="color">
    <option value="red">Rouge</option>
    <option value="green">Vert</option>
    <option value="blue">Bleu</option>
  </select>
  <p class="text2">text</p>
  <p class="text3">text</p>
</template>

<script setup>
import { ref, useCssModule } from "vue";

console.log(useCssModule());

const color = ref("red");
</script>

<!--
- scoped : permet d'appliquer ce style seulement pour ce cmpt, ajoute un attribut data- dans les tags associées.
- deep : permet d'affecter les cmpt en profondeur malgré le scoped, dans ce cas l'attribut data- est sur .app.
- global : la règle devient globale, l'attribut data- n'est plus injecté.
- on peut aussi créer pls balises <style> pour scoped et non scoped.
- slotted : permet de gérer les class passées dans des slots depuis le cmpt parent (sans cmpt intermédiaire).
- v-bind : bind une var js avec le CSS, bien plus simple qu'en React avec les styled-cmpts.
- lang : permet d'utiliser Sass à condition d'installer la dep (npm i -D sass-loader sass).
-->
<style scoped lang="scss">
@use "sass:color";
.app :deep(h1) {
  color: red;
}
:global(.app h1) {
  color: red;
}
:slotted(.text) {
  color: red;
}
.text2 {
  color: v-bind(color);
}
.text3 {
  color: color.scale(red, $alpha: -40%);
}
</style>

<!--
- CSS Modules
-->
<style module>
.text {
  color: red;
}
</style>
