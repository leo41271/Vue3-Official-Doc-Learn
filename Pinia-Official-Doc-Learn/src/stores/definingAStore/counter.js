import { defineStore } from "pinia"; // counter.js
export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 25, name: "storeToRefs示範" }),
  getters: {
    doubleCount(state) { return state.count * 2; },
    doublePlusOne() { return this.doubleCount + 1; },
  },
});