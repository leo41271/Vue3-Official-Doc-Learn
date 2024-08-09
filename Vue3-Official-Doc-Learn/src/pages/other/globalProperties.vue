<script>
// 各種相關的全域使用練習範例 ， 如何在 setup下 拿取 global (globalProperties) 變數 
// how to use global properties in <script setup>
import { defineComponent, onBeforeMount } from 'vue';// 有點詭異的作法XD
let that = this;
export default defineComponent({
    beforeCreate() { that = this; },
    setup() {
        console.log("this line will not show in console.log")// 這邊將不會執行 因為下面有了 // 因其本身就是語法糖 vue會檢驗
    }
})
// 其他全域可使用為other global use :自定義指令directive、插件plugins、依賴注入Provide / inject、組件註冊Component Registration in previous part
</script>
<script setup>
import { getCurrentInstance, ref } from 'vue';
// getCurrentInstance 強烈不建議這樣達成
const cns = getCurrentInstance()
console.log(cns.appContext.config.globalProperties.myCustomProperty)
console.log(cns.appContext.config.globalProperties.myCustomMethod)

// 有點詭異的作法XD
var getFinalGlobal = ref({});
onBeforeMount(() => {
    console.log('that', that.myCustomProperty)
    getFinalGlobal.value = that.myCustomProperty;
})
console.log(getFinalGlobal)
</script>
<template>
    {{ myCustomProperty }} <br>
    {{ getFinalGlobal }}
</template>