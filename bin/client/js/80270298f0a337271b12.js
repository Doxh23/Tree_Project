/*! For license information please see 80270298f0a337271b12.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[496],{4296:(t,i,h)=>{h.d(i,{Cd:()=>a,ZX:()=>r,Pj:()=>c,y3:()=>f,AB:()=>d,_b:()=>o,E9:()=>p,mg:()=>u,jl:()=>n,Ae:()=>e,c9:()=>y,HS:()=>s,wx:()=>I,Lv:()=>m});var s,o=2*Math.PI,n=180/Math.PI,r=Math.PI/180;!function(t){t[t.POLY=0]="POLY",t[t.RECT=1]="RECT",t[t.CIRC=2]="CIRC",t[t.ELIP=3]="ELIP",t[t.RREC=4]="RREC"}(s||(s={}));var e=function(){function t(t,i,h,o){void 0===t&&(t=0),void 0===i&&(i=0),void 0===h&&(h=0),void 0===o&&(o=0),this.x=Number(t),this.y=Number(i),this.width=Number(h),this.height=Number(o),this.type=s.RECT}return Object.defineProperty(t.prototype,"left",{get:function(){return this.x},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"right",{get:function(){return this.x+this.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"top",{get:function(){return this.y},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!1,configurable:!0}),Object.defineProperty(t,"EMPTY",{get:function(){return new t(0,0,0,0)},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height)},t.prototype.copyFrom=function(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this},t.prototype.copyTo=function(t){return t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t},t.prototype.contains=function(t,i){return!(this.width<=0||this.height<=0)&&t>=this.x&&t<this.x+this.width&&i>=this.y&&i<this.y+this.height},t.prototype.pad=function(t,i){return void 0===t&&(t=0),void 0===i&&(i=t),this.x-=t,this.y-=i,this.width+=2*t,this.height+=2*i,this},t.prototype.fit=function(t){var i=Math.max(this.x,t.x),h=Math.min(this.x+this.width,t.x+t.width),s=Math.max(this.y,t.y),o=Math.min(this.y+this.height,t.y+t.height);return this.x=i,this.width=Math.max(h-i,0),this.y=s,this.height=Math.max(o-s,0),this},t.prototype.ceil=function(t,i){void 0===t&&(t=1),void 0===i&&(i=.001);var h=Math.ceil((this.x+this.width-i)*t)/t,s=Math.ceil((this.y+this.height-i)*t)/t;return this.x=Math.floor((this.x+i)*t)/t,this.y=Math.floor((this.y+i)*t)/t,this.width=h-this.x,this.height=s-this.y,this},t.prototype.enlarge=function(t){var i=Math.min(this.x,t.x),h=Math.max(this.x+this.width,t.x+t.width),s=Math.min(this.y,t.y),o=Math.max(this.y+this.height,t.y+t.height);return this.x=i,this.width=h-i,this.y=s,this.height=o-s,this},t}(),a=function(){function t(t,i,h){void 0===t&&(t=0),void 0===i&&(i=0),void 0===h&&(h=0),this.x=t,this.y=i,this.radius=h,this.type=s.CIRC}return t.prototype.clone=function(){return new t(this.x,this.y,this.radius)},t.prototype.contains=function(t,i){if(this.radius<=0)return!1;var h=this.radius*this.radius,s=this.x-t,o=this.y-i;return(s*=s)+(o*=o)<=h},t.prototype.getBounds=function(){return new e(this.x-this.radius,this.y-this.radius,2*this.radius,2*this.radius)},t}(),c=function(){function t(t,i,h,o){void 0===t&&(t=0),void 0===i&&(i=0),void 0===h&&(h=0),void 0===o&&(o=0),this.x=t,this.y=i,this.width=h,this.height=o,this.type=s.ELIP}return t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height)},t.prototype.contains=function(t,i){if(this.width<=0||this.height<=0)return!1;var h=(t-this.x)/this.width,s=(i-this.y)/this.height;return(h*=h)+(s*=s)<=1},t.prototype.getBounds=function(){return new e(this.x-this.width,this.y-this.height,this.width,this.height)},t}(),u=function(){function t(){for(var t=arguments,i=[],h=0;h<arguments.length;h++)i[h]=t[h];var o=Array.isArray(i[0])?i[0]:i;if("number"!=typeof o[0]){for(var n=[],r=0,e=o.length;r<e;r++)n.push(o[r].x,o[r].y);o=n}this.points=o,this.type=s.POLY,this.closeStroke=!0}return t.prototype.clone=function(){var i=new t(this.points.slice());return i.closeStroke=this.closeStroke,i},t.prototype.contains=function(t,i){for(var h=!1,s=this.points.length/2,o=0,n=s-1;o<s;n=o++){var r=this.points[2*o],e=this.points[2*o+1],a=this.points[2*n],c=this.points[2*n+1];e>i!=c>i&&t<(i-e)/(c-e)*(a-r)+r&&(h=!h)}return h},t}(),y=function(){function t(t,i,h,o,n){void 0===t&&(t=0),void 0===i&&(i=0),void 0===h&&(h=0),void 0===o&&(o=0),void 0===n&&(n=20),this.x=t,this.y=i,this.width=h,this.height=o,this.radius=n,this.type=s.RREC}return t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height,this.radius)},t.prototype.contains=function(t,i){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&i>=this.y&&i<=this.y+this.height){if(i>=this.y+this.radius&&i<=this.y+this.height-this.radius||t>=this.x+this.radius&&t<=this.x+this.width-this.radius)return!0;var h=t-(this.x+this.radius),s=i-(this.y+this.radius),o=this.radius*this.radius;if(h*h+s*s<=o)return!0;if((h=t-(this.x+this.width-this.radius))*h+s*s<=o)return!0;if(h*h+(s=i-(this.y+this.height-this.radius))*s<=o)return!0;if((h=t-(this.x+this.radius))*h+s*s<=o)return!0}return!1},t}(),p=function(){function t(t,i){void 0===t&&(t=0),void 0===i&&(i=0),this.x=t,this.y=i}return t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.copyFrom=function(t){return this.set(t.x,t.y),this},t.prototype.copyTo=function(t){return t.set(this.x,this.y),t},t.prototype.equals=function(t){return t.x===this.x&&t.y===this.y},t.prototype.set=function(t,i){return void 0===t&&(t=0),void 0===i&&(i=t),this.x=t,this.y=i,this},t}(),d=function(){function t(t,i,h,s){void 0===h&&(h=0),void 0===s&&(s=0),this._x=h,this._y=s,this.cb=t,this.scope=i}return t.prototype.clone=function(i,h){return void 0===i&&(i=this.cb),void 0===h&&(h=this.scope),new t(i,h,this._x,this._y)},t.prototype.set=function(t,i){return void 0===t&&(t=0),void 0===i&&(i=t),this._x===t&&this._y===i||(this._x=t,this._y=i,this.cb.call(this.scope)),this},t.prototype.copyFrom=function(t){return this._x===t.x&&this._y===t.y||(this._x=t.x,this._y=t.y,this.cb.call(this.scope)),this},t.prototype.copyTo=function(t){return t.set(this._x,this._y),t},t.prototype.equals=function(t){return t.x===this._x&&t.y===this._y},Object.defineProperty(t.prototype,"x",{get:function(){return this._x},set:function(t){this._x!==t&&(this._x=t,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y},set:function(t){this._y!==t&&(this._y=t,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),t}(),f=function(){function t(t,i,h,s,o,n){void 0===t&&(t=1),void 0===i&&(i=0),void 0===h&&(h=0),void 0===s&&(s=1),void 0===o&&(o=0),void 0===n&&(n=0),this.array=null,this.a=t,this.b=i,this.c=h,this.d=s,this.tx=o,this.ty=n}return t.prototype.fromArray=function(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]},t.prototype.set=function(t,i,h,s,o,n){return this.a=t,this.b=i,this.c=h,this.d=s,this.tx=o,this.ty=n,this},t.prototype.toArray=function(t,i){this.array||(this.array=new Float32Array(9));var h=i||this.array;return t?(h[0]=this.a,h[1]=this.b,h[2]=0,h[3]=this.c,h[4]=this.d,h[5]=0,h[6]=this.tx,h[7]=this.ty,h[8]=1):(h[0]=this.a,h[1]=this.c,h[2]=this.tx,h[3]=this.b,h[4]=this.d,h[5]=this.ty,h[6]=0,h[7]=0,h[8]=1),h},t.prototype.apply=function(t,i){i=i||new p;var h=t.x,s=t.y;return i.x=this.a*h+this.c*s+this.tx,i.y=this.b*h+this.d*s+this.ty,i},t.prototype.applyInverse=function(t,i){i=i||new p;var h=1/(this.a*this.d+this.c*-this.b),s=t.x,o=t.y;return i.x=this.d*h*s+-this.c*h*o+(this.ty*this.c-this.tx*this.d)*h,i.y=this.a*h*o+-this.b*h*s+(-this.ty*this.a+this.tx*this.b)*h,i},t.prototype.translate=function(t,i){return this.tx+=t,this.ty+=i,this},t.prototype.scale=function(t,i){return this.a*=t,this.d*=i,this.c*=t,this.b*=i,this.tx*=t,this.ty*=i,this},t.prototype.rotate=function(t){var i=Math.cos(t),h=Math.sin(t),s=this.a,o=this.c,n=this.tx;return this.a=s*i-this.b*h,this.b=s*h+this.b*i,this.c=o*i-this.d*h,this.d=o*h+this.d*i,this.tx=n*i-this.ty*h,this.ty=n*h+this.ty*i,this},t.prototype.append=function(t){var i=this.a,h=this.b,s=this.c,o=this.d;return this.a=t.a*i+t.b*s,this.b=t.a*h+t.b*o,this.c=t.c*i+t.d*s,this.d=t.c*h+t.d*o,this.tx=t.tx*i+t.ty*s+this.tx,this.ty=t.tx*h+t.ty*o+this.ty,this},t.prototype.setTransform=function(t,i,h,s,o,n,r,e,a){return this.a=Math.cos(r+a)*o,this.b=Math.sin(r+a)*o,this.c=-Math.sin(r-e)*n,this.d=Math.cos(r-e)*n,this.tx=t-(h*this.a+s*this.c),this.ty=i-(h*this.b+s*this.d),this},t.prototype.prepend=function(t){var i=this.tx;if(1!==t.a||0!==t.b||0!==t.c||1!==t.d){var h=this.a,s=this.c;this.a=h*t.a+this.b*t.c,this.b=h*t.b+this.b*t.d,this.c=s*t.a+this.d*t.c,this.d=s*t.b+this.d*t.d}return this.tx=i*t.a+this.ty*t.c+t.tx,this.ty=i*t.b+this.ty*t.d+t.ty,this},t.prototype.decompose=function(t){var i=this.a,h=this.b,s=this.c,n=this.d,r=-Math.atan2(-s,n),e=Math.atan2(h,i),a=Math.abs(r+e);return a<1e-5||Math.abs(o-a)<1e-5?(t.rotation=e,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=r,t.skew.y=e),t.scale.x=Math.sqrt(i*i+h*h),t.scale.y=Math.sqrt(s*s+n*n),t.position.x=this.tx,t.position.y=this.ty,t},t.prototype.invert=function(){var t=this.a,i=this.b,h=this.c,s=this.d,o=this.tx,n=t*s-i*h;return this.a=s/n,this.b=-i/n,this.c=-h/n,this.d=t/n,this.tx=(h*this.ty-s*o)/n,this.ty=-(t*this.ty-i*o)/n,this},t.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},t.prototype.clone=function(){var i=new t;return i.a=this.a,i.b=this.b,i.c=this.c,i.d=this.d,i.tx=this.tx,i.ty=this.ty,i},t.prototype.copyTo=function(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t},t.prototype.copyFrom=function(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this},Object.defineProperty(t,"IDENTITY",{get:function(){return new t},enumerable:!1,configurable:!0}),Object.defineProperty(t,"TEMP_MATRIX",{get:function(){return new t},enumerable:!1,configurable:!0}),t}(),x=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],l=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],b=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],v=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],w=[],_=[],g=Math.sign;!function(){for(var t=0;t<16;t++){var i=[];w.push(i);for(var h=0;h<16;h++)for(var s=g(x[t]*x[h]+b[t]*l[h]),o=g(l[t]*x[h]+v[t]*l[h]),n=g(x[t]*b[h]+b[t]*v[h]),r=g(l[t]*b[h]+v[t]*v[h]),e=0;e<16;e++)if(x[e]===s&&l[e]===o&&b[e]===n&&v[e]===r){i.push(e);break}}for(t=0;t<16;t++){var a=new f;a.set(x[t],l[t],b[t],v[t],0,0),_.push(a)}}();var m={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:function(t){return x[t]},uY:function(t){return l[t]},vX:function(t){return b[t]},vY:function(t){return v[t]},inv:function(t){return 8&t?15&t:7&-t},add:function(t,i){return w[t][i]},sub:function(t,i){return w[t][m.inv(i)]},rotate180:function(t){return 4^t},isVertical:function(t){return 2==(3&t)},byDirection:function(t,i){return 2*Math.abs(t)<=Math.abs(i)?i>=0?m.S:m.N:2*Math.abs(i)<=Math.abs(t)?t>0?m.E:m.W:i>0?t>0?m.SE:m.SW:t>0?m.NE:m.NW},matrixAppendRotationInv:function(t,i,h,s){void 0===h&&(h=0),void 0===s&&(s=0);var o=_[m.inv(i)];o.tx=h,o.ty=s,t.append(o)}},I=function(){function t(){this.worldTransform=new f,this.localTransform=new f,this.position=new d(this.onChange,this,0,0),this.scale=new d(this.onChange,this,1,1),this.pivot=new d(this.onChange,this,0,0),this.skew=new d(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}return t.prototype.onChange=function(){this._localID++},t.prototype.updateSkew=function(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++},t.prototype.updateLocalTransform=function(){var t=this.localTransform;this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,this._parentID=-1)},t.prototype.updateTransform=function(t){var i=this.localTransform;if(this._localID!==this._currentLocalID&&(i.a=this._cx*this.scale.x,i.b=this._sx*this.scale.x,i.c=this._cy*this.scale.y,i.d=this._sy*this.scale.y,i.tx=this.position.x-(this.pivot.x*i.a+this.pivot.y*i.c),i.ty=this.position.y-(this.pivot.x*i.b+this.pivot.y*i.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==t._worldID){var h=t.worldTransform,s=this.worldTransform;s.a=i.a*h.a+i.b*h.c,s.b=i.a*h.b+i.b*h.d,s.c=i.c*h.a+i.d*h.c,s.d=i.c*h.b+i.d*h.d,s.tx=i.tx*h.a+i.ty*h.c+h.tx,s.ty=i.tx*h.b+i.ty*h.d+h.ty,this._parentID=t._worldID,this._worldID++}},t.prototype.setFromMatrix=function(t){t.decompose(this),this._localID++},Object.defineProperty(t.prototype,"rotation",{get:function(){return this._rotation},set:function(t){this._rotation!==t&&(this._rotation=t,this.updateSkew())},enumerable:!1,configurable:!0}),t.IDENTITY=new t,t}()}}]);