import { defineStore } from "pinia"; // counter.js
export const useCounterInJSStore = defineStore("counter-in-js", {
  state: () => ({
    count: 25,
  }),
  getters: {
    // automatically infers the return type as a number
    doubleCount(state) {
      return state.count * 2;
    },

    doublePlusOne() {
      // autocompletion and typings for the whole store ✨
      return this.doubleCount + 1;
    },
    /**
     * https://jsdoc.app/tags-returns
     * @returns {number}
     */
    doublePlusFiveUseJSDoc() {
      return this.doubleCount + 5;
    },
  },
});
