<script setup>// async.vue
import { useKey } from '@/composables/Key.js';
const { key, getTsunamiurl } = useKey;
import { useActionAsynchronousStore } from '@/stores/actions/actionAsynchronous';
const store = useActionAsynchronousStore()
store.getTsunamiAPI(key, getTsunamiurl)
</script>
<template>
    {{ store.error }}
    {{ store.data }}
</template>