(this.webpackJsonplockdown=this.webpackJsonplockdown||[]).push([[0],{26:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),i=n.n(r),o=n(8),s=n.n(o),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var d=n(9),u=function(){return null},j=n(10),f=n(38),h=n(37),v=n(36),b=n(34),O=n(35),m=n(18),p=(n(26),function(e){var t,n,i,o=e.dataSet,s=e.profile,c=e.setProfile,l=Object(r.useState)(!o),u=Object(d.a)(l,2),p=u[0],x=u[1],g=Object(r.useState)(s.name),w=Object(d.a)(g,2),S=w[0],k=w[1],y=Object(r.useState)(s.addresses),C=Object(d.a)(y,2),N=C[0],I=C[1];Object(r.useEffect)((function(){localStorage.setItem("profile",JSON.stringify(s))}),[s]);var W=function(){var e=Object(j.a)(N);e.push({address:"",selected:!1}),I(e)},J=function(e){var t=Object(j.a)(N);t.splice(e,1),I(t)};return Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)(v.a,{show:p,onHide:function(){k(s.name),I(s.addresses),x(!1)},children:[Object(a.jsx)(v.a.Header,{closeButton:!!o,children:Object(a.jsx)(v.a.Title,{children:"\u03a3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1"})}),Object(a.jsx)(v.a.Body,{children:Object(a.jsxs)(h.a,{children:[Object(a.jsx)(h.a.Group,{children:Object(a.jsx)(h.a.Control,{type:"text",placeholder:"\u039f\u03bd\u03bf\u03bc\u03b1\u03c4\u03b5\u03c0\u03ce\u03bd\u03c5\u03bc\u03bf",defaultValue:s.name,name:"name",autoComplete:"name",onChange:function(e){return k(e.target.value)}})}),Object(a.jsx)(h.a.Group,{children:N.map((function(e,t){return function(e,t){return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(h.a.Control,{type:"text",placeholder:"\u039f\u03b4\u03cc\u03c2 \u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2, \u03a0\u03b5\u03c1\u03b9\u03bf\u03c7\u03ae",defaultValue:""!==e.address?e.address:"",name:"address",autoComplete:"street-address",onChange:function(e){var n=Object(j.a)(N);n[t].address=e.target.value,I(n)}}),Object(a.jsx)(f.a,{variant:"third",onClick:function(){return J(t)},children:"\u0391\u03c6\u03b1\u03af\u03c1\u03b5\u03c3\u03b7 \u0394\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7\u03c2"})]},t)}(e,t)}))}),Object(a.jsx)(h.a.Group,{children:Object(a.jsx)(f.a,{variant:"secondary",onClick:function(){return W()},children:"\u039d\u03ad\u03b1 \u0394\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7"})})]})}),Object(a.jsx)(v.a.Footer,{children:Object(a.jsx)(f.a,{type:"submit",disabled:""===S||""===(null===(t=N[0])||void 0===t?void 0:t.address),variant:"primary",onClick:function(){c({name:S,addresses:N}),x(!1)},children:"\u0391\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7"})})]}),Object(a.jsx)(b.a,{fluid:!0,children:Object(a.jsx)(O.a,{children:Object(a.jsx)(m.a,{children:o&&Object(a.jsxs)("div",{className:"profile__data",onClick:function(){return x(!0)},children:[Object(a.jsxs)("div",{className:"profile__data-title",children:[Object(a.jsx)("i",{className:"material-icons",children:"edit"}),"\u03a3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1"]}),Object(a.jsxs)("div",{className:"profile__data-set",children:[s.name," ",(null===(n=s.addresses.filter((function(e){return e.selected}))[0])||void 0===n?void 0:n.address)||(null===(i=s.addresses[0])||void 0===i?void 0:i.address)," "]})]})})})})]})}),x=[{id:1,title:"\u03a6\u03b1\u03c1\u03bc\u03b1\u03ba\u03b5\u03af\u03bf / \u0393\u03b9\u03b1\u03c4\u03c1\u03cc\u03c2"},{id:2,title:"\u0395\u03af\u03b4\u03b7 \u03a0\u03c1\u03ce\u03c4\u03b7\u03c2 \u0391\u03bd\u03ac\u03b3\u03ba\u03b7\u03c2"},{id:3,title:"\u03a4\u03c1\u03ac\u03c0\u03b5\u03b6\u03b1 / \u0394\u03b7\u03bc\u03cc\u03c3\u03b9\u03b1 \u03a5\u03c0\u03b7\u03c1\u03b5\u03c3\u03af\u03b1"},{id:4,title:"\u03a0\u03b1\u03c1\u03bf\u03c7\u03ae \u0392\u03bf\u03ae\u03b8\u03b5\u03b9\u03b1\u03c2 / \u03a3\u03c5\u03bd\u03bf\u03b4\u03b5\u03af\u03b1 \u039c\u03b1\u03b8\u03b7\u03c4\u03ce\u03bd"},{id:5,title:"\u0394\u03b9\u03b1\u03b6\u03b5\u03c5\u03b3\u03bc\u03ad\u03bd\u03bf\u03b9 \u0393\u03bf\u03bd\u03b5\u03af\u03c2 / \u039a\u03b7\u03b4\u03b5\u03af\u03b1"},{id:6,title:"\u0386\u03c3\u03ba\u03b7\u03c3\u03b7 / \u039a\u03b1\u03c4\u03bf\u03b9\u03ba\u03af\u03b4\u03b9\u03bf"}],g=(new Date("12/1/2020"),function(e){var t,n,r=e.dataSet,i=e.profile,o=(null===(t=i.addresses.filter((function(e){return e.selected}))[0])||void 0===t?void 0:t.address)||(null===(n=i.addresses[0])||void 0===n?void 0:n.address);return Object(a.jsx)("section",{className:"actions",children:Object(a.jsx)(b.a,{fluid:!0,children:x.map((function(e){return Object(a.jsx)(O.a,{children:Object(a.jsx)(m.a,{children:Object(a.jsxs)(f.a,{disabled:!r,href:"sms:".concat("13033","?&body=").concat(e.id," ").concat(i.name," ").concat(o),children:[e.title," "]})})},e.id)}))})})}),w=function(){!function(){var e=localStorage.getItem("address"),t=localStorage.getItem("name");if(e||t){var n={name:t,addresses:[{address:e,selected:!0}]};localStorage.setItem("profile",JSON.stringify(n)),localStorage.removeItem("address"),localStorage.removeItem("name")}}()},S=(n(30),function(e){var t,n=e.profile,r=e.setProfile;return Object(a.jsx)(b.a,{fluid:!0,children:Object(a.jsx)(O.a,{children:Object(a.jsx)(m.a,{children:Object(a.jsxs)(h.a.Group,{children:[Object(a.jsx)(h.a.Label,{children:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u0394\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7"}),Object(a.jsx)(h.a.Control,{as:"select",size:"sm",onChange:function(e){return function(e){var t=Object(j.a)(n.addresses);t.map((function(e){return e.selected=!1})),t[e].selected=!0,r({name:n.name,addresses:t}),localStorage.setItem("profile",JSON.stringify(n))}(e.target.value)},children:null===(t=n.addresses)||void 0===t?void 0:t.map((function(e,t){return Object(a.jsx)("option",{defaultValue:e.selected,value:t,children:e.address},t)}))})]})})})})}),k=function(){var e,t,n;w();var i=JSON.parse(localStorage.getItem("profile")),o=null!==(e=null===i||void 0===i?void 0:i.name)&&void 0!==e?e:"",s=null!==(t=null===i||void 0===i?void 0:i.addresses)&&void 0!==t?t:[],c=Object(r.useState)({name:o,addresses:s}),l=Object(d.a)(c,2),j=l[0],f=l[1],h=""!==j.name&&""!==(null===j||void 0===j||null===(n=j.addresses.filter((function(e){return e.selected}))[0])||void 0===n?void 0:n.address);return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{}),Object(a.jsx)(p,{dataSet:h,profile:j,setProfile:f}),Object(a.jsx)(S,{profile:j,setProfile:f}),Object(a.jsx)(g,{dataSet:h,profile:j})]})};n(31);s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/lockdown",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/lockdown","/service-worker.js");c?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):l(t,e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.8dec51cc.chunk.js.map