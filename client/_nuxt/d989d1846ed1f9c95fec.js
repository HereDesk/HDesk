(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{307:function(t,e,a){"use strict";a(40),a(41);e.a={txt_deal_with:function(t){return t.replace(/(((https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/gi,function(t){return'<a href="'+t+'" target="_blank">'+t+"</a>"})},getWeek:function(t){return t?new Date(t).getDay():""},date:function(t,e){if(!t)return"";var a=new Date(t),o=a.getFullYear(),n=a.getMonth()+1,s=a.getDate(),r=a.getHours(),u=a.getMinutes(),l=a.getSeconds(),c=function(t){return/^\d$/.test(t)?"0"+t:t};return e&&1!=e?2==e?c(n)+"/"+c(s)+" "+c(r)+":"+c(u):3==e?o+"-"+c(n)+"-"+c(s):4==e?c(r)+":"+c(u)+":"+c(l):5==e?c(o)+"/"+c(n)+"/"+c(s):void 0:o+"-"+c(n)+"-"+c(s)+" "+c(r)+":"+c(u)+":"+c(l)},bugStatusName:function(t){var e,a=[{code:"all",name:"全部"},{code:"New",name:"新建未分配"},{code:"Open",name:"待解决"},{code:"Reopen",name:"重新打开"},{code:"Hang-up",name:"挂起延期"},{code:"Fixed",name:"已解决"},{code:"Closed",name:"已关闭"}];for(e in a)if(a[e].code==t)return a[e].name},getOperatorsName:function(t){var e,a=[{value:"=",name:"="},{value:"!=",name:"!="},{value:">=",name:">="},{value:"<=",name:"<="},{value:">",name:">"},{value:"<",name:"<"},{value:"and",name:"and"},{value:"or",name:"or"},{value:"range",name:"范围"}];for(e in a)if(a[e].value==t)return a[e].name},getSearchTypeName:function(t){var e,a=[{value:"ID",name:"缺陷ID"},{value:"title",name:"缺陷标题"},{value:"priority",name:"优先级"},{value:"severity",name:"严重程度"},{value:"bug_type",name:"缺陷类型"},{value:"creator_user",name:"创建者"},{value:"closed_user",name:"关闭者"},{value:"fixed_user",name:"解决者"},{value:"assignedTo_user",name:"指派谁"},{value:"create_time",name:"创建日期"},{value:"closed_time",name:"关闭日期"},{value:"fixed_time",name:"解决日期"}];for(e in a)if(a[e].value==t)return a[e].name},QuickQperationName:function(t){var e,a=[{value:"no",name:"无"},{value:"WaitPending",name:"待我处理"},{value:"AssignedByMe",name:"指派给我"},{value:"ResolvedByMe",name:"我解决的"},{value:"ClosedByMe",name:"我关闭的"},{value:"CreatedByMe",name:"我创建的"},{value:"notClosed",name:"未关闭的"},{value:"NotResolved",name:"未解决的"},{value:"HighPriority",name:"高优先级"}];for(e in a)if(a[e].value==t)return a[e].name},flowdesc:function(t){var e,a=[{status:-1,name:"不涉及此项"},{status:0,name:"未开始"},{status:1,name:"设计中"},{status:2,name:"开发中"},{status:3,name:"开发完成"},{status:4,name:"待调试"},{status:5,name:"调试中"},{status:6,name:"调试"},{status:7,name:"进入测试"},{status:8,name:"测试中"},{status:9,name:"存在Bug"},{status:10,name:"修复Bug中"},{status:11,name:"回归Bug"},{status:12,name:"测试通过"},{status:13,name:"已上线"}];for(e in a)if(a[e].status==t)return a[e].name}}},328:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAh1BMVEUAAAC/v7/FxcW+vr6+vr6/v7+/v7/AwMC+vr6/v7+/v7+/v7/AwMDAwMC/v7+/v7+/v7+/v7/CwsK+vr6/v7+/v7/AwMDBwcHBwcG/v7/Dw8O+vr6/v7+/v7+/v7+/v7++vr6/v7+/v7/AwMDBwcHDw8O+vr6/v7+/v7/AwMC/v7/AwMC/v7+KSxGBAAAALHRSTlMA5wXvx/jgHvXAuUpDFNZ+cGMa3c1ONSomIw3866mQi4RcUzIQCZ+Vd1g+OKIaDxgAAAGlSURBVFjD7dfLcrJAEIbh5ih4DKIY0Xg2Jvre//X95cKCkrEhfy+yybOkYJgZeqo/5M9PZEn/LBYpzEZicI0gXspLo2zbT3c9ZYRiDd7LG74D7lYXZYReDvlJnHY8bJQRph6Ezp0cUvlWRnhfw4c4hFQ8URwjeHNMjbqjKPawuqkrgINoLhD78mRA3Vw0/tixiAV1S1ENISjlSUxlJi36sJMnc3UFzfkGvl5I7VPYNy5uV9wlmbQ7QOiohUna32RT6cKDd7HY3r+kxRBSsfATViex+ICBWHxZN2EAn2IxhVBMIjwx8UjEZAxiEoKtEGYwsi7hlzcxwbMW0sx2nq2l/AZfv3ucA2MZFM7D2JtPJkPpZAKTRnQIucsP0kHczACDRAsozUY4fn5/xEN07NLasuZn6d6di2ZzLaNGPlCEzS28UjdoDxhnNeIcfh5xCuquovl0hSw/oBL5LTGPm6tVVS6iuEWwdf8MPHjaKVkGMHbOsHyE3XyhPD+KXwd+f58C8easxf0Y1kq2KYuTHu88WC/kv/UC8JaWvzbIe2JQpv2R/HH4B3NjTRQQIuPnAAAAAElFTkSuQmCC"},932:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-5"},[a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-auto mr-auto"}),t._v(" "),a("div",{staticClass:"col-auto"},[t.ProductsRules.add?a("button",{staticClass:"btn btn-create",attrs:{type:"button",id:"addproduct","data-toggle":"modal","data-target":"#CreateProduct"}},[t._v("\n        + 增加产品\n      ")]):t._e()])]),t._v(" "),a("div",{staticClass:"row mt-3 mb-5 table_data"},[a("div",{staticClass:"col-xl-12 col-lg-12 col-md-12"},[a("el-table",{attrs:{data:t.tableData,"default-sort":{prop:"date",order:"descending"}}},[a("el-table-column",{attrs:{prop:"product_name",label:"产品名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"product_code",label:"产品编码"}}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("date")(e.row.create_time)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"creator",label:"创建人"}}),t._v(" "),t.ProductsRules.operate?a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["admin"!==e.row.userGroup?a("div",[a("nuxt-link",{attrs:{to:{path:"/app/products/members",query:{product_code:e.row.product_code}}}},[a("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button"}},[t._v("成员")])]),t._v(" "),a("nuxt-link",{attrs:{to:{path:"/app/products/release",query:{product_code:e.row.product_code}}}},[a("button",{staticClass:"btn btn-outline-primary btn-sm ml-3",attrs:{type:"button"}},[t._v("版本")])]),t._v(" "),a("nuxt-link",{attrs:{to:{path:"/app/products/modules",query:{product_code:e.row.product_code}}}},[a("button",{staticClass:"btn btn-outline-primary btn-sm ml-3",attrs:{type:"button"}},[t._v("模块")])])],1):t._e()]}}])}):t._e()],1)],1)]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"CreateProduct",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group row col-md-auto"},[a("label",{staticClass:"mx-5",attrs:{for:"pg-product-name"}},[t._v("产品名称")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.ProductData.product_name,expression:"ProductData.product_name"}],staticClass:"form-control input-lg mx-5 my-1",attrs:{type:"text",id:"pg-product-name",placeholder:"输入（不超20个字）",maxlength:"20",required:""},domProps:{value:t.ProductData.product_name},on:{input:function(e){e.target.composing||t.$set(t.ProductData,"product_name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group row col-md-auto"},[a("label",{staticClass:"mx-5",attrs:{for:"pg-product-name"}},[t._v("产品编号")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.ProductData.product_code,expression:"ProductData.product_code"}],staticClass:"form-control input-lg mx-5 my-1",attrs:{type:"text",id:"pg-product-name",placeholder:"输入（不超20个字）",maxlength:"20",required:""},domProps:{value:t.ProductData.product_code},on:{input:function(e){e.target.composing||t.$set(t.ProductData,"product_code",e.target.value)}}}),t._v(" "),a("p",{staticClass:"mx-5 mt-3 text-90 text-gray"},[t._v("备注：提交后无法修改，请慎重填写")])]),t._v(" "),t.errorMsg?a("span",{staticClass:"ml-5 ms-msg"},[t._v("错误提示："+t._s(t.errorMsg))]):t._e()]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-cancel",attrs:{type:"button","data-dismiss":"modal"}},[t._v("关闭")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.createProduct}},[t._v("提交")])])])])]),t._v(" "),t.controlNull?a("div",{staticClass:"row"},[t._m(1)]):t._e()])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[this._v("创建产品")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 text-center mt-5"},[e("img",{staticClass:"null-icon",attrs:{src:a(328)}}),this._v(" "),e("p",{staticClass:"no-hint"},[this._v("暂时没有项目,快去增加一个项目吧")])])}];o._withStripped=!0;var s=a(4),r=a.n(s),u=a(307),l=a(105),c={head:function(){return{title:"HDesk - 产品管理"}},layout:"head",filters:{date:u.a.date},data:function(){return{FirstPage:1,LastPage:"",pageNumber:1,pageSize:10,total:"",loading:!0,selectedProduct:"",first_product:"",product_list:"",tableData:[],errorMsg:"",isShowTip:!1,isShowPaging:!1,isLook:!1,msg:"",controlNull:!1,ProductData:{product_code:"",product_name:""}}},computed:{ProductsRules:function(){return l.a.ProductMangeRules(this.$store.state.userInfo)}},created:function(){this.getProductList()},methods:{getProductList:function(){var t=this;r.a.get("/api/pm/get_product_name").then(function(e){2e4===e.data.status&e.data.data.length>0?(t.loading=!1,t.tableData=e.data.data,t.controlNull=!1):t.controlNull=!0})},handleClick:function(t){this.isLook=!0,this.modalDetails.product_code=t.product_code,this.modalDetails.product_name=t.product_name},createProduct:function(){var t=this.ProductData.product_code,e=this.ProductData.product_name;e.length>20|0===e.length&&alert("项目名称的有效长度为1-20"),t.length>20|0===t.length&&alert("项目编码的有效长度为1-20");var a=this;r()({method:"post",url:"/api/pm/product/create",data:JSON.stringify(this.ProductData)}).then(function(t){2e4===t.data.status?($("#CreateProduct").modal("hide"),a.getProductList(),a.$notify.success({title:"成功",message:t.data.msg})):a.$notify.error({title:"错误",message:t.data.msg})})}}},i=a(10),d=Object(i.a)(c,o,n,!1,null,null,null);d.options.__file="index.vue";e.default=d.exports}}]);