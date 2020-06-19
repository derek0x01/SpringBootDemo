webpackJsonp([13],{Fedl:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t("Xxa5"),i=t.n(a),l=t("exGp"),o=t.n(l),s={name:"repairManageTwo",data:function(){return{pageSize:8,currentPage:1,tableData:{id:"",repairNumber:"",repairEvent:"",repairAddress:"",repairState:"",repairTime:""},total:0,repairNumber:"",addDialogVisible:!1,addForm:{id:"",repairNumber:"",repairEvent:"",repairAddress:"",repairState:"",repairTime:""},addFormRules:{repairNumber:[{required:!0,message:"维修编号不可为空",trigger:"blur"},{min:1,max:20,message:"设备编号长度在2~20个字符之间",trigger:"blur"}],repairEvent:[{required:!0,message:"维修事件不可为空",trigger:"blur"}],repairAddress:[{required:!0,message:"维修地点不可为空",trigger:"blur"}],repairState:[{required:!0,message:"维修状态不可为空",trigger:"blur"}],repairTime:[{required:!0,message:"报修时间不可为空",trigger:"blur"}]},editDialogVisible:!1,editForm:{id:"",repairNumber:"",repairEvent:"",repairAddress:"",repairState:"",repairTime:""},editFormRules:{repairNumber:[{required:!0,message:"维修编号不可为空",trigger:"blur"},{min:1,max:20,message:"设备编号长度在2~20个字符之间",trigger:"blur"}],repairEvent:[{required:!0,message:"维修事件不可为空",trigger:"blur"}],repairAddress:[{required:!0,message:"维修地点不可为空",trigger:"blur"}],repairState:[{required:!0,message:"维修状态不可为空",trigger:"blur"}],repairTime:[{required:!0,message:"报修时间不可为空",trigger:"blur"}]},readDialogVisible:!1,readForm:{id:"",repairNumber:"",repairEvent:"",repairAddress:"",repairState:"",repairTime:""}}},created:function(){this.queryRepairList()},methods:{queryRepairList:function(){var e=this;this.$http.get("repair/queryRepair",{params:{currentPage:this.currentPage,pageSize:this.pageSize,repairNumber:this.repairNumber}}).then(function(r){e.total=r.data.total,e.tableData=r.data.data})},handleCurrentChange:function(e){this.currentPage=e,this.queryRepairList()},handleSearch:function(){this.currentPage=1,this.queryRepairList()},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},addRepair:function(){var e,r=this;this.$refs.addFormRef.validate((e=o()(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.$http.post("repair/addRepair",r.addForm);case 4:a=e.sent,200!==a.data.code?r.$message.error("添加维修信息失败,请检查维修信息"):(r.$message.success("添加维修信息成功"),r.addDialogVisible=!1,r.queryRepairList());case 7:case"end":return e.stop()}},e,r)})),function(r){return e.apply(this,arguments)}))},showEditDialog:function(e){var r=this;this.editDialogVisible=!0,this.$http.get("repair/getRepairById",{params:{id:e}}).then(function(e){r.editForm=e.data})},editDialogClosed:function(){this.$refs.editFormRef.resetFields()},editRepair:function(){var e,r=this;this.$refs.editFormRef.validate((e=o()(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.$http.post("repair/editRepair",r.editForm);case 4:a=e.sent,200!==a.data.code?r.$message.error("修改维修信息失败,请检查维修信息"):(r.$message.success("修改维修信息成功"),r.editDialogVisible=!1,r.queryRepairList());case 7:case"end":return e.stop()}},e,r)})),function(r){return e.apply(this,arguments)}))},removeRepairById:function(e){var r=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.$http.get("repair/removeRepairById",{params:{id:e}}),r.$message({type:"success",message:"删除成功!"}),r.queryRepairList()}).catch(function(){r.$message({type:"info",message:"已取消删除"})})},showReadDialog:function(e){var r=this;this.readDialogVisible=!0,this.$http.get("repair/getRepairById",{params:{id:e}}).then(function(e){r.readForm=e.data})}}},d={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("el-breadcrumb",{staticClass:"el-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/mainTwo"}}},[e._v("首页")]),e._v(" "),t("el-breadcrumb-item",[e._v("物业信息管理")]),e._v(" "),t("el-breadcrumb-item",[e._v("维修管理")])],1),e._v(" "),t("el-card",{staticClass:"el-card"},[t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:8}},[t("el-input",{attrs:{placeholder:"请输入维修事件编号"},model:{value:e.repairNumber,callback:function(r){e.repairNumber=r},expression:"repairNumber"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleSearch},slot:"append"})],1)],1),e._v(" "),t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.addDialogVisible=!0}}},[e._v("添加维修")])],1)],1),e._v(" "),t("el-table",{attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"id",label:"序号",width:"70"}}),e._v(" "),t("el-table-column",{attrs:{prop:"repairNumber",label:"维修编号",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"repairEvent",label:"维修事件",width:"140"}}),e._v(" "),t("el-table-column",{attrs:{prop:"repairAddress",label:"维修地点",width:"140"}}),e._v(" "),t("el-table-column",{attrs:{prop:"repairState",label:"维修状态",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"repairTime",label:"报修时间",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{label:"操作","min-width":"250"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-button",{attrs:{type:"primary",icon:"el-icon-reading"},on:{click:function(t){return e.showReadDialog(r.row.id)}}},[e._v("查看")]),e._v(" "),t("el-button",{attrs:{type:"warning",icon:"el-icon-edit"},on:{click:function(t){return e.showEditDialog(r.row.id)}}},[e._v("修改")]),e._v(" "),t("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(t){return e.removeRepairById(r.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),t("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":e.pageSize,layout:"total,prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),t("el-dialog",{attrs:{title:"添加信息",visible:e.addDialogVisible,width:"40%"},on:{"update:visible":function(r){e.addDialogVisible=r}}},[t("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"90px"},on:{close:e.addDialogClosed}},[t("el-form-item",{attrs:{label:"维修编号",prop:"repairNumber"}},[t("el-input",{model:{value:e.addForm.repairNumber,callback:function(r){e.$set(e.addForm,"repairNumber",r)},expression:"addForm.repairNumber"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"维修事件",prop:"repairEvent"}},[t("el-input",{model:{value:e.addForm.repairEvent,callback:function(r){e.$set(e.addForm,"repairEvent",r)},expression:"addForm.repairEvent"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"维修地点",prop:"repairAddress"}},[t("el-input",{model:{value:e.addForm.repairAddress,callback:function(r){e.$set(e.addForm,"repairAddress",r)},expression:"addForm.repairAddress"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"维修状态",prop:"repairState"}},[t("el-input",{model:{value:e.addForm.repairState,callback:function(r){e.$set(e.addForm,"repairState",r)},expression:"addForm.repairState"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"报修时间",prop:"repairTime"}},[t("el-input",{model:{value:e.addForm.repairTime,callback:function(r){e.$set(e.addForm,"repairTime",r)},expression:"addForm.repairTime"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(r){e.addDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.addRepair}},[e._v("确 定")])],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"修改维修信息",visible:e.editDialogVisible,width:"40%"},on:{"update:visible":function(r){e.editDialogVisible=r}}},[t("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"90px"},on:{close:e.editDialogClosed}},[t("el-form-item",{attrs:{label:"维修编号",prop:"repairNumber"}},[t("el-input",{model:{value:e.editForm.repairNumber,callback:function(r){e.$set(e.editForm,"repairNumber",r)},expression:"editForm.repairNumber"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"维修事件",prop:"repairEvent"}},[t("el-input",{model:{value:e.editForm.repairEvent,callback:function(r){e.$set(e.editForm,"repairEvent",r)},expression:"editForm.repairEvent"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"维修地点",prop:"repairAddress"}},[t("el-input",{model:{value:e.editForm.repairAddress,callback:function(r){e.$set(e.editForm,"repairAddress",r)},expression:"editForm.repairAddress"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"维修状态",prop:"repairState"}},[t("el-input",{model:{value:e.editForm.repairState,callback:function(r){e.$set(e.editForm,"repairState",r)},expression:"editForm.repairState"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"报修时间",prop:"repairTime"}},[t("el-input",{model:{value:e.editForm.repairTime,callback:function(r){e.$set(e.editForm,"repairTime",r)},expression:"editForm.repairTime"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(r){e.editDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.editRepair}},[e._v("确 定")])],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"查看",visible:e.readDialogVisible,width:"40%"},on:{"update:visible":function(r){e.readDialogVisible=r}}},[t("el-form",{ref:"editFormRef",attrs:{model:e.readForm,"label-width":"90px"}},[t("el-form-item",{attrs:{label:"维修编号",prop:"repairNumber"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.readForm.repairNumber,callback:function(r){e.$set(e.readForm,"repairNumber",r)},expression:"readForm.repairNumber"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"维修事件",prop:"repairEvent"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.readForm.repairEvent,callback:function(r){e.$set(e.readForm,"repairEvent",r)},expression:"readForm.repairEvent"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"维修地点",prop:"repairAddress"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.readForm.repairAddress,callback:function(r){e.$set(e.readForm,"repairAddress",r)},expression:"readForm.repairAddress"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"维修状态",prop:"repairState"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.readForm.repairState,callback:function(r){e.$set(e.readForm,"repairState",r)},expression:"readForm.repairState"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"报修时间",prop:"repairTime"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.readForm.repairTime,callback:function(r){e.$set(e.readForm,"repairTime",r)},expression:"readForm.repairTime"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.readDialogVisible=!1}}},[e._v("关  闭")])],1)],1)],1)},staticRenderFns:[]};var n=t("VU/8")(s,d,!1,function(e){t("olHI")},"data-v-4044d206",null);r.default=n.exports},olHI:function(e,r){}});
//# sourceMappingURL=13.89bf81b2b202cc4d1e4e.js.map