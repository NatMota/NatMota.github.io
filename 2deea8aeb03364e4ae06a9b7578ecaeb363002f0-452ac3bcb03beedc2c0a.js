(self.webpackChunknatslabs=self.webpackChunknatslabs||[]).push([[202],{3723:function(e,t,a){"use strict";a.d(t,{G:function(){return _},L:function(){return g},M:function(){return C},P:function(){return E},S:function(){return A},_:function(){return l},a:function(){return s},b:function(){return u},c:function(){return c},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,l,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,m);return r.createElement(r.Fragment,null,r.createElement(p,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:o}=e,c=l(e,h);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=l(e,f);const o=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,s({},i,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var v;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,w);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const C=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=b.propTypes;const k=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:i().object.isRequired,alt:k},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],S=new Set;let O,I;const T=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:u,class:d,onStartLoad:m,onLoad:p,onError:g}=e,h=l(e,L);const{width:f,height:y,layout:b}=n,v=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(f,y,b),{style:w,className:E}=v,C=l(v,N),k=(0,r.useRef)(),x=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);d&&(u=d);const T=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,f,y);return(0,r.useEffect)((()=>{O||(O=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void S.add(x);if(I&&S.has(x))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;k.current&&(k.current.innerHTML=a(s({isLoading:!0,isLoaded:S.has(x),image:n},h)),S.has(x)||(t=requestAnimationFrame((()=>{k.current&&(r=l(k.current,x,S,i,m,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{S.has(x)&&I&&(k.current.innerHTML=I(s({isLoading:S.has(x),isLoaded:S.has(x),image:n},h)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},C,{style:s({},w,i,{backgroundColor:c}),className:E+(u?" "+u:""),ref:k,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},_=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));_.propTypes=x,_.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],j=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),z={src:i().string.isRequired,alt:k,width:j,height:j,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(M=_,function(e){let{src:t,__imageData:a,__error:n}=e,i=l(e,q);return n&&console.warn(n),a?r.createElement(M,s({image:a},i)):(console.warn("Image not loaded",t),null)});var M;A.displayName="StaticImage",A.propTypes=z},2369:function(e){"use strict";const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},8030:function(){},9754:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var r=a(7294),n=a(8030),i=a(9583),s=a(1883);const l=[{id:1,text:"home",url:"/"},{id:2,text:"blog",url:"/blog/"},{id:3,text:"about",url:"/about/"},{id:4,text:"contact",url:"/contact/"}].map((e=>r.createElement("li",{key:e.id},r.createElement(s.Link,{to:e.url},e.text))));var o=e=>{let{styleClass:t}=e;return r.createElement("ul",{className:"page-links "+(t||"")},l)};var c=e=>{let{toggleSidebar:t}=e;return r.createElement("nav",{className:"navbar"},r.createElement("div",{className:"nav-center"},r.createElement("div",{className:"nav-header"},r.createElement("button",{type:"button",className:"toggle-btn","aria-label":"Open sidebar",onClick:t},r.createElement(i.lPs,null))),r.createElement(o,{styleClass:"nav-links"})))},u=a(7212);var d=e=>{let{isOpen:t,toggleSidebar:a}=e;return r.createElement("aside",{className:"sidebar "+(t?"show-sidebar":"")},r.createElement("button",{className:"close-btn","aria-label":"Close sidebar",onClick:a},r.createElement(i.aHS,null)),r.createElement("div",{className:"side-container"},r.createElement(o,{styleClass:t?"sidebar-links":""}),r.createElement(u.Z,{styleClass:t?"sidebar-icons":""})))};var m=()=>r.createElement("footer",{className:"footer"},r.createElement("div",null,r.createElement(u.Z,{styleClass:"footer-links"})));var p=e=>{let{children:t}=e;const[a,i]=r.useState(!1),s=()=>{i(!a)};return r.createElement(r.Fragment,null,r.createElement(n.Helmet,null,r.createElement("script",null,"\n          \x3c!-- Matomo --\x3e\n          <script>\n            var _paq = window._paq = window._paq || [];\n            /* tracker methods like \"setCustomDimension\" should be called before \"trackPageView\" */\n            _paq.push(['trackPageView']);\n            _paq.push(['enableLinkTracking']);\n            (function() {\n              var u=\"https://analytics.natslabs.com/\";\n              _paq.push(['setTrackerUrl', u+'matomo.php']);\n              _paq.push(['setSiteId', '1']);\n              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);\n            })();\n          <\/script>\n          \x3c!-- End Matomo Code --\x3e\n        ")),r.createElement(c,{toggleSidebar:s}),r.createElement(d,{isOpen:a,toggleSidebar:s}),t,r.createElement(m,null))}},6406:function(e,t,a){"use strict";a.d(t,{H:function(){return i}});var r=a(7294),n=a(1883);const i=e=>{let{title:t,description:a,pathname:i,children:s}=e;const{title:l,description:o,image:c,siteUrl:u,twitterUsername:d}=(0,n.useStaticQuery)("3303551625").site.siteMetadata,m={title:t||l,description:a||o,image:""+u+c,url:""+u+(i||""),twitterUsername:d};return r.createElement(r.Fragment,null,r.createElement("title",null,m.title),r.createElement("meta",{name:"description",content:m.description}),r.createElement("meta",{name:"image",content:m.image}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:m.title}),r.createElement("meta",{name:"twitter:url",content:m.url}),r.createElement("meta",{name:"twitter:description",content:m.description}),r.createElement("meta",{name:"twitter:image",content:m.image}),r.createElement("meta",{name:"twitter:creator",content:m.twitterUsername}),r.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}),s)}},7212:function(e,t,a){"use strict";var r=a(7294),n=a(9583),i=a(3750);const s=[{id:1,icon:r.createElement(n.ltd,{className:"social-icon","aria-label":"LinkedIn"}),url:"https://www.linkedin.com/in/natanael-mota-b15b653a/"},{id:2,icon:r.createElement(n.w5k,{className:"social-icon","aria-label":"Slack"}),url:"https://mindtheproduct.slack.com/team/U04Q9HBB65C"},{id:3,icon:r.createElement(i.xZR,{className:"social-icon","aria-label":"CV"}),url:"https://github.com/NatMota/natmota.github.io/blob/master/Natanael%20Mota%20-%20CV.pdf"}].map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:e.url,className:"social-link"},e.icon))));t.Z=e=>{let{styleClass:t}=e;return r.createElement("ul",{className:"social-links "+(t||"")},s)}},4405:function(e,t,a){"use strict";a.d(t,{w_:function(){return c}});var r=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(n),s=function(){return s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function o(e){return e&&e.map((function(e,t){return r.createElement(e.tag,s({key:t},e.attr),o(e.child))}))}function c(e){return function(t){return r.createElement(u,s({attr:s({},e.attr)},t),o(e.child))}}function u(e){var t=function(t){var a,n=e.attr,i=e.size,o=e.title,c=l(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:a,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(n)}}}]);
//# sourceMappingURL=2deea8aeb03364e4ae06a9b7578ecaeb363002f0-452ac3bcb03beedc2c0a.js.map