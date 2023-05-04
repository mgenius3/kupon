(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{6245:function(e,t,n){"use strict";function s(e){this.message=e}s.prototype=new Error,s.prototype.name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new s("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,i=0,r=0,a="";o=t.charAt(r++);~o&&(n=i%4?64*n+o:o,i++%4)?a+=String.fromCharCode(255&n>>(-2*i&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return a};function i(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(o(e).replace(/(.)/g,(function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(t)}catch(e){return o(t)}}function r(e){this.message=e}r.prototype=new Error,r.prototype.name="InvalidTokenError",t.Z=function(e,t){if("string"!=typeof e)throw new r("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(i(e.split(".")[n]))}catch(e){throw new r("Invalid token specified: "+e.message)}}},4674:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/user/profile",function(){return n(8381)}])},4656:function(e,t,n){"use strict";var s=n(5893),o=n(7294),i=n(1664),r=n.n(i),a=n(1163),l=n(7893),c=n(6245),u=n(5387),d=n(5985),m=n(9008),p=n.n(m),f=n(2920);n(993);t.Z=function(e){var t=e.children,n=(0,o.useState)((function(){return localStorage.getItem("token")}))[0],i=(0,o.useState)(),m=i[0],h=i[1],g=(0,o.useRef)(),v=(0,a.useRouter)();return(0,o.useEffect)((function(){try{var e=(0,c.Z)(n);h(e)}catch(t){console.log(t)}}),[n]),(0,s.jsxs)(o.Fragment,{children:[(0,s.jsxs)(p(),{children:[(0,s.jsx)("title",{children:"User - Kupon "}),(0,s.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,s.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,s.jsx)("meta",{name:"description",content:"description"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"shortcut icon",href:"/images/kupon icon.png"})]}),(0,s.jsx)(f.Ix,{position:"bottom-center"}),(0,s.jsx)(d.Z,{children:(0,s.jsxs)("main",{id:"account",children:[(0,s.jsxs)("aside",{ref:g,children:[(0,s.jsxs)("div",{className:"profile",children:[(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{style:{color:"white",backgroundColor:"black",borderRadius:"50%",padding:"3px"},children:(0,l.Q)(null===m||void 0===m?void 0:m.firstName,null===m||void 0===m?void 0:m.lastName)}),(0,s.jsx)("p",{children:(0,l.S)((null===m||void 0===m?void 0:m.firstName)+" "+(null===m||void 0===m?void 0:m.lastName),15)})]}),(0,s.jsx)("img",{id:"cancel",src:"https://img.icons8.com/ios/50/FD7E14/cancel.png",onClick:function(){return g.current.classList.remove("menu")}})]}),(0,s.jsxs)("div",{className:"side_links",children:[(0,s.jsx)(r(),{href:"/",children:(0,s.jsxs)("span",{style:{cursor:"pointer"},children:[(0,s.jsx)("img",{src:"https://img.icons8.com/ios-glyphs/30/FD7E14/home-page--v1.png",className:"icon"}),(0,s.jsx)("b",{children:"Home"})]})}),(0,s.jsx)(r(),{href:"profile",children:(0,s.jsxs)("span",{style:{cursor:"pointer"},children:[(0,s.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/FD7E14/user.png",className:"icon"}),(0,s.jsx)("b",{children:"Profile"})]})}),(0,s.jsx)(r(),{href:"logistics",children:(0,s.jsxs)("span",{style:{cursor:"pointer"},children:[(0,s.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/FD7E14/dashboard-layout.png",className:"icon"}),(0,s.jsx)("b",{children:"Logistics"})]})}),(0,s.jsx)(r(),{href:"market",children:(0,s.jsxs)("span",{style:{cursor:"pointer"},children:[(0,s.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/FD7E14/dashboard-layout.png",className:"icon"}),(0,s.jsx)("b",{children:"Market"})]})}),(0,s.jsxs)("span",{style:{cursor:"pointer"},onClick:function(){(0,u.Z)()&&v.push("/login")},children:[(0,s.jsx)("img",{src:"https://img.icons8.com/ios/50/FD7E14/logout-rounded--v1.png",className:"icon"}),(0,s.jsx)("b",{children:"Logout"})]})]})]}),(0,s.jsxs)("section",{className:"main_container",children:[(0,s.jsx)("header",{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{id:"menu",src:"https://img.icons8.com/ios-filled/50/000000/menu--v1.png",onClick:function(){return g.current.classList.add("menu")}}),(0,s.jsx)("h3",{children:"User - Settings"}),(0,s.jsx)("p",{style:{opacity:"0.7"},children:"Manage your personal settings"})]})}),(0,s.jsx)("article",{children:t})]})]})})]})}},5985:function(e,t,n){"use strict";var s=n(5893),o=n(9704),i=n.n(o),r=n(1163),a=n(7294);t.Z=function(e){var t=e.children,n=(0,r.useRouter)();return(0,a.useEffect)((function(){var e=setTimeout((function(){var e=localStorage.getItem("token");try{i().verify(e,"kupon")}catch(t){n.push("/login")}}),0);return function(){return clearTimeout(e)}}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{children:t})})}},8381:function(e,t,n){"use strict";n.r(t);var s=n(5893),o=n(7294),i=n(7893),r=n(6245),a=n(4656);t.default=function(){var e=(0,o.useState)((function(){return localStorage.getItem("token")}))[0],t=(0,o.useState)(),n=t[0],l=t[1];return(0,o.useEffect)((function(){try{var t=(0,r.Z)(e);l(t)}catch(n){console.log(n)}}),[e]),(0,s.jsx)(a.Z,{children:(0,s.jsx)("div",{className:"card card-style1 border-0",children:(0,s.jsx)("div",{className:"card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7",children:(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsx)("div",{className:"col-lg-6 mb-4 mb-lg-0",children:(0,s.jsx)("span",{style:{color:"white",backgroundColor:"black",borderRadius:"50%",padding:"10px",fontSize:"100px"},children:(0,i.Q)(null===n||void 0===n?void 0:n.firstName,null===n||void 0===n?void 0:n.lastName)})}),(0,s.jsxs)("div",{className:"col-lg-6 px-xl-10",children:[(0,s.jsx)("div",{className:"bg-danger d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded",children:(0,s.jsxs)("h3",{className:"h2 text-white mb-0",children:[null===n||void 0===n?void 0:n.firstName," ",null===n||void 0===n?void 0:n.lastName]})}),(0,s.jsx)("br",{}),(0,s.jsxs)("ul",{className:"list-unstyled mb-1-9",children:[(0,s.jsxs)("li",{className:"mb-2 mb-xl-3 display-28",children:[(0,s.jsx)("span",{className:"display-26 text-danger me-2 font-weight-600",children:"Address:"})," ",null===n||void 0===n?void 0:n.address]}),(0,s.jsxs)("li",{className:"mb-2 mb-xl-3 display-28",children:[(0,s.jsx)("span",{className:"display-26 text-danger me-2 font-weight-600",children:"Email:"})," ",null===n||void 0===n?void 0:n.email]}),(0,s.jsxs)("li",{className:"display-28",children:[(0,s.jsx)("span",{className:"display-26 text-danger me-2 font-weight-600",children:"Phone:"})," ",null===n||void 0===n?void 0:n.telephone]})]}),(0,s.jsxs)("ul",{className:"social-icon-style1 list-unstyled mb-0 ps-0",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#!",children:(0,s.jsx)("i",{className:"ti-twitter-alt"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#!",children:(0,s.jsx)("i",{className:"ti-facebook"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#!",children:(0,s.jsx)("i",{className:"ti-pinterest"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#!",children:(0,s.jsx)("i",{className:"ti-instagram"})})})]})]})]})})})})}},5387:function(e,t,n){"use strict";function s(){return localStorage.clear(),!0}n.d(t,{Z:function(){return s}})},7893:function(e,t,n){"use strict";function s(e,t){return(null===e||void 0===e?void 0:e.length)>t?e.slice(0,t-3)+"...":e}function o(e,t){var n=null===e||void 0===e?void 0:e.charAt(0),s=null===t||void 0===t?void 0:t.charAt(0);return n||s?n+s:"nil"}n.d(t,{Q:function(){return o},S:function(){return s}})},993:function(){},9008:function(e,t,n){e.exports=n(5443)},2920:function(e,t,n){"use strict";n.d(t,{Ix:function(){return C},Am:function(){return A}});var s=n(7294);function o(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}var i=function(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(s&&(s+=" "),s+=t);return s};const r=e=>"number"==typeof e&&!isNaN(e),a=e=>"string"==typeof e,l=e=>"function"==typeof e,c=e=>a(e)||l(e)?e:null,u=e=>(0,s.isValidElement)(e)||a(e)||l(e)||r(e);function d(e){let{enter:t,exit:n,appendPosition:o=!1,collapse:i=!0,collapseDuration:r=300}=e;return function(e){let{children:a,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:m}=e;const p=o?`${t}--${l}`:t,f=o?`${n}--${l}`:n,h=(0,s.useRef)(0);return(0,s.useLayoutEffect)((()=>{const e=d.current,t=p.split(" "),n=s=>{s.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==s.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,s.useEffect)((()=>{const e=d.current,t=()=>{e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);const{scrollHeight:s,style:o}=e;requestAnimationFrame((()=>{o.minHeight="initial",o.height=s+"px",o.transition=`all ${n}ms`,requestAnimationFrame((()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,u,r):u()};m||(c?t():(h.current=1,e.className+=` ${f}`,e.addEventListener("animationend",t)))}),[m]),s.createElement(s.Fragment,null,a)}}function m(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const p={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter((e=>e!==t));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach((t=>{const n=setTimeout((()=>{t(...[].slice.call(arguments,1))}),0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)}))}},f=e=>{let{theme:t,type:n,...o}=e;return s.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...o})},h={info:function(e){return s.createElement(f,{...e},s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(f,{...e},s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(f,{...e},s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(f,{...e},s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function g(e){const[,t]=(0,s.useReducer)((e=>e+1),0),[n,o]=(0,s.useState)([]),i=(0,s.useRef)(null),d=(0,s.useRef)(new Map).current,f=e=>-1!==n.indexOf(e),g=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:f,getToast:e=>d.get(e)}).current;function v(e){let{containerId:t}=e;const{limit:n}=g.props;!n||t&&g.containerId!==t||(g.count-=g.queue.length,g.queue=[])}function y(e){o((t=>null==e?[]:t.filter((t=>t!==e))))}function x(){const{toastContent:e,toastProps:t,staleId:n}=g.queue.shift();T(e,t,n)}function E(e,n){let{delay:o,staleId:f,...v}=n;if(!u(e)||function(e){return!i.current||g.props.enableMultiContainer&&e.containerId!==g.props.containerId||d.has(e.toastId)&&null==e.updateId}(v))return;const{toastId:E,updateId:b,data:j}=v,{props:N}=g,C=()=>y(E),_=null==b;_&&g.count++;const I={...N,style:N.toastStyle,key:g.toastKey++,...v,toastId:E,updateId:b,data:j,closeToast:C,isIn:!1,className:c(v.className||N.toastClassName),bodyClassName:c(v.bodyClassName||N.bodyClassName),progressClassName:c(v.progressClassName||N.progressClassName),autoClose:!v.isLoading&&(w=v.autoClose,k=N.autoClose,!1===w||r(w)&&w>0?w:k),deleteToast(){const e=m(d.get(E),"removed");d.delete(E),p.emit(4,e);const n=g.queue.length;if(g.count=null==E?g.count-g.displayedToast:g.count-1,g.count<0&&(g.count=0),n>0){const e=null==E?g.props.limit:1;if(1===n||1===e)g.displayedToast++,x();else{const t=e>n?n:e;g.displayedToast=t;for(let e=0;e<t;e++)x()}}else t()}};var w,k;I.iconOut=function(e){let{theme:t,type:n,isLoading:o,icon:i}=e,c=null;const u={theme:t,type:n};return!1===i||(l(i)?c=i(u):(0,s.isValidElement)(i)?c=(0,s.cloneElement)(i,u):a(i)||r(i)?c=i:o?c=h.spinner():(e=>e in h)(n)&&(c=h[n](u))),c}(I),l(v.onOpen)&&(I.onOpen=v.onOpen),l(v.onClose)&&(I.onClose=v.onClose),I.closeButton=N.closeButton,!1===v.closeButton||u(v.closeButton)?I.closeButton=v.closeButton:!0===v.closeButton&&(I.closeButton=!u(N.closeButton)||N.closeButton);let L=e;(0,s.isValidElement)(e)&&!a(e.type)?L=(0,s.cloneElement)(e,{closeToast:C,toastProps:I,data:j}):l(e)&&(L=e({closeToast:C,toastProps:I,data:j})),N.limit&&N.limit>0&&g.count>N.limit&&_?g.queue.push({toastContent:L,toastProps:I,staleId:f}):r(o)?setTimeout((()=>{T(L,I,f)}),o):T(L,I,f)}function T(e,t,n){const{toastId:s}=t;n&&d.delete(n);const i={content:e,props:t};d.set(s,i),o((e=>[...e,s].filter((e=>e!==n)))),p.emit(4,m(i,null==i.props.updateId?"added":"updated"))}return(0,s.useEffect)((()=>(g.containerId=e.containerId,p.cancelEmit(3).on(0,E).on(1,(e=>i.current&&y(e))).on(5,v).emit(2,g),()=>{d.clear(),p.emit(3,g)})),[]),(0,s.useEffect)((()=>{g.props=e,g.isToastActive=f,g.displayedToast=n.length})),{getToastToRender:function(t){const n=new Map,s=Array.from(d.values());return e.newestOnTop&&s.reverse(),s.forEach((e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(e=>t(e[0],e[1])))},containerRef:i,isToastActive:f}}function v(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function y(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function x(e){const[t,n]=(0,s.useState)(!1),[o,i]=(0,s.useState)(!1),r=(0,s.useRef)(null),a=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=(0,s.useRef)(e),{autoClose:u,pauseOnHover:d,closeToast:m,onClick:p,closeOnClick:f}=e;function h(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),a.didMove=!1,document.addEventListener("mousemove",T),document.addEventListener("mouseup",b),document.addEventListener("touchmove",T),document.addEventListener("touchend",b);const n=r.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=n.getBoundingClientRect(),n.style.transition="",a.x=v(t.nativeEvent),a.y=y(t.nativeEvent),"x"===e.draggableDirection?(a.start=a.x,a.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function g(t){if(a.boundingRect){const{top:n,bottom:s,left:o,right:i}=a.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&a.x>=o&&a.x<=i&&a.y>=n&&a.y<=s?E():x()}}function x(){n(!0)}function E(){n(!1)}function T(n){const s=r.current;a.canDrag&&s&&(a.didMove=!0,t&&E(),a.x=v(n),a.y=y(n),a.delta="x"===e.draggableDirection?a.x-a.start:a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),s.style.transform=`translate${e.draggableDirection}(${a.delta}px)`,s.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function b(){document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",b);const t=r.current;if(a.canDrag&&a.didMove&&t){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return i(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,s.useEffect)((()=>{c.current=e})),(0,s.useEffect)((()=>(r.current&&r.current.addEventListener("d",x,{once:!0}),l(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),()=>{const e=c.current;l(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)})),[]),(0,s.useEffect)((()=>(e.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",x),window.addEventListener("blur",E)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",E))})),[e.pauseOnFocusLoss]);const j={onMouseDown:h,onTouchStart:h,onMouseUp:g,onTouchEnd:g};return u&&d&&(j.onMouseEnter=E,j.onMouseLeave=x),f&&(j.onClick=e=>{p&&p(e),a.canCloseOnClick&&m()}),{playToast:x,pauseToast:E,isRunning:t,preventExitTransition:o,toastRef:r,eventHandlers:j}}function E(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return s.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function T(e){let{delay:t,isRunning:n,closeToast:o,type:r="default",hide:a,className:c,style:u,controlledProgress:d,progress:m,rtl:p,isIn:f,theme:h}=e;const g=a||d&&0===m,v={...u,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};d&&(v.transform=`scaleX(${m})`);const y=i("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":p}),x=l(c)?c({rtl:p,type:r,defaultClassName:y}):i(y,c);return s.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:x,style:v,[d&&m>=1?"onTransitionEnd":"onAnimationEnd"]:d&&m<1?null:()=>{f&&o()}})}const b=e=>{const{isRunning:t,preventExitTransition:n,toastRef:o,eventHandlers:r}=x(e),{closeButton:a,children:c,autoClose:u,onClick:d,type:m,hideProgressBar:p,closeToast:f,transition:h,position:g,className:v,style:y,bodyClassName:b,bodyStyle:j,progressClassName:N,progressStyle:C,updateId:_,role:I,progress:w,rtl:k,toastId:L,deleteToast:O,isIn:R,isLoading:M,iconOut:S,closeOnClick:A,theme:D}=e,P=i("Toastify__toast",`Toastify__toast-theme--${D}`,`Toastify__toast--${m}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":A}),$=l(v)?v({rtl:k,position:g,type:m,defaultClassName:P}):i(P,v),B=!!w||!u,F={closeToast:f,type:m,theme:D};let z=null;return!1===a||(z=l(a)?a(F):(0,s.isValidElement)(a)?(0,s.cloneElement)(a,F):E(F)),s.createElement(h,{isIn:R,done:O,position:g,preventExitTransition:n,nodeRef:o},s.createElement("div",{id:L,onClick:d,className:$,...r,style:y,ref:o},s.createElement("div",{...R&&{role:I},className:l(b)?b({type:m}):i("Toastify__toast-body",b),style:j},null!=S&&s.createElement("div",{className:i("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},S),s.createElement("div",null,c)),z,s.createElement(T,{..._&&!B?{key:`pb-${_}`}:{},rtl:k,theme:D,delay:u,isRunning:t,isIn:R,closeToast:f,hide:p,type:m,style:C,className:N,controlledProgress:B,progress:w||0})))},j=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},N=d(j("bounce",!0)),C=(d(j("slide",!0)),d(j("zoom")),d(j("flip")),(0,s.forwardRef)(((e,t)=>{const{getToastToRender:n,containerRef:o,isToastActive:r}=g(e),{className:a,style:u,rtl:d,containerId:m}=e;function p(e){const t=i("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":d});return l(a)?a({position:e,rtl:d,defaultClassName:t}):i(t,c(a))}return(0,s.useEffect)((()=>{t&&(t.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:m},n(((e,t)=>{const n=t.length?{...u}:{...u,pointerEvents:"none"};return s.createElement("div",{className:p(e),style:n,key:`container-${e}`},t.map(((e,n)=>{let{content:o,props:i}=e;return s.createElement(b,{...i,isIn:r(i.toastId),style:{...i.style,"--nth":n+1,"--len":t.length},key:`toast-${i.key}`},o)})))})))})));C.displayName="ToastContainer",C.defaultProps={position:"top-right",transition:N,autoClose:5e3,closeButton:E,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let _,I=new Map,w=[],k=1;function L(){return""+k++}function O(e){return e&&(a(e.toastId)||r(e.toastId))?e.toastId:L()}function R(e,t){return I.size>0?p.emit(0,e,t):w.push({content:e,options:t}),t.toastId}function M(e,t){return{...t,type:t&&t.type||e,toastId:O(t)}}function S(e){return(t,n)=>R(t,M(e,n))}function A(e,t){return R(e,M("default",t))}A.loading=(e,t)=>R(e,M("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),A.promise=function(e,t,n){let s,{pending:o,error:i,success:r}=t;o&&(s=a(o)?A.loading(o,n):A.loading(o.render,{...n,...o}));const c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=(e,t,o)=>{if(null==t)return void A.dismiss(s);const i={type:e,...c,...n,data:o},r=a(t)?{render:t}:t;return s?A.update(s,{...i,...r}):A(r.render,{...i,...r}),o},d=l(e)?e():e;return d.then((e=>u("success",r,e))).catch((e=>u("error",i,e))),d},A.success=S("success"),A.info=S("info"),A.error=S("error"),A.warning=S("warning"),A.warn=A.warning,A.dark=(e,t)=>R(e,M("default",{theme:"dark",...t})),A.dismiss=e=>{I.size>0?p.emit(1,e):w=w.filter((t=>null!=e&&t.options.toastId!==e))},A.clearWaitingQueue=function(e){return void 0===e&&(e={}),p.emit(5,e)},A.isActive=e=>{let t=!1;return I.forEach((n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},A.update=function(e,t){void 0===t&&(t={}),setTimeout((()=>{const n=function(e,t){let{containerId:n}=t;const s=I.get(n||_);return s&&s.getToast(e)}(e,t);if(n){const{props:s,content:o}=n,i={...s,...t,toastId:t.toastId||e,updateId:L()};i.toastId!==e&&(i.staleId=e);const r=i.render||o;delete i.render,R(r,i)}}),0)},A.done=e=>{A.update(e,{progress:1})},A.onChange=e=>(p.on(4,e),()=>{p.off(4,e)}),A.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},A.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},p.on(2,(e=>{_=e.containerId||e,I.set(_,e),w.forEach((e=>{p.emit(0,e.content,e.options)})),w=[]})).on(3,(e=>{I.delete(e.containerId||e),0===I.size&&p.off(0).off(1).off(5)}))}},function(e){e.O(0,[714,424,100,231,774,888,179],(function(){return t=4674,e(e.s=t);var t}));var t=e.O();_N_E=t}]);