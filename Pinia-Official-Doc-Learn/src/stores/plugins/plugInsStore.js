import { defineStore } from "pinia";
export const usePlugInStoreStore = defineStore("plug-ins-tore", {
  state: () => {
    return { count: 0 };
  },
  // state: () => ({ count: 0 }) // 也可以这样定义
  actions: {
    increment() {
      this.count++;
      this.logAction("increment"); // 調用我們通過插件注入的 logAction 方法
    },
  },
});
