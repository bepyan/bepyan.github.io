"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[898],{7386:function(e,t,r){r.d(t,{T:function(){return i},U:function(){return c}});var s=r(5893),a=r(2962),n=r(929);let o=e=>e?"".concat(e," – ").concat(n.JA.title):n.JA.title,l=e=>e?"".concat(n.JA.url,"/").concat(e.replace(/^\/s*/g,"")):n.JA.url,i=e=>{let{title:t,description:r,url:i}=e;return(0,s.jsx)(a.PB,{title:o(t),description:null!=r?r:n.JA.description,canonical:l(i)})},c=e=>{let{summary:t,tags:r,images:i,...c}=e,d=o(c.title),u=l(c.url),x=new Date(c.date).toISOString(),h=i.map(e=>({url:e,alt:d}));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.PB,{description:t,canonical:u,openGraph:{type:"article",article:{publishedTime:x,modifiedTime:x,authors:["".concat(n.JA.url)],tags:r},url:u,title:d,description:t,images:h},additionalMetaTags:[{name:"twitter:image",content:i[0]}]}),(0,s.jsx)(a.dX,{datePublished:x,dateModified:x,images:i,url:u,title:d,description:t,authorName:n.JA.author.name,publisherName:n.JA.author.name,publisherLogo:"".concat(n.JA.url,"/favicon.ico")})]})}},3681:function(e,t,r){r.d(t,{Z:function(){return n}});var s=r(5893);r(7294);var a=r(526);function n(e){let{Icon:t,iconSize:r=14,text:n,className:o}=e;return(0,s.jsxs)("div",{className:(0,a.$)("flex items-center",null!=o?o:"gap-1 text-xs"),children:[(0,s.jsx)(t,{width:r,height:r}),(0,s.jsx)("span",{children:n})]})}},150:function(e,t,r){r.d(t,{Z:function(){return n}});var s=r(5893),a=r(526);function n(e){let{className:t,...r}=e;return(0,s.jsx)("h1",{...r,className:(0,a.$)("mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl",t)})}},1262:function(e,t,r){r.d(t,{Z:function(){return a}});var s=r(5893);function a(e){let{className:t,...r}=e;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...r,children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})})}},9961:function(e,t,r){r.d(t,{Z:function(){return a}});var s=r(5893);function a(e){let{className:t,...r}=e;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...r,children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}},4593:function(e,t,r){r.d(t,{Z:function(){return a}});var s=r(5893);function a(e){let{className:t,...r}=e;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:t,...r,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z",clipRule:"evenodd"})})}},2898:function(e,t,r){r.d(t,{Z:function(){return J}});var s=r(5893),a=r(7484),n=r.n(a),o=r(3659),l=r(526),i=r(7294);let c=()=>{(0,i.useEffect)(()=>{let e;let t=t=>{var r,s;let a=t.target.closest(".rehype-code-wrap--copy");if(!a)return;let n=null!==(s=null===(r=a.parentNode.querySelector("code"))||void 0===r?void 0:r.innerText)&&void 0!==s?s:"",o=a.querySelector(".rehype-code-wrap--copy-icon"),l=a.querySelector(".rehype-code-wrap--check-icon");navigator.clipboard.writeText(n).then(()=>{l&&o&&(l.style.display="block",o.style.display="none",e=setTimeout(()=>{l.style.display="none",o.style.display="block"},1500))}).catch(e=>alert(e.message))};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t),e&&clearInterval(e)}},[])};var d=r(2557),u=r(2214),x=r(3681),h=r(150),m=r(2010);function g(){let e=(0,i.useRef)(null),{resolvedTheme:t}=(0,m.F)(),r="dark"===t?"dark":"light";return(0,i.useEffect)(()=>{if(!e.current||e.current.hasChildNodes())return;let t=document.createElement("script");t.src="https://giscus.app/client.js",t.async=!0,t.crossOrigin="anonymous",t.setAttribute("data-repo","bepyan/bepyan.github.io"),t.setAttribute("data-repo-id","R_kgDOIXS9lg"),t.setAttribute("data-category","General"),t.setAttribute("data-category-id","DIC_kwDOIXS9ls4CSh3S"),t.setAttribute("data-mapping","pathname"),t.setAttribute("data-strict","0"),t.setAttribute("data-reactions-enabled","1"),t.setAttribute("data-emit-metadata","0"),t.setAttribute("data-input-position","bottom"),t.setAttribute("data-theme",r),t.setAttribute("data-lang","en"),e.current.appendChild(t)},[]),(0,i.useEffect)(()=>{var e;let t=document.querySelector("iframe.giscus-frame");null==t||null===(e=t.contentWindow)||void 0===e||e.postMessage({giscus:{setConfig:{theme:r}}},"https://giscus.app")},[r]),(0,s.jsx)("section",{ref:e})}var p=r(1262),v=r(9961),f=r(2585);function j(e){let{prevPost:t,nextPost:r}=e;return(0,s.jsxs)("div",{className:"flex items-center font-semibold text-slate-700 dark:text-slate-200",children:[t&&(0,s.jsxs)(f.Z,{href:t.slug,className:"group gap-3 px-4 py-2",children:[(0,s.jsx)("svg",{viewBox:"0 0 3 6",className:"h-1.5 w-auto overflow-visible text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300",children:(0,s.jsx)("path",{d:"M3 0L0 3L3 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,s.jsx)("span",{children:t.title})]}),r&&(0,s.jsxs)(f.Z,{href:r.slug,className:"group ml-auto gap-3 px-4 py-2 text-right",children:[(0,s.jsx)("span",{children:r.title}),(0,s.jsx)("svg",{viewBox:"0 0 3 6",className:"h-1.5 w-auto overflow-visible text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300",children:(0,s.jsx)("path",{d:"M0 0L3 3L0 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})}var w=r(7386),y=r(1664),k=r.n(y),b=r(4593);function N(e){let{currentPost:t,serize:r}=e,[a,o]=(0,i.useState)(!1),c=r.posts.findIndex(e=>e.slug===t.slug),d=()=>{a||o(!a)};return(0,s.jsxs)("div",{className:(0,l.$)("rounded-lg bg-gray-150 p-4 dark:bg-gray-800",!a&&"cursor-pointer transition-all hover:bg-gray-200 dark:hover:bg-gray-700"),onClick:d,children:[(0,s.jsx)("p",{className:"text-base font-medium sm:text-lg",children:r.title}),(0,s.jsxs)("div",{className:"mt-1 flex gap-3",children:[(0,s.jsx)(x.Z,{Icon:b.Z,text:"".concat(c+1," / ").concat(r.posts.length)}),(0,s.jsx)(x.Z,{Icon:p.Z,text:n()(r.date).format("YY.MM.DD")}),(0,s.jsx)(x.Z,{Icon:v.Z,text:"".concat(r.readingMinutes,"분")})]}),(0,s.jsx)("div",{className:"mt-3 whitespace-pre-wrap text-sm",children:(0,s.jsxs)("div",{className:"",children:[r.description,!a&&(0,s.jsx)("span",{className:"ml-3 text-gray-700 dark:text-gray-300",onClick:()=>o(!0),children:"더보기"})]})}),a&&(0,s.jsxs)("div",{className:"mt-4 flex flex-col gap-2",children:[r.posts.map((e,r)=>(0,s.jsxs)(k(),{href:e.slug,className:(0,l.$)("text-gray-400 transition-all hover:text-gray-700 dark:hover:text-gray-250",e.slug===t.slug&&"font-semibold text-gray-700 dark:text-gray-200"),children:[r+1,". ",e.title]},r)),(0,s.jsx)("span",{className:"mt-2 mr-auto cursor-pointer text-sm text-gray-400 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-250",onClick:()=>o(!1),children:"간략히"})]})]})}function A(e){let{className:t,...r}=e;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:t,...r,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",clipRule:"evenodd"})})}function L(e){let{className:t,...r}=e;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...r,children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"})})}var Z=r(8254);function C(){let[e,t]=(0,i.useState)(!1),r=async()=>{let e=window.document.location.href;try{await navigator.clipboard.writeText(e),t(!0)}catch(r){console.error(r),alert("클립보드 복사에 실패했습니다.")}};return(0,i.useEffect)(()=>{let r;return e&&(r=setTimeout(()=>{t(!1)},1500)),()=>{r&&clearInterval(r)}},[e]),(0,s.jsx)(Z.Z,{className:"mr-auto",onClick:()=>void r(),children:e?(0,s.jsx)(A,{width:20}):(0,s.jsx)(L,{width:20})})}function S(e){let{className:t,...r}=e;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...r,children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})})}function M(e){let{className:t,...r}=e;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...r,children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3"})})}var E=r(5290);let I=e=>{let[t,r]=(0,i.useState)();return(0,i.useEffect)(()=>{var t,s,a,n;let o;if(0===e.length)return;let l=window.getComputedStyle(document.documentElement),i=parseFloat(null!==(a=null===(t=l.getPropertyValue("--scroll-mt").match(/[\d.]+/))||void 0===t?void 0:t[0])&&void 0!==a?a:"0")*parseFloat(null!==(n=null===(s=l.fontSize.match(/[\d.]+/))||void 0===s?void 0:s[0])&&void 0!==n?n:"16");function c(){o=Array.from(document.querySelectorAll(".prose h2:not(#table-of-contents),h3:not(#table-of-contents)")).map(e=>({id:e.id,top:e.offsetTop}))}function d(){let e;if(!o)return;let t=window.pageYOffset+i-120+1;for(let s=0;s<o.length;s++)t>=o[s].top&&(e=o[s].id);r(e)}return c(),d(),window.addEventListener("scroll",d,{capture:!0,passive:!0}),window.addEventListener("resize",c,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",d,{capture:!0}),window.removeEventListener("resize",c,{capture:!0})}},[e]),{tableOfContents:e,currentSectionSlug:t}};function B(e){let{tableOfContents:t,className:r}=e,{currentSectionSlug:a}=I(t),n=e=>e.slug===a,o=e=>e.slug===a||e.subSections.some(e=>e.slug===a);return(0,s.jsxs)("div",{className:(0,l.$)("overflow-hidden rounded-xl border border-gray-200 transition-all dark:border-gray-800",r),children:[0!==t.length&&(0,s.jsxs)("div",{className:"bg-gray-100 p-4 pr-2 dark:border-gray-700 dark:bg-gray-800",children:[(0,s.jsx)("p",{id:"toc-header",className:"text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100",children:"On this page"}),(0,s.jsx)("ul",{id:"toc-content",className:"mt-2 flex flex-col items-start justify-start text-sm",children:t.map(e=>(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#".concat(e.slug),className:(0,l.$)("group block py-1 transition-colors",e.subSections&&"font-medium",o(e)?"font-medium text-gray-900 drop-shadow-base-bold dark:font-medium dark:text-yellow-400 dark:drop-shadow-base":"text-gray-700 hover:text-gray-900 hover:drop-shadow-base-bold dark:text-gray-400 dark:hover:text-gray-300 dark:hover:drop-shadow-base"),children:e.text})}),e.subSections.map(e=>(0,s.jsx)("li",{className:"ml-4",children:(0,s.jsxs)("a",{href:"#".concat(e.slug),className:(0,l.$)("group flex items-start py-1 transition-colors",n(e)?"font-medium text-gray-900 drop-shadow-base-bold dark:text-yellow-400 dark:drop-shadow-base":"text-gray-700 hover:text-gray-900 hover:drop-shadow-base-bold dark:text-gray-400 dark:hover:text-gray-300 dark:hover:drop-shadow-base"),children:[(0,s.jsx)("svg",{width:"3",height:"24",viewBox:"0 -9 3 24",className:(0,l.$)("mr-2 overflow-visible","text-gray-400 group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-500"),children:(0,s.jsx)("path",{d:"M0 0L3 3L0 6",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),e.text]})},e.slug))]},e.slug))})]}),(0,s.jsxs)("div",{className:"flex items-center justify-end bg-gray-150 p-2 dark:bg-gray-700",children:[(0,s.jsx)(C,{}),(0,s.jsx)(Z.Z,{onClick:()=>window.scrollTo({top:0}),children:(0,s.jsx)(M,{width:20})}),(0,s.jsx)(Z.Z,{onClick(){var e;return null===(e=document.querySelector(".giscus"))||void 0===e?void 0:e.scrollIntoView()},children:(0,s.jsx)(S,{width:20})}),(0,s.jsx)(E.Z,{})]})]})}function T(e){let{tableOfContents:t,className:r}=e;return 0===t.length?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)("div",{className:r,children:[(0,s.jsx)("h2",{id:"table-of-contents",children:"Table of contents"}),(0,s.jsx)("ul",{children:t.map(e=>(0,s.jsxs)("li",{children:[(0,s.jsx)("a",{href:"#".concat(e.slug),children:e.text}),(0,s.jsx)("ul",{children:e.subSections.map(e=>(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#".concat(e.slug),children:e.text})},e.slug))})]},e.slug))}),(0,s.jsx)(u.Z,{})]})}var z=r(6621);function J(e){let{post:t,serize:r,postFooterProps:a,slug:m,compiledSource:f,tableOfContents:y}=e;return c(),(0,i.useEffect)(()=>{let e=document.querySelectorAll(".prose img");(0,d.Z)(e,{})},[]),(0,s.jsxs)(z.Z,{children:[(0,s.jsx)(w.U,{...t,url:"/blog/".concat(m),summary:t.description,images:[]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(h.Z,{className:"mb-4 text-center",children:t.title}),(0,s.jsx)("div",{className:"mt-2 flex w-full flex-col justify-between md:flex-row md:items-center",children:(0,s.jsxs)("div",{className:"mx-auto flex gap-2 text-gray-600 dark:text-gray-400",children:[(0,s.jsx)(x.Z,{Icon:p.Z,text:n()(t.date).format("YYYY.MM.DD")}),(0,s.jsx)(x.Z,{Icon:v.Z,text:"".concat(t.readingMinutes,"분")})]})}),(0,s.jsx)(u.Z,{className:"mt-4"})]}),(0,s.jsxs)("div",{className:"relative flex gap-8",children:[(0,s.jsxs)("div",{className:"prose max-w-3xl flex-1 dark:prose-dark",children:[(0,s.jsx)(T,{className:"lg:hidden",tableOfContents:y}),(0,s.jsx)(o.R,{compiledSource:f})]}),(0,s.jsx)("div",{className:"mt-12 ml-auto",children:(0,s.jsx)("div",{className:(0,l.$)("sticky top-[120px] hidden min-w-[240px] max-w-[260px] self-start lg:block"),children:(0,s.jsx)(B,{tableOfContents:y})})})]}),(0,s.jsxs)("div",{className:"mt-12 space-y-8",children:[(0,s.jsx)(j,{...a}),(0,s.jsx)(u.Z,{}),r&&(0,s.jsx)(N,{currentPost:t,serize:r}),(0,s.jsx)(g,{})]})]})}}}]);