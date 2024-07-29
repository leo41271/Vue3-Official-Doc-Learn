<script setup>// ComponentProps.vue
const props = defineProps(['title'])
console.log(props.title)
console.log(props)
</script>
<template>
    title: {{ title }} <br>
</template>