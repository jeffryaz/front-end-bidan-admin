(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[17],{1250:function(e,a,t){},1252:function(e,a,t){"use strict";var n=t(11),l=t(0),r=t.n(l),c=t(14),s=t(1230),i=t(279),o=t(1278),d=t(1192),m=t(1279),u=t(1280),E=t(1281),p=t(1282),f=t(1283);t(1250);a.a=Object(i.c)(Object(c.b)(null,null)((function(e){var a=e.intl,t=e.dataHeader,l=void 0===t?[]:t,c=e.loading,i=void 0!==c&&c,b=e.err,g=void 0!==b&&b,v=e.children,N=e.hecto,h=void 0===N?1:N,L=e.handleFilter,A=e.dataSecond,O=void 0===A?[]:A,y=r.a.useState(l.filter((function(e){return!0===e.filter}))),_=Object(n.a)(y,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"LABEL.SEARCH",className:"col-sm-3 col-form-label"},r.a.createElement(s.a,{id:"LABEL.SEARCH"}),":"),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{type:"text",className:"form-control",id:"LABEL.SEARCH",placeholder:a.formatMessage({id:"LABEL.SEARCH"}),onChange:function(e){for(var a=[],t=0;t<O.length;t++)for(var n=0;n<_.length;n++){if(O[t][_[n].name].toString().toLowerCase().includes(e.target.value.toLowerCase())){a.push(O[t]);break}}"function"===typeof L&&L(a)}}))))),r.a.createElement(o.a,{component:d.a},r.a.createElement(m.a,{className:"hecto-"+h},r.a.createElement(u.a,null,r.a.createElement(E.a,null,l.map((function(e,a){return r.a.createElement(p.a,{className:"bg-primary text-uppercase ".concat((null===e||void 0===e?void 0:e.td)?null===e||void 0===e?void 0:e.td:""),key:a.toString()},r.a.createElement("span",null,r.a.createElement(s.a,{id:e.title})))})))),r.a.createElement(f.a,null,v)),r.a.createElement("div",{className:"table-loading-data"},r.a.createElement("div",{className:"text-center font-weight-bold py-5"},r.a.createElement("div",{className:"table-loading-data-potition"},i&&r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-spinner fa-pulse text-dark mr-1"}),r.a.createElement(s.a,{id:"LABEL.TABLE.WAITING_DATA"})),g&&r.a.createElement("span",{className:"text-danger"},r.a.createElement("i",{className:"far fa-frown text-danger mr-1"}),r.a.createElement(s.a,{id:"LABEL.ERROR_REQUEST"}))))))))})))},1257:function(e,a,t){"use strict";var n=t(0),l=n.createContext();a.a=l},1261:function(e,a,t){"use strict";var n=t(0),l=n.createContext();a.a=l},1278:function(e,a,t){"use strict";var n=t(1),l=t(12),r=t(0),c=(t(7),t(10)),s=t(22),i=r.forwardRef((function(e,a){var t=e.classes,s=e.className,i=e.component,o=void 0===i?"div":i,d=Object(l.a)(e,["classes","className","component"]);return r.createElement(o,Object(n.a)({ref:a,className:Object(c.a)(t.root,s)},d))}));a.a=Object(s.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(i)},1279:function(e,a,t){"use strict";var n=t(12),l=t(1),r=t(0),c=(t(7),t(10)),s=t(22),i=t(1261),o=r.forwardRef((function(e,a){var t=e.classes,s=e.className,o=e.component,d=void 0===o?"table":o,m=e.padding,u=void 0===m?"default":m,E=e.size,p=void 0===E?"medium":E,f=e.stickyHeader,b=void 0!==f&&f,g=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=r.useMemo((function(){return{padding:u,size:p,stickyHeader:b}}),[u,p,b]);return r.createElement(i.a.Provider,{value:v},r.createElement(d,Object(l.a)({role:"table"===d?null:"table",ref:a,className:Object(c.a)(t.root,s,b&&t.stickyHeader)},g)))}));a.a=Object(s.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(l.a)(Object(l.a)({},e.typography.body2),{},{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(o)},1280:function(e,a,t){"use strict";var n=t(1),l=t(12),r=t(0),c=(t(7),t(10)),s=t(22),i=t(1257),o={variant:"head"},d=r.forwardRef((function(e,a){var t=e.classes,s=e.className,d=e.component,m=void 0===d?"thead":d,u=Object(l.a)(e,["classes","className","component"]);return r.createElement(i.a.Provider,{value:o},r.createElement(m,Object(n.a)({className:Object(c.a)(t.root,s),ref:a,role:"thead"===m?null:"rowgroup"},u)))}));a.a=Object(s.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1281:function(e,a,t){"use strict";var n=t(1),l=t(12),r=t(0),c=(t(7),t(10)),s=t(22),i=t(1257),o=t(81),d=r.forwardRef((function(e,a){var t=e.classes,s=e.className,o=e.component,d=void 0===o?"tr":o,m=e.hover,u=void 0!==m&&m,E=e.selected,p=void 0!==E&&E,f=Object(l.a)(e,["classes","className","component","hover","selected"]),b=r.useContext(i.a);return r.createElement(d,Object(n.a)({ref:a,className:Object(c.a)(t.root,s,b&&{head:t.head,footer:t.footer}[b.variant],u&&t.hover,p&&t.selected),role:"tr"===d?null:"row"},f))}));a.a=Object(s.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(o.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1282:function(e,a,t){"use strict";var n=t(12),l=t(1),r=t(0),c=(t(7),t(10)),s=t(22),i=t(39),o=t(81),d=t(1261),m=t(1257),u=r.forwardRef((function(e,a){var t,s,o=e.align,u=void 0===o?"inherit":o,E=e.classes,p=e.className,f=e.component,b=e.padding,g=e.scope,v=e.size,N=e.sortDirection,h=e.variant,L=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),A=r.useContext(d.a),O=r.useContext(m.a),y=O&&"head"===O.variant;f?(s=f,t=y?"columnheader":"cell"):s=y?"th":"td";var _=g;!_&&y&&(_="col");var j=b||(A&&A.padding?A.padding:"default"),S=v||(A&&A.size?A.size:"medium"),I=h||O&&O.variant,x=null;return N&&(x="asc"===N?"ascending":"descending"),r.createElement(s,Object(l.a)({ref:a,className:Object(c.a)(E.root,E[I],p,"inherit"!==u&&E["align".concat(Object(i.a)(u))],"default"!==j&&E["padding".concat(Object(i.a)(j))],"medium"!==S&&E["size".concat(Object(i.a)(S))],"head"===I&&A&&A.stickyHeader&&E.stickyHeader),"aria-sort":x,role:t,scope:_},L))}));a.a=Object(s.a)((function(e){return{root:Object(l.a)(Object(l.a)({},e.typography.body2),{},{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(o.e)(Object(o.c)(e.palette.divider,1),.88):Object(o.a)(Object(o.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},1283:function(e,a,t){"use strict";var n=t(1),l=t(12),r=t(0),c=(t(7),t(10)),s=t(22),i=t(1257),o={variant:"body"},d=r.forwardRef((function(e,a){var t=e.classes,s=e.className,d=e.component,m=void 0===d?"tbody":d,u=Object(l.a)(e,["classes","className","component"]);return r.createElement(i.a.Provider,{value:o},r.createElement(m,Object(n.a)({className:Object(c.a)(t.root,s),ref:a,role:"tbody"===m?null:"rowgroup"},u)))}));a.a=Object(s.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1351:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(100),c=t(93),s=t.n(c),i=t(1251),o=t(11),d=t(14),m=t(1230),u=t(279),E=t(1252),p=t(371),f=t(1246),b=t(1223),g=t(1224),v=t(1226),N=t(1281),h=t(1282),L=t(30),A=t(32),O=t.n(A);function y(e,a){return O.a.put("/api/v1/labs/".concat(e),a)}function _(e){return O.a.post("/api/v1/labs",e)}var j=t(49),S=t(15),I=t(104),x=t(60),k=[{title:"LABEL.PATIENT_CODE",name:"kode_pasien",filter:!0},{title:"LABEL.PATIENT_NAME",name:"nama",filter:!0},{title:"LABEL.DATE_OF_VISIT",name:"tgl_book",filter:!0},{title:"LABEL.POLI",name:"poli",filter:!0},{title:"LABEL.STATUS",name:"statusName",filter:!0},{title:"LABEL.TABLE_HEADER.ACTION",name:"action",filter:!1}];var T=Object(u.c)(Object(d.b)(null,null)((function(e){var a=e.intl,t=Object(n.useState)(!0),r=Object(o.a)(t,2),c=r[0],d=r[1],u=Object(n.useState)([]),A=Object(o.a)(u,2),T=A[0],C=A[1],B=Object(n.useState)([]),w=Object(o.a)(B,2),R=w[0],D=w[1],M=Object(n.useState)({}),P=Object(o.a)(M,2),F=P[0],H=P[1],U=Object(n.useState)({}),q=Object(o.a)(U,2),Q=q[0],V=q[1],G=Object(n.useState)(!1),z=Object(o.a)(G,2),W=z[0],Y=z[1],$=Object(n.useState)(!1),J=Object(o.a)($,2),K=J[0],X=J[1],Z=Object(n.useState)(!1),ee=Object(o.a)(Z,2),ae=ee[0],te=ee[1],ne=Object(n.useState)([]),le=Object(o.a)(ne,2),re=le[0],ce=le[1],se=Object(n.useState)({}),ie=Object(o.a)(se,2),oe=ie[0],de=ie[1],me=Object(L.i)();Object(n.useLayoutEffect)((function(){me.setBreadcrumbs([{pathname:"/registry/dashboard",title:a.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/registry/screening/list",title:a.formatMessage({id:"LABEL.SCREENING_LIST"})}]),me.setTitle(a.formatMessage({id:"LABEL.SCREENING_LIST"}))}),[]);var ue=x.b().shape({hb:x.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),hbsag:x.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),hiv:x.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),sifilis:x.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),asam_urat:x.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),kolesterol:x.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),gol_dar:x.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),pp_test:x.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),protein_urine:x.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),ph:x.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),glukosa:x.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"}))}),Ee=Object(I.b)({initialValues:Q,validationSchema:ue,onSubmit:function(){var e=Object(i.a)(s.a.mark((function e(t,n){var l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setStatus,n.setSubmitting,(l=t).medical_id=F.medical_id,Y(!0),F.lab_id?y(F.medical_id,l).then((function(e){pe(),Y(!1),V({}),Ee.resetForm(),j.a.showSnackbar(a.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success"),X(!1)})).catch((function(e){Y(!1),j.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))})):_(l).then((function(e){pe(),Y(!1),V({}),Ee.resetForm(),j.a.showSnackbar(a.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success"),X(!1)})).catch((function(e){Y(!1),j.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}));case 5:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()}),pe=function(){d(!0),O.a.get("/api/v1/reservasitoday").then((function(e){d(!1);var t=e.data.data;t.forEach((function(e){e.statusName="1"===e.status?a.formatMessage({id:"LABEL.BOOKING"}):"2"===e.status?a.formatMessage({id:"LABEL.CANCELED"}):"3"===e.status?a.formatMessage({id:"LABEL.CHECKIN_SCREENING"}):"4"===e.status?a.formatMessage({id:"LABEL.POLI_PROCESS"}):"5"===e.status?a.formatMessage({id:"LABEL.PHARMACIST"}):"6"===e.status?a.formatMessage({id:"LABEL.PAYMENT"}):a.formatMessage({id:"LABEL.FINISH"})})),C(t),D(t)})).catch((function(e){d(!1),j.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}))};Object(n.useEffect)(pe,[]);var fe=function(){var e;F.lab_id&&(e=F.medical_id,O.a.get("/api/v1/labs/".concat(e))).then((function(e){var a={hb:e.data.data.hb,hbsag:e.data.data.hbsag,hiv:e.data.data.hiv,sifilis:e.data.data.sifilis,asam_urat:e.data.data.asam_urat,kolesterol:e.data.data.kolesterol,gol_dar:e.data.data.gol_dar,pp_test:e.data.data.pp_test,protein_urine:e.data.data.protein_urine,ph:e.data.data.ph,glukosa:e.data.data.glukosa};Ee.setValues(a)})).catch((function(e){var a;j.a.showSnackbar(null===(a=e.response)||void 0===a?void 0:a.data.messages)}))};function be(e){var t;(t=e,O.a.get("/api/v1/formkind/".concat(t))).then((function(e){ce(e.data.data),te(!0)})).catch((function(e){j.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}))}return Object(n.useEffect)(fe,[F]),l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{open:ae,maxWidth:"xs",fullWidth:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(b.a,null,l.a.createElement(m.a,{id:"LABEL.TYPE_SCREENING"})),l.a.createElement(g.a,null,re.map((function(e,a){return l.a.createElement(S.b,{key:a.toString(),className:"btn btn-primary  w-100 my-2",to:"/registry/screening/patient/".concat(oe.pasien_id,"/").concat(e.id,"/").concat(oe.id)},e.kind_nm)}))),l.a.createElement(v.a,null,l.a.createElement("button",{type:"button",onClick:function(){te(!1)},className:"btn btn-danger"},l.a.createElement(m.a,{id:"LABEL.CANCEL"})))),l.a.createElement(f.a,{open:K,maxWidth:"lg",fullWidth:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(b.a,null,l.a.createElement(m.a,{id:"LABEL.LAB_RESULT"})),l.a.createElement("form",{autoComplete:"off",onSubmit:Ee.handleSubmit},l.a.createElement(g.a,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},l.a.createElement(m.a,{id:"LABEL.PATIENT_CODE"})),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement("input",{type:"text",className:"form-control",value:null===F||void 0===F?void 0:F.kode_pasien,onChange:function(){},disabled:!0}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},l.a.createElement(m.a,{id:"LABEL.PATIENT_NAME"})),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement("input",{type:"text",className:"form-control",value:null===F||void 0===F?void 0:F.nama,onChange:function(){},disabled:!0})))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},l.a.createElement(m.a,{id:"LABEL.POLI"})),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement("input",{type:"text",className:"form-control",value:null===F||void 0===F?void 0:F.poli,onChange:function(){},disabled:!0}))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Hemoglobin (HB)"),l.a.createElement("input",Object.assign({type:"text",className:"form-control",required:!0,disabled:W},Ee.getFieldProps("hb"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Hepatitis B Surface Antigen (HBsAg)"),l.a.createElement("input",Object.assign({type:"text",className:"form-control",required:!0,disabled:W},Ee.getFieldProps("hbsag"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Human Immunodeficiency Virus (HIV)"),l.a.createElement("input",Object.assign({type:"text",className:"form-control",required:!0,disabled:W},Ee.getFieldProps("hiv"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Raja Singa (Sifilis)"),l.a.createElement("input",Object.assign({type:"text",className:"form-control",required:!0,disabled:W},Ee.getFieldProps("sifilis"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Asam Urat"),l.a.createElement("input",Object.assign({type:"text",className:"form-control",required:!0,disabled:W},Ee.getFieldProps("asam_urat"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Kolestrol"),l.a.createElement("input",Object.assign({type:"text",className:"form-control",required:!0,disabled:W},Ee.getFieldProps("kolesterol"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Gelongan Darah"),l.a.createElement("input",Object.assign({type:"text",className:"form-control",required:!0,disabled:W},Ee.getFieldProps("gol_dar"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Plano Test (PP Test)"),l.a.createElement("input",Object.assign({type:"text",className:"form-control",required:!0,disabled:W},Ee.getFieldProps("pp_test"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Protein Urine"),l.a.createElement("input",Object.assign({type:"text",className:"form-control",required:!0,disabled:W},Ee.getFieldProps("protein_urine"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"PH"),l.a.createElement("input",Object.assign({type:"text",className:"form-control",required:!0,disabled:W},Ee.getFieldProps("ph"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Gula Darah (Glucose)"),l.a.createElement("input",Object.assign({type:"text",className:"form-control",required:!0,disabled:W},Ee.getFieldProps("glukosa"))))))),l.a.createElement(v.a,null,l.a.createElement("button",{type:"button",onClick:function(){X(!1),Ee.resetForm()},className:"btn btn-danger",disabled:W},l.a.createElement(m.a,{id:"LABEL.CANCEL"})),l.a.createElement("button",{className:"btn btn-primary",type:"submit"},W?l.a.createElement("i",{className:"fas fa-spinner fa-pulse px-2"}):l.a.createElement("i",{className:"fas fa-save ml-2"}),W?l.a.createElement(m.a,{id:"LABEL.WAITING"}):l.a.createElement(m.a,{id:"LABEL.SAVE"}))))),l.a.createElement(p.b,null,l.a.createElement(p.c,null,l.a.createElement(E.a,{dataHeader:k,dataSecond:R,handleFilter:function(e){C(e)},loading:c,hecto:10},T.map((function(e,a){return l.a.createElement(N.a,{key:a.toString()},l.a.createElement(h.a,null,e.kode_pasien),l.a.createElement(h.a,null,e.nama),l.a.createElement(h.a,null,e.tgl_book),l.a.createElement(h.a,null,e.poli),l.a.createElement(h.a,{className:"text-uppercase"},e.statusName),l.a.createElement(h.a,null,"1"===e.status&&l.a.createElement("button",{className:"btn btn-warning",onClick:Object(i.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:be(e.poli_id),de(e);case 2:case"end":return a.stop()}}),a)})))},l.a.createElement(m.a,{id:"LABEL.SCREENING"})),("4"===e.status||"5"===e.status||"6"===e.status)&&l.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){H(e),X(!0),e.lab_id&&fe()}},e.lab_id?l.a.createElement("i",{className:"fas fa-edit pr-2"}):l.a.createElement("i",{className:"fas fa-pen pr-2"}),l.a.createElement(m.a,{id:"LABEL.LAB_RESULT"}))))}))))))}))),C=t(35),B=t(313),w=t(1368),R=t(1337),D=t(1338),M=t(1339),P=t(1234),F=t(1266),H=t.n(F),U=Object(P.a)((function(e){return{heading:{fontSize:e.typography.pxToRem(15)},heading_new:{fontSize:e.typography.pxToRem(15),flexBasis:"96.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15)},details:{alignItems:"center",display:"block"},column:{flexBasis:"33.33%"}}}));function q(e){var a,t=e.item,n=e.classes,r=e.index,c=e.onChangesValue;return a=l.a.createElement("div",{className:"w-100"},l.a.createElement("div",{className:"row"},t.subtitle.map((function(e,a){return l.a.createElement("div",{className:"col-12",key:a.toString()},l.a.createElement(q,{item:e,index:r&&"string"===typeof r?r+","+a.toString():null,classes:n,onChangesValue:c}))})),t.input.map((function(e,a){var n,s;return l.a.createElement("div",{className:"col-12",key:a.toString()},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,null===(n=e.medkind)||void 0===n?void 0:n.nama),l.a.createElement("div",{className:"input-group mb-3"},1===e.medkind.datatype||2===e.medkind.datatype||3===e.medkind.datatype||4===e.medkind.datatype?l.a.createElement("input",{id:"input-".concat(t.id,"-").concat(e.id),type:1===e.medkind.datatype?"text":2===e.medkind.datatype||3===e.medkind.datatype?"number":"date",className:"form-control ".concat(e.val_desc&&0!==e.val_desc.trim().length?"border-valid-input":""),disabled:2===e.dokter_only,value:e.val_desc||"",onChange:function(e){c(r,a,e)}}):l.a.createElement("textarea",{rows:"3",id:"input-".concat(t.id,"-").concat(e.id),className:"form-control ".concat(e.val_desc&&0!==e.val_desc.trim().length?"border-valid-input":""),disabled:2===e.dokter_only,value:e.val_desc||"",onChange:function(e){c(r,a,e)}}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},null===(s=e.medkind)||void 0===s?void 0:s.unit)))))})))),l.a.createElement(w.a,{defaultExpanded:!1,className:"my-5 rounded-top w-100"},l.a.createElement(R.a,{expandIcon:l.a.createElement(H.a,null)},l.a.createElement("span",{className:n.heading_new,id:r},t.title)),l.a.createElement(D.a,{className:n.details},a),l.a.createElement(M.a,null))}var Q=Object(u.c)(Object(d.b)(null,null)((function(e){var a=e.intl,t=Object(L.i)(),r=Object(n.useState)({}),c=Object(o.a)(r,2),u=c[0],E=c[1],f=Object(n.useState)(!1),b=Object(o.a)(f,2),g=b[0],v=b[1],N=Object(n.useState)(!1),h=Object(o.a)(N,2),A=h[0],y=(h[1],e.match.params.patient_id),_=e.match.params.poli,S=e.match.params.reservasi_id,I=Object(d.e)((function(e){return e.clientMqtt.client}),d.c),x=U(),k=l.a.useState([]),T=Object(o.a)(k,2),w=T[0],R=T[1],D=[];Object(n.useLayoutEffect)((function(){t.setBreadcrumbs([{pathname:"/registry/dashboard",title:a.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/registry/screening/list",title:a.formatMessage({id:"LABEL.SCREENING_LIST"})},{pathname:"/registry/screening/patient/".concat(y,"/").concat(_,"/").concat(S),title:a.formatMessage({id:"LABEL.PATIENT_SCREENING"})}]),t.setTitle(a.formatMessage({id:"LABEL.PATIENT_SCREENING"}))}),[]);var M=function(){var e=Object(i.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(){var e=Object(i.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.input.length>0?a.input.forEach((function(e,n,l){var r=e.val_desc?e.val_desc:"",c={medkind_id:e.medkind_id,medform_id:e.id,formkind_id:a.formkind_id,val_desc:r};0!=r.trim().length&&D.push(c),n===l.length-1&&t()})):t();case 1:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}());case 2:return e.next=4,new Promise(function(){var e=Object(i.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.subtitle.length>0?a.subtitle.forEach(function(){var e=Object(i.a)(s.a.mark((function e(a,n,l){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(a);case 2:n===l.length-1&&t();case 3:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}()):t();case 1:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),P=function(){if(I){var e=C.e.topic,a=C.e.qos,t=C.e.payload,n=C.a.topicCallDoctor,l=C.a.qosCallDoctor,r=C.a.payloadCallDoctor;I.publish(e,t,{qos:a},(function(e){e&&console.log("Publish error: ",e)})),I.publish(n,r,{qosCallDoctor:l},(function(e){e&&console.log("Publish error: ",e)}))}};Object(n.useEffect)((function(){var e;(e=_,O.a.get("/api/v1/formformat/get/".concat(e))).then((function(e){R(e.data.data)})).catch((function(e){var a;j.a.showSnackbar(null===(a=e.response)||void 0===a?void 0:a.data.messages)}))}),[]),Object(n.useEffect)((function(){var e;(e=S,O.a.get("/api/v1/reservation/".concat(e))).then((function(e){E(e.data.data)})).catch((function(e){var a;j.a.showSnackbar(null===(a=e.response)||void 0===a?void 0:a.data.messages)}))}),[]);var F=function(e,a,t){var n=e.split(","),l=Object(B.cloneDeep)(w);1===n.length?(l[n[0]].input[a].val_desc=t.target.value,R(l)):2===n.length?(l[n[0]].subtitle[n[1]].input[a].val_desc=t.target.value,R(l)):3===n.length?(l[n[0]].subtitle[n[1]].subtitle[n[2]].input[a].val_desc=t.target.value,R(l)):4===n.length?(l[n[0]].subtitle[n[1]].subtitle[n[2]].subtitle[n[3]].input[a].val_desc=t.target.value,R(l)):5===n.length&&(l[n[0]].subtitle[n[1]].subtitle[n[2]].subtitle[n[3]].subtitle[n[4]].input[a].val_desc=t.target.value,R(l))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.b,null,l.a.createElement(p.d,null,l.a.createElement("div",{className:"card-title"},l.a.createElement(p.e,null,l.a.createElement(m.a,{id:"LABEL.SCREENING"}))),l.a.createElement(p.f,null,g&&l.a.createElement("span",{className:"text-danger"},l.a.createElement("i",{className:"fas fa-spinner fa-pulse px-2"}),l.a.createElement(m.a,{id:"LABEL.WAITING"})),l.a.createElement("button",{type:"button",className:"btn btn-danger mx-1",onClick:function(){e.history.goBack()},disabled:g},l.a.createElement(m.a,{id:"LABEL.CANCEL"})),l.a.createElement("button",{type:"button",className:"btn btn-primary mx-1 ".concat(A?"d-none":""),disabled:g,onClick:function(t){t.preventDefault(),v(!0),Object(B.cloneDeep)(w).forEach(function(){var e=Object(i.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(a);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),setTimeout((function(){(function(e){return O.a.post("/api/v1/submitscreen",e)})({reservasi_id:S,screenitems:D,formkind_id:_}).then((function(t){v(!1),j.a.showSnackbar(a.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success",3e3),P(),e.history.goBack()})).catch((function(e){v(!1),j.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}))}),1500)}},l.a.createElement(m.a,{id:"LABEL.SAVE"}),l.a.createElement("i",{className:"fas fa-save ml-2"})))),l.a.createElement(p.c,null,l.a.createElement("form",{autoComplete:"off"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-4"},l.a.createElement(m.a,{id:"LABEL.PATIENT_CODE"})),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{type:"text",className:"form-control",value:u.kode_pasien,onChange:function(){},disabled:!0}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-4"},l.a.createElement(m.a,{id:"LABEL.PATIENT_NAME"})),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{type:"text",className:"form-control",value:u.nama,onChange:function(){},disabled:!0})))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-4"},l.a.createElement(m.a,{id:"LABEL.POLI"})),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{type:"text",className:"form-control",value:u.poli,onChange:function(){},disabled:!0}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-4"},l.a.createElement(m.a,{id:"LABEL.DATE_OF_VISIT"})),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{type:"text",className:"form-control",value:u.tgl_book?window.moment(new Date(u.tgl_book)).format("DD MMM YYYY"):"",onChange:function(){},disabled:!0}))))),l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h6",null,l.a.createElement(m.a,{id:"LABEL.PATIENT_SCREENING"})))),w.map((function(e,a){return l.a.createElement(q,{key:a.toString(),index:a.toString(),item:e,classes:x,onChangesValue:F})}))))))})));a.default=Object(u.c)(Object(d.b)(null,null)((function(e){return l.a.createElement(r.d,null,l.a.createElement(r.a,{exact:!0,from:"/registry/screening",to:"/registry/screening/list"}),l.a.createElement(r.b,{path:"/registry/screening/list",component:function(e){return l.a.createElement(T,e)},exact:!0}),l.a.createElement(r.b,{path:"/registry/screening/patient/:patient_id/:poli/:reservasi_id",component:function(e){return l.a.createElement(Q,e)},exact:!0}))})))}}]);
//# sourceMappingURL=17.3ddd855d.chunk.js.map