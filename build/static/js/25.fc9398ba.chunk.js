(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[25],{1248:function(e,t,a){"use strict";function n(e,t,a,n,c,r,l){try{var i=e[r](l),o=i.value}catch(s){return void a(s)}i.done?t(o):Promise.resolve(o).then(n,c)}function c(e){return function(){var t=this,a=arguments;return new Promise((function(c,r){var l=e.apply(t,a);function i(e){n(l,c,r,i,o,"next",e)}function o(e){n(l,c,r,i,o,"throw",e)}i(void 0)}))}}a.d(t,"a",(function(){return c}))},1250:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(11),c=a(0),r=a.n(c),l=a(22),i=a(1245),o=a(1224),s=a(1316),u=a(1357),m=a(1260),d=a(1261),p=a(1262),f=a(1227),E=a(15),b=Object(l.a)((function(e){return{tooltip:{boxShadow:e.shadows[1],fontSize:"0.875rem",marginTop:"0.25rem"}}}))(i.a);function h(e){var t=e.data,a=e.handleAction,c=e.ops,l=e.label,i=void 0===l?null:l,h=e.exclude,g=void 0===h?[]:h,y=r.a.useState(null),v=Object(n.a)(y,2),O=v[0],j=v[1],N=Boolean(O);function k(e){j(e.currentTarget)}function x(){j(null)}var L=r.a.useCallback((function(e,t){"function"===typeof a&&a(e,t),x()}),[a,x]),_=c;return r.a.createElement("div",null,i?r.a.createElement(b,{title:r.a.createElement(f.a,{id:i}),placement:"bottom"},r.a.createElement(o.a,{"aria-label":"More","aria-controls":"long-menu","aria-haspopup":"true",onClick:k},r.a.createElement(p.a,null))):r.a.createElement(o.a,{"aria-label":"More","aria-controls":"long-menu","aria-haspopup":"true",onClick:k,style:{margin:"-6px 0px",padding:8}},r.a.createElement(p.a,null)),r.a.createElement(s.a,{id:"long-menu",anchorEl:O,keepMounted:!0,open:N,onClose:x,PaperProps:{style:{width:300,marginLeft:-50}}},_.filter((function(e){return!g.includes(e.type)})).map((function(e,a){var n,c;return e.to?r.a.createElement(E.b,{key:a,to:null===(n=e.to)||void 0===n?void 0:n.url,style:null===(c=e.to)||void 0===c?void 0:c.style},r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement("i",{className:e.icon})),r.a.createElement(d.a,{primary:r.a.createElement(f.a,{id:e.label})}))):r.a.createElement(u.a,{key:a,onClick:function(){return L(e.type,t)},disabled:e.disabled},r.a.createElement(m.a,null,r.a.createElement("i",{className:e.icon})),r.a.createElement(d.a,{primary:r.a.createElement(f.a,{id:e.label})}))}))))}},1257:function(e,t,a){"use strict";a.d(t,"i",(function(){return r})),a.d(t,"m",(function(){return l})),a.d(t,"j",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return s})),a.d(t,"n",(function(){return u})),a.d(t,"b",(function(){return m})),a.d(t,"e",(function(){return d})),a.d(t,"h",(function(){return p})),a.d(t,"f",(function(){return f})),a.d(t,"g",(function(){return E})),a.d(t,"l",(function(){return b})),a.d(t,"a",(function(){return h})),a.d(t,"k",(function(){return g}));var n=a(32),c=a.n(n);function r(e){return c.a.get("/api/v1/medical/".concat(e))}function l(e){return c.a.get("/api/v1/obat".concat(e?"?"+e:""))}function i(e){return c.a.get("/api/v1/obat/".concat(e))}function o(e){return c.a.post("/api/v1/obat",e)}function s(e,t){return c.a.put("/api/v1/obat/".concat(e),t)}function u(e){return c.a.post("/api/v1/apotekcheck",e)}function m(e){return c.a.post("/api/v1/obat-in",e)}function d(){return c.a.get("/api/v1/getemptyitem")}function p(){return c.a.get("/api/v1/getwarnitem")}function f(){return c.a.get("/api/v1/getpreorder")}function E(){return c.a.get("/api/v1/stockitem")}function b(){return c.a.get("/api/v1/pasien?page=1&rowsPerPage=100000")}function h(e){return c.a.post("/api/v1/reseppos",e)}function g(e){return c.a.put("/api/v1/takemissitem/".concat(e))}},1260:function(e,t,a){"use strict";var n=a(1),c=a(12),r=a(0),l=(a(7),a(10)),i=a(22),o=a(1253),s=r.forwardRef((function(e,t){var a=e.classes,i=e.className,s=Object(c.a)(e,["classes","className"]),u=r.useContext(o.a);return r.createElement("div",Object(n.a)({className:Object(l.a)(a.root,i,"flex-start"===u.alignItems&&a.alignItemsFlexStart),ref:t},s))}));t.a=Object(i.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(s)},1261:function(e,t,a){"use strict";var n=a(1),c=a(12),r=a(0),l=(a(7),a(10)),i=a(22),o=a(558),s=a(1253),u=r.forwardRef((function(e,t){var a=e.children,i=e.classes,u=e.className,m=e.disableTypography,d=void 0!==m&&m,p=e.inset,f=void 0!==p&&p,E=e.primary,b=e.primaryTypographyProps,h=e.secondary,g=e.secondaryTypographyProps,y=Object(c.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),v=r.useContext(s.a).dense,O=null!=E?E:a;null==O||O.type===o.a||d||(O=r.createElement(o.a,Object(n.a)({variant:v?"body2":"body1",className:i.primary,component:"span",display:"block"},b),O));var j=h;return null==j||j.type===o.a||d||(j=r.createElement(o.a,Object(n.a)({variant:"body2",className:i.secondary,color:"textSecondary",display:"block"},g),j)),r.createElement("div",Object(n.a)({className:Object(l.a)(i.root,u,v&&i.dense,f&&i.inset,O&&j&&i.multiline),ref:t},y),O,j)}));t.a=Object(i.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(u)},1262:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(1),l=a(464);t.a=function(e,t){var a=c.a.memo(c.a.forwardRef((function(t,a){return c.a.createElement(l.a,Object(r.a)({ref:a},t),e)})));return a.muiName=l.a.muiName,a}(c.a.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}))},1350:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(100),l=a(20),i=a(93),o=a.n(i),s=a(1248),u=a(11),m=a(14),d=a(1227),p=a(279),f=(a(1249),a(370)),E=a(30),b=a(1257),h=a(49),g=(a(1250),a(60),a(104),a(206)),y=a(371),v=a(1252),O=a(35),j=a(92);var N=Object(p.c)(Object(m.b)(null,j.a)((function(e){var t=e.intl,a=Object(n.useState)(!1),i=Object(u.a)(a,2),p=i[0],j=i[1],N=Object(n.useState)(2),k=Object(u.a)(N,2),x=k[0],L=k[1],_=Object(E.i)(),S=Object(n.useState)({}),A=Object(u.a)(S,2),C=A[0],w=A[1],P=Object(n.useState)([]),T=Object(u.a)(P,2),M=T[0],I=T[1],B=Object(n.useState)({cust_nm:"",phone_no:""}),R=Object(u.a)(B,2),F=R[0],D=R[1],U=Object(r.g)(),q=Object(n.useState)([]),H=Object(u.a)(q,2),Q=H[0],z=H[1],V=Object(m.e)((function(e){return e.auth}),m.c).medicinePatient,J=Object(m.e)((function(e){return e.clientMqtt.client}),m.c);Object(n.useLayoutEffect)((function(){_.setBreadcrumbs([{pathname:"/pharmacist/dashboard",title:t.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/pharmacist/drug-purchase",title:t.formatMessage({id:"LABEL.DRUG_PURCHASE"})}]),_.setTitle(t.formatMessage({id:"LABEL.DRUG_PURCHASE"}))}),[]),Object(n.useEffect)((function(){var e={data:2===x?C:F,stateForm:x};try{var a=JSON.parse(localStorage.getItem("choicePeople"));2===a.stateForm?w(a.data):D(a.data),L(a.stateForm)}catch(n){localStorage.setItem("choicePeople",JSON.stringify(e))}Object(b.l)().then((function(e){e.data.data.rows=e.data.data.rows.filter((function(e){return 1===e.active_user}));var t=e.data.data.rows;t.forEach((function(e){e.value=e.id,e.label=e.kode_pasien+"-"+e.nama})),I(t)})).catch((function(e){h.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(o.a.mark((function e(){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(V&&V.length>0)){e.next=6;break}return a=V,n=new Promise(function(){var e=Object(s.a)(o.a.mark((function e(n,c){var r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<a.length)){e.next=18;break}return e.prev=2,e.next=5,Object(b.j)(a[r].id);case 5:l=e.sent,a[r].composite_item=l.data.data.composite_item,a[r].qty=a[r].qty?a[r].qty:1,r===a.length-1&&n(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),h.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"})),r===a.length-1&&n();case 15:r++,e.next=1;break;case 18:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,a){return e.apply(this,arguments)}}()),e.next=5,n;case 5:z(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var G=function(){if(J){var e=O.e.topic,t=O.e.qos,a=O.e.payload;J.publish(e,a,{qos:t},(function(e){e&&console.log("Publish error: ",e)}))}},W=function(e){var t={data:e,stateForm:x};localStorage.setItem("choicePeople",JSON.stringify(t))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.b,null,c.a.createElement(f.c,null,c.a.createElement("div",{className:"row gutter-b"},c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"bg-light-".concat(2===x?"primary":"secondary"," px-3 py-4 rounded-xl text-left")},c.a.createElement("div",{className:"font-size-h4 d-block my-2 text-".concat(2===x?"primary":"secondary"," d-flex justify-content-between"),style:{minHeight:30}},c.a.createElement("div",null,c.a.createElement(d.a,{id:"LABEL.PATIENT"})),c.a.createElement("div",null,c.a.createElement("i",{className:"far ".concat(2===x?"fa-check-circle":"fa-circle"," text-").concat(2===x?"primary":"secondary"," font-size-h1 cursor-pointer"),onClick:function(){L(2),D(Object(l.a)(Object(l.a)({},F),{},{cust_nm:"",phone_no:""})),W({})}}))),c.a.createElement("div",{className:"mt-2"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name"},c.a.createElement(d.a,{id:"LABEL.CHOOSE"})),c.a.createElement(y.a,{value:C,options:M,isDisabled:2!==x,className:"form-control border-0 p-0 h-100 rounded-0",classNamePrefix:"react-select",onChange:function(e){w(e),W(e)}}))))),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"bg-light-".concat(3===x?"primary":"secondary"," px-3 py-4 rounded-xl text-left")},c.a.createElement("div",{className:"font-size-h4 d-block my-2 text-".concat(3===x?"primary":"secondary"," d-flex justify-content-between"),style:{minHeight:30}},c.a.createElement("div",null,c.a.createElement(d.a,{id:"LABEL.NON_PATIENT"})),c.a.createElement("div",null,c.a.createElement("i",{className:"far ".concat(3===x?"fa-check-circle":"fa-circle"," text-").concat(3===x?"primary":"secondary"," font-size-h1 cursor-pointer"),onClick:function(){L(3),w({}),W({cust_nm:"",phone_no:""})}}))),c.a.createElement("div",{className:"mt-2"},c.a.createElement("form",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name"},c.a.createElement(d.a,{id:"LABEL.NAME"})),c.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:t.formatMessage({id:"LABEL.NAME"}),value:F.cust_nm,onChange:function(e){D(Object(l.a)(Object(l.a)({},F),{},{cust_nm:e.target.value})),W({cust_nm:e.target.value,phone_no:F.phone_no})},disabled:3!==x,required:!0,autoComplete:"off"}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name"},c.a.createElement(d.a,{id:"LABEL.NAME"})),c.a.createElement(v.a,{id:3!==x?"NumberFormat-text":"NumberFormat-input",value:F.phone_no,displayType:3!==x?"text":"input",className:"form-control",format:"+62 ###-###-###-####",mask:"_",allowEmptyFormatting:!0,allowLeadingZeros:!0,onValueChange:function(e){D(Object(l.a)(Object(l.a)({},F),{},{phone_no:e.floatValue})),W({cust_nm:F.cust_nm,phone_no:e.floatValue})}}))))))))))),c.a.createElement(f.b,null,c.a.createElement(f.d,{title:"Resep Yang Diberikan"},c.a.createElement(f.f,null,c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){U.push("/pharmacist/drug-purchase/medicine-list")}},c.a.createElement("i",{className:"fas fa-prescription-bottle-alt mx-1"}),"Penambahan Obat"))),c.a.createElement(f.c,null,c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Nama Obat"),c.a.createElement("th",null,"Unit"),c.a.createElement("th",null,"Harga"),c.a.createElement("th",null,"Sub Total"),c.a.createElement("th",null,"Aksi"))),Q.map((function(t,a){return c.a.createElement("tbody",{key:a.toString()},c.a.createElement("tr",null,c.a.createElement("td",null,t.nama),c.a.createElement("td",null,c.a.createElement(v.a,{value:t.qty,displayType:"input",className:"form-control",allowEmptyFormatting:!0,allowLeadingZeros:!1,allowNegative:!1,onValueChange:function(e){var a=Object.assign([],Q),n=a.findIndex((function(e){return e.id===t.id}));a[n].qty=e.floatValue?e.floatValue:0,a[n].composite_item&&a[n].composite_item.length>0&&a[n].composite_item.map((function(e){return e.initialQty||(e.initialQty=e.qty),e.qty=e.initialQty*a[n].qty})),z(a)},onClick:function(e){e.target.focus(),e.target.select()}})),c.a.createElement("td",null,Object(g.a)(t.harga)),c.a.createElement("td",null,Object(g.a)(t.harga*t.qty)),c.a.createElement("td",null,c.a.createElement("i",{className:"far fa-trash-alt text-danger cursor-pointer",onClick:function(){var a=Object.assign([],Q),n=a.findIndex((function(e){return e.id===t.id}));a.splice(n,1),z(a),e.setMedicinePatient(a)}}))),t.composite_item&&t.composite_item.map((function(e,t){return c.a.createElement("tr",{key:t.toString(),style:{backgroundColor:"#F3F6F9"}},c.a.createElement("td",{className:"pl-10"},e.nama),c.a.createElement("td",null,c.a.createElement("input",{type:"number",className:"form-control",value:e.qty,onChange:function(){},disabled:!0})),c.a.createElement("td",null,Object(g.a)(0)),c.a.createElement("td",null,Object(g.a)(0)),c.a.createElement("td",null))})))})),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{colSpan:"2"}),c.a.createElement("th",null,"Total"),c.a.createElement("td",{colSpan:"2"},Object(g.a)(function(e){var t=0;return e.map((function(e){t+=e.harga*e.qty})),t}(Q)))))))),c.a.createElement("div",{className:"toolbar-custom scrolltop"},c.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm my-2",style:{width:60},disabled:p,onClick:function(){U.push("/pharmacist/dashboard"),e.setMedicinePatient(null),localStorage.removeItem("choicePeople")}},c.a.createElement("i",{className:"fas fa-times-circle d-block p-0"}),c.a.createElement("span",{className:"font-size-xs"},"Cancel")),c.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm my-2",style:{width:60},disabled:p||V&&0===V.length||(2===x?!!window.$.isEmptyObject(C):!F.cust_nm||!F.phone_no)||0===Q.length,onClick:function(){!function(){j(!0),Q.forEach((function(e){return e.barang_id=e.id}));var a={transtype:x,detail_resep:Q};2===x?a.pasien_id=C.value:(a.cust_nm=F.cust_nm,a.phone_no=F.phone_no),Object(b.a)(a).then((function(a){j(!1),e.setMedicinePatient([]),z([]),w({}),D(Object(l.a)(Object(l.a)({},F),{},{cust_nm:"",phone_no:""})),G(),h.a.showSnackbar(t.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success")})).catch((function(e){console.log("err",e),j(!1),h.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))}()}},p?c.a.createElement("i",{className:"fas fa-spinner fa-pulse p-2"}):c.a.createElement("i",{className:"fas fa-check d-block p-0"}),c.a.createElement("span",{className:"font-size-xs"},"Submit"))))}))),k=a(1278),x=a(1279),L=a(1317),_=a(1251),S=[{title:"LABEL.CHECK",name:"check",order:{active:!1,status:!1},filter:{active:!1,type:"text"}},{title:"LABEL.PRODUCT_CODE",name:"barcode",order:{active:!0,status:!0},filter:{active:!0,type:"text"}},{title:"LABEL.PRODUCT_NAME",name:"nama",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.UNIT_TYPE",name:"unit",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.UNIT_PRICE",name:"harga",order:{active:!0,status:!1},filter:{active:!0,type:"currency"}}];var A=Object(p.c)(Object(m.b)(null,j.a)((function(e){var t=e.intl,a=Object(E.i)(),i=Object(n.useState)(!0),o=Object(u.a)(i,2),s=o[0],p=o[1],y=Object(n.useState)({data:[],count:0}),v=Object(u.a)(y,2),O=v[0],j=v[1],N=Object(n.useState)(!1),A=Object(u.a)(N,2),C=A[0],w=A[1],P=Object(n.useState)([]),T=Object(u.a)(P,2),M=T[0],I=T[1],B=Object(r.g)(),R=Object(m.e)((function(e){return e.auth.medicinePatient}),m.c);return Object(n.useLayoutEffect)((function(){a.setBreadcrumbs([{pathname:"/pharmacist/dashboard",title:t.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/pharmacist/drug-purchase",title:t.formatMessage({id:"LABEL.DRUG_PURCHASE"})},{pathname:"/pharmacist/drug-purchase/medicine-list",title:t.formatMessage({id:"LABEL.MEDICINE_LIST"})}]),a.setTitle(t.formatMessage({id:"LABEL.MEDICINE_LIST"}))}),[]),Object(n.useEffect)((function(){R&&I(R)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(f.b,null,c.a.createElement(f.d,{title:""},c.a.createElement(f.f,null,c.a.createElement("button",{type:"button",className:"btn btn-danger mx-1",onClick:function(){B.push("/pharmacist/drug-purchase")}},c.a.createElement("i",{className:"fas fa-times"}),c.a.createElement(d.a,{id:"LABEL.CANCEL"})),c.a.createElement("button",{type:"button",className:"btn btn-primary mx-1",onClick:function(){e.setMedicinePatient(M),B.push("/pharmacist/drug-purchase")}},c.a.createElement("i",{className:"fas fa-save"}),c.a.createElement(d.a,{id:"LABEL.SAVE"})))),c.a.createElement(f.c,null,c.a.createElement(_.a,{dataHeader:S,handleParams:function(e){p(!0),j(Object(l.a)(Object(l.a)({},O),{},{count:0,data:[]})),w(!1),Object(b.m)(e).then((function(e){p(!1),j(Object(l.a)(Object(l.a)({},O),{},{count:e.data.data.count,data:e.data.data.rows}))})).catch((function(e){w(!0),p(!1),h.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))},loading:s,err:C,countData:O.count,hecto:10},O.data.map((function(e,t){return c.a.createElement(k.a,{key:t.toString()},c.a.createElement(x.a,{padding:"checkbox"},c.a.createElement(L.a,{indeterminate:!1,checked:-1!==M.findIndex((function(t){return t.id===e.id})),onChange:function(t){var a=Object.assign([],M);if(t.target.checked)a.push(e);else{var n=a.findIndex((function(t){return t.id===e.id}));a.splice(n,1)}I(a)}})),c.a.createElement(x.a,null,null===e||void 0===e?void 0:e.barcode),c.a.createElement(x.a,null,null===e||void 0===e?void 0:e.nama),c.a.createElement(x.a,null,null===e||void 0===e?void 0:e.unit),c.a.createElement(x.a,null,Object(g.a)((null===e||void 0===e?void 0:e.harga)||0)))}))))))})));t.default=Object(p.c)(Object(m.b)(null,null)((function(e){return c.a.createElement(r.d,null,c.a.createElement(r.b,{path:"/pharmacist/drug-purchase/medicine-list",component:function(e){return c.a.createElement(A,e)},exact:!0}),c.a.createElement(r.b,{path:"/pharmacist/drug-purchase",component:function(e){return c.a.createElement(N,e)},exact:!0}))})))}}]);
//# sourceMappingURL=25.fc9398ba.chunk.js.map