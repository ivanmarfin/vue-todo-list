<template>
  <div class="todo-list">
    <h2 class="title">Список дел</h2>
    <ul class="todos">
      <li v-for="todo of todos" :key="todo.id">
        <input :id="todo.id" type="checkbox" @change="markDone(todo.id)" />
        <label :for="todo.id" :class="{ '-done': todo.isDone }">
          {{ todo.name }}
        </label>
        <button class="delete-btn" @click="deleteTodo(todo.id)">х</button>
      </li>
    </ul>
    <input
        type="text"
        placeholder="Запишите что-то..."
        v-model="todoName"
    />
    <button @click="onClickAdd">Добавить дело</button>
  </div>
</template>

<style scoped>

.-done {
  text-decoration: line-through;
}

.todo-list {
  margin-left: 150px;
}

.todos {
  padding: 0;
}

.todos > li {
  list-style: none;
  display: flex;
  align-items: center;
}

.delete-btn {
  margin-left: 16px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>

<script setup>

import {ref} from "vue";

let todos = ref([
  { id: 1, name: 'Купить пиво', isDone: false },
  { id: 2, name: 'Купить хлеб', isDone: false },
  { id: 3, name: 'Пойти спать', isDone: false },
]);

let todoName = ref('');

function onClickAdd () {
  todos.value.push({ id: Date.now(), name: todoName.value, isDone: false });
  todoName.value = '';
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
