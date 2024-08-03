<script setup>// Child.vue
import GrandChild from './GrandChild.vue'
</script>

<template>
    <div style="border: 1px solid blueviolet">
        子組件部分<p>other thing</p>
        <GrandChild />
    </div>
</template>