(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-playground-playground-module"],{

/***/ "./src/app/modules/playground/components/playground/components/download-file-example/download-file-example.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/components/download-file-example/download-file-example.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Downloads</h4>\n<a #downloadLink></a>\n\n<h5>PDF-Download</h5>\n<p>\n  <bla-download-button [id]=\"'downloadPdf'\"\n                       [downloadUrl]=\"getDownloadUrl('pdf')\"\n                       [fileName]=\"'download.pdf'\">Download PDF\n  </bla-download-button>\n  {{ getDownloadUrl('pdf') }}\n</p>\n\n<h5>Excel-Download</h5>\n<p>\n  <bla-download-button [id]=\"'downloadXls'\"\n                       [downloadUrl]=\"getDownloadUrl('xls')\"\n                       [fileName]=\"'download.xls'\">Download EXCEL (XLS)\n  </bla-download-button>\n  {{ getDownloadUrl('xls') }}\n</p>\n\n<h5>Word-Download</h5>\n<p>\n  <bla-download-button [id]=\"'downloadDoc'\"\n                       [downloadUrl]=\"getDownloadUrl('doc')\"\n                       [fileName]=\"'download.doc'\">Download WORD (DOC)\n  </bla-download-button>\n  {{ getDownloadUrl('doc') }}\n</p>\n\n<h5>CSV-Download</h5>\n<p>\n  <bla-download-button [id]=\"'downloadCsv'\"\n                       [downloadUrl]=\"getDownloadUrl('csv')\"\n                       [fileName]=\"'download.csv'\">Download CSV\n  </bla-download-button>\n  {{ getDownloadUrl('csv') }}\n</p>\n\n<h5>MDB-Download</h5>\n<p>\n  <bla-download-button [id]=\"'downloadMdb'\"\n                       [downloadUrl]=\"getDownloadUrl('mdb')\"\n                       [fileName]=\"'download.mdb'\">Download MDB (Microsoft Access)\n  </bla-download-button>\n  {{ getDownloadUrl('mdb') }}\n</p>\n\n"

/***/ }),

/***/ "./src/app/modules/playground/components/playground/components/download-file-example/download-file-example.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/components/download-file-example/download-file-example.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: DownloadFileExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadFileExampleComponent", function() { return DownloadFileExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _shared_services_notification_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/services/notification/types */ "./src/app/modules/shared/services/notification/types/index.ts");
/* harmony import */ var _services_hello_resource_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/hello-resource-provider.service */ "./src/app/modules/playground/services/hello-resource-provider.service.ts");







var NOTIFICATION_DOWNLOAD_SUCCESS = 'download_example_success';
var NOTIFICATION_DOWNLOAD_FAILURE = 'download_example_failure';
var DownloadFileExampleComponent = /** @class */ (function () {
    function DownloadFileExampleComponent(helloResourceService, notificationService) {
        this.helloResourceService = helloResourceService;
        this.notificationService = notificationService;
        this.downloadingFile = false;
    }
    DownloadFileExampleComponent.prototype.ngOnInit = function () {
    };
    DownloadFileExampleComponent.prototype.getDownloadUrl = function (path) {
        return new _shared_data_provider__WEBPACK_IMPORTED_MODULE_3__["UriBuilder"]()
            .fromPath(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendBaseUrl)
            .path('v1/hello-world/download')
            .path(path)
            .build();
    };
    DownloadFileExampleComponent.prototype.download = function (fileType) {
        var _this = this;
        this.downloadingFile = true;
        var fileEnding = fileType.toLowerCase();
        var fileName = fileEnding + ' -example.' + fileEnding;
        console.log('Invoke ' + fileType + ' download');
        this.helloResourceService.downloadExamplePdf(fileEnding, fileName, this.aElementRef)
            .then(function (response) { return _this.handleSuccess(response, fileType); })
            .catch(function (response) { return _this.handleFailure(response, fileType); });
    };
    DownloadFileExampleComponent.prototype.handleSuccess = function (response, fileType) {
        var _this = this;
        var notification = {
            id: NOTIFICATION_DOWNLOAD_SUCCESS,
            title: fileType,
            description: 'Download completed: ' + response.payload,
            severity: _shared_services_notification_types__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO,
            origin: _shared_services_notification_types__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification_types__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
            userAction: _shared_services_notification_types__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DOWNLOAD_SUCCESS)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification_types__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                console.log('Download ' + fileType + ' from ' + response.payload + ' completed');
                _this.downloadingFile = false;
            }
        });
        this.notificationService.showNotification(notification);
    };
    DownloadFileExampleComponent.prototype.handleFailure = function (response, fileType) {
        var _this = this;
        var notification = {
            id: NOTIFICATION_DOWNLOAD_FAILURE,
            title: fileType,
            description: 'Download failed',
            severity: _shared_services_notification_types__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].ERROR,
            origin: _shared_services_notification_types__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification_types__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
            userAction: _shared_services_notification_types__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DOWNLOAD_FAILURE)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification_types__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                console.log('Download ' + fileType + ' failed');
                _this.downloadingFile = false;
            }
        });
        this.notificationService.showNotification(notification);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('downloadLink'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DownloadFileExampleComponent.prototype, "aElementRef", void 0);
    DownloadFileExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-download-file-example',
            template: __webpack_require__(/*! ./download-file-example.component.html */ "./src/app/modules/playground/components/playground/components/download-file-example/download-file-example.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_hello_resource_provider_service__WEBPACK_IMPORTED_MODULE_6__["HelloResourceProviderService"],
            _shared_services_notification__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], DownloadFileExampleComponent);
    return DownloadFileExampleComponent;
}());



/***/ }),

/***/ "./src/app/modules/playground/components/playground/components/dropdown-menu-example/dropdown-menu-example.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/components/dropdown-menu-example/dropdown-menu-example.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Dropdowns</h4>\n\n<h5>bla-dropdown-menu</h5>\n<p>\n  Das \"selbstgebaute\" Dropdown-Menü basiert auf dem Menü für angemeldete Benutzer (siehe oben links).\n  Das Ein- und Ausblenden wird über Angular gesteuert. Der Style wird von Bootstrap genutzt.\n</p>\n\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Dropdown Menü mit einer Liste von DTOs mit ID:\n      <br>\n      Auswahl: {{ getSelectedDTO() }}\n    </p>\n\n    <bla-dropdown-menu [id]=\"'playground-dropdown-menu'\"\n                       [items]=\"getVersionedDataObjects()\"\n                       [optionFieldSelector]=\"'name'\"\n                       (onSelect)=\"onSelect($event)\"\n                       style=\"width: 50%;\">\n    </bla-dropdown-menu>\n\n  </bla-col-layout>\n</div>\n\n<!-- preselected item -->\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Dropdown Menü mit Vorauswahl (per ID):\n    </p>\n\n    <bla-dropdown-menu [items]=\"getVersionedDataObjects()\"\n                       [optionFieldSelector]=\"'name'\"\n                       [selectedItemId]=\"3\"\n                       style=\"width: 50%;\">\n    </bla-dropdown-menu>\n\n  </bla-col-layout>\n</div>\n\n\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Deaktiviertes Dropdown Menü mit Vorauswahl (per ID):\n    </p>\n\n    <bla-dropdown-menu [items]=\"getVersionedDataObjects()\"\n                       [optionFieldSelector]=\"'name'\"\n                       [selectedItemId]=\"3\"\n                       disabled=\"true\"\n                       style=\"width: 50%;\">\n    </bla-dropdown-menu>\n\n  </bla-col-layout>\n</div>\n\n\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Dropdown Menü mit Ladeindikator (bitte Seite neu laden, um die 5 Sek. Verzögerung zu sehen):\n    </p>\n\n    <bla-dropdown-menu [items]=\"getVersionedDataObjects()\"\n                       [optionFieldSelector]=\"'name'\"\n                       [selectedItemId]=\"3\"\n                       [loading]=\"isLoading()\"\n                       style=\"width: 50%;\">\n    </bla-dropdown-menu>\n\n  </bla-col-layout>\n</div>\n\n<!-- empty list -->\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Dropdown Menü mit leerer Liste:\n    </p>\n\n    <bla-dropdown-menu [items]=\"getEmptyList()\"\n                       [optionFieldSelector]=\"'name'\"\n                       style=\"width: 50%;\">\n    </bla-dropdown-menu>\n\n  </bla-col-layout>\n</div>\n\n\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Dropdown Menü ohne Parameter:\n    </p>\n\n    <bla-dropdown-menu style=\"width: 50%;\">\n    </bla-dropdown-menu>\n\n  </bla-col-layout>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/playground/components/playground/components/dropdown-menu-example/dropdown-menu-example.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/components/dropdown-menu-example/dropdown-menu-example.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".playground-label {\n  width: 40vw;\n  max-width: 40vw; }\n\n.playground-row {\n  margin-bottom: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvcGxheWdyb3VuZC9jb21wb25lbnRzL3BsYXlncm91bmQvY29tcG9uZW50cy9kcm9wZG93bi1tZW51LWV4YW1wbGUvZHJvcGRvd24tbWVudS1leGFtcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGxheWdyb3VuZC9jb21wb25lbnRzL3BsYXlncm91bmQvY29tcG9uZW50cy9kcm9wZG93bi1tZW51LWV4YW1wbGUvZHJvcGRvd24tbWVudS1leGFtcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXlncm91bmQtbGFiZWwge1xuICB3aWR0aDogNDB2dztcbiAgbWF4LXdpZHRoOiA0MHZ3O1xufVxuXG4ucGxheWdyb3VuZC1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/playground/components/playground/components/dropdown-menu-example/dropdown-menu-example.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/components/dropdown-menu-example/dropdown-menu-example.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: DropdownMenuExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuExampleComponent", function() { return DropdownMenuExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types/playground-versioned-data-object.class */ "./src/app/modules/playground/components/playground/types/playground-versioned-data-object.class.ts");






var DropdownMenuExampleComponent = /** @class */ (function () {
    function DropdownMenuExampleComponent() {
        this.loading = true;
    }
    DropdownMenuExampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(5000)).subscribe(function (ignore) { return _this.loading = false; });
    };
    DropdownMenuExampleComponent.prototype.onSelect = function ($event) {
        this.selectedDTO = $event;
    };
    DropdownMenuExampleComponent.prototype.getSelectedDTO = function () {
        if (Object(_shared_functions__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.selectedDTO)) {
            return '';
        }
        else {
            console.log('Dropdown Menü: selectedDTO = ' + JSON.stringify(this.selectedDTO));
            return this.selectedDTO.name;
        }
    };
    DropdownMenuExampleComponent.prototype.isLoading = function () {
        return this.loading;
    };
    DropdownMenuExampleComponent.prototype.getEmptyList = function () {
        return [];
    };
    DropdownMenuExampleComponent.prototype.getVersionedDataObjects = function () {
        return [
            new _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__["PlaygroundVersionedDataObject"](1, 'Schütze 1'),
            new _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__["PlaygroundVersionedDataObject"](2, 'Schütze 2'),
            new _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__["PlaygroundVersionedDataObject"](3, 'Schütze 3'),
            new _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__["PlaygroundVersionedDataObject"](4, 'Schütze 4'),
            new _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__["PlaygroundVersionedDataObject"](5, 'Schütze 5'),
        ];
    };
    DropdownMenuExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-dropdown-menu-example',
            template: __webpack_require__(/*! ./dropdown-menu-example.component.html */ "./src/app/modules/playground/components/playground/components/dropdown-menu-example/dropdown-menu-example.component.html"),
            styles: [__webpack_require__(/*! ./dropdown-menu-example.component.scss */ "./src/app/modules/playground/components/playground/components/dropdown-menu-example/dropdown-menu-example.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DropdownMenuExampleComponent);
    return DropdownMenuExampleComponent;
}());



/***/ }),

/***/ "./src/app/modules/playground/components/playground/components/index.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/components/index.ts ***!
  \******************************************************************************/
/*! exports provided: TooltipExampleComponent, DropdownMenuExampleComponent, SelectionlistExampleComponent, LayoutExampleComponent, DownloadFileExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tooltip_example_tooltip_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip-example/tooltip-example.component */ "./src/app/modules/playground/components/playground/components/tooltip-example/tooltip-example.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipExampleComponent", function() { return _tooltip_example_tooltip_example_component__WEBPACK_IMPORTED_MODULE_0__["TooltipExampleComponent"]; });

/* harmony import */ var _dropdown_menu_example_dropdown_menu_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-menu-example/dropdown-menu-example.component */ "./src/app/modules/playground/components/playground/components/dropdown-menu-example/dropdown-menu-example.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuExampleComponent", function() { return _dropdown_menu_example_dropdown_menu_example_component__WEBPACK_IMPORTED_MODULE_1__["DropdownMenuExampleComponent"]; });

/* harmony import */ var _selectionlist_example_selectionlist_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectionlist-example/selectionlist-example.component */ "./src/app/modules/playground/components/playground/components/selectionlist-example/selectionlist-example.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionlistExampleComponent", function() { return _selectionlist_example_selectionlist_example_component__WEBPACK_IMPORTED_MODULE_2__["SelectionlistExampleComponent"]; });

/* harmony import */ var _layout_example_layout_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-example/layout-example.component */ "./src/app/modules/playground/components/playground/components/layout-example/layout-example.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutExampleComponent", function() { return _layout_example_layout_example_component__WEBPACK_IMPORTED_MODULE_3__["LayoutExampleComponent"]; });

/* harmony import */ var _download_file_example_download_file_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./download-file-example/download-file-example.component */ "./src/app/modules/playground/components/playground/components/download-file-example/download-file-example.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DownloadFileExampleComponent", function() { return _download_file_example_download_file_example_component__WEBPACK_IMPORTED_MODULE_4__["DownloadFileExampleComponent"]; });








/***/ }),

/***/ "./src/app/modules/playground/components/playground/components/layout-example/layout-example.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/components/layout-example/layout-example.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Layouts</h4>\n\n<div class=\"layout-elements\">\n  <p>Die farblichen Elemente haben eine ursprüngliche Größe von 100x100 Pixeln.</p>\n\n  <h5>bla-col-layout</h5>\n  <a name=\"bla-col-layout\"></a>\n  <p>Das \"Spalten\"-Layout teilt den verfügbaren Platz einer Zeile in gleichgroße Spalten für die Elemente auf.</p>\n\n  <bla-col-layout>\n    <div class=\"layout-element-1\">1</div>\n  </bla-col-layout>\n\n  <bla-col-layout>\n    <div class=\"layout-element-1\">1</div>\n    <div class=\"layout-element-2\">2</div>\n  </bla-col-layout>\n\n  <bla-col-layout>\n    <div class=\"layout-element-1\">1</div>\n    <div class=\"layout-element-2\">2</div>\n    <div class=\"layout-element-3\">3</div>\n  </bla-col-layout>\n\n  <bla-col-layout>\n    <div class=\"layout-element-1\">1</div>\n    <div class=\"layout-element-2\">2</div>\n    <div class=\"layout-element-3\">3</div>\n    <div class=\"layout-element-4\">4</div>\n  </bla-col-layout>\n\n  <h5>bla-grid-layout</h5>\n  <a name=\"bla-grid-layout\"></a>\n  <p>Das Grid-Layout ist für ein responsives Verhalten nützlich. Falls kein Platz mehr in der Zeile ist, werden die\n     restlichen Elemente umgebrochen.</p>\n\n  <p>1 Element</p>\n  <bla-grid-layout>\n    <div class=\"layout-element-1\">1</div>\n  </bla-grid-layout>\n\n  <p>3 Elemente</p>\n  <bla-grid-layout>\n    <div class=\"layout-element-1\">1</div>\n    <div class=\"layout-element-2\">2</div>\n    <div class=\"layout-element-3\">3</div>\n  </bla-grid-layout>\n\n  <p>5 Elemente</p>\n  <bla-grid-layout>\n    <div class=\"layout-element-1\">1</div>\n    <div class=\"layout-element-2\">2</div>\n    <div class=\"layout-element-3\">3</div>\n    <div class=\"layout-element-4\">4</div>\n    <div class=\"layout-element-5\">5</div>\n  </bla-grid-layout>\n\n  <p>7 Elemente</p>\n  <bla-grid-layout>\n    <div class=\"layout-element-1\">1</div>\n    <div class=\"layout-element-2\">2</div>\n    <div class=\"layout-element-3\">3</div>\n    <div class=\"layout-element-4\">4</div>\n    <div class=\"layout-element-5\">5</div>\n    <div class=\"layout-element-6\">6</div>\n    <div class=\"layout-element-7\">7</div>\n  </bla-grid-layout>\n\n\n  <h5>bla-row-layout</h5>\n  <a name=\"bla-row-layout\"></a>\n  <p>Das \"Zeilen\"-Layout ordnet die Element zeilenweise untereinander an.</p>\n\n  <p>1 Element</p>\n  <bla-row-layout>\n    <div class=\"layout-element-1\">1</div>\n  </bla-row-layout>\n\n  <p>2 Elemente</p>\n  <bla-row-layout>\n    <div class=\"layout-element-1\">1</div>\n    <div class=\"layout-element-2\">2</div>\n  </bla-row-layout>\n\n  <p>3 Elemente</p>\n  <bla-row-layout>\n    <div class=\"layout-element-1\">1</div>\n    <div class=\"layout-element-2\">2</div>\n    <div class=\"layout-element-3\">3</div>\n  </bla-row-layout>\n</div>\n\n<h5>bla-centered-layout</h5>\n<a name=\"bla-centered-layout\"></a>\n<p>Das \"Zentrierte\"-Layout ordnet die Elemente in einer \"Spalte\" in der Mitte der Zeile an. Standardmäßig beträgt die\n   Breite der \"Spalte\" 60%. Bei Webseiten <u>ohne</u> Side-Nav ist dieses Layout häufig vertreten.</p>\n\n<p>1 Element</p>\n<bla-centered-layout>\n  <div class=\"layout-element-1\">1</div>\n</bla-centered-layout>\n\n<p>2 Elemente innerhalb eines \"Spalten\"-Layouts, damit die div-Tags nebeneinander stehen und der gesamte Platz\n   eingenommen wird. Standardmäßig beträgt die Breite 60%.</p>\n<bla-centered-layout>\n  <bla-col-layout>\n    <div class=\"layout-element-1\">1</div>\n    <div class=\"layout-element-2\">2</div>\n  </bla-col-layout>\n</bla-centered-layout>\n\n<p>3 Elemente innerhalb eines \"Spalten\"-Layouts, damit die div-Tags nebeneinander stehen und der gesamte Platz\n   eingenommen wird. Standardmäßig beträgt die Breite 60%.</p>\n<bla-centered-layout>\n  <bla-col-layout>\n    <div class=\"layout-element-1\">1</div>\n    <div class=\"layout-element-2\">2</div>\n    <div class=\"layout-element-3\">3</div>\n  </bla-col-layout>\n</bla-centered-layout>\n\n<p>5 Elemente innerhalb eines \"Spalten\"-Layouts, damit die div-Tags nebeneinander stehen und der gesamte Platz\n   eingenommen wird. Die Breite des Layouts ist auf 75% erhöht worden.</p>\n<bla-centered-layout width=\"75\">\n  <bla-col-layout>\n    <div class=\"layout-element-1\">1</div>\n    <div class=\"layout-element-2\">2</div>\n    <div class=\"layout-element-3\">3</div>\n    <div class=\"layout-element-4\">4</div>\n    <div class=\"layout-element-5\">5</div>\n  </bla-col-layout>\n</bla-centered-layout>\n\n<p>5 Elemente innerhalb eines \"Spalten\"-Layouts, damit die div-Tags nebeneinander stehen und der gesamte Platz\n   eingenommen wird. Die Breite des Layouts ist auf 100% erhöht worden.</p>\n<bla-centered-layout width=\"100\">\n  <bla-col-layout>\n    <div class=\"layout-element-1\">1</div>\n    <div class=\"layout-element-2\">2</div>\n    <div class=\"layout-element-3\">3</div>\n    <div class=\"layout-element-4\">4</div>\n    <div class=\"layout-element-5\">5</div>\n  </bla-col-layout>\n</bla-centered-layout>\n\n\n"

/***/ }),

/***/ "./src/app/modules/playground/components/playground/components/layout-example/layout-example.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/components/layout-example/layout-example.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout-element-1 {\n  background-color: #ff833a;\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  font-size: 4em;\n  margin: .3em; }\n\n.layout-element-2 {\n  background-color: cornflowerblue;\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  font-size: 4em;\n  margin: .3em; }\n\n.layout-element-3 {\n  background-color: darkgreen;\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  font-size: 4em;\n  margin: .3em; }\n\n.layout-element-4 {\n  background-color: deeppink;\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  font-size: 4em;\n  margin: .3em; }\n\n.layout-element-5 {\n  background-color: firebrick;\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  font-size: 4em;\n  margin: .3em; }\n\n.layout-element-6 {\n  background-color: #fff350;\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  font-size: 4em;\n  margin: .3em; }\n\n.layout-element-7 {\n  background-color: greenyellow;\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  font-size: 4em;\n  margin: .3em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvcGxheWdyb3VuZC9jb21wb25lbnRzL3BsYXlncm91bmQvY29tcG9uZW50cy9sYXlvdXQtZXhhbXBsZS9sYXlvdXQtZXhhbXBsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVksRUFBQTs7QUFHZDtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUdkO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVksRUFBQTs7QUFHZDtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wbGF5Z3JvdW5kL2NvbXBvbmVudHMvcGxheWdyb3VuZC9jb21wb25lbnRzL2xheW91dC1leGFtcGxlL2xheW91dC1leGFtcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dC1lbGVtZW50LTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MzNhO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0ZW07XG4gIG1hcmdpbjogLjNlbTtcbn1cblxuLmxheW91dC1lbGVtZW50LTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBtYXJnaW46IC4zZW07XG59XG5cbi5sYXlvdXQtZWxlbWVudC0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0ZW07XG4gIG1hcmdpbjogLjNlbTtcbn1cblxuLmxheW91dC1lbGVtZW50LTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkZWVwcGluaztcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBtYXJnaW46IC4zZW07XG59XG5cbi5sYXlvdXQtZWxlbWVudC01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZmlyZWJyaWNrO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0ZW07XG4gIG1hcmdpbjogLjNlbTtcbn1cblxuLmxheW91dC1lbGVtZW50LTYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMzUwO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0ZW07XG4gIG1hcmdpbjogLjNlbTtcbn1cblxuLmxheW91dC1lbGVtZW50LTcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBtYXJnaW46IC4zZW07XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/playground/components/playground/components/layout-example/layout-example.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/components/layout-example/layout-example.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: LayoutExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutExampleComponent", function() { return LayoutExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutExampleComponent = /** @class */ (function () {
    function LayoutExampleComponent() {
    }
    LayoutExampleComponent.prototype.ngOnInit = function () {
    };
    LayoutExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-layout-example',
            template: __webpack_require__(/*! ./layout-example.component.html */ "./src/app/modules/playground/components/playground/components/layout-example/layout-example.component.html"),
            styles: [__webpack_require__(/*! ./layout-example.component.scss */ "./src/app/modules/playground/components/playground/components/layout-example/layout-example.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutExampleComponent);
    return LayoutExampleComponent;
}());



/***/ }),

/***/ "./src/app/modules/playground/components/playground/components/selectionlist-example/selectionlist-example.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/components/selectionlist-example/selectionlist-example.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Auswahllisten</h4>\n\n<h5>bla-selectionlist</h5>\n<a name=\"bla-selectionlist\"></a>\n\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Auswahlliste mit einer Liste von DTOs mit ID. Nur Single-Select möglich.\n      <br>\n      Auswahl: {{ getSelectedDTO() }}\n    </p>\n\n    <bla-selectionlist [id]=\"'quickSearch'\"\n                       [items]=\"getVersionedDataObjects()\"\n                       [optionFieldSelector]=\"'name'\"\n                       (onSelect)=\"onSelect($event)\"\n                       [multipleSelections]=\"!multipleSelections\"\n                       style=\"width: 50%; height: 10em;\">\n\n    </bla-selectionlist>\n\n  </bla-col-layout>\n</div>\n\n\n<!-- preselected item -->\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Auswahlliste mit Vorauswahl (per ID):\n      <br>\n      Auswahl: {{ getSelectedDTO() }}\n    </p>\n\n    <bla-selectionlist [items]=\"getVersionedDataObjects()\"\n                       [optionFieldSelector]=\"'name'\"\n                       [selectedItemIds]=\"[3, 4]\"\n                       (onSelect)=\"onSelect($event)\"\n                       [multipleSelections]=\"multipleSelections\"\n                       style=\"width: 50%; height: 10em;\">\n    </bla-selectionlist>\n\n  </bla-col-layout>\n</div>\n\n\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Deaktivierte Auswahlliste mit Vorauswahl (per ID):\n    </p>\n\n    <bla-selectionlist [items]=\"getVersionedDataObjects()\"\n                       [optionFieldSelector]=\"'name'\"\n                       [selectedItemIds]=\"[3, 4]\"\n                       disabled=\"true\"\n                       style=\"width: 50%; height: 10em;\">\n    </bla-selectionlist>\n\n  </bla-col-layout>\n</div>\n\n\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Auswahlliste mit Ladeindikator (bitte Seite neu laden, um die 5 Sek. Verzögerung zu sehen):\n    </p>\n\n    <bla-selectionlist [items]=\"getVersionedDataObjects()\"\n                       [optionFieldSelector]=\"'name'\"\n                       [selectedItemIds]=\"[3, 4]\"\n                       [loading]=\"isLoading()\"\n                       style=\"width: 50%; height: 10em;\">\n    </bla-selectionlist>\n\n  </bla-col-layout>\n</div>\n\n<!-- empty list -->\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Auswahlliste mit leerer Liste:\n    </p>\n\n    <bla-selectionlist [items]=\"getEmptyList()\"\n                       [optionFieldSelector]=\"'name'\"\n                       style=\"width: 50%; height: 10em;\">\n    </bla-selectionlist>\n\n  </bla-col-layout>\n</div>\n\n\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Auswahlliste ohne Parameter:\n    </p>\n\n    <bla-selectionlist style=\"width: 50%; height: 10em;\">\n\n    </bla-selectionlist>\n\n  </bla-col-layout>\n</div>\n\n\n<h5>bla-quicksearch-list</h5>\n<a name=\"bla-quicksearch-list\"></a>\n\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Quicksearch Auswahlliste mit einer Liste von DTOs mit ID.\n      Nur Single-Select möglich.\n      <br>\n      Auswahl: {{ getSelectedDTO() }}\n    </p>\n\n    <bla-quicksearch-list [items]=\"getVersionedDataObjects()\"\n                          [optionFieldSelector]=\"'name'\"\n                          (onSelect)=\"onSelect($event)\"\n                          [multipleSelections]=\"!multipleSelections\"\n                          selectionListHeight=\"15em\"\n                          style=\"width: 50%;\">\n\n    </bla-quicksearch-list>\n\n  </bla-col-layout>\n</div>\n\n\n<!-- preselected item -->\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Quicksearch Auswahlliste mit Vorauswahl (per ID) mit Multi-Select:\n      <br>\n      Auswahl: {{ getSelectedDTO() }}\n    </p>\n\n    <bla-quicksearch-list [items]=\"getVersionedDataObjects()\"\n                          [optionFieldSelector]=\"'name'\"\n                          (onSelect)=\"onSelect($event)\"\n                          [selectedItemIds]=\"[3, 4]\"\n                          [multipleSelections]=\"multipleSelections\"\n                          style=\"width: 50%;\">\n    </bla-quicksearch-list>\n\n  </bla-col-layout>\n</div>\n\n\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Deaktivierte Quicksearch Auswahlliste mit Vorauswahl (per ID):\n    </p>\n\n    <bla-quicksearch-list [items]=\"getVersionedDataObjects()\"\n                          [optionFieldSelector]=\"'name'\"\n                          [selectedItemIds]=\"[3, 4]\"\n                          disabled=\"true\"\n                          style=\"width: 50%;\">\n    </bla-quicksearch-list>\n\n  </bla-col-layout>\n</div>\n\n\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Quicksearch Auswahlliste mit Ladeindikator (bitte Seite neu laden, um die 5 Sek. Verzögerung zu sehen):\n    </p>\n\n    <bla-quicksearch-list [items]=\"getVersionedDataObjects()\"\n                          [optionFieldSelector]=\"'name'\"\n                          [selectedItemIds]=\"[3, 4]\"\n                          [loading]=\"isLoading()\"\n                          style=\"width: 50%;\">\n    </bla-quicksearch-list>\n\n  </bla-col-layout>\n</div>\n\n<!-- empty list -->\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Quicksearch Auswahlliste mit leerer Liste:\n    </p>\n\n    <bla-quicksearch-list [items]=\"getEmptyList()\"\n                          [optionFieldSelector]=\"'name'\"\n                          style=\"width: 50%;\">\n    </bla-quicksearch-list>\n\n  </bla-col-layout>\n</div>\n\n\n<div class=\"playground-row\">\n  <bla-col-layout>\n    <p class=\"playground-label\">\n      Quicksearch Auswahlliste ohne Parameter:\n    </p>\n\n    <bla-quicksearch-list style=\"width: 50%;\">\n\n    </bla-quicksearch-list>\n\n  </bla-col-layout>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/playground/components/playground/components/selectionlist-example/selectionlist-example.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/components/selectionlist-example/selectionlist-example.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".playground-label {\n  width: 40vw;\n  max-width: 40vw; }\n\n.playground-row {\n  margin-bottom: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvcGxheWdyb3VuZC9jb21wb25lbnRzL3BsYXlncm91bmQvY29tcG9uZW50cy9zZWxlY3Rpb25saXN0LWV4YW1wbGUvc2VsZWN0aW9ubGlzdC1leGFtcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGxheWdyb3VuZC9jb21wb25lbnRzL3BsYXlncm91bmQvY29tcG9uZW50cy9zZWxlY3Rpb25saXN0LWV4YW1wbGUvc2VsZWN0aW9ubGlzdC1leGFtcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXlncm91bmQtbGFiZWwge1xuICB3aWR0aDogNDB2dztcbiAgbWF4LXdpZHRoOiA0MHZ3O1xufVxuXG4ucGxheWdyb3VuZC1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/playground/components/playground/components/selectionlist-example/selectionlist-example.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/components/selectionlist-example/selectionlist-example.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: SelectionlistExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionlistExampleComponent", function() { return SelectionlistExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types/playground-versioned-data-object.class */ "./src/app/modules/playground/components/playground/types/playground-versioned-data-object.class.ts");






var SelectionlistExampleComponent = /** @class */ (function () {
    function SelectionlistExampleComponent() {
        this.loading = true;
        this.multipleSelections = true;
    }
    SelectionlistExampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(5000)).subscribe(function (ignore) { return _this.loading = false; });
    };
    SelectionlistExampleComponent.prototype.onSelect = function ($event) {
        this.selectedDTOs = [];
        this.selectedDTOs = $event;
    };
    SelectionlistExampleComponent.prototype.getSelectedDTO = function () {
        if (Object(_shared_functions__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.selectedDTOs)) {
            return '';
        }
        else {
            console.log('Auswahllisten: selectedDTO = ' + JSON.stringify(this.selectedDTOs));
            var names_1 = [];
            this.selectedDTOs.forEach(function (item) {
                names_1.push(item.name);
            });
            return names_1.join(', ');
        }
    };
    SelectionlistExampleComponent.prototype.isLoading = function () {
        return this.loading;
    };
    SelectionlistExampleComponent.prototype.getEmptyList = function () {
        return [];
    };
    SelectionlistExampleComponent.prototype.getVersionedDataObjects = function () {
        return [
            new _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__["PlaygroundVersionedDataObject"](1, 'Schütze 1'),
            new _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__["PlaygroundVersionedDataObject"](2, 'Schütze 2'),
            new _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__["PlaygroundVersionedDataObject"](3, 'Schütze 3'),
            new _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__["PlaygroundVersionedDataObject"](4, 'Schütze 4'),
            new _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__["PlaygroundVersionedDataObject"](5, 'Schütze 5'),
            new _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__["PlaygroundVersionedDataObject"](6, 'Schütze 6'),
            new _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__["PlaygroundVersionedDataObject"](7, 'Schütze 7'),
            new _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__["PlaygroundVersionedDataObject"](8, 'Schütze 8'),
            new _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__["PlaygroundVersionedDataObject"](9, 'Schütze 9'),
            new _types_playground_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_5__["PlaygroundVersionedDataObject"](10, 'Schütze 10'),
        ];
    };
    SelectionlistExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-selectionlist-example',
            template: __webpack_require__(/*! ./selectionlist-example.component.html */ "./src/app/modules/playground/components/playground/components/selectionlist-example/selectionlist-example.component.html"),
            styles: [__webpack_require__(/*! ./selectionlist-example.component.scss */ "./src/app/modules/playground/components/playground/components/selectionlist-example/selectionlist-example.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectionlistExampleComponent);
    return SelectionlistExampleComponent;
}());



/***/ }),

/***/ "./src/app/modules/playground/components/playground/components/tooltip-example/tooltip-example.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/components/tooltip-example/tooltip-example.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Tooltips</h4>\n\n<h5>bla-tooltip</h5>\n\n\n<bla-col-layout>\n  <p class=\"playground-label\">\n    Tooltip für Text:\n  </p>\n\n  <bla-tooltip value=\"'Tooltip Inhalt'\">\n    Text\n  </bla-tooltip>\n\n</bla-col-layout>\n\n\n<bla-col-layout>\n  <p class=\"playground-label\">\n    Tooltip für ein Icon:\n  </p>\n  <bla-tooltip [value]=\"infoTooltipText\">\n    <fa-icon [icon]=\"infoIcon\"\n             size=\"lg\">\n    </fa-icon>\n  </bla-tooltip>\n</bla-col-layout>\n\n<bla-col-layout>\n  <p class=\"playground-label\">\n    Tooltip für einen Button:\n  </p>\n  <bla-tooltip [value]=\"getTooltipText()\">\n    <button class=\"btn btn-light\">Button</button>\n  </bla-tooltip>\n</bla-col-layout>\n"

/***/ }),

/***/ "./src/app/modules/playground/components/playground/components/tooltip-example/tooltip-example.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/components/tooltip-example/tooltip-example.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".playground-label {\n  width: 30vw;\n  max-width: 30vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvcGxheWdyb3VuZC9jb21wb25lbnRzL3BsYXlncm91bmQvY29tcG9uZW50cy90b29sdGlwLWV4YW1wbGUvdG9vbHRpcC1leGFtcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGxheWdyb3VuZC9jb21wb25lbnRzL3BsYXlncm91bmQvY29tcG9uZW50cy90b29sdGlwLWV4YW1wbGUvdG9vbHRpcC1leGFtcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXlncm91bmQtbGFiZWwge1xuICB3aWR0aDogMzB2dztcbiAgbWF4LXdpZHRoOiAzMHZ3O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/playground/components/playground/components/tooltip-example/tooltip-example.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/components/tooltip-example/tooltip-example.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: TooltipExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipExampleComponent", function() { return TooltipExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var TooltipExampleComponent = /** @class */ (function () {
    function TooltipExampleComponent() {
        this.infoIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfoCircle"];
        this.infoTooltipText = 'Info Tooltip Text';
    }
    TooltipExampleComponent.prototype.ngOnInit = function () {
    };
    TooltipExampleComponent.prototype.getTooltipText = function () {
        return 'Button Tooltip Text';
    };
    TooltipExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-tooltip-example',
            template: __webpack_require__(/*! ./tooltip-example.component.html */ "./src/app/modules/playground/components/playground/components/tooltip-example/tooltip-example.component.html"),
            styles: [__webpack_require__(/*! ./tooltip-example.component.scss */ "./src/app/modules/playground/components/playground/components/tooltip-example/tooltip-example.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TooltipExampleComponent);
    return TooltipExampleComponent;
}());



/***/ }),

/***/ "./src/app/modules/playground/components/playground/playground.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/playground.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-common-dialog [config]=\"config\" *ngIf=\"!(inProd === true)\">\n\n  <p>Auf dieser Seite können neue Komponenten ausprobiert werden. Falls ihr noch eine passende Komponente für eure\n     Dialoge sucht, könnt ihr hier stöbern.</p>\n\n  <h4>Inhalt</h4>\n  <ul>\n    <li><a href=\"#layouts\">Layouts</a>\n      <ul>\n        <li><a href=\"#bla-col-layout\">Spalten-Layout</a></li>\n        <li><a href=\"#bla-row-layout\">Zeilen-Layout</a></li>\n        <li><a href=\"#bla-grid-layout\">Grid-Layout</a></li>\n        <li><a href=\"#bla-centered-layout\">Zentriertes Spalten-Layout</a></li>\n      </ul>\n    </li>\n    <li><a href=\"#tooltip\">Tooltips</a></li>\n    <li><a href=\"#dropdown\">Dropdowns (1 Element auswählen)</a></li>\n    <li><a href=\"#selectionlists\">Auswahllisten</a>\n      <ul>\n        <li><a href=\"#bla-selectionlist\">Auswahlliste (1 bis n Elemente auswählen)</a></li>\n        <li><a href=\"#bla-quicksearch-list\">Schnellsuche (1 bis n Elemente auswählen)</a></li>\n      </ul>\n    </li>\n    <li><a href=\"#downloads\">Datei-Downloads</a></li>\n  </ul>\n\n  <a name=\"layouts\"></a>\n  <bla-layout-example></bla-layout-example>\n\n  <a name=\"tooltip\"></a>\n  <bla-tooltip-example></bla-tooltip-example>\n\n  <a name=\"dropdown\"></a>\n  <bla-dropdown-menu-example></bla-dropdown-menu-example>\n\n  <a name=\"selectionlists\"></a>\n  <bla-selectionlist-example></bla-selectionlist-example>\n\n  <a name=\"downloads\"></a>\n  <bla-download-file-example></bla-download-file-example>\n</bla-common-dialog>\n"

/***/ }),

/***/ "./src/app/modules/playground/components/playground/playground.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/playground.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGxheWdyb3VuZC9jb21wb25lbnRzL3BsYXlncm91bmQvcGxheWdyb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/playground/components/playground/playground.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/playground.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PlaygroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function() { return PlaygroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _playground_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playground.config */ "./src/app/modules/playground/components/playground/playground.config.ts");




var PlaygroundComponent = /** @class */ (function () {
    function PlaygroundComponent() {
        this.config = _playground_config__WEBPACK_IMPORTED_MODULE_3__["PLAYGROUND_CONFIG"];
        this.inProd = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production;
    }
    PlaygroundComponent.prototype.ngOnInit = function () {
    };
    PlaygroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-playground',
            template: __webpack_require__(/*! ./playground.component.html */ "./src/app/modules/playground/components/playground/playground.component.html"),
            styles: [__webpack_require__(/*! ./playground.component.scss */ "./src/app/modules/playground/components/playground/playground.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlaygroundComponent);
    return PlaygroundComponent;
}());



/***/ }),

/***/ "./src/app/modules/playground/components/playground/playground.config.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/playground.config.ts ***!
  \*******************************************************************************/
/*! exports provided: PLAYGROUND_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYGROUND_CONFIG", function() { return PLAYGROUND_CONFIG; });
var PLAYGROUND_CONFIG = {
    moduleTranslationKey: 'PLAYGROUND',
    pageTitleTranslationKey: 'PLAYGROUND.PLAYGROUND.TITLE'
};


/***/ }),

/***/ "./src/app/modules/playground/components/playground/types/playground-versioned-data-object.class.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/playground/components/playground/types/playground-versioned-data-object.class.ts ***!
  \**********************************************************************************************************/
/*! exports provided: PlaygroundVersionedDataObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundVersionedDataObject", function() { return PlaygroundVersionedDataObject; });
var PlaygroundVersionedDataObject = /** @class */ (function () {
    function PlaygroundVersionedDataObject(id, name) {
        this.version = 0;
        this.id = id;
        this.name = name;
    }
    return PlaygroundVersionedDataObject;
}());



/***/ }),

/***/ "./src/app/modules/playground/playground.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/playground/playground.module.ts ***!
  \*********************************************************/
/*! exports provided: PlaygroundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundModule", function() { return PlaygroundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/modules/shared/index.ts");
/* harmony import */ var _components_playground_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/playground/components */ "./src/app/modules/playground/components/playground/components/index.ts");
/* harmony import */ var _components_playground_playground_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/playground/playground.component */ "./src/app/modules/playground/components/playground/playground.component.ts");
/* harmony import */ var _playground_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./playground.routing */ "./src/app/modules/playground/playground.routing.ts");









var PlaygroundModule = /** @class */ (function () {
    function PlaygroundModule() {
    }
    PlaygroundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_playground_routing__WEBPACK_IMPORTED_MODULE_8__["PLAYGROUND_ROUTES"]),
                _shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
            ],
            declarations: [
                _components_playground_components__WEBPACK_IMPORTED_MODULE_6__["TooltipExampleComponent"],
                _components_playground_components__WEBPACK_IMPORTED_MODULE_6__["DropdownMenuExampleComponent"],
                _components_playground_components__WEBPACK_IMPORTED_MODULE_6__["SelectionlistExampleComponent"],
                _components_playground_components__WEBPACK_IMPORTED_MODULE_6__["LayoutExampleComponent"],
                _components_playground_components__WEBPACK_IMPORTED_MODULE_6__["DownloadFileExampleComponent"],
                _components_playground_playground_component__WEBPACK_IMPORTED_MODULE_7__["PlaygroundComponent"],
            ]
        })
    ], PlaygroundModule);
    return PlaygroundModule;
}());



/***/ }),

/***/ "./src/app/modules/playground/playground.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/playground/playground.routing.ts ***!
  \**********************************************************/
/*! exports provided: PLAYGROUND_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYGROUND_ROUTES", function() { return PLAYGROUND_ROUTES; });
/* harmony import */ var _components_playground_playground_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/playground/playground.component */ "./src/app/modules/playground/components/playground/playground.component.ts");

var PLAYGROUND_ROUTES = [
    { path: '', component: _components_playground_playground_component__WEBPACK_IMPORTED_MODULE_0__["PlaygroundComponent"] },
];


/***/ }),

/***/ "./src/app/modules/playground/services/hello-resource-provider.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/playground/services/hello-resource-provider.service.ts ***!
  \********************************************************************************/
/*! exports provided: HelloResourceProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloResourceProviderService", function() { return HelloResourceProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_data_provider_services_resource_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data-provider/services/resource-provider.service */ "./src/app/modules/shared/data-provider/services/resource-provider.service.ts");




var HelloResourceProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HelloResourceProviderService, _super);
    function HelloResourceProviderService(restClient) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.serviceSubUrl = 'v1/hello-world/download';
        return _this;
    }
    HelloResourceProviderService.prototype.downloadExamplePdf = function (url, fileName, aElement) {
        return this.downloadFile(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(this.getUrl()).path(url).build(), fileName, aElement);
    };
    HelloResourceProviderService.prototype.getRestClient = function () {
        return this.restClient;
    };
    HelloResourceProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"]])
    ], HelloResourceProviderService);
    return HelloResourceProviderService;
}(_shared_data_provider_services_resource_provider_service__WEBPACK_IMPORTED_MODULE_3__["ResourceProviderService"]));



/***/ })

}]);
//# sourceMappingURL=src-app-modules-playground-playground-module.js.map