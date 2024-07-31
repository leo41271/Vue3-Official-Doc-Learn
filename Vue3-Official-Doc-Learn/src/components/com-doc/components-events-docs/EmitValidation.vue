<template><!-- EmitValidation.vue -->
    <form @submit.prevent="submitForm">
        <slot>傳入參數如果是物件則可被驗證:</slot> <br>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email"><br>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
        <button type="submit">Submit</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

// 定義 Props
const email = ref('');
const password = ref('');

// 定義要發出的事件
const emit = defineEmits({
    click: null, // 不進行驗證
    // 驗證 submit 事件
    submit: ({ email, password }) => {
        console.log(email, password);
        if (email && password) {
            window.alert(`${email}, ${password}`);
            return true;
        } else {
            console.warn('無效提交 Invalid submit event payload!');
            return false;
        }
    }
});

// 方法：提交表單
const submitForm = () => {
    emit('submit', { email: email.value, password: password.value });
};
</script>
