(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{5511:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return a(72)}])},72:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return x}});var r=a(7568),l=a(4924),n=a(6042),t=a(9396),c=a(4051),o=a.n(c),i=a(5893),d=a(7294),m=a(7536),u=a(1971),h=a(2920),p=(a(993),a(1163));function x(){var e=(0,d.useState)({}),s=e[0],a=e[1],c=(0,d.useState)(!1),x=c[0],g=c[1],j=(0,p.useRouter)(),N=(0,m.cI)(),f=N.handleSubmit,v=N.register,w=N.formState.errors,b=function(e){a((0,t.Z)((0,n.Z)({},s),(0,l.Z)({},e.target.name,e.target.value)))},y=function(){var e=(0,r.Z)(o().mark((function e(){var a,r,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===s.password||""===s.cpassword){e.next=31;break}if(s.password!=s.cpassword){e.next=28;break}return g(!0),e.prev=3,e.next=6,fetch("/user/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 6:if((a=e.sent).ok){e.next=13;break}return e.next=10,a.json();case 10:throw r=e.sent,g(!1),new Error(r.msg);case 13:return e.next=15,a.json();case 15:l=e.sent,h.Am.success("successful"),localStorage.setItem("token",l),g(!1),j.push("/"),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(3),g(!1),h.Am.error(e.t0.message);case 26:e.next=29;break;case 28:h.Am.error("password and confirm password are not equal");case 29:e.next=32;break;case 31:h.Am.error("please fill in the details correctly");case 32:case"end":return e.stop()}}),e,null,[[3,22]])})));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)(u.Z,{title:"Register",children:(0,i.jsxs)("div",{id:"page-content",children:[(0,i.jsx)("img",{src:"/images/kupon logo with text (1).png",width:100,className:"mx-4 my-2"}),(0,i.jsx)("div",{className:"page section-header text-center",children:(0,i.jsx)("div",{className:"page-title",children:(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)("h1",{className:"page-width",children:"Create an Account"})})})}),(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3",children:(0,i.jsx)("div",{className:"mb-4",children:(0,i.jsxs)("form",{onSubmit:f(y),id:"CustomerLoginForm",className:"contact-form",children:[(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"FirstName",children:"First Name *"}),(0,i.jsx)("input",{type:"text",name:"firstName",placeholder:"",id:"firstName",required:!0,onChange:b})]})}),(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"LastName",children:"Last Name *"}),(0,i.jsx)("input",{type:"text",name:"lastName",placeholder:"",id:"LastName",required:!0,onChange:b})]})}),(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsxs)("label",{htmlFor:"input-telephone",children:["Telephone ",(0,i.jsx)("span",{className:"required-f",children:"*"})]}),(0,i.jsx)("input",(0,t.Z)((0,n.Z)({name:"telephone",id:"input-telephone",type:"tel",required:!0},v("telephone",{required:"Please enter telephone number",minLength:{value:11,message:"telephone number must be exacty 11 numbers"},maxLength:{value:11,message:"telephone number must be exacty 11 numbers"}})),{onChange:b})),w.telephone&&(0,i.jsx)("div",{className:"text-danger text-center",children:w.telephone.message})]})}),(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsxs)("label",{htmlFor:"input-address-1",children:["Address ",(0,i.jsx)("span",{className:"required-f",children:"*"})]}),(0,i.jsx)("input",{name:"address",id:"input-address-1",type:"text",required:!0,onChange:b})]})}),(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"CustomerEmail",children:"Email *"}),(0,i.jsx)("input",(0,t.Z)((0,n.Z)({type:"email",name:"email",placeholder:""},v("email",{required:"Please enter email",pattern:{value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,message:"Please enter valid email"}})),{onChange:b}))]})}),(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"CustomerPassword",children:"Password *"}),(0,i.jsx)("input",(0,t.Z)((0,n.Z)({type:"password",defaultValue:"",name:"password",id:"password"},v("password",{required:"Please enter password",minLength:{value:6,message:"password should be more than 6 characters"}})),{onChange:b})),w.password&&(0,i.jsx)("div",{className:"text-danger text-center",children:w.password.message})]})}),(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"CustomerPassword",children:"Confirm Password"}),(0,i.jsx)("input",{type:"password",defaultValue:"",name:"cpassword",id:"password",placeholder:"confirm password",onChange:b})]})})]}),(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"text-center col-12 col-sm-12 col-md-12 col-lg-12",children:x?(0,i.jsx)("input",{className:"btn mb-3",value:"loading...",disabled:!0}):(0,i.jsx)("input",{type:"submit",className:"btn mb-3",value:"submit"})})})]})})})})})]})})}}},function(e){e.O(0,[424,531,715,374,100,207,971,774,888,179],(function(){return s=5511,e(e.s=s);var s}));var s=e.O();_N_E=s}]);