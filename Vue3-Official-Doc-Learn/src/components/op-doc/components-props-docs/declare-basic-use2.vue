<template>object declaration syntax :{{ title }} <br>
    作者的姓氏：{{ author.lastName }}
    作者的名字：{{ author.firstName }} <br>
</template>
<script>// declare-basic-use2.vue
class Person { // 兩邊都要
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
export default {
    props: {
        title: {
            type: String,
            default: "ggg",
        },
        likes: Number,
        author: Person,// 使用 Person 類別作為 prop 的類型
        status: [String, Boolean], // 声明为允许多种类型时
    },
    created() {
        console.log(this.title, this.status, true)
    },
    computed: {
        normalizedSize() { // 2. 值需要轉換 如使用 computed
            return this.title.trim().toLowerCase()
        }
    }
}
</script>
