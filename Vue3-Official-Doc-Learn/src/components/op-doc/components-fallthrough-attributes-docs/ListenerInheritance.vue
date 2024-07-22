<template>
    <button @click="gg()">
        <slot></slot>自製按鈕
    </button>
</template>
<script>
export default {
    emits: ['innerNoBlock'],
    methods: {
        gg() {
            console.log("內層", this.$attrs) // 在多層之下傳遞 onClick 屬性 是一個陣列!包含透傳下來的每個組件 onClick事件
            if (this.$attrs.onClickGG) {
                this.$attrs.onClickGG(" 內層")
            }
            this.$emit('innerNoBlock', "內層 要用必須使用 emits")
        },
    },
}
</script>