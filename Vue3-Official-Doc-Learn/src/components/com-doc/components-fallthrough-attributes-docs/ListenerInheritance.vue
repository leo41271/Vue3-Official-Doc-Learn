<template>
    <button @click="gg()">
        <slot></slot>自製按鈕
    </button>
</template>
<script setup>
import { defineEmits, useAttrs } from 'vue';
// 定義可以發出的事件
const emit = defineEmits(['innerNoBlock']);
// 獲取所有屬性（包含事件）
const attrs = useAttrs();
// 定義方法 gg
const gg = () => {
    console.log("內層", attrs); // attrs 包含所有透傳下來的屬性
    // 檢查是否有 onClickGG 屬性，如果有則調用
    if (attrs.onClickGG) attrs.onClickGG(" 內層"); 
    // 發出自定義事件 innerNoBlock//RenderList範例才使用的。
    emit('innerNoBlock', "內層 要用必須使用 emit");
};
</script>