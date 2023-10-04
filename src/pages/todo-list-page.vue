<template>
  <todo-list
      :todos="todos"
      @on-add="onClickAdd"
      @on-delete="deleteTodo"
      @on-mark="markDone"
  />
</template>

<script setup>
import TodoList from "@/components/todo-list.vue";
import {ref} from "vue";

let todos = ref([
  { id: 1, name: 'Купить пиво', isDone: false },
  { id: 2, name: 'Купить хлеб', isDone: false },
  { id: 3, name: 'Пойти спать', isDone: false },
]);

function onClickAdd (todo) {
  todos.value.push(todo);
}

function deleteTodo (id) {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

function markDone (id) {
  const todo = todos.value.find((todo) => todo.id === id)
  if (todo) {
    todo.isDone = !todo.isDone;
  }
}

</script>

<style scoped>

</style>