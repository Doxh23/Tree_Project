"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[671],{3044:(r,t,n)=>{var e=n(3644),o=Object.prototype.toString;function i(r){return"[object Array]"===o.call(r)}function u(r){return void 0===r}function c(r){return null!==r&&"object"==typeof r}function f(r){if("[object Object]"!==o.call(r))return!1;var t=Object.getPrototypeOf(r);return null===t||t===Object.prototype}function a(r){return"[object Function]"===o.call(r)}function l(r,t){if(null!=r)if("object"!=typeof r&&(r=[r]),i(r))for(var n=0,e=r.length;n<e;n++)t.call(null,r[n],n,r);else for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&t.call(null,r[o],o,r)}r.exports={isArray:i,isArrayBuffer:function(r){return"[object ArrayBuffer]"===o.call(r)},isBuffer:function(r){return null!==r&&!u(r)&&null!==r.constructor&&!u(r.constructor)&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r)},isFormData:function(r){return"undefined"!=typeof FormData&&r instanceof FormData},isArrayBufferView:function(r){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(r):r&&r.buffer&&r.buffer instanceof ArrayBuffer},isString:function(r){return"string"==typeof r},isNumber:function(r){return"number"==typeof r},isObject:c,isPlainObject:f,isUndefined:u,isDate:function(r){return"[object Date]"===o.call(r)},isFile:function(r){return"[object File]"===o.call(r)},isBlob:function(r){return"[object Blob]"===o.call(r)},isFunction:a,isStream:function(r){return c(r)&&a(r.pipe)},isURLSearchParams:function(r){return"undefined"!=typeof URLSearchParams&&r instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function r(){var t={};function n(n,e){f(t[e])&&f(n)?t[e]=r(t[e],n):f(n)?t[e]=r({},n):i(n)?t[e]=n.slice():t[e]=n}for(var e=0,o=arguments.length;e<o;e++)l(arguments[e],n);return t},extend:function(r,t,n){return l(t,(function(t,o){r[o]=n&&"function"==typeof t?e(t,n):t})),r},trim:function(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")},stripBOM:function(r){return 65279===r.charCodeAt(0)&&(r=r.slice(1)),r}}}}]);