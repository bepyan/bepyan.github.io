(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{1195:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/archives/tags/[tag]",function(){return r(3831)}])},7574:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(5893),a=r(7294),s=r(2891),l=r.n(s),c=r(929),o=r(526);function i(e){let{children:t,className:r,...a}=e;return(0,n.jsx)("a",{...a,className:(0,o.$)("text-gray-500 transition hover:text-gray-600",r),target:"_blank",rel:"noopener noreferrer",children:t})}var u=r(2214),d=r(8782),x=r.n(d),h=r(1664),f=r.n(h),g=r(1163),m=r(643),p=r(5290);function v(){let e=(0,g.useRouter)(),[t,r]=(0,a.useState)(!1),{mounted:s,rendered:l}=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[,r]=(0,a.useState)(),n=(0,a.useRef)(e),s=(0,a.useRef)(!1),l=(0,a.useRef)(null),c=(0,a.useRef)(null),o=(0,a.useRef)(e),i=(0,a.useCallback)(()=>{let{enterDelay:e=1,exitDelay:a=0}=t;if(o.current){if(n.current=!0,c.current&&clearTimeout(c.current),e<=0)s.current=!0;else{if(l.current)return;l.current=setTimeout(()=>{s.current=!0,l.current=null,r({})},e)}}else if(s.current=!1,a<=0)n.current=!1;else{if(c.current)return;c.current=setTimeout(()=>{n.current=!1,c.current=null,r({})},a)}},[t]);return e!==o.current&&(o.current=e,i()),{mounted:n.current,rendered:s.current}}(t,{enterDelay:20,exitDelay:300}),i=()=>{t?(r(!1),document.body.style.overflow=""):(r(!0),document.body.style.overflow="hidden")};return(0,a.useEffect)(()=>function(){document.body.style.overflow=""},[]),(0,n.jsxs)("nav",{className:"flex w-full select-none items-end pt-8 pb-12 text-gray-800 dark:text-gray-400",children:[(0,n.jsxs)("div",{className:"hidden items-end sm:flex",children:[(0,n.jsx)(m.Z,{href:"/",className:"mr-2",children:(0,n.jsx)(x(),{src:"/favicon.png",blurDataURL:"/favicon.png",alt:"logo",width:40,height:40,placeholder:"blur",className:"block h-auto"})}),c.JA.menus.map(e=>(0,n.jsx)(m.Z,{href:e.path,className:"px-3 py-1.5",children:e.label},e.label))]}),(0,n.jsxs)("div",{className:"flex sm:hidden",children:[(0,n.jsx)("button",{onClick:i,children:(0,n.jsx)(x(),{src:"/favicon.png",blurDataURL:"/favicon.png",alt:"logo",width:40,height:40,placeholder:"blur",className:"block h-auto"})}),s&&(0,n.jsx)("ul",{className:(0,o.$)("absolute inset-x-0 top-[108px] -bottom-4 z-50 flex flex-col bg-gray-100 px-6 transition-all dark:bg-gray-850",l?"opacity-100":"opacity-0"),children:[{label:"Home",path:"/"},...c.JA.menus].map((t,r)=>(0,n.jsx)(f(),{href:t.path,className:(0,o.$)("border-b border-gray-200 py-4 font-semibold transition-all dark:border-gray-700",l?"translate-x-0 opacity-100":"-translate-x-4 opacity-0",e.asPath===t.path?"text-yellow-400":"dark:text-gray-200"),style:{transitionDelay:"".concat(150+25*r,"ms")},children:t.label},t.label))})]}),(0,n.jsx)("div",{className:"ml-auto mb-1",children:(0,n.jsx)(p.Z,{})})]})}function j(e){let{children:t}=e,r=(0,a.useMemo)(()=>{let e=new Date().getFullYear();return c.JA.since===e?e:"".concat(c.JA.since,"-").concat(e)},[]);return(0,n.jsxs)("div",{className:"mx-auto max-w-3xl px-4 lg:px-0",children:[(0,n.jsx)(v,{}),(0,n.jsx)("main",{className:"relative pb-16",children:t}),(0,n.jsxs)("footer",{className:"pb-8 text-sm text-gray-800 dark:text-gray-400",children:[(0,n.jsx)(u.Z,{className:"mb-8"}),(0,n.jsxs)("div",{className:"flex flex-col items-end space-y-1",children:[(0,n.jsx)("div",{className:"flex space-x-2",children:Object.keys(c.JA.author.contacts).map(e=>{let t=c.JA.author.contacts[e];return t?(0,n.jsx)(i,{href:t,children:l()(e)},e):null})}),(0,n.jsxs)("p",{children:[(0,n.jsxs)("span",{children:["\xa9 ",r," "]}),(0,n.jsx)(i,{href:c.JA.author.contacts.github,children:c.JA.title}),(0,n.jsx)("span",{children:" Powered by "}),(0,n.jsx)(i,{href:"https://nextjs.org/",children:"Next.js"}),(0,n.jsx)("span",{children:", "}),(0,n.jsx)(i,{href:"https://pages.github.com/",children:"Github Pages"})]})]})]})]})}},5290:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),a=r(2010),s=r(7294),l=r(8254);function c(){let[e,t]=(0,s.useState)(!1),{resolvedTheme:r,setTheme:c}=(0,a.F)();return(0,s.useEffect)(()=>t(!0),[]),(0,n.jsx)(l.Z,{"aria-label":"Toggle Dark Mode",onClick:()=>c("dark"===r?"light":"dark"),children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-6 w-6 text-yellow-400 drop-shadow-base",children:e?"dark"===r?(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"}):(0,n.jsx)("path",{d:"M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"}):(0,n.jsx)(n.Fragment,{})})})}},2585:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),a=r(1664),s=r.n(a),l=r(526);function c(e){let{className:t,href:r,children:a}=e;return(0,n.jsx)(s(),{href:null!=r?r:"/",className:(0,l.$)("flex items-center rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-800",t),children:a})}},2214:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893),a=r(526);function s(e){let{className:t,...r}=e;return(0,n.jsx)("hr",{...r,className:(0,a.$)("border-1 w-full border-gray-200 transition-all dark:border-gray-800",t)})}},8254:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893),a=r(526);function s(e){let{className:t,type:r="button",...s}=e;return(0,n.jsx)("button",{...s,type:r,className:(0,a.$)("flex h-9 w-9 items-center justify-center rounded-lg transition-all","text-gray-700 hover:bg-gray-200 dark:text-gray-250 dark:hover:bg-gray-800",t)})}},3681:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893);r(7294);var a=r(526);function s(e){let{Icon:t,iconSize:r=14,text:s,className:l}=e;return(0,n.jsxs)("div",{className:(0,a.$)("flex items-center",null!=l?l:"gap-1 text-xs"),children:[(0,n.jsx)(t,{width:r,height:r}),(0,n.jsx)("span",{children:s})]})}},643:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),a=r(1163),s=r(526),l=r(2585);function c(e){let{href:t,children:r,className:c}=e,o=(0,a.useRouter)(),i=o.asPath===t;return(0,n.jsx)(l.Z,{href:t,className:(0,s.$)(i?"font-semibold text-gray-800 dark:text-gray-200":"font-normal text-gray-600 dark:text-gray-400",c),children:r})}},3625:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(5893),a=r(7484),s=r.n(a),l=r(1664),c=r.n(l),o=r(526),i=r(1262),u=r(9961),d=r(3681),x=r(5132);function h(e){let{post:t,noBorder:r}=e;return(0,n.jsxs)("li",{className:(0,o.$)("text-ye group w-full py-4 hover:drop-shadow-base",!r&&"rounded-lg px-4 ring-1 ring-gray-250 dark:ring-gray-700"),children:[(0,n.jsxs)(c(),{as:"/blog/".concat(t.slug),href:"/blog/[...slug]",className:"hover:drop-shadow-base",children:[(0,n.jsx)("p",{className:"text-xl font-bold",children:t.title}),(0,n.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:t.description})]}),(0,n.jsxs)("div",{className:"mt-2 inline-flex w-full items-start gap-2 text-sm",children:[(0,n.jsx)("div",{className:"flex flex-wrap items-center gap-2",children:t.tags.map((e,t)=>(0,n.jsx)(x.Z,{tag:e},t))}),(0,n.jsxs)("div",{className:"ml-auto flex gap-2 whitespace-nowrap group-hover:drop-shadow-base-bold",children:[(0,n.jsx)(d.Z,{Icon:i.Z,text:s()(t.date).format("YY.MM.DD")}),(0,n.jsx)(d.Z,{Icon:u.Z,text:"".concat(t.readingMinutes,"분")})]})]})]})}},5132:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5893),a=r(1664),s=r.n(a),l=r(2891),c=r.n(l),o=r(526);function i(e){let{tag:t}=e;return(0,n.jsx)(s(),{href:"/archives/tags/".concat(t),children:(0,n.jsx)("div",{className:(0,o.$)("rounded-lg bg-gray-200 px-1.5 py-0.5 text-gray-600 dark:bg-gray-700 dark:text-gray-300","transition-colors hover:bg-[#dadada] hover:text-gray-900 dark:hover:text-gray-200"),children:c()(t)})})}},150:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893),a=r(526);function s(e){let{className:t,...r}=e;return(0,n.jsx)("h1",{...r,className:(0,a.$)("mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl",t)})}},1262:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893);function a(e){let{className:t,...r}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...r,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})})}},9961:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893);function a(e){let{className:t,...r}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...r,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}},526:function(e,t,r){"use strict";r.d(t,{$:function(){return n}});let n=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}},3831:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return c},default:function(){return o}});var n=r(5893),a=r(3625),s=r(150),l=r(7574),c=!0;function o(e){let{tag:t,posts:r}=e;return(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(s.Z,{className:"flex items-end gap-4",children:["Tags - ",t," ",(0,n.jsxs)("span",{className:"text-2xl",children:["(",r.length,")"]})]}),(0,n.jsx)("ul",{className:"mt-12 space-y-4",children:r.map(e=>(0,n.jsx)(a.Z,{post:e},e.slug))})]})}},5443:function(){},4129:function(){}},function(e){e.O(0,[302,774,888,179],function(){return e(e.s=1195)}),_N_E=e.O()}]);