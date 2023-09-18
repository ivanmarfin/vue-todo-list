<template>
  <div class="todo-list">
    <h2 class="title">Список дел</h2>
    <ul class="todos">
      <li v-for="todo of props.todos" :key="todo.id">
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

import {ref, defineProps, defineEmits} from "vue";

const props = defineProps({
  todos: Array
})

const emit = defineEmits(['onMark', 'onDelete', 'onAdd'])

let todoName = ref('');

function onClickAdd () {
  emit('onAdd', { id: Date.now(), name: todoName.value, isDone: false })
  todoName.value = '';
}

function deleteTodo (id) {
  emit('onDelete', id)
}

function markDone (id) {
  emit('onMark', id)
}
</script>
