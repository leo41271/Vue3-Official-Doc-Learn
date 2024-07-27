<template><!-- Watch-One.vue -->
    3.4 版本以上才有
    <input type="text" v-model="data">
    {{ checkOne }}
</template>
<script setup>
import { ref, watch } from 'vue';

const data = ref("data ");
const checkOne = ref("data change");

watch(data, (newValue, oldValue) => {
    checkOne.value = newValue;
}, { /*immediate: false, deep: false, */ once: true });
</script>