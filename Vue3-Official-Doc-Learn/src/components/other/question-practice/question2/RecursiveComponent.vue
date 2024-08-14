<script setup>
import { ref } from 'vue'
import Tree from './Tree.vue'
const treeData = ref({
    name: 'My Tree',
    children: [
        { name: 'hello' },
        { name: 'world' },
        {
            name: 'child folder',
            children: [
                {
                    name: 'child folder',
                    children: [{ name: 'hello' }, { name: 'world' }]
                },
                { name: 'hello' },
                { name: 'world' },
                {
                    name: 'child folder',
                    children: [{ name: 'hello' }, { name: 'world' }]
                }
            ]
        }
    ]
})
</script>

<template>
    <ul><Tree class="item" :model="treeData"></Tree></ul>
</template>

<style>
.item {
    cursor: pointer;
    line-height: 1.5;
}

.bold {
    font-weight: bold;
}
</style>