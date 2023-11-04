(function(){"use strict";var e={7993:function(e,t,o){var l=o(9242),n=o(3396);const s={class:"app"},i=(0,n._)("header",null,[(0,n._)("div",{class:"txt"},[(0,n._)("span",null,"My To-do list"),(0,n._)("div",{class:"line"})])],-1);function d(e,t,o,l,d,a){const r=(0,n.up)("todo-create"),c=(0,n.up)("todo-list"),u=(0,n.up)("todo-completed"),p=(0,n.up)("Some");return(0,n.wg)(),(0,n.iD)("div",s,[i,(0,n.Wm)(r),(0,n.Wm)(c),(0,n.Wm)(u),(0,n.Wm)(p)])}const a={class:"block"},r=(0,n._)("div",{class:"brownLine"},null,-1),c={class:"create"},u={class:"inp"},p={class:"todo"},m=(0,n._)("span",null,"Title:",-1),f={class:"todo"},v=(0,n._)("span",null,"Description:",-1),g=(0,n._)("div",{class:"brownLine"},null,-1);function w(e,t,o,l,s,i){const d=(0,n.up)("v-text-field"),w=(0,n.up)("v-btn");return(0,n.wg)(),(0,n.iD)("div",a,[r,(0,n._)("div",c,[(0,n._)("div",u,[(0,n._)("div",p,[m,(0,n.Wm)(d,{class:"input",maxlength:"50",modelValue:s.newTodo.title,"onUpdate:modelValue":t[0]||(t[0]=e=>s.newTodo.title=e),label:"Enter the title","hide-details":"auto"},null,8,["modelValue"])]),(0,n._)("div",f,[v,(0,n.Wm)(d,{class:"input",maxlength:"50",modelValue:s.newTodo.description,"onUpdate:modelValue":t[1]||(t[1]=e=>s.newTodo.description=e),label:"Enter the description","hide-details":"auto"},null,8,["modelValue"])])]),(0,n.Wm)(w,{class:"button",onClick:t[2]||(t[2]=e=>i.addNewTodo(s.newTodo))},{default:(0,n.w5)((()=>[(0,n.Uk)(" Add ")])),_:1})]),g])}var _=o(65),b={data(){return{newTodo:{title:"",description:"",isComplete:!1,id:0}}},methods:{...(0,_.OI)(["addTodo"]),addNewTodo(){""!=this.newTodo.title.trim()&&""!=this.newTodo.description.trim()&&(this.newTodo.id=Date.now(),this.addTodo({...this.newTodo}),this.newTodo.title="",this.newTodo.description="")}}},h=o(89);const T=(0,h.Z)(b,[["render",w]]);var C=T,k=o(7139);const y={class:"list"},x={class:"buttons"},S={class:"descr-text"},O=(0,n._)("span",{class:"descTitle"},"Description: ",-1);function W(e,t,o,l,s,i){const d=(0,n.up)("v-btn"),a=(0,n.up)("v-icon"),r=(0,n.up)("v-checkbox"),c=(0,n.up)("v-expansion-panel-title"),u=(0,n.up)("v-expansion-panel-text"),p=(0,n.up)("v-expansion-panel"),m=(0,n.up)("v-expansion-panels"),f=(0,n.up)("draggable");return(0,n.wg)(),(0,n.iD)("div",y,[(0,n._)("div",x,[s.enabled?((0,n.wg)(),(0,n.j4)(d,{key:1,class:"button",onClick:i.dragEn},{default:(0,n.w5)((()=>[(0,n.Uk)("Back")])),_:1},8,["onClick"])):((0,n.wg)(),(0,n.j4)(d,{key:0,class:"button",onClick:i.dragEn},{default:(0,n.w5)((()=>[(0,n.Uk)("Swap")])),_:1},8,["onClick"]))]),(0,n.Wm)(f,{list:i.todos,disabled:!s.enabled,class:"drag",onEnd:i.onDragEnd},{item:(0,n.w5)((({element:e})=>[e.isComplete?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,k.C_)(["list-group-item",{"not-draggable":!s.enabled}])},[(0,n.Wm)(m,{class:"todo-list"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"panel"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:"panel-title","expand-icon":"mdi-menu-down"},{default:(0,n.w5)((()=>[s.enabled?((0,n.wg)(),(0,n.j4)(a,{key:0},{default:(0,n.w5)((()=>[(0,n.Uk)(" mdi-drag-vertical ")])),_:1})):(0,n.kq)("",!0),(0,n._)("div",null,[(0,n.Wm)(r,{modelValue:e.isComplete,"onUpdate:modelValue":t=>e.isComplete=t,onClick:t=>i.completeTodo(e.id),color:"green","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue","onClick"])]),(0,n._)("p",{class:(0,k.C_)({completed:e.isComplete})},(0,k.zw)(e.title),3)])),_:2},1024),(0,n.Wm)(u,{class:"panel-text"},{default:(0,n.w5)((()=>[(0,n._)("div",S,[O,(0,n._)("p",null,(0,k.zw)(e.description),1)])])),_:2},1024)])),_:2},1024)])),_:2},1024)],2))])),_:1},8,["list","disabled","onEnd"])])}var D=o(6983),E=o.n(D),V={data(){return{enabled:!1}},components:{draggable:E()},computed:{...(0,_.Se)(["allTodos"]),todos(){return this.allTodos},filteredTodos(){return this.todos.filter((e=>!e.isComplete))}},methods:{completeTodo(e){const t=this.allTodos.find((t=>t.id===e));t&&(t.isComplete=!t.isComplete,localStorage.setItem("todos",JSON.stringify(this.allTodos)))},onDragEnd(){localStorage.setItem("todos",JSON.stringify(this.todos))},dragEn(){this.enabled=!this.enabled}}};const j=(0,h.Z)(V,[["render",W]]);var U=j;const I={key:0,class:"list"},N=(0,n._)("div",{class:"brownLine"},null,-1),L=(0,n._)("header",null,[(0,n._)("div",{class:"txt"},[(0,n._)("span",null,"Completed"),(0,n._)("div",{class:"line"})])],-1),J=(0,n._)("div",{class:"brownLine"},null,-1),M={class:"buttons"},P={class:"descr-text"},q=(0,n._)("span",{class:"descTitle"},"Description: ",-1);function z(e,t,o,l,s,i){const d=(0,n.up)("v-btn"),a=(0,n.up)("v-checkbox"),r=(0,n.up)("v-expansion-panel-title"),c=(0,n.up)("v-expansion-panel-text"),u=(0,n.up)("v-expansion-panel"),p=(0,n.up)("v-expansion-panels"),m=(0,n.up)("draggable");return i.completedTodos.length>0?((0,n.wg)(),(0,n.iD)("div",I,[N,L,J,(0,n._)("div",M,[(0,n.Wm)(d,{class:"button",onClick:t[0]||(t[0]=t=>e.clearList())},{default:(0,n.w5)((()=>[(0,n.Uk)(" Clear List ")])),_:1})]),(0,n.Wm)(m,{list:i.todos,disabled:!s.enabled,class:"drag",onEnd:i.onDragEnd},{item:(0,n.w5)((({element:e})=>[e.isComplete?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,k.C_)(["list-group-item",{"not-draggable":!s.enabled}])},[(0,n.Wm)(p,{class:"todo-list"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,{class:"panel-title","expand-icon":"mdi-menu-down"},{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.Wm)(a,{modelValue:e.isComplete,"onUpdate:modelValue":t=>e.isComplete=t,onClick:t=>i.completeTodo(e.id),color:"green","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue","onClick"])]),(0,n._)("p",{class:(0,k.C_)({completed:e.isComplete})},(0,k.zw)(e.title),3)])),_:2},1024),(0,n.Wm)(c,{class:"panel-text"},{default:(0,n.w5)((()=>[(0,n._)("div",P,[q,(0,n._)("p",null,(0,k.zw)(e.description),1)])])),_:2},1024)])),_:2},1024)])),_:2},1024)],2)):(0,n.kq)("",!0)])),_:1},8,["list","disabled","onEnd"])])):(0,n.kq)("",!0)}var Z={data(){return{enabled:!1}},components:{draggable:E()},computed:{...(0,_.Se)(["allTodos"]),todos(){return this.allTodos},completedTodos(){return this.todos.filter((e=>e.isComplete))}},methods:{completeTodo(e){const t=this.allTodos.find((t=>t.id===e));t&&(t.isComplete=!t.isComplete,localStorage.setItem("todos",JSON.stringify(this.allTodos)))},...(0,_.OI)(["clearList"]),onDragEnd(){localStorage.setItem("todos",JSON.stringify(this.todos))}}};const A=(0,h.Z)(Z,[["render",z]]);var B=A,F={components:{TodoCreate:C,TodoList:U,TodoCompleted:B}};const R=(0,h.Z)(F,[["render",d]]);var G=R,H=o(2483);const K=[],Q=(0,H.p7)({history:(0,H.PO)("/"),routes:K});var X=Q,Y=(o(560),(0,_.MT)({state:{todos:JSON.parse(localStorage.getItem("todos")||"[]")},getters:{allTodos(e){return e.todos}},mutations:{addTodo(e,t){e.todos.push(t),localStorage.setItem("todos",JSON.stringify(e.todos))},clearList(e){e.todos=e.todos.filter((e=>!e.isComplete)),localStorage.setItem("todos",JSON.stringify(e.todos))},toggleTodoStatus(e,t){const o=e.allTodos.find((e=>e.id===t));o&&(o.isComplete=!o.isComplete,localStorage.setItem("todos",JSON.stringify(e.allTodos)))}}})),$=(o(9773),o(8727)),ee=o(3447),te=o(8600);o(8556);const oe=(0,$.Rd)({components:ee,directives:te});(0,l.ri)(G).use(oe).use(Y).use(X).mount("#app")}},t={};function o(l){var n=t[l];if(void 0!==n)return n.exports;var s=t[l]={exports:{}};return e[l].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,l,n,s){if(!l){var i=1/0;for(c=0;c<e.length;c++){l=e[c][0],n=e[c][1],s=e[c][2];for(var d=!0,a=0;a<l.length;a++)(!1&s||i>=s)&&Object.keys(o.O).every((function(e){return o.O[e](l[a])}))?l.splice(a--,1):(d=!1,s<i&&(i=s));if(d){e.splice(c--,1);var r=n();void 0!==r&&(t=r)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[l,n,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,s,i=l[0],d=l[1],a=l[2],r=0;if(i.some((function(t){return 0!==e[t]}))){for(n in d)o.o(d,n)&&(o.m[n]=d[n]);if(a)var c=a(o)}for(t&&t(l);r<i.length;r++)s=i[r],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(c)},l=self["webpackChunkto_do_list"]=self["webpackChunkto_do_list"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=o.O(void 0,[998],(function(){return o(7993)}));l=o.O(l)})();
//# sourceMappingURL=app.ad0800ca.js.map