(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[33],{1260:function(e,t,a){"use strict";a.d(t,"i",(function(){return l})),a.d(t,"m",(function(){return r})),a.d(t,"j",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return s})),a.d(t,"n",(function(){return m})),a.d(t,"b",(function(){return d})),a.d(t,"e",(function(){return u})),a.d(t,"h",(function(){return E})),a.d(t,"f",(function(){return b})),a.d(t,"g",(function(){return p})),a.d(t,"l",(function(){return f})),a.d(t,"a",(function(){return g})),a.d(t,"k",(function(){return h}));var n=a(32),c=a.n(n);function l(e){return c.a.get("/api/v1/medical/".concat(e))}function r(e){return c.a.get("/api/v1/obat".concat(e?"?"+e:""))}function i(e){return c.a.get("/api/v1/obat/".concat(e))}function o(e){return c.a.post("/api/v1/obat",e)}function s(e,t){return c.a.put("/api/v1/obat/".concat(e),t)}function m(e){return c.a.post("/api/v1/apotekcheck",e)}function d(e){return c.a.post("/api/v1/obat-in",e)}function u(){return c.a.get("/api/v1/getemptyitem")}function E(){return c.a.get("/api/v1/getwarnitem")}function b(){return c.a.get("/api/v1/getpreorder")}function p(){return c.a.get("/api/v1/stockitem")}function f(){return c.a.get("/api/v1/pasien?page=1&rowsPerPage=100000")}function g(e){return c.a.post("/api/v1/reseppos",e)}function h(e){return c.a.put("/api/v1/takemissitem/".concat(e))}},1286:function(e,t,a){"use strict";var n=a(20),c=a(11),l=a(0),r=a.n(l),i=a(14),o=a(1230),s=a(279),m=a(371),d=a(49),u=a(30),E=(a(26),a(13),a(100)),b=a(1260),p=(a(35),a(207)),f=a(1255),g=a(92),h=a(1253),v=a(1246),L=a(1223),O=a(1224),y=a(1226),A=a(1276),j=a(1277),N=a(1320),k=a(1),C=a(12),S=(a(7),a(10)),T=a(22),x=a(81),w=a(39),B=a(1268),P=l.forwardRef((function(e,t){var a=e.classes,n=e.className,c=e.color,r=void 0===c?"secondary":c,i=e.edge,o=void 0!==i&&i,s=e.size,m=void 0===s?"medium":s,d=Object(C.a)(e,["classes","className","color","edge","size"]),u=l.createElement("span",{className:a.thumb});return l.createElement("span",{className:Object(S.a)(a.root,n,{start:a.edgeStart,end:a.edgeEnd}[o],"small"===m&&a["size".concat(Object(w.a)(m))])},l.createElement(B.a,Object(k.a)({type:"checkbox",icon:u,checkedIcon:u,classes:{root:Object(S.a)(a.switchBase,a["color".concat(Object(w.a)(r))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},d)),l.createElement("span",{className:a.track}))})),D=Object(T.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(x.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(x.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(P),_=a(1252);var U=[{title:"LABEL.PRODUCT_CODE",name:"barcode",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.PRODUCT_NAME",name:"nama",order:{active:!0,status:!0,type:!0},filter:{active:!0,type:"text"}},{title:"LABEL.UNIT_TYPE",name:"unit",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.UNIT_PRICE",name:"harga",order:{active:!0,status:!1},filter:{active:!0,type:"currency"}},{title:"LABEL.PACKAGE",name:"iscomposite",order:{active:!1,status:!1},filter:{active:!1,type:"text"}},{title:"LABEL.TABLE_HEADER.ACTION",name:"action",order:{active:!1,status:!1},filter:{active:!1,type:"text"}}],R=[{title:"LABEL.CHECK",name:"check",filter:!1},{title:"LABEL.PRODUCT_CODE",name:"barcode",filter:!0},{title:"LABEL.PRODUCT_NAME",name:"nama",filter:!0},{title:"LABEL.UNIT_TYPE",name:"unit",filter:!0},{title:"LABEL.UNIT_PRICE",name:"harga",filter:!0}];t.a=Object(s.c)(Object(i.b)(null,g.a)((function(e){var t=e.intl,a=(Object(E.g)(),Object(l.useState)(!1)),s=Object(c.a)(a,2),g=s[0],k=s[1],C=Object(l.useState)(!1),S=Object(c.a)(C,2),T=S[0],x=S[1],w=Object(l.useState)({data:[],count:0}),B=Object(c.a)(w,2),P=B[0],I=B[1],$=Object(l.useState)([]),M=Object(c.a)($,2),q=M[0],F=M[1],Q=Object(l.useState)([]),W=Object(c.a)(Q,2),Y=W[0],z=W[1],V=Object(l.useState)(!1),G=Object(c.a)(V,2),H=G[0],K=G[1],J=Object(l.useState)(!1),X=Object(c.a)(J,2),Z=X[0],ee=X[1],te=Object(l.useState)(!1),ae=Object(c.a)(te,2),ne=ae[0],ce=ae[1],le=Object(l.useState)({barcode:"",nama:"",unit:"",harga:0,iscomposite:!1}),re=Object(c.a)(le,2),ie=re[0],oe=re[1],se=Object(u.i)(),me=(Object(i.e)((function(e){return e.clientMqtt.client}),i.c),Object(l.useState)([])),de=Object(c.a)(me,2),ue=de[0],Ee=de[1],be=Object(l.useState)("new"),pe=Object(c.a)(be,2),fe=pe[0],ge=pe[1],he=Object(l.useState)(""),ve=Object(c.a)(he,2),Le=ve[0],Oe=ve[1],ye=Object(l.useState)(!1),Ae=Object(c.a)(ye,2),je=Ae[0],Ne=Ae[1];Object(l.useLayoutEffect)((function(){se.setBreadcrumbs([{pathname:"/pharmacist/dashboard",title:t.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/pharmacist/medicine-page/list",title:t.formatMessage({id:"LABEL.PRODUCT_LIST"})}]),se.setTitle(t.formatMessage({id:"LABEL.PRODUCT_LIST"}))}),[]);var ke=function(e){k(!0),I(Object(n.a)(Object(n.a)({},P),{},{count:0,data:[]})),K(!1),Oe(e),Object(b.m)(e).then((function(e){k(!1),I(Object(n.a)(Object(n.a)({},t),{},{count:e.data.data.count,data:e.data.data.rows}));var t=Object.assign([],e.data.data.rows);t=t.filter((function(e){return 0===e.iscomposite})),F(t)})).catch((function(e){K(!0),k(!1),d.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))};Object(l.useEffect)((function(e){Object(b.m)("page=1&rowsPerPage=1000000&sort=nama,asc").then((function(e){var t=Object.assign([],e.data.data.rows);t=t.filter((function(e){return 0===e.iscomposite})),z(t)})).catch((function(e){K(!0),k(!1),d.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))}),[]);var Ce=ie.barcode.length>0&&ie.nama.length>0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{open:je,maxWidth:"md",fullWidth:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(L.a,null,r.a.createElement(o.a,{id:"LABEL.ADD_QTY"})),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),x(!0);var a=Object.assign([],ue);a.forEach((function(e){e.barang_id=e.id,e.harga=e.sellingPrice,delete e.id,delete e.sellingPrice})),Object(b.b)({items:a}).then((function(e){Ee([]),x(!1),d.a.showSnackbar(t.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success"),ke(Le),Ne(!1)})).catch((function(e){var t;x(!1),d.a.showSnackbar(null===(t=e.response)||void 0===t?void 0:t.data.messages)}))}},r.a.createElement(O.a,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(o.a,{id:"LABEL.PRODUCT_NAME"})),r.a.createElement("th",null,r.a.createElement(o.a,{id:"LABEL.UNIT_TYPE"})),r.a.createElement("th",null,r.a.createElement(o.a,{id:"LABEL.UNIT_PRICE"})),r.a.createElement("th",null,r.a.createElement(o.a,{id:"LABEL.QTY"}),r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("th",null,r.a.createElement(o.a,{id:"LABEL.SELLING_PRICE"}),r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("th",{className:"text-right",style:{maxWidth:90}},r.a.createElement("button",{className:"btn btn-warning btn-sm",type:"button",onClick:function(){ce(!0),F(Y)}},r.a.createElement(o.a,{id:"LABEL.ADD_ITEM"}))))),r.a.createElement("tbody",null,ue.map((function(e,t){return r.a.createElement("tr",{key:t.toString()},r.a.createElement("td",null,e.nama),r.a.createElement("td",null,e.unit),r.a.createElement("td",null,Object(p.a)(e.harga)),r.a.createElement("td",null,r.a.createElement("input",{type:"number",className:"form-control",value:e.qty,onChange:function(e){var a=Object.assign([],ue);a[t].qty=e.target.value,Ee(a)},required:!0,disabled:T})),r.a.createElement("td",{colSpan:"2"},r.a.createElement(f.a,{id:T?"NumberFormat-text":"NumberFormat-input",value:e.sellingPrice,displayType:T?"text":"input",className:"form-control",allowEmptyFormatting:!0,allowLeadingZeros:!0,thousandSeparator:!0,allowNegative:!1,prefix:"Rp ",onValueChange:function(e){var a=Object.assign([],ue);a[t].sellingPrice=e.floatValue?e.floatValue:0,Ee(a)}})))}))))),r.a.createElement(y.a,null,r.a.createElement("button",{type:"button",onClick:function(){Ne(!1),Ee([])},disabled:T,className:"btn btn-danger"},r.a.createElement(o.a,{id:"LABEL.CANCEL"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:0==ue.length||0!==ue.filter((function(e){return null===e.qty||void 0===e.qty||null===e.sellingPrice||void 0===e.sellingPrice||null===e.unit||void 0===e.unit})).length||T},T?r.a.createElement("i",{className:"fas fa-spinner fa-pulse px-2"}):r.a.createElement("i",{className:"fas fa-save ml-2"}),T?r.a.createElement(o.a,{id:"LABEL.WAITING"}):r.a.createElement(o.a,{id:"LABEL.SAVE"}))))),r.a.createElement(v.a,{open:ne,maxWidth:"md",fullWidth:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(L.a,null,r.a.createElement(o.a,{id:"LABEL.SELECT_PRODUCT"})),r.a.createElement(O.a,null,r.a.createElement(_.a,{dataHeader:R,dataSecond:Y,handleFilter:function(e){F(e)},hecto:8},q.map((function(e,t){return r.a.createElement(A.a,{key:t.toString()},r.a.createElement(j.a,{padding:"checkbox"},r.a.createElement(N.a,{indeterminate:!1,checked:-1!==ue.findIndex((function(t){return t.id===e.id})),onChange:function(t){var a=Object.assign([],ue);if(t.target.checked)a.push(e);else{var n=a.findIndex((function(t){return t.id===e.id}));a.splice(n,1)}Ee(a)}})),r.a.createElement(j.a,null,e.barcode),r.a.createElement(j.a,null,e.nama),r.a.createElement(j.a,null,e.unit),r.a.createElement(j.a,null,Object(p.a)(e.harga||0)))})))),r.a.createElement(y.a,null,r.a.createElement("button",{type:"button",onClick:function(){ce(!1),F(Y)},className:"btn btn-primary"},r.a.createElement(o.a,{id:"LABEL.OK"})))),r.a.createElement(v.a,{open:Z,maxWidth:"md",fullWidth:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(L.a,null,"new"===fe?r.a.createElement(o.a,{id:"LABEL.ADD_PRODUCT"}):r.a.createElement(o.a,{id:"LABEL.EDIT_PRODUCT"})),r.a.createElement("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),x(!0);var a={barcode:null===ie||void 0===ie?void 0:ie.barcode,nama:null===ie||void 0===ie?void 0:ie.nama,unit:null===ie||void 0===ie?void 0:ie.unit,harga:null===ie||void 0===ie?void 0:ie.harga,iscomposite:null===ie||void 0===ie?void 0:ie.iscomposite};(null===ie||void 0===ie?void 0:ie.iscomposite)&&(ue.forEach((function(e){return e.barang_id=e.id})),a.itemcomposite=ue),"new"===fe?Object(b.c)(a).then((function(e){oe({barcode:"",nama:"",unit:"",harga:0,iscomposite:!1}),Ee([]),x(!1),d.a.showSnackbar(t.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success"),ke(Le),ee(!1)})).catch((function(e){var t;x(!1),d.a.showSnackbar(null===(t=e.response)||void 0===t?void 0:t.data.messages)})):Object(b.d)(fe,a).then((function(e){oe({barcode:"",nama:"",unit:"",harga:0,iscomposite:!1}),Ee([]),x(!1),d.a.showSnackbar(t.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success"),ke(Le),ee(!1)})).catch((function(e){var t;d.a.showSnackbar(null===(t=e.response)||void 0===t?void 0:t.data.messages)}))}},r.a.createElement(O.a,null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(o.a,{id:"LABEL.PRODUCT_CODE"}),r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{type:"text",className:"form-control",value:null===ie||void 0===ie?void 0:ie.barcode,onChange:function(e){oe(Object(n.a)(Object(n.a)({},ie),{},{barcode:e.target.value}))},required:!0,disabled:T}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(o.a,{id:"LABEL.PRODUCT_NAME"}),r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{type:"text",className:"form-control",value:null===ie||void 0===ie?void 0:ie.nama,onChange:function(e){oe(Object(n.a)(Object(n.a)({},ie),{},{nama:e.target.value}))},required:!0,disabled:T}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(o.a,{id:"LABEL.UNIT_TYPE"}),r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{type:"text",className:"form-control",value:null===ie||void 0===ie?void 0:ie.unit,onChange:function(e){oe(Object(n.a)(Object(n.a)({},ie),{},{unit:e.target.value.toUpperCase()}))},required:!0,disabled:T}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(o.a,{id:"LABEL.UNIT_PRICE"}),r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement(f.a,{id:T?"NumberFormat-text":"NumberFormat-input",value:null===ie||void 0===ie?void 0:ie.harga,displayType:T?"text":"input",className:"form-control",allowEmptyFormatting:!0,allowLeadingZeros:!0,thousandSeparator:!0,allowNegative:!1,prefix:"Rp ",onValueChange:function(e){oe(Object(n.a)(Object(n.a)({},ie),{},{harga:e.floatValue?e.floatValue:0}))},onClick:function(e){e.target.select()}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-3 col-form-label"},r.a.createElement(o.a,{id:"LABEL.PACKAGE"})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement(D,{checked:null===ie||void 0===ie?void 0:ie.iscomposite,onChange:function(e){oe(Object(n.a)(Object(n.a)({},ie),{},{iscomposite:e.target.checked}))},inputProps:{"aria-label":"secondary checkbox"},disabled:T}))),(null===ie||void 0===ie?void 0:ie.iscomposite)&&r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(o.a,{id:"LABEL.PRODUCT_NAME"})),r.a.createElement("th",null,r.a.createElement(o.a,{id:"LABEL.UNIT_TYPE"})),r.a.createElement("th",null,r.a.createElement(o.a,{id:"LABEL.QTY"})),r.a.createElement("th",{className:"text-right",style:{maxWidth:80}},r.a.createElement("button",{className:"btn btn-warning btn-sm",type:"button",onClick:function(){ce(!0),F(Y)}},r.a.createElement(o.a,{id:"LABEL.SELECT_PRODUCT"}))))),r.a.createElement("tbody",null,ue.map((function(e,t){return r.a.createElement("tr",{key:t.toString()},r.a.createElement("td",null,e.nama),r.a.createElement("td",null,e.unit),r.a.createElement("td",{colSpan:"2"},r.a.createElement("input",{type:"number",className:"form-control",value:e.qty,onChange:function(e){var a=Object.assign([],ue);a[t].qty=e.target.value,Ee(a)},required:!0,disabled:T})))}))))),r.a.createElement(y.a,null,r.a.createElement("button",{type:"button",onClick:function(){ee(!1),oe({barcode:"",nama:"",unit:"",harga:0,iscomposite:!1}),Ee([])},disabled:T,className:"btn btn-danger"},r.a.createElement(o.a,{id:"LABEL.CANCEL"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!Ce||!0===ie.iscomposite&&0==ue.length||T},T?r.a.createElement("i",{className:"fas fa-spinner fa-pulse px-2"}):r.a.createElement("i",{className:"fas fa-save ml-2"}),T?r.a.createElement(o.a,{id:"LABEL.WAITING"}):r.a.createElement(o.a,{id:"LABEL.SAVE"}))))),r.a.createElement(m.b,null,r.a.createElement(m.d,{title:""},r.a.createElement(m.f,null,r.a.createElement("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(){ge("new"),ee(!0)}},r.a.createElement("i",{className:"fas fa-prescription-bottle mx-1"}),r.a.createElement(o.a,{id:"LABEL.ADD_PRODUCT"})),r.a.createElement("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(){Ne(!0)}},r.a.createElement("i",{className:"fas fa-capsules mx-1"}),r.a.createElement(o.a,{id:"LABEL.ADD_QTY"})))),r.a.createElement(m.c,null,r.a.createElement(h.a,{dataHeader:U,handleParams:ke,loading:g,err:H,countData:P.count,hecto:10},P.data.map((function(e,a){return r.a.createElement(A.a,{key:a.toString()},r.a.createElement(j.a,null,null===e||void 0===e?void 0:e.barcode),r.a.createElement(j.a,null,null===e||void 0===e?void 0:e.nama),r.a.createElement(j.a,null,null===e||void 0===e?void 0:e.unit),r.a.createElement(j.a,null,Object(p.a)((null===e||void 0===e?void 0:e.harga)||0)),r.a.createElement(j.a,null,0===e.iscomposite?"Tidak Paket":"Paket"),r.a.createElement(j.a,null,r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){var a;a=e.id,Object(b.j)(a).then((function(e){oe(Object(n.a)(Object(n.a)({},ie),{},{barcode:e.data.data.barcode,nama:e.data.data.nama,unit:e.data.data.unit,harga:e.data.data.harga,iscomposite:0!==e.data.data.iscomposite})),1===e.data.data.iscomposite&&Ee(e.data.data.composite_item),ge(a),ee(!0)})).catch((function(e){d.a.showSnackbar(t.formatMessage({id:"REQ.REQUEST_FAILED"}))}))}},r.a.createElement("i",{className:"far fa-edit mx-1"}),"Ubah Obat")))}))))))})))},1343:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(100),r=a(1286),i=a(279),o=a(14);t.default=Object(i.c)(Object(o.b)(null,null)((function(e){return c.a.createElement(l.d,null,c.a.createElement(l.a,{exact:!0,from:"/pharmacist/medicine-page",to:"/pharmacist/dashboard"}),c.a.createElement(l.b,{path:"/pharmacist/medicine-page/list",component:function(e){return c.a.createElement(r.a,e)},exact:!0}))})))}}]);
//# sourceMappingURL=33.2552edf0.chunk.js.map