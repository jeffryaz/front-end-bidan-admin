(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[17],{1247:function(e,t,a){},1249:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(11),r=a(0),l=a.n(r),c=a(22),i=a(1245),o=a(1189),s=a(1291),u=a(1315),m=a(1264),d=a(1265),p=a(1266),f=a(1227),E=a(15),b=Object(c.a)((function(e){return{tooltip:{boxShadow:e.shadows[1],fontSize:"0.875rem",marginTop:"0.25rem"}}}))(i.a);function g(e){var t=e.data,a=e.handleAction,r=e.ops,c=e.label,i=void 0===c?null:c,g=e.exclude,v=void 0===g?[]:g,h=l.a.useState(null),L=Object(n.a)(h,2),y=L[0],A=L[1],j=Boolean(y);function O(e){A(e.currentTarget)}function N(){A(null)}var S=l.a.useCallback((function(e,t){"function"===typeof a&&a(e,t),N()}),[a,N]),T=r;return l.a.createElement("div",null,i?l.a.createElement(b,{title:l.a.createElement(f.a,{id:i}),placement:"bottom"},l.a.createElement(o.a,{"aria-label":"More","aria-controls":"long-menu","aria-haspopup":"true",onClick:O},l.a.createElement(p.a,null))):l.a.createElement(o.a,{"aria-label":"More","aria-controls":"long-menu","aria-haspopup":"true",onClick:O,style:{margin:"-6px 0px",padding:8}},l.a.createElement(p.a,null)),l.a.createElement(s.a,{id:"long-menu",anchorEl:y,keepMounted:!0,open:j,onClose:N,PaperProps:{style:{width:300,marginLeft:-50}}},T.filter((function(e){return!v.includes(e.type)})).map((function(e,a){var n,r;return e.to?l.a.createElement(E.b,{key:a,to:null===(n=e.to)||void 0===n?void 0:n.url,style:null===(r=e.to)||void 0===r?void 0:r.style},l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement("i",{className:e.icon})),l.a.createElement(d.a,{primary:l.a.createElement(f.a,{id:e.label})}))):l.a.createElement(u.a,{key:a,onClick:function(){return S(e.type,t)},disabled:e.disabled},l.a.createElement(m.a,null,l.a.createElement("i",{className:e.icon})),l.a.createElement(d.a,{primary:l.a.createElement(f.a,{id:e.label})}))}))))}},1253:function(e,t,a){"use strict";var n=a(34),r=a(11),l=a(0),c=a.n(l),i=a(16),o=a(1227),s=a(288),u=a(1291),m=a(1278),d=a(1188),p=a(1279),f=a(1280),E=a(1281),b=a(1282),g=a(1321),v=a(1283),h=a(1307),L=a(1251),y=(a(1247),function(e){return function(e,t,a){var n={currency:t,style:"currency",currencyDisplay:"symbol"};return new Intl.NumberFormat(e,n).format(a)}("id-ID","IDR",e)});t.a=Object(s.c)(Object(i.b)(null,null)((function(e){var t=e.intl,a=e.dataHeader,l=void 0===a?[]:a,i=e.handleParams,s=e.loading,A=void 0!==s&&s,j=e.err,O=void 0!==j&&j,N=e.children,S=e.countData,T=void 0===S?0:S,_=e.hecto,w=void 0===_?1:_,D=c.a.useState({numberColum:0,page:0,count:T,rowsPerPage:10}),I=Object(r.a)(D,2),k=I[0],B=I[1],C=c.a.useState({name:l.filter((function(e){return!0===e.order.status&&!0===e.order.active})).length>0?l.filter((function(e){return!0===e.order.status&&!0===e.order.active}))[0].name.replace(/\s/g,""):"",order:!(l.filter((function(e){return!0===e.order.status&&!0===e.order.active})).length>0)||l.filter((function(e){return!0===e.order.status&&!0===e.order.active}))[0].order.status,type:l.filter((function(e){return!0===e.order.status&&!0===e.order.active&&null!==e.order.type})).length>0?l.filter((function(e){return!0===e.order.status&&!0===e.order.active&&null!==e.order.type}))[0].order.type:null}),R=Object(r.a)(C,2),x=R[0],P=R[1],M=c.a.useState({}),F=Object(r.a)(M,2),U=F[0],Q=F[1],V=c.a.useState({filter:{},sort:{}}),Y=Object(r.a)(V,2),H=Y[0],W=Y[1],q=c.a.useState(null),G=Object(r.a)(q,2),z=G[0],J=G[1],Z=c.a.useCallback((function(e,t){var a,r=Object.assign({},k),l=H;l.filter=function(e){var t="";for(var a in e)e[a]&&(t+="filter["+a+"]="+e[a]+"&");return t}(e||U),l.sort="".concat((a=t||x).name,",").concat(null!==a.type?a.type?"asc":"desc":a.order?"asc":"desc"),r.page=r.page+1,l=Object.assign({},l,r),W(Object(n.a)({},l));var c=l.filter+"page="+l.page+"&rowsPerPage="+l.rowsPerPage+"&sort="+l.sort;"function"===typeof i&&i(c)}),[U,x,H,t,k]);c.a.useEffect(Z,[]),c.a.useEffect((function(){B(Object(n.a)(Object(n.a)({},k),{},{count:T||0}))}),[T]);var X=function(){J(null)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("form",{id:"filter-form-all",className:"panel-filter-table mb-1"},c.a.createElement("span",{className:"mr-2 mt-2 float-left"},c.a.createElement(o.a,{id:"LABEL.FILTER.TABLE"})),c.a.createElement("div",{className:"d-block"},c.a.createElement("div",{className:""},l.filter((function(e){return!0===e.filter.active})).map((function(e,a){return c.a.createElement("div",{key:a.toString(),className:"btn-group hover-filter-table",status:"closed",id:a},c.a.createElement("div",{className:"btn btn-sm dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false",id:"sub-filter-"+a,onClick:function(){J(a)}},c.a.createElement("span",null,c.a.createElement(o.a,{id:e.title}),":"),c.a.createElement("strong",{style:{paddingRight:1,paddingLeft:1}},c.a.createElement("span",{className:"filter-label",id:"filter-span-"+a},"currency"===e.filter.type&&U[e.name.replace(/\s/g,"")]?y(Number(U[e.name.replace(/\s/g,"")])):"phone"===e.filter.type&&U[e.name.replace(/\s/g,"")]?"(62)".concat(U[e.name.replace(/\s/g,"")]):U[e.name.replace(/\s/g,"")])),U[e.name.replace(/\s/g,"")]?null:c.a.createElement("span",{style:{color:"#777777"}},c.a.createElement(o.a,{id:"LABEL.ALL"}))),c.a.createElement(u.a,{anchorEl:document.getElementById("sub-filter-".concat(z))?document.getElementById("sub-filter-".concat(z)):null,keepMounted:!1,open:"sub-filter-".concat(a)==="sub-filter-".concat(z),onClose:X,PaperProps:{style:{transform:"translateX(0px) translateY(40px)"}}},c.a.createElement("div",{className:"px-2"},c.a.createElement("div",{className:"float-left"},"currency"===e.filter.type?c.a.createElement(L.a,{value:U[e.name.replace(/\s/g,"")]||"",displayType:"input",className:"form-control",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),thousandSeparator:".",decimalSeparator:",",allowEmptyFormatting:!0,allowLeadingZeros:!0,prefix:"Rp ",onValueChange:function(e){}}):"phone"===e.filter.type?c.a.createElement(L.a,{value:U[e.name.replace(/\s/g,"")]||"",displayType:"input",className:"form-control",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),format:"(+62)############",mask:"_",allowEmptyFormatting:!0,allowLeadingZeros:!0,onValueChange:function(e){}}):c.a.createElement("input",{type:e.filter.type,className:"form-control",min:"0",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),defaultValue:U[e.name.replace(/\s/g,"")]||"",placeholder:t.formatMessage({id:"LABEL.ALL"}),style:{width:200}})),c.a.createElement("div",{className:"d-flex"},c.a.createElement("button",{type:"button",className:"mx-1 float-left btn btn-sm btn-primary",onClick:function(){!function(e,t){var a=U;a[e]=document.getElementById(e).value,"currency"===t?a[e]=a[e].replace(/[Rp .]/g,"").replace(/[,]/g,"."):"phone"===t&&(a[e]=a[e].replace(/[(+62)_]/g,"")),Q(Object(n.a)({},a)),Z()}(e.name.replace(/\s/g,""),e.filter.type),X()}},c.a.createElement(o.a,{id:"LABEL.UPDATE"})),c.a.createElement("button",{type:"button",className:"mx-1 float-right btn btn-sm btn-light d-flex",onClick:function(){!function(e){var t=U;t[e]="",document.getElementById(e).value="",Q(Object(n.a)({},t)),Z()}(e.name.replace(/\s/g,"")),X()}},c.a.createElement("i",{className:"fas fa-redo fa-right py-1 mx-1"}),c.a.createElement("span",{className:"pt-1"},c.a.createElement(o.a,{id:"LABEL.FILTER.RESET.TABLE"})))))))})),c.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger ml-2 mt-2 button-filter-submit",onClick:function(){Q({}),document.getElementById("filter-form-all").reset(),Z({})}},c.a.createElement(o.a,{id:"LABEL.FILTER.RESET.TABLE"}))))),c.a.createElement("div",null,c.a.createElement(m.a,{component:d.a},c.a.createElement(p.a,{className:"hecto-"+w},c.a.createElement(f.a,null,c.a.createElement(E.a,null,l.map((function(e,t){return c.a.createElement(b.a,{className:"bg-primary text-uppercase ".concat((null===e||void 0===e?void 0:e.td)?null===e||void 0===e?void 0:e.td:""),key:t.toString()},e.order.active?c.a.createElement(g.a,{active:x.name===e.name.replace(/\s/g,""),direction:null!==x.type?x.type?"asc":"desc":x.order?"asc":"desc",onClick:function(){!function(e){var t=x;e.name.replace(/\s/g,"")===t.name?null!==t.type?t.type=!t.type:t.order=!t.order:(t.name=e.name.replace(/\s/g,""),t.order=!0,t.type=null),P(Object(n.a)({},t)),Z()}(e)}},c.a.createElement("span",null,c.a.createElement(o.a,{id:e.title}))):c.a.createElement("span",null,c.a.createElement(o.a,{id:e.title})))})))),c.a.createElement(v.a,null,N)),c.a.createElement("div",{className:"table-loading-data"},c.a.createElement("div",{className:"text-center font-weight-bold py-5"},c.a.createElement("div",{className:"table-loading-data-potition"},A&&c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-spinner fa-pulse text-dark mr-1"}),c.a.createElement(o.a,{id:"LABEL.TABLE.WAITING_DATA"})),O&&c.a.createElement("span",{className:"text-danger"},c.a.createElement("i",{className:"far fa-frown text-danger mr-1"}),c.a.createElement(o.a,{id:"LABEL.ERROR_REQUEST"})))))),c.a.createElement(h.a,{rowsPerPageOptions:[10,25,50,75,100,250,500,1e3],component:"div",count:k.count,rowsPerPage:k.rowsPerPage,page:k.page,onChangePage:function(e,t){var a=k;a.numberColum=t>a.page?a.numberColum+a.rowsPerPage:a.numberColum-a.rowsPerPage,a.page=t,B(Object(n.a)({},a)),Z()},onChangeRowsPerPage:function(e){var t=k;t.page=0,t.rowsPerPage=parseInt(e.target.value,10),t.numberColum=0,B(Object(n.a)({},t)),Z()}}))))})))},1260:function(e,t,a){"use strict";a.d(t,"m",(function(){return l})),a.d(t,"n",(function(){return c})),a.d(t,"k",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"i",(function(){return u})),a.d(t,"j",(function(){return m})),a.d(t,"f",(function(){return d})),a.d(t,"g",(function(){return p})),a.d(t,"l",(function(){return f})),a.d(t,"a",(function(){return E})),a.d(t,"e",(function(){return b})),a.d(t,"h",(function(){return g})),a.d(t,"d",(function(){return v}));var n=a(75),r=a.n(n);function l(e){return r.a.get("/api/v1/dokter".concat(e?"?"+e:""))}function c(e){return r.a.get("/api/v1/poli".concat(e?"?"+e:""))}function i(){return r.a.get("/api/v1/poli")}function o(e){return r.a.post("/api/v1/dokter",e)}function s(e){return r.a.post("/api/v1/poli",e)}function u(e){return r.a.get("/api/v1/dokter/".concat(e))}function m(e){return r.a.get("/api/v1/poli/".concat(e))}function d(e,t){return r.a.post("/api/v1/dokter/".concat(e),t)}function p(e,t){return r.a.put("/api/v1/poli/".concat(e),t)}function f(e){return r.a.get("/api/v1/article".concat(e?"?"+e:""))}function E(e){return r.a.post("/api/v1/article",e)}function b(e,t){return r.a.post("/api/v1/article/".concat(e),t)}function g(e){return r.a.get("/api/v1/article/".concat(e))}function v(e){return r.a.delete("/api/v1/article/".concat(e))}},1313:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(104),c=a(34),i=a(11),o=a(16),s=a(1227),u=a(288),m=a(19),d=a(1260),p=a(157),f=a(1253),E=a(62),b=a(98),g=a(1249),v=a(1243),h=a(1219),L=a(1220),y=a(1222),A=a(1281),j=a(1282),O=[{title:"LABEL.TITLE",name:"subject",order:{active:!0,status:!0,type:!0},filter:{active:!0,type:"text"}},{title:"LABEL.CREATE_DATE",name:"created_at",order:{active:!0,status:!1},filter:{active:!0,type:"date"}},{title:"LABEL.DATE_UPDATED",name:"updated_at",order:{active:!0,status:!1},filter:{active:!0,type:"date"}},{title:"LABEL.TABLE_HEADER.ACTION",name:"action",order:{active:!1,status:!1},filter:{active:!1,type:"true"}}],N=[{label:"LABEL.DETAIL",icon:"fas fa-external-link-alt text-primary",type:"open"},{label:"LABEL.DELETE",icon:"fas fa-trash-alt text-danger",type:"delete"}];var S=Object(u.c)(Object(o.b)(null,b.a)((function(e){var t=e.intl,a=Object(m.k)(),o=Object(n.useState)(!1),u=Object(i.a)(o,2),b=u[0],S=u[1],T=Object(n.useState)(!1),_=Object(i.a)(T,2),w=_[0],D=_[1],I=Object(n.useState)({}),k=Object(i.a)(I,2),B=k[0],C=k[1],R=Object(n.useState)({data:[],count:0}),x=Object(i.a)(R,2),P=x[0],M=x[1],F=Object(n.useState)(!1),U=Object(i.a)(F,2),Q=U[0],V=U[1],Y=Object(l.g)(),H=Object(n.useState)(!1),W=Object(i.a)(H,2),q=W[0],G=W[1],z=Object(n.useState)(""),J=Object(i.a)(z,2),Z=J[0],X=J[1];Object(n.useLayoutEffect)((function(){a.setBreadcrumbs([{pathname:"/administrator/dashboard",title:t.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/administrator/article-page/list",title:t.formatMessage({id:"LABEL.ARTICLE_LIST"})}]),a.setTitle(t.formatMessage({id:"LABEL.ARTICLE_LIST"}))}),[]);var K=function(e){S(!0),M(Object(c.a)(Object(c.a)({},P),{},{count:0,data:[]})),V(!1),X(e),Object(d.l)(e).then((function(e){S(!1),M(Object(c.a)(Object(c.a)({},P),{},{count:0,data:e.data.data}))})).catch((function(e){V(!0),S(!1),E.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))},$=function(t,a){"open"===t?e.history.push("/administrator/article-page/write/".concat(a.id)):(C(a),G(!0))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{open:q,maxWidth:"sm",fullWidth:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(h.a,null,r.a.createElement(s.a,{id:"LABEL.DELETE"})),r.a.createElement(L.a,null,"Apakah Anda yakin ingin menghapus Artikel berjudul"," ",r.a.createElement("b",null,B.subject),"?"),r.a.createElement(y.a,null,r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){G(!1)},disabled:w},r.a.createElement(s.a,{id:"LABEL.CANCEL"})),r.a.createElement("button",{type:"button",className:"btn btn-primary",disabled:w,onClick:function(){D(!0),Object(d.d)(B.id).then((function(e){G(!1),D(!1),K(Z),E.a.showSnackbar(t.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success")})).catch((function(e){D(!1),E.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))}},w?r.a.createElement(s.a,{id:"LABEL.WAITING"}):r.a.createElement(s.a,{id:"LABEL.SAVE"}),w?r.a.createElement("i",{className:"fas fa-spinner fa-pulse px-2"}):r.a.createElement("i",{className:"fas fa-save ml-2"})))),r.a.createElement(p.b,null,r.a.createElement(p.d,{title:""},r.a.createElement(p.f,null,r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){Y.push("/administrator/article-page/write/new")}},r.a.createElement("i",{className:"fas fa-user-plus"}),r.a.createElement(s.a,{id:"LABEL.ADD"})))),r.a.createElement(p.c,null,r.a.createElement(f.a,{dataHeader:O,handleParams:K,loading:b,err:Q,countData:P.count,hecto:10},P.data.map((function(e,t){return r.a.createElement(A.a,{key:t.toString()},r.a.createElement(j.a,null,null===e||void 0===e?void 0:e.subject),r.a.createElement(j.a,null,window.moment(new Date(null===e||void 0===e?void 0:e.created_at)).format("DD MMM YYYY")),r.a.createElement(j.a,null,window.moment(new Date(null===e||void 0===e?void 0:e.updated_at)).format("DD MMM YYYY")),r.a.createElement(j.a,null,r.a.createElement(g.a,{data:e,handleAction:$,ops:N})))}))))))}))),T=a(97),_=a.n(T),w=a(1248),D=a(3),I=a(68),k=a(85),B=a(377),C=a(1285),R=a.n(C),x=(a(1286),a(1287),a(1288),a(1289),a(1290),Object(u.c)(Object(o.b)(null,null)((function(e){var t=e.initialData,a=void 0===t?"":t,n=e.getData,l=e.onBlur,c=r.a.useState(a),o=Object(i.a)(c,2),s=o[0],u=o[1];return r.a.useEffect((function(){u(a),n(a)}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{value:s,options:{lang:"id-ID",height:450,dialogsInBody:!0,toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["fontname",["fontname"]],["color",["color"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video"]]]},onChange:function(e){u(e),n(e)},onImageUpload:function(e){var t=document.createElement("img"),a=new FileReader;a.onload=function(){t.setAttribute("src",a.result),R.a.insertNode(t)},a.readAsDataURL(e[0])},onBlur:l}))})))),P={};var M=Object(u.c)(Object(o.b)(null,b.a)((function(e){var t,a,c=e.intl,o=Object(m.k)(),u=Object(n.useState)(!1),f=Object(i.a)(u,2),b=f[0],g=f[1],v=Object(n.useState)(!1),h=Object(i.a)(v,2),L=(h[0],h[1],Object(l.g)()),y=e.match.params.state;Object(n.useLayoutEffect)((function(){o.setBreadcrumbs([{pathname:"/administrator/dashboard",title:c.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/administrator/article-page/list",title:c.formatMessage({id:"LABEL.ARTICLE_LIST"})},{pathname:"/administrator/article-page/write/".concat(y),title:c.formatMessage({id:"LABEL.ARTICLE_WRITING"})}]),o.setTitle(c.formatMessage({id:"LABEL.ARTICLE_WRITING"}))}),[]);var A=I.b().shape({subject:I.d().required(c.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),content:I.d().required(c.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),thumbnail_img:I.d().required(c.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"}))}),j=Object(k.c)({initialValues:P,validationSchema:A,onSubmit:function(){var e=Object(w.a)(_.a.mark((function e(t,a){var n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setStatus,a.setSubmitting,g(!0),n=new FormData,delete(r=Object.assign({},t)).load_thumbnail_img,r.file_thumbnail_img&&null!==r.file_thumbnail_img?r.thumbnail_img=r.file_thumbnail_img:delete r.thumbnail_img,delete r.file_thumbnail_img,Object.keys(r).forEach((function(e){n.append(e,r[e])})),"new"===y?Object(d.a)(n).then((function(e){console.log("result create ->",e),L.push("/administrator/article-page/list"),E.a.showSnackbar(c.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success")})).catch((function(e){console.log("err -> new",e),g(!1),E.a.showSnackbar(c.formatMessage({id:"REQ.REQUEST_FAILED"}))})):Object(d.e)(y,n).then((function(e){console.log("result edit ->",e),E.a.showSnackbar(c.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success")})).catch((function(e){console.log("err -> edit",e),g(!1),E.a.showSnackbar(c.formatMessage({id:"REQ.REQUEST_FAILED"}))}));case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()});return Object(n.useEffect)((function(){"new"!==y&&Object(d.h)(y).then((function(e){j.setValues(e.data.data),j.setFieldTouched("subject",!0)})).catch((function(e){E.a.showSnackbar(c.formatMessage({id:"REQ.REQUEST_FAILED"}))}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,null,r.a.createElement(p.c,null,r.a.createElement("form",{className:"form",autoComplete:"off",onSubmit:j.handleSubmit},r.a.createElement("div",{className:"image-input image-input-outline",style:{backgroundImage:"url(".concat(Object(D.d)("/media/bg/image_2.jpg")),margin:"0 4.5%",display:"block"}},r.a.createElement("div",{className:"image-input-wrapper",style:{backgroundImage:"".concat((null===(t=j.values)||void 0===t?void 0:t.file_thumbnail_img)?"url('".concat(null===(a=j.values)||void 0===a?void 0:a.load_thumbnail_img,"')"):j.values.thumbnail_img?"url(".concat(Object(B.b)(),"/storage/app/thumbnail_img/").concat(j.values.thumbnail_img,")"):"none"),width:"100%",height:"calc(60vh)"}}),r.a.createElement("label",{className:"btn btn-md btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow","data-action":"change","data-toggle":"tooltip",title:"","data-original-title":"Change avatar"},r.a.createElement("i",{className:"fa fa-pen icon-md text-primary"}),r.a.createElement("input",{type:"file",accept:".png, .jpg, .jpeg",onChange:function(e){var t=new FileReader;t.onload=function(){j.setFieldValue("load_thumbnail_img",t.result)},t.readAsDataURL(e.target.files[0]),j.setFieldValue("file_thumbnail_img",e.target.files[0]),"new"===y&&j.setFieldValue("thumbnail_img",e.target.files[0])}}))),r.a.createElement("span",{className:"form-text text-muted mt-5"},"Hanya menerima type file: png, jpg, jpeg.",r.a.createElement("span",{className:"text-left text-danger"},r.a.createElement(s.a,{id:"LABEL.VALIDATION_REQUIRED_FIELD"}))),r.a.createElement("div",{className:"mt-5 pt-5"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement(s.a,{id:"LABEL.TITLE"})),r.a.createElement("input",Object.assign({type:"text",className:"form-control",required:!0},j.getFieldProps("subject"))),j.touched.subject&&j.errors.subject&&r.a.createElement("span",{className:"text-left text-danger"},j.errors.subject)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement(s.a,{id:"LABEL.CONTENTS"})),r.a.createElement(x,{initialData:j.values.content,getData:function(e){j.setFieldValue("content",e)},onBlur:function(){j.setFieldTouched("content",!0)}}),j.touched.content&&j.errors.content&&r.a.createElement("span",{className:"text-left text-danger"},j.errors.content))),r.a.createElement("div",{className:"toolbar-custom scrolltop"},r.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm my-2",style:{width:60},disabled:b,onClick:function(){L.push("/administrator/article-page/list")}},r.a.createElement("i",{className:"fas fa-times-circle d-block p-0"}),r.a.createElement("span",{className:"font-size-xs"},"Cancel")),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-sm my-2",style:{width:60},disabled:!j.isValid||0===Object.keys(j.touched).length&&j.touched.constructor===Object||b,onClick:function(){}},b?r.a.createElement("i",{className:"fas fa-spinner fa-pulse p-2"}):r.a.createElement("i",{className:"fas fa-check d-block p-0"}),r.a.createElement("span",{className:"font-size-xs"},"Submit")))))))})));t.default=Object(u.c)(Object(o.b)(null,null)((function(e){return r.a.createElement(l.d,null,r.a.createElement(l.a,{exact:!0,from:"/administrator/article-page",to:"/administrator/dashboard"}),r.a.createElement(l.b,{path:"/administrator/article-page/list",component:function(e){return r.a.createElement(S,e)},exact:!0}),r.a.createElement(l.b,{path:"/administrator/article-page/write/:state",component:function(e){return r.a.createElement(M,e)},exact:!0}))})))}}]);
//# sourceMappingURL=17.88b28320.chunk.js.map