(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[115,178],{1408:function(e,t,c){"use strict";c.r(t);var s=c(2),i=c(9),n=c(27),r=c(1),a=c(63),o=c(158),d=c(12),l=c(142),j=c(148),b=c(144),u=c(7),h=c(64),O=c(3);t.default=function e(){var t=Object(r.useState)(),c=Object(n.a)(t,2),m=c[0],x=c[1],p=Object(d.g)(),g=Object(r.useContext)(h.b).loggedInuser,f=Object(r.useState)({title:"",item_code:"",site_id:0}),v=Object(n.a)(f,2),C=v[0],_=v[1],y=function(e){C.item_code=parseFloat(m)+1,C.created_by=g.first_name,C.product_code=e,""!==C.title&&""!==C.item_code?u.a.post("/product/insertProduct",C).then((function(e){var t=e.data.data.insertId;Object(b.a)("Product inserted successfully.","success"),setTimeout((function(){p("/ProductEdit/".concat(t))}),300)})).catch((function(){Object(b.a)("Unable to edit record.","error")})):Object(b.a)("Please fill all required fields.","warning")};return Object(r.useEffect)((function(){u.a.get("/product/getMaxItemCode").then((function(e){x(e.data.data[0].itemc)}))}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(l.a,{}),Object(O.jsx)(o.a,{}),Object(O.jsx)(a.eb,{children:Object(O.jsx)(a.s,{md:"6",children:Object(O.jsx)(j.default,{title:"Key Details",children:Object(O.jsxs)(a.A,{children:[Object(O.jsx)(a.C,{children:Object(O.jsx)(a.eb,{children:Object(O.jsxs)(a.s,{md:"12",children:[Object(O.jsxs)(a.H,{children:["Title",Object(O.jsx)("span",{className:"required",children:" *"})]}),Object(O.jsx)(a.E,{type:"text",onChange:function(e){_(Object(i.a)(Object(i.a)({},C),{},Object(s.a)({},e.target.name,e.target.value)))},value:e&&e.title,name:"title"})]})})}),Object(O.jsx)(a.C,{children:Object(O.jsx)(a.eb,{children:Object(O.jsxs)("div",{className:"pt-3 mt-3 d-flex align-items-center gap-2",children:[Object(O.jsx)(a.e,{className:"shadow-none",color:"primary",onClick:function(){u.a.post("/commonApi/getCodeValue",{type:"product"}).then((function(e){y(e.data.data)})).catch((function(){y("")}))},children:"Save & Continue"}),Object(O.jsx)(a.e,{onClick:function(){p("/ProductEdit")},type:"button",className:"btn btn-dark shadow-none",children:"Cancel"})]})})})]})})})})]})}},142:function(e,t,c){"use strict";var s=c(63),i=c(12),n=c(58),r=c(3);t.a=function(e){var t=Object(i.f)(),c=t.pathname.split("/")[1],a=t.pathname.split("/")[2];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:e.heading}),Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.d,{to:"/",tag:n.b,className:"text-decoration-none",children:"Home"}),c?Object(r.jsx)(s.d,{active:!0,children:c}):"",a?Object(r.jsx)(s.d,{active:!0,children:a}):""]})]})}},144:function(e,t,c){"use strict";var s=c(158);c(186);t.a=function(e,t){return"success"===t?s.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?s.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?s.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?s.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(s.b)(e)}},148:function(e,t,c){"use strict";c.r(t);var s=c(63),i=(c(1),c(3));function n(e){var t=e.details,c=void 0===t?null:t,n=e.title;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(s.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(i.jsxs)(s.eb,{children:[Object(i.jsx)(s.s,{children:n}),c&&Object(i.jsxs)(s.s,{children:[Object(i.jsx)(s.eb,{children:Object(i.jsxs)("small",{children:[" Creation: ",c&&c.created_by," ",c&&c.creation_date]})}),Object(i.jsx)(s.eb,{className:"d-flex",children:Object(i.jsxs)("small",{children:[" Modified: ",c&&c.modified_by," ",c&&c.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,r=e.subtitle,a=e.creationModificationDate;return Object(i.jsxs)(s.i,{className:"shadow-none",children:[Object(i.jsx)(n,{details:a,title:c}),Object(i.jsxs)(s.j,{className:"p-4",children:[Object(i.jsx)(s.m,{className:"text-muted mb-3",children:r||""}),Object(i.jsx)("div",{children:t})]})]})}}}]);
//# sourceMappingURL=115.6186f7cc.chunk.js.map