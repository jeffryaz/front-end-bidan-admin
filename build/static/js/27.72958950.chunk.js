(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[27],{1247:function(e,t,a){},1249:function(e,t,a){"use strict";var n=a(25),r=a(12),l=a(0),c=a.n(l),o=a(15),i=a(1227),s=a(279),m=a(1303),u=a(1283),d=a(1189),f=a(1284),p=a(1285),E=a(1286),g=a(1287),b=a(1341),v=a(1288),y=a(1319),L=a(1252),A=a(313),h=a.n(A),S=(a(1247),function(e){return function(e,t,a){var n={currency:t,style:"currency",currencyDisplay:"symbol"};return new Intl.NumberFormat(e,n).format(a)}("id-ID","IDR",e)});t.a=Object(s.c)(Object(o.b)(null,null)((function(e){var t=e.intl,a=e.dataHeader,l=void 0===a?[]:a,o=e.handleParams,s=e.loading,A=void 0!==s&&s,O=e.err,N=void 0!==O&&O,j=e.children,T=e.countData,B=void 0===T?0:T,w=e.hecto,k=void 0===w?1:w,D=c.a.useState({numberColum:0,page:0,count:B,rowsPerPage:10}),P=Object(r.a)(D,2),C=P[0],I=P[1],M=c.a.useState({name:l.filter((function(e){return!0===e.order.status&&!0===e.order.active})).length>0?l.filter((function(e){return!0===e.order.status&&!0===e.order.active}))[0].name.replace(/\s/g,""):"",order:!(l.filter((function(e){return!0===e.order.status&&!0===e.order.active})).length>0)||l.filter((function(e){return!0===e.order.status&&!0===e.order.active}))[0].order.status,type:l.filter((function(e){return!0===e.order.status&&!0===e.order.active&&null!==e.order.type})).length>0?l.filter((function(e){return!0===e.order.status&&!0===e.order.active&&null!==e.order.type}))[0].order.type:null}),R=Object(r.a)(M,2),x=R[0],_=R[1],F=c.a.useState({}),U=Object(r.a)(F,2),Q=U[0],Y=U[1],H=c.a.useState({filter:{},sort:{}}),z=Object(r.a)(H,2),V=z[0],J=z[1],Z=c.a.useState(null),G=Object(r.a)(Z,2),W=G[0],X=G[1],q=c.a.useCallback((function(e,t){var a,r=Object.assign({},C),l=V;l.filter=function(e){var t="";for(var a in e)e[a]&&(t+="filter["+a+"]="+e[a]+"&");return t}(e||Q),l.sort="".concat((a=t||x).name,",").concat(null!==a.type?a.type?"asc":"desc":a.order?"asc":"desc"),r.page=r.page+1,l=Object.assign({},l,r),J(Object(n.a)({},l));var c=l.filter+"page="+l.page+"&rowsPerPage="+l.rowsPerPage+"&sort="+l.sort;"function"===typeof o&&o(c)}),[Q,x,V,t,C]);c.a.useEffect(q,[]),c.a.useEffect((function(){I(Object(n.a)(Object(n.a)({},C),{},{count:B||0}))}),[B]);var K=function(){X(null)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("form",{id:"filter-form-all",className:"panel-filter-table mb-1"},c.a.createElement("span",{className:"mr-2 mt-2 float-left"},c.a.createElement(i.a,{id:"LABEL.FILTER.TABLE"})),c.a.createElement("div",{className:"d-block"},c.a.createElement("div",{className:""},l.filter((function(e){return!0===e.filter.active})).map((function(e,a){return c.a.createElement("div",{key:a.toString(),className:"btn-group hover-filter-table",status:"closed",id:a},c.a.createElement("div",{className:"btn btn-sm",id:"sub-filter-"+a,onClick:function(){X(a)}},c.a.createElement("span",null,c.a.createElement(i.a,{id:e.title}),":"),c.a.createElement("strong",{style:{paddingRight:1,paddingLeft:1}},c.a.createElement("span",{className:"filter-label",id:"filter-span-"+a},"currency"===e.filter.type&&Q[e.name.replace(/\s/g,"")]?S(Number(Q[e.name.replace(/\s/g,"")])):"phone"===e.filter.type&&Q[e.name.replace(/\s/g,"")]?"(62)".concat(Q[e.name.replace(/\s/g,"")]):"date"===e.filter.type&&Q[e.name.replace(/\s/g,"")]?"".concat(h()(new Date(Q[e.name.replace(/\s/g,"")])).format("DD MMM YYYY")):Q[e.name.replace(/\s/g,"")])),Q[e.name.replace(/\s/g,"")]?null:c.a.createElement("span",{style:{color:"#777777"}},c.a.createElement(i.a,{id:"LABEL.ALL"}))),c.a.createElement(m.a,{anchorEl:document.getElementById("sub-filter-".concat(W||0)),keepMounted:!1,open:a===W,onClose:K,PaperProps:{style:{transform:"translateX(0px) translateY(40px)"}}},c.a.createElement("div",{className:"px-2"},c.a.createElement("div",{className:"float-left"},"currency"===e.filter.type?c.a.createElement(L.a,{value:Q[e.name.replace(/\s/g,"")]||"",displayType:"input",className:"form-control",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),thousandSeparator:".",decimalSeparator:",",allowEmptyFormatting:!0,allowLeadingZeros:!0,prefix:"Rp ",onValueChange:function(e){}}):"phone"===e.filter.type?c.a.createElement(L.a,{value:Q[e.name.replace(/\s/g,"")]||"",displayType:"input",className:"form-control",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),format:"(+62)############",mask:"_",allowEmptyFormatting:!0,allowLeadingZeros:!0,onValueChange:function(e){}}):c.a.createElement("input",{type:e.filter.type,className:"form-control",min:"0",name:e.name.replace(/\s/g,""),id:e.name.replace(/\s/g,""),defaultValue:Q[e.name.replace(/\s/g,"")]||"",placeholder:t.formatMessage({id:"LABEL.ALL"}),style:{width:200}})),c.a.createElement("div",{className:"d-flex"},c.a.createElement("button",{type:"button",className:"mx-1 float-left btn btn-sm btn-primary",onClick:function(){!function(e,t){var a=Q;a[e]=document.getElementById(e).value,"currency"===t?a[e]=a[e].replace(/[Rp .]/g,"").replace(/[,]/g,"."):"phone"===t&&(a[e]=a[e].replace(/[(+62)_]/g,"")),Y(Object(n.a)({},a)),q()}(e.name.replace(/\s/g,""),e.filter.type),K()}},c.a.createElement(i.a,{id:"LABEL.UPDATE"})),c.a.createElement("button",{type:"button",className:"mx-1 float-right btn btn-sm btn-light d-flex",onClick:function(){!function(e){var t=Q;t[e]="",document.getElementById(e).value="",Y(Object(n.a)({},t)),q()}(e.name.replace(/\s/g,"")),K()}},c.a.createElement("i",{className:"fas fa-redo fa-right py-1 mx-1"}),c.a.createElement("span",{className:"pt-1"},c.a.createElement(i.a,{id:"LABEL.FILTER.RESET.TABLE"})))))))})),c.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger ml-2 mt-2 button-filter-submit",onClick:function(){Y({}),document.getElementById("filter-form-all").reset(),q({})}},c.a.createElement(i.a,{id:"LABEL.FILTER.RESET.TABLE"}))))),c.a.createElement("div",null,c.a.createElement(u.a,{component:d.a},c.a.createElement(f.a,{className:"hecto-"+k},c.a.createElement(p.a,null,c.a.createElement(E.a,null,l.map((function(e,t){return c.a.createElement(g.a,{className:"bg-primary text-uppercase ".concat((null===e||void 0===e?void 0:e.td)?null===e||void 0===e?void 0:e.td:""),key:t.toString()},e.order.active?c.a.createElement(b.a,{active:x.name===e.name.replace(/\s/g,""),direction:null!==x.type?x.type?"asc":"desc":x.order?"asc":"desc",onClick:function(){!function(e){var t=x;e.name.replace(/\s/g,"")===t.name?null!==t.type?t.type=!t.type:t.order=!t.order:(t.name=e.name.replace(/\s/g,""),t.order=!0,t.type=null),_(Object(n.a)({},t)),q()}(e)}},c.a.createElement("span",null,c.a.createElement(i.a,{id:e.title}))):c.a.createElement("span",null,c.a.createElement(i.a,{id:e.title})))})))),c.a.createElement(v.a,null,j)),c.a.createElement("div",{className:"table-loading-data"},c.a.createElement("div",{className:"text-center font-weight-bold py-5"},c.a.createElement("div",{className:"table-loading-data-potition"},A&&c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-spinner fa-pulse text-dark mr-1"}),c.a.createElement(i.a,{id:"LABEL.TABLE.WAITING_DATA"})),N&&c.a.createElement("span",{className:"text-danger"},c.a.createElement("i",{className:"far fa-frown text-danger mr-1"}),c.a.createElement(i.a,{id:"LABEL.ERROR_REQUEST"})))))),c.a.createElement(y.a,{rowsPerPageOptions:[10,25,50,75,100,250,500,1e3],component:"div",count:C.count,rowsPerPage:C.rowsPerPage,page:C.page,onChangePage:function(e,t){var a=C;a.numberColum=t>a.page?a.numberColum+a.rowsPerPage:a.numberColum-a.rowsPerPage,a.page=t,I(Object(n.a)({},a)),q()},onChangeRowsPerPage:function(e){var t=C;t.page=0,t.rowsPerPage=parseInt(e.target.value,10),t.numberColum=0,I(Object(n.a)({},t)),q()}}))))})))},1333:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(99),c=a(165),o=a(25),i=a(12),s=a(15),m=a(1227),u=a(279),d=a(370),f=a(1286),p=a(1287),E=a(30),g=a(57),b=a.n(g);var v=a(48),y=(a(64),a(104),a(1249)),L=[{title:"LABEL.NAME",name:"nama",order:{active:!0,status:!0,type:!0},filter:{active:!0,type:"text"},td:"td-20"},{title:"LABEL.SATISFACTION_LAVEL",name:"tingkat_kepuasan",order:{active:!1,status:!1},filter:{active:!1,type:"text"},td:"td-15"},{title:"LABEL.COMMENT",name:"komentar",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.DATE",name:"updated_at",order:{active:!0,status:!1},filter:{active:!0,type:"date"},td:"td-15"},{title:"LABEL.PUBLISH",name:"publish",order:{active:!1,status:!1},filter:{active:!1,type:"text"}},{title:"LABEL.TABLE_HEADER.ACTION",name:"action",order:{active:!1,status:!1},filter:{active:!1,type:"text"}}];var A=Object(u.c)(Object(s.b)(null,null)((function(e){var t=e.intl,a=Object(n.useState)(!1),l=Object(i.a)(a,2),s=l[0],u=l[1],g=Object(E.i)(),A=Object(n.useState)({data:[],count:0}),h=Object(i.a)(A,2),S=h[0],O=h[1],N=Object(n.useState)(!1),j=Object(i.a)(N,2),T=j[0],B=j[1],w=Object(n.useState)(""),k=Object(i.a)(w,2),D=k[0],P=k[1];Object(n.useLayoutEffect)((function(){g.setBreadcrumbs([{pathname:"/administrator/dashboard",title:t.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/administrator/testimonial",title:t.formatMessage({id:"LABEL.TESTIMONIAL"})}]),g.setTitle(t.formatMessage({id:"LABEL.TESTIMONIAL"}))}),[]);var C=function(e){u(!0),O(Object(o.a)(Object(o.a)({},S),{},{count:0,data:[]})),B(!1),P(e),function(e){return b.a.get("/api/v1/testimoni".concat(e?"?"+e:""))}(e).then((function(e){u(!1),O(Object(o.a)(Object(o.a)({},S),{},{count:0,data:e.data.data}))})).catch((function(e){B(!0),u(!1),v.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))},I=function(e){(function(e){return b.a.put("/api/v1/testimoni/publish/".concat(e))})(e).then((function(e){v.a.showSnackbar(t.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success"),C(D)})).catch((function(e){B(!0),u(!1),v.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))},M=function(e){(function(e){return b.a.put("/api/v1/testimoni/unpublish/".concat(e))})(e).then((function(e){v.a.showSnackbar(t.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success"),C(D)})).catch((function(e){B(!0),u(!1),v.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))},R=function(e){(function(e){return b.a.delete("/api/v1/testimoni/staff/".concat(e))})(e).then((function(e){v.a.showSnackbar(t.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success"),C(D)})).catch((function(e){B(!0),u(!1),v.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,null,r.a.createElement(d.c,null,r.a.createElement(y.a,{dataHeader:L,handleParams:C,loading:s,err:T,countData:S.count,hecto:10},S.data.map((function(e,t){return r.a.createElement(f.a,{key:t.toString()},r.a.createElement(p.a,null,null===e||void 0===e?void 0:e.pasien.nama),r.a.createElement(p.a,null,Object(c.a)(Array((null===e||void 0===e?void 0:e.star)||0)).map((function(e,t){return r.a.createElement("i",{className:"fas fa-star",style:{color:"#FFD700",fontSize:"large"},key:t.toString()})})),Object(c.a)(Array(5-((null===e||void 0===e?void 0:e.star)||0))).map((function(e,t){return r.a.createElement("i",{className:"far fa-star",style:{color:"#FFD700",fontSize:"large"},key:t.toString()})}))),r.a.createElement(p.a,null,null===e||void 0===e?void 0:e.testimoni),r.a.createElement(p.a,null,window.moment(new Date(null===e||void 0===e?void 0:e.updated_at)).format("DD MMM YYYY HH:mm:ss")),r.a.createElement(p.a,null,1===(null===e||void 0===e?void 0:e.publish)?r.a.createElement("i",{className:"fas fa-toggle-on font-size-h2 text-primary cursor-pointer",onClick:function(){M(e.id)}}):r.a.createElement("i",{className:"fas fa-toggle-off font-size-h2 text-danger cursor-pointer",onClick:function(){I(e.id)}})),r.a.createElement(p.a,null,r.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger",onClick:function(){R(e.id)}},r.a.createElement(m.a,{id:"LABEL.DELETE"}))))}))))))})));t.default=Object(u.c)(Object(s.b)(null,null)((function(e){return r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/administrator/testimonial",component:function(e){return r.a.createElement(A,e)},exact:!0}))})))}}]);
//# sourceMappingURL=27.72958950.chunk.js.map