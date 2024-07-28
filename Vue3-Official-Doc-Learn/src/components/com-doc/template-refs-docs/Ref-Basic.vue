<script setup>// Ref-Basic.vue
import { ref, onMounted } from 'vue';

// 定義 reactive 變數
const list = ref([1, 2, 3]);
// 聲明一個 ref 來存放該元素的引用 // 必須和模板裡的 ref 同名
const input = ref(null);
const items = ref([]);

// 使用 onMounted hook 來訪問 DOM 節點
onMounted(() => {
    // Focus on the input element
    input.value.focus();
    console.log("input: ", input.value, "items: ", items.value);
});
</script>
<template>
    Accessing the Refs
    <input ref="input" />
    <ul>
        <li>(Refs inside v-for)Requires v3.2.25 or above</li>
        <li v-for="item in list" ref="items">{{ item }}</li>
        <li>ref 陣列不一定與來源陣列相同。</li>
    </ul>
    使用 setup() 要返回 ref 才能使用。 <br>
    組件掛載後才能訪問模板引用，直接訪問會是 null 。(因元素還不存在)
</template>