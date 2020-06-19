webpackJsonp([3],{ZyY8:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t("Xxa5"),r=t.n(l),n=t("exGp"),i=t.n(n),o={name:"cleanManage",data:function(){return{pageSize:8,currentPage:1,tableData:{id:"",cleanPlace:"",cleanManager:"",cleanPerson:"",cleanTime:""},total:0,cleanManager:"",addDialogVisible:!1,addForm:{id:"",cleanPlace:"",cleanManager:"",cleanPerson:"",cleanTime:""},addFormRules:{cleanPlace:[{required:!0,message:"清洁区域不可为空",trigger:"blur"},{min:1,max:20,message:"字符长度在2~20个字符之间",trigger:"blur"}],cleanManager:[{required:!0,message:"不可为空",trigger:"blur"}],cleanPerson:[{required:!0,message:"不可为空",trigger:"blur"}],cleanTime:[{required:!0,message:"不可为空",trigger:"blur"}]},editDialogVisible:!1,editForm:{id:"",cleanPlace:"",cleanManager:"",cleanPerson:"",cleanTime:""},editFormRules:{cleanPlace:[{required:!0,message:"清洁区域不可为空",trigger:"blur"},{min:1,max:20,message:"字符长度在2~20个字符之间",trigger:"blur"}],cleanManager:[{required:!0,message:"不可为空",trigger:"blur"}],cleanPerson:[{required:!0,message:"不可为空",trigger:"blur"}],cleanTime:[{required:!0,message:"不可为空",trigger:"blur"}]},readDialogVisible:!1,readForm:{id:"",cleanPlace:"",cleanManager:"",cleanPerson:"",cleanTime:""}}},created:function(){this.queryCleanList()},methods:{queryCleanList:function(){var e=this;this.$http.get("clean/queryClean",{params:{currentPage:this.currentPage,pageSize:this.pageSize,cleanManager:this.cleanManager}}).then(function(a){e.total=a.data.total,e.tableData=a.data.data})},handleCurrentChange:function(e){this.currentPage=e,this.queryCleanList()},handleSearch:function(){this.currentPage=1,this.queryCleanList()},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},addClean:function(){var e,a=this;this.$refs.addFormRef.validate((e=i()(r.a.mark(function e(t){var l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,a.$http.post("clean/addClean",a.addForm);case 4:l=e.sent,200!==l.data.code?a.$message.error("添加信息失败,请检查信息"):(a.$message.success("添加成功"),a.addDialogVisible=!1,a.queryCleanList());case 7:case"end":return e.stop()}},e,a)})),function(a){return e.apply(this,arguments)}))},showEditDialog:function(e){var a=this;this.editDialogVisible=!0,this.$http.get("clean/getCleanById",{params:{id:e}}).then(function(e){a.editForm=e.data})},editDialogClosed:function(){this.$refs.editFormRef.resetFields()},editClean:function(){var e,a=this;this.$refs.editFormRef.validate((e=i()(r.a.mark(function e(t){var l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,a.$http.post("clean/editClean",a.editForm);case 4:l=e.sent,200!==l.data.code?a.$message.error("修改信息失败,请检查信息"):(a.$message.success("修改信息成功"),a.editDialogVisible=!1,a.queryCleanList());case 7:case"end":return e.stop()}},e,a)})),function(a){return e.apply(this,arguments)}))},removeCleanById:function(e){var a=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$http.get("clean/removeCleanById",{params:{id:e}}),a.$message({type:"success",message:"删除成功!"}),a.queryCleanList()}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},showReadDialog:function(e){var a=this;this.readDialogVisible=!0,this.$http.get("clean/getCleanById",{params:{id:e}}).then(function(e){a.readForm=e.data})}}},s={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-breadcrumb",{staticClass:"el-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/main"}}},[e._v("首页")]),e._v(" "),t("el-breadcrumb-item",[e._v("物业信息管理")]),e._v(" "),t("el-breadcrumb-item",[e._v("清洁管理")])],1),e._v(" "),t("el-card",{staticClass:"el-card"},[t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:8}},[t("el-input",{attrs:{placeholder:"请输入区域管理员名称"},model:{value:e.cleanManager,callback:function(a){e.cleanManager=a},expression:"cleanManager"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleSearch},slot:"append"})],1)],1),e._v(" "),t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.addDialogVisible=!0}}},[e._v("添加信息")])],1)],1),e._v(" "),t("el-table",{attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"id",label:"序号",width:"70"}}),e._v(" "),t("el-table-column",{attrs:{prop:"cleanPlace",label:"清洁区域",width:"160"}}),e._v(" "),t("el-table-column",{attrs:{prop:"cleanManager",label:"区域管理员",width:"140"}}),e._v(" "),t("el-table-column",{attrs:{prop:"cleanPerson",label:"清洁人员",width:"140"}}),e._v(" "),t("el-table-column",{attrs:{prop:"cleanTime",label:"清洁时间",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{label:"操作","min-width":"250"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"primary",icon:"el-icon-reading"},on:{click:function(t){return e.showReadDialog(a.row.id)}}},[e._v("查看")]),e._v(" "),t("el-button",{attrs:{type:"warning",icon:"el-icon-edit"},on:{click:function(t){return e.showEditDialog(a.row.id)}}},[e._v("修改")]),e._v(" "),t("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(t){return e.removeCleanById(a.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),t("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":e.pageSize,layout:"total,prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),t("el-dialog",{attrs:{title:"添加清洁信息",visible:e.addDialogVisible,width:"40%"},on:{"update:visible":function(a){e.addDialogVisible=a}}},[t("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"90px"},on:{close:e.addDialogClosed}},[t("el-form-item",{attrs:{label:"清洁区域",prop:"cleanPlace"}},[t("el-input",{model:{value:e.addForm.cleanPlace,callback:function(a){e.$set(e.addForm,"cleanPlace",a)},expression:"addForm.cleanPlace"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"区域管理员",prop:"cleanManager"}},[t("el-input",{model:{value:e.addForm.cleanManager,callback:function(a){e.$set(e.addForm,"cleanManager",a)},expression:"addForm.cleanManager"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"清洁人员",prop:"cleanPerson"}},[t("el-input",{model:{value:e.addForm.cleanPerson,callback:function(a){e.$set(e.addForm,"cleanPerson",a)},expression:"addForm.cleanPerson"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"清洁时间",prop:"cleanTime"}},[t("el-input",{model:{value:e.addForm.cleanTime,callback:function(a){e.$set(e.addForm,"cleanTime",a)},expression:"addForm.cleanTime"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.addDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.addClean}},[e._v("确 定")])],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"修改清洁信息",visible:e.editDialogVisible,width:"40%"},on:{"update:visible":function(a){e.editDialogVisible=a}}},[t("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"110px"},on:{close:e.editDialogClosed}},[t("el-form-item",{attrs:{label:"清洁区域",prop:"cleanPlace"}},[t("el-input",{model:{value:e.editForm.cleanPlace,callback:function(a){e.$set(e.editForm,"cleanPlace",a)},expression:"editForm.cleanPlace"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"区域管理员",prop:"cleanManager"}},[t("el-input",{model:{value:e.editForm.cleanManager,callback:function(a){e.$set(e.editForm,"cleanManager",a)},expression:"editForm.cleanManager"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"清洁人员",prop:"cleanPerson"}},[t("el-input",{model:{value:e.editForm.cleanPerson,callback:function(a){e.$set(e.editForm,"cleanPerson",a)},expression:"editForm.cleanPerson"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"清洁时间",prop:"cleanTime"}},[t("el-input",{model:{value:e.editForm.cleanTime,callback:function(a){e.$set(e.editForm,"cleanTime",a)},expression:"editForm.cleanTime"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.editDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.editClean}},[e._v("确 定")])],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"查看",visible:e.readDialogVisible,width:"40%"},on:{"update:visible":function(a){e.readDialogVisible=a}}},[t("el-form",{ref:"editFormRef",attrs:{model:e.readForm,"label-width":"110px"}},[t("el-form-item",{attrs:{label:"清洁区域",prop:"cleanPlace"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.readForm.cleanPlace,callback:function(a){e.$set(e.readForm,"cleanPlace",a)},expression:"readForm.cleanPlace"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"区域管理员",prop:"cleanManager"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.readForm.cleanManager,callback:function(a){e.$set(e.readForm,"cleanManager",a)},expression:"readForm.cleanManager"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"清洁人员",prop:"cleanPerson"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.readForm.cleanPerson,callback:function(a){e.$set(e.readForm,"cleanPerson",a)},expression:"readForm.cleanPerson"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"清洁时间",prop:"cleanTime"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.readForm.cleanTime,callback:function(a){e.$set(e.readForm,"cleanTime",a)},expression:"readForm.cleanTime"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.readDialogVisible=!1}}},[e._v("关  闭")])],1)],1)],1)},staticRenderFns:[]};var c=t("VU/8")(o,s,!1,function(e){t("vsrh")},"data-v-cbf89f3e",null);a.default=c.exports},vsrh:function(e,a){}});
//# sourceMappingURL=3.a331f2f591bdca5a51bf.js.map