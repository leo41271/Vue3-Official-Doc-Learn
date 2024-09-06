import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", {
  // State 的範例
  // counter.js
  state: () => ({
    count: 0, // ref(0)
    count2: 1,
    name: "leo",
    items: [],
    check: true,
  }),
});
// ----------------------------------- 選項 API
