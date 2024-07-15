<script>

</script>
<template>
    <!-- <p class="ccc ddd">Hi!</p> 加上這一行同時顯示 將失去 aaa bbb -->
    <!-- 要解決前段註解 透過使用 $attr -->
    <!-- <p :class="$attrs.class">Hi! attrs</p> -->
    <div>
        <p class="ccc ddd">Hi!</p>
        <p class="ccc ddd" :class="$attrs.class">Hi!</p>
    </div>
</template>