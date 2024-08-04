<template>
    <div style="border: 1px solid red;">
        <!-- <button @click="show = !show">點我打開視窗</button>@@@ -->
        <div style="border: black solid 1px;">
            <!-- <dynamicModel v-if="show" :data :callAPI :path  />@@@ -->
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
const dynamicPath = ref('')
const data = ref({})
const callAPI = ref('')
onMounted(() => {
    console.log(props.path + "AsyncDispatch 路徑");
    dynamicPath.value = './async-components-sets/' + props.path + '.vue' //  `./${XXX.value}.vue`
    // 如果有其他路徑 使用 @ (從 src 目錄開始)
    data.value = props.formData
    callAPI.value = props.optionAPI
})

const dynamicModel = defineAsyncComponent({
    loader: () =>
        new Promise(resolve => {
            // setTimeout(() => { resolve(import(/* @vite-ignore */ `${newPath}`)); }, 1000); 
            setTimeout(() => { resolve(import(/* @vite-ignore */ dynamicPath.value)); }, 1000);
            // import(/* @vite-ignore */ dynamicPath.value)); 使用忽略警告 將無法在 F12 Network 看到呼叫組件的資料 。 不確定
            // Vite 的動態導入功能有限制，主要是因為 Rollup（Vite 的打包器）對於動態路徑的解析能力有限。
            // 如果你確定動態導入的路徑在構建過程中是安全的，你可以使用 /* @vite-ignore */ 注釋來告訴 Vite 忽略這個警告。
        }),
    loadingComponent: LoadingComponent,// 靜態載入 (於 network 下 將會是一個request)
    errorComponent: ErrorComponent, // 靜態載入 (於 network 下 將會是一個request)
    delay: 0, // 預設200
    timeout: 10000 //若為2000 兩秒時會先顯示 Error.vue 的內容 而在後續 3秒後API 收到resolve 後則再顯示 LazyLoad.vue 的正確內容
});
// const show = ref(false);@@@
</script>