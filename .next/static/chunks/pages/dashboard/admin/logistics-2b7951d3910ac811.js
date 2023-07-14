(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[475],{7181:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/admin/logistics",function(){return t(7355)}])},1164:function(e,n,t){"use strict";var r=t(5893),s=t(7294),i=t(7346),o=t(5005),l=t(2920);t(993);n.Z=function(e){var n=e.setConfirmation,t=e.action,c=e.title,a=e.packageId,u=(0,s.useState)(""),d=u[0],h=u[1],v=(0,s.useState)(!1),x=v[0],p=v[1];return(0,r.jsxs)(i.Z.Group,{className:"container p-5",children:[(0,r.jsx)(i.Z.Label,{children:(0,r.jsxs)("span",{style:{fontSize:"15px"},children:["Enter ",(0,r.jsx)("b",{style:{color:"green"},children:"confirm"})," ",c]})}),(0,r.jsx)("div",{className:"d-flex",children:(0,r.jsx)("input",{type:"text",value:d,onChange:function(e){h(e.target.value),p(!1)}})}),(0,r.jsx)("br",{}),(0,r.jsx)(o.Z,{onClick:function(){"confirm"===d?(p(!0),n(!1),t(a)):l.Am.error("wrong input")},children:"Confirm"}),x&&(0,r.jsx)("div",{className:"text-success",children:"Confirmed!"})]})}},6865:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(7568);function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=t(4051),l=t.n(o),c=function(){function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";s(this,e),this.baseURL=n,this.token=t}var n,t,o;return n=e,(t=[{key:"get",value:function(e){var n=this;return(0,r.Z)(l().mark((function t(){var r,s,i;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(n.baseURL+e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.token)}});case 3:if((r=t.sent).ok){t.next=9;break}return t.next=7,r.json();case 7:throw s=t.sent,new Error(s.msg);case 9:return t.next=11,r.json();case 11:return i=t.sent,t.abrupt("return",{response:i.msg,error:null});case 15:return t.prev=15,t.t0=t.catch(0),t.abrupt("return",{response:null,error:t.t0.message});case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()}},{key:"post",value:function(e,n){var t=this;return(0,r.Z)(l().mark((function r(){var s,i,o;return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch(t.baseURL+e,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t.token)},body:JSON.stringify(n)});case 3:if((s=r.sent).ok){r.next=9;break}return r.next=7,s.json();case 7:throw i=r.sent,new Error(i.msg);case 9:return r.next=11,s.json();case 11:return o=r.sent,r.abrupt("return",{response:o.msg,error:null});case 15:return r.prev=15,r.t0=r.catch(0),r.abrupt("return",{response:null,error:r.t0.message});case 18:case"end":return r.stop()}}),r,null,[[0,15]])})))()}},{key:"delete",value:function(e){var n=this;return(0,r.Z)(l().mark((function t(){var r,s,i;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(n.baseURL+e,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.token)}});case 3:if((r=t.sent).ok){t.next=9;break}return t.next=7,r.json();case 7:throw s=t.sent,new Error(s.msg);case 9:return t.next=11,r.json();case 11:return i=t.sent,t.abrupt("return",{response:i.msg,error:null});case 15:return t.prev=15,t.t0=t.catch(0),t.abrupt("return",{response:null,error:t.t0.message});case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()}}])&&i(n.prototype,t),o&&i(n,o),e}(),a=c},7355:function(e,n,t){"use strict";t.r(n);var r=t(7568),s=t(4051),i=t.n(s),o=t(5893),l=t(7294),c=t(7893),a=t(6857),u=t(6212),d=t(5005),h=t(1164),v=t(2920),x=(t(993),t(1163)),p=t(130),f=t(6865);n.default=function(){var e=(0,l.useState)((function(){return localStorage.getItem("token")}))[0],n=new f.Z("/admin",e),t=(0,x.useRouter)(),s=(0,l.useState)([]),j=s[0],m=s[1],b=(0,l.useState)(!1),g=b[0],k=b[1],y=(0,l.useState)(),w=y[0],C=y[1],N=(0,l.useState)(!1),Z=N[0],S=N[1],E=(0,l.useState)(!1),T=E[0],I=E[1],R=(0,l.useState)(!0),A=R[0],D=R[1],L=(0,l.useState)(!1),P=L[0],O=L[1];(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,r,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.get("/logistics");case 3:if(t=e.sent,r=t.response,s=t.error,!r){e.next=10;break}m(r),e.next=11;break;case 10:throw new Error(s);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var _=function(){return k(!1)},$=function(){var n=(0,r.Z)(i().mark((function n(){var r,s,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return O(!0),n.prev=1,n.next=4,fetch("/admin/logistics/update_status",{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify({id:null===w||void 0===w?void 0:w.id,status:"pending"==(null===w||void 0===w?void 0:w.status)?"in transit":"delivered"})});case 4:if((r=n.sent).ok){n.next=11;break}return O(!1),n.next=9,r.json();case 9:throw s=n.sent,new Error(null===s||void 0===s?void 0:s.msg);case 11:return n.next=13,r.json();case 13:o=n.sent,v.Am.success(null===o||void 0===o?void 0:o.msg),O(!1),t.reload(),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(1),console.log(n.t0);case 22:case"end":return n.stop()}}),n,null,[[1,19]])})));return function(){return n.apply(this,arguments)}}(),M=function(){var n=(0,r.Z)(i().mark((function n(){var r,s,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/admin/logistics/delete/".concat(null===w||void 0===w?void 0:w.id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:if((r=n.sent).ok){n.next=9;break}return n.next=7,r.json();case 7:throw s=n.sent,new Error(null===s||void 0===s?void 0:s.msg);case 9:return n.next=11,r.json();case 11:o=n.sent,v.Am.success(null===o||void 0===o?void 0:o.msg),t.reload(),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})));return function(){return n.apply(this,arguments)}}();return(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)("div",{className:"table-responsive",children:[(0,o.jsxs)("h1",{children:["LOGISTICS ORDER : ",(0,o.jsx)("b",{children:j.length})]}),(0,o.jsxs)("table",{className:"table table-striped",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"col",children:"Shipment ID"}),(0,o.jsx)("th",{scope:"col",children:"Address(Sender)"}),(0,o.jsx)("th",{scope:"col",children:"Address(receiver)"}),(0,o.jsx)("th",{scope:"col",children:"Status"}),(0,o.jsx)("th",{scope:"col",children:"Paid"})]})}),(0,o.jsx)("tbody",{children:null===j||void 0===j?void 0:j.map((function(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("tr",{onClick:function(){return function(e){k(!0),C(e)}(e)},style:{cursor:"pointer"},children:[(0,o.jsx)("td",{children:null===e||void 0===e?void 0:e.id}),(0,o.jsx)("td",{children:(0,c.S)(null===e||void 0===e?void 0:e.pickupAddress,20)}),(0,o.jsx)("td",{children:(0,c.S)(null===e||void 0===e?void 0:e.deliveryAddress,20)}),(0,o.jsx)("td",{style:{color:"pending"==(null===e||void 0===e?void 0:e.status)?"red":"in transit"==(null===e||void 0===e?void 0:e.status)?"#f1c40f":"green"},children:null===e||void 0===e?void 0:e.status}),(0,o.jsx)("td",{children:(0,o.jsxs)("b",{style:{color:"".concat((null===e||void 0===e?void 0:e.paid)?"green":"red")},children:[" ",(null===e||void 0===e?void 0:e.paid)?"true":"false"," "]})})]},null===e||void 0===e?void 0:e.id)})}))})]})]}),(0,o.jsxs)("div",{style:{overflow:"auto"},children:[(0,o.jsxs)(u.Z,{show:g,onHide:_,children:[(0,o.jsxs)(u.Z.Header,{closeButton:!0,children:[(0,o.jsx)(u.Z.Title,{children:"Logistics Details"}),(0,o.jsx)("br",{}),P?(0,o.jsx)("button",{style:{backgroundColor:"pending"==(null===w||void 0===w?void 0:w.status)?"red":"in transit"==(null===w||void 0===w?void 0:w.status)?"#f1c40f":"green",color:"white",padding:"2px 10px",borderRadius:"5px",cursor:"pointer"},disabled:"delivered"==(null===w||void 0===w?void 0:w.status),children:"..."}):(0,o.jsx)("button",{style:{backgroundColor:"pending"==(null===w||void 0===w?void 0:w.status)?"red":"in transit"==(null===w||void 0===w?void 0:w.status)?"#f1c40f":"green",color:"white",padding:"2px 3px",borderRadius:"5px",cursor:"pointer"},onClick:function(){return S(!0)},disabled:"delivered"==(null===w||void 0===w?void 0:w.status),children:null===w||void 0===w?void 0:w.status})]}),(0,o.jsxs)(u.Z.Body,{children:[(0,o.jsx)(p.Z,{className:"w-screen",children:"string"==typeof(null===w||void 0===w?void 0:w.files)?JSON.parse(null===w||void 0===w?void 0:w.files).map((function(e,n){return(0,o.jsx)(p.Z.Item,{children:(0,o.jsx)("img",{className:"d-block w-100",src:e,alt:"Product ".concat(w.title),style:{height:"auto"}})},n)})):null})," ",(0,o.jsx)("br",{}),(0,o.jsxs)("table",{className:"table",children:[(0,o.jsx)("thead",{children:"Sender Details"}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Shipment ID"}),(0,o.jsx)("td",{children:null===w||void 0===w?void 0:w.id})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsxs)("td",{children:[null===w||void 0===w?void 0:w.firstName," ",null===w||void 0===w?void 0:w.lastName]})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Email"}),(0,o.jsx)("td",{children:null===w||void 0===w?void 0:w.email})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Telephone"}),(0,o.jsx)("td",{children:null===w||void 0===w?void 0:w.telephone})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Pick up address"}),(0,o.jsx)("td",{children:null===w||void 0===w?void 0:w.pickupAddress})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Pick up city"}),(0,o.jsx)("td",{children:null===w||void 0===w?void 0:w.pickupCity})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Pick up state"}),(0,o.jsx)("td",{children:null===w||void 0===w?void 0:w.pickupState})]})]}),(0,o.jsx)("hr",{}),(0,o.jsx)("thead",{children:"Receiver Details"}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsxs)("td",{children:[null===w||void 0===w?void 0:w.firstName," ",null===w||void 0===w?void 0:w.lastName]})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Email"}),(0,o.jsx)("td",{children:null===w||void 0===w?void 0:w.email})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Delivery address"}),(0,o.jsx)("td",{children:null===w||void 0===w?void 0:w.deliveryAddress})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Delivery city"}),(0,o.jsx)("td",{children:null===w||void 0===w?void 0:w.deliveryCity})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Delivery state"}),(0,o.jsx)("td",{children:null===w||void 0===w?void 0:w.deliveryState})]})]}),(0,o.jsxs)("tfoot",{children:[(0,o.jsx)("th",{children:"Package Code"}),(0,o.jsx)("td",{children:null===w||void 0===w?void 0:w.packageCode})]})]})]}),(0,o.jsx)(u.Z.Footer,{className:"justify-content-start",children:(0,o.jsx)(d.Z,{variant:"danger",onClick:function(){_(),D(!0),I(!0)},style:{background:"red",color:"white"},children:"Delete"})}),(0,o.jsx)(u.Z.Footer,{children:(0,o.jsx)(d.Z,{variant:"error",onClick:_,children:"Close"})})]}),Z?(0,o.jsxs)(u.Z,{show:!0,children:[(0,o.jsx)(h.Z,{setConfirmation:S,action:$,title:"to update logistics status '".concat("pending"==(null===w||void 0===w?void 0:w.status)?"in transit":"delivered","'")}),(0,o.jsx)(u.Z.Footer,{children:(0,o.jsx)(d.Z,{variant:"error",onClick:function(){return S(!1)},children:"Close"})})]}):null,T?(0,o.jsxs)(u.Z,{show:A,children:[(0,o.jsx)(h.Z,{setConfirmation:I,action:M,title:"to delete logistics package of id :.'".concat(null===w||void 0===w?void 0:w.id,"'")}),(0,o.jsx)(u.Z.Footer,{children:(0,o.jsx)(d.Z,{variant:"error",onClick:function(){return D(!1)},children:"Close"})})]}):null]})]})}},130:function(e,n,t){"use strict";t.d(n,{Z:function(){return S}});var r=t(8146),s=t(7294);var i=function(e,n){var t=(0,s.useRef)(!0);(0,s.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},o=t(2029),l=t(6454),c=t(6852),a=Math.pow(2,31)-1;function u(e,n,t){var r=t-Date.now();e.current=r<=a?setTimeout(n,r):setTimeout((function(){return u(e,n,t)}),a)}function d(){var e=(0,l.Z)(),n=(0,s.useRef)();return(0,c.Z)((function(){return clearTimeout(n.current)})),(0,s.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,s){void 0===s&&(s=0),e()&&(t(),s<=a?n.current=setTimeout(r,s):u(n,r,Date.now()+s))},clear:t}}),[])}var h=t(80),v=t(4184),x=t.n(v),p=t(5446),f=(0,t(6611).Z)("carousel-caption"),j=t(6792),m=t(5893);const b=s.forwardRef((({as:e="div",bsPrefix:n,className:t,...r},s)=>{const i=x()(t,(0,j.vE)(n,"carousel-item"));return(0,m.jsx)(e,{ref:s,...r,className:i})}));b.displayName="CarouselItem";var g=b,k=t(3439),y=t(3825),w=t(4509),C=t(2785);const N={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,m.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,m.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};const Z=s.forwardRef(((e,n)=>{const{as:t="div",bsPrefix:l,slide:c,fade:a,controls:u,indicators:v,indicatorLabels:f,activeIndex:b,onSelect:g,onSlide:N,onSlid:Z,interval:S,keyboard:E,onKeyDown:T,pause:I,onMouseOver:R,onMouseOut:A,wrap:D,touch:L,onTouchStart:P,onTouchMove:O,onTouchEnd:_,prevIcon:$,prevLabel:M,nextIcon:B,nextLabel:z,variant:F,className:U,children:H,...X}=(0,p.Ch)(e,{activeIndex:"onSelect"}),G=(0,j.vE)(l,"carousel"),J=(0,j.SC)(),K=(0,s.useRef)(null),[q,Q]=(0,s.useState)("next"),[V,W]=(0,s.useState)(!1),[Y,ee]=(0,s.useState)(!1),[ne,te]=(0,s.useState)(b||0);(0,s.useEffect)((()=>{Y||b===ne||(K.current?Q(K.current):Q((b||0)>ne?"next":"prev"),c&&ee(!0),te(b||0))}),[b,Y,ne,c]),(0,s.useEffect)((()=>{K.current&&(K.current=null)}));let re,se=0;(0,k.Ed)(H,((e,n)=>{++se,n===b&&(re=e.props.interval)}));const ie=(0,o.Z)(re),oe=(0,s.useCallback)((e=>{if(Y)return;let n=ne-1;if(n<0){if(!D)return;n=se-1}K.current="prev",null==g||g(n,e)}),[Y,ne,g,D,se]),le=(0,r.Z)((e=>{if(Y)return;let n=ne+1;if(n>=se){if(!D)return;n=0}K.current="next",null==g||g(n,e)})),ce=(0,s.useRef)();(0,s.useImperativeHandle)(n,(()=>({element:ce.current,prev:oe,next:le})));const ae=(0,r.Z)((()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ce.current)&&(J?oe():le())})),ue="next"===q?"start":"end";i((()=>{c||(null==N||N(ne,ue),null==Z||Z(ne,ue))}),[ne]);const de=`${G}-item-${q}`,he=`${G}-item-${ue}`,ve=(0,s.useCallback)((e=>{(0,w.Z)(e),null==N||N(ne,ue)}),[N,ne,ue]),xe=(0,s.useCallback)((()=>{ee(!1),null==Z||Z(ne,ue)}),[Z,ne,ue]),pe=(0,s.useCallback)((e=>{if(E&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(J?le(e):oe(e));case"ArrowRight":return e.preventDefault(),void(J?oe(e):le(e))}null==T||T(e)}),[E,T,oe,le,J]),fe=(0,s.useCallback)((e=>{"hover"===I&&W(!0),null==R||R(e)}),[I,R]),je=(0,s.useCallback)((e=>{W(!1),null==A||A(e)}),[A]),me=(0,s.useRef)(0),be=(0,s.useRef)(0),ge=d(),ke=(0,s.useCallback)((e=>{me.current=e.touches[0].clientX,be.current=0,"hover"===I&&W(!0),null==P||P(e)}),[I,P]),ye=(0,s.useCallback)((e=>{e.touches&&e.touches.length>1?be.current=0:be.current=e.touches[0].clientX-me.current,null==O||O(e)}),[O]),we=(0,s.useCallback)((e=>{if(L){const n=be.current;Math.abs(n)>40&&(n>0?oe(e):le(e))}"hover"===I&&ge.set((()=>{W(!1)}),S||void 0),null==_||_(e)}),[L,I,oe,le,ge,S,_]),Ce=null!=S&&!V&&!Y,Ne=(0,s.useRef)();(0,s.useEffect)((()=>{var e,n;if(!Ce)return;const t=J?oe:le;return Ne.current=window.setInterval(document.visibilityState?ae:t,null!=(e=null!=(n=ie.current)?n:S)?e:void 0),()=>{null!==Ne.current&&clearInterval(Ne.current)}}),[Ce,oe,le,ie,S,ae,J]);const Ze=(0,s.useMemo)((()=>v&&Array.from({length:se},((e,n)=>e=>{null==g||g(n,e)}))),[v,se,g]);return(0,m.jsxs)(t,{ref:ce,...X,onKeyDown:pe,onMouseOver:fe,onMouseOut:je,onTouchStart:ke,onTouchMove:ye,onTouchEnd:we,className:x()(U,G,c&&"slide",a&&`${G}-fade`,F&&`${G}-${F}`),children:[v&&(0,m.jsx)("div",{className:`${G}-indicators`,children:(0,k.UI)(H,((e,n)=>(0,m.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=f&&f.length?f[n]:`Slide ${n+1}`,className:n===ne?"active":void 0,onClick:Ze?Ze[n]:void 0,"aria-current":n===ne},n)))}),(0,m.jsx)("div",{className:`${G}-inner`,children:(0,k.UI)(H,((e,n)=>{const t=n===ne;return c?(0,m.jsx)(C.Z,{in:t,onEnter:t?ve:void 0,onEntered:t?xe:void 0,addEndListener:y.Z,children:(n,r)=>s.cloneElement(e,{...r,className:x()(e.props.className,t&&"entered"!==n&&de,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&he)})}):s.cloneElement(e,{className:x()(e.props.className,t&&"active")})}))}),u&&(0,m.jsxs)(m.Fragment,{children:[(D||0!==b)&&(0,m.jsxs)(h.Z,{className:`${G}-control-prev`,onClick:oe,children:[$,M&&(0,m.jsx)("span",{className:"visually-hidden",children:M})]}),(D||b!==se-1)&&(0,m.jsxs)(h.Z,{className:`${G}-control-next`,onClick:le,children:[B,z&&(0,m.jsx)("span",{className:"visually-hidden",children:z})]})]})]})}));Z.displayName="Carousel",Z.defaultProps=N;var S=Object.assign(Z,{Caption:f,Item:g})}},function(e){e.O(0,[714,424,531,715,100,231,178,857,774,888,179],(function(){return n=7181,e(e.s=n);var n}));var n=e.O();_N_E=n}]);