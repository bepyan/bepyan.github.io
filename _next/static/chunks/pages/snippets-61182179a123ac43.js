(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{5060:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/snippets",function(){return r(7240)}])},7386:function(t,e,r){"use strict";r.d(e,{T:function(){return c},U:function(){return o}});var n=r(5893),s=r(2962),a=r(929);let i=t=>t?"".concat(t," – ").concat(a.JA.title):a.JA.title,l=t=>t?"".concat(a.JA.url,"/").concat(t.replace(/^\/s*/g,"")):a.JA.url,c=t=>{let{title:e,description:r,url:c}=t;return(0,n.jsx)(s.PB,{title:i(e),description:null!=r?r:a.JA.description,canonical:l(c)})},o=t=>{let{summary:e,tags:r,images:c,...o}=t,u=i(o.title),d=l(o.url),x=new Date(o.date).toISOString(),g=c.map(t=>({url:t,alt:u}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.PB,{description:e,canonical:d,openGraph:{type:"article",article:{publishedTime:x,modifiedTime:x,authors:["".concat(a.JA.url)],tags:r},url:d,title:u,description:e,images:g},additionalMetaTags:[{name:"twitter:image",content:c[0]}]}),(0,n.jsx)(s.dX,{datePublished:x,dateModified:x,images:c,url:d,title:u,description:e,authorName:a.JA.author.name,publisherName:a.JA.author.name,publisherLogo:"".concat(a.JA.url,"/favicon.ico")})]})}},3681:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(5893);r(7294);var s=r(526);function a(t){let{Icon:e,iconSize:r=14,text:a,className:i}=t;return(0,n.jsxs)("div",{className:(0,s.$)("flex items-center",null!=i?i:"gap-1 text-xs"),children:[(0,n.jsx)(e,{width:r,height:r}),(0,n.jsx)("span",{children:a})]})}},4978:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(5893);r(7294);var s=r(526);function a(t){let{className:e,selected:r,...a}=t;return(0,n.jsx)("div",{...a,className:(0,s.$)("rounded-lg px-1.5 py-0.5","transition-colors hover:bg-[#dadada] hover:text-gray-900 dark:hover:text-gray-200",r?"bg-gray-200 ring-1 ring-gray-300 dark:bg-gray-700 dark:text-gray-200":"bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300",e)})}},7233:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(5893);r(7294);var s=r(526);function a(t){let{children:e,className:r}=t;return(0,n.jsx)("p",{className:(0,s.$)("mb-4 text-gray-600 dark:text-gray-400",r),children:e})}},150:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(5893),s=r(526);function a(t){let{className:e,...r}=t;return(0,n.jsx)("h1",{...r,className:(0,s.$)("mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl",e)})}},1262:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var n=r(5893);function s(t){let{className:e,...r}=t;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:e,...r,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})})}},7240:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return y},default:function(){return k}});var n=r(5893),s=r(1664),a=r.n(s),i=r(1163),l=r(2891),c=r.n(l),o=r(4978),u=r(7233),d=r(7484),x=r.n(d),g=r(526),p=r(1262),h=r(3681);function m(t){let{post:e,noBorder:r}=t;return(0,n.jsx)(a(),{as:"/".concat(e.slug),href:"/snippets/[...slug]",children:(0,n.jsxs)("div",{className:(0,g.$)("text-ye group w-full py-4 transition-all hover:bg-gray-200 dark:hover:bg-gray-800",!r&&"rounded-lg px-4 ring-1 ring-gray-250 dark:ring-gray-700"),children:[(0,n.jsx)("p",{className:"text-xl font-bold",children:e.title}),(0,n.jsx)("div",{className:"mt-2 inline-flex w-full items-start gap-2 text-sm",children:(0,n.jsx)("div",{className:"flex gap-2 whitespace-nowrap text-gray-600 dark:text-gray-400",children:(0,n.jsx)(h.Z,{Icon:p.Z,text:x()(e.date).format("YY.MM.DD")})})})]})})}var f=r(150),v=r(6621),j=r(7386),y=!0;function k(t){var e;let{snippetList:r}=t,s=(0,i.useRouter)(),l=null===(e=s.query)||void 0===e?void 0:e.key,d=!l||"all"===l,x=r.reduce((t,e)=>t+e.postList.length,0),g=r.reduce((t,e)=>l&&"all"!==l&&l!==e.key?[...t]:[...t,...e.postList],[]);return(0,n.jsxs)(v.Z,{children:[(0,n.jsx)(j.T,{title:"Snippets",description:"",url:"/snippets"}),(0,n.jsx)(f.Z,{children:"Code Snippets"}),(0,n.jsxs)(u.Z,{children:["개발하면서 실제 사용되었던 코드 조각들 입니다.",(0,n.jsx)("br",{}),"간단한 Javavscript 유틸 함수, CSS 꼼수에서부터 Framework 사용 꿀팁까지 정리되어 있습니다 \uD83C\uDF6F"]}),(0,n.jsxs)("div",{className:"sticky top-0 -mx-2 flex items-center gap-2 bg-gray-100 bg-opacity-80 px-2 py-4 backdrop-blur transition-all dark:bg-gray-900 dark:bg-opacity-50",children:[(0,n.jsx)(a(),{href:"?key=all",children:(0,n.jsxs)(o.Z,{selected:d,className:"cursor-pointer",children:["All ",(0,n.jsx)("span",{className:"text-xs",children:x})]})}),r.map(t=>{let{key:e,postList:r}=t;return(0,n.jsx)(a(),{href:"?key=".concat(e),children:(0,n.jsxs)(o.Z,{className:"cursor-pointer",selected:e===l,children:[c()(e)," ",(0,n.jsx)("span",{className:"text-xs",children:r.length})]})},e)})]}),(0,n.jsx)("div",{className:"mt-8 space-y-16",children:d?r.map(t=>{let{key:e,postList:r}=t;return(0,n.jsx)("ul",{className:"mt-4 grid grid-cols-2 gap-4",children:r.map(t=>(0,n.jsx)("div",{className:"",children:(0,n.jsx)(m,{post:t})},t.slug))},e)}):(0,n.jsx)("ul",{className:"mt-4 grid grid-cols-2 gap-4",children:g.map(t=>(0,n.jsx)("div",{className:"",children:(0,n.jsx)(m,{post:t})},t.slug))})})]})}}},function(t){t.O(0,[302,854,774,888,179],function(){return t(t.s=5060)}),_N_E=t.O()}]);