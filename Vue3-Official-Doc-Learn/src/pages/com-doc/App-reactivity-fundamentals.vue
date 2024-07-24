<script>
// Composition API style 
import WhyRef from '@/components/com-doc/reactivity-fundamentals-docs/Why-Ref.vue'
import RefDeep from '@/components/com-doc/reactivity-fundamentals-docs/Ref-Deep.vue'
import DOMNextTick from '@/components/com-doc/reactivity-fundamentals-docs/DOM-NextTick.vue'
import Reactive from '@/components/com-doc/reactivity-fundamentals-docs/Reactive.vue'
import ReactiveLimitation from '@/components/com-doc/reactivity-fundamentals-docs/Reactive-Limitation.vue'
import RefDetial from '@/components/com-doc/reactivity-fundamentals-docs/Ref-Detial.vue'
export default {
    components: { WhyRef, RefDeep, DOMNextTick, Reactive, ReactiveLimitation, RefDetial },
}
/**
 * 只要將 <script> 改成 <script setup> 後 export default { ....這些組件都不用寫 } 。往後api部分將使用此方式
 */
</script>
<template>
    <WhyRef></WhyRef>
    <hr>
    <RefDeep></RefDeep>
    <hr>
    <DOMNextTick></DOMNextTick>
    <hr>
    <Reactive></Reactive>
    <hr>
    <ReactiveLimitation></ReactiveLimitation>
    <hr>
    <RefDetial></RefDetial>
</template>