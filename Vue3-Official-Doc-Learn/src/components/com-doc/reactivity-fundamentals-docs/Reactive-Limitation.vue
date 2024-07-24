<template><!-- Reactive-Limitation.vue -->
    state.count: {{ state.count }} 。
    <button @click="incrementCount">增加數值</button> <br>
    <button @click="resetState">執行 state=reactive({count:1}); 讓其失去響應性 </button>
    <hr>
    count2: {{ count2 }} 。<br>
    state2.count2: {{ state2.count2 }} 。<br>
    <button @click="incrementCount2(count2)">增加count2</button> <br>
    <button @click="incrementCount22(state2.count2)">增加state2.count2</button> <br>
</template>
<script setup>
import { reactive } from 'vue';
let state = reactive({ count: -1 });
// state = reactive({ count: 1 });// why 沒有丟失響應性?  因為畫面的初始化 事件循環還沒一次跑完(在同一次nextTik)。// 無效
// setTimeout(() => { state = reactive({ count: 1 }); }, 1);// 有效
// 上面的 ({ count: 0 }) 的引用將不再被追踪// (響應性連接已丟失！)
function incrementCount() {
    state.count += 1;
    console.log('在函數中的普通變數 count 的值：', state.count);
}
function resetState() { state = reactive({ count: 1 }); }

let state2 = reactive({ count2: 0 })
let { count2 } = state2; // 当解构时，count 已经与 state.count 断开连接
count2++; // 不会影响原始的 state2
function incrementCount2(value) { // count2 、 state2.count2 都失去響應性
    count2++;
    console.log('引數:', value, "count2", count2, "state2.count2", state2.count2);
}
function incrementCount22(value) { // 傳入整個物件保持響應性
    count2++;
    state2.count2++;
    console.log('引數:', value, "count2", count2, "state2.count2", state2.count2);
}
</script>
