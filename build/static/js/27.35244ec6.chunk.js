(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[27],{1247:function(e,t,a){},1251:function(e,t,a){"use strict";var n=a(20),r=a(11),c=a(0),o=a.n(c),i=a(14),u=a(1227),l=a(279),f=a(1316),m=a(1275),d=a(1189),s=a(1276),p=a(1277),v=a(1278),E=a(1279),g=a(1364),b=a(1280),y=a(1342),L=a(1252),O=a(314),h=a.n(O),j=a(313),A=(a(1247),function(e){return function(e,t,a){var n={currency:t,style:"currency",currencyDisplay:"symbol"};return new Intl.NumberFormat(e,n).format(a)}("id-ID","IDR",e)});t.a=Object(l.c)(Object(i.b)(null,null)((function(e){var t=e.intl,a=e.dataHeader,c=void 0===a?[]:a,i=e.handleParams,l=e.loading,O=void 0!==l&&l,N=e.err,k=void 0!==N&&N,P=e.children,B=e.countData,w=void 0===B?0:B,T=e.hecto,I=void 0===T?1:T,D=o.a.useState({numberColum:0,page:0,count:w,rowsPerPage:10}),S=Object(r.a)(D,2),R=S[0],C=S[1],x=o.a.useState({name:c.filter((function(e){return!0===e.order.status&&!0===e.order.active})).length>0?c.filter((function(e){return!0===e.order.status&&!0===e.order.active}))[0].name.replace(/\s/g,""):"",order:!(c.filter((function(e){return!0===e.order.status&&!0===e.order.active})).length>0)||c.filter((function(e){return!0===e.order.status&&!0===e.order.active}))[0].order.status,type:c.filter((function(e){return!0===e.order.status&&!0===e.order.active&&null!==e.order.type})).length>0?c.filter((function(e){return!0===e.order.status&&!0===e.order.active&&null!==e.order.type}))[0].order.type:null}),M=Object(r.a)(x,2),_=M[0],F=M[1],Y=o.a.useState({}),U=Object(r.a)(Y,2),V=U[0],G=U[1],H=o.a.useState({filter:{},sort:{}}),Q=Object(r.a)(H,2),q=Q[0],J=Q[1],W=o.a.useState(null),Z=Object(r.a)(W,2),z=Z[0],K=Z[1],X=o.a.useCallback((function(e,t){var a,r=Object(j.cloneDeep)(R),c=q;c.filter=function(e){var t="";for(var a in e)e[a]&&(t+="filter["+a+"]="+e[a]+"&");return t}(e||V),c.sort="".concat((a=t||_).name,",").concat(null!==a.type?a.type?"asc":"desc":a.order?"asc":"desc"),r.page=r.page+1,c=Object.assign({},c,r),J(Object(n.a)({},c));var o=c.filter+"page="+c.page+"&rowsPerPage="+c.rowsPerPage+"&sort="+c.sort;"function"===typeof i&&i(o)}),[V,_,q,t,R]);o.a.useEffect(X,[]),o.a.useEffect((function(){C(Object(n.a)(Object(n.a)({},R),{},{count:w||0}))}),[w]);var $=function(){K(null)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("form",{id:"filter-form-all",className:"panel-filter-table mb-1"},o.a.createElement("span",{className:"mr-2 mt-2 float-left"},o.a.createElement(u.a,{id:"LABEL.FILTER.TABLE"})),o.a.createElement("div",{className:"d-block"},o.a.createElement("div",{className:""},c.filter((function(e){return!0===e.filter.active})).map((function(e,a){return o.a.createElement("div",{key:a.toString(),className:"btn-group hover-filter-table",status:"closed",id:a},o.a.createElement("div",{className:"btn btn-sm",id:"sub-filter-"+a,onClick:function(){K(a)}},o.a.createElement("span",null,o.a.createElement(u.a,{id:e.title}),":"),o.a.createElement("strong",{style:{paddingRight:1,paddingLeft:1}},o.a.createElement("span",{className:"filter-label",id:"filter-span-"+a},"currency"===e.filter.type&&V[e.name.replace(/\s/g,"")]?A(Number(V[e.name.replace(/\s/g,"")])):"phone"===e.filter.type&&V[e.name.replace(/\s/g,"")]?"(62)".concat(V[e.name.replace(/\s/g,"")]):"date"===e.filter.type&&V[e.name.replace(/\s/g,"")]?"".concat(h()(new Date(V[e.name.replace(/\s/g,"")])).format("DD MMM YYYY")):V[e.name.replace(/\s/g,"")])),V[e.name.replace(/\s/g,"")]?null:o.a.createElement("span",{style:{color:"#777777"}},o.a.createElement(u.a,{id:"LABEL.ALL"}))),o.a.createElement(f.a,{anchorEl:document.getElementById("sub-filter-".concat(z||0)),keepMounted:!1,open:a===z,onClose:$,PaperProps:{style:{transform:"translateX(0px) translateY(40px)"}}},o.a.createElement("div",{className:"px-2"},o.a.createElement("div",{className:"float-left"},"currency"===e.filter.type?o.a.createElement(L.a,{value:V[e.name.replace(/\s/g,"")]||"",displayType:"input",className:"form-control",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),thousandSeparator:".",decimalSeparator:",",allowEmptyFormatting:!0,allowLeadingZeros:!0,prefix:"Rp ",onValueChange:function(e){}}):"phone"===e.filter.type?o.a.createElement(L.a,{value:V[e.name.replace(/\s/g,"")]||"",displayType:"input",className:"form-control",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),format:"(+62)############",mask:"_",allowEmptyFormatting:!0,allowLeadingZeros:!0,onValueChange:function(e){}}):o.a.createElement("input",{type:e.filter.type,className:"form-control",min:"0",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),defaultValue:V[e.name.replace(/\s/g,"")]||"",placeholder:t.formatMessage({id:"LABEL.ALL"}),style:{width:200}})),o.a.createElement("div",{className:"d-flex"},o.a.createElement("button",{type:"button",className:"mx-1 float-left btn btn-sm btn-primary",onClick:function(){!function(e,t){var a=V;a[e]=document.getElementById(e).value,"currency"===t?a[e]=a[e].replace(/[Rp .]/g,"").replace(/[,]/g,"."):"phone"===t&&(a[e]=a[e].replace(/[(+62)_]/g,""));var r=R;r.page=0,C(r),G(Object(n.a)({},a)),X()}(e.name.replace(/\s/g,""),e.filter.type),$()}},o.a.createElement(u.a,{id:"LABEL.UPDATE"})),o.a.createElement("button",{type:"button",className:"mx-1 float-right btn btn-sm btn-light d-flex",onClick:function(){!function(e){var t=V;t[e]="",document.getElementById(e).value="",G(Object(n.a)({},t)),X()}(e.name.replace(/\s/g,"")),$()}},o.a.createElement("i",{className:"fas fa-redo fa-right py-1 mx-1"}),o.a.createElement("span",{className:"pt-1"},o.a.createElement(u.a,{id:"LABEL.FILTER.RESET.TABLE"})))))))})),o.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger ml-2 mt-2 button-filter-submit",onClick:function(){G({}),document.getElementById("filter-form-all").reset(),X({})}},o.a.createElement(u.a,{id:"LABEL.FILTER.RESET.TABLE"}))))),o.a.createElement("div",null,o.a.createElement(m.a,{component:d.a},o.a.createElement(s.a,{className:"hecto-"+I},o.a.createElement(p.a,null,o.a.createElement(v.a,null,c.map((function(e,t){return o.a.createElement(E.a,{className:"bg-primary text-uppercase ".concat((null===e||void 0===e?void 0:e.td)?null===e||void 0===e?void 0:e.td:""),key:t.toString()},e.order.active?o.a.createElement(g.a,{active:_.name===e.name.replace(/\s/g,""),direction:null!==_.type?_.type?"asc":"desc":_.order?"asc":"desc",onClick:function(){!function(e){var t=_;e.name.replace(/\s/g,"")===t.name?null!==t.type?t.type=!t.type:t.order=!t.order:(t.name=e.name.replace(/\s/g,""),t.order=!0,t.type=null),F(Object(n.a)({},t)),X()}(e)}},o.a.createElement("span",null,o.a.createElement(u.a,{id:e.title}))):o.a.createElement("span",null,o.a.createElement(u.a,{id:e.title})))})))),o.a.createElement(b.a,null,P)),o.a.createElement("div",{className:"table-loading-data"},o.a.createElement("div",{className:"text-center font-weight-bold py-5"},o.a.createElement("div",{className:"table-loading-data-potition"},O&&o.a.createElement("span",null,o.a.createElement("i",{className:"fas fa-spinner fa-pulse text-dark mr-1"}),o.a.createElement(u.a,{id:"LABEL.TABLE.WAITING_DATA"})),k&&o.a.createElement("span",{className:"text-danger"},o.a.createElement("i",{className:"far fa-frown text-danger mr-1"}),o.a.createElement(u.a,{id:"LABEL.ERROR_REQUEST"})))))),o.a.createElement(y.a,{rowsPerPageOptions:[10,25,50,75,100,250,500,1e3],component:"div",count:R.count,rowsPerPage:R.rowsPerPage,page:R.page,onChangePage:function(e,t){var a=R;a.numberColum=t>a.page?a.numberColum+a.rowsPerPage:a.numberColum-a.rowsPerPage,a.page=t,C(Object(n.a)({},a)),X()},onChangeRowsPerPage:function(e){var t=R;t.page=0,t.rowsPerPage=parseInt(e.target.value,10),t.numberColum=0,C(Object(n.a)({},t)),X()}}))))})))},1255:function(e,t,a){"use strict";a.d(t,"S",(function(){return c})),a.d(t,"r",(function(){return o})),a.d(t,"U",(function(){return i})),a.d(t,"d",(function(){return u})),a.d(t,"O",(function(){return l})),a.d(t,"P",(function(){return f})),a.d(t,"g",(function(){return m})),a.d(t,"i",(function(){return d})),a.d(t,"G",(function(){return s})),a.d(t,"J",(function(){return p})),a.d(t,"z",(function(){return v})),a.d(t,"B",(function(){return E})),a.d(t,"Q",(function(){return g})),a.d(t,"f",(function(){return b})),a.d(t,"y",(function(){return y})),a.d(t,"F",(function(){return L})),a.d(t,"q",(function(){return O})),a.d(t,"V",(function(){return h})),a.d(t,"L",(function(){return j})),a.d(t,"n",(function(){return A})),a.d(t,"D",(function(){return N})),a.d(t,"R",(function(){return k})),a.d(t,"T",(function(){return P})),a.d(t,"W",(function(){return B})),a.d(t,"x",(function(){return w})),a.d(t,"a",(function(){return T})),a.d(t,"u",(function(){return I})),a.d(t,"h",(function(){return D})),a.d(t,"A",(function(){return S})),a.d(t,"b",(function(){return R})),a.d(t,"j",(function(){return C})),a.d(t,"C",(function(){return x})),a.d(t,"K",(function(){return M})),a.d(t,"m",(function(){return _})),a.d(t,"I",(function(){return F})),a.d(t,"v",(function(){return Y})),a.d(t,"c",(function(){return U})),a.d(t,"o",(function(){return V})),a.d(t,"e",(function(){return G})),a.d(t,"N",(function(){return H})),a.d(t,"p",(function(){return Q})),a.d(t,"E",(function(){return q})),a.d(t,"w",(function(){return J})),a.d(t,"M",(function(){return W})),a.d(t,"H",(function(){return Z})),a.d(t,"k",(function(){return z})),a.d(t,"s",(function(){return K})),a.d(t,"l",(function(){return X})),a.d(t,"t",(function(){return $}));var n=a(32),r=a.n(n);function c(e){return r.a.get("/api/v1/dokter".concat(e?"?"+e:""))}function o(e){return r.a.delete("/api/v1/dokter/".concat(e))}function i(e){return r.a.get("/api/v1/poliall".concat(e?"?"+e:""))}function u(e){return r.a.put("/api/v1/poli/enable/".concat(e))}function l(e){return r.a.put("/api/v1/poli/disable/".concat(e))}function f(){return r.a.get("/api/v1/poli")}function m(e){return r.a.post("/api/v1/dokter",e)}function d(e){return r.a.post("/api/v1/poli",e)}function s(e){return r.a.get("/api/v1/dokter/".concat(e))}function p(e){return r.a.get("/api/v1/poli/".concat(e))}function v(e,t){return r.a.post("/api/v1/dokter/".concat(e),t)}function E(e,t){return r.a.put("/api/v1/poli/".concat(e),t)}function g(e){return r.a.get("/api/v1/article".concat(e?"?"+e:""))}function b(e){return r.a.post("/api/v1/article",e)}function y(e,t){return r.a.post("/api/v1/article/".concat(e),t)}function L(e){return r.a.get("/api/v1/article/".concat(e))}function O(e){return r.a.delete("/api/v1/article/".concat(e))}function h(e){return r.a.get("/api/v1/layanan".concat(e?"?"+e:""))}function j(e){return r.a.get("/api/v1/layanan/".concat(e))}function A(e){return r.a.post("/api/v1/layanan",e)}function N(e,t){return r.a.put("/api/v1/layanan/".concat(e),t)}function k(e){return r.a.get("/api/v1/report/dailyincome".concat(e?"?"+e:""))}function P(){return r.a.get("/api/v1/handover")}function B(e){return r.a.put("/api/v1/handover/".concat(e))}function w(e){return r.a.get("/api/v1/handover/".concat(e))}function T(){return r.a.get("/api/v1/medicalkind")}function I(e){return r.a.delete("/api/v1/medicalkind/".concat(e))}function D(e){return r.a.post("/api/v1/medicalkind",e)}function S(e,t){return r.a.put("/api/v1/medicalkind/".concat(e),t)}function R(e){return r.a.get("/api/v1/formkind".concat(e?"?"+e:""))}function C(e){return r.a.post("/api/v1/formkind",e)}function x(e,t){return r.a.put("/api/v1/formkind/".concat(e),t)}function M(e){return r.a.get("/api/v1/formkindid/".concat(e))}function _(e){return r.a.post("/api/v1/medicalform",e)}function F(e){return r.a.get("/api/v1/medicalform/".concat(e))}function Y(e){return r.a.delete("/api/v1/medicalform/".concat(e))}function U(e){return r.a.get("/api/v1/staff".concat(e?"?"+e:""))}function V(e,t){return r.a.post("/api/v1/staff/".concat(e),t)}function G(e){return r.a.put("/api/v1/staff/ena/".concat(e))}function H(e){return r.a.put("/api/v1/staff/dis/".concat(e))}function Q(e){return r.a.post("/api/v1/takaran",e)}function q(e,t){return r.a.put("/api/v1/takaran/".concat(e),t)}function J(e){return r.a.delete("/api/v1/takaran/".concat(e))}function W(){return r.a.get("/api/v1/takaran")}function Z(e){return r.a.get("/api/v1/formformat/get/".concat(e))}function z(e){return r.a.post("/api/v1/formformat/folder",e)}function K(e){return r.a.delete("/api/v1/formformat/folder/".concat(e))}function X(e){return r.a.post("/api/v1/formformat/input",e)}function $(e){return r.a.delete("/api/v1/formformat/input/".concat(e))}},1362:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(100),o=a(20),i=a(11),u=a(14),l=a(1227),f=a(279),m=a(30),d=a(1255),s=a(370),p=a(1251),v=a(49),E=a(92),g=a(1278),b=a(1279),y=a(206),L=[{title:"LABEL.EARNING_DATE",name:"days",order:{active:!0,status:!0,type:!1},filter:{active:!0,type:"date"}},{title:"LABEL.PRODUCT_SALE",name:"total",order:{active:!0,status:!1},filter:{active:!0,type:"currency"}},{title:"LABEL.HANDLING_FEE",name:"feeamt",order:{active:!0,status:!1},filter:{active:!0,type:"currency"}},{title:"LABEL.GRAND_TOTAL",name:"grand_total",order:{active:!0,status:!1},filter:{active:!0,type:"currency"}},{title:"LABEL.VISIT_TOTAL",name:"visit_qty",order:{active:!0,status:!1},filter:{active:!0,type:"number"}}];var O=Object(f.c)(Object(u.b)(null,E.a)((function(e){var t=e.intl,a=Object(m.i)(),u=Object(n.useState)(!1),f=Object(i.a)(u,2),E=f[0],O=f[1],h=Object(n.useState)({data:[],count:0}),j=Object(i.a)(h,2),A=j[0],N=j[1],k=Object(n.useState)(!1),P=Object(i.a)(k,2),B=P[0],w=P[1];return Object(c.g)(),Object(n.useLayoutEffect)((function(){a.setBreadcrumbs([{pathname:"/administrator/dashboard",title:t.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/administrator/report-page/daily-income",title:t.formatMessage({id:"LABEL.DAILY_INCOME"})}]),a.setTitle(t.formatMessage({id:"LABEL.DAILY_INCOME"}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,null,r.a.createElement(s.c,null,r.a.createElement(p.a,{dataHeader:L,handleParams:function(e){O(!0),N(Object(o.a)(Object(o.a)({},A),{},{count:0,data:[]})),w(!1),Object(d.R)(e).then((function(e){O(!1),N(Object(o.a)(Object(o.a)({},A),{},{count:0,data:e.data.data}))})).catch((function(e){w(!0),O(!1),v.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))},loading:E,err:B,countData:A.count,hecto:10},A.data.map((function(e,t){return r.a.createElement(g.a,{key:t.toString()},r.a.createElement(b.a,null,window.moment(new Date(null===e||void 0===e?void 0:e.days)).format("DD MMM YYYY")),r.a.createElement(b.a,null,Object(y.a)(e.total)),r.a.createElement(b.a,null,Object(y.a)(e.feeamt)),r.a.createElement(b.a,null,Object(y.a)(e.grand_total)),r.a.createElement(b.a,null,e.visit_qty," ",r.a.createElement(l.a,{id:"LABEL.VISIT"})))}))))))})));t.default=Object(f.c)(Object(u.b)(null,null)((function(e){return r.a.createElement(c.d,null,r.a.createElement(c.a,{exact:!0,from:"/administrator/report-page",to:"/administrator/dashboard"}),r.a.createElement(c.b,{path:"/administrator/report-page/daily-income",component:function(e){return r.a.createElement(O,e)},exact:!0}))})))}}]);
//# sourceMappingURL=27.35244ec6.chunk.js.map