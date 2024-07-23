<template><!-- BaseLayout.vue -->
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot><!-- A <slot> outlet without name implicitly has the name "default". -->
        </main>
        <footer>
            <slot name="footerPart"></slot>
        </footer>
    </div>
</template>
<style>
footer {
    border-top: 1px solid #ccc;
    color: #666;
    font-size: 0.8em;
}
</style>