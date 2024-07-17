<script>
/**
各個input 使用
v-model介紹 以下兩行完全相同(此概念極其重要)
<input :value="text" @input="event => text = event.target.value">
<input v-model="text">
修飾符
.lazy (change 後 才變 省一些效能)
.trim (去除空白建)
.number (限制數字)
需要再看文檔 有哪些 input 
*/
</script>