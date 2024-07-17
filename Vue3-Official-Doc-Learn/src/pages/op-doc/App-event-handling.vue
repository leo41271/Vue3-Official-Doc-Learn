<script>
import EventArgument from '@/components/op-doc/event-handling-docs/Event-Argument.vue'
import EventModifiers from '@/components/op-doc/event-handling-docs/Event-Modifiers.vue'

export default {
    components: { EventArgument, EventModifiers, },
}
</script>
<template>
    Event Handling <br>
    v-on:click="handler" 兩邊一樣 @click="handler" <br>
    其他看 Try it in the Playground <br>
    <hr>
    <EventArgument></EventArgument>
    <hr>
    <EventModifiers></EventModifiers>
    <hr>
    Key Modifiers 後略 https://cn.vuejs.org/guide/essentials/event-handling.html#key-modifiers
    <hr>
</template>