<script setup>
import { ref } from 'vue';

const parentMessage = ref('Parent');
const items = ref([
    { message: 'Foo', children: { tt: 0, rr: 1 } },
    { message: 'Bar', children: { tt: 2, rr: 3 } }
]);
const myObject = ref({
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10',
});
const templateItem = ref([
    { id: 1, msg: '第一項 普通會員', ifShow: true },
    { id: 2, msg: '第二項 高高級會員', ifShow: false },
    { id: 3, msg: '第三項 普通會員', ifShow: true },
    { id: 4, msg: '第四項 高級會員才顯示', ifShow: false },
    { id: 5, msg: '第五項 普通會員', ifShow: true },
    { id: 6, msg: '第六項 普通會員', ifShow: true },
]);
</script>
<template>
    items 是源數據的數組，而 item 是迭代項的別名。
    <!-- <li v-for="(item, index) in items">  of in兩種都可-->
    <li v-for="(item, index) of items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
    使用解構
    <li v-for="({ message }, index) in items">
        {{ message }} {{ index }}
    </li>
    多層嵌套
    <li v-for="item in items">
        <span v-for="childItem in item.children">
            {{ item.message }} {{ childItem }}。
        </span>
    </li>
    物件使用 (值 key表屬性名 索引)
    <li v-for="(value, key, index) in myObject">
        {{ index }}. {{ key }}: {{ value }}
    </li>
    n 從1開始
    <span v-for="n in 10">{{ n }}{{ " " }}</span>
    <br>
    {{ "<" }}template{{ ">" }} 上的 v-for 渲染多個元素區塊 <!-- 因為<template>標籤不會被渲染為真正的DOM元素，只是用來包裹一組元素。 -->
        <ul>
            <template v-for="item in templateItem" :key="item.id">
                <div v-if="item.ifShow">
                    <li>{{ item.msg }}</li>
                    <li class="divider" role="presentation">其他內容 如果為組件之應用</li><br>
                </div>
            </template>
        </ul>
        v-if 比 v-for 的優先級更高 所以上面寫成下面 <br>
        {{ "<" }}template v-for="item in templateItem" :key="item.id" v-if="item.ifShow"><br>
            v-if 將會無法 讀到 v-for 實例 的 item變數。
            v-for 中使用的 :key 是為 跟蹤每個節點的標識 而在 template 中使用時 請在同標籤內使用: <br>
            {{ "<" }}template v -for="todo in todos" : key="todo.name">
</template>
        <style scoped></style>
