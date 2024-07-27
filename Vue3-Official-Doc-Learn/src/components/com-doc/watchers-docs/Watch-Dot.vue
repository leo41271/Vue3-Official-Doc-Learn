<template><!-- Watch-Dot.vue -->
    <!-- com API 沒有 AAA.bbb 存取問題， 該範例當練習 -->
    <input type="text" v-model="userInfo.name">
    <input type="number" v-model="userInfo.age">
</template>
<script setup>
import { ref, computed, watch } from 'vue';
const userInfo = ref({ name: 'John', age: 25 });
const fullName = computed(() => {
    console.log("computed", userInfo.value.name);
    return userInfo.value.name;
});
watch(fullName, (newValue, oldValue) => {
    console.log('New name:', newValue);
});
watch(() => userInfo.value.age, (newValue, oldValue) => {
    if (newValue > 18) {
        alert('You are an adult!');
    }
});
</script>