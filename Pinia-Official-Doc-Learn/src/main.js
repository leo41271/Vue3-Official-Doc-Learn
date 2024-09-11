import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
const pinia = createPinia();

// 建立的每個 store 都會新增一個名為 `secret` 的屬性。
// 安裝此外掛程式後，插件可以保存在不同的檔案中
function SecretPiniaPlugin() {
  return { secret: "the cake is a lie" };
}
// 將該插件交給 Pinia
pinia.use(SecretPiniaPlugin) // 插件只會應用於在 pinia 傳遞給應用程式後建立的 store，否則它們不會生效。
pinia.use(({ store }) => {
  store.hello = 1
  store.hello2 = 1
  // make sure your bundler handle this. webpack and vite should do it by default
  if (process.env.NODE_ENV === 'development') {
    console.log("dev");
    // add any keys you set on the store
    store._customProperties.add('hello')
  }
})
pinia.use(() => ({ hello3: 1 }))

import { myPiniaPlugin } from "@/stores/plugins/pinia-plugin";
pinia.use(myPiniaPlugin)

const app = createApp(App);
app.use(pinia); // 建立一個 pinia 實例 (根 store) 並將其傳遞給應用程式：
app.mount("#app");
//版本低於2.7另有作法