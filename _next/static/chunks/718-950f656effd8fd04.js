(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[718],{2557:function(e,t){"use strict";/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},n=function(e){return"IMG"===e.tagName},i=function(e){return e&&1===e.nodeType},r=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},d=function(e){try{if(Array.isArray(e))return e.filter(n);if(NodeList.prototype.isPrototypeOf(e))return[].slice.call(e).filter(n);if(i(e))return[e].filter(n);if("string"==typeof e)return[].slice.call(document.querySelectorAll(e)).filter(n);return[]}catch(e){throw TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},a=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},c=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,i=t.width,r=t.height,d=e.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+a+"px",d.style.left=n+c+"px",d.style.width=i+"px",d.style.height=r+"px",d.style.transform="",d},m=function(e,t){var n=o({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"==typeof window.CustomEvent)return new CustomEvent(e,n);var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),i};!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),t.Z=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=window.Promise||function(e){function t(){}e(t,t)},u=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce(function(e,t){return[].concat(e,d(t))},[]);return n.filter(function(e){return -1===g.indexOf(e)}).forEach(function(e){g.push(e),e.classList.add("medium-zoom-image")}),h.forEach(function(e){var t=e.type,o=e.listener,i=e.options;n.forEach(function(e){e.addEventListener(t,o,i)})}),w},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target,n=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,n=void 0;if(b.container){if(b.container instanceof Object)t=(e=o({},e,b.container)).width-e.left-e.right-2*b.margin,n=e.height-e.top-e.bottom-2*b.margin;else{var d=(i(b.container)?b.container:document.querySelector(b.container)).getBoundingClientRect();e=o({},e,{width:d.width,height:d.height,left:d.left,top:d.top})}}t=t||e.width-2*b.margin,n=n||e.height-2*b.margin;var a=y.zoomedHd||y.original,c=r(a)?t:a.naturalWidth||t,m=r(a)?n:a.naturalHeight||n,l=a.getBoundingClientRect(),u=l.top,s=l.left,p=l.width,f=l.height,g=Math.min(Math.min(Math.max(p,c),t)/p,Math.min(Math.max(f,m),n)/f),h=(-s+(t-p)/2+b.margin+e.left)/g,v=(-u+(n-f)/2+b.margin+e.top)/g,z="scale("+g+") translate3d("+h+"px, "+v+"px, 0)";y.zoomed.style.transform=z,y.zoomedHd&&(y.zoomedHd.style.transform=z)};return new l(function(e){if(t&&-1===g.indexOf(t)||y.zoomed){e(w);return}if(t)y.original=t;else if(g.length>0){var o=g;y.original=o[0]}else{e(w);return}if(y.original.dispatchEvent(m("medium-zoom:open",{detail:{zoom:w}})),z=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,v=!0,y.zoomed=c(y.original),document.body.appendChild(E),b.template){var r=i(b.template)?b.template:document.querySelector(b.template);y.template=document.createElement("div"),y.template.appendChild(r.content.cloneNode(!0)),document.body.appendChild(y.template)}if(y.original.parentElement&&"PICTURE"===y.original.parentElement.tagName&&y.original.currentSrc&&(y.zoomed.src=y.original.currentSrc),document.body.appendChild(y.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),y.original.classList.add("medium-zoom-image--hidden"),y.zoomed.classList.add("medium-zoom-image--opened"),y.zoomed.addEventListener("click",p),y.zoomed.addEventListener("transitionend",function t(){v=!1,y.zoomed.removeEventListener("transitionend",t),y.original.dispatchEvent(m("medium-zoom:opened",{detail:{zoom:w}})),e(w)}),y.original.getAttribute("data-zoom-src")){y.zoomedHd=y.zoomed.cloneNode(),y.zoomedHd.removeAttribute("srcset"),y.zoomedHd.removeAttribute("sizes"),y.zoomedHd.removeAttribute("loading"),y.zoomedHd.src=y.zoomed.getAttribute("data-zoom-src"),y.zoomedHd.onerror=function(){clearInterval(d),console.warn("Unable to reach the zoom image target "+y.zoomedHd.src),y.zoomedHd=null,n()};var d=setInterval(function(){y.zoomedHd.complete&&(clearInterval(d),y.zoomedHd.classList.add("medium-zoom-image--opened"),y.zoomedHd.addEventListener("click",p),document.body.appendChild(y.zoomedHd),n())},10)}else if(y.original.hasAttribute("srcset")){y.zoomedHd=y.zoomed.cloneNode(),y.zoomedHd.removeAttribute("sizes"),y.zoomedHd.removeAttribute("loading");var a=y.zoomedHd.addEventListener("load",function(){y.zoomedHd.removeEventListener("load",a),y.zoomedHd.classList.add("medium-zoom-image--opened"),y.zoomedHd.addEventListener("click",p),document.body.appendChild(y.zoomedHd),n()})}else n()})},p=function(){return new l(function(e){if(v||!y.original){e(w);return}v=!0,document.body.classList.remove("medium-zoom--opened"),y.zoomed.style.transform="",y.zoomedHd&&(y.zoomedHd.style.transform=""),y.template&&(y.template.style.transition="opacity 150ms",y.template.style.opacity=0),y.original.dispatchEvent(m("medium-zoom:close",{detail:{zoom:w}})),y.zoomed.addEventListener("transitionend",function t(){y.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(y.zoomed),y.zoomedHd&&document.body.removeChild(y.zoomedHd),document.body.removeChild(E),y.zoomed.classList.remove("medium-zoom-image--opened"),y.template&&document.body.removeChild(y.template),v=!1,y.zoomed.removeEventListener("transitionend",t),y.original.dispatchEvent(m("medium-zoom:closed",{detail:{zoom:w}})),y.original=null,y.zoomed=null,y.zoomedHd=null,y.template=null,e(w)})})},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return y.original?p():s({target:t})},g=[],h=[],v=!1,z=0,b=n,y={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?b=t:(t||"string"==typeof t)&&u(t);var E=a((b=o({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},b)).background);document.addEventListener("click",function(e){var t=e.target;if(t===E){p();return}-1!==g.indexOf(t)&&f({target:t})}),document.addEventListener("keyup",function(e){var t=e.key||e.keyCode;("Escape"===t||"Esc"===t||27===t)&&p()}),document.addEventListener("scroll",function(){!v&&y.original&&Math.abs(z-(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0))>b.scrollOffset&&setTimeout(p,150)}),window.addEventListener("resize",p);var w={open:s,close:p,toggle:f,update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&(E.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=o({},b.container,e.container)),e.template){var n=i(e.template)?e.template:document.querySelector(e.template);t.template=n}return b=o({},b,t),g.forEach(function(e){e.dispatchEvent(m("medium-zoom:update",{detail:{zoom:w}}))}),w},clone:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(o({},b,t))},attach:u,detach:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];y.zoomed&&p();var n=t.length>0?t.reduce(function(e,t){return[].concat(e,d(t))},[]):g;return n.forEach(function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(m("medium-zoom:detach",{detail:{zoom:w}}))}),g=g.filter(function(e){return -1===n.indexOf(e)}),w},on:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.forEach(function(n){n.addEventListener("medium-zoom:"+e,t,o)}),h.push({type:"medium-zoom:"+e,listener:t,options:o}),w},off:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.forEach(function(n){n.removeEventListener("medium-zoom:"+e,t,o)}),h=h.filter(function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())}),w},getOptions:function(){return b},getImages:function(){return g},getZoomedImage:function(){return y.original}};return w}},5929:function(e,t,o){"use strict";o.d(t,{z:function(){return a}});var n=o(7294),i=o(3935),r=o(1220);let d=(e,t={})=>{let o={React:n,ReactDOM:i,_jsx_runtime:r.i,...t},d=Function(...Object.keys(o),e);return d(...Object.values(o)).default},a=(e,t={})=>n.useMemo(()=>d(e,t),[e,t])},2891:function(e,t,o){let n=o(1439),i=o(7224),r="[^\\s'’\\(\\)!?;:\"-]",d=RegExp(`(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${r}))|(${r}))(${r}*[’']*${r}*)`,"g"),a=e=>e.map(e=>[RegExp(`\\b${e}\\b`,"gi"),e]);e.exports=(e,t={})=>{e=e.toLowerCase().replace(d,(e,t="",o,i,r,d,a)=>{let c=e.length+d>=a.length,m=function(e){let t=e[0];return/\s/.test(t)?e.slice(1):/[\(\)]/.test(t)?null:e}(e);return m?!o&&n.has(i+r)&&!c?m:t+(i||o).toUpperCase()+r:e});let o=t.special||[],r=[...i,...o],c=a(r);return c.forEach(([t,o])=>{e=e.replace(t,o)}),e}},1439:function(e){e.exports=new Set(["for","and","nor","but","or","yet","so","a","an","the","aboard","about","above","across","after","against","along","amid","among","anti","around","as","at","before","behind","below","beneath","beside","besides","between","beyond","but","by","concerning","considering","despite","down","during","except","excepting","excluding","following","for","from","in","inside","into","like","minus","near","of","off","on","onto","opposite","over","past","per","plus","regarding","round","save","since","than","through","to","toward","towards","under","underneath","unlike","until","up","upon","versus","via","with","within","without"])},7224:function(e){e.exports=["ZEIT","ZEIT Inc.","Vercel","Vercel Inc.","CLI","API","HTTP","HTTPS","JSX","DNS","URL","now.sh","now.json","vercel.app","vercel.json","CI","CD","CDN","package.json","package.lock","yarn.lock","GitHub","GitLab","CSS","Sass","JS","JavaScript","TypeScript","HTML","WordPress","Next.js","Node.js","Webpack","Docker","Bash","Kubernetes","SWR","TinaCMS","UI","UX","TS","TSX","iPhone","iPad","watchOS","iOS","iPadOS","macOS","PHP","composer.json","composer.lock","CMS","SQL","C","C#","GraphQL","GraphiQL","JWT","JWTs"]},1220:function(e,t,o){let n=o(5893);e.exports.i=n}}]);