(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{4994:function(e,t,n){"use strict";n.d(t,{M:function(){return x}});var r=n(7294),i=n(9734),a=n(4283);function s(){let e=(0,r.useRef)(!1);return(0,a.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var o=n(8168),l=n(6770);class c extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u({children:e,isPresent:t}){let n=(0,r.useId)(),i=(0,r.useRef)(null),a=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)(()=>{let{width:e,height:r,top:s,left:o}=a.current;if(t||!i.current||!e||!r)return;i.current.dataset.motionPopId=n;let l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${s}px !important;
            left: ${o}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[t]),r.createElement(c,{isPresent:t,childRef:i,sizeRef:a},r.cloneElement(e,{ref:i}))}let d=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:a,presenceAffectsLayout:s,mode:c})=>{let d=(0,l.h)(p),f=(0,r.useId)(),h=(0,r.useMemo)(()=>({id:f,initial:t,isPresent:n,custom:a,onExitComplete:e=>{for(let t of(d.set(e,!0),d.values()))if(!t)return;i&&i()},register:e=>(d.set(e,!1),()=>d.delete(e))}),s?void 0:[n]);return(0,r.useMemo)(()=>{d.forEach((e,t)=>d.set(t,!1))},[n]),r.useEffect(()=>{n||d.size||!i||i()},[n]),"popLayout"===c&&(e=r.createElement(u,{isPresent:n},e)),r.createElement(o.O.Provider,{value:h},e)};function p(){return new Map}var f=n(6179),h=n(3911);let m=e=>e.key||"",x=({children:e,custom:t,initial:n=!0,onExitComplete:o,exitBeforeEnter:l,presenceAffectsLayout:c=!0,mode:u="sync"})=>{l&&(u="wait");let[p]=function(){let e=s(),[t,n]=(0,r.useState)(0),a=(0,r.useCallback)(()=>{e.current&&n(t+1)},[t]),o=(0,r.useCallback)(()=>i.Z_.postRender(a),[a]);return[o,t]}(),x=(0,r.useContext)(f.p).forceRender;x&&(p=x);let g=s(),v=function(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}(e),y=v,w=new Set,j=(0,r.useRef)(y),C=(0,r.useRef)(new Map).current,b=(0,r.useRef)(!0);if((0,a.L)(()=>{b.current=!1,function(e,t){e.forEach(e=>{let n=m(e);t.set(n,e)})}(v,C),j.current=y}),(0,h.z)(()=>{b.current=!0,C.clear(),w.clear()}),b.current)return r.createElement(r.Fragment,null,y.map(e=>r.createElement(d,{key:m(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:c,mode:u},e)));y=[...y];let k=j.current.map(m),E=v.map(m),S=k.length;for(let e=0;e<S;e++){let t=k[e];-1===E.indexOf(t)&&w.add(t)}return"wait"===u&&w.size&&(y=[]),w.forEach(e=>{if(-1!==E.indexOf(e))return;let n=C.get(e);if(!n)return;let i=k.indexOf(e),a=()=>{C.delete(e),w.delete(e);let t=j.current.findIndex(t=>t.key===e);if(j.current.splice(t,1),!w.size){if(j.current=v,!1===g.current)return;p(),o&&o()}};y.splice(i,0,r.createElement(d,{key:m(n),isPresent:!1,onExitComplete:a,custom:t,presenceAffectsLayout:c,mode:u},n))}),y=y.map(e=>{let t=e.key;return w.has(t)?e:r.createElement(d,{key:m(e),isPresent:!0,presenceAffectsLayout:c,mode:u},e)}),r.createElement(r.Fragment,null,w.size?y:y.map(e=>(0,r.cloneElement)(e)))}},5060:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/snippets",function(){return n(3672)}])},3681:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);n(7294);var i=n(416);function a(e){let{Icon:t,iconSize:n=14,text:a,className:s}=e;return(0,r.jsxs)("div",{className:(0,i.$)("flex items-center",null!=s?s:"gap-1 text-xs"),children:[(0,r.jsx)(t,{width:n,height:n}),(0,r.jsx)("span",{children:a})]})}},4978:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);n(7294);var i=n(416);function a(e){let{className:t,selected:n,...a}=e;return(0,r.jsx)("div",{...a,className:(0,i.$)("rounded-lg px-2 py-0.5 transition-colors","bg-secondary hover:text-primary hover:bg-tertiary",n?"text-primary font-semibold ring-2 ring-neutral-350":"text-secondary font-normal",t)})}},7233:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);n(7294);var i=n(416);function a(e){let{children:t,className:n}=e;return(0,r.jsx)("p",{className:(0,i.$)("text-tertiary mb-4",n),children:t})}},6559:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),i=n(7484),a=n.n(i),s=n(1664),o=n.n(s),l=n(416),c=n(2227),u=n(3681);function d(e){let{post:t}=e;return(0,r.jsx)(o(),{as:t.slug,href:"/snippets/[...slug]",children:(0,r.jsxs)("div",{className:(0,l.$)("group w-full py-4 transition-all hover:bg-neutral-200 dark:hover:bg-neutral-800","rounded-lg px-4 ring-1 ring-neutral-300 dark:ring-neutral-700"),children:[(0,r.jsx)("p",{className:"text-lg font-bold lg:text-xl",children:t.title}),(0,r.jsx)("div",{className:"mt-2 inline-flex w-full items-start gap-2 text-sm",children:(0,r.jsx)("div",{className:"flex gap-2 whitespace-nowrap text-neutral-600 dark:text-neutral-400",children:(0,r.jsx)(u.Z,{Icon:c.Z,text:a()(t.date).format("YY.MM.DD")})})})]})})}},150:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),i=n(416);function a(e){let{className:t,...n}=e;return(0,r.jsx)("h1",{...n,className:(0,i.$)("mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl",t)})}},2227:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893);function i(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...n,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})})}},1569:function(e,t,n){"use strict";n.d(t,{HA:function(){return o},Ji:function(){return c},Oj:function(){return s},YK:function(){return l},eu:function(){return u},gS:function(){return d},rv:function(){return a},xN:function(){return i}});let r=[.6,-.05,.01,.99],i={animate:{transition:{staggerChildren:.2}}},a={animate:{transition:{staggerChildren:.1}}},s={animate:{transition:{staggerChildren:.05}}},o={animate:{transition:{staggerChildren:.01}}},l={initial:{opacity:.3,transition:{duration:.3,ease:r},willChange:"opacity"},animate:{opacity:1,transition:{duration:.3,ease:r},willChange:"opacity"},exit:{opacity:.3,transition:{duration:.3,ease:r},willChange:"opacity"}},c={initial:{opacity:0,transition:{duration:.6,ease:r},willChange:"opacity"},animate:{opacity:1,transition:{duration:.6,ease:r},willChange:"opacity"},exit:{opacity:0,transition:{duration:.6,ease:r},willChange:"opacity"}},u={initial:{opacity:0,y:30,transition:{duration:.6,ease:r},willChange:"opacity, transform"},animate:{opacity:1,y:0,transition:{duration:.6,ease:r},willChange:"opacity, transform"},exit:{opacity:0,y:30,transition:{duration:.6,ease:r},willChange:"opacity, transform"}},d={initial:{opacity:0,x:30,transition:{duration:.6,ease:r},willChange:"opacity, transform"},animate:{opacity:1,x:0,transition:{duration:.6,ease:r},willChange:"opacity, transform"},exit:{opacity:0,x:-30,transition:{duration:.6,ease:r},willChange:"opacity, transform"}}},3672:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return y},default:function(){return w}});var r=n(5893),i=n(7172),a=n(4994),s=n(1664),o=n.n(s),l=n(1163),c=n(2891),u=n.n(c),d=n(6624),p=n(4978),f=n(7233),h=n(6559),m=n(150),x=n(3720),g=n(7386),v=n(1569),y=!0;function w(e){var t;let{snippetList:n}=e,s=(0,l.useRouter)(),c=null===(t=s.query)||void 0===t?void 0:t.key,y=!c||"all"===c,w=n.reduce((e,t)=>e+t.postList.length,0),j=n.filter(e=>!!y||e.key===c);return(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(g.T,{title:"Snippets",description:"개발하면서 실제 사용되었던 코드 조각들 입니다. 간단한 JavaScript 유틸 함수, CSS 꼼수에서부터 Framework 사용 꿀팁까지 정리되어 있습니다 \uD83C\uDF6F",url:"/snippets"}),(0,r.jsx)(m.Z,{children:"Code Snippets"}),(0,r.jsxs)(i.E.div,{variants:v.Oj,initial:"initial",animate:"animate",exit:"exit",children:[(0,r.jsx)(i.E.div,{variants:v.YK,children:(0,r.jsxs)(f.Z,{children:["개발하면서 실제 사용되었던 코드 조각들 입니다.",(0,r.jsx)("br",{}),"간단한 JavaScript 유틸 함수, CSS 꼼수에서부터 Framework 사용 꿀팁까지 정리되어 있습니다 \uD83C\uDF6F"]})}),(0,r.jsxs)(i.E.div,{className:"bg-primary sticky top-0 z-10 -mx-2 flex items-center gap-2 overflow-scroll bg-opacity-70 px-2 py-4 backdrop-blur transition-all no-scrollbar dark:bg-opacity-70",variants:v.HA,children:[(0,r.jsx)(i.E.div,{variants:v.YK,children:(0,r.jsx)(o(),{href:"?key=all",children:(0,r.jsxs)(p.Z,{selected:y,className:"cursor-pointer whitespace-nowrap",children:["All ",(0,r.jsx)("span",{className:"text-xs",children:w})]})})}),n.map(e=>{let{key:t,postList:n}=e;return(0,r.jsx)(i.E.div,{variants:v.YK,children:(0,r.jsx)(o(),{href:"?key=".concat(t),children:(0,r.jsxs)(p.Z,{className:"cursor-pointer whitespace-nowrap",selected:t===c,children:[u()(t)," ",(0,r.jsx)("span",{className:"text-xs",children:n.length})]})})},t)})]}),(0,r.jsx)(d.Z,{"data-ad-slot":"5794684285","data-ad-format":"auto","data-full-width-responsive":"true"}),(0,r.jsx)("div",{className:"mt-8 space-y-16",children:j.map(e=>{let{key:t,postList:n}=e;return(0,r.jsx)(i.E.ul,{className:"mt-4 grid grid-cols-2 gap-4",variants:v.HA,children:(0,r.jsx)(a.M,{mode:"wait",children:n.map(e=>(0,r.jsx)(i.E.li,{variants:v.YK,children:(0,r.jsx)(h.Z,{post:e})},e.slug))})},t)})})]})]})}},2891:function(e,t,n){let r=n(1439),i=n(7224),a="[^\\s'’\\(\\)!?;:\"-]",s=RegExp(`(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${a}))|(${a}))(${a}*[’']*${a}*)`,"g"),o=e=>e.map(e=>[RegExp(`\\b${e}\\b`,"gi"),e]);e.exports=(e,t={})=>{e=e.toLowerCase().replace(s,(e,t="",n,i,a,s,o)=>{let l=e.length+s>=o.length,c=function(e){let t=e[0];return/\s/.test(t)?e.slice(1):/[\(\)]/.test(t)?null:e}(e);return c?!n&&r.has(i+a)&&!l?c:t+(i||n).toUpperCase()+a:e});let n=t.special||[],a=[...i,...n],l=o(a);return l.forEach(([t,n])=>{e=e.replace(t,n)}),e}},1439:function(e){e.exports=new Set(["for","and","nor","but","or","yet","so","a","an","the","aboard","about","above","across","after","against","along","amid","among","anti","around","as","at","before","behind","below","beneath","beside","besides","between","beyond","but","by","concerning","considering","despite","down","during","except","excepting","excluding","following","for","from","in","inside","into","like","minus","near","of","off","on","onto","opposite","over","past","per","plus","regarding","round","save","since","than","through","to","toward","towards","under","underneath","unlike","until","up","upon","versus","via","with","within","without"])},7224:function(e){e.exports=["ZEIT","ZEIT Inc.","Vercel","Vercel Inc.","CLI","API","HTTP","HTTPS","JSX","DNS","URL","now.sh","now.json","vercel.app","vercel.json","CI","CD","CDN","package.json","package.lock","yarn.lock","GitHub","GitLab","CSS","Sass","JS","JavaScript","TypeScript","HTML","WordPress","Next.js","Node.js","Webpack","Docker","Bash","Kubernetes","SWR","TinaCMS","UI","UX","TS","TSX","iPhone","iPad","watchOS","iOS","iPadOS","macOS","PHP","composer.json","composer.lock","CMS","SQL","C","C#","GraphQL","GraphiQL","JWT","JWTs"]}},function(e){e.O(0,[664,172,720,774,888,179],function(){return e(e.s=5060)}),_N_E=e.O()}]);