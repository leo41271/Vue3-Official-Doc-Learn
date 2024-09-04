import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", {
  state: () => { return { count: 0 }; },
  // state: () => ({ count: 0 }) // 也可以这样定义
  actions: { increment() { this.count++; }, },
});
