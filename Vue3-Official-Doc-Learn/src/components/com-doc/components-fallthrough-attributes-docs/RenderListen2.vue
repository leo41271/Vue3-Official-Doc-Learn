<script setup>
import { defineProps, useAttrs } from 'vue';
import ListenerInheritance from './ListenerInheritance.vue';

// 定義 props
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
// defineOptions({
//     // inheritAttrs: props.inheritAttrsBool// comAPI下做不到如opAPI那樣設置//cannot reference locally declared variables...
// })
const attrs = useAttrs();// 獲取 $attrs

// 定義 show 方法
const show = () => {
    console.log("外層 attrs ", attrs, "noFall:", props.noFall);
    if (attrs.onClickGG) attrs.onClickGG(" 外層");
    props.blockFall('外層');
};
</script>
<template>
    <div class="other">
        <ListenerInheritance @click="show" @innerNoBlock="blockFall" style="font-style: italic; color: red;"
            v-bind="inheritAttrsBool ? attrs : {}">
            <!-- 注意這裡和opAPI不一樣只能透過判別傳值 -->
            <slot></slot>
        </ListenerInheritance>
    </div>
</template>