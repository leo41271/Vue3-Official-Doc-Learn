<template><!-- NameScopeSlot.vue  -->
    <header>
        <slot name="header" message="hello" gg666="測試自定義屬性 gg666"></slot>
    </header>
    <main>
        <slot gg666="default slot的 gg666屬性"></slot>
    </main>
    <footer>
        <slot name="footer">footer 預設內容</slot>
    </footer>
</template>