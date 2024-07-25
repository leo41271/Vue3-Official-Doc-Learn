<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    title: String,
    id: Number
});
const emit = defineEmits(['remove']);
</script>
<template>
    <li>
        {{ props.title }} 、 {{ props.id }}
        <button @click="emit('remove')">Remove</button>
    </li>
</template>
<style scoped></style>
