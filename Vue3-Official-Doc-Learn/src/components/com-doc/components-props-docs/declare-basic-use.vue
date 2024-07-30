<template>use array : {{ fooUse }} <br> </template>
<script setup>// declare-basic-use.vue
import { ref, watch, onMounted } from 'vue';
const props = defineProps(['fooUse']);
// 注意傳遞給 defineProps() 的參數和提供給 props 選項的值是相同的，兩種聲明方式背後其實使用的都是 props 選項。
// 1. 替代方案：新建立一個區域變數
const changeFoo = ref(props.fooUse);// props之下可以呼叫到
onMounted(() => {
    console.log(props.fooUse);
});
</script>