(function(e){function t(t){for(var r,s,n=t[0],l=t[1],c=t[2],u=0,d=[];u<n.length;u++)s=n[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,s=1;s<a.length;s++){var n=a[s];0!==o[n]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},s={app:0},o={app:0},i=[];function n(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"cca62fc8"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={about:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"f5396cb8"}[e]+".css",o=l.p+r,i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var c=i[n],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(n=0;n<d.length;n++){c=d[n],u=c.getAttribute("data-href");if(u===r||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete s[e],f.parentNode.removeChild(f),a(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){s[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,a){r=o[e]=[t,a]}));t.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=n(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,a[1](d)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1ff3":function(e,t,a){"use strict";var r=a("513d"),s=a.n(r);s.a},"4a3a":function(e,t,a){},"513d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view")],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[a("h1",[e._v("User List")]),a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("All Users")]),e._v(" |\n    "),a("router-link",{attrs:{to:"/favorite"}},[e._v("Favorite Users")])],1)])},n=[],l={name:"Header"},c=l,u=(a("c7b5"),a("2877")),d=Object(u["a"])(c,i,n,!1,null,"242cc7ad",null),f=d.exports,m={name:"App",components:{Header:f},data:()=>({})},v=m,p=Object(u["a"])(v,s,o,!1,null,null,null),h=p.exports,b=a("8c4f"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("AddUser",{staticClass:"adding"}),a("Users",{attrs:{users:e.users}})],1)},x=[],N=a("dbef"),_=a("8aef"),y={name:"AllUsers",components:{Users:N["a"],AddUser:_["a"]},computed:{users(){return this.$store.state.users}},mounted(){this.$store.dispatch("getAllUsers")}},U=y,k=(a("1ff3"),Object(u["a"])(U,g,x,!1,null,null,null)),w=k.exports;r["a"].use(b["a"]);var C=new b["a"]({routes:[{path:"/",name:"allUsers",component:w},{path:"/favorite",name:"favorite",component:()=>a.e("about").then(a.bind(null,"a09f"))}]}),P=a("2f62"),F=a("bc3a"),V=a.n(F);r["a"].use(P["a"]);var A=new P["a"].Store({state:{users:[],favoriteUsers:[]},mutations:{set:(e,t)=>{e.users=t},push:(e,t)=>{e.users=[...e.users,t]},delete:(e,t)=>{e.users=e.users.filter(e=>e._id!==t)},setFavorite:(e,t,a)=>{e.users=e.users.map(e=>{return e._id===t&&(e.favorite=a),e})},setFavoriteUsers:(e,t)=>{e.favoriteUsers=t.filter(e=>!0===e.favorite)},updateUser:(e,t)=>{e.users=e.users.map(e=>{e._id===t.id&&(e.firstName=t.firstName,e.lastName=t.lastName,e.phoneNumber=t.phoneNumber)})}},actions:{async getAllUsers(){let{data:e}=await V.a.get("http://localhost:3000/api/users");this.commit("set",e)},async getFavoriteUsers(){let{data:e}=await V.a.get("http://localhost:3000/api/users");this.commit("setFavoriteUsers",e)},async createUser({commit:e},t){let{data:a}=await V.a.post("http://localhost:3000/api/users",t);this.commit("push",a)},async deleteUser({commit:e},t){await V.a.post("http://localhost:3000/api/delete-user",{id:t}),this.commit("delete",t)},async setFavorite({commit:e},t){await V.a.post("http://localhost:3000/api/set-favorite",{id:t.id,favorite:t.favorite}),await this.commit("setFavorite",t.id,t.favorite),await this.commit("setFavoriteUsers",this.state.users)},async editUser({commit:e},t){await V.a.post("http://localhost:3000/api/edit-user",t),await this.commit("updateUser",t)}}}),j=a("f309"),O=a("fcf4");a("bf40");r["a"].use(j["a"]);var E=new j["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:O["a"].red.darken4,secondary:O["a"].red.lighten4,accent:O["a"].indigo.base}}}});r["a"].config.productionTip=!1,new r["a"]({router:C,store:A,vuetify:E,render:e=>e(h)}).$mount("#app")},"6ac4":function(e,t,a){"use strict";var r=a("4a3a"),s=a.n(r);s.a},"6d18":function(e,t,a){},"7e5b":function(e,t,a){"use strict";var r=a("d167"),s=a.n(r);s.a},"8aef":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"showModal"},[a("v-btn",{attrs:{color:"primary",justify:"center",dark:""},on:{click:function(t){e.dialog=!0}}},[e._v("\n        Add User\n    ")])],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[e._v("\n        Adding User\n      ")]),a("v-col",{staticClass:"inputblock",attrs:{cols:"12",md:"4"}},[a("v-form",{ref:"form"},[a("v-text-field",{attrs:{label:"First name"},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1),a("v-form",{ref:"form"},[a("v-text-field",{attrs:{label:"Last name"},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1),a("v-form",{ref:"form"},[a("v-text-field",{attrs:{label:"Number phone"},model:{value:e.numberPhone,callback:function(t){e.numberPhone=t},expression:"numberPhone"}})],1)],1),a("v-container",{attrs:{fluid:""}},[a("v-checkbox",{attrs:{label:"Favorite User: "+(e.favorite?"Yes":"No")},model:{value:e.favorite,callback:function(t){e.favorite=t},expression:"favorite"}})],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",text:""},on:{click:e.close}},[e._v("\n          Close\n        ")]),a("v-btn",{attrs:{color:"primary",text:""},on:{click:e.add}},[e._v("\n          Add\n        ")])],1)],1)],1)],1)},s=[],o={name:"AddUser",data(){return{dialog:!1,firstName:"",lastName:"",numberPhone:"",favorite:!1}},methods:{close(){this.dialog=!1},add(){this.dialog=!1,this.$store.dispatch("createUser",{firstName:this.firstName,lastName:this.lastName,numberPhone:this.numberPhone,favorite:this.favorite})}}},i=o,n=(a("7e5b"),a("2877")),l=a("6544"),c=a.n(l),u=a("8336"),d=a("b0af"),f=a("99d9"),m=a("ac7c"),v=a("62ad"),p=a("a523"),h=a("169a"),b=a("4bd4"),g=a("8654"),x=Object(n["a"])(i,r,s,!1,null,"a75fdac8",null);t["a"]=x.exports;c()(x,{VBtn:u["a"],VCard:d["a"],VCardActions:f["a"],VCardTitle:f["c"],VCheckbox:m["a"],VCol:v["a"],VContainer:p["a"],VDialog:h["a"],VForm:b["a"],VTextField:g["a"]})},b5cd:function(e,t,a){"use strict";var r=a("6d18"),s=a.n(r);s.a},b950:function(e,t,a){},c7b5:function(e,t,a){"use strict";var r=a("b950"),s=a.n(r);s.a},d167:function(e,t,a){},dbef:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},e._l(e.users,(function(e){return a("div",{key:e.id,staticClass:"sameitem"},[a("UserItem",{attrs:{user:e}})],1)})),0)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-user"},[a("v-card",{staticClass:"user-item",attrs:{"max-width":"344"}},[a("v-card-title",[e._v("First Name: "+e._s(e.firstName))]),a("v-card-text",[e._v("Last Name: "+e._s(e.lastName))]),a("v-card-text",[e._v("Number Phone: "+e._s(e.lastName))]),a("v-container",{attrs:{fluid:""}},[a("v-checkbox",{attrs:{label:"Favorite User: "+(e.favorite?"Yes":"No")},on:{click:function(t){return e.setFavorite(e.user._id,!e.favorite)}},model:{value:e.favorite,callback:function(t){e.favorite=t},expression:"favorite"}})],1),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:function(t){e.dialog=!0}}},[e._v("Edit")]),a("v-btn",{attrs:{text:""},on:{click:function(t){return e.delUser(e.user._id)}}},[e._v("Delete")])],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[e._v("\n          Adding User\n        ")]),a("v-col",{staticClass:"inputblock",attrs:{cols:"12",md:"4"}},[a("v-form",{ref:"form"},[a("v-text-field",{attrs:{label:"First name"},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1),a("v-form",{ref:"form"},[a("v-text-field",{attrs:{label:"Last name"},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1),a("v-form",{ref:"form"},[a("v-text-field",{attrs:{label:"Number phone"},model:{value:e.numberPhone,callback:function(t){e.numberPhone=t},expression:"numberPhone"}})],1)],1),a("v-container",{attrs:{fluid:""}},[a("v-checkbox",{attrs:{label:"Favorite User: "+(e.favorite?"Yes":"No")},model:{value:e.favorite,callback:function(t){e.favorite=t},expression:"favorite"}})],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n            Close\n          ")]),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.editUser(e.user._id)}}},[e._v("\n            Edit\n          ")])],1)],1)],1)],1)},i=[],n={name:"UserItem",props:["user"],data(){return{favorite:!1,firstName:"",lastName:"",numberPhone:"",dialog:!1}},mounted(){this.favorite=this.$props.user.favorite,this.firstName=this.$props.user.firstName,this.lastName=this.$props.user.lastName,this.numberPhone=this.$props.user.numberPhone},methods:{markComplete(){this.user.favorite=!this.user.favorite},delUser(e){this.$store.dispatch("deleteUser",e)},async setFavorite(e,t){await this.$store.dispatch("setFavorite",{id:e,favorite:t}),this.favorite=t},async editUser(e){this.dialog=!1,await this.$store.dispatch("editUser",{id:e,favorite:this.favorite,firstName:this.firstName,lastName:this.lastName,numberPhone:this.numberPhone})}}},l=n,c=(a("6ac4"),a("2877")),u=a("6544"),d=a.n(u),f=a("8336"),m=a("b0af"),v=a("99d9"),p=a("ac7c"),h=a("62ad"),b=a("a523"),g=a("169a"),x=a("4bd4"),N=a("8654"),_=Object(c["a"])(l,o,i,!1,null,"b51e6202",null),y=_.exports;d()(_,{VBtn:f["a"],VCard:m["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCheckbox:p["a"],VCol:h["a"],VContainer:b["a"],VDialog:g["a"],VForm:x["a"],VTextField:N["a"]});var U={name:"Users",components:{UserItem:y},props:["users"]},k=U,w=(a("b5cd"),Object(c["a"])(k,r,s,!1,null,"54aa5c82",null));t["a"]=w.exports}});
//# sourceMappingURL=app.7f4ff187.js.map