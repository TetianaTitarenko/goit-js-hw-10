!function(){function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return s.Date.now()};function g(n){var e=void 0===n?"undefined":t(o)(n);return!!n&&("object"==e||"function"==e)}function y(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(o)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==d.call(n)}(n))return NaN;if(g(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=g(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var c=u.test(n);return c||a.test(n)?f(n.slice(2),c?2:8):i.test(n)?NaN:+n}n=function(t,n,e){var o,r,i,u,a,f,c=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(n){var e=o,i=r;return o=r=void 0,c=n,u=t.apply(i,e)}function h(t){return c=t,a=setTimeout(w,n),l?m(t):u}function j(t){var e=t-f;return void 0===f||e>=n||e<0||s&&t-c>=i}function w(){var t=b();if(j(t))return T(t);a=setTimeout(w,function(t){var e=n-(t-f);return s?p(e,i-(t-c)):e}(t))}function T(t){return a=void 0,d&&o?m(t):(o=r=void 0,u)}function O(){var t=b(),e=j(t);if(o=arguments,r=this,f=t,e){if(void 0===a)return h(f);if(s)return a=setTimeout(w,n),m(f)}return void 0===a&&(a=setTimeout(w,n)),u}return n=y(n)||0,g(e)&&(l=!!e.leading,i=(s="maxWait"in e)?v(y(e.maxWait)||0,n):i,d="trailing"in e?!!e.trailing:d),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},O.flush=function(){return void 0===a?u:T(b())},O};var m=document.querySelector(".country-list"),h=document.querySelector("#search-box");console.log(h),h.addEventListener("input",t(n)((function(t){var n=t.target.value;console.log(n),fetch("".concat("https://restcountries.com/v2/name/all","?").concat(e,"=").concat(e,"name.official&capital=capital&population=population&flags=flags.svg&languages=languages")).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})).then((function(t){return n=t.map((function(t){var n=t.name,e=t.flags;return'<li>\n        <img src="'.concat(e.svg,'" alt="" width = 60/>\n        <h2>').concat(n,"</h2>\n        </li>")})).join(""),void m.insertAdjacentHTML("beforeend",n);var n}));var e}),300))}();
//# sourceMappingURL=index.7d685ba7.js.map
