<script>
export default {
    props: ['title', 'id'],
    emits: ['remove']
}
</script>
<template>
    <li>
        {{ title }} 、 {{ id }}
        <button @click="$emit('remove')">Remove</button>
    </li>
</template>