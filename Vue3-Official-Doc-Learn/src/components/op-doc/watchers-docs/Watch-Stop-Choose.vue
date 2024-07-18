<template><!-- Watch-Stop-Choose.vue -->
    <div>
        結論 使用 Option API 定義的監聽器沒有直接的方法可以手動停止。這是因為在 Option API 中，監聽器是通過 watch 選項來定義的，而這些監聽器不會返回一個可以用來停止它們的函數。<br>
        data<input type="text" v-model="data" placeholder="輸入data訊息"> <br>
        torch<input type="text" v-model="torch" placeholder="輸入torch訊息"><br>
        message<input type="text" v-model="message" placeholder="輸入message訊息"><br>
        <button @click="stopWatchers(kill)">停止 watcher</button>
        <select v-model="kill" id="killName">
            <option value="data">砍掉data監聽器</option>
            <option value="torch">砍掉torch監聽器</option>
            <option value="message">砍掉message監聽器</option>
            <option value="all">砍掉all</option>
        </select>
        看似有砍掉實則只是沒動作 因為沒方法可執行
        <br>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: '123',
            data: "一二三",
            torch: "火炬",
            kill: "",
        };
    },
    watch: {
        message(newV, oldV) { console.log("message new ", newV, "old", oldV); },
        data(newV, oldV) { console.log("data new ", newV, "old", oldV); },
        torch(newV, oldV) { console.log("torch new ", newV, "old", oldV); },
        $options(newV, oldV) { console.log("$options new ", newV, "old", oldV); },
    },
    methods: {
        stopWatchers(killWatch) {
            const watchers = this.$options.watch;
            console.log(watchers, killWatch); // 有取得到 三個監聽器
            // 判断是否需要停止所有观察者
            console.log(watchers[killWatch]) // 等同 watchers.data 。尤其內容看與正統stop console比較內容 應該是無法stop 因為沒有定義如何停止
            const unwatch = watchers[killWatch];
            console.log(unwatch()); // undefined 表示沒有這個可以取消的方法
            // how to stop watcher without unwatch() in vue 
            if (killWatch === 'all') { Object.keys(watchers).forEach(prop => { }); }
            else {
                if (watchers[killWatch]) { }
                else { console.log("找不到" + killWatch + "的观察者"); }
            }
        }
    }
}
</script>