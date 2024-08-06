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

// directive
app.directive("globalAdd-999", function (el, binding) {
    el.textContent = binding.value + "999"; // 把改變好的內容再指定回去
});
app.directive("global-mutil", (el, binding) => {
    console.log("mutil", binding.value.color);
    console.log("mutil", binding.value.text);
})
const myGlobalDirective = { //概念示範 ( main.js) // 較完整之定義但太多了通常只對需要的才加
    // 指令綁定到元素時調用  // 可以在這裡進行初始設置
    beforeMount(el, binding, vnode) {
        console.log("my-global-directive。指令被綁定到元素:", el);
    },
    // 元素插入父節點時調用  // 可以在這裡進行一些初始渲染的操作
    mounted(el, binding, vnode) {
        console.log("my-global-directive。元素被插入到父節點:", el);
    },
    // 元素更新時調用  // 可以在這裡進行更新操作
    updated(el, binding, vnode, oldVnode) {
        console.log("my-global-directive。元素更新:", el);
    },
    // 元素即將被從父節點中移除時調用  // 可以在這裡清理一些資源
    beforeUnmount(el, binding, vnode) {
        console.log("my-global-directive。元素即將被移除:", el);
    },
    // 指令從元素解綁時調用  // 可以在這裡進行一些清理工作
    unmounted(el, binding, vnode) {
        console.log("my-global-directive。指令被解綁:", el);
    },
};
app.directive("my-global-directive", myGlobalDirective); // 全域註冊

app.config.globalProperties.myCustomProperty = '這是一個全局的自定義屬性';// 添加一個全局的自定義屬性

const appInstance = app.mount("#app"); // 觀察組件實例 
appInstance.gggg = 0;// appInstance.gggg++;
console.log("proxy", appInstance.person);
console.log("proxy", appInstance);