(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[10],{1248:function(e,t,a){},1249:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(12),r=a(0),l=a.n(r),c=a(22),o=a(1245),i=a(1189),s=a(1281),m=a(1306),d=a(1295),u=a(1296),E=a(1312),p=a(1227),f=a(15),b=Object(c.a)((function(e){return{tooltip:{boxShadow:e.shadows[1],fontSize:"0.875rem",marginTop:"0.25rem"}}}))(o.a);function g(e){var t=e.data,a=e.handleAction,r=e.ops,c=e.label,o=void 0===c?null:c,g=e.exclude,L=void 0===g?[]:g,v=l.a.useState(null),O=Object(n.a)(v,2),A=O[0],N=O[1],h=Boolean(A);function j(e){N(e.currentTarget)}function y(){N(null)}var I=l.a.useCallback((function(e,t){"function"===typeof a&&a(e,t),y()}),[a,y]),B=r;return l.a.createElement("div",null,o?l.a.createElement(b,{title:l.a.createElement(p.a,{id:o}),placement:"bottom"},l.a.createElement(i.a,{"aria-label":"More","aria-controls":"long-menu","aria-haspopup":"true",onClick:j},l.a.createElement(E.a,null))):l.a.createElement(i.a,{"aria-label":"More","aria-controls":"long-menu","aria-haspopup":"true",onClick:j,style:{margin:"-6px 0px",padding:8}},l.a.createElement(E.a,null)),l.a.createElement(s.a,{id:"long-menu",anchorEl:A,keepMounted:!0,open:h,onClose:y,PaperProps:{style:{width:300,marginLeft:-50}}},B.filter((function(e){return!L.includes(e.type)})).map((function(e,a){var n,r;return e.to?l.a.createElement(f.b,{key:a,to:null===(n=e.to)||void 0===n?void 0:n.url,style:null===(r=e.to)||void 0===r?void 0:r.style},l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement("i",{className:e.icon})),l.a.createElement(u.a,{primary:l.a.createElement(p.a,{id:e.label})}))):l.a.createElement(m.a,{key:a,onClick:function(){return I(e.type,t)},disabled:e.disabled},l.a.createElement(d.a,null,l.a.createElement("i",{className:e.icon})),l.a.createElement(u.a,{primary:l.a.createElement(p.a,{id:e.label})}))}))))}},1251:function(e,t,a){"use strict";var n=a(28),r=a(12),l=a(0),c=a.n(l),o=a(18),i=a(1227),s=a(284),m=a(1273),d=a(1188),u=a(1274),E=a(1275),p=a(1276),f=a(1277),b=a(1310),g=a(1278),L=a(1299);a(1248);t.a=Object(s.c)(Object(o.b)(null,null)((function(e){var t=e.intl,a=e.dataHeader,l=void 0===a?[]:a,o=e.handleParams,s=e.loading,v=void 0!==s&&s,O=e.err,A=void 0!==O&&O,N=e.children,h=e.countData,j=void 0===h?0:h,y=e.hecto,I=void 0===y?1:y,B=c.a.useState({numberColum:0,page:0,count:j,rowsPerPage:10}),x=Object(r.a)(B,2),D=x[0],k=x[1],S=c.a.useState({name:l.filter((function(e){return!0===e.order.status&&!0===e.order.active})).length>0?l.filter((function(e){return!0===e.order.status&&!0===e.order.active}))[0].name.replace(/\s/g,""):"",order:!(l.filter((function(e){return!0===e.order.status&&!0===e.order.active})).length>0)||l.filter((function(e){return!0===e.order.status&&!0===e.order.active}))[0].order.status,type:l.filter((function(e){return!0===e.order.status&&!0===e.order.active&&null!==e.order.type})).length>0?l.filter((function(e){return!0===e.order.status&&!0===e.order.active&&null!==e.order.type}))[0].order.type:null}),T=Object(r.a)(S,2),w=T[0],_=T[1],R=c.a.useState(""),P=Object(r.a)(R,2),C=P[0],F=P[1],M=c.a.useState({}),U=Object(r.a)(M,2),Q=U[0],V=U[1],q=c.a.useState({filter:{},sort:{}}),H=Object(r.a)(q,2),W=H[0],z=H[1],G=c.a.useCallback((function(e,t){var a,r=Object.assign({},D),l=W;l.filter=function(e){var t="";for(var a in e)e[a]&&(t+="filter["+a+"]="+e[a]+"&");return t}(e||Q),l.sort="".concat((a=t||w).name,",").concat(null!==a.type?a.type?"asc":"desc":a.order?"asc":"desc"),r.page=r.page+1,l=Object.assign({},l,r),z(Object(n.a)({},l));var c=l.filter+"page="+l.page+"&rowsPerPage="+l.rowsPerPage+"&sort="+l.sort;o(c)}),[Q,w,W,t,D]),J=function(e,t){var a=t,n=e,r=document.getElementById(a).getAttribute("status");""===C?(F(a),document.getElementById(a).setAttribute("status","open"),document.getElementById(a).classList.add("open")):C===a?"closed"===r?(document.getElementById(a).setAttribute("status","open"),document.getElementById(a).classList.add("open")):(document.getElementById(a).setAttribute("status","closed"),document.getElementById(a).classList.remove("open"),document.getElementById(n).value=Q[n]||""):(document.getElementById(C).setAttribute("status","closed"),document.getElementById(C).classList.remove("open"),F(a),document.getElementById(a).setAttribute("status","open"),document.getElementById(a).classList.add("open"))};return c.a.useEffect(G,[]),c.a.useEffect((function(){k(Object(n.a)(Object(n.a)({},D),{},{count:j||0}))}),[j]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("form",{id:"filter-form-all",className:"panel-filter-table mb-1"},c.a.createElement("span",{className:"mr-2 mt-2 float-left"},c.a.createElement(i.a,{id:"LABEL.FILTER.TABLE"})),c.a.createElement("div",{className:"d-block"},c.a.createElement("div",{className:""},l.filter((function(e){return!0===e.filter.active})).map((function(e,a){return c.a.createElement("div",{key:a.toString(),className:"btn-group hover-filter-table",status:"closed",id:a},c.a.createElement("div",{className:"btn btn-sm dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false",onClick:function(){J(e.name.replace(/\s/g,""),a)}},c.a.createElement("span",null,c.a.createElement(i.a,{id:e.title}),":"),c.a.createElement("strong",{style:{paddingRight:1,paddingLeft:1}},c.a.createElement("span",{className:"filter-label",id:"filter-span-"+a},Q[e.name.replace(/\s/g,"")])),Q[e.name.replace(/\s/g,"")]?null:c.a.createElement("span",{style:{color:"#777777"}},c.a.createElement(i.a,{id:"LABEL.ALL"}))),c.a.createElement("ul",{role:"menu",className:"dropdown-menu",style:{zIndex:90}},c.a.createElement("li",{style:{width:380,padding:5}},c.a.createElement("div",{className:"clearfix"},c.a.createElement("div",{className:"float-left"},c.a.createElement("input",{type:e.filter.type,className:"form-control form-control-sm",min:"0",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),defaultValue:Q[e.name.replace(/\s/g,"")]||"",placeholder:t.formatMessage({id:"LABEL.ALL"}),style:{width:200}})),c.a.createElement("div",{className:"d-flex"},c.a.createElement("button",{type:"button",className:"mx-2 float-left btn btn-sm btn-primary",onClick:function(){!function(e,t){var a=Q;a[e]=document.getElementById(e).value,V(Object(n.a)({},a)),J(e,t),G()}(e.name.replace(/\s/g,""),a)}},c.a.createElement(i.a,{id:"LABEL.UPDATE"})),c.a.createElement("button",{type:"button",className:"mx-2 float-right btn btn-sm btn-light d-flex",onClick:function(){!function(e){var t=Q;t[e]="",document.getElementById(e).value="",V(Object(n.a)({},t)),G()}(e.name.replace(/\s/g,""))}},c.a.createElement("i",{className:"fas fa-redo fa-right"}),c.a.createElement("span",null,c.a.createElement(i.a,{id:"LABEL.FILTER.RESET.TABLE"}))))))))})),c.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger ml-2 mt-2 button-filter-submit",onClick:function(){V({}),document.getElementById("filter-form-all").reset(),G({})}},c.a.createElement(i.a,{id:"LABEL.FILTER.RESET.TABLE"}))))),c.a.createElement("div",null,c.a.createElement(m.a,{component:d.a},c.a.createElement(u.a,{className:"hecto-"+I},c.a.createElement(E.a,null,c.a.createElement(p.a,null,l.map((function(e,t){return c.a.createElement(f.a,{className:"bg-primary text-uppercase",key:t.toString()},e.order.active?c.a.createElement(b.a,{active:w.name===e.name.replace(/\s/g,""),direction:null!==w.type?w.type?"asc":"desc":w.order?"asc":"desc",onClick:function(){!function(e){var t=w;e.name.replace(/\s/g,"")===t.name?null!==t.type?t.type=!t.type:t.order=!t.order:(t.name=e.name.replace(/\s/g,""),t.order=!0,t.type=null),_(Object(n.a)({},t)),G()}(e)}},c.a.createElement("span",null,c.a.createElement(i.a,{id:e.title}))):c.a.createElement("span",null,c.a.createElement(i.a,{id:e.title})))})))),c.a.createElement(g.a,null,N)),c.a.createElement("div",{className:"table-loading-data"},c.a.createElement("div",{className:"text-center font-weight-bold py-5"},c.a.createElement("div",{className:"table-loading-data-potition"},v&&c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-spinner fa-pulse text-dark mr-1"}),c.a.createElement(i.a,{id:"LABEL.TABLE.WAITING_DATA"})),A&&c.a.createElement("span",{className:"text-danger"},c.a.createElement("i",{className:"far fa-frown text-danger mr-1"}),c.a.createElement(i.a,{id:"LABEL.ERROR_REQUEST"})))))),c.a.createElement(L.a,{rowsPerPageOptions:[10,25,50,75,100,250,500,1e3],component:"div",count:D.count,rowsPerPage:D.rowsPerPage,page:D.page,onChangePage:function(e,t){var a=D;a.numberColum=t>a.page?a.numberColum+a.rowsPerPage:a.numberColum-a.rowsPerPage,a.page=t,k(Object(n.a)({},a)),G()},onChangeRowsPerPage:function(e){var t=D;t.page=0,t.rowsPerPage=parseInt(e.target.value,10),t.numberColum=0,k(Object(n.a)({},t)),G()}}))))})))},1264:function(e,t,a){"use strict";a.d(t,"h",(function(){return l})),a.d(t,"i",(function(){return c})),a.d(t,"g",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"e",(function(){return m})),a.d(t,"f",(function(){return d})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return E}));var n=a(91),r=a.n(n);function l(e){return r.a.get("/api/v1/dokter".concat(e?"?"+e:""))}function c(e){return r.a.get("/api/v1/poli".concat(e?"?"+e:""))}function o(){return r.a.get("/api/v1/poli")}function i(e){return r.a.post("/api/v1/dokter",e)}function s(e){return r.a.post("/api/v1/poli",e)}function m(e){return r.a.get("/api/v1/dokter/".concat(e))}function d(e){return r.a.get("/api/v1/poli/".concat(e))}function u(e,t){return r.a.post("/api/v1/dokter/".concat(e),t)}function E(e,t){return r.a.put("/api/v1/poli/".concat(e),t)}},1308:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(104),c=a(97),o=a.n(c),i=a(28),s=a(1247),m=a(12),d=a(18),u=a(1227),E=a(284),p=a(19),f=a(1264),b=a(157),g=a(1276),L=a(1277),v=a(1251),O=a(66),A=a(100),N=a(1249),h=a(1243),j=a(1219),y=a(1220),I=a(1222),B=a(1253),x=a(3),D=a(68),k=a(84),S=a(377),T=[{title:"LABEL.NAME",name:"nama",order:{active:!0,status:!0},filter:{active:!0,type:"text"}},{title:"LABEL.EDUCATION",name:"pendidikan",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.EMAIL",name:"email",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.POLI",name:"poli",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.TABLE_HEADER.ACTION",name:"action",order:{active:!1,status:!1},filter:{active:!1,type:"true"}}],w=[{label:"LABEL.DETAIL",icon:"fas fa-external-link-alt text-primary",type:"open"}],_={};var R=Object(E.c)(Object(d.b)(null,A.a)((function(e){var t=e.intl,a=Object(p.k)(),c=Object(n.useState)(!0),d=Object(m.a)(c,2),E=d[0],A=d[1],R=Object(n.useState)({data:[],count:0}),P=Object(m.a)(R,2),C=P[0],F=P[1],M=Object(n.useState)(!1),U=Object(m.a)(M,2),Q=U[0],V=U[1],q=Object(n.useState)(!1),H=Object(m.a)(q,2),W=H[0],z=H[1],G=(Object(l.g)(),Object(n.useState)([])),J=Object(m.a)(G,2),K=J[0],X=J[1],Y=Object(n.useState)({}),Z=Object(m.a)(Y,2),$=Z[0],ee=Z[1],te=Object(n.useState)(!1),ae=Object(m.a)(te,2),ne=ae[0],re=ae[1],le=Object(n.useState)({init:"",load:""}),ce=Object(m.a)(le,2),oe=ce[0],ie=ce[1],se=Object(n.useState)(""),me=Object(m.a)(se,2),de=me[0],ue=me[1],Ee=Object(n.useState)(""),pe=Object(m.a)(Ee,2),fe=pe[0],be=pe[1],ge=Object(n.useState)(null),Le=Object(m.a)(ge,2),ve=Le[0],Oe=Le[1];Object(n.useLayoutEffect)((function(){a.setBreadcrumbs([{pathname:"/administrator/dashboard",title:t.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/administrator/doctor-page/list",title:t.formatMessage({id:"LABEL.DOCTOR_LIST"})}]),a.setTitle(t.formatMessage({id:"LABEL.DOCTOR_LIST"}))}),[]);var Ae=D.b().shape({nama:D.d().required(t.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),tempat:D.d().required(t.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),tgl_lahir:D.d().required(t.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),pendidikan:D.d().required(t.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),poli_id:D.d().required(t.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),email:D.d().required(t.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),desc:D.d().required(t.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"}))}),Ne=Object(k.c)({initialValues:_,validationSchema:Ae,onSubmit:function(){var e=Object(s.a)(o.a.mark((function e(a,n){var r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setStatus,n.setSubmitting,z(!0),!de&&a.photo&&delete a.photo,r=new FormData,l=Object.assign({},a),Object.keys(l).forEach((function(e){r.append(e,l[e])})),ve?Object(f.c)(ve,r).then((function(e){he(fe),Ne.resetForm(),O.a.showSnackbar(t.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success",3e3),re(!1),z(!1),ee({}),ie(Object(i.a)(Object(i.a)({},oe),{},{init:"",load:""}))})).catch((function(e){var t;console.log(e),z(!1),O.a.showSnackbar(null===(t=e.response)||void 0===t?void 0:t.data.messages)})):Object(f.a)(r).then((function(e){he(fe),Ne.resetForm(),O.a.showSnackbar(t.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success",3e3),re(!1),z(!1),ee({}),ie(Object(i.a)(Object(i.a)({},oe),{},{init:"",load:""}))})).catch((function(e){var t;z(!1),O.a.showSnackbar(null===(t=e.response)||void 0===t?void 0:t.data.messages)}));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}),he=function(e){A(!0),F(Object(i.a)(Object(i.a)({},C),{},{count:0,data:[]})),V(!1),be(e),Object(f.h)(e).then((function(e){A(!1),F(Object(i.a)(Object(i.a)({},C),{},{count:0,data:e.data.data}))})).catch((function(e){V(!0),A(!1),O.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))},je=function(e,a){Oe(a.id),Object(f.e)(a.id).then((function(e){var t=K.findIndex((function(t){return t.value===e.data.data.poli_id}));ee(K[t]),ie(Object(i.a)(Object(i.a)({},oe),{},{init:e.data.data.photo})),Ne.setValues(e.data.data),Ne.setFieldTouched("nama",!0),re(!0)})).catch((function(e){O.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))};return Object(n.useEffect)((function(){Object(f.g)().then((function(e){var t=e.data.data;t.forEach((function(e){e.value=e.id,e.label=e.poli})),X(t)})).catch((function(e){O.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{open:ne,maxWidth:"md",fullWidth:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(j.a,null,ve?r.a.createElement(u.a,{id:"LABEL.EDIT"}):r.a.createElement(u.a,{id:"LABEL.ADD"})),r.a.createElement("form",{className:"form",autoComplete:"off",onSubmit:Ne.handleSubmit},r.a.createElement(y.a,null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(u.a,{id:"LABEL.FOTO"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("div",{className:"image-input image-input-outline",id:"kt_profile_avatar",style:{backgroundImage:"url(".concat(Object(x.d)("/media/users/blank.png"))}},r.a.createElement("div",{className:"image-input-wrapper",style:{backgroundImage:"".concat(de?"url('".concat(oe.load,"')"):oe.init?"url(".concat(Object(S.b)(),"/storage/app/dokter_photo/").concat(oe.init,")"):"none")}}),r.a.createElement("label",{className:"btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow","data-action":"change","data-toggle":"tooltip",title:"","data-original-title":"Change avatar"},r.a.createElement("i",{className:"fa fa-pen icon-sm text-muted"}),r.a.createElement("input",{type:"file",accept:".png, .jpg, .jpeg",disabled:W,onChange:function(e){var t=new FileReader;t.onload=function(){ie(Object(i.a)(Object(i.a)({},oe),{},{load:t.result}))},t.readAsDataURL(e.target.files[0]),ue(e.target.files[0]),Ne.setFieldValue("photo",e.target.files[0])}})),r.a.createElement("span",{className:"btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow","data-action":"cancel","data-toggle":"tooltip",title:"","data-original-title":"Cancel avatar"},r.a.createElement("i",{className:"ki ki-bold-close icon-xs text-muted"}))),r.a.createElement("span",{className:"form-text text-muted"},"Hanya menerima type file: png, jpg, jpeg."),r.a.createElement("span",{className:"text-left text-danger"},r.a.createElement(u.a,{id:"LABEL.VALIDATION_REQUIRED_FIELD"})))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(u.a,{id:"LABEL.NAME"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",Object.assign({type:"text",className:"form-control",disabled:W,required:!0},Ne.getFieldProps("nama"))),Ne.touched.nama&&Ne.errors.nama&&r.a.createElement("span",{className:"text-left text-danger"},Ne.errors.nama))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(u.a,{id:"LABEL.PLACE_OF_BIRTH"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",Object.assign({type:"text",className:"form-control",disabled:W,required:!0},Ne.getFieldProps("tempat"))),Ne.touched.tempat&&Ne.errors.tempat&&r.a.createElement("span",{className:"text-left text-danger"},Ne.errors.tempat))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(u.a,{id:"LABEL.DATE_OF_BIRTH"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",Object.assign({type:"date",className:"form-control",disabled:W,required:!0},Ne.getFieldProps("tgl_lahir"))),Ne.touched.tgl_lahir&&Ne.errors.tgl_lahir&&r.a.createElement("span",{className:"text-left text-danger"},Ne.errors.tgl_lahir))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(u.a,{id:"LABEL.EDUCATION"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",Object.assign({type:"text",className:"form-control",disabled:W,required:!0},Ne.getFieldProps("pendidikan"))),Ne.touched.pendidikan&&Ne.errors.pendidikan&&r.a.createElement("span",{className:"text-left text-danger"},Ne.errors.pendidikan))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(u.a,{id:"LABEL.EMAIL"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",Object.assign({type:"email",className:"form-control",disabled:W,required:!0},Ne.getFieldProps("email"))),Ne.touched.email&&Ne.errors.email&&r.a.createElement("span",{className:"text-left text-danger"},Ne.errors.email))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(u.a,{id:"LABEL.POLI"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement(B.a,{value:$,options:K,isDisabled:W,className:"form-control border-0 p-0 h-100 rounded-0",classNamePrefix:"react-select",menuPlacement:"top",onChange:function(e){ee(e),Ne.setFieldValue("poli_id",e.value)},onBlur:function(){Ne.setFieldTouched("poli_id",!0)}}),Ne.touched.poli_id&&Ne.errors.poli_id&&r.a.createElement("span",{className:"text-left text-danger"},Ne.errors.poli_id))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(u.a,{id:"LABEL.DESC"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("textarea",Object.assign({rows:"3",className:"form-control",disabled:W,required:!0},Ne.getFieldProps("desc"))),Ne.touched.desc&&Ne.errors.desc&&r.a.createElement("span",{className:"text-left text-danger"},Ne.errors.desc)))),r.a.createElement(I.a,null,r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!Ne.isValid||0===Object.keys(Ne.touched).length&&Ne.touched.constructor===Object||W||!de&&!oe.init},W?r.a.createElement("i",{className:"fas fa-spinner fa-pulse px-2"}):r.a.createElement("i",{className:"fas fa-save ml-2"}),W?r.a.createElement(u.a,{id:"LABEL.WAITING"}):r.a.createElement(u.a,{id:"LABEL.SAVE"})),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){re(!1),Ne.resetForm(),ie(Object(i.a)(Object(i.a)({},oe),{},{init:"",load:""})),ee({})},disabled:W},r.a.createElement("i",{className:"fas fa-times px-1"}),r.a.createElement(u.a,{id:"LABEL.CANCEL"}))))),r.a.createElement(b.b,null,r.a.createElement(b.d,{title:""},r.a.createElement(b.f,null,r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){Oe(null),re(!0)}},r.a.createElement("i",{className:"fas fa-user-plus"}),r.a.createElement(u.a,{id:"LABEL.ADD"})))),r.a.createElement(b.c,null,r.a.createElement(v.a,{dataHeader:T,handleParams:he,loading:E,err:Q,countData:C.count,hecto:10},C.data.map((function(e,t){return r.a.createElement(g.a,{key:t.toString()},r.a.createElement(L.a,null,null===e||void 0===e?void 0:e.nama),r.a.createElement(L.a,null,null===e||void 0===e?void 0:e.pendidikan),r.a.createElement(L.a,null,null===e||void 0===e?void 0:e.email),r.a.createElement(L.a,null,"---"),r.a.createElement(L.a,null,r.a.createElement(N.a,{data:e,handleAction:je,ops:w})))}))))))})));t.default=Object(E.c)(Object(d.b)(null,null)((function(e){return r.a.createElement(l.d,null,r.a.createElement(l.a,{exact:!0,from:"/administrator/doctor-page",to:"/administrator/dashboard"}),r.a.createElement(l.b,{path:"/administrator/doctor-page/list",component:function(e){return r.a.createElement(R,e)},exact:!0}))})))}}]);
//# sourceMappingURL=10.dae2b054.chunk.js.map