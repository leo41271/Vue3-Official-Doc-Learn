<script>// Composition API style 
import ComputedBasic from '@/components/com-doc/computed-properties-docs/ComputedBasic.vue'
import ComputedWritable from '@/components/com-doc/computed-properties-docs/ComputedWritable.vue'

export default {
    components: { ComputedBasic, ComputedWritable, },
    data() {
        return {
        };
    },
}
</script>
<template>
    <ComputedBasic></ComputedBasic>
    <hr>
    <ComputedWritable></ComputedWritable>
</template>