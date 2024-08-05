<script setup>
import { useMouse } from '@/composables/BasicComposableMouse.js'
import { useMouse2 } from '@/composables/SeparateMouse.js'
const { x, y } = useMouse()
const { x: x2, y2 } = useMouse2() // 此處順便給予重新命名舉例
// 名字相同故 x只好被我重新命名
// 若於其他地方也用useMouse其實本身不會互相干擾 會各自複製 x y
// 
import { ref, computed } from 'vue'
import { useFetch } from '@/composables/fetch'
const baseUrl = 'https://jsonplaceholder.typicode.com/todos/'
const id = ref('1');
const url = computed(() => baseUrl + id.value)
const { data, error } = useFetch(url)
const retry = () => {
    id.value = ''
    id.value = '1'
}
// 
import { useKey } from '@/composables/Key.js';
const { key, getTsunamiurl } = useKey;
const limitData = 2;
const formatBool = true;
const getGovApi = getTsunamiurl + "?Authorization=" + key + "&limit=" + limitData + "&format=" + (formatBool ? "JSON" : "XML");
let data2 = "";
let error2 = "目前沒錯誤";
setTimeout(() => {
    const { data, error } = useFetch(getGovApi);
    data2 = data;
    error2 = error;
}, 1000);
</script>
<template>
    Mouse position is at: {{ x }}, {{ y }} <br>
    拆解版 一層包一層 {{ x2 }}, {{ y2 }}
    <hr>
    Load post id:
    <button v-for="i in 5" @click="id = `${i}`">{{ i }}</button>
    <div v-if="error">
        <p>Oops! Error encountered: {{ error.message }}</p>
        <button @click="retry">Retry</button>
    </div>
    <div v-else-if="data">Data loaded:
        <pre>{{ data }}</pre>
    </div>
    <div v-else>Loading...</div>
    <hr>
    {{ data2 }}。。。。 {{ error2 }}
    <hr>
</template>