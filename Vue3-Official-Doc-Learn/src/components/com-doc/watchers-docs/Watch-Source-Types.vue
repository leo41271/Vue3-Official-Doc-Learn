<template>
    <input v-model="x" /> <span>x: {{ x }}</span>。<br>
    <input v-model="y" /> <span>y: {{ y }}</span>。<br>
    <input type="number" v-model="obj.count" /> <span>count: {{ obj.count }}</span>。<br>
    count is even ? {{ evenOrOdd }} <br>
    奇偶數紀錄 {{ evenOrOddRecord }} <br>
</template>
<script setup>
import { ref, watch, reactive, computed } from 'vue';
const x = ref(0)
const y = ref(0)
const obj = reactive({ count: 0 })
// watch 監聽時 第一個參數可以有多種( ref 計算 reactive物件 getter函式 包含多個來源的陣列 )
// single ref
watch(x, (newX) => {
    console.log(`x is ${newX}`)
})
// getter
watch(() => x.value + y.value,
    (sum) => { console.log(`sum of x + y is: ${sum}`) }
)
// array of multiple sources
watch([x, () => y.value], ([newX, newY]) => {
    console.log(`x is ${newX} and y is ${newY}`)
})
watch(() => obj.count,/* obj.count 不能只寫這樣 */
    (count) => { console.log(`Count is: ${count}`) }
)
const evenOrOdd = computed(() => {
    return obj.count % 2 === 0 ? 'Yes' : 'No'
})
const evenOrOddRecord = ref('')
watch(evenOrOdd, (newCount) => {
    evenOrOddRecord.value += newCount; // += evenOrOdd.value;
    // evenOrOddRecord.value += evenOrOdd.value;
});
</script>