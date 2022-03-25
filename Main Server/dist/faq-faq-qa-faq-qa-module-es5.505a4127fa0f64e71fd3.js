!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"+3CD":function(e,t,n){"use strict";n.r(t),t.default='<div class="clearFix" style="padding-left: 15px;padding-right: 15px;">\r\n  <section class="slide">\r\n      <div class="header-section">\r\n        <div class="header-item" id="coupon" (click)="toggleActiveSession(\'coupon\')" routerLink="/view/website-configuration/faq/category/list"\r\n          [ngClass]="(activeSession==\'coupon\')?\'active\':\'non-active\'">\r\n          \x3c!-- <div class="img-container" *ngIf="activeSession==\'coupon\'">\r\n            <img src="../../.././../../assets/images/estore/Coupon_White.svg" alt="coupon">\r\n          </div>\r\n          <div class="img-container" *ngIf="activeSession!=\'coupon\'">\r\n            <img src="../../../../../assets/images/estore/coupon_Grey.svg" alt="coupon">\r\n          </div> --\x3e\r\n          <div class="model-name-container">\r\n            <span>Category</span>\r\n          </div>\r\n        </div>\r\n        <div class="header-item" id="voucher" (click)="toggleActiveSession(\'voucher\')" routerLink="/view/website-configuration/faq/qa/list"\r\n          [ngClass]="(activeSession==\'voucher\')?\'active\':\'non-active\'">\r\n          \x3c!-- <div class="img-container" *ngIf="activeSession==\'voucher\'">\r\n            <img src="../../../../../assets/images/estore/Voucher_White.svg" alt="voucher">\r\n          </div>\r\n          <div class="img-container" *ngIf="activeSession!=\'voucher\'">\r\n            <img src="../../../../../assets/images/estore/Voucher_Grey.svg" alt="voucher">\r\n          </div> --\x3e\r\n          <div class="model-name-container">\r\n            <span>QA</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n</div>\r\n<section class="sms-table-wrapper">\r\n\r\n    <div class="filter-item-2">\r\n        <button type="button" name="button" class="add-class-btn" routerLink="../add" style="margin-right: 15px;">\r\n          <i class="fa fa-plus" aria-hidden="true"></i>\r\n          &nbsp;\r\n          Add FAQ QA\r\n        </button>\r\n      </div>\r\n    <app-basic-table [headers]="headerSetting" [displayData]="staticPageData" [tableSetting]="tableSetting"\r\n      [rowColumnSetting]="rowColumns" (editView)=\'editRow($event)\' (deleteView)=\'deleteRow($event)\'>\r\n    </app-basic-table>\r\n    <div style="padding-top: 9px;">\r\n      <pagination (goPage)="fetchTableDataByPage($event)" (goNext)="fetchNext()" (goPrev)="fetchPrevious()"\r\n        [pagesToShow]="10" [page]="pageIndex" [perPage]="displayBatchSize" [sizeArr]="sizeArr" [count]="totalRecords"\r\n        (sizeChange)="updateTableBatchSize($event)">\r\n      </pagination>\r\n    </div>\r\n\r\n\r\n  </section>\r\n'},"/mY4":function(e,t,n){"use strict";n.r(t),t.default=".filter-item-2 {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filter-item-2 .add-class-btn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: white;\n  color: #1283f4;\n  font-size: 14px;\n  font-weight: 600;\n  height: 30px;\n}\n\n.sms-table-wrapper {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.slide .header-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 20%;\n  margin-left: 40%;\n}\n\n.slide .header-section .header-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 5px;\n  width: 50%;\n  cursor: pointer;\n}\n\n.slide .header-section .header-item .img-container img {\n  width: 20px;\n  height: 20px;\n  margin: 0px 10px;\n}\n\n.slide .header-section .header-item .model-name-container {\n  width: 50%;\n  margin-top: 3px;\n}\n\n.slide .header-section .header-item .model-name-container span {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.slide .header-section #coupon {\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n  border: 2px solid #3a65f8;\n}\n\n.slide .header-section #voucher {\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  border: 2px solid #3a65f8;\n}\n\n.active {\n  background: #3a66fa;\n  color: #fdfdfd;\n}\n\n.non-active {\n  background: #ffffff;\n  color: #b0b0b0;\n}\n"},IaAr:function(e,t,n){"use strict";n.r(t),t.default='<div class="container-fluid product-wrapper p-0" style="padding-top: 2px;padding: 1%;">\r\n\r\n    <div class="row">\r\n        <div class="col-md-12">\r\n            <div class="row">\r\n                <div class="col-md-12 form-group">\r\n                    <label class="text-bold"> Category\r\n                        <span class="text-danger">*</span>\r\n                    </label>\r\n                    <select [(ngModel)]="pageModel.category_id" class="form-control form-control-sm">\r\n                        <option value="">Please select Category</option>\r\n                        <option value="{{data.id}}" *ngFor="let data of categoryData">{{data.name}} </option>\r\n                    </select>\r\n                </div>\r\n                <div class="col-md-12 form-group">\r\n                    <label class="text-bold"> Question\r\n                        <span class="text-danger">*</span>\r\n                    </label>\r\n                    <input type="text" placeholder="Question" [(ngModel)]="pageModel.question" class="form-control form-control-sm">\r\n                </div>\r\n\r\n                <div class="col-md-12 form-group">\r\n                    <label class="text-bold"> Answer\r\n                        \x3c!-- <span class="text-danger">*</span> --\x3e\r\n                    </label>\r\n                    <input type="text" placeholder="Answer" [(ngModel)]="pageModel.answer" class="form-control form-control-sm">\r\n                </div>\r\n\r\n                <div class="col-md-12 form-group">\r\n                    <label class="text-bold"> Order Number\r\n                        \x3c!-- <span class="text-danger">*</span> --\x3e\r\n                    </label>\r\n                    <input type="number" placeholder="Order Number" [(ngModel)]="pageModel.order_number" class="form-control form-control-sm">\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="go-btn-container">\r\n        <button type="button" name="button" class="fullBlue add-class-btn" (click)="cancel()">Cancel</button>\r\n        <button type="button" name="button" class="fullBlue gobtn" (click)="saveData()"\r\n            [disabled]="auth.isRippleLoad.getValue()">Save</button>\r\n    </div>\r\n</div>'},OCiK:function(t,a,i){"use strict";i.r(a),i.d(a,"FaqQaModule",(function(){return P}));var r,o,s,c,d=i("fXoL"),l=i("ofXK"),u=i("tyNb"),p=i("xf7K"),g=i("oWFQ"),h=i("S3Px"),f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e){return e&&e.__esModule?e:{default:e}},b=((r=function(){function t(n,a,i,r,o){var s=this;e(this,t),this.router=n,this.productService=a,this.auth=i,this.msgService=r,this.routeParam=o,this.selectedPageId="",this.categoryData=[],this.pageModel={category_id:"",question:"",answer:"",order_number:""},this.routeParam.params.subscribe((function(e){s.selectedPageId=e.id}))}return n(t,[{key:"ngOnInit",value:function(){this.selectedPageId&&(this.pageModel=JSON.parse(sessionStorage.getItem("faqqaData"))),this.getFaqCategoryData()}},{key:"ngOnDestroy",value:function(){sessionStorage.removeItem("faqqaData")}},{key:"getFaqCategoryData",value:function(){var e=this;this.auth.showLoader(),this.productService.getMethod("/api/v2/website/faq/category/institute/"+sessionStorage.getItem("institute_id"),null).subscribe((function(t){e.auth.hideLoader(),e.categoryData=t.result}),(function(t){e.auth.hideLoader()}))}},{key:"cancel",value:function(){this.router.navigate(["view/website-configuration/faq/qa/list"])}},{key:"saveData",value:function(){this.selectedPageId?this.updateData():this.createData()}},{key:"updateData",value:function(){var e=this;if(""!=this.pageModel.category_id&&null!=this.pageModel.category_id)if(""!=this.pageModel.question&&null!=this.pageModel.question){var t={id:this.selectedPageId,category_id:this.pageModel.category_id,question:this.pageModel.question,answer:this.pageModel.answer,order_number:this.pageModel.order_number};this.auth.showLoader(),this.productService.putMethod("api/v2/website/faq/update",t).then((function(t){e.auth.hideLoader();var n=t.body;n.validate?(e.msgService.showErrorMessage("success","","FAQ updated successfully"),e.router.navigate(["view/website-configuration/faq/qa/list"])):e.msgService.showErrorMessage("error",n.error[0].error_message,"")}),(function(t){e.auth.hideLoader(),console.log(t)}))}else this.msgService.showErrorMessage("error","","Please enter Question");else this.msgService.showErrorMessage("error","","Please select category")}},{key:"createData",value:function(){var e=this;if(""!=this.pageModel.category_id&&null!=this.pageModel.category_id)if(""!=this.pageModel.question&&null!=this.pageModel.question){var t={category_id:this.pageModel.category_id,question:this.pageModel.question,answer:this.pageModel.answer,order_number:this.pageModel.order_number};this.auth.showLoader(),this.productService.postMethod("api/v2/website/faq/create",t).then((function(t){e.auth.hideLoader();var n=t.body;n.validate?(e.msgService.showErrorMessage("success","","FAQ created successfully"),e.router.navigate(["view/website-configuration/faq/qa/list"])):e.msgService.showErrorMessage("error",n.error[0].error_message,"")}),(function(t){e.auth.hideLoader(),console.log(t)}))}else this.msgService.showErrorMessage("error","","Please enter Question");else this.msgService.showErrorMessage("error","","Please select category")}}]),t}()).ctorParameters=function(){return[{type:u.Router},{type:h.a},{type:p.a},{type:g.a},{type:u.ActivatedRoute}]},r=function(e,t,n,a){var i,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}([Object(d.Component)({selector:"app-add-edit",template:v(i("IaAr")).default,styles:[v(i("z+0+")).default]}),f("design:paramtypes",[u.Router,h.a,p.a,g.a,u.ActivatedRoute])],r)),m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(e){return e&&e.__esModule?e:{default:e}},x=((o=function(){function t(n,a,i,r){e(this,t),this.httpService=n,this.auth=a,this.router=i,this.msgService=r,this.sizeArr=[25,50,100,150,200,500,1e3],this.pageIndex=1,this.totalRecords=0,this.displayBatchSize=25,this.staticPageData=[],this.staticPageDataSouece=[]}return n(t,[{key:"ngOnInit",value:function(){this.setTableData(),this.getFaqCategoryData(),this.activeSession="voucher"}},{key:"setTableData",value:function(){this.headerSetting=[{primary_key:"id",value:"Id",charactLimit:25,sorting:!0,visibility:!0},{primary_key:"category_name",value:"Category Name",charactLimit:25,sorting:!0,visibility:!0},{primary_key:"question",value:"Question",charactLimit:25,sorting:!1,visibility:!0},{primary_key:"answer",value:"Answer",charactLimit:25,sorting:!1,visibility:!0},{primary_key:"order_number",value:"Order number",charactLimit:25,sorting:!1,visibility:!0},{primary_key:"action",value:"Action",charactLimit:10,sorting:!1,visibility:!0,edit:!0,delete:!0}],this.tableSetting={width:"100%",height:"58vh"},this.rowColumns=[{width:"10%",textAlign:"left"},{width:"20%",textAlign:"left"},{width:"25%",textAlign:"left"},{width:"20%",textAlign:"left"},{width:"15%",textAlign:"left"},{width:"10%",textAlign:"left"}]}},{key:"getFaqCategoryData",value:function(){var e=this;this.auth.showLoader(),this.httpService.getMethod("api/v2/website/faq/institute/"+sessionStorage.getItem("institute_id"),null).subscribe((function(t){e.auth.hideLoader(),e.staticPageDataSouece=t.result,console.log(e.staticPageDataSouece),e.totalRecords=e.staticPageDataSouece.length,e.staticPageData=e.getDataFromDataSource(0)}),(function(t){e.auth.hideLoader()}))}},{key:"toggleActiveSession",value:function(e){this.activeSession=e}},{key:"fetchTableDataByPage",value:function(e){this.pageIndex=e;var t=this.displayBatchSize*(e-1);this.staticPageData=this.getDataFromDataSource(t)}},{key:"fetchNext",value:function(){this.pageIndex++,this.fetchTableDataByPage(this.pageIndex)}},{key:"fetchPrevious",value:function(){1!=this.pageIndex&&(this.pageIndex--,this.fetchTableDataByPage(this.pageIndex))}},{key:"getDataFromDataSource",value:function(e){return this.staticPageDataSouece.slice(e,e+this.displayBatchSize)}},{key:"updateTableBatchSize",value:function(e){this.pageIndex=1,this.displayBatchSize=e,this.fetchTableDataByPage(this.pageIndex)}},{key:"editRow",value:function(e){console.log(e),sessionStorage.setItem("faqqaData",JSON.stringify(e.data)),this.router.navigate(["view/website-configuration/faq/qa/edit/"+e.data.id])}},{key:"deleteRow",value:function(e){var t=this;this.auth.showLoader(),this.httpService.deleteFile("/prod/api/v2/website/faq/"+e.data.id).subscribe((function(e){t.auth.hideLoader(),t.msgService.showErrorMessage("success","","FAQ Deleted Successfully"),t.getFaqCategoryData()}),(function(e){t.auth.hideLoader()}))}}]),t}()).ctorParameters=function(){return[{type:h.a},{type:p.a},{type:u.Router},{type:g.a}]},o=function(e,t,n,a){var i,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}([Object(d.Component)({selector:"app-list",template:y(i("+3CD")).default,styles:[y(i("/mY4")).default]}),m("design:paramtypes",[h.a,p.a,u.Router,g.a])],o)),w=i("ZWaZ"),S=[{path:"",component:w.a,pathMatch:"prefix",children:[{path:"QA",component:w.a},{path:"list",component:x},{path:"add",component:b},{path:"edit/:id",component:b}]}],D=(s=function t(){e(this,t)},s=function(e,t,n,a){var i,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}([Object(d.NgModule)({imports:[u.RouterModule.forChild(S)],exports:[u.RouterModule]})],s)),M=i("hGdz"),P=(c=function t(){e(this,t)},c=function(e,t,n,a){var i,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}([Object(d.NgModule)({declarations:[x,b],imports:[l.CommonModule,D,M.a]})],c))},"z+0+":function(e,t,n){"use strict";n.r(t),t.default='.product-wrapper {\n  padding: 1%;\n  width: 100%;\n}\n\n.row {\n  margin: 0;\n  font-size: 12px;\n}\n\n.row label {\n  float: left;\n  min-width: 150px;\n}\n\n.row .form-control {\n  border: 1px solid #e0e0e0;\n  padding: 6px;\n  border-radius: 4px;\n  display: block;\n  width: 50%;\n  box-sizing: border-box;\n  outline: none;\n  background: #fff;\n  font: 400 12px "Open sans", sans-serif;\n  box-shadow: none;\n  color: #000;\n  margin-left: 30px;\n}\n\n.row input[type="radio"] {\n  -webkit-appearance: radio;\n     -moz-appearance: radio;\n          appearance: radio;\n  width: 1%;\n  float: left;\n}\n\n.row .dropdown-list {\n  max-height: 197px;\n  overflow-y: hidden;\n}\n\n.go-btn-container {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  color: #3e3d4a;\n  width: auto;\n  margin-left: 20px;\n}\n\n.go-btn-container .gobtn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: #3a66fa;\n  color: #ffffff;\n  font-weight: 600;\n  height: 30px;\n  margin-top: 15px;\n  font-size: 14px;\n}\n\n.go-btn-container .add-class-btn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: white;\n  color: #1283f4;\n  font-size: 14px;\n  font-weight: 600;\n  height: 30px;\n  margin-top: 15px;\n  margin-right: 2%;\n}\n'}}])}();