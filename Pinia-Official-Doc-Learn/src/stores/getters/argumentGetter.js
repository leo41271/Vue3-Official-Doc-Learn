// argumentGetter.js
import { defineStore } from "pinia";
export const useArgumentGetterStore = defineStore("argument-getter", {
  state: () => ({
    users: [
      { id: 1, name: "User 1", active: false },
      { id: 2, name: "User 2 透過id拿取整個user 的資料", active: false },
      { id: 3, name: "User 3", active: false },
      { id: 4, name: "User 4", active: true },
      { id: 2, name: "id 2 但只是示範", active: true },
      { id: 6, name: "User 6", active: true },
    ],
  }),
  getters: {
    // 本質上不能 但透過return 一個函式達到 接收引數
    getUserById: (state) => {
      return (userIdPara) => state.users.find((user) => user.id === userIdPara);
    },
    getActiveUserById(state) {
      const activeUsers = state.users.filter((user) => user.active );
      console.log(state.users)
      // 但透過getter中 緩存一些結果 雖 少見 但性能較好(以證明)
      return (userId) => activeUsers.find((user) => user.id === userId);
    },
  },
});
