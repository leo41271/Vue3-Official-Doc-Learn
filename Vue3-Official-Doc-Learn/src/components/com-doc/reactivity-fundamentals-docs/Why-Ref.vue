<template><!-- Why-Ref.vue -->
    <div>
        普通變量 count: {{ count }} 。
        ref refCount: {{ refCount }} 。
        <button @click="incrementValues">增加數值</button> <br>
        普通變量無法追蹤所以沒變。 <br>
        (普通變量 count 的變化不會被響應式追蹤，函數只能獲取到 count 的當前值)
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
        let count = 0; // 定義普通變量
        const refCount = ref(0); // 定義 ref

        function incrementValues() { // 定義函數，分別更新普通變量和 ref 的值
            count += 1; // 增加普通變量的值
            refCount.value += 1; // 增加 ref 的值
            console.log('普通變量 count 在函數中的值：', count); //會跟著變
            console.log('ref refCount 在函數中的值：', refCount.value);
        }
        return { count, refCount, incrementValues };
    }
};
</script>
