<script>// <!-- V-model-Argument.vue -->
export default {
    props: ['title'],
    emits: ['update:title'],
    mounted() { /*console.log("mounted: ", this.title);*/ },
    watch: {
        title(newTitle, oldTitle) { console.log("old: " + oldTitle + "\nnew: " + newTitle); }
    },
}
</script>
<template>
    <div style="border: 1px solid red">
        In this case, instead of the default modelValue prop and update:modelValue event, the child component should
        expect a title prop and emit an update:title event to update the parent value:
    </div>
    <input type="text" :value="title" @input="$emit('update:title', $event.target.value)" />
</template>