<script setup>
import AppDirective from "@/components/com-doc/custom-directives-docs/Directive.vue"
const vDemo = {
    mounted(el) {
        el.style.border = '2px solid red';
    }
};
</script>
<template>
    <AppDirective v-demo />
</template>