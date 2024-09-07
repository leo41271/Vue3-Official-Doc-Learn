import { defineStore } from "pinia"; // counter.ts
export const useCounterTSStore = defineStore("counter-t-s", {
  state: () => ({
    count: 99,
  }),
  getters: {
    // 自动推断出返回类型是一个 number
    doubleCount(state) {
      return state.count * 2;
    },
    // 返回类型**必须**明确设置
    doublePlusOne(): number {
      // 整个 store 的 自动补全和类型标注 ✨
      return this.doubleCount + 1;
    },
  },
});
