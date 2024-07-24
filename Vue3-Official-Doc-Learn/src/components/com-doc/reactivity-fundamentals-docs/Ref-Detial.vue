<template><!-- Ref-Detial.vue ref解包 與 reactive 解包 細節 -->
    如果牠放入 reactive 作為物件屬性 會自動解包 > 就跟普通屬性一樣。 <br>
    state.gg : {{ state.gg }} <br>
    gg.value : {{ gg }} <br>
    <hr>
    當ref 作為 reactive 陣列 、 集合 被訪問時 解包也不會發生 <br>
    books[0].value : {{ books[0] }} <br>
    map.get('count').value : {{ map.get('count') }} <br>
    <hr>
    count + 1 : {{ count + 1 }} 按預期工作 <br>
    object.id + 1 : {{ object.id + 1 }} 這不會<br>
    id + 1 : {{ id + 1 }} <br>
    object.id object.id.value 兩者等價 : {{ object.id }} 、 {{ object.id.value }} (文本插值的最终计算值 還是會被解包)
</template>
<script setup>
import { ref, reactive } from 'vue';
// ------------------ref 解包細節
const gg = ref(0)
const state = reactive({ gg })
console.log("state.gg", state.gg) // 0
state.gg = 1
console.log("gg.value", gg.value) // 1 兩值同更新 (中間沒註解掉的話))
// 
const otherCount = ref(2)
state.gg = otherCount
console.log("state.gg = otherCount 後 state.gg", state.gg) // 2
// 原始 ref 现在已经和 state.count 失去联系
console.log("state.gg = otherCount 後 gg.value", gg.value) // 1
// ------------------reactive 指不會解包(陣列 集合之下)
const books = reactive([ref('Vue 3 Guide')])
console.log("books .value", books[0].value) // 这里需要 .value
console.log("books ", books[0]) // 这里需要 .value
const map = reactive(new Map([['count', ref(0)]]))
console.log("map .value", map.get('count').value) // 这里需要 .value
console.log("map ", map.get('count')) // 这里需要 .value (不會解包
// ------------------ref 指解包一層
const count = ref(0)
const object = { id: ref(1) }
// 解決辦法在解構一次
const { id } = object
// ref 本身也只解包一層
</script>