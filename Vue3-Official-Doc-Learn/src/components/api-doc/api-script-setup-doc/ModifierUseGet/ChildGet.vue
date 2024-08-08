<template>
    <input v-model="modelValue" /><br>
    <input v-model="count" type="number" placeholder="計數" />
</template>

<script setup>
import { defineModel } from 'vue';

const [modelValue, modelModifiers] = defineModel({
    // 因為這裡不需要自定義的 get 行為，所以可以省略 get()
    set(value) {
        // 如果父組件傳入了 .trim 修飾符，則修剪輸入值
        if (modelModifiers.trim) return value.trim();
        // 否則，原樣返回輸入值
        return value;
    }
});

// "count", { type: Number, default: 0 })
const [count, countModifiers] = defineModel("count", {
    type: Number,
    default: 0,
    get(value) {
        if (countModifiers.round) {
            return Math.round(value);
        }
        return value;
    },
    set(value) {
        // 其他邏輯
        return value;
    }
});
</script>
