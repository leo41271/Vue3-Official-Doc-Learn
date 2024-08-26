<!-- NewUser.vue -->
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    id: String,
})
</script>
<template>
    <div>
        New User {{ id }}
    </div>
</template>