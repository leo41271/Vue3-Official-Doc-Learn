// import Example from '@/components/something.vue';
// plugins/i18n.js
export default {
  install: (app, options) => {
    app.provide("i18n", options); // 注意放置位子
    // console.log(options);
    // inject a globally available $translate() method
    app.config.globalProperties.$translate = (key) => {
      // retrieve a nested property in `options`// using `key` as the path
      console.log("每當$translate 被調用 其內部都會運行一次");
      return key.split(".").reduce((o, i) => {
        if (o) return o[i];
      }, options);

      // app.component("example", Example);
      // app.directive("console-show",(el,binding)=>{ ... });
      // https://www.youtube.com/watch?v=ar1fJECxbyU
    };
  },
};
