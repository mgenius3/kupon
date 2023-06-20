(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[338],{7205:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/admin/market",function(){return t(5615)}])},1164:function(e,n,t){"use strict";var r=t(5893),s=t(7294),i=t(7346),l=t(5005),o=t(2920);t(993);n.Z=function(e){var n=e.setConfirmation,t=e.action,c=e.title,a=e.packageId,d=(0,s.useState)(""),u=d[0],h=d[1],v=(0,s.useState)(!1),x=v[0],f=v[1];return(0,r.jsxs)(i.Z.Group,{className:"container p-5",children:[(0,r.jsx)(i.Z.Label,{children:(0,r.jsxs)("span",{style:{fontSize:"15px"},children:["Enter ",(0,r.jsx)("b",{style:{color:"green"},children:"confirm"})," ",c]})}),(0,r.jsx)("div",{className:"d-flex",children:(0,r.jsx)("input",{type:"text",value:u,onChange:function(e){h(e.target.value),f(!1)}})}),(0,r.jsx)("br",{}),(0,r.jsx)(l.Z,{onClick:function(){"confirm"===u?(f(!0),n(!1),t(a)):o.Am.error("wrong input")},children:"Confirm"}),x&&(0,r.jsx)("div",{className:"text-success",children:"Confirmed!"})]})}},5615:function(e,n,t){"use strict";t.r(n);var r=t(7568),s=t(4051),i=t.n(s),l=t(5893),o=t(7294),c=t(6857),a=t(6212),d=t(5005),u=(t(993),t(1163)),h=t(1164),v=t(2920),x=t(130);n.default=function(){var e=(0,u.useRouter)(),n=(0,o.useState)((function(){return localStorage.getItem("token")}))[0],t=(0,o.useState)([]),s=t[0],f=t[1],j=(0,o.useState)(!1),p=j[0],m=j[1],b=(0,o.useState)(),g=b[0],y=b[1],C=(0,o.useState)(!1),k=C[0],N=C[1],w=(0,o.useState)(!0),Z=w[0],E=w[1];(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,r,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(s),e.next=4,fetch("/admin/market",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 4:if((t=e.sent).ok){e.next=10;break}return e.next=8,t.json();case 8:throw r=e.sent,new Error(r.msg);case 10:return e.next=12,t.json();case 12:l=e.sent,f(l.msg),console.log(l.msg),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var S=function(){return m(!1)},T=function(){var t=(0,r.Z)(i().mark((function t(){var r,s,l;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/admin/market/delete/".concat(null===g||void 0===g?void 0:g.id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:if((r=t.sent).ok){t.next=9;break}return t.next=7,r.json();case 7:throw s=t.sent,new Error(null===s||void 0===s?void 0:s.msg);case 9:return t.next=11,r.json();case 11:l=t.sent,v.Am.success(null===l||void 0===l?void 0:l.msg),e.reload(),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(){return t.apply(this,arguments)}}();return(0,l.jsxs)(c.Z,{children:[(0,l.jsxs)("div",{className:"table-responsive",children:[(0,l.jsxs)("h1",{children:["MARKET TABLE : ",(0,l.jsx)("b",{children:s.length})]}),(0,l.jsxs)("table",{className:"table table-striped",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"col",children:"PRODUCT ID"}),(0,l.jsx)("th",{scope:"col",children:"TITLE"}),(0,l.jsx)("th",{scope:"col",children:"CONDITIONS"}),(0,l.jsx)("th",{scope:"col",children:"Price"}),(0,l.jsx)("th",{scope:"col",children:"Paid"})]})}),(0,l.jsx)("tbody",{children:null===s||void 0===s?void 0:s.map((function(e){return(0,l.jsxs)("tr",{onClick:function(){return function(e){m(!0),y(e)}(e)},style:{cursor:"pointer"},children:[(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.id}),(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.title}),(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.conditions}),(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.price}),(0,l.jsx)("td",{children:(0,l.jsxs)("b",{style:{color:"".concat((null===e||void 0===e?void 0:e.paid)?"green":"red")},children:[" ",(null===e||void 0===e?void 0:e.paid)?"true":"false"," "]})}),(0,l.jsx)("td",{style:{color:"pending"==(null===e||void 0===e?void 0:e.status)?"red":"in transit"==(null===e||void 0===e?void 0:e.status)?"#f1c40f":"green"},children:null===e||void 0===e?void 0:e.status})]},null===e||void 0===e?void 0:e.id)}))})]})]}),(0,l.jsxs)("div",{style:{overflow:"auto"},children:[(0,l.jsxs)(a.Z,{show:p,onHide:S,children:[(0,l.jsxs)(a.Z.Header,{closeButton:!0,children:[(0,l.jsx)(a.Z.Title,{style:{fontSize:"1.3rem",fontWeight:"bold",lineHeight:"1.5",color:"#3c171773"},children:"Market Details"}),(0,l.jsx)("br",{}),(0,l.jsx)("button",{style:{backgroundColor:(null===g||void 0===g?void 0:g.paid)?"green":"red",color:"white",padding:"2px 3px",borderRadius:"5px",cursor:"pointer"},disabled:"delivered"==(null===g||void 0===g?void 0:g.status),children:(null===g||void 0===g?void 0:g.paid)?"paid":"not paid"})]}),(0,l.jsxs)(a.Z.Body,{children:[(0,l.jsx)(x.Z,{className:"w-screen",children:"string"==typeof(null===g||void 0===g?void 0:g.files)?JSON.parse(null===g||void 0===g?void 0:g.files).map((function(e,n){return(0,l.jsx)(x.Z.Item,{children:(0,l.jsx)("img",{className:"d-block w-100",src:"data:image/png;base64,".concat(e),alt:"Product ".concat(g.title),style:{height:"auto"}})},n)})):null})," ",(0,l.jsx)("br",{}),(0,l.jsxs)("table",{className:"table",children:[(0,l.jsx)("thead",{style:{fontSize:"1.3rem",fontWeight:"bold",lineHeight:"1.5"},children:"Product\xa0Details"})," ",(0,l.jsx)("br",{}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"SELLER ID"}),(0,l.jsx)("td",{children:null===g||void 0===g?void 0:g.sellerId})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"PRODUCT ID"}),(0,l.jsx)("td",{children:null===g||void 0===g?void 0:g.id})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Category"}),(0,l.jsx)("td",{children:null===g||void 0===g?void 0:g.category})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Conditions"}),(0,l.jsx)("td",{children:null===g||void 0===g?void 0:g.conditions})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Location"}),(0,l.jsx)("td",{children:null===g||void 0===g?void 0:g.location})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"City"}),(0,l.jsx)("td",{children:null===g||void 0===g?void 0:g.city})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"State"}),(0,l.jsx)("td",{children:null===g||void 0===g?void 0:g.state})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Material"}),(0,l.jsx)("td",{children:null===g||void 0===g?void 0:g.material})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Price"}),(0,l.jsx)("td",{children:null===g||void 0===g?void 0:g.price})]})]}),(0,l.jsx)("hr",{}),(0,l.jsxs)("tfoot",{children:[(0,l.jsx)("th",{children:"Date Created"}),(0,l.jsx)("td",{children:new Date(null===g||void 0===g?void 0:g.created_at).toLocaleString()})]}),(0,l.jsxs)("tfoot",{children:[(0,l.jsx)("th",{children:"Description"}),(0,l.jsx)("td",{children:null===g||void 0===g?void 0:g.description})]})]})]}),(0,l.jsx)(a.Z.Footer,{className:"justify-content-start",children:(0,l.jsx)(d.Z,{variant:"danger",onClick:function(){S(),E(!0),N(!0)},style:{background:"red",color:"white"},children:"Delete"})}),(0,l.jsx)(a.Z.Footer,{children:(0,l.jsx)(d.Z,{variant:"secondary",onClick:S,children:"Close"})})]}),k?(0,l.jsxs)(a.Z,{show:Z,children:[(0,l.jsx)(h.Z,{setConfirmation:N,action:T,title:"to delete package of id :.'".concat(null===g||void 0===g?void 0:g.id,"'")}),(0,l.jsx)(a.Z.Footer,{children:(0,l.jsx)(d.Z,{variant:"error",onClick:function(){return E(!1)},children:"Close"})})]}):null]})]})}},130:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(8146),s=t(7294);var i=function(e,n){var t=(0,s.useRef)(!0);(0,s.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},l=t(2029),o=t(6454),c=t(6852),a=Math.pow(2,31)-1;function d(e,n,t){var r=t-Date.now();e.current=r<=a?setTimeout(n,r):setTimeout((function(){return d(e,n,t)}),a)}function u(){var e=(0,o.Z)(),n=(0,s.useRef)();return(0,c.Z)((function(){return clearTimeout(n.current)})),(0,s.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,s){void 0===s&&(s=0),e()&&(t(),s<=a?n.current=setTimeout(r,s):d(n,r,Date.now()+s))},clear:t}}),[])}var h=t(80),v=t(4184),x=t.n(v),f=t(5446),j=(0,t(6611).Z)("carousel-caption"),p=t(6792),m=t(5893);const b=s.forwardRef((({as:e="div",bsPrefix:n,className:t,...r},s)=>{const i=x()(t,(0,p.vE)(n,"carousel-item"));return(0,m.jsx)(e,{ref:s,...r,className:i})}));b.displayName="CarouselItem";var g=b,y=t(3439),C=t(3825),k=t(4509),N=t(2785);const w={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,m.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,m.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};const Z=s.forwardRef(((e,n)=>{const{as:t="div",bsPrefix:o,slide:c,fade:a,controls:d,indicators:v,indicatorLabels:j,activeIndex:b,onSelect:g,onSlide:w,onSlid:Z,interval:E,keyboard:S,onKeyDown:T,pause:I,onMouseOver:D,onMouseOut:L,wrap:R,touch:M,onTouchStart:P,onTouchMove:_,onTouchEnd:O,prevIcon:$,prevLabel:A,nextIcon:z,nextLabel:B,variant:H,className:F,children:U,...X}=(0,f.Ch)(e,{activeIndex:"onSelect"}),K=(0,p.vE)(o,"carousel"),G=(0,p.SC)(),W=(0,s.useRef)(null),[J,q]=(0,s.useState)("next"),[Q,V]=(0,s.useState)(!1),[Y,ee]=(0,s.useState)(!1),[ne,te]=(0,s.useState)(b||0);(0,s.useEffect)((()=>{Y||b===ne||(W.current?q(W.current):q((b||0)>ne?"next":"prev"),c&&ee(!0),te(b||0))}),[b,Y,ne,c]),(0,s.useEffect)((()=>{W.current&&(W.current=null)}));let re,se=0;(0,y.Ed)(U,((e,n)=>{++se,n===b&&(re=e.props.interval)}));const ie=(0,l.Z)(re),le=(0,s.useCallback)((e=>{if(Y)return;let n=ne-1;if(n<0){if(!R)return;n=se-1}W.current="prev",null==g||g(n,e)}),[Y,ne,g,R,se]),oe=(0,r.Z)((e=>{if(Y)return;let n=ne+1;if(n>=se){if(!R)return;n=0}W.current="next",null==g||g(n,e)})),ce=(0,s.useRef)();(0,s.useImperativeHandle)(n,(()=>({element:ce.current,prev:le,next:oe})));const ae=(0,r.Z)((()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ce.current)&&(G?le():oe())})),de="next"===J?"start":"end";i((()=>{c||(null==w||w(ne,de),null==Z||Z(ne,de))}),[ne]);const ue=`${K}-item-${J}`,he=`${K}-item-${de}`,ve=(0,s.useCallback)((e=>{(0,k.Z)(e),null==w||w(ne,de)}),[w,ne,de]),xe=(0,s.useCallback)((()=>{ee(!1),null==Z||Z(ne,de)}),[Z,ne,de]),fe=(0,s.useCallback)((e=>{if(S&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(G?oe(e):le(e));case"ArrowRight":return e.preventDefault(),void(G?le(e):oe(e))}null==T||T(e)}),[S,T,le,oe,G]),je=(0,s.useCallback)((e=>{"hover"===I&&V(!0),null==D||D(e)}),[I,D]),pe=(0,s.useCallback)((e=>{V(!1),null==L||L(e)}),[L]),me=(0,s.useRef)(0),be=(0,s.useRef)(0),ge=u(),ye=(0,s.useCallback)((e=>{me.current=e.touches[0].clientX,be.current=0,"hover"===I&&V(!0),null==P||P(e)}),[I,P]),Ce=(0,s.useCallback)((e=>{e.touches&&e.touches.length>1?be.current=0:be.current=e.touches[0].clientX-me.current,null==_||_(e)}),[_]),ke=(0,s.useCallback)((e=>{if(M){const n=be.current;Math.abs(n)>40&&(n>0?le(e):oe(e))}"hover"===I&&ge.set((()=>{V(!1)}),E||void 0),null==O||O(e)}),[M,I,le,oe,ge,E,O]),Ne=null!=E&&!Q&&!Y,we=(0,s.useRef)();(0,s.useEffect)((()=>{var e,n;if(!Ne)return;const t=G?le:oe;return we.current=window.setInterval(document.visibilityState?ae:t,null!=(e=null!=(n=ie.current)?n:E)?e:void 0),()=>{null!==we.current&&clearInterval(we.current)}}),[Ne,le,oe,ie,E,ae,G]);const Ze=(0,s.useMemo)((()=>v&&Array.from({length:se},((e,n)=>e=>{null==g||g(n,e)}))),[v,se,g]);return(0,m.jsxs)(t,{ref:ce,...X,onKeyDown:fe,onMouseOver:je,onMouseOut:pe,onTouchStart:ye,onTouchMove:Ce,onTouchEnd:ke,className:x()(F,K,c&&"slide",a&&`${K}-fade`,H&&`${K}-${H}`),children:[v&&(0,m.jsx)("div",{className:`${K}-indicators`,children:(0,y.UI)(U,((e,n)=>(0,m.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=j&&j.length?j[n]:`Slide ${n+1}`,className:n===ne?"active":void 0,onClick:Ze?Ze[n]:void 0,"aria-current":n===ne},n)))}),(0,m.jsx)("div",{className:`${K}-inner`,children:(0,y.UI)(U,((e,n)=>{const t=n===ne;return c?(0,m.jsx)(N.Z,{in:t,onEnter:t?ve:void 0,onEntered:t?xe:void 0,addEndListener:C.Z,children:(n,r)=>s.cloneElement(e,{...r,className:x()(e.props.className,t&&"entered"!==n&&ue,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&he)})}):s.cloneElement(e,{className:x()(e.props.className,t&&"active")})}))}),d&&(0,m.jsxs)(m.Fragment,{children:[(R||0!==b)&&(0,m.jsxs)(h.Z,{className:`${K}-control-prev`,onClick:le,children:[$,A&&(0,m.jsx)("span",{className:"visually-hidden",children:A})]}),(R||b!==se-1)&&(0,m.jsxs)(h.Z,{className:`${K}-control-next`,onClick:oe,children:[z,B&&(0,m.jsx)("span",{className:"visually-hidden",children:B})]})]})]})}));Z.displayName="Carousel",Z.defaultProps=w;var E=Object.assign(Z,{Caption:j,Item:g})}},function(e){e.O(0,[714,424,531,715,100,231,178,857,774,888,179],(function(){return n=7205,e(e.s=n);var n}));var n=e.O();_N_E=n}]);