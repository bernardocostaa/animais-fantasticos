/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,o)=>{var n=o(698).default;function r(){"use strict";t.exports=r=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,o){t[e]=o.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,o){return t[e]=o}}function d(t,e,o,n){var r=e&&e.prototype instanceof p?e:p,i=Object.create(r.prototype),c=new A(n||[]);return a(i,"_invoke",{value:M(t,o,c)}),i}function f(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var v={};function p(){}function y(){}function m(){}var g={};h(g,s,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(O([])));L&&L!==o&&i.call(L,s)&&(g=L);var x=m.prototype=p.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(r,a,c,s){var u=f(t[r],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==n(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var r;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,r){o(t,n,e,r)}))}return r=r?r.then(i,i):i()}})}function M(t,e,o){var n="suspendedStart";return function(r,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw i;return{value:void 0,done:!0}}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=k(a,o);if(c){if(c===v)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===n)throw n="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n="executing";var s=f(t,e,o);if("normal"===s.type){if(n=o.done?"completed":"suspendedYield",s.arg===v)continue;return{value:s.arg,done:o.done}}"throw"===s.type&&(n="completed",o.method="throw",o.arg=s.arg)}}}function k(t,e){var o=e.method,n=t.iterator[o];if(void 0===n)return e.delegate=null,"throw"===o&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==o&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+o+"' method")),v;var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,v;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function O(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,n=function e(){for(;++o<t.length;)if(i.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:_}}function _(){return{value:void 0,done:!0}}return y.prototype=m,a(x,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:y,configurable:!0}),y.displayName=h(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,h(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},E(w.prototype),h(w.prototype,u,(function(){return this})),e.AsyncIterator=w,e.async=function(t,o,n,r,i){void 0===i&&(i=Promise);var a=new w(d(t,o,n,r),i);return e.isGeneratorFunction(o)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),h(x,l,"Generator"),h(x,s,(function(){return this})),h(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),o=[];for(var n in e)o.push(n);return o.reverse(),function t(){for(;o.length;){var n=o.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=O,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(o,n){return a.type="throw",a.arg=t,e.next=o,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n],a=r.completion;if("root"===r.tryLoc)return o("end");if(r.tryLoc<=this.prev){var c=i.call(r,"catchLoc"),s=i.call(r,"finallyLoc");if(c&&s){if(this.prev<r.catchLoc)return o(r.catchLoc,!0);if(this.prev<r.finallyLoc)return o(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return o(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return o(r.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),S(o),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var n=o.completion;if("throw"===n.type){var r=n.arg;S(o)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:O(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=void 0),v}},e}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(o){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(o)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,o)=>{var n=o(61)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,a=void 0,a=function(t,o){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),"symbol"===e(a)?a:String(a)),r)}var i,a}function r(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}var i=function(){function e(o,n){t(this,e),this.linksExternos=document.querySelectorAll(o),this.opcoes=void 0===n?{behavior:"smooth",block:"start"}:n,this.scrollToSection=this.scrollToSection.bind(this)}return r(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.opcoes)}},{key:"addLinkEvent",value:function(){var t=this;this.linksExternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksExternos.length&&this.addLinkEvent(),this}}]),e}();console.log("souoo");var a=function(){function e(o,n){t(this,e),this.tabMenu=document.querySelectorAll(o),this.tabContent=document.querySelectorAll(n),this.classAtivo="ativo"}return r(e,[{key:"ativarTab",value:function(t){var e=this;this.tabContent.forEach((function(t){t.classList.remove(e.classAtivo)}));var o=this.tabContent[t].dataset.anime;console.log(o),this.tabContent[t].classList.add(this.classAtivo,o)}},{key:"addEventoTabNav",value:function(){var t=this;this.tabMenu.forEach((function(e,o){e.addEventListener("click",(function(){t.ativarTab(o)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.ativarTab(0),this.addEventoTabNav()),this}}]),e}(),c=function(){function e(o){t(this,e),this.acordionLista=document.querySelectorAll(o),this.classeAtivo="ativo"}return r(e,[{key:"toggleAcordion",value:function(t){t.classList.toggle(this.classeAtivo),t.nextElementSibling.classList.toggle(this.classeAtivo)}},{key:"addAcordinLista",value:function(){var t=this;this.acordionLista.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAcordion(e)}))}))}},{key:"init",value:function(){return this.acordionLista.length&&(this.toggleAcordion(this.acordionLista[0]),this.addAcordinLista()),this}}]),e}(),s=function(){function e(o,n,r){t(this,e),this.botaoAbrir=document.querySelector(o),this.botaoFechar=document.querySelector(n),this.conteinerModal=document.querySelector(r),this.cliqueForaModal=this.cliqueForaModal.bind(this),this.addToggleModal=this.addToggleModal.bind(this)}return r(e,[{key:"toggleModal",value:function(){console.log(this),this.conteinerModal.classList.toggle("ativo")}},{key:"addToggleModal",value:function(t){console.log(this),t.preventDefault(),this.toggleModal()}},{key:"cliqueForaModal",value:function(t){console.log(this),t.target===this.conteinerModal&&this.toggleModal(t)}},{key:"addEventosModal",value:function(){this.botaoAbrir.addEventListener("click",this.addToggleModal),this.botaoFechar.addEventListener("click",this.addToggleModal),this.conteinerModal.addEventListener("click",this.cliqueForaModal)}},{key:"init",value:function(){return this.botaoAbrir&&this.botaoFechar&&this.conteinerModal&&this.addEventosModal(),this}}]),e}(),u=function(){function e(o){t(this,e),this.tooltips=document.querySelectorAll(o),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}return r(e,[{key:"onMouseMove",value:function(t){this.boxTooltip.style.top="".concat(t.pageY+20,"px"),t.pageX+250>window.innerWidth?this.boxTooltip.style.left="".concat(t.pageX-190,"px"):this.boxTooltip.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){this.boxTooltip.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave),t.currentTarget.removeEventListener("mousemove",this.onMouseMove)}},{key:"criarTooltipBox",value:function(t){var e=document.createElement("div"),o=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=o,document.body.appendChild(e),this.boxTooltip=e}},{key:"onMouseOver",value:function(t){this.criarTooltipBox(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave)}},{key:"addEventoTooltip",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addEventoTooltip(),this}}]),e}();function l(t,e,o){var n=document.documentElement,r="data-outside";function i(a){console.log(t.contains(a.target)),t.contains(a.target)||(t.removeAttribute(r),e.forEach((function(t){n.removeEventListener(t,i)})),o())}console.log("ativando"),t.hasAttribute(r)||(e.forEach((function(t){setTimeout((function(){n.addEventListener(t,i)}),0)})),t.setAttribute(r,"")),console.log(t)}function h(t,e,o,n,r,i,a){try{var c=t[i](a),s=c.value}catch(t){return void o(t)}c.done?e(s):Promise.resolve(s).then(n,r)}function d(t){return function(){var e=this,o=arguments;return new Promise((function(n,r){var i=t.apply(e,o);function a(t){h(i,n,r,a,c,"next",t)}function c(t){h(i,n,r,a,c,"throw",t)}a(void 0)}))}}var f,v,p,y,m,g,b,L,x=o(687),E=o.n(x),w=function(){function e(o,n,r){t(this,e),this.numeros=document.querySelectorAll(o),this.observadorClass=r,this.observeTarget=document.querySelector(n),this.handleMutation=this.handleMutation.bind(this)}return r(e,[{key:"animarNumeros",value:function(){var t=this;this.numeros.forEach((function(e){t.constructor.incrementarNumeros(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observadorClass)&&(this.observador.disconnect(),this.animarNumeros())}},{key:"addEventoAnimarObserve",value:function(){this.observador=new MutationObserver(this.handleMutation),console.log(this.handleMutation),this.observador.observe(this.observeTarget,{attributes:!0})}},{key:"init",value:function(){return this.addEventoAnimarObserve(),this}}],[{key:"incrementarNumeros",value:function(t){var e=+t.innerText,o=Math.floor(e/100),n=0,r=setInterval((function(){n+=o,t.innerText=n,n>e&&(t.innerText=e,clearInterval(r))}),25*Math.random())}}]),e}(),M=new i('[data-menu="menu"] a[href^="#"]');M.init(),console.log(M),new c("[data-acordion='acordion'] dt").init(),new a("[data-tab='menu'] li","[data-tab='content'] section").init(),new s('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new u("[data-tooltip]").init(),function(){var t=document.querySelectorAll('[data-scroll="anima"]'),e=.6*window.innerHeight;function o(){t.forEach((function(t){t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}t.length&&(o(),window.addEventListener("scroll",o))}(),function(){function t(t){var e=this;t.preventDefault(),this.classList.add("ativar"),l(this,["touchstart","click"],(function(){e.classList.remove("ativar")}))}document.querySelectorAll("[data-dropdown]").forEach((function(e){["touchstart","click"].forEach((function(o){e.addEventListener(o,t)}))}))}(),function(){var t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]');function o(){e.classList.add("ativo"),t.classList.add("ativo"),l(e,["click","touchstart"],(function(){e.classList.remove("ativo"),t.classList.remove("ativo")}))}t&&["click","touchstart"].forEach((function(e){t.addEventListener(e,o)}))}(),v=(f=document.querySelector("[data-semana]")).dataset.semana.split(",").map(Number),p=f.dataset.horario.split(",").map(Number),m=(y=new Date).getDay(),g=y.getHours(),b=-1!==v.indexOf(m),L=g>=p[0]&&g<p[1],console.log(b),console.log(L),b&&L&&f.classList.add("aberto"),function(t,e){var o=document.querySelector(".numeros-grid");function n(t){var e=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.especie,"</h3><span data-numero>").concat(t.total,"</span>"),e}(t);o.appendChild(e)}function r(){new w("[data-numero]",".numeros","ativo").init()}function i(){return(i=d(E().mark((function e(){var o;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return o=e.sent,e.next=6,o.json();case 6:e.sent.forEach((function(t){return n(t)})),r(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){i.apply(this,arguments)}()}("./animaisapi.json"),fetch("https://blockchain.info/ticker").then((function(t){t.json().then((function(t){console.log(t.BRL.sell),document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((function(t){console.log(Error(t))}))}))})()})();