"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9755],{894:(r,e,t)=>{e.Z=void 0;var n,o=t(571),c=(n=t(5062))&&n.__esModule?n:{default:n};function i(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function a(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){u(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function u(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function l(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],n=!0,o=!1,c=void 0;try{for(var i,a=r[Symbol.iterator]();!(n=(i=a.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(r){o=!0,c=r}finally{try{n||null==a.return||a.return()}finally{if(o)throw c}}return t}}(r,e)||function(r,e){if(r){if("string"==typeof r)return f(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(r,e):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}t(298);var s=(0,o.createPathComponent)((function(r,e){r.children;var t=function(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},c=Object.keys(r);for(n=0;n<c.length;n++)t=c[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(n=0;n<c.length;n++)t=c[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}(r,["children"]),n={},o={};Object.entries(t).forEach((function(r){var e=l(r,2),t=e[0],c=e[1];return t.startsWith("on")?o[t]=c:n[t]=c}));var i=new c.default.markerClusterGroup(n);return Object.entries(o).forEach((function(r){var e=l(r,2),t=e[0],n=e[1],o="cluster".concat(t.substring(2).toLowerCase());i.on(o,n)})),{instance:i,context:a(a({},e),{},{layerContainer:i})}}));e.Z=s}}]);