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
import NestUser from "@/views/NestedRoutes/User.vue";
import NestUserHome from "@/views/NestedRoutes/UserHome.vue";
import NestUserProfile from "@/views/NestedRoutes/UserProfile.vue";
import NestUserPosts from "@/views/NestedRoutes/UserPosts.vue";
import NestUserName from "@/views/NestedRoutes/UserNamed.vue";

const routes = [
    { path: "/", component: HomeView }, // 範例1
    { path: "/about", component: AboutView }, // 範例1
    { path: "/users/:username/posts/:postId", component: UserPost }, // 範例2 DynamicRouteParams
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }, // 範例2 值在 `route.params.pathMatch` NotFoundRoute
    { path: "/user-:afterUser(.*)", component: UserGeneric }, // 範例2 值在 `route.params.afterUser` NotFoundRoute
    { path: "/", name: "home", component: Home }, // named route範例3
    { path: "/about", name: "about", component: About }, // named route範例3
    { path: "/user/:username", name: "profile", component: User }, // named route範例3
    {
        path: "/users2/:username", // 2做命名區隔 (若網址打一樣 上面之前範例會顯示)
        name: "nestShowParents",
        component: NestUser, // 省略父組件 可透過註解掉這行觀察
        children: [
            // 當 User組件中的 <router-view> 之Url 符合時 對應之路由所應設之組件時 該組件將被渲染
            { path: "", component: NestUserHome }, //
            { path: "profile", component: NestUserProfile }, // /user/:id/profile
            { path: "posts", component: NestUserPosts }, // /user/:id/profile
            { path: "", name: "userName", component: NestUserName }, // /user/:id/profile
        ],
    },
];

const router = createRouter({
    // history: createMemoryHistory(), // 初始範例用的
    history: createWebHistory(),
    routes,
});

export default router;

