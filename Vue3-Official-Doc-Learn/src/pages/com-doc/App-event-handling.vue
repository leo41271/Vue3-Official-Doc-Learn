<script setup>
import EventMethodHandlers from '@/components/com-doc/event-handling-docs/Event-Method-Handlers.vue'
import EventArgument from '@/components/com-doc/event-handling-docs/Event-Argument.vue'
import EventModifiers from '@/components/com-doc/event-handling-docs/Event-Modifiers.vue'
</script>
<template>
    Event Handling <br>
    v-on:click="handler" 兩邊一樣 @click="handler" <br>
    其他看 Try it in the Playground <br>
    <EventMethodHandlers />
    <hr>
    <EventArgument></EventArgument>
    <hr>
    <EventModifiers></EventModifiers>
    <hr>
    Key Modifiers 後略 https://cn.vuejs.org/guide/essentials/event-handling.html#key-modifiers
    <hr>
</template>