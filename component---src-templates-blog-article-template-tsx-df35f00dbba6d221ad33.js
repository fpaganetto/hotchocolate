(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4M6O":function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},l=n&&!r;window.clearTimeout(r),r=setTimeout(a,t),l&&e.apply(o,i)}},t.isReactElement=a,t.shallowComparison=function e(t,n){var r,i=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(r=[]).concat.apply(r,(0,o.default)(i)).filter((function(r){if("object"==typeof t[r]){if(e(t[r],n[r]))return!0}else if(t[r]!==n[r]&&!a(t[r]))return!0})).length};var o=r(n("RIqP")),i=r(n("q1tI"));function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Hf4c:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return c}));var r=n("vOnD"),o=r.c.div.withConfig({displayName:"article-elements__ArticleWrapper",componentId:"sc-17wo9z6-0"})(["display:flex;flex:1 1 auto;flex-direction:column;@media only screen and (min-width:820px){padding:20px 10px 0;}"]),i=r.c.article.withConfig({displayName:"article-elements__Article",componentId:"sc-17wo9z6-1"})(["display:flex;flex:1 1 auto;flex-direction:column;margin-bottom:40px;padding-bottom:20px;@media only screen and (min-width:820px){border-radius:4px;box-shadow:0 3px 6px rgba(0,0,0,0.25);}"]),a=r.c.header.withConfig({displayName:"article-elements__ArticleHeader",componentId:"sc-17wo9z6-2"})(["@media only screen and (min-width:820px){> .gatsby-image-wrapper{border-radius:4px 4px 0 0;}}"]),l=r.c.h1.withConfig({displayName:"article-elements__ArticleTitle",componentId:"sc-17wo9z6-3"})(["margin:20px 20px 10px;font-size:2em;@media only screen and (min-width:820px){margin:20px 50px 10px;}"]),c=r.c.div.withConfig({displayName:"article-elements__ArticleContent",componentId:"sc-17wo9z6-4"})(['> *{padding-right:20px;padding-left:20px;}> h1 > a.anchor.before,> h2 > a.anchor.before,> h3 > a.anchor.before,> h4 > a.anchor.before,> h5 > a.anchor.before,> h6 > a.anchor.before{padding-right:4px;transform:translateX(0px);}> blockquote{padding:30px 20px;}> table{th:first-child,td:first-child{padding-left:20px;}th:last-child,td:last-child{padding-right:20px;}}> .gatsby-code-button-container{padding:0;}> .gatsby-highlight{padding-right:0;padding-left:0;> pre[class*="language-"]{padding:30px 20px;::before{left:20px;}}}@media only screen and (min-width:820px){> *{padding-right:50px;padding-left:50px;}> h1 > a.anchor.before,> h2 > a.anchor.before,> h3 > a.anchor.before,> h4 > a.anchor.before,> h5 > a.anchor.before,> h6 > a.anchor.before{transform:translateX(30px);}> blockquote{padding:30px 50px;}> table{th:first-child,td:first-child{padding-left:50px;}th:last-child,td:last-child{padding-right:50px;}}> .gatsby-code-button-container{padding:0;}> .gatsby-highlight{> pre[class*="language-"]{padding-right:50px;padding-left:50px;::before{left:50px;}}}}'])},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},ORnI:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("VUT9"));t.Disqus=o.default;var i=r(n("qASQ"));t.CommentCount=i.default;var a=r(n("vAJ3"));t.CommentEmbed=a.default;var l=o.default;t.default=l},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},SHYe:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=n("ZGSP"),l=function(e){var t=e.data,n=t.fields,r=t.frontmatter;return o.a.createElement(c,null,o.a.createElement(s,{to:r.authorUrl},o.a.createElement(d,{src:r.authorImageUrl}),r.author)," ","・ ",r.date," ・ ",n.readingTime.text)},c=i.c.div.withConfig({displayName:"blog-article-metadata__Metadata",componentId:"sc-1g6yg7a-0"})(["display:flex;flex-direction:row;align-items:center;margin:0 20px 20px;font-size:0.778em;@media only screen and (min-width:820px){margin:0 50px 20px;}"]),s=Object(i.c)(a.a).withConfig({displayName:"blog-article-metadata__AuthorLink",componentId:"sc-1g6yg7a-1"})(["display:flex;flex:0 0 auto;flex-direction:row;align-items:center;color:#666;"]),d=i.c.img.withConfig({displayName:"blog-article-metadata__AuthorImage",componentId:"sc-1g6yg7a-2"})(["flex:0 0 auto;margin-right:0.5em;border-radius:15px;width:30px;"])},T9wd:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return Q}));var r,o=n("q1tI"),i=n.n(o),a=n("BBkP"),l=n("CMDK"),c=n("9eSz"),s=n.n(c),d=n("vOnD"),u=n("wqoF"),p=n("Hf4c"),f=n("SHYe"),h=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return h(t,e),t}(Error);function g(e,t){if(!e)throw new m(t)}function w(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var y=n("TSYQ"),b=n.n(y),v=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),x=function(){return(x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},_=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function l(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((r=r.apply(e,t||[])).next())}))},I=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(l){i=[6,l],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},C=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},k=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},E=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function O(e,t,n){var r=t.height,o=t.width,i=S(t,["height","width"]),a=x({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),l=window.open(e,"",Object.keys(a).map((function(e){return e+"="+a[e]})).join(", "));if(n)var c=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(c),n(l))}catch(e){console.error(e)}}),1e3);return l}var q=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,l=void 0===a?"windowCenter":a,c=n.windowWidth,s=void 0===c?550:c;O(e,x({height:i,width:s},"windowCenter"===l?k(s,i):E(s,i)),r)},t.handleClick=function(e){return _(t,void 0,void 0,(function(){var t,n,r,o,i,a,l,c,s,d;return I(this,(function(u){switch(u.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,i=t.onClick,a=t.url,l=t.openShareDialogOnClick,c=t.opts,s=o(a,c),r?[2]:(e.preventDefault(),n?(d=n(),C(d)?[4,d]:[3,2]):[3,2]);case 1:u.sent(),u.label=2;case 2:return l&&this.openShareDialog(s),i&&i(e,s),[2]}}))}))},t}return v(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,o=e.disabledStyle,a=e.forwardedRef,l=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,d=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,S(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),u=b()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=x(x(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),r&&o);return i.a.createElement("button",x({},d,{"aria-label":d["aria-label"]||l,className:u,onClick:this.handleClick,ref:a,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component),j=function(){return(j=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var D=function(e,t,n,r){function a(o,a){var l=n(o),c=j({},o);return Object.keys(l).forEach((function(e){delete c[e]})),i.a.createElement(q,j({},r,c,{forwardedRef:a,networkName:e,networkLink:t,opts:n(o)}))}return a.displayName="ShareButton-"+e,Object(o.forwardRef)(a)};var N=D("twitter",(function(e,t){var n=t.title,r=t.via,o=t.hashtags,i=void 0===o?[]:o,a=t.related,l=void 0===a?[]:a;return g(e,"twitter.url"),g(Array.isArray(i),"twitter.hashtags is not an array"),g(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+w({url:e,text:n,via:r,hashtags:i.length>0?i.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400});var P=D("linkedin",(function(e,t){var n=t.title,r=t.summary,o=t.source;return g(e,"linkedin.url"),"https://linkedin.com/shareArticle"+w({url:e,mini:"true",title:n,summary:r,source:o})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),A=n("VDBP"),T=n.n(A),U=n("c87r"),B=n.n(U),M=function(e){var t=e.data,n=t.markdownRemark,r=t.site,o=e.tags,a=n.frontmatter,l=r.siteMetadata.siteUrl+a.path,c=a.title;return i.a.createElement(W,null,i.a.createElement(N,{url:l,title:c,via:r.siteMetadata.author,hashtags:o},i.a.createElement(R,null)),i.a.createElement(P,{url:l,title:c},i.a.createElement(V,null)))},W=d.c.aside.withConfig({displayName:"blog-article-sharebar__ShareButtons",componentId:"de6rkl-0"})(["position:fixed;left:calc(50% - 480px);display:none;flex-direction:column;padding:150px 0 250px;width:60px;> button{flex:0 0 50px;> svg{width:30px;}}@media only screen and (min-width:992px){display:flex;}"]),R=Object(d.c)(B.a).withConfig({displayName:"blog-article-sharebar__TwitterIcon",componentId:"de6rkl-1"})(["fill:#1da0f2;"]),V=Object(d.c)(T.a).withConfig({displayName:"blog-article-sharebar__LinkedinIcon",componentId:"de6rkl-2"})(["fill:#0073b0;"]),z=n("lWB3"),H=function(e){var t,n,r=e.data,o=r.markdownRemark,a=o,l=a.frontmatter,c=a.html,d=l.path,h=l.title,m=l.tags?l.tags.filter((function(e){return e&&e.length>0})):[],g=null===(t=l.featuredImage)||void 0===t||null===(n=t.childImageSharp)||void 0===n?void 0:n.fluid;return i.a.createElement(L,null,i.a.createElement(M,{data:r,tags:m}),i.a.createElement(p.e,null,i.a.createElement(p.a,null,i.a.createElement(p.c,null,g&&i.a.createElement(s.a,{fluid:g}),i.a.createElement(p.d,null,h),i.a.createElement(f.a,{data:o}),i.a.createElement(z.a,{tags:m})),i.a.createElement(p.b,{dangerouslySetInnerHTML:{__html:c}})),i.a.createElement(u.a,{data:r,path:d,title:h})))},L=d.c.div.withConfig({displayName:"blog-article__Container",componentId:"sc-7c8ya8-0"})(["display:flex;flex:0 0 auto;flex-direction:row;width:100%;max-width:820px;"]),Q=(t.default=function(e){var t=e.data;return i.a.createElement(l.a,null,i.a.createElement(a.a,{title:t.markdownRemark.frontmatter.title}),i.a.createElement(H,{data:t}))},"199665097")},VDBP:function(e,t,n){var r=n("q1tI");function o(e){return r.createElement("svg",e,r.createElement("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}))}o.defaultProps={viewBox:"0 0 448 512"},e.exports=o,o.default=o},VUT9:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),a=r(n("VbXa")),l=r(n("q1tI")),c=r(n("17x9")),s=n("4M6O"),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="chillicream",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,s.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,s.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return l.default.createElement("div",(0,o.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(l.default.Component);t.default=d,d.propTypes={config:c.default.shape({identifier:c.default.string,title:c.default.string,url:c.default.string,language:c.default.string,remoteAuthS3:c.default.string,apiKey:c.default.string})}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},c87r:function(e,t,n){var r=n("q1tI");function o(e){return r.createElement("svg",e,r.createElement("path",{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"}))}o.defaultProps={viewBox:"0 0 448 512"},e.exports=o,o.default=o},lWB3:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=n("ZGSP"),l=function(e){var t=e.tags;return o.a.createElement(o.a.Fragment,null,t.length>0&&o.a.createElement(c,null,t.map((function(e){return o.a.createElement(s,{key:e},o.a.createElement(d,{to:"/blog/tags/"+e},e))}))))},c=i.c.ul.withConfig({displayName:"blog-article-tags__Tags",componentId:"sc-1hloirr-0"})(["margin:0 20px 20px;list-style-type:none;@media only screen and (min-width:820px){margin:0 50px 20px;}"]),s=i.c.li.withConfig({displayName:"blog-article-tags__Tag",componentId:"sc-1hloirr-1"})(["display:inline-block;margin:0 5px 5px 0;border-radius:4px;padding:0;background-color:#f40010;font-size:0.722em;letter-spacing:0.05em;color:#fff;"]),d=Object(i.c)(a.a).withConfig({displayName:"blog-article-tags__TagLink",componentId:"sc-1hloirr-2"})(["display:block;padding:5px 15px;color:#fff;"])},qASQ:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),a=r(n("VbXa")),l=r(n("q1tI")),c=r(n("17x9")),s=n("4M6O"),d=(0,s.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="chillicream",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?d():(0,s.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,s.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,r=(0,i.default)(e,["config","placeholder"]);return l.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},r,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(l.default.Component);t.default=u,u.defaultProps={placeholder:"..."},u.propTypes={config:c.default.shape({identifier:c.default.string,title:c.default.string,url:c.default.string}),placeholder:c.default.string}},vAJ3:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("VbXa")),i=r(n("q1tI")),a=r(n("17x9")),l=function(e){function t(){return e.apply(this,arguments)||this}(0,o.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(i.default.Component);t.default=l,l.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},l.propTypes={commentId:a.default.string.isRequired,width:a.default.number,height:a.default.number,showMedia:a.default.bool,showParentComment:a.default.bool}},wqoF:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("ORnI"),o=n("q1tI"),i=n.n(o),a=n("vOnD"),l=function(e){var t=e.data,n=e.path,r=e.title,o={url:t.site.siteMetadata.siteUrl+n,identifier:n,title:r};return i.a.createElement(c,{config:o})},c=Object(a.c)(r.Disqus).withConfig({displayName:"article-comments__DisqusWrapper",componentId:"sc-1uyp3j8-0"})(["margin:0 20px 60px;@media only screen and (min-width:820px){margin:0 50px 60px;}"])}}]);
//# sourceMappingURL=component---src-templates-blog-article-template-tsx-df35f00dbba6d221ad33.js.map