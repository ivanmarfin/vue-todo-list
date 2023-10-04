<template>
  <div>
    <input
        type="text"
        placeholder="Запишите что-то..."
        v-model="todoName"
    />
    <button @click="onClickAdd">Добавить дело</button>
  </div>
</template>

<script setup>

import {defineEmits, ref} from "vue"

const emit = defineEmits(['onAdd'])

let todoName = ref('');

function onClickAdd () {
  emit('onAdd', { id: Date.now(), name: todoName.value, isDone: false })
  todoName.value = '';
}
</script>

<style scoped>

</style>