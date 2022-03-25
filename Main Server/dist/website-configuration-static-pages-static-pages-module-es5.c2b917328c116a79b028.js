!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{"1f9D":function(e,t,a){"use strict";a.r(t),t.default=".product-wrapper {\n  width: 100%;\n}\n\n.product-wrapper .row {\n  margin: 0;\n}\n"},A8TU:function(t,n,i){"use strict";i.r(n),i.d(n,"StaticPagesModule",(function(){return I}));var r,o,s,l,d,c=i("fXoL"),p=i("ofXK"),u=i("tyNb"),g=i("xf7K"),f=i("S3Px"),h=i("oWFQ"),b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e){return e&&e.__esModule?e:{default:e}},v=((r=function(){function t(a,n,i,r,o){var s=this;e(this,t),this.routeParam=a,this.auth=n,this.productService=i,this.msgService=r,this.router=o,this.selectedPageId="",this.pageModel={page_route:"",page_status:"",page_title:"",in_navbar:!1,page_data:"",image:""},this.editorConf={height:250,menubar:!1,branding:!1,plugins:["preview anchor","visualblocks code ","insertdatetime  table paste code  wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor |               alignleft aligncenter alignright alignjustify |               bullist numlist outdent indent"},this.statusData=[{Title:"DRAFT"},{Title:"PUBLISHED"}],this.ImgData=[],this.routeParam.params.subscribe((function(e){s.selectedPageId=e.id})),console.log(this.selectedPageId)}return a(t,[{key:"ngOnInit",value:function(){this.selectedPageId&&this.getPageDataById()}},{key:"getPageDataById",value:function(){var e=this;this.auth.showLoader(),this.productService.getMethod("/api/v2/website/page/"+this.selectedPageId,null).subscribe((function(t){e.auth.hideLoader(),e.pageModel=t.result}),(function(t){e.auth.hideLoader()}))}},{key:"cancel",value:function(){this.router.navigate(["view/website-configuration/static-pages/list"])}},{key:"saveData",value:function(){var e=this,t=document.getElementById("uploadFileControl").files[0];if(""!=this.pageModel.page_title)if(""!=this.pageModel.page_route){var a=new FormData,n={institute_id:sessionStorage.getItem("institute_id"),page_route:this.pageModel.page_route,page_status:this.pageModel.page_status,page_title:this.pageModel.page_title,in_navbar:this.pageModel.in_navbar,page_data:this.pageModel.page_data};n.page_status=""==n.page_status?"DRAFT":n.page_status,this.selectedPageId&&(n.id=this.selectedPageId,n.banner_image_url=this.pageModel.banner_image_url),a.append("data",JSON.stringify(n)),t&&a.append("file",t);var i=this.auth.getBaseUrl(),r=this.selectedPageId?i+"/prod/api/v2/website/page/update":i+"/prod/api/v2/website/page/create",o=new XMLHttpRequest,s={userid:sessionStorage.getItem("userid"),userType:sessionStorage.getItem("userType"),password:sessionStorage.getItem("password"),institution_id:sessionStorage.getItem("institute_id")},l=btoa(s.userid+"|"+s.userType+":"+s.password+":"+s.institution_id);this.selectedPageId?o.open("PUT",r,!0):o.open("POST",r,!0),o.setRequestHeader("Authorization",l),o.setRequestHeader("x-proc-authorization",l),o.setRequestHeader("x-prod-inst-id",sessionStorage.getItem("institute_id")),o.setRequestHeader("x-prod-user-id",sessionStorage.getItem("userid")),o.setRequestHeader("enctype","multipart/form-data;"),o.setRequestHeader("Accept","application/json, text/javascript"),o.setRequestHeader("Access-Control-Allow-Origin","*"),this.auth.isRippleLoad.getValue()||(this.auth.showLoader(),o.onreadystatechange=function(){if(e.auth.hideLoader(),4==o.readyState)if(o.status>=200&&o.status<300){var t=e.selectedPageId?"Page Updated successfully":"Page Added Successfully";e.msgService.showErrorMessage(e.msgService.toastTypes.success,"",t),e.cancel()}else e.msgService.showErrorMessage(e.msgService.toastTypes.error,"",JSON.parse(o.response).message)},o.send(a))}else this.msgService.showErrorMessage("error","","Please enter page route");else this.msgService.showErrorMessage("error","","Please enter Title")}},{key:"clearFile",value:function(){this.pageModel.banner_image_url=""}}]),t}()).ctorParameters=function(){return[{type:u.ActivatedRoute},{type:g.a},{type:f.a},{type:h.a},{type:u.Router}]},r=function(e,t,a,n){var i,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(r<3?i(o):r>3?i(t,a,o):i(t,a))||o);return r>3&&o&&Object.defineProperty(t,a,o),o}([Object(c.Component)({selector:"app-add-edit",template:m(i("Hibo")).default,styles:[m(i("ZzVE")).default]}),b("design:paramtypes",[u.ActivatedRoute,g.a,f.a,h.a,u.Router])],r)),y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e){return e&&e.__esModule?e:{default:e}},w=((o=function(){function t(a,n,i,r){e(this,t),this.httpService=a,this.auth=n,this.router=i,this.msgService=r,this.sizeArr=[25,50,100,150,200,500,1e3],this.pageIndex=1,this.totalRecords=0,this.displayBatchSize=25,this.staticPageData=[],this.staticPageDataSouece=[]}return a(t,[{key:"ngOnInit",value:function(){this.setTableData(),this.getStaticPageData()}},{key:"setTableData",value:function(){this.headerSetting=[{primary_key:"id",value:"Id",charactLimit:25,sorting:!0,visibility:!0},{primary_key:"page_title",value:"Title",charactLimit:25,sorting:!0,visibility:!0},{primary_key:"page_status",value:"Status",charactLimit:25,sorting:!1,visibility:!0},{primary_key:"page_route",value:"Page URL",charactLimit:60,sorting:!1,visibility:!0},{primary_key:"in_navbar",value:"Show on website",charactLimit:20,sorting:!1,visibility:!0},{primary_key:"action",value:"Action",charactLimit:10,sorting:!1,visibility:!0,edit:!0,delete:!0}],this.tableSetting={width:"100%",height:"58vh"},this.rowColumns=[{width:"10%",textAlign:"left"},{width:"25%",textAlign:"left"},{width:"20%",textAlign:"left"},{width:"20%",textAlign:"left"},{width:"20%",textAlign:"left"},{width:"20%",textAlign:"left"}]}},{key:"getStaticPageData",value:function(){var e=this;this.auth.showLoader(),this.httpService.getMethod("/api/v2/website/page/institute/"+sessionStorage.getItem("institute_id"),null).subscribe((function(t){e.auth.hideLoader(),e.staticPageDataSouece=t.result,e.totalRecords=e.staticPageDataSouece.length,e.staticPageData=e.getDataFromDataSource(0),e.staticPageDataSouece&&e.staticPageDataSouece.length&&e.staticPageDataSouece.forEach((function(e){null!=e.page_status&&""!=e.page_status&&(e.page_status=e.page_status.charAt(0).toUpperCase()+e.page_status.substr(1).toLowerCase(),e.in_navbar=e.in_navbar?"Yes":"No")}))}),(function(t){e.auth.hideLoader()}))}},{key:"fetchTableDataByPage",value:function(e){this.pageIndex=e;var t=this.displayBatchSize*(e-1);this.staticPageData=this.getDataFromDataSource(t)}},{key:"fetchNext",value:function(){this.pageIndex++,this.fetchTableDataByPage(this.pageIndex)}},{key:"fetchPrevious",value:function(){1!=this.pageIndex&&(this.pageIndex--,this.fetchTableDataByPage(this.pageIndex))}},{key:"getDataFromDataSource",value:function(e){return this.staticPageDataSouece.slice(e,e+this.displayBatchSize)}},{key:"updateTableBatchSize",value:function(e){this.pageIndex=1,this.displayBatchSize=e,this.fetchTableDataByPage(this.pageIndex)}},{key:"editRow",value:function(e){console.log(e),this.router.navigate(["view/website-configuration/static-pages/edit/"+e.data.id])}},{key:"deleteRow",value:function(e){var t=this;this.auth.showLoader(),this.httpService.deleteFile("/prod/api/v2/website/page/"+e.data.id).subscribe((function(e){t.auth.hideLoader(),t.msgService.showErrorMessage("success","","Page Deleted Successfully"),t.getStaticPageData()}),(function(e){t.auth.hideLoader()}))}}]),t}()).ctorParameters=function(){return[{type:f.a},{type:g.a},{type:u.Router},{type:h.a}]},o=function(e,t,a,n){var i,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(r<3?i(o):r>3?i(t,a,o):i(t,a))||o);return r>3&&o&&Object.defineProperty(t,a,o),o}([Object(c.Component)({selector:"app-list",template:x(i("Kx8N")).default,styles:[x(i("rEAK")).default]}),y("design:paramtypes",[f.a,g.a,u.Router,h.a])],o)),_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},S=function(e){return e&&e.__esModule?e:{default:e}},P=((s=function(){function t(){e(this,t),this.activeSession=""}return a(t,[{key:"ngOnInit",value:function(){}}]),t}()).ctorParameters=function(){return[]},s=function(e,t,a,n){var i,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(r<3?i(o):r>3?i(t,a,o):i(t,a))||o);return r>3&&o&&Object.defineProperty(t,a,o),o}([Object(c.Component)({selector:"app-static-pages",template:S(i("sVe7")).default,styles:[S(i("1f9D")).default]}),_("design:paramtypes",[])],s)),R=[{path:"",component:P,pathMatch:"prefix",children:[{path:"static-pages",component:P},{path:"list",component:w},{path:"add",component:v},{path:"edit/:id",component:v}]}],D=(l=function t(){e(this,t)},l=function(e,t,a,n){var i,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(r<3?i(o):r>3?i(t,a,o):i(t,a))||o);return r>3&&o&&Object.defineProperty(t,a,o),o}([Object(c.NgModule)({imports:[u.RouterModule.forChild(R)],exports:[u.RouterModule]})],l)),M=i("hGdz"),k=i("fB2i"),I=(d=function t(){e(this,t)},d=function(e,t,a,n){var i,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(r<3?i(o):r>3?i(t,a,o):i(t,a))||o);return r>3&&o&&Object.defineProperty(t,a,o),o}([Object(c.NgModule)({declarations:[P,w,v],imports:[p.CommonModule,D,M.a,k.a],providers:[f.a,g.a]})],d))},Hibo:function(e,t,a){"use strict";a.r(t),t.default='<div class="container-fluid product-wrapper p-0" style="padding-top: 2px;padding: 1%;">\r\n\r\n  <div class="row">\r\n    <div class="col-md-12">\r\n      <div class="row">\r\n        <div class="col-md-12 form-group">\r\n          <label class="text-bold"> Title\r\n            <span class="text-danger">*</span>\r\n          </label>\r\n          <input type="text" placeholder="Title" [(ngModel)]="pageModel.page_title" class="form-control form-control-sm">\r\n        </div>\r\n\r\n        <div class="col-md-12 form-group">\r\n          <label class="text-bold"> Page URL\r\n            <span class="text-danger">*</span>\r\n          </label>\r\n          <input type="text" placeholder="Eg:registration" [(ngModel)]="pageModel.page_route" class="form-control form-control-sm">\r\n        </div>\r\n\r\n        <div class="col-md-12">\r\n          <div class="col-md-12 form-group" style="padding-right: 0px;padding-left: 0px;width: 100%;">\r\n            <label class="text-bold">Description</label>\r\n              <editor [init]="editorConf" apiKey="xix5hq71alw64jp2ufl9fo6nddnhg91n6h7w2afn043v538t"\r\n                [(ngModel)]="pageModel.page_data" placeholder="Content">\r\n              </editor>\r\n          </div>\r\n        </div>\r\n\r\n        \x3c!-- <div class="row m-0"> --\x3e\r\n          <div class="col-md-12 form-group">\r\n            <label class="text-bold">Status\r\n            </label>\r\n            <select id="country_id" class="form-control form-control-sm" [(ngModel)]="pageModel.page_status">\r\n              <option value="">Select Status</option>\r\n              <option [value]="data.Title" *ngFor=\'let data of statusData\'>\r\n                {{data.Title | titlecase}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        \x3c!-- </div> --\x3e\r\n\r\n        <div class="col-md-12" style="margin-bottom: 15px;width: 50%;height: 64px;" *ngIf="selectedPageId && pageModel.banner_image_url!=\'\' && pageModel.banner_image_url!=null">\r\n          <div class="c-md-6" style="padding: 0;margin-top: 1%;margin-right: 5px;">\r\n            <label class="text-bold"> Uploaded Image</label>\r\n            <img style="width: 24%;vertical-align: middle;margin-left: 25px;" src="{{pageModel.banner_image_url}}">\r\n          </div>\r\n          <div class="c-md-1 clearFile" (click)="clearFile()">X</div>\r\n        </div>\r\n\r\n        <div class="col-md-12 form-group">\r\n          <label class="text-bold"> Upload Image (Size (Width * Height) : 512px * 512px)\r\n          </label>\r\n          <input type="file" class="form-control form-control-sm" id="uploadFileControl" name="uploadFileBox"\r\n            [disabled]="pageModel.banner_image_url!=\'\' && pageModel.banner_image_url!=null" accept="image/*"\r\n            [(ngModel)]="pageModel.image" />\r\n        </div>\r\n\r\n\r\n        \x3c!-- <div class="col-md-6 form-group" style="padding-left: 0;margin-bottom: 0;margin-top: 10px;"> --\x3e\r\n          <div class="col-md-12 form-group" [ngStyle]="{\'margin-top\': (selectedPageId && pageModel.banner_image_url!=\'\' && pageModel.banner_image_url!=null) ? \'30px\' : \'\'}">\r\n            <input type="checkbox" id="inactive" class="form-ctrl" [(ngModel)]="pageModel.in_navbar"\r\n              style="-webkit-appearance: checkbox !important;">&nbsp;\r\n            <label for="inactive">Show on website</label>\r\n          </div>\r\n        \x3c!-- </div> --\x3e\r\n      </div>\r\n\r\n      <div class="go-btn-container">\r\n        <button type="button" name="button" class="fullBlue add-class-btn" (click)="cancel()">Cancel</button>\r\n        <button type="button" name="button" class="fullBlue gobtn" (click)="saveData()"\r\n          [disabled]="auth.isRippleLoad.getValue()">Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>'},Kx8N:function(e,t,a){"use strict";a.r(t),t.default='<section class="sms-table-wrapper">\r\n\r\n    <div class="filter-item-2">\r\n        <button type="button" name="button" class="add-class-btn" routerLink="../add" style="margin-right: 15px;">\r\n          <i class="fa fa-plus" aria-hidden="true"></i>\r\n          &nbsp;\r\n          Add Page\r\n        </button>\r\n      </div>\r\n    <app-basic-table [headers]="headerSetting" [displayData]="staticPageData" [tableSetting]="tableSetting"\r\n      [rowColumnSetting]="rowColumns" (editView)=\'editRow($event)\' (deleteView)=\'deleteRow($event)\'>\r\n    </app-basic-table>\r\n    <div style="padding-top: 9px;">\r\n      <pagination (goPage)="fetchTableDataByPage($event)" (goNext)="fetchNext()" (goPrev)="fetchPrevious()"\r\n        [pagesToShow]="10" [page]="pageIndex" [perPage]="displayBatchSize" [sizeArr]="sizeArr" [count]="totalRecords"\r\n        (sizeChange)="updateTableBatchSize($event)">\r\n      </pagination>\r\n    </div>\r\n\r\n\r\n  </section>\r\n'},ZzVE:function(e,t,a){"use strict";a.r(t),t.default='.product-wrapper {\n  padding: 1%;\n  width: 100%;\n}\n\n.row {\n  margin: 0;\n  font-size: 12px;\n}\n\n.row .form-control {\n  border: 1px solid #e0e0e0;\n  padding: 6px;\n  border-radius: 4px;\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  outline: none;\n  background: #fff;\n  font: 400 12px "Open sans", sans-serif;\n  box-shadow: none;\n  color: #000;\n}\n\n.row input[type="radio"] {\n  -webkit-appearance: radio;\n     -moz-appearance: radio;\n          appearance: radio;\n  width: 1%;\n  float: left;\n}\n\n.row .go-btn-container {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  color: #3e3d4a;\n  width: auto;\n  justify-content: center;\n}\n\n.row .go-btn-container .gobtn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: #3a66fa;\n  color: #ffffff;\n  font-weight: 600;\n  height: 30px;\n  margin-top: 15px;\n  font-size: 14px;\n}\n\n.row .go-btn-container .add-class-btn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: white;\n  color: #1283f4;\n  font-size: 14px;\n  font-weight: 600;\n  height: 30px;\n  margin-top: 15px;\n  margin-right: 2%;\n}\n\n.row .dropdown-list {\n  max-height: 197px;\n  overflow-y: hidden;\n}\n\n.form-group {\n  width: 50%;\n  float: left;\n}\n\n.clearFile {\n  padding: 5px;\n  width: 4%;\n  margin-top: 6px;\n  color: white;\n  cursor: pointer;\n  border: 1px solid;\n  font-weight: 600;\n  background: red;\n}\n\nlabel {\n  margin-bottom: 10px;\n}\n'},rEAK:function(e,t,a){"use strict";a.r(t),t.default=".filter-item-2 {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filter-item-2 .add-class-btn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: white;\n  color: #1283f4;\n  font-size: 14px;\n  font-weight: 600;\n  height: 30px;\n}\n\n.sms-table-wrapper {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n"},sVe7:function(e,t,a){"use strict";a.r(t),t.default='<div class="container-fluid product-wrapper p-0">\r\n    <div class="row m-0 pt-3 pb-3" style="    border-bottom: 1px solid #ccc;margin-bottom: 15px;">\r\n        <div class="col-md-8" style="padding-left: 0;">\r\n            <section class="middle-top clearFix bulk-header">\r\n                <div>\r\n                    <h1 class="pull-left" style="margin-bottom: 10px;">\r\n                        <a routerLink="/view/website-configuration/images" style="padding:0px; ">\r\n                            Website/ App\r\n                        </a>\r\n                        <i style="font-family: \'FontAwesome\';" class="fas fa-angle-right"></i>\r\n                        <span>Static Page</span>\r\n                    </h1>\r\n                </div>\r\n            </section>\r\n        </div>\r\n    </div>\r\n</div>\r\n<router-outlet></router-outlet>'}}])}();