<script setup>//App.vue 其他地方也都可用
</script>
<template>
    op API com API 一起
    global component
    <GlobalA></GlobalA>
    <GlobalB></GlobalB>
    <GlobalC></GlobalC>
    <hr>
    全局註冊之問題: <br>
    1. 沒被使用之組件 打包時不會被移除(a.k.a "tree-shaking")<br>
    2. 使文件依賴關係變得不明顯，過多全域變量<br>
    相比 一般註冊(本地local)上述問題解決<br>
    没有使用< script setup> 要使用 components 選項來明確註冊(這邊說的是 op com 的 API)<br>
        <hr>
        區域註冊 (我們平常一般的寫法) 省略 前面已講過
        <hr>
        组件名格式 都使用 PascalCase 表示:
        其為合法的 JavaScript 識別符 IDE 也能提供較好的自動補全
        <PascalCase /> 更明顯表明這是一個 Vue 元件，而非原生 HTML 元素。 同時將 Vue 元件和自訂元素 (web components) 區分。
        所以前面只要有包裝成組件的部分 都最好使用 PascalCase (看來我前面有一大堆都沒遵守)
</template>