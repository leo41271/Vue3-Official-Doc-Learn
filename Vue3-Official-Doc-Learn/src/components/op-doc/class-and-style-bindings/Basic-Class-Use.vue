<script setup></script>
<script>
export default {
    data() {
        return {
            isActive: true,
            noError: false,
            hasError: true,
            error: null,
            classObject: {
                active: true,
                'text-danger2': false,
                'text-danger': this.error && this.error.type === 'fatal'
                // 可以綁定一個返回 有包含計算屬性的物件。(常見且有用)
            },
            activeClass: 'active',
            errorClass: 'text-danger',
        }
    },
}
</script>
<template>
    <div class="static" :class="{ active: isActive, 'text-danger': hasError, 'no-err': noError }">:class指令 一般class 混用
    </div>
    <div :class="classObject">class 綁物件</div>
    <div :class="[isActive ? activeClass : '', activeClass + '2', { activeClass: isActive }, errorClass]">綁陣列 +3元運算子
        變數配字串 物件 使用</div>
</template>
<style scoped></style>