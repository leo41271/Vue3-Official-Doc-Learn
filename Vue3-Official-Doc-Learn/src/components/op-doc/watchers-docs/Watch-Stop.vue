<template><!-- Watch-Stop.vue -->
    <input v-model="data" placeholder="输入一些内容" />
    <p>data : {{ data }}</p>
    <button @click="stopWatcher">stop Watch</button>
</template>
<script>
export default {
    data() {
        return { data: '' };
    },
    created() {
        // 創建一個觀察者
        this.unwatch = this.$watch('data', this.handleFooChange);
    },
    methods: {
        handleFooChange(newValue, oldValue) {
            console.log(oldValue, '=>', newValue);
        },
        stopWatcher() {
            // console.log(this.unwatch()); // 這樣也會殺掉 監聽
            this.unwatch(); // 或是在最後生命週期 鉤子 方法 時給去掉 unmounted 之類 (組件卸载時)
        },
    },
    unmounted() {
        this.unwatch(); // 最好是在組件卸载時 // 清除掉防抖計時器
    },
};
</script>