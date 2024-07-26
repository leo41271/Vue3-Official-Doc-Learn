<script setup>
import { ref } from 'vue'
const name = ref('Vue.js')
function greet(event) {
    alert(`Hello ${name.value}!`)
    // `event` is the native DOM event
    // 方法事件處理器會自動接收原生 DOM 事件並觸發執行。
    // 通過被觸發事件的 event.target 訪問到該 DOM 元素。
    if (event) {
        alert(event.target.tagName)
    }
}
</script>
<template>
    <button @click="greet">Greet</button>
</template>