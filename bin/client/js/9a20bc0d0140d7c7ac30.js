"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8869],{7948:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(2784),a=r(2833),l=(r(7584),r(7484)),o=r(9838),u=r(4466);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const c=function(e){var t,r,a=e.setSession,c=(t=(0,n.useState)(!0),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){u=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(u)throw a}}return l}}(t,r)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=c[0],f=c[1];return n.createElement("div",{className:"login-screen"},n.createElement(l.Z,null),n.createElement("main",null,s?n.createElement(o.Z,{setLogin:f,setSession:a}):n.createElement(u.Z,{setLogin:f})))};var s=r(6938),f=r(7935),m=r(2595),y=r(4135),d=r(9644),h=r.n(d);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){u=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const b=function(){var e=p((0,n.useState)({}),2),t=e[0],r=e[1],a=p((0,n.useState)(!0),2),o=a[0],u=a[1];return(0,n.useEffect)((function(){h().get("/api/tree").then((function(e){var t=e.data;r(t),u(!1)}))}),[]),n.createElement("div",{className:"app"},n.createElement(l.Z,null),n.createElement("main",{className:o?"centered":""},o?n.createElement(s.Z,{type:"Oval",color:"#00BFFF",height:100,width:100}):n.createElement(n.Fragment,null,n.createElement(m.Z,{listTrees:t}),n.createElement(f.Z,null),n.createElement(y.Z,null))))};function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const E=function(){var e,t,r=(e=(0,n.useState)(null),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){u=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=r[0],o=r[1];return(0,n.useEffect)((function(){var e;e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios({method:"get",url:"/jwtid",withCredentials:"true"});case 2:case"end":return e.stop()}}),e)}))}),[]),n.createElement(a.UT,null,n.createElement("div",null,""===l?n.createElement(c,{setSession:o}):n.createElement(b,null)))}}}]);