<!-- v-slot: = # -->
<!-- v-on: = @ -->
<!-- v-bind: = : -->

<template>
  <Timer v-if="showTimer" />
  <Button @click="showTimer = !showTimer">Afficher / Masquer</Button>

  <hr />

  <Layout>
    <template #header>Header</template>
    <template #aside>Sidebar</template>
    <template #main>Main</template>
    <template #footer>Footer</template>
  </Layout>

  <hr />

  <Button :disabled="newTodo.length === 1" @click="console.log('click')">
    bouton
  </Button>

  <hr />

  <form action="" @submit.prevent="addTodo">
    <fieldset role="group">
      <input type="text" placeholder="Tâche à effectuer" v-model="newTodo" />
      <button :disabled="newTodo.length === 0">Ajouter</button>
    </fieldset>
  </form>
  <div v-if="todos.length === 0">Vous n'avez pas de tâches à faire :(</div>
  <div v-else>
    <ul>
      <li
        v-for="todo in sortedTodos"
        :key="todo.date"
        :class="{ completed: todo.completed }"
      >
        <div>
          <Checkbox
            :label="todo.title"
            v-model="todo.completed"
            @check="console.log('check')"
            @uncheck="console.log('uncheck')"
          />
        </div>
      </li>
    </ul>
    <Checkbox label="Masquer les tâches complétées" v-model="hideCompleted" />
    <p v-if="remainingTodos > 0">
      {{ remainingTodos }} tâche{{ remainingTodos > 1 ? "s" : "" }} à faire
    </p>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, shallowReactive } from "vue";
import Checkbox from "./Checkbox.vue";
import Button from "./Button.vue";
import Layout from "./Layout.vue";
import Timer from "./Timer.vue";

const newTodo = ref("");
const hideCompleted = ref(false);
const todos = ref([]);
const showTimer = ref(true);

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((r) => r.json())
    .then((v) => (todos.value = v.map((todo) => ({ ...todo, date: todo.id }))));
});

const addTodo = () => {
  todos.value.push({
    title: newTodo.value,
    completed: false,
    date: Date.now(),
  });
  newTodo.value = "";
};

// computed : équivalent de useEffect en react mais les dépendences sont optimisées automatiquement par Vue.js. Il faut éviter les effets de bord.
const sortedTodos = computed(() => {
  const sortedTodo = todos.value.toSorted((a, b) =>
    a.completed > b.completed ? 1 : -1
  );
  if (hideCompleted.value === true) {
    return sortedTodo.filter((t) => t.completed === false);
  }
  return sortedTodo;
});

const remainingTodos = computed(() => {
  return todos.value.filter((t) => t.completed === false).length;
});
</script>

<style>
.completed {
  opacity: 0.5;
  text-decoration: line-through;
}
</style>
