!function(){var t={50085:function(t){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.__esModule=!0,t.exports.default=t.exports},15198:function(t){function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t},t.exports.__esModule=!0,t.exports.default=t.exports},81260:function(t){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports.default=t.exports},14859:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},52618:function(t,e,n){"use strict";var o=n(39601),i=n.n(o),r=n(82609),a=n.n(r)()(i());a.push([t.id,":export{dot_container:dot_container;dot:dot}#splash_screen{top:0;left:0;width:100%;height:100%;background-color:#00aff0}.dot_container{position:absolute;left:50%;top:50%;transform:rotate(45deg)}.dot{list-style-type:none;position:absolute;background:#fd7d02;border-radius:50%}@media(orientation: landscape){.dot{width:2.5vw;height:2.5vw;margin-top:-1.25vw;margin-left:-1.25vw}#a{animation:a 1s ease-in-out infinite;top:-5vw;left:-5vw}#b{animation:b 1s ease-in-out infinite;top:-5vw;left:0px}#c{animation:c 1s ease-in-out infinite;top:-5vw;left:5vw}#d{animation:d 1s ease-in-out infinite;top:0px;left:-5vw}#e{animation:e 1s ease-in-out infinite;top:0px;left:0px}#f{animation:f 1s ease-in-out infinite;top:0px;left:5vw}#g{animation:g 1s ease-in-out infinite;top:5vw;left:-5vw}#h{animation:h 1s ease-in-out infinite;top:5vw;left:0px}#i{animation:i 1s ease-in-out infinite;top:5vw;left:5vw}@keyframes a{50%{top:0px;left:-5vw}100%{top:0px;left:-5vw}}@keyframes b{50%{top:-5vw;left:-5vw}100%{top:-5vw;left:-5vw}}@keyframes c{50%{top:-5vw;left:0px}100%{top:-5vw;left:0px}}@keyframes d{50%{top:5vw;left:-5vw}100%{top:5vw;left:-5vw}}@keyframes f{50%{top:-5vw;left:5vw}100%{top:-5vw;left:5vw}}@keyframes g{50%{top:5vw;left:0px}100%{top:5vw;left:0px}}@keyframes h{50%{top:5vw;left:5vw}100%{top:5vw;left:5vw}}@keyframes i{50%{top:0px;left:5vw}100%{top:0px;left:5vw}}}@media(orientation: portrait){.dot{width:2.5vh;height:2.5vh;margin-top:-1.25vh;margin-left:-1.25vh}#a{animation:a 1s ease-in-out infinite;top:-5vh;left:-5vh}#b{animation:b 1s ease-in-out infinite;top:-5vh;left:0px}#c{animation:c 1s ease-in-out infinite;top:-5vh;left:5vh}#d{animation:d 1s ease-in-out infinite;top:0px;left:-5vh}#e{animation:e 1s ease-in-out infinite;top:0px;left:0px}#f{animation:f 1s ease-in-out infinite;top:0px;left:5vh}#g{animation:g 1s ease-in-out infinite;top:5vh;left:-5vh}#h{animation:h 1s ease-in-out infinite;top:5vh;left:0px}#i{animation:i 1s ease-in-out infinite;top:5vh;left:5vh}@keyframes a{50%{top:0px;left:-5vh}100%{top:0px;left:-5vh}}@keyframes b{50%{top:-5vh;left:-5vh}100%{top:-5vh;left:-5vh}}@keyframes c{50%{top:-5vh;left:0px}100%{top:-5vh;left:0px}}@keyframes d{50%{top:5vh;left:-5vh}100%{top:5vh;left:-5vh}}@keyframes f{50%{top:-5vh;left:5vh}100%{top:-5vh;left:5vh}}@keyframes g{50%{top:5vh;left:0px}100%{top:5vh;left:0px}}@keyframes h{50%{top:5vh;left:5vh}100%{top:5vh;left:5vh}}@keyframes i{50%{top:0px;left:5vh}100%{top:0px;left:5vh}}}",""]),e.Z=a},82609:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var f=this[s][0];null!=f&&(a[f]=!0)}for(var p=0;p<t.length;p++){var u=[].concat(t[p]);o&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},39601:function(t){"use strict";t.exports=function(t){return t[1]}},94564:function(t,e,n){"use strict";n.r(e);var o=n(46062),i=n.n(o),r=n(44036),a=n.n(r),s=n(96793),f=n.n(s),p=n(17892),u=n.n(p),l=n(11173),c=n.n(l),v=n(42464),d=n.n(v),h=n(52618),m={};m.styleTagTransform=d(),m.setAttributes=u(),m.insert=f().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=c();i()(h.Z,m);e.default=h.Z&&h.Z.locals?h.Z.locals:void 0},46062:function(t){"use strict";var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},a=[],s=0;s<t.length;s++){var f=t[s],p=o.base?f[0]+o.base:f[0],u=r[p]||0,l="".concat(p," ").concat(u);r[p]=u+1;var c=n(l),v={css:f[1],media:f[2],sourceMap:f[3],supports:f[4],layer:f[5]};if(-1!==c)e[c].references++,e[c].updater(v);else{var d=i(v,o);o.byIndex=s,e.splice(s,0,{identifier:l,updater:d,references:1})}a.push(l)}return a}function i(t,e){var n=e.domAPI(e);n.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=o(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var s=n(r[a]);e[s].references--}for(var f=o(t,i),p=0;p<r.length;p++){var u=n(r[p]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=f}}},96793:function(t){"use strict";var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},11173:function(t){"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},17892:function(t,e,n){"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},44036:function(t){"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},42464:function(t){"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};!function(){"use strict";var t=n(14859);var e=t(n(50085)),o=t(n(15198)),i=t(n(81260));n(94564);var r=function(){function t(){(0,e.default)(this,t),(0,i.default)(this,"_splash",void 0),this._splash=document.getElementById("splash_screen"),this.show()}return(0,o.default)(t,[{key:"show",value:function(){this._splash.style.display="block"}},{key:"hide",value:function(){document.body.removeChild(this._splash)}}]),t}();window.globals.splashScreen=new r}()}();