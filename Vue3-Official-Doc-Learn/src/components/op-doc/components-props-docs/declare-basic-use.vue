<template>use array : {{ fooUse }} <br> </template>
<script>// declare-basic-use.vue
export default {
    props: ['fooUse'],
    created() {
        console.log(this.fooUse)// this之下可以呼叫到
        // this.fooUse = 'bar' // ❌ warning, props are readonly!
    },
    data() {
        return {
            // 1. 替代方案 新建立 一個 data return 給一個區域變數。
            changeFoo: this.fooUse
        }
    },
}
</script>