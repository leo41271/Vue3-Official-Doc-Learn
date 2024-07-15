// import './assets/main.css' // 全域 css 配置 如果你有的話
// import { createApp } from 'vue'
// import App from './App.vue'
// createApp(App).mount('#app') // 鍊式寫法

import { createApp } from "vue";// main.js
import App from "./App.vue";
const app = createApp(App);

const appInstance = app.mount("#app"); // 觀察組件實例 
appInstance.gggg =  0;// appInstance.gggg++;
console.log("proxy", appInstance.person);
console.log("proxy", appInstance);