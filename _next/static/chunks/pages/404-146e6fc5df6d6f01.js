(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{6141:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return r(680)}])},7574:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(5893),a=r(7294),l=r(2891),s=r.n(l),c=r(929),i=r(526);function o(e){let{children:t,className:r,...a}=e;return(0,n.jsx)("a",{...a,className:(0,i.$)("text-gray-500 transition hover:text-gray-600",r),target:"_blank",rel:"noopener noreferrer",children:t})}var u=r(2214),d=r(8782),h=r.n(d),f=r(1664),x=r.n(f),m=r(1163),g=r(643),p=r(5290);function b(){let e=(0,m.useRouter)(),[t,r]=(0,a.useState)(!1),{mounted:l,rendered:s}=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[,r]=(0,a.useState)(),n=(0,a.useRef)(e),l=(0,a.useRef)(!1),s=(0,a.useRef)(null),c=(0,a.useRef)(null),i=(0,a.useRef)(e),o=(0,a.useCallback)(()=>{let{enterDelay:e=1,exitDelay:a=0}=t;if(i.current){if(n.current=!0,c.current&&clearTimeout(c.current),e<=0)l.current=!0;else{if(s.current)return;s.current=setTimeout(()=>{l.current=!0,s.current=null,r({})},e)}}else if(l.current=!1,a<=0)n.current=!1;else{if(c.current)return;c.current=setTimeout(()=>{n.current=!1,c.current=null,r({})},a)}},[t]);return e!==i.current&&(i.current=e,o()),{mounted:n.current,rendered:l.current}}(t,{enterDelay:20,exitDelay:300}),o=()=>{t?(r(!1),document.body.style.overflow=""):(r(!0),document.body.style.overflow="hidden")};return(0,a.useEffect)(()=>function(){document.body.style.overflow=""},[]),(0,n.jsxs)("nav",{className:"flex w-full select-none items-end pt-8 pb-12 text-gray-800 dark:text-gray-400",children:[(0,n.jsxs)("div",{className:"hidden items-end sm:flex",children:[(0,n.jsx)(g.Z,{href:"/",className:"mr-2",children:(0,n.jsx)(h(),{src:"/favicon.png",blurDataURL:"/favicon.png",alt:"logo",width:40,height:40,placeholder:"blur",className:"block h-auto"})}),c.JA.menus.map(e=>(0,n.jsx)(g.Z,{href:e.path,className:"px-3 py-1.5",children:e.label},e.label))]}),(0,n.jsxs)("div",{className:"flex sm:hidden",children:[(0,n.jsx)("button",{onClick:o,children:(0,n.jsx)(h(),{src:"/favicon.png",blurDataURL:"/favicon.png",alt:"logo",width:40,height:40,placeholder:"blur",className:"block h-auto"})}),l&&(0,n.jsx)("ul",{className:(0,i.$)("absolute inset-x-0 top-[108px] -bottom-4 z-50 flex flex-col bg-gray-100 px-6 transition-all dark:bg-gray-850",s?"opacity-100":"opacity-0"),children:[{label:"Home",path:"/"},...c.JA.menus].map((t,r)=>(0,n.jsx)(x(),{href:t.path,className:(0,i.$)("border-b border-gray-200 py-4 font-semibold transition-all dark:border-gray-700",s?"translate-x-0 opacity-100":"-translate-x-4 opacity-0",e.asPath===t.path?"text-yellow-400":"dark:text-gray-200"),style:{transitionDelay:"".concat(150+25*r,"ms")},children:t.label},t.label))})]}),(0,n.jsx)("div",{className:"ml-auto mb-1",children:(0,n.jsx)(p.Z,{})})]})}function j(e){let{children:t}=e,r=(0,a.useMemo)(()=>{let e=new Date().getFullYear();return c.JA.since===e?e:"".concat(c.JA.since,"-").concat(e)},[]);return(0,n.jsxs)("div",{className:"mx-auto max-w-3xl px-4 lg:px-0",children:[(0,n.jsx)(b,{}),(0,n.jsx)("main",{className:"relative pb-16",children:t}),(0,n.jsxs)("footer",{className:"pb-8 text-sm text-gray-800 dark:text-gray-400",children:[(0,n.jsx)(u.Z,{className:"mb-8"}),(0,n.jsxs)("div",{className:"flex flex-col items-end space-y-1",children:[(0,n.jsx)("div",{className:"flex space-x-2",children:Object.keys(c.JA.author.contacts).map(e=>{let t=c.JA.author.contacts[e];return t?(0,n.jsx)(o,{href:t,children:s()(e)},e):null})}),(0,n.jsxs)("p",{children:[(0,n.jsxs)("span",{children:["\xa9 ",r," "]}),(0,n.jsx)(o,{href:c.JA.author.contacts.github,children:c.JA.title}),(0,n.jsx)("span",{children:" Powered by "}),(0,n.jsx)(o,{href:"https://nextjs.org/",children:"Next.js"}),(0,n.jsx)("span",{children:", "}),(0,n.jsx)(o,{href:"https://pages.github.com/",children:"Github Pages"})]})]})]})]})}},7386:function(e,t,r){"use strict";r.d(t,{T:function(){return i},U:function(){return o}});var n=r(5893),a=r(2962),l=r(929);let s=e=>e?"".concat(e," – ").concat(l.JA.title):l.JA.title,c=e=>e?"".concat(l.JA.url,"/").concat(e.replace(/^\/s*/g,"")):l.JA.url,i=e=>{let{title:t,description:r,url:i}=e;return(0,n.jsx)(a.PB,{title:s(t),description:null!=r?r:l.JA.description,canonical:c(i)})},o=e=>{let{summary:t,tags:r,images:i,...o}=e,u=s(o.title),d=c(o.url),h=new Date(o.date).toISOString(),f=i.map(e=>({url:e,alt:u}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.PB,{description:t,canonical:d,openGraph:{type:"article",article:{publishedTime:h,modifiedTime:h,authors:["".concat(l.JA.url)],tags:r},url:d,title:u,description:t,images:f},additionalMetaTags:[{name:"twitter:image",content:i[0]}]}),(0,n.jsx)(a.dX,{datePublished:h,dateModified:h,images:i,url:d,title:u,description:t,authorName:l.JA.author.name,publisherName:l.JA.author.name,publisherLogo:"".concat(l.JA.url,"/favicon.ico")})]})}},5290:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),a=r(2010),l=r(7294),s=r(8254);function c(){let[e,t]=(0,l.useState)(!1),{resolvedTheme:r,setTheme:c}=(0,a.F)();return(0,l.useEffect)(()=>t(!0),[]),(0,n.jsx)(s.Z,{"aria-label":"Toggle Dark Mode",onClick:()=>c("dark"===r?"light":"dark"),children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-6 w-6 text-yellow-400 drop-shadow-base",children:e?"dark"===r?(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"}):(0,n.jsx)("path",{d:"M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"}):(0,n.jsx)(n.Fragment,{})})})}},2585:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),a=r(1664),l=r.n(a),s=r(526);function c(e){let{className:t,href:r,children:a}=e;return(0,n.jsx)(l(),{href:null!=r?r:"/",className:(0,s.$)("flex items-center rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-800",t),children:a})}},2214:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),a=r(526);function l(e){let{className:t,...r}=e;return(0,n.jsx)("hr",{...r,className:(0,a.$)("border-1 w-full border-gray-200 transition-all dark:border-gray-800",t)})}},8254:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),a=r(526);function l(e){let{className:t,type:r="button",...l}=e;return(0,n.jsx)("button",{...l,type:r,className:(0,a.$)("flex h-9 w-9 items-center justify-center rounded-lg transition-all","text-gray-700 hover:bg-gray-200 dark:text-gray-250 dark:hover:bg-gray-800",t)})}},643:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),a=r(1163),l=r(526),s=r(2585);function c(e){let{href:t,children:r,className:c}=e,i=(0,a.useRouter)(),o=i.asPath===t;return(0,n.jsx)(s.Z,{href:t,className:(0,l.$)(o?"font-semibold text-gray-800 dark:text-gray-200":"font-normal text-gray-600 dark:text-gray-400",c),children:r})}},150:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),a=r(526);function l(e){let{className:t,...r}=e;return(0,n.jsx)("h1",{...r,className:(0,a.$)("mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl",t)})}},526:function(e,t,r){"use strict";r.d(t,{$:function(){return n}});let n=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}},680:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),a=r(643),l=r(150),s=r(7574),c=r(7386);function i(){return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(c.T,{title:"404"}),(0,n.jsxs)("div",{className:"mb-16",children:[(0,n.jsx)(l.Z,{children:"404"}),(0,n.jsx)("p",{className:"mb-8 text-gray-600 dark:text-gray-400",children:"Sorry we couldn't find this page \uD83E\uDD72"}),(0,n.jsx)(a.Z,{href:"/blog",className:"rounded-md px-4 py-2 ring-1 ring-gray-300",children:"Back to blog"})]})]})}},5443:function(){},4129:function(){}},function(e){e.O(0,[302,774,888,179],function(){return e(e.s=6141)}),_N_E=e.O()}]);