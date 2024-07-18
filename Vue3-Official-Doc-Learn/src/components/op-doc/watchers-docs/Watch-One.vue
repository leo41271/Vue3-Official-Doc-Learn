<template><!-- Watch-One.vue -->
    3.4 版本以上才有
    <input type="text" v-model="data">
    {{ checkOne }}
</template>
<script>
export default {
    data() {
        return {
            data: "data ",
            checkOne: "data change",
        }
    },
    watch: {
        data: {
            handler(newValue, oldValue) {
                // when `source` changes, triggers only once
                this.checkOne = newValue;
            },
            once: true
        }
    }
}
</script>