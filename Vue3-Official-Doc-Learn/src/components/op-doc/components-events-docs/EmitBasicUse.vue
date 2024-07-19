<template><!-- EmitBasicUse.vue -->
    <button @click="emitEventToParent">在子組件觸發父組件自訂事件</button>
</template>
<script>
export default {
    methods: {
        emitEventToParent() {
            this.$emit('childEvent');
        }
    }
}
</script>
