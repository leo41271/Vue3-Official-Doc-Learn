<script setup>// gettersBasic.vue
import { useCounterTSStore } from '@/stores/getters/counterTS'
import { useCounterInJSStore } from '@/stores/getters/counterInJS.js'
const store = useCounterInJSStore()
const storeTS = useCounterTSStore()
</script>
<template>
    ts檔案
    <p>count {{ storeTS.count }}</p>
    <p>doubleCount {{ storeTS.doubleCount }}</p>
    <p>doublePlusOne {{ storeTS.doublePlusOne }}</p>
    js檔案
    <p>count {{ store.count }}</p>
    <p>doubleCount {{ store.doubleCount }}</p>
    <p>doublePlusOne {{ store.doublePlusOne }}</p>
    <p>doublePlusFiveUseJSDoc {{ store.doublePlusFiveUseJSDoc }}</p>
</template>