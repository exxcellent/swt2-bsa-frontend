(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-settings-settings-module"],{

/***/ "./src/app/modules/settings/components/details/details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/settings/components/details/details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"settingsDetails\">\n  <h1 id=\"heading\">{{ 'DETAILS.TITLE' | translate }}</h1>\n\n  <!-- Data selected -->\n  <div *ngIf=\"dataSelected == true\">\n\n    <h3 id=\"headingKey\">{{ 'DETAILS.KEY' | translate }}: {{data.key}}</h3>\n    <h3 id=\"headingVersion\">{{ 'DETAILS.VERSION' | translate }}:</h3>\n\n    <div>\n      <form class=\"needs-validation\"\n            novalidate>\n        <!-- Input Key -->\n        <div class=\"form-group row\">\n          <label id=\"labelKeyData\"\n                 for=\"inputKeyData\"\n                 class=\"col-sm-2 col-form-label\">{{ 'DETAILS.KEY' | translate }}</label>\n          <div class=\"col-sm-10\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   id=\"inputKeyData\"\n                   [(ngModel)]=\"data.key\"\n                   name=\"key\"\n                   placeholder=\"{{data.key}}\"\n                   readonly>\n          </div>\n        </div>\n        <!-- Input Value -->\n        <div class=\"form-group row\">\n          <label id=\"labelValueData\"\n                 for=\"inputValueData\"\n                 class=\"col-sm-2 col-form-label\">{{ 'DETAILS.VALUE' | translate }}</label>\n          <div class=\"col-sm-10\">\n            <input (keyup.enter)=\"saveData()\"\n                   class=\"form-control\"\n                   type=\"text\"\n                   id=\"inputValueData\"\n                   [(ngModel)]=\"data.value\"\n                   name=\"value\"\n                   placeholder=\"{{data.value}}\">\n          </div>\n        </div>\n      </form>\n\n      <!-- Button Footer -->\n      <div class=\"menu\">\n        <a id=\"backData\"\n           routerLink=\"/settings/overview\">\n          <button type=\"button\"\n                  class=\"btn\">\n            <fa-icon [icon]=\"faArrowLeft\"></fa-icon>\n          </button>\n        </a>\n        <a id=\"deleteData\">\n          <button type=\"button\"\n                  class=\"btn btn-danger\"\n                  (click)=\"deleteThisData()\">{{ 'DETAILS.DELETE' | translate }}\n          </button>\n        </a>\n        <a id=\"saveData\"\n           routerLink=\"{{'/settings/details/' + data.key}}\">\n          <button type=\"button\"\n                  class=\"btn btn-success\"\n                  (click)=\"saveData()\">{{ 'DETAILS.SAVE' | translate }}\n          </button>\n        </a>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- No Data selected -->\n  <div *ngIf=\"dataSelected == false\">\n\n    <form>\n      <!-- Input Key -->\n      <div class=\"form-group row\">\n        <label id=\"labelKeyNoData\"\n               for=\"inputKeyNoData\"\n               class=\"col-sm-2 col-form-label\">{{ 'DETAILS.KEY' | translate }}</label>\n        <div class=\"col-sm-10\">\n          <input class=\"form-control\"\n                 type=\"text\"\n                 id=\"inputKeyNoData\"\n                 [(ngModel)]=\"data.key\"\n                 name=\"key\"\n                 placeholder=\"Key\"> <!-- readonly -->\n        </div>\n      </div>\n      <!-- Input Value -->\n      <div class=\"form-group row\">\n        <label id=\"labelValueNoData\"\n               for=\"inputValueNoData\"\n               class=\"col-sm-2 col-form-label\">{{ 'DETAILS.VALUE' | translate }}</label>\n        <div class=\"col-sm-10\">\n          <input (keyup.enter)=\"saveNewData()\"\n                 class=\"form-control\"\n                 type=\"text\"\n                 id=\"inputValueNoData\"\n                 [(ngModel)]=\"data.value\"\n                 name=\"value\"\n                 placeholder=\"Value\"> <!-- readonly -->\n                                      <!-- number input\n                                      <input type=\"number\" min=\"0\" step=\"1\" data-bind=\"value:replyNumber\" [value]=\"data.value\" class=\"form-control\" id=\"inputValue\" placeholder=\"Value\"> -->\n        </div>\n      </div>\n    </form>\n\n    <!-- Button Footer -->\n    <div class=\"menu\">\n      <a id=\"backNoData\"\n         routerLink=\"/settings/overview\">\n        <button type=\"button\"\n                class=\"btn\">\n          <fa-icon [icon]=\"faArrowLeft\"></fa-icon>\n        </button>\n      </a>\n      <a id=\"saveNoData\"\n         routerLink=\"/settings/details\">\n        <button type=\"button\"\n                class=\"btn btn-success\"\n                (click)=\"saveNewData()\">{{ 'DETAILS.SAVE' | translate }}\n        </button>\n      </a>\n    </div>\n\n  </div>\n</div>\n\n<!-- <pre><code>{{data|json}}</code></pre> -->\n"

/***/ }),

/***/ "./src/app/modules/settings/components/details/details.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/settings/components/details/details.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Farbkonzept Website */\n.btn-info {\n  color: #02bdd5; }\n.btn {\n  margin: 5px; }\n.menu {\n  display: flex;\n  justify-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQUE7QUFTQTtFQUNFLGNBQWMsRUFBQTtBQUdoQjtFQUNFLFdBQVcsRUFBQTtBQUliO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZhcmJrb256ZXB0IFdlYnNpdGUgKi9cbiRwcmltYXJ5OiAjMDJiZGQ1OyAvLyBMaW5rcywgTmF2YmFyXG4kcHJpbWFyeS1saWdodDogI2I0ZmZmZjsgLy8gU2lkZWJhci1CYWNrZ3JvdW5kXG4kcHJpbWFyeS1kYXJrOiAjMDA3YzkxOyAvLyBTaWRlYmFyLUZvbnRcbiRzZWNvbmRhcnk6ICNmZmMxMDc7IC8vIGhvdmVyIFRhYmxlc1xuJHNlY29uZGFyeS1saWdodDogI2ZmZjM1MDtcbiRzZWNvbmRhcnktZGFyazogI2ZmODMzYTsgLy8gaG92ZXIgTGlua3MsIExvZ29cblxuLy8gY2hhbmdlIGJvb3RzdHJhcFxuLmJ0bi1pbmZvIHtcbiAgY29sb3I6ICMwMmJkZDU7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDVweDtcbn1cblxuLy8gQnV0dG9uIEZvb3RlclxuLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/settings/components/details/details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/settings/components/details/details.component.ts ***!
  \**************************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _types_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types/data */ "./src/app/modules/settings/types/data.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_settings_data_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/settings-data-provider.service */ "./src/app/modules/settings/services/settings-data-provider.service.ts");








var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faArrowLeft"];
        this.dataSelected = false; // is data selceted -> chooses view
        this.data = new _types_data__WEBPACK_IMPORTED_MODULE_5__["Data"]();
        this.dataKey = ''; // key for url -> which data is selected
        this.destinationRouteAfterDelete = '/settings/overview';
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.initDialog();
    };
    /**
     * get Data for the table from the service
     * uses the one on the index or none
     */
    DetailsComponent.prototype.getData = function () {
        // this.dataService.getData().subscribe(datas => this.datas = datas);
        // this.dataService.findAll().subscribe(datas => this.datas = datas);
    };
    /**
     * Add new data to database
     * calls service
     * resets data of this for next input
     */
    DetailsComponent.prototype.saveNewData = function () {
        this.dataService.addOne(new _types_data__WEBPACK_IMPORTED_MODULE_5__["Data"](this.data.key, this.data.value)).then((function (response) { return console.log('Setting persisted'); }));
        this.data = new _types_data__WEBPACK_IMPORTED_MODULE_5__["Data"]();
    };
    /**
     * updates already existing data in database
     * calls service
     */
    DetailsComponent.prototype.saveData = function () {
        this.dataService.update(this.data).then((function (response) { return console.log('Setting updated'); }));
    };
    /**
     * delete selected data from database
     * calls service
     */
    DetailsComponent.prototype.deleteThisData = function () {
        var _this = this;
        this.dataService.deleteById(this.dataKey).then(function (response) {
            console.log('Setting deleted');
            _this.router.navigateByUrl(_this.destinationRouteAfterDelete);
        });
    };
    DetailsComponent.prototype.initDialog = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // if there is a key -> set dataKey to string, set data to selected object
            var settingsKey;
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(params.key)) {
                settingsKey = params.key;
                _this.dataKey = settingsKey;
                _this.dataService.findById(settingsKey).then(function (response) { return _this.data = response.payload; });
                _this.dataSelected = true;
            }
        });
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/modules/settings/components/details/details.component.html"),
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]],
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/modules/settings/components/details/details.component.scss"), __webpack_require__(/*! ./../../../../app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_data_provider_service__WEBPACK_IMPORTED_MODULE_7__["SettingsDataProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/components/overview/overview.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/settings/components/overview/overview.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- fa-*x is the size of the icon with * = 2,3,4,5 -->\n<div id=\"settingsOverview\">\n  <h1>{{ 'TABLE.TITLE' | translate }}</h1>\n\n  <div class=\"menu\">\n    <button id=\"add\"\n            class=\"btn btn-success addData\"\n            routerLink=\"/settings/details\">\n      <fa-icon [icon]=\"faPlus\"></fa-icon>\n    </button>\n\n  </div>\n\n\n  <table id=\"example\"\n         class=\"table table-hover table-sm table-responsive-sm thead-light\"\n         style=\"width:100%\">\n    <!-- Table Head with Headings and sort buttons -->\n    <thead>\n    <tr>\n      <th><h3>{{ 'TABLE.KEY' | translate }}</h3></th>\n      <th>\n        <button class=\"btn btn-link\"\n                (click)=\"sortDataByKey()\">\n          <fa-icon [icon]=\"faSort\"></fa-icon>\n        </button>\n      </th>\n      <th><h3>{{ 'TABLE.VALUE' | translate }}</h3></th>\n      <th>\n        <button class=\"btn btn-link\"\n                (click)=\"sortDataByValue()\">\n          <fa-icon [icon]=\"faSort\"></fa-icon>\n        </button>\n      </th>\n      <th><h3>{{ 'TABLE.ACTION' | translate }}</h3></th>\n    </tr>\n    </thead>\n\n    <!-- Table Body with Data -->\n    <tbody>\n    <!-- ngFor: for loop throug data, ngIf: show if condition true -->\n    <!-- shows data if it is on the shown page of table -->\n    <tr *ngFor=\"let data of datas\">\n      <td *ngIf=\"datas.indexOf(data) >= first && datas.indexOf(data) <= last\"\n          scope=\"row\"\n          colspan=\"2\">{{data.key}}\n      </td>\n      <td *ngIf=\"datas.indexOf(data) >= first && datas.indexOf(data) <= last\"\n          colspan=\"2\">{{data.value}}\n      </td>\n      <td class=\"button-column\"\n          *ngIf=\"datas.indexOf(data) >= first && datas.indexOf(data) <= last\">\n        <a class=\"detailsButton\"\n           class=\"blackLink\"\n           routerLink=\"{{'/settings/details/' + data.key}}\">\n          <fa-icon [icon]=\"faInfoCircle\"\n                   style=\"margin-left:5px;\"></fa-icon>\n        </a>\n        <a class=\"deleteButton\"\n           (click)=\"deleteThisData(data.key)\">\n          <fa-icon [icon]=\"faMinusCircle\"\n                   style=\"margin-left:5px;\"></fa-icon>\n        </a>\n      </td>\n    </tr>\n    <tr *ngIf=\"datas.length == 0\">\n      <td colspan=\"5\"\n          id=\"noData\">{{ 'TABLE.NODATA' | translate }}\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n  <!--Pagination -->\n  <nav *ngIf=\"paginationVisible\"\n       class=\"my-4\">\n    <ul class=\"d-flex justify-content-center pagination pagination-circle pg-blue mb-0\">\n      <!--First-->\n      <li class=\"page-item\">\n        <a class=\"page-link\"\n           mdbWavesEffect\n           (click)=\"firstPage()\">First</a>\n      </li>\n      <!--Numbers-->\n      <li #pages\n          *ngFor=\"let page of pageCount\"\n          class=\"page-item\">\n        <a class=\"page-link\"\n           mdbWavesEffect>{{page}}</a>\n      </li>\n      <!--Last-->\n      <li class=\"page-item\">\n        <a class=\"page-link\"\n           mdbWavesEffect\n           (click)=\"lastPage()\">Last</a>\n      </li>\n    </ul>\n  </nav>\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/settings/components/overview/overview.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/settings/components/overview/overview.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Farbkonzept Website */\ntable.dataTable {\n  clear: both;\n  margin-top: 6px !important;\n  margin-bottom: 6px !important;\n  max-width: none !important;\n  border-collapse: separate !important;\n  border-spacing: 0; }\ntable.dataTable td, table.dataTable th {\n  box-sizing: content-box; }\ntable.dataTable td.dataTables_empty, table.dataTable th.dataTables_empty {\n  text-align: center; }\ntable.dataTable.nowrap th, table.dataTable.nowrap td {\n  white-space: nowrap; }\ndiv.dataTables_wrapper div.dataTables_length label {\n  font-weight: normal;\n  text-align: left;\n  white-space: nowrap; }\ndiv.dataTables_wrapper div.dataTables_length select {\n  width: auto;\n  display: inline-block; }\ndiv.dataTables_wrapper div.dataTables_filter {\n  text-align: right; }\ndiv.dataTables_wrapper div.dataTables_filter label {\n  font-weight: normal;\n  white-space: nowrap;\n  text-align: left; }\ndiv.dataTables_wrapper div.dataTables_filter input {\n  margin-left: 0.5em;\n  display: inline-block;\n  width: auto; }\ndiv.dataTables_wrapper div.dataTables_info {\n  padding-top: 0.85em;\n  white-space: nowrap; }\ndiv.dataTables_wrapper div.dataTables_paginate {\n  margin: 0;\n  white-space: nowrap;\n  text-align: right; }\ndiv.dataTables_wrapper div.dataTables_paginate ul.pagination {\n  margin: 2px 0;\n  white-space: nowrap;\n  justify-content: flex-end; }\ndiv.dataTables_wrapper div.dataTables_processing {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  margin-left: -100px;\n  margin-top: -26px;\n  text-align: center;\n  padding: 1em 0; }\ntable.dataTable thead > tr > th.sorting_asc, table.dataTable thead > tr > th.sorting_desc, table.dataTable thead > tr > th.sorting, table.dataTable thead > tr > td.sorting_asc, table.dataTable thead > tr > td.sorting_desc, table.dataTable thead > tr > td.sorting {\n  padding-right: 30px; }\ntable.dataTable thead > tr > th:active, table.dataTable thead > tr > td:active {\n  outline: none; }\ntable.dataTable thead .sorting, table.dataTable thead .sorting_asc, table.dataTable thead .sorting_desc, table.dataTable thead .sorting_asc_disabled, table.dataTable thead .sorting_desc_disabled {\n  cursor: pointer;\n  position: relative; }\ntable.dataTable thead .sorting:before, table.dataTable thead .sorting:after, table.dataTable thead .sorting_asc:before, table.dataTable thead .sorting_asc:after, table.dataTable thead .sorting_desc:before, table.dataTable thead .sorting_desc:after, table.dataTable thead .sorting_asc_disabled:before, table.dataTable thead .sorting_asc_disabled:after, table.dataTable thead .sorting_desc_disabled:before, table.dataTable thead .sorting_desc_disabled:after {\n  position: absolute;\n  bottom: 0.9em;\n  display: block;\n  opacity: 0.3; }\ntable.dataTable thead .sorting:before, table.dataTable thead .sorting_asc:before, table.dataTable thead .sorting_desc:before, table.dataTable thead .sorting_asc_disabled:before, table.dataTable thead .sorting_desc_disabled:before {\n  right: 1em;\n  content: \"\\2191\"; }\ntable.dataTable thead .sorting:after, table.dataTable thead .sorting_asc:after, table.dataTable thead .sorting_desc:after, table.dataTable thead .sorting_asc_disabled:after, table.dataTable thead .sorting_desc_disabled:after {\n  right: 0.5em;\n  content: \"\\2193\"; }\ntable.dataTable thead .sorting_asc:before, table.dataTable thead .sorting_desc:after {\n  opacity: 1; }\ntable.dataTable thead .sorting_asc_disabled:before, table.dataTable thead .sorting_desc_disabled:after {\n  opacity: 0; }\ndiv.dataTables_scrollHead table.dataTable {\n  margin-bottom: 0 !important; }\ndiv.dataTables_scrollBody table {\n  border-top: none;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important; }\ndiv.dataTables_scrollBody table thead .sorting:before, div.dataTables_scrollBody table thead .sorting_asc:before, div.dataTables_scrollBody table thead .sorting_desc:before, div.dataTables_scrollBody table thead .sorting:after, div.dataTables_scrollBody table thead .sorting_asc:after, div.dataTables_scrollBody table thead .sorting_desc:after {\n  display: none; }\ndiv.dataTables_scrollBody table tbody tr:first-child th, div.dataTables_scrollBody table tbody tr:first-child td {\n  border-top: none; }\ndiv.dataTables_scrollFoot > .dataTables_scrollFootInner {\n  box-sizing: content-box; }\ndiv.dataTables_scrollFoot > .dataTables_scrollFootInner > table {\n  margin-top: 0 !important;\n  border-top: none; }\n@media screen and (max-width: 767px) {\n  div.dataTables_wrapper div.dataTables_length, div.dataTables_wrapper div.dataTables_filter, div.dataTables_wrapper div.dataTables_info, div.dataTables_wrapper div.dataTables_paginate {\n    text-align: center; } }\ntable.dataTable.table-sm > thead > tr > th {\n  padding-right: 20px; }\ntable.dataTable.table-sm .sorting:before, table.dataTable.table-sm .sorting_asc:before, table.dataTable.table-sm .sorting_desc:before {\n  top: 5px;\n  right: 0.85em; }\ntable.dataTable.table-sm .sorting:after, table.dataTable.table-sm .sorting_asc:after, table.dataTable.table-sm .sorting_desc:after {\n  top: 5px; }\ntable.table-bordered.dataTable th, table.table-bordered.dataTable td {\n  border-left-width: 0; }\ntable.table-bordered.dataTable th:last-child, table.table-bordered.dataTable th:last-child, table.table-bordered.dataTable td:last-child, table.table-bordered.dataTable td:last-child {\n  border-right-width: 0; }\ntable.table-bordered.dataTable tbody th, table.table-bordered.dataTable tbody td {\n  border-bottom-width: 0; }\ndiv.dataTables_scrollHead table.table-bordered {\n  border-bottom-width: 0; }\ndiv.table-responsive > div.dataTables_wrapper > div.row {\n  margin: 0; }\ndiv.table-responsive > div.dataTables_wrapper > div.row > div[class^=\"col-\"]:first-child {\n  padding-left: 0; }\ndiv.table-responsive > div.dataTables_wrapper > div.row > div[class^=\"col-\"]:last-child {\n  padding-right: 0; }\n.page-item.active .page-link {\n  background-color: #02bdd5;\n  border-color: #02bdd5; }\nbutton {\n  margin: 5px; }\n.btn-link {\n  color: black; }\n.menu {\n  display: flex;\n  justify-content: flex-end; }\n#noData {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBQTtBQVFBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLG9DQUFvQztFQUNwQyxpQkFBaUIsRUFBQTtBQUduQjtFQUVFLHVCQUF1QixFQUFBO0FBR3pCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxXQUFXO0VBQ1gscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTtBQUdiO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxhQUFhLEVBQUE7QUFHZjtFQUNFLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVksRUFBQTtBQUdkO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsVUFBVSxFQUFBO0FBR1o7RUFDRSxVQUFVLEVBQUE7QUFHWjtFQUNFLDJCQUEyQixFQUFBO0FBRzdCO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QiwyQkFBMkIsRUFBQTtBQUc3QjtFQUNFLGFBQWEsRUFBQTtBQUdmO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSx1QkFBdUIsRUFBQTtBQUd6QjtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFO0lBQ0Usa0JBQWtCLEVBQUEsRUFDbkI7QUFHSDtFQUNFLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsUUFBUTtFQUNSLGFBQWEsRUFBQTtBQUdmO0VBQ0UsUUFBUSxFQUFBO0FBR1Y7RUFDRSxvQkFBb0IsRUFBQTtBQUd0QjtFQUNFLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0Usc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSxzQkFBc0IsRUFBQTtBQUd4QjtFQUNFLFNBQVMsRUFBQTtBQUdYO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZ0JBQWdCLEVBQUE7QUFJbEI7RUFDRSx5QkF0TWU7RUF1TWYscUJBdk1lLEVBQUE7QUEwTWpCO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLGFBQWE7RUFDYix5QkFBeUIsRUFBQTtBQUczQjtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRmFyYmtvbnplcHQgV2Vic2l0ZSAqL1xuJHByaW1hcnk6ICMwMmJkZDU7IC8vIExpbmtzLCBOYXZiYXJcbiRwcmltYXJ5LWxpZ2h0OiAjYjRmZmZmOyAvLyBTaWRlYmFyLUJhY2tncm91bmRcbiRwcmltYXJ5LWRhcms6ICMwMDdjOTE7IC8vIFNpZGViYXItRm9udFxuJHNlY29uZGFyeTogI2ZmYzEwNzsgLy8gaG92ZXIgVGFibGVzXG4kc2Vjb25kYXJ5LWxpZ2h0OiAjZmZmMzUwO1xuJHNlY29uZGFyeS1kYXJrOiAjZmY4MzNhOyAvLyBob3ZlciBMaW5rcywgTG9nb1xuXG50YWJsZS5kYXRhVGFibGUge1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLCB0YWJsZS5kYXRhVGFibGUgdGgge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmRhdGFUYWJsZXNfZW1wdHksIHRhYmxlLmRhdGFUYWJsZSB0aC5kYXRhVGFibGVzX2VtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50YWJsZS5kYXRhVGFibGUubm93cmFwIHRoLCB0YWJsZS5kYXRhVGFibGUubm93cmFwIHRkIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19sZW5ndGggbGFiZWwge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2xlbmd0aCBzZWxlY3Qge1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2ZpbHRlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2ZpbHRlciBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfZmlsdGVyIGlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2luZm8ge1xuICBwYWRkaW5nLXRvcDogMC44NWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX3BhZ2luYXRlIHtcbiAgbWFyZ2luOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19wYWdpbmF0ZSB1bC5wYWdpbmF0aW9uIHtcbiAgbWFyZ2luOiAycHggMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19wcm9jZXNzaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XG4gIG1hcmdpbi10b3A6IC0yNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFlbSAwO1xufVxuXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgPiB0ciA+IHRoLnNvcnRpbmdfYXNjLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgPiB0ciA+IHRoLnNvcnRpbmdfZGVzYywgdGFibGUuZGF0YVRhYmxlIHRoZWFkID4gdHIgPiB0aC5zb3J0aW5nLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgPiB0ciA+IHRkLnNvcnRpbmdfYXNjLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgPiB0ciA+IHRkLnNvcnRpbmdfZGVzYywgdGFibGUuZGF0YVRhYmxlIHRoZWFkID4gdHIgPiB0ZC5zb3J0aW5nIHtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRoZWFkID4gdHIgPiB0aDphY3RpdmUsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCA+IHRyID4gdGQ6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzYywgdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzY19kaXNhYmxlZCwgdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2NfZGlzYWJsZWQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nOmJlZm9yZSwgdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nOmFmdGVyLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjOmJlZm9yZSwgdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYzphZnRlciwgdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2M6YmVmb3JlLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzYzphZnRlciwgdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzY19kaXNhYmxlZDpiZWZvcmUsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2NfZGlzYWJsZWQ6YWZ0ZXIsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjX2Rpc2FibGVkOmJlZm9yZSwgdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2NfZGlzYWJsZWQ6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMC45ZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZzpiZWZvcmUsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2M6YmVmb3JlLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzYzpiZWZvcmUsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2NfZGlzYWJsZWQ6YmVmb3JlLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzY19kaXNhYmxlZDpiZWZvcmUge1xuICByaWdodDogMWVtO1xuICBjb250ZW50OiBcIlxcMjE5MVwiO1xufVxuXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmc6YWZ0ZXIsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2M6YWZ0ZXIsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjOmFmdGVyLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjX2Rpc2FibGVkOmFmdGVyLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzY19kaXNhYmxlZDphZnRlciB7XG4gIHJpZ2h0OiAwLjVlbTtcbiAgY29udGVudDogXCJcXDIxOTNcIjtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYzpiZWZvcmUsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzY19kaXNhYmxlZDpiZWZvcmUsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjX2Rpc2FibGVkOmFmdGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuZGl2LmRhdGFUYWJsZXNfc2Nyb2xsSGVhZCB0YWJsZS5kYXRhVGFibGUge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbmRpdi5kYXRhVGFibGVzX3Njcm9sbEJvZHkgdGFibGUge1xuICBib3JkZXItdG9wOiBub25lO1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuZGl2LmRhdGFUYWJsZXNfc2Nyb2xsQm9keSB0YWJsZSB0aGVhZCAuc29ydGluZzpiZWZvcmUsIGRpdi5kYXRhVGFibGVzX3Njcm9sbEJvZHkgdGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjOmJlZm9yZSwgZGl2LmRhdGFUYWJsZXNfc2Nyb2xsQm9keSB0YWJsZSB0aGVhZCAuc29ydGluZ19kZXNjOmJlZm9yZSwgZGl2LmRhdGFUYWJsZXNfc2Nyb2xsQm9keSB0YWJsZSB0aGVhZCAuc29ydGluZzphZnRlciwgZGl2LmRhdGFUYWJsZXNfc2Nyb2xsQm9keSB0YWJsZSB0aGVhZCAuc29ydGluZ19hc2M6YWZ0ZXIsIGRpdi5kYXRhVGFibGVzX3Njcm9sbEJvZHkgdGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzYzphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdi5kYXRhVGFibGVzX3Njcm9sbEJvZHkgdGFibGUgdGJvZHkgdHI6Zmlyc3QtY2hpbGQgdGgsIGRpdi5kYXRhVGFibGVzX3Njcm9sbEJvZHkgdGFibGUgdGJvZHkgdHI6Zmlyc3QtY2hpbGQgdGQge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG5kaXYuZGF0YVRhYmxlc19zY3JvbGxGb290ID4gLmRhdGFUYWJsZXNfc2Nyb2xsRm9vdElubmVyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbmRpdi5kYXRhVGFibGVzX3Njcm9sbEZvb3QgPiAuZGF0YVRhYmxlc19zY3JvbGxGb290SW5uZXIgPiB0YWJsZSB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19sZW5ndGgsIGRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfZmlsdGVyLCBkaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2luZm8sIGRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfcGFnaW5hdGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG50YWJsZS5kYXRhVGFibGUudGFibGUtc20gPiB0aGVhZCA+IHRyID4gdGgge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG50YWJsZS5kYXRhVGFibGUudGFibGUtc20gLnNvcnRpbmc6YmVmb3JlLCB0YWJsZS5kYXRhVGFibGUudGFibGUtc20gLnNvcnRpbmdfYXNjOmJlZm9yZSwgdGFibGUuZGF0YVRhYmxlLnRhYmxlLXNtIC5zb3J0aW5nX2Rlc2M6YmVmb3JlIHtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAwLjg1ZW07XG59XG5cbnRhYmxlLmRhdGFUYWJsZS50YWJsZS1zbSAuc29ydGluZzphZnRlciwgdGFibGUuZGF0YVRhYmxlLnRhYmxlLXNtIC5zb3J0aW5nX2FzYzphZnRlciwgdGFibGUuZGF0YVRhYmxlLnRhYmxlLXNtIC5zb3J0aW5nX2Rlc2M6YWZ0ZXIge1xuICB0b3A6IDVweDtcbn1cblxudGFibGUudGFibGUtYm9yZGVyZWQuZGF0YVRhYmxlIHRoLCB0YWJsZS50YWJsZS1ib3JkZXJlZC5kYXRhVGFibGUgdGQge1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbn1cblxudGFibGUudGFibGUtYm9yZGVyZWQuZGF0YVRhYmxlIHRoOmxhc3QtY2hpbGQsIHRhYmxlLnRhYmxlLWJvcmRlcmVkLmRhdGFUYWJsZSB0aDpsYXN0LWNoaWxkLCB0YWJsZS50YWJsZS1ib3JkZXJlZC5kYXRhVGFibGUgdGQ6bGFzdC1jaGlsZCwgdGFibGUudGFibGUtYm9yZGVyZWQuZGF0YVRhYmxlIHRkOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG59XG5cbnRhYmxlLnRhYmxlLWJvcmRlcmVkLmRhdGFUYWJsZSB0Ym9keSB0aCwgdGFibGUudGFibGUtYm9yZGVyZWQuZGF0YVRhYmxlIHRib2R5IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuZGl2LmRhdGFUYWJsZXNfc2Nyb2xsSGVhZCB0YWJsZS50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbmRpdi50YWJsZS1yZXNwb25zaXZlID4gZGl2LmRhdGFUYWJsZXNfd3JhcHBlciA+IGRpdi5yb3cge1xuICBtYXJnaW46IDA7XG59XG5cbmRpdi50YWJsZS1yZXNwb25zaXZlID4gZGl2LmRhdGFUYWJsZXNfd3JhcHBlciA+IGRpdi5yb3cgPiBkaXZbY2xhc3NePVwiY29sLVwiXTpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuZGl2LnRhYmxlLXJlc3BvbnNpdmUgPiBkaXYuZGF0YVRhYmxlc193cmFwcGVyID4gZGl2LnJvdyA+IGRpdltjbGFzc149XCJjb2wtXCJdOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4vLyBQYWdpbmF0aW9uIEJhY2tncm91bmRjb2xvclxuLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmJ0bi1saW5rIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbiNub0RhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/settings/components/overview/overview.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/settings/components/overview/overview.component.ts ***!
  \****************************************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_settings_data_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings-data-provider.service */ "./src/app/modules/settings/services/settings-data-provider.service.ts");






var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(renderer, el, dataService, store) {
        this.renderer = renderer;
        this.el = el;
        this.dataService = dataService;
        this.store = store;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.faSort = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSort"];
        this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faInfoCircle"];
        this.faMinusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMinusCircle"];
        this.datas = []; // data for table
        this.keyAscending = false; // if sorted with key aufsteigend
        this.valueAscending = false; // if sorted with value aufsteigend
        this.paginationVisible = false;
        this.activePage = 1; // number of current page
        this.pageCount = []; // link to the pages
        this.maxOnPage = 8; // how many items can be shown on the page
        this.first = 1; // first item on page
        this.last = this.maxOnPage; // last item on page
    }
    OverviewComponent.prototype.onclick = function (event) {
        if (event.target.parentElement.innerText >= 1 || event.target.parentElement.innerText <= 3) {
            this.activePage = +event.target.parentElement.innerText;
            // clears active from all pages and adds it only to current page
            this.clearActive();
            this.renderer.addClass(event.target.parentElement, 'active');
        }
        // Calculate first and last item of page
        this.first = +this.activePage * this.maxOnPage - this.maxOnPage + 1 - 1;
        this.last = +this.activePage * this.maxOnPage - 1;
    };
    OverviewComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    /**
     * makes sure only first page is labeld active
     * sets active page to first page
     * calculates first and last item on the page
     */
    OverviewComponent.prototype.ngAfterViewInit = function () {
        this.clearActive();
        if (this.pages.length > 0) {
            this.renderer.addClass(this.pages.first.nativeElement, 'active');
        }
        this.activePage = 1;
        this.first = +this.activePage * this.maxOnPage - this.maxOnPage + 1 - 1;
        this.last = +this.activePage * this.maxOnPage - 1;
    };
    /**
     * gets Data from the Service for the Table
     * sorts it by key
     * calculates pagination
     */
    OverviewComponent.prototype.getData = function () {
        var _this = this;
        // this.dataService.getData().subscribe(datas => this.datas = datas);
        this.dataService.findAll().then(function (response) {
            _this.datas = response.payload;
            _this.keyAscending = false; // if sorted with key aufsteigend
            _this.valueAscending = false; // if sorted with value aufsteigend
            _this.sortDataByKey();
            _this.calculatePagination(_this.datas.length);
            // if last object of last page is deleted -> change to one page before
            if (_this.activePage > _this.pageCount.length) {
                _this.activePage = _this.activePage - 1;
                _this.first = +_this.activePage * _this.maxOnPage - _this.maxOnPage + 1 - 1;
                _this.last = +_this.activePage * _this.maxOnPage - 1;
            }
            // to check for visibility
            _this.isPaginationVisible();
        });
    };
    /**
     * checks if Pagination should be shown or not
     * depends on page count
     */
    OverviewComponent.prototype.isPaginationVisible = function () {
        if (this.pageCount === null || this.pageCount.length < 2) {
            this.paginationVisible = false;
        }
        else {
            this.paginationVisible = true;
        }
    };
    /**
     * counts how many pages are needed
     * makes an array with the page numbers
     * @param datacount
     */
    OverviewComponent.prototype.calculatePagination = function (datacount) {
        if (datacount === 0) {
            this.pageCount = [];
        }
        else {
            var pages = Math.ceil(datacount / this.maxOnPage); // Math.ceil always gives back same ore higher number ->
            // 7.03 is 8
            var pagination = new Array(pages);
            for (var i = 0; i < pagination.length; i++) {
                pagination[i] = i + 1;
            }
            this.pageCount = pagination;
        }
        this.isPaginationVisible();
    };
    /**
     * uses key (character) of the data to sort the array
     * either from lowest to highest
     * or highest to lowest
     */
    OverviewComponent.prototype.sortDataByKey = function () {
        if (this.keyAscending === false) {
            this.datas.sort(function (a, b) { return a.key < b.key ? -1 : a.key > b.key ? 1 : 0; });
            this.valueAscending = false;
            this.keyAscending = true;
        }
        else {
            this.datas.sort(function (b, a) { return a.key < b.key ? -1 : a.key > b.key ? 1 : 0; });
            this.valueAscending = false;
            this.keyAscending = false;
        }
    };
    /**
     * uses value (number) of the data to sort the array
     * either from lowest to highest
     * or highest to lowest
     */
    OverviewComponent.prototype.sortDataByValue = function () {
        if (this.valueAscending === false) {
            this.datas.sort(function (a, b) { return a.value < b.value ? -1 : a.value > b.value ? 1 : 0; });
            this.keyAscending = false;
            this.valueAscending = true;
        }
        else {
            this.datas.sort(function (b, a) { return a.value < b.value ? -1 : a.value > b.value ? 1 : 0; });
            this.keyAscending = false;
            this.valueAscending = false;
        }
    };
    /**
     * makes sure no page is labeled active
     */
    OverviewComponent.prototype.clearActive = function () {
        var _this = this;
        if (this.pages.length > 0) {
            this.pages.forEach(function (element) {
                _this.renderer.removeClass(element.nativeElement, 'active');
            });
        }
    };
    /**
     * sets first page to first item of pages
     * makes sure only first class is active
     * calculates first and last item of first page
     * activated when link to first page is used
     */
    OverviewComponent.prototype.firstPage = function () {
        this.clearActive();
        if (this.pages.length > 0) {
            var firstPage = this.pages.first.nativeElement;
            this.activePage = +firstPage.innerText;
            this.clearActive();
            this.renderer.addClass(firstPage, 'active');
            this.first = +this.activePage * this.maxOnPage - this.maxOnPage + 1;
            this.last = +this.activePage * this.maxOnPage;
        }
        else {
            this.clearActive();
            this.activePage = 1;
            this.first = 1;
            this.last = this.maxOnPage;
        }
    };
    /**
     * sets last page to last item of pages
     * makes sure only last class is active
     * calculates first and last item of last page
     * activated when link to last page is used
     */
    OverviewComponent.prototype.lastPage = function () {
        this.clearActive();
        if (this.pages.length > 0) {
            var lastPage = this.pages.last.nativeElement;
            this.activePage = +lastPage.innerText;
            this.clearActive();
            this.renderer.addClass(lastPage, 'active');
            this.first = +this.activePage * this.maxOnPage - this.maxOnPage + 1;
            this.last = +this.activePage * this.maxOnPage;
        }
        else {
            this.clearActive();
            this.activePage = 1;
            this.first = 1;
            this.last = this.maxOnPage;
        }
    };
    /**
     * deletes data in this row
     * calls service
     * gets data from database
     * @param key
     */
    OverviewComponent.prototype.deleteThisData = function (key) {
        var _this = this;
        this.dataService.deleteById(key).then(function (data) {
            _this.getData();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('pages'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], OverviewComponent.prototype, "pages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], OverviewComponent.prototype, "onclick", null);
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/modules/settings/components/overview/overview.component.html"),
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
            styles: [__webpack_require__(/*! ./../../../../app.component.scss */ "./src/app/app.component.scss"), __webpack_require__(/*! ./overview.component.scss */ "./src/app/modules/settings/components/overview/overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_settings_data_provider_service__WEBPACK_IMPORTED_MODULE_5__["SettingsDataProviderService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/guards/settings.guard.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/settings/guards/settings.guard.ts ***!
  \***********************************************************/
/*! exports provided: SettingsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsGuard", function() { return SettingsGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");



var SettingsGuard = /** @class */ (function () {
    function SettingsGuard(currentUserService) {
        this.currentUserService = currentUserService;
    }
    SettingsGuard.prototype.canActivate = function () {
        return this.currentUserService.hasAnyPermisson([_shared_services_current_user__WEBPACK_IMPORTED_MODULE_2__["UserPermission"].CAN_READ_SYSTEMDATEN, _shared_services_current_user__WEBPACK_IMPORTED_MODULE_2__["UserPermission"].CAN_MODIFY_SYSTEMDATEN]);
    };
    SettingsGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_current_user__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]])
    ], SettingsGuard);
    return SettingsGuard;
}());



/***/ }),

/***/ "./src/app/modules/settings/services/settings-data-provider.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/settings/services/settings-data-provider.service.ts ***!
  \*****************************************************************************/
/*! exports provided: SettingsDataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDataProviderService", function() { return SettingsDataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");



var SettingsDataProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SettingsDataProviderService, _super);
    function SettingsDataProviderService(restClient) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.serviceSubUrl = 'v1/configuration';
        return _this;
    }
    SettingsDataProviderService.prototype.addOne = function (payload) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.POST(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).build(), payload)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: data });
            }, function (error) {
                if (error.status === 0) {
                    reject({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].CONNECTION_PROBLEM });
                }
                else {
                    reject({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].FAILURE });
                }
            });
        });
    };
    SettingsDataProviderService.prototype.update = function (payload) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.PUT(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).build(), payload)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: data });
            }, function (error) {
                if (error.status === 0) {
                    reject({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].CONNECTION_PROBLEM });
                }
                else {
                    reject({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].FAILURE });
                }
            });
        });
    };
    SettingsDataProviderService.prototype.deleteById = function (key) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.DELETE(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(key).build())
                .then(function (noData) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS });
            }, function (error) {
                if (error.status === 0) {
                    reject({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].CONNECTION_PROBLEM });
                }
                else {
                    reject({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].FAILURE });
                }
            });
        });
    };
    SettingsDataProviderService.prototype.findAll = function () {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(_this.getUrl())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: data });
            }, function (error) {
                if (error.status === 0) {
                    reject({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].CONNECTION_PROBLEM });
                }
                else {
                    reject({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].FAILURE });
                }
            });
        });
    };
    SettingsDataProviderService.prototype.findById = function (key) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path('' + key).build())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: data });
            }, function (error) {
                if (error.status === 0) {
                    reject({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].CONNECTION_PROBLEM });
                }
                else {
                    reject({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].FAILURE });
                }
            });
        });
    };
    SettingsDataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"]])
    ], SettingsDataProviderService);
    return SettingsDataProviderService;
}(_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]));



/***/ }),

/***/ "./src/app/modules/settings/settings.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/settings/settings.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/modules/settings/components/details/details.component.ts");
/* harmony import */ var _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/overview/overview.component */ "./src/app/modules/settings/components/overview/overview.component.ts");
/* harmony import */ var _guards_settings_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/settings.guard */ "./src/app/modules/settings/guards/settings.guard.ts");
/* harmony import */ var _settings_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings.routing */ "./src/app/modules/settings/settings.routing.ts");











var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_settings_routing__WEBPACK_IMPORTED_MODULE_10__["SETTINGS_ROUTES"]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
            ],
            declarations: [_components_overview_overview_component__WEBPACK_IMPORTED_MODULE_8__["OverviewComponent"], _components_details_details_component__WEBPACK_IMPORTED_MODULE_7__["DetailsComponent"]],
            providers: [_guards_settings_guard__WEBPACK_IMPORTED_MODULE_9__["SettingsGuard"]] // provide Guards here
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/modules/settings/settings.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/settings/settings.routing.ts ***!
  \******************************************************/
/*! exports provided: SETTINGS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_ROUTES", function() { return SETTINGS_ROUTES; });
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/modules/settings/components/details/details.component.ts");
/* harmony import */ var _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/overview/overview.component */ "./src/app/modules/settings/components/overview/overview.component.ts");
/* harmony import */ var _guards_settings_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/settings.guard */ "./src/app/modules/settings/guards/settings.guard.ts");



var SETTINGS_ROUTES = [
    { path: '', redirectTo: 'overview', pathMatch: 'full', canActivate: [_guards_settings_guard__WEBPACK_IMPORTED_MODULE_2__["SettingsGuard"]] },
    { path: 'overview', component: _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_1__["OverviewComponent"], canActivate: [_guards_settings_guard__WEBPACK_IMPORTED_MODULE_2__["SettingsGuard"]] },
    { path: 'details', component: _components_details_details_component__WEBPACK_IMPORTED_MODULE_0__["DetailsComponent"], canActivate: [_guards_settings_guard__WEBPACK_IMPORTED_MODULE_2__["SettingsGuard"]] },
    { path: 'details/:key', component: _components_details_details_component__WEBPACK_IMPORTED_MODULE_0__["DetailsComponent"], canActivate: [_guards_settings_guard__WEBPACK_IMPORTED_MODULE_2__["SettingsGuard"]] }
];


/***/ }),

/***/ "./src/app/modules/settings/types/data.ts":
/*!************************************************!*\
  !*** ./src/app/modules/settings/types/data.ts ***!
  \************************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
var Data = /** @class */ (function () {
    function Data(key, value) {
        this.key = key ? key : '';
        this.value = value ? value : '';
    }
    return Data;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-settings-settings-module.js.map