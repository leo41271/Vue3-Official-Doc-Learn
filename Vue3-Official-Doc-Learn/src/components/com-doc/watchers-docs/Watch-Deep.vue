<template><!-- Watch-Deep.vue -->
    deepData.user.age<input type="number" v-model="deepData.user.age"><br>
    deepData.user.name<input type="text" v-model="deepData.user.name"><br>
    deepData.details.email<input type="email" v-model="deepData.details.email"><br>
    deepData.details.address<input type="address" v-model="deepData.details.address">
    <br> <br>
    noDeepData.user.age<input type="number" v-model="noDeepData.user.age"><br>
    noDeepData.user.name<input type="text" v-model="noDeepData.user.name"><br>
    noDeepData.details.email<input type="email" v-model="noDeepData.details.email"><br>
    noDeepData.details.address<input type="address" v-model="noDeepData.details.address"><br>
    <br>
    {{ reactObj }}
    <input type="text" v-model="reactObj.d2r.skill"><br><br>
    deep Name: {{ state.getterObj.name }}<input type="text" v-model="state.getterObj.name"><br>
    deep Age: {{ state.getterObj.age }}<input type="text" v-model="state.getterObj.age"><br>
    <button @click="state.getterObj={age:'1',name:'gg'}">noDeep</button>
</template>
<script setup>
import { ref, watch, reactive } from 'vue';
const deepData = ref({
    user: { name: '深入監聽', age: 100 },
    details: { email: 'deep@data.com', address: '看內層 資源消耗大' }
});
const noDeepData = ref({
    user: { name: '無深入監聽', age: 10 },
    details: { email: 'noDeep@data.com', address: '只看當前被監聽之屬性內層不看' }
});
watch(deepData, (newValue, oldValue) => {
    console.log('新值:', newValue);
    console.log('舊值:', oldValue);
}, { deep: true }); // 啟用深度監視器
watch(noDeepData, (newValue, oldValue) => {
    console.log('noDeepData新值:', newValue);
    console.log('noDeepData舊值:', oldValue);
});

// 大型數據結構時，開銷很大
const reactObj = reactive({ count: 0, gg1: "leo", d2r: { roll: ['barb', 'necro'], skill: "battle order" } })
watch(reactObj, (newValue, oldValue) => {
    // 注意：`newValue` 此處和 `oldValue` 是相等的 // 因為它們是同一個物件！
    console.log(reactObj, newValue, oldValue);
})
// setTimeout(() => { reactObj.d2r.skill += 1; }, 500);

const state = ref({
    getterObj: { name: 'John', age: 30 }
});
watch(() => state.value.getterObj,
    (newV, oldV) => { console.log('getterObj被替換:', newV, oldV); }
);
watch(() => state.value.getterObj,
    (newV, oldV) => { console.log('深層監聽: newValue:', newV, 'oldValue:', oldV); },
    { deep: true }
);
</script>