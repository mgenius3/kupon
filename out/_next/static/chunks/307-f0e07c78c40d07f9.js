(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[307],{993:function(){},5005:function(e,n,t){"use strict";var r=t(4184),a=t.n(r),o=t(7294),s=t(861),l=t(6792),i=t(5893);const c=o.forwardRef((({as:e,bsPrefix:n,variant:t,size:r,active:o,className:c,...u},d)=>{const f=(0,l.vE)(n,"btn"),[v,{tagName:m}]=(0,s.FT)({tagName:e,...u}),p=m;return(0,i.jsx)(p,{...v,...u,ref:d,className:a()(c,f,o&&"active",t&&`${f}-${t}`,r&&`${f}-${r}`,u.href&&u.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},n.Z=c},130:function(e,n,t){"use strict";t.d(n,{Z:function(){return $}});var r=t(8146),a=t(7294);var o=function(e,n){var t=(0,a.useRef)(!0);(0,a.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},s=t(2029),l=t(6454),i=t(6852),c=Math.pow(2,31)-1;function u(e,n,t){var r=t-Date.now();e.current=r<=c?setTimeout(n,r):setTimeout((function(){return u(e,n,t)}),c)}function d(){var e=(0,l.Z)(),n=(0,a.useRef)();return(0,i.Z)((function(){return clearTimeout(n.current)})),(0,a.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(t(),a<=c?n.current=setTimeout(r,a):u(n,r,Date.now()+a))},clear:t}}),[])}var f=t(80),v=t(4184),m=t.n(v),p=t(5446),h=(0,t(6611).Z)("carousel-caption"),b=t(6792),x=t(5893);const N=a.forwardRef((({as:e="div",bsPrefix:n,className:t,...r},a)=>{const o=m()(t,(0,b.vE)(n,"carousel-item"));return(0,x.jsx)(e,{ref:a,...r,className:o})}));N.displayName="CarouselItem";var y=N,g=t(3439),E=t(3825),w=t(4509),C=t(2785);const Z={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,x.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,x.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};const k=a.forwardRef(((e,n)=>{const{as:t="div",bsPrefix:l,slide:i,fade:c,controls:u,indicators:v,indicatorLabels:h,activeIndex:N,onSelect:y,onSlide:Z,onSlid:k,interval:$,keyboard:j,onKeyDown:R,pause:S,onMouseOver:T,onMouseOut:I,wrap:D,touch:M,onTouchStart:F,onTouchMove:P,onTouchEnd:O,prevIcon:A,prevLabel:L,nextIcon:H,nextLabel:_,variant:U,className:z,children:B,...K}=(0,p.Ch)(e,{activeIndex:"onSelect"}),W=(0,b.vE)(l,"carousel"),V=(0,b.SC)(),X=(0,a.useRef)(null),[q,G]=(0,a.useState)("next"),[J,Q]=(0,a.useState)(!1),[Y,ee]=(0,a.useState)(!1),[ne,te]=(0,a.useState)(N||0);(0,a.useEffect)((()=>{Y||N===ne||(X.current?G(X.current):G((N||0)>ne?"next":"prev"),i&&ee(!0),te(N||0))}),[N,Y,ne,i]),(0,a.useEffect)((()=>{X.current&&(X.current=null)}));let re,ae=0;(0,g.Ed)(B,((e,n)=>{++ae,n===N&&(re=e.props.interval)}));const oe=(0,s.Z)(re),se=(0,a.useCallback)((e=>{if(Y)return;let n=ne-1;if(n<0){if(!D)return;n=ae-1}X.current="prev",null==y||y(n,e)}),[Y,ne,y,D,ae]),le=(0,r.Z)((e=>{if(Y)return;let n=ne+1;if(n>=ae){if(!D)return;n=0}X.current="next",null==y||y(n,e)})),ie=(0,a.useRef)();(0,a.useImperativeHandle)(n,(()=>({element:ie.current,prev:se,next:le})));const ce=(0,r.Z)((()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ie.current)&&(V?se():le())})),ue="next"===q?"start":"end";o((()=>{i||(null==Z||Z(ne,ue),null==k||k(ne,ue))}),[ne]);const de=`${W}-item-${q}`,fe=`${W}-item-${ue}`,ve=(0,a.useCallback)((e=>{(0,w.Z)(e),null==Z||Z(ne,ue)}),[Z,ne,ue]),me=(0,a.useCallback)((()=>{ee(!1),null==k||k(ne,ue)}),[k,ne,ue]),pe=(0,a.useCallback)((e=>{if(j&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(V?le(e):se(e));case"ArrowRight":return e.preventDefault(),void(V?se(e):le(e))}null==R||R(e)}),[j,R,se,le,V]),he=(0,a.useCallback)((e=>{"hover"===S&&Q(!0),null==T||T(e)}),[S,T]),be=(0,a.useCallback)((e=>{Q(!1),null==I||I(e)}),[I]),xe=(0,a.useRef)(0),Ne=(0,a.useRef)(0),ye=d(),ge=(0,a.useCallback)((e=>{xe.current=e.touches[0].clientX,Ne.current=0,"hover"===S&&Q(!0),null==F||F(e)}),[S,F]),Ee=(0,a.useCallback)((e=>{e.touches&&e.touches.length>1?Ne.current=0:Ne.current=e.touches[0].clientX-xe.current,null==P||P(e)}),[P]),we=(0,a.useCallback)((e=>{if(M){const n=Ne.current;Math.abs(n)>40&&(n>0?se(e):le(e))}"hover"===S&&ye.set((()=>{Q(!1)}),$||void 0),null==O||O(e)}),[M,S,se,le,ye,$,O]),Ce=null!=$&&!J&&!Y,Ze=(0,a.useRef)();(0,a.useEffect)((()=>{var e,n;if(!Ce)return;const t=V?se:le;return Ze.current=window.setInterval(document.visibilityState?ce:t,null!=(e=null!=(n=oe.current)?n:$)?e:void 0),()=>{null!==Ze.current&&clearInterval(Ze.current)}}),[Ce,se,le,oe,$,ce,V]);const ke=(0,a.useMemo)((()=>v&&Array.from({length:ae},((e,n)=>e=>{null==y||y(n,e)}))),[v,ae,y]);return(0,x.jsxs)(t,{ref:ie,...K,onKeyDown:pe,onMouseOver:he,onMouseOut:be,onTouchStart:ge,onTouchMove:Ee,onTouchEnd:we,className:m()(z,W,i&&"slide",c&&`${W}-fade`,U&&`${W}-${U}`),children:[v&&(0,x.jsx)("div",{className:`${W}-indicators`,children:(0,g.UI)(B,((e,n)=>(0,x.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=h&&h.length?h[n]:`Slide ${n+1}`,className:n===ne?"active":void 0,onClick:ke?ke[n]:void 0,"aria-current":n===ne},n)))}),(0,x.jsx)("div",{className:`${W}-inner`,children:(0,g.UI)(B,((e,n)=>{const t=n===ne;return i?(0,x.jsx)(C.Z,{in:t,onEnter:t?ve:void 0,onEntered:t?me:void 0,addEndListener:E.Z,children:(n,r)=>a.cloneElement(e,{...r,className:m()(e.props.className,t&&"entered"!==n&&de,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&fe)})}):a.cloneElement(e,{className:m()(e.props.className,t&&"active")})}))}),u&&(0,x.jsxs)(x.Fragment,{children:[(D||0!==N)&&(0,x.jsxs)(f.Z,{className:`${W}-control-prev`,onClick:se,children:[A,L&&(0,x.jsx)("span",{className:"visually-hidden",children:L})]}),(D||N!==ae-1)&&(0,x.jsxs)(f.Z,{className:`${W}-control-next`,onClick:le,children:[H,_&&(0,x.jsx)("span",{className:"visually-hidden",children:_})]})]})]})}));k.displayName="Carousel",k.defaultProps=Z;var $=Object.assign(k,{Caption:h,Item:y})},3439:function(e,n,t){"use strict";t.d(n,{Ed:function(){return o},UI:function(){return a},XW:function(){return s}});var r=t(7294);function a(e,n){let t=0;return r.Children.map(e,(e=>r.isValidElement(e)?n(e,t++):e))}function o(e,n){let t=0;r.Children.forEach(e,(e=>{r.isValidElement(e)&&n(e,t++)}))}function s(e,n){return r.Children.toArray(e).some((e=>r.isValidElement(e)&&e.type===n))}},6212:function(e,n,t){"use strict";t.d(n,{Z:function(){return O}});var r,a=t(4184),o=t.n(a),s=t(9351),l=t(3004),i=t(7216),c=t(99);function u(e){if((!r&&0!==r||e)&&l.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),r=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return r}var d=t(2092),f=t(8146),v=t(5654),m=t(6852),p=t(4305),h=t(7294),b=t(8061),x=t(9673),N=t(1068),y=t(6611),g=(0,y.Z)("modal-body"),E=t(6467),w=t(6792),C=t(5893);const Z=h.forwardRef((({bsPrefix:e,className:n,contentClassName:t,centered:r,size:a,fullscreen:s,children:l,scrollable:i,...c},u)=>{const d=`${e=(0,w.vE)(e,"modal")}-dialog`,f="string"===typeof s?`${e}-fullscreen-${s}`:`${e}-fullscreen`;return(0,C.jsx)("div",{...c,ref:u,className:o()(d,n,a&&`${e}-${a}`,r&&`${d}-centered`,i&&`${d}-scrollable`,s&&f),children:(0,C.jsx)("div",{className:o()(`${e}-content`,t),children:l})})}));Z.displayName="ModalDialog";var k=Z,$=(0,y.Z)("modal-footer"),j=t(703);const R=h.forwardRef((({bsPrefix:e,className:n,...t},r)=>(e=(0,w.vE)(e,"modal-header"),(0,C.jsx)(j.Z,{ref:r,...t,className:o()(n,e)}))));R.displayName="ModalHeader",R.defaultProps={closeLabel:"Close",closeButton:!1};var S=R;const T=(0,t(9602).Z)("h4");var I=(0,y.Z)("modal-title",{Component:T});const D={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:k};function M(e){return(0,C.jsx)(N.Z,{...e,timeout:null})}function F(e){return(0,C.jsx)(N.Z,{...e,timeout:null})}const P=h.forwardRef((({bsPrefix:e,className:n,style:t,dialogClassName:r,contentClassName:a,children:N,dialogAs:y,"aria-labelledby":g,"aria-describedby":Z,"aria-label":k,show:$,animation:j,backdrop:R,keyboard:S,onEscapeKeyDown:T,onShow:I,onHide:D,container:P,autoFocus:O,enforceFocus:A,restoreFocus:L,restoreFocusOptions:H,onEntered:_,onExit:U,onExiting:z,onEnter:B,onEntering:K,onExited:W,backdropClassName:V,manager:X,...q},G)=>{const[J,Q]=(0,h.useState)({}),[Y,ee]=(0,h.useState)(!1),ne=(0,h.useRef)(!1),te=(0,h.useRef)(!1),re=(0,h.useRef)(null),[ae,oe]=(0,d.Z)(),se=(0,v.Z)(G,oe),le=(0,f.Z)(D),ie=(0,w.SC)();e=(0,w.vE)(e,"modal");const ce=(0,h.useMemo)((()=>({onHide:le})),[le]);function ue(){return X||(0,x.t)({isRTL:ie})}function de(e){if(!l.Z)return;const n=ue().getScrollbarWidth()>0,t=e.scrollHeight>(0,i.Z)(e).documentElement.clientHeight;Q({paddingRight:n&&!t?u():void 0,paddingLeft:!n&&t?u():void 0})}const fe=(0,f.Z)((()=>{ae&&de(ae.dialog)}));(0,m.Z)((()=>{(0,c.Z)(window,"resize",fe),null==re.current||re.current()}));const ve=()=>{ne.current=!0},me=e=>{ne.current&&ae&&e.target===ae.dialog&&(te.current=!0),ne.current=!1},pe=()=>{ee(!0),re.current=(0,p.Z)(ae.dialog,(()=>{ee(!1)}))},he=e=>{"static"!==R?te.current||e.target!==e.currentTarget?te.current=!1:null==D||D():(e=>{e.target===e.currentTarget&&pe()})(e)},be=(0,h.useCallback)((n=>(0,C.jsx)("div",{...n,className:o()(`${e}-backdrop`,V,!j&&"show")})),[j,V,e]),xe={...t,...J};xe.display="block";return(0,C.jsx)(E.Z.Provider,{value:ce,children:(0,C.jsx)(b.Z,{show:$,ref:se,backdrop:R,container:P,keyboard:!0,autoFocus:O,enforceFocus:A,restoreFocus:L,restoreFocusOptions:H,onEscapeKeyDown:e=>{S?null==T||T(e):(e.preventDefault(),"static"===R&&pe())},onShow:I,onHide:D,onEnter:(e,n)=>{e&&de(e),null==B||B(e,n)},onEntering:(e,n)=>{null==K||K(e,n),(0,s.ZP)(window,"resize",fe)},onEntered:_,onExit:e=>{null==re.current||re.current(),null==U||U(e)},onExiting:z,onExited:e=>{e&&(e.style.display=""),null==W||W(e),(0,c.Z)(window,"resize",fe)},manager:ue(),transition:j?M:void 0,backdropTransition:j?F:void 0,renderBackdrop:be,renderDialog:t=>(0,C.jsx)("div",{role:"dialog",...t,style:xe,className:o()(n,e,Y&&`${e}-static`,!j&&"show"),onClick:R?he:void 0,onMouseUp:me,"aria-label":k,"aria-labelledby":g,"aria-describedby":Z,children:(0,C.jsx)(y,{...q,onMouseDown:ve,className:r,contentClassName:a,children:N})})})})}));P.displayName="Modal",P.defaultProps=D;var O=Object.assign(P,{Body:g,Header:S,Title:I,Footer:$,Dialog:k,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})}}]);