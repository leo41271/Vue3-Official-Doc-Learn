// useOtherGetter.js
import { defineStore } from "pinia";
import { useArgumentGetterStore } from "@/stores/getters/argumentGetter"; //已在前面了
export const useAccessOtherGetterStore = defineStore("access-other-getter", {
  state: () => ({
    data: [1, 2, 3, 4],
  }),
  getters: {
    otherGetter(state) {
      const otherStore = useArgumentGetterStore();
      return state.data + " " + JSON.stringify(otherStore);
    },
  },
});
