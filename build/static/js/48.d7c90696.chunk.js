(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[48],{604:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(4),c=r(198);t.a=function(){return a.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"breadcrumb-content text-center"},a.a.createElement(c.Breadcrumbs,{separator:a.a.createElement("span",null,"/"),item:o.d,finalItem:"span"}))))}},608:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var n=c(r(617)),a=c(r(609)),o=c(r(619));function c(e){return e&&e.__esModule?e:{default:e}}var i=a.default;t.default=i},609:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=i(r(3)),o=i(r(35)),c=r(618);function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,h,b,y=function(e){function t(){return u(this,t),f(this,m(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(a=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&o.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var r=n.default.createElement("div",{className:"react-head-temp"},t);o.default.render(r,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var r=e.temporaryElement.querySelector(".react-head-temp");if(null!==r){var n=Array.prototype.slice.call(r.children),a=document.head,o=a.innerHTML;(n=(n=n.filter((function(e){return-1===o.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var r=(0,c.getDuplicateTitle)();r&&(0,c.removeChild)(a,r)}else if("meta"===t){var n=(0,c.getDuplicateMeta)(e);n&&(0,c.removeChild)(a,n)}else if("link"===t&&"canonical"===e.rel){var o=(0,c.getDuplicateCanonical)(e);o&&(0,c.removeChild)(a,o)}})),(0,c.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(r.prototype,a),i&&s(r,i),t}(n.Component);p=y,h="contextTypes",b={extract:a.default.func},h in p?Object.defineProperty(p,h,{value:b,enumerable:!0,configurable:!0,writable:!0}):p[h]=b;var v=y;t.default=v,e.exports=t.default},617:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=r(0),o=(n=r(3))&&n.__esModule?n:{default:n};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return i(this,t),u(this,s(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),r=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return a.Children.only(this.props.children)}}])&&l(r.prototype,n),o&&l(r,o),t}(a.Component);!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(m,"childContextTypes",{extract:o.default.func});var d=m;t.default=d,e.exports=t.default},618:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,r=null,n=[],c=[];return e.forEach((function(e){var a=e.type,o=e.props;"title"===a?t=e:"link"===a&&"canonical"===o.rel?r=e:"meta"===a?n.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};o.forEach((function(e){t[e]=[]}));for(var r=[],n=function(n){var c=e[n],i=c.props.id;(i?!t.id[i]:0===a.filter((function(e){var r=c.props[e],n=t[e][r];return n&&!n.props.id})).length)&&(r.unshift(c),o.forEach((function(e){var r=c.props[e];r&&(t[e][r]=c)})))},c=e.length-1;c>=0;c--)n(c);return r}(n)),[r],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,r=e.id;if(r)return r&&t.querySelector("#".concat(r));return n.reduce((function(r,n){var a,o=e.getAttribute(n);return o?r.concat((a=t.querySelectorAll("[".concat(n,' = "').concat(o,'"]')),(a=Array.prototype.slice.call(a||[])).filter((function(e){return!e.id})))):r}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=document.createDocumentFragment(),n=0,a=t.length;n<a;n++)r.appendChild(t[n]);e.appendChild(r)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=0,n=t.length;r<n;r++)e.removeChild(t[r])};var n=["property","name","itemprop"],a=n.concat(["itemProp"]),o=a.concat(["id"])},619:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=c(r(3)),o=c(r(609));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,p,h,b=function(e){function t(){return l(this,t),s(this,f(t).apply(this,arguments))}var r,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),r=t,(a=[{key:"render",value:function(){return n.default.createElement(o.default,null,n.default.createElement("title",null,this.props.title))}}])&&u(r.prototype,a),c&&u(r,c),t}(n.Component);d=b,p="propTypes",h={title:a.default.string},p in d?Object.defineProperty(d,p,{value:h,enumerable:!0,configurable:!0,writable:!0}):d[p]=h;var y=b;t.default=y,e.exports=t.default},636:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=(r(192),function(e){e.getLayout,e.getFilterSortParams;var t=e.productCount,r=e.sortedProductCount;return a.a.createElement("div",{className:"shop-top-bar mb-35"},a.a.createElement("div",{className:"select-shoing-wrap"},a.a.createElement("p",null,"Showing ",r," of ",t," result")))});t.a=function(e){var t=e.getLayout,r=e.getFilterSortParams,c=e.productCount,i=e.sortedProductCount;return a.a.createElement(n.Fragment,null,a.a.createElement(o,{getLayout:t,getFilterSortParams:r,productCount:c,sortedProductCount:i}))}},643:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(192),c=function(){return a.a.createElement("div",{className:"sidebar-widget"},a.a.createElement("h4",{className:"pro-sidebar-title"},"Search "),a.a.createElement("div",{className:"pro-sidebar-search mb-50 mt-25"},a.a.createElement("form",{className:"pro-sidebar-search-form",action:"#"},a.a.createElement("input",{type:"text",placeholder:"Search here..."}),a.a.createElement("button",null,a.a.createElement("i",{className:"pe-7s-search"})))))},i=function(e){var t=e.categories,r=e.getSortParams,n=e.cb;return a.a.createElement("div",{className:"sidebar-widget"},a.a.createElement("h4",{className:"pro-sidebar-title"},"Categories "),a.a.createElement("div",{className:"sidebar-widget-list mt-30"},t?a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("div",{className:"sidebar-widget-list-left"},a.a.createElement("button",{onClick:function(e){r("category",""),Object(o.h)(e)}},a.a.createElement("span",{className:"checkmark"})," All Categories"))),t.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement("div",{className:"sidebar-widget-list-left"},a.a.createElement("button",{onClick:function(t){console.log(e._id),n(e._id),r("category",e),Object(o.h)(t)}}," ",a.a.createElement("span",{className:"checkmark"})," ",e.name," ")))}))):"No categories found"))},l=function(e){var t=e.colors,r=e.getSortParams,n=e.getonecolor;return a.a.createElement("div",{className:"sidebar-widget mt-50"},a.a.createElement("h4",{className:"pro-sidebar-title"},"Color "),a.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("div",{className:"sidebar-widget-list-left"},a.a.createElement("button",{onClick:function(e){r("color",""),Object(o.h)(e)}},a.a.createElement("span",{className:"checkmark"})," All Colors"," "))),t.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement("div",{className:"sidebar-widget-list-left"},a.a.createElement("button",{onClick:function(t){n(e._id),console.log(e._id),r("color",e),Object(o.h)(t)}},a.a.createElement("span",{className:"checkmark"}),a.a.createElement("span",{style:{backgroundColor:null===e||void 0===e?void 0:e.colorName,borderRadius:"50%",height:25,width:25}})," ",null===e||void 0===e?void 0:e.colorName," ")))}))):"No colors found"))},u=function(e){var t=e.sizes,r=e.getSortParams,n=e.getonesize;return a.a.createElement("div",{className:"sidebar-widget mt-40"},a.a.createElement("h4",{className:"pro-sidebar-title"},"Size "),a.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("div",{className:"sidebar-widget-list-left"},a.a.createElement("button",{onClick:function(e){r("size",""),Object(o.h)(e)}},a.a.createElement("span",{className:"checkmark"})," All Sizes"," "))),t.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement("div",{className:"sidebar-widget-list-left"},a.a.createElement("button",{className:"text-uppercase",onClick:function(t){console.log(e._id),n(e._id),r("size",e),Object(o.h)(t)}}," ",a.a.createElement("span",{className:"checkmark"}),e.sizeName," ")))}))):"No sizes found"))},s=function(e){var t=e.tags,r=e.getSortParams,n=e.getonetag;return a.a.createElement("div",{className:"sidebar-widget mt-50"},a.a.createElement("h4",{className:"pro-sidebar-title"},"Tag "),a.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?a.a.createElement("ul",null,t.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement("button",{onClick:function(t){n(e),r("tag",e),Object(o.h)(t)}},e))}))):"No tags found"))},f=function(e){var t=e.brands,r=e.getSortParams,n=e.getonebrand;return a.a.createElement("div",{className:"sidebar-widget mt-50"},a.a.createElement("h4",{className:"pro-sidebar-title"},"Brand "),a.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?a.a.createElement("ul",null,t.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement("button",{onClick:function(t){n(e._id),r("brands",e),Object(o.h)(t)}},e.name))}))):"No brands found"))},m=r(25),d=r(739),p=r(738);function h(e){return"".concat(e,"\xb0C")}var b=function(e){e.tags,e.getSortParams;var t=e.priceobj,r=a.a.useState([1,90]),n=Object(m.a)(r,2),o=n[0],c=n[1];return a.a.createElement("div",{className:"sidebar-widget mt-50"},a.a.createElement("h4",{className:"pro-sidebar-title"},"Price Range "),a.a.createElement("div",{className:"sidebar-widget-tag mt-25"},a.a.createElement(d.a,null,a.a.createElement(p.a,{getAriaLabel:function(){return"Price range"},value:o,scale:function(e){return 25*e},onChange:function(e,r){c(r),t({min:25*r[0],max:25*r[1]})},valueLabelDisplay:"auto",getAriaValueText:h}))))};t.a=function(e){var t=e.products,r=e.getSortParams,n=e.sideSpaceClass,m=e.colors,d=e.sizes,p=e.category,h=e.tags,y=e.brand,v=e.callback,g=e.tagcallback,E=e.colorcallback,O=e.sizecallback,w=e.brandcallback,j=e.pricerange;Object(o.b)(t),Object(o.c)(t),Object(o.f)(t),Object(o.d)(t);return a.a.createElement("div",{className:"sidebar-style ".concat(n||"")},a.a.createElement(c,null),a.a.createElement(b,{tags:h,getSortParams:r,priceobj:function(e){j(e),console.log(e)}}),a.a.createElement(s,{tags:h,getSortParams:r,getonetag:function(e){g(e),console.log(e)}}),a.a.createElement(l,{colors:m,getSortParams:r,getonecolor:function(e){E(e),console.log(e)}}),a.a.createElement(u,{sizes:d,getSortParams:r,getonesize:function(e){O(e),console.log(e)}}),a.a.createElement(f,{brands:y,getSortParams:r,getonebrand:function(e){w(e),console.log(e)}}),a.a.createElement(i,{categories:p,getSortParams:r,cb:function(e){v(e),console.log(e)}}))}},976:function(e,t,r){"use strict";r.r(t);var n=r(111),a=r(25),o=r(0),c=r.n(o),i=r(608),l=r.n(i),u=r(640),s=r(198),f=r(45),m=r(4),d=r(192),p=r(193),h=r(604),b=(r(643),r(636),r(112));function y(){y=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(x){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof m?t:m,c=Object.create(o.prototype),i=new P(a||[]);return n(c,"_invoke",{value:w(e,r,i)}),c}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(x){return{type:"throw",arg:x}}}e.wrap=u;var f={};function m(){}function d(){}function p(){}var h={};l(h,o,(function(){return this}));var b=Object.getPrototypeOf,v=b&&b(b(S([])));v&&v!==t&&r.call(v,o)&&(h=v);var g=p.prototype=m.prototype=Object.create(h);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){var a;n(this,"_invoke",{value:function(n,o){function c(){return new t((function(a,c){!function n(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(f).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,i)}))}i(l.arg)}(n,o,a,c)}))}return a=a?a.then(c,c):c()}})}function w(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return C()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=j(c,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=p,n(g,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(O.prototype),l(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new O(u(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},E(g),l(g,i,"Generator"),l(g,o,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}t.default=Object(f.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,r=e.products,i=(e.product,e.currency,e.addToCart,e.addToWishlist,e.addToCompare,e.cartItem,e.wishlistItem,e.discountedPrice,e.compareItem,e.sliderClassName),f=e.spaceBottomClass,v=e.colorClass,g=e.titlePriceClass,E=(Object(b.useToasts)().addToast,Object(o.useState)("grid two-column")),O=Object(a.a)(E,2),w=O[0],j=(O[1],Object(o.useState)("")),N=Object(a.a)(j,2),_=N[0],P=(N[1],Object(o.useState)("")),S=Object(a.a)(P,2),C=S[0],x=(S[1],Object(o.useState)("")),k=Object(a.a)(x,2),L=k[0],T=(k[1],Object(o.useState)("")),A=Object(a.a)(T,2),M=A[0],D=(A[1],Object(o.useState)(0)),F=Object(a.a)(D,2),z=F[0],I=F[1],G=Object(o.useState)(1),R=Object(a.a)(G,2),q=R[0],B=R[1],H=Object(o.useState)([]),J=Object(a.a)(H,2),U=(J[0],J[1]),W=Object(o.useState)([]),Y=Object(a.a)(W,2),K=Y[0],V=Y[1],Q=t.pathname;Object(o.useEffect)((function(){var e=Object(d.g)(r,_,C),t=Object(d.g)(e,L,M);V(e=t),U(e.slice(z,z+16))}),[z,r,_,C,L,M]);var X=Object(o.useState)([]),Z=Object(a.a)(X,2),$=Z[0],ee=Z[1];return Object(o.useEffect)((function(){function e(){return(e=Object(n.a)(y().mark((function e(){var t,r;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://13.235.180.192/api/admin/getproductbytagname/Kids");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,ee(r.data),console.log(r.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement(o.Fragment,null,c.a.createElement(l.a,null,c.a.createElement("title",null,"Flone | Shop Page"),c.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),c.a.createElement(s.BreadcrumbsItem,{to:"/"},"Home"),c.a.createElement(s.BreadcrumbsItem,{to:""+Q},"Shop"),c.a.createElement(p.a,{headerTop:"visible"},c.a.createElement(h.a,null),c.a.createElement("div",{className:"shop-area pt-95 pb-100"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"shop-bottom-area mt-35"},c.a.createElement("div",{className:"row ".concat(w||"")},c.a.createElement(o.Fragment,null,$.map((function(e){return c.a.createElement("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6 ".concat(i||""),key:e._id},c.a.createElement("div",{className:"product-wrap-2 ".concat(f||""," ").concat(v||""," ")},c.a.createElement("div",{className:"product-img"},c.a.createElement(m.c,{to:"/product-sticky/"+e._id},c.a.createElement("img",{className:"default-img",src:e.product_img[0],alt:""}),c.a.createElement("img",{className:"hover-img",src:e.product_img[1],alt:""})),c.a.createElement("div",{className:"product-action-2"})),c.a.createElement("div",{className:"product-content-2"},c.a.createElement("div",{className:"title-price-wrap-2 ".concat(g||"")},c.a.createElement("h3",null,c.a.createElement(m.c,{to:"/product/"+e._id},e.product_name)),c.a.createElement("div",{className:"price-2"},c.a.createElement(o.Fragment,null,c.a.createElement("span",null,"\u20b9 ",e.sell_price)))))))}))))),c.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},c.a.createElement(u.a,{totalRecords:K.length,pageLimit:16,pageNeighbours:2,setOffset:I,currentPage:q,setCurrentPage:B,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))}}]);
//# sourceMappingURL=48.d7c90696.chunk.js.map