(self.webpackChunkdivyangi_portfolio=self.webpackChunkdivyangi_portfolio||[]).push([[678],{4009:function(e,t,n){var r;n(4944),n(3792),e.exports=(r=n(7294),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/react-skills/",n(n.s=1)}([function(e,t){e.exports=r},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){var t=e.name,n=e.level,i=e.color,c=e.height,l=e.labelWidth,u=e.customLabel,s=e.duration,f=e.levelProgress,m=e.flat,p=a(Object(r.useState)(!1),2),d=p[0],v=p[1],h=a(Object(r.useState)(0),2),b=h[0],y=h[1],g={root:{display:"flex",borderRadius:3,backgroundColor:"rgba(0,0,0,0)",boxShadow:m?"none":"3px 3px 5px 0px #252525"},labelContainer:{whiteSpace:"nowrap",textAlign:"center",width:l,height:c,borderRadius:3,backgroundColor:i,color:"white",lineHeight:"".concat(c,"px"),margin:0,padding:0,fontSize:14},label:{margin:0,color:"white",backgroundColor:"rgb(0, 0, 0, 0.2)"},barContainer:{flexGrow:1,borderRadius:3,backgroundColor:"white",textAlign:"left"},progressBar:{borderRadius:3,height:c,transition:"width "+s+"s",width:"".concat(d?n:0,"%"),backgroundColor:i},level:{fontSize:14,position:"absolute",lineHeight:"".concat(c,"px"),marginLeft:10,color:"white",fontWeight:"bold"}},E=Object(r.useRef)(null),x=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e;return v(!0),b<n&&(e=setInterval((function(){var e=getComputedStyle(E.current).width,t=getComputedStyle(x.current).width,r=Math.ceil(parseInt(e.substr(0,e.length-1),10)/parseInt(t.substr(0,t.length-1),10)*100);y(r=r>n?n:r)}),20)),function(){clearInterval(e)}}),[b,s,n]),o.a.createElement("div",{style:g.root},o.a.createElement("div",{style:g.labelContainer},u||o.a.createElement("h5",{style:g.label},t)),o.a.createElement("div",{ref:x,style:g.barContainer},o.a.createElement("span",{style:g.level},f?b:n,"%"),o.a.createElement("div",{ref:E,style:g.progressBar})))}function l(e){var t=e.skills,n=e.duration,r=e.barsHeight,i=e.spacing,a=e.labelsWidth,l=e.customLabels,u=e.levelProgress,s=e.flat,f={root:{margin:5},skill:{marginBottom:i}};return o.a.createElement("div",{style:f.root},t.map((function(e,t){return o.a.createElement("div",{style:f.skill,key:e.name},o.a.createElement(c,{flat:s,levelProgress:u,duration:n,customLabel:l?l(e):null,labelWidth:a,height:r,name:e.name,level:e.level,color:e.color}))})))}c.defaultProps={height:30,duration:2,levelProgress:!1,flat:!1,labelWidth:100,customLabel:null},l.defaultProps={duration:2,levelProgress:!1,flat:!1,barsHeight:30,labelsWidth:100,spacing:15,customLabels:null},n.d(t,"SkillBars",(function(){return l})),n.d(t,"SkillBar",(function(){return c})),t.default=l}]))},9662:function(e,t,n){var r=n(7854),o=n(614),i=n(6330),a=r.TypeError;e.exports=function(e){if(o(e))return e;throw a(i(e)+" is not a function")}},1223:function(e,t,n){var r=n(5112),o=n(30),i=n(3070),a=r("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),e.exports=function(e){c[a][e]=!0}},9670:function(e,t,n){var r=n(7854),o=n(111),i=r.String,a=r.TypeError;e.exports=function(e){if(o(e))return e;throw a(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),o=n(1400),i=n(6244),a=function(e){return function(t,n,a){var c,l=r(t),u=i(l),s=o(a,u);if(e&&n!=n){for(;u>s;)if((c=l[s++])!=c)return!0}else for(;u>s;s++)if((e||s in l)&&l[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},7475:function(e,t,n){var r=n(7854),o=n(3157),i=n(4411),a=n(111),c=n(5112)("species"),l=r.Array;e.exports=function(e){var t;return o(e)&&(t=e.constructor,(i(t)&&(t===l||o(t.prototype))||a(t)&&null===(t=t[c]))&&(t=void 0)),void 0===t?l:t}},5417:function(e,t,n){var r=n(7475);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},648:function(e,t,n){var r=n(7854),o=n(1694),i=n(614),a=n(4326),c=n(5112)("toStringTag"),l=r.Object,u="Arguments"==a(function(){return arguments}());e.exports=o?a:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=l(e),c))?n:u?a(t):"Object"==(r=a(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),o=n(3887),i=n(1236),a=n(3070);e.exports=function(e,t){for(var n=o(t),c=a.f,l=i.f,u=0;u<n.length;u++){var s=n[u];r(e,s)||c(e,s,l(t,s))}}},8880:function(e,t,n){var r=n(9781),o=n(3070),i=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,o,i=n(7854),a=n(8113),c=i.process,l=i.Deno,u=c&&c.versions||l&&l.version,s=u&&u.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),o=n(1236).f,i=n(8880),a=n(1320),c=n(3505),l=n(9920),u=n(4705);e.exports=function(e,t){var n,s,f,m,p,d=e.target,v=e.global,h=e.stat;if(n=v?r:h?r[d]||c(d,{}):(r[d]||{}).prototype)for(s in t){if(m=t[s],f=e.noTargetGet?(p=o(n,s))&&p.value:n[s],!u(v?s:d+(h?".":"#")+s,e.forced)&&void 0!==f){if(typeof m==typeof f)continue;l(m,f)}(e.sham||f&&f.sham)&&i(m,"sham",!0),a(n,s,m,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},6790:function(e,t,n){"use strict";var r=n(7854),o=n(3157),i=n(6244),a=n(9974),c=r.TypeError,l=function(e,t,n,r,u,s,f,m){for(var p,d,v=u,h=0,b=!!f&&a(f,m);h<r;){if(h in n){if(p=b?b(n[h],h,t):n[h],s>0&&o(p))d=i(p),v=l(e,t,p,d,v,s-1)-1;else{if(v>=9007199254740991)throw c("Exceed the acceptable array length");e[v]=p}v++}h++}return v};e.exports=l},9974:function(e,t,n){var r=n(1702),o=n(9662),i=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:i?i(e,t):function(){return e.apply(t,arguments)}}},6916:function(e){var t=Function.prototype.call;e.exports=t.bind?t.bind(t):function(){return t.apply(t,arguments)}},6530:function(e,t,n){var r=n(9781),o=n(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),l=c&&"something"===function(){}.name,u=c&&(!r||r&&a(i,"name").configurable);e.exports={EXISTS:c,PROPER:l,CONFIGURABLE:u}},1702:function(e){var t=Function.prototype,n=t.bind,r=t.call,o=n&&n.bind(r);e.exports=n?function(e){return e&&o(r,e)}:function(e){return e&&function(){return r.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),o=n(7293),i=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(7854),o=n(1702),i=n(7293),a=n(4326),c=r.Object,l=o("".split);e.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(e){return"String"==a(e)?l(e,""):c(e)}:c},2788:function(e,t,n){var r=n(1702),o=n(614),i=n(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return a(e)}),e.exports=i.inspectSource},9909:function(e,t,n){var r,o,i,a=n(8536),c=n(7854),l=n(1702),u=n(111),s=n(8880),f=n(2597),m=n(5465),p=n(6200),d=n(3501),v="Object already initialized",h=c.TypeError,b=c.WeakMap;if(a||m.state){var y=m.state||(m.state=new b),g=l(y.get),E=l(y.has),x=l(y.set);r=function(e,t){if(E(y,e))throw new h(v);return t.facade=e,x(y,e,t),t},o=function(e){return g(y,e)||{}},i=function(e){return E(y,e)}}else{var w=p("state");d[w]=!0,r=function(e,t){if(f(e,w))throw new h(v);return t.facade=e,s(e,w,t),t},o=function(e){return f(e,w)?e[w]:{}},i=function(e){return f(e,w)}}e.exports={set:r,get:o,has:i,enforce:function(e){return i(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!u(t)||(n=o(t)).type!==e)throw h("Incompatible receiver, "+e+" required");return n}}}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e){e.exports=function(e){return"function"==typeof e}},4411:function(e,t,n){var r=n(1702),o=n(7293),i=n(614),a=n(648),c=n(5005),l=n(2788),u=function(){},s=[],f=c("Reflect","construct"),m=/^\s*(?:class|function)\b/,p=r(m.exec),d=!m.exec(u),v=function(e){if(!i(e))return!1;try{return f(u,s,e),!0}catch(t){return!1}};e.exports=!f||o((function(){var e;return v(v.call)||!v(Object)||!v((function(){e=!0}))||e}))?function(e){if(!i(e))return!1;switch(a(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!p(m,l(e))}:v},4705:function(e,t,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,a=function(e,t){var n=l[c(e)];return n==s||n!=u&&(o(t)?r(t):!!t)},c=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},l=a.data={},u=a.NATIVE="N",s=a.POLYFILL="P";e.exports=a},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(7854),o=n(5005),i=n(614),a=n(7976),c=n(3307),l=r.Object;e.exports=c?function(e){return"symbol"==typeof e}:function(e){var t=o("Symbol");return i(t)&&a(t.prototype,l(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},133:function(e,t,n){var r=n(7392),o=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),o=n(614),i=n(2788),a=r.WeakMap;e.exports=o(a)&&/native code/.test(i(a))},30:function(e,t,n){var r,o=n(9670),i=n(6048),a=n(748),c=n(3501),l=n(490),u=n(317),s=n(6200),f=s("IE_PROTO"),m=function(){},p=function(e){return"<script>"+e+"</"+"script>"},d=function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t},v=function(){try{r=new ActiveXObject("htmlfile")}catch(o){}var e,t;v="undefined"!=typeof document?document.domain&&r?d(r):((t=u("iframe")).style.display="none",l.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F):d(r);for(var n=a.length;n--;)delete v.prototype[a[n]];return v()};c[f]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m.prototype=o(e),n=new m,m.prototype=null,n[f]=e):n=v(),void 0===t?n:i(n,t)}},6048:function(e,t,n){var r=n(9781),o=n(3070),i=n(9670),a=n(5656),c=n(1956);e.exports=r?Object.defineProperties:function(e,t){i(e);for(var n,r=a(t),l=c(t),u=l.length,s=0;u>s;)o.f(e,n=l[s++],r[n]);return e}},3070:function(e,t,n){var r=n(7854),o=n(9781),i=n(4664),a=n(9670),c=n(4948),l=r.TypeError,u=Object.defineProperty;t.f=o?u:function(e,t,n){if(a(e),t=c(t),a(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),o=n(6916),i=n(5296),a=n(9114),c=n(5656),l=n(4948),u=n(2597),s=n(4664),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=c(e),t=l(t),s)try{return f(e,t)}catch(n){}if(u(e,t))return a(!o(i.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),o=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),i=n(5656),a=n(1318).indexOf,c=n(3501),l=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,s=[];for(n in r)!o(c,n)&&o(r,n)&&l(s,n);for(;t.length>u;)o(r,n=t[u++])&&(~a(s,n)||l(s,n));return s}},1956:function(e,t,n){var r=n(6324),o=n(748);e.exports=Object.keys||function(e){return r(e,o)}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2140:function(e,t,n){var r=n(7854),o=n(6916),i=n(614),a=n(111),c=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&i(n=e.toString)&&!a(r=o(n,e)))return r;if(i(n=e.valueOf)&&!a(r=o(n,e)))return r;if("string"!==t&&i(n=e.toString)&&!a(r=o(n,e)))return r;throw c("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),o=n(1702),i=n(8006),a=n(5181),c=n(9670),l=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(c(e)),n=a.f;return n?l(t,n(e)):t}},1320:function(e,t,n){var r=n(7854),o=n(614),i=n(2597),a=n(8880),c=n(3505),l=n(2788),u=n(9909),s=n(6530).CONFIGURABLE,f=u.get,m=u.enforce,p=String(String).split("String");(e.exports=function(e,t,n,l){var u,f=!!l&&!!l.unsafe,d=!!l&&!!l.enumerable,v=!!l&&!!l.noTargetGet,h=l&&void 0!==l.name?l.name:t;o(n)&&("Symbol("===String(h).slice(0,7)&&(h="["+String(h).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||s&&n.name!==h)&&a(n,"name",h),(u=m(n)).source||(u.source=p.join("string"==typeof h?h:""))),e!==r?(f?!v&&e[t]&&(d=!0):delete e[t],d?e[t]=n:a(e,t,n)):d?e[t]=n:c(t,n)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||l(this)}))},4488:function(e,t,n){var r=n(7854).TypeError;e.exports=function(e){if(null==e)throw r("Can't call method on "+e);return e}},3505:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6200:function(e,t,n){var r=n(2309),o=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3505),i="__core-js_shared__",a=r[i]||o(i,{});e.exports=a},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.19.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(e,t,n){var r=n(9303),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){var r=+e;return r!=r||0===r?0:(r>0?n:t)(r)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(7854),o=n(4488),i=r.Object;e.exports=function(e){return i(o(e))}},7593:function(e,t,n){var r=n(7854),o=n(6916),i=n(111),a=n(2190),c=n(8173),l=n(2140),u=n(5112),s=r.TypeError,f=u("toPrimitive");e.exports=function(e,t){if(!i(e)||a(e))return e;var n,r=c(e,f);if(r){if(void 0===t&&(t="default"),n=o(r,e,t),!i(n)||a(n))return n;throw s("Can't convert object to primitive value")}return void 0===t&&(t="number"),l(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},6330:function(e,t,n){var r=n(7854).String;e.exports=function(e){try{return r(e)}catch(t){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,i=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(e,t,n){var r=n(7854),o=n(2309),i=n(2597),a=n(9711),c=n(133),l=n(3307),u=o("wks"),s=r.Symbol,f=s&&s.for,m=l?s:s&&s.withoutSetter||a;e.exports=function(e){if(!i(u,e)||!c&&"string"!=typeof u[e]){var t="Symbol."+e;c&&i(s,e)?u[e]=s[e]:u[e]=l&&f?f(t):m(t)}return u[e]}},4944:function(e,t,n){"use strict";var r=n(2109),o=n(6790),i=n(7908),a=n(6244),c=n(9303),l=n(5417);r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=i(this),n=a(t),r=l(t,0);return r.length=o(r,t,t,n,0,void 0===e?1:c(e)),r}})},3792:function(e,t,n){n(1223)("flat")},8867:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.r(t),n.d(t,{default:function(){return x}});var o=n(1721),i=n(7294),a=n(4252),c=n.p+"static/divyangi-mahajan-7b06069443c57538490ede2b9ee6ea13.pdf",l=function(e){return i.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},i.createElement("div",{className:"logo"},i.createElement("span",null,i.createElement("img",{className:"logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABFBAMAAAAmz9zMAAAAGFBMVEX////8+/z9/P3+/v79+/3+/f79/f38+vxHBd1IAAAAAXRSTlMAQObYZgAAAUlJREFUSIntlLFOwzAQhi8E22slhq5IILIiMWStQGpWL1VXD6hZm0Lx6+M736UB7JAFsfiG2Hf+fD7bvwNQrNi/W++D7XavWxt9jb5/49E29AfHzjWOPAI0/mUSeJ8kkmkxS0ArL+yaIz/QmgdUaNy4qN9QV7VTFCRHaE4UMJditUminaQ1zVisSqONRI0Zi7VptJdcRo/FujS6l44BKbbOZKWNO0JlAQUz6IbQSg4wg9JmVoQqnvU0hx4JpQsLhF2A7mOxS1CSjFWwACVhrBahdMvnOodODoslbWdRx+gVO79e7CWal8uAgZZ1NkAORRGeMdC7yHxkUdz0LQY6/Go+DZ94WzBKnxjg00ihSpJqLsPb7+jkcROCh4ZNRd8vqGiz89u4yjpKUZ14HmcII7gbfzjcP8cfkSb/IfRu0EM1+jsoVqxYsb+zT1Sz5OKPIqsfAAAAAElFTkSuQmCC",alt:"DM",width:"60",height:"90"}))),i.createElement("div",{className:"content"},i.createElement("div",{className:"inner"},i.createElement("h1",null,"Divyangi Mahajan"),i.createElement("p",null,"A full stack developer and Devops Engineer"),i.createElement("ul",{className:"icons"},i.createElement("li",null,i.createElement("a",{href:"https://www.linkedin.com/in/divyangi-mahajan",className:"icon fa-linkedin"},i.createElement("span",{className:"label"},"Instagram"))),i.createElement("li",null,i.createElement("a",{href:"https://www.github.com/divyangi-mhjn",className:"icon fa-github"},i.createElement("span",{className:"label"},"GitHub"))),i.createElement("li",null,i.createElement("a",{href:"https://www.facebook.com/divyangi.mahajan",className:"icon fa-facebook"},i.createElement("span",{className:"label"},"Facebook")))))),i.createElement("nav",null,i.createElement("ul",null,i.createElement("li",null,i.createElement("button",{onClick:function(){e.onOpenArticle("intro")}},"Intro")),i.createElement("li",null,i.createElement("button",{onClick:function(){e.onOpenArticle("work")}},"Work")),i.createElement("li",null,i.createElement("button",{onClick:function(){e.onOpenArticle("skills")}},"Skills")),i.createElement("li",null,i.createElement("button",{onClick:function(){e.onOpenArticle("contact")}},"Contact")),i.createElement("li",null,i.createElement("a",{href:c,download:!0}," ",i.createElement("button",null,"Download"))))))},u=n.p+"static/my-img-bf6d8cefcc9be32d0a8a04906b7281ee.jpg",s={_origin:"https://api.emailjs.com"},f=function(e,t,n){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};var m=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t.status,this.text=t.responseText},p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,o){var i=new XMLHttpRequest;i.addEventListener("load",(function(e){var t=e.target,n=new m(t);200===n.status||"OK"===n.text?r(n):o(n)})),i.addEventListener("error",(function(e){var t=e.target;o(new m(t))})),i.open("POST",s._origin+e,!0),Object.keys(n).forEach((function(e){i.setRequestHeader(e,n[e])})),i.send(t)}))},d=function(e,t,n,r){var o=r||s._userID,i=function(e){var t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(n);f(o,e,t);var a=new FormData(i);return a.append("lib_version","3.2.0"),a.append("service_id",e),a.append("template_id",t),a.append("user_id",o),p("/api/v1.0/email/send-form",a)},v=function(){var e=(0,i.useRef)();return i.createElement("form",{ref:e,onSubmit:function(t){t.preventDefault(),d("service_mhf2z39","template_tohe38n",e.current,"user_na2bAwclyQehOJE8KCIhP").then((function(t){"OK"==t.text&&(e.current.reset(),alert("Email sent successfully"))}),(function(e){console.log(e.text)}))}},i.createElement("div",{className:"field half first"},i.createElement("label",{htmlFor:"user_name"},"Name"),i.createElement("input",{type:"text",name:"user_name"})),i.createElement("div",{className:"field half"},i.createElement("label",{htmlFor:"user_email"},"Email"),i.createElement("input",{type:"email",name:"user_email"})),i.createElement("div",{className:"field"},i.createElement("label",{htmlFor:"message"},"Message"),i.createElement("textarea",{name:"message",rows:"4"})),i.createElement("ul",{className:"actions"},i.createElement("li",null,i.createElement("input",{type:"submit",value:"Send"})),i.createElement("li",null,"      ",i.createElement("input",{type:"reset",value:"Reset"}))))},h=n(4009),b=function(){return i.createElement(h.SkillBars,{skills:[{name:"ReactJS",level:85,color:"#66ccff"},{name:"NodeJS",level:70,color:"#00e6b8"},{name:"Javascript",level:85,color:"#66ccff"},{name:"PostreSql",level:85,color:"#00e6b8"},{name:"Oracle DB",level:60,color:"#66ccff"},{name:"Redux",level:85,color:"#00e6b8"},{name:"Java",level:85,color:"#66ccff"},{name:"Contentful",level:90,color:"#00e6b8"},{name:"AWS service",level:60,color:"#66ccff"},{name:"Agile",level:90,color:"#00e6b8"},{name:"Devops",level:70,color:"#66ccff"},{name:"Heroku",level:90,color:"#00e6b8"},{name:"Gatsby.JS",level:60,color:"#66ccff"}]})},y=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this,t=i.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return i.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex",width:"100vw",height:"100vh"}:{display:"none"}},i.createElement("article",{id:"intro",className:("intro"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.createElement("div",null,i.createElement("h2",{className:"major"},"Introduction"),i.createElement("span",{className:"image-main"},i.createElement("img",{src:u,alt:"",height:"25%",width:"40%",style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"50%"}})),i.createElement("p",null,"Hey There!"),i.createElement("p",null," I’m a Tech-savvy developer with 3+ years of experience for collaborating and working on multiple web-based projects. Passionate, hardworking coder with penchant for developing customized interfaces that factor in unique demands for accessibility, reachability and security. Organized approach to meeting multiple, concurrent deadlines."),i.createElement("p",null,"I am Passionate for web development. My best assets are my creativity, my feeling with technology and my passion."),i.createElement("p",null,"I completed my Bachelor's of technology in Computer Sciences from Kurukshetra university with an honour's degree in 2018. I worked for Skill Lotto Solutions from Jun 2018-Feb 2019 as an Application Developer and currently I am working with Tata Consultancy Services and an Application Developer since March 2019."),t)),i.createElement("article",{id:"work",className:("work"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.createElement("h2",{className:"major"},"Work Experience"),i.createElement("div",{className:"image-main",style:{display:"grid",gridTemplateColumns:"3fr 1fr"}},i.createElement("div",{style:{paddingTop:"20px"}}," ",i.createElement("h3",{className:"text-sm font-normal mb-1"},"Tata Consultancy Services"),i.createElement("span",{className:"text-sm font-medium opacity-50"},"Application Developer ")),i.createElement("div",{style:{paddingTop:"20px"}},i.createElement("h3",{className:"text-lg font-large mb-1"},"Mar 2019 - Present"))),i.createElement("hr",null),i.createElement("div",{style:{display:"grid",gridTemplateColumns:"3fr 1fr"}},i.createElement("div",null," ",i.createElement("h3",{className:"text-sm font-normal mb-1"},"Skill Lotto Solutions"),i.createElement("span",{className:"text-sm font-medium opacity-50"},"Application Developer")),i.createElement("div",null," ",i.createElement("h3",{className:"text-sm font-normal mb-1"},"Jun 2018 - Feb 2019"))),t),i.createElement("article",{id:"skills",className:("skills"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.createElement("h2",{className:"major"},"Skills Summary"),i.createElement("div",{className:"image-main"}," ",i.createElement(b,null)),t),i.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.createElement("h2",{className:"major"},"Contact"),i.createElement("div",{className:"image-main"},i.createElement(v,null)),t))},t}(i.Component),g=y,E=function(e){return i.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},i.createElement("p",{className:"copyright"},"©Divyangi Mahajan. "))},x=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},n.handleOpenArticle=n.handleOpenArticle.bind(r(n)),n.handleCloseArticle=n.handleCloseArticle.bind(r(n)),n.setWrapperRef=n.setWrapperRef.bind(r(n)),n.handleClickOutside=n.handleClickOutside.bind(r(n)),n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},n.setWrapperRef=function(e){this.wrapperRef=e},n.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout((function(){t.setState({timeout:!t.state.timeout})}),325),setTimeout((function(){t.setState({articleTimeout:!t.state.articleTimeout})}),350)},n.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((function(){e.setState({timeout:!e.state.timeout})}),325),setTimeout((function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})}),350)},n.handleClickOutside=function(e){},n.render=function(){return i.createElement(a.Z,{location:this.props.location},i.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},i.createElement("div",{id:"wrapper",style:{display:"flex",width:"100%",position:"relative",margin:"0px"}},i.createElement(l,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),i.createElement(g,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),i.createElement(E,{timeout:this.state.timeout})),i.createElement("div",{id:"bg"})))},t}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-9df125dfd84fb88ff099.js.map