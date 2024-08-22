// router/index.js
import { /* createMemoryHistory, */ createWebHistory, createRouter, } from "vue-router";
import HomeView from "@/views/GettingStarted/HomeView.vue"; // GettingStarted 範例1
import AboutView from "@/views/GettingStarted/AboutView.vue"; // GettingStarted 範例1
import UserPost from "@/views/DynamicRouteMatching/UserPost.vue"; // NotFound 範例2
import NotFound from "@/views/DynamicRouteMatching/NotFound.vue"; // NotFound 範例2
import UserGeneric from "@/views/DynamicRouteMatching/UserGeneric.vue"; // NotFound 範例2
import User from "@/views/NamedRoute/User.vue";
import Home from "@/views/NamedRoute/Home.vue";
import About from "@/views/NamedRoute/About.vue";
const routes = [
    { path: "/", component: HomeView }, // 範例1
    { path: "/about", component: AboutView }, // 範例1
    { path: "/users/:username/posts/:postId", component: UserPost }, // 範例2 DynamicRouteParams
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }, // 範例2 值在 `route.params.pathMatch` NotFoundRoute
    { path: "/user-:afterUser(.*)", component: UserGeneric }, // 範例2 值在 `route.params.afterUser` NotFoundRoute
    { path: "/", name: "home", component: Home }, // named route範例3
    { path: "/about", name: "about", component: About }, // named route範例3
    { path: "/user/:username", name: "profile", component: User }, // named route範例3
];

const router = createRouter({
    // history: createMemoryHistory(), // 初始範例用的
    history: createWebHistory(),
    routes,
});

export default router;

