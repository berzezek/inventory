(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(26),s=a.n(r),i=(a(69),a(31)),o=a(32),l=a(46),d=a(44),j=(a(70),a(105)),b=a(102),m=a(106),u=a(107),h=a(64),p=a(103),x=a(8),O=a.p+"static/media/logo.01bc8a53.png",f=a(0),v=function(){return Object(f.jsx)(j.a,{bg:"light",expand:"lg",children:Object(f.jsxs)(b.a,{children:[Object(f.jsx)(j.a.Brand,{href:"/",children:Object(f.jsx)("img",{src:O,alt:"Ateca logo",width:"150"})}),Object(f.jsx)(j.a.Toggle,{"aria-controls":"navbarScroll"}),Object(f.jsxs)(j.a.Collapse,{id:"navbarScroll",children:[Object(f.jsxs)(m.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(f.jsx)(m.a.Link,{children:Object(f.jsx)(x.b,{to:{pathname:"/category",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Category"})}),Object(f.jsx)(m.a.Link,{children:Object(f.jsx)(x.b,{to:{pathname:"/departament",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Departament"})}),Object(f.jsx)(m.a.Link,{children:Object(f.jsx)(x.b,{to:{pathname:"/owner",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Owner"})}),Object(f.jsx)(m.a.Link,{children:Object(f.jsx)(x.b,{to:{pathname:"/inventory",fromDashboard:!1},className:"btn btn-outline-secondary",children:"Inventory"})}),Object(f.jsx)(m.a.Link,{children:Object(f.jsx)(x.b,{to:{pathname:"/login",fromDashboard:!1},className:"btn btn-outline-secondary",children:"Login"})})]}),Object(f.jsxs)(u.a,{className:"d-flex",children:[Object(f.jsx)(h.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(f.jsx)(p.a,{variant:"outline-success",children:"Search"})]})]})]})})},y=a(13),w=a(104),N=a(7),g=a.n(N),_=a(12),S=a(5),D=a(10),k=a.n(D),C="http://127.0.0.1:8000/";var T=function(e){var t=Object(n.useState)([]),a=Object(S.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(_.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()({method:"GET",url:C+"api/v1/".concat(e.name,"/")}).then((function(e){r(e.data)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),c};function A(){var e=1,t=0,a=0;return T({name:"inventory"}).map((function(e){return a+=e.price,t++})),Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)("h3",{className:"text-center",children:"All Inventories"}),Object(f.jsxs)("p",{className:"text-end text-light",children:["Total: ",t," pcs, ",a," $"]}),Object(f.jsxs)(w.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"\u2116"}),Object(f.jsx)("th",{children:"Serial"}),Object(f.jsx)("th",{children:"Title"}),Object(f.jsx)("th",{children:"Price"}),Object(f.jsx)("th",{children:"Owner"})]})}),Object(f.jsxs)("tbody",{children:[T({name:"inventory"}).map((function(t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e++}),Object(f.jsx)("td",{children:t.serial_number}),Object(f.jsx)("td",{children:Object(f.jsx)(x.b,{to:{pathname:"/inventory_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:t.title})}),Object(f.jsxs)("td",{className:"text-end",children:[t.price," $"]}),Object(f.jsx)("td",{children:t.owner?Object(f.jsxs)(x.b,{to:{pathname:"/owner_detail/".concat(t.owner.id),fromDashboard:!1},children:[t.owner.surname," ",t.owner.name[0],"."]}):"-IN STOCK-"})]},t.id)})),Object(f.jsx)("tr",{})]})]}),Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)(x.b,{to:{pathname:"/inventory_add",fromDashboard:!1},children:Object(f.jsx)("button",{className:"btn btn-success",children:"Add Inventory"})})})]})}function z(){var e=1;return Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)("h3",{className:"text-center",children:"All Categories"}),Object(f.jsxs)(w.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center shadow-lg rounded",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"\u2116"}),Object(f.jsx)("th",{children:"Title"}),Object(f.jsx)("th",{children:"Description"})]})}),Object(f.jsx)("tbody",{children:T({name:"category"}).map((function(t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{className:"col-1",children:e++}),Object(f.jsx)("td",{className:"col-4 text-start",children:Object(f.jsx)(x.b,{to:{pathname:"/category_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:t.category_title})}),Object(f.jsx)("td",{className:"col-6",children:t.category_description})]},t.id)}))})]}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)(x.b,{to:{pathname:"/category_add",fromDashboard:!1},children:Object(f.jsx)("button",{className:"btn btn-success",children:"Add Category"})})})]})}function E(){var e=1;return Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)("h3",{className:"text-center",children:"All Owner`s"}),Object(f.jsxs)(w.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"\u2116"}),Object(f.jsx)("th",{children:"Name"}),Object(f.jsx)("th",{children:"Departament"})]})}),Object(f.jsx)("tbody",{children:T({name:"owner"}).map((function(t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e++}),Object(f.jsx)("td",{children:Object(f.jsxs)(x.b,{to:{pathname:"/owner_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:[t.surname," ",t.name[0],"."]})}),Object(f.jsx)("td",{children:t.departament?Object(f.jsx)(x.b,{to:{pathname:"/departament_detail/".concat(t.departament.id),fromDashboard:!1},className:"",children:t.departament.departament_title}):"-"})]},t.id)}))})]}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)(x.b,{to:{pathname:"/owner_add",fromDashboard:!1},children:Object(f.jsx)("button",{className:"btn btn-success",children:"Add Owner"})})})]})}function P(){var e=1;return Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)("h3",{className:"text-center",children:"All Departament`s"}),Object(f.jsxs)(w.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"\u2116"}),Object(f.jsx)("th",{children:"Title"}),Object(f.jsx)("th",{children:"Description"})]})}),Object(f.jsx)("tbody",{children:T({name:"departament"}).map((function(t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{className:"col-1",children:e++}),Object(f.jsx)("td",{className:"col-4 text-start",children:Object(f.jsx)(x.b,{to:{pathname:"/departament_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:t.departament_title})}),Object(f.jsx)("td",{className:"col-7",children:t.departament_description})]},t.id)}))})]}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)(x.b,{to:{pathname:"/departament_add",fromDashboard:!1},children:Object(f.jsx)("button",{className:"btn btn-success",children:"Add Departament"})})})]})}function L(){var e=Object(n.useState)(""),t=Object(S.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(S.a)(r,2),i=s[0],o=s[1],l=function(){var e=Object(_.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(n=new FormData).append("category_title",a),n.append("category_description",i),!a){e.next=9;break}return e.next=7,k()({headers:{Authorization:"Token ".concat(window.localStorage.access_token)},method:"post",url:C+"api/v1/category/",data:n}).then(alert("Category ".concat(a," has been added")));case 7:e.next=10;break;case 9:alert("Please enter any title");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container sm",children:[Object(f.jsx)("h3",{className:"text-center",children:"Add new Category"}),Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:l,children:[Object(f.jsxs)("div",{className:"d-flex my-2",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50  me-1",placeholder:"Category",name:"category_title",value:a,onChange:function(e){return c(e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"category_description",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function I(){var e=Object(n.useState)(""),t=Object(S.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(S.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(""),d=Object(S.a)(l,2),j=d[0],b=d[1],m=Object(n.useState)(""),u=Object(S.a)(m,2),h=u[0],p=u[1],x=Object(n.useState)([]),O=Object(S.a)(x,2),v=O[0],y=O[1];Object(n.useEffect)((function(){function e(){return(e=Object(_.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({method:"GET",url:C+"api/v1/departament/"}).then((function(e){y(e.data)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var w=function(){var e=Object(_.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("name",a),t.append("surname",i),t.append("owner_description",j),t.append("departament",h),!i||!a){e.next=10;break}return e.next=8,k()({headers:{Authorization:"Token ".concat(window.localStorage.access_token)},method:"post",url:C+"api/v1/owner/",data:t}).then(alert("Owner ".concat(i," ").concat(a," has been added")));case 8:e.next=11;break;case 10:alert("Surname & Name must be added");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container sm",children:[Object(f.jsx)("h3",{className:"text-center",children:"Add new Owner"}),Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:w,children:[Object(f.jsxs)("div",{className:"d-flex mb-2",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Surname",name:"surname",value:i,onChange:function(e){return o(e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Name",name:"name",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(f.jsxs)("div",{className:"d-flex mb-2",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Description",name:"owner_description",value:j,onChange:function(e){return b(e.target.value)}}),Object(f.jsxs)("select",{className:"form-select w-50",name:"departament",onChange:function(e){return p(e.target.value)},children:[Object(f.jsx)("option",{value:"",children:"Select departament"}),v.map((function(e){return Object(f.jsx)("option",{value:e.id,children:e.departament_title},e.id)}))]})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function H(){var e=Object(n.useState)(""),t=Object(S.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(S.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(""),d=Object(S.a)(l,2),j=d[0],b=d[1],m=Object(n.useState)(""),u=Object(S.a)(m,2),h=u[0],p=u[1],x=Object(n.useState)(""),O=Object(S.a)(x,2),v=O[0],y=O[1],w=Object(n.useState)(""),N=Object(S.a)(w,2),D=N[0],T=N[1],A=Object(n.useState)(""),z=Object(S.a)(A,2),E=z[0],P=z[1],L=Object(n.useState)([]),I=Object(S.a)(L,2),H=I[0],B=I[1],G=Object(n.useState)([]),F=Object(S.a)(G,2),K=F[0],M=F[1];Object(n.useEffect)((function(){function e(){return(e=Object(_.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({method:"GET",url:C+"api/v1/owner/"}).then((function(e){M(e.data)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(_.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({method:"GET",url:C+"api/v1/category/"}).then((function(e){B(e.data)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var $=function(){var e=Object(_.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("title",a),t.append("inventory_description",i),t.append("serial_number",j),t.append("price",h),t.append("date_purchase",v),t.append("category",D),t.append("owner",E),!(a&&h&&j)){e.next=13;break}return e.next=11,k()({headers:{Authorization:"Token ".concat(window.localStorage.access_token)},method:"post",url:C+"api/v1/inventory/",data:t}).then(alert("Inventory ".concat(a," has been added")));case 11:e.next=14;break;case 13:alert("Title, Serial number & Price must be added");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container sm",children:[Object(f.jsx)("h3",{className:"text-center",children:"Add new Inventory"}),Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:$,children:[Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsxs)("select",{className:"form-select w-50 me-1",name:"category",onChange:function(e){return T(e.target.value)},children:[Object(f.jsx)("option",{value:"",children:"Select category"}),H.map((function(e){return Object(f.jsx)("option",{value:e.id,children:e.category_title},e.id)}))]}),Object(f.jsxs)("select",{className:"form-select w-50",name:"owner",onChange:function(e){return P(e.target.value)},children:[Object(f.jsx)("option",{value:"",children:"Select owner"}),K.map((function(e){return Object(f.jsxs)("option",{value:e.id,children:[e.surname," ",e.name[0],"."]},e.id)}))]})]}),Object(f.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Title",name:"title",value:a,onChange:function(e){return c(e.target.value)}}),Object(f.jsx)("input",{type:"textarea",className:"form-control mb-2",placeholder:"Description",name:"inventory_description",value:i,onChange:function(e){return o(e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Serial number",name:"serial_number",value:j,onChange:function(e){return b(e.target.value)}}),Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("input",{type:"text",className:"form-control mb-2 w-50",placeholder:"Price",name:"price",value:h,onChange:function(e){return p(e.target.value)}}),Object(f.jsx)("input",{type:"date",className:"form-control mb-2 w-50 ms-1",placeholder:"Date of purchase",name:"date_purchase",value:v,onChange:function(e){return y(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function B(){var e=Object(n.useState)(""),t=Object(S.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(S.a)(r,2),i=s[0],o=s[1],l=function(){var e=Object(_.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("departament_title",a),t.append("departament_description",i),!a){e.next=8;break}return e.next=6,k()({headers:{Authorization:"Token ".concat(window.localStorage.access_token)},method:"post",url:C+"api/v1/departament/",data:t}).then(alert("departament ".concat(a," has been added")));case 6:e.next=9;break;case 8:alert("Please enter any title");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container sm",children:[Object(f.jsx)("h3",{className:"text-center",children:"Add new Departament"}),Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:l,children:[Object(f.jsxs)("div",{className:"d-flex my-2",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Departament",name:"departament_title",value:a,onChange:function(e){return c(e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"departament_description",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}var G=a(108),F=function(e){var t=Object(y.f)(),a=e.name,n=e.id,c=function(){var e=Object(_.a)(g.a.mark((function e(c){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),!window.confirm("Delete ".concat(a,"... Are you sure?"))){e.next=4;break}return e.next=4,k()({headers:{Authorization:"Token ".concat(window.localStorage.access_token)},method:"delete",url:C+"api/v1/".concat(a,"/").concat(n)}).then(t.push("/".concat(a)),alert("The ".concat(a," was been deleted")),window.location.reload());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-eraser",viewBox:"0 0 16 16",onClick:c,children:Object(f.jsx)("path",{d:"M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"})})})};var K=function(e){var t=Object(n.useState)({}),a=Object(S.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(_.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()({method:"GET",url:C+"api/v1/".concat(e.name,"/").concat(e.id)}).then((function(e){r(e.data)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.id]),c};function M(e){var t=Object(y.f)(),a=e.id,c=e.name,r=Object(n.useState)(e.title),s=Object(S.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(e.description),d=Object(S.a)(l,2),j=d[0],b=d[1],m={category_title:i,category_description:j},u=function(){var e=Object(_.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,k()({headers:{Authorization:"Token ".concat(window.localStorage.access_token)},method:"post",url:C+"api/v1/".concat(c,"/").concat(a,"/"),data:m}).then(alert("The ".concat(c," was been edited")),t.push("/".concat(c)),window.location.reload());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container sm mt-5",children:[Object(f.jsx)("h3",{className:"text-center",children:"Edit category"}),Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:u,children:[Object(f.jsxs)("div",{className:"d-flex my-2",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50  me-1",placeholder:"Category",name:"category_title",value:i,onChange:function(e){return o(e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"category_description",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}var $=function(){return Object(f.jsx)("div",{className:"me-5",children:Object(f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-square",viewBox:"0 0 16 16",children:[Object(f.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),Object(f.jsx)("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]})})};function J(e){var t=e.match.params.id,a=K({name:"category",id:t});return Object(f.jsxs)(x.a,{children:[Object(f.jsx)("div",{className:"container lg-w-50",children:Object(f.jsxs)(G.a,{border:"dark",children:[Object(f.jsx)(G.a.Header,{children:Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("div",{className:"me-5",children:"Category detail"}),Object(f.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(f.jsx)(x.b,{to:{pathname:"/category_edit/".concat(t),fromDashboard:!1},className:"",children:Object(f.jsx)($,{})}),Object(f.jsx)(F,{id:t,name:"category"})]})]})}),Object(f.jsxs)(G.a.Body,{children:[Object(f.jsx)(G.a.Title,{children:a.category_title}),Object(f.jsx)(G.a.Text,{children:a.category_description})]})]})}),Object(f.jsx)(y.a,{path:"/category_edit/:id",children:Object(f.jsx)(M,{id:t,name:"category",title:a.category_title,description:a.category_description})})]})}function q(e){var t=Object(y.f)(),a=e.id,c=e.name,r=Object(n.useState)(e.ownerName),s=Object(S.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(e.ownerSurname),d=Object(S.a)(l,2),j=d[0],b=d[1],m=Object(n.useState)(e.ownerDescription),u=Object(S.a)(m,2),h=u[0],p=u[1],x=Object(n.useState)(e.ownerDepartament),O=Object(S.a)(x,2),v=O[0],w=O[1],N={name:i,surname:j,owner_description:h,departament:v},D=function(){var e=Object(_.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,k()({headers:{Authorization:"Token ".concat(window.localStorage.access_token)},method:"put",url:C+"api/v1/".concat(c,"/").concat(a,"/"),data:N}).then(alert("The ".concat(c," was been edited")),t.push("/".concat(c)),window.location.reload());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container sm",children:[Object(f.jsx)("h3",{className:"text-center",children:"Edit Owner"}),Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:D,children:[Object(f.jsxs)("div",{className:"d-flex mb-2",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Surname",name:"ownerSurname",value:j,onChange:function(e){return b(e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Name",name:"ownerName",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(f.jsxs)("div",{className:"d-flex mb-2",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Description",name:"ownerDescription",value:h,onChange:function(e){return p(e.target.value)}}),Object(f.jsxs)("select",{className:"form-select w-50",name:"departament",onChange:function(e){return w(e.target.value)},children:[Object(f.jsx)("option",{value:"",children:"Select departament"}),T({name:"departament"}).map((function(e){return Object(f.jsx)("option",{value:e.id,children:e.departament_title},e.id)}))]})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function Y(e){var t=e.match.params.id,a=K({name:"owner",id:t});return Object(f.jsxs)(x.a,{children:[Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)(G.a,{border:"dark",children:[Object(f.jsx)(G.a.Header,{children:Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("div",{className:"me-5",children:"Owner detail"}),Object(f.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(f.jsx)(x.b,{to:{pathname:"/owner_edit/".concat(t),fromDashboard:!1},className:"",children:Object(f.jsx)($,{})}),Object(f.jsx)(F,{id:t,name:"owner"})]})]})}),Object(f.jsxs)(G.a.Body,{children:[Object(f.jsxs)(G.a.Title,{children:[a.surname," ",a.name]}),Object(f.jsx)(G.a.Text,{children:a.owner_description}),Object(f.jsx)(G.a.Text,{children:a.departament?a.departament.departament_title:"-"})]})]})}),Object(f.jsx)(y.a,{path:"/owner_edit/:id",children:Object(f.jsx)(q,{id:t,name:"owner",ownerName:a.name,ownerSurname:a.surname,ownerDescription:a.owner_description,ownerCategory:a.departament})})]})}function Q(e){var t=Object(y.f)(),a=e.id,c=e.name,r=Object(n.useState)(e.title),s=Object(S.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(e.description),d=Object(S.a)(l,2),j=d[0],b=d[1],m={departament_title:i,departament_description:j},u=function(){var e=Object(_.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,k()({headers:{Authorization:"Token ".concat(window.localStorage.access_token)},method:"put",url:C+"api/v1/".concat(c,"/").concat(a,"/"),data:m}).then(alert("The ".concat(c," was been edited")),t.push("/".concat(c)),window.location.reload());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container sm mt-5",children:[Object(f.jsx)("h3",{className:"text-center",children:"Edit Departament"}),Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:u,children:[Object(f.jsxs)("div",{className:"d-flex my-2",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Departament",name:"departament_title",value:i,onChange:function(e){return o(e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"departament_description",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}var R=function(e){var t=e.match.params.id,a=K({name:"departament",id:t});return Object(f.jsxs)(x.a,{children:[Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)(G.a,{border:"dark",children:[Object(f.jsx)(G.a.Header,{children:Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("div",{className:"me-5",children:"Departament detail"}),Object(f.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(f.jsx)(x.b,{to:{pathname:"/category_edit/".concat(t),fromDashboard:!1},className:"",children:Object(f.jsx)($,{})}),Object(f.jsx)(F,{id:t,name:"departament"})]})]})}),Object(f.jsxs)(G.a.Body,{children:[Object(f.jsx)(G.a.Title,{children:a.departament_title}),Object(f.jsx)(G.a.Text,{children:a.departament_description})]})]})}),Object(f.jsx)(y.a,{path:"/category_edit/:id",children:Object(f.jsx)(Q,{id:t,name:"departament",title:a.departament_title,description:a.departament_description})})]})};function U(e){var t=Object(y.f)(),a=e.id,c=e.name,r=Object(n.useState)(e.title),s=Object(S.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(e.inventoryDescription),d=Object(S.a)(l,2),j=d[0],b=d[1],m=Object(n.useState)(e.serialNumber),u=Object(S.a)(m,2),h=u[0],p=u[1],x=Object(n.useState)(e.price),O=Object(S.a)(x,2),v=O[0],w=O[1],N=Object(n.useState)(e.datePurchase),D=Object(S.a)(N,2),A=D[0],z=D[1],E=Object(n.useState)([]),P=Object(S.a)(E,2),L=P[0],I=P[1],H=Object(n.useState)([]),B=Object(S.a)(H,2),G=B[0],F=B[1],K={title:i,inventory_description:j,serial_number:h,price:v,date_purchase:A,category:L.id,owner:G.id},M=function(){var e=Object(_.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,k()({headers:{Authorization:"Token ".concat(window.localStorage.access_token)},method:"put",url:C+"api/v1/".concat(c,"/").concat(a,"/"),data:K}).then(alert("The ".concat(c," was been edited")),t.push("/".concat(c)),window.location.reload());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container sm",children:[Object(f.jsx)("h3",{className:"text-center",children:"Edit Inventory"}),Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:M,children:[Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsxs)("select",{className:"form-select w-50 me-1",name:"category",onChange:function(e){return I(e.target.value)},children:[Object(f.jsx)("option",{children:"Select category"}),T({name:"category"}).map((function(e){return Object(f.jsx)("option",{value:e.id,children:e.category_title},e.id)}))]}),Object(f.jsxs)("select",{className:"form-select w-50",name:"owner",onChange:function(e){return F(e.target.value)},children:[Object(f.jsx)("option",{children:"Select owner"}),T({name:"owner"}).map((function(e){return Object(f.jsxs)("option",{value:e.id,children:[e.surname," ",e.name[0],"."]},e.id)}))]})]}),Object(f.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Title",name:"title",value:i,onChange:function(e){return o(e.target.value)}}),Object(f.jsx)("input",{type:"textarea",className:"form-control mb-2",placeholder:"Description",name:"inventory_description",value:j,onChange:function(e){return b(e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Serial number",name:"serial_number",value:h,onChange:function(e){return p(e.target.value)}}),Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("input",{type:"text",className:"form-control mb-2 w-50",placeholder:"Price",name:"price",value:v,onChange:function(e){return w(e.target.value)}}),Object(f.jsx)("input",{type:"date",className:"form-control mb-2 w-50 ms-1",placeholder:"Date of purchase",name:"date_purchase",value:A,onChange:function(e){return z(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function V(e){var t=e.match.params.id,a=K({name:"inventory",id:t});return Object(f.jsxs)(x.a,{children:[Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h3",{className:"text-center",children:"InventoryDetail"}),Object(f.jsxs)(G.a,{border:"dark",children:[Object(f.jsx)(G.a.Header,{children:Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("div",{className:"me-5",children:Object(f.jsx)("span",{className:"text-muted",children:"Serial Number: "})}),Object(f.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(f.jsx)(x.b,{to:{pathname:"/inventory_edit/".concat(t),fromDashboard:!1},className:"",children:Object(f.jsx)($,{})}),Object(f.jsx)(F,{id:t,name:"inventory"})]})]})}),Object(f.jsxs)(G.a.Body,{children:[Object(f.jsx)(G.a.Title,{children:Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{className:"text-muted",children:"Title: "}),a.title]})}),Object(f.jsx)(G.a.Text,{children:Object(f.jsx)(w.a,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"",children:Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsxs)("td",{className:"col-3",children:[Object(f.jsx)("p",{className:"text-muted text-end me-2",children:"Serial: "}),Object(f.jsx)("p",{className:"text-muted text-end me-2",children:"Category: "}),Object(f.jsx)("p",{className:"text-muted text-end me-2",children:"Owner: "}),Object(f.jsx)("p",{className:"text-muted text-end me-2",children:"Price: "}),Object(f.jsx)("p",{className:"text-muted text-end me-2",children:"Date of purchase: "}),Object(f.jsx)("p",{className:"text-muted text-end me-2",children:"Description: "})]}),Object(f.jsxs)("td",{className:"col-9",children:[Object(f.jsx)("p",{className:"ms-2",children:a.serial_number}),Object(f.jsx)("p",{className:"ms-2",children:a.category?a.category.category_title:"---"}),Object(f.jsx)("p",{className:"ms-2",children:a.owner?"".concat(a.owner.surname," ").concat(a.owner.name):"-IN STOCK-"}),Object(f.jsxs)("p",{className:"ms-2",children:[a.price,"$"]}),Object(f.jsx)("p",{className:"ms-2",children:a.date_purchase}),Object(f.jsx)("p",{className:"ms-2",children:a.inventory_description})]})]})})})})]})]})]}),Object(f.jsx)(y.a,{path:"/inventory_edit/:id",children:Object(f.jsx)(U,{id:t,name:"inventory",title:a.title,inventoryDescription:a.inventory_description,serialNumber:a.serial_number,price:a.price,datePurchase:a.date_purchase,inventoryCategory:a.category,inventoryOwner:a.owner})})]})}var W=function(){var e=Object(y.f)(),t=Object(n.useState)("admin@admin.com"),a=Object(S.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(),i=Object(S.a)(s,2),o=i[0],l=i[1],d=function(){var t=Object(_.a)(g.a.mark((function t(a){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n="Login",r={user:{email:c,password:o}},!c||!o){t.next=7;break}return t.next=5,k()({method:"post",url:"http://127.0.0.1:8000/api/auth/users/login/",data:r}).then((function(t){if("OK"===t.statusText){var a=t.data.user.token;k.a.defaults.headers.common.Authorization="Token ".concat(a),alert("You are logged in"),console.log(n),n="OK",console.log(n),e.push("/")}else alert("Please enter correct"),window.location.reload()}));case 5:t.next=8;break;case 7:alert("Please enter email & password");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"bg-light p-5 rounded",children:Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:d,children:[Object(f.jsxs)("div",{className:"d-flex my-2",children:[Object(f.jsx)("input",{type:"email",className:"form-control me-1",placeholder:"Email",name:"email",value:c,autocomplete:"email",onChange:function(e){return r(e.target.value)}}),Object(f.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",value:o,autocomplete:"current-password",onChange:function(e){return l(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})})},X=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsxs)(x.a,{children:[Object(f.jsx)(v,{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)(y.c,{children:[Object(f.jsx)(y.a,{path:"/category",children:Object(f.jsx)(z,{})}),Object(f.jsx)(y.a,{path:"/departament",children:Object(f.jsx)(P,{})}),Object(f.jsx)(y.a,{path:"/owner",children:Object(f.jsx)(E,{})}),Object(f.jsx)(y.a,{path:"/inventory",children:Object(f.jsx)(A,{})}),Object(f.jsx)(y.a,{path:"/category_detail/:id",exact:!0,component:J}),Object(f.jsx)(y.a,{path:"/departament_detail/:id",exact:!0,component:R}),Object(f.jsx)(y.a,{path:"/owner_detail/:id",exact:!0,component:Y}),Object(f.jsx)(y.a,{path:"/inventory_detail/:id",exact:!0,component:V}),Object(f.jsx)(y.a,{path:"/category_add",children:Object(f.jsx)(L,{})}),Object(f.jsx)(y.a,{path:"/departament_add",children:Object(f.jsx)(B,{})}),Object(f.jsx)(y.a,{path:"/owner_add",children:Object(f.jsx)(I,{})}),Object(f.jsx)(y.a,{path:"/inventory_add",children:Object(f.jsx)(H,{})}),Object(f.jsx)(y.a,{path:"/login",children:Object(f.jsx)(W,{})})]})})]})}}]),a}(c.a.Component),Z=X;s.a.render(Object(f.jsx)(Z,{}),document.getElementById("root"))},69:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.f7872311.chunk.js.map