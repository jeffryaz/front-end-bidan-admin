(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[29],{1250:function(t,e,n){},1252:function(t,e,n){"use strict";var a=n(11),r=n(0),c=n.n(r),i=n(14),o=n(1230),u=n(279),l=n(1273),d=n(1192),f=n(1274),s=n(1275),m=n(1276),p=n(1277),E=n(1278);n(1250);e.a=Object(u.c)(Object(i.b)(null,null)((function(t){var e=t.intl,n=t.dataHeader,r=void 0===n?[]:n,i=t.loading,u=void 0!==i&&i,v=t.err,b=void 0!==v&&v,g=t.children,L=t.hecto,A=void 0===L?1:L,h=t.handleFilter,O=t.dataSecond,k=void 0===O?[]:O,S=c.a.useState(r.filter((function(t){return!0===t.filter}))),j=Object(a.a)(S,1)[0];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4"},c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{htmlFor:"LABEL.SEARCH",className:"col-sm-3 col-form-label"},c.a.createElement(o.a,{id:"LABEL.SEARCH"}),":"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("input",{type:"text",className:"form-control",id:"LABEL.SEARCH",placeholder:e.formatMessage({id:"LABEL.SEARCH"}),onChange:function(t){for(var e=[],n=0;n<k.length;n++)for(var a=0;a<j.length;a++){if(k[n][j[a].name].toString().toLowerCase().includes(t.target.value.toLowerCase())){e.push(k[n]);break}}"function"===typeof h&&h(e)}}))))),c.a.createElement(l.a,{component:d.a},c.a.createElement(f.a,{className:"hecto-"+A},c.a.createElement(s.a,null,c.a.createElement(m.a,null,r.map((function(t,e){return c.a.createElement(p.a,{className:"bg-primary text-uppercase ".concat((null===t||void 0===t?void 0:t.td)?null===t||void 0===t?void 0:t.td:""),key:e.toString()},c.a.createElement("span",null,c.a.createElement(o.a,{id:t.title})))})))),c.a.createElement(E.a,null,g)),c.a.createElement("div",{className:"table-loading-data"},c.a.createElement("div",{className:"text-center font-weight-bold py-5"},c.a.createElement("div",{className:"table-loading-data-potition"},u&&c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-spinner fa-pulse text-dark mr-1"}),c.a.createElement(o.a,{id:"LABEL.TABLE.WAITING_DATA"})),b&&c.a.createElement("span",{className:"text-danger"},c.a.createElement("i",{className:"far fa-frown text-danger mr-1"}),c.a.createElement(o.a,{id:"LABEL.ERROR_REQUEST"}))))))))})))},1258:function(t,e,n){"use strict";n.d(e,"N",(function(){return c})),n.d(e,"p",(function(){return i})),n.d(e,"P",(function(){return o})),n.d(e,"d",(function(){return u})),n.d(e,"J",(function(){return l})),n.d(e,"K",(function(){return d})),n.d(e,"g",(function(){return f})),n.d(e,"i",(function(){return s})),n.d(e,"C",(function(){return m})),n.d(e,"E",(function(){return p})),n.d(e,"v",(function(){return E})),n.d(e,"x",(function(){return v})),n.d(e,"L",(function(){return b})),n.d(e,"f",(function(){return g})),n.d(e,"u",(function(){return L})),n.d(e,"B",(function(){return A})),n.d(e,"o",(function(){return h})),n.d(e,"Q",(function(){return O})),n.d(e,"G",(function(){return k})),n.d(e,"l",(function(){return S})),n.d(e,"z",(function(){return j})),n.d(e,"M",(function(){return N})),n.d(e,"O",(function(){return B})),n.d(e,"R",(function(){return w})),n.d(e,"t",(function(){return y})),n.d(e,"a",(function(){return C})),n.d(e,"q",(function(){return D})),n.d(e,"h",(function(){return R})),n.d(e,"w",(function(){return T})),n.d(e,"b",(function(){return _})),n.d(e,"j",(function(){return x})),n.d(e,"y",(function(){return H})),n.d(e,"F",(function(){return M})),n.d(e,"k",(function(){return F})),n.d(e,"D",(function(){return I})),n.d(e,"r",(function(){return U})),n.d(e,"c",(function(){return P})),n.d(e,"m",(function(){return Y})),n.d(e,"e",(function(){return J})),n.d(e,"I",(function(){return W})),n.d(e,"n",(function(){return $})),n.d(e,"A",(function(){return q})),n.d(e,"s",(function(){return G})),n.d(e,"H",(function(){return K}));var a=n(32),r=n.n(a);function c(t){return r.a.get("/api/v1/dokter".concat(t?"?"+t:""))}function i(t){return r.a.delete("/api/v1/dokter/".concat(t))}function o(t){return r.a.get("/api/v1/poliall".concat(t?"?"+t:""))}function u(t){return r.a.put("/api/v1/poli/enable/".concat(t))}function l(t){return r.a.put("/api/v1/poli/disable/".concat(t))}function d(){return r.a.get("/api/v1/poli")}function f(t){return r.a.post("/api/v1/dokter",t)}function s(t){return r.a.post("/api/v1/poli",t)}function m(t){return r.a.get("/api/v1/dokter/".concat(t))}function p(t){return r.a.get("/api/v1/poli/".concat(t))}function E(t,e){return r.a.post("/api/v1/dokter/".concat(t),e)}function v(t,e){return r.a.put("/api/v1/poli/".concat(t),e)}function b(t){return r.a.get("/api/v1/article".concat(t?"?"+t:""))}function g(t){return r.a.post("/api/v1/article",t)}function L(t,e){return r.a.post("/api/v1/article/".concat(t),e)}function A(t){return r.a.get("/api/v1/article/".concat(t))}function h(t){return r.a.delete("/api/v1/article/".concat(t))}function O(t){return r.a.get("/api/v1/layanan".concat(t?"?"+t:""))}function k(t){return r.a.get("/api/v1/layanan/".concat(t))}function S(t){return r.a.post("/api/v1/layanan",t)}function j(t,e){return r.a.put("/api/v1/layanan/".concat(t),e)}function N(t){return r.a.get("/api/v1/report/dailyincome".concat(t?"?"+t:""))}function B(){return r.a.get("/api/v1/handover")}function w(t){return r.a.put("/api/v1/handover/".concat(t))}function y(t){return r.a.get("/api/v1/handover/".concat(t))}function C(){return r.a.get("/api/v1/medicalkind")}function D(t){return r.a.delete("/api/v1/medicalkind/".concat(t))}function R(t){return r.a.post("/api/v1/medicalkind",t)}function T(t,e){return r.a.put("/api/v1/medicalkind/".concat(t),e)}function _(t){return r.a.get("/api/v1/formkind".concat(t?"?"+t:""))}function x(t){return r.a.post("/api/v1/formkind",t)}function H(t,e){return r.a.put("/api/v1/formkind/".concat(t),e)}function M(t){return r.a.get("/api/v1/formkindid/".concat(t))}function F(t){return r.a.post("/api/v1/medicalform",t)}function I(t){return r.a.get("/api/v1/medicalform/".concat(t))}function U(t){return r.a.delete("/api/v1/medicalform/".concat(t))}function P(t){return r.a.get("/api/v1/staff".concat(t?"?"+t:""))}function Y(t,e){return r.a.post("/api/v1/staff/".concat(t),e)}function J(t){return r.a.put("/api/v1/staff/ena/".concat(t))}function W(t){return r.a.put("/api/v1/staff/dis/".concat(t))}function $(t){return r.a.post("/api/v1/takaran",t)}function q(t,e){return r.a.put("/api/v1/takaran/".concat(t),e)}function G(t){return r.a.delete("/api/v1/takaran/".concat(t))}function K(){return r.a.get("/api/v1/takaran")}},1368:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(100),i=n(11),o=n(14),u=n(1230),l=n(279),d=n(371),f=n(49),s=n(30),m=(n(26),n(13),n(1258)),p=(n(35),n(207)),E=(n(1255),n(92)),v=n(1246),b=n(1223),g=n(1224),L=n(1276),A=n(1277),h=n(1226),O=n(1252),k=[{title:"LABEL.STAFF",name:"staff_name",filter:!0},{title:"LABEL.PRODUCT_SALE",name:"closing_amt",filter:!0},{title:"LABEL.DATE",name:"closing_date",filter:!0},{title:"LABEL.TABLE_HEADER.ACTION",name:"action",filter:!1}],S=[{title:"LABEL.TRANSACTION_CODE",name:"trans_kode",filter:!0},{title:"LABEL.PRODUCT_SALE",name:"total",filter:!0}];var j=Object(l.c)(Object(o.b)(null,E.a)((function(t){var e=t.intl,n=(Object(c.g)(),Object(s.i)()),l=(Object(o.e)((function(t){return t.clientMqtt.client}),o.c),Object(a.useState)(!1)),E=Object(i.a)(l,2),j=E[0],N=E[1],B=Object(a.useState)([]),w=Object(i.a)(B,2),y=w[0],C=w[1],D=Object(a.useState)([]),R=Object(i.a)(D,2),T=R[0],_=R[1],x=Object(a.useState)(!1),H=Object(i.a)(x,2),M=H[0],F=H[1],I=Object(a.useState)([]),U=Object(i.a)(I,2),P=U[0],Y=U[1],J=Object(a.useState)([]),W=Object(i.a)(J,2),$=W[0],q=W[1];Object(a.useLayoutEffect)((function(){n.setBreadcrumbs([{pathname:"/administrator/dashboard",title:e.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/administrator/handling-page/need-closing",title:e.formatMessage({id:"LABEL.HANDOVER"})}]),n.setTitle(e.formatMessage({id:"LABEL.HANDOVER"}))}),[]);var G=function(){N(!0),Object(m.O)().then((function(t){N(!1),t.data.data.forEach((function(t){t.staff_name=t.staff.nama})),C(t.data.data),_(t.data.data)})).catch((function(t){var e,n;N(!1),f.a.showSnackbar((null===(e=t.response)||void 0===e?void 0:e.data.messages)||(null===(n=t.response)||void 0===n?void 0:n.data.message))}))};return Object(a.useEffect)(G,[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{open:M,maxWidth:"md",fullWidth:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(b.a,null,r.a.createElement(u.a,{id:"LABEL.DETAIL"})),r.a.createElement(g.a,null,r.a.createElement(O.a,{dataHeader:S,dataSecond:$,handleFilter:function(t){Y(t)},loading:!1,hecto:5},P.map((function(t,e){return r.a.createElement(L.a,{key:e.toString()},r.a.createElement(A.a,null,t.trans_kode),r.a.createElement(A.a,null,Object(p.a)(t.total)))})))),r.a.createElement(h.a,null,r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){F(!1)}},r.a.createElement(u.a,{id:"LABEL.OK"})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(d.b,null,r.a.createElement(d.c,null,r.a.createElement(O.a,{dataHeader:k,dataSecond:T,handleFilter:function(t){C(t)},loading:j,hecto:10},y.map((function(t,n){return r.a.createElement(L.a,{key:n.toString()},r.a.createElement(A.a,null,t.staff_name),r.a.createElement(A.a,null,Object(p.a)(t.closing_amt)),r.a.createElement(A.a,null,window.moment(new Date(t.closing_date)).format("DD MMM YYYY")),r.a.createElement(A.a,null,r.a.createElement("button",{type:"button",className:"btn btn-sm btn-primary mx-1",onClick:function(){var e;e=t.id,Object(m.t)(e).then((function(t){F(!0),Y(t.data.data),q(t.data.data)})).catch((function(t){var e,n;f.a.showSnackbar((null===(e=t.response)||void 0===e?void 0:e.data.messages)||(null===(n=t.response)||void 0===n?void 0:n.data.message))}))}},r.a.createElement(u.a,{id:"LABEL.DETAIL"})),1===t.status&&r.a.createElement("button",{type:"button",className:"btn btn-sm btn-primary mx-1",onClick:function(){!function(t,n){window.$("#loading-".concat(n)).addClass("fa-spin"),Object(m.R)(t).then((function(t){window.$("#loading-".concat(n)).removeClass("fa-spin"),G(),f.a.showSnackbar(e.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success")})).catch((function(t){var e,a;window.$("#loading-".concat(n)).removeClass("fa-spin"),f.a.showSnackbar((null===(e=t.response)||void 0===e?void 0:e.data.messages)||(null===(a=t.response)||void 0===a?void 0:a.data.message))}))}(t.id,n)}},r.a.createElement("i",{className:"fas fa-sync px-1",id:"loading-".concat(n)}),r.a.createElement(u.a,{id:"LABEL.PROCESS"}))))}))))))))})));e.default=Object(l.c)(Object(o.b)(null,null)((function(t){return r.a.createElement(c.d,null,r.a.createElement(c.a,{exact:!0,from:"/administrator/handling-page",to:"/administrator/dashboard"}),r.a.createElement(c.b,{path:"/administrator/handling-page/need-closing",component:function(t){return r.a.createElement(j,t)},exact:!0}))})))}}]);
//# sourceMappingURL=29.99904caf.chunk.js.map