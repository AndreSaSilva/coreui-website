(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{564:function(t,e,n){var i={"./chart-imports.txt":630};function o(t){return r(t).then(n)}function r(t){return n.e(96).then((function(){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}))}o.keys=function(){return Object.keys(i)},o.resolve=r,o.id=564,t.exports=o},682:function(t,e,n){"use strict";n.r(e);n(15),n(560);var i=n(625),o=n.n(i),r=(n(626),{props:{filename:String,code:String,language:{type:String,default:"html"}},data:function(){return{importedCode:void 0}},mounted:function(){var t=this;this.filename&&n(564)("./".concat(this.filename,".txt")).then((function(e){t.importedCode=e.default.trim()}))},watch:{computedCode:{immediate:!0,handler:function(t){var e=this;this.computedCode&&this.$nextTick((function(){e.$el&&o.a.highlightBlock(e.$el.firstElementChild)}))}}},computed:{computedCode:function(){return this.importedCode||this.code}}}),c=n(0),u=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.computedCode?e("pre",{staticClass:"px-2",staticStyle:{"background-color":"#1D1F21"}},[e("code",{class:this.language},[this._t("default",[this._v(this._s(this.computedCode))])],2)]):this._e()}),[],!1,null,null,null);e.default=u.exports}}]);