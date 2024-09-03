<template>
    <div>
        <!-- 練習題目:請計算期數
        給定兩個日期 與 特定結算期(年、半年、季、月，比值12:6:3:1)
        計算 rule:實際月份(涵蓋整個的)+零碎日期 起日=訖日+1則視為滿一個月
        以下舉例
        2023-01-01 ~ 2024-12-31共(2 4 8 24)
        2023-08-14 ~ 2024-12-14共(1 2 5 16)
        2023-08-14 ~ 2024-12-13共(1 2 5 16) 起日=訖日+1則視為滿一個月
        2024-02-01 ~ 2024-02-28共(0 0 0 0)
        2024-02-01 ~ 2024-02-29共(0 0 0 1)
        2024-02-01 ~ 2024-03-31共(0 0 0 2) -->
        <h2>期數計算器</h2>
        <div>
            <label for="startDate">起始日:</label>
            <input type="date" v-model="startDate" @change="countPeriods" />
        </div>
        <div>
            <label for="endDate">結束日:</label>
            <input type="date" v-model="endDate" @change="countPeriods" />
        </div>
        <div>
            <label for="paymentFrequency">繳別:</label>
            <select v-model="paymentFrequency" @change="countPeriods">
                <option value="monthly">月繳</option>
                <option value="quarterly">季繳</option>
                <option value="semiAnnual">半年繳</option>
                <option value="annual">年繳</option>
            </select>
        </div>
        <button @click="countPeriods">計算期數</button>
        <div v-if="periods !== null">
            計算結果: {{ periods }} 期
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

// 定義起日和訖日
const startDate = ref('2023-02-04'); // 起始日
const endDate = ref('2024-04-04');   // 結束日
const paymentFrequency = ref('monthly')
const periods = ref(null)

function countPeriods() {
    if (!startDate.value || !endDate.value) {
        periods.value = null
        console.log("沒填寫值");
        return
    }
    // console.log(startDate.value, endDate.value);
    // const startTime = new Date(startDate.value)
    // const endTime = new Date(endDate.value)
    const [startYear, startMonth, startDay] = startDate.value.split("-").map(Number);
    const endYear = Number(endDate.value.split("-")[0])
    const endMonth = Number(endDate.value.split("-")[1])
    const endDay = Number(endDate.value.split("-")[2])

    let toTalMonth = null
    let checkDateToMonth = 0

    if (startYear === endYear && startMonth === endMonth)
        toTalMonth = Math.floor((endDay - startDay + 1) / getDaysInMonth(startYear, startMonth)) //同年月計算
    else {
        const startCountMon = startYear * 12 + startMonth
        const endCountMon = endYear * 12 + endMonth - 1
        if (startDay >= endDay) checkDateToMonth = endDay + 1 >= startDay ? 1 : 0
        else checkDateToMonth = (startDay === 1 && endDay === (getDaysInMonth(endYear, endMonth))) ? 2 : 1
        // 0201~0331 >> 2
        toTalMonth = endCountMon - startCountMon + checkDateToMonth
    }

    switch (paymentFrequency.value) {
        case 'monthly':
            periods.value = String(Math.floor(toTalMonth / 1))
            break
        case 'quarterly':
            periods.value = String(Math.floor(toTalMonth / 3))
            break
        case 'semiAnnual':
            periods.value = String(Math.floor(toTalMonth / 6))
            break
        case 'annual':
            periods.value = String(Math.floor(toTalMonth / 12))
            break;
        default:
            break;
    }
}

function getDaysInMonth(year, month) {
    switch (month) {
        case 1: // 一月
        case 3: // 三月
        case 5: // 五月
        case 7: // 七月
        case 8: // 八月
        case 10: // 十月
        case 12: // 十二月
            return 31;
        case 4: // 四月
        case 6: // 六月
        case 9: // 九月
        case 11: // 十一月
            return 30;
        case 2: // 二月
            return year % 4 === 0 ? 29 : 28;
        default:
            return "輸入月份無效";
    }
}
</script>
