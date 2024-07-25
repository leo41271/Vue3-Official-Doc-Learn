<script>
</script>
<template>
    儘管推薦使用 camelCase，但 :style 也支持 kebab-cased 形式的 CSS 屬性key。 <br>
    綁定陣列 物件 與class 相同。 <br>
    透過多值 實踐兼容不同瀏覽器(部分早期版較早需要特殊詞達成功能)
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">樣式多值</div>
</template>