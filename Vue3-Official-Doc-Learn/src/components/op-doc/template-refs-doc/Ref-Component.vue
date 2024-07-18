<template><!-- Ref-Component.vue -->
    <div>
        <p>public :{{ publicData }}。<br> private : {{ privateData }}</p>
        <button @click="publicMethod">執行公共方法</button>
        <button @click="privateMethod">執行私有方法</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            publicData: '這是子組件的公共數據',
            privateData: '這是子組件的私有數據'
        };
    },
    methods: {
        publicMethod() {
            alert('子組件的公共方法已執行！');
        },
        privateMethod() {
            alert('這是子組件的私有方法，不應該被訪問！');
        }
    },
    expose: ['publicData', 'publicMethod']
};
</script>
