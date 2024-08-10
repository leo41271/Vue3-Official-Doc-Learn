<!-- 子組件 ChildComponent.vue -->
<template>
    <h4>選擇一個選項：</h4>
    <input type="radio" v-model="selectedOption" value="A"> A: xxxx2 yyy2 zzz2 <br>
    <input type="radio" v-model="selectedOption" value="B"> B: xxxx1 yyy1 zzz1<br>
    <input type="radio" v-model="selectedOption" value="C"> C: xxxx yyy zzz<br>
    <button @click="confirmSelection">確定</button>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
const emit = defineEmits(['selectedValue666']);
const selectedOption = ref('');
const confirmSelection = () => {
    switch (selectedOption.value) {
        case 'A':
            emit('selectedValue666', { xxxx: 'xxxx2', yyy: 'yyy2', zzz: 'zzz2' });
            break;
        case 'B':
            emit('selectedValue666', { xxxx: 'xxxx1', yyy: 'yyy1', zzz: 'zzz1' });
            break;
        case 'C':
            emit('selectedValue666', { xxxx: 'xxxx', yyy: 'yyy', zzz: 'zzz' });
            break;
        default:
            emit('selectedValue666', null);
    }
}
</script>