<script setup>// useOtherGetter.vue
import { useAccessOtherGetterStore } from '@/stores/getters/useOtherGetter'
const othStore = useAccessOtherGetterStore();
</script>
<template>
    othStore。。如下<br>{{ othStore }} <br><br>
    othStore.data。。如下<br>{{ othStore.data }}<br><br>
    othStore.otherGetter。。如下<br>{{ othStore.otherGetter }}<br><br>
</template>
