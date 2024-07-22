<script>
import ValueInputBind from '@/components/op-doc/components-v-model-docs/ValueInputBind.vue';
import GetSetBind from '@/components/op-doc/components-v-model-docs/GetSetBind.vue';
import VmodelArgument from '@/components/op-doc/components-v-model-docs/V-model-Argument.vue';
import MultiBind from '@/components/op-doc/components-v-model-docs/MultiBindV-model.vue'
import VModelModifiers from '@/components/op-doc/components-v-model-docs/V-model-Modifiers.vue';
import ArgumentModifiers from '@/components/op-doc/components-v-model-docs/Argument-Modifiers.vue';
export default {
    components: { ValueInputBind, GetSetBind, VmodelArgument, MultiBind, VModelModifiers, ArgumentModifiers },
    data() {
        return {
            searchText: "",
            message: 'hello', message2: 'hello 2~',
            title: 'v-model argument引數',
            first: '多重', last: '引數',
            myText: 'aaaaaa',
            second: "aa首字大寫", third: "aaa都大寫",
        }
    },
}
</script>
<template>
    最基礎v-model >> :value + @input 整串=== v-model="xxx"
    <input :value="searchText" @input="searchText = $event.target.value" /> 框內值: {{ searchText }}
    <hr />

    在父組件更動值 影響子組件的值<br />
    使用原始value input 子組件(modelValue為預設名字):
    <ValueInputBind v-model:="message" /> 父 {{ message }}
    <hr style="border-top: 1px dashed pink;"> <!-- 行內樣式創分隔虛線 -->
    get set連動方式 子組件:
    <GetSetBind v-model="message2" /> 父 {{ message2 }}
    <hr>

    v-model argument 引數使用
    <VmodelArgument v-model:title="title" />
    <VmodelArgument :title="title" @update:title="new2Value => title = new2Value" />
    {{ title }}
    <hr>

    Multiple v-model bindings子組件。<br>
    {{ first }} {{ last }}
    <MultiBind v-model:first-name="first" v-model:last-name="last" />
    <MultiBind :firstName="first" @update:firstName="newValue => first = newValue" :lastName="last"
        @update:lastName="newValue => last = newValue" />
    <hr>

    v-model modifiers 自定義修飾子(常見的 .lazy .trim)<br>
    input 第一個大寫
    <VModelModifiers v-model.capitalize="myText"></VModelModifiers>
    <hr>
    
    引數下的修飾符 {{ second }}、{{ third }}
    <ArgumentModifiers v-model:first-big.capitalize="second" v-model:all-big.uppercase="third" />
</template>