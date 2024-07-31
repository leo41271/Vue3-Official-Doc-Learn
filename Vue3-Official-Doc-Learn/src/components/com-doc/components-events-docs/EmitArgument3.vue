<template><!-- EmitArgument3.vue -->
    <button @click="emitMultiArgument">
        <slot>自訂大小顏色粗細</slot>
    </button>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
// 定義 Props
const props = defineProps({
    fontSizeN2: {
        type: Number,
        default: 1,
    },
    fontColor: {
        type: String,
        default: "#ff0000",
    },
    fontWeight: {
        type: String,
        default: "normal", // 默認值設置為 normal
    },
});
// 定義要發出的事件
const emit = defineEmits(['emitMultiArgument']);
// 方法：發出多個參數的事件
const emitMultiArgument = () => {
    emit('emitMultiArgument', props.fontSizeN2, props.fontColor, props.fontWeight);
};
</script>