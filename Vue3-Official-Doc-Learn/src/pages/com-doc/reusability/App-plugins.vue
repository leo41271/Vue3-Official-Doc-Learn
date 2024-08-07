<script setup>
import { inject } from 'vue'
const i18n = inject('i18n')
console.log(i18n)
console.log(i18n.greetings.hello)

import { ref, getCurrentInstance } from 'vue';
const originalText = ref('');
const translatedText = ref('');
const translateInGoogle2 = inject('translateInGoogle');
const translateText = async () => {
    translatedText.value = await translateInGoogle2(originalText.value, 'zh-tw');
};
// 使用 getCurrentInstance 獲取全域方法
// const { proxy } = getCurrentInstance();//Vue3Doc已找不到
// const translateText = async () => {
// translatedText.value = await proxy.$translateInGoogle(originalText.value, 'zh-tw');//此用法少用，詳見後面練習的會提到。
// // $translateInGoogle is not defined，這是因為在 <script setup> 中，Vue 3 的 Composition API 無法直接訪問這些全域屬性。
// // 透過 getCurrentInstance() 來訪問 Vue 實例，然後從 globalProperties 中取得全域方法
// translatedText.value = await $translateInGoogle(originalText.value, 'zh-tw');//無法用
// https://github.com/vuejs/core/discussions/6731#discussioncomment-3747064
// };
</script>
<!-- <script>
export default {
    data() { return { originalText: '', translatedText: '', }; },
    methods: {
        async translateText() {
            try {
                // 假設 $translateInGoogle 是已經設置的全域方法
                this.translatedText = await this.$translateInGoogle(this.originalText, 'zh-tw');
            } catch (error) { console.error('Translation error:', error); }
        },
    },
};
</script> -->
<template>
    <h1>{{ $translate('greetings.hello') }}</h1>
    <hr>
    who I am. Thousands of words <br>
    <input type="text" v-model="originalText" placeholder="type your 原文:"></input>
    <p>翻譯: {{ translatedText }}</p>
    <button @click="translateText">翻譯成中文</button><br>
</template>