<script>
import ButtonCounter from "@/components/op-doc/component-docs/Btn.vue";
import { default as ButtonCounter2 } from "@/components/op-doc/component-docs/Btn.vue";
import BlogPost from "@/components/op-doc/component-docs/BlogPost.vue"; 
import AlertBox from "@/components/op-doc/component-docs/Alert.vue";
import A from "@/components/op-doc/component-docs/dynamic-components/A.vue"
import B from "@/components/op-doc/component-docs/dynamic-components/B.vue"
import C from "@/components/op-doc/component-docs/dynamic-components/C.vue"
import pack from "@/components/op-doc/component-docs/dynamic-components/dynamic.js" // dynamic.js 可以只寫 dynamic

export default {
    components: {
        BasicUse: ButtonCounter, // 給予別名
        ButtonCounter2,
        BasicUse2: ButtonCounter2,
        BlogPost,
        AlertBox,
        A, B, C,
        ...pack, // 組件 一整包 import 
    },
    data() {
        return {
            posts: [
                { id: 1, title: 'My journey with Vue' },
                { id: 2, title: 'Blogging with Vue' },
                { id: 3, title: 'Why Vue is so fun' }
            ],
            postFontSize: 1,
            ErrMsg: 'Something bad happened.',
            currentTab: 'A',
            tabs: ['A', 'B', 'C', 'D', 'E', 'F'],
        }
    }
}
</script>
<template>
    <h1>開始練習</h1>
    基本使用
    <BasicUse />
    <ButtonCounter2 />
    <BasicUse2 />
    <hr>
    <div :style="{ fontSize: postFontSize + 'em' }">
        傳參數 與觸發事件 emit (blog-post BlogPost 兩者皆支援)
        <BlogPost v-for="post in posts" :key="post.id" :title="post.title" @enlarge-text="postFontSize += 0.1" />
    </div>
    <hr>
    使用slot
    <AlertBox>{{ ErrMsg }}</AlertBox>
    <hr>
    動態組件
    <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">
        {{ tab }}
    </button>
    <component :is="currentTab" class=""></component>
</template>