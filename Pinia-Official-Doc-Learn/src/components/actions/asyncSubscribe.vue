<script setup>// asyncSubscribe.vue
import { useKey } from '@/composables/Key.js';
const { key, getTsunamiurl } = useKey;
import { useActionAsynchronousStore } from '@/stores/actions/actionAsynchronous';
const storeSubscribing = useActionAsynchronousStore()
storeSubscribing.$onAction(
    ({
        name, // action name
        store, // store 实例，类似 `someStore`
        args, // 传递给 action 的参数数组
        after, // 在 action 返回或解决后的钩子
        onError, // action 抛出或拒绝的钩子
    }) => {
        console.log(`執行的action: "${name}" 該參數[${args.join(', ')}].`, "store: ", store)
        after((result) => { console.log("Result: ", result) })
        onError((error) => { console.warn(error) })
    },
    // 上面 或是 下面 是相同的
    // handleAction, // true // 想在組件卸載後依舊保留 訂閱
)
function handleAction({ name, store, args, after, onError }) {
    console.log(`執行的action: "${name}" 該參數[${args.join(', ')}].`, "store: ", store);
    after((result) => { console.log("Result: ", result); });
    onError((error) => { console.warn(error); });
}
function getAPI() {
    const argumentAPI = [key, getTsunamiurl, 1]
    storeSubscribing.getTsunamiAPI(...argumentAPI)
}
function showData() {
    console.log("data error:", storeSubscribing.data, storeSubscribing.error)
}
</script>
<template>
    <button @click="getAPI">重新拿一次API</button>
    <button @click="showData">console show</button>
    {{ storeSubscribing.data }}
    {{ storeSubscribing.error }}
</template>