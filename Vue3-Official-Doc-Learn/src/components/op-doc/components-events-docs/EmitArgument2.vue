<template><!-- EmitArgument2.vue -->
    <button @click="$emit('changeSize', fontSizeN)">
        大小加上 自訂
    </button>
</template>
<script>
export default {
    props: {
        fontSizeN: { type: Number, default: 1, }
    },
}
</script>