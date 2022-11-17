(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{1127:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return __webpack_require__(9904)}])},4462:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Layout}});var jsx_runtime=__webpack_require__(5893),dist_image=__webpack_require__(8782),image_default=__webpack_require__.n(dist_image),react=__webpack_require__(7294),lib=__webpack_require__(2891),lib_default=__webpack_require__.n(lib),config=__webpack_require__(929),core=__webpack_require__(526);function ExternalLink(param){let{children,className,...props}=param;return(0,jsx_runtime.jsx)("a",{...props,className:(0,core.$)("text-gray-500 transition hover:text-gray-600",className),target:"_blank",rel:"noopener noreferrer",children:children})}var Hr=__webpack_require__(2214),next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link),next_router=__webpack_require__(1163);function NavItem(param){let{href,children,className}=param,router=(0,next_router.useRouter)(),isActive=router.asPath===href;return(0,jsx_runtime.jsx)(link_default(),{href:null!=href?href:"/",className:(0,core.$)(isActive?"font-semibold text-gray-800 dark:text-gray-200":"font-normal text-gray-600 dark:text-gray-400","rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-800",className),children:children})}var index_module=__webpack_require__(2010);function ThemeSwitch(){let[mounted,setMounted]=(0,react.useState)(!1),{resolvedTheme,setTheme}=(0,index_module.F)();return(0,react.useEffect)(()=>setMounted(!0),[]),(0,jsx_runtime.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"flex h-9 w-9 items-center justify-center rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-800",onClick:()=>setTheme("dark"===resolvedTheme?"light":"dark"),children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-6 w-6 text-yellow-500 dark:text-yellow-400",children:mounted?"dark"===resolvedTheme?(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"}):(0,jsx_runtime.jsx)("path",{d:"M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})})})}function Layout(param){let{children}=param,since=(0,react.useMemo)(()=>{let year=new Date().getFullYear();return config.JA.since===year?year:"".concat(config.JA.since,"-").concat(year)},[]);return(0,jsx_runtime.jsxs)("div",{className:"mx-auto max-w-2xl px-4 sm:px-6 xl:max-w-3xl xl:px-0",children:[(0,jsx_runtime.jsxs)("nav",{className:"flex w-full select-none items-end pt-8 pb-12 text-gray-800 dark:text-gray-400",children:[(0,jsx_runtime.jsx)(NavItem,{href:"/",className:"mr-2",children:(0,jsx_runtime.jsx)(image_default(),{src:"/favicon.png",blurDataURL:"/favicon.png",alt:"logo",width:40,height:40,placeholder:"blur",className:"block h-auto"})}),config.JA.menus.map(link=>(0,jsx_runtime.jsx)(NavItem,{href:link.path,className:"px-3 py-1.5",children:link.label},link.label)),(0,jsx_runtime.jsx)("div",{className:"ml-auto mb-1",children:(0,jsx_runtime.jsx)(ThemeSwitch,{})})]}),(0,jsx_runtime.jsx)("main",{className:"pb-16",children:children}),(0,jsx_runtime.jsxs)("footer",{className:"pb-8 text-sm text-gray-800 dark:text-gray-400",children:[(0,jsx_runtime.jsx)(Hr.Z,{className:"mb-8"}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-end space-y-1",children:[(0,jsx_runtime.jsx)("div",{className:"flex space-x-2",children:Object.keys(config.JA.author.contacts).map(sns=>{let link=config.JA.author.contacts[sns];return link?(0,jsx_runtime.jsx)(ExternalLink,{href:link,children:lib_default()(sns)},sns):null})}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsxs)("span",{children:["\xa9 ",since," "]}),(0,jsx_runtime.jsx)(ExternalLink,{href:config.JA.author.contacts.github,children:config.JA.title}),(0,jsx_runtime.jsx)("span",{children:" Powered by "}),(0,jsx_runtime.jsx)(ExternalLink,{href:"https://nextjs.org/",children:"Next.js"}),(0,jsx_runtime.jsx)("span",{children:", "}),(0,jsx_runtime.jsx)(ExternalLink,{href:"https://pages.github.com/",children:"Github Pages"})]})]})]})]})}},2214:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Hr}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_libs_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(526);function Hr(param){let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr",{...props,className:(0,_libs_core__WEBPACK_IMPORTED_MODULE_1__.$)("border-1 w-full border-gray-200 transition-all dark:border-gray-800",className)})}},3681:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return IconText}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);var _libs_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(526);function IconText(param){let{Icon,iconSize=14,text,className}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:(0,_libs_core__WEBPACK_IMPORTED_MODULE_2__.$)("flex items-center",null!=className?className:"gap-1 text-xs"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{width:iconSize,height:iconSize}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:text})]})}},3625:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return PostListItem}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),dayjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7484),dayjs__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__),next_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1664),next_link__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__),title__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2891),title__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(title__WEBPACK_IMPORTED_MODULE_3__),_libs_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(526),_icons_CalanderIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1262),_icons_ClockIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9961),_IconText__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3681);function PostListItem(param){let{post}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"text-ye group w-full py-4 hover:drop-shadow-base",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_link__WEBPACK_IMPORTED_MODULE_2___default(),{as:"/blog/".concat(post.slug),href:"/blog/[...slug]",className:"hover:drop-shadow-base",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-xl font-bold",children:post.title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:post.description})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-2 flex w-full items-center gap-2 text-sm",children:[post.tags.map((tag,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2___default(),{href:"/tags/".concat(tag),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_libs_core__WEBPACK_IMPORTED_MODULE_7__.$)("ye rounded-lg bg-gray-200 px-1.5 py-0.5 text-gray-600 dark:bg-gray-700 dark:text-gray-300","transition-colors hover:bg-[#dadada] hover:text-gray-900 dark:hover:text-gray-200"),children:title__WEBPACK_IMPORTED_MODULE_3___default()(tag)})},i)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"ml-auto flex gap-2 group-hover:drop-shadow-base-bold",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_IconText__WEBPACK_IMPORTED_MODULE_6__.Z,{Icon:_icons_CalanderIcon__WEBPACK_IMPORTED_MODULE_4__.Z,text:dayjs__WEBPACK_IMPORTED_MODULE_1___default()(post.date).format("YY.MM.DD")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_IconText__WEBPACK_IMPORTED_MODULE_6__.Z,{Icon:_icons_ClockIcon__WEBPACK_IMPORTED_MODULE_5__.Z,text:"".concat(post.readingMinutes,"분")})]})]})]})}},1262:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return CalanderIcon}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);function CalanderIcon(param){let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:className,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})})}},9961:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return ClockIcon}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);function ClockIcon(param){let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:className,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}},526:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$:function(){return $}});let $=function(){for(var _len=arguments.length,classnames=Array(_len),_key=0;_key<_len;_key++)classnames[_key]=arguments[_key];return classnames.filter(Boolean).join(" ")}},9904:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__N_SSG:function(){return __N_SSG},default:function(){return PostPage}});var jsx_runtime=__webpack_require__(5893),dayjs_min=__webpack_require__(7484),dayjs_min_default=__webpack_require__.n(dayjs_min),IconText=__webpack_require__(3681),PostListItem=__webpack_require__(3625),CalanderIcon=__webpack_require__(1262),ClockIcon=__webpack_require__(9961);function ListIcon(param){let{className,...props}=param;return(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:className,...props,children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z",clipRule:"evenodd"})})}var Layout=__webpack_require__(4462),__N_SSG=!0;function PostPage(param){let{serize}=param;return(0,jsx_runtime.jsx)(Layout.Z,{children:(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-3 gap-32",children:[(0,jsx_runtime.jsx)("div",{className:"col-span-1",children:(0,jsx_runtime.jsx)("div",{className:"h-[336px] w-[240px] select-none rounded-lg bg-gray-200 px-11 pb-16 pt-12 dark:bg-gray-800",children:(0,jsx_runtime.jsx)("div",{className:"flex h-full break-keep bg-gray-50 px-3 py-4 text-xl font-semibold dark:bg-gray-700 dark:text-white",children:serize.title})})}),(0,jsx_runtime.jsxs)("div",{className:"col-span-2",children:[(0,jsx_runtime.jsxs)("div",{className:"rounded-lg bg-gray-150 px-5 py-4 dark:bg-gray-800",children:[(0,jsx_runtime.jsx)("p",{children:serize.description}),(0,jsx_runtime.jsxs)("div",{className:"mt-1 flex gap-2 text-gray-600 dark:text-gray-400",children:[(0,jsx_runtime.jsx)(IconText.Z,{Icon:CalanderIcon.Z,text:dayjs_min_default()(serize.date).format("YY.MM.DD")}),(0,jsx_runtime.jsx)(IconText.Z,{Icon:ListIcon,text:"".concat(serize.posts.length,"편")}),(0,jsx_runtime.jsx)(IconText.Z,{Icon:ClockIcon.Z,text:"".concat(serize.readingMinutes,"분")})]})]}),(0,jsx_runtime.jsx)("ul",{className:"mt-4 space-y-4",children:serize.posts.map((post,i)=>(0,jsx_runtime.jsxs)("div",{className:"flex space-x-6",children:[(0,jsx_runtime.jsxs)("div",{className:"pt-4 font-bold",children:[i+1,"."]}),(0,jsx_runtime.jsx)(PostListItem.Z,{post:post})]},post.slug))})]})]})})}},5443:function(){},4129:function(){}},function(__webpack_require__){__webpack_require__.O(0,[302,774,888,179],function(){return __webpack_require__(__webpack_require__.s=1127)}),_N_E=__webpack_require__.O()}]);