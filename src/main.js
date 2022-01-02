import { createApp } from 'vue'
import router from './router/index'

import App from './App.vue'

import './index.css'
import './pico.min.css'

createApp(App).use(router).mount('#app')