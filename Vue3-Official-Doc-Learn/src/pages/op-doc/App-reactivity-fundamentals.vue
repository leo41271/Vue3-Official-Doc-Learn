<script>
import { nextTick } from 'vue';
import { debounce } from 'lodash'; // 記得下載 npm i lodash
// import * as _ from 'lodash'; // 使用時 _.debounce(...) 
// const _ = require('lodash'); // 此行前端不能使用。

export default {
    data() {
        return {
            person: {
                name: '亞克',
                age: 25,
                address: {
                    city: '開羅',
                    country: '埃及',
                    test: {
                        name: "yy",
                        num: "12",
                        arr: ['222', '333']
                    }
                }
            },
            someObject: {},
            count: 0,
        }
    },
    mounted() { // 這是生命週期鉤子的一種 後面講 先想成某種特殊函式
        console.log("mounted ", this.person);
        console.log("mounted ", this.person.address.test);
        this.test();

        const newObject = {}
        this.someObject = newObject
        console.log(newObject === this.someObject) // false
        console.log(newObject, this.someObject)
    },
    created() {
        // 每个实例都有了自己的预置防抖的处理函数
        this.debouncedClick = debounce(this.addWithDebounce, 1500)
        // this.debouncedClick = _.debounce(this.addWithDebounce, 1500)
    },
    unmounted() {
        this.debouncedClick.cancel() // 最好是在组件卸载时 // 清除掉防抖计时器
    },
    methods: {
        test() {
            console.log("test method: ", this.person, this.gggg);
        },
        add() {
            this.count++;
            console.log(document.querySelector('button').textContent);
            this.person.address.test.arr.push('A_A') // 深層響應性
        },
        nextTickShow() {
            this.count++;
            nextTick(() => {
                console.log(document.querySelector('button').textContent); // 此時 DOM 已經被更新
            });
        },
        stateConflictDebounce2: debounce(function () {
            this.count++; // 多個元件實例都共用這同一個預置防手震的函數>> 互相干擾
        }, 1500),
        stateConflictDebounce1() { // stateConflictDebounce1 2 同等
            // debounce 會返回一個函式 上面部分 將變數表示成一個方法。
            const debouncedFunction = debounce(() => { this.count++; }, 1500);
            debouncedFunction();
        },
        addWithDebounce() {
            this.count++;
        },
    }
}
</script>
<template>
    gggg: {{ gggg }} <br>
    <button @click="add">普通按鈕{{ count }}</button>
    <button @click="nextTickShow">nextTick :{{ count }}</button>
    <p>{{ person }}</p>
    <button @click="stateConflictDebounce1">防抖按鈕{{ count }} 衝突版</button> <br>
    <button @click="debouncedClick">防抖按鈕{{ count }}</button>
</template>