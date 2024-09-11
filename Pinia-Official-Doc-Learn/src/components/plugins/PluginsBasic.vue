<script setup>
import { usePlugInStoreStore } from '@/stores/plugins/plugInsStore';
import { useCounterStore } from '@/stores/counter';
const store = usePlugInStoreStore()
const storeCount = useCounterStore()
console.log(store.secret)
console.log(storeCount.secret)
</script>
<template>
    <div>
        {{ store.secret }} <br> {{ storeCount.secret }}
    </div>
</template>