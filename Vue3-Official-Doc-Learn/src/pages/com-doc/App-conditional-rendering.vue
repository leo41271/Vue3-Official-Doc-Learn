<script setup>
import { ref } from 'vue';
const ok = ref(true)
const ok2 = ref(false)
</script>
<template>
    < template> 這東西將不會顯示 (console)
        <template v-if="ok">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </template>
        <template v-if="ok2">
            <h1>Title</h1>
            <p v-if="ok">Paragraph 1</p>
            <p>Paragraph 2</p>
        </template>
</template>
<style scoped></style>