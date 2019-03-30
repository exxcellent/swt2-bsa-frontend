(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-wettkampf-wettkampf-module"],{

/***/ "./src/app/modules/wettkampf/components/setzliste-download/setzliste-download.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/wettkampf/components/setzliste-download/setzliste-download.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <bla-download-button [id]=\"'downloadSetzliste'\"\n                       [downloadUrl]=\"getDownloadUrl('pdf/setzliste')\"\n                       [fileName]=\"'setzliste.pdf'\">Download Setzliste\n  </bla-download-button>\n"

/***/ }),

/***/ "./src/app/modules/wettkampf/components/setzliste-download/setzliste-download.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/wettkampf/components/setzliste-download/setzliste-download.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: SetzlisteDownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetzlisteDownloadComponent", function() { return SetzlisteDownloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _shared_services_notification_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/notification/types */ "./src/app/modules/shared/services/notification/types/index.ts");
/* harmony import */ var _services_setzliste_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/setzliste-provider.service */ "./src/app/modules/wettkampf/services/setzliste-provider.service.ts");







var NOTIFICATION_DOWNLOAD_SUCCESS = 'download_example_success';
var NOTIFICATION_DOWNLOAD_FAILURE = 'download_example_failure';
var SetzlisteDownloadComponent = /** @class */ (function () {
    function SetzlisteDownloadComponent(setzlisteService, notificationService) {
        this.setzlisteService = setzlisteService;
        this.notificationService = notificationService;
        this.downloadingFile = false;
    }
    SetzlisteDownloadComponent.prototype.ngOnInit = function () {
    };
    SetzlisteDownloadComponent.prototype.getDownloadUrl = function (path) {
        return new _shared_data_provider__WEBPACK_IMPORTED_MODULE_3__["UriBuilder"]()
            .fromPath(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendBaseUrl)
            .path('v1/download')
            .path(path)
            .build();
    };
    SetzlisteDownloadComponent.prototype.download = function (fileType) {
        var _this = this;
        this.downloadingFile = true;
        var fileEnding = fileType.toLowerCase();
        var fileName = fileEnding + ' -example.' + fileEnding;
        console.log('Invoke ' + fileType + ' download');
        this.setzlisteService.downloadExamplePdf(fileEnding, fileName, this.aElementRef)
            .then(function (response) { return _this.handleSuccess(response, fileType); })
            .catch(function (response) { return _this.handleFailure(response, fileType); });
    };
    SetzlisteDownloadComponent.prototype.handleSuccess = function (response, fileType) {
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
    SetzlisteDownloadComponent.prototype.handleFailure = function (response, fileType) {
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
    ], SetzlisteDownloadComponent.prototype, "aElementRef", void 0);
    SetzlisteDownloadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-setzliste-download',
            template: __webpack_require__(/*! ./setzliste-download.component.html */ "./src/app/modules/wettkampf/components/setzliste-download/setzliste-download.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_setzliste_provider_service__WEBPACK_IMPORTED_MODULE_6__["SetzlisteProviderService"],
            _shared_services_notification__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], SetzlisteDownloadComponent);
    return SetzlisteDownloadComponent;
}());



/***/ }),

/***/ "./src/app/modules/wettkampf/components/setzliste-old/setzliste.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/wettkampf/components/setzliste-old/setzliste.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wettkaempfe\"\n     class=\"container\">\n  <h1>Setzliste</h1>\n\n  <table id=\"wettkaempfeTabelle\"\n         class=\"table table-hover table-responsive thead-light table-striped\"\n         style=\"width:100%\">\n    <thead>\n    <tr>\n      <th>Match</th>\n      <th>Scheibe 1+2</th>\n      <th>M.Pkte</th>\n      <th>Scheibe 3+4</th>\n      <th>M.Pkte</th>\n      <th>Scheibe 5+6</th>\n      <th>M.Pkte</th>\n      <th>Scheibe 7+8</th>\n      <th>M.Pkte</th>\n    </tr>\n    </thead>\n    <tr>\n      <td>1</td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>2</td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>3</td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>4</td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>5</td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>6</td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>7</td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n    </tr>\n  </table>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/wettkampf/components/setzliste-old/setzliste.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/wettkampf/components/setzliste-old/setzliste.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2V0dGthbXBmL2NvbXBvbmVudHMvc2V0emxpc3RlLW9sZC9zZXR6bGlzdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/wettkampf/components/setzliste-old/setzliste.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/wettkampf/components/setzliste-old/setzliste.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SetzlisteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetzlisteComponent", function() { return SetzlisteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SetzlisteComponent = /** @class */ (function () {
    function SetzlisteComponent() {
    }
    SetzlisteComponent.prototype.ngOnInit = function () {
    };
    SetzlisteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-setzliste',
            template: __webpack_require__(/*! ./setzliste.component.html */ "./src/app/modules/wettkampf/components/setzliste-old/setzliste.component.html"),
            styles: [__webpack_require__(/*! ./setzliste.component.scss */ "./src/app/modules/wettkampf/components/setzliste-old/setzliste.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SetzlisteComponent);
    return SetzlisteComponent;
}());



/***/ }),

/***/ "./src/app/modules/wettkampf/components/wettkaempfe/wettkaempfe.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/wettkampf/components/wettkaempfe/wettkaempfe.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-navigation-dialog [config]=\"config\">\n\n  <div id=\"wettkaempfe\"\n       class=\"container\">\n    <h1>Termine Liga-Hallenrunde 2018/2019</h1>\n    <table id=\"wettkaempfeTabelle\"\n           class=\"table table-hover table-responsive thead-light table-striped\"\n           style=\"width:100%\">\n      <thead>\n      <tr>\n        <th>{{ 'TABLE.DAY' | translate }}</th>\n        <th>{{ 'TABLE.DATE' | translate }}</th>\n        <th>{{ 'TABLE.TIME' | translate }}</th>\n        <th>{{ 'TABLE.LIGA' | translate }}</th>\n        <th>{{ 'TABLE.PLACE' | translate }}</th>\n        <th>{{ 'TABLE.CDAY' | translate }}</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>Samstag</td>\n        <td>03.11.2018</td>\n        <td>14:00</td>\n        <td>2. Bundesliga</td>\n        <td>Welzheim</td>\n        <td>1. Wettkampf</td>\n        <bla-setzliste-download></bla-setzliste-download>\n      </tr>\n\n      <tr class=\"table-warning\">\n        <td>Samstag</td>\n        <td>17.11.2018</td>\n        <td>14:00</td>\n        <td>Landesliga Nord Recurve</td>\n        <td>Welzheim</td>\n        <td>1. Wettkampf</td>\n      </tr>\n\n      <tr class=\"table-danger\">\n        <td>Samstag</td>\n        <td>17.11.2018</td>\n        <td>10:00</td>\n        <td>Landesliga A Compound</td>\n        <td>Hochdorf o. Essendorf</td>\n        <td>1. Wettkampf</td>\n\n      <tr class=\"table-success\">\n        <td>Samstag</td>\n        <td>17.11.2018</td>\n        <td>14:00</td>\n        <td>Württembergliga Compound</td>\n        <td>Hochdorf o. Essendorf</td>\n        <td>1. Wettkampf</td>\n      </tr>\n\n      <tr class=\"table-info\">\n        <td>Sonntag</td>\n        <td>18.11.2018</td>\n        <td>10:00</td>\n        <td>Landesliga Süd Recurve</td>\n        <td>Hochdorf o. Essendorf</td>\n        <td>1. Wettkampf</td>\n      </tr>\n\n      <tr class=\"table-primary\">\n        <td>Sonntag</td>\n        <td>18.11.2018</td>\n        <td>10:00</td>\n        <td>Landesliga Süd Recurve</td>\n        <td>Hochdorf o. Essendorf</td>\n        <td>1. Wettkampf</td>\n      </tr>\n\n      <tr>\n        <td>Samstag</td>\n        <td>03.11.2018</td>\n        <td>14:00</td>\n        <td>2. Bundesliga</td>\n        <td>Welzheim</td>\n        <td>1. Wettkampf</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <h3>Legende</h3>\n    <table id=\"legendeTabelle\"\n           class=\"table table-sm table-responsive\">\n      <tr>\n        <td class=\"table-primary\">Recurve</td>\n        <td>Württembergliga</td>\n      </tr>\n\n      <tr>\n        <td class=\"table-warning\">Recurve</td>\n        <td>Landesliga Nord</td>\n      </tr>\n\n      <tr>\n        <td class=\"table-info\">Recurve</td>\n        <td>Landesliga Süd</td>\n      </tr>\n\n      <td>\n        <tr></tr>\n        <tr></tr>\n      </td>\n\n      <tr>\n        <td class=\"table-success\">Compound</td>\n        <td>Württembergliga</td>\n      </tr>\n\n      <tr>\n        <td class=\"table-danger\">Compound</td>\n        <td>Landesliga A</td>\n      </tr>\n\n      <tr>\n        <td class=\"table-dark\">Compound</td>\n        <td>Landesliga B</td>\n      </tr>\n    </table>\n</div>\n\n  <router-outlet></router-outlet>\n\n</bla-navigation-dialog>\n"

/***/ }),

/***/ "./src/app/modules/wettkampf/components/wettkaempfe/wettkaempfe.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/wettkampf/components/wettkaempfe/wettkaempfe.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Farbkonzept Website */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvd2V0dGthbXBmL2NvbXBvbmVudHMvd2V0dGthZW1wZmUvd2V0dGthZW1wZmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3dldHRrYW1wZi9jb21wb25lbnRzL3dldHRrYWVtcGZlL3dldHRrYWVtcGZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRmFyYmtvbnplcHQgV2Vic2l0ZSAqL1xuJHByaW1hcnk6ICMwMmJkZDU7IC8vIExpbmtzLCBOYXZiYXJcbiRwcmltYXJ5LWxpZ2h0OiAjYjRmZmZmOyAvLyBTaWRlYmFyLUJhY2tncm91bmRcbiRwcmltYXJ5LWRhcms6ICMwMDdjOTE7IC8vIFNpZGViYXItRm9udFxuJHNlY29uZGFyeTogI2ZmYzEwNzsgLy8gaG92ZXIgVGFibGVzXG4kc2Vjb25kYXJ5LWxpZ2h0OiAjZmZmMzUwO1xuJHNlY29uZGFyeS1kYXJrOiAjZmY4MzNhOyAvLyBob3ZlciBMaW5rcywgTG9nb1xuIl19 */"

/***/ }),

/***/ "./src/app/modules/wettkampf/components/wettkaempfe/wettkaempfe.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/wettkampf/components/wettkaempfe/wettkaempfe.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WettkaempfeComponent, SetzlisteDownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WettkaempfeComponent", function() { return WettkaempfeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/common */ "./src/app/modules/shared/components/common/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _wettkaempfe_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wettkaempfe.config */ "./src/app/modules/wettkampf/components/wettkaempfe/wettkaempfe.config.ts");
/* harmony import */ var _setzliste_download_setzliste_download_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../setzliste-download/setzliste-download.component */ "./src/app/modules/wettkampf/components/setzliste-download/setzliste-download.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetzlisteDownloadComponent", function() { return _setzliste_download_setzliste_download_component__WEBPACK_IMPORTED_MODULE_6__["SetzlisteDownloadComponent"]; });








var WettkaempfeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WettkaempfeComponent, _super);
    function WettkaempfeComponent(router, route, notificationService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.route = route;
        _this.notificationService = notificationService;
        _this.config = _wettkaempfe_config__WEBPACK_IMPORTED_MODULE_5__["WETTKAEMPFE_CONFIG"];
        _this.pdf = new Blob();
        return _this;
    }
    WettkaempfeComponent.prototype.ngOnInit = function () {
    };
    WettkaempfeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-wettkaempfe',
            template: __webpack_require__(/*! ./wettkaempfe.component.html */ "./src/app/modules/wettkampf/components/wettkaempfe/wettkaempfe.component.html"),
            styles: [__webpack_require__(/*! ./../../../../app.component.scss */ "./src/app/app.component.scss"), __webpack_require__(/*! ./wettkaempfe.component.scss */ "./src/app/modules/wettkampf/components/wettkaempfe/wettkaempfe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_notification__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], WettkaempfeComponent);
    return WettkaempfeComponent;
}(_shared_components_common__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/wettkampf/components/wettkaempfe/wettkaempfe.config.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/wettkampf/components/wettkaempfe/wettkaempfe.config.ts ***!
  \********************************************************************************/
/*! exports provided: WETTKAEMPFE_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WETTKAEMPFE_CONFIG", function() { return WETTKAEMPFE_CONFIG; });
var WETTKAEMPFE_CONFIG = {
    moduleTranslationKey: 'WETTKAEMPFE',
    pageTitleTranslationKey: 'WETTKAEMPFE.WETTKAEMPFE.TITLE',
    navigationCardsConfig: {
        navigationCards: []
    }
};


/***/ }),

/***/ "./src/app/modules/wettkampf/guards/wettkampf.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/wettkampf/guards/wettkampf.guard.ts ***!
  \*************************************************************/
/*! exports provided: WettkampfGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WettkampfGuard", function() { return WettkampfGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");



var WettkampfGuard = /** @class */ (function () {
    function WettkampfGuard(currentUserService) {
        this.currentUserService = currentUserService;
    }
    WettkampfGuard.prototype.canActivate = function () {
        return this.currentUserService.hasAnyPermisson([_shared_services_current_user__WEBPACK_IMPORTED_MODULE_2__["UserPermission"].CAN_READ_WETTKAMPF, _shared_services_current_user__WEBPACK_IMPORTED_MODULE_2__["UserPermission"].CAN_MODIFY_WETTKAMPF]);
    };
    WettkampfGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_current_user__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]])
    ], WettkampfGuard);
    return WettkampfGuard;
}());



/***/ }),

/***/ "./src/app/modules/wettkampf/services/setzliste-provider.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/wettkampf/services/setzliste-provider.service.ts ***!
  \**************************************************************************/
/*! exports provided: SetzlisteProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetzlisteProviderService", function() { return SetzlisteProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_data_provider_services_resource_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data-provider/services/resource-provider.service */ "./src/app/modules/shared/data-provider/services/resource-provider.service.ts");




var SetzlisteProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SetzlisteProviderService, _super);
    function SetzlisteProviderService(restClient) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.serviceSubUrl = 'v1/download';
        return _this;
    }
    SetzlisteProviderService.prototype.downloadExamplePdf = function (url, fileName, aElement) {
        return this.downloadFile(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(this.getUrl()).path(url).build(), fileName, aElement);
    };
    SetzlisteProviderService.prototype.getRestClient = function () {
        return this.restClient;
    };
    SetzlisteProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"]])
    ], SetzlisteProviderService);
    return SetzlisteProviderService;
}(_shared_data_provider_services_resource_provider_service__WEBPACK_IMPORTED_MODULE_3__["ResourceProviderService"]));



/***/ }),

/***/ "./src/app/modules/wettkampf/wettkampf.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/wettkampf/wettkampf.module.ts ***!
  \*******************************************************/
/*! exports provided: WettkampfModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WettkampfModule", function() { return WettkampfModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/modules/shared/index.ts");
/* harmony import */ var _components_setzliste_old_setzliste_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/setzliste-old/setzliste.component */ "./src/app/modules/wettkampf/components/setzliste-old/setzliste.component.ts");
/* harmony import */ var _components_wettkaempfe_wettkaempfe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/wettkaempfe/wettkaempfe.component */ "./src/app/modules/wettkampf/components/wettkaempfe/wettkaempfe.component.ts");
/* harmony import */ var _guards_wettkampf_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/wettkampf.guard */ "./src/app/modules/wettkampf/guards/wettkampf.guard.ts");
/* harmony import */ var _wettkampf_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wettkampf.routing */ "./src/app/modules/wettkampf/wettkampf.routing.ts");










var WettkampfModule = /** @class */ (function () {
    function WettkampfModule() {
    }
    WettkampfModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_wettkampf_routing__WEBPACK_IMPORTED_MODULE_9__["WETTKAMPF_ROUTES"]),
                _shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            declarations: [_components_wettkaempfe_wettkaempfe_component__WEBPACK_IMPORTED_MODULE_7__["WettkaempfeComponent"], _components_setzliste_old_setzliste_component__WEBPACK_IMPORTED_MODULE_6__["SetzlisteComponent"], _components_wettkaempfe_wettkaempfe_component__WEBPACK_IMPORTED_MODULE_7__["SetzlisteDownloadComponent"]],
            providers: [_guards_wettkampf_guard__WEBPACK_IMPORTED_MODULE_8__["WettkampfGuard"]]
        })
    ], WettkampfModule);
    return WettkampfModule;
}());



/***/ }),

/***/ "./src/app/modules/wettkampf/wettkampf.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/wettkampf/wettkampf.routing.ts ***!
  \********************************************************/
/*! exports provided: WETTKAMPF_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WETTKAMPF_ROUTES", function() { return WETTKAMPF_ROUTES; });
/* harmony import */ var _components_wettkaempfe_wettkaempfe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/wettkaempfe/wettkaempfe.component */ "./src/app/modules/wettkampf/components/wettkaempfe/wettkaempfe.component.ts");
/* harmony import */ var _guards_wettkampf_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/wettkampf.guard */ "./src/app/modules/wettkampf/guards/wettkampf.guard.ts");


var WETTKAMPF_ROUTES = [
    { path: '', component: _components_wettkaempfe_wettkaempfe_component__WEBPACK_IMPORTED_MODULE_0__["WettkaempfeComponent"], canActivate: [_guards_wettkampf_guard__WEBPACK_IMPORTED_MODULE_1__["WettkampfGuard"]] }
];


/***/ })

}]);
//# sourceMappingURL=src-app-modules-wettkampf-wettkampf-module.js.map