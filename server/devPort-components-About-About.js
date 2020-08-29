exports.ids=[1],exports.modules={16:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(1),o=t(22),c=t.n(o),s=t(30),l=t.n(s),u=function(){return c()(l.a),r.a.createElement("div",{className:l.a.aboutDisplay},r.a.createElement("h1",null,"About Me"),r.a.createElement("div",{className:l.a.abPar},r.a.createElement("p",null,"I'm a web developer living in Wisconsin, USA! A fully customized website stands out, providing many benefits like the freedom to do what you want and show your customers who you are."),r.a.createElement("br",null),r.a.createElement("p",null,"Check out my calendar project... ",r.a.createElement("b",{style:{color:"seagreen"}},"more are on the way... ")," and get in touch with me via email if you'd like me to assist you in bringing your ideas to life!")),r.a.createElement("div",{className:l.a.emailLink},r.a.createElement(i.Link,{to:"/contact",style:{textDecoration:"none",color:"seagreen",fontSize:40}},"Email Me!")))};n.default=function(){return c()(l.a),r.a.createElement("div",{className:l.a.about},r.a.createElement(u,null))}},25:function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",a=e[3];if(!a)return t;if(n&&"function"==typeof btoa){var r=(o=a,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([r]).join("\n")}var o,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);a&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},26:function(e,n,t){"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */var a={};function r(e){e.forEach((function(e){if(--a[e]<=0){var n=document.getElementById(e);n&&n.parentNode.removeChild(n)}}))}e.exports=function(e,n){for(var t,i=void 0===n?{}:n,o=i.replace,c=void 0!==o&&o,s=i.prepend,l=void 0!==s&&s,u=i.prefix,f=void 0===u?"s":u,d=[],m=0;m<e.length;m++){var p=e[m],g=p[0],h=p[1],v=p[2],y=p[3],b=""+f+g+"-"+m;if(d.push(b),!a[b]||c){a[b]=1;var j=document.getElementById(b),x=!1;j||(x=!0,(j=document.createElement("style")).setAttribute("type","text/css"),j.id=b,v&&j.setAttribute("media",v));var C=h;y&&"function"==typeof btoa&&(C+="\n/*# sourceMappingURL=data:application/json;base64,"+(t=JSON.stringify(y),btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g,(function(e,n){return String.fromCharCode("0x"+n)})))+"*/"),C+="\n/*# sourceURL="+y.file+"?"+b+"*/"),"textContent"in j?j.textContent=C:j.styleSheet.cssText=C,x&&(l?document.head.insertBefore(j,document.head.childNodes[0]):document.head.appendChild(j))}else a[b]++}return r.bind(null,d)}},30:function(e,n,t){var a=t(38),r=t(26),i="string"==typeof a?[[e.i,a,""]]:a;(n=e.exports=a.locals||{})._getContent=function(){return i},n._getCss=function(){return""+a},n._insertCss=function(e){return r(i,e)}},38:function(e,n,t){(n=t(25)(!1)).push([e.i,"._33UCBZlXaHYuiC7TSTX3B5 {\n    display: grid;\n    grid-template: 10% 80% 10%/20% 60% 20%;\n    height: 100%;\n    width: 100%;\n    margin-top: 1%;\n}\n._dBZFgFwUnj-O-KTthZGe {\n    display: grid;\n    grid-template: 1.2fr 3fr 1.5fr/1fr;\n    width: 100%;\n    height: 95%;\n    align-self: center;\n    justify-self: center;\n    grid-area: 1/2/3/3;\n}\n._dBZFgFwUnj-O-KTthZGe h1 {\n    grid-area: 1/1/2/2;\n    font-size: 5.5rem;\n    text-shadow: 0.5px 1.2px #fffbee;\n    font-family: Poppins, sans-serif;\n    font-weight: 700;\n    color: #8872ad;\n    justify-self: center;\n    align-self: center;\n    text-align: center;\n}\n.ZvJKsZ2Hb7PWdC4jl5X-1 {\n    grid-area: 2/1/3/4;\n    font-size: 2rem;\n    font-family: Poppins, sans-serif;\n    line-height: 1.4;\n    color: #fffbee;\n}\n._1L4JoPNeRj3UOEyq_e40pN {\n    grid-area: 3/1/4/2;\n    justify-self: center;\n    align-self: center;\n    text-align: center;\n}\n@media only screen and (min-device-width: 768px) {\n    ._dBZFgFwUnj-O-KTthZGe {\n        grid-template: 1.5fr 3fr 1.5fr/1fr;\n    }\n    ._dBZFgFwUnj-O-KTthZGe h1 {\n        font-size: 3.5rem;\n        margin-bottom: 2%;\n    }\n    .ZvJKsZ2Hb7PWdC4jl5X-1 {\n        font-size: 1.6rem;\n        line-height: 1.3;\n    }\n}",""]),n.locals={about:"_33UCBZlXaHYuiC7TSTX3B5",aboutDisplay:"_dBZFgFwUnj-O-KTthZGe",abPar:"ZvJKsZ2Hb7PWdC4jl5X-1",emailLink:"_1L4JoPNeRj3UOEyq_e40pN"},e.exports=n}};