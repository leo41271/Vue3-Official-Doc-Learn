<template><!-- Watch-Eager.vue -->
    <!-- 首次数据初始化，并不会触发watch -->
    watch 預設是 lazy (資料有變動才會呼叫)<br>
    部分狀況如 拿取(fetch)初始資料 ，而相關資料又變動時再拿取一次。 <br>
    eager後: {{ eagerData }} <br> 沒eager前長這樣: {{ eagerOri }} <br>
    一般後: {{ data }} <br> 一般沒eager前長這樣: {{ dataOri }}
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
const eagerData = ref("eager初始資料");
const eagerOri = ref("eager初始資料");
const data = ref("一般監聽原始");
const dataOri = ref("一般監聽原始");

watch(
    eagerData,
    (newValue, oldValue) => {
        if (newValue === "eager初始資料") {
            eagerData.value = "eager 觸發"; // 代替 re-fetch 一次
        }
    },
    { immediate: true } // 啟用 Eager Watcher，立即觸發回調函數
);
watch(data, (newV, oldV) => {
    if (newV === "一般監聽原始") { data.value = "一般的有變動到 實際不會"; }
});
onMounted(() => {
    console.log('mounted 的console', eagerData.value);
});
</script>
