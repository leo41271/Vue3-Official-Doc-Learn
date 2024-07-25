<template><!-- ComputedWritable.vue -->
    fullName :{{ fullName }} <br>
    firstName :{{ firstName }} <br>
    lastName :{{ lastName }} <br>
    <input type="text" id="" v-model="fullName" />
    <input type="text" id="" v-model="firstName" />
    <input type="text" id="" v-model="lastName" />
</template>
<script setup>
import { ref, computed } from 'vue'
const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed({
    get() { return firstName.value + ' ' + lastName.value },
    set(newValue) {
        [firstName.value, lastName.value] = newValue.split(' ') // 解構語法
    }
})
</script>