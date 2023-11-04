(function(){"use strict";var e={7818:function(e,t,o){var n=o(9242),l=o(3396);const s={class:"app"},i=(0,l._)("header",null,[(0,l._)("div",{class:"txt"},[(0,l._)("span",null,"My To-do list"),(0,l._)("div",{class:"line"})])],-1);function d(e,t,o,n,d,a){const r=(0,l.up)("todo-create"),c=(0,l.up)("todo-list"),u=(0,l.up)("todo-completed");return(0,l.wg)(),(0,l.iD)("div",s,[i,(0,l.Wm)(r),(0,l.Wm)(c),(0,l.Wm)(u)])}const a={class:"block"},r=(0,l._)("div",{class:"brownLine"},null,-1),c={class:"create"},u={class:"inp"},p={class:"todo"},m=(0,l._)("span",null,"Title:",-1),f={class:"todo"},v=(0,l._)("span",null,"Description:",-1),_=(0,l._)("div",{class:"brownLine"},null,-1);function g(e,t,o,n,s,i){const d=(0,l.up)("v-text-field"),g=(0,l.up)("v-btn");return(0,l.wg)(),(0,l.iD)("div",a,[r,(0,l._)("div",c,[(0,l._)("div",u,[(0,l._)("div",p,[m,(0,l.Wm)(d,{class:"input",maxlength:"50",modelValue:s.newTodo.title,"onUpdate:modelValue":t[0]||(t[0]=e=>s.newTodo.title=e),label:"Enter the title","hide-details":"auto"},null,8,["modelValue"])]),(0,l._)("div",f,[v,(0,l.Wm)(d,{class:"input",maxlength:"50",modelValue:s.newTodo.description,"onUpdate:modelValue":t[1]||(t[1]=e=>s.newTodo.description=e),label:"Enter the description","hide-details":"auto"},null,8,["modelValue"])])]),(0,l.Wm)(g,{class:"button",onClick:t[2]||(t[2]=e=>i.addNewTodo(s.newTodo))},{default:(0,l.w5)((()=>[(0,l.Uk)(" Add ")])),_:1})]),_])}var w=o(65),h={data(){return{newTodo:{title:"",description:"",isComplete:!1,id:0}}},methods:{...(0,w.OI)(["addTodo"]),addNewTodo(){""!=this.newTodo.title.trim()&&""!=this.newTodo.description.trim()&&(this.newTodo.id=Date.now(),this.addTodo({...this.newTodo}),this.newTodo.title="",this.newTodo.description="")}}},T=o(89);const b=(0,T.Z)(h,[["render",g]]);var C=b,x=o(7139);const k={class:"list"},y={key:0},O={class:"handle"},W={class:"item-container"},S={class:"descr-text"},D=(0,l._)("span",{class:"descTitle"},"Description: ",-1);function V(e,t,o,n,s,i){const d=(0,l.up)("v-icon"),a=(0,l.up)("v-checkbox"),r=(0,l.up)("v-expansion-panel-title"),c=(0,l.up)("v-expansion-panel-text"),u=(0,l.up)("v-expansion-panel"),p=(0,l.up)("v-expansion-panels"),m=(0,l.up)("draggable");return(0,l.wg)(),(0,l.iD)("div",k,[(0,l.Wm)(m,{list:i.todos,handle:".handle",class:"drag",onEnd:e.onDragEnd},{item:(0,l.w5)((({element:t})=>[t.isComplete?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",y,[(0,l.Wm)(p,{class:"todo-list"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"panel"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"panel-title"},{default:(0,l.w5)((()=>[(0,l._)("button",O,[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-drag")])),_:1})]),(0,l._)("div",W,[(0,l._)("div",null,[(0,l.Wm)(a,{modelValue:t.isComplete,"onUpdate:modelValue":e=>t.isComplete=e,onClick:o=>e.completeTodo(t.id),color:"green","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue","onClick"])]),(0,l._)("p",{class:(0,x.C_)({completed:t.isComplete})},(0,x.zw)(t.title),3)])])),_:2},1024),(0,l.Wm)(c,{class:"panel-text"},{default:(0,l.w5)((()=>[(0,l._)("div",S,[D,(0,l._)("p",null,(0,x.zw)(t.description),1)])])),_:2},1024)])),_:2},1024)])),_:2},1024)]))])),_:1},8,["list","onEnd"])])}var E=o(6983),U=o.n(E),L={components:{draggable:U()},computed:{...(0,w.Se)(["allTodos"]),todos(){return this.allTodos},filteredTodos(){return this.todos.filter((e=>!e.isComplete))}},methods:{...(0,w.OI)(["onDragEnd","completeTodo"])}};const j=(0,T.Z)(L,[["render",V]]);var I=j;const N={key:0,class:"list"},J=(0,l._)("div",{class:"brownLine"},null,-1),M=(0,l._)("header",null,[(0,l._)("div",{class:"txt"},[(0,l._)("span",null,"Completed"),(0,l._)("div",{class:"line"})])],-1),P=(0,l._)("div",{class:"brownLine"},null,-1),z={class:"buttons"},Z={key:0},q={class:"handle"},A={class:"item-container"},F={class:"descr-text"},R=(0,l._)("span",{class:"descTitle"},"Description: ",-1);function B(e,t,o,n,s,i){const d=(0,l.up)("v-btn"),a=(0,l.up)("v-icon"),r=(0,l.up)("v-checkbox"),c=(0,l.up)("v-expansion-panel-title"),u=(0,l.up)("v-expansion-panel-text"),p=(0,l.up)("v-expansion-panel"),m=(0,l.up)("v-expansion-panels"),f=(0,l.up)("draggable");return i.completedTodos.length>0?((0,l.wg)(),(0,l.iD)("div",N,[J,M,P,(0,l._)("div",z,[(0,l.Wm)(d,{class:"button",onClick:t[0]||(t[0]=t=>e.clearList())},{default:(0,l.w5)((()=>[(0,l.Uk)(" Clear List ")])),_:1})]),(0,l.Wm)(f,{list:i.todos,handle:".handle",class:"drag",onEnd:e.onDragEnd},{item:(0,l.w5)((({element:t})=>[t.isComplete?((0,l.wg)(),(0,l.iD)("div",Z,[(0,l.Wm)(m,{class:"todo-list"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"panel"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"panel-title"},{default:(0,l.w5)((()=>[(0,l._)("button",q,[(0,l.Wm)(a,null,{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-drag")])),_:1})]),(0,l._)("div",A,[(0,l._)("div",null,[(0,l.Wm)(r,{modelValue:t.isComplete,"onUpdate:modelValue":e=>t.isComplete=e,onClick:o=>e.completeTodo(t.id),color:"green","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue","onClick"])]),(0,l._)("p",{class:(0,x.C_)({completed:t.isComplete})},(0,x.zw)(t.title),3)])])),_:2},1024),(0,l.Wm)(u,{class:"panel-text"},{default:(0,l.w5)((()=>[(0,l._)("div",F,[R,(0,l._)("p",null,(0,x.zw)(t.description),1)])])),_:2},1024)])),_:2},1024)])),_:2},1024)])):(0,l.kq)("",!0)])),_:1},8,["list","onEnd"])])):(0,l.kq)("",!0)}var G={data(){return{enabled:!1}},components:{draggable:U()},computed:{...(0,w.Se)(["allTodos"]),todos(){return this.allTodos},completedTodos(){return this.todos.filter((e=>e.isComplete))}},methods:{...(0,w.OI)(["onDragEnd","clearList","completeTodo"])}};const H=(0,T.Z)(G,[["render",B]]);var K=H,Q={components:{TodoCreate:C,TodoList:I,TodoCompleted:K}};const X=(0,T.Z)(Q,[["render",d]]);var Y=X,$=o(2483);const ee=[],te=(0,$.p7)({history:(0,$.PO)("/"),routes:ee});var oe=te,ne=(o(560),(0,w.MT)({state:{todos:JSON.parse(localStorage.getItem("todos")||"[]")},getters:{allTodos(e){return e.todos}},mutations:{addTodo(e,t){e.todos.push(t),localStorage.setItem("todos",JSON.stringify(e.todos))},clearList(e){e.todos=e.todos.filter((e=>!e.isComplete)),localStorage.setItem("todos",JSON.stringify(e.todos))},onDragEnd(e){localStorage.setItem("todos",JSON.stringify(e.todos))},completeTodo(e,t){const o=e.todos.find((e=>e.id===t));o&&(o.isComplete=!o.isComplete,localStorage.setItem("todos",JSON.stringify(e.todos)))}}})),le=(o(9773),o(8727)),se=o(3447),ie=o(8600);o(8556);const de=(0,le.Rd)({components:se,directives:ie});(0,n.ri)(Y).use(de).use(ne).use(oe).mount("#app")}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,n,l,s){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],l=e[c][1],s=e[c][2];for(var d=!0,a=0;a<n.length;a++)(!1&s||i>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[a])}))?n.splice(a--,1):(d=!1,s<i&&(i=s));if(d){e.splice(c--,1);var r=l();void 0!==r&&(t=r)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,l,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,s,i=n[0],d=n[1],a=n[2],r=0;if(i.some((function(t){return 0!==e[t]}))){for(l in d)o.o(d,l)&&(o.m[l]=d[l]);if(a)var c=a(o)}for(t&&t(n);r<i.length;r++)s=i[r],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(c)},n=self["webpackChunkto_do_list"]=self["webpackChunkto_do_list"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(7818)}));n=o.O(n)})();
//# sourceMappingURL=app.ecb69f0d.js.map