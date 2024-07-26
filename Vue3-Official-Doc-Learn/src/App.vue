<script setup>
// import EventHandling from "@/pages/com-doc/App-event-handling.vue"
</script>
<script>
export default {
  data() {
    return {}
  },
  components: {}
}
</script>
<template>
  <!-- <EventHandling /> -->
<!-- 
setTimeout(() => {
  onMounted(() => {
    // 异步注册时当前组件实例已丢失    // 这将不会正常工作
  })
}, 100)
雖然 onMounted() 的調用不一定要放在 setup() 或 <script setup> 內的詞法上下文中，但是調用栈必須是同步的，且最終起源自 setup() 才能正確註冊回調函式
function myFunction() {
  onMounted(() => { console.log('onMounted 被調用了'); });// 此處調用 onMounted
}
// 在 setup() 函式中調用 myFunction
setup() { myFunction(); }
-->
</template>
<style scoped></style>
