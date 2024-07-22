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
            console.log("外層this.$attrs ", this.$attrs, "noFall:", this.noFall)
            this.$attrs.onClickGG(" 外層")
            this.blockFall('外層');
        }
    },
    // 禁用屬性繼承 // inheritAttrs是在組件實例創建之前設置的 不能用this
    // inheritAttrs: true, // 當為true 時沒差 false 則 this.$attrs.onClickGG等 將會錯誤
    beforeCreate() {
        this.$options.inheritAttrs = this.inheritAttrsBool; // 根據 props 動態設置 inheritAttrs
    }
}
</script>
<template>
    <div class="other">
        <!-- <div v-bind="inheritAttrsBool ? null : $attrs"> -->
        <ListenerInheritance @click="show" @innerNoBlock="blockFall" style="font-style: italic; color: red;"
            v-bind="inheritAttrsBool ? null : $attrs">
            <slot></slot>
        </ListenerInheritance>
    </div>
</template>