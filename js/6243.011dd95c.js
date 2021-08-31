(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[6243],{3582:(a,e,n)=>{"use strict";n.d(e,{Z:()=>c});var o=n(7875),p=n(349),t={key:0,class:"var-app-bar__left"},r={key:1,class:"var-app-bar__right"},i={color:{type:String},textColor:{type:String},title:{type:String},titlePosition:{type:String,default:"left",validator:function(a){return["left","center","right"].includes(a)}},elevation:{type:Boolean,default:!0}},x=(0,o.aZ)({name:"VarAppBar",props:i}),s=n(6062),l=n.n(s),d=n(8781);l()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,x.render=function(a,e,n,i,x,s){return(0,o.wg)(),(0,o.j4)("div",{class:["var-app-bar",{"var-elevation--3":a.elevation}],style:{background:a.color,color:a.textColor}},[a.$slots.left?((0,o.wg)(),(0,o.j4)("div",t,[(0,o.WI)(a.$slots,"left")])):(0,o.kq)("v-if",!0),(0,o.Wm)("div",{class:["var-app-bar__title","var-app-bar__title-".concat(a.titlePosition)],style:{paddingLeft:a.$slots.left&&"center"!==a.titlePosition?"30px":"10px",paddingRight:a.$slots.right&&"center"!==a.titlePosition?"30px":"10px"}},[(0,o.WI)(a.$slots,"default",{},(()=>[(0,o.Uk)((0,p.zw)(a.title),1)]))],6),a.$slots.right?((0,o.wg)(),(0,o.j4)("div",r,[(0,o.WI)(a.$slots,"right")])):(0,o.kq)("v-if",!0)],6)};var v=x;v.install=function(a){a.component(v.name,v)};var c=v},2781:(a,e,n)=>{"use strict";n.d(e,{Z:()=>b});var o=n(7875),p=n(4825),t=n(641),r={show:{type:Boolean,default:!1},alignment:{type:String,default:"top",validator:function(a){return["top","bottom"].includes(a)}},offsetX:{type:[Number,String],default:0},offsetY:{type:[Number,String],default:0},teleport:{default:"body"},onOpen:{type:Function},onOpened:{type:Function},onClose:{type:Function},onClosed:{type:Function},"onUpdate:show":{type:Function}},i=n(4268),x=n(2491);function s(a,e,n,o,p,t,r){try{var i=a[t](r),x=i.value}catch(a){return void n(a)}i.done?e(x):Promise.resolve(x).then(o,p)}var l=(0,o.aZ)({name:"VarMenu",props:r,setup(a){var e=(0,t.iH)(null),n=(0,t.iH)(null),p=(0,t.iH)(0),r=(0,t.iH)(0),{zIndex:l}=(0,x.C)((()=>a.show),1),d=!1,v=()=>{var e;d?d=!1:a.show&&(null===(e=a["onUpdate:show"])||void 0===e||e.call(a,!1))},c=()=>{p.value="top"===a.alignment?(0,i.vF)(e.value):(0,i.vF)(e.value)-n.value.offsetHeight,r.value=(0,i.IS)(e.value)};return(0,o.YP)((()=>a.alignment),c),(0,o.YP)((()=>a.show),function(){var e,n=(e=function*(e){var{onOpen:n,onClose:p}=a;yield(0,o.Y3)(),e&&c(),e?null==n||n():null==p||p()},function(){var a=this,n=arguments;return new Promise((function(o,p){var t=e.apply(a,n);function r(a){s(t,o,p,r,i,"next",a)}function i(a){s(t,o,p,r,i,"throw",a)}r(void 0)}))});return function(a){return n.apply(this,arguments)}}()),(0,o.bv)((()=>{c(),document.addEventListener("click",v),window.addEventListener("resize",c)})),(0,o.Ah)((()=>{document.removeEventListener("click",v),window.removeEventListener("resize",c)})),{zIndex:l,host:e,menu:n,top:p,left:r,toSizeUnit:i.gI,handleClick:()=>{d=!0},resize:c}}}),d=n(6062),v=n.n(d),c=n(9817);v()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,l.render=function(a,e,n,t,r,i){return(0,o.wg)(),(0,o.j4)("div",{class:"var-menu",ref:"host",onClick:e[2]||(e[2]=(...e)=>a.handleClick&&a.handleClick(...e))},[(0,o.WI)(a.$slots,"default"),((0,o.wg)(),(0,o.j4)(o.lR,{to:a.teleport},[(0,o.Wm)(p.uT,{name:"var-menu",onAfterEnter:a.onOpened,onAfterLeave:a.onClosed},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)("div",{class:"var-menu__menu var-elevation--3",ref:"menu",style:{top:"calc(".concat(a.top,"px + ").concat(a.toSizeUnit(a.offsetY),")"),left:"calc(".concat(a.left,"px + ").concat(a.toSizeUnit(a.offsetX),")"),zIndex:a.zIndex},onClick:e[1]||(e[1]=(0,p.iM)((()=>{}),["stop"]))},[(0,o.WI)(a.$slots,"menu")],4),[[p.F8,a.show]])])),_:3},8,["onAfterEnter","onAfterLeave"])],8,["to"]))],512)};var y=l;y.install=function(a){a.component(y.name,y)};var b=y},1403:(a,e,n)=>{"use strict";var o=n(2609),p=n.n(o)()((function(a){return a[1]}));p.push([a.id,"\n.var-menu[data-v-04d66110] {\n  background: transparent;\n}\n.menu-list[data-v-04d66110] {\n  background: #fff;\n}\n.menu-list .menu-cell[data-v-04d66110] {\n  display: block;\n  padding: 10px;\n}\n.space[data-v-04d66110] {\n  height: 80px;\n}\n",""]),e.Z=p},8781:(a,e,n)=>{"use strict";var o=n(2609),p=n.n(o)()((function(a){return a[1]}));p.push([a.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n.var-elevation--0 {\n  box-shadow: 0 0 0 0 var(--shadow-key-umbra-opacity), 0 0 0 0 var(--shadow-key-penumbra-opacity), 0 0 0 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--1 {\n  box-shadow: 0 2px 1px -1px var(--shadow-key-umbra-opacity), 0 1px 1px 0 var(--shadow-key-penumbra-opacity), 0 1px 3px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--2 {\n  box-shadow: 0 3px 1px -2px var(--shadow-key-umbra-opacity), 0 2px 2px 0 var(--shadow-key-penumbra-opacity), 0 1px 5px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--3 {\n  box-shadow: 0 3px 3px -2px var(--shadow-key-umbra-opacity), 0 3px 4px 0 var(--shadow-key-penumbra-opacity), 0 1px 8px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--4 {\n  box-shadow: 0 2px 4px -1px var(--shadow-key-umbra-opacity), 0 4px 5px 0 var(--shadow-key-penumbra-opacity), 0 1px 10px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--5 {\n  box-shadow: 0 3px 5px -1px var(--shadow-key-umbra-opacity), 0 5px 8px 0 var(--shadow-key-penumbra-opacity), 0 1px 14px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--6 {\n  box-shadow: 0 3px 5px -1px var(--shadow-key-umbra-opacity), 0 6px 10px 0 var(--shadow-key-penumbra-opacity), 0 1px 18px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--7 {\n  box-shadow: 0 4px 5px -2px var(--shadow-key-umbra-opacity), 0 7px 10px 1px var(--shadow-key-penumbra-opacity), 0 2px 16px 1px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--8 {\n  box-shadow: 0 5px 5px -3px var(--shadow-key-umbra-opacity), 0 8px 10px 1px var(--shadow-key-penumbra-opacity), 0 3px 14px 2px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--9 {\n  box-shadow: 0 5px 6px -3px var(--shadow-key-umbra-opacity), 0 9px 12px 1px var(--shadow-key-penumbra-opacity), 0 3px 16px 2px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--10 {\n  box-shadow: 0 6px 6px -3px var(--shadow-key-umbra-opacity), 0 10px 14px 1px var(--shadow-key-penumbra-opacity), 0 4px 18px 3px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--11 {\n  box-shadow: 0 6px 7px -4px var(--shadow-key-umbra-opacity), 0 11px 15px 1px var(--shadow-key-penumbra-opacity), 0 4px 20px 3px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--12 {\n  box-shadow: 0 7px 8px -4px var(--shadow-key-umbra-opacity), 0 12px 17px 2px var(--shadow-key-penumbra-opacity), 0 5px 22px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--13 {\n  box-shadow: 0 7px 8px -4px var(--shadow-key-umbra-opacity), 0 13px 19px 2px var(--shadow-key-penumbra-opacity), 0 5px 24px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--14 {\n  box-shadow: 0 7px 9px -4px var(--shadow-key-umbra-opacity), 0 14px 21px 2px var(--shadow-key-penumbra-opacity), 0 5px 26px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--15 {\n  box-shadow: 0 8px 9px -5px var(--shadow-key-umbra-opacity), 0 15px 22px 2px var(--shadow-key-penumbra-opacity), 0 6px 28px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--16 {\n  box-shadow: 0 8px 10px -5px var(--shadow-key-umbra-opacity), 0 16px 24px 2px var(--shadow-key-penumbra-opacity), 0 6px 30px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--17 {\n  box-shadow: 0 8px 11px -5px var(--shadow-key-umbra-opacity), 0 17px 26px 2px var(--shadow-key-penumbra-opacity), 0 6px 32px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--18 {\n  box-shadow: 0 9px 11px -5px var(--shadow-key-umbra-opacity), 0 18px 28px 2px var(--shadow-key-penumbra-opacity), 0 7px 34px 6px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--19 {\n  box-shadow: 0 9px 12px -6px var(--shadow-key-umbra-opacity), 0 19px 29px 2px var(--shadow-key-penumbra-opacity), 0 7px 36px 6px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--20 {\n  box-shadow: 0 10px 13px -6px var(--shadow-key-umbra-opacity), 0 20px 31px 3px var(--shadow-key-penumbra-opacity), 0 8px 38px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--21 {\n  box-shadow: 0 10px 13px -6px var(--shadow-key-umbra-opacity), 0 21px 33px 3px var(--shadow-key-penumbra-opacity), 0 8px 40px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--22 {\n  box-shadow: 0 10px 14px -6px var(--shadow-key-umbra-opacity), 0 22px 35px 3px var(--shadow-key-penumbra-opacity), 0 8px 42px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--23 {\n  box-shadow: 0 11px 14px -7px var(--shadow-key-umbra-opacity), 0 23px 36px 3px var(--shadow-key-penumbra-opacity), 0 9px 44px 8px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--24 {\n  box-shadow: 0 11px 15px -7px var(--shadow-key-umbra-opacity), 0 24px 38px 3px var(--shadow-key-penumbra-opacity), 0 9px 46px 8px var(--shadow-key-ambient-opacity);\n}\n:root {\n  --app-bar-color: var(--color-primary);\n  --app-bar-text-color: #fff;\n  --app-bar-height: 50px;\n  --app-bar-padding: 0 10px;\n  --app-bar-title-line-height: 50px;\n}\n.var-app-bar {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: var(--app-bar-height);\n  padding: var(--app-bar-padding);\n  background: var(--app-bar-color);\n  color: var(--app-bar-text-color);\n}\n.var-app-bar__title {\n  flex: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  line-height: var(--app-bar-title-line-height);\n  display: flex;\n}\n.var-app-bar__title-center {\n  justify-content: center;\n}\n.var-app-bar__title-left {\n  justify-content: flex-start;\n}\n.var-app-bar__title-right {\n  justify-content: flex-end;\n}\n.var-app-bar__left,\n.var-app-bar__right {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n  z-index: 2;\n}\n.var-app-bar__left {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.var-app-bar__right {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n",""]),e.Z=p},9817:(a,e,n)=>{"use strict";var o=n(2609),p=n.n(o)()((function(a){return a[1]}));p.push([a.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n.var-elevation--0 {\n  box-shadow: 0 0 0 0 var(--shadow-key-umbra-opacity), 0 0 0 0 var(--shadow-key-penumbra-opacity), 0 0 0 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--1 {\n  box-shadow: 0 2px 1px -1px var(--shadow-key-umbra-opacity), 0 1px 1px 0 var(--shadow-key-penumbra-opacity), 0 1px 3px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--2 {\n  box-shadow: 0 3px 1px -2px var(--shadow-key-umbra-opacity), 0 2px 2px 0 var(--shadow-key-penumbra-opacity), 0 1px 5px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--3 {\n  box-shadow: 0 3px 3px -2px var(--shadow-key-umbra-opacity), 0 3px 4px 0 var(--shadow-key-penumbra-opacity), 0 1px 8px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--4 {\n  box-shadow: 0 2px 4px -1px var(--shadow-key-umbra-opacity), 0 4px 5px 0 var(--shadow-key-penumbra-opacity), 0 1px 10px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--5 {\n  box-shadow: 0 3px 5px -1px var(--shadow-key-umbra-opacity), 0 5px 8px 0 var(--shadow-key-penumbra-opacity), 0 1px 14px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--6 {\n  box-shadow: 0 3px 5px -1px var(--shadow-key-umbra-opacity), 0 6px 10px 0 var(--shadow-key-penumbra-opacity), 0 1px 18px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--7 {\n  box-shadow: 0 4px 5px -2px var(--shadow-key-umbra-opacity), 0 7px 10px 1px var(--shadow-key-penumbra-opacity), 0 2px 16px 1px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--8 {\n  box-shadow: 0 5px 5px -3px var(--shadow-key-umbra-opacity), 0 8px 10px 1px var(--shadow-key-penumbra-opacity), 0 3px 14px 2px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--9 {\n  box-shadow: 0 5px 6px -3px var(--shadow-key-umbra-opacity), 0 9px 12px 1px var(--shadow-key-penumbra-opacity), 0 3px 16px 2px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--10 {\n  box-shadow: 0 6px 6px -3px var(--shadow-key-umbra-opacity), 0 10px 14px 1px var(--shadow-key-penumbra-opacity), 0 4px 18px 3px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--11 {\n  box-shadow: 0 6px 7px -4px var(--shadow-key-umbra-opacity), 0 11px 15px 1px var(--shadow-key-penumbra-opacity), 0 4px 20px 3px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--12 {\n  box-shadow: 0 7px 8px -4px var(--shadow-key-umbra-opacity), 0 12px 17px 2px var(--shadow-key-penumbra-opacity), 0 5px 22px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--13 {\n  box-shadow: 0 7px 8px -4px var(--shadow-key-umbra-opacity), 0 13px 19px 2px var(--shadow-key-penumbra-opacity), 0 5px 24px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--14 {\n  box-shadow: 0 7px 9px -4px var(--shadow-key-umbra-opacity), 0 14px 21px 2px var(--shadow-key-penumbra-opacity), 0 5px 26px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--15 {\n  box-shadow: 0 8px 9px -5px var(--shadow-key-umbra-opacity), 0 15px 22px 2px var(--shadow-key-penumbra-opacity), 0 6px 28px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--16 {\n  box-shadow: 0 8px 10px -5px var(--shadow-key-umbra-opacity), 0 16px 24px 2px var(--shadow-key-penumbra-opacity), 0 6px 30px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--17 {\n  box-shadow: 0 8px 11px -5px var(--shadow-key-umbra-opacity), 0 17px 26px 2px var(--shadow-key-penumbra-opacity), 0 6px 32px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--18 {\n  box-shadow: 0 9px 11px -5px var(--shadow-key-umbra-opacity), 0 18px 28px 2px var(--shadow-key-penumbra-opacity), 0 7px 34px 6px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--19 {\n  box-shadow: 0 9px 12px -6px var(--shadow-key-umbra-opacity), 0 19px 29px 2px var(--shadow-key-penumbra-opacity), 0 7px 36px 6px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--20 {\n  box-shadow: 0 10px 13px -6px var(--shadow-key-umbra-opacity), 0 20px 31px 3px var(--shadow-key-penumbra-opacity), 0 8px 38px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--21 {\n  box-shadow: 0 10px 13px -6px var(--shadow-key-umbra-opacity), 0 21px 33px 3px var(--shadow-key-penumbra-opacity), 0 8px 40px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--22 {\n  box-shadow: 0 10px 14px -6px var(--shadow-key-umbra-opacity), 0 22px 35px 3px var(--shadow-key-penumbra-opacity), 0 8px 42px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--23 {\n  box-shadow: 0 11px 14px -7px var(--shadow-key-umbra-opacity), 0 23px 36px 3px var(--shadow-key-penumbra-opacity), 0 9px 44px 8px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--24 {\n  box-shadow: 0 11px 15px -7px var(--shadow-key-umbra-opacity), 0 24px 38px 3px var(--shadow-key-penumbra-opacity), 0 9px 46px 8px var(--shadow-key-ambient-opacity);\n}\n:root {\n  --menu-background: #fff;\n}\n.var-menu-enter-from,\n.var-menu-leave-to {\n  transform: scale(0.8);\n  opacity: 0;\n}\n.var-menu-enter-active,\n.var-menu-leave-active {\n  transition-property: opacity, transform;\n  transition-duration: 0.25s;\n}\n.var-menu {\n  display: inline-block;\n  background: var(--menu-background);\n}\n.var-menu__menu {\n  position: absolute;\n}\n",""]),e.Z=p},6243:(a,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>U});var o=n(7875),p=n(349),t=(0,o.HX)("data-v-04d66110");(0,o.dD)("data-v-04d66110");var r={class:"menu-list"},i=(0,o.Wm)("div",{class:"space"},null,-1);(0,o.Cn)();var x=t(((a,e,n,x,s,l)=>{var d=(0,o.up)("app-type"),v=(0,o.up)("var-app-bar"),c=(0,o.up)("var-icon"),y=(0,o.up)("var-button"),b=(0,o.up)("var-cell"),h=(0,o.up)("var-menu"),u=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.j4)(o.HY,null,[(0,o.Wm)(d,null,{default:t((()=>[(0,o.Uk)((0,p.zw)(x.pack.basicAppBar),1)])),_:1}),(0,o.Wm)(v,{title:x.pack.title},null,8,["title"]),(0,o.Wm)(d,null,{default:t((()=>[(0,o.Uk)((0,p.zw)(x.pack.customStyle),1)])),_:1}),(0,o.Wm)(v,{title:x.pack.title,"title-position":"center",color:"#ff9f00"},null,8,["title"]),(0,o.Wm)(d,null,{default:t((()=>[(0,o.Uk)((0,p.zw)(x.pack.addSlotsAtTitle),1)])),_:1}),(0,o.Wm)(v,null,{default:t((()=>[(0,o.Uk)((0,p.zw)(x.pack.addTheTitleFromTheSlot),1)])),_:1}),(0,o.Wm)(d,null,{default:t((()=>[(0,o.Uk)((0,p.zw)(x.pack.addLeftSlot),1)])),_:1}),(0,o.Wm)(v,{title:x.pack.title,"title-position":"center"},{left:t((()=>[(0,o.Wm)(y,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:x.goBack},{default:t((()=>[(0,o.Wm)(c,{name:"chevron-left",size:24})])),_:1},8,["onClick"])])),_:1},8,["title"]),(0,o.Wm)(d,null,{default:t((()=>[(0,o.Uk)((0,p.zw)(x.pack.addRightSlot),1)])),_:1}),(0,o.Wm)(v,{title:x.pack.title},{right:t((()=>[(0,o.Wm)(y,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:x.searchData},{default:t((()=>[(0,o.Wm)(c,{name:"magnify",size:24})])),_:1},8,["onClick"])])),_:1},8,["title"]),(0,o.Wm)(d,null,{default:t((()=>[(0,o.Uk)((0,p.zw)(x.pack.addLeftAndRightSlot),1)])),_:1}),(0,o.Wm)(v,{title:x.pack.title},{left:t((()=>[(0,o.Wm)(y,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:x.goBack},{default:t((()=>[(0,o.Wm)(c,{name:"chevron-left",size:24})])),_:1},8,["onClick"])])),right:t((()=>[(0,o.Wm)(h,{"offset-y":38,"offset-x":-45,show:x.offsetY,"onUpdate:show":e[1]||(e[1]=a=>x.offsetY=a)},{menu:t((()=>[(0,o.Wm)("div",r,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(x.menuList,(a=>(0,o.wy)(((0,o.wg)(),(0,o.j4)(b,{class:"menu-cell",key:a.value},{default:t((()=>[(0,o.Uk)((0,p.zw)(a.label),1)])),_:2},1536)),[[u]]))),128))])])),default:t((()=>[(0,o.Wm)(y,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:x.changeOffset},{default:t((()=>[(0,o.Wm)(c,{name:"menu",size:24})])),_:1},8,["onClick"])])),_:1},8,["show"])])),_:1},8,["title"]),i],64)})),s=n(641),l=n(3582),d=n(8869),v=n(9524),c=n(2986),y=n(6544),b=n(2781),h=n(4733),u=n(9785),m=n(8732),w=n(7245),k=n(9486),{add:f,use:g,pack:_,packs:z,merge:S}=(0,k.bU)();(0,k.IH)("zh-CN",m.Z),(0,k.IH)("en-US",w.Z),f("zh-CN",{basicAppBar:"基础导航栏",customStyle:"自定义样式",addSlotsAtTitle:"添加标题处插槽",addTheTitleFromTheSlot:"从插槽处添加标题",addLeftSlot:"添加左侧插槽",title:"标题",addRightSlot:"添加右侧插槽",addLeftAndRightSlot:"添加左右插槽",options1:"选项一",options2:"选项二",search:"搜索",goBack:"返回"}),f("en-US",{basicAppBar:"Basic AppBar",customStyle:"Custom Style",addSlotsAtTitle:"Add Slots At Title",addTheTitleFromTheSlot:"Add The Title From The Slot",addLeftSlot:"Add Left Slot",title:"Title",addRightSlot:"Add Right Slot",addLeftAndRightSlot:"Add Left And Right Slot",options1:"options1",options2:"options2",search:"search",goBack:"Go Back"});var W=n(6125),Z={name:"AppBarExample",directives:{Ripple:c.Z},components:{[l.Z.name]:l.Z,[d.Z.name]:d.Z,[b.Z.name]:b.Z,[h.Z.name]:h.Z,[u.Z.name]:u.Z,AppType:v.Z},setup(){var a=(0,s.iH)(!1),e=(0,s.iH)([]);return(0,W.jS)((e=>{(a=>{(0,k.D$)(a),g(a)})(e),a.value=!1})),{offsetY:a,menuList:e,pack:_,searchData:()=>{(0,y.ZP)({content:_.value.search,position:"top"})},goBack:()=>{(0,y.ZP)({content:_.value.goBack,position:"top"})},changeOffset:()=>{e.value=[{label:_.value.options1,value:"menu1"},{label:_.value.options2,value:"menu2"}],a.value=!0}}}},C=n(6062),A=n.n(C),T=n(1403);A()(T.Z,{insert:"head",singleton:!1}),T.Z.locals,Z.render=x,Z.__scopeId="data-v-04d66110";var U=Z}}]);