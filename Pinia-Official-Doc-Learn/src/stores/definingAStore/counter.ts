import { defineStore } from "pinia"; // counter.ts
import { ref } from "vue";
export const useCounterTSStore = defineStore("counter", {
  state: () => ({ count: 99, }),
  getters: {
    doubleCount(state) { return state.count * 2; },
    doublePlusOne(): number { return this.doubleCount + 1; },
  },
});