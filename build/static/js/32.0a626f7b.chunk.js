(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[32],{1248:function(e,a,t){"use strict";function n(e,a,t,n,i,c,r){try{var s=e[c](r),l=s.value}catch(o){return void t(o)}s.done?a(l):Promise.resolve(l).then(n,i)}function i(e){return function(){var a=this,t=arguments;return new Promise((function(i,c){var r=e.apply(a,t);function s(e){n(r,i,c,s,l,"next",e)}function l(e){n(r,i,c,s,l,"throw",e)}s(void 0)}))}}t.d(a,"a",(function(){return i}))},1305:function(e,a,t){"use strict";var n=t(1),i=t(12),c=t(28),r=t(0),s=(t(7),t(10)),l=t(22),o=t(39),m=r.forwardRef((function(e,a){var t=e.classes,c=e.className,l=e.component,m=void 0===l?"div":l,u=e.disableGutters,d=void 0!==u&&u,p=e.fixed,b=void 0!==p&&p,f=e.maxWidth,g=void 0===f?"lg":f,h=Object(i.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return r.createElement(m,Object(n.a)({className:Object(s.a)(t.root,c,b&&t.fixed,d&&t.disableGutters,!1!==g&&t["maxWidth".concat(Object(o.a)(String(g)))]),ref:a},h))}));a.a=Object(l.a)((function(e){return{root:Object(c.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(a,t){var n=e.breakpoints.values[t];return 0!==n&&(a[e.breakpoints.up(t)]={maxWidth:n}),a}),{}),maxWidthXs:Object(c.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(c.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(c.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(c.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(c.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(m)},1358:function(e,a,t){"use strict";t.r(a);var n=t(93),i=t.n(n),c=t(1248),r=t(11),s=t(0),l=t.n(s),o=t(14),m=t(1227),u=t(279),d=t(370),p=(t(30),t(32)),b=t.n(p);var f=t(49),g=t(13),h=t(1305);a.default=Object(u.c)(Object(o.b)(null,null)((function(e){var a=e.intl,t=l.a.useState([]),n=Object(r.a)(t,2),u=n[0],p=n[1],v=Object(o.e)((function(e){return e.clientMqtt.client}),o.c),E=function(){b.a.get("/api/v1/screen2").then((function(e){p(e.data.data)})).catch((function(e){f.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}))};return Object(s.useEffect)(E,[]),Object(s.useEffect)((function(){v&&v.on("message",function(){var e=Object(c.a)(i.a.mark((function e(a,t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"dashboard-registry"===(n={topic:a,message:t.toString()}).topic&&E(),"call-patient"===n.topic&&(c=JSON.parse(n.message),window.responsiveVoice.speak("Nomor pasien, ".concat(c.kode_pasien,". Atas nama pasient, ").concat(c.nama.toLowerCase(),". Silahkan ke Ruangan POLI ").concat(c.poli,".")));case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}())}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{backgroundImage:"url(".concat(Object(g.d)("media/bg/bg1-01.png"),")"),height:"calc(100vh + 10.526rem)",backgroundPosition:"50%",backgroundSize:"cover"}},l.a.createElement(h.a,{maxWidth:"xl",fixed:!0},l.a.createElement("div",{className:"row gutter-b mt-9 pt-9"}),l.a.createElement("div",{className:"row gutter-b mt-9 pt-9"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(d.b,{className:"bg-primary text-white"},l.a.createElement(d.d,null,l.a.createElement("div",{className:"card-title m-auto"},l.a.createElement(d.e,{className:"text-white"},l.a.createElement(m.a,{id:"LABEL.PHARMACISTS"})))),l.a.createElement(d.c,null,u&&u.apotik_queue&&u.apotik_queue.map((function(e,a){return l.a.createElement("div",{className:"d-flex justify-content-between my-3",key:a.toString()},l.a.createElement("div",null,l.a.createElement("span",{className:"font-size-h2"},e.kode_pasien)),l.a.createElement("div",null,l.a.createElement("span",{className:"font-size-h2"},e.nama)))}))))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(d.b,{className:"bg-primary text-white"},l.a.createElement(d.d,null,l.a.createElement("div",{className:"card-title m-auto"},l.a.createElement(d.e,{className:"text-white"},l.a.createElement(m.a,{id:"LABEL.CASHIER"})))),l.a.createElement(d.c,null,u&&u.payment_queue&&u.payment_queue.map((function(e,a){return l.a.createElement("div",{className:"d-flex justify-content-between my-3",key:a.toString()},l.a.createElement("div",null,l.a.createElement("span",{className:"font-size-h2"},e.kode_pasien)),l.a.createElement("div",null,l.a.createElement("span",{className:"font-size-h2"},e.nama)))})))))))))})))}}]);
//# sourceMappingURL=32.0a626f7b.chunk.js.map