<template><!-- Watch-Stop.vue -->
    <input v-model="data" placeholder="输入一些内容" />
    <p>data : {{ data }}</p>
    <button @click="stopWatcher">stop Watch</button>
</template>
<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
const data = ref('');
let unwatch; // 可以隨便命名 (op api 也可以改名字)

const handleFooChange = (newValue, oldValue) => {
    console.log(oldValue, '=>', newValue);
};
const stopWatcher = () => {
    if (unwatch) unwatch();
    // 或是在最後生命週期 鉤子 方法 時給去掉 unmounted 之類 (組件卸载時)
};
onMounted(() => {        // 創建一個觀察者
    unwatch = watch(data, handleFooChange);
});
onUnmounted(() => {
    if (unwatch) {
        unwatch(); // 最好是在組件卸载時 // 清除掉防抖計時器 要有好習慣
    }
});
// 要殺掉 監聽器 請用這兩位 watch 或 watchEffect 。 本質上會用手動停止的狀況很少
// 可能出現的情境: GAME diablo3turbo 、 爐石記牌器。
</script>