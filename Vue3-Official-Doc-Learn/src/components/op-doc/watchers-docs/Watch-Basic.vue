<script>// Watch-Basic.vue
export default {
    data() {
        return {
            question: '',
            answer: 'Questions usually contain a question mark. ;-)',
            loading: false,
        }
    },
    watch: {
        question(newQuestion, oldQuestion) {
            console.log("new ", newQuestion, "old ", oldQuestion)
            if (newQuestion.includes('?')) { this.getAnswer() }
        }
    },
    methods: {
        async getAnswer() {
            this.loading = true
            this.answer = 'Thinking...'
            try {
                const res = await fetch('https://yesno.wtf/api')
                this.answer = (await res.json()).answer
            }
            catch (error) { this.answer = 'Error! Could not reach the API. ' + error }
            finally { this.loading = false }
        }
    }
}
</script>
<template>
    檢查包含 ? 字元 <input v-model="question" :disabled="loading" />
    <p>{{ answer }}</p>
</template>