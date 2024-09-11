// export function myPiniaPlugin(context) {
//   context.pinia; // the pinia created with `createPinia()`
//   context.app; // the current app created with `createApp()` (Vue 3 only)
//   context.store; // the store the plugin is augmenting
//   context.options; // the options object defining the store passed to `defineStore()`
//   // ...
// }

// pinia-plugin.js
export function myPiniaPlugin({ store, pinia, app, options }) {
  // 1. 添加全局的 user 狀態
  const user = {
    name: "John Doe",
    role: "admin",
  };

  // 2. 為每個 store 注入通用方法 logAction
  store.logAction = (actionName) => {
    console.log(`Action called: ${actionName}`);
    // 這裡你可以做額外的操作，例如發送 API 請求
    fakeAPICall({
      action: actionName,
      store: store.$id,
      timestamp: new Date(),
    });
  };

  // 3. 每次 store 的 state 變化時，將其保存到 localStorage 中
  store.$subscribe((mutation, state) => {
    console.log("訂閱部分");    
    console.log(`Mutation: ${mutation.type}`);
    localStorage.setItem(`${store.$id}-state`, JSON.stringify(state));
  });

  // 返回需要添加到 store 的屬性
  return {
    user, // 讓 user 成為每個 store 的屬性
  };
}

// 模擬 API 請求
function fakeAPICall(data) {
  console.log("Sending data to API...", data);
}
