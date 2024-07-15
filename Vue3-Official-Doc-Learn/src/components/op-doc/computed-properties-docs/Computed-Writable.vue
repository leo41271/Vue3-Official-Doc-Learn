<template><!-- Computed-Writable.vue -->
    計算屬性 預設只有 getter。<br>
    <input type="text" v-model="fullName"> <br>
    fullName:{{ fullName }}<br>
    firstName:{{ firstName }}<br>
    lastName:{{ lastName }}<br>
    <button @click="changeName">change Name</button>
</template>
<script>
export default {
    data() {
        return { firstName: 'John', lastName: 'Doe' }
    },
    computed: {
        fullName: {
            get() { // getter
                return this.firstName + ' ' + this.lastName
            },
            set(newValue) { // setter //賦予給計算屬性的新值
                // Note: we are using destructuring assignment syntax here.
                [this.firstName, this.lastName] = newValue.split(' ')
                // 將右邊 分割的結果賦值給左邊屬性
            }
        }
    },
    methods:{
        changeName(){ this.fullName = "AAAAA BBBBB"; }
    }
}
</script>