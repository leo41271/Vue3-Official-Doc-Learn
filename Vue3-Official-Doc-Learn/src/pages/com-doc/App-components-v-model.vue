<script setup>
import BasicVModel from '@/components/com-doc/components-v-model-docs/BasicVModel.vue';
import VModelArguments from '@/components/com-doc/components-v-model-docs/VModelArguments.vue';
import MultiBindVModel from '@/components/com-doc/components-v-model-docs/MultiBindVModel.vue';
import { ref } from 'vue'

const msg = ref('Hello World!')
const title = ref('v-model argument example')
const title2 = ref('舊版寫法(代表其含義原理縮寫前)')
const first = ref('John')
const last = ref('Doe')
const first2 = ref('舊版多榜定 ABC')
const last2 = ref('舊版多榜定 XYZ')
</script>
<template>
    {{ msg }}
    <BasicVModel v-model="msg" />
    <hr>
    {{ title }} <br> {{ title2 }} <br>
    <VModelArguments v-model:title="title" v-model:title2="title2" />
    <hr>
    {{ first }} {{ last }} <br>
    {{ first2 }} {{ last2 }} <br>
    <MultiBindVModel v-model:first-name="first" v-model:last-name="last" v-model:first-name2="first2"
        v-model:last-name2="last2" />
    <hr>
    Handling v-model modifiers 部分先略 用到需要再來看DOC
</template>
