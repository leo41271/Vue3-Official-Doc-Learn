<template><!-- Async-Basic.vue -->
    最基本範例
    <div>
        <button @click="show = !show">點我打開視窗</button>
        <dynamicModel v-if="show" />
    </div>
</template>
<script setup>
import { ref, defineAsyncComponent } from 'vue';
import ErrorComponent from './Error.vue';
import LoadingComponent from './Loading.vue';
const dynamicModel = defineAsyncComponent({
    loader: () =>
        new Promise(resolve => {
            setTimeout(() => { resolve(import('./LazyLoad.vue')); }, 3000); // 模擬3秒的載入時間
        }),
    loadingComponent: LoadingComponent,// 靜態載入 (於 network 下 將會是一個request)
    errorComponent: ErrorComponent, // 靜態載入 (於 network 下 將會是一個request)
    delay: 0, // 預設200
    timeout: 10000 //若為2000 兩秒時會先顯示 Error.vue 的內容 而在後續 3秒後API 收到resolve 後則再顯示 LazyLoad.vue 的正確內容
});
const show = ref(false);
</script>