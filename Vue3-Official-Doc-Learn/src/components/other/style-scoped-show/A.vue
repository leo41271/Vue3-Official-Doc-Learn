<!-- A.vue -->
<template>
    <p>組件 A scoped 不相同</p>
    <span>AAAA scoped 相同</span> <br>
    <button>沒有 scoped</button>
    <B />
</template>

<script>
import B from './B.vue';

export default {
    components: {
        B,
    },
};
</script>
<style scoped>
p {
    color: brown;
    font-size: 30px;
}

span {
    color: palegreen;
    background-color: cadetblue
}
</style>
<style>
button {
    background-color: aqua;
}
</style>
