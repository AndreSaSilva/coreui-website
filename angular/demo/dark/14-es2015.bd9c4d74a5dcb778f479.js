(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+1an":function(e,t,n){"use strict";n.r(t),n.d(t,"DraggableCardsModule",function(){return O});var r=n("SVse"),i=n("YS7c"),o=n.n(i),a=n("8Y7J"),s=n("XNiG"),l=n("quSY"),d=n("pLZG"),c=n("lJxs");class u{constructor(e,t,n){this.name=e,this.drake=t,this.options=n,this.initEvents=!1}}const m={Cancel:"cancel",Cloned:"cloned",Drag:"drag",DragEnd:"dragend",Drop:"drop",Out:"out",Over:"over",Remove:"remove",Shadow:"shadow",DropModel:"dropModel",RemoveModel:"removeModel"},p=Object.keys(m).map(e=>m[e]),v=o.a||i;class h{constructor(e=v){this.build=e}}const g=(e,t,n)=>r=>r.pipe(Object(d.a)(({event:n,name:r})=>n===e&&(void 0===t||r===t)),Object(c.a)(({name:e,args:t})=>n(e,t))),f=(e,[t,n,r])=>({name:e,el:t,container:n,source:r});let b=(()=>{class e{constructor(e=null){this.drakeFactory=e,this.dispatch$=new s.a,this.drag=e=>this.dispatch$.pipe(g(m.Drag,e,(e,[t,n])=>({name:e,el:t,source:n}))),this.dragend=e=>this.dispatch$.pipe(g(m.DragEnd,e,(e,[t])=>({name:e,el:t}))),this.drop=e=>this.dispatch$.pipe(g(m.Drop,e,(e,[t,n,r,i])=>({name:e,el:t,target:n,source:r,sibling:i}))),this.elContainerSource=e=>t=>this.dispatch$.pipe(g(e,t,f)),this.cancel=this.elContainerSource(m.Cancel),this.remove=this.elContainerSource(m.Remove),this.shadow=this.elContainerSource(m.Shadow),this.over=this.elContainerSource(m.Over),this.out=this.elContainerSource(m.Out),this.cloned=e=>this.dispatch$.pipe(g(m.Cloned,e,(e,[t,n,r])=>({name:e,clone:t,original:n,cloneType:r}))),this.dropModel=e=>this.dispatch$.pipe(g(m.DropModel,e,(e,[t,n,r,i,o,a,s,l,d])=>({name:e,el:t,target:n,source:r,sibling:i,item:o,sourceModel:a,targetModel:s,sourceIndex:l,targetIndex:d}))),this.removeModel=e=>this.dispatch$.pipe(g(m.RemoveModel,e,(e,[t,n,r,i,o,a])=>({name:e,el:t,container:n,source:r,item:i,sourceModel:o,sourceIndex:a}))),this.groups={},null===this.drakeFactory&&(this.drakeFactory=new h)}add(e){if(this.find(e.name))throw new Error('Group named: "'+e.name+'" already exists.');return this.groups[e.name]=e,this.handleModels(e),this.setupEvents(e),e}find(e){return this.groups[e]}destroy(e){let t=this.find(e);t&&(t.drake&&t.drake.destroy(),delete this.groups[e])}createGroup(e,t){return this.add(new u(e,this.drakeFactory.build([],t),t))}handleModels({name:e,drake:t,options:n}){let r,i,o;t.on("remove",(n,r,o)=>{if(!t.models)return;let a=t.models[t.containers.indexOf(o)];a=a.slice(0);const s=a.splice(i,1)[0];this.dispatch$.next({event:m.RemoveModel,name:e,args:[n,r,o,s,a,i]})}),t.on("drag",(e,n)=>{t.models&&(r=e,i=this.domIndexOf(e,n))}),t.on("drop",(a,s,l,d)=>{if(!t.models||!s)return;o=this.domIndexOf(a,s);let c,u=t.models[t.containers.indexOf(l)],p=t.models[t.containers.indexOf(s)];if(s===l)u=u.slice(0),c=u.splice(i,1)[0],u.splice(o,0,c),p=u;else{let e=r!==a;if(c=u[i],e){if(!n.copyItem)throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");c=n.copyItem(c)}if(e||(u=u.slice(0),u.splice(i,1)),p=p.slice(0),p.splice(o,0,c),e)try{s.removeChild(a)}catch(v){}}this.dispatch$.next({event:m.DropModel,name:e,args:[a,s,l,d,c,u,p,i,o]})})}setupEvents(e){if(e.initEvents)return;e.initEvents=!0;const t=e.name;p.forEach(n=>{e.drake.on(n,(...e)=>{this.dispatch$.next({event:n,name:t,args:e})})})}domIndexOf(e,t){return Array.prototype.indexOf.call(t.children,e)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](h,8))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),E=(()=>{class e{constructor(e,t){this.el=e,this.dragulaService=t,this.dragulaModelChange=new a.EventEmitter}get container(){return this.el&&this.el.nativeElement}ngOnChanges(e){if(e&&e.dragula){const{previousValue:t,currentValue:n}=e.dragula;let r=!!n;!!t&&this.teardown(t),r&&this.setup()}else if(e&&e.dragulaModel){const{previousValue:t,currentValue:n}=e.dragulaModel,{drake:r}=this.group;if(this.dragula&&r){r.models=r.models||[];let e=r.models.indexOf(t);-1!==e?(r.models.splice(e,1),n&&r.models.splice(e,0,n)):n&&r.models.push(n)}}}setup(){let e=this.dragulaService.find(this.dragula);e||(e=this.dragulaService.createGroup(this.dragula,{})),(e=>{this.dragulaModel&&(e.drake.models?e.drake.models.push(this.dragulaModel):e.drake.models=[this.dragulaModel])})(e),e.drake.containers.push(this.container),this.subscribe(this.dragula),this.group=e}subscribe(e){this.subs=new l.a,this.subs.add(this.dragulaService.dropModel(e).subscribe(({source:e,target:t,sourceModel:n,targetModel:r})=>{e===this.el.nativeElement?this.dragulaModelChange.emit(n):t===this.el.nativeElement&&this.dragulaModelChange.emit(r)})),this.subs.add(this.dragulaService.removeModel(e).subscribe(({source:e,sourceModel:t})=>{e===this.el.nativeElement&&this.dragulaModelChange.emit(t)}))}teardown(e){this.subs&&this.subs.unsubscribe();const t=this.dragulaService.find(e);if(t){const e=t.drake.containers.indexOf(this.el.nativeElement);if(-1!==e&&t.drake.containers.splice(e,1),this.dragulaModel&&t.drake&&t.drake.models){let e=t.drake.models.indexOf(this.dragulaModel);-1!==e&&t.drake.models.splice(e,1)}}}ngOnDestroy(){this.teardown(this.dragula)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](a.ElementRef),a["\u0275\u0275directiveInject"](b))},e.\u0275dir=a["\u0275\u0275defineDirective"]({type:e,selectors:[["","dragula",""]],inputs:{dragula:"dragula",dragulaModel:"dragulaModel"},outputs:{dragulaModelChange:"dragulaModelChange"},features:[a["\u0275\u0275NgOnChangesFeature"]]}),e})(),y=(()=>{class e{static forRoot(){return{ngModule:e,providers:[b]}}}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e})();new h((e,t)=>new S(e,t));class S{constructor(e=[],t={},n){this.containers=e,this.options=t,this.models=n,this.dragging=!1,this.emitter$=new s.a,this.subs=new l.a}start(e){this.dragging=!0}end(){this.dragging=!1}cancel(e){this.dragging=!1}remove(){this.dragging=!1}on(e,t){this.subs.add(this.emitter$.pipe(Object(d.a)(({eventType:t})=>t===e)).subscribe(({args:e})=>{t(...e)}))}destroy(){this.subs.unsubscribe()}emit(e,...t){this.emitter$.next({eventType:e,args:t})}}var x=n("iInd");const w=[{path:"",component:(()=>{class e{constructor(e){this.dragulaService=e,this.GROUP_1="GROUP_ONE",this.subs=new l.a,e.destroy(this.GROUP_1),e.createGroup(this.GROUP_1,{moves:function(e,t,n){return"card-header drag"===n.className}}),this.subs.add(this.dragulaService.drag(this.GROUP_1).subscribe(({el:e,source:t})=>{this.onDrag({el:e,source:t})})),this.subs.add(this.dragulaService.drop(this.GROUP_1).subscribe(({el:e,source:t})=>{this.onDrop({el:e,source:t})})),this.subs.add(this.dragulaService.over(this.GROUP_1).subscribe(({el:e,source:t,container:n})=>{this.onOver({el:e,source:t,container:n})})),this.subs.add(this.dragulaService.out(this.GROUP_1).subscribe(({el:e,source:t,container:n})=>{this.onOut({el:e,source:t,container:n})}))}ngOnDestroy(){this.subs.unsubscribe()}hasClass(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)}addClass(e,t){this.hasClass(e,t)||(e.className=e.className?[e.className,t].join(" "):t)}removeClass(e,t){this.hasClass(e,t)&&(e.className=e.className.replace(new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)","g"),""))}onDrag(e){const{el:t}=e;this.removeClass(t,"ex-moved")}onDrop(e){const{el:t}=e;this.addClass(t,"ex-moved")}onOver(e){const{container:t}=e;this.addClass(t,"ex-over")}onOut(e){const{container:t}=e;this.removeClass(t,"ex-over")}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](b))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["ng-component"]],decls:56,vars:3,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-md-4"],[1,"row","dragdrop",3,"dragula"],[1,"col-md-12"],[1,"card","card-accent-secondary"],[1,"card-header","drag"],["href","https://coreui.io/pro/angular/",1,"badge","badge-info","mfs-2"],[1,"card-body"],[1,"card","card-accent-primary"],[1,"card","card-accent-success"],[1,"card","card-accent-warning"],[1,"card","card-accent-info"],[1,"card","card-accent-danger"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275elementStart"](3,"div",3),a["\u0275\u0275elementStart"](4,"div",4),a["\u0275\u0275elementStart"](5,"div",5),a["\u0275\u0275elementStart"](6,"div",6),a["\u0275\u0275text"](7," Drag & Drop Card "),a["\u0275\u0275elementStart"](8,"a",7),a["\u0275\u0275text"](9,"CoreUI Pro Integration"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"div",8),a["\u0275\u0275text"](11," Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](12,"div",4),a["\u0275\u0275elementStart"](13,"div",9),a["\u0275\u0275elementStart"](14,"div",6),a["\u0275\u0275text"](15," Drag & Drop Card "),a["\u0275\u0275elementStart"](16,"a",7),a["\u0275\u0275text"](17,"CoreUI Pro Integration"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](18,"div",8),a["\u0275\u0275text"](19," Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](20,"div",2),a["\u0275\u0275elementStart"](21,"div",3),a["\u0275\u0275elementStart"](22,"div",4),a["\u0275\u0275elementStart"](23,"div",10),a["\u0275\u0275elementStart"](24,"div",6),a["\u0275\u0275text"](25," Drag & Drop Card "),a["\u0275\u0275elementStart"](26,"a",7),a["\u0275\u0275text"](27,"CoreUI Pro Integration"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](28,"div",8),a["\u0275\u0275text"](29," Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](30,"div",4),a["\u0275\u0275elementStart"](31,"div",11),a["\u0275\u0275elementStart"](32,"div",6),a["\u0275\u0275text"](33," Drag & Drop Card "),a["\u0275\u0275elementStart"](34,"a",7),a["\u0275\u0275text"](35,"CoreUI Pro Integration"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](36,"div",8),a["\u0275\u0275text"](37," Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](38,"div",2),a["\u0275\u0275elementStart"](39,"div",3),a["\u0275\u0275elementStart"](40,"div",4),a["\u0275\u0275elementStart"](41,"div",12),a["\u0275\u0275elementStart"](42,"div",6),a["\u0275\u0275text"](43," Drag & Drop Card "),a["\u0275\u0275elementStart"](44,"a",7),a["\u0275\u0275text"](45,"CoreUI Pro Integration"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](46,"div",8),a["\u0275\u0275text"](47," Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](48,"div",4),a["\u0275\u0275elementStart"](49,"div",13),a["\u0275\u0275elementStart"](50,"div",6),a["\u0275\u0275text"](51," Drag & Drop Card "),a["\u0275\u0275elementStart"](52,"a",7),a["\u0275\u0275text"](53,"CoreUI Pro Integration"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](54,"div",8),a["\u0275\u0275text"](55," Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("dragula",t.GROUP_1),a["\u0275\u0275advance"](18),a["\u0275\u0275property"]("dragula",t.GROUP_1),a["\u0275\u0275advance"](18),a["\u0275\u0275property"]("dragula",t.GROUP_1))},directives:[E],styles:[".gu-mirror{position:fixed!important;margin:0!important;z-index:9999!important;opacity:.8}.gu-hide{display:none!important}.gu-unselectable{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.gu-transit{opacity:.2}",".dragdrop{min-height:50%}"],encapsulation:2}),e})(),data:{title:"Draggable Cards"}}];let C=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[x.g.forChild(w)],x.g]}),e})(),O=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[C,r.c,y.forRoot()]]}),e})()},"8/JR":function(e,t,n){"use strict";var r=n("8T9/"),i=n("Ibf7");e.exports=function(e,t){var n=t||{},o={};return void 0===e&&(e={}),e.on=function(t,n){return o[t]?o[t].push(n):o[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var r=arguments.length;if(1===r)delete o[t];else if(0===r)o={};else{var i=o[t];if(!i)return e;i.splice(i.indexOf(n),1)}return e},e.emit=function(){var t=r(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var a=(o[t]||[]).slice(0);return function(){var o=r(arguments),s=this||e;if("error"===t&&!1!==n.throws&&!a.length)throw 1===o.length?o[0]:o;return a.forEach(function(r){n.async?i(r,o,s):r.apply(s,o),r._once&&e.off(t,r)}),e}},e}},"8T9/":function(e,t){e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},Gjsa:function(e,t){var n="function"==typeof setImmediate;e.exports=n?function(e){setImmediate(e)}:function(e){setTimeout(e,0)}},Ibf7:function(e,t,n){"use strict";var r=n("Gjsa");e.exports=function(e,t,n){e&&r(function(){e.apply(n||null,t||[])})}},PzH3:function(e,t,n){"use strict";var r=n("bBst"),i=n("Ys8N"),o=global.document,a=function(e,t,n,r){return e.addEventListener(t,n,r)},s=function(e,t,n,r){return e.removeEventListener(t,n,r)},l=[];function d(e,t,n){var r=function(e,t,n){var r,i;for(r=0;r<l.length;r++)if((i=l[r]).element===e&&i.type===t&&i.fn===n)return r}(e,t,n);if(r){var i=l[r].wrapper;return l.splice(r,1),i}}global.addEventListener||(a=function(e,t,n){return e.attachEvent("on"+t,function(e,t,n){var r=d(e,t,n)||function(e,t,n){return function(t){var r=t||global.event;r.target=r.target||r.srcElement,r.preventDefault=r.preventDefault||function(){r.returnValue=!1},r.stopPropagation=r.stopPropagation||function(){r.cancelBubble=!0},r.which=r.which||r.keyCode,n.call(e,r)}}(e,0,n);return l.push({wrapper:r,element:e,type:t,fn:n}),r}(e,t,n))},s=function(e,t,n){var r=d(e,t,n);if(r)return e.detachEvent("on"+t,r)}),e.exports={add:a,remove:s,fabricate:function(e,t,n){var a=-1===i.indexOf(t)?new r(t,{detail:n}):function(){var e;return o.createEvent?(e=o.createEvent("Event")).initEvent(t,!0,!0):o.createEventObject&&(e=o.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(a):e.fireEvent("on"+t,a)}}},YS7c:function(e,t,n){"use strict";var r=n("8/JR"),i=n("PzH3"),o=n("n6yW"),a=document,s=a.documentElement;function l(e,t,n,r){global.navigator.pointerEnabled?i[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[n],r):global.navigator.msPointerEnabled?i[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[n],r):(i[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[n],r),i[t](e,n,r))}function d(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function c(e){var t=e.getBoundingClientRect();return{left:t.left+u("scrollLeft","pageXOffset"),top:t.top+u("scrollTop","pageYOffset")}}function u(e,t){return void 0!==global[t]?global[t]:s.clientHeight?s[e]:a.body[e]}function m(e,t,n){var r,i=(e=e||{}).className||"";return e.className+=" gu-hide",r=a.elementFromPoint(t,n),e.className=i,r}function p(){return!1}function v(){return!0}function h(e){return e.width||e.right-e.left}function g(e){return e.height||e.bottom-e.top}function f(e){return e.parentNode===a?null:e.parentNode}function b(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||E(e)}function E(e){return!!e&&"false"!==e.contentEditable&&("true"===e.contentEditable||E(f(e)))}function y(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function S(e,t){var n=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in n)&&r[e]in n&&(e=r[e]),n[e]}e.exports=function(e,t){var n,u,E,x,w,C,O,M,I,D,N,R=arguments.length;1===R&&!1===Array.isArray(e)&&(t=e,e=[]);var P,k=null,q=t||{};void 0===q.moves&&(q.moves=v),void 0===q.accepts&&(q.accepts=v),void 0===q.invalid&&(q.invalid=V),void 0===q.containers&&(q.containers=e||[]),void 0===q.isContainer&&(q.isContainer=p),void 0===q.copy&&(q.copy=!1),void 0===q.copySortSource&&(q.copySortSource=!1),void 0===q.revertOnSpill&&(q.revertOnSpill=!1),void 0===q.removeOnSpill&&(q.removeOnSpill=!1),void 0===q.direction&&(q.direction="vertical"),void 0===q.ignoreInputTextSelection&&(q.ignoreInputTextSelection=!0),void 0===q.mirrorContainer&&(q.mirrorContainer=a.body);var U=r({containers:q.containers,start:A,end:z,cancel:Q,remove:Z,destroy:$,canMove:F,dragging:!1});return!0===q.removeOnSpill&&U.on("over",ie).on("out",oe),j(),U;function T(e){return-1!==U.containers.indexOf(e)||q.isContainer(e)}function j(e){var t=e?"remove":"add";l(s,t,"mousedown",_),l(s,t,"mouseup",K)}function G(e){l(s,e?"remove":"add","mousemove",L)}function Y(e){var t=e?"remove":"add";i[t](s,"selectstart",X),i[t](s,"click",X)}function $(){j(!0),K({})}function X(e){P&&e.preventDefault()}function _(e){if(C=e.clientX,O=e.clientY,1===d(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,n=B(t);n&&(P=n,G(),"mousedown"===e.type&&(b(t)?t.focus():e.preventDefault()))}}function L(e){if(P)if(0!==d(e)){if(!(void 0!==e.clientX&&Math.abs(e.clientX-C)<=(q.slideFactorX||0)&&void 0!==e.clientY&&Math.abs(e.clientY-O)<=(q.slideFactorY||0))){if(q.ignoreInputTextSelection){var t=S("clientX",e)||0,n=S("clientY",e)||0;if(b(a.elementFromPoint(t,n)))return}var r=P;G(!0),Y(),z(),J(r);var i=c(E);x=S("pageX",e)-i.left,w=S("pageY",e)-i.top,o.add(D||E,"gu-transit"),ae(),re(e)}}else K({})}function B(e){if(!(U.dragging&&n||T(e))){for(var t=e;f(e)&&!1===T(f(e));){if(q.invalid(e,t))return;if(!(e=f(e)))return}var r=f(e);if(r&&!q.invalid(e,t)&&q.moves(e,r,t,y(e)))return{item:e,source:r}}}function F(e){return!!B(e)}function A(e){var t=B(e);t&&J(t)}function J(e){ce(e.item,e.source)&&(D=e.item.cloneNode(!0),U.emit("cloned",D,e.item,"copy")),u=e.source,E=e.item,M=I=y(e.item),U.dragging=!0,U.emit("drag",E,u)}function V(){return!1}function z(){if(U.dragging){var e=D||E;W(e,f(e))}}function H(){P=!1,G(!0),Y(!0)}function K(e){if(H(),U.dragging){var t=D||E,r=S("clientX",e)||0,i=S("clientY",e)||0,o=ne(m(n,r,i),r,i);o&&(D&&q.copySortSource||!D||o!==u)?W(t,o):q.removeOnSpill?Z():Q()}}function W(e,t){var n=f(e);D&&q.copySortSource&&t===u&&n.removeChild(E),te(t)?U.emit("cancel",e,u,u):U.emit("drop",e,t,u,I),ee()}function Z(){if(U.dragging){var e=D||E,t=f(e);t&&t.removeChild(e),U.emit(D?"cancel":"remove",e,t,u),ee()}}function Q(e){if(U.dragging){var t=arguments.length>0?e:q.revertOnSpill,n=D||E,r=f(n),i=te(r);!1===i&&t&&(D?r&&r.removeChild(D):u.insertBefore(n,M)),i||t?U.emit("cancel",n,u,u):U.emit("drop",n,r,u,I),ee()}}function ee(){var e=D||E;H(),se(),e&&o.rm(e,"gu-transit"),N&&clearTimeout(N),U.dragging=!1,k&&U.emit("out",e,k,u),U.emit("dragend",e),u=E=D=M=I=N=k=null}function te(e,t){var r;return r=void 0!==t?t:n?I:y(D||E),e===u&&r===M}function ne(e,t,n){for(var r=e;r&&!i();)r=f(r);return r;function i(){if(!1===T(r))return!1;var i=le(r,e),o=de(r,i,t,n);return!!te(r,o)||q.accepts(E,r,u,o)}}function re(e){if(n){e.preventDefault();var t=S("clientX",e)||0,r=S("clientY",e)||0,i=r-w;n.style.left=t-x+"px",n.style.top=i+"px";var o=D||E,a=m(n,t,r),s=ne(a,t,r),l=null!==s&&s!==k;(l||null===s)&&(k&&v("out"),k=s,l&&v("over"));var d=f(o);if(s!==u||!D||q.copySortSource){var c,p=le(s,a);if(null!==p)c=de(s,p,t,r);else{if(!0!==q.revertOnSpill||D)return void(D&&d&&d.removeChild(o));c=M,s=u}(null===c&&l||c!==o&&c!==y(o))&&(I=c,s.insertBefore(o,c),U.emit("shadow",o,s,u))}else d&&d.removeChild(o)}function v(e){U.emit(e,o,k,u)}}function ie(e){o.rm(e,"gu-hide")}function oe(e){U.dragging&&o.add(e,"gu-hide")}function ae(){if(!n){var e=E.getBoundingClientRect();(n=E.cloneNode(!0)).style.width=h(e)+"px",n.style.height=g(e)+"px",o.rm(n,"gu-transit"),o.add(n,"gu-mirror"),q.mirrorContainer.appendChild(n),l(s,"add","mousemove",re),o.add(q.mirrorContainer,"gu-unselectable"),U.emit("cloned",n,E,"mirror")}}function se(){n&&(o.rm(q.mirrorContainer,"gu-unselectable"),l(s,"remove","mousemove",re),f(n).removeChild(n),n=null)}function le(e,t){for(var n=t;n!==e&&f(n)!==e;)n=f(n);return n===s?null:n}function de(e,t,n,r){var i,o="horizontal"===q.direction;return t!==e?(i=t.getBoundingClientRect(),(o?n>i.left+h(i)/2:r>i.top+g(i)/2)?y(t):t):function(){var t,i,a,s=e.children.length;for(t=0;t<s;t++){if(a=(i=e.children[t]).getBoundingClientRect(),o&&a.left+a.width/2>n)return i;if(!o&&a.top+a.height/2>r)return i}return null}()}function ce(e,t){return"boolean"==typeof q.copy?q.copy:q.copy(e,t)}}},Ys8N:function(e,t,n){"use strict";var r=[],i="",o=/^on/;for(i in global)o.test(i)&&r.push(i.slice(2));e.exports=r},bBst:function(e,t){var n=global.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(t){}return!1}()?n:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}},n6yW:function(e,t,n){"use strict";var r={};function i(e){var t=r[e];return t?t.lastIndex=0:r[e]=t=new RegExp("(?:^|\\s)"+e+"(?:\\s|$)","g"),t}e.exports={add:function(e,t){var n=e.className;n.length?i(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(i(t)," ").trim()}}}}]);