<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
counter.count++
counter.$patch({ count: counter.count + 1 }) // 自動補全！ ✨
counter.increment() // 或使用 action 代替
</script>
<template>
    <div>Current Count: {{ counter.count }}</div><!-- 直接從 store 中訪問 state -->
</template>