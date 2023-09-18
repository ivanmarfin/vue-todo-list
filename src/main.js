// этот файлик и запускает всю обработку

import { createApp } from 'vue'
// App это наш корневой компонент(страница)
import App from './App.vue'
// мы передаем его в функцию createApp(App) и в функцию mount мы передаем селектор, 
// того HTML куда это приложение и нужно нарисовать
createApp(App).mount('#app')
