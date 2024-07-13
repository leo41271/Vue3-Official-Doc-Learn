<!-- B.vue -->
<template>
    <p>組件 B scoped 不相同</p>
    <span>BBBB scoped 相同</span> <br>
    <button>沒有 scoped</button>
</template>
<script>
</script>
<style scoped>
p {
    color: purple;
    font-size: 30px;
}

span {
    color: palegreen;
    background-color: cadetblue
}
</style>