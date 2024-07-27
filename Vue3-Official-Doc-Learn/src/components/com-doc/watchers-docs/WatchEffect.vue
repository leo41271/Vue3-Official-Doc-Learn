<script setup>
import { ref, watch, watchEffect } from 'vue';
const todoId = ref(1)
const data = ref(null)
const todoId2 = ref(1)
const data2 = ref(null)
const todoId3 = ref(1)
const data3 = ref(null)
const int4 = ref(0)
const seeArray = ref([1, 1, 1, 1])
// watch 中要注意的是 todoId ，出現2次(第一第二的參數 第二指 callback中的${todoId.value})
// watchEffect() 允許我們自動跟蹤回調的響應式依賴 參看下面那個，且方便我們不用再傳第一參數
watch(todoId,
    async (newV, oldV) => { //可以有參數  //watchEffect 沒有
        // async () => {
        console.log("noEffect\n", data.value); // see first time in load
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
        data.value = await response.json()
        console.log("noEffect\n todoId: ", todoId.value, data.value, "\nnewV: ", newV, "\noldV: ", oldV)
    },
    { immediate: true } // 註解掉 將會使 data 的初始資料為 null 而不顯是在網頁
    // watch設置時回調函數會立即執行一次，表示一開始就會發送一個請求，
    // 來獲取 todoId 對應的數據並更新 data。即使todoId 沒變，回調函數也會在初始化時執行。
)

// 在多依賴下 方便維護 降低負擔
// 偵聽一個嵌套數據結構中的 幾個屬性，watchEffect() 可能會比深度偵聽器更有效，因為它將只跟蹤回調中被使用到的屬性
// ，而不是遞歸地跟蹤所有的屬性。
// 同步執行期間追蹤依賴：watchEffect 會自動追蹤在其回調函數中訪問到的所有響應式依賴。但是，它只會追蹤在回調函數的同步部分訪問到的依賴。
// 異步回調的限制：如果回調函數中包含異步操作（例如 await 語句），那麼在 await 之後的代碼部分中訪問到的響應式依賴不會被 watchEffect 追蹤。這是因為異步操作會中斷回調函數的執行，使得後續代碼不再屬於同步執行期間。
watchEffect(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId2.value}`)// 只能監聽到上者 因為 await 打斷
    const response2 = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId3.value}`)// 將會沒監聽到
    data2.value = await response.json()
    data3.value = await response2.json()
    console.log("Effect\ndata2.value", data2.value, "\ndata3.value", data3.value)
})
watchEffect(() => {
    int4.value = todoId.value + todoId2.value + todoId3.value + int4.value
    console.log(seeArray.value.reduce((total, num) => total + num, 0)); // 監聽陣列
})
// watch 和 watchEffect 主要區別 追蹤響應式依賴的方式
// watch 只追蹤明確偵聽的數據源。它不會追蹤任何在回調中訪問到的東西，且 監聽物改變才會跑 callback 可較精確於控制 callback觸發時機
// watchEffect 方便 同步下 可以自動追蹤全部簡潔好維護 ，但依賴關係 不明確
</script>
<template>
    <button @click="todoId++">+1</button>todoId : {{ todoId }}。data : {{ data }} <br>
    <button @click="todoId2++">+1</button>todoId2 : {{ todoId2 }}。data2 : {{ data2 }} <br>
    <button @click="todoId3++">todoId3 +1</button>todoId3 : {{ todoId3 }}。data3 : {{ data3 }} <br>
    int4: {{ int4 }}。如果有監聽到 int4 才會改變值 <br>
    <span v-for="(seeInt, i) in seeArray" :key="i">
        <input type="number" v-model="seeArray[i]"> {{ seeInt[i] }}
    </span>
    <!-- 為何 seeInt 沒有值? v-model 綁定在 seeArray[i] 上，而不是在 seeInt 上 -->
</template>