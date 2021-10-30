(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[29],{1332:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(99),c=t(93),l=t.n(c),i=t(1250),o=t(12),m=t(15),u=t(1227),d=t(279),f=t(370),E=t(1243),b=t(1220),p=t(1221),g=t(1223),A=t(30),L=t(57),N=t.n(L);function v(e){return N.a.post("/api/v1/testimoni/staff",e)}var h=t(48),O=t(64),S=t(104),j=t(1254),I={};var w=Object(d.c)(Object(m.b)(null,null)((function(e){var a=e.intl,t=Object(r.useState)({}),s=Object(o.a)(t,2),c=s[0],m=s[1],d=Object(r.useState)([]),L=Object(o.a)(d,2),w=L[0],F=L[1],T=Object(r.useState)(!1),x=Object(o.a)(T,2),C=x[0],D=x[1],y=Object(r.useState)(!1),k=Object(o.a)(y,2),B=k[0],M=k[1],_=Object(r.useState)(!1),R=Object(o.a)(_,2),V=(R[0],R[1],Object(A.i)());Object(r.useLayoutEffect)((function(){V.setBreadcrumbs([{pathname:"/registry/dashboard",title:a.formatMessage({id:"MENU.DASHBOARD"})},{pathname:"/registry/testimonial",title:a.formatMessage({id:"LABEL.TESTIMONIAL"})}]),V.setTitle(a.formatMessage({id:"LABEL.TESTIMONIAL"}))}),[]),Object(r.useEffect)((function(){N.a.get("/api/v1/pasien?page=1&rowsPerPage=100000").then((function(e){e.data.data.rows=e.data.data.rows.filter((function(e){return 1===e.active_user}));var a=e.data.data.rows;a.forEach((function(e){e.value=e.id,e.label=e.kode_pasien+"-"+e.nama})),F(a)})).catch((function(e){h.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}))}),[]);var U=O.b().shape({star:O.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"})),testimoni:O.d().required(a.formatMessage({id:"LABEL.VALIDATION_REQUIRED_FIELD"}))}),z=Object(S.b)({initialValues:I,validationSchema:U,onSubmit:function(){var e=Object(i.a)(l.a.mark((function e(t,r){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.setStatus,r.setSubmitting,M(!0),(n=t).pasien_id=c.value,v(n).then((function(e){m({}),D(!1),M(!1),z.resetForm(),h.a.showSnackbar(a.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success",3e3)})).catch((function(e){var a;M(!1),h.a.showSnackbar(null===(a=e.response)||void 0===a?void 0:a.data.messages)}));case 5:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()}),P=function(e){z.setFieldValue("star",e);for(var a=1;a<=5;a++)window.$("#star".concat(a)).removeClass("fas far"),a<=e?window.$("#star".concat(a)).addClass("fas"):window.$("#star".concat(a)).addClass("far")};return n.a.createElement(n.a.Fragment,null,n.a.createElement(E.a,{open:C,maxWidth:"md",fullWidth:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},n.a.createElement("form",{autoComplete:"off",onSubmit:z.handleSubmit},n.a.createElement(b.a,null,n.a.createElement(u.a,{id:"LABEL.TESTIMONIAL"})),n.a.createElement(p.a,null,n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-sm-3 col-form-label"},n.a.createElement(u.a,{id:"LABEL.SATISFACTION_LAVEL"})),n.a.createElement("div",{className:"col-sm-9"},n.a.createElement("div",{className:"mb-3"},n.a.createElement("i",{className:"far fa-star cursor-pointer mx-2",style:{color:"#FFD700",fontSize:"large",verticalAlign:"bottom"},id:"star1",onClick:function(){P(1)}}),n.a.createElement("i",{className:"far fa-star cursor-pointer mx-2",style:{color:"#FFD700",fontSize:"large",verticalAlign:"bottom"},id:"star2",onClick:function(){P(2)}}),n.a.createElement("i",{className:"far fa-star cursor-pointer mx-2",style:{color:"#FFD700",fontSize:"large",verticalAlign:"bottom"},id:"star3",onClick:function(){P(3)}}),n.a.createElement("i",{className:"far fa-star cursor-pointer mx-2",style:{color:"#FFD700",fontSize:"large",verticalAlign:"bottom"},id:"star4",onClick:function(){P(4)}}),n.a.createElement("i",{className:"far fa-star cursor-pointer mx-2",style:{color:"#FFD700",fontSize:"large",verticalAlign:"bottom"},id:"star5",onClick:function(){P(5)}})),z.touched.star&&z.errors.star&&n.a.createElement("span",{className:"text-left text-danger"},z.errors.star))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-sm-3 col-form-label"},n.a.createElement(u.a,{id:"LABEL.COMMENT"})),n.a.createElement("div",{className:"col-sm-9"},n.a.createElement("textarea",Object.assign({rows:"3",className:"form-control"},z.getFieldProps("testimoni"))),z.touched.testimoni&&z.errors.testimoni&&n.a.createElement("span",{className:"text-left text-danger"},z.errors.testimoni)))),n.a.createElement(g.a,null,n.a.createElement("button",{type:"button",onClick:function(){D(!1),m({}),z.resetForm()},className:"btn btn-danger",disabled:B},n.a.createElement(u.a,{id:"LABEL.CANCEL"})),n.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!z.isValid||0===Object.keys(z.touched).length&&z.touched.constructor===Object||B},B?n.a.createElement("i",{className:"fas fa-spinner fa-pulse px-2"}):n.a.createElement("i",{className:"fas fa-save ml-2"}),B?n.a.createElement(u.a,{id:"LABEL.WAITING"}):n.a.createElement(u.a,{id:"LABEL.SAVE"}))))),n.a.createElement(f.b,null,n.a.createElement(f.c,null,n.a.createElement("div",null,n.a.createElement("h1",{className:"text-uppercase text-center mb-5 pb-5"},n.a.createElement(u.a,{id:"LABEL.TESTIMONIAL"}))),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},n.a.createElement("i",{className:"fas fa-qrcode"}))),n.a.createElement(j.a,{value:c,options:w,isDisabled:!1,className:"form-control border-0 p-0 h-100 rounded-0",classNamePrefix:"react-select",onChange:function(e){m(e),D(!0),z.setFieldTouched("star",!0)}})))))})));a.default=Object(d.c)(Object(m.b)(null,null)((function(e){return n.a.createElement(s.d,null,n.a.createElement(s.b,{path:"/registry/testimonial",component:function(e){return n.a.createElement(w,e)},exact:!0}))})))}}]);
//# sourceMappingURL=29.17e7e09b.chunk.js.map