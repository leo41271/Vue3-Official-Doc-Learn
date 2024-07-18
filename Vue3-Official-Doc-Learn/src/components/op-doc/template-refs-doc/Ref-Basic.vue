<script>// Ref-Basic.vue
export default {
    data() { return { list: [1, 2, 3] } },
    created() {
        console.log(this.$refs.input, this.$refs.items);
        // 使用時 在 this.$refs 之下 。ref 只能使用在 mounted 之後，否則將會是undefined。
    },
    mounted() {
        this.$refs.input.focus();
        console.log("input: ", this.$refs.input, "items: ", this.$refs.items);
    }
}
</script>
<template>
    Accessing the Refs
    <input ref="input" />
    <ul>
        <li>(Refs inside v-for)Requires v3.2.25 or above</li>
        <li v-for="item in list" ref="items">{{ item }}</li>
        <li>ref 陣列不一定與來源陣列相同。</li>
    </ul>
</template>