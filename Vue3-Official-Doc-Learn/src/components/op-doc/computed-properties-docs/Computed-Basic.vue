<template><!-- Computed-Basic.vue -->
    計算屬性是根據其所依賴的 最後值進行快取(cached)，只在其依賴發生更改才重新計算 <br>
    原始數字：<input type="number" v-model="number">
    <p v-if="isEven">這是一個偶數。</p>
    <p v-else>這是一個奇數。</p>
    <p>計算後的結果(偶數*3 奇數*2)：{{ computedResult }}</p>
    {{ now }} <br>
    所以以Date.now()為依賴之屬性永遠不會更新， Date.now() 方法返回的是當前的時間戳。<br>
    (在不需要緩存的情況下，可以使用方法調用)

</template>
<script>
export default {
    data() {
        return { number: 5 };
    },
    computed: {
        isEven() { return this.number % 2 === 0; },
        computedResult() {
            if (this.isEven) { return this.number * 3; }
            else { return this.number * 2; }
        },
        now() {
            return Date.now();
        },
    }
};
</script>
