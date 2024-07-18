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
</template>
<script>
export default {
    data() {
        return {
            deepData: {
                user: { name: '深入監聽', age: 100 },
                details: { email: 'deep@data.com', address: '看內層 資源消耗大' }
            },
            noDeepData: {
                user: { name: '無深入監聽', age: 10 },
                details: { email: 'noDeep@data.com', address: '只看當前被監聽之屬性內層不看' }
            }
        };
    },
    watch: {
        deepData: {
            handler(newValue, oldValue) {
                console.log('新值:', newValue);
                console.log('舊值:', oldValue);
            },
            deep: true // 啟用深度監視器
        },
        noDeepData(newValue, oldValue) {
            console.log('noDeepData新值:', newValue);
            console.log('noDeepData舊值:', oldValue);
        }
    }
}
</script>