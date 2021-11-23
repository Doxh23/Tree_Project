"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3344],{7484:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(9644),l=r.n(n),a=r(2784),o=r(2833);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const c=function(){var e,t,r=(e=a.useState(85),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(e){i=!0,l=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],c=r[1];return a.createElement("header",null,a.createElement("h1",null,"Treedle"),a.createElement("div",{style:{width:n+"px"},class:"hamburger-menu"},a.createElement("nav",{style:85==n?{transitionDelay:"0s"}:{transitionDelay:"0.5s"},className:85==n?"hidden-nav":""},a.createElement("ul",null,a.createElement("li",null,a.createElement(o.rU,{to:"/"},a.createElement("svg",{width:"40",height:"48",viewBox:"0 0 48 57",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M39.5 18C39.5 26.4963 32.4016 33.5 23.5 33.5C14.5984 33.5 7.5 26.4963 7.5 18C7.5 9.50371 14.5984 2.5 23.5 2.5C32.4016 2.5 39.5 9.50371 39.5 18Z",stroke:"white","stroke-width":"5"}),a.createElement("path",{d:"M20 38.5H28C37.1597 38.5 44.6758 45.5372 45.4366 54.5H2.56339C3.32423 45.5372 10.8403 38.5 20 38.5Z",stroke:"white","stroke-width":"5"})))),a.createElement("li",{onClick:function(){l().post("api/user/logout").then((function(){window.location="/"}))}},a.createElement("svg",{className:"profile-btn",width:"40",height:"48",viewBox:"0 0 50 58",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("rect",{x:"22",width:"5",height:"20",rx:"2.5",fill:"white"}),a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17 9.30738C7.11634 12.6435 0 21.9907 0 33C0 46.8071 11.1929 58 25 58C38.8071 58 50 46.8071 50 33C50 21.6228 42.4001 12.0206 32 8.99323V14.2592C39.5933 17.0967 45 24.4169 45 33C45 44.0457 36.0457 53 25 53C13.9543 53 5 44.0457 5 33C5 24.7987 9.93638 17.7504 17 14.6642V9.30738Z",fill:"white"}))))),a.createElement("svg",{onClick:function(){c(85===n?215:85)},width:"40",height:"48",viewBox:"0 0 50 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("rect",{className:215==n?"path":"",width:"50",height:"5",rx:"2.5",fill:"white"}),a.createElement("rect",{className:215==n?"path":"",y:"15",width:"50",height:"5",rx:"2.5",fill:"white"}),a.createElement("rect",{className:215==n?"path":"",y:"30",width:"50",height:"5",rx:"2.5",fill:"white"}))))}},9838:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(2784),l=r(9644),a=r.n(l);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const u=function(e){var t,r,l=e.setLogin,o=e.setUsername,u=(t=n.useState({email:"",password:""}),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(e){i=!0,l=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw l}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=u[0],f=u[1],h=function(e){var t=e.target,r=t.name,n=t.value;f(i(i({},m),{},c({},r,n))),console.log(n)};return n.createElement("div",{className:"login-register"},n.createElement("div",{className:"menu-login-register"},n.createElement("div",{className:"login",onClick:function(){return l(!0)}},n.createElement("h2",null,"Login")),n.createElement("div",{className:"register",onClick:function(){return l(!1)}},n.createElement("h2",null,"Register"))),n.createElement("div",{className:"login-field"},n.createElement("form",{action:"#",onSubmit:function(e){e.preventDefault(),""!=m.email&&""!=m.password?a().post("/api/user/login",m).then((function(e){e.data.errors?console.log("raté"):(console.log(e.data.username),o(e.data.username),window.location="/")})).catch((function(e){console.log(e)})):alert("mec t'as oublié un truc")}},n.createElement("label",{for:"email"},"Email"),n.createElement("input",{onChange:h,value:m.email,type:"text",id:"email",name:"email"}),n.createElement("label",{for:"password"},"Password "),n.createElement("input",{onChange:h,value:m.password,type:"text",id:"password",name:"password"}),n.createElement("input",{type:"submit",value:"Login"}))))}}}]);