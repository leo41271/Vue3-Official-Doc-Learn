# Vue3-Route-Doc-Learn
This template should help get you started developing with Vue 3 in Vite.
### Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).
### Customize configuration
See [Vite Configuration Reference](https://vitejs.dev/config/).
### Project Setup
```sh
npm install
### Compile and Hot-Reload for Development
npm run dev
### Compile and Minify for Production
npm run build
```
# Vue Router Official Doc 實作練習檔案布局
```sh
src/
│  App.vue
│  main.js
│  VueRouter_File_Map_tree.txt // ignore
│  
├─assets
│      base.css
│      logo.svg
│      main.css
│      
├─pages
│  │  GettingStarted.vue
│  │  NamedRoute.vue
│  │  NestedRoutes.vue
│  │  PropsToRouteComponents.vue
│  │  Redirect.vue
│  │  
│  ├─DynaParamNotFound
│  │      DynamicRouteParams.vue
│  │      NotFoundRoute.vue
│  │      showExample.vue
│  │      
│  ├─NamedViews
│  │      NamedViews.vue
│  │      NestedNamedViews.vue
│  │      showExample.vue
│  │      
│  └─PropsToRouteComponents
├─router
│      index.js
│      
└─views
    ├─DynamicRouteMatching
    │      NotFound.vue
    │      UserGeneric.vue
    │      UserPost.vue
    │      
    ├─GettingStarted
    │      AboutView.vue
    │      HomeView.vue
    │      
    ├─NamedRoute
    │      About.vue
    │      Home.vue
    │      User.vue
    │      
    ├─NamedViews
    │  ├─Basic
    │  │      First.vue
    │  │      Second.vue
    │  │      Third.vue
    │  │      
    │  └─NestedNamedViews
    │          UserEmailsSubscriptions.vue
    │          UserProfile.vue
    │          UserProfilePreview.vue
    │          UserSettings.vue
    │          UserSettingsNav.vue
    │          
    ├─NestedRoutes
    │      User.vue
    │      UserHome.vue
    │      UserNamed.vue
    │      UserPosts.vue
    │      UserProfile.vue
    │      
    ├─PropstoRouteComponent
    │      NewUser.vue
    │      ObjectMode.vue
    │      OldUser.vue
    │      Sidebar.vue
    │      
    └─RedirectandAlias
            LeoPage.vue
            MaxRoll.vue
            MaxRollLevel.vue
            SameLink.vue
47 個檔案，16 個資料夾。
```