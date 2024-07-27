<template><!-- Watch-Flush-Sync.vue -->
    <input type="text" v-model="message" placeholder="輸入訊息">
    訊息: {{ message }}
</template>
<script setup>
import { ref, watch, watchEffect, watchSyncEffect } from 'vue';
const message = ref('111');
const count = ref(0);
// message.value += 1;
// message.value += 1;
// message.value += 1; 要在watch 後面才行

watch(message, (newValue, oldValue) => {
    count.value++;
    console.log(count.value, ' new :', newValue);
}, { flush: 'sync' }); // 同時我們也知道在VUE中DOM的更新渲染是異步的 透過改成同步 count 能符合預期顯示3次。 建議只觀察布林值
// https://juejin.cn/post/7095271649573863437
// 在同一个事件循环中VUE会在最后才用data数据刷新DOM 
message.value += 1;
message.value += 1;
message.value += 1;

// 三者相同
// watch(source, callback, {
//     flush: 'sync'
// })
// watchEffect(callback, {
//     flush: 'sync'
// })
// watchSyncEffect(() => {
//     /* 在響應式數據變化時同步執行 */
// })
</script>
