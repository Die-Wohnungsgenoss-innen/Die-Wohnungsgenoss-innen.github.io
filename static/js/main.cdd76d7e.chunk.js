(this.webpackJsonpdwg=this.webpackJsonpdwg||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(11),s=n.n(a),i=(n(35),n(22)),o=n.n(i),u=n(23),l=n(18),j=(n(37),n(58)),p=n(63),d=n(59),b=n(60),f=n(61),h=n(62),O=n(3);function g(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function x(e,t){return"desc"===e?function(e,n){return g(e,n,t)}:function(e,n){return-g(e,n,t)}}function m(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n.map((function(e){return e[0]}))}var y=function(e){var t=e.apartments,n=e.style,c=Object(r.useState)("address"),a=Object(l.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)("asc"),u=Object(l.a)(o,2),g=u[0],y=u[1],v=function(e){return Object(O.jsxs)(j.a,{sortDirection:s===e.property&&g,align:e.align||"center",children:[e.sortable&&Object(O.jsx)(p.a,{active:s===e.property,direction:s===e.property?g:"asc",onClick:function(t){return n=e.property,console.log(n),y(s===n&&"asc"===g?"desc":"asc"),void i(n);var n}}),e.name]},e.property)};return Object(O.jsxs)(d.a,{style:n,children:[Object(O.jsx)(b.a,{children:Object(O.jsx)(f.a,{children:[{name:"Adresse",property:"address",align:"left",sortable:!0},{name:"Gr\xf6\xdfe",property:"size",sortable:!0},{name:"R\xe4ume",property:"rooms",sortable:!0},{name:"Miete",property:"rent"},{name:"Eigenmittel",property:"deposit"},{name:"Anbieter",property:"source",sortable:!0}].map((function(e){return v(e)}))})}),Object(O.jsx)(h.a,{children:m(t,x(g,s)).map((function(e,t){return Object(O.jsxs)(f.a,{children:[Object(O.jsx)(j.a,{align:"left",children:Object(O.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.address})}),Object(O.jsx)(j.a,{align:"center",children:e.size}),Object(O.jsx)(j.a,{align:"center",children:e.rooms}),Object(O.jsx)(j.a,{align:"center",children:e.rent}),Object(O.jsx)(j.a,{align:"center",children:e.deposit}),Object(O.jsx)(j.a,{align:"center",children:e.source})]},t)}))})]})},v=c.a.useEffect,w=c.a.useState;var k=function(){var e=w([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return v((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("../data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("div",{className:"header",children:Object(O.jsx)("h1",{children:"\u262d die-wohnungsgenoss-innen"})}),Object(O.jsx)(y,{style:{width:"70%",height:"800px",background:"rgba(255,255,255, 0.8)"},apartments:n})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),S()}},[[43,1,2]]]);
//# sourceMappingURL=main.cdd76d7e.chunk.js.map