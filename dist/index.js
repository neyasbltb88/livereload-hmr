!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="https://localhost:3000/",n(n.s=7)}([function(t,e){t.exports={host:"localhost",port:3e3,https:!0,hot:!0,hotOnly:!0,displayAwait:!0}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot).concat(t," */")}));return[n].concat(i).concat([r]).join("\n")}var a,c,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<t.length;a++){var c=t[a];null!=c[0]&&o[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),e.push(c))}},e}},function(t,e,n){"use strict";var o,r={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function c(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}function l(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(y(o.parts[a],e))}else{for(var c=[];a<o.parts.length;a++)c.push(y(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:c}}}}function s(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var o=n.nc;o&&(t.attributes.nonce=o)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var r=a(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var u,f=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function p(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=f(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function h(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r&&t.setAttribute("media",r),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var d=null,v=0;function y(t,e){var n,o,r;if(e.singleton){var i=v++;n=d||(d=s(e)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=s(e),o=h.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=c(t,e);return l(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i],s=r[a.id];s&&(s.refs--,o.push(s))}t&&l(c(t,e),e);for(var u=0;u<o.length;u++){var f=o[u];if(0===f.refs){for(var p=0;p<f.parts.length;p++)f.parts[p]();delete r[f.id]}}}}},function(t,e,n){var o=n(4);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"body #app .live-reload-btn{--color: #C3CFE0;display:flex;align-items:center;min-height:40px;padding:0 5px;font-size:10px;border-radius:5px;background-color:rgba(0,0,0,0.42);box-shadow:0 0 20px 0 rgba(0,0,0,0.6);cursor:pointer;user-select:none;color:var(--color) !important;border:1px solid var(--color) !important}\n",""])},function(t,e,n){var o=n(6);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"body #app{position:fixed;z-index:9999;top:45px;left:0}\n",""])},function(t,e,n){"use strict";function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=null===e?{}:e;for(var n=document.createDocumentFragment(),o=arguments.length,r=new Array(o>2?o-2:0),i=2;i<o;i++)r[i-2]=arguments[i];if(r.forEach((function(t){if(t instanceof HTMLElement)n.appendChild(t);else if("string"==typeof t){var e=document.createTextNode(t);n.appendChild(e)}else t instanceof DocumentFragment?n.appendChild(t):console.warn("not appendable",t)})),"function"==typeof t){e.children=n;var a=new t(e);return a=a.render?a.render():a}if("string"==typeof t){var c=document.createElement(t);return c.appendChild(n),Object.assign(c,e),c}}n.r(e);var r=n(0),i=n.n(r);function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.events={}}var e,n,o;return e=t,(n=[{key:"on",value:function(t,e){return this.events[t]=this.events[t]||new Set,this.events[t].add(e),this}},{key:"off",value:function(t,e){return!!this.events[t]&&this.events[t].delete(e)}},{key:"one",value:function(t,e){return this.events[t]=new Set([e]),this}},{key:"emit",value:function(t,e){this.events[t]&&this.events[t].forEach((function(t){return t(e)}))}}])&&a(e.prototype,n),o&&a(e,o),t}();function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=u(this,f(e).call(this))).publicPath=t,n.init(),n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,t),n=e,(o=[{key:"stop",value:function(){!0===window.hotClient.isOpen&&window.hotClient.stop()}},{key:"start",value:function(){!1===window.hotClient.isOpen&&window.hotClient.start()}},{key:"getScripts",value:function(){var t=this;if(window.hotClient.isOpen)return this.emit("ok",window.hotClient),!1;this.emit("await"),this._fetchScriptsUrl().then((function(e){return t._loadScripts(e)})).catch((function(){}))}},{key:"_fetchScriptsUrl",value:function(){var t=this;return fetch(this.publicPath).then((function(t){return t.text()})).then((function(e){var n=[];return(new DOMParser).parseFromString(e,"text/html").querySelectorAll("script").forEach((function(e){return n.push(t._normalizeSrc(e.getAttribute("src")))})),n}))}},{key:"_normalizeSrc",value:function(t){if(!t||"string"!=typeof t)return!1;return-1!==t.search(/^http|^\/\//im)?t:this.publicPath+t.replace(/^\W+/im,"")}},{key:"_loadScripts",value:function(t){var e=this,n=t.shift();return fetch(n).then((function(t){return t.text()})).then((function(t){return e._appendScript(t)})).then((function(){return e.emit("loaded",n),!(t.length>0)||e._loadScripts(t)})).catch((function(t){console.log("catch",t)}))}},{key:"_appendScript",value:function(t){return!0}},{key:"_messageAnalyze",value:function(t){try{(t=JSON.parse(t)).type&&this.emit(t.type,t.data)}catch(t){}}},{key:"init",value:function(){var t=this;window.hotClient||(window.hotClient=new c),window.hotClient.one("open",(function(){t.emit("open",window.hotClient),t.emit("ok",window.hotClient)})),window.hotClient.one("close",(function(){return t.emit("close",window.hotClient)})),window.hotClient.one("message",(function(e){return t._messageAnalyze(e)})),window.hotClient.one("error",(function(e){return t.emit("error",e)}))}}])&&s(n.prototype,o),r&&s(n,r),e}(c);function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var v=function(){function t(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type={success:["color: #272822;","background-color: #A6E22E;","padding: 2px 10px;","width: 100%"].join(" "),info:["color: #272822;","background-color: #66D9EF;","padding: 2px 10px;"].join(" "),warning:["color: #272822;","background-color: #FD971F;","padding: 2px 10px;"].join(" "),error:["color: #272822;","background-color: #F92672;","padding: 2px 10px;"].join(" "),default:["color: #272822;","background-color: #E6DB74;","padding: 2px 10px;"].join(" ")},this.message.bind(this)}var e,n,o;return e=t,(n=[{key:"_msgTemplate",value:function(t,e){console.log("%c%s",t,e)}},{key:"message",value:function(){for(var t=this.type.default,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];if(n.length>1){var r=n.shift();t=this.type[r]?this.type[r]:this.type.default}var i=n.join(" ");this._msgTemplate(t,i)}}])&&d(e.prototype,n),o&&d(e,o),t}();n(3);function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var b=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.props=e}var e,n,r;return e=t,(n=[{key:"render",value:function(){var t=this.props,e=t.title,n=t.onclick,r=t.color;return o("button",{className:"live-reload-btn",title:e,onclick:n,style:"--color: ".concat(r)},"LiveReload")}}])&&y(e.prototype,n),r&&y(e,r),t}();n(5);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function S(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var C=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.log=new v,this.target=null,this.id=e.startsWith("#")?e.slice(1):e,this.publicPath="".concat(i.a.https?"https":"http","://").concat(i.a.host,":").concat(i.a.port,"/"),this.clientController=new h(this.publicPath),window.clientController=this.clientController,this.state={connectStatus:"ready",wasInit:!1,isConnected:!1,notLoaded:new Set},this.clientController.on("loaded",(function(t){n.log("default","*ScriptsAutoload* Загружен на страницу:",t);var e=n.state.notLoaded;e.delete(t),n.setState({notLoaded:e})})),this.clientController.on("open",(function(){n.log("success","*ScriptsAutoload* Подключен к серверу:",n.publicPath)})),this.clientController.on("invalid",(function(){i.a.displayAwait&&n.setState({connectStatus:"await"})})),this.clientController.on("ok",(function(){n.setState({connectStatus:"init",wasInit:!0,isConnected:!0})})),this.clientController.on("await",(function(){n.setState({connectStatus:"await"})})),this.clientController.on("warning",(function(t){n.log("warning","*ScriptsAutoload* Ошибка загрузки ресурса:",t);var e=n.state.notLoaded;e.add(t),n.setState({notLoaded:e})})),this.clientController.on("close",(function(){n.log("error","*ScriptsAutoload* Закрыто соединение с сервером:",n.publicPath),n.setState({connectStatus:"error",isConnected:!1})})),this.status={ready:{handler:function(){n.setState({connectStatus:"await"}),n.clientController.start()},color:"#C3CFE0",title:"Подключиться к серверу ".concat(this.publicPath)},init:{handler:function(){n.setState({connectStatus:"ready"}),n.clientController.stop()},color:"#85D035",title:"Отключиться от сервера ".concat(this.publicPath)},await:{handler:function(){},color:"#FFC000",title:"Ожидание ресурса"},error:{handler:function(){n.setState({connectStatus:"await"}),n.clientController.start()},color:"#F92672",title:"Отключен от сервера "+this.publicPath}}}var e,n,r;return e=t,(n=[{key:"tryConnect",value:function(){this.clientController.getScripts()}},{key:"setState",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=w({},this.state);this.state=w({},e,{},t),(this.state.wasInit||"error"!==this.state.connectStatus&&"await"!==this.state.connectStatus)&&this.mount()}},{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.target;this.target=t;var e=t.querySelector("#"+this.id);e?e.replaceWith(this.render()):t.appendChild(this.render())}},{key:"render",value:function(){var t=this.state,e=t.connectStatus,n=t.notLoaded,r=this.status[e],i=r.handler,a=r.color,c=r.title;if(n.size>0){var l="";n.forEach((function(t){return l+="\n"+t})),c="Ошибка загрузки: ".concat(l),a="#FD971F"}return o("div",{id:this.id},o(b,{title:c,color:a,onclick:i}))}}])&&S(e.prototype,n),r&&S(e,r),t}(),O=document.body,j=new C("#app");window.template=j,j.mount(O),j.tryConnect()}]);