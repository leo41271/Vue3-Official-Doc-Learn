<template><!-- DynamicSlotName.vue -->
    <div class="p1">
        <slot name="part1"></slot>
    </div>
    <div class="p2">
        <slot name="part2"></slot>
    </div>
    <div>
        <slot></slot>
    </div>
    <div class="p3">
        <slot name="part3"></slot>
    </div>
    <div class="p4">
        <slot name="part4"></slot>
    </div>
</template>
<style>
.p1 {
    color: green;
}
.p2 {
    color: yellow;
}
.p3 {
    color: blue;
}
.p4 {
    color: red;
}
</style>