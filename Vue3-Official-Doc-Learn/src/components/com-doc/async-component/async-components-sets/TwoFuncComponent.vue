<template>
    <div>
        這是 {{ props.path }} 組件 <br>
        callAPI : {{ props.callAPI }} <br>
        formData : {{ formData }} <br>
        進行B流程: randomData : {{ randomData }} <br>
        進行B流程: randomData : {{ randomData }} <br>
    </div>
</template>
<script setup>
import { ref, defineProps, onMounted } from 'vue';
const randomData = ref({})
const props = defineProps({
    callAPI: { type: String, default: "" },
    data: { type: Object, default: {}, },
    path: { type: String, default: "沒有給路徑 理論上不會有機會顯示這裡", },
});
const formData = ref(null)
onMounted(() => {
    if (!props.callAPI === "") {
        console.log("props.callAPI 呼叫 某某API 資料")
        // ...
    }
    formData.value = props.data
    businessLogicInit()
})
function businessLogicInit() {
    console.log(props.path + "頁面初始化");
    // ...
    randomData.value = Math.random()
}
</script>