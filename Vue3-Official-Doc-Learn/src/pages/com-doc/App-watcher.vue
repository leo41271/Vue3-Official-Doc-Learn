<script setup>
import WatchBasic from '@/components/com-doc/watchers-docs/Watch-Basic.vue'
import WatchDot from '@/components/com-doc/watchers-docs/Watch-Dot.vue' // 練習用
import WatchSourceTypes from '@/components/com-doc/watchers-docs/Watch-Source-Types.vue'
import WatchDeep from '@/components/com-doc/watchers-docs/Watch-Deep.vue'
import WacthEager from '@/components/com-doc/watchers-docs/Watch-Eager.vue'
import WatchOne from '@/components/com-doc/watchers-docs/Watch-One.vue'
import WatchEffect from '@/components/com-doc/watchers-docs/WatchEffect.vue'
import WatchPost from '@/components/com-doc/watchers-docs/Watch-Flush-Post.vue';
import WatchSync from '@/components/com-doc/watchers-docs/Watch-Flush-Sync.vue';
import WatchKill from '@/components/com-doc/watchers-docs/Watch-Stop.vue'
</script>
<template>
    Watch <br>
    <WatchBasic></WatchBasic>
    <hr>
    <WatchDot></WatchDot>
    <hr>
    <WatchSourceTypes></WatchSourceTypes>
    <hr>
    <WatchDeep></WatchDeep>
    <hr>
    <WacthEager></WacthEager>
    <hr>
    <WatchOne></WatchOne>
    <hr>
    <WatchPost></WatchPost>
    <hr>
    <WatchSync></WatchSync>
    <hr>
    <WatchEffect />
    <hr>
    <WatchKill></WatchKill>
    <hr>
    https://michaelnthiessen.com/difference-between-computed-property-and-watcher <br>
    計算較有聲明性
    Computed props are more declarative than watched properties<br>
    計算 較純粹:回傳值 同步 無副作用(如異步請求 更改DOM)
    Computed props should be pure: return a value, synchronous, and have no side-effects<br>
    計算確實產生(屬性)監聽則指呼叫函式
    Computed props create new reactive properties, watched props only call functions<br>
    計算可受多屬性影像(多對一)監聽可影響多屬性(一對多)
    Computed props can react to changes in multiple props, whereas watched props can only watch one at a time<br>
    經過計算得到的屬性值，它們會被緩存 只在需要時才會被重新計算，監聽屬性發生改變時立即執行相應的函數
    Computed props are cached, so they only recalculate when things change. Watched props are executed every
    time<br>
    同上Computed props are evaluated lazily, meaning they are only executed when they are needed to be used. Watched
    props
    are executed whenever a prop changes<br><br>
    Watch is for side effects. If you need to change state you want to use a computed prop instead.<br>
    Most of the time you'll want a computed prop, so try to use that first.<br>
</template>