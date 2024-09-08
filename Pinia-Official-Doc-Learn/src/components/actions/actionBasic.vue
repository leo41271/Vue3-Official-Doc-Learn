<script setup>// actionBasic.vue
import { useActionBasicStore } from '@/stores/actions/actionBasic';
const store = useActionBasicStore();
store.increment();
store.increment();
</script>
<template>
    store.count {{ store.count }}
</template>