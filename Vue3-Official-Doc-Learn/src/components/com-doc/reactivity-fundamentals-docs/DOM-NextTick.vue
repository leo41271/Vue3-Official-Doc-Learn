<template><!-- DOM-NextTick.vue -->
    <div>
        <p>{{ message }}</p>
        <button @click="changeMessage">改變訊息</button>
        <button @click="changeMessage2">改變訊息(nextTick)</button>
    </div>
</template>

<script setup>
import { ref ,nextTick} from 'vue';
const message = ref('初始訊息');
function changeMessage() {
    message.value = '更新後的訊息';
    // 此時 DOM 還沒有被更新
    console.log(document.querySelector('p').textContent); // 印出 "初始訊息"
}
function changeMessage2() {
    message.value = 'nextTick 更新後的訊息';
    // 使用 nextTick() 等待 Vue 完成 DOM 更新
    nextTick(() => {
        // 此時 DOM 已經被更新
        console.log(document.querySelector('p').textContent); // 印出 "更新後的訊息"
    });
    // 寫內部，是為了確保在 DOM 更新完成後才執行相應的操作。Vue 的 DOM 更新是非同步的
}
// async function changeMessage2() { // async 用於定義一個函式為異步函式
//     message.value = 'nextTick 更新後的訊息';
//     await nextTick(); // await 用於暫停當前函數的執行，直到一個 Promise 物件解析為已完成（resolved）
//     console.log(document.querySelector('p').textContent);
// }
</script>
