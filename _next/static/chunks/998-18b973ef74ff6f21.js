(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{2557:function(e,t){"use strict";/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */ var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r=function(e){return"IMG"===e.tagName},o=function(e){return e&&1===e.nodeType},i=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},a=function(e){try{if(Array.isArray(e))return e.filter(r);if(NodeList.prototype.isPrototypeOf(e))return[].slice.call(e).filter(r);if(o(e))return[e].filter(r);if("string"==typeof e)return[].slice.call(document.querySelectorAll(e)).filter(r);return[]}catch(t){throw TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},l=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},u=function(e){var t=e.getBoundingClientRect(),n=t.top,r=t.left,o=t.width,i=t.height,a=e.cloneNode(),l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,u=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return a.removeAttribute("id"),a.style.position="absolute",a.style.top=n+l+"px",a.style.left=r+u+"px",a.style.width=o+"px",a.style.height=i+"px",a.style.transform="",a},d=function(e,t){var r=n({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"==typeof window.CustomEvent)return new CustomEvent(e,r);var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,r.bubbles,r.cancelable,r.detail),o};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),t.Z=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=window.Promise||function(e){function t(){}e(t,t)},s=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.reduce(function(e,t){return[].concat(e,a(t))},[]);return r.filter(function(e){return -1===v.indexOf(e)}).forEach(function(e){v.push(e),e.classList.add("medium-zoom-image")}),h.forEach(function(e){var t=e.type,n=e.listener,o=e.options;r.forEach(function(e){e.addEventListener(t,n,o)})}),w},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target,r=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,r=void 0;if(b.container){if(b.container instanceof Object)t=(e=n({},e,b.container)).width-e.left-e.right-2*b.margin,r=e.height-e.top-e.bottom-2*b.margin;else{var a=(o(b.container)?b.container:document.querySelector(b.container)).getBoundingClientRect();e=n({},e,{width:a.width,height:a.height,left:a.left,top:a.top})}}t=t||e.width-2*b.margin,r=r||e.height-2*b.margin;var l=E.zoomedHd||E.original,u=i(l)?t:l.naturalWidth||t,d=i(l)?r:l.naturalHeight||r,c=l.getBoundingClientRect(),s=c.top,m=c.left,f=c.width,p=c.height,v=Math.min(Math.min(Math.max(f,u),t)/f,Math.min(Math.max(p,d),r)/p),h=(-m+(t-f)/2+b.margin+e.left)/v,g=(-s+(r-p)/2+b.margin+e.top)/v,y="scale("+v+") translate3d("+h+"px, "+g+"px, 0)";E.zoomed.style.transform=y,E.zoomedHd&&(E.zoomedHd.style.transform=y)};return new c(function(e){if(t&&-1===v.indexOf(t)||E.zoomed){e(w);return}if(t)E.original=t;else if(v.length>0){var n=v;E.original=n[0]}else{e(w);return}if(E.original.dispatchEvent(d("medium-zoom:open",{detail:{zoom:w}})),y=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,g=!0,E.zoomed=u(E.original),document.body.appendChild(z),b.template){var i=o(b.template)?b.template:document.querySelector(b.template);E.template=document.createElement("div"),E.template.appendChild(i.content.cloneNode(!0)),document.body.appendChild(E.template)}if(E.original.parentElement&&"PICTURE"===E.original.parentElement.tagName&&E.original.currentSrc&&(E.zoomed.src=E.original.currentSrc),document.body.appendChild(E.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),E.original.classList.add("medium-zoom-image--hidden"),E.zoomed.classList.add("medium-zoom-image--opened"),E.zoomed.addEventListener("click",f),E.zoomed.addEventListener("transitionend",function t(){g=!1,E.zoomed.removeEventListener("transitionend",t),E.original.dispatchEvent(d("medium-zoom:opened",{detail:{zoom:w}})),e(w)}),E.original.getAttribute("data-zoom-src")){E.zoomedHd=E.zoomed.cloneNode(),E.zoomedHd.removeAttribute("srcset"),E.zoomedHd.removeAttribute("sizes"),E.zoomedHd.removeAttribute("loading"),E.zoomedHd.src=E.zoomed.getAttribute("data-zoom-src"),E.zoomedHd.onerror=function(){clearInterval(a),console.warn("Unable to reach the zoom image target "+E.zoomedHd.src),E.zoomedHd=null,r()};var a=setInterval(function(){E.zoomedHd.complete&&(clearInterval(a),E.zoomedHd.classList.add("medium-zoom-image--opened"),E.zoomedHd.addEventListener("click",f),document.body.appendChild(E.zoomedHd),r())},10)}else if(E.original.hasAttribute("srcset")){E.zoomedHd=E.zoomed.cloneNode(),E.zoomedHd.removeAttribute("sizes"),E.zoomedHd.removeAttribute("loading");var l=E.zoomedHd.addEventListener("load",function(){E.zoomedHd.removeEventListener("load",l),E.zoomedHd.classList.add("medium-zoom-image--opened"),E.zoomedHd.addEventListener("click",f),document.body.appendChild(E.zoomedHd),r()})}else r()})},f=function(){return new c(function(e){if(g||!E.original){e(w);return}g=!0,document.body.classList.remove("medium-zoom--opened"),E.zoomed.style.transform="",E.zoomedHd&&(E.zoomedHd.style.transform=""),E.template&&(E.template.style.transition="opacity 150ms",E.template.style.opacity=0),E.original.dispatchEvent(d("medium-zoom:close",{detail:{zoom:w}})),E.zoomed.addEventListener("transitionend",function t(){E.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(E.zoomed),E.zoomedHd&&document.body.removeChild(E.zoomedHd),document.body.removeChild(z),E.zoomed.classList.remove("medium-zoom-image--opened"),E.template&&document.body.removeChild(E.template),g=!1,E.zoomed.removeEventListener("transitionend",t),E.original.dispatchEvent(d("medium-zoom:closed",{detail:{zoom:w}})),E.original=null,E.zoomed=null,E.zoomedHd=null,E.template=null,e(w)})})},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return E.original?f():m({target:t})},v=[],h=[],g=!1,y=0,b=r,E={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?b=t:(t||"string"==typeof t)&&s(t);var z=l((b=n({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},b)).background);document.addEventListener("click",function(e){var t=e.target;if(t===z){f();return}-1!==v.indexOf(t)&&p({target:t})}),document.addEventListener("keyup",function(e){var t=e.key||e.keyCode;("Escape"===t||"Esc"===t||27===t)&&f()}),document.addEventListener("scroll",function(){!g&&E.original&&Math.abs(y-(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0))>b.scrollOffset&&setTimeout(f,150)}),window.addEventListener("resize",f);var w={open:m,close:f,toggle:p,update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&(z.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=n({},b.container,e.container)),e.template){var r=o(e.template)?e.template:document.querySelector(e.template);t.template=r}return b=n({},b,t),v.forEach(function(e){e.dispatchEvent(d("medium-zoom:update",{detail:{zoom:w}}))}),w},clone:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(n({},b,t))},attach:s,detach:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];E.zoomed&&f();var r=t.length>0?t.reduce(function(e,t){return[].concat(e,a(t))},[]):v;return r.forEach(function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(d("medium-zoom:detach",{detail:{zoom:w}}))}),v=v.filter(function(e){return -1===r.indexOf(e)}),w},on:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return v.forEach(function(r){r.addEventListener("medium-zoom:"+e,t,n)}),h.push({type:"medium-zoom:"+e,listener:t,options:n}),w},off:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return v.forEach(function(r){r.removeEventListener("medium-zoom:"+e,t,n)}),h=h.filter(function(n){return!(n.type==="medium-zoom:"+e&&n.listener.toString()===t.toString())}),w},getOptions:function(){return b},getImages:function(){return v},getZoomedImage:function(){return E.original}};return w}},2746:function(e,t,n){let r=n(5893);e.exports.c=r},2965:function(e,t,n){"use strict";n.d(t,{u:function(){return Y}});var r,o,i,a,l=n(7294);function u(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,u),o}var d=((r=d||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),c=((o=c||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function s({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:a}){let l=f(t,e);if(i)return m(l,n,r,a);let d=null!=o?o:0;if(2&d){let{static:c=!1,...s}=l;if(c)return m(s,n,r,a)}if(1&d){let{unmount:p=!0,...v}=l;return u(p?0:1,{0:()=>null,1:()=>m({...v,hidden:!0,style:{display:"none"}},n,r,a)})}return m(l,n,r,a)}function m(e,t={},n,r){let{as:o=n,children:i,refName:a="ref",...u}=h(e,["unmount","static"]),d=void 0!==e.ref?{[a]:e.ref}:{},c="function"==typeof i?i(t):i;u.className&&"function"==typeof u.className&&(u.className=u.className(t));let s={};if(t){let m=!1,p=[];for(let[g,y]of Object.entries(t))"boolean"==typeof y&&(m=!0),!0===y&&p.push(g);m&&(s["data-headlessui-state"]=p.join(" "))}if(o===l.Fragment&&Object.keys(v(u)).length>0){if(!(0,l.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));return(0,l.cloneElement)(c,Object.assign({},f(c.props,v(h(u,["ref"]))),s,d,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(c.ref,d.ref)))}return(0,l.createElement)(o,Object.assign({},h(u,["ref"]),o!==l.Fragment&&d,o!==l.Fragment&&s),c)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&"function"==typeof r[o]?(null!=n[o]||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let i in n)Object.assign(t,{[i](e,...t){for(let r of n[i]){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;r(e,...t)}}});return t}function p(e){var t;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function v(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function h(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let g=(0,l.createContext)(null);g.displayName="OpenClosedContext";var y=((i=y||{})[i.Open=0]="Open",i[i.Closed=1]="Closed",i);function b(){return(0,l.useContext)(g)}function E({value:e,children:t}){return l.createElement(g.Provider,{value:e},t)}let z="undefined"==typeof window||"undefined"==typeof document,w=z?l.useEffect:l.useLayoutEffect;function C(){let e=(0,l.useRef)(!1);return w(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function T(e){let t=(0,l.useRef)(e);return w(()=>{t.current=e},[e]),t}let L={serverHandoffComplete:!1};function H(){let[e,t]=(0,l.useState)(L.serverHandoffComplete);return(0,l.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,l.useEffect)(()=>{!1===L.serverHandoffComplete&&(L.serverHandoffComplete=!0)},[]),e}let O=function(e){let t=T(e);return l.useCallback((...e)=>t.current(...e),[t])},S=Symbol();function x(...e){let t=(0,l.useRef)(e);(0,l.useEffect)(()=>{t.current=e},[e]);let n=O(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[S]))?void 0:n}function k(){let e=[],t=[],n={enqueue(e){t.push(e)},addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add(()=>e.removeEventListener(t,r,o))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){var t;let r={current:!0};return t=()=>{r.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e})),n.add(()=>{r.current=!1})},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[r]=e.splice(n,1);r()}}),dispose(){for(let t of e.splice(0))t()},async workQueue(){for(let e of t.splice(0))await e()}};return n}function j(e,...t){e&&t.length>0&&e.classList.add(...t)}function F(e,...t){e&&t.length>0&&e.classList.remove(...t)}function A(){let[e]=(0,l.useState)(k);return(0,l.useEffect)(()=>()=>e.dispose(),[e]),e}function N(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let R=(0,l.createContext)(null);R.displayName="TransitionContext";var P=((a=P||{}).Visible="visible",a.Hidden="hidden",a);let M=(0,l.createContext)(null);function q(e){return"children"in e?q(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function I(e,t){let n=T(e),r=(0,l.useRef)([]),o=C(),i=A(),a=O((e,t=c.Hidden)=>{let a=r.current.findIndex(({el:t})=>t===e);-1!==a&&(u(t,{[c.Unmount](){r.current.splice(a,1)},[c.Hidden](){r.current[a].state="hidden"}}),i.microTask(()=>{var e;!q(r)&&o.current&&(null==(e=n.current)||e.call(n))}))}),d=O(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>a(e,c.Unmount)}),s=(0,l.useRef)([]),m=(0,l.useRef)(Promise.resolve()),f=(0,l.useRef)({enter:[],leave:[],idle:[]}),p=O((e,n,r)=>{s.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{s.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(f.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?m.current=m.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),v=O((e,t,n)=>{Promise.all(f.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=s.current.shift())||e()}).then(()=>n(t))});return(0,l.useMemo)(()=>({children:r,register:d,unregister:a,onStart:p,onStop:v,wait:m,chains:f}),[d,a,r,p,v,f,m])}function D(){}M.displayName="NestingContext";let B=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function U(e){var t;let n={};for(let r of B)n[r]=null!=(t=e[r])?t:D;return n}let $=d.RenderStrategy,_=p(function(e,t){var n;let r,{beforeEnter:o,afterEnter:i,beforeLeave:a,afterLeave:d,enter:m,enterFrom:f,enterTo:p,entered:v,leave:h,leaveFrom:g,leaveTo:b,...z}=e,L=(0,l.useRef)(null),S=x(L,t),P=z.unmount?c.Unmount:c.Hidden,{show:D,appear:B,initial:_}=function(){let e=(0,l.useContext)(R);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[X,W]=(0,l.useState)(D?"visible":"hidden"),Y=function(){let e=(0,l.useContext)(M);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:V,unregister:Z}=Y,G=(0,l.useRef)(null);(0,l.useEffect)(()=>V(L),[V,L]),(0,l.useEffect)(()=>{if(P===c.Hidden&&L.current){if(D&&"visible"!==X){W("visible");return}return u(X,{hidden:()=>Z(L),visible:()=>V(L)})}},[X,L,V,Z,D,P]);let Q=T({enter:N(m),enterFrom:N(f),enterTo:N(p),entered:N(v),leave:N(h),leaveFrom:N(g),leaveTo:N(b)}),J=(n={beforeEnter:o,afterEnter:i,beforeLeave:a,afterLeave:d},r=(0,l.useRef)(U(n)),(0,l.useEffect)(()=>{r.current=U(n)},[n]),r),K=H();(0,l.useEffect)(()=>{if(K&&"visible"===X&&null===L.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[L,X,K]);let ee=_&&!B,et=!K||ee||G.current===D?"idle":D?"enter":"leave",en=O(e=>u(e,{enter:()=>J.current.beforeEnter(),leave:()=>J.current.beforeLeave(),idle(){}})),er=O(e=>u(e,{enter:()=>J.current.afterEnter(),leave:()=>J.current.afterLeave(),idle(){}})),eo=I(()=>{W("hidden"),Z(L)},Y);(function({container:e,direction:t,classes:n,onStart:r,onStop:o}){let i=C(),a=A(),l=T(t);w(()=>{let t=k();a.add(t.dispose);let d=e.current;if(d&&"idle"!==l.current&&i.current){var c,s,m,f;let p,v,h,g,y,b,E;return t.dispose(),r.current(l.current),t.add((c=d,s=n.current,m="enter"===l.current,f=()=>{t.dispose(),o.current(l.current)},v=m?"enter":"leave",h=k(),g=void 0!==f?(p={called:!1},(...e)=>{if(!p.called)return p.called=!0,f(...e)}):()=>{},"enter"===v&&(c.removeAttribute("hidden"),c.style.display=""),y=u(v,{enter:()=>s.enter,leave:()=>s.leave}),b=u(v,{enter:()=>s.enterTo,leave:()=>s.leaveTo}),E=u(v,{enter:()=>s.enterFrom,leave:()=>s.leaveFrom}),F(c,...s.enter,...s.enterTo,...s.enterFrom,...s.leave,...s.leaveFrom,...s.leaveTo,...s.entered),j(c,...y,...E),h.nextFrame(()=>{F(c,...E),j(c,...b),function(e,t){let n=k();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[i,a]=[r,o].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t});if(i+a!==0){let l=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),l())})}else t();n.add(()=>t()),n.dispose}(c,()=>(F(c,...y),j(c,...s.entered),g()))}),h.dispose)),t.dispose}},[t])})({container:L,classes:Q,direction:et,onStart:T(e=>{eo.onStart(L,e,en)}),onStop:T(e=>{eo.onStop(L,e,er),"leave"!==e||q(eo)||(W("hidden"),Z(L))})}),(0,l.useEffect)(()=>{ee&&(P===c.Hidden?G.current=null:G.current=D)},[D,ee,X]);let ei=z;return B&&D&&("undefined"==typeof window||"undefined"==typeof document)&&(ei={...ei,className:function(...e){return e.filter(Boolean).join(" ")}(z.className,...Q.current.enter,...Q.current.enterFrom)}),l.createElement(M.Provider,{value:eo},l.createElement(E,{value:u(X,{visible:y.Open,hidden:y.Closed})},s({ourProps:{ref:S},theirProps:ei,defaultTag:"div",features:$,visible:"visible"===X,name:"Transition.Child"})))}),X=p(function(e,t){let{show:n,appear:r=!1,unmount:o,...i}=e,a=(0,l.useRef)(null),d=x(a,t);H();let c=b();if(void 0===n&&null!==c&&(n=u(c,{[y.Open]:!0,[y.Closed]:!1})),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[m,f]=(0,l.useState)(n?"visible":"hidden"),p=I(()=>{f("hidden")}),[v,h]=(0,l.useState)(!0),g=(0,l.useRef)([n]);w(()=>{!1!==v&&g.current[g.current.length-1]!==n&&(g.current.push(n),h(!1))},[g,n]);let E=(0,l.useMemo)(()=>({show:n,appear:r,initial:v}),[n,r,v]);(0,l.useEffect)(()=>{if(n)f("visible");else if(q(p)){let e=a.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&f("hidden")}else f("hidden")},[n,p]);let z={unmount:o};return l.createElement(M.Provider,{value:p},l.createElement(R.Provider,{value:E},s({ourProps:{...z,as:l.Fragment,children:l.createElement(_,{ref:d,...z,...i})},theirProps:{},defaultTag:l.Fragment,features:$,visible:"visible"===m,name:"Transition"})))}),W=p(function(e,t){let n=null!==(0,l.useContext)(R),r=null!==b();return l.createElement(l.Fragment,null,!n&&r?l.createElement(X,{ref:t,...e}):l.createElement(_,{ref:t,...e}))}),Y=Object.assign(X,{Child:W,Root:X})},3659:function(e,t,n){"use strict";n.d(t,{R:function(){return s}});var r={};n.r(r),n.d(r,{MDXContext:function(){return a},MDXProvider:function(){return c},useMDXComponents:function(){return u},withMDXComponents:function(){return l}});var o=n(7294),i=n(2746);let a=o.createContext({});function l(e){return function(t){let n=u(t.components);return o.createElement(e,{...t,allComponents:n})}}function u(e){let t=o.useContext(a);return o.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let d={};function c({components:e,children:t,disableParentContext:n}){let r=u(e);return n&&(r=e||d),o.createElement(a.Provider,{value:r},t)}function s({compiledSource:e,frontmatter:t,scope:n,components:a={},lazy:l}){let[u,d]=(0,o.useState)(!l||"undefined"==typeof window);(0,o.useEffect)(()=>{if(l){let e=window.requestIdleCallback(()=>{d(!0)});return()=>window.cancelIdleCallback(e)}},[]);let s=(0,o.useMemo)(()=>{let o=Object.assign({opts:{...r,...i.c}},{frontmatter:t},n),a=Object.keys(o),l=Object.values(o),u=Reflect.construct(Function,a.concat(`${e}`));return u.apply(u,l).default},[n,e]);if(!u)return o.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let m=o.createElement(c,{components:a},o.createElement(s,null));return l?o.createElement("div",null,m):m}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})}}]);