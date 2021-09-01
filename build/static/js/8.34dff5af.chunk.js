(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[8],{1256:function(e,a,t){"use strict";var l=t(1),n=t(12),s=t(27),c=t(0),m=(t(7),t(11)),r=t(21),i=t(35),d=c.forwardRef((function(e,a){var t=e.classes,s=e.className,r=e.component,d=void 0===r?"div":r,o=e.disableGutters,u=void 0!==o&&o,b=e.fixed,f=void 0!==b&&b,v=e.maxWidth,E=void 0===v?"lg":v,g=Object(n.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(d,Object(l.a)({className:Object(m.a)(t.root,s,f&&t.fixed,u&&t.disableGutters,!1!==E&&t["maxWidth".concat(Object(i.a)(String(E)))]),ref:a},g))}));a.a=Object(r.a)((function(e){return{root:Object(s.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(a,t){var l=e.breakpoints.values[t];return 0!==l&&(a[e.breakpoints.up(t)]={maxWidth:l}),a}),{}),maxWidthXs:Object(s.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(s.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(s.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(s.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(s.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},1290:function(e,a,t){"use strict";t.r(a);var l=t(42),n=t(15),s=t(0),c=t.n(s),m=t(25),r=t(276),i=t(365),d=(t(48),t(114)),o=t.n(d);var u=t(152),b=t(6),f=t(1256);a.default=Object(r.c)(Object(m.b)(null,null)((function(e){var a=e.intl,t=Object(s.useState)({1:[],2:[],3:[]}),r=Object(n.a)(t,2),d=r[0],v=r[1],E=c.a.useState({1:{},2:{},3:{}}),g=Object(n.a)(E,2),p=g[0],N=g[1],h=Object(m.e)((function(e){return e.clientMqtt.client}),m.c),x=function(){o.a.get("/api/v1/screen").then((function(e){v(e.data.data.queue),N(Object(l.a)(Object(l.a)({},p),{},{1:e.data.data.onprocess[1],2:e.data.data.onprocess[2],3:e.data.data.onprocess[3]}))})).catch((function(e){u.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}))};return Object(s.useEffect)(x,[]),Object(s.useEffect)((function(){h&&h.on("message",(function(e,a){var t=e;a.toString();"dashboard-registry"===t&&x()}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{backgroundImage:"url(".concat(Object(b.d)("media/bg/bg1-01.png"),")"),height:"calc(100vh + 10.526rem)",backgroundPosition:"50%",backgroundSize:"cover"}},c.a.createElement(f.a,{maxWidth:"xl",fixed:!0},c.a.createElement("div",{className:"row gutter-b mt-9 pt-9"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"card card-custom wave wave-animate-slow wave-primary gutter-b"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("div",{className:"symbol symbol-40 symbol-light-success mr-5"},c.a.createElement("span",{className:"symbol-label"},c.a.createElement("img",{src:Object(b.d)("/media/svg/avatars/doctor.svg"),className:"h-75 align-self-end",alt:"Doctor 1"}))),c.a.createElement("div",{className:"d-flex flex-column flex-grow-1 font-weight-bold"},c.a.createElement("a",{href:"#",className:"text-dark text-hover-primary mb-1",style:{fontSize:"2rem"}},p[2].nama||"-"),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("span",{style:{fontSize:"1.1rem"}},"POLI ",p[2].poli||"-"),c.a.createElement("span",{style:{fontSize:"1.1rem"}},"Ricky Hunt"))))))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"card card-custom wave wave-animate-fast wave-warning gutter-b"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("div",{className:"symbol symbol-40 symbol-light-success mr-5"},c.a.createElement("span",{className:"symbol-label"},c.a.createElement("img",{src:Object(b.d)("/media/svg/avatars/doctor-2.svg"),className:"h-75 align-self-end",alt:"Doctor 1"}))),c.a.createElement("div",{className:"d-flex flex-column flex-grow-1 font-weight-bold"},c.a.createElement("a",{href:"#",className:"text-dark text-hover-primary mb-1",style:{fontSize:"2rem"}},p[1].nama||"-"),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("span",{style:{fontSize:"1.1rem"}},"POLI ",p[1].poli||"-"),c.a.createElement("span",{style:{fontSize:"1.1rem"}},"Ricky Hunt"))))))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"card card-custom wave wave-animate-slow wave-danger gutter-b"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("div",{className:"symbol symbol-40 symbol-light-success mr-5"},c.a.createElement("span",{className:"symbol-label"},c.a.createElement("img",{src:Object(b.d)("/media/svg/avatars/medical-team.svg"),className:"h-75 align-self-end",alt:"Doctor 3"}))),c.a.createElement("div",{className:"d-flex flex-column flex-grow-1 font-weight-bold"},c.a.createElement("a",{href:"#",className:"text-dark text-hover-primary mb-1",style:{fontSize:"2rem"}},p[3].nama||"-"),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("span",{style:{fontSize:"1.1rem"}},"POLI ",p[3].poli||"-"),c.a.createElement("span",{style:{fontSize:"1.1rem"}},"Ricky Hunt")))))))),c.a.createElement("div",{className:"row gutter-b mt-9 pt-9"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(i.b,{className:"bg-primary text-white"},c.a.createElement(i.d,null,c.a.createElement("div",{className:"card-title m-auto"},c.a.createElement(i.e,{className:"text-white"},"POLI UMUM dan BIDAN"))),c.a.createElement(i.c,null,d[2].map((function(e,a){return c.a.createElement("div",{className:"d-flex justify-content-between my-3",key:a.toString()},c.a.createElement("div",null,c.a.createElement("span",{className:"font-size-h5"},e.kode_pasien)),c.a.createElement("div",null,c.a.createElement("span",{className:"font-size-h5"},e.nama)))}))))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(i.b,{className:"bg-primary text-white"},c.a.createElement(i.d,null,c.a.createElement("div",{className:"card-title m-auto"},c.a.createElement(i.e,{className:"text-white"},"POLI GIGI"))),c.a.createElement(i.c,null,d[1].map((function(e,a){return c.a.createElement("div",{className:"d-flex justify-content-between my-3",key:a.toString()},c.a.createElement("div",null,c.a.createElement("span",{className:"font-size-h5"},e.kode_pasien)),c.a.createElement("div",null,c.a.createElement("span",{className:"font-size-h5"},e.nama)))}))))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(i.b,{className:"bg-primary text-white"},c.a.createElement(i.d,null,c.a.createElement("div",{className:"card-title m-auto"},c.a.createElement(i.e,{className:"text-white"},"POLI KULIT DAN KELAMIN"))),c.a.createElement(i.c,null,d[3].map((function(e,a){return c.a.createElement("div",{className:"d-flex justify-content-between my-3",key:a.toString()},c.a.createElement("div",null,c.a.createElement("span",{className:"font-size-h5"},e.kode_pasien)),c.a.createElement("div",null,c.a.createElement("span",{className:"font-size-h5"},e.nama)))})))))))))})))}}]);
//# sourceMappingURL=8.34dff5af.chunk.js.map