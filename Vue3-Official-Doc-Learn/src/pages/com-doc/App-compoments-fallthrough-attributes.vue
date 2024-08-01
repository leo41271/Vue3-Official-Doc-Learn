<script setup>
import { ref } from 'vue'
import BasicFall from '@/components/com-doc/components-fallthrough-attributes-docs/BasicMyBotton.vue'
import ClassStyleMerge from '@/components/com-doc/components-fallthrough-attributes-docs/ClassStyleMerge.vue'
import ListenerInheritance from '@/components/com-doc/components-fallthrough-attributes-docs/ListenerInheritance.vue'
import RendLisInher from '@/components/com-doc/components-fallthrough-attributes-docs/RenderListen.vue'
import RendLisInher2 from '@/components/com-doc/components-fallthrough-attributes-docs/RenderListen2.vue'
const testFall = ref("deepFall")
const noFall = ref("不應該顯示於底部組件")
const test = ref("aaa")

function parentDoThing(bool) {
    if (bool) {
        console.log("在特定條件下 我們也觸發父組件功能")
    }
}

function onClickGG(where) {
    console.log("最上層傳到" + where)
}

function blockFall(where) {
    console.log("透傳 props 差別顯示 ", where)
}
</script>
<template>
    <basic-fall class="large">slot</basic-fall>
    <basic-fall style="font-size: 20px;">slot</basic-fall>
    <hr>
    <ClassStyleMerge class="test66">^O^</ClassStyleMerge>
    <hr>
    <ListenerInheritance @click="parentDoThing(false)/*onClick(); 如果要執行兩個方法*/">^O^</ListenerInheritance>
    <ListenerInheritance @click="() => { parentDoThing(true); /*onClick(); 如果要執行兩個方法*/ }">^O^</ListenerInheritance>
    <!-- 
    v-on Listener Inheritance
    click 監聽器會被添加到 <MyButton> 的根元素，即原生的 <button> 元素之上。當原生的 <button> 被點擊，會觸發父組件的 onClick 方法。
    如果原生 button 元素自身也通過 v-on 綁定了一個事件監聽器，則這個監聽器和從父組件繼承的監聽器都會被觸發。
    -->
    <hr>
    深層組件繼承 (有props 下將會被阻擋)
    <RendLisInher :testFall :noFall :onClickGG :blockFall @click="parentDoThing(false)" :test-a="test">深層插槽slot
    </RendLisInher><br>
    <RendLisInher2 class="main-topic ttt" :inheritAttrsBool="false" :noFall :onClickGG :blockFall
        @click="parentDoThing(false)">深層插槽slot2
    </RendLisInher2>
    <hr>
    多根節點的屬性繼承 將不會 進行透傳綁定，且會發出警告。 必須 由 v-bind="attrs" 顯式綁定(這裡或是你的變數給予的useAttrs()名字)。
</template>