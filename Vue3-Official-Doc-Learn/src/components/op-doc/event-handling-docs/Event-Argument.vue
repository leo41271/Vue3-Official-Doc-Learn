<template><!-- Event-Argument.vue -->
    Accessing Event Argument in Inline Handlers <br>
    有時需要訪問原始的 DOM 事件 (如 取得滑鼠座標 按鍵的按下情況 事件的目標元素) <br>
    <!-- using $event special variable -->
    <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
    <!-- using inline arrow function -->
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">Submit</button> <br>
    箭頭函數在 JavaScript 中的特性是它繼承了父範圍的上下文 所以不用 $ <br>
    $event 代表的是觸發該事件的原始 DOM 事件(指的是在網頁上發生的原始事件)。
</template>
<script>
export default {
    methods: {
        warn(message, event) {
            // now we have access to the native event
            console.log(event)
            if (event) {
                event.preventDefault()
            }
            alert(message);
        }
    }
}
</script>