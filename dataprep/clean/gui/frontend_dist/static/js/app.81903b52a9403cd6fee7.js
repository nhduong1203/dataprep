webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),l=n("zL8q"),o=n.n(l),c=(n("tvR6"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]});var r=n("VU/8")({name:"App"},c,!1,function(e){n("gsu9")},null,null).exports,u=n("/ocq"),i=n("mtWM"),s=n.n(i),d={name:"HeaderMenu",props:{propName:{type:String,default:""},menuText:{type:String,default:""},width:{type:Number,default:100},section:{type:Array,default:["Option 1","Option 2"]}},data:function(){return{cleanedData:{}}},methods:{handleCommand:function(e){var t=this;s.a.post("http://localhost:7680/cleanData",{clean_func:e,col:this.menuText}).then(function(e){console.log(e),t.cleanedData=e.data,t.$emit("getCleanedData",t.cleanedData)}).catch(function(e){console.log(e)})}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table-column",{attrs:{prop:e.propName,label:e.menuText,width:e.width},scopedSlots:e._u([{key:"header",fn:function(t){return[n("el-dropdown",{attrs:{trigger:"click",size:"medium "},on:{command:e.handleCommand}},[n("span",{staticStyle:{color:"#909399"}},[e._v("\n        "+e._s(e.menuText)),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.section,function(t,a){return n("el-dropdown-item",{key:a,attrs:{command:t}},[e._v("\n          "+e._s(t)+"\n        ")])}),1)],1)]}}])})},staticRenderFns:[]};var m={name:"Table",components:{HeaderMenu:n("VU/8")(d,p,!1,function(e){n("Ri6w")},"data-v-739577a6",null).exports},data:function(){return{tableData:[],tableColumns:[],cleanFunctionList:["clean_email","clean_address","clean_headers","clean_country","clean_date","clean_duplication","clean_lat_long","clean_ip","clean_phone","clean_text","clean_url","clean_df"]}},created:function(){var e=this;s.a.get("http://localhost:7680/getInitSheet").then(function(t){console.log(t),e.tableData=t.data.tableData,e.tableColumns=t.data.tableColumns}).catch(function(e){console.log(e)})},methods:{updateCleanedData:function(e){this.tableData=e.tableData,this.tableColumns=e.tableColumns}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},e._l(e.tableColumns,function(t,a){return n("header-menu",{key:a,attrs:{"prop-name":t.colName,"menu-text":t.colLabel,section:e.cleanFunctionList,width:t.colWidth},on:{getCleanedData:e.updateCleanedData}})}),1)},staticRenderFns:[]},h=n("VU/8")(m,f,!1,null,null,null).exports;a.default.use(u.a);var _=new u.a({routes:[{path:"/",name:"Table",component:h}]});a.default.config.productionTip=!1,a.default.use(o.a),new a.default({el:"#app",router:_,components:{App:r},template:"<App/>"})},Ri6w:function(e,t){},gsu9:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.81903b52a9403cd6fee7.js.map