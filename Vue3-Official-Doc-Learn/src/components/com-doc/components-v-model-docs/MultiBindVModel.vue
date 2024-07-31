<script setup>// MultiBindVModel.vue
const firstName = defineModel('firstName')
const lastName = defineModel('lastName')

defineProps({ firstName2: String, lastName2: String })
defineEmits(['update:firstName2', 'update:lastName2'])
</script>

<template>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
    <!-- 舊版 -->
    <input type="text" :value="firstName2" @input="$emit('update:firstName2', $event.target.value)" />
    <input type="text" :value="lastName2" @input="$emit('update:lastName2', $event.target.value)" />
</template>