<template>
    <div>
        <h1>基本promise使用 : pVaule :{{ pVaule }} </h1>
        <button @click="getPromise"> 取得promise</button>

        <h1>使用Promise.all的Vue示例</h1>
        <ul>
            <li v-for="(result, index) in results" :key="index">{{ result }}</li>
        </ul>
        <p> promise .finally 的 值 {{ resultsFinally }}</p>

        <h1>使用 promise.resolve </h1>
        <p> 允許你將非 Promise 值轉換為 Promise，以便統一處理異步操作。
            這也有助於使代碼更一致和可讀，因為你可以期望使用 .then() 和 .catch() 來處理 Promise 對象，
            而不必關心值的實際類型。</p>
        <p>promise.resolve : {{ resolvedValue }}</p>
        <p>promise.resolve : {{ objValue }}</p>
        <p>promise.resolve : {{ existingPromiseValue }}</p>

        <h1> promise.rejecct </h1>
        <p>promise.rejecct 會立即返回一個已經被拒絕的 Promise，而不需要等待異步操作完成。
            可以將一個錯誤對象（通常是一個 Error 實例或一個錯誤消息）作為參數傳遞給它，以指示 Promise 的拒絕原因。
        </p>
        <button @click="rejectPromise">觸發拒絕 Promise</button>
        <p>{{ errorMessage }}</p>

        <h1> promise.any</h1>
        <p>Promise.any() 是一个较新的 JavaScript Promise 方法，用于处理多个 Promise 对象，
            只要其中一个 Promise 成功（resolved），就会返回成功状态，并返回第一个成功的 Promise 的结果。
            如果所有 Promise 都失败（rejected），则返回一个包含所有失败原因的数组。</p>

    </div>
</template>
<script>
export default {
    data() {
        return {
            pVaule: "",
            results: [],
            resultsFinally: '還沒有東東',
            resolvedValue: null,
            objValue: null,
            existingPromiseValue: null,
            errorMessage: "",
        }
    },
    methods: {
        // 創建一個返回 Promise 的函數
        fetchData() {
            return new Promise((resolve, reject) => {
                // 模擬一個異步操作，這裡使用 setTimeout 來模擬延遲
                setTimeout(() => {
                    const randomNum = Math.random();
                    if (randomNum < 0.5) { // 如果隨機數小於 0.5，則成功，解析結果
                        resolve("成功：數據已獲取 fetchDdata 裡面的 | ");
                    } else { // 如果隨機數大於等於 0.5，則失敗，拒絕並返回錯誤信息
                        reject("失敗：數據無法獲取 fetchDdata 裡面的 | ");
                    }
                }, 2000); // 延遲 1 秒
            });
        },
        getPromise() {
            this.pVaule = '資料呼叫中....'
            // 調用 fetchData 函數，處理 Promise 的成功和失敗情況
            this.fetchData().then((result) => {
                // 成功情況下，result 是 resolve 的結果
                console.log(result + "getPromise 裡面的");
                this.pVaule = result;
            }).catch((error) => {
                // 失敗情況下，error 是 reject 的錯誤信息
                // console.error(error + "getPromise 裡面的");
                this.pVaule = result;
            })
        },
        // 模擬異步操作的函數
        simulateAsyncOperation(id, duration, shouldFail = false) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (shouldFail) {
                        reject(`操作 ${id} 失敗`);
                    } else {
                        resolve(`操作 ${id} 完成`);
                    }
                }, duration);
            });
        },
        promiseAll() {
            // 鉤子 當Vue組件或頁面被成功挂載到網頁上並可見時，mounted 鉤子會觸發。 例如發起網絡請求、初始化數據、設置監聽器等
            // 創建多個Promise，其中一個模擬操作失敗
            const promise1 = this.simulateAsyncOperation(1222, 2000);
            const promise2 = this.simulateAsyncOperation(2, 1500,); // 模擬失敗
            const promise3 = this.simulateAsyncOperation(3, 1000);
            Promise.all([promise1, promise2, promise3]) // 使用Promise.all等待所有Promise完成
                .then((results) => {
                    console.log("所有操作都已完成");
                    console.log("結果：", results);
                    this.results = results; // 更新Vue組件的數據
                })
                .catch((error) => {
                    console.error("至少一個操作失敗：", error);
                })
                .finally(() => {
                    this.resultsFinally = '最後必定執行 this: ' + this.results;
                    console.log('無論如何都會執行的清理工作');
                    // 在這裡執行無論成功還是失敗都需要執行的清理工作
                });
        },
        promiseResolve() {
            // 使用 Promise.resolve() 創建已解決的 Promise
            Promise.resolve(42)
                .then((result) => {
                    this.resolvedValue = result; // 更新組件數據
                });
            const obj = { name: 'John' };
            Promise.resolve(obj)
                .then((result) => {
                    this.objValue = result; // 更新組件數據
                });
            const existingPromise = new Promise((resolve) => { // 使用現有的 Promise 對象
                setTimeout(() => {
                    resolve('Hello, Promise!');
                }, 1000);
            });
            Promise.resolve(existingPromise)
                .then((result) => {
                    this.existingPromiseValue = result; // 更新組件數據
                });
        },
        rejectPromise() {
            // 使用 Promise.reject() 創建一個已拒絕的 Promise 並提供錯誤信息
            const rejectedPromise = Promise.reject("這是一個拒絕的 Promise");

            // 使用 .catch() 方法處理拒絕狀態
            rejectedPromise
                .then((result) => {
                    // 這個回調不會執行，因為 Promise 已經被拒絕
                    console.log("成功：" + result);
                })
                .catch((error) => {
                    // 在拒絕狀態下，這個回調會被執行，並接收拒絕原因（錯誤信息）
                    this.errorMessage = "錯誤：" + error; // 更新組件數據以顯示錯誤信息
                });
        },
    },
    mounted() {
        this.promiseAll();
        this.promiseResolve();
    },
}
// 來源忘記了 MDN ， gpt輔助 。
// mdn Static methods promise all https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// mdn Static methods promise any https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
// mdn Static methods promise reject https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
// mdn Static methods promise resolve https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
</script>