<template> 
<!-- // Это HTML  -->
  <div class="todo-list">
    <h2 class="title">Список дел</h2>
    <ul class="todos">
      <li v-for="todo of todos" :key="todo.id">
        <!-- v-for - это дириктива. Срочкой выше мы объявляем переменную todo of todos(обращаемся к скрипту)
         тем самым мы заводим цикл в котором мы можем обрабатывать массивы. -->
        <input :id="todo.id" type="checkbox" @change="markDone(todo.id)" />
        <!-- input - поле для ввода -->
        <label :for="todo.id" :class="{ '-done': todo.isDone }">
          <!-- label - это название для полей ввода, а атрибут :for(есть только у лабел) нужен для того чтобы можно было 
          щелкать по тексту и чекбоксу, а не только по чекбоксу 
          : с помощью двоеточия мы можем передавать не тупо строчку а объект, где ключем будет название класса. а значением
          тру или фолс -->
          {{ todo.name }}
          <!-- Интерполяция это обертывание в двойные скобки для того что бы обратится к значению переменной  todo of todos 
          Но при этом нужно еще для тегов li v-for надо задать уникальный  ключ :key="todo.id"(V-bind или (:) - это привязка)
          name используем потому что в let todos = ref есть идентификатор -->
        </label>
        <button class="delete-btn" @click="deleteTodo(todo.id)">х</button>
        <!-- вызываем метод  @click, передаем этот идентификатор todo.id  в function deleteTodo (id)-->
      </li>
    </ul>
    <input
        type="text"
        placeholder="Запишите что-то..."
        v-model="todoName"
    />
    <!-- Для того чтобы добавлять что то в приложении нам нужно обратиться к значению input из JS через function 
     коротко говоря, пользователь нажимает на кнопку ввода и должно что то происходить-->
    <!-- placeholder подсказка в поле ввода -->
    <!-- v-model - это способ записи когда мы делаем запись и она возвращается обратно  -->

    <button @click="onClickAdd">Добавить дело</button>
    <!-- для того что бы происходило какое то событие при нажатии на кноку, нам нужно добавить ему обработчик @click="onClickAdd"
    и обратиться к JS function onClickAdd -->
  </div>
</template>


<style scoped>
/* это css, стили по умолчанию принадлежат всем компонентам */
/* если добавить атрибут scoped то эти стили будут пренадлежать только этому компоненту */
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
  /* list-style: none; убирает точку */
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
// это JS 
//  setup позволяет описывать Composition API
// Во вью 3 есть на выбор два способа написания скрипта 
// Options API и Composition API 
// 1- Options API - это описание JS компонента через обычный объект 
// т.е. у нас будет объект компонента и мы будем у него какие то свойства описывать
// 2- Composition API - представляет из себя не описание какого либо компонета,а просто пишем нужный нам  код 

import {ref} from "vue";

let todos = ref([
// ref это то что вью отслеживает и мы импортируем его из import {ref} from "vue"; Это называется реактивным и вью будет 
// за ним следить и меняться. И все что является реактивным надо писать value как массив
  { id: 1, name: 'Купить пиво', isDone: false },
  { id: 2, name: 'Купить хлеб', isDone: false },
  { id: 3, name: 'Пойти спать', isDone: false },
  // Это массив объектов где будет идентификатор
]);

let todoName = ref('');
// объявление через let означает что занчение переменных будет меняться

function onClickAdd () {
  todos.value.push({ id: Date.now(), name: todoName.value, isDone: false });
  //  todos.value.push это позволяет добавть элемент в массив конец списка
  // Date.now() это текущее время в миллисекундах
  todoName.value = '';
  // очищение строки при нажатии на кнопку "добавить дело".  Т.е мы для todoName.value оставляем пустое значение = '';
}

function deleteTodo (id) {
  todos.value = todos.value.filter((todo) => todo.id !== id)
  //  todos.value.filter((todo) - вызываем метод и передаем функцию "()=>{} (Стрелочная функция)" (!== это значение не равен)
}

function markDone (id) {
  const todo = todos.value.find((todo) => todo.id === id)
  if (todo) {
    todo.isDone = !todo.isDone;
  }
  // markDone  означенит выполнение задачи
  // find это метод массива для поиска задачи с этим ID
}
</script>
