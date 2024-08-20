<script>
export default {
    methods: {
        goToAbout() {
            console.log(this.$route);
            console.log(this.$router);
            this.$router.push('/about')
        },
    },
}
</script>
<template>
    <h2>HomeView.vue</h2>
    $route 的值: <br>{{ $route }} <br>
    $router 的值: <br>{{ $router }} <br>
    <button @click="goToAbout">Go to About</button>
</template>