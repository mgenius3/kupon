(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[848],{8127:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/market/sell",function(){return n(6492)}])},9268:function(e,r,n){"use strict";var i=n(5893);n(7294);r.Z=function(){return(0,i.jsx)("div",{className:"loading-overlay",children:(0,i.jsxs)("div",{className:"loading-spinner",children:[(0,i.jsx)("div",{className:"spinner"}),";"]})})}},5985:function(e,r,n){"use strict";var i=n(5893),s=n(9704),l=n.n(s),t=n(1163),a=n(7294),o=n(3454);r.Z=function(e){var r=e.children,n=(0,t.useRouter)();return(0,a.useEffect)((function(){var e=setTimeout((function(){var e=localStorage.getItem("token");try{l().verify(e,"kupon")}catch(r){console.log(r),console.log(o.env.NEXT_PUBLIC_TOKEN_KEY),n.push("/login")}}),0);return function(){return clearTimeout(e)}}),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{children:r})})}},6492:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return j}});var i=n(7568),s=n(4924),l=n(6042),t=n(9396),a=n(4051),o=n.n(a),c=n(5893),d=n(7294),u=n(1971),m=n(7536),h=n(2920),p=(n(993),n(8060)),x=n(5985),f=n(9268),g=n(3449);function j(){var e=(0,d.useState)({}),r=e[0],n=e[1],a=(0,d.useState)([]),j=a[0],v=a[1],b=(0,d.useState)(),N=b[0],y=b[1],w=(0,d.useState)(),S=w[0],C=w[1],q=(0,d.useState)((function(){return localStorage.getItem("token")}))[0];(0,d.useEffect)((function(){h.Am.error(N),n((0,t.Z)((0,l.Z)({},r),(0,s.Z)({},"files",JSON.stringify(j))))}),[j]);var k=(0,m.cI)().handleSubmit,E=function(e){n((0,t.Z)((0,l.Z)({},r),(0,s.Z)({},e.target.name,e.target.value)))},P=function(){var e=(0,i.Z)(o().mark((function e(){var n,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.prev=1,e.next=4,fetch("/sell",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(q)},body:JSON.stringify(r)});case 4:if((n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:throw i=e.sent,C(!1),new Error(i.msg);case 11:return e.next=13,n.json();case 13:s=e.sent,localStorage.setItem("token",s),void 0!==window&&window.location.replace("".concat(s.msg)),C(!1),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(1),C(!1),h.Am.error(e.t0.message);case 23:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(){return e.apply(this,arguments)}}();return(0,c.jsx)(x.Z,{children:(0,c.jsx)(u.Z,{title:"Sell - Market",children:(0,c.jsxs)("div",{id:"page-content",style:{margin:"50px 0px"},children:[(0,c.jsx)("div",{className:"page section-header text-center",children:(0,c.jsx)("div",{className:"page-title",children:(0,c.jsx)("div",{className:"wrapper",children:(0,c.jsx)("h1",{className:"page-width",children:"Upload Sell Product"})})})}),(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3",children:(0,c.jsx)("div",{className:"customer-box returning-customer",children:(0,c.jsx)("div",{id:"customer-login",className:"collapse customer-content"})})})}),(0,c.jsx)("div",{className:"row billing-fields",children:(0,c.jsx)("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 sm-margin-30px-bottom",children:(0,c.jsx)("div",{className:"create-ac-content bg-light-gray padding-20px-all",children:(0,c.jsxs)("form",{onSubmit:k(P),children:[(0,c.jsxs)("fieldset",{children:[(0,c.jsx)("h2",{className:"login-title mb-3",children:"Sell Details"}),(0,c.jsx)(p.Z,{setFileUploadError:y,setFilesToUpload:v})]}),(0,c.jsxs)("fieldset",{children:[(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:"form-group col-md-6 col-lg-6 col-xl-6 required",children:[(0,c.jsxs)("label",{htmlFor:"input-firstname",children:["Product Title ",(0,c.jsx)("span",{className:"required-f",children:"*"})]}),(0,c.jsx)("input",{name:"title",id:"input-firstname",type:"text",required:!0,onChange:E})]}),(0,c.jsxs)("div",{className:"form-group col-md-6 col-lg-6 col-xl-6 required",children:[(0,c.jsxs)("label",{htmlFor:"input-address-1",children:["Location ",(0,c.jsx)("span",{className:"required-f",children:"*"})]}),(0,c.jsx)("input",{name:"location",id:"input-address-1",type:"text",required:!0,onChange:E})]}),(0,c.jsxs)("div",{className:"form-group col-md-6 col-lg-6 col-xl-6 required",children:[(0,c.jsxs)("label",{htmlFor:"input-city",children:["City ",(0,c.jsx)("span",{className:"required-f",children:"*"})]}),(0,c.jsx)("input",{name:"city",id:"input-city",type:"text",required:!0,onChange:E})]}),(0,c.jsxs)("div",{className:"form-group col-md-6 col-lg-6 col-xl-6 required",children:[(0,c.jsxs)("label",{htmlFor:"state",children:["State ",(0,c.jsx)("span",{className:"required-f",children:"*"})]}),(0,c.jsxs)("select",{name:"state",id:"state",required:!0,onChange:E,children:[(0,c.jsxs)("option",{disabled:!0,selected:!0,children:[" ","--- Please Select ---"," "]}),null===g.yy||void 0===g.yy?void 0:g.yy.map((function(e,r){return(0,c.jsx)("option",{value:e,children:e},r)}))]})]})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:"form-group col-md-6 col-lg-6 col-xl-6 required",children:[(0,c.jsxs)("label",{htmlFor:"category",children:["Category ",(0,c.jsx)("span",{className:"required-f",children:"*"})]}),(0,c.jsxs)("select",{name:"category",id:"category",required:!0,onChange:E,children:[(0,c.jsxs)("option",{disabled:!0,selected:!0,children:[" ","--- Please Select ---"," "]}),null===g.jp||void 0===g.jp?void 0:g.jp.map((function(e,r){return(0,c.jsx)("option",{value:e,children:e},r)}))]})]}),(0,c.jsxs)("div",{className:"form-group col-md-6 col-lg-6 col-xl-6 required",children:[(0,c.jsxs)("label",{htmlFor:"material",children:["Material ",(0,c.jsx)("span",{className:"required-f",children:"*"})]}),(0,c.jsxs)("select",{name:"material",id:"material",required:!0,onChange:E,children:[(0,c.jsxs)("option",{disabled:!0,selected:!0,children:[" ","--- Please Select ---"," "]}),null===g.LK||void 0===g.LK?void 0:g.LK.map((function(e,r){return(0,c.jsx)("option",{value:e,children:e},r)}))]})]}),(0,c.jsxs)("div",{className:"form-group col-md-6 col-lg-6 col-xl-6 required",children:[(0,c.jsxs)("label",{htmlFor:"condition",children:["Condition ",(0,c.jsx)("span",{className:"required-f",children:"*"})]}),(0,c.jsxs)("select",{name:"conditions",id:"conditions",required:!0,onChange:E,children:[(0,c.jsxs)("option",{disabled:!0,selected:!0,children:[" ","--- Please Select ---"," "]}),null===g.gP||void 0===g.gP?void 0:g.gP.map((function(e,r){return(0,c.jsx)("option",{value:e,children:e},r)}))]})]}),(0,c.jsxs)("div",{className:"form-group col-md-6 col-lg-6 col-xl-6 required",children:[(0,c.jsxs)("label",{htmlFor:"input-city",children:["Price (\u20a6)"," ",(0,c.jsx)("span",{className:"required-f",children:"*"})]}),(0,c.jsx)("input",{name:"price",id:"input-city",type:"text",required:!0,onChange:E})]})]}),(0,c.jsx)("div",{className:"row",children:(0,c.jsxs)("div",{className:"form-group col-md-12 col-lg-12 col-xl-12",children:[(0,c.jsxs)("label",{htmlFor:"input-company",children:["Package Description"," ",(0,c.jsx)("span",{className:"required-f",children:"*"})]}),(0,c.jsx)("textarea",{className:"form-control resize-both",rows:"3",name:"description",onChange:E})]})})]}),(0,c.jsx)("div",{className:"order-button-payment",children:S?(0,c.jsx)(f.Z,{}):(0,c.jsx)("button",{className:"btn",value:"Place order",type:"submit",children:"PROCEED"})})]})})})})]})]})})})}},3449:function(e,r,n){"use strict";n.d(r,{LK:function(){return l},gP:function(){return t},jp:function(){return s},yy:function(){return i}});var i=["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","Federal Capital Territory","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"],s=["Farm Machinery & Equipment","Commercial Equipment & Tools","Electronics","Fashion","Health & Beauty","Home, Furniture & Appliances","Mobile Phones","Property","Repair & Construction","Services","Vehicles","Other"],l=["ABS Plastic","Acrylic","Alloy Steel","Alluminium","Canvas","Carbon Steel","Cardboard","Chrome","Composite","Copper","Cotton","Fiberglass","Galvanized Steel","Glass","High Carbon Steel","Metal","Leather","Nylon","Steel","Wood"],t=["Brand New","Used","Manufacturer Refurbished","Seller Refurbished"]},8060:function(e,r,n){"use strict";var i=n(6042),s=n(9396),l=n(5893),t=n(7294),a=n(5162),o={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},c={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},d={display:"flex",minWidth:0,overflow:"hidden"},u={display:"block",width:"auto",height:"100%"},m={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},h={borderColor:"#2196f3"},p={borderColor:"#00e676"},x={borderColor:"#ff1744"};r.Z=function(e){var r=e.setFileUploadError,n=e.setFilesToUpload,f=(0,t.useState)([]),g=f[0],j=f[1],v=(0,a.uI)({accept:{"image/*":[".jpeg",".png"]},maxFiles:2,maxSize:512e3,onDropRejected:function(e){var n,i=null===(n=e[0])||void 0===n?void 0:n.errors[0].code;r(i)},onDrop:function(e){j(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}))),function(e){for(var r=function(r){var s=new FileReader;console.log("hello"),s.onload=function(){var e,l=null===s||void 0===s||null===(e=s.result)||void 0===e?void 0:e.split(",")[1];i[r]=l,n(i)},s.readAsDataURL(e[r])},i=[],s=0;s<e.length;s++)r(s)}(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),b=v.getRootProps,N=v.getInputProps,y=v.isFocused,w=v.isDragAccept,S=v.isDragReject,C=g.map((function(e){return(0,l.jsx)("div",{style:c,children:(0,l.jsx)("div",{style:d,children:(0,l.jsx)("img",{src:e.preview,style:u,onLoad:function(){URL.revokeObjectURL(e.preview)}})})},e.name)}));(0,t.useEffect)((function(){return function(){return g.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[g]);var q=(0,t.useMemo)((function(){return(0,i.Z)({},m,y?h:{},w?p:{},S?x:{})}),[y,w,S]);return(0,l.jsxs)("section",{className:"container",children:[(0,l.jsxs)("div",(0,s.Z)((0,i.Z)({},b({style:q})),{children:[(0,l.jsx)("input",(0,i.Z)({},N())),(0,l.jsxs)("p",{className:"text-center",children:["Drag 'n' drop some package image here,",(0,l.jsx)("br",{})," or click to select files"]}),(0,l.jsx)("span",{children:"Note: maximum of two files "}),(0,l.jsx)("span",{children:"Note: image should not be more than 500kb "}),(0,l.jsx)("br",{}),(0,l.jsx)("p",{className:"btn",children:"Select"})]})),(0,l.jsx)("aside",{style:o,children:C})]})}}},function(e){e.O(0,[714,424,531,715,858,100,231,207,162,971,774,888,179],(function(){return r=8127,e(e.s=r);var r}));var r=e.O();_N_E=r}]);