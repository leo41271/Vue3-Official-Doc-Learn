<template>
    <div class="此div表示只有一個根節點@@@">
        <input v-focus /><!-- 基礎簡單範例 -->
        <p v-globalAdd-999="ddd" v-console="ddd"></p>
        <div v-console:foo.bar="baz">div中的訊息</div>
        <div v-global-mutil="{ color: 'white', text: 'hello!' }">global mutil</div>
        <div v-my-global-directive>my-global-directive(complete_define)</div>
    </div>
    <!-- <div class="若有兩個會有錯誤@@@"></div> -->
</template>
<script setup>
const ddd = "eeeee"
const baz = 'C'
const vFocus = {
    mounted: (el) => el.focus()
}
const vConsole = {
    mounted: (el, binding, vnode) => {
        console.log("binding", binding) // 其中 binding.value 為 其值 "eeeee"
        console.log("el", el)
        console.log("vnode", vnode)
    }
};
</script>
<!-- 
<template> // 下面 option 模式
    <input v-custom-focus />
</template>
<script>
export default {
    directives: {
        'custom-focus': { mounted(el) { el.focus(); } }
    }
}
</script> -->
