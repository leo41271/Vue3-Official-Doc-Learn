<script setup>// VModelArguments.vue
const title = defineModel('title')
// 舊版
const props = defineProps(['title2'])
const emit = defineEmits(['update:title2'])
</script>

<template>
    <input type="text" v-model="title" />
    <input :value="props.title2" @input="emit('update:title2', $event.target.value)" />
</template>