<script>
import ComputedBasic from '@/components/op-doc/computed-properties-docs/Computed-Basic.vue'
import ComputedWritable from '@/components/op-doc/computed-properties-docs/Computed-Writable.vue'

export default {
    components: { ComputedBasic, ComputedWritable, },
}
</script>
<template>
    Computed Properties <br>
    <ComputedBasic></ComputedBasic>
    <ComputedWritable></ComputedWritable>
    計算屬性 是 "衍生" 出來的 所以請更改其依賴之屬性，計算屬性為計算而生不用作他用(影響代碼維護理解)
</template>