(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return c.ImageLoaderProps}}),t.default=function(e){let t,o;var r,{src:a,sizes:m,unoptimized:v=!1,priority:y=!1,loading:w,className:S,quality:C,width:E,height:j,fill:_,style:x,onLoad:P,onLoadingComplete:k,placeholder:O="empty",blurDataURL:I,layout:M,objectFit:L,objectPosition:R,lazyBoundary:T,lazyRoot:z}=e,N=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=l.useContext(f.ImageConfigContext),A=l.useMemo(()=>{let e=p||D||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),o=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:o})},[D]),B=N,U=B.loader||d.default;if(delete B.loader,"__next_img_default"in U){if("custom"===A.loader)throw Error('Image with src "'.concat(a,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let W=U;U=e=>{let{config:t}=e,o=i(e,["config"]);return W(o)}}if(M){"fill"===M&&(_=!0);let H={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];H&&(x=n({},x,H));let G={responsive:"100vw",fill:"100vw"}[M];G&&!m&&(m=G)}let Z="",J=h(E),$=h(j);if("object"==typeof(r=a)&&(g(r)||void 0!==r.src)){let q=g(a)?a.default:a;if(!q.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(q)));if(!q.height||!q.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(q)));if(t=q.blurWidth,o=q.blurHeight,I=I||q.blurDataURL,Z=q.src,!_){if(J||$){if(J&&!$){let F=J/q.width;$=Math.round(q.height*F)}else if(!J&&$){let K=$/q.height;J=Math.round(q.width*K)}}else J=q.width,$=q.height}}let V=!y&&("lazy"===w||void 0===w);((a="string"==typeof a?a:Z).startsWith("data:")||a.startsWith("blob:"))&&(v=!0,V=!1),A.unoptimized&&(v=!0);let[Q,X]=l.useState(!1),[Y,ee]=l.useState(!1),et=h(C),eo=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:R}:{},Y?{}:{color:"transparent"},x),en="blur"===O&&I&&!Q?{backgroundSize:eo.objectFit||"cover",backgroundPosition:eo.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(u.getImageBlurSvg({widthInt:J,heightInt:$,blurWidth:t,blurHeight:o,blurDataURL:I}),'")')}:{},er=function(e){let{config:t,src:o,unoptimized:n,width:r,quality:a,sizes:i,loader:l}=e;if(n)return{src:o,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,o){let{deviceSizes:n,allSizes:r}=e;if(o){let a=/(^|\s)(1?\d?\d)vw/g,i=[];for(let l;l=a.exec(o);l)i.push(parseInt(l[2]));if(i.length){let s=.01*Math.min(...i);return{widths:r.filter(e=>e>=n[0]*s),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let u=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:u,kind:"x"}}(t,r,i),c=s.length-1;return{sizes:i||"w"!==u?i:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:o,quality:a,width:e})," ").concat("w"===u?e:n+1).concat(u)).join(", "),src:l({config:t,src:o,quality:a,width:s[c]})}}({config:A,src:a,unoptimized:v,width:J,quality:et,sizes:m,loader:U}),ea=a,ei={imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:B.crossOrigin},el=l.useRef(P);l.useEffect(()=>{el.current=P},[P]);let es=l.useRef(k);l.useEffect(()=>{es.current=k},[k]);let eu=n({isLazy:V,imgAttributes:er,heightInt:$,widthInt:J,qualityInt:et,className:S,imgStyle:eo,blurStyle:en,loading:w,config:A,fill:_,unoptimized:v,placeholder:O,loader:U,srcString:ea,onLoadRef:el,onLoadingCompleteRef:es,setBlurComplete:X,setShowAltText:ee},B);return l.default.createElement(l.default.Fragment,null,l.default.createElement(b,Object.assign({},eu)),y?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src},ei))):null)};var n=o(6495).Z,r=o(2648).Z,a=o(1598).Z,i=o(7273).Z,l=a(o(7294)),s=r(o(3121)),u=o(2675),c=o(139),f=o(8730);o(7238);var d=r(o(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,o,r,a,i,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===o&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;r.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist(){},preventDefault(){l=!0,t.preventDefault()},stopPropagation(){s=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let b=e=>{var{imgAttributes:t,heightInt:o,widthInt:r,qualityInt:a,className:s,imgStyle:u,blurStyle:c,isLazy:f,fill:d,placeholder:p,loading:g,srcString:h,config:b,unoptimized:v,loader:y,onLoadRef:w,onLoadingCompleteRef:S,setBlurComplete:C,setShowAltText:E,onLoad:j,onError:_}=e,x=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},x,t,{width:r,height:o,decoding:"async","data-nimg":d?"fill":"1",className:s,loading:g,style:n({},u,c),ref:l.useCallback(e=>{e&&(_&&(e.src=e.src),e.complete&&m(e,h,p,w,S,C,v))},[h,p,w,S,C,_,v]),onLoad(e){let t=e.currentTarget;m(t,h,p,w,S,C,v)},onError(e){E(!0),"blur"===p&&C(!0),_&&_(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(2648).Z,r=o(7273).Z,a=n(o(7294)),i=o(1003),l=o(7795),s=o(4465),u=o(2692),c=o(8245),f=o(9246),d=o(227),p=o(3468);let g=new Set;function h(e,t,o,n){if(i.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let r=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,a=t+"%"+o+"%"+r;if(g.has(a))return;g.add(a)}Promise.resolve(e.prefetch(t,o,n)).catch(e=>{})}}function m(e){return"string"==typeof e?e:l.formatUrl(e)}let b=a.default.forwardRef(function(e,t){let o,n;let{href:l,as:g,children:b,prefetch:v,passHref:y,replace:w,shallow:S,scroll:C,locale:E,onClick:j,onMouseEnter:_,onTouchStart:x,legacyBehavior:P=!0!==Boolean(!0)}=e,k=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=b,P&&("string"==typeof o||"number"==typeof o)&&(o=a.default.createElement("a",null,o));let O=!1!==v,I=a.default.useContext(u.RouterContext),M=a.default.useContext(c.AppRouterContext),L=null!=I?I:M,R=!I,{href:T,as:z}=a.default.useMemo(()=>{if(!I){let e=m(l);return{href:e,as:g?m(g):e}}let[t,o]=i.resolveHref(I,l,!0);return{href:t,as:g?i.resolveHref(I,g):o||t}},[I,l,g]),N=a.default.useRef(T),D=a.default.useRef(z);P&&(n=a.default.Children.only(o));let A=P?n&&"object"==typeof n&&n.ref:t,[B,U,W]=f.useIntersection({rootMargin:"200px"}),H=a.default.useCallback(e=>{(D.current!==z||N.current!==T)&&(W(),D.current=z,N.current=T),B(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[z,A,T,W,B]);a.default.useEffect(()=>{L&&U&&O&&h(L,T,z,{locale:E})},[z,T,U,E,O,null==I?void 0:I.locale,L]);let G={ref:H,onClick(e){P||"function"!=typeof j||j(e),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,o,n,r,l,s,u,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(o)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:l,locale:u,scroll:s}):t[r?"replace":"push"](n||o,{forceOptimisticNavigation:!f})};c?a.default.startTransition(g):g()}(e,L,T,z,w,S,C,E,R,O)},onMouseEnter(e){P||"function"!=typeof _||_(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&(O||!R)&&h(L,T,z,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){P||"function"!=typeof x||x(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&(O||!R)&&h(L,T,z,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if(!P||y||"a"===n.type&&!("href"in n.props)){let Z=void 0!==E?E:null==I?void 0:I.locale,J=(null==I?void 0:I.isLocaleDomain)&&d.getDomainLocale(z,Z,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);G.href=J||p.addBasePath(s.addLocale(z,Z,null==I?void 0:I.defaultLocale))}return P?a.default.cloneElement(n,G):a.default.createElement("a",Object.assign({},k,G),o)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:s}=e,u=s||!a,[c,f]=n.useState(!1),[d,p]=n.useState(null);n.useEffect(()=>{if(a){if(!u&&!c&&d&&d.tagName){let e=function(e,t,o){let{id:n,observer:r,elements:a}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(t=i.get(n)))return t;let r=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:a,elements:r},l.push(o),i.set(o,t),t}(o);return a.set(e,t),r.observe(e),function(){if(a.delete(e),r.unobserve(e),0===a.size){r.disconnect(),i.delete(n);let t=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&l.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!c){let n=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(n)}},[d,u,o,t,c]);let g=n.useCallback(()=>{f(!1)},[]);return[p,c,g]};var n=o(7294),r=o(4686);let a="function"==typeof IntersectionObserver,i=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:o,blurWidth:n,blurHeight:r,blurDataURL:a}=e,i=n||t,l=r||o,s=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&r?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function o(e){let{config:t,src:o,width:n,quality:r}=e;return o.endsWith(".svg")&&!t.dangerouslyAllowSVG?o:"".concat(t.path,"?url=").concat(encodeURIComponent(o),"&w=").concat(n,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o.__next_img_default=!0,t.default=o},5675:function(e,t,o){e.exports=o(9749)},1664:function(e,t,o){e.exports=o(1551)},1163:function(e,t,o){e.exports=o(880)},2891:function(e,t,o){let n=o(1439),r=o(7224),a="[^\\s'’\\(\\)!?;:\"-]",i=RegExp(`(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${a}))|(${a}))(${a}*[’']*${a}*)`,"g"),l=e=>e.map(e=>[RegExp(`\\b${e}\\b`,"gi"),e]);e.exports=(e,t={})=>{e=e.toLowerCase().replace(i,(e,t="",o,r,a,i,l)=>{let s=e.length+i>=l.length,u=function(e){let t=e[0];return/\s/.test(t)?e.slice(1):/[\(\)]/.test(t)?null:e}(e);return u?!o&&n.has(r+a)&&!s?u:t+(r||o).toUpperCase()+a:e});let o=t.special||[],a=[...r,...o],s=l(a);return s.forEach(([t,o])=>{e=e.replace(t,o)}),e}},1439:function(e){e.exports=new Set(["for","and","nor","but","or","yet","so","a","an","the","aboard","about","above","across","after","against","along","amid","among","anti","around","as","at","before","behind","below","beneath","beside","besides","between","beyond","but","by","concerning","considering","despite","down","during","except","excepting","excluding","following","for","from","in","inside","into","like","minus","near","of","off","on","onto","opposite","over","past","per","plus","regarding","round","save","since","than","through","to","toward","towards","under","underneath","unlike","until","up","upon","versus","via","with","within","without"])},7224:function(e){e.exports=["ZEIT","ZEIT Inc.","Vercel","Vercel Inc.","CLI","API","HTTP","HTTPS","JSX","DNS","URL","now.sh","now.json","vercel.app","vercel.json","CI","CD","CDN","package.json","package.lock","yarn.lock","GitHub","GitLab","CSS","Sass","JS","JavaScript","TypeScript","HTML","WordPress","Next.js","Node.js","Webpack","Docker","Bash","Kubernetes","SWR","TinaCMS","UI","UX","TS","TSX","iPhone","iPad","watchOS","iOS","iPadOS","macOS","PHP","composer.json","composer.lock","CMS","SQL","C","C#","GraphQL","GraphiQL","JWT","JWTs"]}}]);