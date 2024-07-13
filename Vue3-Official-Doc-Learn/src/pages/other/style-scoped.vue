<!-- App.vue -->
<template>
    <div id="app">
        <A />
    </div>
</template>
<!-- 從 introduction 章節部分的 基本觀念之一 -->
<script>
import A from '@/components/other/style-scoped-show/A.vue';

export default {
    name: 'App',
    components: {
        A,
    },
};
</script>
