<script setup>// ProvideInject.vue
import { ref, provide, readonly } from 'vue'
import Child from './Child.vue'

// by providing a ref, the GrandChild
// can react to changes happening here.
const message = ref('hello')
provide('basicUse', message)
const defaultValue = ref('test')
provide('useDefault', defaultValue)

const location = ref('North Pole')
function updateLocation() {
    location.value = 'South Pole'
}
provide('location', { location, updateLocation })

const paraFunction = ((x, y) => ((x + y) * 2));
provide('useParafunction', paraFunction);

const countReadOnly = ref(0)
countReadOnly.value = countReadOnly.value + 1
provide('read-only-count', readonly(countReadOnly))

import { myInjectionKey } from './injectionKey/Keys.js' // symbol 使用
const sameName = ref('同名字處裡')
provide('sameName', sameName)
provide(myInjectionKey, {
    /* data to provide */
    message, defaultValue, location, updateLocation, countReadOnly, sameName
})
</script>

<template>
    <div style="border: 1px solid red">
        父組件<br>
        message<input v-model="message">
        defaultValue<input v-model="defaultValue"><br><br>
        <Child />
    </div>
</template>