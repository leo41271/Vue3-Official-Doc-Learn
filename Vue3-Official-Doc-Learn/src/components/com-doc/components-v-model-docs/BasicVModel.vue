<script setup>// BasicVModel.vue
const model = defineModel() // 回傳一個ref
// 以下舊版 上面一行 與下兩行完全同等
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
// 其他defineModel() 之相關宣告 defineModel('count', { type: Number, default: 0 }) 諸如此類參看API
model.value += "1" // .value parent的v-model 兩者為同步 子組件更新父組件對應值也會更新
</script>

<template>
    <input v-model="model">
    <!-- 舊版 -->
    <input :value="props.modelValue" @input="emit('update:modelValue', $event.target.value)" />
</template>