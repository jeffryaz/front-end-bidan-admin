(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[21],{1240:function(e,t,a){},1241:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(12),r=a(0),c=a.n(r),l=a(21),o=a(1238),i=a(1217),s=a(1295),m=a(1323),u=a(1261),d=a(1262),p=a(1273),f=a(1220),E=a(13),b=Object(l.a)((function(e){return{tooltip:{boxShadow:e.shadows[1],fontSize:"0.875rem",marginTop:"0.25rem"}}}))(o.a);function g(e){var t=e.data,a=e.handleAction,r=e.ops,l=e.label,o=void 0===l?null:l,g=e.exclude,v=void 0===g?[]:g,L=c.a.useState(null),O=Object(n.a)(L,2),h=O[0],N=O[1],y=Boolean(h);function A(e){N(e.currentTarget)}function j(){N(null)}var I=c.a.useCallback((function(e,t){"function"===typeof a&&a(e,t),j()}),[a,j]),x=r;return c.a.createElement("div",null,o?c.a.createElement(b,{title:c.a.createElement(f.a,{id:o}),placement:"bottom"},c.a.createElement(i.a,{"aria-label":"More","aria-controls":"long-menu","aria-haspopup":"true",onClick:A},c.a.createElement(p.a,null))):c.a.createElement(i.a,{"aria-label":"More","aria-controls":"long-menu","aria-haspopup":"true",onClick:A,style:{margin:"-6px 0px",padding:8}},c.a.createElement(p.a,null)),c.a.createElement(s.a,{id:"long-menu",anchorEl:h,keepMounted:!0,open:y,onClose:j,PaperProps:{style:{width:300,marginLeft:-50}}},x.filter((function(e){return!v.includes(e.type)})).map((function(e,a){var n,r;return e.to?c.a.createElement(E.b,{key:a,to:null===(n=e.to)||void 0===n?void 0:n.url,style:null===(r=e.to)||void 0===r?void 0:r.style},c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement("i",{className:e.icon})),c.a.createElement(d.a,{primary:c.a.createElement(f.a,{id:e.label})}))):c.a.createElement(m.a,{key:a,onClick:function(){return I(e.type,t)},disabled:e.disabled},c.a.createElement(u.a,null,c.a.createElement("i",{className:e.icon})),c.a.createElement(d.a,{primary:c.a.createElement(f.a,{id:e.label})}))}))))}},1242:function(e,t,a){"use strict";var n=a(31),r=a(12),c=a(0),l=a.n(c),o=a(15),i=a(1220),s=a(278),m=a(1295),u=a(1274),d=a(1182),p=a(1275),f=a(1276),E=a(1277),b=a(1278),g=a(1331),v=a(1279),L=a(1311),O=a(1245),h=a(313),N=a.n(h),y=(a(1240),function(e){return function(e,t,a){var n={currency:t,style:"currency",currencyDisplay:"symbol"};return new Intl.NumberFormat(e,n).format(a)}("id-ID","IDR",e)});t.a=Object(s.c)(Object(o.b)(null,null)((function(e){var t=e.intl,a=e.dataHeader,c=void 0===a?[]:a,o=e.handleParams,s=e.loading,h=void 0!==s&&s,A=e.err,j=void 0!==A&&A,I=e.children,x=e.countData,k=void 0===x?0:x,D=e.hecto,B=void 0===D?1:D,S=l.a.useState({numberColum:0,page:0,count:k,rowsPerPage:10}),w=Object(r.a)(S,2),T=w[0],_=w[1],R=l.a.useState({name:c.filter((function(e){return!0===e.order.status&&!0===e.order.active})).length>0?c.filter((function(e){return!0===e.order.status&&!0===e.order.active}))[0].name.replace(/\s/g,""):"",order:!(c.filter((function(e){return!0===e.order.status&&!0===e.order.active})).length>0)||c.filter((function(e){return!0===e.order.status&&!0===e.order.active}))[0].order.status,type:c.filter((function(e){return!0===e.order.status&&!0===e.order.active&&null!==e.order.type})).length>0?c.filter((function(e){return!0===e.order.status&&!0===e.order.active&&null!==e.order.type}))[0].order.type:null}),C=Object(r.a)(R,2),P=C[0],F=C[1],M=l.a.useState({}),U=Object(r.a)(M,2),V=U[0],Q=U[1],q=l.a.useState({filter:{},sort:{}}),H=Object(r.a)(q,2),Y=H[0],W=H[1],z=l.a.useState(null),G=Object(r.a)(z,2),J=G[0],Z=G[1],X=l.a.useCallback((function(e,t){var a,r=Object.assign({},T),c=Y;c.filter=function(e){var t="";for(var a in e)e[a]&&(t+="filter["+a+"]="+e[a]+"&");return t}(e||V),c.sort="".concat((a=t||P).name,",").concat(null!==a.type?a.type?"asc":"desc":a.order?"asc":"desc"),r.page=r.page+1,c=Object.assign({},c,r),W(Object(n.a)({},c));var l=c.filter+"page="+c.page+"&rowsPerPage="+c.rowsPerPage+"&sort="+c.sort;"function"===typeof o&&o(l)}),[V,P,Y,t,T]);l.a.useEffect(X,[]),l.a.useEffect((function(){_(Object(n.a)(Object(n.a)({},T),{},{count:k||0}))}),[k]);var K=function(){Z(null)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("form",{id:"filter-form-all",className:"panel-filter-table mb-1"},l.a.createElement("span",{className:"mr-2 mt-2 float-left"},l.a.createElement(i.a,{id:"LABEL.FILTER.TABLE"})),l.a.createElement("div",{className:"d-block"},l.a.createElement("div",{className:""},c.filter((function(e){return!0===e.filter.active})).map((function(e,a){return l.a.createElement("div",{key:a.toString(),className:"btn-group hover-filter-table",status:"closed",id:a},l.a.createElement("div",{className:"btn btn-sm",id:"sub-filter-"+a,onClick:function(){Z(a)}},l.a.createElement("span",null,l.a.createElement(i.a,{id:e.title}),":"),l.a.createElement("strong",{style:{paddingRight:1,paddingLeft:1}},l.a.createElement("span",{className:"filter-label",id:"filter-span-"+a},"currency"===e.filter.type&&V[e.name.replace(/\s/g,"")]?y(Number(V[e.name.replace(/\s/g,"")])):"phone"===e.filter.type&&V[e.name.replace(/\s/g,"")]?"(62)".concat(V[e.name.replace(/\s/g,"")]):"date"===e.filter.type&&V[e.name.replace(/\s/g,"")]?"".concat(N()(new Date(V[e.name.replace(/\s/g,"")])).format("DD MMM YYYY")):V[e.name.replace(/\s/g,"")])),V[e.name.replace(/\s/g,"")]?null:l.a.createElement("span",{style:{color:"#777777"}},l.a.createElement(i.a,{id:"LABEL.ALL"}))),l.a.createElement(m.a,{anchorEl:J?document.getElementById("sub-filter-".concat(J)):null,keepMounted:!1,open:a===J,onClose:K,PaperProps:{style:{transform:"translateX(0px) translateY(40px)"}}},l.a.createElement("div",{className:"px-2"},l.a.createElement("div",{className:"float-left"},"currency"===e.filter.type?l.a.createElement(O.a,{value:V[e.name.replace(/\s/g,"")]||"",displayType:"input",className:"form-control",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),thousandSeparator:".",decimalSeparator:",",allowEmptyFormatting:!0,allowLeadingZeros:!0,prefix:"Rp ",onValueChange:function(e){}}):"phone"===e.filter.type?l.a.createElement(O.a,{value:V[e.name.replace(/\s/g,"")]||"",displayType:"input",className:"form-control",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),format:"(+62)############",mask:"_",allowEmptyFormatting:!0,allowLeadingZeros:!0,onValueChange:function(e){}}):l.a.createElement("input",{type:e.filter.type,className:"form-control",min:"0",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),defaultValue:V[e.name.replace(/\s/g,"")]||"",placeholder:t.formatMessage({id:"LABEL.ALL"}),style:{width:200}})),l.a.createElement("div",{className:"d-flex"},l.a.createElement("button",{type:"button",className:"mx-1 float-left btn btn-sm btn-primary",onClick:function(){!function(e,t){var a=V;a[e]=document.getElementById(e).value,"currency"===t?a[e]=a[e].replace(/[Rp .]/g,"").replace(/[,]/g,"."):"phone"===t&&(a[e]=a[e].replace(/[(+62)_]/g,"")),Q(Object(n.a)({},a)),X()}(e.name.replace(/\s/g,""),e.filter.type),K()}},l.a.createElement(i.a,{id:"LABEL.UPDATE"})),l.a.createElement("button",{type:"button",className:"mx-1 float-right btn btn-sm btn-light d-flex",onClick:function(){!function(e){var t=V;t[e]="",document.getElementById(e).value="",Q(Object(n.a)({},t)),X()}(e.name.replace(/\s/g,"")),K()}},l.a.createElement("i",{className:"fas fa-redo fa-right py-1 mx-1"}),l.a.createElement("span",{className:"pt-1"},l.a.createElement(i.a,{id:"LABEL.FILTER.RESET.TABLE"})))))))})),l.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger ml-2 mt-2 button-filter-submit",onClick:function(){Q({}),document.getElementById("filter-form-all").reset(),X({})}},l.a.createElement(i.a,{id:"LABEL.FILTER.RESET.TABLE"}))))),l.a.createElement("div",null,l.a.createElement(u.a,{component:d.a},l.a.createElement(p.a,{className:"hecto-"+B},l.a.createElement(f.a,null,l.a.createElement(E.a,null,c.map((function(e,t){return l.a.createElement(b.a,{className:"bg-primary text-uppercase ".concat((null===e||void 0===e?void 0:e.td)?null===e||void 0===e?void 0:e.td:""),key:t.toString()},e.order.active?l.a.createElement(g.a,{active:P.name===e.name.replace(/\s/g,""),direction:null!==P.type?P.type?"asc":"desc":P.order?"asc":"desc",onClick:function(){!function(e){var t=P;e.name.replace(/\s/g,"")===t.name?null!==t.type?t.type=!t.type:t.order=!t.order:(t.name=e.name.replace(/\s/g,""),t.order=!0,t.type=null),F(Object(n.a)({},t)),X()}(e)}},l.a.createElement("span",null,l.a.createElement(i.a,{id:e.title}))):l.a.createElement("span",null,l.a.createElement(i.a,{id:e.title})))})))),l.a.createElement(v.a,null,I)),l.a.createElement("div",{className:"table-loading-data"},l.a.createElement("div",{className:"text-center font-weight-bold py-5"},l.a.createElement("div",{className:"table-loading-data-potition"},h&&l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-spinner fa-pulse text-dark mr-1"}),l.a.createElement(i.a,{id:"LABEL.TABLE.WAITING_DATA"})),j&&l.a.createElement("span",{className:"text-danger"},l.a.createElement("i",{className:"far fa-frown text-danger mr-1"}),l.a.createElement(i.a,{id:"LABEL.ERROR_REQUEST"})))))),l.a.createElement(L.a,{rowsPerPageOptions:[10,25,50,75,100,250,500,1e3],component:"div",count:T.count,rowsPerPage:T.rowsPerPage,page:T.page,onChangePage:function(e,t){var a=T;a.numberColum=t>a.page?a.numberColum+a.rowsPerPage:a.numberColum-a.rowsPerPage,a.page=t,_(Object(n.a)({},a)),X()},onChangeRowsPerPage:function(e){var t=T;t.page=0,t.rowsPerPage=parseInt(e.target.value,10),t.numberColum=0,_(Object(n.a)({},t)),X()}}))))})))},1246:function(e,t,a){"use strict";a.d(t,"C",(function(){return c})),a.d(t,"E",(function(){return l})),a.d(t,"z",(function(){return o})),a.d(t,"e",(function(){return i})),a.d(t,"g",(function(){return s})),a.d(t,"u",(function(){return m})),a.d(t,"w",(function(){return u})),a.d(t,"p",(function(){return d})),a.d(t,"q",(function(){return p})),a.d(t,"A",(function(){return f})),a.d(t,"d",(function(){return E})),a.d(t,"o",(function(){return b})),a.d(t,"t",(function(){return g})),a.d(t,"l",(function(){return v})),a.d(t,"F",(function(){return L})),a.d(t,"y",(function(){return O})),a.d(t,"j",(function(){return h})),a.d(t,"s",(function(){return N})),a.d(t,"B",(function(){return y})),a.d(t,"D",(function(){return A})),a.d(t,"G",(function(){return j})),a.d(t,"n",(function(){return I})),a.d(t,"a",(function(){return x})),a.d(t,"f",(function(){return k})),a.d(t,"b",(function(){return D})),a.d(t,"h",(function(){return B})),a.d(t,"r",(function(){return S})),a.d(t,"x",(function(){return w})),a.d(t,"i",(function(){return T})),a.d(t,"v",(function(){return _})),a.d(t,"m",(function(){return R})),a.d(t,"c",(function(){return C})),a.d(t,"k",(function(){return P}));var n=a(64),r=a.n(n);function c(e){return r.a.get("/api/v1/dokter".concat(e?"?"+e:""))}function l(e){return r.a.get("/api/v1/poli".concat(e?"?"+e:""))}function o(){return r.a.get("/api/v1/poli")}function i(e){return r.a.post("/api/v1/dokter",e)}function s(e){return r.a.post("/api/v1/poli",e)}function m(e){return r.a.get("/api/v1/dokter/".concat(e))}function u(e){return r.a.get("/api/v1/poli/".concat(e))}function d(e,t){return r.a.post("/api/v1/dokter/".concat(e),t)}function p(e,t){return r.a.put("/api/v1/poli/".concat(e),t)}function f(e){return r.a.get("/api/v1/article".concat(e?"?"+e:""))}function E(e){return r.a.post("/api/v1/article",e)}function b(e,t){return r.a.post("/api/v1/article/".concat(e),t)}function g(e){return r.a.get("/api/v1/article/".concat(e))}function v(e){return r.a.delete("/api/v1/article/".concat(e))}function L(e){return r.a.get("/api/v1/layanan".concat(e?"?"+e:""))}function O(e){return r.a.get("/api/v1/layanan/".concat(e))}function h(e){return r.a.post("/api/v1/layanan",e)}function N(e,t){return r.a.put("/api/v1/layanan/".concat(e),t)}function y(e){return r.a.get("/api/v1/report/dailyincome".concat(e?"?"+e:""))}function A(){return r.a.get("/api/v1/handover")}function j(e){return r.a.put("/api/v1/handover/".concat(e))}function I(e){return r.a.get("/api/v1/handover/".concat(e))}function x(){return r.a.get("/api/v1/medicalkind")}function k(e){return r.a.post("/api/v1/medicalkind",e)}function D(e){return r.a.get("/api/v1/formkind".concat(e?"?"+e:""))}function B(e){return r.a.post("/api/v1/formkind",e)}function S(e,t){return r.a.put("/api/v1/formkind/".concat(e),t)}function w(e){return r.a.get("/api/v1/formkindid/".concat(e))}function T(e){return r.a.post("/api/v1/medicalform",e)}function _(e){return r.a.get("/api/v1/medicalform/".concat(e))}function R(e){return r.a.delete("/api/v1/medicalform/".concat(e))}function C(e){return r.a.get("/api/v1/staff".concat(e?"?"+e:""))}function P(e,t){return r.a.post("/api/v1/staff/".concat(e),t)}},1327:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(99),l=a(93),o=a.n(l),i=a(31),s=a(1243),m=a(12),u=a(15),d=a(1220),p=a(278),f=a(29),E=a(1246),b=a(371),g=a(1277),v=a(1278),L=a(1242),O=a(58),h=a(92),N=a(1241),y=a(1236),A=a(1213),j=a(1214),I=a(1216),x=a(1247),k=a(14),D=a(63),B=a(105),S=a(372),w=[{title:"LABEL.NAME",name:"nama",order:{active:!0,status:!0},filter:{active:!0,type:"text"}},{title:"LABEL.EDUCATION",name:"pendidikan",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.EMAIL",name:"email",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.POLI",name:"poli",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.TABLE_HEADER.ACTION",name:"action",order:{active:!1,status:!1},filter:{active:!1,type:"true"}}],T=[{label:"LABEL.DETAIL",icon:"fas fa-external-link-alt text-primary",type:"open"}],_={};var R=Object(p.c)(Object(u.b)(null,h.a)((function(e){var t=e.intl,a=Object(f.i)(),l=Object(n.useState)(!0),u=Object(m.a)(l,2),p=u[0],h=u[1],R=Object(n.useState)({data:[],count:0}),C=Object(m.a)(R,2),P=C[0],F=C[1],M=Object(n.useState)(!1),U=Object(m.a)(M,2),V=U[0],Q=U[1],q=Object(n.useState)(!1),H=Object(m.a)(q,2),Y=H[0],W=H[1],z=(Object(c.g)(),Object(n.useState)([])),G=Object(m.a)(z,2),J=G[0],Z=G[1],X=Object(n.useState)({}),K=Object(m.a)(X,2),$=K[0],ee=K[1],te=Object(n.useState)(!1),ae=Object(m.a)(te,2),ne=ae[0],re=ae[1],ce=Object(n.useState)({init:"",load:""}),le=Object(m.a)(ce,2),oe=le[0],ie=le[1],se=Object(n.useState)(""),me=Object(m.a)(se,2),ue=me[0],de=me[1],pe=Object(n.useState)(""),fe=Object(m.a)(pe,2),Ee=fe[0],be=fe[1],ge=Object(n.useState)(null),ve=Object(m.a)(ge,2),Le=ve[0],Oe=ve[1];Object(n.useLayoutEffect)((function(){a.setBreadcrumbs([{pathname:"/administrator/dashboard",title:t.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/administrator/doctor-page/list",title:t.formatMessage({id:"LABEL.DOCTOR_LIST"})}]),a.setTitle(t.formatMessage({id:"LABEL.DOCTOR_LIST"}))}),[]);var he=D.b().shape({nama:D.d().required(t.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),tempat:D.d().required(t.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),tgl_lahir:D.d().required(t.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),pendidikan:D.d().required(t.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),poli_id:D.d().required(t.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),email:D.d().required(t.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),desc:D.d().required(t.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"}))}),Ne=Object(B.b)({initialValues:_,validationSchema:he,onSubmit:function(){var e=Object(s.a)(o.a.mark((function e(a,n){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setStatus,n.setSubmitting,W(!0),!ue&&a.photo&&delete a.photo,r=new FormData,c=Object.assign({},a),Object.keys(c).forEach((function(e){r.append(e,c[e])})),Le?Object(E.p)(Le,r).then((function(e){ye(Ee),Ne.resetForm(),O.a.showSnackbar(t.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success",3e3),re(!1),W(!1),ee({}),ie(Object(i.a)(Object(i.a)({},oe),{},{init:"",load:""}))})).catch((function(e){var t;console.log(e),W(!1),O.a.showSnackbar(null===(t=e.response)||void 0===t?void 0:t.data.messages)})):Object(E.e)(r).then((function(e){ye(Ee),Ne.resetForm(),O.a.showSnackbar(t.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success",3e3),re(!1),W(!1),ee({}),ie(Object(i.a)(Object(i.a)({},oe),{},{init:"",load:""}))})).catch((function(e){var t;W(!1),O.a.showSnackbar(null===(t=e.response)||void 0===t?void 0:t.data.messages)}));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}),ye=function(e){h(!0),F(Object(i.a)(Object(i.a)({},P),{},{count:0,data:[]})),Q(!1),be(e),Object(E.C)(e).then((function(e){h(!1),F(Object(i.a)(Object(i.a)({},P),{},{count:0,data:e.data.data}))})).catch((function(e){Q(!0),h(!1),O.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))},Ae=function(e,a){Oe(a.id),Object(E.u)(a.id).then((function(e){var t=J.findIndex((function(t){return t.value===e.data.data.poli_id}));ee(J[t]),ie(Object(i.a)(Object(i.a)({},oe),{},{init:e.data.data.photo})),Ne.setValues(e.data.data),Ne.setFieldTouched(Object(i.a)(Object(i.a)({},Ne),{},{nama:!0})),re(!0)})).catch((function(e){O.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))};return Object(n.useEffect)((function(){Object(E.z)().then((function(e){var t=e.data.data;t.forEach((function(e){e.value=e.id,e.label=e.poli})),Z(t)})).catch((function(e){O.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{open:ne,maxWidth:"md",fullWidth:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(A.a,null,Le?r.a.createElement(d.a,{id:"LABEL.EDIT"}):r.a.createElement(d.a,{id:"LABEL.ADD"})),r.a.createElement("form",{className:"form",autoComplete:"off",onSubmit:Ne.handleSubmit},r.a.createElement(j.a,null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(d.a,{id:"LABEL.FOTO"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("div",{className:"image-input image-input-outline",id:"kt_profile_avatar",style:{backgroundImage:"url(".concat(Object(k.d)("/media/users/blank.png"))}},r.a.createElement("div",{className:"image-input-wrapper",style:{backgroundImage:"".concat(ue?"url('".concat(oe.load,"')"):oe.init?"url(".concat(Object(S.b)(),"/storage/app/dokter_photo/").concat(oe.init,")"):"none")}}),r.a.createElement("label",{className:"btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow","data-action":"change","data-toggle":"tooltip",title:"","data-original-title":"Change avatar"},r.a.createElement("i",{className:"fa fa-pen icon-sm text-muted"}),r.a.createElement("input",{type:"file",accept:".png, .jpg, .jpeg",disabled:Y,onChange:function(e){var t=new FileReader;t.onload=function(){ie(Object(i.a)(Object(i.a)({},oe),{},{load:t.result}))},t.readAsDataURL(e.target.files[0]),de(e.target.files[0]),Ne.setFieldValue("photo",e.target.files[0])}})),r.a.createElement("span",{className:"btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow","data-action":"cancel","data-toggle":"tooltip",title:"","data-original-title":"Cancel avatar"},r.a.createElement("i",{className:"ki ki-bold-close icon-xs text-muted"}))),r.a.createElement("span",{className:"form-text text-muted"},"Hanya menerima type file: png, jpg, jpeg."),r.a.createElement("span",{className:"text-left text-danger"},r.a.createElement(d.a,{id:"LABEL.VALIDATION_REQUIRED_FIELD"})))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(d.a,{id:"LABEL.NAME"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",Object.assign({type:"text",className:"form-control",disabled:Y,required:!0},Ne.getFieldProps("nama"))),Ne.touched.nama&&Ne.errors.nama&&r.a.createElement("span",{className:"text-left text-danger"},Ne.errors.nama))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(d.a,{id:"LABEL.PLACE_OF_BIRTH"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",Object.assign({type:"text",className:"form-control",disabled:Y,required:!0},Ne.getFieldProps("tempat"))),Ne.touched.tempat&&Ne.errors.tempat&&r.a.createElement("span",{className:"text-left text-danger"},Ne.errors.tempat))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(d.a,{id:"LABEL.DATE_OF_BIRTH"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",Object.assign({type:"date",className:"form-control",disabled:Y,required:!0},Ne.getFieldProps("tgl_lahir"))),Ne.touched.tgl_lahir&&Ne.errors.tgl_lahir&&r.a.createElement("span",{className:"text-left text-danger"},Ne.errors.tgl_lahir))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(d.a,{id:"LABEL.EDUCATION"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",Object.assign({type:"text",className:"form-control",disabled:Y,required:!0},Ne.getFieldProps("pendidikan"))),Ne.touched.pendidikan&&Ne.errors.pendidikan&&r.a.createElement("span",{className:"text-left text-danger"},Ne.errors.pendidikan))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(d.a,{id:"LABEL.EMAIL"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",Object.assign({type:"email",className:"form-control",disabled:Y,required:!0},Ne.getFieldProps("email"))),Ne.touched.email&&Ne.errors.email&&r.a.createElement("span",{className:"text-left text-danger"},Ne.errors.email))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(d.a,{id:"LABEL.POLI"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement(x.a,{value:$,options:J,isDisabled:Y,className:"form-control border-0 p-0 h-100 rounded-0",classNamePrefix:"react-select",menuPlacement:"top",onChange:function(e){ee(e),Ne.setFieldValue("poli_id",e.value)},onBlur:function(){Ne.setFieldTouched(Object(i.a)(Object(i.a)({},Ne),{},{poli_id:!0}))}}),Ne.touched.poli_id&&Ne.errors.poli_id&&r.a.createElement("span",{className:"text-left text-danger"},Ne.errors.poli_id))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(d.a,{id:"LABEL.DESC"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("textarea",Object.assign({rows:"3",className:"form-control",disabled:Y,required:!0},Ne.getFieldProps("desc"))),Ne.touched.desc&&Ne.errors.desc&&r.a.createElement("span",{className:"text-left text-danger"},Ne.errors.desc)))),r.a.createElement(I.a,null,r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!Ne.isValid||0===Object.keys(Ne.touched).length&&Ne.touched.constructor===Object||Y||!ue&&!oe.init},Y?r.a.createElement("i",{className:"fas fa-spinner fa-pulse px-2"}):r.a.createElement("i",{className:"fas fa-save ml-2"}),Y?r.a.createElement(d.a,{id:"LABEL.WAITING"}):r.a.createElement(d.a,{id:"LABEL.SAVE"})),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){re(!1),Ne.resetForm(),ie(Object(i.a)(Object(i.a)({},oe),{},{init:"",load:""})),ee({})},disabled:Y},r.a.createElement("i",{className:"fas fa-times px-1"}),r.a.createElement(d.a,{id:"LABEL.CANCEL"}))))),r.a.createElement(b.b,null,r.a.createElement(b.d,{title:""},r.a.createElement(b.f,null,r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){Oe(null),re(!0)}},r.a.createElement("i",{className:"fas fa-user-plus"}),r.a.createElement(d.a,{id:"LABEL.ADD"})))),r.a.createElement(b.c,null,r.a.createElement(L.a,{dataHeader:w,handleParams:ye,loading:p,err:V,countData:P.count,hecto:10},P.data.map((function(e,t){return r.a.createElement(g.a,{key:t.toString()},r.a.createElement(v.a,null,null===e||void 0===e?void 0:e.nama),r.a.createElement(v.a,null,null===e||void 0===e?void 0:e.pendidikan),r.a.createElement(v.a,null,null===e||void 0===e?void 0:e.email),r.a.createElement(v.a,null,"---"),r.a.createElement(v.a,null,r.a.createElement(N.a,{data:e,handleAction:Ae,ops:T})))}))))))})));t.default=Object(p.c)(Object(u.b)(null,null)((function(e){return r.a.createElement(c.d,null,r.a.createElement(c.a,{exact:!0,from:"/administrator/doctor-page",to:"/administrator/dashboard"}),r.a.createElement(c.b,{path:"/administrator/doctor-page/list",component:function(e){return r.a.createElement(R,e)},exact:!0}))})))}}]);
//# sourceMappingURL=21.17abc81d.chunk.js.map