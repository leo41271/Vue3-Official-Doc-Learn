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
import First from "@/views/NamedViews/Basic/First.vue";
import Second from "@/views/NamedViews/Basic/Second.vue";
import Third from "@/views/NamedViews/Basic/Third.vue";
import UserSettings from "@/views/NamedViews/NestedNamedViews/UserSettings.vue";
import UserEmailsSubscriptions from "@/views/NamedViews/NestedNamedViews/UserEmailsSubscriptions.vue";
import UserProfile from "@/views/NamedViews/NestedNamedViews/UserProfile.vue";
import UserProfilePreview from "@/views/NamedViews/NestedNamedViews/UserProfilePreview.vue";
import LeoPage from "@/views/RedirectandAlias/LeoPage.vue";
import MaxRoll from "@/views/RedirectandAlias/MaxRoll.vue";
import MaxRollLevel from "@/views/RedirectandAlias/MaxRollLevel.vue";
import OldUser from "@/views/PropstoRouteComponent/OldUser.vue";
import NewUser from "@/views/PropstoRouteComponent/NewUser.vue";
import Sidebar from "@/views/PropstoRouteComponent/Sidebar.vue";
import ObjectMode from "@/views/PropstoRouteComponent/ObjectMode.vue";

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
            { path: "", name: "thisIsUseToExcludeWarning", component: NestUserHome }, // thisIsUseToExcludeWarning 用於迴避避免此章節範例出現的警告
            // The route named "nestShowParents" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.
            { path: "profile", component: NestUserProfile }, // /user/:id/profile
            { path: "posts", component: NestUserPosts }, // /user/:id/post
            { path: "", name: "userName", component: NestUserName }, // /user/:id/profile
        ],
    },
    {
        path: "/nestView", // 路徑映射 映射組 映射組再映射多組件配置 name view範例
        components: { default: First, a: Second, b: Third },
    },
    {
        path: "/nestView/other",
        components: { default: Third, a: Second, b: First },
    },
    {
        path: "/nestview/settings", // 可用 named views。 nestnameview 範例
        component: UserSettings,
        children: [
            {
                path: "/emails",
                name: "nestEmail",
                component: UserEmailsSubscriptions,
            },
            {
                path: "/profile2",
                components: { default: UserProfile, helper: UserProfilePreview },
            },
        ],
    },
    { path: "/leo-home", name: "leo#41271", component: LeoPage }, // 實際頁面
    { path: "/maxroll-build", name: "maxroll", component: MaxRoll }, // 實際頁面
    { path: "/leo", redirect: "leo-home" /*, component: LeoPage */ }, // 重導不用寫組件
    { path: "/d2r-build", redirect: "maxroll-build" /*, component: MaxRoll */ }, // 嵌套路由(巢狀)
    { path: "/maxroll", redirect: { name: "maxroll" } /*, component: MaxRoll */ }, // 用 name 重導
    // 設兩個重導 看結果
    // 函式 動態重導
    {
        path: "/maxroll-build/:buildLevel", // /maxroll/S -> /maxroll?level=S
        redirect: (to) => {
            const Level = to.params.buildLevel;
            if (Level === "S" || Level === "A" || Level === "B") {
                return {
                    path: "/maxroll-build-level",
                    query: { level: to.params.buildLevel },
                };
            } else {
                return { name: "maxroll" }; /* 對於其他值，重定向到首頁 */
            }
        }, // 回顧 路由匹配語法
    },
    { path: "/maxroll-build-level", component: MaxRollLevel },
    // 相對重導 並沒有被實現 // https://github.com/vuejs/router/issues/1902 等解答中
    {
        path: "/maxroll-build/:buildLevel/roll",
        redirect: (to) => {
            console.log("to ", to); // or { path: 'profile'}
            return "gg"; // 這將會取代第一個反斜線以後的部分
            // return { path: "gg" };
        },
    },
    { path: "/maxroll-build/:buildLevel/gg", component: MaxRollLevel },
    { path: "/prop-route/users/:id", name:"prop-old", component: OldUser },
    { path: "/prop-route/users/:id", name:"prop-new", component: NewUser, props: true },
    {
        path: '/prop-route/named-views/:id',
        components: {
            default: NewUser,   // 主視圖
            sidebar: Sidebar // 命名視圖
        },
        props: {
            default: true,   // 將路由參數作為 prop 傳遞給 User
            sidebar: false   // 不傳遞任何 props 給 Sidebar
        },
    }, 
    {
        path: '/prop-route/object-mode',
        component: ObjectMode,
        props: { newsletterPopup: false } // 靜態傳遞的 props
    },
    {
        path: '/function-mode-object-mode',
        component: ObjectMode,
        props: route => ({
            newsletterPopup: route.query.popup === 'true'  // 根據查詢參數動態設置
        }) // 請盡可能保持 props 函數為無狀態的，因為它只會在路由發生變化時起作用。
    }
];

const router = createRouter({
    // history: createMemoryHistory(), // 初始範例用的
    history: createWebHistory(),
    routes,
});

export default router;

