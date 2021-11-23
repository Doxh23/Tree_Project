"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5104],{6931:(A,n,r)=>{r.d(n,{Z:()=>B});var e=r(272),i=r.n(e),t=r(2609),o=r.n(t)()(i());o.push([A.id,"@import url(https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap);"]),o.push([A.id,"@import url(https://fonts.googleapis.com/css2?family=Carme&display=swap);"]),o.push([A.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  font-size: 62.5%;\r\n}\r\n\r\n* body {\r\n  background-color: #003b4a;\r\n  font-family: "Inconsolata", monospace;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n* body header {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n* body header h1 {\r\n  margin-left: 10rem;\r\n  color: white;\r\n  font-size: 6.4rem;\r\n  font-weight: 400;\r\n  background-color: #003b4a;\r\n  border-radius: 0 0 3rem 3rem;\r\n  padding: 0.2rem 10.3rem;\r\n  z-index: 999;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n* body header .hidden-nav {\r\n  opacity: 0;\r\n}\r\n\r\n* body header nav {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  -webkit-transition: opacity 0.25s;\r\n  transition: opacity 0.25s;\r\n  opacity: 1;\r\n  margin-left: 9rem;\r\n}\r\n\r\n* body header nav ul {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  width: 100%;\r\n}\r\n\r\n* body header nav ul li {\r\n  list-style: none;\r\n  position: relative;\r\n}\r\n\r\n* body header nav ul li .profile-btn {\r\n  margin-right: 6.5rem;\r\n}\r\n\r\n* body header .hamburger-menu {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  height: 75px;\r\n  background: #003b4a;\r\n  border-radius: 0 0 0 75px;\r\n  z-index: 999;\r\n  margin-left: auto;\r\n  -webkit-transition: all 0.75s ease-in-out;\r\n  transition: all 0.75s ease-in-out;\r\n  position: relative;\r\n}\r\n\r\n* body header .hamburger-menu svg {\r\n  position: absolute;\r\n  top: 1rem;\r\n  right: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n* body rect {\r\n  -webkit-transition: all 0.5s;\r\n  transition: all 0.5s;\r\n}\r\n\r\n* body .path {\r\n  -webkit-transform-origin: left;\r\n          transform-origin: left;\r\n}\r\n\r\n* body .path:nth-child(2) {\r\n  -webkit-transform-origin: center;\r\n          transform-origin: center;\r\n  -webkit-transform: scaleX(0);\r\n          transform: scaleX(0);\r\n}\r\n\r\n* body .path:nth-child(1) {\r\n  -webkit-transform: rotate(45deg) translate(-16%, -5%);\r\n          transform: rotate(45deg) translate(-16%, -5%);\r\n}\r\n\r\n* body .path:nth-child(3) {\r\n  -webkit-transform: rotate(-45deg) translate(-16%, 5%);\r\n          transform: rotate(-45deg) translate(-16%, 5%);\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  * body header h1 {\r\n    margin-left: 0;\r\n    font-size: clamp(3rem, 4vw, 6.4rem);\r\n    border-radius: 0 0 3rem 0;\r\n    padding: 0.2rem 2rem 0.2rem 1rem;\r\n  }\r\n}\r\n\r\n* body .login-register {\r\n  position: absolute;\r\n  display: none;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  left: 0;\r\n  top: 0px;\r\n  z-index: 3;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: #8080807d;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n* body .menu-login-register {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-size: 30px;\r\n  width: 50%;\r\n  max-width: 800px;\r\n  height: 7.5%;\r\n  background-color: #184E5B;\r\n  border-top-left-radius: 30px;\r\n  border-top-right-radius: 30px;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  color: white;\r\n  font-size: 64px;\r\n  justify-content: center;\r\n}\r\n\r\n* body .menu-login-register .login {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  width: 50%;\r\n  height: 100%;\r\n  border: 1px solid black;\r\n  border-top-left-radius: 25px;\r\n}\r\n\r\n* body .menu-login-register .register {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  width: 50%;\r\n  height: 100%;\r\n  border: 1px solid black;\r\n  border-top-right-radius: 25px;\r\n}\r\n\r\n* body .menu-login-register h2 {\r\n  width: 100%;\r\n  margin: 10px 10px;\r\n  text-align: center;\r\n}\r\n\r\n* body .login-field {\r\n  width: 50%;\r\n  max-width: 800px;\r\n  height: 69%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  background-color: #e3e3e3c7;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  border-bottom-left-radius: 25px;\r\n  border-bottom-right-radius: 25px;\r\n}\r\n\r\n* body .login-field form {\r\n  margin: auto;\r\n  width: 47%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  text-align: center;\r\n}\r\n\r\n* body .login-field form label {\r\n  font-size: 48px;\r\n}\r\n\r\n* body .login-field form button {\r\n  margin-top: 10px;\r\n  width: 100%;\r\n  height: 70px;\r\n  border-radius: 25px;\r\n  font-size: 48px;\r\n  background: #184E5B;\r\n  color: white;\r\n  border: 1px solid black;\r\n}\r\n\r\n* body .login-field form input {\r\n  height: 70px;\r\n  border-radius: 25px;\r\n  margin-bottom: 55px;\r\n  font-size: 25px;\r\n}\r\n\r\n@media only screen and (max-width: 1000px) {\r\n  * body .login-field form {\r\n    width: 100%;\r\n  }\r\n  * body .login-field input {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n  * body .menu-login-register {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    height: auto;\r\n    width: 100%;\r\n  }\r\n  * body .menu-login-register .login {\r\n    width: 100%;\r\n    border-top-right-radius: 25px;\r\n  }\r\n  * body .menu-login-register .register {\r\n    width: 100%;\r\n    border-radius: 0;\r\n  }\r\n  * body .login-field {\r\n    width: 100%;\r\n  }\r\n  * body .login-field form {\r\n    width: 100%;\r\n  }\r\n  * body .login-field input {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n  * body .login-field form label {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n* body main {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n* body main .map-liege {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 97.7vh;\r\n  margin: 1rem;\r\n  z-index: 0;\r\n}\r\n\r\n* body main .map-layout {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5rem;\r\n}\r\n\r\n* body main .sidebar {\r\n  width: auto;\r\n  height: auto;\r\n  z-index: 999;\r\n  position: absolute;\r\n  bottom: 5%;\r\n  right: 5%;\r\n}\r\n\r\n* body main .sidebar .gamelog {\r\n  margin-top: 1.5rem;\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  * body main .sidebar {\r\n    right: 2%;\r\n    bottom: 10rem;\r\n  }\r\n  * body main .sidebar svg {\r\n    width: 75%;\r\n  }\r\n  * body main .sidebar .gamelog {\r\n    margin-top: 1rem;\r\n  }\r\n}\r\n\r\n* body main .stats-container {\r\n  background-color: white;\r\n  border-radius: 5000px;\r\n  position: absolute;\r\n  bottom: 5%;\r\n  left: 5%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding: 1rem 3rem;\r\n}\r\n\r\n* body main .stats-container div {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin-left: 2rem;\r\n}\r\n\r\n* body main .trees {\r\n  margin-left: 0 !important;\r\n}\r\n\r\n* body main .stats-container p, * body main .stats-container a {\r\n  color: #003B4A;\r\n  font-size: 3rem;\r\n  padding: 0 1rem;\r\n  text-decoration: none;\r\n  font-weight: 300;\r\n}\r\n\r\n* body main .player-name {\r\n  padding-right: 0 !important;\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  * body main .stats-container {\r\n    margin: 1rem;\r\n    width: calc(100% - 2rem);\r\n    bottom: 0;\r\n    left: 0;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n  * body main .stats-container p, * body main .stats-container a {\r\n    font-size: 1.8rem;\r\n    padding: 0 1rem;\r\n  }\r\n  * body main .stats-container svg {\r\n    width: 50%;\r\n    min-width: 3rem;\r\n  }\r\n}\r\n/*# sourceMappingURL=style.css.map */',"",{version:3,sources:["webpack://./styles/style.scss","webpack://./styles/style.css","webpack://./styles/partials/_header.scss","webpack://./styles/partials/_login.scss","webpack://./styles/partials/_map.scss","webpack://./styles/partials/_sidebar.scss","webpack://./styles/partials/_statbar.scss"],names:[],mappings:"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",sourceRoot:""}]);const B=o},4697:(A,n,r)=>{var e=r(6062),i=r.n(e),t=r(4036),o=r.n(t),B=r(6793),a=r.n(B),s=r(7892),E=r.n(s),l=r(1173),d=r.n(l),C=r(2464),b=r.n(C),m=r(6931),c={};c.styleTagTransform=b(),c.setAttributes=E(),c.insert=a().bind(null,"head"),c.domAPI=o(),c.insertStyleElement=d(),i()(m.Z,c),m.Z&&m.Z.locals&&m.Z.locals}},A=>{A.O(0,[5982,4660,6505,5717,6172,8935,7175,3057,8803,4969,8171,6706,8744,3312,8933,410,2231,4122,2454,496,6430,2056,5629,9755,8874,1385,5432,3421,6165,7627,603,7925,9102,7941,9527,2397,3386,9786,3847,2671,4817,8612,335,675,3668,717,3259,2538,2655,3642,3655,9025,5738,607,3949,5990,9230,7612,290,5403,7982,6707,3918,9690,6552,2037,4047,8337],(()=>(8488,A(A.s=8488)))),A.O()}]);