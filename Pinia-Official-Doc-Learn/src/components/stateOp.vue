<template><!-- 組件檔案 或其他地方 、 stateOp.vue -->
    store 本身 <br>
    store1 {{ store1 }} <br>
    <hr>
    mapState 不能更改屬性部分<br>
    count {{ count }} <br>
    myOwnName {{ myOwnName }} <br>
    double {{ double }} <br>
    magicValue {{ magicValue }} <br><br>
    <hr>
    mapWritableState 可更改屬性部分<br>
    count2 {{ count2 }} <br>
    myCount2 {{ myCount2 }} <br>
    <hr>
    <button @click="reset">重置 this.store1</button>
    <hr>
    <button @click="count1_2_add">直接修改 單一屬性修改(this.store1.count++ this.count2++ this.myCount2++ 這些加)</button><br>
    <hr>
    <button @click="patchUse">多屬性修改 $patch </button> <br>
    <button @click="patchUsefunction(store1)">多屬性修改 $patch(函數) </button>
    任何集合的修改需要有新創建集合，$patch 方法也接受一個函數
    <hr>
    <button @click="replaceState">替換 state </button> <br>
    <button @click=" this.store1.count2++;">+++</button> <br>
    跳過沒看沒實作部分: 訂閱(他與watch類似，patch 后只触发一次)、TS、組合API。
</template>
<script>
import { useCounterStore } from '@/stores/state/opApi/stateCounter.js'
import { mapState, mapWritableState } from 'pinia'
export default {
    data() {
        return { store1: useCounterStore(), }
    },
    computed: {
        // 不能更改值
        ...mapState(useCounterStore, ['count']), //this.store1.count this.count  兩者相同
        ...mapState(useCounterStore, {
            myOwnName: 'count', // 替換名字
            double: store => store.count * 2,
            magicValue(store) { // 類型不一定正確
                return store.name + this.count + this.double
            },
        }),
        // 可更改
        ...mapWritableState(useCounterStore, ['count2']),
        ...mapWritableState(useCounterStore, { myCount2: 'count2', }),
    },
    methods: {
        reset() { this.store1.$reset() },
        count1_2_add() {
            this.store1.count++
            // this.count++; // this.myOwnName++;
            //console警告 App.vue:43 [Vue warn]: Write operation failed: computed property "count" is readonly.
            this.count2++;
            this.myCount2++;
        },
        patchUse() {
            this.store1.$patch({
                count: this.store1.count + 1,
                name: this.store1.name + "T",
                check: !this.store1.check,
            })
        },
        patchUsefunction(ggg) {
            ggg.$patch((data) => {
                data.items.push({ name: 'shoes', quantity: 1 })
                data.check = !data.check
            })
        },
        replaceState() {
            // 不能完全替换掉 store 的 state>破壞響應性。但可patch 它
            // 當你直接替換整個 store.$state 物件時，Vue 無法偵測到屬性的更改 
            // this.store1.$state = { count2: null } // 實際上没有替换`$state` (會破壞響應性)
            this.store1.$patch({ count2: 24 }) // 在它内部呼叫 `$patch()` (可以這樣做)
        },
    },
}
</script>