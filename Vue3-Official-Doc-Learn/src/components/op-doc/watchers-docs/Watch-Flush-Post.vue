<template><!-- Watch-Flush-Post.vue -->
    <!-- Callback Flush Timing <br>
    預設情況下，偵聽器回呼會在父元件更新 (如有) 之後、所屬元件的 DOM 更新之前被調用，<br>
    在偵聽器回呼中存取所屬元件的 DOM，那麼 DOM 將處於更新前的狀態。<br>
    Post Watchers: 取得更新後的。<br> -->
    <p>Counter: {{ counter1 }} noPost</p>
    <span>Counter: {{ counter2 }} post</span>
    <button @click="increment">Increment</button>
</template>
<script>
export default {
    data() {
        return {
            counter1: 0,
            counter2: 0
        };
    },
    methods: {
        increment() {
            this.counter1++;
            this.counter2++;
        }
    },
    watch: {
        counter1(newValue, oldValue) {
            console.log('Watcher triggered:', newValue);
            console.log('DOM updated:', document.querySelector('p').textContent);
        },
        counter2: {
            handler(newValue, oldValue) {
                console.log('Watcher triggered (flush: post):', newValue);
                console.log('DOM updated (flush: post):', document.querySelector('span').textContent);
            },
            flush: 'post', // 使用 'post' 選項，確保在 Vue 更新 DOM 後才觸發 watcher 回調 
        }
    }
};
</script>
