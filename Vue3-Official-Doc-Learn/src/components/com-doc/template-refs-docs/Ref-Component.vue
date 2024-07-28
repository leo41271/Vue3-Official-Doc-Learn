<template><!-- Ref-Component.vue -->
    <div>
        <p>public :{{ publicData }}。<br> private : {{ privateData }}</p>
        <button @click="publicMethod">執行公共方法</button>
        <button @click="privateMethod">執行私有方法</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';

// 公共數據和私有數據
const publicData = ref('這是子組件的公共數據');
const privateData = ref('這是子組件的私有數據');

// 公共方法和私有方法
const publicMethod = () => {
    alert('子組件的公共方法已執行！');
};

const privateMethod = () => {
    alert('這是子組件的私有方法，不應該被訪問！');
};

// 使用defineExpose來公開數據和方法
defineExpose({
    publicData,
    publicMethod
});
</script>
<!-- 多數情況下，應該先用標準的 props 和 emit -->

