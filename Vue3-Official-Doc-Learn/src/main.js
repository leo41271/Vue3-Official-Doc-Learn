// import './assets/main.css' // 全域 css 配置 如果你有的話
// import { createApp } from 'vue'
// import App from './App.vue'
// createApp(App).mount('#app') // 鍊式寫法

import { createApp } from "vue";// main.js
import App from "./App.vue";
const app = createApp(App);

// component gloal 使用範例 。(組件註冊 Component Registration) 
import gloalComponentA from "./components/op-doc/component-registration-docs/gloalComponentA.vue";
import gloalComponentB from "./components/op-doc/component-registration-docs/gloalComponentB.vue";
import gloalComponentC from "./components/op-doc/component-registration-docs/gloalComponentC.vue";
// app.component("GlobalA", gloalComponentA); // 下行為 鏈式寫法
app.component("GlobalA", gloalComponentA)
    .component("GlobalB", gloalComponentB)
    .component("GlobalC", gloalComponentC);

const appInstance = app.mount("#app"); // 觀察組件實例 
appInstance.gggg = 0;// appInstance.gggg++;
console.log("proxy", appInstance.person);
console.log("proxy", appInstance);