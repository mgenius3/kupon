(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(4984)}])},4984:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return f}});var n=r(7568),t=r(4924),a=r(6042),c=r(9396),o=r(4051),l=r.n(o),i=r(5893),m=r(7294),d=r(1664),u=r.n(d),h=r(7536),x=r(1163),p=r(2920),j=(r(993),r(1971));function f(){var e=(0,m.useState)({}),s=e[0],r=e[1],o=(0,m.useState)(!1),d=o[0],f=o[1],g=(0,x.useRouter)(),v=(0,h.cI)().handleSubmit,N=function(e){r((0,c.Z)((0,a.Z)({},s),(0,t.Z)({},e.target.name,e.target.value)))},w=function(){var e=(0,n.Z)(l().mark((function e(){var r,n,t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,fetch("/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 4:if((r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:throw n=e.sent,f(!1),new Error(n.msg);case 11:return e.next=13,r.json();case 13:t=e.sent,localStorage.setItem("token",t),f(!1),g.back(),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(1),f(!1),p.Am.error(e.t0.message);case 23:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)(j.Z,{title:"Login",children:(0,i.jsxs)("div",{id:"page-content",children:[(0,i.jsx)("img",{src:"/images/kupon logo with text (1).png",width:100,className:"mx-4 my-2"}),(0,i.jsx)("div",{className:"page section-header text-center",children:(0,i.jsx)("div",{className:"page-title",children:(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)("h1",{className:"mx-2",children:"Login"})})})}),(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3",children:(0,i.jsx)("div",{className:"mb-4",children:(0,i.jsxs)("form",{method:"post",action:"#",id:"CustomerLoginForm",acceptCharset:"UTF-8",className:"contact-form",onSubmit:v(w),children:[(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"CustomerEmail",children:"Email"}),(0,i.jsx)("input",{type:"email",name:"email",id:"CustomerEmail",autoCorrect:"off",autoCapitalize:"off",required:!0,onChange:N})]})}),(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"CustomerPassword",children:"Password"}),(0,i.jsx)("input",{type:"password",name:"password",placeholder:"",id:"CustomerPassword",required:!0,onChange:N})]})})]}),(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"text-center col-12 col-sm-12 col-md-12 col-lg-12",children:[d?(0,i.jsx)("input",{value:"loading...",className:"btn mb-3"}):(0,i.jsx)("input",{type:"submit",className:"btn mb-3",value:"Sign In"}),(0,i.jsxs)("p",{className:"mb-4",style:{color:"black",cursor:"pointer"},children:["New User ?"," ",(0,i.jsx)(u(),{href:"/register",id:"customer_register_link",children:(0,i.jsx)("b",{style:{color:"#6e0000"},children:"Create Account "})})]})]})})]})})})})})]})})}}},function(e){e.O(0,[424,531,715,374,100,207,971,774,888,179],(function(){return s=6429,e(e.s=s);var s}));var s=e.O();_N_E=s}]);