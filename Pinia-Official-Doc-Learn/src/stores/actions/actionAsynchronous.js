import { defineStore } from "pinia"; // actionAsyncronous.js
import { useFetch } from "@/composables/fetch";
export const useActionAsynchronousStore = defineStore("action-asynchronous", {
  state: () => ({
    data: "",
    error: "",
  }),
  actions: {
    async getTsunamiAPI(
      key,
      getTsunamiurl,
      limitData = 2,
      formatBool = "JSON"
    ) {
      try {
        const getGovApi =
          getTsunamiurl +
          "?Authorization=" +
          key +
          "&limit=" +
          limitData +
          "&format=" +
          (formatBool ? "JSON" : "XML");
        // 使用 this 訪問 store 中的狀態
        // const { data, error } = await useFetch(getGovApi);
        // this.data = data;
        // this.error = error;

        // asyncSubscribe 使用------------------------// .then 使 回傳直有變更
        // const action = useFetch(getGovApi);
        // action.then((r) => {
        //   this.data = r.data;
        //   this.error = r.error;
        // });
        // return action;
        return useFetch(getGovApi).then((r) => {
          this.data = r.data;
          this.error = r.error;
          return { data: r.data, error: r.error };
        });
        // asyncSubscribe 使用------------------------// .then 使 回傳直有變更
      } catch (error) {
        return error;
      }
    },
  },
});

