<script setup>
import { ref, onMounted } from "vue";
import RefUse from "@/components/com-doc/template-refs-docs/Ref-Basic.vue"
import RefFunction from "@/components/com-doc/template-refs-docs/Ref-Function.vue"
import RefComponent from "@/components/com-doc/template-refs-docs/Ref-Component.vue"
const childRef = ref(null)
onMounted(() => {
    console.log("publicMethod:\n", childRef.value.publicMethod, "\npublicData:\n", childRef.value.publicData)
})
function accessChild(params) {
    // 透過 ref 訪問子組件
    console.log(childRef.value.publicData); // 可以訪問到公共數據
    childRef.value.publicMethod(); // 可以執行子組件的公共方法
    // 下面這行會報錯，因為 privateData 是私有屬性，無法訪問
    console.log(childRef.value.privateData);
    // 同樣，下面這行也會報錯，因為 privateMethod 是私有方法，無法執行
    childRef.value.privateMethod();
}
</script>
<template>
    Template Refs（模板引用）
    <RefUse></RefUse>
    <hr>
    <RefFunction></RefFunction>
    <hr>
    <RefComponent ref="childRef" />
    <button @click="accessChild">訪問子組件</button>。
</template>