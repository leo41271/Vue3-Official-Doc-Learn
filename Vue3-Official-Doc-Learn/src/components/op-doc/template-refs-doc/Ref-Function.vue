<template><!-- Ref-Function.vue -->
    <div>
        < input :ref="(el) => { /* 将 el 赋值给一个数据属性或 ref 变量 */ }">
            <p :ref="setParagraphRef">這是一個段落元素。</p>
    </div>
</template>
<script>
export default {
    data() { return {} }, // 不用特別定義 paragraphRef 於此data return 中
    methods: {
        setParagraphRef(el) {
            console.log('段落元素的引用：', this.paragraphRef);
            this.paragraphRef = el; // 賦值同時 也進行定義一個 this 中的新屬性
            console.log('段落元素的引用：', this.paragraphRef);
        }
    }
}
</script>
