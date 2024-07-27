<script setup>// Watch-Basic.vue
import { ref, watch } from 'vue';
const question = ref('');
const answer = ref('Questions usually contain a question mark. ;-)');
// 注意是看console 的監聽狀況  判斷? 的部分還是有一點邏輯錯誤的，不管它就好。
const loading = ref(false);
const getAnswer = async () => {
    loading.value = true;
    answer.value = 'Thinking...';
    try {
        const res = await fetch('https://yesno.wtf/api');
        answer.value = (await res.json()).answer;
    } catch (error) {
        answer.value = 'Error! Could not reach the API. ' + error;
    } finally {
        loading.value = false;
    }
};
watch(question, (newQuestion, oldQuestion) => {
    console.log('new', newQuestion, 'old', oldQuestion);
    if (newQuestion.includes('?')) {
        getAnswer();
    }
});
</script>
<template>
    檢查包含 ? 字元 <input v-model="question" :disabled="loading" />
    <p>{{ answer }}</p>
</template>