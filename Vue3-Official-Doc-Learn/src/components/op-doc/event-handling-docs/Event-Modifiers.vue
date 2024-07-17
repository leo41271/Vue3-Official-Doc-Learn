<template><!-- Event-Modifiers.vue -->
    <button @click="handleClick($event)">點擊我</button>
    但為方法追求純粹商業邏輯>>>事件修飾符 . 之後 <br>
    .stop 阻止冒泡<br>
    .prevent 阻止事件預設行為。元素上事件觸發，通常執行該事件預設行為，如點擊連結會跳到連結的位址，提交表單刷新頁面。<br>
    @click.stop.prevent 可以同時使用 鏈式寫法 <br>
    也可以只有修饰符 @submit.prevent (如 form 表單下的)<br>
    .self : 只觸發 該元素本身 所綁.(不處理子元素) <br>
    <div @click="handleClickOutside" style="border: 1px solid black; padding: 20px;">
        <button @click="handleClickInside">沒用self</button> {{ selfMsg }}
    </div>
    <div @click.self="handleClickOutside" style="border: 1px solid black; padding: 20px;">
        <button @click="handleClickInside">使用self</button> {{ selfMsg }}
    </div><br>
    使用修饰符时需要注意调用顺序，因为相关代码是以相同的顺序生成的。<br>
    因此使用 @click.prevent.self 会阻止元素及其子元素的所有点击事件的默认行为，<br>
    而 @click.self.prevent 则只会阻止对元素本身的点击事件的默认行为。<br><br>
    .capture 略<br>
    .once 只用一次<br>
    scroll.passive 略<br>
</template>
<script>
export default {
    data() {
        return {
            message: '按钮被点击了',
            selfMsg:"1",
        }
    },
    methods: {
        handleClick(event) {
            console.log(event);
            event.preventDefault();// 阻止默認行為
            event.stopPropagation();// 停止事件冒泡// 接下來可以執行其他操作或者處理事件
        },
        handleClickInside() {
            this.selfMsg+= "1" 
        },
        handleClickOutside() {
            this.selfMsg+= "2" 
        }
    }
}
</script>