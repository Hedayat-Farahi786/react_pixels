(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),o=n.n(r),a=n(13),s=n.n(a),l=(n(21),n(3)),i=n(7),u={on:!1,color:"#000000",border:"1px solid black"},j=Array.from({length:960},(function(){return u}));var b=function(e){var t=e.cellBackground,n=e.history,o=e.setCellBackground,a=Object(r.useState)(j),s=Object(l.a)(a,2),b=s[0],d=s[1],f=Object(r.useState)([]),O=Object(l.a)(f,2),v=O[0],h=O[1],p=function(e,c){return function(r){r.preventDefault(),d(b.map((function(r,o){return o===e?c||(h([].concat(Object(i.a)(v),[n])),{on:!0,color:t,border:"none"}):r})))}},x=Object(i.a)(new Set(v)).slice(-10);return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"historyDiv",children:x.map((function(e,t){return Object(c.jsx)("div",{onClick:function(){return o(e)},className:"history",style:{backgroundColor:e}},t)}))}),Object(c.jsx)("div",{className:"grid",children:b.map((function(e,r){return Object(c.jsx)("div",{style:{backgroundColor:e.on?e.color:"#ffffff",border:e.border},className:"cell",onClick:p(r),onPointerEnter:function(e){e.altKey&&d(b.map((function(e,c){return c===r?(h([].concat(Object(i.a)(v),[n])),{on:!0,color:t,border:"none"}):e})))},onContextMenu:p(r,u)},r)}))})]})},d=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)("#ffffff"),s=Object(l.a)(a,2),i=s[0],u=s[1],j=Object(r.useState)(""),d=Object(l.a)(j,2),f=d[0],O=d[1];return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsxs)("div",{className:"inputs",children:[Object(c.jsx)("input",{className:"colorPicker",type:"color",onChange:function(e){o(e.target.value),u(e.target.value)},value:i}),Object(c.jsx)("input",{className:"textColor",type:"text",onChange:function(e){O(e.target.value)},value:f}),Object(c.jsx)("button",{onClick:function(){o(f),u(f)},children:"Add"})]}),Object(c.jsx)(b,{cellBackground:i,setCellBackground:u,history:n})]})},f=n(15);s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(f.a,{children:Object(c.jsx)(d,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.83d38826.chunk.js.map