!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self)["figma-material-design-icons-plugin"]=t()}(this,function(){"use strict";"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function h(){throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")}function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(e,t){return e(t={exports:{}},t.exports),t.exports}var r=t(function(I){!function(e){var c,t=Object.prototype,u=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",n=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag",a=e.regeneratorRuntime;if(a)I.exports=a;else{(a=e.regeneratorRuntime=I.exports).wrap=y;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",m={},s={};s[i]=function(){return this};var l=Object.getPrototypeOf,g=l&&l(l(j([])));g&&g!==t&&u.call(g,i)&&(s=g);var v=x.prototype=_.prototype=Object.create(s);b.prototype=v.constructor=x,x.constructor=b,x[o]=b.displayName="GeneratorFunction",a.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,o in e||(e[o]="GeneratorFunction")),e.prototype=Object.create(v),e},a.awrap=function(e){return{__await:e}},k(P.prototype),P.prototype[n]=function(){return this},a.AsyncIterator=P,a.async=function(e,t,r,n){var i=new P(y(e,t,r,n));return a.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},k(v),v[o]="Generator",v[i]=function(){return this},v.toString=function(){return"[object Generator]"},a.keys=function(r){var n=[];for(var e in r)n.push(e);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=j,H.prototype={constructor:H,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&u.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=c)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(e,t){return o.type="throw",o.arg=r,n.next=e,t&&(n.method="next",n.arg=c),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var i=this.tryEntries[t],o=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=u.call(i,"catchLoc"),s=u.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=c),m}}}function y(e,t,r,n){var o,a,s,c,i=t&&t.prototype instanceof _?t:_,u=Object.create(i.prototype),l=new H(n||[]);return u._invoke=(o=e,a=r,s=l,c=h,function(e,t){if(c===p)throw new Error("Generator is already running");if(c===d){if("throw"===e)throw t;return O()}for(s.method=e,s.arg=t;;){var r=s.delegate;if(r){var n=E(r,s);if(n){if(n===m)continue;return n}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(c===h)throw c=d,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);c=p;var i=w(o,a,s);if("normal"===i.type){if(c=s.done?d:f,i.arg===m)continue;return{value:i.arg,done:s.done}}"throw"===i.type&&(c=d,s.method="throw",s.arg=i.arg)}}),u}function w(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function _(){}function b(){}function x(){}function k(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function P(c){var t;this._invoke=function(r,n){function e(){return new Promise(function(e,t){!function t(e,r,n,i){var o=w(c[e],c,r);if("throw"!==o.type){var a=o.arg,s=a.value;return s&&"object"==typeof s&&u.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,n,i)},function(e){t("throw",e,n,i)}):Promise.resolve(s).then(function(e){a.value=e,n(a)},function(e){return t("throw",e,n,i)})}i(o.arg)}(r,n,e,t)})}return t=t?t.then(e,e):e()}}function E(e,t){var r=e.iterator[t.method];if(r===c){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=c,E(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=w(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=c),t.delegate=null,m):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function H(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(u.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=c,e.done=!0,e};return n.next=n}}return{next:O}}function O(){return{value:c,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())}),n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),i=n.regeneratorRuntime&&0<=Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime"),o=i&&n.regeneratorRuntime;n.regeneratorRuntime=void 0;var a=r;if(i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}var m=a;function c(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,i)}var s=function(s){return function(){var e=this,a=arguments;return new Promise(function(t,r){var n=s.apply(e,a);function i(e){c(n,t,r,i,o,"next",e)}function o(e){c(n,t,r,i,o,"throw",e)}i(void 0)})}};var u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var l=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},g=t(function(e,t){var c,u,r,l;e.exports=(c=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],u=function(e){return String(e).replace(/[&<>"']/g,function(e){return"&"+r[e]+";"})},r={"&":"amp","<":"lt",">":"gt",'"':"quot","'":"apos"},l={},function(e,t){for(var r=[],n=arguments.length;2<n--;)r.push(arguments[n]);if("function"==typeof e)return(t||(t={})).children=r.reverse(),e(t);var i="<"+e;if(t)for(var o in t)!1!==t[o]&&null!=t[o]&&(i+=" "+u(o)+'="'+u(t[o])+'"');if(-1===c.indexOf(e)){for(i+=">";r.length;){var a=r.pop();if(a)if(a.pop)for(var s=a.length;s--;)r.push(a[s]);else i+=!0===l[a]?a:u(a)}i+="</"+e+">"}else i+=">";return l[i]=!0,i})}),f=function(e){return document.querySelector(e)},p=t(function(e,t){"undefined"!=typeof window&&window,e.exports=function(r){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=r,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t);var h=function(){function u(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u)}return n(u,[{key:"getDescendantProperty",value:function(e,t){var r,n,i,o,a,s,c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[];if(t){if(-1===(i=t.indexOf("."))?r=t:(r=t.slice(0,i),n=t.slice(i+1)),null!=(o=e[r]))if(n||"string"!=typeof o&&"number"!=typeof o)if("[object Array]"===Object.prototype.toString.call(o))for(a=0,s=o.length;a<s;a++)u.getDescendantProperty(o[a],n,c);else n&&u.getDescendantProperty(o,n,c);else c.push(o)}else c.push(e);return c}}]),u}();function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.d(t,"default",function(){return o});var o=function(){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),Array.isArray(t)||(r=t,t=[]),this.haystack=e,this.keys=t,this.options=Object.assign({caseSensitive:!1,sort:!1},r)}var e,t;return t=[{key:"isMatch",value:function(e,t,r){r||(e=e.toLocaleLowerCase(),t=t.toLocaleLowerCase());for(var n=t.split(""),i=[],o=0,a=0;a<n.length;a++){var s=n[a];if(-1===(o=e.indexOf(s,o)))return!1;i.push(o),o++}return e===t?1:i.reduce(function(e,t){return e+t},2)}}],i((e=l).prototype,[{key:"search",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";if(""===e)return this.haystack;for(var t=[],r=0;r<this.haystack.length;r++){var n=this.haystack[r];if(0===this.keys.length){var i=l.isMatch(n,e,this.options.caseSensitive);i&&t.push({item:n,score:i})}else for(var o=0;o<this.keys.length;o++){for(var a=h.getDescendantProperty(n,this.keys[o]),s=!1,c=0;c<a.length;c++){var u=l.isMatch(a[c],e,this.options.caseSensitive);if(u){s=!0,t.push({item:n,score:u});break}}if(s)break}}return this.options.sort&&t.sort(function(e,t){return e.score-t.score}),t.map(function(e){return e.item})}}]),i(e,t),l}()}]).default}),v=e(p),y=(p.FuzzySearch,e(t(function(e,t){e.exports=function o(a,s,c){function u(r,e){if(!s[r]){if(!a[r]){var t=h;if(!e&&t)return t(r,!0);if(l)return l(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var i=s[r]={exports:{}};a[r][0].call(i.exports,function(e){var t=a[r][1][e];return u(t||e)},i,i.exports,o,a,s,c)}return s[r].exports}for(var l=h,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),l={width:"100%",height:"100%"},h=function(e){return Number(e)==Number(e)},i=function(){function u(e,t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),this._config={},this._lastRepaint=null,this._maxElementHeight=u.getMaxBrowserHeight(),this.refresh(e,t);var o=this._config;!function e(){var t=i._getScrollPosition(),r=i._lastRepaint;if(i._renderAnimationFrame=window.requestAnimationFrame(e),t!==r&&(!r||Math.abs(t-r)>i._averageHeight)){var n=i._renderChunk();i._lastRepaint=t,!1!==n&&"function"==typeof o.afterRender&&o.afterRender()}}()}return n(u,null,[{key:"create",value:function(e,t){return new u(e,t)}},{key:"mergeStyle",value:function(e,t){for(var r in t)e.style[r]!==t[r]&&(e.style[r]=t[r])}},{key:"getMaxBrowserHeight",value:function(){var e=document.createElement("div"),t=document.createElement("div");u.mergeStyle(e,{position:"absolute",height:"1px",opacity:0}),u.mergeStyle(t,{height:"1e7px"}),e.appendChild(t),document.body.appendChild(e);var r=t.offsetHeight;return document.body.removeChild(e),r}}]),n(u,[{key:"destroy",value:function(){window.cancelAnimationFrame(this._renderAnimationFrame)}},{key:"refresh",value:function(e,t){var a=this;if(Object.assign(this._config,l,t),!e||1!==e.nodeType)throw new Error("HyperList requires a valid DOM Node container");this._element=e;var s=this._config,r=this._scroller||s.scroller||document.createElement(s.scrollerTagName||"tr");if("boolean"!=typeof s.useFragment&&(this._config.useFragment=!0),!s.generate)throw new Error("Missing required `generate` function");if(!h(s.total))throw new Error("Invalid required `total` value, expected number");if(!Array.isArray(s.itemHeight)&&!h(s.itemHeight))throw new Error("\n        Invalid required `itemHeight` value, expected number or array\n      ".trim());h(s.itemHeight)?this._itemHeights=Array(s.total).fill(s.itemHeight):this._itemHeights=s.itemHeight,Object.keys(l).filter(function(e){return e in s}).forEach(function(e){var t=s[e],r=h(t),n=!r&&"%"===t.slice(-1);if(t&&"string"!=typeof t&&"number"!=typeof t){var i="Invalid optional `"+e+"`, expected string or number";throw new Error(i)}if(r&&(s[e]=t+"px"),"height"===e){var o=r?t:parseInt(t.replace(/px|%/,""),10);a._containerHeight=n?window.innerHeight*o/100:h(t)?t:o}});var n={width:""+s.width,height:""+s.height,overflow:"auto",position:"relative"};u.mergeStyle(e,n);var i=s.itemHeight*s.total,o=this._maxElementHeight;o<i&&console.warn(["HyperList: The maximum element height",o+"px has","been exceeded; please reduce your item height."].join(" "));var c={opacity:"0",position:"absolute",width:"1px",height:i+"px"};u.mergeStyle(r,c),this._scroller||e.appendChild(r),this._scroller=r,this._scrollHeight=this._computeScrollHeight(),this._itemPositions=this._itemPositions||Array(s.total).fill(0),this._computePositions(0),this._renderChunk(null!==this._lastRepaint),"function"==typeof s.afterRender&&s.afterRender()}},{key:"_getRow",value:function(e){var t=this._config,r=t.generate(e),n=r.height;if(void 0!==n&&h(n)?(r=r.element,n!==this._itemHeights&&(this._itemHeights[e]=n,this._computePositions(e),this._scrollHeight=this._computeScrollHeight(e))):n=this._itemHeights[e],!r||1!==r.nodeType)throw new Error("Generator did not return a DOM Node for index: "+e);var i=r.getAttribute("class")||"";r.setAttribute("class",i+" "+(t.rowClassName||"vrow"));var o=this._itemPositions[e];return u.mergeStyle(r,{position:"absolute",top:o+"px"}),r}},{key:"_getScrollPosition",value:function(){var e=this._config;return"function"==typeof e.overrideScrollPosition?e.overrideScrollPosition():this._element.scrollTop}},{key:"_renderChunk",value:function(e){var t=this._config,r=this._element,n=this._getScrollPosition(),i=t.total,o=t.reverse?this._getReverseFrom(n):this._getFrom(n)-1;if((o<0||o-this._screenItemsLen<0)&&(o=0),!e&&this._lastFrom===o)return!1;var a=(this._lastFrom=o)+this._cachedItemsLen;(i<a||a+this._cachedItemsLen>i)&&(a=i);var s=t.useFragment?document.createDocumentFragment():[],c=this._scroller;s[t.useFragment?"appendChild":"push"](c);for(var u=o;u<a;u++){var l=this._getRow(u);s[t.useFragment?"appendChild":"push"](l)}if(t.applyPatch)return t.applyPatch(r,s);r.innerHTML="",r.appendChild(s)}},{key:"_computePositions",value:function(){var e=arguments.length<=0||void 0===arguments[0]?1:arguments[0],t=this._config,r=t.total,n=t.reverse;e<1&&!n&&(e=1);for(var i=e;i<r;i++)n?0===i?this._itemPositions[0]=this._scrollHeight-this._itemHeights[0]:this._itemPositions[i]=this._itemPositions[i-1]-this._itemHeights[i]:this._itemPositions[i]=this._itemHeights[i-1]+this._itemPositions[i-1]}},{key:"_computeScrollHeight",value:function(){var e=this,t=this._config,r=t.total,n=this._itemHeights.reduce(function(e,t){return e+t},0);u.mergeStyle(this._scroller,{opacity:0,position:"absolute",width:"1px",height:n+"px"});var i=this._itemHeights.slice(0).sort(function(e,t){return e-t}),o=Math.floor(r/2),a=r%2==0?(i[o]+i[o-1])/2:i[o],s=this._element.clientHeight?this._element.clientHeight:this._containerHeight;return this._screenItemsLen=Math.ceil(s/a),this._containerHeight=s,this._cachedItemsLen=Math.max(this._cachedItemsLen||0,3*this._screenItemsLen),this._averageHeight=a,t.reverse&&window.requestAnimationFrame(function(){e._element.scrollTop=n}),n}},{key:"_getFrom",value:function(e){for(var t=0;this._itemPositions[t]<e;)t++;return t}},{key:"_getReverseFrom",value:function(e){for(var t=this._config.total-1;0<t&&this._itemPositions[t]<e+this._containerHeight;)t--;return t}}]),u}();r.default=i,t.exports=r.default},{}]},{},[1])(1)}))),w=function(e){if(navigator.clipboard)return navigator.clipboard.writeText(e);var t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre";var r=document.createElement("iframe");r.sandbox="allow-same-origin",document.body.appendChild(r);var n=r.contentWindow;n.document.body.appendChild(t);var i=n.getSelection();i||(n=window,i=n.getSelection(),document.body.appendChild(t));var o=n.document.createRange();i.removeAllRanges(),o.selectNode(t),i.addRange(o);var a=!1;try{a=n.document.execCommand("copy")}catch(e){}return i.removeAllRanges(),n.document.body.removeChild(t),document.body.removeChild(r),a?Promise.resolve():Promise.reject()};var d=function e(){var t,d=this;u(this,e),l(this,"showUI",s(m.mark(function e(){var t,r,n,i,o,a,s,c,u,l,h,f,p;return m.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d.UI=g("div",{class:"figma-material-design-icons-plugin"},g("div",{class:"search"},g("span",{class:"g7a016758"}),g("input",{placeholder:"Search for icons",spellcheck:"false",type:"text",id:"icon-query",name:"icon-query"})),g("div",{class:"scrollable",id:"scrollable"},g("div",{id:"mdi-icons"},g("div",{class:"empty"},g("h2",null,"Loading Icons..."),g("p",null,"Sit tight ;)"))))),window.figmaPlus.showUI(d.pluginName,function(e){var t,r=(t=d.UI,document.createRange().createContextualFragment(t));e.parentNode.replaceChild(r,e)},460,600,.5,.5,!1,!1),e.next=4,fetch("https://data.jsdelivr.com/v1/package/npm/@mdi/svg");case 4:return t=e.sent,e.next=7,t.json();case 7:if(r=e.sent,n=r.tags.latest,i=localStorage.getItem("mdisvgversion","0"),o=localStorage.getItem("mdisvgmeta",null),n!==i||null===o||o.length<100)return e.next=14,fetch("https://cdn.jsdelivr.net/npm/@mdi/svg@".concat(n,"/meta.json"));e.next=26;break;case 14:return a=e.sent,e.next=17,a.json();case 17:s=e.sent,c=s.map(function(e){return{name:e.name,tag:e.tag,aliases:e.aliases}}),u=JSON.stringify(c),localStorage.setItem("mdisvgmeta",u),localStorage.setItem("mdisvgversion",n),d.version=n,d.iconsData=c,e.next=30;break;case 26:d.version=i,l=localStorage.getItem("mdisvgmeta"),h=JSON.parse(l),d.iconsData=h;case 30:d.searcher=new v(d.iconsData,["name","aliases","tags"],{caseSensitive:!1}),f=d.getRowsHTML(d.iconsData),p={itemHeight:92,width:"100%",height:"555px",total:f.length,generate:function(e){var t=document.createElement("div");return t.innerHTML=f[e],t}},d.list=new y(document.getElementById("mdi-icons"),p),d.attachEvents();case 35:case"end":return e.stop()}},e,this)}))),l(this,"getRowsHTML",function(r){return r.map(function(e,t){return t%5==0?r.slice(t,t+5):null}).filter(function(e){return e}).map(function(e){return e.map(function(e){return g("div",{class:"mdip-icon"},g("img",{src:"https://cdn.jsdelivr.net/npm/@mdi/svg@".concat(d.version,"/svg/").concat(e.name,".svg"),width:"24",height:"24"}))}).join("")})}),l(this,"attachEvents",function(){["#icon-query"].map(function(e){return f(e).addEventListener("input",d.onSearch)}),["#mdi-icons"].map(function(e){return f(e).addEventListener("click",d.onClick)})}),l(this,"onClick",function(){var t=s(m.mark(function e(t){var r,n,i,o;return m.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("IMG"===(r=t.target).tagName)return n=r.src,e.next=5,fetch(n);e.next=12;break;case 5:return i=e.sent,e.next=8,i.text();case 8:o=e.sent,w(o),figmaPlus.showToast("Copied! Now paste it anywhere ;)"),window.figmaPlus.hideUI(d.pluginName);case 12:case"end":return e.stop()}},e,this)}));return function(e){return t.apply(this,arguments)}}()),l(this,"onSearch",function(e){var t=d.searcher.search(e.target.value),r=d.getRowsHTML(t),n={width:"100%",height:"555px",itemHeight:92,total:r.length,generate:function(e){var t=document.createElement("div");return t.innerHTML=r[e],t}};d.list.refresh(document.getElementById("mdi-icons"),n)}),this.pluginName="Material Design Icons";var r={mac:{command:!0,shift:!0,key:"M"},windows:{control:!0,shift:!0,key:"M"}},n=[this.pluginName,this.showUI,null,r];(t=window.figmaPlus).createPluginsMenuItem.apply(t,n),window.figmaPlus.createKeyboardShortcut(r,this.showUI),this.iconsData=[]};return window.materialDesignIconsPlugin=new d,d});
