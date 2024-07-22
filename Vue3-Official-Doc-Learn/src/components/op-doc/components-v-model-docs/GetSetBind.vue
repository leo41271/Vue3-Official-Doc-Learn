<script>//<!--GetSetBind.vue -->
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    computed: {
        value: { // value可隨便取名 va1lue rrr都可
            get() { return this.modelValue },
            set(changeValue) { this.$emit('update:modelValue', changeValue); }
        }
    }
}
</script>

<template>
    <input v-model="value" />
</template>