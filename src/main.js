import { createApp } from 'vue'
import Toast from "vue-toastification";
import router from './router/index'

import App from './App.vue'

import "vue-toastification/dist/index.css";
import './index.css'

createApp(App).use(router).use(Toast, {}).mount('#app')