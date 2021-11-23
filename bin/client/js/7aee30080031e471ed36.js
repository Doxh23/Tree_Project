/*! For license information please see 7aee30080031e471ed36.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8803],{3535:(E,_,T)=>{var N,A,R,O,L,I,P,S,U,C,D,M,G,H,B,n,X;T.d(_,{iw:()=>M,T$:()=>O,V0:()=>R,yl:()=>G,lg:()=>L,Vi:()=>N,I2:()=>I,UN:()=>H,A7:()=>n,WB:()=>D,G5:()=>X,cB:()=>B,N3:()=>A,aH:()=>U,sp:()=>P,vK:()=>S,Nt:()=>C}),function(E){E[E.WEBGL_LEGACY=0]="WEBGL_LEGACY",E[E.WEBGL=1]="WEBGL",E[E.WEBGL2=2]="WEBGL2"}(N||(N={})),function(E){E[E.UNKNOWN=0]="UNKNOWN",E[E.WEBGL=1]="WEBGL",E[E.CANVAS=2]="CANVAS"}(A||(A={})),function(E){E[E.COLOR=16384]="COLOR",E[E.DEPTH=256]="DEPTH",E[E.STENCIL=1024]="STENCIL"}(R||(R={})),function(E){E[E.NORMAL=0]="NORMAL",E[E.ADD=1]="ADD",E[E.MULTIPLY=2]="MULTIPLY",E[E.SCREEN=3]="SCREEN",E[E.OVERLAY=4]="OVERLAY",E[E.DARKEN=5]="DARKEN",E[E.LIGHTEN=6]="LIGHTEN",E[E.COLOR_DODGE=7]="COLOR_DODGE",E[E.COLOR_BURN=8]="COLOR_BURN",E[E.HARD_LIGHT=9]="HARD_LIGHT",E[E.SOFT_LIGHT=10]="SOFT_LIGHT",E[E.DIFFERENCE=11]="DIFFERENCE",E[E.EXCLUSION=12]="EXCLUSION",E[E.HUE=13]="HUE",E[E.SATURATION=14]="SATURATION",E[E.COLOR=15]="COLOR",E[E.LUMINOSITY=16]="LUMINOSITY",E[E.NORMAL_NPM=17]="NORMAL_NPM",E[E.ADD_NPM=18]="ADD_NPM",E[E.SCREEN_NPM=19]="SCREEN_NPM",E[E.NONE=20]="NONE",E[E.SRC_OVER=0]="SRC_OVER",E[E.SRC_IN=21]="SRC_IN",E[E.SRC_OUT=22]="SRC_OUT",E[E.SRC_ATOP=23]="SRC_ATOP",E[E.DST_OVER=24]="DST_OVER",E[E.DST_IN=25]="DST_IN",E[E.DST_OUT=26]="DST_OUT",E[E.DST_ATOP=27]="DST_ATOP",E[E.ERASE=26]="ERASE",E[E.SUBTRACT=28]="SUBTRACT",E[E.XOR=29]="XOR"}(O||(O={})),function(E){E[E.POINTS=0]="POINTS",E[E.LINES=1]="LINES",E[E.LINE_LOOP=2]="LINE_LOOP",E[E.LINE_STRIP=3]="LINE_STRIP",E[E.TRIANGLES=4]="TRIANGLES",E[E.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",E[E.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(L||(L={})),function(E){E[E.RGBA=6408]="RGBA",E[E.RGB=6407]="RGB",E[E.ALPHA=6406]="ALPHA",E[E.LUMINANCE=6409]="LUMINANCE",E[E.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",E[E.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",E[E.DEPTH_STENCIL=34041]="DEPTH_STENCIL"}(I||(I={})),function(E){E[E.TEXTURE_2D=3553]="TEXTURE_2D",E[E.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",E[E.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",E[E.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",E[E.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",E[E.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",E[E.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",E[E.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",E[E.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"}(P||(P={})),function(E){E[E.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",E[E.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",E[E.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",E[E.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",E[E.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",E[E.FLOAT=5126]="FLOAT",E[E.HALF_FLOAT=36193]="HALF_FLOAT"}(S||(S={})),function(E){E[E.NEAREST=0]="NEAREST",E[E.LINEAR=1]="LINEAR"}(U||(U={})),function(E){E[E.CLAMP=33071]="CLAMP",E[E.REPEAT=10497]="REPEAT",E[E.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(C||(C={})),function(E){E[E.OFF=0]="OFF",E[E.POW2=1]="POW2",E[E.ON=2]="ON"}(D||(D={})),function(E){E[E.NPM=0]="NPM",E[E.UNPACK=1]="UNPACK",E[E.PMA=2]="PMA",E[E.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",E[E.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",E[E.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA"}(M||(M={})),function(E){E[E.NO=0]="NO",E[E.YES=1]="YES",E[E.AUTO=2]="AUTO",E[E.BLEND=0]="BLEND",E[E.CLEAR=1]="CLEAR",E[E.BLIT=2]="BLIT"}(G||(G={})),function(E){E[E.AUTO=0]="AUTO",E[E.MANUAL=1]="MANUAL"}(H||(H={})),function(E){E.LOW="lowp",E.MEDIUM="mediump",E.HIGH="highp"}(B||(B={})),function(E){E[E.NONE=0]="NONE",E[E.SCISSOR=1]="SCISSOR",E[E.STENCIL=2]="STENCIL",E[E.SPRITE=3]="SPRITE"}(n||(n={})),function(E){E[E.NONE=0]="NONE",E[E.LOW=2]="LOW",E[E.MEDIUM=4]="MEDIUM",E[E.HIGH=8]="HIGH"}(X||(X={}))}}]);