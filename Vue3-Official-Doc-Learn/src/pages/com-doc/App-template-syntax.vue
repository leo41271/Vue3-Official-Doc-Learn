<!-- 模板語法 com APi opAPI 的差異 -->
<!-- Single file component can contain only one <script> element -->
<!-- 組合API -->
<script setup>
const objectOfAttrs2 = {
    id: 'container',
    class: 'wrapper'
}
</script>
<!-- // setup() setup 下小節(Reactivity Fundamentals)會提，這裡簡單概略看。 -->
<!-- 選項API -->
<script>
export default {
    data() {
        return {
            objectOfAttrs1: {
                id: 'container', class: 'wrapper'
            },
            attributeName: 'href',
            url: 'https://www.example.com',
            cssRed: 'color: red',
            ggValue: "ic",
            toggle: true,
        }
    },
    methods: {
        changeLink() {
            if (this.toggle) {
                this.attributeName = "style"
            } else {
                this.attributeName = "href"
            }
            this.toggle = !this.toggle
        }
    }
}
</script>
<template>
    <h1>com API part</h1>
    <div v-bind="objectOfAttrs1"></div>
    <hr>
    <h1>op API part</h1>
    Text Interpolation。 skip <br>
    Raw HTML。( v-html ) skip <br>
    Attribute Bindings。(Shorthand 、 Same-name Shorthand3.4 、 Boolean Attributes) skip <br>
    Dynamically Binding Multiple Attributes
    <div v-bind="objectOfAttrs2"></div>
    <hr>
    JavaScript Expressions
    {{ this.myCustomProperty }}
    {{ "差值內也可以放 方法()" }}
    <hr>
    進階 Dynamic Arguments動態參數
    <button @['cl'+ggValue+'k']="changeLink()">改變綁定 的屬性</button>
    <!-- <button @['clic' + 'k']="changeLink()">XXX</button>將會出錯 -->
    <!-- 注意 vscode 自動排版可能會將 @['cl'+ggValue+'k'] 排版成錯誤格式: "@['cl ' +ggValu e +'k']" -->
    <a :[attributeName]="toggle ? url : cssRed">點擊這裡</a> <br>
    方法完全同理 <br>
</template>
<!-- 其他概念省略 -->