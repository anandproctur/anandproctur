(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"8GlL":function(t,e,n){"use strict";n.r(e),e.default='<div class="clearFix" style="padding-left: 15px;padding-right: 15px;">\r\n    <section class="header-section">\r\n        <div>\r\n            <div class="header-title">\r\n                <a routerLink="/view/website-configuration/images" style="padding:0px; ">\r\n                    Website/ App\r\n                </a>\r\n                <i style="font-family: \'FontAwesome\';color: black;" class="fas fa-angle-right"></i>\r\n                <span style="color: black;">FAQ</span>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <aside class="middle-full">\r\n        <section class="middle-main clearFix">\r\n            <section class="activity-box-container">\r\n                <div class="activity-container">\r\n\r\n                    <div class="activity-item-container"\r\n                        routerLink="/view/website-configuration/faq/category/list">\r\n                        <div class="img_name_container">\r\n                            <span>Category</span>\r\n                        </div>\r\n                        <div class="activity-description">\r\n                            \x3c!-- <span>Add / Manage products for selling or assigning to students directly.</span> --\x3e\r\n                        </div>\r\n                    </div>\r\n                    <div class="activity-item-container" routerLink="/view/website-configuration/faq/qa/list">\r\n                        <div class="img_name_container">\r\n                            <span>Q&A</span>\r\n                        </div>\r\n                        <div class="activity-description">\r\n                            \x3c!-- <span>Manage and communicate with registered users from App/Website.</span> --\x3e\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </section>\r\n        </section>\r\n    </aside>\r\n</div>'},BWdt:function(t,e,n){"use strict";n.r(e),n.d(e,"FaqModule",(function(){return v}));var i=n("fXoL"),r=n("ofXK"),a=n("tyNb"),o=function(t,e,n,i){var r,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(o=(a<3?r(o):a>3?r(e,n,o):r(e,n))||o);return a>3&&o&&Object.defineProperty(e,n,o),o},c=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(t){return t&&t.__esModule?t:{default:t}};let l=(()=>{let t=class{constructor(){}ngOnInit(){}};return t.ctorParameters=()=>[],t=o([Object(i.Component)({selector:"app-faq-home",template:s(n("8GlL")).default,styles:[s(n("ixNR")).default]}),c("design:paramtypes",[])],t),t})();var d=n("pdXS"),p=function(t,e,n,i){var r,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(o=(a<3?r(o):a>3?r(e,n,o):r(e,n))||o);return a>3&&o&&Object.defineProperty(e,n,o),o};const f=[{path:"",component:d.a,pathMatch:"prefix",children:[{path:"faq",component:d.a},{path:"home",component:l},{path:"category",loadChildren:()=>n.e(77).then(n.bind(null,"CroU")).then(t=>t.FaqCategoryModule),pathMatch:"prefix"},{path:"qa",loadChildren:()=>n.e(78).then(n.bind(null,"OCiK")).then(t=>t.FaqQaModule),pathMatch:"prefix"}]}];let u=(()=>{let t=class{};return t=p([Object(i.NgModule)({imports:[a.RouterModule.forChild(f)],exports:[a.RouterModule]})],t),t})();var g=n("ZWaZ"),y=function(t,e,n,i){var r,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(o=(a<3?r(o):a>3?r(e,n,o):r(e,n))||o);return a>3&&o&&Object.defineProperty(e,n,o),o};let v=(()=>{let t=class{};return t=y([Object(i.NgModule)({declarations:[l,g.a],imports:[r.CommonModule,u]})],t),t})()},EJUc:function(t,e,n){"use strict";n.r(e),e.default='<div class="clearFix" style="padding-left: 15px;padding-right: 15px;">\r\n    <section class="header-section">\r\n        <div>\r\n            <div class="header-title">\r\n                <a routerLink="/view/website-configuration/images" style="padding:0px; ">\r\n                    Website/ App\r\n                </a>\r\n                <i style="font-family: \'FontAwesome\';color: black;" class="fas fa-angle-right"></i>\r\n                <span style="color: black;">FAQ </span>\r\n                <i style="font-family: \'FontAwesome\';color: black;" class="fas fa-angle-right"></i>\r\n                <span style="color: black;">QA</span>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>\r\n<router-outlet></router-outlet>'},ZWaZ:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("fXoL"),r=function(t,e,n,i){var r,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(o=(a<3?r(o):a>3?r(e,n,o):r(e,n))||o);return a>3&&o&&Object.defineProperty(e,n,o),o},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},o=function(t){return t&&t.__esModule?t:{default:t}};let c=(()=>{let t=class{constructor(){}ngOnInit(){}toggleActiveSession(t){this.activeSession=t}};return t.ctorParameters=()=>[],t=r([Object(i.Component)({selector:"app-faq-qa",template:o(n("EJUc")).default,styles:[o(n("pNh7")).default]}),a("design:paramtypes",[])],t),t})()},ixNR:function(t,e,n){"use strict";n.r(e),e.default=".middle-section {\n  padding: 1%;\n}\n\n.activity-box-container {\n  padding: 1%;\n  height: 100%;\n}\n\n.activity-box-container .activity-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.activity-box-container .activity-container .activity-item-container {\n  padding: 15px 10px;\n  width: 31%;\n  background: #fff;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n  margin: 1%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.24);\n}\n\n.activity-box-container .activity-container .activity-item-container .img_name_container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-start;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 5px;\n}\n\n.activity-box-container .activity-container .activity-item-container .img_name_container img {\n  width: 25px;\n  height: 25px;\n}\n\n.activity-box-container .activity-container .activity-item-container .img_name_container span {\n  margin-left: 10px;\n  margin-top: 5px;\n}\n\n.activity-box-container .activity-container .activity-item-container .activity-description {\n  font-size: 12px;\n  padding: 5px;\n}\n\n.header-section .header-title {\n  text-align: left;\n  font-size: 14px;\n  font-weight: 600;\n  color: #0084f6;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n}\n"},pNh7:function(t,e,n){"use strict";n.r(e),e.default=".header-section .header-title {\n  text-align: left;\n  font-size: 14px;\n  font-weight: 600;\n  color: #0084f6;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 15px;\n}\n\n.middle-section {\n  padding: 1%;\n}\n"}}]);