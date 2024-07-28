<template><!-- Ref-Function.vue -->
    <input :ref="setInputRef" placeholder="輸入一些文字">
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const inputRef = ref(null);
// 也可以綁定一個組件方法而不是內聯函數。
const setInputRef = (el) => {
    inputRef.value = el;
    if (el) console.log('元素已掛載：', el);
    else console.log('元素已卸載');
};

onMounted(() => {
    console.log('初始元素引用：', inputRef.value);
});
</script>

