<script setup>
import router from '@/router';
</script>
<template>
    basic
    <li><router-link to="/prop-route/users/332">new /prop-route/users/332</router-link></li>
    <li><router-link :to="{ name: 'prop-new', params: {id: 123}}">new /prop-route/users/123</router-link></li>
    object-mode
    <li><router-link to="/prop-route/object-mode">object-mode /prop-route/object-mode </router-link> 當 props 是靜態的時候很有用
    </li>
    function-mode <br>
    <router-link :to="{ path: '/function-mode-object-mode', query: { popup: 'true' } }">
        function-mode-object-mode true
    </router-link>
    <br>
    <router-link :to="{ path: '/function-mode-object-mode', query: { popup: 'false' } }">
        function-mode-object-mode false
    </router-link>
    <router-view></router-view>
    <hr>
    named views
    <li><router-link :to="{ path: '/prop-route/named-views/123' }"> /prop-route/named-views/123</router-link></li>
    <router-view name="sidebar"></router-view>
    <hr>
</template>