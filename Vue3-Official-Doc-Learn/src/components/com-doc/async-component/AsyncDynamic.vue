<template>
    <div>pathChoose: {{ pathChoose }}<br> 開創角色流程(情境假設)</div>
    <input type="text" placeholder="角色名稱" v-model="formData.roleName" :disabled="nextFlow">
    <input type="number" placeholder="角色權限" v-model="formData.RolePermissions" :disabled="nextFlow">
    <button @click="nextFlowToggle">next flow 下一個流程</button> <br><br>
    <input type="radio" id="one" value="OneFuncComponent" v-model="pathChoose" :disabled="!nextFlow" />
    <label for="one">1 One 選擇職業</label>
    <input type="radio" id="two" value="TwoFuncComponent" v-model="pathChoose" :disabled="!nextFlow" />
    <label for="two">2 Two 造型選擇</label>
    <input type="radio" id="Three" value="ThreeFuncComponent" v-model="pathChoose" :disabled="!nextFlow" />
    <label for="Three">3 Three 天賦選擇</label>
    <input type="text" v-model="randomPage" placeholder="也許可以試跳到個人頁面..."> <button @click="pathChoose = randomPage"
        :disabled="!nextFlow">jump
        跳轉頁面</button>
    <br><br>
    必須要有出現 v-if 判斷為 false 的情況才能使 組件再次延遲重載使用。<br>
    出現false 時 才會讓頁面 沒有 這 DOM 改為 true 時 重新再次載入。<br>
    第一種寫法 <br>
    當流程很多時將會顯得冗長
    <template v-if="pathChoose === 'OneFuncComponent'">
        <AsyncDispatcher :path="pathChoose" :formData></AsyncDispatcher>
    </template>
    <template v-if="pathChoose === 'TwoFuncComponent'">
        <AsyncDispatcher :path="pathChoose" :formData></AsyncDispatcher>
    </template>
    <template v-if="pathChoose === 'ThreeFuncComponent'">
        <AsyncDispatcher :path="pathChoose" :formData></AsyncDispatcher>
    </template>
    <hr>第二種寫法 <br>
    <template v-if="loadFlag">
        <AsyncDispatcher :path="pathChoose" :formData></AsyncDispatcher>
        <AsyncDispatcherUseMap :path="pathChoose" :formData></AsyncDispatcherUseMap>
    </template>
</template>
<script setup>
import { ref, watch, nextTick } from 'vue';
import AsyncDispatcher from '@/components/com-doc/async-component/AsyncDispatcherComponents.vue'
import AsyncDispatcherUseMap from '@/components/com-doc/async-component/AsyncDispatcherUseMap.vue'
const pathChoose = ref('')
const randomPage = ref('')
const loadFlag = ref(false)
const formData = ref({})
const nextFlow = ref(false)
watch(pathChoose, (nPathChoose, oPathChoose) => {
    loadFlag.value = false
    nextTick(() => loadFlag.value = true) // 此處請複習前面 響應性基礎
});
function nextFlowToggle() {
    console.log(formData.value.roleName)
    if (formData.value.roleName && formData.value.RolePermissions)
        nextFlow.value = !nextFlow.value
    else window.alert("角色名稱 與 角色權限 不能空白")
    // console.log(formData.value);
}
</script>