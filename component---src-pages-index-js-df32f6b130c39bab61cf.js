(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"6LWA":function(e,t,n){var a=n("xrYK");e.exports=Array.isArray||function(e){return"Array"==a(e)}},"9d/t":function(e,t,n){var a=n("AO7/"),r=n("Fib7"),i=n("xrYK"),l=n("tiKp")("toStringTag"),o="Arguments"==i(function(){return arguments}());e.exports=a?i:function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),l))?n:o?i(t):"Object"==(a=i(t))&&r(t.callee)?"Arguments":a}},A2ZE:function(e,t,n){var a=n("We1y");e.exports=function(e,t,n){if(a(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,a){return e.call(t,n,a)};case 3:return function(n,a,r){return e.call(t,n,a,r)}}return function(){return e.apply(t,arguments)}}},"AO7/":function(e,t,n){var a={};a[n("tiKp")("toStringTag")]="z",e.exports="[object z]"===String(a)},BIHw:function(e,t,n){"use strict";var a=n("I+eb"),r=n("or9q"),i=n("ewvW"),l=n("UMSQ"),o=n("ppGB"),c=n("ZfDv");a({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=i(this),n=l(t.length),a=c(t,0);return a.length=r(a,t,t,n,0,void 0===e?1:o(e)),a}})},C0Ia:function(e,t,n){var a=n("6LWA"),r=n("aO6C"),i=n("hh1v"),l=n("tiKp")("species");e.exports=function(e){var t;return a(e)&&(t=e.constructor,(r(t)&&(t===Array||a(t.prototype))||i(t)&&null===(t=t[l]))&&(t=void 0)),void 0===t?Array:t}},GSDm:function(e,t,n){e.exports=n.p+"static/divyangi_mahajan-fc4f458ef51443afec6654eac29e58be.pdf"},RXBc:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.r(t);var r=n("dI71"),i=n("q1tI"),l=n.n(i),o=n("Bl7J"),c=n("ggp8"),s=n.n(c),u=function(e){return l.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},l.a.createElement("div",{className:"logo"},l.a.createElement("span",null,l.a.createElement("img",{className:"logo",src:s.a,alt:"DM",width:"60",height:"90"}))),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"inner"},l.a.createElement("h1",null,"Divyangi Mahajan"),l.a.createElement("p",null,"A full stack developer and Devops Engineer"),l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/divyangi-mahajan",className:"icon fa-linkedin"},l.a.createElement("span",{className:"label"},"Instagram"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.github.com/divyangi-mhjn",className:"icon fa-github"},l.a.createElement("span",{className:"label"},"GitHub"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/divyangi.mahajan",className:"icon fa-facebook"},l.a.createElement("span",{className:"label"},"Facebook")))))),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){e.onOpenArticle("intro")}},"Intro")),l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){e.onOpenArticle("work")}},"Work")),l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){e.onOpenArticle("skills")}},"Skills")),l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){e.onOpenArticle("contact")}},"Contact")),l.a.createElement("li",null,l.a.createElement("button",{onClick:function(e){window.open(n("GSDm"),"_none")}},"Download")))))},m=n("pLtG"),d=n.n(m),f={_origin:"https://api.emailjs.com"},p=function(e,t,n){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};var h=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t.status,this.text=t.responseText},b=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(a,r){var i=new XMLHttpRequest;i.addEventListener("load",(function(e){var t=e.target,n=new h(t);200===n.status||"OK"===n.text?a(n):r(n)})),i.addEventListener("error",(function(e){var t=e.target;r(new h(t))})),i.open("POST",f._origin+e,!0),Object.keys(n).forEach((function(e){i.setRequestHeader(e,n[e])})),i.send(t)}))},v=function(e,t,n,a){var r=a||f._userID,i=function(e){var t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(n);p(r,e,t);var l=new FormData(i);return l.append("lib_version","3.2.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",r),b("/api/v1.0/email/send-form",l)},g=function(){var e=Object(i.useRef)();return l.a.createElement("form",{ref:e,onSubmit:function(t){t.preventDefault(),v("service_mhf2z39","template_tohe38n",e.current,"user_na2bAwclyQehOJE8KCIhP").then((function(t){"OK"==t.text&&(e.current.reset(),alert("Email sent successfully"))}),(function(e){console.log(e.text)}))},afterSubmit:!0},l.a.createElement("div",{className:"field half first"},l.a.createElement("label",{htmlFor:"user_name"},"Name"),l.a.createElement("input",{type:"text",name:"user_name"})),l.a.createElement("div",{className:"field half"},l.a.createElement("label",{htmlFor:"user_email"},"Email"),l.a.createElement("input",{type:"email",name:"user_email"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("textarea",{name:"message",rows:"4"})),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement("input",{type:"submit",value:"Send"})),l.a.createElement("li",null,"      ",l.a.createElement("input",{type:"reset",value:"Reset"}))))},y=n("TZp7"),E=function(){return l.a.createElement(y.SkillBars,{skills:[{name:"ReactJS",level:85,color:"#66ccff"},{name:"NodeJS",level:70,color:"#00e6b8"},{name:"Javascript",level:85,color:"#66ccff"},{name:"PostreSql",level:85,color:"#00e6b8"},{name:"Oracle DB",level:60,color:"#66ccff"},{name:"Redux",level:85,color:"#00e6b8"},{name:"Java",level:85,color:"#66ccff"},{name:"Contentful",level:90,color:"#00e6b8"},{name:"AWS service",level:60,color:"#66ccff"},{name:"Agile",level:90,color:"#00e6b8"},{name:"Devops",level:70,color:"#66ccff"},{name:"Heroku",level:90,color:"#00e6b8"},{name:"Gatsby.JS",level:60,color:"#66ccff"}]})},A=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this,t=l.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return l.a.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",position:"relative",minHeight:"100vh",width:"100%",padding:"4rem 2rem","z-index":"3"}:{display:"none"}},l.a.createElement("article",{id:"intro",className:("intro"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},l.a.createElement("div",null,l.a.createElement("h2",{className:"major"},"Introduction"),l.a.createElement("span",{className:"image main"},l.a.createElement("img",{src:d.a,alt:""})),l.a.createElement("p",null,"Hey there!"),l.a.createElement("p",null," I’m a Tech-savvy developer with 3+ years of experience for collaborating and working on multiple web-based projects. Passionate, hardworking coder with penchant for developing customized interfaces that factor in unique demands for accessibility, reachability and security. Organized approach to meeting multiple, concurrent deadlines."),l.a.createElement("p",null,"I am Passionate for web development. My best assets are my creativity, my feeling with technology and my passion."),l.a.createElement("p",null,"I completed my Bachelor's in Computer asciences from Kurukshetra university with an honour's degree in 2018. I worked for Skill Lotto Solutions from Jun 2018-Feb 2019 as an Application Developer and currently I am working with Tata Consultancy Services and an Application Developer since March 2019."),t)),l.a.createElement("article",{id:"work",className:("work"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},l.a.createElement("h2",{className:"major"},"Work Experience"),l.a.createElement("div",{className:"image-main",style:{display:"grid",gridTemplateColumns:"1fr 3fr"}},l.a.createElement("div",{style:{marginTop:"30px",height:"35px",width:"35px",backgroundColor:"#bbb",borderRadius:"50%",display:"inline-block"}}),l.a.createElement("div",{style:{paddingTop:"20px"}}," ",l.a.createElement("h5",{className:"text-sm font-normal mb-1"},"Tata Consultancy Services"),l.a.createElement("span",{className:"text-sm font-medium opacity-50"},"Application Developer Since March-2019"))),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 3fr"}},l.a.createElement("div",{style:{borderLeft:"3px solid #bbb",height:"40px",marginLeft:"15px"}}),l.a.createElement("div",null)),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 3fr"}},l.a.createElement("div",{style:{height:"35px",width:"35px",backgroundColor:"#bbb",borderRadius:"50%",display:"inline-block"}}),l.a.createElement("div",null," ",l.a.createElement("h5",{className:"text-sm font-normal mb-1"},"Skill Lotto Solutions"),l.a.createElement("span",{className:"text-sm font-medium opacity-50"},"Application Developer From Jun 2018- Feb 2019"))),t),l.a.createElement("article",{id:"skills",className:("skills"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},l.a.createElement("h2",{className:"major"},"Skills Summary"),l.a.createElement("div",{className:"image-main"}," ",l.a.createElement(E,null)),t),l.a.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},l.a.createElement("h2",{className:"major"},"Contact"),l.a.createElement("div",{className:"image-main"},l.a.createElement(g,null)),t))},t}(l.a.Component),w=function(e){return l.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},l.a.createElement("p",{className:"copyright"},"©Divyangi Mahajan. "))},x=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},n.handleOpenArticle=n.handleOpenArticle.bind(a(n)),n.handleCloseArticle=n.handleCloseArticle.bind(a(n)),n.setWrapperRef=n.setWrapperRef.bind(a(n)),n.handleClickOutside=n.handleClickOutside.bind(a(n)),n}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},n.setWrapperRef=function(e){this.wrapperRef=e},n.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout((function(){t.setState({timeout:!t.state.timeout})}),325),setTimeout((function(){t.setState({articleTimeout:!t.state.articleTimeout})}),350)},n.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((function(){e.setState({timeout:!e.state.timeout})}),325),setTimeout((function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})}),350)},n.handleClickOutside=function(e){},n.render=function(){return l.a.createElement(o.a,{location:this.props.location},l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},l.a.createElement("div",{id:"wrapper"},l.a.createElement(u,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),l.a.createElement(A,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),l.a.createElement(w,{timeout:this.state.timeout})),l.a.createElement("div",{id:"bg"})))},t}(l.a.Component);t.default=x},TZp7:function(e,t,n){var a;n("BIHw"),e.exports=(a=n("q1tI"),function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/react-skills/",n(n.s=1)}([function(e,t){e.exports=a},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(c){r=!0,i=c}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){var t=e.name,n=e.level,i=e.color,o=e.height,c=e.labelWidth,s=e.customLabel,u=e.duration,m=e.levelProgress,d=e.flat,f=l(Object(a.useState)(!1),2),p=f[0],h=f[1],b=l(Object(a.useState)(0),2),v=b[0],g=b[1],y={root:{display:"flex",borderRadius:3,backgroundColor:"rgba(0,0,0,0)",boxShadow:d?"none":"3px 3px 5px 0px #252525"},labelContainer:{whiteSpace:"nowrap",textAlign:"center",width:c,height:o,borderRadius:3,backgroundColor:i,color:"white",lineHeight:"".concat(o,"px"),margin:0,padding:0,fontSize:14},label:{margin:0,color:"white",backgroundColor:"rgb(0, 0, 0, 0.2)"},barContainer:{flexGrow:1,borderRadius:3,backgroundColor:"white",textAlign:"left"},progressBar:{borderRadius:3,height:o,transition:"width "+u+"s",width:"".concat(p?n:0,"%"),backgroundColor:i},level:{fontSize:14,position:"absolute",lineHeight:"".concat(o,"px"),marginLeft:10,color:"white",fontWeight:"bold"}},E=Object(a.useRef)(null),A=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e;return h(!0),v<n&&(e=setInterval((function(){var e=getComputedStyle(E.current).width,t=getComputedStyle(A.current).width,a=Math.ceil(parseInt(e.substr(0,e.length-1),10)/parseInt(t.substr(0,t.length-1),10)*100);g(a=a>n?n:a)}),20)),function(){clearInterval(e)}}),[v,u,n]),r.a.createElement("div",{style:y.root},r.a.createElement("div",{style:y.labelContainer},s||r.a.createElement("h5",{style:y.label},t)),r.a.createElement("div",{ref:A,style:y.barContainer},r.a.createElement("span",{style:y.level},m?v:n,"%"),r.a.createElement("div",{ref:E,style:y.progressBar})))}function c(e){var t=e.skills,n=e.duration,a=e.barsHeight,i=e.spacing,l=e.labelsWidth,c=e.customLabels,s=e.levelProgress,u=e.flat,m={root:{margin:5},skill:{marginBottom:i}};return r.a.createElement("div",{style:m.root},t.map((function(e,t){return r.a.createElement("div",{style:m.skill,key:e.name},r.a.createElement(o,{flat:u,levelProgress:s,duration:n,customLabel:c?c(e):null,labelWidth:l,height:a,name:e.name,level:e.level,color:e.color}))})))}o.defaultProps={height:30,duration:2,levelProgress:!1,flat:!1,labelWidth:100,customLabel:null},c.defaultProps={duration:2,levelProgress:!1,flat:!1,barsHeight:30,labelsWidth:100,spacing:15,customLabels:null},n.d(t,"SkillBars",(function(){return c})),n.d(t,"SkillBar",(function(){return o})),t.default=c}]))},ZfDv:function(e,t,n){var a=n("C0Ia");e.exports=function(e,t){return new(a(e))(0===t?0:t)}},aO6C:function(e,t,n){var a=n("0Dky"),r=n("Fib7"),i=n("9d/t"),l=n("0GbY"),o=n("iSVu"),c=[],s=l("Reflect","construct"),u=/^\s*(?:class|function)\b/,m=u.exec,d=!u.exec((function(){})),f=function(e){if(!r(e))return!1;try{return s(Object,c,e),!0}catch(t){return!1}};e.exports=!s||a((function(){var e;return f(f.call)||!f(Object)||!f((function(){e=!0}))||e}))?function(e){if(!r(e))return!1;switch(i(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!m.call(u,o(e))}:f},ggp8:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABFBAMAAAAmz9zMAAAAGFBMVEX////8+/z9/P3+/v79+/3+/f79/f38+vxHBd1IAAAAAXRSTlMAQObYZgAAAUlJREFUSIntlLFOwzAQhi8E22slhq5IILIiMWStQGpWL1VXD6hZm0Lx6+M736UB7JAFsfiG2Hf+fD7bvwNQrNi/W++D7XavWxt9jb5/49E29AfHzjWOPAI0/mUSeJ8kkmkxS0ArL+yaIz/QmgdUaNy4qN9QV7VTFCRHaE4UMJditUminaQ1zVisSqONRI0Zi7VptJdcRo/FujS6l44BKbbOZKWNO0JlAQUz6IbQSg4wg9JmVoQqnvU0hx4JpQsLhF2A7mOxS1CSjFWwACVhrBahdMvnOodODoslbWdRx+gVO79e7CWal8uAgZZ1NkAORRGeMdC7yHxkUdz0LQY6/Go+DZ94WzBKnxjg00ihSpJqLsPb7+jkcROCh4ZNRd8vqGiz89u4yjpKUZ14HmcII7gbfzjcP8cfkSb/IfRu0EM1+jsoVqxYsb+zT1Sz5OKPIqsfAAAAAElFTkSuQmCC"},or9q:function(e,t,n){"use strict";var a=n("6LWA"),r=n("UMSQ"),i=n("A2ZE"),l=function(e,t,n,o,c,s,u,m){for(var d,f=c,p=0,h=!!u&&i(u,m,3);p<o;){if(p in n){if(d=h?h(n[p],p,t):n[p],s>0&&a(d))f=l(e,t,d,r(d.length),f,s-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[f]=d}f++}p++}return f};e.exports=l},pLtG:function(e,t,n){e.exports=n.p+"static/my-img-e69f503480ac0a835cc4558bfcf7a89f.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-df32f6b130c39bab61cf.js.map