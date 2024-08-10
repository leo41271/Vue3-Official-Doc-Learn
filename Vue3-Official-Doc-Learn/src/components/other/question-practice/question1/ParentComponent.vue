<template>父组件 ParentComponent.vue
    <div>
        <h2>父組件</h2>
        <button @click="showChildComponent">顯示關閉子組件</button>
        <div style="border: 1px solid red" v-if="showChild">
            <child-component @selectedValue666="receiveSelectedValue" />
        </div>
        <div v-if="selectedValue !== null">
            <p>選擇的值為: {{ selectedValue }}</p>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const selectedValue = ref(null);
const receiveSelectedValue = (value) => {
    console.log(value)
    selectedValue.value = value;
}
// function receiveSelectedValue(value) {
//     console.log(value)
//     selectedValue.value = value;
// }

const showChild = ref(false);
const showChildComponent = () => {
    showChild.value = !showChild.value;
}
</script>