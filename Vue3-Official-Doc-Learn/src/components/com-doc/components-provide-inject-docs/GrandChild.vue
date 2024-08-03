<script setup>// GrandChild.vue
import { inject } from 'vue'

const basicUse = inject('basicUse')
//若为空则使用提供的函数类型的默认值
const defaultValue = inject('useDefault', '改變預設值')
defaultValue.value += 1;

const warning = inject('warning') // 注入不存在的 產生警告
const defaultV = inject('default', '沒匹配祖先的提供 預設值')

// 部分狀況預設值可能會由 函式 或初始化一個class 取得
// 當注入的鍵不存在再生成預設值，避免不必要的計算或副作用，直到實際需要使用默認值時才進行計算
// 節省資源與性能。ex 沒有值時 重新拿取API
const injectedValue = inject('key', () => generateDefaultValue(), true);
function generateDefaultValue() {
    // console.log('正在生成默認值...');
    return Math.floor(Math.random() * 100); // 假設這是一個昂貴的計算
}

const { location, updateLocation } = inject('location')

const paraFunctionInject = inject('useParafunction');
console.log("paraFunctionInject", paraFunctionInject(2, 3));

const countReadOnly = inject('read-only-count')
// countReadOnly++;// 在這裡使用會報錯

// in injector component
import { myInjectionKey } from './injectionKey/Keys'
const injected = inject(myInjectionKey)
const sameName = inject('sameName');
const { message: messageInject, message, sameName: reName } = injected;
</script>

<template>
    <div style="border: 1px solid salmon">
        孫子組件
        <hr>
        basicUse : {{ basicUse }} <br>
        defaultValue : {{ defaultValue }} <br>
        祖先沒提供則警告(runtime warning): {{ warning }} <br>
        defaultV : {{ defaultV }} <br>

        <p v-if="injectedValue">注入的值為：{{ injectedValue }}</p>

        <button @click="updateLocation">location :{{ location }}</button> <br>
        paraFunctionInject : {{ paraFunctionInject }}。paraFunctionInject(2,3) : {{ paraFunctionInject(2,3) }} <br>
        countReadOnly: {{ countReadOnly }} <br>
        <hr>
        {{ injected.message }}、
        {{ injected.defaultValue }}、
        {{ injected.location }}、
        {{ injected.countReadOnly }}、
        **{{ messageInject }} , {{ message }}。 兩者同值不同變數名**、
        **{{ sameName }} {{ reName }}。 否則沒重新命名紅底線**
    </div>
</template>