<script setup>
import { useCounterTSStore } from '@/stores/definingAStore/counter.ts'
import { useCounterStore } from '@/stores/definingAStore/counter.js'
const store = useCounterStore() // 因於此先宣告 > 所以值先豎立了 > 即 25
const storeTS = useCounterTSStore() // 如果此行先宣告在上面 > 則會 99

import { storeToRefs } from 'pinia';
const { name, doubleCount } = storeToRefs(store)
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
    <hr>
    {{ name }} 。 {{ doubleCount }}
</template>