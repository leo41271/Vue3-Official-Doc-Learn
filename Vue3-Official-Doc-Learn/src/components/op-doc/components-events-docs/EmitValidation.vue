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
<script>
export default {
    data() {
        return { email: '', password: '' }
    },
    emits: {
        click: null, // No validation
        // Validate submit event
        submit: ({ email, password }) => {
            console.log(email, password);
            if (email && password) {
                window.alert(email, password);
                return true
            } else {
                console.warn('無效^O^提交  Invalid submit event payload!');
                return false
            }
        }
    },
    methods: {
        submitForm() {
            this.$emit('submit', { email: this.email, password: this.password })
        }
    }
}
</script>
