!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("Vue"));else if("function"==typeof define&&define.amd)define(["Vue"],t);else{var s="object"==typeof exports?t(require("Vue")):t(e.Vue);for(var n in s)("object"==typeof exports?exports:e)[n]=s[n]}}(window,function(e){return function(e){var t={};function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/wya-vc/dist/",s(s.s="./temp/switch/mobile-basic.js")}({"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/spin/spin.vue?vue&type=style&index=0&lang=css&":function(e,t,s){(e.exports=s("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".vc-spin{display:inline-block;vertical-align:middle;line-height:0}.vc-spin svg{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden;-webkit-animation:vc-spin-circle 1s linear infinite;animation:vc-spin-circle 1s linear infinite}@-webkit-keyframes vc-spin-circle{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes vc-spin-circle{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/switch/mobile/switch.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){(e.exports=s("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,'.vcm-switch{display:inline-block;width:51px;height:31px;line-height:32px;border-radius:31px;vertical-align:middle;border:2px solid #e5e5e5;background-color:#fff;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.vcm-switch__content{color:#53d769;font-size:14px;position:absolute;left:30px;line-height:28px}.vcm-switch__inner{content:"";width:28px;height:28px;border-radius:28px;background-color:#fff;position:absolute;left:-1px;top:-1px;border:1px solid rgba(0,0,0,.13);-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.11),0 6px 7px 1px rgba(0,0,0,.15);box-shadow:0 0 8px 0 rgba(0,0,0,.11),0 6px 7px 1px rgba(0,0,0,.15);cursor:pointer;-webkit-transition:left .2s ease-in-out,width .2s ease-in-out;transition:left .2s ease-in-out,width .2s ease-in-out}.vcm-switch__loading{width:14px;height:14px;position:absolute;left:3px;top:3px;z-index:1;opacity:.4}.vcm-switch.is-checked{border-color:#53d769;background-color:#53d769}.vcm-switch.is-checked .vcm-switch__content{left:3px;color:#fff}.vcm-switch.is-checked .vcm-switch__inner{left:20px}.vcm-switch.is-checked .vcm-switch__loading{left:25px}',""])},"./node_modules/css-loader/lib/css-base.js":function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var s=function(e,t){var s=e[1]||"",n=e[3];if(!n)return s;if(t&&"function"==typeof btoa){var o=(r=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[s].concat(i).concat([o]).join("\n")}var r;return[s].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+s+"}":s}).join("")},t.i=function(e,s){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var r=e[o];"number"==typeof r[0]&&n[r[0]]||(s&&!r[2]?r[2]=s:s&&(r[2]="("+r[2]+") and ("+s+")"),t.push(r))}},t}},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":function(e,t,s){"use strict";function n(e,t,s,n,o,i,r,l){var a,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=s,d._compiled=!0),n&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),r?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=a):o&&(a=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(d.functional){d._injectStyles=a;var c=d.render;d.render=function(e,t){return a.call(t),c(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,a):[a]}return{exports:e,options:d}}s.d(t,"a",function(){return n})},"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/spin/spin.vue?vue&type=style&index=0&lang=css&":function(e,t,s){var n=s("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/spin/spin.vue?vue&type=style&index=0&lang=css&");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,s("./node_modules/vue-style-loader/lib/addStylesClient.js").default)("17c4922c",n,!0,{})},"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/switch/mobile/switch.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){var n=s("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/switch/mobile/switch.vue?vue&type=style&index=0&lang=scss&");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,s("./node_modules/vue-style-loader/lib/addStylesClient.js").default)("1347cb27",n,!0,{})},"./node_modules/vue-style-loader/lib/addStylesClient.js":function(e,t,s){"use strict";function n(e,t){for(var s=[],n={},o=0;o<t.length;o++){var i=t[o],r=i[0],l={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};n[r]?n[r].parts.push(l):s.push(n[r]={id:r,parts:[l]})}return s}s.r(t),s.d(t,"default",function(){return m});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},r=o&&(document.head||document.getElementsByTagName("head")[0]),l=null,a=0,d=!1,c=function(){},u=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,s,o){d=s,u=o||{};var r=n(e,t);return v(r),function(t){for(var s=[],o=0;o<r.length;o++){var l=r[o];(a=i[l.id]).refs--,s.push(a)}t?v(r=n(e,t)):r=[];for(o=0;o<s.length;o++){var a;if(0===(a=s[o]).refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete i[a.id]}}}}function v(e){for(var t=0;t<e.length;t++){var s=e[t],n=i[s.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](s.parts[o]);for(;o<s.parts.length;o++)n.parts.push(b(s.parts[o]));n.parts.length>s.parts.length&&(n.parts.length=s.parts.length)}else{var r=[];for(o=0;o<s.parts.length;o++)r.push(b(s.parts[o]));i[s.id]={id:s.id,refs:1,parts:r}}}}function h(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function b(e){var t,s,n=document.querySelector("style["+p+'~="'+e.id+'"]');if(n){if(d)return c;n.parentNode.removeChild(n)}if(f){var o=a++;n=l||(l=h()),t=x.bind(null,n,o,!1),s=x.bind(null,n,o,!0)}else n=h(),t=function(e,t){var s=t.css,n=t.media,o=t.sourceMap;n&&e.setAttribute("media",n);u.ssrId&&e.setAttribute(p,t.id);o&&(s+="\n/*# sourceURL="+o.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}.bind(null,n),s=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else s()}}var _,g=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function x(e,t,s,n){var o=s?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}},"./src/extends/mixins/emitter.js":function(e,t,s){"use strict";t.a={methods:{dispatch:function(e,t,s){for(var n=this.$parent||this.$root,o=n.$options.name;n&&(!o||o!==e);)(n=n.$parent)&&(o=n.$options.name);n&&n.$emit.apply(n,[t].concat(s))},broadcast:function(e,t,s){var n=this;this.$children.forEach(function(o){o.$options.name===e?o.$emit.apply(o,[t].concat(s)):n.broadcast.apply(o,[e,t].concat(s))})}}}},"./src/spin/index.js":function(e,t,s){"use strict";var n={name:"vc-spin",components:{},props:{size:{type:Number,default:28},foreground:{type:String,default:"#ccc"},background:{type:String,default:"#108ee9"},fixed:{type:Boolean,default:!1}},data:function(){return{}},computed:{},methods:{}},o=(s("./src/spin/spin.vue?vue&type=style&index=0&lang=css&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),i=Object(o.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vc-spin"},[t("span",{style:{fontSize:this.size+"px"}},[this._t("loading",[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 32 32",width:"100%",height:"100%"}},[t("path",{attrs:{stroke:this.foreground,d:"M 16 2 A 14 14 0 1 0 30 15",fill:"none","stroke-width":"2","stroke-linecap":"round"}}),this._v(" "),t("path",{attrs:{stroke:this.background,d:"M 16 2 A 14 14 0 0 1 30 15",fill:"none","stroke-width":"2","stroke-linecap":"round"}})])])],2),this._v(" "),this._t("default")],2)},[],!1,null,null,null).exports;s.d(t,"a",function(){return i})},"./src/spin/index.m.js":function(e,t,s){"use strict";var n=s("./src/spin/index.js");s.d(t,"a",function(){return n.a})},"./src/spin/spin.vue?vue&type=style&index=0&lang=css&":function(e,t,s){"use strict";var n=s("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/spin/spin.vue?vue&type=style&index=0&lang=css&");s.n(n).a},"./src/switch/basic-mixin.js":function(e,t,s){"use strict";var n=s("./src/extends/mixins/emitter.js");t.a={name:"vc-switch",components:{},mixins:[n.a],model:{prop:"value",event:"change"},props:{value:{type:[String,Number,Boolean],default:!1},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:!1},name:{type:String},openText:{type:String,default:""},closeText:{type:String,default:""}},data:function(){return{currentValue:"",loading:!1}},computed:{classes:function(){return{"is-loading":this.loading,"is-checked":this.checked}},checked:function(){return this.currentValue===this.trueValue}},watch:{value:{immediate:!0,handler:function(e){this.currentValue=e}},currentValue:function(e){}},methods:{handdleToggle:function(e,t){var s=this;if(e.preventDefault(),this.disabled||this.loading)return!1;var n=this.$listeners.click,o=n&&n(e,t);o&&o.then&&(this.loading=!0,o.then(function(e){return e}).catch(function(e){return Promise.reject(e)}).finally(function(){s.loading=!1})),this.currentValue=this.currentValue===this.trueValue?this.falseValue:this.trueValue,this.sync()},sync:function(){this.$emit("change",this.currentValue),this.dispatch("vc-form-item","form-change",this.currentValue)}}}},"./src/switch/mobile/switch.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){"use strict";var n=s("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/switch/mobile/switch.vue?vue&type=style&index=0&lang=scss&");s.n(n).a},"./temp/switch/mobile-basic.js":function(e,t,s){"use strict";s.r(t);var n=s("vue"),o=s.n(n),i=s("./src/spin/index.m.js"),r=s("./src/switch/basic-mixin.js"),l={name:"vcm-switch",components:{"vcm-spin":i.a},mixins:[r.a]},a=(s("./src/switch/mobile/switch.vue?vue&type=style&index=0&lang=scss&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),d={name:"vcm-switch-basic",components:{"vcm-switch":Object(a.a)(l,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"vcm-switch",class:e.classes,on:{click:e.handdleToggle,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:e.handdleToggle(t)}}},[s("input",{attrs:{name:e.name,type:"hidden"},domProps:{value:e.currentValue}}),e._v(" "),s("span",{staticClass:"vcm-switch__content"},[e.currentValue===e.trueValue?e._t("open",[e._v("\n\t\t\t"+e._s(e.openText)+"\n\t\t")]):e._e(),e._v(" "),e.currentValue===e.falseValue?e._t("close",[e._v("\n\t\t\t"+e._s(e.closeText)+"\n\t\t")]):e._e()],2),e._v(" "),s("span",{staticClass:"vcm-switch__inner"}),e._v(" "),e.loading?s("vcm-spin",{staticClass:"vcm-switch__loading",attrs:{size:14,foreground:"#fff"}}):e._e()],1)},[],!1,null,null,null).exports},data:function(){return{single:!1}},computed:{},methods:{handleChange:function(e){console.log({single:this.single,other:arguments[0]})}}},c=Object(a.a)(d,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("vcm-switch",{attrs:{open:"开",close:"关"},on:{change:e.handleChange},model:{value:e.single,callback:function(t){e.single=t},expression:"single"}}),e._v(" "),s("vcm-switch",{attrs:{value:!0,loading:""}}),e._v(" "),s("vcm-switch",{attrs:{value:!1,loading:"",size:"small"}}),e._v(" "),s("vcm-switch",{attrs:{size:"large"}}),e._v(" "),s("vcm-switch"),e._v(" "),s("vcm-switch",{attrs:{size:"small"}}),e._v(" "),s("vcm-switch",[s("span",{attrs:{slot:"open"},slot:"open"},[e._v("开")]),e._v(" "),s("span",{attrs:{slot:"close"},slot:"close"},[e._v("关")])]),e._v(" "),s("br"),s("br"),e._v(" "),s("vcm-switch",{attrs:{size:"large"}},[s("span",{attrs:{slot:"open"},slot:"open"},[e._v("开启")]),e._v(" "),s("span",{attrs:{slot:"close"},slot:"close"},[e._v("关闭")])]),e._v(" "),s("vcm-switch",{attrs:{size:"large"}},[s("span",{attrs:{slot:"open"},slot:"open"},[e._v("ON")]),e._v(" "),s("span",{attrs:{slot:"close"},slot:"close"},[e._v("OFF")])])],1)},[],!1,null,null,null).exports,u=new o.a({el:"#pages",components:{App:c},template:"<App />"});window.app=u},vue:function(t,s){t.exports=e}})});