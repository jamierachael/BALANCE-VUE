(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20741e"],{a081:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-layout",[e("v-flex",{attrs:{"justify-center":""}},[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-img",{attrs:{src:i("dd0b"),contain:"","max-height":"200px"}})],1)],1),e("pDash")],1)],1)],1)],1)},s=[],l=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-subheader",[i("div",{staticClass:"headline"},[t._v("Provider Dashboard")])])],1),i("v-row",{attrs:{dense:""}},[i("v-col",{attrs:{cols:"6"}},[i("v-card",{staticClass:"no-click",attrs:{height:"100%",width:"750px",color:"#3f51b5",dark:""}},[i("v-card-media",{staticClass:"pa-0 pb-3"}),i("v-card-title",{staticClass:"pt-0"},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" Hello Dr. "),i("br"),t._v(" "+t._s(t.firstname)+" "+t._s(t.lastname)+"! ")])],1),i("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[i("v-icon",{attrs:{size:"80px",light:""}},[t._v("mdi-medical-bag")])],1)],1)],1)],1)],1),i("v-col",{attrs:{cols:"6"}},[i("v-card",{attrs:{height:"100%",width:"750px",color:"#3fb584",dark:"",hover:"",ripple:"",to:"/providerData"}},[i("v-card-media",{staticClass:"pa-0 pb-3"}),i("v-card-title",{staticClass:"pt-0"},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-content",[i("div",{staticClass:"overline font-weight-bold mb-4"},[t._v("PROVIDER DATA")]),i("v-list-item-title",{staticClass:"headline mb-1"},[t._v("DATA")]),i("v-list-item-subtitle",[t._v("COLLECTED PATIENT DATA")])],1),i("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[i("v-icon",{attrs:{size:"80px",light:""}},[t._v("mdi-chart-bar")])],1)],1)],1)],1)],1),i("v-col",{attrs:{cols:"6"}},[i("v-card",{attrs:{height:"100%",width:"750px",color:"#b53f74",dark:"",hover:"",ripple:"",to:"/patients"}},[i("v-card-media",{staticClass:"pa-0 pb-3"}),i("v-card-title",{staticClass:"pt-0"},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-content",[i("div",{staticClass:"overline font-weight-bold mb-4"},[t._v("LIST OF PATIENTS")]),i("v-list-item-title",{staticClass:"headline mb-1"},[t._v("PATIENTS")])],1),i("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[i("v-icon",{attrs:{size:"80px",light:""}},[t._v("mdi-account-group")])],1)],1)],1)],1)],1),i("v-col",{attrs:{cols:"6"}},[i("v-card",{attrs:{height:"100%",width:"750px",color:"#b0813c",dark:"",hover:"",ripple:"",to:"/providerProfile"}},[i("v-card-media",{staticClass:"pa-0 pb-3"}),i("v-card-title",{staticClass:"pt-0"},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-content",[i("div",{staticClass:"overline font-weight-bold mb-4"},[t._v("My Account")]),i("v-list-item-title",{staticClass:"headline mb-1"},[t._v("Provider Profile")]),i("v-list-item-subtitle",[t._v("View or edit your profile here.")])],1),i("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[i("v-icon",{attrs:{size:"80px",light:""}},[t._v("mdi-account")])],1)],1)],1)],1)],1)],1)],1)],1)},r=[],n=i("7338"),c=i.n(n),o={props:{source:String},data:function(){return{firstname:null,lastname:null,physician_email:null,patients:[]}},mounted:function(){var t=this;c.a.get("/api/physicians/1").then((function(a){t.firstname=a.data.firstName,t.lastname=a.data.lastName,t.physician_email=a.data.physician_email,t.phone=a.data.phone,t.patients=a.data.Patients}))}},v=o,d=i("2877"),m=i("6544"),p=i.n(m),h=i("b0af"),u=i("99d9"),b=i("62ad"),f=i("a523"),C=i("132d"),_=i("da13"),V=i("8270"),w=i("5d23"),g=i("0fd9"),x=i("e0c7"),T=Object(d["a"])(v,l,r,!1,null,null,null),A=T.exports;p()(T,{VCard:h["a"],VCardTitle:u["c"],VCol:b["a"],VContainer:f["a"],VIcon:C["a"],VListItem:_["a"],VListItemAvatar:V["a"],VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VRow:g["a"],VSubheader:x["a"]});var I={name:"App",components:{pDash:A}},D=I,y=i("0e8f"),L=i("adda"),P=i("a722"),k=Object(d["a"])(D,e,s,!1,null,null,null);a["default"]=k.exports;p()(k,{VCol:b["a"],VContainer:f["a"],VFlex:y["a"],VImg:L["a"],VLayout:P["a"],VRow:g["a"]})}}]);
//# sourceMappingURL=chunk-2d20741e.c52eca12.js.map