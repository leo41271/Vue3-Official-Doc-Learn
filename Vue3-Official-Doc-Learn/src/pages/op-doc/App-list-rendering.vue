<script>
import BasicVFor from "@/components/op-doc/list-rendering-docs/Basic-V-For.vue"
import ForInComponent from "@/components/op-doc/list-rendering-docs/For-In-Component.vue"
import ForArray from "@/components/op-doc/list-rendering-docs/For-Array.vue"
export default {
    components: {
        BasicVFor, ForInComponent, ForArray
    }
}
</script>
<template>
    <Basic-V-For></Basic-V-For>
    <hr>
    <ForInComponent></ForInComponent>
    <hr>
    <ForArray></ForArray>
</template>
