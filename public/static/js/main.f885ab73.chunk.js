(this.webpackJsonppressdesk=this.webpackJsonppressdesk||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/photo.51e41843.png"},20:function(e,a,t){e.exports=t(31)},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(18),r=t.n(l),o=t(8),s=t(2),m=t(1),i=t(4),p=t(12),u=Object(m.g)((function(e){e.topics,e.history;return c.a.createElement("div",{className:"navigation"},c.a.createElement("nav",{className:"top-nav navbar navbar-expand-lg bg-light bg-transparent px-10"},c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav mr-auto topics-container "},c.a.createElement("a",{className:"navbar-brand site-name text-dark pr-3",href:"/"},"pretVA"),c.a.createElement("span",null,c.a.createElement("li",{className:"nav-item shift"},c.a.createElement(s.c,{exact:!0,to:"/",className:"nav-link topic p-4 text-dark",activeClassName:"topic-active "},"About"))),c.a.createElement("span",null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.c,{exact:!0,to:"/",className:"nav-link topic p-4 text-dark",activeClassName:"topic-active"},"Services"))),c.a.createElement("span",null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.c,{exact:!0,to:"/",className:"nav-link topic pl-0 p-4 text-dark",activeClassName:"topic-active"},"Search"))),c.a.createElement("span",null,c.a.createElement("li",{className:"nav-item shiftmore"},c.a.createElement(s.c,{exact:!0,to:"/",className:"nav-link topic p-4 text-dark",activeClassName:"topic-active"},"Feedback & Support"))),c.a.createElement("span",null,c.a.createElement("li",{className:"nav-item  button1 "},c.a.createElement(s.b,{className:"nav-link text-dark ",to:"/login"},"Login In"))),c.a.createElement("span",null,c.a.createElement("li",{className:"nav-item button2"},c.a.createElement(s.b,{className:"nav-link text-light",to:"/register"},"Register")))))))})),d=function(e){e.topics;return c.a.createElement("div",{className:"container-fluid mt-3 py-4 px-8 footer"},c.a.createElement("div",{className:"mx-md-5 px-md-5 text-white"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-6 col-md-3"},c.a.createElement("div",{className:"mb-3 footer-heading-text"},c.a.createElement("div",null,c.a.createElement(s.c,{to:"#",className:"footer-links"},"Get in touch!")))),c.a.createElement("div",{className:"col-md-3 col-sm-6"},c.a.createElement("div",null,c.a.createElement(s.c,{to:"#",className:"footer-links"},"Location")),c.a.createElement("div",null,c.a.createElement(s.c,{to:"#",className:"footer-links"},"Bengaluru, Karnataka, India"))),c.a.createElement("div",{className:"col-md-3 col-sm-6 pb-5"},c.a.createElement("div",null,c.a.createElement(s.c,{to:"#",className:"footer-links"},"Contact")),c.a.createElement("div",null,c.a.createElement(s.c,{to:"#",className:"footer-links"},"support@pretva.com"))),c.a.createElement("div",{className:"col-md-3 col-sm-6 pb-5"},c.a.createElement("div",null,c.a.createElement(s.c,{to:"#",className:"footer-links"},"Follow")),c.a.createElement("div",null,c.a.createElement(s.c,{to:"#",className:"footer-links"},"support@pretva.com"))))))},E=t(11),v=t.n(E),N=function(e){var a=e.children;return c.a.createElement("div",null,c.a.createElement(u,null),c.a.createElement("div",{className:"my-container page-component"},a),c.a.createElement(d,null))},f="http://localhost:8080/users",g=function(){var e=Object(n.useState)({email:"",password:"",error:"",loading:!1,didRedirect:!1}),a=Object(p.a)(e,2),t=a[0],l=a[1],r=t.email,s=t.password,u=t.error,d=t.loading,E=t.didRedirect,g=(("undefined"!=typeof window&&!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt"))).user,function(e){return function(a){l(Object(i.a)(Object(i.a)({},t),{},Object(o.a)({error:!1},e,a.target.value)))}}),b=function(e){e.preventDefault(),l(Object(i.a)(Object(i.a)({},t),{},{error:!1,loading:!0})),function(e){return fetch("".concat(f,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({email:r,password:s}).then((function(e){e.error?l(Object(i.a)(Object(i.a)({},t),{},{error:e.error,loading:!1})):function(e,a){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),a())}(e,(function(){l(Object(i.a)(Object(i.a)({},t),{},{didRedirect:!0}))}))}))};return c.a.createElement(N,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("img",{src:v.a,height:"100%",width:"100%"})),c.a.createElement("div",{className:"col-6"},c.a.createElement("h1",{className:"p-5 text-center"},"Member Login"),d&&c.a.createElement("div",{className:"alert alert-info"},c.a.createElement("h2",null,"Loading...")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-danger",style:{display:u?"":"none"}},u))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:g("email"),value:r,className:"form-control",type:"email",placeholder:"Email Address"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:g("password"),value:s,className:"form-control",type:"password",placeholder:"Password"})),c.a.createElement("button",{onClick:b,className:"btn btn-success"},"Login")))),function(){if(E)return c.a.createElement(m.a,{to:"/"})}())))},b=function(){var e=Object(n.useState)({fname:"",lname:"",type:"",companyName:"",country:"",ContactNo:"",email:"",password:"",error:"",success:!1}),a=Object(p.a)(e,2),t=a[0],l=a[1],r=t.fname,m=t.lname,u=t.type,d=t.companyName,E=t.country,g=t.ContactNo,b=t.email,h=t.password,y=t.error,w=t.success,x=function(e){return function(a){l(Object(i.a)(Object(i.a)({},t),{},Object(o.a)({error:!1},e,a.target.value)))}},j=function(e){var a;e.preventDefault(),l(Object(i.a)(Object(i.a)({},t),{},{error:!1})),(a={fname:r,lname:m,type:u,companyName:d,country:E,ContactNo:g,email:b,password:h},fetch("".concat(f,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return console.log(e),e.json()})).catch((function(e){return console.log(e)}))).then((function(e){e.error?l(Object(i.a)(Object(i.a)({},t),{},{error:e.error,success:!1})):l(Object(i.a)(Object(i.a)({},t),{},{fname:"",lname:"",type:"",companyName:"",country:"",ContactNo:"",email:"",password:"",error:"",success:!0}))})).catch(console.log("Error in signup"))};return c.a.createElement(N,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("img",{src:v.a,height:"100%",width:"100%"})),c.a.createElement("div",{className:"col-6"},c.a.createElement("h1",{className:"p-5 text-center"},"New User Registration"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-success",style:{display:w?"":"none"}},"New account was created successfully. Please",c.a.createElement(s.b,{to:"/login"},"Login Here")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-danger",style:{display:y?"":"none"}},y))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",onChange:x("fname"),type:"text",value:r,placeholder:"First Name"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",onChange:x("lname"),type:"text",value:m,placeholder:"Last Name"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",onChange:x("type"),type:"text",value:u,placeholder:"Are you a Buyer or Supplier"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",onChange:x("companyName"),type:"text",value:d,placeholder:"Company Name"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",onChange:x("country"),type:"text",value:E,placeholder:"Country"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",onChange:x("ContactNo"),type:"text",value:g,placeholder:"Contact Number"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",onChange:x("email"),type:"email",value:b,placeholder:"Email Address"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:x("password"),className:"form-control",type:"password",value:h,placeholder:"Choose Password"})),c.a.createElement("button",{onClick:j,className:"btn btn-success btn-block"},"Submit")))))))},h=function(){var e;return c.a.createElement(s.a,null,c.a.createElement(m.d,null,c.a.createElement(m.b,(e={exact:!0,path:"/"},Object(o.a)(e,"exact",!0),Object(o.a)(e,"component",b),e)),c.a.createElement(m.b,{path:"/register",exact:!0,component:b}),c.a.createElement(m.b,{path:"/login",exact:!0,component:g}),c.a.createElement(m.b,{component:function(){return 404}})))};t(30);r.a.render(c.a.createElement(h,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.f885ab73.chunk.js.map