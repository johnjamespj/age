(this.webpackJsonpage=this.webpackJsonpage||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),o=n(4),u=n.n(o),l=n(2);n(10),n(11);function s(e,t){var n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),r=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return Math.floor((r-n)/864e5/7)}function i(e,t){var n="cell";return e<t&&(n+=" selected"),n}function j(e){var t=e.dob,n=e.averageAge,a=new Date(t.getFullYear()+n,0,1),c=s(t,a),o=s(t,new Date),u=new Array(c).fill(0).map((function(e,t){return t}));return Object(r.jsx)("div",{className:"container",children:u.map((function(e){return Object(r.jsx)("div",{className:i(e,o)},e)}))})}function b(e){var t=e.onReturn,n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],u=c[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Enter your Date of Birth"}),Object(r.jsx)("input",{type:"date",value:o,onChange:function(e){return u(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(localStorage.setItem("dob",o),t())}})]})}var g=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(new Date),u=Object(l.a)(o,2),s=u[0],i=u[1];return Object(a.useEffect)((function(){if(window.localStorage){var e=localStorage.getItem("dob");null!==e?(i(new Date(Date.parse(e.replace("-","/")))),c(!1)):c(!0)}else alert("Grow up! use a better browser!")}),[s,n]),Object(r.jsx)("div",{className:"App",children:null===n?"":n?Object(r.jsx)(b,{onReturn:function(){return c(!1)}}):Object(r.jsx)(j,{dob:s,averageAge:75})})};u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.00a3d388.chunk.js.map