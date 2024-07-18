<template><!-- Watch-Flush-Sync.vue -->
    <input type="text" v-model="message" placeholder="輸入訊息">
    訊息: {{ message }}
</template>
<script>
export default {
    data() {
        return { message: '111', count: 0 };
    },
    created() {
        // 在同一个事件循环中VUE会在最后才用data数据刷新DOM 
        this.message += 1;
        this.message += 1;
        this.message += 1;
    },
    watch: {
        message: {
            handler(newValue, oldValue) {
                this.count++;
                console.log(this.count, ' new :', newValue);
            },
            flush: 'sync', // 同時我們也知道在VUE中DOM的更新渲染是異步的 透過改成同步 count 能符合預期顯示3次。 建議只觀察布林值
            // https://juejin.cn/post/7095271649573863437
        }
    }
};
</script>
