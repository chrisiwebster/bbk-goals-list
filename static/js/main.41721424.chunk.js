(this["webpackJsonpgoal-list"]=this["webpackJsonpgoal-list"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(7),l=n.n(i),s=(n(12),n(3)),o=n(4),u=n(20),r=(n(13),n(14),n(0)),j=function(e){var t=e.icon,n=e.onClick,c=e.type,a=e.className;return Object(r.jsx)("button",{type:c||"button",onClick:n,className:a,children:t})},b=(n(16),function(e){var t=e.onSubmit,n=e.value,c=e.onChange;return Object(r.jsx)("div",{className:"goals-form",children:Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsx)("input",{type:"text",value:n,onChange:c}),Object(r.jsx)(j,{type:"submit",icon:Object(r.jsx)("i",{class:"fas fa-plus"}),className:"add"})]})})}),O=(n(17),function(e){var t=e.title,n=e.onClick;return Object(r.jsxs)("div",{className:"goal-item",children:[Object(r.jsx)("input",{type:"checkbox",id:t}),Object(r.jsx)("label",{htmlFor:t,children:t}),Object(r.jsx)(j,{icon:Object(r.jsx)("i",{class:"fas fa-trash"}),onClick:n,className:"delete"})]})}),d=function(e){var t=e.goals,n=e.onDeleteClick;return Object(r.jsx)("div",{className:"goals-list",children:t.map((function(e){return Object(r.jsx)(O,{title:e.title,onClick:function(){return n(e.id)}},e.id)}))})},f=function(e){var t=e.title,n=e.goalValue,c=e.handleOnChange,a=e.handleOnSubmit,i=e.goals,l=e.onDeleteClick;return Object(r.jsxs)("div",{className:"goals",children:[Object(r.jsx)("h2",{children:"".concat(t," goals")}),Object(r.jsx)(b,{value:n,onChange:c,onSubmit:a}),Object(r.jsx)(d,{goals:i,onDeleteClick:l})]})},h=[],g=[],x=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(h),l=Object(o.a)(i,2),j=l[0],b=l[1],O=Object(c.useState)(""),d=Object(o.a)(O,2),x=d[0],v=d[1],m=Object(c.useState)(g),p=Object(o.a)(m,2),C=p[0],k=p[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Goals App"})}),Object(r.jsxs)("div",{className:"goals-wrap",children:[Object(r.jsx)(f,{title:"Year",goals:j,goalValue:n,handleOnChange:function(e){a(e.target.value)},handleOnSubmit:function(e){e.preventDefault();var t={id:Object(u.a)(),title:n};b((function(e){return[].concat(Object(s.a)(e),[t])}))},onDeleteClick:function(e){var t=Object(s.a)(j).filter((function(t){return t.id!==e}));b(t)}}),Object(r.jsx)(f,{title:"Month",goals:C,goalValue:x,handleOnChange:function(e){v(e.target.value)},handleOnSubmit:function(e){e.preventDefault();var t={id:Object(u.a)(),title:x};k((function(e){return[].concat(Object(s.a)(e),[t])}))},onDeleteClick:function(e){var t=Object(s.a)(C).filter((function(t){return t.id!==e}));k(t)}})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),i(e),l(e)}))};l.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),v()}],[[18,1,2]]]);
//# sourceMappingURL=main.41721424.chunk.js.map