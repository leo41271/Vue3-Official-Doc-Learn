import { createMemoryHistory, createRouter } from "vue-router"; // router/index.js
import HomeView from "@/views/GettingStarted/HomeView.vue";
import AboutView from "@/views/GettingStarted/AboutView.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/about", component: AboutView },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;