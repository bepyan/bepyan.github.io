(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{8949:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[...slugs]",function(){return n(2455)}])},3560:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(5893),a=n(8782),s=n.n(a),l=n(7294),o=n(2891),i=n.n(o),c=n(929),u=n(526);function d(e){let{children:t,className:n,...a}=e;return(0,r.jsx)("a",{...a,className:(0,u.$)("text-gray-500 transition hover:text-gray-600",n),target:"_blank",rel:"noopener noreferrer",children:t})}var x=n(2214),h=n(643),f=n(2010);function m(){let[e,t]=(0,l.useState)(!1),{resolvedTheme:n,setTheme:a}=(0,f.F)();return(0,l.useEffect)(()=>t(!0),[]),(0,r.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"flex h-9 w-9 items-center justify-center rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-800",onClick:()=>a("dark"===n?"light":"dark"),children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-6 w-6 text-yellow-500 dark:text-yellow-400",children:e?"dark"===n?(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"}):(0,r.jsx)("path",{d:"M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"}):(0,r.jsx)(r.Fragment,{})})})}function g(e){let{children:t}=e,n=(0,l.useMemo)(()=>{let e=new Date().getFullYear();return c.JA.since===e?e:"".concat(c.JA.since,"-").concat(e)},[]);return(0,r.jsxs)("div",{className:"mx-auto max-w-2xl px-4 sm:px-6 xl:max-w-3xl xl:px-0",children:[(0,r.jsxs)("nav",{className:"flex w-full select-none items-end pt-8 pb-12 text-gray-800 dark:text-gray-400",children:[(0,r.jsx)(h.Z,{href:"/",className:"mr-2",children:(0,r.jsx)(s(),{src:"/favicon.png",blurDataURL:"/favicon.png",alt:"logo",width:40,height:40,placeholder:"blur",className:"block h-auto"})}),c.JA.menus.map(e=>(0,r.jsx)(h.Z,{href:e.path,className:"px-3 py-1.5",children:e.label},e.label)),(0,r.jsx)("div",{className:"ml-auto mb-1",children:(0,r.jsx)(m,{})})]}),(0,r.jsx)("main",{className:"relative pb-16",children:t}),(0,r.jsxs)("footer",{className:"pb-8 text-sm text-gray-800 dark:text-gray-400",children:[(0,r.jsx)(x.Z,{className:"mb-8"}),(0,r.jsxs)("div",{className:"flex flex-col items-end space-y-1",children:[(0,r.jsx)("div",{className:"flex space-x-2",children:Object.keys(c.JA.author.contacts).map(e=>{let t=c.JA.author.contacts[e];return t?(0,r.jsx)(d,{href:t,children:i()(e)},e):null})}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("span",{children:["\xa9 ",n," "]}),(0,r.jsx)(d,{href:c.JA.author.contacts.github,children:c.JA.title}),(0,r.jsx)("span",{children:" Powered by "}),(0,r.jsx)(d,{href:"https://nextjs.org/",children:"Next.js"}),(0,r.jsx)("span",{children:", "}),(0,r.jsx)(d,{href:"https://pages.github.com/",children:"Github Pages"})]})]})]})]})}},7386:function(e,t,n){"use strict";n.d(t,{T:function(){return i},U:function(){return c}});var r=n(5893),a=n(2962),s=n(929);let l=e=>e?"".concat(e," – ").concat(s.JA.title):s.JA.title,o=e=>e?"".concat(s.JA.url,"/").concat(e.replace(/^\/s*/g,"")):s.JA.url,i=e=>{let{title:t,description:n,url:i}=e;return(0,r.jsx)(a.PB,{title:l(t),description:null!=n?n:s.JA.description,canonical:o(i)})},c=e=>{let{summary:t,tags:n,images:i,...c}=e,u=l(c.title),d=o(c.url),x=new Date(c.date).toISOString(),h=i.map(e=>({url:e,alt:u}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.PB,{description:t,canonical:d,openGraph:{type:"article",article:{publishedTime:x,modifiedTime:x,authors:["".concat(s.JA.url)],tags:n},url:d,title:u,description:t,images:h},additionalMetaTags:[{name:"twitter:image",content:i[0]}]}),(0,r.jsx)(a.dX,{datePublished:x,dateModified:x,images:i,url:d,title:u,description:t,authorName:s.JA.author.name,publisherName:s.JA.author.name,publisherLogo:"".concat(s.JA.url,"/favicon.ico")})]})}},2214:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),a=n(526);function s(e){let{className:t,...n}=e;return(0,r.jsx)("hr",{...n,className:(0,a.$)("border-1 w-full border-gray-200 transition-all dark:border-gray-800",t)})}},3681:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893);n(7294);var a=n(526);function s(e){let{Icon:t,iconSize:n=14,text:s,className:l}=e;return(0,r.jsxs)("div",{className:(0,a.$)("flex items-center",null!=l?l:"gap-1 text-xs"),children:[(0,r.jsx)(t,{width:n,height:n}),(0,r.jsx)("span",{children:s})]})}},643:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),a=n(1664),s=n.n(a),l=n(1163),o=n(526);function i(e){let{href:t,children:n,className:a}=e,i=(0,l.useRouter)(),c=i.asPath===t;return(0,r.jsx)(s(),{href:null!=t?t:"/",className:(0,o.$)(c?"font-semibold text-gray-800 dark:text-gray-200":"font-normal text-gray-600 dark:text-gray-400","rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-800",a),children:n})}},1262:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...n,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})})}},9961:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...n,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}},526:function(e,t,n){"use strict";n.d(t,{$:function(){return r}});let r=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}},2455:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return C},default:function(){return E}});var r={};n.r(r),n.d(r,{MDXContext:function(){return c},MDXProvider:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var a=n(5893),s=n(7484),l=n.n(s),o=n(7294),i=n(2746);let c=o.createContext({});function u(e){return function(t){let n=d(t.components);return o.createElement(e,{...t,allComponents:n})}}function d(e){let t=o.useContext(c);return o.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let x={};function h({components:e,children:t,disableParentContext:n}){let r=d(e);return n&&(r=e||x),o.createElement(c.Provider,{value:r},t)}function f({compiledSource:e,frontmatter:t,scope:n,components:a={},lazy:s}){let[l,c]=(0,o.useState)(!s||"undefined"==typeof window);(0,o.useEffect)(()=>{if(s){let e=window.requestIdleCallback(()=>{c(!0)});return()=>window.cancelIdleCallback(e)}},[]);let u=(0,o.useMemo)(()=>{let a=Object.assign({opts:{...r,...i.c}},{frontmatter:t},n),s=Object.keys(a),l=Object.values(a),o=Reflect.construct(Function,s.concat(`${e}`));return o.apply(o,l).default},[n,e]);if(!l)return o.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let d=o.createElement(h,{components:a},o.createElement(u,null));return s?o.createElement("div",null,d):d}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var m=n(2214),g=n(3681),p=n(2010);function v(){let e=(0,o.useRef)(null),{resolvedTheme:t}=(0,p.F)(),n="dark"===t?"dark":"light";return(0,o.useEffect)(()=>{if(!e.current||e.current.hasChildNodes())return;let t=document.createElement("script");t.src="https://giscus.app/client.js",t.async=!0,t.crossOrigin="anonymous",t.setAttribute("data-repo","bepyan/bepyan.github.io"),t.setAttribute("data-repo-id","R_kgDOIXS9lg"),t.setAttribute("data-category","General"),t.setAttribute("data-category-id","DIC_kwDOIXS9ls4CSh3S"),t.setAttribute("data-mapping","pathname"),t.setAttribute("data-strict","0"),t.setAttribute("data-reactions-enabled","1"),t.setAttribute("data-emit-metadata","0"),t.setAttribute("data-input-position","bottom"),t.setAttribute("data-theme",n),t.setAttribute("data-lang","en"),e.current.appendChild(t)},[]),(0,o.useEffect)(()=>{var e;let t=document.querySelector("iframe.giscus-frame");null==t||null===(e=t.contentWindow)||void 0===e||e.postMessage({giscus:{setConfig:{theme:n}}},"https://giscus.app")},[n]),(0,a.jsx)("section",{ref:e})}var j=n(1262),w=n(9961),b=n(3560),y=n(7386),k=n(526);let N=e=>{var t;let[n,r]=(0,o.useState)(null==e?void 0:null===(t=e[0])||void 0===t?void 0:t.slug);return(0,o.useEffect)(()=>{var t,n,a,s;let l;if(0===e.length)return;let o=window.getComputedStyle(document.documentElement),i=parseFloat(null!==(a=null===(t=o.getPropertyValue("--scroll-mt").match(/[\d.]+/))||void 0===t?void 0:t[0])&&void 0!==a?a:"0")*parseFloat(null!==(s=null===(n=o.fontSize.match(/[\d.]+/))||void 0===n?void 0:n[0])&&void 0!==s?s:"16");function c(){l=Array.from(document.querySelectorAll(".prose h2:not(#table-of-contents),h3:not(#table-of-contents)")).map(e=>({id:e.id,top:e.offsetTop}))}function u(){if(!l)return;let e=window.pageYOffset+i-120+1,t=l[0].id;for(let n=0;n<l.length;n++)e>=l[n].top&&(t=l[n].id);r(t)}return c(),u(),window.addEventListener("scroll",u,{capture:!0,passive:!0}),window.addEventListener("resize",c,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",u,{capture:!0}),window.removeEventListener("resize",c,{capture:!0})}},[e]),{tableOfContents:e,currentSectionSlug:n}};function A(e){let{tableOfContents:t}=e,{currentSectionSlug:n}=N(t),r=e=>e.slug===n,s=e=>e.slug===n||e.subSections.some(e=>e.slug===n);return 0===t.length?(0,a.jsx)(a.Fragment,{}):(0,a.jsxs)("div",{className:"fixed ml-8 mt-8 overflow-y-auto px-8",children:[(0,a.jsx)("p",{className:"mb-4 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100",children:"On this page"}),(0,a.jsx)("ul",{className:"flex flex-col items-start justify-start text-sm",children:t.map(e=>(0,a.jsxs)(o.Fragment,{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#".concat(e.slug),className:(0,k.$)("group block py-1 transition-colors",e.subSections&&"font-medium",s(e)?"font-medium text-yellow-500 drop-shadow-base dark:text-yellow-400":"text-gray-700 hover:text-gray-900 hover:drop-shadow-base dark:text-gray-400 dark:hover:text-gray-300"),children:e.text})}),e.subSections.map(e=>(0,a.jsx)("li",{className:"ml-4",children:(0,a.jsxs)("a",{href:"#".concat(e.slug),className:(0,k.$)("group flex items-start py-1 transition-colors",r(e)?"text-yellow-500 drop-shadow-base dark:text-yellow-400":"text-gray-700 hover:text-gray-900 hover:drop-shadow-base dark:text-gray-400 dark:hover:text-gray-300"),children:[(0,a.jsx)("svg",{width:"3",height:"24",viewBox:"0 -9 3 24",className:(0,k.$)("mr-2 overflow-visible","text-gray-400 group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-500"),children:(0,a.jsx)("path",{d:"M0 0L3 3L0 6",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),e.text]})},e.slug))]},e.slug))})]})}function M(e){let{tableOfContents:t}=e;return 0===t.length?(0,a.jsx)(a.Fragment,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{id:"table-of-contents",children:"Table of contents"}),(0,a.jsx)("ul",{children:t.map(e=>(0,a.jsxs)("li",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"#".concat(e.slug),children:e.text})}),(0,a.jsx)("ul",{children:e.subSections.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#".concat(e.slug),children:e.text})},e.slug))})]},e.slug))}),(0,a.jsx)(m.Z,{})]})}var C=!0;function E(e){let{post:t,slug:n,compiledSource:r,tableOfContents:s}=e;return(0,a.jsxs)(b.Z,{children:[(0,a.jsx)(y.U,{...t,url:"/blog/".concat(n),summary:t.description,images:[]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"mb-4 text-center text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl",children:t.title}),(0,a.jsx)("div",{className:"mt-2 flex w-full flex-col justify-between md:flex-row md:items-center",children:(0,a.jsxs)("div",{className:"mx-auto flex gap-2 text-gray-600 dark:text-gray-400",children:[(0,a.jsx)(g.Z,{Icon:j.Z,text:l()(t.date).format("YYYY.MM.DD")}),(0,a.jsx)(g.Z,{Icon:w.Z,text:"".concat(t.readingMinutes,"분")})]})}),(0,a.jsx)(m.Z,{className:"mt-4"})]}),(0,a.jsx)("div",{className:"absolute left-full",children:(0,a.jsx)(A,{tableOfContents:s})}),(0,a.jsxs)("div",{className:"prose mt-4 w-full max-w-none dark:prose-dark",children:[(0,a.jsx)(M,{tableOfContents:s}),(0,a.jsx)(f,{compiledSource:r})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(m.Z,{className:"my-8"}),(0,a.jsx)(v,{})]})]})}},5443:function(){},4129:function(){},2746:function(e,t,n){let r=n(5893);e.exports.c=r}},function(e){e.O(0,[302,774,888,179],function(){return e(e.s=8949)}),_N_E=e.O()}]);