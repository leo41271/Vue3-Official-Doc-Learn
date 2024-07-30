<template>object declaration syntax :{{ title }} 。normalizedSize:{{ normalizedSize }}<br>
    作者的姓氏：{{ author.lastName }}
    作者的名字：{{ author.firstName }} <br>
</template>
<script setup>// declare-basic-use2.vue
import { ref, computed, onMounted } from 'vue';
import { Person } from './Person';
// 定義 Person 類 不可以定義在這。
// 因為 defineProps 的執行會在 setup 函數外部進行提升，所以無法直接使用在 setup 內部定義的 Person 類
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName; this.lastName = lastName;
//     }
// }

// 定義 Props
const props = defineProps({
    title: {
        type: String,
        default: "GGG",
    },
    // 以物件形式聲明的每個屬性，key 是 prop 的名稱(title、likes...)
    likes: Number,
    author: Person, // 使用 Person 類別作為 prop 的類型
    status: [String, Boolean], // 聲明為允許多種類型
});

const normalizedSize = computed(() => props.title.trim().toLowerCase());//對title改變值(另外用一個變數)
onMounted(() => {
    console.log(props.title, props.status);
});
</script>
