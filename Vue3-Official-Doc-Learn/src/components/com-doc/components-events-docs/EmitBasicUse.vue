<template><!-- EmitBasicUse.vue -->
    <button @click="emitEventToParent">在子組件觸發父組件自訂事件</button>
</template>
<script setup>
import { defineEmits } from 'vue';
// 定義要發出的事件
const emit = defineEmits(['childEvent']);
// 方法：觸發父組件事件
// const emitEventToParent = () => { emit('childEvent'); };//兩者一樣
function emitEventToParent() {
    emit('childEvent');
}
</script>
