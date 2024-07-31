<template><!-- EmitArgument2.vue -->
    <button @click="emitChangeSize">
        大小加上 自訂
    </button>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
// 定義 Props
const props = defineProps({
    fontSizeN: { type: Number, default: 1 }
});
// 定義要發出的事件
const emit = defineEmits(['changeSize']);
// 方法：發出改變大小的事件
const emitChangeSize = () => {
    emit('changeSize', props.fontSizeN);
};
</script>
