"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8760],{2595:(e,t,r)=>{r.d(t,{Z:()=>d});var l=r(2784),n=r(964),a=r(429),i=r(386),o=r(122),c=r(5062),m=r.n(c),s=r(894);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,l=new Array(t);r<t;r++)l[r]=e[r];return l}r(7102);const d=function(e){var t,r,c=(t=l.useState([]),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var l,n,a=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(l=r.next()).done)&&(a.push(l.value),!t||a.length!==t);i=!0);}catch(e){o=!0,n=e}finally{try{i||null==r.return||r.return()}finally{if(o)throw n}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return c[0],c[1],l.createElement("div",{className:"map-liege"},l.createElement(n.h,{preferCanvas:!0,className:"map-layout",center:[50.6385,5.5811],maxZoom:18,zoom:13,minZoom:3,scrollWheelZoom:!0,zoomControl:!1},l.createElement(a.I,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.createElement(s.Z,null,Object.values(e.listTrees).map((function(e,t){if(null!=e.geoloc&&null!=e.hauteur_totale&&null!=e.diametre_cime)return l.createElement(i.J,{position:[e.geoloc.lat,e.geoloc.lon],icon:m().divIcon({html:'<svg width="26" height="31" viewBox="0 0 52 62" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26 20C22.5787 40.5344 17.2282 55.372 11 60.2587V62H26V20Z" fill="#5E4D3E"/>\n                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26 20C29.4213 40.5344 34.7718 55.372 41 60.2587V62H26V20Z" fill="#5E4D3E"/>\n                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M41.1523 10.8477C39.0078 4.53895 33.034 0 26 0C18.966 0 12.9922 4.53895 10.8477 10.8477C4.53895 12.9922 0 18.966 0 26C0 34.8366 7.16344 42 16 42C19.7838 42 23.2608 40.6866 26 38.4907C28.7392 40.6866 32.2162 42 36 42C44.8366 42 52 34.8366 52 26C52 18.966 47.4611 12.9922 41.1523 10.8477Z" fill="#008000"/>\n                                            </svg>\n                                            ',iconAnchor:null,popupAnchor:[6,0],className:"tree-icon"})},l.createElement(o.G,{className:"popup"},l.createElement("h2",null,"Nom: ","en cours de détermination"!==e.nom_complet?l.createElement("a",{className:"tree-link",href:"http://wikipedia.org/wiki/".concat(e.nom_complet.replace(/ /g,"_").split("'")[0]),target:"_blank"},e.nom_complet):e.nom_complet),l.createElement("h2",null,"Price: ",Math.ceil(e.hauteur_totale*e.diametre_cime),l.createElement("svg",{width:"13",height:"11",viewBox:"0 0 52 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.32882 35.0956L1.58555 42L0 40.781L7.86317 33.7697C4.92394 24.6873 6.04196 6.44316 26.6298 5.46C44.3631 4.61316 50.2066 1.33551 51.6218 0.309119C49.9205 1.7592 43.0412 8.28428 42.5968 19.32C42.3507 25.4329 28.9538 44.96 9.32882 35.0956ZM52 0C52 0 51.8911 0.113795 51.6218 0.309119C51.8629 0.103575 52 0 52 0Z",fill:"#A43B3B"}))),l.createElement("h2",null,e.hauteur_totale?"Hauteur: ".concat(e.hauteur_totale,"m"):"")))})))))}},4466:(e,t,r)=>{r.d(t,{Z:()=>s});var l=r(9644),n=r.n(l),a=r(2784);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,l=new Array(t);r<t;r++)l[r]=e[r];return l}const s=function(e){var t,r,l=e.setLogin,i=(t=a.useState({username:"",email:"",password:""}),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var l,n,a=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(l=r.next()).done)&&(a.push(l.value),!t||a.length!==t);i=!0);}catch(e){o=!0,n=e}finally{try{i||null==r.return||r.return()}finally{if(o)throw n}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=i[0],u=i[1],d=function(e){var t=e.target,r=t.name,l=t.value;u(o(o({},s),{},c({},r,l))),console.log(l)};return a.createElement("div",{className:"login-register"},a.createElement("div",{className:"menu-login-register"},a.createElement("div",{className:"login",onClick:function(){return l(!0)}},a.createElement("h2",null,"Login")),a.createElement("div",{className:"register",onClick:function(){return l(!1)}},a.createElement("h2",null,"Register"))),a.createElement("div",{className:"login-field"},a.createElement("form",null,a.createElement("label",{for:"email"}," Email "),a.createElement("input",{onChange:d,value:s.email,type:"email",id:"email",name:"email"}),a.createElement("label",{for:"username"},"Username"),a.createElement("input",{onChange:d,value:s.username,type:"text",id:"username",name:"username"}),a.createElement("label",{for:"password"},"Password "),a.createElement("input",{onChange:d,value:s.password,type:"text",id:"password",name:"password"}),a.createElement("button",{onClick:function(){return function(e){""!=e.email&&""!=e.username&&""!=e.password?n().post("/api/user/register",e):prompt("mec t'as oublié un truc")}(s)}},"Register"))))}},7935:(e,t,r)=>{r.d(t,{Z:()=>n});var l=r(2784);const n=function(){return l.createElement("div",{className:"sidebar"},l.createElement("div",{className:"info sidebar-element"},l.createElement("a",{href:"#"},l.createElement("svg",{width:"100",height:"100",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("rect",{width:"120",height:"120",rx:"60",fill:"#FFFAFA"}),l.createElement("rect",{x:"53",y:"45",width:"14",height:"53",rx:"7",fill:"#1B365C"}),l.createElement("circle",{cx:"60",cy:"29",r:"7",fill:"#1B365C"})))),l.createElement("div",{className:"leaderboards sidebar-element"},l.createElement("a",{href:"#"},l.createElement("svg",{width:"100",height:"100",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("rect",{width:"120",height:"120",rx:"60",fill:"#FFFAFA"}),l.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M59.9169 59.9936C46.2668 59.6898 35.2627 48.6601 35 35H85.9905C85.7279 48.6569 74.7287 59.6847 61.0831 59.9934C61.7884 72.6608 66.9421 84.1411 75.0078 92.8976L75.6554 94.5H45.3446L45.9922 92.8976C54.0579 84.1412 59.2116 72.6609 59.9169 59.9936Z",fill:"#1B365C"})))),l.createElement("div",{className:"gamelog sidebar-element"},l.createElement("svg",{width:"100",height:"100",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("rect",{width:"120",height:"120",rx:"60",fill:"#FFFAFA"}),l.createElement("rect",{x:"37",y:"36",width:"60",height:"10",rx:"5",fill:"#1B365C"}),l.createElement("rect",{x:"37",y:"55",width:"50",height:"10",rx:"5",fill:"#1B365C"}),l.createElement("rect",{x:"37",y:"74",width:"40",height:"10",rx:"5",fill:"#1B365C"}),l.createElement("circle",{cx:"28",cy:"41",r:"5",fill:"#1B365C"}),l.createElement("circle",{cx:"28",cy:"60",r:"5",fill:"#1B365C"}),l.createElement("circle",{cx:"28",cy:"79",r:"5",fill:"#1B365C"}))))}},4135:(e,t,r)=>{r.d(t,{Z:()=>n});var l=r(2784);const n=function(e){var t=e.username;return l.createElement("div",{className:"stats-container"},l.createElement("div",{className:"trees"},l.createElement("svg",{width:"52",height:"62",viewBox:"0 0 52 62",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M26 20C22.5787 40.5344 17.2282 55.372 11 60.2587V62H26V20Z",fill:"#5E4D3E"}),l.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M26 20C29.4213 40.5344 34.7718 55.372 41 60.2587V62H26V20Z",fill:"#5E4D3E"}),l.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M41.1523 10.8477C39.0078 4.53895 33.034 0 26 0C18.966 0 12.9922 4.53895 10.8477 10.8477C4.53895 12.9922 0 18.966 0 26C0 34.8366 7.16344 42 16 42C19.7838 42 23.2608 40.6866 26 38.4907C28.7392 40.6866 32.2162 42 36 42C44.8366 42 52 34.8366 52 26C52 18.966 47.4611 12.9922 41.1523 10.8477Z",fill:"#A43B3B"})),l.createElement("p",{className:"trees-number",onClick:function(){return console.log(t)}},"30")),l.createElement("div",{className:"leaves"},l.createElement("svg",{width:"52",height:"42",viewBox:"0 0 52 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.32882 35.0956L1.58555 42L0 40.781L7.86317 33.7697C4.92394 24.6873 6.04196 6.44316 26.6298 5.46C44.3631 4.61316 50.2066 1.33551 51.6218 0.309119C49.9205 1.7592 43.0412 8.28428 42.5968 19.32C42.3507 25.4329 28.9538 44.96 9.32882 35.0956ZM52 0C52 0 51.8911 0.113795 51.6218 0.309119C51.8629 0.103575 52 0 52 0Z",fill:"#A43B3B"})),l.createElement("p",{className:"leaves-number"},"400000")),l.createElement("div",{className:"player"},l.createElement("a",{href:"#",className:"player-name"},test)))}}}]);