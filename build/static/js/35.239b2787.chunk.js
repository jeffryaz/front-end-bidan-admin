(this.webpackJsonpaplication=this.webpackJsonpaplication||[]).push([[35],{1341:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(100),c=t(30),s=t(11),r=t(15),i=t(14),m=t(104),d=t(60),u=t(370),p=t(92);Object(i.b)(null,p.a)((function(e){var a=Object(l.useState)(!1),t=Object(s.a)(a,2),o=t[0],c=t[1],p=Object(i.d)(),b=Object(i.e)((function(e){return e.auth.user}),i.c);Object(l.useEffect)((function(){}),[b]);var g={username:b.username,email:b.email,language:b.language,timeZone:b.timeZone,communicationEmail:b.communication.email,communicationSMS:b.communication.sms,communicationPhone:b.communication.phone},E=d.b().shape({username:d.d().required("Username is required"),email:d.d().email("Wrong email format").required("Email is required"),language:d.d(),timeZone:d.d(),communicationEmail:d.a(),communicationSMS:d.a(),communicationPhone:d.a()}),h=function(e){return f.touched[e]&&f.errors[e]?"is-invalid":f.touched[e]&&!f.errors[e]?"is-valid":""},f=Object(m.b)({initialValues:g,validationSchema:E,onSubmit:function(a,t){t.setStatus;!function(a,t,l){c(!0);var n=Object.assign(b,{username:a.username,email:a.email,language:a.language,timeZone:a.timeZone,communication:{email:a.communicationEmail,sms:a.communicationSMS,phone:a.communicationPhone}});p(e.setUser(n)),setTimeout((function(){c(!1),l(!1)}),1e3)}(a,0,t.setSubmitting)},onReset:function(e,a){(0,a.resetForm)()}});return n.a.createElement("form",{className:"card card-custom",onSubmit:f.handleSubmit},o&&n.a.createElement(u.g,null),n.a.createElement("div",{className:"card-header py-3"},n.a.createElement("div",{className:"card-title align-items-start flex-column"},n.a.createElement("h3",{className:"card-label font-weight-bolder text-dark"},"Account Information"),n.a.createElement("span",{className:"text-muted font-weight-bold font-size-sm mt-1"},"Change your account settings")),n.a.createElement("div",{className:"card-toolbar"},n.a.createElement("button",{type:"submit",className:"btn btn-success mr-2",disabled:f.isSubmitting||f.touched&&!f.isValid},"Save Changes",f.isSubmitting),n.a.createElement(r.b,{to:"/user-profile/profile-overview",className:"btn btn-secondary"},"Cancel"))),n.a.createElement("div",{className:"form"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-xl-3"}),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("h5",{className:"font-weight-bold mb-6"},"Account:"))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label"},"Username"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("div",null,n.a.createElement("input",Object.assign({type:"text",className:"form-control form-control-lg form-control-solid ".concat(h("username")),name:"username"},f.getFieldProps("username"))),f.touched.username&&f.errors.username?n.a.createElement("div",{className:"invalid-feedback"},f.errors.username):null))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label"},"Email Address"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("div",{className:"input-group input-group-lg input-group-solid"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-at"}))),n.a.createElement("input",Object.assign({type:"text",placeholder:"Email",className:"form-control form-control-lg form-control-solid ".concat(h("email")),name:"email"},f.getFieldProps("email"))),f.touched.email&&f.errors.email?n.a.createElement("div",{className:"invalid-feedback"},f.errors.email):null),n.a.createElement("span",{className:"form-text text-muted"},"Email will not be publicly displayed."," ",n.a.createElement("a",{href:"#",className:"font-weight-bold"},"Learn more"),"."))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label"},"Language"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("select",Object.assign({className:"form-control form-control-lg form-control-solid",name:"language"},f.getFieldProps("language")),n.a.createElement("option",null,"Select Language..."),n.a.createElement("option",{value:"id"},"Bahasa Indonesia - Indonesian"),n.a.createElement("option",{value:"msa"},"Bahasa Melayu - Malay"),n.a.createElement("option",{value:"ca"},"Catal\xe0 - Catalan"),n.a.createElement("option",{value:"cs"},"\u010ce\u0161tina - Czech"),n.a.createElement("option",{value:"da"},"Dansk - Danish"),n.a.createElement("option",{value:"de"},"Deutsch - German"),n.a.createElement("option",{value:"en"},"English"),n.a.createElement("option",{value:"en-gb"},"English UK - British English"),n.a.createElement("option",{value:"es"},"Espa\xf1ol - Spanish"),n.a.createElement("option",{value:"eu"},"Euskara - Basque (beta)"),n.a.createElement("option",{value:"fil"},"Filipino"),n.a.createElement("option",{value:"fr"},"Fran\xe7ais - French"),n.a.createElement("option",{value:"pt"},"Portugu\xeas - Portuguese"),n.a.createElement("option",{value:"ro"},"Rom\xe2n\u0103 - Romanian"),n.a.createElement("option",{value:"ru"},"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 - Russian"),n.a.createElement("option",{value:"sr"},"\u0421\u0440\u043f\u0441\u043a\u0438 - Serbian"),n.a.createElement("option",{value:"uk"},"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430 \u043c\u043e\u0432\u0430 - Ukrainian")))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label"},"Time Zone"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("select",Object.assign({className:"form-control form-control-lg form-control-solid",name:"timeZone"},f.getFieldProps("timeZone")),n.a.createElement("option",{value:"International Date Line West"},"(GMT-11:00) International Date Line West"),n.a.createElement("option",{value:"Midway Island"},"(GMT-11:00) Midway Island"),n.a.createElement("option",{value:"Central America"},"(GMT-06:00) Central America"),n.a.createElement("option",{value:"Central Time (US & Canada)"},"(GMT-05:00) Central Time (US & Canada)"),n.a.createElement("option",{value:"Eastern Time (US & Canada)"},"(GMT-04:00) Eastern Time (US & Canada)"),n.a.createElement("option",{value:"Indiana (East)"},"(GMT-04:00) Indiana (East)"),n.a.createElement("option",{value:"Georgetown"},"(GMT-04:00) Georgetown"),n.a.createElement("option",{value:"Buenos Aires"},"(GMT-03:00) Buenos Aires"),n.a.createElement("option",{value:"Newfoundland"},"(GMT-02:30) Newfoundland"),n.a.createElement("option",{value:"Mid-Atlantic"},"(GMT-02:00) Mid-Atlantic"),n.a.createElement("option",{value:"Cape Verde Is."},"(GMT-01:00) Cape Verde Is."),n.a.createElement("option",{value:"UTC"},"(GMT) UTC"),n.a.createElement("option",{value:"Dublin"},"(GMT+01:00) Dublin"),n.a.createElement("option",{value:"Edinburgh"},"(GMT+01:00) Edinburgh"),n.a.createElement("option",{value:"London"},"(GMT+01:00) London"),n.a.createElement("option",{value:"Prague"},"(GMT+02:00) Prague"),n.a.createElement("option",{value:"Helsinki"},"(GMT+03:00) Helsinki"),n.a.createElement("option",{value:"Abu Dhabi"},"(GMT+04:00) Abu Dhabi"),n.a.createElement("option",{value:"Tehran"},"(GMT+04:30) Tehran"),n.a.createElement("option",{value:"Islamabad"},"(GMT+05:00) Islamabad"),n.a.createElement("option",{value:"Karachi"},"(GMT+05:00) Karachi"),n.a.createElement("option",{value:"Tashkent"},"(GMT+05:00) Tashkent"),n.a.createElement("option",{value:"Kathmandu"},"(GMT+05:45) Kathmandu"),n.a.createElement("option",{value:"Astana"},"(GMT+06:00) Astana")))),n.a.createElement("div",{className:"form-group row align-items-center"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label"},"Communication"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("div",{className:"checkbox-inline"},n.a.createElement("label",{className:"checkbox"},n.a.createElement("input",{type:"checkbox",name:"communicationEmail",checked:f.values.communicationEmail,onChange:f.handleChange}),n.a.createElement("span",null),"Email"),n.a.createElement("label",{className:"checkbox"},n.a.createElement("input",Object.assign({type:"checkbox",name:"communicationSMS",checked:f.values.communicationSMS},f.getFieldProps("communicationSMS"),{onChange:f.handleChange})),n.a.createElement("span",null),"SMS"),n.a.createElement("label",{className:"checkbox"},n.a.createElement("input",Object.assign({type:"checkbox",name:"communicationPhone",checked:f.values.communicationPhone},f.getFieldProps("communicationPhone"),{onChange:f.handleChange})),n.a.createElement("span",null),"Phone")))),n.a.createElement("div",{className:"separator separator-dashed my-5"}),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-xl-3"}),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("h5",{className:"font-weight-bold mb-6"},"Security:"))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label"},"Login verification"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("button",{type:"button",className:"btn btn-light-primary font-weight-bold btn-sm"},"Setup login verification"),n.a.createElement("p",{className:"form-text text-muted pt-2"},"After you log in, you will be asked for additional information to confirm your identity and protect your account from being compromised. "," ",n.a.createElement("a",{href:"#",className:"font-weight-bold"},"Learn more"),"."))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label"},"Password reset verification"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("div",{className:"checkbox-inline"},n.a.createElement("label",{className:"checkbox m-0"},n.a.createElement("input",{type:"checkbox"}),n.a.createElement("span",null),"Require personal information to reset your password.")),n.a.createElement("p",{className:"form-text text-muted py-2"},"For extra security, this requires you to confirm your email or phone number when you reset your password.",n.a.createElement("a",{href:"#",className:"font-weight-boldk"},"Learn more"),"."),n.a.createElement("button",{type:"button",className:"btn btn-light-danger font-weight-bold btn-sm"},"Deactivate your account ?"))))))}));var b=t(26),g=t.n(b),E=(t(4),t(107),t(153),t(13));t(106);t(2);t(1241),t(1235);var h=t(49),f=t(142),v=t(279);var N=Object(v.c)(Object(i.b)(null,(function(){return{auth:p.a}}))((function(e){var a=e.intl,t=Object(l.useState)(!1),c=Object(s.a)(t,2),r=c[0],p=c[1],b=(Object(i.e)((function(e){return e.auth.user}),i.c),Object(o.g)()),g=d.b().shape({old_password:d.d().required("Current password is required"),new_password:d.d().required("New Password is required"),retype_password:d.d().required("Password confirmation is required").when("new_password",{is:function(e){return!!(e&&e.length>0)},then:d.d().oneOf([d.c("new_password")],"Password and Confirm Password didn't match")})}),E=function(e){return v.touched[e]&&v.errors[e]?"is-invalid":v.touched[e]&&!v.errors[e]?"is-valid":""},v=Object(m.b)({initialValues:{old_password:"",new_password:"",retype_password:""},validationSchema:g,onSubmit:function(e,t){t.setStatus;!function(e,t,l){p(!0),Object(f.a)(e).then((function(e){setTimeout((function(){p(!1),l(!1),v.resetForm(),h.a.showSnackbar(a.formatMessage({id:"LABEL.UPDATE_DATA_SUCCESS"}),"success")}),1e3)})).catch((function(e){var a;p(!1),l(!1),h.a.showSnackbar(null===(a=e.response)||void 0===a?void 0:a.data.messages)}))}(e,0,t.setSubmitting)}});return n.a.createElement("form",{className:"card card-custom",onSubmit:v.handleSubmit},r&&n.a.createElement(u.g,null),n.a.createElement("div",{className:"card-header py-3"},n.a.createElement("div",{className:"card-title align-items-start flex-column"},n.a.createElement("h3",{className:"card-label font-weight-bolder text-dark"},"Change Password"),n.a.createElement("span",{className:"text-muted font-weight-bold font-size-sm mt-1"},"Change your account password")),n.a.createElement("div",{className:"card-toolbar"},n.a.createElement("button",{type:"submit",className:"btn btn-success mr-2",disabled:v.isSubmitting||v.touched&&!v.isValid},"Save Changes",v.isSubmitting),n.a.createElement("button",{className:"btn btn-secondary",onClick:function(){b.goBack()},disabled:v.isSubmitting},"Cancel"))),n.a.createElement("div",{className:"form"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label text-alert"},"Current Password"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("input",Object.assign({type:"password",placeholder:"Current Password",className:"form-control form-control-lg form-control-solid mb-2 ".concat(E("old_password")),name:"old_password"},v.getFieldProps("old_password"))),v.touched.old_password&&v.errors.old_password?n.a.createElement("div",{className:"invalid-feedback"},v.errors.old_password):null)),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label text-alert"},"New Password"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("input",Object.assign({type:"password",placeholder:"New Password",className:"form-control form-control-lg form-control-solid ".concat(E("new_password")),name:"new_password"},v.getFieldProps("new_password"))),v.touched.new_password&&v.errors.new_password?n.a.createElement("div",{className:"invalid-feedback"},v.errors.new_password):null)),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label text-alert"},"Verify Password"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("input",Object.assign({type:"password",placeholder:"Verify Password",className:"form-control form-control-lg form-control-solid ".concat(E("retype_password")),name:"retype_password"},v.getFieldProps("retype_password"))),v.touched.retype_password&&v.errors.retype_password?n.a.createElement("div",{className:"invalid-feedback"},v.errors.retype_password):null)))))})));Object(i.b)(null,p.a)((function(e){var a=Object(l.useState)(!1),t=Object(s.a)(a,2),o=t[0],c=t[1],p=Object(l.useState)(""),b=Object(s.a)(p,2),g=b[0],h=b[1],f=Object(i.d)(),v=Object(i.e)((function(e){return e.auth.user}),i.c);Object(l.useEffect)((function(){v.pic&&h(v.pic)}),[v]);var N={pic:v.pic,firstname:v.firstname,lastname:v.lastname,companyName:v.companyName,phone:v.phone,email:v.email,website:v.website},w=d.b().shape({pic:d.d(),firstname:d.d().required("First name is required"),lastname:d.d().required("Last name is required"),companyName:d.d(),phone:d.d().required("Phone is required"),email:d.d().email("Wrong email format").required("Email is required"),website:d.d()}),x=function(e){return y.touched[e]&&y.errors[e]?"is-invalid":y.touched[e]&&!y.errors[e]?"is-valid":""},y=Object(m.b)({initialValues:N,validationSchema:w,onSubmit:function(a,t){t.setStatus;!function(a,t,l){c(!0);var n=Object.assign(v,a);f(e.setUser(n)),setTimeout((function(){c(!1),l(!1)}),1e3)}(a,0,t.setSubmitting)},onReset:function(e,a){(0,a.resetForm)()}});return n.a.createElement("form",{className:"card card-custom card-stretch",onSubmit:y.handleSubmit},o&&n.a.createElement(u.g,null),n.a.createElement("div",{className:"card-header py-3"},n.a.createElement("div",{className:"card-title align-items-start flex-column"},n.a.createElement("h3",{className:"card-label font-weight-bolder text-dark"},"Personal Information"),n.a.createElement("span",{className:"text-muted font-weight-bold font-size-sm mt-1"},"Update your personal informaiton")),n.a.createElement("div",{className:"card-toolbar"},n.a.createElement("button",{type:"submit",className:"btn btn-success mr-2",disabled:y.isSubmitting||y.touched&&!y.isValid},"Save Changes",y.isSubmitting),n.a.createElement(r.b,{to:"/user-profile/profile-overview",className:"btn btn-secondary"},"Cancel"))),n.a.createElement("div",{className:"form"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-xl-3"}),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("h5",{className:"font-weight-bold mb-6"},"Customer Info"))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label"},"Avatar"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("div",{className:"image-input image-input-outline",id:"kt_profile_avatar",style:{backgroundImage:"url(".concat(Object(E.d)("/media/users/blank.png"))}},n.a.createElement("div",{className:"image-input-wrapper",style:{backgroundImage:"".concat(g?"url(".concat(g,")"):"none")}}),n.a.createElement("label",{className:"btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow","data-action":"change","data-toggle":"tooltip",title:"","data-original-title":"Change avatar"},n.a.createElement("i",{className:"fa fa-pen icon-sm text-muted"}),n.a.createElement("input",{type:"file",accept:".png, .jpg, .jpeg"}),n.a.createElement("input",{type:"hidden",name:"profile_avatar_remove"})),n.a.createElement("span",{className:"btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow","data-action":"cancel","data-toggle":"tooltip",title:"","data-original-title":"Cancel avatar"},n.a.createElement("i",{className:"ki ki-bold-close icon-xs text-muted"})),n.a.createElement("span",{onClick:function(){h("")},className:"btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow","data-action":"remove","data-toggle":"tooltip",title:"","data-original-title":"Remove avatar"},n.a.createElement("i",{className:"ki ki-bold-close icon-xs text-muted"}))),n.a.createElement("span",{className:"form-text text-muted"},"Allowed file types: png, jpg, jpeg."))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label"},"First Name"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("input",Object.assign({type:"text",placeholder:"First name",className:"form-control form-control-lg form-control-solid ".concat(x("firstname")),name:"firstname"},y.getFieldProps("firstname"))),y.touched.firstname&&y.errors.firstname?n.a.createElement("div",{className:"invalid-feedback"},y.errors.firstname):null)),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label"},"Last Name"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("input",Object.assign({type:"text",placeholder:"Last name",className:"form-control form-control-lg form-control-solid ".concat(x("lastname")),name:"lastname"},y.getFieldProps("lastname"))),y.touched.lastname&&y.errors.lastname?n.a.createElement("div",{className:"invalid-feedback"},y.errors.lastname):null)),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label"},"Company Name"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("input",Object.assign({type:"text",placeholder:"Company name",className:"form-control form-control-lg form-control-solid",name:"companyName"},y.getFieldProps("companyName"))),n.a.createElement("span",{className:"form-text text-muted"},"If you want your invoices addressed to a company. Leave blank to use your full name."))),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-xl-3"}),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("h5",{className:"font-weight-bold mt-10 mb-6"},"Contact Info"))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label"},"Contact Phone"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("div",{className:"input-group input-group-lg input-group-solid"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-phone"}))),n.a.createElement("input",Object.assign({type:"text",placeholder:"+1(123)112-11-11",className:"form-control form-control-lg form-control-solid ".concat(x("phone")),name:"phone"},y.getFieldProps("phone")))),y.touched.phone&&y.errors.phone?n.a.createElement("div",{className:"invalid-feedback display-block"},y.errors.phone):null,n.a.createElement("span",{className:"form-text text-muted"},"We'll never share your phone with anyone else."))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label"},"Email Address"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("div",{className:"input-group input-group-lg input-group-solid"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},n.a.createElement("i",{className:"fa fa-at"}))),n.a.createElement("input",Object.assign({type:"email",placeholder:"Email",className:"form-control form-control-lg form-control-solid ".concat(x("email")),name:"email"},y.getFieldProps("email")))),y.touched.email&&y.errors.email?n.a.createElement("div",{className:"invalid-feedback display-block"},y.errors.email):null)),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label"},"Company Site"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("div",{className:"input-group input-group-lg input-group-solid"},n.a.createElement("input",Object.assign({type:"text",placeholder:"https://keenthemes.com",className:"form-control form-control-lg form-control-solid",name:"website"},y.getFieldProps("website")))),y.touched.website&&y.errors.website?n.a.createElement("div",{className:"invalid-feedback display-block"},y.errors.website):null)))))}));Object(i.b)(null,p.a)((function(e){var a=Object(l.useState)(!1),t=Object(s.a)(a,2),o=t[0],c=t[1],p=Object(i.d)(),b=Object(i.e)((function(e){return e.auth.user}),i.c);Object(l.useEffect)((function(){}),[b]);var g={emailNotification:b.emailSettings.emailNotification,sendCopyToPersonalEmail:b.emailSettings.sendCopyToPersonalEmail,youHaveNewNotifications:b.emailSettings.activityRelatesEmail.youHaveNewNotifications,youAreSentADirectMessage:b.emailSettings.activityRelatesEmail.youAreSentADirectMessage,someoneAddsYouAsAsAConnection:b.emailSettings.activityRelatesEmail.someoneAddsYouAsAsAConnection,uponNewOrder:b.emailSettings.activityRelatesEmail.uponNewOrder,newMembershipApproval:b.emailSettings.activityRelatesEmail.newMembershipApproval,memberRegistration:b.emailSettings.activityRelatesEmail.memberRegistration,newsAboutKeenthemesProductsAndFeatureUpdates:b.emailSettings.updatesFromKeenthemes.newsAboutKeenthemesProductsAndFeatureUpdates,tipsOnGettingMoreOutOfKeen:b.emailSettings.updatesFromKeenthemes.tipsOnGettingMoreOutOfKeen,thingsYouMissedSindeYouLastLoggedIntoKeen:b.emailSettings.updatesFromKeenthemes.thingsYouMissedSindeYouLastLoggedIntoKeen,newsAboutMetronicOnPartnerProductsAndOtherServices:b.emailSettings.updatesFromKeenthemes.newsAboutMetronicOnPartnerProductsAndOtherServices,tipsOnMetronicBusinessProducts:b.emailSettings.updatesFromKeenthemes.tipsOnMetronicBusinessProducts},E=d.b().shape({emailNotification:d.a(),sendCopyToPersonalEmail:d.a(),youHaveNewNotifications:d.a(),youAreSentADirectMessage:d.a(),someoneAddsYouAsAsAConnection:d.a(),uponNewOrder:d.a(),newMembershipApproval:d.a(),memberRegistration:d.a(),newsAboutKeenthemesProductsAndFeatureUpdates:d.a(),tipsOnGettingMoreOutOfKeen:d.a(),thingsYouMissedSindeYouLastLoggedIntoKeen:d.a(),newsAboutMetronicOnPartnerProductsAndOtherServices:d.a(),tipsOnMetronicBusinessProducts:d.a()}),h=Object(m.b)({initialValues:g,validationSchema:E,onSubmit:function(a,t){t.setStatus;!function(a,t,l){c(!0);var n=Object.assign(b,{emailSettings:{emailNotification:a.emailNotification,sendCopyToPersonalEmail:a.sendCopyToPersonalEmail,activityRelatesEmail:{youHaveNewNotifications:a.youHaveNewNotifications,youAreSentADirectMessage:a.youAreSentADirectMessage,someoneAddsYouAsAsAConnection:a.someoneAddsYouAsAsAConnection,uponNewOrder:a.uponNewOrder,newMembershipApproval:a.newMembershipApproval,memberRegistration:a.memberRegistration},updatesFromKeenthemes:{newsAboutKeenthemesProductsAndFeatureUpdates:a.newsAboutKeenthemesProductsAndFeatureUpdates,tipsOnGettingMoreOutOfKeen:a.tipsOnGettingMoreOutOfKeen,thingsYouMissedSindeYouLastLoggedIntoKeen:a.thingsYouMissedSindeYouLastLoggedIntoKeen,newsAboutMetronicOnPartnerProductsAndOtherServices:a.newsAboutMetronicOnPartnerProductsAndOtherServices,tipsOnMetronicBusinessProducts:a.tipsOnMetronicBusinessProducts}}});p(e.setUser(n)),setTimeout((function(){c(!1),l(!1)}),1e3)}(a,0,t.setSubmitting)},onReset:function(e,a){(0,a.resetForm)()}});return n.a.createElement("form",{className:"card card-custom",onSubmit:h.handleSubmit},o&&n.a.createElement(u.g,null),n.a.createElement("div",{className:"card-header py-3"},n.a.createElement("div",{className:"card-title align-items-start flex-column"},n.a.createElement("h3",{className:"card-label font-weight-bolder text-dark"},"Email Settings"),n.a.createElement("span",{className:"text-muted font-weight-bold font-size-sm mt-1"},"Change your email settings")),n.a.createElement("div",{className:"card-toolbar"},n.a.createElement("button",{type:"submit",className:"btn btn-success mr-2",disabled:h.isSubmitting||h.touched&&!h.isValid},"Save Changes",h.isSubmitting),n.a.createElement(r.b,{to:"/user-profile/profile-overview",className:"btn btn-secondary"},"Cancel"))),n.a.createElement("div",{className:"form"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-xl-3"}),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("h5",{className:"font-weight-bold mb-6"},"Setup Email Notification:"))),n.a.createElement("div",{className:"form-group row align-items-center"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label font-weight-bold text-left text-lg-right"},"Email Notification"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("span",{className:"switch switch-sm"},n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",name:"emailNotification",checked:h.values.emailNotification,onChange:h.handleChange}),n.a.createElement("span",null))))),n.a.createElement("div",{className:"form-group row align-items-center"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label font-weight-bold text-left text-lg-right"},"Send Copy To Personal Email"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("span",{className:"switch switch-sm"},n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",name:"sendCopyToPersonalEmail",checked:h.values.sendCopyToPersonalEmail,onChange:h.handleChange}),n.a.createElement("span",null))))),n.a.createElement("div",{className:"separator separator-dashed my-10"}),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-xl-3"}),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("h5",{className:"font-weight-bold mb-6"},"Activity Related Emails:"))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label font-weight-bold text-left text-lg-right"},"When To Email"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("div",{className:"checkbox-list"},n.a.createElement("label",{className:"checkbox"},n.a.createElement("input",{type:"checkbox",name:"youHaveNewNotifications",checked:h.values.youHaveNewNotifications,onChange:h.handleChange}),n.a.createElement("span",null),"You have new notifications"),n.a.createElement("label",{className:"checkbox"},n.a.createElement("input",{type:"checkbox",name:"youAreSentADirectMessage",checked:h.values.youAreSentADirectMessage,onChange:h.handleChange}),n.a.createElement("span",null),"You're sent a direct message"),n.a.createElement("label",{className:"checkbox"},n.a.createElement("input",{type:"checkbox",name:"someoneAddsYouAsAsAConnection",checked:h.values.someoneAddsYouAsAsAConnection,onChange:h.handleChange}),n.a.createElement("span",null),"Someone adds you as a connection")))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label font-weight-bold text-left text-lg-right"},"When To Escalate Emails"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("div",{className:"checkbox-list"},n.a.createElement("label",{className:"checkbox checkbox-primary"},n.a.createElement("input",{type:"checkbox",name:"uponNewOrder",checked:h.values.uponNewOrder,onChange:h.handleChange}),n.a.createElement("span",null),"Upon new order"),n.a.createElement("label",{className:"checkbox checkbox-primary"},n.a.createElement("input",{type:"checkbox",name:"newMembershipApproval",checked:h.values.newMembershipApproval,onChange:h.handleChange}),n.a.createElement("span",null),"New membership approval"),n.a.createElement("label",{className:"checkbox checkbox-primary"},n.a.createElement("input",{type:"checkbox",name:"memberRegistration",checked:h.values.memberRegistration,onChange:h.handleChange}),n.a.createElement("span",null),"Member registration")))),n.a.createElement("div",{className:"separator separator-dashed my-10"}),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-xl-3"}),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("h5",{className:"font-weight-bold mb-6"},"Updates From ROSMANTAMA:"))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label font-weight-bold text-left text-lg-right"},"Email You With"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("div",{className:"checkbox-list"},n.a.createElement("label",{className:"checkbox"},n.a.createElement("input",{type:"checkbox",name:"newsAboutKeenthemesProductsAndFeatureUpdates",checked:h.values.newsAboutKeenthemesProductsAndFeatureUpdates,onChange:h.handleChange}),n.a.createElement("span",null),"News about ROSMANTAMA products and feature updates"),n.a.createElement("label",{className:"checkbox"},n.a.createElement("input",{type:"checkbox",name:"tipsOnGettingMoreOutOfKeen",checked:h.values.tipsOnGettingMoreOutOfKeen,onChange:h.handleChange}),n.a.createElement("span",null),"Tips on getting more out of Keen"),n.a.createElement("label",{className:"checkbox"},n.a.createElement("input",{type:"checkbox",name:"thingsYouMissedSindeYouLastLoggedIntoKeen",checked:h.values.thingsYouMissedSindeYouLastLoggedIntoKeen,onChange:h.handleChange}),n.a.createElement("span",null),"Things you missed since you last logged into Keen"),n.a.createElement("label",{className:"checkbox"},n.a.createElement("input",{type:"checkbox",name:"newsAboutMetronicOnPartnerProductsAndOtherServices",checked:h.values.newsAboutMetronicOnPartnerProductsAndOtherServices,onChange:h.handleChange}),n.a.createElement("span",null),"News about Metronic on partner products and other services"),n.a.createElement("label",{className:"checkbox"},n.a.createElement("input",{type:"checkbox",name:"tipsOnMetronicBusinessProducts",checked:h.values.tipsOnMetronicBusinessProducts,onChange:h.handleChange}),n.a.createElement("span",null),"Tips on Metronic business products")))))))}));function w(){var e=Object(i.e)((function(e){return e.auth.user}),i.c);return Object(l.useEffect)((function(){return function(){}}),[e]),n.a.createElement(n.a.Fragment,null,e&&n.a.createElement("div",{className:"flex-row-auto offcanvas-mobile w-250px w-xxl-350px",id:"kt_profile_aside"},n.a.createElement("div",{className:"card card-custom card-stretch"},n.a.createElement("div",{className:"card-body pt-4"},n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{className:"symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center"},n.a.createElement("div",{className:"symbol-label",style:{backgroundImage:"url(".concat(Object(E.d)("/media/users/default.jpg"),")")}}),n.a.createElement("i",{className:"symbol-badge bg-success"})),n.a.createElement("div",null,n.a.createElement("a",{href:"#",className:"font-weight-bolder font-size-h5 text-dark-75 text-hover-primary"},e.nama),n.a.createElement("div",{className:"text-muted text-uppercase"},e.position))),n.a.createElement("div",{className:"py-9"},n.a.createElement("div",{className:"d-flex align-items-center justify-content-between mb-2"},n.a.createElement("span",{className:"font-weight-bold mr-2"},"Email:"),n.a.createElement("span",{className:"text-muted text-hover-primary"},e.email))),n.a.createElement("div",{className:"navi navi-bold navi-hover navi-active navi-link-rounded"},n.a.createElement("div",{className:"navi-item mb-2"},n.a.createElement(r.c,{to:"/".concat(e.position,"/user-profile/change-password"),className:"navi-link py-4",activeClassName:"active"},n.a.createElement("span",{className:"navi-icon mr-2"},n.a.createElement("span",{className:"svg-icon"},n.a.createElement(g.a,{src:Object(E.d)("/media/svg/icons/Communication/Shield-user.svg")})," ")),n.a.createElement("span",{className:"navi-text font-size-lg"},"Change Password"))))))))}function x(){var e=Object(c.i)(),a=Object(i.e)((function(e){return e.auth.user.position}),i.c);return e.setTitle("User profile"),n.a.createElement("div",{className:"d-flex flex-row"},n.a.createElement(w,null),n.a.createElement("div",{className:"flex-row-fluid ml-lg-8"},n.a.createElement(o.d,null,n.a.createElement(o.a,{from:"/".concat(a,"/user-profile"),exact:!0,to:"/".concat(a,"/user-profile/change-password")}),n.a.createElement(o.b,{path:"/".concat(a,"/user-profile/change-password"),component:N}))))}t.d(a,"default",(function(){return x}))}}]);
//# sourceMappingURL=35.239b2787.chunk.js.map