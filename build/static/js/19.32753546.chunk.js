(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[19],{1240:function(e,a,t){},1241:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t(12),r=t(0),c=t.n(r),l=t(21),o=t(1238),i=t(1217),s=t(1295),m=t(1325),u=t(1252),d=t(1253),p=t(1255),f=t(1220),E=t(13),b=Object(l.a)((function(e){return{tooltip:{boxShadow:e.shadows[1],fontSize:"0.875rem",marginTop:"0.25rem"}}}))(o.a);function g(e){var a=e.data,t=e.handleAction,r=e.ops,l=e.label,o=void 0===l?null:l,g=e.exclude,v=void 0===g?[]:g,y=c.a.useState(null),L=Object(n.a)(y,2),O=L[0],h=L[1],N=Boolean(O);function j(e){h(e.currentTarget)}function A(){h(null)}var x=c.a.useCallback((function(e,a){"function"===typeof t&&t(e,a),A()}),[t,A]),I=r;return c.a.createElement("div",null,o?c.a.createElement(b,{title:c.a.createElement(f.a,{id:o}),placement:"bottom"},c.a.createElement(i.a,{"aria-label":"More","aria-controls":"long-menu","aria-haspopup":"true",onClick:j},c.a.createElement(p.a,null))):c.a.createElement(i.a,{"aria-label":"More","aria-controls":"long-menu","aria-haspopup":"true",onClick:j,style:{margin:"-6px 0px",padding:8}},c.a.createElement(p.a,null)),c.a.createElement(s.a,{id:"long-menu",anchorEl:O,keepMounted:!0,open:N,onClose:A,PaperProps:{style:{width:300,marginLeft:-50}}},I.filter((function(e){return!v.includes(e.type)})).map((function(e,t){var n,r;return e.to?c.a.createElement(E.b,{key:t,to:null===(n=e.to)||void 0===n?void 0:n.url,style:null===(r=e.to)||void 0===r?void 0:r.style},c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement("i",{className:e.icon})),c.a.createElement(d.a,{primary:c.a.createElement(f.a,{id:e.label})}))):c.a.createElement(m.a,{key:t,onClick:function(){return x(e.type,a)},disabled:e.disabled},c.a.createElement(u.a,null,c.a.createElement("i",{className:e.icon})),c.a.createElement(d.a,{primary:c.a.createElement(f.a,{id:e.label})}))}))))}},1242:function(e,a,t){"use strict";var n=t(25),r=t(12),c=t(0),l=t.n(c),o=t(15),i=t(1220),s=t(279),m=t(1295),u=t(1274),d=t(1182),p=t(1275),f=t(1276),E=t(1277),b=t(1278),g=t(1332),v=t(1279),y=t(1311),L=t(1245),O=t(313),h=t.n(O),N=(t(1240),function(e){return function(e,a,t){var n={currency:a,style:"currency",currencyDisplay:"symbol"};return new Intl.NumberFormat(e,n).format(t)}("id-ID","IDR",e)});a.a=Object(s.c)(Object(o.b)(null,null)((function(e){var a=e.intl,t=e.dataHeader,c=void 0===t?[]:t,o=e.handleParams,s=e.loading,O=void 0!==s&&s,j=e.err,A=void 0!==j&&j,x=e.children,I=e.countData,k=void 0===I?0:I,D=e.hecto,T=void 0===D?1:D,B=l.a.useState({numberColum:0,page:0,count:k,rowsPerPage:10}),S=Object(r.a)(B,2),w=S[0],_=S[1],R=l.a.useState({name:c.filter((function(e){return!0===e.order.status&&!0===e.order.active})).length>0?c.filter((function(e){return!0===e.order.status&&!0===e.order.active}))[0].name.replace(/\s/g,""):"",order:!(c.filter((function(e){return!0===e.order.status&&!0===e.order.active})).length>0)||c.filter((function(e){return!0===e.order.status&&!0===e.order.active}))[0].order.status,type:c.filter((function(e){return!0===e.order.status&&!0===e.order.active&&null!==e.order.type})).length>0?c.filter((function(e){return!0===e.order.status&&!0===e.order.active&&null!==e.order.type}))[0].order.type:null}),C=Object(r.a)(R,2),P=C[0],F=C[1],M=l.a.useState({}),U=Object(r.a)(M,2),V=U[0],Q=U[1],q=l.a.useState({filter:{},sort:{}}),H=Object(r.a)(q,2),z=H[0],W=H[1],Y=l.a.useState(null),G=Object(r.a)(Y,2),J=G[0],Z=G[1],X=l.a.useCallback((function(e,a){var t,r=Object.assign({},w),c=z;c.filter=function(e){var a="";for(var t in e)e[t]&&(a+="filter["+t+"]="+e[t]+"&");return a}(e||V),c.sort="".concat((t=a||P).name,",").concat(null!==t.type?t.type?"asc":"desc":t.order?"asc":"desc"),r.page=r.page+1,c=Object.assign({},c,r),W(Object(n.a)({},c));var l=c.filter+"page="+c.page+"&rowsPerPage="+c.rowsPerPage+"&sort="+c.sort;"function"===typeof o&&o(l)}),[V,P,z,a,w]);l.a.useEffect(X,[]),l.a.useEffect((function(){_(Object(n.a)(Object(n.a)({},w),{},{count:k||0}))}),[k]);var K=function(){Z(null)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("form",{id:"filter-form-all",className:"panel-filter-table mb-1"},l.a.createElement("span",{className:"mr-2 mt-2 float-left"},l.a.createElement(i.a,{id:"LABEL.FILTER.TABLE"})),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",{className:""},c.filter((function(e){return!0===e.filter.active})).map((function(e,t){return l.a.createElement("div",{key:t.toString(),className:"btn-group hover-filter-table",status:"closed",id:t},l.a.createElement("div",{className:"btn btn-sm",id:"sub-filter-"+t,onClick:function(){Z(t)}},l.a.createElement("span",null,l.a.createElement(i.a,{id:e.title}),":"),l.a.createElement("strong",{style:{paddingRight:1,paddingLeft:1}},l.a.createElement("span",{className:"filter-label",id:"filter-span-"+t},"currency"===e.filter.type&&V[e.name.replace(/\s/g,"")]?N(Number(V[e.name.replace(/\s/g,"")])):"phone"===e.filter.type&&V[e.name.replace(/\s/g,"")]?"(62)".concat(V[e.name.replace(/\s/g,"")]):"date"===e.filter.type&&V[e.name.replace(/\s/g,"")]?"".concat(h()(new Date(V[e.name.replace(/\s/g,"")])).format("DD MMM YYYY")):V[e.name.replace(/\s/g,"")])),V[e.name.replace(/\s/g,"")]?null:l.a.createElement("span",{style:{color:"#777777"}},l.a.createElement(i.a,{id:"LABEL.ALL"}))),l.a.createElement(m.a,{anchorEl:J?document.getElementById("sub-filter-".concat(J)):null,keepMounted:!1,open:t===J,onClose:K,PaperProps:{style:{transform:"translateX(0px) translateY(40px)"}}},l.a.createElement("div",{className:"px-2"},l.a.createElement("div",{className:"float-left"},"currency"===e.filter.type?l.a.createElement(L.a,{value:V[e.name.replace(/\s/g,"")]||"",displayType:"input",className:"form-control",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),thousandSeparator:".",decimalSeparator:",",allowEmptyFormatting:!0,allowLeadingZeros:!0,prefix:"Rp ",onValueChange:function(e){}}):"phone"===e.filter.type?l.a.createElement(L.a,{value:V[e.name.replace(/\s/g,"")]||"",displayType:"input",className:"form-control",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),format:"(+62)############",mask:"_",allowEmptyFormatting:!0,allowLeadingZeros:!0,onValueChange:function(e){}}):l.a.createElement("input",{type:e.filter.type,className:"form-control",min:"0",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),defaultValue:V[e.name.replace(/\s/g,"")]||"",placeholder:a.formatMessage({id:"LABEL.ALL"}),style:{width:200}})),l.a.createElement("div",{className:"d-flex"},l.a.createElement("button",{type:"button",className:"mx-1 float-left btn btn-sm btn-primary",onClick:function(){!function(e,a){var t=V;t[e]=document.getElementById(e).value,"currency"===a?t[e]=t[e].replace(/[Rp .]/g,"").replace(/[,]/g,"."):"phone"===a&&(t[e]=t[e].replace(/[(+62)_]/g,"")),Q(Object(n.a)({},t)),X()}(e.name.replace(/\s/g,""),e.filter.type),K()}},l.a.createElement(i.a,{id:"LABEL.UPDATE"})),l.a.createElement("button",{type:"button",className:"mx-1 float-right btn btn-sm btn-light d-flex",onClick:function(){!function(e){var a=V;a[e]="",document.getElementById(e).value="",Q(Object(n.a)({},a)),X()}(e.name.replace(/\s/g,"")),K()}},l.a.createElement("i",{className:"fas fa-redo fa-right py-1 mx-1"}),l.a.createElement("span",{className:"pt-1"},l.a.createElement(i.a,{id:"LABEL.FILTER.RESET.TABLE"})))))))})),l.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger ml-2 mt-2 button-filter-submit",onClick:function(){Q({}),document.getElementById("filter-form-all").reset(),X({})}},l.a.createElement(i.a,{id:"LABEL.FILTER.RESET.TABLE"}))))),l.a.createElement("div",null,l.a.createElement(u.a,{component:d.a},l.a.createElement(p.a,{className:"hecto-"+T},l.a.createElement(f.a,null,l.a.createElement(E.a,null,c.map((function(e,a){return l.a.createElement(b.a,{className:"bg-primary text-uppercase ".concat((null===e||void 0===e?void 0:e.td)?null===e||void 0===e?void 0:e.td:""),key:a.toString()},e.order.active?l.a.createElement(g.a,{active:P.name===e.name.replace(/\s/g,""),direction:null!==P.type?P.type?"asc":"desc":P.order?"asc":"desc",onClick:function(){!function(e){var a=P;e.name.replace(/\s/g,"")===a.name?null!==a.type?a.type=!a.type:a.order=!a.order:(a.name=e.name.replace(/\s/g,""),a.order=!0,a.type=null),F(Object(n.a)({},a)),X()}(e)}},l.a.createElement("span",null,l.a.createElement(i.a,{id:e.title}))):l.a.createElement("span",null,l.a.createElement(i.a,{id:e.title})))})))),l.a.createElement(v.a,null,x)),l.a.createElement("div",{className:"table-loading-data"},l.a.createElement("div",{className:"text-center font-weight-bold py-5"},l.a.createElement("div",{className:"table-loading-data-potition"},O&&l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-spinner fa-pulse text-dark mr-1"}),l.a.createElement(i.a,{id:"LABEL.TABLE.WAITING_DATA"})),A&&l.a.createElement("span",{className:"text-danger"},l.a.createElement("i",{className:"far fa-frown text-danger mr-1"}),l.a.createElement(i.a,{id:"LABEL.ERROR_REQUEST"})))))),l.a.createElement(y.a,{rowsPerPageOptions:[10,25,50,75,100,250,500,1e3],component:"div",count:w.count,rowsPerPage:w.rowsPerPage,page:w.page,onChangePage:function(e,a){var t=w;t.numberColum=a>t.page?t.numberColum+t.rowsPerPage:t.numberColum-t.rowsPerPage,t.page=a,_(Object(n.a)({},t)),X()},onChangeRowsPerPage:function(e){var a=w;a.page=0,a.rowsPerPage=parseInt(e.target.value,10),a.numberColum=0,_(Object(n.a)({},a)),X()}}))))})))},1248:function(e,a,t){"use strict";t.d(a,"C",(function(){return c})),t.d(a,"E",(function(){return l})),t.d(a,"z",(function(){return o})),t.d(a,"e",(function(){return i})),t.d(a,"g",(function(){return s})),t.d(a,"u",(function(){return m})),t.d(a,"w",(function(){return u})),t.d(a,"p",(function(){return d})),t.d(a,"q",(function(){return p})),t.d(a,"A",(function(){return f})),t.d(a,"d",(function(){return E})),t.d(a,"o",(function(){return b})),t.d(a,"t",(function(){return g})),t.d(a,"l",(function(){return v})),t.d(a,"F",(function(){return y})),t.d(a,"y",(function(){return L})),t.d(a,"j",(function(){return O})),t.d(a,"s",(function(){return h})),t.d(a,"B",(function(){return N})),t.d(a,"D",(function(){return j})),t.d(a,"G",(function(){return A})),t.d(a,"n",(function(){return x})),t.d(a,"a",(function(){return I})),t.d(a,"f",(function(){return k})),t.d(a,"b",(function(){return D})),t.d(a,"h",(function(){return T})),t.d(a,"r",(function(){return B})),t.d(a,"x",(function(){return S})),t.d(a,"i",(function(){return w})),t.d(a,"v",(function(){return _})),t.d(a,"m",(function(){return R})),t.d(a,"c",(function(){return C})),t.d(a,"k",(function(){return P}));var n=t(59),r=t.n(n);function c(e){return r.a.get("/api/v1/dokter".concat(e?"?"+e:""))}function l(e){return r.a.get("/api/v1/poli".concat(e?"?"+e:""))}function o(){return r.a.get("/api/v1/poli")}function i(e){return r.a.post("/api/v1/dokter",e)}function s(e){return r.a.post("/api/v1/poli",e)}function m(e){return r.a.get("/api/v1/dokter/".concat(e))}function u(e){return r.a.get("/api/v1/poli/".concat(e))}function d(e,a){return r.a.post("/api/v1/dokter/".concat(e),a)}function p(e,a){return r.a.put("/api/v1/poli/".concat(e),a)}function f(e){return r.a.get("/api/v1/article".concat(e?"?"+e:""))}function E(e){return r.a.post("/api/v1/article",e)}function b(e,a){return r.a.post("/api/v1/article/".concat(e),a)}function g(e){return r.a.get("/api/v1/article/".concat(e))}function v(e){return r.a.delete("/api/v1/article/".concat(e))}function y(e){return r.a.get("/api/v1/layanan".concat(e?"?"+e:""))}function L(e){return r.a.get("/api/v1/layanan/".concat(e))}function O(e){return r.a.post("/api/v1/layanan",e)}function h(e,a){return r.a.put("/api/v1/layanan/".concat(e),a)}function N(e){return r.a.get("/api/v1/report/dailyincome".concat(e?"?"+e:""))}function j(){return r.a.get("/api/v1/handover")}function A(e){return r.a.put("/api/v1/handover/".concat(e))}function x(e){return r.a.get("/api/v1/handover/".concat(e))}function I(){return r.a.get("/api/v1/medicalkind")}function k(e){return r.a.post("/api/v1/medicalkind",e)}function D(e){return r.a.get("/api/v1/formkind".concat(e?"?"+e:""))}function T(e){return r.a.post("/api/v1/formkind",e)}function B(e,a){return r.a.put("/api/v1/formkind/".concat(e),a)}function S(e){return r.a.get("/api/v1/formkindid/".concat(e))}function w(e){return r.a.post("/api/v1/medicalform",e)}function _(e){return r.a.get("/api/v1/medicalform/".concat(e))}function R(e){return r.a.delete("/api/v1/medicalform/".concat(e))}function C(e){return r.a.get("/api/v1/staff".concat(e?"?"+e:""))}function P(e,a){return r.a.post("/api/v1/staff/".concat(e),a)}},1252:function(e,a,t){"use strict";var n=t(1),r=t(11),c=t(0),l=(t(7),t(10)),o=t(21),i=t(1246),s=c.forwardRef((function(e,a){var t=e.classes,o=e.className,s=Object(r.a)(e,["classes","className"]),m=c.useContext(i.a);return c.createElement("div",Object(n.a)({className:Object(l.a)(t.root,o,"flex-start"===m.alignItems&&t.alignItemsFlexStart),ref:a},s))}));a.a=Object(o.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(s)},1253:function(e,a,t){"use strict";var n=t(1),r=t(11),c=t(0),l=(t(7),t(10)),o=t(21),i=t(551),s=t(1246),m=c.forwardRef((function(e,a){var t=e.children,o=e.classes,m=e.className,u=e.disableTypography,d=void 0!==u&&u,p=e.inset,f=void 0!==p&&p,E=e.primary,b=e.primaryTypographyProps,g=e.secondary,v=e.secondaryTypographyProps,y=Object(r.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),L=c.useContext(s.a).dense,O=null!=E?E:t;null==O||O.type===i.a||d||(O=c.createElement(i.a,Object(n.a)({variant:L?"body2":"body1",className:o.primary,component:"span",display:"block"},b),O));var h=g;return null==h||h.type===i.a||d||(h=c.createElement(i.a,Object(n.a)({variant:"body2",className:o.secondary,color:"textSecondary",display:"block"},v),h)),c.createElement("div",Object(n.a)({className:Object(l.a)(o.root,m,L&&o.dense,f&&o.inset,O&&h&&o.multiline),ref:a},y),O,h)}));a.a=Object(o.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(m)},1255:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(1),l=t(552);a.a=function(e,a){var t=r.a.memo(r.a.forwardRef((function(a,t){return r.a.createElement(l.a,Object(c.a)({ref:t},a),e)})));return t.muiName=l.a.muiName,t}(r.a.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}))},1328:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(99),l=t(93),o=t.n(l),i=t(25),s=t(1243),m=t(12),u=t(15),d=t(1220),p=t(279),f=t(30),E=t(1248),b=t(371),g=t(1277),v=t(1278),y=t(1242),L=t(51),O=t(92),h=t(1241),N=t(1236),j=t(1213),A=t(1214),x=t(1216),I=t(1247),k=t(14),D=t(64),T=t(105),B=t(372),S=[{title:"LABEL.NAME",name:"nama",order:{active:!0,status:!0},filter:{active:!0,type:"text"}},{title:"LABEL.EDUCATION",name:"pendidikan",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.EMAIL",name:"email",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.POLI",name:"poli",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.TABLE_HEADER.ACTION",name:"action",order:{active:!1,status:!1},filter:{active:!1,type:"true"}}],w=[{label:"LABEL.DETAIL",icon:"fas fa-external-link-alt text-primary",type:"open"}],_={};var R=Object(p.c)(Object(u.b)(null,O.a)((function(e){var a=e.intl,t=Object(f.i)(),l=Object(n.useState)(!0),u=Object(m.a)(l,2),p=u[0],O=u[1],R=Object(n.useState)({data:[],count:0}),C=Object(m.a)(R,2),P=C[0],F=C[1],M=Object(n.useState)(!1),U=Object(m.a)(M,2),V=U[0],Q=U[1],q=Object(n.useState)(!1),H=Object(m.a)(q,2),z=H[0],W=H[1],Y=(Object(c.g)(),Object(n.useState)([])),G=Object(m.a)(Y,2),J=G[0],Z=G[1],X=Object(n.useState)({}),K=Object(m.a)(X,2),$=K[0],ee=K[1],ae=Object(n.useState)(!1),te=Object(m.a)(ae,2),ne=te[0],re=te[1],ce=Object(n.useState)({init:"",load:""}),le=Object(m.a)(ce,2),oe=le[0],ie=le[1],se=Object(n.useState)(""),me=Object(m.a)(se,2),ue=me[0],de=me[1],pe=Object(n.useState)(""),fe=Object(m.a)(pe,2),Ee=fe[0],be=fe[1],ge=Object(n.useState)(null),ve=Object(m.a)(ge,2),ye=ve[0],Le=ve[1];Object(n.useLayoutEffect)((function(){t.setBreadcrumbs([{pathname:"/administrator/dashboard",title:a.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/administrator/doctor-page/list",title:a.formatMessage({id:"LABEL.DOCTOR_LIST"})}]),t.setTitle(a.formatMessage({id:"LABEL.DOCTOR_LIST"}))}),[]);var Oe=D.b().shape({nama:D.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),tempat:D.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),tgl_lahir:D.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),pendidikan:D.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),poli_id:D.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),email:D.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),desc:D.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"}))}),he=Object(T.b)({initialValues:_,validationSchema:Oe,onSubmit:function(){var e=Object(s.a)(o.a.mark((function e(t,n){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setStatus,n.setSubmitting,W(!0),!ue&&t.photo&&delete t.photo,r=new FormData,c=Object.assign({},t),Object.keys(c).forEach((function(e){r.append(e,c[e])})),ye?Object(E.p)(ye,r).then((function(e){Ne(Ee),he.resetForm(),L.a.showSnackbar(a.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success",3e3),re(!1),W(!1),ee({}),ie(Object(i.a)(Object(i.a)({},oe),{},{init:"",load:""}))})).catch((function(e){var a;console.log(e),W(!1),L.a.showSnackbar(null===(a=e.response)||void 0===a?void 0:a.data.messages)})):Object(E.e)(r).then((function(e){Ne(Ee),he.resetForm(),L.a.showSnackbar(a.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success",3e3),re(!1),W(!1),ee({}),ie(Object(i.a)(Object(i.a)({},oe),{},{init:"",load:""}))})).catch((function(e){var a;W(!1),L.a.showSnackbar(null===(a=e.response)||void 0===a?void 0:a.data.messages)}));case 7:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()}),Ne=function(e){O(!0),F(Object(i.a)(Object(i.a)({},P),{},{count:0,data:[]})),Q(!1),be(e),Object(E.C)(e).then((function(e){O(!1),F(Object(i.a)(Object(i.a)({},P),{},{count:0,data:e.data.data}))})).catch((function(e){Q(!0),O(!1),L.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}))},je=function(e,t){Le(t.id),Object(E.u)(t.id).then((function(e){var a=J.findIndex((function(a){return a.value===e.data.data.poli_id}));ee(J[a]),ie(Object(i.a)(Object(i.a)({},oe),{},{init:e.data.data.photo})),he.setValues(e.data.data),he.setFieldTouched(Object(i.a)(Object(i.a)({},he),{},{nama:!0})),re(!0)})).catch((function(e){L.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}))};return Object(n.useEffect)((function(){Object(E.z)().then((function(e){var a=e.data.data;a.forEach((function(e){e.value=e.id,e.label=e.poli})),Z(a)})).catch((function(e){L.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{open:ne,maxWidth:"md",fullWidth:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(j.a,null,ye?r.a.createElement(d.a,{id:"LABEL.EDIT"}):r.a.createElement(d.a,{id:"LABEL.ADD"})),r.a.createElement("form",{className:"form",autoComplete:"off",onSubmit:he.handleSubmit},r.a.createElement(A.a,null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(d.a,{id:"LABEL.FOTO"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("div",{className:"image-input image-input-outline",id:"kt_profile_avatar",style:{backgroundImage:"url(".concat(Object(k.d)("/media/users/blank.png"))}},r.a.createElement("div",{className:"image-input-wrapper",style:{backgroundImage:"".concat(ue?"url('".concat(oe.load,"')"):oe.init?"url(".concat(Object(B.b)(),"/storage/app/dokter_photo/").concat(oe.init,")"):"none")}}),r.a.createElement("label",{className:"btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow","data-action":"change","data-toggle":"tooltip",title:"","data-original-title":"Change avatar"},r.a.createElement("i",{className:"fa fa-pen icon-sm text-muted"}),r.a.createElement("input",{type:"file",accept:".png, .jpg, .jpeg",disabled:z,onChange:function(e){var a=new FileReader;a.onload=function(){ie(Object(i.a)(Object(i.a)({},oe),{},{load:a.result}))},a.readAsDataURL(e.target.files[0]),de(e.target.files[0]),he.setFieldValue("photo",e.target.files[0])}})),r.a.createElement("span",{className:"btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow","data-action":"cancel","data-toggle":"tooltip",title:"","data-original-title":"Cancel avatar"},r.a.createElement("i",{className:"ki ki-bold-close icon-xs text-muted"}))),r.a.createElement("span",{className:"form-text text-muted"},"Hanya menerima type file: png, jpg, jpeg."),r.a.createElement("span",{className:"text-left text-danger"},r.a.createElement(d.a,{id:"LABEL.VALIDATION_REQUIRED_FIELD"})))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(d.a,{id:"LABEL.NAME"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",Object.assign({type:"text",className:"form-control",disabled:z,required:!0},he.getFieldProps("nama"))),he.touched.nama&&he.errors.nama&&r.a.createElement("span",{className:"text-left text-danger"},he.errors.nama))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(d.a,{id:"LABEL.PLACE_OF_BIRTH"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",Object.assign({type:"text",className:"form-control",disabled:z,required:!0},he.getFieldProps("tempat"))),he.touched.tempat&&he.errors.tempat&&r.a.createElement("span",{className:"text-left text-danger"},he.errors.tempat))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(d.a,{id:"LABEL.DATE_OF_BIRTH"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",Object.assign({type:"date",className:"form-control",disabled:z,required:!0},he.getFieldProps("tgl_lahir"))),he.touched.tgl_lahir&&he.errors.tgl_lahir&&r.a.createElement("span",{className:"text-left text-danger"},he.errors.tgl_lahir))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(d.a,{id:"LABEL.EDUCATION"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",Object.assign({type:"text",className:"form-control",disabled:z,required:!0},he.getFieldProps("pendidikan"))),he.touched.pendidikan&&he.errors.pendidikan&&r.a.createElement("span",{className:"text-left text-danger"},he.errors.pendidikan))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(d.a,{id:"LABEL.EMAIL"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",Object.assign({type:"email",className:"form-control",disabled:z,required:!0},he.getFieldProps("email"))),he.touched.email&&he.errors.email&&r.a.createElement("span",{className:"text-left text-danger"},he.errors.email))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(d.a,{id:"LABEL.POLI"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement(I.a,{value:$,options:J,isDisabled:z,className:"form-control border-0 p-0 h-100 rounded-0",classNamePrefix:"react-select",menuPlacement:"top",onChange:function(e){ee(e),he.setFieldValue("poli_id",e.value)},onBlur:function(){he.setFieldTouched(Object(i.a)(Object(i.a)({},he),{},{poli_id:!0}))}}),he.touched.poli_id&&he.errors.poli_id&&r.a.createElement("span",{className:"text-left text-danger"},he.errors.poli_id))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(d.a,{id:"LABEL.DESC"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("textarea",Object.assign({rows:"3",className:"form-control",disabled:z,required:!0},he.getFieldProps("desc"))),he.touched.desc&&he.errors.desc&&r.a.createElement("span",{className:"text-left text-danger"},he.errors.desc)))),r.a.createElement(x.a,null,r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!he.isValid||0===Object.keys(he.touched).length&&he.touched.constructor===Object||z||!ue&&!oe.init},z?r.a.createElement("i",{className:"fas fa-spinner fa-pulse px-2"}):r.a.createElement("i",{className:"fas fa-save ml-2"}),z?r.a.createElement(d.a,{id:"LABEL.WAITING"}):r.a.createElement(d.a,{id:"LABEL.SAVE"})),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){re(!1),he.resetForm(),ie(Object(i.a)(Object(i.a)({},oe),{},{init:"",load:""})),ee({})},disabled:z},r.a.createElement("i",{className:"fas fa-times px-1"}),r.a.createElement(d.a,{id:"LABEL.CANCEL"}))))),r.a.createElement(b.b,null,r.a.createElement(b.d,{title:""},r.a.createElement(b.f,null,r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){Le(null),re(!0)}},r.a.createElement("i",{className:"fas fa-user-plus"}),r.a.createElement(d.a,{id:"LABEL.ADD"})))),r.a.createElement(b.c,null,r.a.createElement(y.a,{dataHeader:S,handleParams:Ne,loading:p,err:V,countData:P.count,hecto:10},P.data.map((function(e,a){return r.a.createElement(g.a,{key:a.toString()},r.a.createElement(v.a,null,null===e||void 0===e?void 0:e.nama),r.a.createElement(v.a,null,null===e||void 0===e?void 0:e.pendidikan),r.a.createElement(v.a,null,null===e||void 0===e?void 0:e.email),r.a.createElement(v.a,null,"---"),r.a.createElement(v.a,null,r.a.createElement(h.a,{data:e,handleAction:je,ops:w})))}))))))})));a.default=Object(p.c)(Object(u.b)(null,null)((function(e){return r.a.createElement(c.d,null,r.a.createElement(c.a,{exact:!0,from:"/administrator/doctor-page",to:"/administrator/dashboard"}),r.a.createElement(c.b,{path:"/administrator/doctor-page/list",component:function(e){return r.a.createElement(R,e)},exact:!0}))})))}}]);
//# sourceMappingURL=19.32753546.chunk.js.map