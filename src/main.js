import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css';
import '@/assets/style.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import router from './router'
import { createPinia } from 'pinia'


createApp(App).use(router).use(createPinia()).mount('#app')
