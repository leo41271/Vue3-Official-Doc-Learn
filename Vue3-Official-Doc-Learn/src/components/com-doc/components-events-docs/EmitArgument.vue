<template><!-- EmitArgument.vue -->
    <button @click="emitIncreaseBy">
        <slot>加1大小</slot>
    </button>
</template>
<script setup>
import { defineEmits } from 'vue';
// 定義要發出的事件
const emit = defineEmits(['increaseBy']);
// 方法：發出增加數量的事件
const emitIncreaseBy = () => {
    emit('increaseBy', 1);
};
</script>
<!-- <template>
    <button @click="$emit('increaseBy', 1)">
        <slot>加1大小</slot>
    </button>
</template>
<script>
</script> -->