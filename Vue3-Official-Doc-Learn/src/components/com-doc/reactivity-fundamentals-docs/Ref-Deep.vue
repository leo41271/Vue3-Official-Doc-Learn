<template><!-- Ref-Deep.vue -->
    {{ obj }} <br><button @click="mutateDeeply">增加深層值</button>
</template>
<script setup>
import { ref } from 'vue'
const obj = ref({
    nested: { count: 0 },
    arr: ['foo', 'bar']
})
function mutateDeeply() {
    // these will work as expected.
    obj.value.nested.count++
    obj.value.arr.push('baz')
    console.log(obj.value);
}
</script>