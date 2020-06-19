webpackJsonp([6],{"Rc/F":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Xxa5"),r=i.n(a),o=i("exGp"),d=i.n(o),l={name:"deviceManageTwo",data:function(){return{pageSize:8,currentPage:1,tableData:{id:"",deviceNumber:"",deviceName:"",devicePlace:"",deviceTime:"",deviceCost:""},total:0,deviceName:"",addDialogVisible:!1,addForm:{id:"",deviceNumber:"",deviceName:"",devicePlace:"",deviceTime:"",deviceCost:""},addFormRules:{deviceNumber:[{required:!0,message:"设备编号不可为空",trigger:"blur"},{min:1,max:20,message:"设备编号长度在2~20个字符之间",trigger:"blur"}],deviceName:[{required:!0,message:"设备名称不可为空",trigger:"blur"}],devicePlace:[{required:!0,message:"设备地址不可为空",trigger:"blur"}],deviceTime:[{required:!0,message:"购买时间不可为空",trigger:"blur"}],deviceCost:[{required:!0,message:"设备花费不可为空",trigger:"blur"}]},editDialogVisible:!1,editForm:{id:"",deviceNumber:"",deviceName:"",devicePlace:"",deviceTime:"",deviceCost:""},editFormRules:{deviceNumber:[{required:!0,message:"设备编号不可为空",trigger:"blur"},{min:1,max:20,message:"设备编号长度在2~20个字符之间",trigger:"blur"}],deviceName:[{required:!0,message:"设备名称不可为空",trigger:"blur"}],devicePlace:[{required:!0,message:"设备地址不可为空",trigger:"blur"}],deviceTime:[{required:!0,message:"购买时间不可为空",trigger:"blur"}],deviceCost:[{required:!0,message:"设备花费不可为空",trigger:"blur"}]},readDialogVisible:!1,readForm:{id:"",deviceNumber:"",deviceName:"",devicePlace:"",deviceTime:"",deviceCost:""}}},created:function(){this.queryDeviceList()},methods:{queryDeviceList:function(){var e=this;this.$http.get("device/queryDevice",{params:{currentPage:this.currentPage,pageSize:this.pageSize,deviceName:this.deviceName}}).then(function(t){e.total=t.data.total,e.tableData=t.data.data})},handleCurrentChange:function(e){this.currentPage=e,this.queryDeviceList()},handleSearch:function(){this.currentPage=1,this.queryDeviceList()},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},addDevice:function(){var e,t=this;this.$refs.addFormRef.validate((e=d()(r.a.mark(function e(i){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$http.post("device/addDevice",t.addForm);case 4:a=e.sent,200!==a.data.code?t.$message.error("添加设备信息失败,请检查设备信息"):(t.$message.success("添加设备信息成功"),t.addDialogVisible=!1,t.queryDeviceList());case 7:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)}))},showEditDialog:function(e){var t=this;this.editDialogVisible=!0,this.$http.get("device/getDeviceById",{params:{id:e}}).then(function(e){t.editForm=e.data})},editDialogClosed:function(){this.$refs.editFormRef.resetFields()},editDevice:function(){var e,t=this;this.$refs.editFormRef.validate((e=d()(r.a.mark(function e(i){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$http.post("device/editDevice",t.editForm);case 4:a=e.sent,200!==a.data.code?t.$message.error("修改设备信息失败,请检查设备信息"):(t.$message.success("修改设备信息成功"),t.editDialogVisible=!1,t.queryDeviceList());case 7:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)}))},removeDeviceById:function(e){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.get("device/removeDeviceById",{params:{id:e}}),t.$message({type:"success",message:"删除成功!"}),t.queryDeviceList()}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},showReadDialog:function(e){var t=this;this.readDialogVisible=!0,this.$http.get("device/getDeviceById",{params:{id:e}}).then(function(e){t.readForm=e.data})}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-breadcrumb",{staticClass:"el-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/mainTwo"}}},[e._v("首页")]),e._v(" "),i("el-breadcrumb-item",[e._v("物业信息管理")]),e._v(" "),i("el-breadcrumb-item",[e._v("设备管理")])],1),e._v(" "),i("el-card",{staticClass:"el-card"},[i("el-row",{attrs:{gutter:10}},[i("el-col",{attrs:{span:8}},[i("el-input",{attrs:{placeholder:"请输入设备名称"},model:{value:e.deviceName,callback:function(t){e.deviceName=t},expression:"deviceName"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleSearch},slot:"append"})],1)],1),e._v(" "),i("el-col",{attrs:{span:4}},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加车位")])],1)],1),e._v(" "),i("el-table",{attrs:{data:e.tableData}},[i("el-table-column",{attrs:{prop:"id",label:"序号",width:"70"}}),e._v(" "),i("el-table-column",{attrs:{prop:"deviceNumber",label:"设备编号",width:"120"}}),e._v(" "),i("el-table-column",{attrs:{prop:"deviceName",label:"设备名称",width:"140"}}),e._v(" "),i("el-table-column",{attrs:{prop:"devicePlace",label:"设备地址",width:"140"}}),e._v(" "),i("el-table-column",{attrs:{prop:"deviceTime",label:"购买时间",width:"120"}}),e._v(" "),i("el-table-column",{attrs:{prop:"deviceCost",label:"设备花费",width:"120"}}),e._v(" "),i("el-table-column",{attrs:{label:"操作","min-width":"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"primary",icon:"el-icon-reading"},on:{click:function(i){return e.showReadDialog(t.row.id)}}},[e._v("查看")]),e._v(" "),i("el-button",{attrs:{type:"warning",icon:"el-icon-edit"},on:{click:function(i){return e.showEditDialog(t.row.id)}}},[e._v("修改")]),e._v(" "),i("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(i){return e.removeDeviceById(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),i("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":e.pageSize,layout:"total,prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),i("el-dialog",{attrs:{title:"添加设备",visible:e.addDialogVisible,width:"40%"},on:{"update:visible":function(t){e.addDialogVisible=t}}},[i("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"90px"},on:{close:e.addDialogClosed}},[i("el-form-item",{attrs:{label:"设备编号",prop:"deviceNumber"}},[i("el-input",{model:{value:e.addForm.deviceNumber,callback:function(t){e.$set(e.addForm,"deviceNumber",t)},expression:"addForm.deviceNumber"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"设备名称",prop:"deviceName"}},[i("el-input",{model:{value:e.addForm.deviceName,callback:function(t){e.$set(e.addForm,"deviceName",t)},expression:"addForm.deviceName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"设备地址",prop:"devicePlace"}},[i("el-input",{model:{value:e.addForm.devicePlace,callback:function(t){e.$set(e.addForm,"devicePlace",t)},expression:"addForm.devicePlace"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"购买时间",prop:"deviceTime"}},[i("el-input",{model:{value:e.addForm.deviceTime,callback:function(t){e.$set(e.addForm,"deviceTime",t)},expression:"addForm.deviceTime"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"设备花费",prop:"deviceCost"}},[i("el-input",{model:{value:e.addForm.deviceCost,callback:function(t){e.$set(e.addForm,"deviceCost",t)},expression:"addForm.deviceCost"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.addDevice}},[e._v("确 定")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"修改设备信息",visible:e.editDialogVisible,width:"40%"},on:{"update:visible":function(t){e.editDialogVisible=t}}},[i("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"90px"},on:{close:e.editDialogClosed}},[i("el-form-item",{attrs:{label:"设备编号",prop:"deviceNumber"}},[i("el-input",{model:{value:e.editForm.deviceNumber,callback:function(t){e.$set(e.editForm,"deviceNumber",t)},expression:"editForm.deviceNumber"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"设备名称",prop:"deviceName"}},[i("el-input",{model:{value:e.editForm.deviceName,callback:function(t){e.$set(e.editForm,"deviceName",t)},expression:"editForm.deviceName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"设备地址",prop:"devicePlace"}},[i("el-input",{model:{value:e.editForm.devicePlace,callback:function(t){e.$set(e.editForm,"devicePlace",t)},expression:"editForm.devicePlace"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"购买时间",prop:"deviceTime"}},[i("el-input",{model:{value:e.editForm.deviceTime,callback:function(t){e.$set(e.editForm,"deviceTime",t)},expression:"editForm.deviceTime"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"设备花费",prop:"deviceCost"}},[i("el-input",{model:{value:e.editForm.deviceCost,callback:function(t){e.$set(e.editForm,"deviceCost",t)},expression:"editForm.deviceCost"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.editDevice}},[e._v("确 定")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"查看",visible:e.readDialogVisible,width:"40%"},on:{"update:visible":function(t){e.readDialogVisible=t}}},[i("el-form",{ref:"readFormRef",attrs:{model:e.readForm,"label-width":"90px"}},[i("el-form-item",{attrs:{label:"设备编号",prop:"deviceNumber"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.readForm.deviceNumber,callback:function(t){e.$set(e.readForm,"deviceNumber",t)},expression:"readForm.deviceNumber"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"设备名称",prop:"deviceName"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.readForm.deviceName,callback:function(t){e.$set(e.readForm,"deviceName",t)},expression:"readForm.deviceName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"设备地址",prop:"devicePlace"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.readForm.devicePlace,callback:function(t){e.$set(e.readForm,"devicePlace",t)},expression:"readForm.devicePlace"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"购买时间",prop:"deviceTime"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.readForm.deviceTime,callback:function(t){e.$set(e.readForm,"deviceTime",t)},expression:"readForm.deviceTime"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"设备花费",prop:"deviceCost"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.readForm.deviceCost,callback:function(t){e.$set(e.readForm,"deviceCost",t)},expression:"readForm.deviceCost"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.readDialogVisible=!1}}},[e._v("关  闭")])],1)],1)],1)},staticRenderFns:[]};var s=i("VU/8")(l,c,!1,function(e){i("unB1")},"data-v-6c5e72b1",null);t.default=s.exports},unB1:function(e,t){}});
//# sourceMappingURL=6.787a6408834e1b7d7ed7.js.map