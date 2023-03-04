"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{3681:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(5893);r(7294);var s=r(416);function a(e){let{Icon:t,iconSize:r=14,text:a,className:i}=e;return(0,n.jsxs)("div",{className:(0,s.$)("flex items-center",null!=i?i:"gap-1 text-xs"),children:[(0,n.jsx)(t,{width:r,height:r}),(0,n.jsx)("span",{children:a})]})}},4978:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(5893);r(7294);var s=r(416);function a(e){let{className:t,selected:r,...a}=e;return(0,n.jsx)("div",{...a,className:(0,s.$)("rounded-lg px-2 py-0.5 transition-colors","bg-secondary hover:text-primary hover:bg-tertiary",r?"text-primary font-semibold ring-2 ring-neutral-350":"text-secondary font-normal",t)})}},5132:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(5893),s=r(1664),a=r.n(s),i=r(2891),o=r.n(i),l=r(4978);function c(e){let{tag:t}=e;return(0,n.jsx)(a(),{href:"/archives/tags/".concat(t),children:(0,n.jsx)(l.Z,{children:o()(t)})})}},150:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(5893),s=r(416);function a(e){let{className:t,...r}=e;return(0,n.jsx)("h1",{...r,className:(0,s.$)("mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl",t)})}},2227:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(5893);function s(e){let{className:t,...r}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...r,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})})}},9961:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(5893);function s(e){let{className:t,...r}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...r,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}},4593:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(5893);function s(e){let{className:t,...r}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:t,...r,children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z",clipRule:"evenodd"})})}},1791:function(e,t,r){r.d(t,{Z:function(){return K}});var n=r(5893),s=r(7484),a=r.n(s),i=r(7172),o=r(1664),l=r.n(o),c=r(5929),d=r(929),u=r(1569),x=r(7294),m=r(5748);let p=()=>{(0,x.useEffect)(()=>{let e;let t=t=>{var r,n;let s=t.target.closest(".rehype-code-wrap--copy");if(!s)return;let a=null!==(n=null===(r=s.parentNode.querySelector("code"))||void 0===r?void 0:r.innerText)&&void 0!==n?n:"",i=s.querySelector(".rehype-code-wrap--copy-icon"),o=s.querySelector(".rehype-code-wrap--check-icon");navigator.clipboard.writeText(a).then(()=>{o&&i&&(o.style.display="block",i.style.display="none",e=setTimeout(()=>{o.style.display="none",i.style.display="block"},1500)),m.Am.success("code copy successful")}).catch(e=>{console.error(e),m.Am.error("code copy failed")})};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t),e&&clearInterval(e)}},[])};var h=r(2557),f=r(2010),g=r(416),v=r(4436),j=r(421),w=r(2214),y=r(3681),b=r(5132),k=r(150),N=r(1163);function C(){let e=(0,x.useRef)(null),{resolvedTheme:t}=(0,f.F)(),[r,s]=(0,x.useState)(!1),a=(0,N.useRouter)(),i="dark"===t?"dark":"light";return(0,x.useEffect)(()=>{if(!e.current||e.current.hasChildNodes())return;let t=document.createElement("script");t.src="https://giscus.app/client.js",t.async=!0,t.crossOrigin="anonymous",t.setAttribute("data-repo","bepyan/bepyan.github.io"),t.setAttribute("data-repo-id","R_kgDOIXS9lg"),t.setAttribute("data-category","General"),t.setAttribute("data-category-id","DIC_kwDOIXS9ls4CSh3S"),t.setAttribute("data-mapping","pathname"),t.setAttribute("data-strict","0"),t.setAttribute("data-reactions-enabled","1"),t.setAttribute("data-emit-metadata","0"),t.setAttribute("data-input-position","bottom"),t.setAttribute("data-theme",i),t.setAttribute("data-lang","en"),e.current.appendChild(t),s(!0)},[]),(0,x.useEffect)(()=>{var e;if(!r)return;let t=document.querySelector("iframe.giscus-frame");null==t||null===(e=t.contentWindow)||void 0===e||e.postMessage({giscus:{setConfig:{theme:i}}},"https://giscus.app")},[i,r]),(0,x.useEffect)(()=>{var e;let t=document.querySelector("iframe.giscus-frame");null==t||null===(e=t.contentWindow)||void 0===e||e.postMessage({giscus:{setConfig:{term:a.asPath}}},"https://giscus.app")},[a.asPath]),(0,n.jsx)("section",{ref:e})}var Z=r(2227),A=r(9961),L=r(1857),E=r.n(L);function S(){let[e,t]=(0,x.useState)(0),r=()=>{let e=document.documentElement,r=e.scrollTop||document.body.scrollTop,n=e.scrollHeight||document.body.scrollHeight,s=r/(n-e.clientHeight)*100;t(s)};return(0,x.useEffect)(()=>(window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)),[]),(0,n.jsxs)("div",{style:{width:"".concat(e,"%")},className:"jsx-71b1b5f64b8caa16 progressBar",children:[(0,n.jsx)(E(),{id:"18d2c849d1206220",children:".progressBar.jsx-71b1b5f64b8caa16{position:fixed;z-index:50;top:0px;left:0px;height:6px;-webkit-border-radius:0px 2px 0px 0px;-moz-border-radius:0px 2px 0px 0px;border-radius:0px 2px 0px 0px;background:-webkit-linear-gradient(left,#fd0,#fbb034);background:-moz-linear-gradient(left,#fd0,#fbb034);background:-o-linear-gradient(left,#fd0,#fbb034);background:linear-gradient(90deg,#fd0,#fbb034)}"}),(0,n.jsx)(E(),{id:"e712141ccd62a9a3",children:"body{-ms-overflow-style:none;scrollbar-width:none}body::-webkit-scrollbar{display:none}"})]})}var M=r(7386),z=r(4593);function I(e){let{currentPost:t,series:r}=e,[s,i]=(0,x.useState)(!0),o=r.posts.findIndex(e=>e.slug===t.slug),c=()=>{s||i(!s)};return(0,n.jsxs)("div",{className:(0,g.$)("bg-secondary rounded-lg p-4",!s&&"cursor-pointer transition-all hover:bg-tertiary"),onClick:c,children:[(0,n.jsx)("p",{className:"text-base font-medium sm:text-lg",children:r.title}),(0,n.jsxs)("div",{className:"mt-1 flex gap-3",children:[(0,n.jsx)(y.Z,{Icon:z.Z,text:"".concat(o+1," / ").concat(r.posts.length)}),(0,n.jsx)(y.Z,{Icon:Z.Z,text:a()(r.date).format("YY.MM.DD")}),(0,n.jsx)(y.Z,{Icon:A.Z,text:"".concat(r.readingMinutes,"분")})]}),(0,n.jsx)("div",{className:"mt-3 whitespace-pre-wrap text-xs sm:text-sm",children:(0,n.jsx)("div",{className:"text-secondary",children:r.description})}),s&&(0,n.jsxs)("div",{className:"mt-4 flex flex-col gap-2 text-sm sm:text-base",children:[r.posts.map((e,r)=>(0,n.jsxs)(l(),{href:e.slug,className:(0,g.$)("transition-all",e.slug===t.slug?"text-primary font-semibold":"text-secondary hover:text-primary"),children:[r+1,". ",e.title]},r)),(0,n.jsx)("span",{className:"text-tertiary mt-2 mr-auto cursor-pointer text-sm hover:text-secondary",onClick:()=>i(!1),children:"간략히"})]})]})}function B(e){let{className:t,...r}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:t,...r,children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",clipRule:"evenodd"})})}function Y(e){let{className:t,...r}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...r,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"})})}var T=r(8254);function $(e){let[t,r]=(0,x.useState)(!1),s=async()=>{let e=window.document.location.href;try{await navigator.clipboard.writeText(e),r(!0),m.Am.success("link copy successful")}catch(e){console.error(e),m.Am.error("link copy failed")}};return(0,x.useEffect)(()=>{let e;return t&&(e=setTimeout(()=>{r(!1)},1500)),()=>{e&&clearInterval(e)}},[t]),(0,n.jsx)(T.Z,{...e,"aria-label":"copy-link",onClick:()=>void s(),children:t?(0,n.jsx)(B,{width:20}):(0,n.jsx)(Y,{width:20})})}function q(e){let{className:t,...r}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...r,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})})}var O=r(4190),W=r(5290);let H=e=>{let[t,r]=(0,x.useState)();return(0,x.useEffect)(()=>{var t,n,s,a;let i;if(0===e.length)return;let o=window.getComputedStyle(document.documentElement),l=parseFloat(null!==(s=null===(t=o.getPropertyValue("--scroll-mt").match(/[\d.]+/))||void 0===t?void 0:t[0])&&void 0!==s?s:"0")*parseFloat(null!==(a=null===(n=o.fontSize.match(/[\d.]+/))||void 0===n?void 0:n[0])&&void 0!==a?a:"16");function c(){i=Array.from(document.querySelectorAll(".prose h2:not(#table-of-contents),h3:not(#table-of-contents)")).map(e=>({id:e.id,top:e.offsetTop}))}function d(){let e;if(!i)return;let t=window.pageYOffset+l-120+1;for(let r=0;r<i.length;r++)t>=i[r].top&&(e=i[r].id);r(e)}return c(),d(),window.addEventListener("scroll",d,{capture:!0,passive:!0}),window.addEventListener("resize",c,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",d,{capture:!0}),window.removeEventListener("resize",c,{capture:!0})}},[e]),{tableOfContents:e,currentSectionSlug:t}};function D(e){let{tableOfContents:t,className:r}=e,{currentSectionSlug:s}=H(t),a=e=>e.slug===s,i=e=>e.slug===s||e.subSections.some(e=>e.slug===s);return(0,n.jsxs)("div",{className:(0,g.$)("overflow-hidden rounded-xl border border-neutral-200 transition-all dark:border-neutral-800",r),children:[0!==t.length&&(0,n.jsxs)("div",{className:"p-4 pr-2 dark:border-neutral-700 dark:bg-neutral-800",children:[(0,n.jsx)("p",{id:"toc-header",className:"text-primary text-sm font-extrabold leading-6",children:"On this page"}),(0,n.jsx)("ul",{id:"toc-content",className:"mt-2 flex flex-col items-start justify-start text-sm",children:t.map(e=>(0,n.jsxs)(x.Fragment,{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#".concat(e.slug),className:(0,g.$)("group block py-1",e.subSections&&"",i(e)?"bg-gradient-to-r from-neutral-700 to-yellow-900 bg-clip-text font-extrabold text-transparent dark:from-yellow-400 dark:to-yellow-600":"text-secondary hover:text-primary hover:drop-shadow-base-bold dark:hover:drop-shadow-base"),children:e.text})}),e.subSections.map(e=>(0,n.jsx)("li",{className:"ml-4",children:(0,n.jsxs)("a",{href:"#".concat(e.slug),className:(0,g.$)("group flex items-start py-1",a(e)?"bg-gradient-to-r from-neutral-700 to-yellow-900 bg-clip-text font-extrabold text-transparent dark:from-yellow-400 dark:to-yellow-600":"text-secondary hover:text-primary hover:drop-shadow-base-bold dark:hover:drop-shadow-base"),children:[(0,n.jsx)("svg",{width:"3",height:"24",viewBox:"0 -9 3 24",className:(0,g.$)("mr-2 overflow-visible","text-tertiary group-hover:text-secondary"),children:(0,n.jsx)("path",{d:"M0 0L3 3L0 6",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),e.text]})},e.slug))]},e.slug))})]}),(0,n.jsxs)("div",{className:(0,g.$)("flex items-center justify-end p-2","bg-neutral-150 dark:bg-neutral-750"),children:[(0,n.jsx)($,{className:"mr-auto hover:bg-mute"}),(0,n.jsx)(T.Z,{className:"hover:bg-mute","aria-label":"scroll-up",onClick:()=>window.scrollTo({top:0}),children:(0,n.jsx)(O.Z,{width:20})}),(0,n.jsx)(T.Z,{className:"hover:bg-mute","aria-label":"scroll-down",onClick:()=>{var e;return null===(e=document.querySelector(".giscus"))||void 0===e?void 0:e.scrollIntoView()},children:(0,n.jsx)(q,{width:20})}),(0,n.jsx)(W.Z,{className:"hover:bg-mute"})]})]})}function R(e){let{tableOfContents:t,className:r}=e;return 0===t.length?(0,n.jsx)(n.Fragment,{}):(0,n.jsxs)("div",{className:r,children:[(0,n.jsx)("h2",{id:"table-of-contents",children:"Table of contents"}),(0,n.jsx)("ul",{children:t.map(e=>(0,n.jsxs)("li",{children:[(0,n.jsx)("a",{href:"#".concat(e.slug),children:e.text}),(0,n.jsx)("ul",{children:e.subSections.map(e=>(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#".concat(e.slug),children:e.text})},e.slug))})]},e.slug))}),(0,n.jsx)(w.Z,{})]})}var F=r(3720),_=r(9566);function J(e){let{prevPost:t,nextPost:r}=e;return(0,n.jsxs)("div",{className:"text-secondary -mx-4 flex items-center text-xs font-semibold sm:mx-0 sm:text-base",children:[t&&(0,n.jsxs)(_.Z,{href:t.slug,className:"group gap-3 px-4 py-2",children:[(0,n.jsx)("svg",{viewBox:"0 0 3 6",className:"text-mute h-1.5 w-auto overflow-visible group-hover:text-secondary",children:(0,n.jsx)("path",{d:"M3 0L0 3L3 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,n.jsx)("span",{children:t.title})]}),r&&(0,n.jsxs)(_.Z,{href:r.slug,className:"group ml-auto gap-3 px-4 py-2 text-right",children:[(0,n.jsx)("span",{children:r.title}),(0,n.jsx)("svg",{viewBox:"0 0 3 6",className:"h-1.5 w-auto overflow-visible text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300",children:(0,n.jsx)("path",{d:"M0 0L3 3L0 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})}function K(e){var t,r,s;let{post:o,series:m,postFooterProps:N,tableOfContents:L}=e;p(),function(){let[e,t]=(0,x.useState)(!1),[r,n]=(0,x.useState)(),{resolvedTheme:s}=(0,f.F)(),a="dark"===s?"#131313":"#f9fafb",i=()=>{let e=document.querySelectorAll(".prose img");n((0,h.Z)(e,{}))};(0,x.useEffect)(()=>{if(g.r&&!e)return t(!0);i()},[e]),(0,v.Z)(i),(0,x.useEffect)(()=>{null==r||r.update({background:a})},[r,a])}();let E=null!==(t=null==m?void 0:m.title)&&void 0!==t?t:o.snippetName,z=null!==(s=null==m?void 0:m.slug)&&void 0!==s?s:"/snippets?key=".concat(null!==(r=o.snippetName)&&void 0!==r?r:"all"),B=(0,c.z)(o.body.code);return(0,n.jsxs)(F.Z,{children:[(0,n.jsx)(M.U,{...o,url:o.slug,summary:o.description,images:[]}),(0,n.jsx)(S,{}),(0,n.jsxs)(i.E.section,{variants:u.Oj,initial:"initial",animate:"animate",exit:"exit",children:[(0,n.jsxs)(i.E.div,{variants:u.YK,children:[(0,n.jsx)(k.Z,{className:"mx-auto mb-4 max-w-3xl text-center",children:o.title}),E&&(0,n.jsxs)("div",{className:"mt-2 flex justify-center gap-1",children:[o.snippetName&&(0,n.jsx)("span",{children:"snippet: "}),(0,n.jsx)(l(),{href:z,children:(0,n.jsx)("span",{className:"text-sm font-medium underline underline-offset-4 sm:text-base",children:E})})]}),(0,n.jsx)("div",{className:"mt-2 flex w-full flex-col justify-between md:flex-row md:items-center",children:(0,n.jsxs)("div",{className:"mx-auto flex gap-2 text-neutral-600 dark:text-neutral-400",children:[(0,n.jsx)(y.Z,{Icon:Z.Z,text:a()(o.date).format("YYYY.MM.DD")}),(0,n.jsx)(y.Z,{Icon:A.Z,text:"".concat(o.readingMinutes,"분")})]})}),(0,n.jsx)(w.Z,{className:"mt-4"})]}),(0,n.jsxs)(i.E.div,{variants:u.YK,className:"relative gap-8 lg:flex",children:[(0,n.jsxs)("div",{className:"prose prose-neutral w-full max-w-3xl font-spoqa dark:prose-dark",children:[(0,n.jsx)(R,{className:"lg:hidden",tableOfContents:L}),(0,n.jsx)(B,{components:{}})]}),(0,n.jsx)("div",{className:"mt-12 ml-auto",children:(0,n.jsx)("div",{className:"sticky top-[120px] hidden min-w-[240px] max-w-[260px] self-start lg:block",children:(0,n.jsx)(D,{tableOfContents:L})})})]}),(0,n.jsxs)(i.E.div,{variants:u.YK,className:"mt-12 space-y-8 lg:mt-24",children:[(0,n.jsx)("div",{className:"flex gap-2",children:o.tags.map(e=>(0,n.jsx)(b.Z,{tag:e},e))}),(0,n.jsx)(w.Z,{}),(0,n.jsx)("div",{className:"flex w-full items-center justify-center",children:(0,n.jsxs)("div",{className:"flex items-center gap-4 sm:gap-8 sm:p-12",children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:d.JA.author.photo,className:"h-24 w-24 overflow-hidden rounded-full",alt:"프로필 사진"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"font-bold",children:d.JA.author.name}),(0,n.jsx)("div",{className:"text-tertiary text-sm",children:d.JA.author.bio}),(0,n.jsx)(j.Z,{className:"mt-2 text-sm"})]})]})}),(0,n.jsx)(J,{...N}),m&&(0,n.jsx)(I,{currentPost:o,series:m}),(0,n.jsx)(C,{})]})]})]})}},1569:function(e,t,r){r.d(t,{HA:function(){return o},Ji:function(){return c},Oj:function(){return i},YK:function(){return l},eu:function(){return d},gS:function(){return u},rv:function(){return a},xN:function(){return s}});let n=[.6,-.05,.01,.99],s={animate:{transition:{staggerChildren:.2}}},a={animate:{transition:{staggerChildren:.1}}},i={animate:{transition:{staggerChildren:.05}}},o={animate:{transition:{staggerChildren:.01}}},l={initial:{opacity:.3,transition:{duration:.3,ease:n},willChange:"opacity"},animate:{opacity:1,transition:{duration:.3,ease:n},willChange:"opacity"},exit:{opacity:.3,transition:{duration:.3,ease:n},willChange:"opacity"}},c={initial:{opacity:0,transition:{duration:.6,ease:n},willChange:"opacity"},animate:{opacity:1,transition:{duration:.6,ease:n},willChange:"opacity"},exit:{opacity:0,transition:{duration:.6,ease:n},willChange:"opacity"}},d={initial:{opacity:0,y:30,transition:{duration:.6,ease:n},willChange:"opacity, transform"},animate:{opacity:1,y:0,transition:{duration:.6,ease:n},willChange:"opacity, transform"},exit:{opacity:0,y:30,transition:{duration:.6,ease:n},willChange:"opacity, transform"}},u={initial:{opacity:0,x:30,transition:{duration:.6,ease:n},willChange:"opacity, transform"},animate:{opacity:1,x:0,transition:{duration:.6,ease:n},willChange:"opacity, transform"},exit:{opacity:0,x:-30,transition:{duration:.6,ease:n},willChange:"opacity, transform"}}}}]);