<script>
import EmitBasicUse from '@/components/op-doc/components-events-docs/EmitBasicUse.vue';
import EmitArgument from '@/components/op-doc/components-events-docs/EmitArgument.vue';
import EmitArgument2 from '@/components/op-doc/components-events-docs/EmitArgument2.vue';
import EmitArgument3 from '@/components/op-doc/components-events-docs/EmitArgument3.vue';
import EmitValidation from '@/components/op-doc/components-events-docs/EmitValidation.vue'
export default {
    components: { EmitBasicUse, EmitArgument, EmitArgument2, EmitArgument3, EmitValidation },
    data() {
        return {
            messageFromChild: '.once只有首次觸發。',
            wordSize: 1,
            changeSizeN: 1,
            // 預設值參數
            ChangeSizeTo: 32,
            Color: "#dfd220", // #dfd220
            Weight: "lighter",// 數字可填100~900
            // 字的預設值
            wordChangeSizeTo: 25,
            wordColor: "",
            wordWeight: "",
            content: `<EmitValidation></EmitValidation> <EmitValidation @submit="handleChildSubmit"></EmitValidation>差異`,
        };
    },
    methods: {
        childEventEmitParentsMethod() {
            this.messageFromChild += '子自訂事件被觸發於父執行自訂所對應的方法！';
        },
        changeFontSize(n) { this.wordSize += n },
        changeWord(size, color, weight) {
            this.wordChangeSizeTo = size;
            this.wordColor = color;
            this.wordWeight = weight;
            console.log(size, color, weight);
        },
        handleChildSubmit(payload) {
            // payload 參數表示從子組件傳遞過來的資料。
            // payload 非特定名稱，是通用命名慣例，表示從子組件傳遞給父組件的資料。
            console.log('Received submit event from child component with payload:', payload);
        }
    }
}
</script>
<template>
    Emitting and Listening to Events組件透過使用 內建 emit方法直接在template 中由 v-on 觸發 自訂事件。<br />
    子組件按鈕:
    <EmitBasicUse @child-event.once="childEventEmitParentsMethod" />{{ messageFromChild }}<br>
    PS: 此處子為 childEvent >camelCase 父為 child-event >kebab-cased。<br>
    還是能跑，另因礙於 props casing格式關係 建議用後者 kebab-cased。<br>
    kebab-cased 一種命名慣例，單詞之間用連字符 "-" 分隔、都小寫。<br>
    PS:沒有冒泡機制bubble 只能監聽直接子组件觸發的事件。其他方式觸發> 全域狀態管理 or 外部事件總線(external event bus)
    <hr>

    Event Arguments
    <div :style="{ fontSize: wordSize + 'em', border: '1px solid red' }">
        字
        <EmitArgument @increase-by="(n) => wordSize -= n">減1大小</EmitArgument>
        <EmitArgument @increase-by="changeFontSize" />
    </div>
    <div :style="{ fontSize: wordSize + 'em', border: '1px solid green' }">
        字
        <input type="number" v-model="changeSizeN">
        <EmitArgument2 @change-size="changeFontSize" :fontSizeN="changeSizeN" />
    </div>
    <div
        :style="{ fontSize: wordChangeSizeTo + 'px', fontWeight: wordWeight, color: wordColor, border: '1px solid blue' }">
        字字
        <input type="number" v-model="ChangeSizeTo" placeholder="輸入字的大小">
        <input type="string" v-model="Weight" placeholder="輸入bold lighter 或數字100~900">
        <input type="color" v-model="Color">
        <EmitArgument3 @emit-multi-argument="changeWord" :fontSizeN2="ChangeSizeTo" :fontColor="Color"
            :fontWeight="Weight" />
        <EmitArgument3 @emit-multi-argument="changeWord" :fontSizeN2="ChangeSizeTo">自訂大小 只有1參數 看console 變數
        </EmitArgument3>
    </div>
    <hr>
    Declaring Emitted Events。
    Events Validation 事件驗證 意義在於將驗證邏輯從表單提交的地方分離出來
    <EmitValidation></EmitValidation>
    <EmitValidation @submit="handleChildSubmit">外加父組件監聽</EmitValidation>
    {{ content }} <br>
    後者者表示在父組件中對子組件的 submit 事件進行了監聽，當子組件觸發該事件時，會執行 <br>
    handleChildSubmit 方法。前者無法感知子組件的 submit 事件 <br>
</template>