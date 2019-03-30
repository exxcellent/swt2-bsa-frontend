(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-vereine-vereine-module"],{

/***/ "./src/app/modules/vereine/components/mannschaften/vereine-mannschaften.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/vereine/components/mannschaften/vereine-mannschaften.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-common-dialog class=\"\" [config]=\"config\"><h2>{{currentVerein.name}}</h2></bla-common-dialog>\n\n<bla-button class=\"p-3\" (onClick)=\"backClicked()\">Zurück</bla-button>\n<bla-vereine-dropdown *ngIf=\"!loading\" (onMannschaftClick)=\"navigateToMannschaft($event)\" [currentVerein]=\"currentVerein\" [mannschaften]=\"mannschaften\" class=\"p-4\"></bla-vereine-dropdown>\n\n<h3 class=\"p-4 tex-center\" *ngIf=\"currentMannschaft != null\">Liga: < link zu entsprechender Veranstaltung ></h3>\n<h3 class=\"p-4 tex-center\" *ngIf=\"currentMannschaft != null\">Mannschaftsmitglieder: <b>{{currentVerein.name}} {{currentMannschaft.nummer}}</b></h3>\n<bla-vereine-table *ngIf=\"mannschaftsMitdliedRows != null\"\n                [config]=\"config\"\n                [rows]=\"mannschaftsMitdliedRows\"\n                [loading]=\"loading\">\n</bla-vereine-table>\n"

/***/ }),

/***/ "./src/app/modules/vereine/components/mannschaften/vereine-mannschaften.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/vereine/components/mannschaften/vereine-mannschaften.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVyZWluZS9jb21wb25lbnRzL21hbm5zY2hhZnRlbi92ZXJlaW5lLW1hbm5zY2hhZnRlbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/vereine/components/mannschaften/vereine-mannschaften.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/vereine/components/mannschaften/vereine-mannschaften.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: VereineMannschaftenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereineMannschaftenComponent", function() { return VereineMannschaftenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _shared_components_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/common */ "./src/app/modules/shared/components/common/index.ts");
/* harmony import */ var _shared_components_tables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/tables */ "./src/app/modules/shared/components/tables/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _verwaltung_services_dsb_mannschaft_data_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../verwaltung/services/dsb-mannschaft-data-provider.service */ "./src/app/modules/verwaltung/services/dsb-mannschaft-data-provider.service.ts");
/* harmony import */ var _verwaltung_services_region_data_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../verwaltung/services/region-data-provider.service */ "./src/app/modules/verwaltung/services/region-data-provider.service.ts");
/* harmony import */ var _verwaltung_types_verein_do_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../verwaltung/types/verein-do.class */ "./src/app/modules/verwaltung/types/verein-do.class.ts");
/* harmony import */ var _services_mannschaftsmitglieder_data_provider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/mannschaftsmitglieder-data-provider.service */ "./src/app/modules/vereine/services/mannschaftsmitglieder-data-provider.service.ts");
/* harmony import */ var _services_vereine_data_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/vereine-data-provider.service */ "./src/app/modules/vereine/services/vereine-data-provider.service.ts");
/* harmony import */ var _vereine_mannschaften_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vereine-mannschaften.config */ "./src/app/modules/vereine/components/mannschaften/vereine-mannschaften.config.ts");













var ID_PATH_PARAM = 'id';
var MANNSCHAFT_PATH_PARAM = 'mannschaft';
var VereineMannschaftenComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VereineMannschaftenComponent, _super);
    function VereineMannschaftenComponent(DsbMannschaftDataProvider, MannschaftsmitgliederDataProvider, VereinProvider, regionProvider, router, route, notificationService) {
        var _this = _super.call(this) || this;
        _this.DsbMannschaftDataProvider = DsbMannschaftDataProvider;
        _this.MannschaftsmitgliederDataProvider = MannschaftsmitgliederDataProvider;
        _this.VereinProvider = VereinProvider;
        _this.regionProvider = regionProvider;
        _this.router = router;
        _this.route = route;
        _this.notificationService = notificationService;
        _this.config = _vereine_mannschaften_config__WEBPACK_IMPORTED_MODULE_12__["VEREIN_MANNSCHAFTEN_CONFIG"];
        _this.currentVerein = new _verwaltung_types_verein_do_class__WEBPACK_IMPORTED_MODULE_9__["VereinDO"]();
        return _this;
    }
    VereineMannschaftenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.notificationService.discardNotification();
        this.route.params.subscribe(function (params) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(params[ID_PATH_PARAM])) {
                _this.loadVereinById(params[ID_PATH_PARAM]);
            }
        });
    };
    VereineMannschaftenComponent.prototype.loadVereinById = function (id) {
        var _this = this;
        this.VereinProvider.findById(id)
            .then(function (response) { return _this.handleVereinSuccess(response); })
            .catch(function (response) { return _this.handleVereinFailure(response); });
    };
    VereineMannschaftenComponent.prototype.handleVereinSuccess = function (response) {
        this.currentVerein = response.payload;
        this.loadMannschaften();
        this.loading = false;
    };
    VereineMannschaftenComponent.prototype.handleVereinFailure = function (response) {
        this.loading = false;
    };
    VereineMannschaftenComponent.prototype.loadMannschaften = function () {
        var _this = this;
        this.loading = true;
        this.DsbMannschaftDataProvider.findAll()
            .then(function (response) { return _this.handleMannschaftenSuccess(response); })
            .catch(function (response) { return _this.handleMannschaftenFailure(response); });
    };
    VereineMannschaftenComponent.prototype.handleMannschaftenSuccess = function (response) {
        this.mannschaften = []; // Reset Array
        this.mannschaften = response.payload;
        this.filterMannschaften();
        this.setCurrentMannschaft();
        this.loading = false;
    };
    VereineMannschaftenComponent.prototype.handleMannschaftenFailure = function (response) {
        this.mannschaften = [];
        console.log('Error, could not load Mannschaften: ' + response);
        this.loading = false;
    };
    VereineMannschaftenComponent.prototype.setCurrentMannschaft = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(params[MANNSCHAFT_PATH_PARAM])) {
                for (var _i = 0, _a = _this.mannschaften; _i < _a.length; _i++) {
                    var mannschaft = _a[_i];
                    if (mannschaft.id === parseInt(params[MANNSCHAFT_PATH_PARAM], 10)) {
                        _this.currentMannschaft = mannschaft;
                        _this.loadMannschaftsMitglieder();
                    }
                }
            }
        });
    };
    VereineMannschaftenComponent.prototype.loadMannschaftsMitglieder = function () {
        var _this = this;
        this.loading = true;
        this.MannschaftsmitgliederDataProvider.findByMannschaftId(this.currentMannschaft.id)
            .then(function (response) { return _this.handleMannschftsmitgliedSuccess(response); })
            .catch(function (response) { return _this.handleMannschaftsmitgliedFailure(response); });
    };
    VereineMannschaftenComponent.prototype.handleMannschftsmitgliedSuccess = function (response) {
        this.mannschaftsMitglieder = response.payload;
        this.mannschaftsMitdliedRows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_5__["toTableRows"])(response.payload);
        this.loading = false;
    };
    VereineMannschaftenComponent.prototype.handleMannschaftsmitgliedFailure = function (response) {
        this.mannschaftsMitglieder = [];
        console.log('Error, could not load Mannschaftsmitglieder: ' + response);
        this.loading = false;
    };
    VereineMannschaftenComponent.prototype.filterMannschaften = function () {
        var filteredMannschaften = [];
        for (var _i = 0, _a = this.mannschaften; _i < _a.length; _i++) {
            var mannschaft = _a[_i];
            if (mannschaft.vereinId === this.currentVerein.id) {
                filteredMannschaften.push(mannschaft);
            }
        }
        this.mannschaften = filteredMannschaften;
    };
    VereineMannschaftenComponent.prototype.backClicked = function () {
        this.router.navigateByUrl('/vereine');
    };
    VereineMannschaftenComponent.prototype.navigateToMannschaft = function (mannschaft) {
        this.router.navigateByUrl('/vereine/' + this.currentVerein.id + '/' + mannschaft.id);
    };
    VereineMannschaftenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-vereine-mannschaften',
            template: __webpack_require__(/*! ./vereine-mannschaften.component.html */ "./src/app/modules/vereine/components/mannschaften/vereine-mannschaften.component.html"),
            styles: [__webpack_require__(/*! ./vereine-mannschaften.component.scss */ "./src/app/modules/vereine/components/mannschaften/vereine-mannschaften.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_verwaltung_services_dsb_mannschaft_data_provider_service__WEBPACK_IMPORTED_MODULE_7__["DsbMannschaftDataProviderService"],
            _services_mannschaftsmitglieder_data_provider_service__WEBPACK_IMPORTED_MODULE_10__["MannschaftsmitgliederDataProviderService"],
            _services_vereine_data_provider_service__WEBPACK_IMPORTED_MODULE_11__["VereineDataProviderService"],
            _verwaltung_services_region_data_provider_service__WEBPACK_IMPORTED_MODULE_8__["RegionDataProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_notification__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], VereineMannschaftenComponent);
    return VereineMannschaftenComponent;
}(_shared_components_common__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/vereine/components/mannschaften/vereine-mannschaften.config.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/vereine/components/mannschaften/vereine-mannschaften.config.ts ***!
  \****************************************************************************************/
/*! exports provided: VEREIN_MANNSCHAFTEN_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VEREIN_MANNSCHAFTEN_CONFIG", function() { return VEREIN_MANNSCHAFTEN_CONFIG; });
var VEREIN_MANNSCHAFTEN_CONFIG = {
    moduleTranslationKey: 'VEREINE',
    pageTitleTranslationKey: 'VEREINE.VEREINE.TITLE',
    tableConfig: {
        columns: [
            {
                translationKey: 'VEREINE.MANNSCHAFTSMITGLIEDER.TABLE.HEADERS.VORNAME',
                propertyName: 'dsbMitgliedVorname',
                width: 20,
            },
            {
                translationKey: 'VEREINE.MANNSCHAFTSMITGLIEDER.TABLE.HEADERS.NACHNAME',
                propertyName: 'dsbMitgliedNachname',
                width: 20,
            },
            {
                translationKey: 'VEREINE.MANNSCHAFTSMITGLIEDER.TABLE.HEADERS.EINGESETZT',
                propertyName: 'dsbMitgliedEingesetzt',
                width: 10,
            }
        ],
    }
};


/***/ }),

/***/ "./src/app/modules/vereine/components/vereine-data-table/vereine-data-table.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/vereine/components/vereine-data-table/vereine-data-table.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n<table class=\"table table-hover table-sm table-responsive-sm thead-light\"\n       [id]=\"id\"\n       *ngIf=\"visible\">\n  <!-- Table Head with Headings and sort buttons -->\n  <thead>\n\n  <tr>\n    <th *ngFor=\"let column of config.columns\"\n        [style.width]=\"getColumnWidth(column.width)\">\n\n      <!-- sortable columns -->\n      <div style=\"white-space: nowrap;\">\n        {{ column.translationKey | translate}}\n        <span id=\"{{column.translationKey.toLowerCase()}}Sorted\"\n              (click)=\"sortColumn(column)\">\n            <fa-icon [icon]=\"getSortingIcon(column)\"></fa-icon>\n        </span>\n      </div>\n    </th>\n\n    <!-- action column should not be sortable -->\n    <th [style.width]=\"getColumnWidth(config.actions.width)\"\n        *ngIf=\"hasActions()\">\n      <div>\n        {{ config.actions.localizationKeys.actionColum | translate}}\n      </div>\n    </th>\n\n  </tr>\n\n  </thead>\n\n\n  <tbody *ngIf=\"!isLoading() && !isEmptyTable()\">\n  <tr *ngFor=\"let row of rows\"\n      [id]=\"getRowId(row)\"\n      (click)=\"onRow(row.payload)\"\n      [class.disabled]=\"hasLoadingActions(row)\"\n      class=\"row-clickable\">\n\n    <!-- data columns -->\n    <td *ngFor=\"let column of config.columns\"\n        [id]=\"getCellId(row, column)\"\n        [ngSwitch]=\"column.type\"\n        [class]=\"getStyleClass(row, column)\">\n\n          <span *ngSwitchCase=\"TableColumnType.TEXT\">\n            {{formatText(row, column)}}\n          </span>\n\n\n      <span *ngSwitchCase=\"TableColumnType.NUMBER\">\n            {{formatNumber(row, column)}}\n          </span>\n\n\n      <span *ngSwitchCase=\"TableColumnType.DATE\">\n            {{ row.getText(column) | date: 'dd.MM.yyyy' }}\n\n            <!--{{formatDate(row, column)}}-->\n\n          </span>\n\n      <span *ngSwitchCase=\"TableColumnType.TRANSLATION_KEY\">\n           {{getLocalizedText(row, column)}}\n          </span>\n\n      <span *ngSwitchCase=\"TableColumnType.CUSTOM_MAPPING\">\n           {{getMappedText(row, column)}}\n          </span>\n\n      <span *ngSwitchDefault>\n            {{formatText(row, column)}}\n          </span>\n    </td>\n\n  </tr>\n  </tbody>\n\n  <!-- placeholder for empty tables -->\n  <tbody bla-table-empty-placeholder\n         [visible]=\"!isLoading() && isEmptyTable()\"\n         [colspan]=\"getNumberOfColumns()\">\n  </tbody>\n\n  <!-- placeholder for loading tables -->\n  <tbody bla-table-loading-placeholder\n         [visible]=\"isLoading()\"\n         [colspan]=\"getNumberOfColumns()\">\n  </tbody>\n\n  <tfoot>\n\n  </tfoot>\n\n</table>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vereine/components/vereine-data-table/vereine-data-table.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/vereine/components/vereine-data-table/vereine-data-table.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-icon {\n  margin-right: 5px; }\n\n.disabled {\n  color: rgba(0, 0, 0, 0.35);\n  background-color: rgba(0, 0, 0, 0.035); }\n\n.row-clickable {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvdmVyZWluZS9jb21wb25lbnRzL3ZlcmVpbmUtZGF0YS10YWJsZS92ZXJlaW5lLWRhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSwwQkFBeUI7RUFDekIsc0NBQXFDLEVBQUE7O0FBR3ZDO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy92ZXJlaW5lL2NvbXBvbmVudHMvdmVyZWluZS1kYXRhLXRhYmxlL3ZlcmVpbmUtZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjAzNSk7XG59XG5cbi5yb3ctY2xpY2thYmxle1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/vereine/components/vereine-data-table/vereine-data-table.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/vereine/components/vereine-data-table/vereine-data-table.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: VereineDataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereineDataTableComponent", function() { return VereineDataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _shared_components_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/common */ "./src/app/modules/shared/components/common/index.ts");
/* harmony import */ var _shared_components_tables_control_base_table_sorter_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/tables/control/base-table-sorter.class */ "./src/app/modules/shared/components/tables/control/base-table-sorter.class.ts");
/* harmony import */ var _shared_components_tables_control_default_table_sorter_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/tables/control/default-table-sorter.class */ "./src/app/modules/shared/components/tables/control/default-table-sorter.class.ts");
/* harmony import */ var _shared_components_tables_control_table_config_mapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/tables/control/table-config-mapper */ "./src/app/modules/shared/components/tables/control/table-config-mapper.ts");
/* harmony import */ var _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/tables/types/table-action-type.enum */ "./src/app/modules/shared/components/tables/types/table-action-type.enum.ts");
/* harmony import */ var _shared_components_tables_types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/tables/types/table-column-type.enum */ "./src/app/modules/shared/components/tables/types/table-column-type.enum.ts");
/* harmony import */ var _shared_pipes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/pipes */ "./src/app/modules/shared/pipes/index.ts");











var VereineDataTableComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VereineDataTableComponent, _super);
    function VereineDataTableComponent(truncationPipe, translatePipe) {
        var _this = _super.call(this) || this;
        _this.truncationPipe = truncationPipe;
        _this.translatePipe = translatePipe;
        _this.rows = [];
        _this.onEditEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onViewEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onDeleteEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onRowClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // do not remove, the view uses this enum
        _this.TableColumnType = _shared_components_tables_types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_9__["TableColumnType"];
        _this.initialized = false;
        return _this;
    }
    VereineDataTableComponent.prototype.ngOnInit = function () {
        var clone = this.config;
        this.config = Object(_shared_components_tables_control_table_config_mapper__WEBPACK_IMPORTED_MODULE_7__["tableConfigWithDefaults"])(clone);
        // if no sorter implementation is passed, use the default sorter
        if (!this.tableSorter) {
            this.tableSorter = new _shared_components_tables_control_default_table_sorter_class__WEBPACK_IMPORTED_MODULE_6__["DefaultTableSorter"](this.config);
        }
        this.tableSorter.refreshCurrentSorting(this.rows);
        this.initialized = true;
    };
    VereineDataTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.initialized) {
            this.tableSorter.refreshCurrentSorting(this.rows);
        }
    };
    VereineDataTableComponent.prototype.onRow = function (versionedDataObject) {
        this.onRowClicked.emit(versionedDataObject);
    };
    /*
     * ~~~~ sorting methods ~~~~
     */
    VereineDataTableComponent.prototype.getSortingIcon = function (column) {
        var sortingClasses = this.tableSorter.getSortingClasses(column);
        // map css classes to icons ...
        var icon = '';
        if (sortingClasses.indexOf('sortable') > -1) {
            if (sortingClasses.indexOf('unsorted') > -1) {
                icon = 'sort';
            }
            else if (sortingClasses.indexOf('ascending') > -1) {
                icon = 'sort-up';
            }
            else if (sortingClasses.indexOf('descending') > -1) {
                icon = 'sort-down';
            }
        }
        return icon;
    };
    VereineDataTableComponent.prototype.sortColumn = function (sortColumn) {
        this.rows = this.tableSorter.sortByColumn(this.rows, sortColumn);
    };
    /*
     * ~~~~ getter methods ~~~~
     */
    VereineDataTableComponent.prototype.getColumnWidth = function (columnWidth) {
        if (columnWidth === void 0) { columnWidth = 0; }
        if (columnWidth && columnWidth > 0) {
            return columnWidth + '%';
        }
        else {
            return '0';
        }
    };
    VereineDataTableComponent.prototype.formatText = function (row, column) {
        var text = row.getText(column);
        if (column.truncationLength > 0) {
            return this.truncationPipe.transform(text, column.truncationLength);
        }
        else {
            return text;
        }
    };
    VereineDataTableComponent.prototype.formatNumber = function (row, column) {
        var text = row.getText(column);
        if (column.truncationLength > 0) {
            return this.truncationPipe.transform(text, column.truncationLength);
        }
        else {
            return text;
        }
    };
    /**
     * Map the column value with the mappingFunction and try to translate the mapped value
     */
    VereineDataTableComponent.prototype.getMappedText = function (row, column) {
        if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(column.mappingFunction)) {
            return this.translatePipe.transform(this.prependLocalizationKey(column.localizationSet, column.mappingFunction(row.getText(column))));
        }
    };
    VereineDataTableComponent.prototype.getLocalizedText = function (row, column) {
        return this.translatePipe.transform(this.prependLocalizationKey(column.localizationSet, row.getText(column)));
    };
    VereineDataTableComponent.prototype.resolveNestedObjectProperties = function (theObject, path) {
        try {
            var separator = '.';
            return path.replace('[', separator).replace(']', '').split(separator).reduce(function getNestedProperty(obj, property) {
                return obj[property];
            }, theObject);
        }
        catch (err) {
            return undefined;
        }
    };
    VereineDataTableComponent.prototype.prependLocalizationKey = function (localizationSet, localizationKey) {
        if (localizationSet) {
            return localizationSet + "." + localizationKey;
        }
        else {
            return localizationKey;
        }
    };
    /**
     *
     * @param row current row with the action config
     * @param action current action
     * @returns {boolean} true, if the hidden actions config of the row
     *           does not contain the current action
     */
    VereineDataTableComponent.prototype.isActionVisible = function (row, action) {
        return !(row.hiddenActions.indexOf(action) > -1);
    };
    VereineDataTableComponent.prototype.hasLoadingActions = function (row) {
        return row.loadingActions.length > 0;
    };
    /**
     *
     * @param row current row with the action config
     * @param action current action
     * @returns {string} path to the icon
     */
    VereineDataTableComponent.prototype.determineIcon = function (row, action) {
        var iconSelector = _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_8__["TableActionType"][action].toLowerCase();
        var iconStateSelector = 'active';
        if (row.loadingActions.indexOf(action) > -1) {
            // override normal icon with loading indicator icon
            iconSelector = 'loading';
        }
        else {
            // disable icon
            if (row.disabledActions.indexOf(action) > -1) {
                iconStateSelector = 'inactive';
            }
            // override row specific config, if the table is disabled
            if (this.disabled) {
                iconStateSelector = 'inactive';
            }
        }
        return this.resolveNestedObjectProperties(this.config.actions.icons, iconSelector + "." + iconStateSelector);
    };
    /**
     *
     * @param row current row with the action config
     * @param action current action
     * @returns {string} icon image title
     */
    VereineDataTableComponent.prototype.determineTitle = function (row, action) {
        if (row.disabledActions.indexOf(action) > -1 || row.loadingActions.indexOf(action) > -1) {
            return '';
        }
        var iconSelector = _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_8__["TableActionType"][action].toLowerCase();
        return this.config.actions.localizationKeys[iconSelector];
    };
    /**
     * Triggers the corresponding event emitter with the payload of the row
     *
     * @param row with click event on an action
     * @param action clicked action type
     */
    VereineDataTableComponent.prototype.onIconClicked = function (row, action) {
        if (this.isActionEventAllowed(row, action)) {
            switch (action) {
                case _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_8__["TableActionType"].EDIT:
                    this.onEdit(row.payload);
                    break;
                case _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_8__["TableActionType"].DELETE:
                    this.onDelete(row.payload);
                    break;
                case _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_8__["TableActionType"].VIEW:
                    this.onView(row.payload);
                    break;
                default:
                    console.warn('Could not handle click on action icon. Unknown action type: ', action);
            }
        }
    };
    /**
     *
     * @returns {boolean} true, if the parent component set the loading state
     */
    VereineDataTableComponent.prototype.isLoading = function () {
        return this.loading;
    };
    /**
     *
     * @returns {boolean} true, if the content array is empty or undefined
     */
    VereineDataTableComponent.prototype.isEmptyTable = function () {
        return !!this.rows ? this.rows.length === 0 : true;
    };
    /**
     *
     * @returns {boolean} true, if the configuration contains any action array element
     */
    VereineDataTableComponent.prototype.hasActions = function () {
        return !!this.config.actions.actionTypes ? this.config.actions.actionTypes.length > 0 : false;
    };
    /**
     *
     * @returns {number} number of table header columns
     */
    VereineDataTableComponent.prototype.getNumberOfColumns = function () {
        return !!this.config.columns ? this.config.columns.length + 1 : 0;
    };
    VereineDataTableComponent.prototype.getCellId = function (row, column) {
        if (Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(column.propertyName) || column.propertyName.length === 0) {
            return column.translationKey.replace('.', '') + "-" + row.payload.id;
        }
        else {
            return column.propertyName.replace('.', '') + "-" + row.payload.id;
        }
    };
    VereineDataTableComponent.prototype.getRowId = function (row) {
        return "payload-id-" + row.payload.id;
    };
    VereineDataTableComponent.prototype.getStyleClass = function (row, column) {
        if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(column.stylesMapper)) {
            return column.stylesMapper(row.getText(column));
        }
    };
    /*
     * ~~~~ private methods ~~~~
     */
    VereineDataTableComponent.prototype.isActionEventAllowed = function (row, action) {
        return row.disabledActions.indexOf(action) === -1
            && !this.disabled
            && row.loadingActions.indexOf(action) === -1;
    };
    VereineDataTableComponent.prototype.onEdit = function (affectedRowPayload) {
        this.onEditEntry.emit(affectedRowPayload);
    };
    VereineDataTableComponent.prototype.onView = function (affectedRowPayload) {
        this.onViewEntry.emit(affectedRowPayload);
    };
    VereineDataTableComponent.prototype.onDelete = function (affectedRowPayload) {
        this.onDeleteEntry.emit(affectedRowPayload);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VereineDataTableComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], VereineDataTableComponent.prototype, "rows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_components_tables_control_base_table_sorter_class__WEBPACK_IMPORTED_MODULE_5__["BaseTableSorter"])
    ], VereineDataTableComponent.prototype, "tableSorter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VereineDataTableComponent.prototype, "onEditEntry", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VereineDataTableComponent.prototype, "onViewEntry", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VereineDataTableComponent.prototype, "onDeleteEntry", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VereineDataTableComponent.prototype, "onRowClicked", void 0);
    VereineDataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-vereine-data-table',
            template: __webpack_require__(/*! ./vereine-data-table.component.html */ "./src/app/modules/vereine/components/vereine-data-table/vereine-data-table.component.html"),
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], _shared_pipes__WEBPACK_IMPORTED_MODULE_10__["TruncationPipe"]],
            styles: [__webpack_require__(/*! ./vereine-data-table.component.scss */ "./src/app/modules/vereine/components/vereine-data-table/vereine-data-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_pipes__WEBPACK_IMPORTED_MODULE_10__["TruncationPipe"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]])
    ], VereineDataTableComponent);
    return VereineDataTableComponent;
}(_shared_components_common__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/vereine/components/vereine-table/vereine-table.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/vereine/components/vereine-table/vereine-table.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content\">\n\n  <!-- Content -->\n  <section class=\"overview-dialog-content\">\n\n    <bla-vereine-data-table [config]=\"config.tableConfig\"\n                    [rows]=\"rows\"\n                    [loading]=\"loading\"\n                    (onViewEntry)=\"onView($event)\"\n                    (onEditEntry)=\"onEdit($event)\"\n                    (onDeleteEntry)=\"onDelete($event)\"\n                    (onRowClicked)=\"onRow($event)\">\n\n    </bla-vereine-data-table>\n\n  </section>\n\n  <!-- Footer -->\n  <section class=\"overview-dialog-footer\">\n\n\n  </section>\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vereine/components/vereine-table/vereine-table.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/vereine/components/vereine-table/vereine-table.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-content {\n  padding: 1em; }\n\n.overview-dialog-header {\n  padding-bottom: 1em; }\n\n.overview-dialog-header .overview-dialog-add {\n    display: flex;\n    justify-content: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvdmVyZWluZS9jb21wb25lbnRzL3ZlcmVpbmUtdGFibGUvdmVyZWluZS10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLG1CQUFtQixFQUFBOztBQURyQjtJQUlJLGFBQWE7SUFDYix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVyZWluZS9jb21wb25lbnRzL3ZlcmVpbmUtdGFibGUvdmVyZWluZS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctY29udGVudCB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuLm92ZXJ2aWV3LWRpYWxvZy1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuXG4gIC5vdmVydmlldy1kaWFsb2ctYWRkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/modules/vereine/components/vereine-table/vereine-table.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/vereine/components/vereine-table/vereine-table.component.ts ***!
  \*************************************************************************************/
/*! exports provided: VereineTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereineTableComponent", function() { return VereineTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components */ "./src/app/modules/shared/components/index.ts");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");




var VereineTableComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VereineTableComponent, _super);
    function VereineTableComponent(currentUserService) {
        var _this = _super.call(this, currentUserService) || this;
        _this.currentUserService = currentUserService;
        _this.onRowClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onEditClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onViewClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onDeleteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    VereineTableComponent.prototype.ngOnInit = function () {
    };
    VereineTableComponent.prototype.onRow = function (versionedDataObject) {
        this.onRowClicked.emit(versionedDataObject);
    };
    VereineTableComponent.prototype.onView = function (versionedDataObject) {
        this.onViewClicked.emit(versionedDataObject);
    };
    VereineTableComponent.prototype.onEdit = function (versionedDataObject) {
        this.onEditClicked.emit(versionedDataObject);
    };
    VereineTableComponent.prototype.onDelete = function (versionedDataObject) {
        this.onDeleteClicked.emit(versionedDataObject);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VereineTableComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], VereineTableComponent.prototype, "rows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VereineTableComponent.prototype, "onRowClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VereineTableComponent.prototype, "onEditClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VereineTableComponent.prototype, "onViewClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VereineTableComponent.prototype, "onDeleteClicked", void 0);
    VereineTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-vereine-table',
            template: __webpack_require__(/*! ./vereine-table.component.html */ "./src/app/modules/vereine/components/vereine-table/vereine-table.component.html"),
            styles: [__webpack_require__(/*! ./vereine-table.component.scss */ "./src/app/modules/vereine/components/vereine-table/vereine-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]])
    ], VereineTableComponent);
    return VereineTableComponent;
}(_shared_components__WEBPACK_IMPORTED_MODULE_2__["CommonSecuredComponent"]));



/***/ }),

/***/ "./src/app/modules/vereine/components/vereine/vereine.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/vereine/components/vereine/vereine.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-breadcrumbs [moduleTranslationKey]=\"config.moduleTranslationKey\"></bla-breadcrumbs>\n<!-- Heading -->\n<section class=\"overview-dialog-header pl-3\">\n  <bla-page-heading>{{config.pageTitleTranslationKey | translate }}</bla-page-heading>\n\n</section>\n<bla-vereine-table  [config]=\"config\"\n                    [rows]=\"rows\"\n                    [loading]=\"loading\"\n                    (onRowClicked)=\"onRow($event)\">\n</bla-vereine-table>\n"

/***/ }),

/***/ "./src/app/modules/vereine/components/vereine/vereine.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/vereine/components/vereine/vereine.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVyZWluZS9jb21wb25lbnRzL3ZlcmVpbmUvdmVyZWluZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/vereine/components/vereine/vereine.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/vereine/components/vereine/vereine.component.ts ***!
  \*************************************************************************/
/*! exports provided: VereineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereineComponent", function() { return VereineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/common */ "./src/app/modules/shared/components/common/index.ts");
/* harmony import */ var _shared_components_tables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/tables */ "./src/app/modules/shared/components/tables/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _services_vereine_data_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/vereine-data-provider.service */ "./src/app/modules/vereine/services/vereine-data-provider.service.ts");
/* harmony import */ var _vereine_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vereine.config */ "./src/app/modules/vereine/components/vereine/vereine.config.ts");








var VereineComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VereineComponent, _super);
    function VereineComponent(vereineDataProvider, router, notificationService) {
        var _this = _super.call(this) || this;
        _this.vereineDataProvider = vereineDataProvider;
        _this.router = router;
        _this.notificationService = notificationService;
        _this.config = _vereine_config__WEBPACK_IMPORTED_MODULE_7__["VEREINE_CONFIG"];
        return _this;
    }
    VereineComponent.prototype.ngOnInit = function () {
        this.loadTableRows();
    };
    VereineComponent.prototype.onView = function (vereineDO) {
        this.navigateToDetailDialog(vereineDO);
    };
    VereineComponent.prototype.onRow = function (vereineDO) {
        this.navigateToDetailDialog(vereineDO);
    };
    VereineComponent.prototype.navigateToDetailDialog = function (vereineDO) {
        this.router.navigateByUrl('/vereine/' + vereineDO.id);
    };
    VereineComponent.prototype.loadTableRows = function () {
        var _this = this;
        this.loading = true;
        this.vereineDataProvider.findAll()
            .then(function (response) { return _this.handleLoadTableRowsSuccess(response); })
            .catch(function (response) { return _this.handleLoadTableRowsFailure(response); });
    };
    VereineComponent.prototype.handleLoadTableRowsSuccess = function (response) {
        this.rows = []; // reset array to ensure change detection
        this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_4__["toTableRows"])(response.payload);
        console.log(this.rows);
        this.loading = false;
    };
    VereineComponent.prototype.handleLoadTableRowsFailure = function (response) {
        this.rows = [];
        this.loading = false;
    };
    VereineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-vereine',
            template: __webpack_require__(/*! ./vereine.component.html */ "./src/app/modules/vereine/components/vereine/vereine.component.html"),
            styles: [__webpack_require__(/*! ./vereine.component.scss */ "./src/app/modules/vereine/components/vereine/vereine.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_vereine_data_provider_service__WEBPACK_IMPORTED_MODULE_6__["VereineDataProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], VereineComponent);
    return VereineComponent;
}(_shared_components_common__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/vereine/components/vereine/vereine.config.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/vereine/components/vereine/vereine.config.ts ***!
  \**********************************************************************/
/*! exports provided: VEREINE_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VEREINE_CONFIG", function() { return VEREINE_CONFIG; });
var VEREINE_CONFIG = {
    moduleTranslationKey: 'VEREINE',
    pageTitleTranslationKey: 'VEREINE.VEREINE.TITLE',
    tableConfig: {
        columns: [
            {
                translationKey: 'VEREINE.VEREINE.TABLE.HEADERS.NAME',
                propertyName: 'name',
                width: 20,
            },
            {
                translationKey: 'VEREINE.VEREINE.TABLE.HEADERS.REGION_NAME',
                propertyName: 'regionName',
                width: 20,
            }
        ],
    }
};


/***/ }),

/***/ "./src/app/modules/vereine/mapper/mannschaftmitglied-mapper.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/vereine/mapper/mannschaftmitglied-mapper.ts ***!
  \*********************************************************************/
/*! exports provided: fromPayload, fromPayloadArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayload", function() { return fromPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayloadArray", function() { return fromPayloadArray; });
/* harmony import */ var _types_datatransfer_mannschaftsmitglied_dto_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/datatransfer/mannschaftsmitglied-dto.class */ "./src/app/modules/vereine/types/datatransfer/mannschaftsmitglied-dto.class.ts");

function fromPayload(payload) {
    return _types_datatransfer_mannschaftsmitglied_dto_class__WEBPACK_IMPORTED_MODULE_0__["MannschaftsMitgliedDTO"].copyFrom(payload);
}
function fromPayloadArray(payload) {
    var list = [];
    payload.forEach(function (single) { return list.push(fromPayload(single)); });
    return list;
}


/***/ }),

/***/ "./src/app/modules/vereine/mapper/vereine-mapper.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/vereine/mapper/vereine-mapper.ts ***!
  \**********************************************************/
/*! exports provided: fromPayload, fromPayloadArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayload", function() { return fromPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayloadArray", function() { return fromPayloadArray; });
/* harmony import */ var _types_datatransfer_vereine_dto_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/datatransfer/vereine-dto.class */ "./src/app/modules/vereine/types/datatransfer/vereine-dto.class.ts");

function fromPayload(payload) {
    return _types_datatransfer_vereine_dto_class__WEBPACK_IMPORTED_MODULE_0__["VereineDTO"].copyFrom(payload);
}
function fromPayloadArray(payload) {
    var list = [];
    payload.forEach(function (single) { return list.push(fromPayload(single)); });
    return list;
}


/***/ }),

/***/ "./src/app/modules/vereine/services/mannschaftsmitglieder-data-provider.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/vereine/services/mannschaftsmitglieder-data-provider.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: MannschaftsmitgliederDataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MannschaftsmitgliederDataProviderService", function() { return MannschaftsmitgliederDataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _mapper_mannschaftmitglied_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapper/mannschaftmitglied-mapper */ "./src/app/modules/vereine/mapper/mannschaftmitglied-mapper.ts");





var MannschaftsmitgliederDataProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MannschaftsmitgliederDataProviderService, _super);
    function MannschaftsmitgliederDataProviderService(restClient, currentUserService) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.currentUserService = currentUserService;
        _this.serviceSubUrl = 'v1/mannschaftsmitglied';
        return _this;
    }
    MannschaftsmitgliederDataProviderService.prototype.findByMannschaftId = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(id).build())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_mannschaftmitglied_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayloadArray"])(data) });
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
    MannschaftsmitgliederDataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"], _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]])
    ], MannschaftsmitgliederDataProviderService);
    return MannschaftsmitgliederDataProviderService;
}(_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]));



/***/ }),

/***/ "./src/app/modules/vereine/services/vereine-data-provider.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/vereine/services/vereine-data-provider.service.ts ***!
  \***************************************************************************/
/*! exports provided: VereineDataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereineDataProviderService", function() { return VereineDataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _mapper_vereine_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapper/vereine-mapper */ "./src/app/modules/vereine/mapper/vereine-mapper.ts");





var VereineDataProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VereineDataProviderService, _super);
    function VereineDataProviderService(restClient, currentUserService) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.currentUserService = currentUserService;
        _this.serviceSubUrl = 'v1/vereine';
        return _this;
    }
    VereineDataProviderService.prototype.findAll = function () {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(_this.getUrl())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_vereine_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayloadArray"])(data) });
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
    VereineDataProviderService.prototype.findById = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(id).build())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_vereine_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    VereineDataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"], _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]])
    ], VereineDataProviderService);
    return VereineDataProviderService;
}(_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]));



/***/ }),

/***/ "./src/app/modules/vereine/types/datatransfer/mannschaftsmitglied-dto.class.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/vereine/types/datatransfer/mannschaftsmitglied-dto.class.ts ***!
  \*************************************************************************************/
/*! exports provided: MannschaftsMitgliedDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MannschaftsMitgliedDTO", function() { return MannschaftsMitgliedDTO; });
var MannschaftsMitgliedDTO = /** @class */ (function () {
    function MannschaftsMitgliedDTO() {
    }
    MannschaftsMitgliedDTO.copyFrom = function (optional) {
        if (optional === void 0) { optional = {}; }
        var copy = new MannschaftsMitgliedDTO();
        if (optional.id >= 0) {
            copy.id = optional.id;
        }
        else {
            copy.id = null;
        }
        if (optional.mannschaftsId >= 0) {
            copy.mannschaftsId = optional.mannschaftsId;
        }
        else {
            copy.mannschaftsId = null;
        }
        if (optional.dsbMitgliedId >= 0) {
            copy.dsbMitgliedId = optional.dsbMitgliedId;
        }
        else {
            copy.dsbMitgliedId = null;
        }
        copy.dsbMitgliedEingesetzt = optional.dsbMitgliedEingesetzt;
        copy.dsbMitgliedVorname = optional.dsbMitgliedVorname;
        copy.dsbMitgliedNachname = optional.dsbMitgliedNachname;
        return copy;
    };
    return MannschaftsMitgliedDTO;
}());



/***/ }),

/***/ "./src/app/modules/vereine/types/datatransfer/vereine-dto.class.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/vereine/types/datatransfer/vereine-dto.class.ts ***!
  \*************************************************************************/
/*! exports provided: VereineDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereineDTO", function() { return VereineDTO; });
var VereineDTO = /** @class */ (function () {
    function VereineDTO() {
    }
    VereineDTO.copyFrom = function (optional) {
        if (optional === void 0) { optional = {}; }
        var copy = new VereineDTO();
        if (optional.id >= 0) {
            copy.id = optional.id;
        }
        else {
            copy.id = null;
        }
        if (optional.regionId >= 0) {
            copy.regionId = optional.regionId;
        }
        else {
            copy.regionId = null;
        }
        copy.name = optional.name || '';
        copy.identifier = optional.identifier || '';
        copy.regionName = optional.regionName || '';
        copy.version = optional.version || null;
        return copy;
    };
    return VereineDTO;
}());



/***/ }),

/***/ "./src/app/modules/vereine/vereine.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/vereine/vereine.module.ts ***!
  \***************************************************/
/*! exports provided: VereineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereineModule", function() { return VereineModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/modules/shared/index.ts");
/* harmony import */ var _components_mannschaften_vereine_mannschaften_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mannschaften/vereine-mannschaften.component */ "./src/app/modules/vereine/components/mannschaften/vereine-mannschaften.component.ts");
/* harmony import */ var _components_vereine_data_table_vereine_data_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/vereine-data-table/vereine-data-table.component */ "./src/app/modules/vereine/components/vereine-data-table/vereine-data-table.component.ts");
/* harmony import */ var _components_vereine_table_vereine_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/vereine-table/vereine-table.component */ "./src/app/modules/vereine/components/vereine-table/vereine-table.component.ts");
/* harmony import */ var _components_vereine_vereine_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/vereine/vereine.component */ "./src/app/modules/vereine/components/vereine/vereine.component.ts");
/* harmony import */ var _vereine_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vereine.routing */ "./src/app/modules/vereine/vereine.routing.ts");










var VereineModule = /** @class */ (function () {
    function VereineModule() {
    }
    VereineModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_vereine_routing__WEBPACK_IMPORTED_MODULE_9__["VEREINE_ROUTES"]),
                _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forChild()
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
            declarations: [_components_vereine_vereine_component__WEBPACK_IMPORTED_MODULE_8__["VereineComponent"],
                _components_mannschaften_vereine_mannschaften_component__WEBPACK_IMPORTED_MODULE_5__["VereineMannschaftenComponent"],
                _components_vereine_table_vereine_table_component__WEBPACK_IMPORTED_MODULE_7__["VereineTableComponent"],
                _components_vereine_data_table_vereine_data_table_component__WEBPACK_IMPORTED_MODULE_6__["VereineDataTableComponent"]]
        })
    ], VereineModule);
    return VereineModule;
}());



/***/ }),

/***/ "./src/app/modules/vereine/vereine.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/vereine/vereine.routing.ts ***!
  \****************************************************/
/*! exports provided: VEREINE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VEREINE_ROUTES", function() { return VEREINE_ROUTES; });
/* harmony import */ var _components_mannschaften_vereine_mannschaften_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/mannschaften/vereine-mannschaften.component */ "./src/app/modules/vereine/components/mannschaften/vereine-mannschaften.component.ts");
/* harmony import */ var _components_vereine_vereine_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/vereine/vereine.component */ "./src/app/modules/vereine/components/vereine/vereine.component.ts");


var VEREINE_ROUTES = [
    { path: '', component: _components_vereine_vereine_component__WEBPACK_IMPORTED_MODULE_1__["VereineComponent"] },
    { path: ':id', component: _components_mannschaften_vereine_mannschaften_component__WEBPACK_IMPORTED_MODULE_0__["VereineMannschaftenComponent"] },
    { path: ':id/:mannschaft', component: _components_mannschaften_vereine_mannschaften_component__WEBPACK_IMPORTED_MODULE_0__["VereineMannschaftenComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=src-app-modules-vereine-vereine-module.js.map