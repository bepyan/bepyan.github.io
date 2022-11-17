(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{8949:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[...slugs]",function(){return __webpack_require__(7296)}])},4462:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Layout}});var jsx_runtime=__webpack_require__(5893),dist_image=__webpack_require__(8782),image_default=__webpack_require__.n(dist_image),react=__webpack_require__(7294),lib=__webpack_require__(2891),lib_default=__webpack_require__.n(lib),config=__webpack_require__(929),core=__webpack_require__(526);function ExternalLink(param){let{children,className,...props}=param;return(0,jsx_runtime.jsx)("a",{...props,className:(0,core.$)("text-gray-500 transition hover:text-gray-600",className),target:"_blank",rel:"noopener noreferrer",children:children})}var Hr=__webpack_require__(2214),next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link),next_router=__webpack_require__(1163);function NavItem(param){let{href,children,className}=param,router=(0,next_router.useRouter)(),isActive=router.asPath===href;return(0,jsx_runtime.jsx)(link_default(),{href:null!=href?href:"/",className:(0,core.$)(isActive?"font-semibold text-gray-800 dark:text-gray-200":"font-normal text-gray-600 dark:text-gray-400","rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-800",className),children:children})}var index_module=__webpack_require__(2010);function ThemeSwitch(){let[mounted,setMounted]=(0,react.useState)(!1),{resolvedTheme,setTheme}=(0,index_module.F)();return(0,react.useEffect)(()=>setMounted(!0),[]),(0,jsx_runtime.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"flex h-9 w-9 items-center justify-center rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-800",onClick:()=>setTheme("dark"===resolvedTheme?"light":"dark"),children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-6 w-6 text-yellow-500 dark:text-yellow-400",children:mounted?"dark"===resolvedTheme?(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"}):(0,jsx_runtime.jsx)("path",{d:"M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})})})}function Layout(param){let{children}=param,since=(0,react.useMemo)(()=>{let year=new Date().getFullYear();return config.JA.since===year?year:"".concat(config.JA.since,"-").concat(year)},[]);return(0,jsx_runtime.jsxs)("div",{className:"mx-auto max-w-2xl px-4 sm:px-6 xl:max-w-3xl xl:px-0",children:[(0,jsx_runtime.jsxs)("nav",{className:"flex w-full select-none items-end pt-8 pb-12 text-gray-800 dark:text-gray-400",children:[(0,jsx_runtime.jsx)(NavItem,{href:"/",className:"mr-2",children:(0,jsx_runtime.jsx)(image_default(),{src:"/favicon.png",blurDataURL:"/favicon.png",alt:"logo",width:40,height:40,placeholder:"blur",className:"block h-auto"})}),config.JA.menus.map(link=>(0,jsx_runtime.jsx)(NavItem,{href:link.path,className:"px-3 py-1.5",children:link.label},link.label)),(0,jsx_runtime.jsx)("div",{className:"ml-auto mb-1",children:(0,jsx_runtime.jsx)(ThemeSwitch,{})})]}),(0,jsx_runtime.jsx)("main",{className:"pb-16",children:children}),(0,jsx_runtime.jsxs)("footer",{className:"pb-8 text-sm text-gray-800 dark:text-gray-400",children:[(0,jsx_runtime.jsx)(Hr.Z,{className:"mb-8"}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-end space-y-1",children:[(0,jsx_runtime.jsx)("div",{className:"flex space-x-2",children:Object.keys(config.JA.author.contacts).map(sns=>{let link=config.JA.author.contacts[sns];return link?(0,jsx_runtime.jsx)(ExternalLink,{href:link,children:lib_default()(sns)},sns):null})}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsxs)("span",{children:["\xa9 ",since," "]}),(0,jsx_runtime.jsx)(ExternalLink,{href:config.JA.author.contacts.github,children:config.JA.title}),(0,jsx_runtime.jsx)("span",{children:" Powered by "}),(0,jsx_runtime.jsx)(ExternalLink,{href:"https://nextjs.org/",children:"Next.js"}),(0,jsx_runtime.jsx)("span",{children:", "}),(0,jsx_runtime.jsx)(ExternalLink,{href:"https://pages.github.com/",children:"Github Pages"})]})]})]})]})}},7386:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{T:function(){return PageSEO},U:function(){return BlogSEO}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),next_seo__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2962),_config__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(929);let getTitle=title=>title?"".concat(title," – ").concat(_config__WEBPACK_IMPORTED_MODULE_2__.JA.title):_config__WEBPACK_IMPORTED_MODULE_2__.JA.title,getRelativeUrl=url=>url?"".concat(_config__WEBPACK_IMPORTED_MODULE_2__.JA.url,"/").concat(url.replace(/^\/s*/g,"")):_config__WEBPACK_IMPORTED_MODULE_2__.JA.url,PageSEO=param=>{let{title,description,url}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_seo__WEBPACK_IMPORTED_MODULE_1__.PB,{title:getTitle(title),description:null!=description?description:_config__WEBPACK_IMPORTED_MODULE_2__.JA.description,canonical:getRelativeUrl(url)})},BlogSEO=param=>{let{summary,tags,images,...props}=param,title=getTitle(props.title),url=getRelativeUrl(props.url),dateTime=new Date(props.date).toISOString(),featuredImages=images.map(img=>({url:img,alt:title}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_seo__WEBPACK_IMPORTED_MODULE_1__.PB,{description:summary,canonical:url,openGraph:{type:"article",article:{publishedTime:dateTime,modifiedTime:dateTime,authors:["".concat(_config__WEBPACK_IMPORTED_MODULE_2__.JA.url)],tags},url,title,description:summary,images:featuredImages},additionalMetaTags:[{name:"twitter:image",content:images[0]}]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_seo__WEBPACK_IMPORTED_MODULE_1__.dX,{datePublished:dateTime,dateModified:dateTime,images:images,url:url,title:title,description:summary,authorName:_config__WEBPACK_IMPORTED_MODULE_2__.JA.author.name,publisherName:_config__WEBPACK_IMPORTED_MODULE_2__.JA.author.name,publisherLogo:"".concat(_config__WEBPACK_IMPORTED_MODULE_2__.JA.url,"/favicon.ico")})]})}},2214:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Hr}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_libs_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(526);function Hr(param){let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr",{...props,className:(0,_libs_core__WEBPACK_IMPORTED_MODULE_1__.$)("border-1 w-full border-gray-200 transition-all dark:border-gray-800",className)})}},3681:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return IconText}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);var _libs_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(526);function IconText(param){let{Icon,iconSize=14,text,className}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:(0,_libs_core__WEBPACK_IMPORTED_MODULE_2__.$)("flex items-center",null!=className?className:"gap-1 text-xs"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{width:iconSize,height:iconSize}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:text})]})}},1262:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return CalanderIcon}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);function CalanderIcon(param){let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:className,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})})}},9961:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return ClockIcon}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);function ClockIcon(param){let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:className,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}},526:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$:function(){return $}});let $=function(){for(var _len=arguments.length,classnames=Array(_len),_key=0;_key<_len;_key++)classnames[_key]=arguments[_key];return classnames.filter(Boolean).join(" ")}},7296:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__N_SSG:function(){return __N_SSG},default:function(){return PostPage}});var _mdx_js_react_namespaceObject={};__webpack_require__.r(_mdx_js_react_namespaceObject),__webpack_require__.d(_mdx_js_react_namespaceObject,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var jsx_runtime=__webpack_require__(5893),dayjs_min=__webpack_require__(7484),dayjs_min_default=__webpack_require__.n(dayjs_min),react=__webpack_require__(7294),dist_jsx_runtime=__webpack_require__(2746);let MDXContext=react.createContext({});function withMDXComponents(Component){return function(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents=useMDXComponents(components);return disableParentContext&&(allComponents=components||emptyObject),react.createElement(MDXContext.Provider,{value:allComponents},children)}function MDXRemote({compiledSource,frontmatter,scope,components={},lazy}){let[isReadyToRender,setIsReadyToRender]=(0,react.useState)(!lazy||"undefined"==typeof window);(0,react.useEffect)(()=>{if(lazy){let handle=window.requestIdleCallback(()=>{setIsReadyToRender(!0)});return()=>window.cancelIdleCallback(handle)}},[]);let Content=(0,react.useMemo)(()=>{let fullScope=Object.assign({opts:{..._mdx_js_react_namespaceObject,...dist_jsx_runtime.c}},{frontmatter},scope),keys=Object.keys(fullScope),values=Object.values(fullScope),hydrateFn=Reflect.construct(Function,keys.concat(`${compiledSource}`));return hydrateFn.apply(hydrateFn,values).default},[scope,compiledSource]);if(!isReadyToRender)return react.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let content=react.createElement(MDXProvider,{components:components},react.createElement(Content,null));return lazy?react.createElement("div",null,content):content}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(cb){var start=Date.now();return setTimeout(function(){cb({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-start))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(id){clearTimeout(id)});var Hr=__webpack_require__(2214),IconText=__webpack_require__(3681),index_module=__webpack_require__(2010);function Giscus(){let ref=(0,react.useRef)(null),{resolvedTheme}=(0,index_module.F)(),theme="dark"===resolvedTheme?"dark":"light";return(0,react.useEffect)(()=>{if(!ref.current||ref.current.hasChildNodes())return;let scriptElem=document.createElement("script");scriptElem.src="https://giscus.app/client.js",scriptElem.async=!0,scriptElem.crossOrigin="anonymous",scriptElem.setAttribute("data-repo","bepyan/bepyan.github.io"),scriptElem.setAttribute("data-repo-id","R_kgDOIXS9lg"),scriptElem.setAttribute("data-category","General"),scriptElem.setAttribute("data-category-id","DIC_kwDOIXS9ls4CSh3S"),scriptElem.setAttribute("data-mapping","pathname"),scriptElem.setAttribute("data-strict","0"),scriptElem.setAttribute("data-reactions-enabled","1"),scriptElem.setAttribute("data-emit-metadata","0"),scriptElem.setAttribute("data-input-position","bottom"),scriptElem.setAttribute("data-theme",theme),scriptElem.setAttribute("data-lang","en"),ref.current.appendChild(scriptElem)},[]),(0,react.useEffect)(()=>{var ref;let iframe=document.querySelector("iframe.giscus-frame");null==iframe||null===(ref=iframe.contentWindow)||void 0===ref||ref.postMessage({giscus:{setConfig:{theme}}},"https://giscus.app")},[theme]),(0,jsx_runtime.jsx)("section",{ref:ref})}var CalanderIcon=__webpack_require__(1262),ClockIcon=__webpack_require__(9961),Layout=__webpack_require__(4462),SEO=__webpack_require__(7386),__N_SSG=!0;function PostPage(param){let{post,slug,mdx}=param;return(0,jsx_runtime.jsxs)(Layout.Z,{children:[(0,jsx_runtime.jsx)(SEO.U,{...post,url:"/blog/".concat(slug),summary:post.description,images:[]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h1",{className:"mb-4 text-center text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl",children:post.title}),(0,jsx_runtime.jsx)("div",{className:"mt-2 flex w-full flex-col justify-between md:flex-row md:items-center",children:(0,jsx_runtime.jsxs)("div",{className:"mx-auto flex gap-2 text-gray-600 dark:text-gray-400",children:[(0,jsx_runtime.jsx)(IconText.Z,{Icon:CalanderIcon.Z,text:dayjs_min_default()(post.date).format("YYYY.MM.DD")}),(0,jsx_runtime.jsx)(IconText.Z,{Icon:ClockIcon.Z,text:"".concat(post.readingMinutes,"분")})]})}),(0,jsx_runtime.jsx)(Hr.Z,{className:"mt-4"})]}),(0,jsx_runtime.jsx)("div",{className:"prose mt-4 w-full max-w-none dark:prose-dark",children:(0,jsx_runtime.jsx)(MDXRemote,{...mdx})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Hr.Z,{className:"my-8"}),(0,jsx_runtime.jsx)(Giscus,{})]})]})}},5443:function(){},4129:function(){},2746:function(module,__unused_webpack_exports,__webpack_require__){let jsxRuntime=__webpack_require__(5893);module.exports.c=jsxRuntime}},function(__webpack_require__){__webpack_require__.O(0,[302,774,888,179],function(){return __webpack_require__(__webpack_require__.s=8949)}),_N_E=__webpack_require__.O()}]);