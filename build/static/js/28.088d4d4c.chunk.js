(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[28],{1250:function(e,t,a){},1254:function(e,t,a){"use strict";var n=a(20),r=a(11),c=a(0),o=a.n(c),i=a(14),u=a(1230),l=a(279),s=a(1319),m=a(1273),d=a(1192),f=a(1274),p=a(1275),E=a(1276),g=a(1277),v=a(1369),b=a(1278),y=a(1346),L=a(1255),O=a(313),h=a.n(O),j=(a(1250),function(e){return function(e,t,a){var n={currency:t,style:"currency",currencyDisplay:"symbol"};return new Intl.NumberFormat(e,n).format(a)}("id-ID","IDR",e)});t.a=Object(l.c)(Object(i.b)(null,null)((function(e){var t=e.intl,a=e.dataHeader,c=void 0===a?[]:a,i=e.handleParams,l=e.loading,O=void 0!==l&&l,A=e.err,N=void 0!==A&&A,k=e.children,P=e.countData,B=void 0===P?0:P,w=e.hecto,I=void 0===w?1:w,T=o.a.useState({numberColum:0,page:0,count:B,rowsPerPage:10}),D=Object(r.a)(T,2),S=D[0],R=D[1],C=o.a.useState({name:c.filter((function(e){return!0===e.order.status&&!0===e.order.active})).length>0?c.filter((function(e){return!0===e.order.status&&!0===e.order.active}))[0].name.replace(/\s/g,""):"",order:!(c.filter((function(e){return!0===e.order.status&&!0===e.order.active})).length>0)||c.filter((function(e){return!0===e.order.status&&!0===e.order.active}))[0].order.status,type:c.filter((function(e){return!0===e.order.status&&!0===e.order.active&&null!==e.order.type})).length>0?c.filter((function(e){return!0===e.order.status&&!0===e.order.active&&null!==e.order.type}))[0].order.type:null}),x=Object(r.a)(C,2),M=x[0],_=x[1],F=o.a.useState({}),Y=Object(r.a)(F,2),G=Y[0],H=Y[1],U=o.a.useState({filter:{},sort:{}}),V=Object(r.a)(U,2),Q=V[0],q=V[1],J=o.a.useState(null),Z=Object(r.a)(J,2),z=Z[0],K=Z[1],W=o.a.useCallback((function(e,t){var a,r=Object.assign({},S),c=Q;c.filter=function(e){var t="";for(var a in e)e[a]&&(t+="filter["+a+"]="+e[a]+"&");return t}(e||G),c.sort="".concat((a=t||M).name,",").concat(null!==a.type?a.type?"asc":"desc":a.order?"asc":"desc"),r.page=r.page+1,c=Object.assign({},c,r),q(Object(n.a)({},c));var o=c.filter+"page="+c.page+"&rowsPerPage="+c.rowsPerPage+"&sort="+c.sort;"function"===typeof i&&i(o)}),[G,M,Q,t,S]);o.a.useEffect(W,[]),o.a.useEffect((function(){R(Object(n.a)(Object(n.a)({},S),{},{count:B||0}))}),[B]);var X=function(){K(null)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("form",{id:"filter-form-all",className:"panel-filter-table mb-1"},o.a.createElement("span",{className:"mr-2 mt-2 float-left"},o.a.createElement(u.a,{id:"LABEL.FILTER.TABLE"})),o.a.createElement("div",{className:"d-block"},o.a.createElement("div",{className:""},c.filter((function(e){return!0===e.filter.active})).map((function(e,a){return o.a.createElement("div",{key:a.toString(),className:"btn-group hover-filter-table",status:"closed",id:a},o.a.createElement("div",{className:"btn btn-sm",id:"sub-filter-"+a,onClick:function(){K(a)}},o.a.createElement("span",null,o.a.createElement(u.a,{id:e.title}),":"),o.a.createElement("strong",{style:{paddingRight:1,paddingLeft:1}},o.a.createElement("span",{className:"filter-label",id:"filter-span-"+a},"currency"===e.filter.type&&G[e.name.replace(/\s/g,"")]?j(Number(G[e.name.replace(/\s/g,"")])):"phone"===e.filter.type&&G[e.name.replace(/\s/g,"")]?"(62)".concat(G[e.name.replace(/\s/g,"")]):"date"===e.filter.type&&G[e.name.replace(/\s/g,"")]?"".concat(h()(new Date(G[e.name.replace(/\s/g,"")])).format("DD MMM YYYY")):G[e.name.replace(/\s/g,"")])),G[e.name.replace(/\s/g,"")]?null:o.a.createElement("span",{style:{color:"#777777"}},o.a.createElement(u.a,{id:"LABEL.ALL"}))),o.a.createElement(s.a,{anchorEl:document.getElementById("sub-filter-".concat(z||0)),keepMounted:!1,open:a===z,onClose:X,PaperProps:{style:{transform:"translateX(0px) translateY(40px)"}}},o.a.createElement("div",{className:"px-2"},o.a.createElement("div",{className:"float-left"},"currency"===e.filter.type?o.a.createElement(L.a,{value:G[e.name.replace(/\s/g,"")]||"",displayType:"input",className:"form-control",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),thousandSeparator:".",decimalSeparator:",",allowEmptyFormatting:!0,allowLeadingZeros:!0,prefix:"Rp ",onValueChange:function(e){}}):"phone"===e.filter.type?o.a.createElement(L.a,{value:G[e.name.replace(/\s/g,"")]||"",displayType:"input",className:"form-control",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),format:"(+62)############",mask:"_",allowEmptyFormatting:!0,allowLeadingZeros:!0,onValueChange:function(e){}}):o.a.createElement("input",{type:e.filter.type,className:"form-control",min:"0",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),defaultValue:G[e.name.replace(/\s/g,"")]||"",placeholder:t.formatMessage({id:"LABEL.ALL"}),style:{width:200}})),o.a.createElement("div",{className:"d-flex"},o.a.createElement("button",{type:"button",className:"mx-1 float-left btn btn-sm btn-primary",onClick:function(){!function(e,t){var a=G;a[e]=document.getElementById(e).value,"currency"===t?a[e]=a[e].replace(/[Rp .]/g,"").replace(/[,]/g,"."):"phone"===t&&(a[e]=a[e].replace(/[(+62)_]/g,"")),R(Object(n.a)(Object(n.a)({},S),{},{page:0})),H(Object(n.a)({},a)),W()}(e.name.replace(/\s/g,""),e.filter.type),X()}},o.a.createElement(u.a,{id:"LABEL.UPDATE"})),o.a.createElement("button",{type:"button",className:"mx-1 float-right btn btn-sm btn-light d-flex",onClick:function(){!function(e){var t=G;t[e]="",document.getElementById(e).value="",H(Object(n.a)({},t)),W()}(e.name.replace(/\s/g,"")),X()}},o.a.createElement("i",{className:"fas fa-redo fa-right py-1 mx-1"}),o.a.createElement("span",{className:"pt-1"},o.a.createElement(u.a,{id:"LABEL.FILTER.RESET.TABLE"})))))))})),o.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger ml-2 mt-2 button-filter-submit",onClick:function(){H({}),document.getElementById("filter-form-all").reset(),W({})}},o.a.createElement(u.a,{id:"LABEL.FILTER.RESET.TABLE"}))))),o.a.createElement("div",null,o.a.createElement(m.a,{component:d.a},o.a.createElement(f.a,{className:"hecto-"+I},o.a.createElement(p.a,null,o.a.createElement(E.a,null,c.map((function(e,t){return o.a.createElement(g.a,{className:"bg-primary text-uppercase ".concat((null===e||void 0===e?void 0:e.td)?null===e||void 0===e?void 0:e.td:""),key:t.toString()},e.order.active?o.a.createElement(v.a,{active:M.name===e.name.replace(/\s/g,""),direction:null!==M.type?M.type?"asc":"desc":M.order?"asc":"desc",onClick:function(){!function(e){var t=M;e.name.replace(/\s/g,"")===t.name?null!==t.type?t.type=!t.type:t.order=!t.order:(t.name=e.name.replace(/\s/g,""),t.order=!0,t.type=null),_(Object(n.a)({},t)),W()}(e)}},o.a.createElement("span",null,o.a.createElement(u.a,{id:e.title}))):o.a.createElement("span",null,o.a.createElement(u.a,{id:e.title})))})))),o.a.createElement(b.a,null,k)),o.a.createElement("div",{className:"table-loading-data"},o.a.createElement("div",{className:"text-center font-weight-bold py-5"},o.a.createElement("div",{className:"table-loading-data-potition"},O&&o.a.createElement("span",null,o.a.createElement("i",{className:"fas fa-spinner fa-pulse text-dark mr-1"}),o.a.createElement(u.a,{id:"LABEL.TABLE.WAITING_DATA"})),N&&o.a.createElement("span",{className:"text-danger"},o.a.createElement("i",{className:"far fa-frown text-danger mr-1"}),o.a.createElement(u.a,{id:"LABEL.ERROR_REQUEST"})))))),o.a.createElement(y.a,{rowsPerPageOptions:[10,25,50,75,100,250,500,1e3],component:"div",count:S.count,rowsPerPage:S.rowsPerPage,page:S.page,onChangePage:function(e,t){var a=S;a.numberColum=t>a.page?a.numberColum+a.rowsPerPage:a.numberColum-a.rowsPerPage,a.page=t,R(Object(n.a)({},a)),W()},onChangeRowsPerPage:function(e){var t=S;t.page=0,t.rowsPerPage=parseInt(e.target.value,10),t.numberColum=0,R(Object(n.a)({},t)),W()}}))))})))},1258:function(e,t,a){"use strict";a.d(t,"N",(function(){return c})),a.d(t,"p",(function(){return o})),a.d(t,"P",(function(){return i})),a.d(t,"d",(function(){return u})),a.d(t,"J",(function(){return l})),a.d(t,"K",(function(){return s})),a.d(t,"g",(function(){return m})),a.d(t,"i",(function(){return d})),a.d(t,"C",(function(){return f})),a.d(t,"E",(function(){return p})),a.d(t,"v",(function(){return E})),a.d(t,"x",(function(){return g})),a.d(t,"L",(function(){return v})),a.d(t,"f",(function(){return b})),a.d(t,"u",(function(){return y})),a.d(t,"B",(function(){return L})),a.d(t,"o",(function(){return O})),a.d(t,"Q",(function(){return h})),a.d(t,"G",(function(){return j})),a.d(t,"l",(function(){return A})),a.d(t,"z",(function(){return N})),a.d(t,"M",(function(){return k})),a.d(t,"O",(function(){return P})),a.d(t,"R",(function(){return B})),a.d(t,"t",(function(){return w})),a.d(t,"a",(function(){return I})),a.d(t,"q",(function(){return T})),a.d(t,"h",(function(){return D})),a.d(t,"w",(function(){return S})),a.d(t,"b",(function(){return R})),a.d(t,"j",(function(){return C})),a.d(t,"y",(function(){return x})),a.d(t,"F",(function(){return M})),a.d(t,"k",(function(){return _})),a.d(t,"D",(function(){return F})),a.d(t,"r",(function(){return Y})),a.d(t,"c",(function(){return G})),a.d(t,"m",(function(){return H})),a.d(t,"e",(function(){return U})),a.d(t,"I",(function(){return V})),a.d(t,"n",(function(){return Q})),a.d(t,"A",(function(){return q})),a.d(t,"s",(function(){return J})),a.d(t,"H",(function(){return Z}));var n=a(32),r=a.n(n);function c(e){return r.a.get("/api/v1/dokter".concat(e?"?"+e:""))}function o(e){return r.a.delete("/api/v1/dokter/".concat(e))}function i(e){return r.a.get("/api/v1/poliall".concat(e?"?"+e:""))}function u(e){return r.a.put("/api/v1/poli/enable/".concat(e))}function l(e){return r.a.put("/api/v1/poli/disable/".concat(e))}function s(){return r.a.get("/api/v1/poli")}function m(e){return r.a.post("/api/v1/dokter",e)}function d(e){return r.a.post("/api/v1/poli",e)}function f(e){return r.a.get("/api/v1/dokter/".concat(e))}function p(e){return r.a.get("/api/v1/poli/".concat(e))}function E(e,t){return r.a.post("/api/v1/dokter/".concat(e),t)}function g(e,t){return r.a.put("/api/v1/poli/".concat(e),t)}function v(e){return r.a.get("/api/v1/article".concat(e?"?"+e:""))}function b(e){return r.a.post("/api/v1/article",e)}function y(e,t){return r.a.post("/api/v1/article/".concat(e),t)}function L(e){return r.a.get("/api/v1/article/".concat(e))}function O(e){return r.a.delete("/api/v1/article/".concat(e))}function h(e){return r.a.get("/api/v1/layanan".concat(e?"?"+e:""))}function j(e){return r.a.get("/api/v1/layanan/".concat(e))}function A(e){return r.a.post("/api/v1/layanan",e)}function N(e,t){return r.a.put("/api/v1/layanan/".concat(e),t)}function k(e){return r.a.get("/api/v1/report/dailyincome".concat(e?"?"+e:""))}function P(){return r.a.get("/api/v1/handover")}function B(e){return r.a.put("/api/v1/handover/".concat(e))}function w(e){return r.a.get("/api/v1/handover/".concat(e))}function I(){return r.a.get("/api/v1/medicalkind")}function T(e){return r.a.delete("/api/v1/medicalkind/".concat(e))}function D(e){return r.a.post("/api/v1/medicalkind",e)}function S(e,t){return r.a.put("/api/v1/medicalkind/".concat(e),t)}function R(e){return r.a.get("/api/v1/formkind".concat(e?"?"+e:""))}function C(e){return r.a.post("/api/v1/formkind",e)}function x(e,t){return r.a.put("/api/v1/formkind/".concat(e),t)}function M(e){return r.a.get("/api/v1/formkindid/".concat(e))}function _(e){return r.a.post("/api/v1/medicalform",e)}function F(e){return r.a.get("/api/v1/medicalform/".concat(e))}function Y(e){return r.a.delete("/api/v1/medicalform/".concat(e))}function G(e){return r.a.get("/api/v1/staff".concat(e?"?"+e:""))}function H(e,t){return r.a.post("/api/v1/staff/".concat(e),t)}function U(e){return r.a.put("/api/v1/staff/ena/".concat(e))}function V(e){return r.a.put("/api/v1/staff/dis/".concat(e))}function Q(e){return r.a.post("/api/v1/takaran",e)}function q(e,t){return r.a.put("/api/v1/takaran/".concat(e),t)}function J(e){return r.a.delete("/api/v1/takaran/".concat(e))}function Z(){return r.a.get("/api/v1/takaran")}},1367:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(100),o=a(20),i=a(11),u=a(14),l=a(1230),s=a(279),m=a(30),d=a(1258),f=a(371),p=a(1254),E=a(49),g=a(92),v=a(1276),b=a(1277),y=a(207),L=[{title:"LABEL.EARNING_DATE",name:"days",order:{active:!0,status:!0,type:!1},filter:{active:!0,type:"date"}},{title:"LABEL.PRODUCT_SALE",name:"total",order:{active:!0,status:!1},filter:{active:!0,type:"currency"}},{title:"LABEL.HANDLING_FEE",name:"feeamt",order:{active:!0,status:!1},filter:{active:!0,type:"currency"}},{title:"LABEL.GRAND_TOTAL",name:"grand_total",order:{active:!0,status:!1},filter:{active:!0,type:"currency"}},{title:"LABEL.VISIT_TOTAL",name:"visit_qty",order:{active:!0,status:!1},filter:{active:!0,type:"number"}}];var O=Object(s.c)(Object(u.b)(null,g.a)((function(e){var t=e.intl,a=Object(m.i)(),u=Object(n.useState)(!1),s=Object(i.a)(u,2),g=s[0],O=s[1],h=Object(n.useState)({data:[],count:0}),j=Object(i.a)(h,2),A=j[0],N=j[1],k=Object(n.useState)(!1),P=Object(i.a)(k,2),B=P[0],w=P[1];return Object(c.g)(),Object(n.useLayoutEffect)((function(){a.setBreadcrumbs([{pathname:"/administrator/dashboard",title:t.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/administrator/report-page/daily-income",title:t.formatMessage({id:"LABEL.DAILY_INCOME"})}]),a.setTitle(t.formatMessage({id:"LABEL.DAILY_INCOME"}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(f.b,null,r.a.createElement(f.c,null,r.a.createElement(p.a,{dataHeader:L,handleParams:function(e){O(!0),N(Object(o.a)(Object(o.a)({},A),{},{count:0,data:[]})),w(!1),Object(d.M)(e).then((function(e){O(!1),N(Object(o.a)(Object(o.a)({},A),{},{count:0,data:e.data.data}))})).catch((function(e){w(!0),O(!1),E.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))},loading:g,err:B,countData:A.count,hecto:10},A.data.map((function(e,t){return r.a.createElement(v.a,{key:t.toString()},r.a.createElement(b.a,null,window.moment(new Date(null===e||void 0===e?void 0:e.days)).format("DD MMM YYYY")),r.a.createElement(b.a,null,Object(y.a)(e.total)),r.a.createElement(b.a,null,Object(y.a)(e.feeamt)),r.a.createElement(b.a,null,Object(y.a)(e.grand_total)),r.a.createElement(b.a,null,e.visit_qty," ",r.a.createElement(l.a,{id:"LABEL.VISIT"})))}))))))})));t.default=Object(s.c)(Object(u.b)(null,null)((function(e){return r.a.createElement(c.d,null,r.a.createElement(c.a,{exact:!0,from:"/administrator/report-page",to:"/administrator/dashboard"}),r.a.createElement(c.b,{path:"/administrator/report-page/daily-income",component:function(e){return r.a.createElement(O,e)},exact:!0}))})))}}]);
//# sourceMappingURL=28.088d4d4c.chunk.js.map