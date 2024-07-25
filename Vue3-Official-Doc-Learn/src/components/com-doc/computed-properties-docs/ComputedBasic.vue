<template><!-- ComputedBasic.vue -->
    Has published books: {{ author.books.length > 0 ? 'Yes' : 'No' }} <br>
    publishedBooksMessage{{ publishedBooksMessage }} <br>
    publishedBooksMessage{{ publishedBooksMessage.value }} <br>
    returned value is a computed ref 返回。且 他是 auto-unwrapped 不用寫.value 在模板中
</template>
<script setup>
import { reactive, computed } from 'vue'
const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})
const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})
console.log( "pub...",publishedBooksMessage,"value pub...", publishedBooksMessage.value)
</script>