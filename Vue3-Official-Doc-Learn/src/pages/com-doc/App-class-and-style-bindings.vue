<script setup>
import { ref } from 'vue'
import BasicClassUse from '@/components/com-doc/class-and-style-bindings/Basic-Class-Use.vue'
// import ClassComponent from '@/components/com-doc/class-and-style-bindings/Class-Component.vue'
// import BasicStyleUse from '@/components/com-doc/class-and-style-bindings/Basic-Style-Use.vue'
const isActive = ref(true)
</script>
<template>
    <BasicClassUse></BasicClassUse>
    <!-- <hr>
    只會渲染在 子組件只有 一個包裹元素 否則 aaa bbb 不會被套上渲染。 其他與 op API 完全一樣
    <ClassComponent class="aaa bbb"></ClassComponent>
    <ClassComponent :class="{ active: isActive }" />
    <hr>
    <BasicStyleUse></BasicStyleUse> -->
</template>