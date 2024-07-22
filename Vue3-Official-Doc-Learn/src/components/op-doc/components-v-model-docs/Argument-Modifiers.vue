<script>// Argument-Modifiers.vue
export default {
    props: {
        firstBig: String,
        allBig: String,
        firstBigModifiers: { default: () => ({}) },
        allBigModifiers: { default: () => ({}) }
    },
    emits: ['update:firstBig', 'update:allBig'],
    created() {
        let value = this.firstBig;
        if (this.firstBigModifiers.capitalize) { value = value.charAt(0).toUpperCase() + value.slice(1); }
        setTimeout(() => { this.$emit('update:firstBig', value); }, 3000);// 三秒後執行 $emit 方法
        let value2 = this.allBig;
        if (this.allBigModifiers.uppercase) { value2 = value2.toUpperCase(); }
        setTimeout(() => { this.$emit('update:allBig', value2); }, 3000);// 三秒後執行 $emit 方法
    },
}
</script>
<template>
    <br>this.firstBigModifiers.capitalize : {{ this.firstBigModifiers.capitalize }} {{ firstBig }}
    <br>this.allBigModifiers.uppercase : {{ this.allBigModifiers.uppercase }} {{ allBig }}
</template>