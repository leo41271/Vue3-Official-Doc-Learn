<script>
import ListenerInheritance from './ListenerInheritance.vue'
export default {
    components: {
        ListenerInheritance
    },
    created() { },
    props: {
        noFall: String,
        blockFall: {
            type: Function,
            required: true
        },
        inheritAttrsBool: {
            type: Boolean,
            default: true,
        }
    },
    methods: {
        show() {
            console.log("外層: ", this.$attrs, "noFall:", this.noFall)
            this.$attrs.onClickGG(" 外層")
            // this.$attrs.blockFall() // this.$attrs.blockFall is not a function 因為已綁訂於 props
            this.blockFall('外層');
            this.$attrs.onClick(true)
            console.log(this.$attrs['test-a'])
        }
    },
    // inheritAttrs: false, // 當為true(預設) 時沒差 false 則 this.$attrs.onClickGG等 將會錯誤
}
</script>
<template>
    <!-- ListenerInheritance 基礎必要功能-->
    <!-- RenderListenerInheritance 專注於其他次要功能 -->
    <ListenerInheritance @click="show" @innerNoBlock="blockFall" style="font-style: italic; color: red;">
        <slot></slot>
    </ListenerInheritance>
</template>