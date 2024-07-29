<script setup>
import ButtonCounter from '@/components/com-doc/components-basic-docs/ComponentBasic.vue'
import { ref } from 'vue'
import ComponentProps from '@/components/com-doc/components-basic-docs/ComponentProps.vue'
import ComponentEvent from '@/components/com-doc/components-basic-docs/ComponentEvent.vue'
import ComponentSlot from '@/components/com-doc/components-basic-docs/ComponentSlot.vue'
import A from "@/components/com-doc/components-basic-docs/dynamic-components/A.vue"
import B from "@/components/com-doc/components-basic-docs/dynamic-components/B.vue"
import C from "@/components/com-doc/components-basic-docs/dynamic-components/C.vue"
import * as pack from "@/components/com-doc/components-basic-docs/dynamic-components/dynamic.js" // dynamic.js 可以只寫 dynamic
const components = { A, B, C, ...pack };
import * as pack2 from "@/components/com-doc/components-basic-docs/dynamic-components/packImport"
const components2 = { ...pack2 };

// 計算當前應顯示的組件
const posts = ref([
    { id: 1, title: 'My journey with Vue' },
    { id: 2, title: 'Blogging with Vue' },
    { id: 3, title: 'Why Vue is so fun' },
])
const postFontSize = ref(1)

const tabs = ref(['A', 'B', 'C', ...Object.keys(pack)])
const tabs2 = ref([ ...Object.keys(pack2)])
const currentTab = ref('A')
const currentTab2 = ref('A1')
</script>
<template>// Composition API style
    <ButtonCounter />
    <hr>
    <ComponentProps v-for="post in posts" :key="post.id" :title="post.title">
    </ComponentProps>
    defineProps 只能< script setup> 中用的編譯巨集指令。 <br>
        defineProps 會傳回一個物件，其中包含可傳遞給元件的所有 props <br>
        没有使用< script setup> 此略
            <hr>
            <div :style="{ fontSize: postFontSize + 'em' }">
                <ComponentEvent v-for="post in posts" :key="post.id" :title="post.title"
                    @enlarge-text="postFontSize += 0.1">
                </ComponentEvent>
                defineEmits 僅可用於 < script setup> (和defineProps相同)<br>
                    傳回(返回)一個等同於 $emit 方法的 emit 函數
            </div>
            <div>slot 與option API 相同略</div>
            <div>Dynamic Components 差不多略</div>
            <hr>
            <ComponentSlot>Something bad happened.</ComponentSlot>
            <hr>
            動態組件
            <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">
                {{ tab }}
            </button>
            <component :is="components[currentTab]" class=""></component>
            <button v-for="tab in tabs2" :key="tab" @click="currentTab2 = tab">
                {{ tab }}
            </button>
            <component :is="components2[currentTab2]" class=""></component>
</template>