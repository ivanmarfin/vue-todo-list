<template>
    <div>
     <li>
        <input :id="props.todo.id" type="checkbox" @change="markDone(props.todo.id)" />
        <label :for="props.todo.id" :class="{ '-done': props.todo.isDone }">
          {{ props.todo.name }}
        </label>
        <button class="delete-btn" @click="deleteTodo(props.todo.id)">х</button>
      </li>
    </div>
</template>

<script setup>

import {defineProps, defineEmits} from "vue";

const props = defineProps({
  todo: Object,
});

const emit =defineEmits(["onMark", "onDelete"]);


function deleteTodo(id) {
  emit("onDelete", id);
}

function markDone(id) {
  emit("onMark", id);
}

</script>


<style>


li {
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


