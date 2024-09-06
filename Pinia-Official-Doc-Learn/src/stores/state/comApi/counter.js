// ------------------------------------ 組合 API 我們先以上方為主
// Resetting the state https://pinia.vuejs.org/core-concepts/state.html#Resetting-the-state 的 In Setup Stores, you need to create your own $reset() method:
import { defineStore } from "pinia";
import { ref } from 'vue';
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  function $reset() {
    count.value = 10;
  }
  return { count, $reset };
});
