(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[26],{1247:function(t,e,a){},1251:function(t,e,a){"use strict";var n=a(12),r=a(0),c=a.n(r),i=a(15),o=a(1227),u=a(279),l=a(1283),d=a(1189),s=a(1284),f=a(1285),m=a(1286),p=a(1287),E=a(1288);a(1247);e.a=Object(u.c)(Object(i.b)(null,null)((function(t){var e=t.intl,a=t.dataHeader,r=void 0===a?[]:a,i=t.loading,u=void 0!==i&&i,v=t.err,b=void 0!==v&&v,g=t.children,L=t.hecto,A=void 0===L?1:L,h=t.handleFilter,O=t.dataSecond,S=void 0===O?[]:O,j=c.a.useState(r.filter((function(t){return!0===t.filter}))),k=Object(n.a)(j,1)[0];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4"},c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{htmlFor:"LABEL.SEARCH",className:"col-sm-3 col-form-label"},c.a.createElement(o.a,{id:"LABEL.SEARCH"}),":"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("input",{type:"text",className:"form-control",id:"LABEL.SEARCH",placeholder:e.formatMessage({id:"LABEL.SEARCH"}),onChange:function(t){for(var e=[],a=0;a<S.length;a++)for(var n=0;n<k.length;n++){if(S[a][k[n].name].toString().toLowerCase().includes(t.target.value.toLowerCase())){e.push(S[a]);break}}"function"===typeof h&&h(e)}}))))),c.a.createElement(l.a,{component:d.a},c.a.createElement(s.a,{className:"hecto-"+A},c.a.createElement(f.a,null,c.a.createElement(m.a,null,r.map((function(t,e){return c.a.createElement(p.a,{className:"bg-primary text-uppercase",key:e.toString()},c.a.createElement("span",null,c.a.createElement(o.a,{id:t.title})))})))),c.a.createElement(E.a,null,g)),c.a.createElement("div",{className:"table-loading-data"},c.a.createElement("div",{className:"text-center font-weight-bold py-5"},c.a.createElement("div",{className:"table-loading-data-potition"},u&&c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-spinner fa-pulse text-dark mr-1"}),c.a.createElement(o.a,{id:"LABEL.TABLE.WAITING_DATA"})),b&&c.a.createElement("span",{className:"text-danger"},c.a.createElement("i",{className:"far fa-frown text-danger mr-1"}),c.a.createElement(o.a,{id:"LABEL.ERROR_REQUEST"}))))))))})))},1255:function(t,e,a){"use strict";a.d(e,"G",(function(){return c})),a.d(e,"n",(function(){return i})),a.d(e,"I",(function(){return o})),a.d(e,"D",(function(){return u})),a.d(e,"f",(function(){return l})),a.d(e,"h",(function(){return d})),a.d(e,"x",(function(){return s})),a.d(e,"z",(function(){return f})),a.d(e,"s",(function(){return m})),a.d(e,"t",(function(){return p})),a.d(e,"E",(function(){return E})),a.d(e,"e",(function(){return v})),a.d(e,"r",(function(){return b})),a.d(e,"w",(function(){return g})),a.d(e,"m",(function(){return L})),a.d(e,"J",(function(){return A})),a.d(e,"B",(function(){return h})),a.d(e,"k",(function(){return O})),a.d(e,"v",(function(){return S})),a.d(e,"F",(function(){return j})),a.d(e,"H",(function(){return k})),a.d(e,"K",(function(){return N})),a.d(e,"q",(function(){return B})),a.d(e,"a",(function(){return w})),a.d(e,"o",(function(){return y})),a.d(e,"g",(function(){return C})),a.d(e,"b",(function(){return D})),a.d(e,"i",(function(){return T})),a.d(e,"u",(function(){return _})),a.d(e,"A",(function(){return R})),a.d(e,"j",(function(){return x})),a.d(e,"y",(function(){return H})),a.d(e,"p",(function(){return M})),a.d(e,"c",(function(){return F})),a.d(e,"l",(function(){return I})),a.d(e,"d",(function(){return U})),a.d(e,"C",(function(){return P}));var n=a(57),r=a.n(n);function c(t){return r.a.get("/api/v1/dokter".concat(t?"?"+t:""))}function i(t){return r.a.delete("/api/v1/dokter/".concat(t))}function o(t){return r.a.get("/api/v1/poli".concat(t?"?"+t:""))}function u(){return r.a.get("/api/v1/poli")}function l(t){return r.a.post("/api/v1/dokter",t)}function d(t){return r.a.post("/api/v1/poli",t)}function s(t){return r.a.get("/api/v1/dokter/".concat(t))}function f(t){return r.a.get("/api/v1/poli/".concat(t))}function m(t,e){return r.a.post("/api/v1/dokter/".concat(t),e)}function p(t,e){return r.a.put("/api/v1/poli/".concat(t),e)}function E(t){return r.a.get("/api/v1/article".concat(t?"?"+t:""))}function v(t){return r.a.post("/api/v1/article",t)}function b(t,e){return r.a.post("/api/v1/article/".concat(t),e)}function g(t){return r.a.get("/api/v1/article/".concat(t))}function L(t){return r.a.delete("/api/v1/article/".concat(t))}function A(t){return r.a.get("/api/v1/layanan".concat(t?"?"+t:""))}function h(t){return r.a.get("/api/v1/layanan/".concat(t))}function O(t){return r.a.post("/api/v1/layanan",t)}function S(t,e){return r.a.put("/api/v1/layanan/".concat(t),e)}function j(t){return r.a.get("/api/v1/report/dailyincome".concat(t?"?"+t:""))}function k(){return r.a.get("/api/v1/handover")}function N(t){return r.a.put("/api/v1/handover/".concat(t))}function B(t){return r.a.get("/api/v1/handover/".concat(t))}function w(){return r.a.get("/api/v1/medicalkind")}function y(t){return r.a.delete("/api/v1/medicalkind/".concat(t))}function C(t){return r.a.post("/api/v1/medicalkind",t)}function D(t){return r.a.get("/api/v1/formkind".concat(t?"?"+t:""))}function T(t){return r.a.post("/api/v1/formkind",t)}function _(t,e){return r.a.put("/api/v1/formkind/".concat(t),e)}function R(t){return r.a.get("/api/v1/formkindid/".concat(t))}function x(t){return r.a.post("/api/v1/medicalform",t)}function H(t){return r.a.get("/api/v1/medicalform/".concat(t))}function M(t){return r.a.delete("/api/v1/medicalform/".concat(t))}function F(t){return r.a.get("/api/v1/staff".concat(t?"?"+t:""))}function I(t,e){return r.a.post("/api/v1/staff/".concat(t),e)}function U(t){return r.a.put("/api/v1/staff/ena/".concat(t))}function P(t){return r.a.put("/api/v1/staff/dis/".concat(t))}},1340:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(99),i=a(12),o=a(15),u=a(1227),l=a(279),d=a(371),s=a(48),f=a(30),m=(a(26),a(13),a(1255)),p=(a(34),a(206)),E=(a(1252),a(92)),v=a(1243),b=a(1220),g=a(1221),L=a(1286),A=a(1287),h=a(1223),O=a(1251),S=[{title:"LABEL.STAFF",name:"staff_name",filter:!0},{title:"LABEL.PRODUCT_SALE",name:"closing_amt",filter:!0},{title:"LABEL.DATE",name:"closing_date",filter:!0},{title:"LABEL.TABLE_HEADER.ACTION",name:"action",filter:!1}],j=[{title:"LABEL.TRANSACTION_CODE",name:"trans_kode",filter:!0},{title:"LABEL.PRODUCT_SALE",name:"total",filter:!0}];var k=Object(l.c)(Object(o.b)(null,E.a)((function(t){var e=t.intl,a=(Object(c.g)(),Object(f.i)()),l=(Object(o.e)((function(t){return t.clientMqtt.client}),o.c),Object(n.useState)(!1)),E=Object(i.a)(l,2),k=E[0],N=E[1],B=Object(n.useState)([]),w=Object(i.a)(B,2),y=w[0],C=w[1],D=Object(n.useState)([]),T=Object(i.a)(D,2),_=T[0],R=T[1],x=Object(n.useState)(!1),H=Object(i.a)(x,2),M=H[0],F=H[1],I=Object(n.useState)([]),U=Object(i.a)(I,2),P=U[0],Y=U[1],q=Object(n.useState)([]),J=Object(i.a)(q,2),K=J[0],W=J[1];Object(n.useLayoutEffect)((function(){a.setBreadcrumbs([{pathname:"/administrator/dashboard",title:e.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/administrator/handling-page/need-closing",title:e.formatMessage({id:"LABEL.HANDOVER"})}]),a.setTitle(e.formatMessage({id:"LABEL.HANDOVER"}))}),[]);var $=function(){N(!0),Object(m.H)().then((function(t){N(!1),t.data.data.forEach((function(t){t.staff_name=t.staff.nama})),C(t.data.data),R(t.data.data)})).catch((function(t){var e,a;N(!1),s.a.showSnackbar((null===(e=t.response)||void 0===e?void 0:e.data.messages)||(null===(a=t.response)||void 0===a?void 0:a.data.message))}))};return Object(n.useEffect)($,[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{open:M,maxWidth:"md",fullWidth:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(b.a,null,r.a.createElement(u.a,{id:"LABEL.DETAIL"})),r.a.createElement(g.a,null,r.a.createElement(O.a,{dataHeader:j,dataSecond:K,handleFilter:function(t){Y(t)},loading:!1,hecto:5},P.map((function(t,e){return r.a.createElement(L.a,{key:e.toString()},r.a.createElement(A.a,null,t.trans_kode),r.a.createElement(A.a,null,Object(p.a)(t.total)))})))),r.a.createElement(h.a,null,r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){F(!1)}},r.a.createElement(u.a,{id:"LABEL.OK"})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(d.b,null,r.a.createElement(d.c,null,r.a.createElement(O.a,{dataHeader:S,dataSecond:_,handleFilter:function(t){C(t)},loading:k,hecto:10},y.map((function(t,a){return r.a.createElement(L.a,{key:a.toString()},r.a.createElement(A.a,null,t.staff_name),r.a.createElement(A.a,null,Object(p.a)(t.closing_amt)),r.a.createElement(A.a,null,window.moment(new Date(t.closing_date)).format("DD MMM YYYY")),r.a.createElement(A.a,null,r.a.createElement("button",{type:"button",className:"btn btn-sm btn-primary mx-1",onClick:function(){var e;e=t.id,Object(m.q)(e).then((function(t){F(!0),Y(t.data.data),W(t.data.data)})).catch((function(t){var e,a;s.a.showSnackbar((null===(e=t.response)||void 0===e?void 0:e.data.messages)||(null===(a=t.response)||void 0===a?void 0:a.data.message))}))}},r.a.createElement(u.a,{id:"LABEL.DETAIL"})),1===t.status&&r.a.createElement("button",{type:"button",className:"btn btn-sm btn-primary mx-1",onClick:function(){!function(t,a){window.$("#loading-".concat(a)).addClass("fa-spin"),Object(m.K)(t).then((function(t){window.$("#loading-".concat(a)).removeClass("fa-spin"),$(),s.a.showSnackbar(e.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success")})).catch((function(t){var e,n;window.$("#loading-".concat(a)).removeClass("fa-spin"),s.a.showSnackbar((null===(e=t.response)||void 0===e?void 0:e.data.messages)||(null===(n=t.response)||void 0===n?void 0:n.data.message))}))}(t.id,a)}},r.a.createElement("i",{className:"fas fa-sync px-1",id:"loading-".concat(a)}),r.a.createElement(u.a,{id:"LABEL.PROCESS"}))))}))))))))})));e.default=Object(l.c)(Object(o.b)(null,null)((function(t){return r.a.createElement(c.d,null,r.a.createElement(c.a,{exact:!0,from:"/administrator/handling-page",to:"/administrator/dashboard"}),r.a.createElement(c.b,{path:"/administrator/handling-page/need-closing",component:function(t){return r.a.createElement(k,t)},exact:!0}))})))}}]);
//# sourceMappingURL=26.6eb0d7f0.chunk.js.map