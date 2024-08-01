<script setup>
import { defineProps, useAttrs } from 'vue';
import ListenerInheritance from './ListenerInheritance.vue';
// defineOptions({
//     inheritAttrs: false// true預設。false >ListenerInheritance 就不會有任何屬性
// })

const props = defineProps({
    noFall: String,
    blockFall: {
        type: Function,
        required: true,
    },
    inheritAttrsBool: {
        type: Boolean,
        default: true,
    },
});

// 獲取屬性 (包括事件)
const attrs = useAttrs();

// 定義方法 show
const show = () => {
    console.log("外層: ", attrs, "noFall:", props.noFall);
    // 檢查是否有 onClickGG 屬性，如果有則調用
    if (attrs.onClickGG) attrs.onClickGG(" 外層"); 
    // 調用傳遞進來的 blockFall 函數
    props.blockFall('外層');
    // 調用傳遞進來的 onClick 事件
    if (attrs.onClick) attrs.onClick(true); 
    console.log(attrs['test-a']);
};
</script>
<template>
    <!-- ListenerInheritance 基礎必要功能-->
    <!-- RenderListenerInheritance 專注於其他次要功能 -->
    <ListenerInheritance @click="show" @innerNoBlock="blockFall" style="font-style: italic; color: red;">
        <slot></slot>
    </ListenerInheritance>
</template>