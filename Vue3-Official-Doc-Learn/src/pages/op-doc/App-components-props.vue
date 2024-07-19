<script>
import PropBasic from '@/components/op-doc/components-props-docs/declare-basic-use.vue'
import PropBasic2 from '@/components/op-doc/components-props-docs/declare-basic-use2.vue'
class Person { // 兩邊都要
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
export default {
    components: { PropBasic, PropBasic2 },
    data() {
        return {
            fooValue: " declare 1",
            person: new Person('John', 'Doe'),
            testTrue: true,
        };
    },
}
</script>
<template>
    Props
    <!-- <PropBasic :fooUse="fooValue"></PropBasic> 建議用下面的 保值HTML 一致-->
    <PropBasic :foo-use="fooValue"></PropBasic>
    <PropBasic2 :author="person" status=testTrue></PropBasic2>
    使用 camelCase (宣告)(避免當用作屬性鍵時使用引號) <br>
    組件則是用 PascalCase 命名 這樣可區分 自訂組件與 原生組件。<br>
    傳值用(:xxx) kebab-case ，駝峰命名沒多大用處所以以html一致性<br>

    沒特別定義 任何類型都可傳。 <br>
    https://vuejs.org/guide/components/props.html#passing-different-value-types <br><br>

    下面兩者一樣(傳遞物件)<br>
    < BlogPost v-bind="post" /> <br>
    < BlogPost :id="post.id" :title="post.title" /><br>
    One-Way Data Flow 單項流 (父改子改 。子改無法)。<br>
    1. 替代方案 新建立 一個 data return 給一個區域變數。<br>
    2. 值需要轉換 如使用 computed <br>
    物件和陣列作為屬性傳遞時，子組件無法改變屬性的綁定，但它仍然能夠改變物件或陣列的巢狀屬性。 <br>
    因 JS 中，物件和陣列是按參考傳遞的，而阻止這樣的變異對於 Vue 來說代價過高。 <br>
    除非父組件和子組件由設計緊密地耦合 。 多數下，子組件應該發出事件 emit an event <br><br>

    屬性驗證 (可幫助開發時的 (類型) 顯示 )<br>
    https://vuejs.org/guide/components/props.html#prop-validation<br>
    布林以外的類型 如果 遺失 傳值或沒傳 都是 undefined 布林則是 false，需要可設定default。 <br>
    有設定預設 則當 undefined 狀況發生則給值。 <br>
    布林轉換 https://cn.vuejs.org/guide/components/props.html#boolean-casting <br>
    字符出現在布爾前，不適用布爾轉換。因此，傳遞字符串 "true"，不會轉換而是被解析為字符串。 <br>
</template>