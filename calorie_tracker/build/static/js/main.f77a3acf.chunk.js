(this.webpackJsonpcalorie_tracker=this.webpackJsonpcalorie_tracker||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(6),i=n.n(a),s=n(7),u=n(2),r=n(0),l=function(e){var t=e.id,n=e.title,a=e.amount,i=e.setItem,s=e.item,l=Object(c.useState)(!1),o=Object(u.a)(l,2),j=o[0],b=o[1],m=Object(c.useState)(n),d=Object(u.a)(m,2),O=d[0],h=d[1],x=Object(c.useState)(a),f=Object(u.a)(x,2),v=f[0],p=f[1];return Object(r.jsxs)("div",{className:"content",children:[j?Object(r.jsx)("input",{name:"title",value:O,onChange:function(e){h(e.target.value)},className:"changes",type:"text"}):Object(r.jsx)("h3",{children:n}),j?Object(r.jsx)("input",{name:"amount",value:v,onChange:function(e){p(e.target.value)},className:"changes",type:"number"}):Object(r.jsxs)("h4",{children:["You have consumed ",a," Calories"]}),j?Object(r.jsx)("button",{onClick:function(){var e=s.filter((function(e,n){return n===t&&(e.title=O,e.amount=v),e}));i(e),b(!1)},className:"save",children:"Save"}):Object(r.jsx)("button",{onClick:function(){b(!0)},className:"edit",children:"Edit"}),Object(r.jsx)("button",{onClick:function(){console.log(t);var e=s.filter((function(e){return s.indexOf(e)!==t}));i(e)},className:"dlt",children:"Delete"})]})},o=function(e){var t=e.item,n=e.setItem,c=t.map((function(e,c){return Object(r.jsx)(l,{id:c,title:e.title,amount:e.amount,setItem:n,item:t},c)}));return Object(r.jsx)("div",{className:"card-added",children:c})},j=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),l=Object(u.a)(i,2),j=l[0],b=l[1],m=Object(c.useState)([]),d=Object(u.a)(m,2),O=d[0],h=d[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"Text",placeholder:"Item Name",className:"input-text",onChange:function(e){a(e.target.value)},value:n}),Object(r.jsx)("input",{type:"number",placeholder:"Calorie Amount",className:"input-text",onChange:function(e){b(e.target.value)},value:j}),Object(r.jsx)("button",{className:"btn-add",onClick:function(){h((function(e){return[].concat(Object(s.a)(e),[{title:n,amount:j}])})),a(""),b("")},children:"Add Item"}),0===O.length&&Object(r.jsx)("h2",{style:{textAlign:"center"},children:"Start Adding item"}),Object(r.jsx)(o,{item:O,setItem:h})]})},b=function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(j,{})})};n(13);i.a.render(Object(r.jsx)(b,{}),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f77a3acf.chunk.js.map