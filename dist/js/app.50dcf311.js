(function(e){function t(t){for(var c,o,l=t[0],i=t[1],u=t[2],s=0,v=[];s<l.length;s++)o=l[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(t);while(v.length)v.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],c=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(c=!1)}c&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var c={},r={app:0},n=[];function o(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c4e4d8bf"}[e]+".js"}function l(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,c){a=r[e]=[t,c]}));t.push(a[2]=c);var n,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=o(e);var u=new Error;n=function(t){i.onerror=i.onload=null,clearTimeout(s);var a=r[e];if(0!==a){if(a){var c=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+n+")",u.name="ChunkLoadError",u.type=c,u.request=n,a[1](u)}r[e]=void 0}};var s=setTimeout((function(){n({type:"timeout",target:i})}),12e4);i.onerror=i.onload=n,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=c,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(a,c,function(t){return e[t]}.bind(null,c));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-project-v3/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=u;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0eec":function(e,t,a){"use strict";a("2255")},"17be":function(e,t,a){e.exports=a.p+"img/logo.43ea859a.jpg"},2255:function(e,t,a){},"4d8e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("ab8b"),a("7b17");var c=a("7a23"),r={id:"nav"},n=Object(c["g"])("Home"),o=Object(c["g"])(" | "),l=Object(c["g"])("About");function i(e,t,a,i,u,s){var f=Object(c["w"])("Nav"),v=Object(c["w"])("router-link"),b=Object(c["w"])("router-view"),d=Object(c["w"])("Footer");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["h"])(f),Object(c["e"])("div",r,[Object(c["h"])(v,{to:"/"},{default:Object(c["B"])((function(){return[n]})),_:1}),o,Object(c["h"])(v,{to:"/about"},{default:Object(c["B"])((function(){return[l]})),_:1})]),Object(c["h"])(b),Object(c["h"])(d)],64)}var u=a("17be"),s=a.n(u);Object(c["t"])("data-v-cce869fa");var f={class:"container-fluid"},v=Object(c["e"])("div",{class:"navbar px-3 line"},[Object(c["e"])("div",{class:"menubtn","data-bs-toggle":"offcanvas","data-bs-target":"#menubtn"},[Object(c["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35px",fill:"currentColor",class:"bi bi-list",viewBox:"0 0 16 16"},[Object(c["e"])("path",{"fill-rule":"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})])]),Object(c["e"])("div",{class:"logo"},[Object(c["e"])("a",{href:"#"},[Object(c["e"])("img",{src:s.a,alt:"logo"})])]),Object(c["e"])("div",{class:"nav-right"},[Object(c["e"])("div",{class:"cart"},[Object(c["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35px",fill:"currentColor",class:"bi bi-bag",viewBox:"0 0 16 16"},[Object(c["e"])("path",{d:"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"})])])])],-1),b=Object(c["e"])("div",{class:"offcanvas offcanvas-start p-3","data-bs-scroll":"true",id:"menubtn"},[Object(c["e"])("div",{class:"btn text-reset text-end","data-bs-dismiss":"offcanvas"},[Object(c["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40px",height:"40px",fill:"currentColor",class:"bi bi-x",viewBox:"0 0 16 16"},[Object(c["e"])("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})])]),Object(c["e"])("ul",{class:"sidebarList text-uppercase text-decoration-none fs-5 list-unstyled"},[Object(c["e"])("li",null,"Home"),Object(c["e"])("li",null,"Product - 產品"),Object(c["e"])("li",null,"About - 關於"),Object(c["e"])("li",null,"Contact - 聯絡"),Object(c["e"])("li",null,"Class - 課程"),Object(c["e"])("li",null,"Login - 登入")])],-1),d=[v,b];function p(e,t,a,r,n,o){return Object(c["q"])(),Object(c["d"])("div",f,d)}Object(c["r"])();var h={name:"nav",data:function(){return{}},methods:{toggleMenu:function(){}}};a("e3c3");h.render=p,h.__scopeId="data-v-cce869fa";var g=h,j=Object(c["f"])('<div class="container-fluid"><ul class="contactLogo list-unstyled"><li><a href="mailto:kikimiao1995@gmail.com"><i class="bi bi-envelope-fill"></i></a></li><li><a href="https://github.com/kikmiao1995"><i class="bi bi-github"></i></a></li><li><a href="tel:+886-975126187"><i class="bi bi-telephone-fill"></i></a></li></ul><p>©Copright 2021-Aug kikimiao1995</p><p>Dian la 網頁僅供個人作品使用，不做商業使用</p></div>',1),m=[j];function O(e,t,a,r,n,o){return Object(c["q"])(),Object(c["d"])("footer",null,m)}var w={name:"footer"};a("0eec");w.render=O;var k=w,x={name:"App",components:{Nav:g,Footer:k}};a("b2ab");x.render=i;var y=x,_=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),C=a("cf05"),H=a.n(C),L={class:"home"},P=Object(c["e"])("img",{alt:"Vue logo",src:H.a},null,-1);function M(e,t,a,r,n,o){var l=Object(c["w"])("HelloWorld");return Object(c["q"])(),Object(c["d"])("div",L,[P,Object(c["h"])(l,{msg:"Welcome to Your Vue.js App"})])}Object(c["t"])("data-v-5cc7f8f0");var z={class:"hello"},A=Object(c["f"])('<p data-v-5cc7f8f0> For a guide and recipes on how to configure / customize this project,<br data-v-5cc7f8f0> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>vue-cli documentation</a>. </p><h3 data-v-5cc7f8f0>Installed CLI Plugins</h3><ul data-v-5cc7f8f0><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-5cc7f8f0>babel</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-5cc7f8f0>router</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-5cc7f8f0>vuex</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-5cc7f8f0>eslint</a></li></ul><h3 data-v-5cc7f8f0>Essential Links</h3><ul data-v-5cc7f8f0><li data-v-5cc7f8f0><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>Core Docs</a></li><li data-v-5cc7f8f0><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>Forum</a></li><li data-v-5cc7f8f0><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>Community Chat</a></li><li data-v-5cc7f8f0><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-5cc7f8f0>Twitter</a></li><li data-v-5cc7f8f0><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>News</a></li></ul><h3 data-v-5cc7f8f0>Ecosystem</h3><ul data-v-5cc7f8f0><li data-v-5cc7f8f0><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>vue-router</a></li><li data-v-5cc7f8f0><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>vuex</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-5cc7f8f0>vue-devtools</a></li><li data-v-5cc7f8f0><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>vue-loader</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-5cc7f8f0>awesome-vue</a></li></ul>',7);function q(e,t,a,r,n,o){return Object(c["q"])(),Object(c["d"])("div",z,[Object(c["e"])("h1",null,Object(c["y"])(a.msg),1),A])}Object(c["r"])();var S={name:"HelloWorld",props:{msg:String}};a("7a76");S.render=q,S.__scopeId="data-v-5cc7f8f0";var V=S,B={name:"Home",components:{HelloWorld:V}};B.render=M;var E=B,T=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],F=Object(_["a"])({history:Object(_["b"])("/vue-project-v3/"),routes:T}),I=F,W=a("5502"),N=Object(W["a"])({state:{},mutations:{},actions:{},modules:{}});Object(c["c"])(y).use(N).use(I).mount("#app")},"7a76":function(e,t,a){"use strict";a("4d8e")},"903b":function(e,t,a){},b2ab:function(e,t,a){"use strict";a("903b")},beeb:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},e3c3:function(e,t,a){"use strict";a("beeb")}});
//# sourceMappingURL=app.50dcf311.js.map