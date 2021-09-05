(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[11],{1261:function(e,a,t){"use strict";var n=t(35),l=t(14),r=t(0),c=t.n(r),i=t(22),o=t(281),s=t(1253),m=t(157),u=t(1273),d=t(1274),p=t(21),b=t(1249),f=t(1252),v=t(108),E=[{title:"LABEL.PATIENT_CODE",name:"kode_pasien",order:{active:!0,status:!0},filter:{active:!0,type:"text"}},{title:"LABEL.PATIENT_NAME",name:"nama",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.REGISTRATION_DATE",name:"created_at",order:{active:!0,status:!1},filter:{active:!0,type:"date"}},{title:"LABEL.ADDRESS",name:"kota",order:{active:!0,status:!1},filter:{active:!0,type:"text"}},{title:"LABEL.PHONE_NUMBER",name:"no_telp",order:{active:!0,status:!1},filter:{active:!0,type:"number"}},{title:"LABEL.EMAIL",name:"email",order:{active:!0,status:!1},filter:{active:!0,type:"number"}},{title:"LABEL.GENDER",name:"jk",order:{active:!0,status:!1},filter:{active:!1,type:"text"}},{title:"LABEL.TABLE_HEADER.ACTION",name:"action",order:{active:!1,status:!1},filter:{active:!1,type:"text"}}],g=[{label:"LABEL.DETAIL",icon:"fas fa-external-link-alt text-primary",type:"open"}];a.a=Object(o.c)(Object(i.b)(null,null)((function(e){var a=e.intl,t=Object(r.useState)(!0),o=Object(l.a)(t,2),N=o[0],h=o[1],j=Object(r.useState)({data:[],count:0}),O=Object(l.a)(j,2),k=O[0],x=O[1],y=Object(r.useState)(!1),L=Object(l.a)(y,2),S=L[0],w=L[1],A=Object(p.k)(),T=Object(i.e)((function(e){return e.auth.user.position}),i.c);Object(r.useLayoutEffect)((function(){A.setBreadcrumbs([{pathname:"/".concat(T,"/patient/list"),title:a.formatMessage({id:"LABEL.PATIENT_LIST"})}]),A.setTitle(a.formatMessage({id:"LABEL.PATIENT_LIST"}))}),[]);var _=function(a,t){e.history.push("/".concat(T,"/patient/list/").concat(t.id))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.b,null,c.a.createElement(m.c,null,c.a.createElement(s.a,{dataHeader:E,handleParams:function(e){h(!0),x(Object(n.a)(Object(n.a)({},k),{},{count:0,data:[]})),w(!1),Object(b.g)(e).then((function(e){h(!1),x(Object(n.a)(Object(n.a)({},k),{},{count:e.data.data.count||0,data:e.data.data.rows}))})).catch((function(e){w(!0),h(!1),v.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}))},loading:N,err:S,countData:k.count,hecto:13},k.data.map((function(e,a){return c.a.createElement(u.a,{key:a.toString()},c.a.createElement(d.a,null,e.kode_pasien),c.a.createElement(d.a,null,null===e||void 0===e?void 0:e.nama),c.a.createElement(d.a,null,window.moment(new Date(null===e||void 0===e?void 0:e.created_at)).format("DD MMM YYYY")),c.a.createElement(d.a,null,null===e||void 0===e?void 0:e.kota),c.a.createElement(d.a,null,null===e||void 0===e?void 0:e.no_telp),c.a.createElement(d.a,null,null===e||void 0===e?void 0:e.email),c.a.createElement(d.a,null,"L"===(null===e||void 0===e?void 0:e.jk)?"Laki-Laki":"Perempuan"),c.a.createElement(d.a,null,c.a.createElement(f.a,{data:e,handleAction:_,ops:g})))}))))))})))},1262:function(e,a,t){"use strict";var n=t(35),l=t(14),r=t(0),c=t.n(r),i=t(22),o=t(1227),s=t(281),m=t(157),u=t(21),d=t(1256),p=t(1276),b=t(1249),f=t(108),v=t(76),E=t(1235),g=["navLists","defaultActiveKey","handleSelect"],N=[{id:"link-item-1",label:"Item 1"},{id:"link-item-2",label:"Item 2"},{id:"link-item-3",label:"Item 3"}];function h(e){var a=e.navLists,t=void 0===a?N:a,n=e.defaultActiveKey,l=void 0===n?t[0].id:n,r=e.handleSelect,i=Object(v.a)(e,g);return c.a.createElement(E.a,Object.assign({variant:"pills",defaultActiveKey:l,onSelect:r},i),t.map((function(e){return c.a.createElement(E.a.Item,{key:e.id},c.a.createElement(E.a.Link,{eventKey:e.id,style:{fontWeight:500}},c.a.createElement(o.a,{id:e.label})))})))}var j=t(1258),O=t(1254),k=t(1305),x=t(374),y=t(1231),L=t(3),S=[{id:"1",label:"LABEL.MEDICAL_RECORD"},{id:"2",label:"LABEL.LAB_HISTORY"}],w=[{value:"2",label:"Lajang"},{value:"1",label:"Menikah"},{value:"3",label:"Duda/Janda"}],A=[{value:"L",label:"Laki-Laki"},{value:"P",label:"Perempuan"}],T=[{value:"Tidak Sekolah",label:"Tidak Sekolah"},{value:"Sekolah Dasar",label:"Sekolah Dasar"},{value:"Sekolah Menengah Pertama",label:"Sekolah Menengah Pertama"},{value:"Sekolah Menengah Atas",label:"Sekolah Menengah Atas"},{value:"Diploma",label:"Diploma"},{value:"Sarjana",label:"Sarjana"},{value:"Magister",label:"Magister"},{value:"Doktor",label:"Doktor"}],_=[{value:"Tidak Berkerja",label:"Tidak Berkerja"},{value:"Pelajar/Mahasiswa",label:"Pelajar/Mahasiswa"},{value:"Ibu Rumah Tangga",label:"Ibu Rumah Tangga"},{value:"Harian Lepas",label:"Harian Lepas"},{value:"Karyawan Swasta",label:"Karyawan Swasta"},{value:"PNS",label:"PNS"},{value:"Pengusaha",label:"Pengusaha"},{value:"Freelance",label:"Freelance"}],I=Object(y.a)({bigAvatar:{marginBottom:30,marginLeft:10,marginRight:10,width:100,height:100}});a.a=Object(s.c)(Object(i.b)(null,null)((function(e){var a=e.intl,t=Object(u.k)(),s=I(),v=Object(r.useState)(!1),E=Object(l.a)(v,2),g=E[0],N=E[1],y=Object(r.useState)(!1),D=Object(l.a)(y,2),P=D[0],C=D[1],B=Object(r.useState)(!0),M=Object(l.a)(B,2),R=M[0],F=M[1],K=Object(r.useState)({}),Q=Object(l.a)(K,2),U=Q[0],H=Q[1],V=Object(r.useState)(S[0].id),q=Object(l.a)(V,2),z=q[0],Y=q[1],J=Object(r.useState)({}),Z=Object(l.a)(J,2),G=Z[0],$=Z[1],W=Object(r.useState)({}),X=Object(l.a)(W,2),ee=X[0],ae=X[1],te=Object(r.useState)(""),ne=Object(l.a)(te,2),le=ne[0],re=ne[1],ce=Object(r.useState)(""),ie=Object(l.a)(ce,2),oe=ie[0],se=ie[1],me=Object(r.useState)({}),ue=Object(l.a)(me,2),de=ue[0],pe=ue[1],be=Object(r.useState)({}),fe=Object(l.a)(be,2),ve=fe[0],Ee=fe[1],ge=Object(r.useState)({}),Ne=Object(l.a)(ge,2),he=Ne[0],je=Ne[1],Oe=Object(r.useState)([]),ke=Object(l.a)(Oe,2),xe=ke[0],ye=ke[1],Le=Object(r.useState)({}),Se=Object(l.a)(Le,2),we=Se[0],Ae=Se[1],Te=Object(r.useState)([]),_e=Object(l.a)(Te,2),Ie=_e[0],De=_e[1],Pe=Object(r.useState)({}),Ce=Object(l.a)(Pe,2),Be=Ce[0],Me=Ce[1],Re=Object(r.useState)([]),Fe=Object(l.a)(Re,2),Ke=Fe[0],Qe=Fe[1],Ue=Object(r.useState)({}),He=Object(l.a)(Ue,2),Ve=He[0],qe=He[1],ze=Object(r.useState)([]),Ye=Object(l.a)(ze,2),Je=Ye[0],Ze=Ye[1],Ge=Object(r.useState)({prov:!0,kota:!0,kec:!0,kel:!0}),$e=Object(l.a)(Ge,2),We=$e[0],Xe=$e[1],ea=(Object(i.e)((function(e){return e.auth.user.id}),i.c),Object(i.e)((function(e){return e.auth.user.position}),i.c)),aa=e.match.params.id;Object(r.useLayoutEffect)((function(){t.setBreadcrumbs([{pathname:"/".concat(ea,"/patient/list"),title:a.formatMessage({id:"LABEL.PATIENT_LIST"})},{pathname:"/".concat(ea,"/patient/list/").concat(aa),title:a.formatMessage({id:"LABEL.PATIENT"})}]),t.setTitle(a.formatMessage({id:"LABEL.PATIENT"}))}),[]);var ta=function(){N(!0),Object(b.b)(aa).then((function(e){var a,t;N(!1),H(e.data.data),re(e.data.data.nama),se(e.data.data.ktpno);var n=w.findIndex((function(a){return a.value===e.data.data.status_nikah}));$(w[n]);var l=A.findIndex((function(a){return a.value===e.data.data.jk}));if(ae(A[l]),null===(a=e.data.data)||void 0===a?void 0:a.pendidikan){n=T.findIndex((function(a){var t;return a.value===(null===(t=e.data.data)||void 0===t?void 0:t.pendidikan)}));pe(T[n])}if(null===(t=e.data.data)||void 0===t?void 0:t.pekerjaan){n=_.findIndex((function(a){var t;return a.value===(null===(t=e.data.data)||void 0===t?void 0:t.pekerjaan)}));Ee(_[n])}})).catch((function(e){N(!1),f.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}))};return Object(r.useEffect)(ta,[]),Object(r.useEffect)((function(){if(0===xe.length)Object(b.h)().then((function(e){var a=e.data.data;a.forEach((function(e){e.value=e.id,e.label=e.nama})),ye(a)})).catch((function(e){f.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}));else if(null===U||void 0===U?void 0:U.prov){var e=xe.findIndex((function(e){return e.value===Number(null===U||void 0===U?void 0:U.prov)}));-1!==e&&je(xe[e])}}),[U]),Object(r.useEffect)((function(){(null===he||void 0===he?void 0:he.value)?(Ae({}),Object(b.d)(he.value).then((function(e){var a=e.data.data;if(a.forEach((function(e){e.value=e.id_kota,e.label=e.nama})),De(a),null===We||void 0===We?void 0:We.kota){var t=a.findIndex((function(e){return e.value===(null===U||void 0===U?void 0:U.kota)}));-1!==t&&Ae(a[t])}})).catch((function(e){f.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}))):(Ae({}),De([]))}),[he]),Object(r.useEffect)((function(){(null===we||void 0===we?void 0:we.value)?(Me({}),Object(b.e)(he.value,we.value).then((function(e){var a=e.data.data;if(a.forEach((function(e){e.value=e.id_kec,e.label=e.nama})),Qe(a),null===We||void 0===We?void 0:We.kec){var t=a.findIndex((function(e){return e.value===(null===U||void 0===U?void 0:U.kec)}));-1!==t&&Me(a[t])}})).catch((function(e){f.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}))):(Me({}),Qe([]))}),[we]),Object(r.useEffect)((function(){(null===Be||void 0===Be?void 0:Be.value)?(qe({}),Object(b.i)(he.value,we.value,Be.value).then((function(e){var a=e.data.data;if(a.forEach((function(e){e.value=e.id_kel,e.label=e.nama})),Ze(a),null===We||void 0===We?void 0:We.kel){var t=a.findIndex((function(e){return e.value===(null===U||void 0===U?void 0:U.kel)}));-1!==t&&qe(a[t])}})).catch((function(e){f.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}))):(qe({}),Ze([]))}),[Be]),c.a.createElement(c.a.Fragment,null,g&&c.a.createElement(p.a,null),c.a.createElement(m.b,null,c.a.createElement(m.c,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"d-flex"},c.a.createElement(k.a,{alt:"Foto",src:(null===U||void 0===U?void 0:U.photo_pasien)?"".concat(Object(x.b)(),"/storage/app/photo_pasien/").concat(null===U||void 0===U?void 0:U.photo_pasien):Object(L.d)("/media/svg/avatars/004-boy-1.svg"),className:s.bigAvatar}),c.a.createElement("div",{className:"py-5"},c.a.createElement("h1",null,le),c.a.createElement("h6",null,oe)))),c.a.createElement("div",{className:"col-md-6 text-md-right"},c.a.createElement("a",{className:"btn btn-danger",href:"".concat(Object(x.b)(),"/api/v1/cetakkartu/").concat(aa),target:"_blankk"},c.a.createElement("i",{className:"fas fa-print px-1"}),"Cetak Kartu"))),c.a.createElement("form",{autoComplete:"off",id:"formData",onSubmit:function(e){e.preventDefault(),C(!0);var t=new FormData,n=Object.assign({},U);n.pendidikan=de.value,n.pekerjaan=ve.value,n.email=""===n.email.trim()?null:n.email,Object.keys(n).forEach((function(e){"photo_pasien"!==e&&t.append(e,U[e])})),Object(b.j)(aa,t).then((function(e){C(!1),F(!R),re(U.nama),se(U.ktpno),f.a.showSnackbar(a.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success")})).catch((function(e){C(!1),f.a.showSnackbar(a.formatMessage({id:"REQ.REQUEST_FAILED"}))}))}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Nomor KTP"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-id-card"}))),c.a.createElement(d.a,{id:R||P?"NumberFormat-text":"NumberFormat-input",value:null===U||void 0===U?void 0:U.ktpno,displayType:R||P?"text":"input",className:"form-control",format:"################",mask:"_",allowEmptyFormatting:!0,allowLeadingZeros:!0,onValueChange:function(e){H(Object(n.a)(Object(n.a)({},U),{},{ktpno:e.floatValue}))}}))),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Tempar Lahir"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-street-view"}))),c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Tempar Lahir",value:(null===U||void 0===U?void 0:U.tempat_lahir)||"",disabled:R||P,onChange:function(e){H(Object(n.a)(Object(n.a)({},U),{},{tempat_lahir:e.target.value}))}}))),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Jenis Kelamin"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-venus-mars"}))),c.a.createElement(O.a,{value:ee,options:A,isDisabled:R||P,className:"form-control border-0 p-0 h-100",classNamePrefix:"react-select",onChange:function(e){ae(e),H(Object(n.a)(Object(n.a)({},U),{},{jk:e.value}))}}))),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Nomor Phone"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-mobile-alt"}))),c.a.createElement(d.a,{id:R||P?"NumberFormat-text":"NumberFormat-input",value:null===U||void 0===U?void 0:U.no_telp,displayType:R||P?"text":"input",className:"form-control",format:"+62 ###-###-###-####",mask:"_",allowEmptyFormatting:!0,allowLeadingZeros:!0,onValueChange:function(e){H(Object(n.a)(Object(n.a)({},U),{},{no_telp:e.floatValue}))}}))),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"No Kartu Keluarga"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-id-card"}))),c.a.createElement(d.a,{id:R||P?"NumberFormat-text":"NumberFormat-input",value:null===U||void 0===U?void 0:U.no_kk,displayType:R||P?"text":"input",className:"form-control",format:"################",mask:"_",allowEmptyFormatting:!0,allowLeadingZeros:!0,onValueChange:function(e){H(Object(n.a)(Object(n.a)({},U),{},{no_kk:e.floatValue}))}}))),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Pendidikan Terakhir"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-school"}))),c.a.createElement(O.a,{value:de,options:T,isDisabled:R||P,className:"form-control border-0 p-0 h-100",classNamePrefix:"react-select",onChange:function(e){pe(e),H(Object(n.a)(Object(n.a)({},U),{},{pendidikan:e.value}))}}))),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Pekerjaan"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-briefcase"}))),c.a.createElement(O.a,{value:ve,options:_,isDisabled:R||P,className:"form-control border-0 p-0 h-100",classNamePrefix:"react-select",onChange:function(e){Ee(e),H(Object(n.a)(Object(n.a)({},U),{},{pekerjaan:e.value}))}})))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Nama Lengkap"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"far fa-user"}))),c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nama Lengkap",disabled:R||P,value:(null===U||void 0===U?void 0:U.nama)||"",onChange:function(e){H(Object(n.a)(Object(n.a)({},U),{},{nama:e.target.value}))}}))),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Tanggal Lahir"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-baby"}))),c.a.createElement("input",{type:"date",className:"form-control",disabled:R||P,value:(null===U||void 0===U?void 0:U.tgl_lahir)||"",onChange:function(e){H(Object(n.a)(Object(n.a)({},U),{},{tgl_lahir:e.target.value}))}}))),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Status"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-house-user"}))),c.a.createElement(O.a,{value:G,options:w,isDisabled:R||P,className:"form-control border-0 p-0 h-100",classNamePrefix:"react-select",onChange:function(e){$(e),H(Object(n.a)(Object(n.a)({},U),{},{status_nikah:e.value}))}}))),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Email"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-at"}))),c.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",disabled:R||P,value:(null===U||void 0===U?void 0:U.email)||"",onChange:function(e){H(Object(n.a)(Object(n.a)({},U),{},{email:e.target.value}))}}))),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Provinsi"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-map-marker-alt"}))),c.a.createElement(O.a,{value:he,options:xe,isDisabled:R||P,className:"form-control border-0 p-0 h-100",classNamePrefix:"react-select",onChange:function(e){je(e),Ae({}),Me({}),qe({}),Xe(Object(n.a)(Object(n.a)({},We),{},{prov:!1})),H(Object(n.a)(Object(n.a)({},U),{},{prov:e.value,kota:null,kec:null,kel:null}))}}))),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Kota/Kabupaten"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-map-marker-alt"}))),c.a.createElement(O.a,{value:we,options:Ie,isDisabled:R||P,className:"form-control border-0 p-0 h-100",classNamePrefix:"react-select",onChange:function(e){Ae(e),Me({}),qe({}),Xe(Object(n.a)(Object(n.a)({},We),{},{kota:!1})),H(Object(n.a)(Object(n.a)({},U),{},{kota:e.value,kec:null,kel:null}))}}))),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Kecamatan"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-map-marker"}))),c.a.createElement(O.a,{value:Be,options:Ke,isDisabled:R||P,className:"form-control border-0 p-0 h-100",classNamePrefix:"react-select",onChange:function(e){Me(e),qe({}),Xe(Object(n.a)(Object(n.a)({},We),{},{kec:!1})),H(Object(n.a)(Object(n.a)({},U),{},{kec:e.value,kel:null}))}}))),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Kelurahan/Desa"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-map-marker"}))),c.a.createElement(O.a,{value:Ve,options:Je,isDisabled:R||P,className:"form-control border-0 p-0 h-100",classNamePrefix:"react-select",onChange:function(e){qe(e),Xe(Object(n.a)(Object(n.a)({},We),{},{kel:!1})),H(Object(n.a)(Object(n.a)({},U),{},{kel:e.value}))}}))),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Alamat"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-map-marked-alt"}))),c.a.createElement("textarea",{rows:"5",className:"form-control",disabled:R||P,value:(null===U||void 0===U?void 0:U.alamat)||"",onChange:function(e){H(Object(n.a)(Object(n.a)({},U),{},{alamat:e.target.value}))}}))))),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h3",null,"Kontak Darurat"),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Nama Lengkap"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-user-shield"}))),c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nama Lengkap",disabled:R||P,value:(null===U||void 0===U?void 0:U.partner)||"",onChange:function(e){H(Object(n.a)(Object(n.a)({},U),{},{partner:e.target.value}))}}))),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Hubungan"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-user-shield"}))),c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Hubungan",disabled:R||P,value:(null===U||void 0===U?void 0:U.partner_status)||"",onChange:function(e){H(Object(n.a)(Object(n.a)({},U),{},{partner_status:e.target.value}))}}))),c.a.createElement("div",{className:"form-group mx-5 mb-5"},c.a.createElement("label",null,"Nomor Phone"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",style:{width:45}},c.a.createElement("i",{className:"fas fa-user-shield"}))),c.a.createElement(d.a,{id:R||P?"NumberFormat-text":"NumberFormat-input",value:null===U||void 0===U?void 0:U.partner_tel,displayType:R||P?"text":"input",className:"form-control",format:"+62 ###-###-###-####",mask:"_",allowEmptyFormatting:!0,allowLeadingZeros:!0,onValueChange:function(e){H(Object(n.a)(Object(n.a)({},U),{},{partner_tel:e.floatValue}))}}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-right"},c.a.createElement("button",{type:"button",className:"btn btn-primary mx-1 ".concat(!R||"registry"!==ea&&"d-none"),onClick:function(){F(!R)}},c.a.createElement("i",{className:"far fa-edit"}),c.a.createElement("span",null,"Edit")),c.a.createElement("button",{type:"submit",className:"btn btn-success mx-1 ".concat(R&&"d-none"),disabled:P},P?c.a.createElement("i",{className:"fas fa-spinner fa-pulse px-2"}):c.a.createElement("i",{className:"fas fa-save"}),P?c.a.createElement(o.a,{id:"LABEL.WAITING"}):c.a.createElement("span",null,"Simpan")),c.a.createElement("button",{type:"button",className:"btn btn-danger mx-1 ".concat(R&&"d-none"),onClick:function(){F(!R),ta()},disabled:P},c.a.createElement("i",{className:"far fa-times-circle"}),c.a.createElement("span",null,"Batal"))))))),c.a.createElement(m.b,null,c.a.createElement(m.c,null,c.a.createElement(h,{navLists:S,defaultActiveKey:z,handleSelect:function(e){return Y(e)}}),"1"===z&&c.a.createElement("div",{className:"my-5 py-5 h-100"},c.a.createElement(j.a,e)),"2"===z&&c.a.createElement("div",{className:"my-5 py-5 h-100"},"riwayat"))))})))},1276:function(e,a,t){"use strict";var n=t(1),l=t(13),r=t(0),c=(t(9),t(10)),i=t(34),o=t(20),s=t(70),m=t(116),u=r.forwardRef((function(e,a){var t=e.classes,o=e.className,s=e.color,u=void 0===s?"primary":s,d=e.value,p=e.valueBuffer,b=e.variant,f=void 0===b?"indeterminate":b,v=Object(l.a)(e,["classes","className","color","value","valueBuffer","variant"]),E=Object(m.a)(),g={},N={bar1:{},bar2:{}};if("determinate"===f||"buffer"===f)if(void 0!==d){g["aria-valuenow"]=Math.round(d);var h=d-100;"rtl"===E.direction&&(h=-h),N.bar1.transform="translateX(".concat(h,"%)")}else 0;if("buffer"===f)if(void 0!==p){var j=(p||0)-100;"rtl"===E.direction&&(j=-j),N.bar2.transform="translateX(".concat(j,"%)")}else 0;return r.createElement("div",Object(n.a)({className:Object(c.a)(t.root,t["color".concat(Object(i.a)(u))],o,{determinate:t.determinate,indeterminate:t.indeterminate,buffer:t.buffer,query:t.query}[f]),role:"progressbar"},g,{ref:a},v),"buffer"===f?r.createElement("div",{className:Object(c.a)(t.dashed,t["dashedColor".concat(Object(i.a)(u))])}):null,r.createElement("div",{className:Object(c.a)(t.bar,t["barColor".concat(Object(i.a)(u))],("indeterminate"===f||"query"===f)&&t.bar1Indeterminate,{determinate:t.bar1Determinate,buffer:t.bar1Buffer}[f]),style:N.bar1}),"determinate"===f?null:r.createElement("div",{className:Object(c.a)(t.bar,("indeterminate"===f||"query"===f)&&t.bar2Indeterminate,"buffer"===f?[t["color".concat(Object(i.a)(u))],t.bar2Buffer]:t["barColor".concat(Object(i.a)(u))]),style:N.bar2}))}));a.a=Object(o.a)((function(e){var a=function(a){return"light"===e.palette.type?Object(s.e)(a,.62):Object(s.a)(a,.5)},t=a(e.palette.primary.main),n=a(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:t},colorSecondary:{backgroundColor:n},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(t," 0%, ").concat(t," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0px -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0px -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0px -23px"},"50%":{opacity:0,backgroundPosition:"0px -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(u)},1295:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(103),c=t(1261),i=t(1262),o=t(1259),s=t(281),m=t(22);a.default=Object(s.c)(Object(m.b)(null,null)((function(e){return l.a.createElement(r.d,null,l.a.createElement(r.a,{exact:!0,from:"/doctor/patient",to:"/doctor/dashboard"}),l.a.createElement(r.b,{path:"/doctor/patient/list/:id/:medicalRecordId",component:function(e){return l.a.createElement(o.a,e)},exact:!0}),l.a.createElement(r.b,{path:"/doctor/patient/list/:id",component:function(e){return l.a.createElement(i.a,e)},exact:!0}),l.a.createElement(r.b,{path:"/doctor/patient/list",component:function(e){return l.a.createElement(c.a,e)},exact:!0}))})))}}]);
//# sourceMappingURL=11.30f5d8b0.chunk.js.map