<script>//V-model-Modifiers.vue
export default {
    props: {
        modelValue: String,
        modelModifiers: { default: () => ({}) },
    },
    emits: ['update:modelValue'],
    created() { /*console.log("this.emitValue", this.emitValue)*/ },
    methods: {
        emitValue(e) {
            let value = e.target.value
            if (this.modelModifiers.capitalize) {
                value = value.charAt(0).toUpperCase() + value.slice(1);
            }
            this.$emit('update:modelValue', value)
        },
    }
}
</script>
<template>
    <div style="border: 1px solid red">
        Modifiers added to a component v-model will be provided to the component via the modelModifiers prop.
    </div>
    <input type="text" :value="modelValue" @input="emitValue" /><br>
</template>