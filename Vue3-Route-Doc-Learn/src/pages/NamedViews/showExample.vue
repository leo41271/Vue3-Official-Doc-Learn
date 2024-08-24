<script setup>
import NamedViews from '@/pages/NamedViews/NamedViews.vue';
import NestedNamedViews from '@/pages/NamedViews/NestedNamedViews.vue';
import { ref } from 'vue';
const show = ref(true)
</script>
<template>
    <button @click="show = !show">換另一個小節範例</button> <br>
    <NamedViews v-if="show"></NamedViews>
    <NestedNamedViews v-else="show"></NestedNamedViews>
</template>