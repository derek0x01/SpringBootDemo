webpackJsonp([14],{"6OyX":function(e,t){},"8ZRz":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("Xxa5"),s=r.n(o),a=r("exGp"),i=r.n(a),m={name:"customerManage",data:function(){return{pageSize:8,currentPage:1,tableData:{customerId:"",customerName:"",customerSex:"",customerPhone:"",customerAddress:"",customerTime:""},total:0,customerName:"",addDialogVisible:!1,addForm:{customerName:"",customerSex:"",customerPhone:"",customerAddress:"",customerTime:""},addFormRules:{customerName:[{required:!0,message:"姓名不可为空",trigger:"blur"},{min:1,max:20,message:"姓名长度在2~20个字符之间",trigger:"blur"}],customerSex:[{required:!0,message:"性别不可为空",trigger:"blur"}],customerPhone:[{required:!0,message:"手机号不可为空",trigger:"blur"}],customerAddress:[{required:!0,message:"地址不可为空",trigger:"blur"}],customerTime:[{required:!0,message:"入住时间不可为空",trigger:"blur"}]},editDialogVisible:!1,editForm:{customerId:"",customerName:"",customerSex:"",customerPhone:"",customerAddress:"",customerTime:""},editFormRules:{customerName:[{required:!0,message:"姓名不可为空",trigger:"blur"},{min:1,max:20,message:"姓名长度在2~20个字符之间",trigger:"blur"}],customerSex:[{required:!0,message:"性别不可为空",trigger:"blur"}],customerPhone:[{required:!0,message:"手机号不可为空",trigger:"blur"}],customerAddress:[{required:!0,message:"地址不可为空",trigger:"blur"}],customerTime:[{required:!0,message:"入住时间不可为空",trigger:"blur"}]},readDialogVisible:!1,readForm:{customerId:"",customerName:"",customerSex:"",customerPhone:"",customerAddress:"",customerTime:""}}},created:function(){this.queryCustomerList()},methods:{queryCustomerList:function(){var e=this;this.$http.get("customer/queryCustomer",{params:{currentPage:this.currentPage,pageSize:this.pageSize,customerName:this.customerName}}).then(function(t){e.total=t.data.total,e.tableData=t.data.data})},handleCurrentChange:function(e){this.currentPage=e,this.queryCustomerList()},handleSearch:function(){this.currentPage=1,this.queryCustomerList()},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},addCustomer:function(){var e,t=this;this.$refs.addFormRef.validate((e=i()(s.a.mark(function e(r){var o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$http.post("customer/addCustomer",t.addForm);case 4:o=e.sent,200!==o.data.code?t.$message.error("添加用户信息失败,请检查用户信息"):(t.$message.success("添加用户信息成功"),t.addDialogVisible=!1,t.queryCustomerList());case 7:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)}))},showEditDialog:function(e){var t=this;this.editDialogVisible=!0,this.$http.get("customer/getCustomerById",{params:{customerId:e}}).then(function(e){t.editForm=e.data})},editDialogClosed:function(){this.$refs.editFormRef.resetFields()},editCustomer:function(){var e,t=this;this.$refs.editFormRef.validate((e=i()(s.a.mark(function e(r){var o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$http.post("customer/editCustomer",t.editForm);case 4:o=e.sent,200!==o.data.code?t.$message.error("修改用户信息失败,请检查用户信息"):(t.$message.success("修改用户信息成功"),t.editDialogVisible=!1,t.queryCustomerList());case 7:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)}))},removeCustomerById:function(e){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.get("customer/removeCustomerById",{params:{customerId:e}}),t.$message({type:"success",message:"删除成功!"}),t.queryCustomerList()}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},showReadDialog:function(e){var t=this;this.readDialogVisible=!0,this.$http.get("customer/getCustomerById",{params:{customerId:e}}).then(function(e){t.readForm=e.data})}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{staticClass:"el-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/main"}}},[e._v("首页")]),e._v(" "),r("el-breadcrumb-item",[e._v("住户信息管理")]),e._v(" "),r("el-breadcrumb-item",[e._v("住户管理")])],1),e._v(" "),r("el-card",{staticClass:"el-card"},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.customerName,callback:function(t){e.customerName=t},expression:"customerName"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleSearch},slot:"append"})],1)],1),e._v(" "),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加住户")])],1)],1),e._v(" "),r("el-table",{attrs:{data:e.tableData}},[r("el-table-column",{attrs:{prop:"customerId",label:"序号",width:"70"}}),e._v(" "),r("el-table-column",{attrs:{prop:"customerName",label:"住户姓名",width:"120"}}),e._v(" "),r("el-table-column",{attrs:{prop:"customerSex",label:"住户性别",width:"120"}}),e._v(" "),r("el-table-column",{attrs:{prop:"customerPhone",label:"住户电话",width:"120"}}),e._v(" "),r("el-table-column",{attrs:{prop:"customerAddress",label:"住户地址",width:"120"}}),e._v(" "),r("el-table-column",{attrs:{prop:"customerTime",label:"入住时间",width:"120"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作","min-width":"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-reading"},on:{click:function(r){return e.showReadDialog(t.row.customerId)}}},[e._v("查看")]),e._v(" "),r("el-button",{attrs:{type:"warning",icon:"el-icon-edit"},on:{click:function(r){return e.showEditDialog(t.row.customerId)}}},[e._v("修改")]),e._v(" "),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(r){return e.removeCustomerById(t.row.customerId)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":e.pageSize,layout:"total,prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),r("el-dialog",{attrs:{title:"添加住户",visible:e.addDialogVisible,width:"40%"},on:{"update:visible":function(t){e.addDialogVisible=t}}},[r("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"90px"},on:{close:e.addDialogClosed}},[r("el-form-item",{attrs:{label:"姓名",prop:"customerName"}},[r("el-input",{model:{value:e.addForm.customerName,callback:function(t){e.$set(e.addForm,"customerName",t)},expression:"addForm.customerName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"性别",prop:"customerSex"}},[r("el-input",{model:{value:e.addForm.customerSex,callback:function(t){e.$set(e.addForm,"customerSex",t)},expression:"addForm.customerSex"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"电话",prop:"customerPhone"}},[r("el-input",{model:{value:e.addForm.customerPhone,callback:function(t){e.$set(e.addForm,"customerPhone",t)},expression:"addForm.customerPhone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"住址",prop:"customerAddress"}},[r("el-input",{model:{value:e.addForm.customerAddress,callback:function(t){e.$set(e.addForm,"customerAddress",t)},expression:"addForm.customerAddress"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"入住时间",prop:"customerTime"}},[r("el-input",{model:{value:e.addForm.customerTime,callback:function(t){e.$set(e.addForm,"customerTime",t)},expression:"addForm.customerTime"}})],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.addCustomer}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"修改住户信息",visible:e.editDialogVisible,width:"40%"},on:{"update:visible":function(t){e.editDialogVisible=t}}},[r("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"90px"},on:{close:e.editDialogClosed}},[r("el-form-item",{attrs:{label:"姓名",prop:"customerName"}},[r("el-input",{model:{value:e.editForm.customerName,callback:function(t){e.$set(e.editForm,"customerName",t)},expression:"editForm.customerName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"性别",prop:"customerSex"}},[r("el-input",{model:{value:e.editForm.customerSex,callback:function(t){e.$set(e.editForm,"customerSex",t)},expression:"editForm.customerSex"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"电话",prop:"customerPhone"}},[r("el-input",{model:{value:e.editForm.customerPhone,callback:function(t){e.$set(e.editForm,"customerPhone",t)},expression:"editForm.customerPhone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"住址",prop:"customerAddress"}},[r("el-input",{model:{value:e.editForm.customerAddress,callback:function(t){e.$set(e.editForm,"customerAddress",t)},expression:"editForm.customerAddress"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"入住时间",prop:"customerTime"}},[r("el-input",{model:{value:e.editForm.customerTime,callback:function(t){e.$set(e.editForm,"customerTime",t)},expression:"editForm.customerTime"}})],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.editCustomer}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"查看",visible:e.readDialogVisible,width:"40%"},on:{"update:visible":function(t){e.readDialogVisible=t}}},[r("el-form",{ref:"editFormRef",attrs:{model:e.readForm,"label-width":"90px"}},[r("el-form-item",{attrs:{label:"姓名",prop:"customerName"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.readForm.customerName,callback:function(t){e.$set(e.readForm,"customerName",t)},expression:"readForm.customerName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"性别",prop:"customerSex"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.readForm.customerSex,callback:function(t){e.$set(e.readForm,"customerSex",t)},expression:"readForm.customerSex"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"电话",prop:"customerPhone"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.readForm.customerPhone,callback:function(t){e.$set(e.readForm,"customerPhone",t)},expression:"readForm.customerPhone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"住址",prop:"customerAddress"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.readForm.customerAddress,callback:function(t){e.$set(e.readForm,"customerAddress",t)},expression:"readForm.customerAddress"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"入住时间",prop:"customerTime"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.readForm.customerTime,callback:function(t){e.$set(e.readForm,"customerTime",t)},expression:"readForm.customerTime"}})],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.readDialogVisible=!1}}},[e._v("关  闭")])],1)],1)],1)},staticRenderFns:[]};var u=r("VU/8")(m,l,!1,function(e){r("6OyX")},"data-v-3a61163e",null);t.default=u.exports}});
//# sourceMappingURL=14.88c3b33259abbed13a14.js.map