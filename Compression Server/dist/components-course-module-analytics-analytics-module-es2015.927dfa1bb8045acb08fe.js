(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{RzLY:function(e,t,i){"use strict";i.r(t),i.d(t,"AnalyticsModule",(function(){return P}));var a=i("fXoL"),r=i("ofXK"),n=i("hGdz"),s=i("tyNb"),o=i("xf7K"),l=i("N+K7"),d=i("oWFQ"),c=i("M9IT"),h=function(e,t,i,a){var r,n=arguments.length,s=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(e){return e&&e.__esModule?e:{default:e}};let u=(()=>{let e=class{constructor(e,t,i){this._http=e,this.msgService=t,this.auth=i,this.allVideoData=[],this.totalRecords=0,this.userwiseDetail=[],this.allVideo=!1,this.PageIndex=1,this.displayBatchSize=10,this.sizeArr=[10,15,25,50,100,150,200,500,1e3],this.videoTitle="",this.title=!1}ngOnInit(){this.allVideo=!0,this.allvideo(10,1)}allvideo(e,t){let i="/api/v1/instFileSystem/videoReport/institute/"+sessionStorage.getItem("institute_id")+"?pageSize="+e+"&pageOffset="+t;this._http.getData(i).subscribe(e=>{this.allVideoData=e.result.response,this.totalRecords=e.result.totalElements,console.log(this.allVideoData)},e=>{this.msgService.showErrorMessage(this.msgService.toastTypes.error,"",e.error.message)})}totalVideoTitle(e,t,i,a){this.PageIndex=a,sessionStorage.setItem("totalVideoTitle",e),sessionStorage.setItem("Title",t),this.videoTitle=t,this.title=!0,this.allVideo=!1,this.userwiseDetail=[];let r="/api/v1/instFileSystem/videoReport/video/"+e+"?pageSize="+i+"&pageOffset="+a+"&sortBy=createdDate ASC";this._http.getData(r).subscribe(e=>{this.userwiseDetail=e.result.video_list.response,this.totalRecords=e.result.video_list.totalElements,console.log(this.userwiseDetail)},e=>{this.msgService.showErrorMessage(this.msgService.toastTypes.error,"",e.error.message)})}fetchTableDataByPage(e){if(this.allVideo){this.PageIndex=e;let t=this.displayBatchSize*(e-1);this.allVideoData=this.getDataFromDataSource(t)}else if(this.title){this.PageIndex=e;let t=this.displayBatchSize*(e-1);this.userwiseDetail=this.getDataFromDataSource(t)}}fetchNext(){(this.allVideo||this.title)&&(this.PageIndex++,this.fetchTableDataByPage(this.PageIndex))}fetchPrevious(){this.allVideo?1!=this.PageIndex&&(this.PageIndex--,this.fetchTableDataByPage(this.PageIndex)):this.title&&1!=this.PageIndex&&(this.PageIndex--,this.fetchTableDataByPage(this.PageIndex))}getDataFromDataSource(e){this.allVideo?this.allvideo(this.displayBatchSize,this.PageIndex):this.title&&this.totalVideoTitle(sessionStorage.getItem("totalVideoTitle"),sessionStorage.getItem("Title"),this.displayBatchSize,this.PageIndex)}updateTableBatchSize(e){(this.allVideo||this.title)&&(this.PageIndex=1,this.displayBatchSize=e,this.fetchTableDataByPage(this.PageIndex))}};return e.ctorParameters=()=>[{type:l.a},{type:d.a},{type:o.a}],e.propDecorators={paginator:[{type:a.ViewChild,args:[c.a]}]},e=h([Object(a.Component)({selector:"app-all-videos",template:p(i("lgLs")).default,styles:[p(i("ikoY")).default]}),g("design:paramtypes",[l.a,d.a,o.a])],e),e})();var f=i("wh9K"),m=i("6n/F"),y=i("wd/R"),v=function(e,t,i,a){var r,n=arguments.length,s=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e){return e&&e.__esModule?e:{default:e}};let D=(()=>{let e=class{constructor(e,t,i){this._http=e,this.msgService=t,this.auth=i,this.dateWiseSelection=!1,this.sizeArr=[10,15,25,50,100,150,200,500,1e3],this.videoWiseSelection=!1,this.userwiseDetail=[],this.from_date=y(new Date).format("YYYY-MM-DD"),this.videoData=[],this.PageIndex=1,this.displayBatchSize=10,this.weekDataSource=[],this.videoDataSource=[],this.userDataSource=[],this.totalRecords=0,this.perPage=10,this.searchText="",this.searchText1="",this.to_date=y(new Date).format("YYYY-MM-DD"),this.title="",this.userWiseSelection=!1,this.searchflag=!1,this.dropDownFilter=!1,this.dropDownFilerVideo=!1,this.showDateSelection=!1,this.instituteId=sessionStorage.getItem("institute_id"),this.datelineRange=[],this.weekData=[],this.chartFormat="",this.max_graph_value=""}ngOnInit(){this.dateWiseSelection=!0,this.select("daily")}ngOnDestroy(){sessionStorage.removeItem("fromDate")}filter(e){switch(e){case"date":this.dropDownFilter=!this.dropDownFilter;break;case"video":this.dropDownFilerVideo=!0}}select(e){let t;switch(console.log("asd",e),e){case"daily":this.showDateSelection=!1,this.datelineRange[1]=y(new Date).format("DD-MM-YYYY"),this.datelineRange[0]=y(new Date).subtract(10,"days").format("DD-MM-YYYY"),this.chartFormat="DD-MMM-YYYY",t="/api/v1/instFileSystem/videoReport/report/"+sessionStorage.getItem("institute_id")+"?from="+this.datelineRange[0]+"&to="+this.datelineRange[1]+"&reportType=0",this.dailyReport(t);break;case"monthly":this.showDateSelection=!1,this.chartFormat="MMM",t="/api/v1/instFileSystem/videoReport/report/"+sessionStorage.getItem("institute_id")+"?reportType=1",this.dailyReport(t);break;case"yearly":this.showDateSelection=!1,this.chartFormat="YYYY",t="/api/v1/instFileSystem/videoReport/report/"+sessionStorage.getItem("institute_id")+"?reportType=2",this.dailyReport(t);break;case"custom":this.showDateSelection=!0,this.chartFormat="DD-MMM-YYYY"}}custom(){let e="/api/v1/instFileSystem//videoReport/report/"+sessionStorage.getItem("institute_id")+"?from="+y(this.from_date).format("DD-MM-YYYY")+"&to="+y(this.to_date).format("DD-MM-YYYY")+"&reportType=0";this.chartFormat="DD-MMM-YYYY",this.dailyReport(e)}dailyReport(e){this.selectType="date",this.weekData=[],this.auth.showLoader(),this._http.getData(e).subscribe(e=>{this.auth.hideLoader(),this.weekDataSource=e.result.response,this.max_graph_value=Math.round(e.result.max_graph_value),this.weekData=this.getDataFromDataSource(0),console.log("week",this.weekData),this.totalRecords=this.weekDataSource.length,this.generateChartData(this.weekDataSource)},e=>{this.auth.hideLoader(),this.msgService.showErrorMessage(this.msgService.toastTypes.error,"",e.error.message)})}generateChartData(e){let t=[],i=[];e.map(e=>{t.push(y(e.date).format(this.chartFormat)),i.push(e.consumed_bandwidth)}),this.createChart(t,i)}createChart(e,t){let i=t,a=800,r=e.length;console.log(e.length),r>20&&r<35&&(a=1100),r>35&&r<50&&(a=2100),r>50&&r<75&&(a=3100),r>75&&r<100&&(a=4100),r>100&&r<150&&(a=12e3),r>150&&r<200&&(a=14e3),r>200&&(a=16e3),m.chart("chartWrap",{chart:{type:"area",scrollablePlotArea:{minWidth:a,scrollPositionX:1}},title:{text:""},xAxis:{type:"datetime",labels:{overflow:"justify"},title:{text:"Date"},categories:e},yAxis:{title:{text:"Bandwidth (MB)"},min:0,visible:!0,tickAmount:5,max:this.max_graph_value},tooltip:{useHTML:!0,shared:!1,formatter:function(){var t=this.point;let a="";return a+="Bandwidth "+i[t.index]+"(MB)",a+="<br>Date "+e[t.index],a}},plotOptions:{column:{pointPadding:.2,borderWidth:0}},series:[{showInLegend:!1,data:t}]})}videoWise(e,t,i){this.PageIndex=i,this.selectType="video";let a=y(e).format("DD-MM-YYYY"),r=y(e).format("DD-MM-YYYY");"MMM"==this.chartFormat?(a=y(e).startOf("month").format("DD-MM-YYYY"),r=y(e).endOf("month").format("DD-MM-YYYY")):"YYYY"==this.chartFormat&&(a=y(e).startOf("year").format("DD-MM-YYYY"),r=y(e).endOf("year").format("DD-MM-YYYY")),sessionStorage.setItem("videWise",e),this.videoWiseSelection=!0,this.dateWiseSelection=!1,this.videoData=[];let n="/api/v1/instFileSystem/videoReport/institute/"+sessionStorage.getItem("institute_id")+"?pageSize="+t+"&pageOffset="+i+"&from="+a+"&to="+r;this._http.getData(n).subscribe(t=>{this.videoData=t.result.response,sessionStorage.setItem("fromDate",e),this.totalRecords=t.result.totalElements,console.log(this.videoData)},e=>{this.msgService.showErrorMessage(this.msgService.toastTypes.error,"",e.error.message)})}userwise(e,t,i,a){this.title=t,this.selectType="user",sessionStorage.setItem("userWise",e),sessionStorage.setItem("title",this.title),this.userwiseDetail=[],this.userWiseSelection=!0,this.videoWiseSelection=!1;let r=sessionStorage.getItem("fromDate"),n="/api/v1/instFileSystem/videoReport/video/"+e+"?pageSize="+i+"&pageOffset="+a+"&sortBy=createdDate ASC";if(""!=r&&null!=r){let e=y(r).format("DD-MM-YYYY"),t=y(r).format("DD-MM-YYYY");"MMM"==this.chartFormat?(e=y(r).startOf("month").format("DD-MM-YYYY"),t=y(r).endOf("month").format("DD-MM-YYYY")):"YYYY"==this.chartFormat&&(e=y(r).startOf("year").format("DD-MM-YYYY"),t=y(r).endOf("year").format("DD-MM-YYYY")),n=n.concat("&from="+e+"&to="+t)}this._http.getData(n).subscribe(e=>{this.userwiseDetail=e.result.video_list.response,console.log(" this.userwiseDetail",this.userwiseDetail),this.totalRecords=e.result.video_list.totalElements},e=>{this.msgService.showErrorMessage(this.msgService.toastTypes.error,"",e.error.message)})}searchDatabase(){if(""!=this.searchText&&null!=this.searchText){let e;e=this.videoData.filter(e=>Object.keys(e).some(t=>null!=e[t]&&e[t].toString().toLowerCase().includes(this.searchText.toLowerCase()))),this.videoData=e,this.searchflag=!0}else this.videoWise(sessionStorage.getItem("videWise"),this.displayBatchSize,this.PageIndex)}searchDatabaseUser(){if(""!=this.searchText1&&null!=this.searchText1){let e;e=this.userwiseDetail.filter(e=>Object.keys(e).some(t=>null!=e[t]&&e[t].toString().toLowerCase().includes(this.searchText1.toLowerCase()))),this.userwiseDetail=e,this.searchflag=!0}else this.userwise(sessionStorage.getItem("userWise"),sessionStorage.getItem("title"),this.displayBatchSize,this.PageIndex)}fetchTableDataByPage(e){if(this.dateWiseSelection){this.PageIndex=e;let t=this.displayBatchSize*(e-1);this.weekData=this.getDataFromDataSource(t)}else if(this.videoWiseSelection){this.PageIndex=e;let t=this.displayBatchSize*(e-1);this.videoData=this.getDataFromDataSource(t)}else if(this.userWiseSelection){this.PageIndex=e;let t=this.displayBatchSize*(e-1);this.userwiseDetail=this.getDataFromDataSource(t)}}fetchNext(){(this.dateWiseSelection||this.videoWiseSelection||this.userWiseSelection)&&(this.PageIndex++,this.fetchTableDataByPage(this.PageIndex))}fetchPrevious(){this.dateWiseSelection||this.videoWiseSelection?1!=this.PageIndex&&(this.PageIndex--,this.fetchTableDataByPage(this.PageIndex)):this.userWiseSelection&&1!=this.PageIndex&&(this.PageIndex--,this.fetchTableDataByPage(this.PageIndex))}getDataFromDataSource(e){if(this.dateWiseSelection){return this.weekDataSource.slice(e,e+this.displayBatchSize)}this.videoWiseSelection?this.videoWise(sessionStorage.getItem("videWise"),this.displayBatchSize,this.PageIndex):this.userWiseSelection&&this.userwise(sessionStorage.getItem("userWise"),sessionStorage.getItem("title"),this.displayBatchSize,this.PageIndex)}updateTableBatchSize(e){(this.dateWiseSelection||this.videoWiseSelection||this.userWiseSelection)&&(this.PageIndex=1,this.displayBatchSize=e,this.fetchTableDataByPage(this.PageIndex))}home(){this.dateWiseSelection=!0,this.videoWiseSelection=!1,this.userWiseSelection=!1,this.select("daily")}dateValidationForFuture(e){let t=y(new Date),i=y(e);y(i.diff(t))._i<=0||(this.to_date=y(new Date).format("YYYY-MM-DD"),this.from_date=y(new Date).format("YYYY-MM-DD"),this.msgService.showErrorMessage(this.msgService.toastTypes.info,"","Future date is not allowed"))}};return e.ctorParameters=()=>[{type:l.a},{type:d.a},{type:o.a}],e=v([Object(a.Component)({selector:"app-date-wise",template:x(i("V2FB")).default,styles:[x(i("YSEa")).default]}),b("design:paramtypes",[l.a,d.a,o.a])],e),e})();var S=function(e,t,i,a){var r,n=arguments.length,s=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};const w=[{path:"",component:f.a,pathMatch:"prefix",children:[{path:"",component:D},{path:"datewise",component:D},{path:"allvideos",component:u}]}];let Y=(()=>{let e=class{};return e=S([Object(a.NgModule)({imports:[s.RouterModule.forChild(w)],exports:[s.RouterModule]})],e),e})();var M=function(e,t,i,a){var r,n=arguments.length,s=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};let P=(()=>{let e=class{};return e=M([Object(a.NgModule)({declarations:[D,u],imports:[r.CommonModule,n.a,Y,c.b]})],e),e})()},V2FB:function(e,t,i){"use strict";i.r(t),t.default='<div class="row head">\r\n    <span> <a (click)="home()" style="color: #0084f6;font-weight: 600;">Analytics > </a> </span><span\r\n        *ngIf="dateWiseSelection">Datewise</span>\r\n    <span *ngIf="videoWiseSelection">Videowise</span>\r\n    <span *ngIf="userWiseSelection">Userwise > <span> {{title}}</span></span>\r\n</div>\r\n<div class="row" style="margin: 0">\r\n    \x3c!-- <div class="col-sm-6 col-md-6 col-lg-6">\r\n        <input type="text" class="search" *ngIf="videoWiseSelection" placeholder="Search" (keyup)="searchDatabase()"\r\n            style="background:transparent;border: 1px solid lightgrey;" [(ngModel)]="searchText" #search>\r\n        <input type="text" class="search" *ngIf="userWiseSelection" placeholder="Search" (keyup)="searchDatabaseUser()"\r\n            style="background:transparent;border: 1px solid lightgrey;" [(ngModel)]="searchText1" #search>\r\n    </div> --\x3e\r\n    <div class="col-sm-2 col-md-2 col-lg-2" style="float: right;width: 5%;">\r\n\r\n        \x3c!-- <div style="float: right;"> --\x3e\r\n\r\n            <div class="row" style="display: flex;justify-content: flex-end;">\r\n                \x3c!-- <div class="col-lg-3 col-md-3 col-sm-3 wise">\r\n                    <button id="datewise" [ngClass]="selectType == \'date\'? \'btnside\' : \'grey\'"\r\n                        style="cursor: auto;">Datewise</button>\r\n                </div> --\x3e\r\n                \x3c!-- <div class="col-lg-3 col-md-3 col-sm-3 wise" style="width: 31%;">\r\n                    <button id="videowise" [ngClass]="selectType == \'video\'? \'btnside\' : \'grey\'"\r\n                        style="cursor: auto;">Videowise</button>\r\n                </div> --\x3e\r\n                \x3c!-- <div class="col-lg-3 col-md-3 col-sm-3 wise">\r\n                    <button id="userwise" [ngClass]="selectType == \'user\'? \'btnside\' : \'grey\'"\r\n                        style="cursor: auto;">Userwise</button>\r\n                </div> --\x3e\r\n                \x3c!-- <div class="col-lg-4 col-md-4 col-sm-4" style="width: 55%;" *ngIf="dateWiseSelection">\r\n                    <button [ngClass]="selectType == \'date\'? \'btnside\' : \'grey\'" (click)="filter(\'date\')">\r\n                        <i class="fa fa-filter" aria-hidden="true"></i>\r\n                    </button>\r\n                </div> --\x3e\r\n                <div class="col-lg-3 col-md-3 col-sm-3" *ngIf="videoWiseSelection">\r\n                    \x3c!-- <button [ngClass]="selectType == \'video\'? \'btnside\' : \'grey\'" (click)="filter(\'video\')">\r\n                        <i class="fa fa-filter" aria-hidden="true"></i>\r\n                    </button> --\x3e\r\n                </div>\r\n                <div class="col-lg-3 col-md-3 col-sm-3" *ngIf="userWiseSelection">\r\n                    \x3c!-- <button [ngClass]="selectType == \'date\'? \'grey\' : \'grey\'" (click)="filter(\'user\')">\r\n                        <i class="fa fa-filter" aria-hidden="true"></i>\r\n                    </button> --\x3e\r\n                </div>\r\n                <div style="float: right;margin-right: 30px;margin-top: 7px;">\r\n                    <span data-toggle="modal" data-target="#helpFAQ"> <i class="fa fa-question-circle"\r\n                        style="cursor: pointer; font-size: 20px;" title="FAQ\u2019S &Help" aria-hidden="true"></i></span>\r\n                  </div>\r\n        </div>\r\n    \x3c!-- </div> --\x3e\r\n</div>\r\n<div class="col-sm-10 col-md-10 col-lg-10" style="display: flex;justify-content: flex-end;width: 95%;" *ngIf="dateWiseSelection">\r\n    \x3c!-- <div class="row" style="justify-content: flex-end;" > --\x3e\r\n        <div class="col-lg-10 col-md-10 col-sm-10" style="justify-content: flex-end;display: flex;" *ngIf="showDateSelection">\r\n            \x3c!-- <div class="row" style="float: right;" *ngIf="showDateSelection"> --\x3e\r\n    \r\n                <div class="col-lg-3 col-md-3 col-sm-3">\r\n                    <div class="field-wrapper datePickerBox has-value" style="padding-top: 0;">\r\n                        <input type="text" value="" id="updateDate" readonly="true" class="form-ctrl bsDatepicker"\r\n                            style="border: 1px solid #0084f6;float: right;border-radius: 4px;" name="toDate"\r\n                            placeholder="Select Date" bsDatepicker (ngModelChange)="dateValidationForFuture($event)"\r\n                            [(ngModel)]="from_date" />\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class="col-lg-3 col-md-3 col-sm-3">\r\n                    <div class="field-wrapper datePickerBox has-value" style="padding-top: 0;">\r\n                        <input type="text" value="" id="updateDate" readonly="true" class="form-ctrl bsDatepicker"\r\n                            style="border: 1px solid #0084f6;float: right;border-radius: 4px;" name="toDate"\r\n                            placeholder="Select Date" bsDatepicker (ngModelChange)="dateValidationForFuture($event)"\r\n                            [(ngModel)]="to_date" />\r\n                    </div>\r\n    \r\n                </div>\r\n    \r\n                <div class="col-lg-1 col-md-1 col-sm-1">\r\n                    <button id="videowise" class="go btnside" (click)="custom()">GO</button>\r\n                </div>\r\n            \x3c!-- </div> --\x3e\r\n        </div>\r\n    \r\n        <div class="col-lg-2 col-md-2 col-sm-2">\r\n            <select name="filter" id="filter" class="selectFilter " (change)="select($event.target.value)">\r\n                <option value="daily">Select</option>\r\n                <option value="monthly">Monthly</option>\r\n                <option value="yearly">Yearly</option>\r\n                <option value="custom">Custom</option>\r\n            </select>\r\n        </div>\r\n    \x3c!-- </div> --\x3e\r\n</div>\r\n<div class="row">\r\n</div>\r\n\r\n\r\n\x3c!-- <div class="row" style="margin-top: 18px;"\r\n    *ngIf="(dropDownFilter && dateWiseSelection) || (dropDownFilerVideo && videoWiseSelection)"> --\x3e\r\n<div #chartWrap id="chartWrap" style="margin-top: 10px;margin-bottom: 10px;" *ngIf="dateWiseSelection">\r\n</div>\r\n<div *ngIf="dateWiseSelection">\r\n    <table class="tableBodyScroll">\r\n        <thead>\r\n            <tr>\r\n                <th style="width: 10%;">Sr. No.</th>\r\n                <th>Date</th>\r\n                <th>Bandwidth (MB)</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor="let data  of weekData; let i =index">\r\n                <td style="width: 10%;">{{i+1}}</td>\r\n                <td>\r\n                    <a style="color:#0084f6" *ngIf="chartFormat == \'DD-MMM-YYYY\'" (click)="videoWise(data.date,10,1)"> {{data.date | date: \'dd-MMM-yyyy\'}}</a>\r\n                    <a style="color:#0084f6" *ngIf="chartFormat != \'DD-MMM-YYYY\'" (click)="videoWise(data.date,10,1)"> {{data.date}}</a>\r\n                </td>\r\n                <td>\r\n                    {{data.consumed_bandwidth}}\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n\r\n    </table>\r\n</div>\r\n<pagination *ngIf="dateWiseSelection" (goPage)="fetchTableDataByPage($event)" (goNext)="fetchNext()"\r\n    (goPrev)="fetchPrevious()" [pagesToShow]="10" [page]="PageIndex" [perPage]="displayBatchSize" [sizeArr]="sizeArr"\r\n    [count]="totalRecords" (sizeChange)="updateTableBatchSize($event)">\r\n</pagination>\r\n\r\n\r\n<div *ngIf="videoWiseSelection">\r\n    <table class="tableBodyScroll" style="margin-top: 20px;">\r\n        <thead>\r\n            <tr>\r\n                <th>Video Title</th>\r\n                <th>Size (MB)</th>\r\n                <th>Consumed Bandwidth (MB)</th>\r\n                <th>Viewed</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody style="max-height: 60vh;min-height: 60vh;">\r\n            <tr *ngFor="let data  of videoData; let i =index">\r\n                <td>\r\n                    {{data.video_title}}\r\n                </td>\r\n                <td>\r\n                    {{data.total_consumed_storage}}\r\n                </td>\r\n                <td>\r\n                    {{data.total_consumed_bandwidth}}\r\n                </td>\r\n                <td>\r\n                    <a style="color: #0084f6;" (click)="userwise(data.video_id, data.video_title, 10,1)">{{data.watch_count}}</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n\r\n    </table>\r\n    <pagination (goPage)="fetchTableDataByPage($event)" (goNext)="fetchNext()" (goPrev)="fetchPrevious()"\r\n        [pagesToShow]="10" [page]="PageIndex" [perPage]="displayBatchSize" [sizeArr]="sizeArr" [count]="totalRecords"\r\n        (sizeChange)="updateTableBatchSize($event)">\r\n    </pagination>\r\n    \x3c!-- <mat-paginator [length]="totalElements" [pageSize]="10" [pageSizeOptions]="[5, 10, 25, 100]"\r\n        (page)="onPageChange($event)">\r\n    </mat-paginator> --\x3e\r\n</div>\r\n<div *ngIf="userWiseSelection">\r\n    <table class="tableBodyScroll" style="margin-top: 20px;">\r\n        <thead>\r\n            <tr>\r\n                <th>Username</th>\r\n                <th>Watch Duration (min)</th>\r\n                <th>Played Date</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody style="max-height: 60vh;min-height: 60vh;">\r\n            <tr *ngFor="let data of userwiseDetail;let i =index">\r\n                <td>\r\n                    {{data.name}}\r\n                </td>\r\n                <td>\r\n                    {{data.watch_duration}}\r\n                </td>\r\n                <td>\r\n                    {{data.created_date}}\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n\r\n    </table>\r\n    <pagination (goPage)="fetchTableDataByPage($event)" (goNext)="fetchNext()" (goPrev)="fetchPrevious()"\r\n        [pagesToShow]="10" [page]="PageIndex" [perPage]="displayBatchSize" [sizeArr]="sizeArr" [count]="totalRecords"\r\n        (sizeChange)="updateTableBatchSize($event)">\r\n    </pagination>\r\n</div>\r\n\r\n<div id="helpFAQ" class="modal fade" role="dialog">\r\n    <div class="modal-dialog" style="top: 5%;">\r\n      <div class="modal-content">\r\n        <div class="modal-header" style="border-radius: 6px;">\r\n          <button type="button" class="close" data-dismiss="modal">&times;</button>\r\n          <h2 class="modal-title">Help</h2>\r\n        </div>\r\n        <div class="modal-body" style="margin-left: 15px;">\r\n          <div class="new-modules-list" style="margin-bottom: 15px;">                            \r\n            <ol style="list-style-type: disc;">\r\n              <li style="font-weight: 100;">By default admin can check Date-Wise bandwidth consumption Graph by monthly, yearly or custom date by simply clicking on filter option.\r\n              </li>\r\n              <li style="font-weight: 100;">To check Video wise consumption details, admin need to click on date shown on page.\r\n            </li>\r\n            <li style="font-weight: 100;">After clicked on viewed count on Videowise page, admin can see user wise data for\r\n                that video.\r\n            </li>\r\n            </ol>\r\n        </div>\r\n        <div class="modal-footer">\r\n          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>'},YSEa:function(e,t,i){"use strict";i.r(t),t.default=".btnside {\n  border: 1px solid #0084f6;\n  background: white;\n  border-radius: 4px;\n  width: 100%;\n  padding: 5px;\n  color: #0084f6;\n  font-weight: 600;\n}\n\n.btndisable {\n  border: 1px solid grey;\n  background: white;\n  border-radius: 4px;\n  width: 100%;\n  padding: 5px;\n  color: grey;\n  font-weight: 600;\n}\n\n.wise {\n  width: 29%;\n}\n\n.field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 2px;\n  top: 3px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n::-moz-placeholder {\n  color: rgba(211, 211, 211, 0.575);\n  opacity: 1;\n}\n\n:-ms-input-placeholder {\n  color: rgba(211, 211, 211, 0.575);\n  opacity: 1;\n}\n\n::placeholder {\n  color: rgba(211, 211, 211, 0.575);\n  opacity: 1;\n}\n\n.selectFilter {\n  float: right;\n  border: 1px solid #0084f6;\n  border-radius: 4px;\n  color: #0084f6;\n  padding: 4px;\n}\n\n.go {\n  background: #0084f6;\n  color: white;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\nth {\n  background-color: #DFE5F0;\n  color: black;\n  padding: 6px 2px;\n}\n\ntr {\n  border-radius: 12px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.tableBodyScroll tbody {\n  display: block;\n  max-height: 35vh;\n  min-height: 35vh;\n  overflow-y: auto;\n  background: #ffffff;\n}\n\n.tableBodyScroll thead,\ntbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n\n.search {\n  border: 1px solid #0084f6;\n  padding: 4px;\n  border-radius: 4px;\n}\n\n.link, a {\n  text-decoration: none;\n  color: black;\n  cursor: pointer;\n}\n\na:hover {\n  color: #0084f6;\n}\n\ntable tr {\n  cursor: default;\n}\n\n.field-wrapper .form-ctrl {\n  color: #0084f6;\n}\n\n.grey {\n  border: 1px solid grey;\n  background: white;\n  border-radius: 4px;\n  width: 100%;\n  padding: 5px;\n  color: grey;\n  font-weight: 600;\n}\n\n.head {\n  margin-left: 15px;\n  margin-bottom: 10px;\n  font-size: initial;\n}\n"},ikoY:function(e,t,i){"use strict";i.r(t),t.default="th {\n  background-color: #DFE5F0;\n  color: black;\n  padding: 6px 2px;\n}\n\ntr {\n  border-radius: 12px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.tableBodyScroll tbody {\n  display: block;\n  max-height: 65vh;\n  min-height: 65vh;\n  overflow-y: auto;\n  background: #ffffff;\n}\n\n.tableBodyScroll thead,\ntbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n\n.search {\n  border: 1px solid #0084f6;\n  padding: 4px;\n  border-radius: 4px;\n}\n\n.link, a {\n  text-decoration: none;\n  color: black;\n  cursor: pointer;\n}\n\na:hover {\n  color: #0084f6;\n}\n\ntable tr {\n  cursor: default;\n}\n\n.field-wrapper .form-ctrl {\n  color: #0084f6;\n}\n"},lgLs:function(e,t,i){"use strict";i.r(t),t.default='<div *ngIf="allVideo" style="margin-left: 15px;">\r\n    <div>Total number of Videos: {{totalRecords}}</div>\r\n\r\n    <table class="tableBodyScroll" style="margin-top: 20px;">\r\n        <thead>\r\n            <tr>\r\n                \x3c!-- <th>Date</th> --\x3e\r\n                <th>Video Title</th>\r\n                <th>Storage (MB)</th>\r\n                <th>Consumed Bandwidth (MB)</th>\r\n                <th>Viewed</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor="let data  of allVideoData; let i =index">\r\n                <td *ngIf="data.video_title == null">\r\n                    -\r\n                </td>\r\n                <td *ngIf="data.video_title != null">\r\n                    {{data.video_title}}\r\n                </td>\r\n                <td>\r\n                    {{data.total_consumed_storage}}\r\n                </td>\r\n                <td>\r\n                    {{data.total_consumed_bandwidth}}\r\n                </td>\r\n                <td>\r\n                    <a style="color: #0084f6;" (click)="totalVideoTitle(data.video_id,data.video_title,10,1)">{{data.watch_count}}</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n\r\n    </table>\r\n    <pagination (goPage)="fetchTableDataByPage($event)" (goNext)="fetchNext()" (goPrev)="fetchPrevious()"\r\n        [pagesToShow]="10" [page]="PageIndex" [perPage]="displayBatchSize" [sizeArr]="sizeArr" [count]="totalRecords"\r\n        (sizeChange)="updateTableBatchSize($event)">\r\n    </pagination>\r\n</div>\r\n\r\n<div *ngIf="title">\r\n    <div>Video Title: {{videoTitle}}</div>\r\n\r\n    <table class="tableBodyScroll" style="margin-top: 20px;">\r\n        <thead>\r\n            <tr>\r\n                \x3c!-- <th>Date</th> --\x3e\r\n                <th>Username</th>\r\n                <th>Watch Duration</th>\r\n                <th>Played Date Time</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor="let data of userwiseDetail;let i =index">\r\n                <td>\r\n                    {{data.name}}\r\n                </td>\r\n                <td>\r\n                    {{data.watch_duration}}\r\n                </td>\r\n                <td>\r\n                    {{data.created_date}}\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n\r\n    </table>\r\n    <pagination (goPage)="fetchTableDataByPage($event)" (goNext)="fetchNext()" (goPrev)="fetchPrevious()"\r\n        [pagesToShow]="10" [page]="PageIndex" [perPage]="displayBatchSize" [sizeArr]="sizeArr" [count]="totalRecords"\r\n        (sizeChange)="updateTableBatchSize($event)">\r\n    </pagination>\r\n</div>'}}]);