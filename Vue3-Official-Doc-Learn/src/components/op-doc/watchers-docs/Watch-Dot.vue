<template><!-- Watch-Dot.vue -->
    <input type="text" v-model="userInfo.name">
    <input type="number" v-model="userInfo.age">
</template>
<script>
export default {
    data() {
        return {
            userInfo: { name: 'John', age: 25 }
        }
    },
    computed: {
        fullName() {
            console.log("computed", this.userInfo.name)
            return this.userInfo.name;
        }
    },
    watch: {
        fullName(newValue, oldValue) {
            console.log('New name:', newValue);
        },// Note: only simple paths. Expressions are not supported.
        'userInfo.age'(newValue, oldValue) {
            if (newValue > 18) { alert('You are an adult!'); }
        }
    }
}
</script>