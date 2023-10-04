<template>
  <div class="todo-list">
    <h2 class="title">Список дел</h2>
    <ul class="todos">
    <todo-item
        v-for="todo of props.todos"
        :key="todo.id"
        :todo="todo"
        @on-delete="deleteTodo"
        @on-mark="markDone"
      />
    </ul>
    <todo-form
    @onAdd="onClickAdd"
    />
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

.todos > {
  list-style: none;
  display: flex;
  align-items: center;
}

/* .delete-btn {
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
  cursor: pointer; */
/* } */
</style>

<script setup>

import TodoForm from "@/components/todo-form.vue";
import TodoItem from "@/components/todo-item.vue";
import {defineProps, defineEmits} from "vue";


const props = defineProps({
  todos: Array,
})



const emit = defineEmits(['onMark', 'onDelete', 'onAdd'])




function onClickAdd (newTodo) {
  // console.log(newTodo)
  emit("onAdd", newTodo)

}

function deleteTodo (id) {
  emit('onDelete', id)
}

function markDone (id) {
  emit('onMark', id)
}
</script>
