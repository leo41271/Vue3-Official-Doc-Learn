<script setup>
import { ref, computed } from 'vue';

const numbers = ref([1, 2, 3, 4, 5]);
const sets = ref([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]);
const items = ref([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Dark' }
]);

const evenNumbers = computed(() => {
    return numbers.value.filter(n => n % 2 === 0).reverse();
});

const sortedItems = computed(() => {
    return [...items.value].sort((a, b) => a.name.localeCompare(b.name));
});

const reversedItems = computed(() => {
    return [...items.value].reverse();
});

const even = (data) => {
    return data.filter(number => number % 2 === 0);
};
</script>
<template>
    顯示偶數<li v-for="n in evenNumbers">{{ n }}</li>
    <ul v-for="numbers2 in sets">
        <li v-for="n in even(numbers2)">{{ n }}</li>
    </ul>
    reverse() 和 sort() 將變更原始陣列，計算函數中不應該這麼做。<br>
    數據的不一致：其他地方引用的數組也會被修改。<br>
    排序<li v-for="item in sortedItems" :key="item.id">{{ item.name }}</li>
    反轉<li v-for="item in reversedItems" :key="item.id">{{ item.name }}</li>
</template>