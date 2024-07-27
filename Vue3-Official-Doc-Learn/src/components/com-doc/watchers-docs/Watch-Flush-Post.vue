<template><!-- Watch-Flush-Post.vue -->
    <!-- Callback Flush Timing <br>
    預設情況下，偵聽器回呼會在父元件更新 (如有) 之後、所屬元件的 DOM 更新之前被調用，<br>
    在偵聽器回呼中存取所屬元件的 DOM，那麼 DOM 將處於更新前的狀態。<br>
    Post Watchers: 取得更新後的。<br> -->
    <p>Counter: {{ counter1 }} noPost</p>
    <span>Counter: {{ counter2 }} post</span>
    <button @click="increment">Increment</button>
</template>
<script setup>
import { ref, watch, watchEffect, watchPostEffect } from 'vue';
const counter1 = ref(0);
const counter2 = ref(0);
const increment = () => {
    counter1.value++;
    counter2.value++;
};

watch(counter1, (newValue, oldValue) => {
    console.log('Watcher triggered:', newValue);
    console.log('DOM updated:', document.querySelector('p').textContent);
});
watch(counter2, (newValue, oldValue) => {
    console.log('Watcher triggered (flush: post):', newValue);
    console.log('DOM updated (flush: post):', document.querySelector('span').textContent);// 記得把其他範例組件註解調讓他能好好抓到正確DOM
}, { flush: 'post' }); // 使用 'post' 選項，確保在 Vue 更新 DOM 後才觸發 watcher 回調

// 三者相同
// watch(source, callback, {
//     flush: 'post'
// })
// watchEffect(callback, {
//     flush: 'post'
// })
// watchPostEffect(() => {
// 
// })
</script>
