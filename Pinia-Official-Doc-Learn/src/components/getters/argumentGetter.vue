<script setup>// argumentGetter.vue
import { storeToRefs } from 'pinia'
import { useArgumentGetterStore } from '@/stores/getters/argumentGetter.js'
const store = useArgumentGetterStore()
const { getUserById, getActiveUserById } = storeToRefs(store)
setTimeout(() => { store.users[0].id = 999; console.log(store.users[0].id); }, 2000);
// 注意，你需要使用 `getUserById.value` 來訪問函數在 <script setup> 內部
</script>
<template>
    <p>User 2: {{ getUserById(2) }}</p>
    <!-- 這樣使用時 他就變成只是你呼叫的函式 並且沒cached快取(缓存)-->
    <p>getActiveUserById {{ getActiveUserById(2) }}</p>
    <p>更改id 1 > 999 2秒後出現: {{ getUserById(999) }}</p>
    <p>Usage with the Options API 部分跳過SKIP分為  option API 的 'Without setup()' 與 'With setup()' 2種方式 </p>
</template>
