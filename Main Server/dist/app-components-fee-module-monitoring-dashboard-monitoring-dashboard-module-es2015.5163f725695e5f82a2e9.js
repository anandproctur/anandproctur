(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"0ler":function(e,t,a){"use strict";a.r(t),t.default=".pie-wrapper {\n  box-shadow: 0px 0px 2px 1px;\n  background: #fff;\n}\n\n.pie-wrapper .row {\n  margin: 0px;\n}\n\n.pie-wrapper .field-wrapper {\n  width: 200px;\n  float: right;\n  margin-right: 10px;\n}\n"},"2cUC":function(e,t,a){"use strict";a.r(t),t.default=".line-wrapper {\n  margin: 20px 14px 10px;\n  box-shadow: 0px 0px 2px 1px;\n  background: #fff;\n}\n\n.line-wrapper .row {\n  margin: 0px;\n}\n\n.line-wrapper .field-wrapper {\n  width: 200px;\n  float: right;\n  margin-right: 10px;\n}\n"},"2szM":function(e,t,a){"use strict";a.r(t),t.default='<section class="pie-wrapper">\r\n\r\n    <section class="row pie-filter" [ngClass]="{\'hide\': !isDataLoaded}">\r\n        <div class="field-wrapper">\r\n            \x3c!-- <label for="duration">Duration</label> --\x3e\r\n            <select name="" id="duration" [(ngModel)]="rangeSelected" (ngModelChange)="dateRangeUpdated($event)" class="form-ctrl">\r\n                <option value="1" selected="">Last 7 days</option>\r\n                <option value="2">This month</option>\r\n                <option value="3">Last 30 days</option>\r\n                <option value="4">Last month</option>\r\n                <option value="5">Last 3 months</option>\r\n            </select>\r\n        </div>\r\n    </section>\r\n    <section class="row" [ngClass]="{\'hide\': !isDataLoaded}">\r\n        <div id="pieContainer">\r\n        </div>\r\n    </section>\r\n\r\n    <div style="padding: 5px;" [ngClass]="{\'hide\': isDataLoaded}">\r\n        Loading Data...\r\n    </div>\r\n\r\n</section>'},Bqnk:function(e,t,a){"use strict";a.r(t),t.default='<section class="line-wrapper">\r\n\r\n    <section class="row pie-filter" [ngClass]="{\'hide\': !isDataLoaded}">\r\n        <div class="field-wrapper">\r\n            \x3c!-- <label for="duration">Duration</label> --\x3e\r\n            <select name="" id="duration" [(ngModel)]="rangelineSelected" (ngModelChange)="datelineRangeUpdated($event)" class="form-ctrl">\r\n                <option value="1" selected="">Last 7 days</option>\r\n                <option value="2">This Month</option>\r\n                <option value="3">Last 30 Days</option>\r\n                <option value="4">Last Month</option>\r\n                <option value="5">Last 3 Months</option>\r\n            </select>\r\n        </div>\r\n    </section>\r\n    <section class="row" [ngClass]="{\'hide\': !isDataLoaded}">\r\n        <div id="lineContainer">\r\n        </div>\r\n    </section>\r\n\r\n    <div style="padding: 5px;" [ngClass]="{\'hide\': isDataLoaded}">\r\n        Loading Data...\r\n    </div>\r\n\r\n</section>'},DXej:function(e,t,a){"use strict";a.r(t),t.default=".monitor-wrapper {\n  width: 100%;\n  background: #efefef;\n  overflow: auto;\n}\n\n.monitor-wrapper ::-webkit-scrollbar {\n  display: block;\n}\n\n.monitor-wrapper .header {\n  margin: 10px 12px;\n  width: 98%;\n  padding: 15px 15px;\n  border-bottom: 1px solid rgba(10, 10, 10, 0.5);\n}\n"},JEgh:function(e,t,a){"use strict";a.r(t),a.d(t,"MonitoringDashboardModule",(function(){return A}));var n=a("fXoL"),r=a("ofXK"),o=a("3Pt+"),i=a("wd/R"),s=(a("yLV6"),a("lJxs")),l=a("tk/3"),c=a("xf7K"),d=function(e,t,a,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,a,i):r(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let p=(()=>{let e=class{constructor(e,t){this.http=e,this.auth=t,this.baseUrl="",this.institute_id=sessionStorage.getItem("institute_id"),this.auth.currentAuthKey.subscribe(e=>{this.Authorization=e,this.headers=new l.e({"Content-Type":"application/json",Authorization:this.Authorization})}),this.auth.currentInstituteId.subscribe(e=>{this.institute_id=e}),this.baseUrl=this.auth.getBaseUrl()}fetchFeeStackMonitor(){let e=this.baseUrl+"/api/v1/studentWise/fee/students/highCharts/"+this.institute_id;return this.http.get(e,{headers:this.headers}).pipe(Object(s.a)(e=>e,e=>e))}fetchFeeMonitor(e){let t=this.baseUrl+"/api/v1/studentWise/fee/students/highChartsRender";return this.http.post(t,e,{headers:this.headers}).pipe(Object(s.a)(e=>e,e=>e))}};return e.ctorParameters=()=>[{type:l.b},{type:c.a}],e=d([Object(n.Injectable)(),h("design:paramtypes",[l.b,c.a])],e),e})();var f=a("tyNb"),u=function(e,t,a,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,a,i):r(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i},m=function(e){return e&&e.__esModule?e:{default:e}};let g=(()=>{let e=class{};return e=u([Object(n.Component)({selector:"dashboard-home",template:m(a("slQ2")).default,styles:[m(a("DXej")).default]})],e),e})();var y=function(e,t,a,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,a,i):r(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i};let D=(()=>{let e=class{};return e=y([Object(n.NgModule)({imports:[f.RouterModule.forChild([{path:"",component:g,pathMatch:"prefix",children:[{path:"",redirectTo:"home"},{path:"home",component:g}]}])],exports:[f.RouterModule]})],e),e})();var b=function(e,t,a,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,a,i):r(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i},M=function(e){return e&&e.__esModule?e:{default:e}};let Y=(()=>{let e=class{};return e=b([Object(n.Component)({selector:"monitoring-dashboard",template:M(a("wZj3")).default,styles:[M(a("pawv")).default]})],e),e})();var v=a("6n/F"),w=a("OHzG"),_=function(e,t,a,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,a,i):r(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e){return e&&e.__esModule?e:{default:e}};let O=(()=>{let e=class{constructor(e,t){this.getService=e,this._commService=t,this.datelineRange=[],this.rangelineSelected="2",this.rangeType="This Month",this.isDataLoaded=!1,this.datelineRange[0]=i(new Date).startOf("month").format("YYYY-MM-DD"),this.datelineRange[1]=i(new Date).endOf("month").format("YYYY-MM-DD")}ngOnInit(){this.fetchFeeStackMonitor()}datelineRangeUpdated(e){1==e?(this.datelineRange[1]=i(new Date).format("YYYY-MM-DD"),this.datelineRange[0]=i(new Date).subtract(7,"days").format("YYYY-MM-DD"),this.rangeType="Last 7 days"):2==e?(this.datelineRange[0]=i(new Date).startOf("month").format("YYYY-MM-DD"),this.datelineRange[1]=i(new Date).endOf("month").format("YYYY-MM-DD"),this.rangeType="This Month"):3==e?(this.datelineRange[1]=i(new Date).format("YYYY-MM-DD"),this.datelineRange[0]=i(new Date).subtract(30,"days").format("YYYY-MM-DD"),this.rangeType="Last 30 Days"):4==e?(this.datelineRange[0]=i(new Date).startOf("month").subtract(1,"months").format("YYYY-MM-DD"),this.datelineRange[1]=i(new Date).startOf("month").subtract(1,"months").endOf("month").format("YYYY-MM-DD"),this.rangeType="Last Month"):5==e&&(this.datelineRange[0]=i(new Date).startOf("month").subtract(3,"months").format("YYYY-MM-DD"),this.datelineRange[1]=i(new Date).format("YYYY-MM-DD"),this.rangeType="Last 3 Months"),this.fetchFeeStackMonitor()}fetchFeeStackMonitor(){let e={from_date:i(this.datelineRange[0]).format("YYYY-MM-DD"),high_charts_name:"",institute_id:sessionStorage.getItem("institute_id"),to_date:i(this.datelineRange[1]).format("YYYY-MM-DD")};this.getService.fetchFeeMonitor(e).subscribe(e=>{this.isDataLoaded=!0,this.generateChartData(e)},e=>{this.isDataLoaded=!0})}generateChartData(e){let t=[],a=[];e.map(e=>{t.push(e.paid_date),a.push(e.total_fees)}),this.createChart(t,a)}createChart(e,t){v.chart("lineContainer",{chart:{zoomType:"x"},title:{text:"Fee Collection"},subtitle:{text:this.rangeType},xAxis:{categories:e},yAxis:{title:{text:"Amount(Rs)"}},tooltip:{pointFormat:'<span style="color:{series.color}">\u25cf</span> {series.name}: <b> '+this._commService.currency_default_symbol+" {point.y} </b>"},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,v.getOptions().colors[0]],[1,v.Color(v.getOptions().colors[1])]]},marker:{radius:2},lineWidth:1,states:{hover:{lineWidth:1}},threshold:null},line:{dataLabels:{enabled:!0,format:this._commService.currency_default_symbol+" {y}"},enableMouseTracking:!0}},series:[{name:"Dates",data:t}]})}};return e.ctorParameters=()=>[{type:p},{type:w.a}],e=_([Object(n.Component)({selector:"fee-line",template:x(a("Bqnk")).default,styles:[x(a("2cUC")).default]}),R("design:paramtypes",[p,w.a])],e),e})();var C=a("N+K7"),j=function(e,t,a,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,a,i):r(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i},k=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},L=function(e){return e&&e.__esModule?e:{default:e}};let S=(()=>{let e=class{constructor(e,t,a){this.getService=e,this._commService=t,this.httpService=a,this.FeeDataData=[0,0,0,0],this.isDataLoaded=!1,this.dateRange=[],this.rangeSelected="2",this.Payment_Modes=[],this.dateRange[0]=i(new Date).startOf("month").format("YYYY-MM-DD"),this.dateRange[1]=i(new Date).endOf("month").format("YYYY-MM-DD")}ngOnInit(){this.fetchFeeStackMonitor()}dateRangeUpdated(e){1==e?(this.dateRange[1]=i(new Date).format("YYYY-MM-DD"),this.dateRange[0]=i(new Date).subtract(7,"days").format("YYYY-MM-DD")):2==e?(this.dateRange[0]=i(new Date).startOf("month").format("YYYY-MM-DD"),this.dateRange[1]=i(new Date).endOf("month").format("YYYY-MM-DD")):3==e?(this.dateRange[1]=i(new Date).format("YYYY-MM-DD"),this.dateRange[0]=i(new Date).subtract(30,"days").format("YYYY-MM-DD")):4==e?(this.dateRange[0]=i(new Date).startOf("month").subtract(1,"months").format("YYYY-MM-DD"),this.dateRange[1]=i(new Date).startOf("month").subtract(1,"months").endOf("month").format("YYYY-MM-DD")):5==e&&(this.dateRange[0]=i(new Date).startOf("month").subtract(3,"months").format("YYYY-MM-DD"),this.dateRange[1]=i(new Date).format("YYYY-MM-DD")),this.fetchFeeStackMonitor()}fetchFeeStackMonitor(){let e={from_date:i(this.dateRange[0]).format("YYYY-MM-DD"),high_charts_name:"pieCharts",institute_id:sessionStorage.getItem("institute_id"),to_date:i(this.dateRange[1]).format("YYYY-MM-DD")};this.getService.fetchFeeMonitor(e).subscribe(e=>{this.isDataLoaded=!0,this.generateChartData(e)},e=>{this.isDataLoaded=!1})}generateChartData(e){let t=e;this.httpService.getData("/api/v1/masterData/type/PAYMENT_MODES").subscribe(e=>{this.Payment_Modes=e,this.Payment_Modes&&this.Payment_Modes.length>0&&this.Payment_Modes.forEach(e=>{e.value=0}),t.forEach(e=>{this.Payment_Modes.forEach(t=>{e.paymentMode==t.data_key&&(t.value=e.total_fees)})}),this.createChart(this.Payment_Modes)},e=>{console.log(e)})}createChart(e){let t=[];e.forEach(e=>{if("Cash"==e.data_key){let a={name:e.data_key,y:e.value,sliced:!0,selected:!0};t.push(a)}else{let a={name:e.data_key,y:e.value};t.push(a)}}),v.chart("pieContainer",{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie",options3d:{enabled:!0,alpha:45,beta:0}},title:{text:"Payment Mode"},tooltip:{pointFormat:'<span style="color:{series.color}">\u25cf</span> {series.name}: <b> '+this._commService.currency_default_symbol+" {point.y} </b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:this._commService.currency_default_symbol+"{y}"},showInLegend:!0}},series:[{name:"Payment Mode",colorByPoint:!0,data:t}]})}};return e.ctorParameters=()=>[{type:p},{type:w.a},{type:C.a}],e=j([Object(n.Component)({selector:"fee-pie",template:L(a("2szM")).default,styles:[L(a("0ler")).default]}),k("design:paramtypes",[p,w.a,C.a])],e),e})();var P=function(e,t,a,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,a,i):r(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i},F=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},T=function(e){return e&&e.__esModule?e:{default:e}};let I=(()=>{let e=class{constructor(e,t){this.getService=e,this._commService=t,this.isDataLoaded=!1,this.FeeDataData=[0,0,0,0]}ngOnInit(){this.fetchFeeStackMonitor()}fetchFeeStackMonitor(){this.getService.fetchFeeStackMonitor().subscribe(e=>{this.isDataLoaded=!0,this.isDataLoaded&&this.generateChartData(e)},e=>{this.isDataLoaded=!1})}generateChartData(e){let t=parseInt(e.total_future_dues),a=parseInt(e.total_dues_amount_in_next_thirty_days),n=parseInt(e.total_dues_pending),r=parseInt(e.total_paid_amount_in_last_thirty_days);this.createChart(t,a,n,r)}createChart(e,t,a,n){v.chart("feestackbar",{chart:{type:"column",options3d:{enabled:!0,alpha:15,beta:15,viewDistance:25,depth:40},backgroundColor:"#FFF"},title:{text:""},xAxis:{categories:["Future dues","Dues in next 30 days","Past dues","Paid in last 30 days"],labels:{skew3d:!0,style:{fontSize:"16px"}}},yAxis:{visible:!1,allowDecimals:!1,min:0,title:{text:"Amount in Rs",skew3d:!0}},tooltip:{headerFormat:"<b>{point.key}</b><br>",pointFormat:"{series.name}: "+this._commService.currency_default_symbol+" {point.y}"},plotOptions:{column:{dataLabels:{enabled:!0,color:"#FFF",format:this._commService.currency_default_symbol+" {y}",x:0},stacking:"normal",depth:40}},series:[{data:[{y:e,name:"Future dues",color:"#80cbc4"},{y:t,name:"Dues in next 30 days",color:"#37474f"},{y:a,name:"Past dues",color:"#536DFE"},{y:n,name:"Paid in last 30 days",color:"#2e7d32"}]}]})}};return e.ctorParameters=()=>[{type:p},{type:w.a}],e=P([Object(n.Component)({selector:"fee-stackbar",template:T(a("TMT7")).default,styles:[T(a("zUNO")).default]}),F("design:paramtypes",[p,w.a])],e),e})();var U=function(e,t,a,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,a,i):r(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i};let A=(()=>{let e=class{};return e=U([Object(n.NgModule)({imports:[o.FormsModule,o.ReactiveFormsModule,r.CommonModule,D],declarations:[Y,g,O,S,I],entryComponents:[O,S,I],providers:[p]})],e),e})()},TMT7:function(e,t,a){"use strict";a.r(t),t.default='<section class="stackwrapper">\r\n\r\n    <div [ngClass]="{\'hide\': !isDataLoaded}" id="feestackbar">\r\n    </div>\r\n\r\n    <div style="padding: 5px;" [ngClass]="{\'hide\': isDataLoaded}">\r\n        Loading Data...\r\n    </div>\r\n\r\n</section>'},pawv:function(e,t,a){"use strict";a.r(t),t.default=""},slQ2:function(e,t,a){"use strict";a.r(t),t.default='<section class="monitor-wrapper">\r\n\r\n    <section class="c-lg-12 header">\r\n        <h2 class="pull-left">\r\n            <a routerLink="/view/fee">\r\n                Fees\r\n            </a>\r\n            <i style="font-family: \'FontAwesome\';" class="fas fa-angle-right"></i> Monitoring Dashboard\r\n        </h2>\r\n        <aside class="pull-right">\r\n        </aside>\r\n    </section>\r\n\r\n    <div style="margin-top: 5px;" class="c-lg-12">\r\n        <div class="c-lg-4">\r\n            <fee-stackbar></fee-stackbar>\r\n        </div>\r\n        <div class="c-lg-2"></div>\r\n        <div class="c-lg-6">\r\n            <fee-pie></fee-pie>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="c-lg-12">\r\n        <fee-line></fee-line>\r\n    </div>\r\n\r\n</section>'},wZj3:function(e,t,a){"use strict";a.r(t),t.default="<router-outlet></router-outlet>"},zUNO:function(e,t,a){"use strict";a.r(t),t.default=".stackwrapper {\n  padding-top: 44px;\n  box-shadow: 0px 0px 2px 1px;\n  background: #fff;\n}\n"}}]);