(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[166],{1455:function(e,t,c){"use strict";c.r(t);var n=c(63),r=c(9),s=c(1),a=c.n(s),i=c(39),j=c(68),l=c(66),d=c(3),b=function(e){var t=e.onContactClick,c=e.onStarredClick,r=e.onDeleteClick,s=e.id,a=e.firstname,j=e.lastname,b=e.image,o=e.department,h=e.starred,O=e.active,m=Object(i.b)();return Object(d.jsx)(n.S,{onClick:t,className:"w-100 cursor-pointer ".concat(O===s?"bg-light":""),children:Object(d.jsxs)("div",{className:"d-flex align-items-center p-3 mb-1",onClick:function(){return m(Object(l.h)())},children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:b,alt:"user",className:"rounded-circle",width:"50"})}),Object(d.jsxs)("div",{className:"mx-2 flex-grow-1",children:[Object(d.jsxs)("h5",{className:"mb-0 text-truncate",style:{width:"140px"},children:[a,"\xa0",j]}),Object(d.jsx)("small",{children:o})]}),Object(d.jsxs)("div",{className:"d-flex flex-shrink-0",children:[Object(d.jsx)("i",{className:"bi bi-star-fill mx-2",onClick:c,style:{color:h?"#FFC107":"#495057"}}),Object(d.jsx)("i",{onClick:r,className:"bi bi-trash"})]})]})})},o=function(){var e=Object(i.b)();Object(s.useEffect)((function(){e(Object(j.g)())}),[e]);var t=Object(i.c)((function(e){return function(e,t,c){switch(t){case"show_all":return e.filter((function(e){return!e.deleted&&e.firstname.toLocaleLowerCase().includes(c)}));case"frequent_contact":return e.filter((function(e){return!e.deleted&&e.frequentlycontacted&&e.firstname.toLocaleLowerCase().includes(c)}));case"starred_contact":return e.filter((function(e){return!e.deleted&&e.starred&&e.firstname.toLocaleLowerCase().includes(c)}));case"engineering_department":return e.filter((function(e){return!e.deleted&&"Engineering"===e.department&&e.firstname.toLocaleLowerCase().includes(c)}));case"support_department":return e.filter((function(e){return!e.deleted&&"Support"===e.department&&e.firstname.toLocaleLowerCase().includes(c)}));case"sales_department":return e.filter((function(e){return!e.deleted&&"Sales"===e.department&&e.firstname.toLocaleLowerCase().includes(c)}));default:throw new Error("Unknown filter: ".concat(t))}}(e.contactsReducer.contacts,e.contactsReducer.currentFilter,e.contactsReducer.contactSearch)})),c=Object(i.c)((function(e){return e.contactsReducer.contactContent}));return console.log(c),Object(d.jsx)(n.R,{children:t.map((function(t){return Object(d.jsx)(b,Object(r.a)(Object(r.a)({active:c},t),{},{onContactClick:function(){return e(Object(j.c)(t.id))},onDeleteClick:function(){return e(Object(j.a)(t.id))},onStarredClick:function(){return e(Object(j.j)(t.id))}}),t.id)}))})},h=function(){var e=Object(i.c)((function(e){return e.contactsReducer.contactSearch})),t=Object(i.b)();return Object(d.jsxs)("div",{className:"p-3 border-bottom d-flex",children:[Object(d.jsx)(n.e,{close:!0,className:"d-xs-block d-xl-none me-2"}),Object(d.jsx)(n.A,{className:"flex-grow-1",children:Object(d.jsx)(n.E,{className:"form-control mb-2",id:"searchUser",name:"searchUser",type:"text",onChange:function(e){return t(Object(j.b)(e.target.value))},value:e,placeholder:"Search Contact..."})})]})},O=function(){var e=Object(i.c)((function(e){return e.contactsReducer.contacts[e.contactsReducer.contactContent-1]})),t=Object(i.c)((function(e){return e.contactsReducer.editContact})),c=Object(i.b)();return Object(d.jsx)(d.Fragment,{children:e?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"d-flex align-items-center p-3 border-bottom",children:[Object(d.jsx)("div",{className:"",children:Object(d.jsx)("img",{src:e.image,alt:"user",className:"rounded-circle",width:"46"})}),Object(d.jsxs)("div",{className:"mx-2",children:[Object(d.jsxs)("h5",{className:"mb-0",children:[e.firstname," ",e.lastname]}),Object(d.jsx)("small",{children:e.department})]})]}),Object(d.jsx)("div",{className:"p-4",children:t?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("table",{className:"table table-borderless align-middle",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{width:"150",children:Object(d.jsx)("h6",{children:"Firstname "})}),Object(d.jsx)("td",{children:Object(d.jsx)(n.E,{type:"text",name:"firstName",id:"firstName",value:e.firstname,onChange:function(t){return c(Object(j.d)(e.id,"firstname",t.target.value))}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("h6",{children:"Lastname"})}),Object(d.jsx)("td",{children:Object(d.jsx)(n.E,{type:"text",name:"lastname",id:"lastname",value:e.lastname,onChange:function(t){return c(Object(j.d)(e.id,"lastname",t.target.value))}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("h6",{children:"Company"})}),Object(d.jsx)("td",{children:Object(d.jsx)(n.E,{type:"text",name:"company",id:"company",value:e.company,onChange:function(t){return c(Object(j.d)(e.id,"company",t.target.value))}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("h6",{children:"Department"})}),Object(d.jsx)("td",{children:Object(d.jsx)(n.E,{type:"text",name:"department",id:"department",value:e.department,onChange:function(t){return c(Object(j.d)(e.id,"department",t.target.value))}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("h6",{children:"Email"})}),Object(d.jsx)("td",{children:Object(d.jsx)(n.E,{type:"email",name:"email",id:"email",value:e.email,onChange:function(t){return c(Object(j.d)(e.id,"email",t.target.value))}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("h6",{children:"Phone"})}),Object(d.jsx)("td",{children:Object(d.jsx)(n.E,{type:"text",name:"phone",id:"phone",value:e.phone,onChange:function(t){return c(Object(j.d)(e.id,"phone",t.target.value))}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("h6",{children:"Address"})}),Object(d.jsx)("td",{children:Object(d.jsx)(n.E,{type:"text",name:"address",id:"address",value:e.address,onChange:function(t){return c(Object(j.d)(e.id,"address",t.target.value))}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("h6",{children:"Note"})}),Object(d.jsx)("td",{children:Object(d.jsx)(n.E,{type:"text",name:"notes",id:"notes",value:e.notes,onChange:function(t){return c(Object(j.d)(e.id,"notes",t.target.value))}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{}),Object(d.jsx)("td",{children:Object(d.jsx)(n.e,{color:"success",onClick:function(){return c(Object(j.h)())},children:"Save Contact"})})]})]})})}):Object(d.jsx)("table",{className:"table table-borderless",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{width:"150",children:Object(d.jsx)("h6",{children:"Firstname "})}),Object(d.jsxs)("td",{children:[": ",e.firstname]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("h6",{children:"Lastname"})}),Object(d.jsxs)("td",{children:[": ",e.lastname]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("h6",{children:"Company"})}),Object(d.jsxs)("td",{children:[": ",e.company]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("h6",{children:"Department"})}),Object(d.jsxs)("td",{children:[": ",e.department]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("h6",{children:"Email"})}),Object(d.jsxs)("td",{children:[": ",e.email]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("h6",{children:"Phone"})}),Object(d.jsxs)("td",{children:[": ",e.phone]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("h6",{children:"Address"})}),Object(d.jsxs)("td",{children:[": ",e.address]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("h6",{children:"Note"})}),Object(d.jsxs)("td",{children:[": ",e.notes]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{}),Object(d.jsx)("td",{children:Object(d.jsx)(n.e,{color:"primary",onClick:function(){return c(Object(j.h)())},children:"Edit Contact"})})]})]})})})]}):"Please Select The contact"})},m=c(503),x=c(27),u=c(23),f=function(e){var t=e.click,c=Object(i.c)((function(e){return e.contactsReducer.contacts.length})),s=Object(i.b)(),l=a.a.useState({firstname:"",lastname:"",department:"",company:"",phone:"",email:"",address:"",notes:""}),b=Object(x.a)(l,2),o=b[0],h=b[1];return Object(d.jsxs)(n.A,{onSubmit:function(e){e.preventDefault(),s(Object(j.e)(c,o.firstname,o.lastname,u.a,o.department,o.company,o.phone,o.email,o.address,o.notes))},children:[Object(d.jsxs)(n.O,{children:[Object(d.jsxs)(n.eb,{children:[Object(d.jsx)(n.s,{md:6,className:"text-center",children:Object(d.jsx)("img",{src:u.a,className:"rounded-circle",alt:c,width:"100"})}),Object(d.jsxs)(n.s,{md:6,children:[Object(d.jsxs)(n.C,{children:[Object(d.jsx)(n.H,{for:"firstName",children:"First Name"}),Object(d.jsx)(n.E,{className:"form-control",type:"text",name:"firstname",id:"firstName",value:o.firstname,onChange:function(e){return h(Object(r.a)(Object(r.a)({},o),{},{firstname:e.target.value}))},required:!0})]}),Object(d.jsxs)(n.C,{children:[Object(d.jsx)(n.H,{for:"lastName",children:"Last Name"}),Object(d.jsx)(n.E,{className:"form-control",type:"text",name:"lastname",id:"lastName",value:o.lastname,onChange:function(e){return h(Object(r.a)(Object(r.a)({},o),{},{lastname:e.target.value}))}})]})]})]}),Object(d.jsxs)(n.eb,{children:[Object(d.jsx)(n.s,{md:6,children:Object(d.jsxs)(n.C,{children:[Object(d.jsx)(n.H,{for:"department",children:"Department"}),Object(d.jsx)(n.E,{className:"form-control",type:"text",name:"department",id:"department",value:o.department,onChange:function(e){return h(Object(r.a)(Object(r.a)({},o),{},{department:e.target.value}))}})]})}),Object(d.jsx)(n.s,{md:6,children:Object(d.jsxs)(n.C,{children:[Object(d.jsx)(n.H,{for:"company",children:"Company"}),Object(d.jsx)(n.E,{className:"form-control",type:"text",name:"company",id:"company",value:o.company,onChange:function(e){return h(Object(r.a)(Object(r.a)({},o),{},{company:e.target.value}))}})]})})]}),Object(d.jsxs)(n.eb,{children:[Object(d.jsx)(n.s,{md:6,children:Object(d.jsxs)(n.C,{children:[Object(d.jsx)(n.H,{for:"phone",children:"Phone"}),Object(d.jsx)(n.E,{className:"form-control",type:"phone",name:"phone",id:"phone",value:o.phone,onChange:function(e){return h(Object(r.a)(Object(r.a)({},o),{},{phone:e.target.value}))}})]})}),Object(d.jsx)(n.s,{md:6,children:Object(d.jsxs)(n.C,{children:[Object(d.jsx)(n.H,{for:"email",children:"Email"}),Object(d.jsx)(n.E,{className:"form-control",type:"email",name:"email",id:"email",value:o.email,onChange:function(e){return h(Object(r.a)(Object(r.a)({},o),{},{email:e.target.value}))}})]})})]}),Object(d.jsxs)(n.eb,{children:[Object(d.jsx)(n.s,{md:6,children:Object(d.jsxs)(n.C,{children:[Object(d.jsx)(n.H,{for:"address",children:"Address"}),Object(d.jsx)(n.E,{className:"form-control",type:"text",name:"address",id:"address",value:o.address,onChange:function(e){return h(Object(r.a)(Object(r.a)({},o),{},{address:e.target.value}))}})]})}),Object(d.jsx)(n.s,{md:6,children:Object(d.jsxs)(n.C,{children:[Object(d.jsx)(n.H,{for:"notes",children:"Notes"}),Object(d.jsx)(n.E,{className:"form-control",type:"textarea",name:"notes",id:"notes",value:o.notes,onChange:function(e){return h(Object(r.a)(Object(r.a)({},o),{},{notes:e.target.value}))}})]})})]})]}),Object(d.jsx)(n.P,{children:Object(d.jsx)(n.e,{color:"primary",type:"submit",onClick:t,disabled:0===o.firstname.length||0===o.notes.length,children:"Add Contact"})})]})},p=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.contactsReducer.currentFilter})),c=a.a.useState(!1),r=Object(x.a)(c,2),s=r[0],l=r[1],b=function(){l(!s)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"p-3 border-bottom",children:Object(d.jsx)(n.e,{color:"danger",block:!0,onClick:b,children:"Add New Contact"})}),Object(d.jsxs)(n.I,{flush:!0,children:[Object(d.jsx)("h6",{className:"px-3 pt-3",children:"Filter "}),Object(d.jsxs)(n.J,{href:"#",tag:"a",className:"show_all"===t?"bg-light py-3 border-0":"py-3 border-0",onClick:function(){return e(Object(j.i)("show_all"))},children:[Object(d.jsx)("i",{className:"bi bi-people mx-1"})," All"]}),Object(d.jsxs)(n.J,{href:"#",tag:"a",className:"frequent_contact"===t?"bg-light py-3 border-0":"py-3 border-0",onClick:function(){return e(Object(j.i)("frequent_contact"))},children:[Object(d.jsx)("i",{className:"bi bi-bezier mx-1"})," Frequent"]}),Object(d.jsxs)(n.J,{href:"#",tag:"a",className:"starred_contact"===t?"bg-light py-3 border-0":"py-3 border-0",onClick:function(){return e(Object(j.i)("starred_contact"))},children:[Object(d.jsx)("i",{className:"bi bi-star mx-1"})," Starred"]}),Object(d.jsx)("div",{className:"border-bottom py-2 mb-2"}),Object(d.jsx)("h6",{className:"px-3 pt-3",children:"Filter By Categories"}),Object(d.jsxs)(n.J,{href:"#",tag:"a",className:"engineering_department"===t?"bg-light py-3 border-0":"py-3 border-0",onClick:function(){return e(Object(j.i)("engineering_department"))},children:[Object(d.jsx)("i",{className:"bi bi-bookmark-star mx-1"})," Engineering"]}),Object(d.jsxs)(n.J,{href:"#",tag:"a",className:"support_department"===t?"bg-light py-3 border-0":"py-3 border-0",onClick:function(){return e(Object(j.i)("support_department"))},children:[Object(d.jsx)("i",{className:"bi bi-bookmark-star mx-1"})," Support"]}),Object(d.jsxs)(n.J,{href:"#",tag:"a",className:"sales_department"===t?"bg-light py-3 border-0":"py-3 border-0",onClick:function(){return e(Object(j.i)("sales_department"))},children:[Object(d.jsx)("i",{className:"bi bi-bookmark-star mx-1"})," Sales"]})]}),Object(d.jsxs)(n.N,{isOpen:s,toggle:b,size:"md",children:[Object(d.jsx)(n.Q,{toggle:b,children:"Add Contact"}),Object(d.jsx)(f,{click:b})]})]})};t.default=function(){return Object(d.jsx)(n.i,{children:Object(d.jsx)(n.j,{children:Object(d.jsx)(m.a,{leftContent:Object(d.jsx)(p,{}),middleContent:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(o,{})]}),rightContent:Object(d.jsx)(O,{})})})})}},503:function(e,t,c){"use strict";var n=c(27),r=c(1),s=c.n(r),a=c(39),i=c(63),j=c(299),l=c(66),d=c(3);t.a=function(e){var t=e.leftContent,c=e.middleContent,r=e.rightContent,b=s.a.useState(!1),o=Object(n.a)(b,2),h=o[0],O=o[1],m=Object(a.b)(),x=Object(a.c)((function(e){return e.customizer.isInnerRightPart}));return Object(d.jsxs)("div",{className:"d-lg-flex d-md-block border position-relative leftRightBox threeColumn",children:[Object(d.jsxs)("div",{className:"leftPart bg-white border-end ".concat(h?"showLeftPart":""),children:[Object(d.jsx)(i.e,{className:"d-xl-none openCloseBtn",color:"danger",children:Object(d.jsx)("i",{className:"bi ".concat(h?"bi-x":"bi-list"),onClick:function(){O(!h)}})}),Object(d.jsx)(j.a,{style:{height:"calc(100vh - 200px)"},children:t})]}),Object(d.jsx)("div",{className:"middlePart flex-shrink-0",children:Object(d.jsx)(j.a,{style:{height:"calc(100vh - 200px)"},children:c})}),Object(d.jsxs)("div",{className:"rightPart bg-white ".concat(x?"showRightPart":""),children:[Object(d.jsx)(i.e,{close:!0,onClick:function(){return m(Object(l.h)())},className:"position-absolute closeRbtn d-lg-none"}),Object(d.jsx)(j.a,{style:{height:"calc(100vh - 200px)"},children:r}),h?Object(d.jsx)("div",{className:"contentOverlay"}):""]})]})}}}]);
//# sourceMappingURL=166.f2287d79.chunk.js.map