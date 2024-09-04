import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
const pinia = createPinia();
const app = createApp(App);
app.use(pinia); // 建立一個 pinia 實例 (根 store) 並將其傳遞給應用程式：
app.mount("#app");
//版本低於2.7另有作法