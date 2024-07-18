<script>// <!-- BlogPost.vue -->
export default {
    props: ['title'],
    emits: ['enlarge-text']
}
</script>
<template>
    <p>{{ title }}</p>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
</template>