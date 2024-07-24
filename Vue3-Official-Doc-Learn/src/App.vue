<script setup></script>
<script>
import OpReactivityFundamentals from "@/pages/op-doc/App-reactivity-fundamentals.vue"
import ComReactivityFundamentals from "@/pages/com-doc/App-reactivity-fundamentals.vue"
export default {
  data() {
    return {
    }
  },
  components: {
    ComReactivityFundamentals,
    OpReactivityFundamentals,
  }
}
</script>
<template>
  <OpReactivityFundamentals></OpReactivityFundamentals>
  <hr>
  <hr>
  <hr>
  <ComReactivityFundamentals></ComReactivityFundamentals>
</template>
<style scoped></style>
