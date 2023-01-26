"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{5778:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(5893),o=r(1606),s=r(526),i=r(1163),a=r(7474);function d(e){let{className:t,width:r=16,height:o=16,...s}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,width:r,height:o,...s,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"})})}var l=r(9693);function c(e){let{className:t,width:r=16,height:o=16,...s}=e;return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,width:r,height:o,...s,children:[(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"}),(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 6h.008v.008H6V6z"})]})}var h=r(5204),u=r(6501);function m(e){let{className:t,width:r=16,height:o=16,...s}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,width:r,height:o,...s,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"})})}function x(e){let{className:t,width:r=16,height:o=16,...s}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,width:r,height:o,...s,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})})}function g(e){let{className:t,width:r=16,height:o=16,...s}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,width:r,height:o,...s,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})})}var p=r(452);function k(e){let{title:t,buttonText:r,action:o}=e;return(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:16},children:[(0,n.jsx)("span",{style:{fontSize:14},children:t}),(0,n.jsx)("button",{onClick:o,style:{background:"#fff",border:"none",boxShadow:"0 0 0 1px #000",padding:"4px 8px",cursor:"pointer",borderRadius:4,fontSize:14},children:r})]})}function v(){return!function(){let{setThemeDark:e,setThemeLight:t}=(0,p.Z)();(0,o.useRegisterActions)([{id:"theme",name:"Change theme…",shortcut:["T"],keywords:"interface color theme",section:"Preferences",icon:(0,n.jsx)(m,{width:18})},{id:"darkTheme",name:"Change Theme to Dark",keywords:"dark theme",parent:"theme",icon:(0,n.jsx)(x,{width:18}),perform:r=>(e(),(0,u.ZP)(e=>(0,n.jsx)(k,{title:"Dark theme enabled",buttonText:"Undo",action(){var t,o;null===(t=r.command)||void 0===t||null===(o=t.history)||void 0===o||o.undo(),u.ZP.dismiss(e.id),(0,u.ZP)(e=>(0,n.jsx)(k,{title:"Dark theme undone",buttonText:"Redo",action(){var t,n;null===(t=r.command)||void 0===t||null===(n=t.history)||void 0===n||n.redo(),u.ZP.dismiss(e.id)}}))}})),()=>{t()})},{id:"lightTheme",name:"Change Theme to Light",keywords:"light theme",parent:"theme",icon:(0,n.jsx)(g,{width:18}),perform:r=>(t(),(0,u.ZP)(e=>(0,n.jsx)(k,{title:"Light theme enabled",buttonText:"Undo",action(){var t,o;null===(t=r.command)||void 0===t||null===(o=t.history)||void 0===o||o.undo(),u.ZP.dismiss(e.id),(0,u.ZP)(e=>(0,n.jsx)(k,{title:"Light theme undone",buttonText:"Redo",action(){var t,n;null===(t=r.command)||void 0===t||null===(n=t.history)||void 0===n||n.redo(),u.ZP.dismiss(e.id)}}))}})),()=>{e()})}])}(),!function(){let e=(0,i.useRouter)();(0,o.useRegisterActions)([...h.Z8.map(t=>({id:t.slug,name:t.title,subtitle:t.date,section:"Serize Book",keywords:t.tags.join(" "),icon:(0,n.jsx)(d,{width:18}),perform:()=>e.push(t.slug),priority:o.Priority.NORMAL})),...h.xu.map(t=>({id:t.slug,name:t.title,subtitle:t.date,parent:"blog",section:"Blog Posts",keywords:t.tags.join(" "),icon:(0,n.jsx)(a.Z,{width:18}),perform:()=>e.push(t.slug)})),...h.hn.map(t=>({id:t.slug,name:t.title,subtitle:t.date,parent:"snippets",section:"Code Snippets",keywords:t.tags.join(" "),icon:(0,n.jsx)(l.Z,{width:18}),perform:()=>e.push(t.slug)})),...h.pJ.map(t=>({id:t,name:t,parent:"archives",section:"Tags",icon:(0,n.jsx)(c,{width:18}),perform:()=>e.push("/archives/tags/".concat(t))}))])}(),(0,n.jsx)(o.KBarPortal,{children:(0,n.jsxs)(o.KBarPositioner,{children:[(0,n.jsx)("div",{className:"pointer-events-none fixed inset-0 z-40 h-full w-full bg-white bg-opacity-50 backdrop-blur dark:bg-black dark:bg-opacity-50"}),(0,n.jsxs)(o.KBarAnimator,{className:(0,s.$)("z-50 w-full overflow-hidden rounded-lg bg-gray-100 shadow-xl dark:bg-gray-700","dark:border dark:border-gray-600"),style:{maxWidth:"600px",boxShadow:"0 16px 70px rgb(0 0 0 / 20%)"},children:[(0,n.jsx)(o.KBarSearch,{className:"box-border w-full border-none bg-gray-100 px-6 py-4 outline-none dark:bg-gray-700"}),(0,n.jsx)("div",{className:"kbar-scrollbar pb-4",children:(0,n.jsx)(w,{})})]})]})})}function w(){let{results:e}=(0,o.useMatches)();return(0,n.jsx)(o.KBarResults,{items:e,onRender(e){var t;let{item:r,active:o}=e;return"string"==typeof r?(0,n.jsx)("div",{className:"mx-3 py-2 text-xs text-gray-700 dark:text-gray-400",children:r}):(0,n.jsxs)("div",{className:(0,s.$)("mx-3 flex cursor-pointer items-center gap-3 rounded-lg p-3 text-sm transition-colors",o&&"bg-gray-200 dark:bg-gray-600"),children:[r.icon&&r.icon,(0,n.jsxs)("div",{className:"flex flex-col font-medium",children:[(0,n.jsx)("div",{children:r.name}),r.subtitle&&(0,n.jsx)("span",{className:"text-xs font-normal text-gray-600 dark:text-gray-400",children:r.subtitle})]}),(null===(t=r.shortcut)||void 0===t?void 0:t.length)&&(0,n.jsx)("div",{className:"ml-auto flex gap-2",children:r.shortcut.map(e=>(0,n.jsx)("kbd",{className:"rounded-md px-2 py-1 text-xs",style:{background:"rgba(0 0 0 / .1)"},children:e},e))})]})}})}},452:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(2010);function o(){let{resolvedTheme:e,setTheme:t}=(0,n.F)(),r="dark"===e,o=()=>t("dark"),s=()=>t("light");return{theme:e,isThemeDark:r,setThemeDark:o,setThemeLight:s,toggleTheme(){r?s():o()}}}}}]);