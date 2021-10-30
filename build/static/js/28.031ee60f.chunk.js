(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[28],{1250:function(e,a,t){"use strict";function n(e,a,t,n,c,i,s){try{var r=e[i](s),o=r.value}catch(l){return void t(l)}r.done?a(o):Promise.resolve(o).then(n,c)}function c(e){return function(){var a=this,t=arguments;return new Promise((function(c,i){var s=e.apply(a,t);function r(e){n(s,c,i,r,o,"next",e)}function o(e){n(s,c,i,r,o,"throw",e)}r(void 0)}))}}t.d(a,"a",(function(){return c}))},1298:function(e,a,t){"use strict";var n=t(1),c=t(11),i=t(28),s=t(0),r=(t(7),t(10)),o=t(21),l=t(38),m=s.forwardRef((function(e,a){var t=e.classes,i=e.className,o=e.component,m=void 0===o?"div":o,d=e.disableGutters,u=void 0!==d&&d,p=e.fixed,b=void 0!==p&&p,f=e.maxWidth,g=void 0===f?"lg":f,v=Object(c.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return s.createElement(m,Object(n.a)({className:Object(r.a)(t.root,i,b&&t.fixed,u&&t.disableGutters,!1!==g&&t["maxWidth".concat(Object(l.a)(String(g)))]),ref:a},v))}));a.a=Object(o.a)((function(e){return{root:Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(a,t){var n=e.breakpoints.values[t];return 0!==n&&(a[e.breakpoints.up(t)]={maxWidth:n}),a}),{}),maxWidthXs:Object(i.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(i.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(i.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(i.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(i.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(m)},1335:function(e,a,t){"use strict";t.r(a);var n=t(93),c=t.n(n),i=t(1250),s=t(12),r=t(0),o=t.n(r),l=t(15),m=t(279),d=t(370),u=(t(30),t(57)),p=t.n(u);var b=t(48),f=t(13),g=t(1298);a.default=Object(m.c)(Object(l.b)(null,null)((function(e){var a=e.intl,t=o.a.useState([]),n=Object(s.a)(t,2),m=n[0],u=n[1],v=o.a.useState([]),h=Object(s.a)(v,2),x=h[0],E=h[1],k=Object(l.e)((function(e){return e.clientMqtt.client}),l.c),O=function(){p.a.get("/api/v1/screen").then((function(e){var a=[],t=[];Object.keys(e.data.data.onprocess).forEach((function(n){var c=e.data.data.queue[n];a.push(e.data.data.onprocess[n]),t.push({item:c})})),E(a),u(t)})).catch((function(e){b.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}))};return Object(r.useEffect)(O,[]),Object(r.useEffect)((function(){k&&k.on("message",function(){var e=Object(i.a)(c.a.mark((function e(a,t){var n,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"dashboard-registry"===(n={topic:a,message:t.toString()}).topic&&O(),"call-patient"===n.topic&&(i=JSON.parse(n.message),window.responsiveVoice.speak("Nomor pasien, ".concat(i.kode_pasien,". Atas nama pasient, ").concat(i.nama.toLowerCase(),". Silahkan ke Ruangan POLI ").concat(i.poli,".")));case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}())}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{backgroundImage:"url(".concat(Object(f.d)("media/bg/bg1-01.png"),")"),height:"calc(100vh + 10.526rem)",backgroundPosition:"50%",backgroundSize:"cover"}},o.a.createElement(g.a,{maxWidth:"xl",fixed:!0},o.a.createElement("div",{className:"row gutter-b mt-9 pt-9"},x.map((function(e,a){return o.a.createElement("div",{className:"col-lg-4",key:a.toString()},o.a.createElement("div",{className:"card card-custom wave wave-animate-slow wave-danger gutter-b"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement("div",{className:"symbol symbol-40 symbol-light-success mr-5"},o.a.createElement("span",{className:"symbol-label"},o.a.createElement("img",{src:Object(f.d)("/media/svg/avatars/doctor.svg"),className:"h-75 align-self-end",alt:"Doctor 1"}))),o.a.createElement("div",{className:"d-flex flex-column flex-grow-1 font-weight-bold"},o.a.createElement("a",{href:"#",className:"text-dark text-hover-primary mb-1",style:{fontSize:"2rem"}},e.nama||"-"),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("span",{style:{fontSize:"1.1rem"}},"POLI ",e.poli||"-"),o.a.createElement("span",{style:{fontSize:"1.1rem"},className:"text-right"},e.dokter||"-")))))))}))),o.a.createElement("div",{className:"row gutter-b mt-9 pt-9"},m.map((function(e,a){return o.a.createElement("div",{key:a.toString(),className:"col-lg-".concat(1===m.length?"12":2===m.length?"6":3===m.length?"4":"3")},o.a.createElement(d.b,{className:"bg-primary text-white"},o.a.createElement(d.d,null,o.a.createElement("div",{className:"card-title m-auto"},o.a.createElement(d.e,{className:"text-white"},"POLI ",x[a].poli))),o.a.createElement(d.c,null,e.item.map((function(e,a){return o.a.createElement("div",{className:"d-flex justify-content-between my-3",key:a.toString()},o.a.createElement("div",null,o.a.createElement("span",{className:"font-size-h2"},e.kode_pasien)),o.a.createElement("div",null,o.a.createElement("span",{className:"font-size-h2"},e.nama)))})))))}))))))})))}}]);
//# sourceMappingURL=28.031ee60f.chunk.js.map