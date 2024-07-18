<script>
import RefUse from "@/components/op-doc/template-refs-doc/Ref-Basic.vue"
import RefFunction from "@/components/op-doc/template-refs-doc/Ref-Function.vue"
import RefComponent from "@/components/op-doc/template-refs-doc/Ref-Component.vue"
export default {
    components: { RefUse, RefFunction, RefComponent, },
    data() {
        return {
        };
    },
    methods: {
        accessChild() {
            // 透過 ref 訪問子組件
            console.log(this.$refs.childRef.publicData); // 可以訪問到公共數據
            this.$refs.childRef.publicMethod(); // 可以執行子組件的公共方法
            // 下面這行會報錯，因為 privateData 是私有屬性，無法訪問
            console.log(this.$refs.childRef.privateData);
            // 同樣，下面這行也會報錯，因為 privateMethod 是私有方法，無法執行
            this.$refs.childRef.privateMethod();
        }
    }
}
</script>
<template>
    Template Refs（模板引用）
    <RefUse></RefUse>
    <hr>
    <RefFunction></RefFunction>
    <hr>
    <RefComponent ref="childRef" />
    <button @click="accessChild">訪問子組件</button>
</template>