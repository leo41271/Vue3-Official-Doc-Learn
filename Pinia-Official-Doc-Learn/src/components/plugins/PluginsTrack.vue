<script setup>
import { usePlugInStoreStore } from '@/stores/plugins/plugInsStore';
import { ref } from 'vue';
const store = usePlugInStoreStore()
</script>
<template>
    <button @click="store.hello++">{{store.hello}}++</button>
    <button @click="store.hello2++">{{store.hello2}}++</button>
    <button @click="store.hello3++">{{store.hello3}}++</button>
    <!-- 不過在這裡測試看起來還是有響應性 -->
</template>