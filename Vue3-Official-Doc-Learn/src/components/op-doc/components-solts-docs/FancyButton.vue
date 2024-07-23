<template><!-- FancyButton.vue -->
    <button class="fancy-btn">
        <slot /> <!-- slot outlet -->
    </button>
</template>
<style>
.fancy-btn {
    color: #fff;
    background: red;
    border-radius: 8px;
    cursor: pointer;
}
</style>