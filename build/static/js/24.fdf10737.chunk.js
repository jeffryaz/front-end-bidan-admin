(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[24],{1250:function(e,t,a){},1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(11),r=a(0),c=a.n(r),l=a(22),o=a(1248),i=a(1227),u=a(1319),s=a(1362),m=a(1263),d=a(1264),f=a(1265),p=a(1230),E=a(15),b=Object(l.a)((function(e){return{tooltip:{boxShadow:e.shadows[1],fontSize:"0.875rem",marginTop:"0.25rem"}}}))(o.a);function v(e){var t=e.data,a=e.handleAction,r=e.ops,l=e.label,o=void 0===l?null:l,v=e.exclude,g=void 0===v?[]:v,h=c.a.useState(null),y=Object(n.a)(h,2),L=y[0],O=y[1],N=Boolean(L);function j(e){O(e.currentTarget)}function k(){O(null)}var A=c.a.useCallback((function(e,t){"function"===typeof a&&a(e,t),k()}),[a,k]),S=r;return c.a.createElement("div",null,o?c.a.createElement(b,{title:c.a.createElement(p.a,{id:o}),placement:"bottom"},c.a.createElement(i.a,{"aria-label":"More","aria-controls":"long-menu","aria-haspopup":"true",onClick:j},c.a.createElement(f.a,null))):c.a.createElement(i.a,{"aria-label":"More","aria-controls":"long-menu","aria-haspopup":"true",onClick:j,style:{margin:"-6px 0px",padding:8}},c.a.createElement(f.a,null)),c.a.createElement(u.a,{id:"long-menu",anchorEl:L,keepMounted:!0,open:N,onClose:k,PaperProps:{style:{width:300,marginLeft:-50}}},S.filter((function(e){return!g.includes(e.type)})).map((function(e,a){var n,r;return e.to?c.a.createElement(E.b,{key:a,to:null===(n=e.to)||void 0===n?void 0:n.url,style:null===(r=e.to)||void 0===r?void 0:r.style},c.a.createElement(s.a,null,c.a.createElement(m.a,null,c.a.createElement("i",{className:e.icon})),c.a.createElement(d.a,{primary:c.a.createElement(p.a,{id:e.label})}))):c.a.createElement(s.a,{key:a,onClick:function(){return A(e.type,t)},disabled:e.disabled},c.a.createElement(m.a,null,c.a.createElement("i",{className:e.icon})),c.a.createElement(d.a,{primary:c.a.createElement(p.a,{id:e.label})}))}))))}},1254:function(e,t,a){"use strict";var n=a(20),r=a(11),c=a(0),l=a.n(c),o=a(14),i=a(1230),u=a(279),s=a(1319),m=a(1273),d=a(1192),f=a(1274),p=a(1275),E=a(1276),b=a(1277),v=a(1369),g=a(1278),h=a(1346),y=a(1255),L=a(313),O=a.n(L),N=(a(1250),function(e){return function(e,t,a){var n={currency:t,style:"currency",currencyDisplay:"symbol"};return new Intl.NumberFormat(e,n).format(a)}("id-ID","IDR",e)});t.a=Object(u.c)(Object(o.b)(null,null)((function(e){var t=e.intl,a=e.dataHeader,c=void 0===a?[]:a,o=e.handleParams,u=e.loading,L=void 0!==u&&u,j=e.err,k=void 0!==j&&j,A=e.children,S=e.countData,_=void 0===S?0:S,w=e.hecto,x=void 0===w?1:w,T=l.a.useState({numberColum:0,page:0,count:_,rowsPerPage:10}),D=Object(r.a)(T,2),I=D[0],R=D[1],C=l.a.useState({name:c.filter((function(e){return!0===e.order.status&&!0===e.order.active})).length>0?c.filter((function(e){return!0===e.order.status&&!0===e.order.active}))[0].name.replace(/\s/g,""):"",order:!(c.filter((function(e){return!0===e.order.status&&!0===e.order.active})).length>0)||c.filter((function(e){return!0===e.order.status&&!0===e.order.active}))[0].order.status,type:c.filter((function(e){return!0===e.order.status&&!0===e.order.active&&null!==e.order.type})).length>0?c.filter((function(e){return!0===e.order.status&&!0===e.order.active&&null!==e.order.type}))[0].order.type:null}),B=Object(r.a)(C,2),P=B[0],F=B[1],M=l.a.useState({}),Q=Object(r.a)(M,2),U=Q[0],G=Q[1],V=l.a.useState({filter:{},sort:{}}),Y=Object(r.a)(V,2),H=Y[0],W=Y[1],q=l.a.useState(null),J=Object(r.a)(q,2),K=J[0],z=J[1],Z=l.a.useCallback((function(e,t){var a,r=Object.assign({},I),c=H;c.filter=function(e){var t="";for(var a in e)e[a]&&(t+="filter["+a+"]="+e[a]+"&");return t}(e||U),c.sort="".concat((a=t||P).name,",").concat(null!==a.type?a.type?"asc":"desc":a.order?"asc":"desc"),r.page=r.page+1,c=Object.assign({},c,r),W(Object(n.a)({},c));var l=c.filter+"page="+c.page+"&rowsPerPage="+c.rowsPerPage+"&sort="+c.sort;"function"===typeof o&&o(l)}),[U,P,H,t,I]);l.a.useEffect(Z,[]),l.a.useEffect((function(){R(Object(n.a)(Object(n.a)({},I),{},{count:_||0}))}),[_]);var X=function(){z(null)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("form",{id:"filter-form-all",className:"panel-filter-table mb-1"},l.a.createElement("span",{className:"mr-2 mt-2 float-left"},l.a.createElement(i.a,{id:"LABEL.FILTER.TABLE"})),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",{className:""},c.filter((function(e){return!0===e.filter.active})).map((function(e,a){return l.a.createElement("div",{key:a.toString(),className:"btn-group hover-filter-table",status:"closed",id:a},l.a.createElement("div",{className:"btn btn-sm",id:"sub-filter-"+a,onClick:function(){z(a)}},l.a.createElement("span",null,l.a.createElement(i.a,{id:e.title}),":"),l.a.createElement("strong",{style:{paddingRight:1,paddingLeft:1}},l.a.createElement("span",{className:"filter-label",id:"filter-span-"+a},"currency"===e.filter.type&&U[e.name.replace(/\s/g,"")]?N(Number(U[e.name.replace(/\s/g,"")])):"phone"===e.filter.type&&U[e.name.replace(/\s/g,"")]?"(62)".concat(U[e.name.replace(/\s/g,"")]):"date"===e.filter.type&&U[e.name.replace(/\s/g,"")]?"".concat(O()(new Date(U[e.name.replace(/\s/g,"")])).format("DD MMM YYYY")):U[e.name.replace(/\s/g,"")])),U[e.name.replace(/\s/g,"")]?null:l.a.createElement("span",{style:{color:"#777777"}},l.a.createElement(i.a,{id:"LABEL.ALL"}))),l.a.createElement(s.a,{anchorEl:document.getElementById("sub-filter-".concat(K||0)),keepMounted:!1,open:a===K,onClose:X,PaperProps:{style:{transform:"translateX(0px) translateY(40px)"}}},l.a.createElement("div",{className:"px-2"},l.a.createElement("div",{className:"float-left"},"currency"===e.filter.type?l.a.createElement(y.a,{value:U[e.name.replace(/\s/g,"")]||"",displayType:"input",className:"form-control",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),thousandSeparator:".",decimalSeparator:",",allowEmptyFormatting:!0,allowLeadingZeros:!0,prefix:"Rp ",onValueChange:function(e){}}):"phone"===e.filter.type?l.a.createElement(y.a,{value:U[e.name.replace(/\s/g,"")]||"",displayType:"input",className:"form-control",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),format:"(+62)############",mask:"_",allowEmptyFormatting:!0,allowLeadingZeros:!0,onValueChange:function(e){}}):l.a.createElement("input",{type:e.filter.type,className:"form-control",min:"0",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),defaultValue:U[e.name.replace(/\s/g,"")]||"",placeholder:t.formatMessage({id:"LABEL.ALL"}),style:{width:200}})),l.a.createElement("div",{className:"d-flex"},l.a.createElement("button",{type:"button",className:"mx-1 float-left btn btn-sm btn-primary",onClick:function(){!function(e,t){var a=U;a[e]=document.getElementById(e).value,"currency"===t?a[e]=a[e].replace(/[Rp .]/g,"").replace(/[,]/g,"."):"phone"===t&&(a[e]=a[e].replace(/[(+62)_]/g,"")),R(Object(n.a)(Object(n.a)({},I),{},{page:0})),G(Object(n.a)({},a)),Z()}(e.name.replace(/\s/g,""),e.filter.type),X()}},l.a.createElement(i.a,{id:"LABEL.UPDATE"})),l.a.createElement("button",{type:"button",className:"mx-1 float-right btn btn-sm btn-light d-flex",onClick:function(){!function(e){var t=U;t[e]="",document.getElementById(e).value="",G(Object(n.a)({},t)),Z()}(e.name.replace(/\s/g,"")),X()}},l.a.createElement("i",{className:"fas fa-redo fa-right py-1 mx-1"}),l.a.createElement("span",{className:"pt-1"},l.a.createElement(i.a,{id:"LABEL.FILTER.RESET.TABLE"})))))))})),l.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger ml-2 mt-2 button-filter-submit",onClick:function(){G({}),document.getElementById("filter-form-all").reset(),Z({})}},l.a.createElement(i.a,{id:"LABEL.FILTER.RESET.TABLE"}))))),l.a.createElement("div",null,l.a.createElement(m.a,{component:d.a},l.a.createElement(f.a,{className:"hecto-"+x},l.a.createElement(p.a,null,l.a.createElement(E.a,null,c.map((function(e,t){return l.a.createElement(b.a,{className:"bg-primary text-uppercase ".concat((null===e||void 0===e?void 0:e.td)?null===e||void 0===e?void 0:e.td:""),key:t.toString()},e.order.active?l.a.createElement(v.a,{active:P.name===e.name.replace(/\s/g,""),direction:null!==P.type?P.type?"asc":"desc":P.order?"asc":"desc",onClick:function(){!function(e){var t=P;e.name.replace(/\s/g,"")===t.name?null!==t.type?t.type=!t.type:t.order=!t.order:(t.name=e.name.replace(/\s/g,""),t.order=!0,t.type=null),F(Object(n.a)({},t)),Z()}(e)}},l.a.createElement("span",null,l.a.createElement(i.a,{id:e.title}))):l.a.createElement("span",null,l.a.createElement(i.a,{id:e.title})))})))),l.a.createElement(g.a,null,A)),l.a.createElement("div",{className:"table-loading-data"},l.a.createElement("div",{className:"text-center font-weight-bold py-5"},l.a.createElement("div",{className:"table-loading-data-potition"},L&&l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-spinner fa-pulse text-dark mr-1"}),l.a.createElement(i.a,{id:"LABEL.TABLE.WAITING_DATA"})),k&&l.a.createElement("span",{className:"text-danger"},l.a.createElement("i",{className:"far fa-frown text-danger mr-1"}),l.a.createElement(i.a,{id:"LABEL.ERROR_REQUEST"})))))),l.a.createElement(h.a,{rowsPerPageOptions:[10,25,50,75,100,250,500,1e3],component:"div",count:I.count,rowsPerPage:I.rowsPerPage,page:I.page,onChangePage:function(e,t){var a=I;a.numberColum=t>a.page?a.numberColum+a.rowsPerPage:a.numberColum-a.rowsPerPage,a.page=t,R(Object(n.a)({},a)),Z()},onChangeRowsPerPage:function(e){var t=I;t.page=0,t.rowsPerPage=parseInt(e.target.value,10),t.numberColum=0,R(Object(n.a)({},t)),Z()}}))))})))},1258:function(e,t,a){"use strict";a.d(t,"N",(function(){return c})),a.d(t,"p",(function(){return l})),a.d(t,"P",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"J",(function(){return u})),a.d(t,"K",(function(){return s})),a.d(t,"g",(function(){return m})),a.d(t,"i",(function(){return d})),a.d(t,"C",(function(){return f})),a.d(t,"E",(function(){return p})),a.d(t,"v",(function(){return E})),a.d(t,"x",(function(){return b})),a.d(t,"L",(function(){return v})),a.d(t,"f",(function(){return g})),a.d(t,"u",(function(){return h})),a.d(t,"B",(function(){return y})),a.d(t,"o",(function(){return L})),a.d(t,"Q",(function(){return O})),a.d(t,"G",(function(){return N})),a.d(t,"l",(function(){return j})),a.d(t,"z",(function(){return k})),a.d(t,"M",(function(){return A})),a.d(t,"O",(function(){return S})),a.d(t,"R",(function(){return _})),a.d(t,"t",(function(){return w})),a.d(t,"a",(function(){return x})),a.d(t,"q",(function(){return T})),a.d(t,"h",(function(){return D})),a.d(t,"w",(function(){return I})),a.d(t,"b",(function(){return R})),a.d(t,"j",(function(){return C})),a.d(t,"y",(function(){return B})),a.d(t,"F",(function(){return P})),a.d(t,"k",(function(){return F})),a.d(t,"D",(function(){return M})),a.d(t,"r",(function(){return Q})),a.d(t,"c",(function(){return U})),a.d(t,"m",(function(){return G})),a.d(t,"e",(function(){return V})),a.d(t,"I",(function(){return Y})),a.d(t,"n",(function(){return H})),a.d(t,"A",(function(){return W})),a.d(t,"s",(function(){return q})),a.d(t,"H",(function(){return J}));var n=a(32),r=a.n(n);function c(e){return r.a.get("/api/v1/dokter".concat(e?"?"+e:""))}function l(e){return r.a.delete("/api/v1/dokter/".concat(e))}function o(e){return r.a.get("/api/v1/poliall".concat(e?"?"+e:""))}function i(e){return r.a.put("/api/v1/poli/enable/".concat(e))}function u(e){return r.a.put("/api/v1/poli/disable/".concat(e))}function s(){return r.a.get("/api/v1/poli")}function m(e){return r.a.post("/api/v1/dokter",e)}function d(e){return r.a.post("/api/v1/poli",e)}function f(e){return r.a.get("/api/v1/dokter/".concat(e))}function p(e){return r.a.get("/api/v1/poli/".concat(e))}function E(e,t){return r.a.post("/api/v1/dokter/".concat(e),t)}function b(e,t){return r.a.put("/api/v1/poli/".concat(e),t)}function v(e){return r.a.get("/api/v1/article".concat(e?"?"+e:""))}function g(e){return r.a.post("/api/v1/article",e)}function h(e,t){return r.a.post("/api/v1/article/".concat(e),t)}function y(e){return r.a.get("/api/v1/article/".concat(e))}function L(e){return r.a.delete("/api/v1/article/".concat(e))}function O(e){return r.a.get("/api/v1/layanan".concat(e?"?"+e:""))}function N(e){return r.a.get("/api/v1/layanan/".concat(e))}function j(e){return r.a.post("/api/v1/layanan",e)}function k(e,t){return r.a.put("/api/v1/layanan/".concat(e),t)}function A(e){return r.a.get("/api/v1/report/dailyincome".concat(e?"?"+e:""))}function S(){return r.a.get("/api/v1/handover")}function _(e){return r.a.put("/api/v1/handover/".concat(e))}function w(e){return r.a.get("/api/v1/handover/".concat(e))}function x(){return r.a.get("/api/v1/medicalkind")}function T(e){return r.a.delete("/api/v1/medicalkind/".concat(e))}function D(e){return r.a.post("/api/v1/medicalkind",e)}function I(e,t){return r.a.put("/api/v1/medicalkind/".concat(e),t)}function R(e){return r.a.get("/api/v1/formkind".concat(e?"?"+e:""))}function C(e){return r.a.post("/api/v1/formkind",e)}function B(e,t){return r.a.put("/api/v1/formkind/".concat(e),t)}function P(e){return r.a.get("/api/v1/formkindid/".concat(e))}function F(e){return r.a.post("/api/v1/medicalform",e)}function M(e){return r.a.get("/api/v1/medicalform/".concat(e))}function Q(e){return r.a.delete("/api/v1/medicalform/".concat(e))}function U(e){return r.a.get("/api/v1/staff".concat(e?"?"+e:""))}function G(e,t){return r.a.post("/api/v1/staff/".concat(e),t)}function V(e){return r.a.put("/api/v1/staff/ena/".concat(e))}function Y(e){return r.a.put("/api/v1/staff/dis/".concat(e))}function H(e){return r.a.post("/api/v1/takaran",e)}function W(e,t){return r.a.put("/api/v1/takaran/".concat(e),t)}function q(e){return r.a.delete("/api/v1/takaran/".concat(e))}function J(){return r.a.get("/api/v1/takaran")}},1315:function(e,t,a){},1358:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(100),l=a(20),o=a(93),i=a.n(o),u=a(1251),s=a(11),m=a(14),d=a(1230),f=a(279),p=a(30),E=a(1258),b=a(371),v=a(1276),g=a(1277),h=a(1254),y=a(49),L=a(92),O=a(1253),N=a(1246),j=a(1223),k=a(1224),A=a(1226),S=a(372),_=(a(13),a(60)),w=a(104),x=(a(373),a(1192)),T=a(1314),D=a.n(T),I=a(1234),R=(a(1315),[{value:"contoh_1",label:"Option 1"},{value:"contoh_2",label:"Option 2"}]),C=Object(I.a)((function(e){return{dualListboxPadding:{padding:"10px"}}})),B=Object(f.c)(Object(m.b)(null,null)((function(e){var t=e.intl,a=e.disabled,n=void 0!==a&&a,c=e.options,l=void 0===c?R:c,o=e.select,i=void 0===o?[]:o,u=e.handleSelected,m=r.a.useState(i),d=Object(s.a)(m,2),f=d[0],p=d[1],E=C();return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{className:E.dualListboxPadding},r.a.createElement(D.a,{allowDuplicates:!1,canFilter:!0,filterPlaceholder:t.formatMessage({id:"LABEL.SEARCH"}),simpleValue:!1,disabled:n,options:l,selected:f,onChange:function(e,t){"function"===typeof u&&u(e,t),p(e)},showHeaderLabels:!0,icons:{moveLeft:r.a.createElement("span",{className:"fa fa-chevron-left"}),moveAllLeft:[r.a.createElement("span",{key:0,className:"fa fa-chevron-left"}),r.a.createElement("span",{key:1,className:"fa fa-chevron-left"})],moveRight:r.a.createElement("span",{className:"fa fa-chevron-right"}),moveAllRight:[r.a.createElement("span",{key:0,className:"fa fa-chevron-right"}),r.a.createElement("span",{key:1,className:"fa fa-chevron-right"})],moveDown:r.a.createElement("span",{className:"fa fa-chevron-down"}),moveUp:r.a.createElement("span",{className:"fa fa-chevron-up"}),moveTop:r.a.createElement("span",{className:"fa fa-double-angle-up"}),moveBottom:r.a.createElement("span",{className:"fa fa-double-angle-down"})}})))}))),P=[{title:"LABEL.TYPE_SCREENING",name:"kind_nm",order:{active:!0,status:!0,type:!0},filter:{active:!0,type:"text"}},{title:"LABEL.SCREENING_SECTION",name:"poli",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.DATE_UPDATED",name:"updated_at",order:{active:!0,status:!1},filter:{active:!0,type:"date"}},{title:"LABEL.TABLE_HEADER.ACTION",name:"action",order:{active:!1,status:!1},filter:{active:!1,type:"true"}}],F=[{label:"LABEL.EDIT",icon:"fas fa-external-link-alt text-primary",type:"open"},{label:"LABEL.SCREENING_FORM",icon:"fas fa-bong text-primary",type:"add"}],M={};var Q=Object(f.c)(Object(m.b)(null,L.a)((function(e){var t=e.intl,a=Object(p.i)(),c=Object(n.useState)(!0),o=Object(s.a)(c,2),m=o[0],f=o[1],L=Object(n.useState)({data:[],count:0}),x=Object(s.a)(L,2),T=x[0],D=x[1],I=Object(n.useState)(!1),R=Object(s.a)(I,2),C=R[0],Q=R[1],U=Object(n.useState)(!1),G=Object(s.a)(U,2),V=G[0],Y=G[1],H=Object(n.useState)([]),W=Object(s.a)(H,2),q=W[0],J=W[1],K=Object(n.useState)({}),z=Object(s.a)(K,2),Z=z[0],X=z[1],$=Object(n.useState)(!1),ee=Object(s.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),re=Object(s.a)(ne,2),ce=re[0],le=re[1],oe=Object(n.useState)(null),ie=Object(s.a)(oe,2),ue=ie[0],se=ie[1],me=Object(n.useState)(!1),de=Object(s.a)(me,2),fe=de[0],pe=de[1],Ee=Object(n.useState)([]),be=Object(s.a)(Ee,2),ve=be[0],ge=be[1],he=Object(n.useState)([]),ye=Object(s.a)(he,2),Le=ye[0],Oe=ye[1];Object(n.useLayoutEffect)((function(){a.setBreadcrumbs([{pathname:"/administrator/dashboard",title:t.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/administrator/screening-setting",title:t.formatMessage({id:"LABEL.SCREENING_SETTING"})}]),a.setTitle(t.formatMessage({id:"LABEL.SCREENING_SETTING"}))}),[]);var Ne=_.b().shape({poli_id:_.d().required(t.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),kind_nm:_.d().required(t.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"}))}),je=Object(w.b)({initialValues:M,validationSchema:Ne,onSubmit:function(){var e=Object(u.a)(i.a.mark((function e(a,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setStatus,n.setSubmitting,Y(!0),ue?Object(E.y)(ue,a).then((function(e){ke(ce),je.resetForm(),y.a.showSnackbar(t.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success",3e3),ae(!1),Y(!1)})).catch((function(e){var t;console.log(e),Y(!1),y.a.showSnackbar(null===(t=e.response)||void 0===t?void 0:t.data.messages)})):Object(E.j)(a).then((function(e){ke(ce),je.resetForm(),y.a.showSnackbar(t.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success",3e3),ae(!1),Y(!1)})).catch((function(e){var t;Y(!1),y.a.showSnackbar(null===(t=e.response)||void 0===t?void 0:t.data.messages)}));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}),ke=function(e){f(!0),D(Object(l.a)(Object(l.a)({},T),{},{count:0,data:[]})),Q(!1),le(e),Object(E.b)(e).then((function(e){f(!1),D(Object(l.a)(Object(l.a)({},T),{},{count:0,data:e.data.data}))})).catch((function(e){Q(!0),f(!1),y.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))};function Ae(e,t){return Se.apply(this,arguments)}function Se(){return(Se=Object(u.a)(i.a.mark((function e(a,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("open"!==a){e.next=5;break}se(n.id),Object(E.F)(n.id).then((function(e){var t=q.findIndex((function(t){return t.value===e.data.data.poli_id}));X(q[t]),je.setFieldValue("poli_id",e.data.data.poli_id),je.setFieldValue("kind_nm",e.data.data.kind_nm),je.setFieldTouched(Object(l.a)(Object(l.a)({},je),{},{poli_id:!0})),ae(!0)})).catch((function(e){y.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))})),e.next=20;break;case 5:if("add"!==a){e.next=20;break}return se(n.id),e.prev=7,r=[],e.next=11,Object(E.D)(n.id);case 11:e.sent.data.data.forEach((function(e){var t={value:e.id,label:e.nama,title:e.nama};r.push(t)})),Oe(r),pe(!0),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(7),y.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}));case 20:case"end":return e.stop()}}),e,null,[[7,17]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){Object(E.K)().then((function(e){var t=e.data.data;t.forEach((function(e){e.value=e.id,e.label=e.poli})),J(t)})).catch((function(e){y.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))}),[]),Object(n.useEffect)((function(){Object(E.a)().then((function(e){var t=[];e.data.data.forEach((function(e){var a={value:e.id,label:e.nama,title:e.nama};t.push(a)})),ge(t)})).catch((function(e){y.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{open:te,maxWidth:"xs",fullWidth:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(j.a,null,ue?r.a.createElement(d.a,{id:"LABEL.EDIT"}):r.a.createElement(d.a,{id:"LABEL.ADD"})),r.a.createElement("form",{className:"form",autoComplete:"off",onSubmit:je.handleSubmit},r.a.createElement(k.a,null,r.a.createElement("div",{style:{minHeight:"20rem"}},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-5 col-form-label"},r.a.createElement(d.a,{id:"LABEL.SCREENING_SECTION"})),r.a.createElement("div",{className:"col-sm-7"},r.a.createElement(S.a,{value:Z,options:q,isDisabled:V,className:"form-control border-0 p-0 h-100",classNamePrefix:"react-select",onChange:function(e){X(e),je.setFieldValue("poli_id",e.value)}}),je.touched.poli_id&&je.errors.poli_id&&r.a.createElement("span",{className:"text-left text-danger"},je.errors.poli_id))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-5 col-form-label"},r.a.createElement(d.a,{id:"LABEL.TYPE_SCREENING"})),r.a.createElement("div",{className:"col-sm-7"},r.a.createElement("input",Object.assign({type:"text",className:"form-control",disabled:V,required:!0},je.getFieldProps("kind_nm"))),je.touched.kind_nm&&je.errors.kind_nm&&r.a.createElement("span",{className:"text-left text-danger"},je.errors.kind_nm))))),r.a.createElement(A.a,null,r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!je.isValid||0===Object.keys(je.touched).length&&je.touched.constructor===Object||V},V?r.a.createElement("i",{className:"fas fa-spinner fa-pulse px-2"}):r.a.createElement("i",{className:"fas fa-save ml-2"}),V?r.a.createElement(d.a,{id:"LABEL.WAITING"}):r.a.createElement(d.a,{id:"LABEL.SAVE"})),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){ae(!1),je.resetForm()},disabled:V},r.a.createElement("i",{className:"fas fa-times px-1"}),r.a.createElement(d.a,{id:"LABEL.CANCEL"}))))),r.a.createElement(N.a,{open:fe,maxWidth:"md",fullWidth:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(j.a,null,"list"),r.a.createElement(k.a,null,r.a.createElement(B,{options:ve,select:Le,handleSelected:function(e,a){console.log("selection && selection",a,a),a&&a.length>0&&a.forEach((function(a){var n={formkind_id:ue,medkind_id:a.value,dokter_only:1};-1!==e.findIndex((function(e){return e.value===a.value}))?Object(E.k)(n).catch((function(e){y.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))})):Object(E.r)(a.value).catch((function(e){y.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))}))}})),r.a.createElement(A.a,null,r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){pe(!1)}},r.a.createElement(d.a,{id:"LABEL.OK"})))),r.a.createElement(b.b,null,r.a.createElement(b.d,{title:""},r.a.createElement(b.f,null,r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){se(null),ae(!0)}},r.a.createElement("i",{className:"fas fa-plus-circle"}),r.a.createElement(d.a,{id:"LABEL.ADD"})))),r.a.createElement(b.c,null,r.a.createElement(h.a,{dataHeader:P,handleParams:ke,loading:m,err:C,countData:T.count,hecto:5},T.data.map((function(e,t){return r.a.createElement(v.a,{key:t.toString()},r.a.createElement(g.a,null,null===e||void 0===e?void 0:e.kind_nm),r.a.createElement(g.a,null,null===e||void 0===e?void 0:e.poli.poli),r.a.createElement(g.a,null,window.moment(new Date(null===e||void 0===e?void 0:e.updated_at)).format("DD MMM YYYY")),r.a.createElement(g.a,null,r.a.createElement(O.a,{data:e,handleAction:Ae,ops:F})))}))))))})));t.default=Object(f.c)(Object(m.b)(null,null)((function(e){return r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/administrator/screening-setting",component:function(e){return r.a.createElement(Q,e)},exact:!0}))})))}}]);
//# sourceMappingURL=24.fdf10737.chunk.js.map