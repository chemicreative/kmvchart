(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{169:function(t,e,n){var content=n(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("446b1d92",content,!0,{sourceMap:!1})},186:function(t,e,n){"use strict";var r=n(169);n.n(r).a},187:function(t,e,n){(e=n(44)(!1)).push([t.i,"@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}.index-word-count{background:#1da158}.index-word-count>section.body>.output{background:#11954c}",""]),t.exports=e},194:function(t,e,n){"use strict";n.r(e);var r=n(42),o=(n(23),n(13),n(116),n(115),{layout:"util",data:function(){return{text:null,count:null}},methods:{fill0:function(text){for(var t=5-(text+="").length,e="",i=0;i<t;i++)e+=0;return e+text}},computed:{result:function(){if(!this.text||this.text.length<1)return this.count=0,"";var t=this.text.split(/\r|\n| |@/g).map((function(t){return t.trim()})).filter((function(t){return t.length>=1}));console.log(t),this.count=t.length;var e=t.reduce((function(t,e){return console.log("e",e),t[e]||(t[e]=1),t[e]++,t}),{}),n=Object.entries(e).map((function(t){var e=Object(r.a)(t,2);return{ti:e[0],val:e[1]}}));return n.sort((function(a,b){return b.val-a.val})),n.reduce((function(t,e){return t+"[".concat(e.val,"] : ").concat(e.ti," \n")}),"")}}}),c=(n(186),n(12)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index index-word-count"},[n("section",{staticClass:"body"},[n("div",{staticClass:"title"},[t._v("단어 빈도 구하기")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"input",domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("div",{staticClass:"summary"},[t._v("result : "+t._s(t.count)+" line")]),t._v(" "),n("textarea",{staticClass:"output",domProps:{innerHTML:t._s(t.result)}})]),t._v(" "),n("section",{staticClass:"back"},[n("ul",{staticClass:"figure-wrap"},t._l(10,(function(t){return n("li",{key:t,staticClass:"figure",class:"figure"+t})})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);