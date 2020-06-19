webpackJsonp([20],{Qr6q:function(e,r){},yxeN:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t("Xxa5"),s=t.n(a),i=t("exGp"),o=t.n(i),l={name:"userManage",data:function(){return{pageSize:8,currentPage:1,tableData:{id:"",userName:"",userPassword:"",userSex:"",userPhone:"",userEmail:""},total:0,userName:"",addDialogVisible:!1,addForm:{id:"",userName:"",userPassword:"",userSex:"",userPhone:"",userEmail:""},addFormRules:{userName:[{required:!0,message:"不可为空",trigger:"blur"},{min:1,max:20,message:"字符长度在2~20个字符之间",trigger:"blur"}],userPassword:[{required:!0,message:"不可为空",trigger:"blur"}],userSex:[{required:!0,message:"不可为空",trigger:"blur"}],userPhone:[{required:!0,message:"不可为空",trigger:"blur"}],userEmail:[{required:!0,message:"不可为空",trigger:"blur"}]},editDialogVisible:!1,editForm:{id:"",userName:"",userPassword:"",userSex:"",userPhone:"",userEmail:""},editFormRules:{userName:[{required:!0,message:"不可为空",trigger:"blur"},{min:1,max:20,message:"字符长度在2~20个字符之间",trigger:"blur"}],userPassword:[{required:!0,message:"不可为空",trigger:"blur"}],userSex:[{required:!0,message:"不可为空",trigger:"blur"}],userPhone:[{required:!0,message:"不可为空",trigger:"blur"}],userEmail:[{required:!0,message:"不可为空",trigger:"blur"}]},readDialogVisible:!1,readForm:{id:"",userName:"",userPassword:"",userSex:"",userPhone:"",userEmail:""}}},created:function(){this.queryUserList()},methods:{queryUserList:function(){var e=this;this.$http.get("user/queryUser",{params:{currentPage:this.currentPage,pageSize:this.pageSize,userName:this.userName}}).then(function(r){e.total=r.data.total,e.tableData=r.data.data})},handleCurrentChange:function(e){this.currentPage=e,this.queryUserList()},handleSearch:function(){this.currentPage=1,this.queryUserList()},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},addUser:function(){var e,r=this;this.$refs.addFormRef.validate((e=o()(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.$http.post("user/addUser",r.addForm);case 4:a=e.sent,200!==a.data.code?r.$message.error("添加信息失败,请检查信息"):(r.$message.success("添加成功"),r.addDialogVisible=!1,r.queryUserList());case 7:case"end":return e.stop()}},e,r)})),function(r){return e.apply(this,arguments)}))},showEditDialog:function(e){var r=this;this.editDialogVisible=!0,this.$http.get("user/getUserById",{params:{id:e}}).then(function(e){r.editForm=e.data})},editDialogClosed:function(){this.$refs.editFormRef.resetFields()},editUser:function(){var e,r=this;this.$refs.editFormRef.validate((e=o()(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.$http.post("user/editUser",r.editForm);case 4:a=e.sent,200!==a.data.code?r.$message.error("修改信息失败,请检查信息"):(r.$message.success("修改信息成功"),r.editDialogVisible=!1,r.queryUserList());case 7:case"end":return e.stop()}},e,r)})),function(r){return e.apply(this,arguments)}))},removeUserById:function(e){var r=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.$http.get("user/removeUserById",{params:{id:e}}),r.queryUserList(),r.$message({type:"success",message:"删除成功!"})}).catch(function(){r.$message({type:"info",message:"已取消删除"})})},showReadDialog:function(e){var r=this;this.readDialogVisible=!0,this.$http.get("user/getUserById",{params:{id:e}}).then(function(e){r.readForm=e.data})}}},u={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("el-breadcrumb",{staticClass:"el-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/main"}}},[e._v("首页")]),e._v(" "),t("el-breadcrumb-item",[e._v("重要信息管理")]),e._v(" "),t("el-breadcrumb-item",[e._v("员工管理")])],1),e._v(" "),t("el-card",{staticClass:"el-card"},[t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:8}},[t("el-input",{attrs:{placeholder:"请输入管理员名称"},model:{value:e.userName,callback:function(r){e.userName=r},expression:"userName"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleSearch},slot:"append"})],1)],1),e._v(" "),t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.addDialogVisible=!0}}},[e._v("添加信息")])],1)],1),e._v(" "),t("el-table",{attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"id",label:"序号",width:"70"}}),e._v(" "),t("el-table-column",{attrs:{prop:"userName",label:"账号",width:"100"}}),e._v(" "),t("el-table-column",{attrs:{prop:"userPassword",label:"密码",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"userSex",label:"性别",width:"100"}}),e._v(" "),t("el-table-column",{attrs:{prop:"userPhone",label:"电话号码",width:"140"}}),e._v(" "),t("el-table-column",{attrs:{prop:"userEmail",label:"电子邮箱",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{label:"操作","min-width":"250"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-button",{attrs:{type:"primary",icon:"el-icon-reading"},on:{click:function(t){return e.showReadDialog(r.row.id)}}},[e._v("查看")]),e._v(" "),t("el-button",{attrs:{type:"warning",icon:"el-icon-edit"},on:{click:function(t){return e.showEditDialog(r.row.id)}}},[e._v("修改")]),e._v(" "),t("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(t){return e.removeUserById(r.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),t("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":e.pageSize,layout:"total,prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),t("el-dialog",{attrs:{title:"添加管理员信息",visible:e.addDialogVisible,width:"40%"},on:{"update:visible":function(r){e.addDialogVisible=r}}},[t("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"110px"},on:{close:e.addDialogClosed}},[t("el-form-item",{attrs:{label:"管理员账号",prop:"userName"}},[t("el-input",{model:{value:e.addForm.userName,callback:function(r){e.$set(e.addForm,"userName",r)},expression:"addForm.userName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"userPassword"}},[t("el-input",{model:{value:e.addForm.userPassword,callback:function(r){e.$set(e.addForm,"userPassword",r)},expression:"addForm.userPassword"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"性别",prop:"userSex"}},[t("el-input",{model:{value:e.addForm.userSex,callback:function(r){e.$set(e.addForm,"userSex",r)},expression:"addForm.userSex"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"手机号码",prop:"userPhone"}},[t("el-input",{model:{value:e.addForm.userPhone,callback:function(r){e.$set(e.addForm,"userPhone",r)},expression:"addForm.userPhone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"电子邮箱",prop:"userEmail"}},[t("el-input",{model:{value:e.addForm.userEmail,callback:function(r){e.$set(e.addForm,"userEmail",r)},expression:"addForm.userEmail"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(r){e.addDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"修改信息",visible:e.editDialogVisible,width:"40%"},on:{"update:visible":function(r){e.editDialogVisible=r}}},[t("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"110px"},on:{close:e.editDialogClosed}},[t("el-form-item",{attrs:{label:"管理员账号",prop:"userName"}},[t("el-input",{model:{value:e.editForm.userName,callback:function(r){e.$set(e.editForm,"userName",r)},expression:"editForm.userName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"userPassword"}},[t("el-input",{model:{value:e.editForm.userPassword,callback:function(r){e.$set(e.editForm,"userPassword",r)},expression:"editForm.userPassword"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"性别",prop:"userSex"}},[t("el-input",{model:{value:e.editForm.userSex,callback:function(r){e.$set(e.editForm,"userSex",r)},expression:"editForm.userSex"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"手机号码",prop:"userPhone"}},[t("el-input",{model:{value:e.editForm.userPhone,callback:function(r){e.$set(e.editForm,"userPhone",r)},expression:"editForm.userPhone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"电子邮箱",prop:"userEmail"}},[t("el-input",{model:{value:e.editForm.userEmail,callback:function(r){e.$set(e.editForm,"userEmail",r)},expression:"editForm.userEmail"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(r){e.editDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.editUser}},[e._v("确 定")])],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"查看",visible:e.readDialogVisible,width:"40%"},on:{"update:visible":function(r){e.readDialogVisible=r}}},[t("el-form",{ref:"readFormRef",attrs:{model:e.readForm,"label-width":"90px"}},[t("el-form-item",{attrs:{label:"管理员账号",prop:"userName"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.readForm.userName,callback:function(r){e.$set(e.readForm,"userName",r)},expression:"readForm.userName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"userPassword"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.readForm.userPassword,callback:function(r){e.$set(e.readForm,"userPassword",r)},expression:"readForm.userPassword"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"性别",prop:"userSex"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.readForm.userSex,callback:function(r){e.$set(e.readForm,"userSex",r)},expression:"readForm.userSex"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"手机号码",prop:"userPhone"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.readForm.userPhone,callback:function(r){e.$set(e.readForm,"userPhone",r)},expression:"readForm.userPhone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"电子邮箱",prop:"userEmail"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.readForm.userEmail,callback:function(r){e.$set(e.readForm,"userEmail",r)},expression:"readForm.userEmail"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.readDialogVisible=!1}}},[e._v("关  闭")])],1)],1)],1)},staticRenderFns:[]};var n=t("VU/8")(l,u,!1,function(e){t("Qr6q")},"data-v-01fbb304",null);r.default=n.exports}});
//# sourceMappingURL=20.188c7f52d3c0d16e147a.js.map