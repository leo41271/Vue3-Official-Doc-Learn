<script setup>
// -------------
let msg = 'Hello!' // 变量
function log() { console.log(msg); msg = "6666"; }
// -------------
import { capitalize } from '@/components/api-doc/api-script-setup-doc/helpers'; // 導入 函式 直接解構
// const { testString } = require('./helpers');
// 使用 require 導入函數。 es6 與 commonjs 不能混用!! (在package.json 中 定義了 "type": "module", 所以不行)
// 使用 Node.js 的 require 、module.exports，只能在 Node.js(後端) 環境中使用，無法在瀏覽器端的 JavaScript 中使用。
// -------------
import { ref } from 'vue'
const count = ref(0)
// -------------
import MyComponent from '@/components/api-doc/api-script-setup-doc/MyComponent.vue'
// -------------
import DynamicComponentA from '@/components/api-doc/api-script-setup-doc/DynamicCompo/Dynamic-ComponentA.vue'
import DynamicComponentB from '@/components/api-doc/api-script-setup-doc/DynamicCompo/Dynamic-ComponentB.vue'
import DynamicComponentC from '@/components/api-doc/api-script-setup-doc/DynamicCompo/Dynamic-ComponentC.vue'
const selected = ref('');
function checkValue() {
    // 進行對應的 許多操作...
    // console.log("selected", selected);
}
// -------------
// 先跳過 遞迴組件
import RecursiveComponent from '@/components/other/question-practice/question2/RecursiveComponent.vue';
// -------------
import * as Form from '@/components/api-doc/api-script-setup-doc/NamespacedComponents/form-components.js'
// https://github.com/vuejs/docs/issues/1267 人家那麼厲害的都問了= =
// -------------
import { myDirective as vMyDirective } from '@/components/api-doc/api-script-setup-doc/Directive/MyDirective.js'
// -------------
import defModelModifi from '@/components/api-doc/api-script-setup-doc/ModifierUseGet/Parent.vue'
</script>
<template>
    <button @click="log">{{ msg }}</button>
    <hr>
    <div>{{ capitalize('hello') }}</div>
    <!-- <div>{{ testString('HHHlo') }} _ctx.testString is not a function</div> -->
    <hr>
    <button @click="count++">{{ count }}</button>
    <hr>
    有效
    <MyComponent />、
    有效<my-component />、
    無效<My-Component />但三者畫面會顯示<br>
    強烈建議用第一種， 因為 可以區分是自定義 還是 原生元素(ex button ButtonCompo 如果命名成 Button 就可能搞混 )
    <hr>
    動態組件
    <select v-model="selected" @change="checkValue">
        <option value=A>A</option>
        <option value=B>B</option>
        <option value=C>C</option>
    </select><br>
    :is 使用
    <component :is="DynamicComponentA" /> <br>
    這很重要
    <component :is="selected == 'A' ? DynamicComponentA : selected == 'B' ? DynamicComponentB : DynamicComponentC" />
    <hr>
    遞迴組件
    <RecursiveComponent></RecursiveComponent>
    <hr>
    命名空間組件
    <Form.Input>
        <Form.Label>label</Form.Label>
    </Form.Input>
    <hr>
    匯入 指令
    <p v-my-directive="'red'">這段文字會變成紅色</p>
    <hr>
    defineProps() 和 defineEmits() 前面已講過 略
    傳入到 defineProps 和 defineEmits 的選項會從 setup 提升到模組的作用域。 <br>
    因此，傳入的選項不能引用在 setup 作用域中宣告的局部變數。這樣做會造成編譯錯誤。<br>
    但是，它可以引用導入的綁定，因為它們也在模組作用域內。<br>
    TS、ts default props 部分略
    <hr>
    <defModelModifi></defModelModifi>
</template>