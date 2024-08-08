<template>
    修飾符別名一起使用
    <ChildComponent v-model.trim="text" v-model:count.round="num1" />
    <p>父組件接收到的文本：{{ text }}</p>
    <p>父組件接收到的數字：{{ num1 }}</p>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildGet.vue';

const text = ref('');
const num1 = ref(12);
</script>
