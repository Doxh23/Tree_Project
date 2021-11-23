"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5403],{3652:(n,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var e=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function n(t,e,r){void 0===e&&(e=!1),i(this,n),this._fn=t,this._once=e,this._thisArg=r,this._next=this._prev=this._owner=null}return e(n,[{key:"detach",value:function(){return null!==this._owner&&(this._owner.detach(this),!0)}}]),n}();function a(n,t){return n._head?(n._tail._next=t,t._prev=n._tail,n._tail=t):(n._head=t,n._tail=t),t._owner=n,t}var u=function(){function n(){i(this,n),this._head=this._tail=void 0}return e(n,[{key:"handlers",value:function(){var n=!(arguments.length<=0||void 0===arguments[0])&&arguments[0],t=this._head;if(n)return!!t;for(var e=[];t;)e.push(t),t=t._next;return e}},{key:"has",value:function(n){if(!(n instanceof r))throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");return n._owner===this}},{key:"dispatch",value:function(){var n=this._head;if(!n)return!1;for(;n;)n._once&&this.detach(n),n._fn.apply(n._thisArg,arguments),n=n._next;return!0}},{key:"add",value:function(n){var t=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if("function"!=typeof n)throw new Error("MiniSignal#add(): First arg must be a Function.");return a(this,new r(n,!1,t))}},{key:"once",value:function(n){var t=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if("function"!=typeof n)throw new Error("MiniSignal#once(): First arg must be a Function.");return a(this,new r(n,!0,t))}},{key:"detach",value:function(n){if(!(n instanceof r))throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");return n._owner!==this||(n._prev&&(n._prev._next=n._next),n._next&&(n._next._prev=n._prev),n===this._head?(this._head=n._next,null===n._next&&(this._tail=null)):n===this._tail&&(this._tail=n._prev,this._tail._next=null),n._owner=null),this}},{key:"detachAll",value:function(){var n=this._head;if(!n)return this;for(this._head=this._tail=null;n;)n._owner=null,n=n._next;return this}}]),n}();u.MiniSignalBinding=r,t.default=u,n.exports=t.default}}]);