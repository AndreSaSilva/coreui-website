!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{AgMk:function(n,l,d){"use strict";d.r(l),d.d(l,"ThemeModule",(function(){return g}));var r,a,m,o,i=d("SVse"),c=d("Iluq"),s=d("rVqu"),h=d("iInd"),E=d("UtdI"),S=d("8Y7J"),p=[{path:"",data:{title:"Theme"},children:[{path:"",redirectTo:"colors"},{path:"colors",component:(a=function(){function n(t){e(this,n),this._document=t}var l,d,r;return l=n,(d=[{key:"themeColors",value:function(){var e=this;Array.from(this._document.querySelectorAll(".theme-color")).forEach((function(t){var n=Object(E.a)("background-color",t),l=e._document.createElement("table");l.innerHTML='\n        <table class="w-100">\n          <tr>\n            <td class="text-muted">HEX:</td>\n            <td class="font-weight-bold">'.concat(function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error(e+" is not a valid rgb color");var n="0"+parseInt(t[1],10).toString(16),l="0"+parseInt(t[2],10).toString(16),d="0"+parseInt(t[3],10).toString(16);return"#".concat(n.slice(-2)).concat(l.slice(-2)).concat(d.slice(-2))}(n),'</td>\n          </tr>\n          <tr>\n            <td class="text-muted">RGB:</td>\n            <td class="font-weight-bold">').concat(n,"</td>\n          </tr>\n        </table>\n      "),t.parentNode.appendChild(l)}))}},{key:"ngOnInit",value:function(){this.themeColors()}}])&&t(l.prototype,d),r&&t(l,r),n}(),a.\u0275fac=function(e){return new(e||a)(S["\u0275\u0275directiveInject"](i.e))},a.\u0275cmp=S["\u0275\u0275defineComponent"]({type:a,selectors:[["ng-component"]],decls:79,vars:0,consts:[[1,"fade-in"],["xl","2","md","3","sm","4","col","6",1,"mb-4"],[1,"bg-primary","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-secondary","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-success","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-danger","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-warning","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-info","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-light","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-dark","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"mb-3"],[1,"bg-gray-100","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-200","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-300","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-400","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-500","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-600","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-700","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-800","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-900","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"]],template:function(e,t){1&e&&(S["\u0275\u0275elementStart"](0,"div",0),S["\u0275\u0275elementStart"](1,"c-card"),S["\u0275\u0275elementStart"](2,"c-card-header"),S["\u0275\u0275text"](3," Theme colors "),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](4,"c-card-body"),S["\u0275\u0275elementStart"](5,"c-row"),S["\u0275\u0275elementStart"](6,"c-col",1),S["\u0275\u0275element"](7,"div",2),S["\u0275\u0275elementStart"](8,"h6"),S["\u0275\u0275text"](9,"Brand Primary Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](10,"c-col",1),S["\u0275\u0275element"](11,"div",3),S["\u0275\u0275elementStart"](12,"h6"),S["\u0275\u0275text"](13,"Brand Secondary Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](14,"c-col",1),S["\u0275\u0275element"](15,"div",4),S["\u0275\u0275elementStart"](16,"h6"),S["\u0275\u0275text"](17,"Brand Success Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](18,"c-col",1),S["\u0275\u0275element"](19,"div",5),S["\u0275\u0275elementStart"](20,"h6"),S["\u0275\u0275text"](21,"Brand Danger Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](22,"c-col",1),S["\u0275\u0275element"](23,"div",6),S["\u0275\u0275elementStart"](24,"h6"),S["\u0275\u0275text"](25,"Brand Warning Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](26,"c-col",1),S["\u0275\u0275element"](27,"div",7),S["\u0275\u0275elementStart"](28,"h6"),S["\u0275\u0275text"](29,"Brand Info Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](30,"c-col",1),S["\u0275\u0275element"](31,"div",8),S["\u0275\u0275elementStart"](32,"h6"),S["\u0275\u0275text"](33,"Brand Light Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](34,"c-col",1),S["\u0275\u0275element"](35,"div",9),S["\u0275\u0275elementStart"](36,"h6"),S["\u0275\u0275text"](37,"Brand Dark Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](38,"c-card"),S["\u0275\u0275elementStart"](39,"c-card-header"),S["\u0275\u0275text"](40," Grays "),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](41,"c-card-body"),S["\u0275\u0275elementStart"](42,"c-row",10),S["\u0275\u0275elementStart"](43,"c-col",1),S["\u0275\u0275element"](44,"div",11),S["\u0275\u0275elementStart"](45,"h6"),S["\u0275\u0275text"](46,"Gray 100 Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](47,"c-col",1),S["\u0275\u0275element"](48,"div",12),S["\u0275\u0275elementStart"](49,"h6"),S["\u0275\u0275text"](50,"Gray 200 Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](51,"c-col",1),S["\u0275\u0275element"](52,"div",13),S["\u0275\u0275elementStart"](53,"h6"),S["\u0275\u0275text"](54,"Gray 300 Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](55,"c-col",1),S["\u0275\u0275element"](56,"div",14),S["\u0275\u0275elementStart"](57,"h6"),S["\u0275\u0275text"](58,"Gray 400 Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](59,"c-col",1),S["\u0275\u0275element"](60,"div",15),S["\u0275\u0275elementStart"](61,"h6"),S["\u0275\u0275text"](62,"Gray 500 Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](63,"c-col",1),S["\u0275\u0275element"](64,"div",16),S["\u0275\u0275elementStart"](65,"h6"),S["\u0275\u0275text"](66,"Gray 600 Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](67,"c-col",1),S["\u0275\u0275element"](68,"div",17),S["\u0275\u0275elementStart"](69,"h6"),S["\u0275\u0275text"](70,"Gray 700 Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](71,"c-col",1),S["\u0275\u0275element"](72,"div",18),S["\u0275\u0275elementStart"](73,"h6"),S["\u0275\u0275text"](74,"Gray 800 Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](75,"c-col",1),S["\u0275\u0275element"](76,"div",19),S["\u0275\u0275elementStart"](77,"h6"),S["\u0275\u0275text"](78,"Gray 900 Color"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"]())},directives:[c.sc,c.wc,c.tc,c.Cb,c.Eb],encapsulation:2}),a),data:{title:"Colors"}},{path:"typography",component:(r=function t(){e(this,t)},r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=S["\u0275\u0275defineComponent"]({type:r,selectors:[["ng-component"]],decls:191,vars:0,consts:[[1,"fade-in"],[1,"table"],[1,"c-highlighter-rouge"],[1,"bd-example"],[1,"h1"],[1,"h2"],[1,"h3"],[1,"h4"],[1,"h5"],[1,"h6"],["id","someAnchor"],[1,"bd-example","bd-example-type"],[1,"display-1"],[1,"display-2"],[1,"display-3"],[1,"display-4"],[1,"row"],[1,"col-sm-3"],[1,"col-sm-9"],[1,"col-sm-3","c-d-block","c-text-truncate"],[1,"col-sm-9","c-d-block","c-text-truncate"],[1,"col-sm-4"],[1,"col-sm-8"]],template:function(e,t){1&e&&(S["\u0275\u0275elementStart"](0,"div",0),S["\u0275\u0275elementStart"](1,"c-card"),S["\u0275\u0275elementStart"](2,"c-card-header"),S["\u0275\u0275text"](3," Headings "),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](4,"c-card-body"),S["\u0275\u0275elementStart"](5,"p"),S["\u0275\u0275text"](6,"Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](7,"table",1),S["\u0275\u0275elementStart"](8,"thead"),S["\u0275\u0275elementStart"](9,"tr"),S["\u0275\u0275elementStart"](10,"th"),S["\u0275\u0275text"](11,"Heading"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](12,"th"),S["\u0275\u0275text"](13,"Example"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](14,"tbody"),S["\u0275\u0275elementStart"](15,"tr"),S["\u0275\u0275elementStart"](16,"td"),S["\u0275\u0275elementStart"](17,"p"),S["\u0275\u0275elementStart"](18,"code",2),S["\u0275\u0275text"](19,"<h1></h1>"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](20,"td"),S["\u0275\u0275elementStart"](21,"h1"),S["\u0275\u0275text"](22,"h1. Bootstrap heading"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](23,"tr"),S["\u0275\u0275elementStart"](24,"td"),S["\u0275\u0275elementStart"](25,"p"),S["\u0275\u0275elementStart"](26,"code",2),S["\u0275\u0275text"](27,"<h2></h2>"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](28,"td"),S["\u0275\u0275elementStart"](29,"h2"),S["\u0275\u0275text"](30,"h2. Bootstrap heading"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](31,"tr"),S["\u0275\u0275elementStart"](32,"td"),S["\u0275\u0275elementStart"](33,"p"),S["\u0275\u0275elementStart"](34,"code",2),S["\u0275\u0275text"](35,"<h3></h3>"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](36,"td"),S["\u0275\u0275elementStart"](37,"h3"),S["\u0275\u0275text"](38,"h3. Bootstrap heading"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](39,"tr"),S["\u0275\u0275elementStart"](40,"td"),S["\u0275\u0275elementStart"](41,"p"),S["\u0275\u0275elementStart"](42,"code",2),S["\u0275\u0275text"](43,"<h4></h4>"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](44,"td"),S["\u0275\u0275elementStart"](45,"h4"),S["\u0275\u0275text"](46,"h4. Bootstrap heading"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](47,"tr"),S["\u0275\u0275elementStart"](48,"td"),S["\u0275\u0275elementStart"](49,"p"),S["\u0275\u0275elementStart"](50,"code",2),S["\u0275\u0275text"](51,"<h5></h5>"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](52,"td"),S["\u0275\u0275elementStart"](53,"h5"),S["\u0275\u0275text"](54,"h5. Bootstrap heading"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](55,"tr"),S["\u0275\u0275elementStart"](56,"td"),S["\u0275\u0275elementStart"](57,"p"),S["\u0275\u0275elementStart"](58,"code",2),S["\u0275\u0275text"](59,"<h6></h6>"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](60,"td"),S["\u0275\u0275elementStart"](61,"h6"),S["\u0275\u0275text"](62,"h6. Bootstrap heading"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](63,"c-card"),S["\u0275\u0275elementStart"](64,"c-card-header"),S["\u0275\u0275text"](65," Headings "),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](66,"c-card-body"),S["\u0275\u0275elementStart"](67,"p"),S["\u0275\u0275elementStart"](68,"code",2),S["\u0275\u0275text"](69,".h1"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275text"](70," through "),S["\u0275\u0275elementStart"](71,"code",2),S["\u0275\u0275text"](72,".h6"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275text"](73," classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](74,"div",3),S["\u0275\u0275elementStart"](75,"p",4),S["\u0275\u0275text"](76,"h1. Bootstrap heading"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](77,"p",5),S["\u0275\u0275text"](78,"h2. Bootstrap heading"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](79,"p",6),S["\u0275\u0275text"](80,"h3. Bootstrap heading"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](81,"p",7),S["\u0275\u0275text"](82,"h4. Bootstrap heading"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](83,"p",8),S["\u0275\u0275text"](84,"h5. Bootstrap heading"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](85,"p",9),S["\u0275\u0275text"](86,"h6. Bootstrap heading"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](87,"c-card",10),S["\u0275\u0275elementStart"](88,"c-card-header"),S["\u0275\u0275text"](89," Display headings "),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](90,"c-card-body"),S["\u0275\u0275elementStart"](91,"p"),S["\u0275\u0275text"](92,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),S["\u0275\u0275elementStart"](93,"strong"),S["\u0275\u0275text"](94,"display heading"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275text"](95,"\u2014a larger, slightly more opinionated heading style."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](96,"div",11),S["\u0275\u0275elementStart"](97,"table",1),S["\u0275\u0275elementStart"](98,"tbody"),S["\u0275\u0275elementStart"](99,"tr"),S["\u0275\u0275elementStart"](100,"td"),S["\u0275\u0275elementStart"](101,"span",12),S["\u0275\u0275text"](102,"Display 1"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](103,"tr"),S["\u0275\u0275elementStart"](104,"td"),S["\u0275\u0275elementStart"](105,"span",13),S["\u0275\u0275text"](106,"Display 2"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](107,"tr"),S["\u0275\u0275elementStart"](108,"td"),S["\u0275\u0275elementStart"](109,"span",14),S["\u0275\u0275text"](110,"Display 3"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](111,"tr"),S["\u0275\u0275elementStart"](112,"td"),S["\u0275\u0275elementStart"](113,"span",15),S["\u0275\u0275text"](114,"Display 4"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](115,"c-card"),S["\u0275\u0275elementStart"](116,"c-card-header"),S["\u0275\u0275text"](117," Inline text elements "),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](118,"c-card-body"),S["\u0275\u0275elementStart"](119,"p"),S["\u0275\u0275text"](120,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),S["\u0275\u0275elementStart"](121,"strong"),S["\u0275\u0275text"](122,"display heading"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275text"](123,"\u2014a larger, slightly more opinionated heading style."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](124,"div",3),S["\u0275\u0275elementStart"](125,"p"),S["\u0275\u0275text"](126,"You can use the mark tag to "),S["\u0275\u0275elementStart"](127,"mark"),S["\u0275\u0275text"](128,"highlight"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275text"](129," text."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](130,"p"),S["\u0275\u0275elementStart"](131,"del"),S["\u0275\u0275text"](132,"This line of text is meant to be treated as deleted text."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](133,"p"),S["\u0275\u0275elementStart"](134,"s"),S["\u0275\u0275text"](135,"This line of text is meant to be treated as no longer accurate."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](136,"p"),S["\u0275\u0275elementStart"](137,"ins"),S["\u0275\u0275text"](138,"This line of text is meant to be treated as an addition to the document."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](139,"p"),S["\u0275\u0275elementStart"](140,"u"),S["\u0275\u0275text"](141,"This line of text will render as underlined"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](142,"p"),S["\u0275\u0275elementStart"](143,"small"),S["\u0275\u0275text"](144,"This line of text is meant to be treated as fine print."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](145,"p"),S["\u0275\u0275elementStart"](146,"strong"),S["\u0275\u0275text"](147,"This line rendered as bold text."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](148,"p"),S["\u0275\u0275elementStart"](149,"em"),S["\u0275\u0275text"](150,"This line rendered as italicized text."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](151,"c-card"),S["\u0275\u0275elementStart"](152,"c-card-header"),S["\u0275\u0275text"](153," Description list alignment "),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](154,"c-card-body"),S["\u0275\u0275elementStart"](155,"p"),S["\u0275\u0275text"](156,"Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a "),S["\u0275\u0275elementStart"](157,"code",2),S["\u0275\u0275text"](158,".text-truncate"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275text"](159," class to truncate the text with an ellipsis."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](160,"div",3),S["\u0275\u0275elementStart"](161,"dl",16),S["\u0275\u0275elementStart"](162,"dt",17),S["\u0275\u0275text"](163,"Description lists"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](164,"dd",18),S["\u0275\u0275text"](165,"A description list is perfect for defining terms."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](166,"dt",17),S["\u0275\u0275text"](167,"Euismod"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](168,"dd",18),S["\u0275\u0275elementStart"](169,"p"),S["\u0275\u0275text"](170,"Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](171,"p"),S["\u0275\u0275text"](172,"Donec id elit non mi porta gravida at eget metus."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](173,"dt",17),S["\u0275\u0275text"](174,"Malesuada porta"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](175,"dd",18),S["\u0275\u0275text"](176,"Etiam porta sem malesuada magna mollis euismod."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](177,"dt",19),S["\u0275\u0275text"](178,"Truncated term is truncated with "),S["\u0275\u0275elementStart"](179,"code"),S["\u0275\u0275text"](180,"d-block"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](181,"dd",20),S["\u0275\u0275text"](182,"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](183,"dt",17),S["\u0275\u0275text"](184,"Nesting"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](185,"dd",18),S["\u0275\u0275elementStart"](186,"dl",16),S["\u0275\u0275elementStart"](187,"dt",21),S["\u0275\u0275text"](188,"Nested definition list"),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementStart"](189,"dd",22),S["\u0275\u0275text"](190,"Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc."),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"](),S["\u0275\u0275elementEnd"]())},directives:[c.sc,c.wc,c.tc],encapsulation:2}),r),data:{title:"Typography"}}]}],u=((o=function t(){e(this,t)}).\u0275mod=S["\u0275\u0275defineNgModule"]({type:o}),o.\u0275inj=S["\u0275\u0275defineInjector"]({factory:function(e){return new(e||o)},imports:[[h.g.forChild(p)],h.g]}),o),g=((m=function t(){e(this,t)}).\u0275mod=S["\u0275\u0275defineNgModule"]({type:m}),m.\u0275inj=S["\u0275\u0275defineInjector"]({factory:function(e){return new(e||m)},imports:[[i.c,u,c.h,c.r,s.b]]}),m)},UtdI:function(e,t,n){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return function(e){return e.match(/^--.*/i)}(e)&&Boolean(document.documentMode)&&document.documentMode>=10?function(){for(var e={},t=document.styleSheets,n="",l=t.length-1;l>-1;l--){for(var d=t[l].cssRules,r=d.length-1;r>-1;r--)if(".ie-custom-properties"===d[r].selectorText){n=d[r].cssText;break}if(n)break}return(n=n.substring(n.lastIndexOf("{")+1,n.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var n=t.split(": ")[0],l=t.split(": ")[1];n&&l&&(e["--"+n.trim()]=l.trim())}})),e}()[e]:window.getComputedStyle(t,null).getPropertyValue(e).replace(/^\s/,"")}}}])}();