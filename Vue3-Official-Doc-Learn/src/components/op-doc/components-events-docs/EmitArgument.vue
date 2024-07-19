<template><!-- EmitArgument.vue -->
    <button @click="$emit('increaseBy', 1)">
        <slot>加1大小</slot>
    </button>
</template>
<script>
</script>