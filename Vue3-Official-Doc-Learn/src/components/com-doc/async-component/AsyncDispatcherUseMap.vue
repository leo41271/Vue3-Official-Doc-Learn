<template>
    <div style="border: 1px solid pink;">
        <div style="border: green solid 1px;">
            <dynamicModel :data :callAPI :path />
        </div>
    </div>
</template>
<script setup>
import { ref, defineAsyncComponent, defineProps, onMounted } from 'vue';
import ErrorComponent from './Error.vue';
import LoadingComponent from './Loading.vue';
const props = defineProps({
    optionAPI: { type: String, default: "" }, // if have call api in async component when onMounted <<-這是假設性模擬情境
    formData: { type: Object, default: {}, },
    path: { type: String, default: "NoSetAsyncComponent", },
});
const data = ref({})
const callAPI = ref('')
onMounted(() => {
    // 如果有其他路徑 使用 @ (從 src 目錄開始)
    data.value = props.formData
    callAPI.value = props.optionAPI
})
const componentMap = {
    'OneFuncComponent': () => import('./async-components-sets/OneFuncComponent.vue'),
    'TwoFuncComponent': () => import('./async-components-sets/TwoFuncComponent.vue'),
    'ThreeFuncComponent': () => import('./async-components-sets/ThreeFuncComponent.vue'),
    // 在這裡添加所有可能的組件
};
const dynamicModel = defineAsyncComponent({
    loader: () =>
        new Promise(resolve => {
            setTimeout(() => { resolve(componentMap[props.path]()); }, 1000);
        }),
    loadingComponent: LoadingComponent,// 靜態載入 (於 network 下 將會是一個request)
    errorComponent: ErrorComponent, // 靜態載入 (於 network 下 將會是一個request)
    delay: 0, // 預設200
    timeout: 10000 //若為2000 兩秒時會先顯示 Error.vue 的內容 而在後續 3秒後API 收到resolve 後則再顯示 LazyLoad.vue 的正確內容
});
</script>