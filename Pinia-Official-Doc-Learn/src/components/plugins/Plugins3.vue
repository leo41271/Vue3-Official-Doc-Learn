<script setup>
import { usePlugInStoreStore } from '@/stores/plugins/plugInsStore';
import { ref } from 'vue';
const store = usePlugInStoreStore()
</script>
<template>
    {{ store.user.name }}
    {{ store.user.roles }}
    <button @click="store.logAction">{{ store.count }}</button>
    <!-- 不過在這裡測試看起來還是有響應性 -->
</template>