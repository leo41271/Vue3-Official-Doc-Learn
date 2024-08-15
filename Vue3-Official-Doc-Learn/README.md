# Vue3-Official-Doc-Learn
This template should help get you started developing with Vue 3 in Vite.
Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).
## Customize configuration
See [Vite Configuration Reference](https://vitejs.dev/config/).<br>
Project Setup
```sh
npm install
# Compile and Hot-Reload for Development
npm run dev
```
# Vue Official Doc 實作練習檔案布局
```sh
src/
│  App.vue
│  main.js
│  Vue_File_Map_tree.txt // 沒有上傳
│  
├─components
│  ├─api-doc
│  │  └─api-script-setup-doc
│  │      │  helpers.js
│  │      │  MyComponent.vue
│  │      │  
│  │      ├─Directive
│  │      │      MyDirective.js
│  │      │      
│  │      ├─DynamicCompo
│  │      │      Dynamic-ComponentA.vue
│  │      │      Dynamic-ComponentB.vue
│  │      │      Dynamic-ComponentC.vue
│  │      │      
│  │      ├─ModifierUseGet
│  │      │      ChildGet.vue
│  │      │      Parent.vue
│  │      │      
│  │      └─NamespacedComponents
│  │              form-components.js
│  │              Input.vue
│  │              Label.vue
│  │              
│  ├─com-doc
│  │  ├─async-component
│  │  │  │  Async-BasicUse.vue
│  │  │  │  AsyncDispatcherComponents.vue
│  │  │  │  AsyncDispatcherUseMap.vue
│  │  │  │  AsyncDynamic.vue
│  │  │  │  Error.vue
│  │  │  │  LazyLoad.vue
│  │  │  │  Loading.vue
│  │  │  │  
│  │  │  └─async-components-sets
│  │  │          NoSetAsyncComponent.vue
│  │  │          OneFuncComponent.vue
│  │  │          ThreeFuncComponent.vue
│  │  │          TwoFuncComponent.vue
│  │  │          
│  │  ├─class-and-style-bindings
│  │  │      Basic-Class-Use.vue
│  │  │      Basic-Style-Use.vue
│  │  │      Class-Component.vue
│  │  │      
│  │  ├─components-basic-docs
│  │  │  │  ComponentBasic.vue
│  │  │  │  ComponentEvent.vue
│  │  │  │  ComponentProps.vue
│  │  │  │  ComponentSlot.vue
│  │  │  │  
│  │  │  └─dynamic-components
│  │  │          A.vue
│  │  │          B.vue
│  │  │          C.vue
│  │  │          D.vue
│  │  │          dynamic.js
│  │  │          E.vue
│  │  │          F.vue
│  │  │          packImport.js
│  │  │          
│  │  ├─components-events-docs
│  │  │      EmitArgument.vue
│  │  │      EmitArgument2.vue
│  │  │      EmitArgument3.vue
│  │  │      EmitBasicUse.vue
│  │  │      EmitValidation.vue
│  │  │      
│  │  ├─components-fallthrough-attributes-docs
│  │  │      BasicMyBotton.vue
│  │  │      ClassStyleMerge.vue
│  │  │      ListenerInheritance.vue
│  │  │      RenderListen.vue
│  │  │      RenderListen2.vue
│  │  │      
│  │  ├─components-props-docs
│  │  │      declare-basic-use.vue
│  │  │      declare-basic-use2.vue
│  │  │      Person.js
│  │  │      
│  │  ├─components-provide-inject-docs
│  │  │  │  Child.vue
│  │  │  │  GrandChild.vue
│  │  │  │  ProvideInject.vue
│  │  │  │  
│  │  │  └─injectionKey
│  │  │          Keys.js
│  │  │          
│  │  ├─components-solts-docs
│  │  │      AwesomeIcon.vue
│  │  │      BaseLayout.vue
│  │  │      DynamicSlotName.vue
│  │  │      FancyButton.vue
│  │  │      FancyList.vue
│  │  │      MouseTracker.vue
│  │  │      MyComponent.vue
│  │  │      NameScopeSlot.vue
│  │  │      SubmitButton.vue
│  │  │      
│  │  ├─components-v-model-docs
│  │  │      BasicVModel.vue
│  │  │      MultiBindVModel.vue
│  │  │      VModelArguments.vue
│  │  │      
│  │  ├─computed-properties-docs
│  │  │      ComputedBasic.vue
│  │  │      ComputedWritable.vue
│  │  │      
│  │  ├─custom-directives-docs
│  │  │      Directive.vue
│  │  │      
│  │  ├─event-handling-docs
│  │  │      Event-Argument.vue
│  │  │      Event-Key-Modifiers.vue
│  │  │      Event-Method-Handlers.vue
│  │  │      Event-Modifiers.vue
│  │  │      
│  │  ├─list-rendering-docs
│  │  │      Basic-V-For.vue
│  │  │      For-Array.vue
│  │  │      For-In-Component.vue
│  │  │      TodoItem.vue
│  │  │      
│  │  ├─reactivity-fundamentals-docs
│  │  │      DOM-NextTick.vue
│  │  │      Reactive-Limitation.vue
│  │  │      Reactive.vue
│  │  │      Ref-Deep.vue
│  │  │      Ref-Detial.vue
│  │  │      Why-Ref.vue
│  │  │      
│  │  ├─template-refs-docs
│  │  │      Ref-Basic.vue
│  │  │      Ref-Component.vue
│  │  │      Ref-Function.vue
│  │  │      
│  │  └─watchers-docs
│  │          Watch-Basic.vue
│  │          Watch-Deep.vue
│  │          Watch-Dot.vue
│  │          Watch-Eager.vue
│  │          Watch-Flush-Post.vue
│  │          Watch-Flush-Sync.vue
│  │          Watch-One.vue
│  │          Watch-Source-Types.vue
│  │          Watch-Stop.vue
│  │          WatchEffect.vue
│  │          
│  ├─op-doc
│  │  ├─class-and-style-bindings
│  │  │      Basic-Class-Use.vue
│  │  │      Basic-Style-Use.vue
│  │  │      Class-Component.vue
│  │  │      
│  │  ├─component-docs
│  │  │  │  Alert.vue
│  │  │  │  BlogPost.vue
│  │  │  │  Btn.vue
│  │  │  │  
│  │  │  └─dynamic-components
│  │  │          A.vue
│  │  │          B.vue
│  │  │          C.vue
│  │  │          D.vue
│  │  │          dynamic.js
│  │  │          E.vue
│  │  │          F.vue
│  │  │          
│  │  ├─component-registration-docs
│  │  │      gloalComponentA.vue
│  │  │      gloalComponentB.vue
│  │  │      gloalComponentC.vue
│  │  │      
│  │  ├─components-events-docs
│  │  │      EmitArgument.vue
│  │  │      EmitArgument2.vue
│  │  │      EmitArgument3.vue
│  │  │      EmitBasicUse.vue
│  │  │      EmitValidation.vue
│  │  │      
│  │  ├─components-fallthrough-attributes-docs
│  │  │      BasicMyBotton.vue
│  │  │      ClassStyleMerge.vue
│  │  │      ListenerInheritance.vue
│  │  │      RenderListen.vue
│  │  │      RenderListen2.vue
│  │  │      
│  │  ├─components-props-docs
│  │  │      declare-basic-use.vue
│  │  │      declare-basic-use2.vue
│  │  │      
│  │  ├─components-solts-docs
│  │  │      AwesomeIcon.vue
│  │  │      BaseLayout.vue
│  │  │      DynamicSlotName.vue
│  │  │      FancyButton.vue
│  │  │      FancyList.vue
│  │  │      MouseTracker.vue
│  │  │      MyComponent.vue
│  │  │      NameScopeSlot.vue
│  │  │      SubmitButton.vue
│  │  │      
│  │  ├─components-v-model-docs
│  │  │      Argument-Modifiers.vue
│  │  │      GetSetBind.vue
│  │  │      MultiBindV-model.vue
│  │  │      V-model-Argument.vue
│  │  │      V-model-Modifiers.vue
│  │  │      ValueInputBind.vue
│  │  │      
│  │  ├─computed-properties-docs
│  │  │      Computed-Basic.vue
│  │  │      Computed-Writable.vue
│  │  │      
│  │  ├─event-handling-docs
│  │  │      Event-Argument.vue
│  │  │      Event-Key-Modifiers.vue
│  │  │      Event-Modifiers.vue
│  │  │      
│  │  ├─list-rendering-docs
│  │  │      Basic-V-For.vue
│  │  │      For-Array.vue
│  │  │      For-In-Component.vue
│  │  │      TodoItem.vue
│  │  │      
│  │  ├─template-refs-doc
│  │  │      Ref-Basic.vue
│  │  │      Ref-Component.vue
│  │  │      Ref-Function.vue
│  │  │      
│  │  └─watchers-docs
│  │          Watch-Basic.vue
│  │          Watch-Deep.vue
│  │          Watch-Dot.vue
│  │          Watch-Eager.vue
│  │          Watch-Flush-Post.vue
│  │          Watch-Flush-Sync.vue
│  │          Watch-One.vue
│  │          Watch-Stop-Choose.vue
│  │          Watch-Stop.vue
│  │          
│  └─other
│      ├─question-practice
│      │  ├─practice3
│      │  │      AxisLabel.vue
│      │  │      PolyGraph.vue
│      │  │      SVG.vue
│      │  │      util.js
│      │  │      
│      │  ├─question1
│      │  │      ChildComponent.vue
│      │  │      ParentComponent.vue
│      │  │      
│      │  └─question2
│      │          RecursiveComponent.vue
│      │          Tree.vue
│      │          
│      └─style-scoped-show
│              A.vue
│              B.vue
│              
├─composables
│      BasicComposableMouse.js
│      fetch.js
│      Key.js  // 沒有上傳
│      KeyExample.js
│      Separate2SmallPiece.js
│      SeparateMouse.js
│      
├─pages
│  ├─com-doc
│  │  │  App-async-components.vue
│  │  │  App-class-and-style-bindings.vue
│  │  │  App-compoments-fallthrough-attributes.vue
│  │  │  App-components-basic.vue
│  │  │  App-components-events.vue
│  │  │  App-components-props.vue
│  │  │  App-components-provide-inject.vue
│  │  │  App-components-slots.vue
│  │  │  App-components-v-model.vue
│  │  │  App-computed-properties.vue
│  │  │  App-conditional-rendering.vue
│  │  │  App-event-handling.vue
│  │  │  App-form-input-bindings.vue
│  │  │  App-list-rendering.vue
│  │  │  App-reactivity-fundamentals.vue
│  │  │  App-template-refs.vue
│  │  │  App-template-syntax.vue
│  │  │  App-watcher.vue
│  │  │  
│  │  └─reusability
│  │          App-composables.vue
│  │          App-custom-directives.vue
│  │          App-plugins.vue
│  │          
│  ├─op-doc
│  │      App-class-and-style-bindings.vue
│  │      App-compoments-fallthrough-attributes.vue
│  │      App-component-registration.vue
│  │      App-components-basics.vue
│  │      App-components-events.vue
│  │      App-components-props.vue
│  │      App-components-slots.vue
│  │      App-components-v-model.vue
│  │      App-computed-properties.vue
│  │      App-conditional-rendering.vue
│  │      App-event-handling.vue
│  │      App-form-input-bindings.vue
│  │      App-list-rendering.vue
│  │      App-reactivity-fundamentals.vue
│  │      App-template-refs.vue
│  │      App-watcher.vue
│  │      
│  └─other
│          globalProperties.vue
│          practice1.vue
│          practice3.vue
│          Promise.vue
│          script-setup-docs.vue
│          style-scoped.vue
│          
└─plugins
        googleTranslate.js
        i18n.js
        noPushToGitKey-Example.js
        noPushToGitKey.js  // 沒有上傳
226 個檔案，55 個資料夾。
```