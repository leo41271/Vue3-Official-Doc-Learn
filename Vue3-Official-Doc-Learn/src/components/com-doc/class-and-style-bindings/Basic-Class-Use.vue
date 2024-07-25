<script setup>
import { ref, computed } from 'vue';

const isActive = ref(true);
const noError = ref(false);
const hasError = ref(true);
const error = ref(null);

const classObject = computed(() => ({
    active: true,
    'text-danger2': false,
    'text-danger': error.value && error.value.type === 'fatal'
}));

const activeClass = ref('active');
const errorClass = ref('text-danger');
</script>
<template>
    <div class="static" :class="{ active: isActive, 'text-danger': hasError, 'no-err': noError }">:class指令 一般class 混用
    </div>
    <div :class="classObject">class 綁物件</div>
    <div :class="[isActive ? activeClass : '', activeClass + '2', { activeClass: isActive }, errorClass]">綁陣列 +3元運算子
        變數配字串 物件 使用</div>
</template>
<style scoped></style>