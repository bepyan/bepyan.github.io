(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[848],{568:function(){},4994:function(e,t,n){"use strict";n.d(t,{M:function(){return g}});var r=n(7294),o=n(9734),i=n(4283);function s(){let e=(0,r.useRef)(!1);return(0,i.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var u=n(8168),a=n(6770);class c extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function l({children:e,isPresent:t}){let n=(0,r.useId)(),o=(0,r.useRef)(null),i=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)(()=>{let{width:e,height:r,top:s,left:u}=i.current;if(t||!o.current||!e||!r)return;o.current.dataset.motionPopId=n;let a=document.createElement("style");return document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${s}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(a)}},[t]),r.createElement(c,{isPresent:t,childRef:o,sizeRef:i},r.cloneElement(e,{ref:o}))}let f=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:i,presenceAffectsLayout:s,mode:c})=>{let f=(0,a.h)(p),d=(0,r.useId)(),h=(0,r.useMemo)(()=>({id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;o&&o()},register:e=>(f.set(e,!1),()=>f.delete(e))}),s?void 0:[n]);return(0,r.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[n]),r.useEffect(()=>{n||f.size||!o||o()},[n]),"popLayout"===c&&(e=r.createElement(l,{isPresent:n},e)),r.createElement(u.O.Provider,{value:h},e)};function p(){return new Map}var d=n(6179),h=n(3911);let m=e=>e.key||"",g=({children:e,custom:t,initial:n=!0,onExitComplete:u,exitBeforeEnter:a,presenceAffectsLayout:c=!0,mode:l="sync"})=>{a&&(l="wait");let[p]=function(){let e=s(),[t,n]=(0,r.useState)(0),i=(0,r.useCallback)(()=>{e.current&&n(t+1)},[t]),u=(0,r.useCallback)(()=>o.Z_.postRender(i),[i]);return[u,t]}(),g=(0,r.useContext)(d.p).forceRender;g&&(p=g);let b=s(),v=function(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}(e),y=v,E=new Set,x=(0,r.useRef)(y),w=(0,r.useRef)(new Map).current,S=(0,r.useRef)(!0);if((0,i.L)(()=>{S.current=!1,function(e,t){e.forEach(e=>{let n=m(e);t.set(n,e)})}(v,w),x.current=y}),(0,h.z)(()=>{S.current=!0,w.clear(),E.clear()}),S.current)return r.createElement(r.Fragment,null,y.map(e=>r.createElement(f,{key:m(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:c,mode:l},e)));y=[...y];let C=x.current.map(m),k=v.map(m),T=C.length;for(let e=0;e<T;e++){let t=C[e];-1===k.indexOf(t)&&E.add(t)}return"wait"===l&&E.size&&(y=[]),E.forEach(e=>{if(-1!==k.indexOf(e))return;let n=w.get(e);if(!n)return;let o=C.indexOf(e),i=()=>{w.delete(e),E.delete(e);let t=x.current.findIndex(t=>t.key===e);if(x.current.splice(t,1),!E.size){if(x.current=v,!1===b.current)return;p(),u&&u()}};y.splice(o,0,r.createElement(f,{key:m(n),isPresent:!1,onExitComplete:i,custom:t,presenceAffectsLayout:c,mode:l},n))}),y=y.map(e=>{let t=e.key;return E.has(t)?e:r.createElement(f,{key:m(e),isPresent:!0,presenceAffectsLayout:c,mode:l},e)}),r.createElement(r.Fragment,null,E.size?y:y.map(e=>(0,r.cloneElement)(e)))}},1296:function(e,t,n){var r=0/0,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,l="object"==typeof self&&self&&self.Object===Object&&self,f=c||l||Function("return this")(),p=Object.prototype.toString,d=Math.max,h=Math.min,m=function(){return f.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||(n=t)&&"object"==typeof n&&"[object Symbol]"==p.call(t))return r;if(g(e)){var t,n,c="function"==typeof e.valueOf?e.valueOf():e;e=g(c)?c+"":c}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=s.test(e);return l||u.test(e)?a(e.slice(2),l?2:8):i.test(e)?r:+e}e.exports=function(e,t,n){var r,o,i,s,u,a,c=0,l=!1,f=!1,p=!0;if("function"!=typeof e)throw TypeError("Expected a function");function v(t){var n=r,i=o;return r=o=void 0,c=t,s=e.apply(i,n)}function y(e){var n=e-a,r=e-c;return void 0===a||n>=t||n<0||f&&r>=i}function E(){var e,n,r,o=m();if(y(o))return x(o);u=setTimeout(E,(e=o-a,n=o-c,r=t-e,f?h(r,i-n):r))}function x(e){return(u=void 0,p&&r)?v(e):(r=o=void 0,s)}function w(){var e,n=m(),i=y(n);if(r=arguments,o=this,a=n,i){if(void 0===u)return c=e=a,u=setTimeout(E,t),l?v(e):s;if(f)return u=setTimeout(E,t),v(a)}return void 0===u&&(u=setTimeout(E,t)),s}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(f="maxWait"in n)?d(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=a=o=u=void 0},w.flush=function(){return void 0===u?s:x(m())},w}},2891:function(e,t,n){let r=n(1439),o=n(7224),i="[^\\s'’\\(\\)!?;:\"-]",s=RegExp(`(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${i}))|(${i}))(${i}*[’']*${i}*)`,"g"),u=e=>e.map(e=>[RegExp(`\\b${e}\\b`,"gi"),e]);e.exports=(e,t={})=>{e=e.toLowerCase().replace(s,(e,t="",n,o,i,s,u)=>{let a=e.length+s>=u.length,c=function(e){let t=e[0];return/\s/.test(t)?e.slice(1):/[\(\)]/.test(t)?null:e}(e);return c?!n&&r.has(o+i)&&!a?c:t+(o||n).toUpperCase()+i:e});let n=t.special||[],i=[...o,...n],a=u(i);return a.forEach(([t,n])=>{e=e.replace(t,n)}),e}},1439:function(e){e.exports=new Set(["for","and","nor","but","or","yet","so","a","an","the","aboard","about","above","across","after","against","along","amid","among","anti","around","as","at","before","behind","below","beneath","beside","besides","between","beyond","but","by","concerning","considering","despite","down","during","except","excepting","excluding","following","for","from","in","inside","into","like","minus","near","of","off","on","onto","opposite","over","past","per","plus","regarding","round","save","since","than","through","to","toward","towards","under","underneath","unlike","until","up","upon","versus","via","with","within","without"])},7224:function(e){e.exports=["ZEIT","ZEIT Inc.","Vercel","Vercel Inc.","CLI","API","HTTP","HTTPS","JSX","DNS","URL","now.sh","now.json","vercel.app","vercel.json","CI","CD","CDN","package.json","package.lock","yarn.lock","GitHub","GitLab","CSS","Sass","JS","JavaScript","TypeScript","HTML","WordPress","Next.js","Node.js","Webpack","Docker","Bash","Kubernetes","SWR","TinaCMS","UI","UX","TS","TSX","iPhone","iPad","watchOS","iOS","iPadOS","macOS","PHP","composer.json","composer.lock","CMS","SQL","C","C#","GraphQL","GraphiQL","JWT","JWTs"]}}]);