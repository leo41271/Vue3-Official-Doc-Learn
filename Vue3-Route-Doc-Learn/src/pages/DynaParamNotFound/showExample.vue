<script setup>
import DynamicRouteParams from '@/pages/DynaParamNotFound/DynamicRouteParams.vue';
import NotFoundRoute from '@/pages/DynaParamNotFound/NotFoundRoute.vue';
import { ref } from 'vue';
const show = ref(true)
</script>
<template>
    <button @click="show = !show">換另一個小節範例</button> <br>
    <DynamicRouteParams v-if="show"></DynamicRouteParams>
    <NotFoundRoute v-else="show"></NotFoundRoute>
</template>