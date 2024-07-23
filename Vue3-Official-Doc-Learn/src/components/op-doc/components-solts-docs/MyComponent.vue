<script>// <!-- MyComponent.vue -->
export default {
    data() {
        return { greetingMessage: 'hello' }
    }
}
</script>
<template>
    <div>
        <slot :text="greetingMessage" :count="1"></slot>
    </div>
</template>