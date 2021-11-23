"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6165],{9119:(t,e,r)=>{r.d(e,{o:()=>l,S:()=>m});var o=r(6469),n=r(4296),i=r(6680),a=r(2876),s=r(3535),u=function(t,e){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},u(t,e)};function h(t,e){function r(){this.constructor=t}u(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var c=new n.E9,l=function(t){function e(e,r,i){void 0===r&&(r=100),void 0===i&&(i=100);var a=t.call(this,e)||this;return a.tileTransform=new n.wx,a._width=r,a._height=i,a.uvMatrix=a.texture.uvMatrix||new o.UX(e),a.pluginName="tilingSprite",a.uvRespectAnchor=!1,a}return h(e,t),Object.defineProperty(e.prototype,"clampMargin",{get:function(){return this.uvMatrix.clampMargin},set:function(t){this.uvMatrix.clampMargin=t,this.uvMatrix.update(!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tileScale",{get:function(){return this.tileTransform.scale},set:function(t){this.tileTransform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tilePosition",{get:function(){return this.tileTransform.position},set:function(t){this.tileTransform.position.copyFrom(t)},enumerable:!1,configurable:!0}),e.prototype._onTextureUpdate=function(){this.uvMatrix&&(this.uvMatrix.texture=this._texture),this._cachedTint=16777215},e.prototype._render=function(t){var e=this._texture;e&&e.valid&&(this.tileTransform.updateLocalTransform(),this.uvMatrix.update(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this))},e.prototype._calculateBounds=function(){var t=this._width*-this._anchor._x,e=this._height*-this._anchor._y,r=this._width*(1-this._anchor._x),o=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,t,e,r,o)},e.prototype.getLocalBounds=function(e){return 0===this.children.length?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),e||(this._localBoundsRect||(this._localBoundsRect=new n.Ae),e=this._localBoundsRect),this._bounds.getRectangle(e)):t.prototype.getLocalBounds.call(this,e)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,c);var e=this._width,r=this._height,o=-e*this.anchor._x;if(c.x>=o&&c.x<o+e){var n=-r*this.anchor._y;if(c.y>=n&&c.y<n+r)return!0}return!1},e.prototype.destroy=function(e){t.prototype.destroy.call(this,e),this.tileTransform=null,this.uvMatrix=null},e.from=function(t,r){return"number"==typeof r&&((0,a.deprecation)("5.3.0","TilingSprite.from use options instead of width and height args"),r={width:r,height:arguments[2]}),new e(o.xE.from(t,r),r.width,r.height)},Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t},enumerable:!1,configurable:!0}),e}(i.j),d="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n",p=new n.y3,m=function(t){function e(e){var r=t.call(this,e)||this,n={globals:r.renderer.globalUniforms};return r.shader=o.ex.from(d,"varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture2D(uSampler, coord);\n    gl_FragColor = texSample * uColor;\n}\n",n),r.simpleShader=o.ex.from(d,"varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 texSample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = texSample * uColor;\n}\n",n),r.quad=new o.ud,r.state=o.ZM.for2d(),r}return h(e,t),e.prototype.render=function(t){var e=this.renderer,r=this.quad,o=r.vertices;o[0]=o[6]=t._width*-t.anchor.x,o[1]=o[3]=t._height*-t.anchor.y,o[2]=o[4]=t._width*(1-t.anchor.x),o[5]=o[7]=t._height*(1-t.anchor.y),t.uvRespectAnchor&&((o=r.uvs)[0]=o[6]=-t.anchor.x,o[1]=o[3]=-t.anchor.y,o[2]=o[4]=1-t.anchor.x,o[5]=o[7]=1-t.anchor.y),r.invalidate();var n=t._texture,i=n.baseTexture,u=t.tileTransform.localTransform,h=t.uvMatrix,c=i.isPowerOfTwo&&n.frame.width===i.width&&n.frame.height===i.height;c&&(i._glTextures[e.CONTEXT_UID]?c=i.wrapMode!==s.Nt.CLAMP:i.wrapMode===s.Nt.CLAMP&&(i.wrapMode=s.Nt.REPEAT));var l=c?this.simpleShader:this.shader,d=n.width,m=n.height,f=t._width,_=t._height;p.set(u.a*d/f,u.b*d/_,u.c*m/f,u.d*m/_,u.tx/f,u.ty/_),p.invert(),c?p.prepend(h.mapCoord):(l.uniforms.uMapCoord=h.mapCoord.toArray(!0),l.uniforms.uClampFrame=h.uClampFrame,l.uniforms.uClampOffset=h.uClampOffset),l.uniforms.uTransform=p.toArray(!0),l.uniforms.uColor=(0,a.premultiplyTintToRgba)(t.tint,t.worldAlpha,l.uniforms.uColor,i.alphaMode),l.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),l.uniforms.uSampler=n,e.shader.bind(l),e.geometry.bind(r),this.state.blendMode=(0,a.correctBlendMode)(t.blendMode,i.alphaMode),e.state.set(this.state),e.geometry.draw(this.renderer.gl.TRIANGLES,6,0)},e}(o.bO)}}]);