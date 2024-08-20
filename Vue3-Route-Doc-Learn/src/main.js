import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // index.js 為預設

const app = createApp(App)

app.use(router) // 使用插件

app.mount('#app')
