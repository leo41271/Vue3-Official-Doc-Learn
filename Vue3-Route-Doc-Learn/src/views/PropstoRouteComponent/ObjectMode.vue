<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    newsletterPopup: Boolean
});
</script>

<template>
    <div>
        <h1>Promotion Page</h1>
        <p v-if="newsletterPopup">
            Thanks for subscribing to our newsletter! Enjoy this special promotion.
        </p>
        <p v-else>
            Welcome! Check out our latest promotions.
        </p>
    </div>
</template>
