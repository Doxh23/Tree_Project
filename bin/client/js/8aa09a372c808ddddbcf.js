"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9230],{1170:(e,t,r)=>{r.r(t),r.d(t,{utils:()=>a,AccessibilityManager:()=>n.L,accessibleTarget:()=>n.V,InteractionData:()=>i.gU,InteractionEvent:()=>i.sm,InteractionManager:()=>i.bx,InteractionTrackingData:()=>i.s_,interactiveTarget:()=>i.Op,Application:()=>o.M,AbstractBatchRenderer:()=>s.eo,AbstractRenderer:()=>s.I8,Attribute:()=>s.ah,BaseRenderTexture:()=>s.jd,BaseTexture:()=>s.VL,BatchDrawCall:()=>s.a$,BatchGeometry:()=>s.JZ,BatchPluginFactory:()=>s.TJ,BatchRenderer:()=>s.Bv,BatchShaderGenerator:()=>s.Zk,BatchTextureArray:()=>s.Ie,Buffer:()=>s.lW,Filter:()=>s.wn,FilterState:()=>s.jV,Framebuffer:()=>s.AI,GLFramebuffer:()=>s.tT,GLProgram:()=>s.Ei,GLTexture:()=>s.fy,Geometry:()=>s.ZX,IGLUniformData:()=>s.W1,MaskData:()=>s.HI,ObjectRenderer:()=>s.bO,Program:()=>s.$r,Quad:()=>s.lD,QuadUv:()=>s.ud,RenderTexture:()=>s.TI,RenderTexturePool:()=>s.uW,Renderer:()=>s.Th,Shader:()=>s.ex,SpriteMaskFilter:()=>s.z9,State:()=>s.ZM,System:()=>s.xP,Texture:()=>s.xE,TextureMatrix:()=>s.UX,TextureUvs:()=>s.aF,UniformGroup:()=>s.oo,ViewableBuffer:()=>s.Rv,autoDetectRenderer:()=>s.e6,checkMaxIfStatementsInShader:()=>s.a7,defaultFilterVertex:()=>s.Y9,defaultVertex:()=>s.kP,resources:()=>s.Jb,systems:()=>s.eG,uniformParsers:()=>s.sg,Extract:()=>c.Q,AppLoaderPlugin:()=>d.LP,Loader:()=>d.aN,LoaderResource:()=>d.kC,TextureLoader:()=>d.dp,ParticleContainer:()=>p.T,ParticleRenderer:()=>p.P,BasePrepare:()=>u.Zq,CountLimiter:()=>u.fh,Prepare:()=>u.B9,TimeLimiter:()=>u.FI,Spritesheet:()=>I.c,SpritesheetLoader:()=>I.o,TilingSprite:()=>l.o,TilingSpriteRenderer:()=>l.S,BitmapFont:()=>P.UP,BitmapFontData:()=>P.d0,BitmapFontLoader:()=>P.vl,BitmapText:()=>P.Xz,Ticker:()=>m.vB,TickerPlugin:()=>m.Sb,UPDATE_PRIORITY:()=>m.uF,ALPHA_MODES:()=>y.iw,BLEND_MODES:()=>y.T$,BUFFER_BITS:()=>y.V0,CLEAR_MODES:()=>y.yl,DRAW_MODES:()=>y.lg,ENV:()=>y.Vi,FORMATS:()=>y.I2,GC_MODES:()=>y.UN,MASK_TYPES:()=>y.A7,MIPMAP_MODES:()=>y.WB,MSAA_QUALITY:()=>y.G5,PRECISION:()=>y.cB,RENDERER_TYPE:()=>y.N3,SCALE_MODES:()=>y.aH,TARGETS:()=>y.sp,TYPES:()=>y.vK,WRAP_MODES:()=>y.Nt,Bounds:()=>T.YZ,Container:()=>T.W2,DisplayObject:()=>T.s$,TemporaryDisplayObject:()=>T.Ql,FillStyle:()=>b.ft,GRAPHICS_CURVES:()=>b.wA,Graphics:()=>b.TC,GraphicsData:()=>b.iM,GraphicsGeometry:()=>b.RB,LINE_CAP:()=>b.$o,LINE_JOIN:()=>b.S,LineStyle:()=>b.TD,graphicsUtils:()=>b.yR,Circle:()=>x.Cd,DEG_TO_RAD:()=>x.ZX,Ellipse:()=>x.Pj,Matrix:()=>x.y3,ObservablePoint:()=>x.AB,PI_2:()=>x._b,Point:()=>x.E9,Polygon:()=>x.mg,RAD_TO_DEG:()=>x.jl,Rectangle:()=>x.Ae,RoundedRectangle:()=>x.c9,SHAPES:()=>x.HS,Transform:()=>x.wx,groupD8:()=>x.Lv,Mesh:()=>R.Kj,MeshBatchUvs:()=>R.wQ,MeshGeometry:()=>R.xc,MeshMaterial:()=>R.rY,NineSlicePlane:()=>M.ZT,PlaneGeometry:()=>M._1,RopeGeometry:()=>M.Au,SimpleMesh:()=>M.AL,SimplePlane:()=>M.VJ,SimpleRope:()=>M.IE,Runner:()=>F.R,Sprite:()=>B.j,AnimatedSprite:()=>A.K,TEXT_GRADIENT:()=>L.M_,Text:()=>L.xv,TextMetrics:()=>L._A,TextStyle:()=>L.pn,isMobile:()=>O.t,settings:()=>O.X,VERSION:()=>G,filters:()=>j,useDeprecated:()=>D}),r(4785);var a=r(2876),n=r(5053),i=r(5732),o=r(2237),s=r(6469),c=r(9889),d=r(521),p=r(3484),u=r(7228),I=r(5927),l=r(9119),P=r(4867),m=r(8488),h=r(1558),f=r(1462),g=r(7310),X=r(3162),S=r(3431),v=r(167),y=(r(2872),r(4658),r(2156),r(3535)),T=r(2754),b=r(5524),x=r(4296),R=r(8410),M=r(2556),F=r(6261),B=r(6680),A=r(6365),L=r(6658),O=r(5880),E=function(e,t){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},E(e,t)};function _(e,t){function r(){this.constructor=e}E(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var C="5.0.0";function D(){var e=this;Object.defineProperties(e,{SVG_SIZE:{get:function(){return(0,a.deprecation)(C,"PIXI.utils.SVG_SIZE property has moved to PIXI.resources.SVGResource.SVG_SIZE"),e.SVGResource.SVG_SIZE}},TransformStatic:{get:function(){return(0,a.deprecation)(C,"PIXI.TransformStatic class has been removed, use PIXI.Transform"),e.Transform}},TransformBase:{get:function(){return(0,a.deprecation)(C,"PIXI.TransformBase class has been removed, use PIXI.Transform"),e.Transform}},TRANSFORM_MODE:{get:function(){return(0,a.deprecation)(C,"PIXI.TRANSFORM_MODE property has been removed"),{STATIC:0,DYNAMIC:1}}},WebGLRenderer:{get:function(){return(0,a.deprecation)(C,"PIXI.WebGLRenderer class has moved to PIXI.Renderer"),e.Renderer}},CanvasRenderTarget:{get:function(){return(0,a.deprecation)(C,"PIXI.CanvasRenderTarget class has moved to PIXI.utils.CanvasRenderTarget"),e.utils.CanvasRenderTarget}},loader:{get:function(){return(0,a.deprecation)(C,"PIXI.loader instance has moved to PIXI.Loader.shared"),e.Loader.shared}},FilterManager:{get:function(){return(0,a.deprecation)(C,"PIXI.FilterManager class has moved to PIXI.systems.FilterSystem"),e.systems.FilterSystem}},CanvasTinter:{get:function(){return(0,a.deprecation)("5.2.0","PIXI.CanvasTinter namespace has moved to PIXI.canvasUtils"),e.canvasUtils}},GroupD8:{get:function(){return(0,a.deprecation)("5.2.0","PIXI.GroupD8 namespace has moved to PIXI.groupD8"),e.groupD8}}}),e.accessibility={},Object.defineProperties(e.accessibility,{AccessibilityManager:{get:function(){return(0,a.deprecation)("5.3.0","PIXI.accessibility.AccessibilityManager moved to PIXI.AccessibilityManager"),e.AccessibilityManager}}}),e.interaction={},Object.defineProperties(e.interaction,{InteractionManager:{get:function(){return(0,a.deprecation)("5.3.0","PIXI.interaction.InteractionManager moved to PIXI.InteractionManager"),e.InteractionManager}},InteractionData:{get:function(){return(0,a.deprecation)("5.3.0","PIXI.interaction.InteractionData moved to PIXI.InteractionData"),e.InteractionData}},InteractionEvent:{get:function(){return(0,a.deprecation)("5.3.0","PIXI.interaction.InteractionEvent moved to PIXI.InteractionEvent"),e.InteractionEvent}}}),e.prepare={},Object.defineProperties(e.prepare,{BasePrepare:{get:function(){return(0,a.deprecation)("5.2.1","PIXI.prepare.BasePrepare moved to PIXI.BasePrepare"),e.BasePrepare}},Prepare:{get:function(){return(0,a.deprecation)("5.2.1","PIXI.prepare.Prepare moved to PIXI.Prepare"),e.Prepare}},CanvasPrepare:{get:function(){return(0,a.deprecation)("5.2.1","PIXI.prepare.CanvasPrepare moved to PIXI.CanvasPrepare"),e.CanvasPrepare}}}),e.extract={},Object.defineProperties(e.extract,{Extract:{get:function(){return(0,a.deprecation)("5.2.1","PIXI.extract.Extract moved to PIXI.Extract"),e.Extract}},CanvasExtract:{get:function(){return(0,a.deprecation)("5.2.1","PIXI.extract.CanvasExtract moved to PIXI.CanvasExtract"),e.CanvasExtract}}}),e.extras={},Object.defineProperties(e.extras,{TilingSprite:{get:function(){return(0,a.deprecation)(C,"PIXI.extras.TilingSprite class has moved to PIXI.TilingSprite"),e.TilingSprite}},TilingSpriteRenderer:{get:function(){return(0,a.deprecation)(C,"PIXI.extras.TilingSpriteRenderer class has moved to PIXI.TilingSpriteRenderer"),e.TilingSpriteRenderer}},AnimatedSprite:{get:function(){return(0,a.deprecation)(C,"PIXI.extras.AnimatedSprite class has moved to PIXI.AnimatedSprite"),e.AnimatedSprite}},BitmapText:{get:function(){return(0,a.deprecation)(C,"PIXI.extras.BitmapText class has moved to PIXI.BitmapText"),e.BitmapText}}}),e.TilingSprite.fromFrame=function(t,r,n){return(0,a.deprecation)("5.3.0","TilingSprite.fromFrame is deprecated, use TilingSprite.from"),e.TilingSprite.from(t,{width:r,height:n})},e.TilingSprite.fromImage=function(t,r,n,i){return void 0===i&&(i={}),(0,a.deprecation)("5.3.0","TilingSprite.fromImage is deprecated, use TilingSprite.from"),i&&"object"!=typeof i&&(i={scaleMode:arguments[4],resourceOptions:{crossorigin:arguments[3]}}),i.width=r,i.height=n,e.TilingSprite.from(t,i)},Object.defineProperties(e.utils,{getSvgSize:{get:function(){return(0,a.deprecation)(C,"PIXI.utils.getSvgSize function has moved to PIXI.resources.SVGResource.getSize"),e.resources.SVGResource.getSize}}}),e.mesh={},Object.defineProperties(e.mesh,{Mesh:{get:function(){return(0,a.deprecation)(C,"PIXI.mesh.Mesh class has moved to PIXI.SimpleMesh"),e.SimpleMesh}},NineSlicePlane:{get:function(){return(0,a.deprecation)(C,"PIXI.mesh.NineSlicePlane class has moved to PIXI.NineSlicePlane"),e.NineSlicePlane}},Plane:{get:function(){return(0,a.deprecation)(C,"PIXI.mesh.Plane class has moved to PIXI.SimplePlane"),e.SimplePlane}},Rope:{get:function(){return(0,a.deprecation)(C,"PIXI.mesh.Rope class has moved to PIXI.SimpleRope"),e.SimpleRope}},RawMesh:{get:function(){return(0,a.deprecation)(C,"PIXI.mesh.RawMesh class has moved to PIXI.Mesh"),e.Mesh}},CanvasMeshRenderer:{get:function(){return(0,a.deprecation)(C,"PIXI.mesh.CanvasMeshRenderer class has moved to PIXI.CanvasMeshRenderer"),e.CanvasMeshRenderer}},MeshRenderer:{get:function(){return(0,a.deprecation)(C,"PIXI.mesh.MeshRenderer class has moved to PIXI.MeshRenderer"),e.MeshRenderer}}}),e.particles={},Object.defineProperties(e.particles,{ParticleContainer:{get:function(){return(0,a.deprecation)(C,"PIXI.particles.ParticleContainer class has moved to PIXI.ParticleContainer"),e.ParticleContainer}},ParticleRenderer:{get:function(){return(0,a.deprecation)(C,"PIXI.particles.ParticleRenderer class has moved to PIXI.ParticleRenderer"),e.ParticleRenderer}}}),e.ticker={},Object.defineProperties(e.ticker,{Ticker:{get:function(){return(0,a.deprecation)(C,"PIXI.ticker.Ticker class has moved to PIXI.Ticker"),e.Ticker}},shared:{get:function(){return(0,a.deprecation)(C,"PIXI.ticker.shared instance has moved to PIXI.Ticker.shared"),e.Ticker.shared}}}),e.loaders={},Object.defineProperties(e.loaders,{Loader:{get:function(){return(0,a.deprecation)(C,"PIXI.loaders.Loader class has moved to PIXI.Loader"),e.Loader}},Resource:{get:function(){return(0,a.deprecation)(C,"PIXI.loaders.Resource class has moved to PIXI.LoaderResource"),e.LoaderResource}},bitmapFontParser:{get:function(){return(0,a.deprecation)(C,"PIXI.loaders.bitmapFontParser function has moved to PIXI.BitmapFontLoader.use"),e.BitmapFontLoader.use}},parseBitmapFontData:{get:function(){(0,a.deprecation)(C,"PIXI.loaders.parseBitmapFontData function has removed")}},spritesheetParser:{get:function(){return(0,a.deprecation)(C,"PIXI.loaders.spritesheetParser function has moved to PIXI.SpritesheetLoader.use"),e.SpritesheetLoader.use}},getResourcePath:{get:function(){return(0,a.deprecation)(C,"PIXI.loaders.getResourcePath property has moved to PIXI.SpritesheetLoader.getResourcePath"),e.SpritesheetLoader.getResourcePath}}}),e.Loader.addPixiMiddleware=function(t){return(0,a.deprecation)(C,"PIXI.loaders.Loader.addPixiMiddleware function is deprecated, use PIXI.loaders.Loader.registerPlugin"),e.loaders.Loader.registerPlugin({use:t()})};var t=function(e){return"on"+e.charAt(0).toUpperCase()+e.slice(1)};Object.assign(e.Loader.prototype,{on:function(e){var r=t(e);(0,a.deprecation)(C,"PIXI.Loader#on is completely deprecated, use PIXI.Loader#"+r+".add")},once:function(e){var r=t(e);(0,a.deprecation)(C,"PIXI.Loader#once is completely deprecated, use PIXI.Loader#"+r+".once")},off:function(e){var r=t(e);(0,a.deprecation)(C,"PIXI.Loader#off is completely deprecated, use PIXI.Loader#"+r+".detach")}}),Object.defineProperty(e.extract,"WebGLExtract",{get:function(){return(0,a.deprecation)(C,"PIXI.extract.WebGLExtract method has moved to PIXI.Extract"),e.Extract}}),Object.defineProperty(e.prepare,"WebGLPrepare",{get:function(){return(0,a.deprecation)(C,"PIXI.prepare.WebGLPrepare class has moved to PIXI.Prepare"),e.Prepare}}),e.Container.prototype._renderWebGL=function(e){(0,a.deprecation)(C,"PIXI.Container._renderWebGL method has moved to PIXI.Container._render"),this._render(e)},e.Container.prototype.renderWebGL=function(e){(0,a.deprecation)(C,"PIXI.Container.renderWebGL method has moved to PIXI.Container.render"),this.render(e)},e.DisplayObject.prototype.renderWebGL=function(e){(0,a.deprecation)(C,"PIXI.DisplayObject.renderWebGL method has moved to PIXI.DisplayObject.render"),this.render(e)},e.Container.prototype.renderAdvancedWebGL=function(e){(0,a.deprecation)(C,"PIXI.Container.renderAdvancedWebGL method has moved to PIXI.Container.renderAdvanced"),this.renderAdvanced(e)},Object.defineProperties(e.settings,{TRANSFORM_MODE:{get:function(){return(0,a.deprecation)(C,"PIXI.settings.TRANSFORM_MODE property has been removed"),0},set:function(){(0,a.deprecation)(C,"PIXI.settings.TRANSFORM_MODE property has been removed")}}});var r=e.BaseTexture;r.prototype.loadSource=function(t){(0,a.deprecation)(C,"PIXI.BaseTexture.loadSource method has been deprecated");var r=e.resources.autoDetectResource(t);r.internal=!0,this.setResource(r),this.update()};var n=!1;Object.defineProperties(r.prototype,{hasLoaded:{get:function(){return(0,a.deprecation)(C,"PIXI.BaseTexture.hasLoaded property has been removed, use PIXI.BaseTexture.valid"),this.valid}},imageUrl:{get:function(){var e;return(0,a.deprecation)(C,"PIXI.BaseTexture.imageUrl property has been removed, use PIXI.BaseTexture.resource.url"),null===(e=this.resource)||void 0===e?void 0:e.url},set:function(e){(0,a.deprecation)(C,"PIXI.BaseTexture.imageUrl property has been removed, use PIXI.BaseTexture.resource.url"),this.resource&&(this.resource.url=e)}},source:{get:function(){return(0,a.deprecation)(C,"PIXI.BaseTexture.source property has been moved, use `PIXI.BaseTexture.resource.source`"),this.resource.source},set:function(e){(0,a.deprecation)(C,"PIXI.BaseTexture.source property has been moved, use `PIXI.BaseTexture.resource.source` if you want to set HTMLCanvasElement. Otherwise, create new BaseTexture."),this.resource&&(this.resource.source=e)}},premultiplyAlpha:{get:function(){return(0,a.deprecation)("5.2.0","PIXI.BaseTexture.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"),0!==this.alphaMode},set:function(e){(0,a.deprecation)("5.2.0","PIXI.BaseTexture.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"),this.alphaMode=Number(e)}},_id:{get:function(){return n||((0,a.deprecation)("5.2.0","PIXI.BaseTexture._id batch local field has been changed to `_batchLocation`"),n=!0),this._batchLocation},set:function(e){this._batchLocation=e}}}),r.fromImage=function(e,t,n,i){(0,a.deprecation)(C,"PIXI.BaseTexture.fromImage method has been replaced with PIXI.BaseTexture.from");var o={scale:i,crossorigin:t};return r.from(e,{scaleMode:n,resourceOptions:o})},r.fromCanvas=function(e,t){return(0,a.deprecation)(C,"PIXI.BaseTexture.fromCanvas method has been replaced with PIXI.BaseTexture.from"),r.from(e,{scaleMode:t})},r.fromSVG=function(e,t,n,i){(0,a.deprecation)(C,"PIXI.BaseTexture.fromSVG method has been replaced with PIXI.BaseTexture.from");var o={scale:i,crossorigin:t};return r.from(e,{scaleMode:n,resourceOptions:o})},Object.defineProperties(e.resources.ImageResource.prototype,{premultiplyAlpha:{get:function(){return(0,a.deprecation)("5.2.0","PIXI.resources.ImageResource.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"),0!==this.alphaMode},set:function(e){(0,a.deprecation)("5.2.0","PIXI.resources.ImageResource.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"),this.alphaMode=Number(e)}}}),e.Point.prototype.copy=function(e){return(0,a.deprecation)(C,"PIXI.Point.copy method has been replaced with PIXI.Point.copyFrom"),this.copyFrom(e)},e.ObservablePoint.prototype.copy=function(e){return(0,a.deprecation)(C,"PIXI.ObservablePoint.copy method has been replaced with PIXI.ObservablePoint.copyFrom"),this.copyFrom(e)},e.Rectangle.prototype.copy=function(e){return(0,a.deprecation)(C,"PIXI.Rectangle.copy method has been replaced with PIXI.Rectangle.copyFrom"),this.copyFrom(e)},e.Matrix.prototype.copy=function(e){return(0,a.deprecation)(C,"PIXI.Matrix.copy method has been replaced with PIXI.Matrix.copyTo"),this.copyTo(e)},e.systems.StateSystem.prototype.setState=function(e){return(0,a.deprecation)("v5.1.0","StateSystem.setState has been renamed to StateSystem.set"),this.set(e)},Object.assign(e.systems.FilterSystem.prototype,{getRenderTarget:function(e,t){return(0,a.deprecation)(C,"PIXI.FilterManager.getRenderTarget method has been replaced with PIXI.systems.FilterSystem#getFilterTexture"),this.getFilterTexture(null,t)},returnRenderTarget:function(e){(0,a.deprecation)(C,"PIXI.FilterManager.returnRenderTarget method has been replaced with PIXI.systems.FilterSystem.returnFilterTexture"),this.returnFilterTexture(e)},calculateScreenSpaceMatrix:function(e){(0,a.deprecation)(C,"PIXI.systems.FilterSystem.calculateScreenSpaceMatrix method is removed, use `(vTextureCoord * inputSize.xy) + outputFrame.xy` instead");var t=e.identity(),r=this.activeState,n=r.sourceFrame,i=r.destinationFrame;return t.translate(n.x/i.width,n.y/i.height),t.scale(i.width,i.height),t},calculateNormalizedScreenSpaceMatrix:function(e){(0,a.deprecation)(C,"PIXI.systems.FilterManager.calculateNormalizedScreenSpaceMatrix method is removed, use `((vTextureCoord * inputSize.xy) + outputFrame.xy) / outputFrame.zw` instead.");var t=this.activeState,r=t.sourceFrame,n=t.destinationFrame,i=e.identity();i.translate(r.x/n.width,r.y/n.height);var o=n.width/r.width,s=n.height/r.height;return i.scale(o,s),i}}),Object.defineProperties(e.RenderTexture.prototype,{sourceFrame:{get:function(){return(0,a.deprecation)(C,"PIXI.RenderTexture.sourceFrame property has been removed"),this.filterFrame}},size:{get:function(){return(0,a.deprecation)(C,"PIXI.RenderTexture.size property has been removed"),this._frame}}});var i=function(e){function t(t,r,n,i){return(0,a.deprecation)(C,"PIXI.filters.BlurXFilter class is deprecated, use PIXI.filters.BlurFilterPass"),e.call(this,!0,t,r,n,i)||this}return _(t,e),t}(e.filters.BlurFilterPass),o=function(e){function t(t,r,n,i){return(0,a.deprecation)(C,"PIXI.filters.BlurYFilter class is deprecated, use PIXI.filters.BlurFilterPass"),e.call(this,!1,t,r,n,i)||this}return _(t,e),t}(e.filters.BlurFilterPass);Object.assign(e.filters,{BlurXFilter:i,BlurYFilter:o});var s=e.Sprite,c=e.Texture,d=e.Graphics;function p(e,t,r,n){return(0,a.deprecation)(C,"PIXI.Sprite."+e+" method is deprecated, use PIXI.Sprite.from"),s.from(t,{resourceOptions:{scale:n,crossorigin:r}})}function u(e,t,r,n){return(0,a.deprecation)(C,"PIXI.Texture."+e+" method is deprecated, use PIXI.Texture.from"),c.from(t,{resourceOptions:{scale:n,crossorigin:r}})}d.prototype.generateCanvasTexture||(d.prototype.generateCanvasTexture=function(){(0,a.deprecation)(C,'PIXI.Graphics.generateCanvasTexture method is only available in "pixi.js-legacy"')}),Object.defineProperty(d.prototype,"graphicsData",{get:function(){return(0,a.deprecation)(C,"PIXI.Graphics.graphicsData property is deprecated, use PIXI.Graphics.geometry.graphicsData"),this.geometry.graphicsData}}),s.fromImage=p.bind(null,"fromImage"),s.fromSVG=p.bind(null,"fromSVG"),s.fromCanvas=p.bind(null,"fromCanvas"),s.fromVideo=p.bind(null,"fromVideo"),s.fromFrame=p.bind(null,"fromFrame"),c.fromImage=u.bind(null,"fromImage"),c.fromSVG=u.bind(null,"fromSVG"),c.fromCanvas=u.bind(null,"fromCanvas"),c.fromVideo=u.bind(null,"fromVideo"),c.fromFrame=u.bind(null,"fromFrame"),Object.defineProperty(e.AbstractRenderer.prototype,"autoResize",{get:function(){return(0,a.deprecation)(C,"PIXI.AbstractRenderer.autoResize property is deprecated, use PIXI.AbstractRenderer.autoDensity"),this.autoDensity},set:function(e){(0,a.deprecation)(C,"PIXI.AbstractRenderer.autoResize property is deprecated, use PIXI.AbstractRenderer.autoDensity"),this.autoDensity=e}}),Object.defineProperty(e.Renderer.prototype,"textureManager",{get:function(){return(0,a.deprecation)(C,"PIXI.Renderer.textureManager property is deprecated, use PIXI.Renderer.texture"),this.texture}}),e.utils.mixins={mixin:function(){(0,a.deprecation)(C,"PIXI.utils.mixins.mixin function is no longer available")},delayMixin:function(){(0,a.deprecation)(C,"PIXI.utils.mixins.delayMixin function is no longer available")},performMixins:function(){(0,a.deprecation)(C,"PIXI.utils.mixins.performMixins function is no longer available")}},Object.defineProperty(e.BitmapText.prototype,"font",{get:function(){return(0,a.deprecation)("5.3.0","PIXI.BitmapText.font property is deprecated, use fontName, fontSize, tint or align properties"),{name:this._fontName,size:this._fontSize,tint:this._tint,align:this._align}},set:function(t){if((0,a.deprecation)("5.3.0","PIXI.BitmapText.font property is deprecated, use fontName, fontSize, tint or align properties"),t){var r={font:t};this._upgradeStyle(r),r.fontSize=r.fontSize||e.BitmapFont.available[r.fontName].size,this._fontName=r.fontName,this._fontSize=r.fontSize,this.dirty=!0}}})}s.Th.registerPlugin("accessibility",n.L),s.Th.registerPlugin("extract",c.Q),s.Th.registerPlugin("interaction",i.bx),s.Th.registerPlugin("particle",p.P),s.Th.registerPlugin("prepare",u.B9),s.Th.registerPlugin("batch",s.Bv),s.Th.registerPlugin("tilingSprite",l.S),d.aN.registerPlugin(P.vl),d.aN.registerPlugin(I.o),o.M.registerPlugin(m.Sb),o.M.registerPlugin(d.LP);var G="5.3.11",j={AlphaFilter:h.U,BlurFilter:f.T,BlurFilterPass:f.Y,ColorMatrixFilter:g.m,DisplacementFilter:X.p,FXAAFilter:S.b,NoiseFilter:v.L}}}]);