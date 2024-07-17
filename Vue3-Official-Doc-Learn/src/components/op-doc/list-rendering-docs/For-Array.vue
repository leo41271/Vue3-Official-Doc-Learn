<script>
export default {
    data() {
        return {
            numbers: [1, 2, 3, 4, 5],
            sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]],
            items: [
                { id: 1, name: 'Apple' },
                { id: 2, name: 'Banana' },
                { id: 3, name: 'Cherry' },
                { id: 4, name: 'Dark' },
            ]
        }
    },
    computed: {
        evenNumbers() {
            return this.numbers.filter(n => n % 2 === 0).reverse()
        },
        sortedItems() {
            return [...this.items].sort((a, b) => a.name.localeCompare(b.name));
        },
        reversedItems() {
            return [...this.items].reverse();
        }
    },
    methods: {
        even(data) {
            return data.filter(number => number % 2 === 0)
        },
    }
}
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