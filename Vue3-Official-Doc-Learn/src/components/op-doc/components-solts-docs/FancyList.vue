<script>// FancyList.vue
export default {
    props: ['api-url', 'per-page'],
    data() { return { items: [] } },
    mounted() { // mock remote data fetching
        console.log('apiUrl:', this.apiUrl, ' perPage:', this.perPage);
        setTimeout(() => {
            this.items = [
                { body: '插槽名字與榜定乎要物件同名', username: 'Evan You', likes: 20 },
                { body: '順便用解構取 物件屬性', username: 'Natalia Tepluhina', likes: 10 }
            ]
        }, 1000)
    }
}
</script>
<template>
    <ul>
        api-url: {{ apiUrl }}(使用是>>"apiUrl")。per-page: {{ perPage }} (apiUrl)
        <li v-if="!items.length">Loading...設API還沒取到值時畫面載入</li>
        <li v-for="item, index in items" :key="index">
            <slot name="item" v-bind="item" />
        </li>
    </ul>
</template>
<style scoped>
ul {
    list-style-type: none;
    padding: 2px;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
}

li {
    padding: 2px 5px;
    margin: 10px;
    background: #fff;
}
</style>