### 前言
在學習 Vue 3 的過程中（包括現在），我發現自己對官網的文檔概念大致上能理解，但要真正向別人講解或是在工作中實際運用時，總是感到有些模糊不清，甚至時常需要反覆查閱。換句話說，其實我並沒有完全理解或掌握文檔中的概念。

此外，我對官方文檔一直有個感覺：對新手（或至少對我而言），它並不太友善。學習過程中經常會遇到大片的文字讓人看不懂，或者是雖然對字面意思有些理解，但當看到程式碼時，卻完全不明白它的作用，這讓我感到非常苦惱。

因此，我嘗試改變學習方式，透過實際動手將文檔中的程式碼概念一一實現出來，以此來具體驗證自己是否真正掌握了這些概念。我也借助了多種管道，例如 Stack Overflow 或 GPT 等方式，花費了大量時間來深入學習與實踐。希望這些經驗與努力對現在閱讀這段文字的你能有所幫助。

# Vue Official Doc 實作練習檔案布局

```
./src 目錄下
│  App.vue
│  main.js
│  Vue_File_Map_tree.txt
│  
├─components
│  ├─api-doc
│  ├─com-doc
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
│      └─style-scoped-show
│              A.vue
│              B.vue
│              
└─pages
    ├─com-doc
    ├─op-doc
    │      App-class-and-style-bindings.vue
    │      App-compoments-fallthrough-attributes.vue
    │      App-component-registration.vue
    │      App-components-basics.vue
    │      App-components-events.vue
    │      App-components-props.vue
    │      App-components-slots.vue
    │      App-components-v-model.vue
    │      App-computed-properties.vue
    │      App-conditional-rendering.vue
    │      App-event-handling.vue
    │      App-form-input-bindings.vue
    │      App-list-rendering.vue
    │      App-reactivity-fundamentals.vue
    │      App-template-refs.vue
    │      App-watcher.vue
    │      
    └─other
            Promise.vue
            style-scoped.vue
86 個檔案，24 個資料夾。
```