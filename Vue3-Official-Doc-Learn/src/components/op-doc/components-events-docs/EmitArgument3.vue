<template><!-- EmitArgument3.vue -->
    <button @click="$emit('emitMultiArgument', fontSizeN2, fontColor, fontWeight)">
        <slot>自訂大小顏色粗細</slot>
    </button>
</template>
<script>
export default {
    props: {
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
            // default: "normal", // bold
        },
    },
}
</script>