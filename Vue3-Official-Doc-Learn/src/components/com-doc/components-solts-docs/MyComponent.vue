<script setup>// <!-- MyComponent.vue -->
import { ref } from 'vue';
const greetingMessage=ref('hello')
</script>
<template>
    <div>
        <slot :text="greetingMessage" :count="1"></slot>
    </div>
</template>