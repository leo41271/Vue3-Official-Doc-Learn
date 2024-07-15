<script>
import BasicClassUse from '@/components/op-doc/class-and-style-bindings/Basic-Class-Use.vue'
import ClassComponent from '@/components/op-doc/class-and-style-bindings/Class-Component.vue'
import BasicStyleUse from '@/components/op-doc/class-and-style-bindings/Basic-Style-Use.vue'
export default {
    data() {
        return {
            isActive: true
        }
    },
    components: {
        BasicClassUse,
        ClassComponent,
        BasicStyleUse,
    }
}
</script>
<template>
    <BasicClassUse></BasicClassUse>
    <hr>
    只會渲染在 子組件只有 一個包裹元素 否則 aaa bbb 不會被套上渲染
    <ClassComponent class="aaa bbb"></ClassComponent>
    <ClassComponent :class="{ active: isActive }" />
    <hr>
    <BasicStyleUse></BasicStyleUse>
</template>