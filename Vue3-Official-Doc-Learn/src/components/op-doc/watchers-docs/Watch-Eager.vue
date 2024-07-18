<template><!-- Watch-Eager.vue -->
    <!-- 首次数据初始化，并不会触发watch -->
    watch 預設是 lazy (資料有變動才會呼叫)<br>
    部分狀況如 拿取(fetch)初始資料 ，而相關資料又變動時再拿取一次。 <br>
    eager後: {{ eagerData }} <br> 沒eager前長這樣: {{ eagerOri }} <br>
    一般後: {{ data }} <br> 一般沒eager前長這樣: {{ dataOri }}
</template>
<script>
export default {
    data() {
        return {
            eagerData: "eager初始資料",
            eagerOri: "eager初始資料 ",
            data: "一般監聽原始",
            dataOri: "一般監聽原始",
        };
    },
    watch: {
        eagerData: {
            // handler 執行時 在 create hook 之前
            handler(newValue, oldValue) {
                if (this.eagerData === "eager初始資料") {
                    this.eagerData = "eager 觸發";// 代替re-fetch 一次
                }
            },
            immediate: true // 啟用 Eager Watcher，立即觸發回調函數
        },
        data(newV, oldV) {
            if (this.data === "一般監聽原始") { this.data = "一般的有變動到 實際不會" }
        }
    },
    mounted() { console.log('mounted 的console', this.eagerData); }
}
</script>