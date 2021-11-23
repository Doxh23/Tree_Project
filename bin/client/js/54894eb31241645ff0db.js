"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6638],{7147:(e,n,t)=>{t.d(n,{$:()=>c});var r=t(1797),l=t(5062);const c=(0,r.Au)((function({children:e,...n},t){const r=new l.FeatureGroup([],n);return{instance:r,context:{...t,layerContainer:r,overlayContainer:r}}}))},7893:(e,n,t)=>{t.d(n,{Q:()=>c});var r=t(1797),l=t(5062);const c=(0,r.Au)((function({data:e,...n},t){const r=new l.GeoJSON(e,n);return{instance:r,context:{...t,overlayContainer:r}}}),(function(e,n,t){n.style!==t.style&&(null==n.style?e.resetStyle():e.setStyle(n.style))}))},9340:(e,n,t)=>{t.d(n,{v:()=>a});var r=t(1797),l=t(5968),c=t(5062);const a=(0,r.dW)((function({bounds:e,url:n,...t},r){const l=new c.ImageOverlay(n,e,t);return{instance:l,context:{...r,overlayContainer:l}}}),(function(e,n,t){(0,l.Z)(e,n,t),n.url!==t.url&&e.setUrl(n.url)}))},5122:(e,n,t)=>{t.d(n,{e:()=>c});var r=t(1797),l=t(5062);const c=(0,r.dW)((function({children:e,...n},t){const r=new l.LayerGroup([],n);return{instance:r,context:{...t,layerContainer:r}}}))},5583:(e,n,t)=>{t.d(n,{et:()=>d});var r=t(9837),l=t(4806),c=t(9445),a=t(1105),o=t(5062),u=t(2784);const s=(0,r.I)((function({children:e,...n},t){const r=new o.Control.Layers(void 0,void 0,n);return{instance:r,context:{...t,layersControl:r}}}),(function(e,n,t){n.collapsed!==t.collapsed&&(!0===n.collapsed?e.collapse():e.expand())})),i=(0,l.y)(s),d=(0,c.RA)(i);function f(e){return function(n){const t=(0,a.mE)(),r=(0,u.useRef)(n),[l,c]=(0,u.useState)(null),{layersControl:o,map:s}=t,i=(0,u.useCallback)((n=>{null!=o&&(r.current.checked&&s.addLayer(n),e(o,n,r.current.name),c(n))}),[o,s]),d=(0,u.useCallback)((e=>{null==o||o.removeLayer(e),c(null)}),[o]),f=(0,u.useMemo)((()=>({...t,layerContainer:{addLayer:i,removeLayer:d}})),[t,i,d]);return(0,u.useEffect)((()=>{null!==l&&r.current!==n&&(!0!==n.checked||null!=r.current.checked&&!1!==r.current.checked?!0!==r.current.checked||null!=n.checked&&!1!==n.checked||s.removeLayer(l):s.addLayer(l),r.current=n)})),n.children?u.createElement(a.UO,{value:f},n.children):null}}d.BaseLayer=f((function(e,n,t){e.addBaseLayer(n,t)})),d.Overlay=f((function(e,n,t){e.addOverlay(n,t)}))},5219:(e,n,t)=>{t.d(n,{d:()=>l});var r=t(1128);function l({children:e}){return e((0,r.Sx)())}},3964:(e,n,t)=>{t.d(n,{h:()=>o});var r=t(1105),l=t(5062),c=t(2784);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function o({children:e,className:n,id:t,placeholder:o,style:u,whenCreated:s,...i}){const d=(0,c.useRef)(null),f=function(e,n){const[t,r]=(0,c.useState)(null);return(0,c.useEffect)((()=>{if(null!==e.current&&null===t){const t=new l.Map(e.current,n);null!=n.center&&null!=n.zoom?t.setView(n.center,n.zoom):null!=n.bounds&&t.fitBounds(n.bounds,n.boundsOptions),null!=n.whenReady&&t.whenReady(n.whenReady),r(t)}}),[e,t,n]),t}(d,i),y=(0,c.useRef)(!1);(0,c.useEffect)((()=>{null!=f&&!1===y.current&&null!=s&&(y.current=!0,s(f))}),[f,s]);const[p]=(0,c.useState)({className:n,id:t,style:u}),v=(0,c.useMemo)((()=>f?{__version:r.cV,map:f}:null),[f]),h=v?c.createElement(r.UO,{value:v},e):o??null;return c.createElement("div",a({},p,{ref:d}),h)}},9386:(e,n,t)=>{t.d(n,{J:()=>c});var r=t(1797),l=t(5062);const c=(0,r.dW)((function({position:e,...n},t){const r=new l.Marker(e,n);return{instance:r,context:{...t,overlayContainer:r}}}),(function(e,n,t){n.position!==t.position&&e.setLatLng(n.position),null!=n.icon&&n.icon!==t.icon&&e.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==t.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=e.dragging&&n.draggable!==t.draggable&&(!0===n.draggable?e.dragging.enable():e.dragging.disable())}))}}]);