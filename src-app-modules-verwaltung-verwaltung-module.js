(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-verwaltung-verwaltung-module"],{

/***/ "./src/app/modules/verwaltung/components/benutzer/benutzer-detail/benutzer-detail.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/benutzer/benutzer-detail/benutzer-detail.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-common-dialog [config]=\"config\"\n                   [loading]=\"loading\">\n\n  <a name=\"bla-selectionlist\"></a>\n\n  <form id=\"benutzerForm\"\n        class=\"horizontal-form half-page\"\n        #benutzerForm=\"ngForm\">\n\n\n\n      <!-- Email / Username -->\n      <div class=\"form-group row\">\n        <label for=\"benutzerEmail\"\n               class=\"col-sm-3 col-form-label\">\n          <span>{{ 'MANAGEMENT.BENUTZER_DETAIL.FORM.EMAIL.LABEL' | translate }}</span>\n          <span> *</span>\n        </label>\n        <div class=\"col-sm-9\">\n          <input type=\"email\"\n                 class=\"form-control\"\n                 [disabled]=true\n                 id=\"benutzerEmail\"\n                 name=\"benutzerEmail\"\n                 #benutzerEmail=\"ngModel\"\n                 [(ngModel)]=\"currentBenutzerRolleDO.email\"\n                 placeholder=\"{{ 'MANAGEMENT.BENUTZER_DETAIL.FORM.EMAIL.PLACEHOLDER' | translate }}\">\n\n          <div class=\"invalid-feedback\">\n            {{ 'MANAGEMENT.BENUTZER_DETAIL.FORM.EMAIL.ERROR' | translate }}\n          </div>\n        </div>\n      </div>\n      <!-- Rolle -->\n    <!-- Email / Username -->\n    <div class=\"form-group row\">\n      <label for=\"benutzerRolleAlt\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.BENUTZER_DETAIL.FORM.ROLEOLD.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               class=\"form-control\"\n               [disabled]=true\n               id=\"benutzerRolleAlt\"\n               name=\"benutzerRolleAlt\"\n               #benutzerRolleAlt=\"ngModel\"\n               [(ngModel)]=\"currentBenutzerRolleDO.roleName\"\n               placeholder=\"{{ 'MANAGEMENT.BENUTZER_DETAIL.FORM.ROLEOLD.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.BENUTZER_DETAIL.FORM.ROLLE.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n      <div class=\"form-group row\">\n        <label for=\"benutzerrolle\"\n               id=\"benutzerrolle\"\n               name=\"benutzerrolle\"\n               class=\"col-sm-3 col-form-label\">\n          <span>{{ 'MANAGEMENT.BENUTZER_DETAIL.FORM.ROLENEW.LABEL' | translate }}: {{ getSelectedDTO() }}</span>\n          <span> *</span>\n        </label>\n        <div class=\"col-sm-9\">\n          <bla-selectionlist\n                             [id]=\"'quickSearch'\"\n                             [items]=\"getVersionedDataObjects()\"\n                             [optionFieldSelector]=\"'roleName'\"\n                             (onSelect)=\"onSelect($event)\"\n                             [multipleSelections]=\"false\"\n                             style=\"width: 50%; height: 10em;\">\n\n\n          </bla-selectionlist>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-sm-3\"></div>\n        <div class=\"col-sm-9 button-box\">\n          <bla-button\n                      [id]=\"'benutzerUpdateButton'\"\n                      [disabled]=\"!benutzerForm.valid\"\n                      [loading]=\"saveLoading\"\n                      (onClick)=\"onUpdate($event)\">\n            {{ 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.FORM.UPDATE' | translate }}\n          </bla-button>\n        </div>\n      </div>\n\n\n\n  </form>\n\n</bla-common-dialog>\n"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/benutzer/benutzer-detail/benutzer-detail.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/benutzer/benutzer-detail/benutzer-detail.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".half-page {\n  width: 50%; }\n\n.button-box {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  flex-wrap: wrap; }\n\n@media (max-width: 1400px) {\n  .half-page {\n    width: 80%; } }\n\n@media (max-width: 950px) {\n  .half-page {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL2JlbnV0emVyL2JlbnV0emVyLWRldGFpbC9iZW51dHplci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixlQUFlLEVBQUE7O0FBSWpCO0VBRUU7SUFDRSxVQUFVLEVBQUEsRUFDWDs7QUFLSDtFQUVFO0lBQ0UsV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3ZlcndhbHR1bmcvY29tcG9uZW50cy9iZW51dHplci9iZW51dHplci1kZXRhaWwvYmVudXR6ZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbGYtcGFnZSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5idXR0b24tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcblxuICAuaGFsZi1wYWdlIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbn1cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuXG4gIC5oYWxmLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/benutzer/benutzer-detail/benutzer-detail.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/benutzer/benutzer-detail/benutzer-detail.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: BenutzerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenutzerDetailComponent", function() { return BenutzerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components */ "./src/app/modules/shared/components/index.ts");
/* harmony import */ var _services_benutzer_data_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/benutzer-data-provider.service */ "./src/app/modules/verwaltung/services/benutzer-data-provider.service.ts");
/* harmony import */ var _types_benutzer_rolle_do_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../types/benutzer-rolle-do.class */ "./src/app/modules/verwaltung/types/benutzer-rolle-do.class.ts");
/* harmony import */ var _types_datatransfer_benutzer_rolle_dto_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../types/datatransfer/benutzer-rolle-dto.class */ "./src/app/modules/verwaltung/types/datatransfer/benutzer-rolle-dto.class.ts");
/* harmony import */ var _types_role_do_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../types/role-do.class */ "./src/app/modules/verwaltung/types/role-do.class.ts");
/* harmony import */ var _benutzer_detail_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./benutzer-detail.config */ "./src/app/modules/verwaltung/components/benutzer/benutzer-detail/benutzer-detail.config.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _services_models_roles_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/models/roles-versioned-data-object.class */ "./src/app/modules/verwaltung/services/models/roles-versioned-data-object.class.ts");
/* harmony import */ var _services_role_data_provider_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/role-data-provider.service */ "./src/app/modules/verwaltung/services/role-data-provider.service.ts");













var ID_PATH_PARAM = 'id';
var NOTIFICATION_SAVE_BENUTZER = 'benutzer_detail_save';
var BenutzerDetailComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BenutzerDetailComponent, _super);
    function BenutzerDetailComponent(benutzerDataProvider, roleDataProvider, router, route, notificationService) {
        var _this = _super.call(this) || this;
        _this.benutzerDataProvider = benutzerDataProvider;
        _this.roleDataProvider = roleDataProvider;
        _this.router = router;
        _this.route = route;
        _this.notificationService = notificationService;
        _this.config = _benutzer_detail_config__WEBPACK_IMPORTED_MODULE_9__["BENUTZER_DETAIL_CONFIG"];
        _this.ButtonType = _shared_components__WEBPACK_IMPORTED_MODULE_4__["ButtonType"];
        _this.roles = [];
        _this.saveLoading = false;
        return _this;
    }
    BenutzerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.tobeRole = new _types_role_do_class__WEBPACK_IMPORTED_MODULE_8__["RoleDO"]();
        this.notificationService.discardNotification();
        this.route.params.subscribe(function (params) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(params[ID_PATH_PARAM])) {
                var id = params[ID_PATH_PARAM];
                _this.currentBenutzerRolleDO = new _types_benutzer_rolle_do_class__WEBPACK_IMPORTED_MODULE_6__["BenutzerRolleDO"]();
                if (id !== 'add') {
                    _this.benutzerDataProvider.findUserRoleById(id)
                        .then(function (response) { return _this.currentBenutzerRolleDO = response.payload; })
                        .catch(function (response) { return _this.currentBenutzerRolleDO = null; });
                    // wir laden hiermit alle möglichen User-Rollen aus dem Backend um die Klappliste für die Auswahl zu befüllen.
                    _this.roleDataProvider.findAll()
                        .then(function (response) { return _this.setVersionedDataObjects(response); })
                        .catch(function (response) { return _this.getEmptyList(); });
                }
            }
        });
    };
    BenutzerDetailComponent.prototype.onUpdate = function (ignore) {
        var _this = this;
        this.saveLoading = true;
        // persist
        this.currentBenutzerRolleDTO = new _types_datatransfer_benutzer_rolle_dto_class__WEBPACK_IMPORTED_MODULE_7__["BenutzerRolleDTO"]();
        this.currentBenutzerRolleDTO.id = this.currentBenutzerRolleDO.id;
        this.currentBenutzerRolleDTO.email = this.currentBenutzerRolleDO.email;
        this.tobeRole = this.selectedDTOs[0];
        this.currentBenutzerRolleDTO.roleId = this.tobeRole.id;
        this.currentBenutzerRolleDTO.roleName = this.tobeRole.roleName;
        this.benutzerDataProvider.update(this.currentBenutzerRolleDTO)
            .then(function (response) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload.id)) {
                console.log('Update with id: ' + response.payload.id);
                var notification = {
                    id: NOTIFICATION_SAVE_BENUTZER,
                    title: 'MANAGEMENT.BENUTZER_DETAIL.NOTIFICATION.UPDATE.TITLE',
                    description: 'MANAGEMENT.BENUTZER_DETAIL.NOTIFICATION.UPDATE.DESCRIPTION',
                    severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_10__["NotificationSeverity"].INFO,
                    origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_10__["NotificationOrigin"].USER,
                    type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_10__["NotificationType"].OK,
                    userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_10__["NotificationUserAction"].PENDING
                };
                _this.notificationService.observeNotification(NOTIFICATION_SAVE_BENUTZER)
                    .subscribe(function (myNotification) {
                    if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_10__["NotificationUserAction"].ACCEPTED) {
                        _this.saveLoading = false;
                        _this.router.navigateByUrl('/verwaltung/benutzer');
                    }
                });
                _this.notificationService.showNotification(notification);
            }
        }, function (response) {
            console.log('Failed');
            _this.saveLoading = false;
        });
        // show response message
    };
    BenutzerDetailComponent.prototype.entityExists = function () {
        return this.currentBenutzerRolleDO.id > 0;
    };
    BenutzerDetailComponent.prototype.loadById = function (id) {
        var _this = this;
        this.benutzerDataProvider.findUserRoleById(id)
            .then(function (response) { return _this.handleSuccess(response); })
            .catch(function (response) { return _this.handleFailure(response); });
    };
    BenutzerDetailComponent.prototype.handleSuccess = function (response) {
        this.currentBenutzerRolleDO = response.payload;
        this.loading = false;
    };
    BenutzerDetailComponent.prototype.handleFailure = function (response) {
        this.loading = false;
    };
    BenutzerDetailComponent.prototype.getEmptyList = function () {
        return [];
    };
    BenutzerDetailComponent.prototype.setVersionedDataObjects = function (response) {
        var _this = this;
        this.roles = []; // reset array to ensure change detection
        this.loading = false;
        response.payload.forEach(function (responseItem) { return _this.roles.push(new _services_models_roles_versioned_data_object_class__WEBPACK_IMPORTED_MODULE_11__["RoleVersionedDataObject"](responseItem.id, responseItem.roleName)); });
        return;
    };
    BenutzerDetailComponent.prototype.getVersionedDataObjects = function () {
        return this.roles;
    };
    BenutzerDetailComponent.prototype.onSelect = function ($event) {
        this.selectedDTOs = [];
        this.selectedDTOs = $event;
    };
    BenutzerDetailComponent.prototype.getSelectedDTO = function () {
        if (Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(this.selectedDTOs)) {
            return '';
        }
        else {
            console.log('Auswahllisten: selectedDTO = ' + JSON.stringify(this.selectedDTOs));
            var names_1 = [];
            this.selectedDTOs.forEach(function (item) { names_1.push(item.roleName); });
            return names_1.join(', ');
        }
    };
    BenutzerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-benutzer-detail',
            template: __webpack_require__(/*! ./benutzer-detail.component.html */ "./src/app/modules/verwaltung/components/benutzer/benutzer-detail/benutzer-detail.component.html"),
            styles: [__webpack_require__(/*! ./benutzer-detail.component.scss */ "./src/app/modules/verwaltung/components/benutzer/benutzer-detail/benutzer-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_benutzer_data_provider_service__WEBPACK_IMPORTED_MODULE_5__["BenutzerDataProviderService"],
            _services_role_data_provider_service__WEBPACK_IMPORTED_MODULE_12__["RoleDataProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_notification__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]])
    ], BenutzerDetailComponent);
    return BenutzerDetailComponent;
}(_shared_components__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/components/benutzer/benutzer-detail/benutzer-detail.config.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/benutzer/benutzer-detail/benutzer-detail.config.ts ***!
  \**************************************************************************************************/
/*! exports provided: BENUTZER_DETAIL_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BENUTZER_DETAIL_CONFIG", function() { return BENUTZER_DETAIL_CONFIG; });
var BENUTZER_DETAIL_CONFIG = {
    moduleTranslationKey: 'MANAGEMENT',
    pageTitleTranslationKey: 'MANAGEMENT.BENUTZER_DETAIL.TITLE'
};


/***/ }),

/***/ "./src/app/modules/verwaltung/components/benutzer/benutzer-neu/benutzer-neu.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/benutzer/benutzer-neu/benutzer-neu.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-common-dialog [config]=\"config\"\n                   [loading]=\"loading\">\n\n  <a name=\"bla-selectionlist\"></a>\n\n  <form id=\"benutzerNeuForm\"\n        class=\"horizontal-form half-page\"\n        #benutzerNeuForm=\"ngForm\">\n\n\n      <!-- username / email -->\n           <div class=\"form-group row\">\n            <label for=\"benutzerUsername\"\n                   class=\"col-sm-3 col-form-label\">\n              <span>{{ 'MANAGEMENT.BENUTZER_NEU.FORM.EMAIL.LABEL' | translate }}</span>\n              <span> *</span>\n            </label>\n            <div class=\"col-sm-9\">\n              <input type=\"email\"\n                     class=\"form-control\"\n                     id=\"benutzerUsername\"\n                     name=\"benutzerUsername\"\n                     #benutzerUsername=\"ngModel\"\n                     [(ngModel)]=\"currentCredentials.username\"\n                     [class.is-invalid]=\"benutzerUsername.invalid && !benutzerUsername.untouched\"\n                     pattern= \"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\"\n                     placeholder=\"{{ 'MANAGEMENT.BENUTZER_NEU.FORM.EMAIL.PLACEHOLDER' | translate }}\">\n              <div class=\"invalid-feedback\">\n                {{ 'MANAGEMENT.BENUTZER_NEU.FORM.EMAIL.ERROR' | translate }}\n              </div>\n            </div>\n          </div>\n\n          <!-- Passwort -->\n       <div class=\"form-group row\">\n         <label for=\"benutzerPassword\"\n                class=\"col-sm-3 col-form-label\">\n           <span>{{ 'MANAGEMENT.BENUTZER_NEU.FORM.PASSWORD.LABEL' | translate }}</span>\n           <span> *</span>\n         </label>\n         <div class=\"col-sm-9\">\n           <input type=\"password\"\n                  class=\"form-control\"\n                  required\n                  minlength=\"8\"\n                  pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$\"\n                  id=\"benutzerPassword\"\n                  name=\"benutzerPassword\"\n                  #benutzerPassword=\"ngModel\"\n                  [(ngModel)]=\"currentCredentials.password\"\n                  [class.is-invalid]=\"benutzerPassword.invalid  && !benutzerPassword.untouched\"\n                  placeholder=\"{{ 'MANAGEMENT.BENUTZER_NEU.FORM.PASSWORD.PLACEHOLDER' | translate }}\">\n           <div class=\"invalid-feedback\">\n             {{ 'MANAGEMENT.BENUTZER_NEU.FORM.PASSWORD.ERROR' | translate }}\n           </div>\n         </div>\n       </div>\n\n       <!-- Passwort -->\n         <div class=\"form-group row\">\n         <label for=\"benutzerVerifyPassword\"\n                class=\"col-sm-3 col-form-label\">\n           <span>{{ 'MANAGEMENT.BENUTZER_NEU.FORM.VERIFYPASSWORD.LABEL' | translate }}</span>\n           <span> *</span>\n         </label>\n         <div class=\"col-sm-9\">\n           <input type=\"password\"\n                  class=\"form-control\"\n                  required\n                  id=\"benutzerVerifyPassword\"\n                  name=\"benutzerVerifyPassword\"\n                  #benutzerVerifyPassword=\"ngModel\"\n                  [(ngModel)]=\"verifyCredentials.password\"\n                  [class.is-invalid]=\"currentCredentials.password !=  verifyCredentials.password\"\n                  placeholder=\"{{ 'MANAGEMENT.BENUTZER_NEU.FORM.VERIFYPASSWORD.PLACEHOLDER' | translate }}\">\n           <div class=\"invalid-feedback\">\n             {{ 'MANAGEMENT.BENUTZER_NEU.FORM.VERIFYPASSWORD.ERROR' | translate }}\n           </div>\n         </div>\n       </div>\n\n       <div class=\"form-group row\">\n         <div class=\"col-sm-3\"></div>\n         <div class=\"col-sm-9 button-box\">\n           <bla-button\n                       [id]=\"'benutzerSaveButton'\"\n                       [disabled]=\"!benutzerNeuForm.valid\"\n                       [loading]=\"saveLoading\"\n                       (onClick)=\"onSave($event)\">\n             {{ 'MANAGEMENT.BENUTZER_NEU.FORM.SAVE' | translate }}\n           </bla-button>\n         </div>\n       </div>\n   </form>\n\n </bla-common-dialog>\n"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/benutzer/benutzer-neu/benutzer-neu.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/benutzer/benutzer-neu/benutzer-neu.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".half-page {\n  width: 50%; }\n\n.button-box {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  flex-wrap: wrap; }\n\n@media (max-width: 1400px) {\n  .half-page {\n    width: 80%; } }\n\n@media (max-width: 950px) {\n  .half-page {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL2JlbnV0emVyL2JlbnV0emVyLW5ldS9iZW51dHplci1uZXUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixlQUFlLEVBQUE7O0FBSWpCO0VBRUU7SUFDRSxVQUFVLEVBQUEsRUFDWDs7QUFLSDtFQUVFO0lBQ0UsV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3ZlcndhbHR1bmcvY29tcG9uZW50cy9iZW51dHplci9iZW51dHplci1uZXUvYmVudXR6ZXItbmV1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbGYtcGFnZSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5idXR0b24tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcblxuICAuaGFsZi1wYWdlIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbn1cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuXG4gIC5oYWxmLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/benutzer/benutzer-neu/benutzer-neu.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/benutzer/benutzer-neu/benutzer-neu.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: BenutzerNeuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenutzerNeuComponent", function() { return BenutzerNeuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _user_types_credentials_do_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user/types/credentials-do.class */ "./src/app/modules/user/types/credentials-do.class.ts");
/* harmony import */ var _user_types_model_credentials_dto_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user/types/model/credentials-dto.class */ "./src/app/modules/user/types/model/credentials-dto.class.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components */ "./src/app/modules/shared/components/index.ts");
/* harmony import */ var _services_benutzer_data_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/benutzer-data-provider.service */ "./src/app/modules/verwaltung/services/benutzer-data-provider.service.ts");
/* harmony import */ var _benutzer_neu_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./benutzer-neu.config */ "./src/app/modules/verwaltung/components/benutzer/benutzer-neu/benutzer-neu.config.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");










var ID_PATH_PARAM = 'id';
var NOTIFICATION_SAVE_BENUTZER = 'benutzer_neu_save';
var BenutzerNeuComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BenutzerNeuComponent, _super);
    function BenutzerNeuComponent(benutzerDataProvider, router, route, notificationService) {
        var _this = _super.call(this) || this;
        _this.benutzerDataProvider = benutzerDataProvider;
        _this.router = router;
        _this.route = route;
        _this.notificationService = notificationService;
        _this.config = _benutzer_neu_config__WEBPACK_IMPORTED_MODULE_8__["BENUTZER_NEU_CONFIG"];
        _this.ButtonType = _shared_components__WEBPACK_IMPORTED_MODULE_6__["ButtonType"];
        _this.currentCredentials = new _user_types_credentials_do_class__WEBPACK_IMPORTED_MODULE_4__["CredentialsDO"]();
        _this.verifyCredentials = new _user_types_credentials_do_class__WEBPACK_IMPORTED_MODULE_4__["CredentialsDO"]();
        _this.saveLoading = false;
        return _this;
    }
    BenutzerNeuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.notificationService.discardNotification();
        this.route.params.subscribe(function (params) {
            _this.currentCredentials = new _user_types_credentials_do_class__WEBPACK_IMPORTED_MODULE_4__["CredentialsDO"]();
            _this.verifyCredentials = new _user_types_credentials_do_class__WEBPACK_IMPORTED_MODULE_4__["CredentialsDO"]();
        });
        this.loading = false;
    };
    BenutzerNeuComponent.prototype.onSave = function (ignore) {
        var _this = this;
        this.saveLoading = true;
        // persist
        this.currentCredentialsDTO = new _user_types_model_credentials_dto_class__WEBPACK_IMPORTED_MODULE_5__["CredentialsDTO"](this.currentCredentials.username, this.currentCredentials.password);
        this.benutzerDataProvider.create(this.currentCredentialsDTO)
            .then(function (response) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload.id)) {
                console.log('Saved with id: ' + response.payload.id);
                var notification = {
                    id: NOTIFICATION_SAVE_BENUTZER,
                    title: 'MANAGEMENT.BENUTZER_NEU.NOTIFICATION.SAVE.TITLE',
                    description: 'MANAGEMENT.BENUTZER_NEU.NOTIFICATION.SAVE.DESCRIPTION',
                    severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_9__["NotificationSeverity"].INFO,
                    origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_9__["NotificationOrigin"].USER,
                    type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_9__["NotificationType"].OK,
                    userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_9__["NotificationUserAction"].PENDING
                };
                _this.notificationService.observeNotification(NOTIFICATION_SAVE_BENUTZER)
                    .subscribe(function (myNotification) {
                    if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_9__["NotificationUserAction"].ACCEPTED) {
                        _this.saveLoading = false;
                        _this.router.navigateByUrl('/verwaltung/benutzer');
                    }
                });
                _this.notificationService.showNotification(notification);
            }
        }, function (response) {
            console.log('Failed');
            _this.saveLoading = false;
        });
        // show response message
    };
    BenutzerNeuComponent.prototype.loadById = function (id) {
        this.loading = false;
    };
    BenutzerNeuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-benutzer-neu',
            template: __webpack_require__(/*! ./benutzer-neu.component.html */ "./src/app/modules/verwaltung/components/benutzer/benutzer-neu/benutzer-neu.component.html"),
            styles: [__webpack_require__(/*! ./benutzer-neu.component.scss */ "./src/app/modules/verwaltung/components/benutzer/benutzer-neu/benutzer-neu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_benutzer_data_provider_service__WEBPACK_IMPORTED_MODULE_7__["BenutzerDataProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_notification__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]])
    ], BenutzerNeuComponent);
    return BenutzerNeuComponent;
}(_shared_components__WEBPACK_IMPORTED_MODULE_6__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/components/benutzer/benutzer-neu/benutzer-neu.config.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/benutzer/benutzer-neu/benutzer-neu.config.ts ***!
  \********************************************************************************************/
/*! exports provided: BENUTZER_NEU_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BENUTZER_NEU_CONFIG", function() { return BENUTZER_NEU_CONFIG; });
var BENUTZER_NEU_CONFIG = {
    moduleTranslationKey: 'MANAGEMENT',
    pageTitleTranslationKey: 'MANAGEMENT.BENUTZER_NEU.TITLE'
};


/***/ }),

/***/ "./src/app/modules/verwaltung/components/benutzer/benutzer-overview/benutzer-overview.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/benutzer/benutzer-overview/benutzer-overview.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-overview-dialog [config]=\"config\"\n                     [rows]=\"rows\"\n                     [loading]=\"loading\"\n                     (onViewClicked)=\"onView($event)\"\n                     (onEditClicked)=\"onEdit($event)\"\n                     (onDeleteClicked)=\"onDelete($event)\">\n\n</bla-overview-dialog>\n"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/benutzer/benutzer-overview/benutzer-overview.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/benutzer/benutzer-overview/benutzer-overview.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL2JlbnV0emVyL2JlbnV0emVyLW92ZXJ2aWV3L2JlbnV0emVyLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/benutzer/benutzer-overview/benutzer-overview.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/benutzer/benutzer-overview/benutzer-overview.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: NOTIFICATION_DELETE_BENUTZER, BenutzerOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_DELETE_BENUTZER", function() { return NOTIFICATION_DELETE_BENUTZER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenutzerOverviewComponent", function() { return BenutzerOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/common */ "./src/app/modules/shared/components/common/index.ts");
/* harmony import */ var _shared_components_tables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/tables */ "./src/app/modules/shared/components/tables/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _services_benutzer_data_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/benutzer-data-provider.service */ "./src/app/modules/verwaltung/services/benutzer-data-provider.service.ts");
/* harmony import */ var _benutzer_overview_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./benutzer-overview.config */ "./src/app/modules/verwaltung/components/benutzer/benutzer-overview/benutzer-overview.config.ts");








var NOTIFICATION_DELETE_BENUTZER = 'benutzer_overview_delete';
var BenutzerOverviewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BenutzerOverviewComponent, _super);
    function BenutzerOverviewComponent(benutzerDataProvider, router, notificationService) {
        var _this = _super.call(this) || this;
        _this.benutzerDataProvider = benutzerDataProvider;
        _this.router = router;
        _this.notificationService = notificationService;
        _this.config = _benutzer_overview_config__WEBPACK_IMPORTED_MODULE_7__["BENUTZER_OVERVIEW_CONFIG"];
        return _this;
    }
    BenutzerOverviewComponent.prototype.ngOnInit = function () {
        this.loadTableRows();
    };
    BenutzerOverviewComponent.prototype.onView = function (versionedDataObject) {
        this.navigateToDetailDialog(versionedDataObject);
    };
    BenutzerOverviewComponent.prototype.onEdit = function (versionedDataObject) {
        this.navigateToDetailDialog(versionedDataObject);
    };
    BenutzerOverviewComponent.prototype.onDelete = function (versionedDataObject) {
        var _this = this;
        // show loading icon
        var id = versionedDataObject.id;
        this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_4__["showDeleteLoadingIndicatorIcon"])(this.rows, id);
        var notification = {
            id: NOTIFICATION_DELETE_BENUTZER + id,
            title: 'MANAGEMENT.BENUTZER.NOTIFICATION.DELETE.TITLE',
            description: 'MANAGEMENT.BENUTZER.NOTIFICATION.DELETE.DESCRIPTION',
            descriptionParam: '' + id,
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].QUESTION,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].YES_NO,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_BENUTZER + id)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.benutzerDataProvider.deleteById(id)
                    .then(function (response) { return _this.loadTableRows(); })
                    .catch(function (response) { return _this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_4__["hideLoadingIndicator"])(_this.rows, id); });
            }
        });
        this.notificationService.showNotification(notification);
    };
    BenutzerOverviewComponent.prototype.loadTableRows = function () {
        var _this = this;
        this.loading = true;
        this.benutzerDataProvider.findAll()
            .then(function (response) { return _this.handleLoadTableRowsSuccess(response); })
            .catch(function (response) { return _this.handleLoadTableRowsFailure(response); });
    };
    BenutzerOverviewComponent.prototype.navigateToDetailDialog = function (versionedDataObject) {
        this.router.navigateByUrl('/verwaltung/benutzer/' + versionedDataObject.id);
    };
    BenutzerOverviewComponent.prototype.handleLoadTableRowsFailure = function (response) {
        this.rows = [];
        this.loading = false;
    };
    BenutzerOverviewComponent.prototype.handleLoadTableRowsSuccess = function (response) {
        this.rows = []; // reset array to ensure change detection
        this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_4__["toTableRows"])(response.payload);
        this.loading = false;
    };
    BenutzerOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-benutzer-overview',
            template: __webpack_require__(/*! ./benutzer-overview.component.html */ "./src/app/modules/verwaltung/components/benutzer/benutzer-overview/benutzer-overview.component.html"),
            styles: [__webpack_require__(/*! ./benutzer-overview.component.scss */ "./src/app/modules/verwaltung/components/benutzer/benutzer-overview/benutzer-overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_benutzer_data_provider_service__WEBPACK_IMPORTED_MODULE_6__["BenutzerDataProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], BenutzerOverviewComponent);
    return BenutzerOverviewComponent;
}(_shared_components_common__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/components/benutzer/benutzer-overview/benutzer-overview.config.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/benutzer/benutzer-overview/benutzer-overview.config.ts ***!
  \******************************************************************************************************/
/*! exports provided: BENUTZER_OVERVIEW_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BENUTZER_OVERVIEW_CONFIG", function() { return BENUTZER_OVERVIEW_CONFIG; });
/* harmony import */ var _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/tables/types/table-action-type.enum */ "./src/app/modules/shared/components/tables/types/table-action-type.enum.ts");

var BENUTZER_OVERVIEW_CONFIG = {
    moduleTranslationKey: 'MANAGEMENT',
    pageTitleTranslationKey: 'MANAGEMENT.BENUTZER.TITLE',
    tableConfig: {
        columns: [
            {
                translationKey: 'MANAGEMENT.BENUTZER.TABLE.HEADERS.EMAIL',
                propertyName: 'email',
                width: 20,
            },
            {
                translationKey: 'MANAGEMENT.BENUTZER.TABLE.HEADERS.ROLE',
                propertyName: 'roleName',
                width: 10,
            }
        ],
        actions: {
            actionTypes: [_shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].EDIT, _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].DELETE],
            width: 6
        },
    }
};


/***/ }),

/***/ "./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-detail/dsb-mannschaft-detail.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-detail/dsb-mannschaft-detail.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-common-dialog [config]=\"config\"\n                   [loading]=\"loading\">\n\n  <form id=\"dsbMannschaftForm\"\n        class=\"horizontal-form half-page\"\n        #dsbMitgliedForm=\"ngForm\">\n\n    <div class=\"form-group row\">\n      <label for=\"vereinsName\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.FORM.DSBVEREINNUMMER.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <select\n               class=\"form-control\"\n               id=\"vereinsName\"\n               name=\"vereinsName\"\n               #vereinsName=\"ngModel\"\n               [(ngModel)]=\"currentVerein\">\n         <option [ngValue]=\"vereine\" *ngFor=\"let vereine of verein\"> {{vereine.name}}</option>\n        </select>\n\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.FORM.DSBVEREINNUMMER.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n\n    <!-- bub -->\n    <div class=\"form-group row\">\n      <label for=\"benutzerID\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.FORM.BENUTZER_ID.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               class=\"form-control\"\n               required\n               id=\"benutzerID\"\n               name=\"benutzerID\"\n               #benutzerID=\"ngModel\"\n               [(ngModel)]=\"currentDsbMannschaft.benutzerId\"\n               [class.is-invalid]=\"benutzerID.invalid && !benutzerID.untouched\"\n               placeholder=\"{{ 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.FORM.BENUTZER_ID.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.FORM.BENUTZER_ID.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <!-- TODO: VEREIN ID, use dropdown list -->\n    <div class=\"form-group row\">\n      <label for=\"DsbMannschaftNummer\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.FORM.DSBMANNSCHAFTNUMMER.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"number\"\n               class=\"form-control\"\n               required\n               min=\"1\"\n               id=\"DsbMannschaftNummer\"\n               name=\"DsbMannschaftNummer\"\n               #DsbMannschaftNummer=\"ngModel\"\n               [(ngModel)]=\"currentDsbMannschaft.nummer\"\n               [class.is-invalid]=\"DsbMannschaftNummer.invalid && !DsbMannschaftNummer.untouched\"\n               placeholder=\"{{ 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.FORM.DSBMANNSCHAFTNUMMER.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.FORM.DSBMANNSCHAFTNUMMER.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n\n\n\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-3\"></div>\n      <div class=\"col-sm-9 button-box\">\n\n\n        <bla-button *ngIf=\"!entityExists()\"\n                    [id]=\"'dsbMannschaftSaveButton'\"\n                    [disabled]=\"!dsbMitgliedForm.valid\"\n                    [loading]=\"saveLoading\"\n                    (onClick)=\"onSave($event)\">\n          {{ 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.FORM.SAVE' | translate }}\n        </bla-button>\n        <bla-button *ngIf=\"entityExists()\"\n                    [id]=\"'dsbMannschaftUpdateButton'\"\n                    [disabled]=\"!dsbMitgliedForm.valid\"\n                    [loading]=\"saveLoading\"\n                    (onClick)=\"onUpdate($event)\">\n          {{ 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.FORM.UPDATE' | translate }}\n        </bla-button>\n\n        <bla-button *ngIf=\"entityExists()\"\n                    [buttonType]=\"ButtonType.DANGER\"\n                    [loading]=\"deleteLoading\"\n                    (onClick)=\"onDelete($event)\">\n          {{ 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.FORM.DELETE' | translate }}\n        </bla-button>\n      </div>\n    </div>\n  </form>\n\n</bla-common-dialog>\n"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-detail/dsb-mannschaft-detail.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-detail/dsb-mannschaft-detail.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".half-page {\n  width: 50%; }\n\n.button-box {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  flex-wrap: wrap; }\n\n@media (max-width: 1400px) {\n  .half-page {\n    width: 80%; } }\n\n@media (max-width: 950px) {\n  .half-page {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL2RzYi1tYW5uc2NoYWZ0L2RzYi1tYW5uc2NoYWZ0LWRldGFpbC9kc2ItbWFubnNjaGFmdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixlQUFlLEVBQUE7O0FBSWpCO0VBRUU7SUFDRSxVQUFVLEVBQUEsRUFDWDs7QUFLSDtFQUVFO0lBQ0UsV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3ZlcndhbHR1bmcvY29tcG9uZW50cy9kc2ItbWFubnNjaGFmdC9kc2ItbWFubnNjaGFmdC1kZXRhaWwvZHNiLW1hbm5zY2hhZnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbGYtcGFnZSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5idXR0b24tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcblxuICAuaGFsZi1wYWdlIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbn1cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuXG4gIC5oYWxmLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-detail/dsb-mannschaft-detail.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-detail/dsb-mannschaft-detail.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: DsbMannschaftDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsbMannschaftDetailComponent", function() { return DsbMannschaftDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components */ "./src/app/modules/shared/components/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _services_dsb_mannschaft_data_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/dsb-mannschaft-data-provider.service */ "./src/app/modules/verwaltung/services/dsb-mannschaft-data-provider.service.ts");
/* harmony import */ var _services_verein_data_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/verein-data-provider.service */ "./src/app/modules/verwaltung/services/verein-data-provider.service.ts");
/* harmony import */ var _types_dsb_mannschaft_do_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../types/dsb-mannschaft-do.class */ "./src/app/modules/verwaltung/types/dsb-mannschaft-do.class.ts");
/* harmony import */ var _types_mannschaftsmitglied_do_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../types/mannschaftsmitglied-do.class */ "./src/app/modules/verwaltung/types/mannschaftsmitglied-do.class.ts");
/* harmony import */ var _types_verein_do_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../types/verein-do.class */ "./src/app/modules/verwaltung/types/verein-do.class.ts");
/* harmony import */ var _dsb_mannschaft_detail_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dsb-mannschaft-detail.config */ "./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-detail/dsb-mannschaft-detail.config.ts");












var ID_PATH_PARAM = 'id';
var NOTIFICATION_DELETE_DSBMANNSCHAFT = 'dsbmannschaft_detail_delete';
var NOTIFICATION_DELETE_DSBMANNSCHAFT_SUCCESS = 'dsbmannschaft_detail_delete_success';
var NOTIFICATION_DELETE_DSBMANNSCHAFT_FAILURE = 'dsbmannschaft_detail_delete_failure';
var NOTIFICATION_SAVE_DSBMANNSCHAFT = 'dsbmannschaft_detail_save';
var NOTIFICATION_UPDATE_DSBMANNSCHAFT = 'dsbmannschaft_detail_update';
var DsbMannschaftDetailComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DsbMannschaftDetailComponent, _super);
    function DsbMannschaftDetailComponent(DsbMannschaftDataProvider, vereinProvider, router, route, notificationService) {
        var _this = _super.call(this) || this;
        _this.DsbMannschaftDataProvider = DsbMannschaftDataProvider;
        _this.vereinProvider = vereinProvider;
        _this.router = router;
        _this.route = route;
        _this.notificationService = notificationService;
        _this.config = _dsb_mannschaft_detail_config__WEBPACK_IMPORTED_MODULE_11__["DSBMANNSCHAFT_DETAIL_CONFIG"];
        _this.ButtonType = _shared_components__WEBPACK_IMPORTED_MODULE_4__["ButtonType"];
        _this.currentDsbMannschaft = new _types_dsb_mannschaft_do_class__WEBPACK_IMPORTED_MODULE_8__["DsbMannschaftDO"]();
        _this.currentMannschaftsMitglied = new _types_mannschaftsmitglied_do_class__WEBPACK_IMPORTED_MODULE_9__["MannschaftsMitgliedDO"]();
        _this.currentVerein = new _types_verein_do_class__WEBPACK_IMPORTED_MODULE_10__["VereinDO"]();
        _this.verein = [new _types_verein_do_class__WEBPACK_IMPORTED_MODULE_10__["VereinDO"]()];
        _this.deleteLoading = false;
        _this.saveLoading = false;
        return _this;
    }
    DsbMannschaftDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.notificationService.discardNotification();
        this.loadVerein();
        this.route.params.subscribe(function (params) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(params[ID_PATH_PARAM])) {
                var id = params[ID_PATH_PARAM];
                if (id === 'add') {
                    _this.currentDsbMannschaft = new _types_dsb_mannschaft_do_class__WEBPACK_IMPORTED_MODULE_8__["DsbMannschaftDO"]();
                    _this.loading = false;
                    _this.deleteLoading = false;
                    _this.saveLoading = false;
                }
                else {
                    _this.loadById(params[ID_PATH_PARAM]);
                }
            }
        });
    };
    DsbMannschaftDetailComponent.prototype.onSave = function (ignore) {
        var _this = this;
        this.saveLoading = true;
        // persist
        this.DsbMannschaftDataProvider.create(this.currentDsbMannschaft, this.currentVerein)
            .then(function (response) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload.id)) {
                console.log('Saved with id: ' + response.payload.id);
                var notification = {
                    id: NOTIFICATION_SAVE_DSBMANNSCHAFT,
                    title: 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.NOTIFICATION.SAVE.TITLE',
                    description: 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.NOTIFICATION.SAVE.DESCRIPTION',
                    severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO,
                    origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
                    type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
                    userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
                };
                _this.notificationService.observeNotification(NOTIFICATION_SAVE_DSBMANNSCHAFT)
                    .subscribe(function (myNotification) {
                    if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                        _this.saveLoading = false;
                        _this.router.navigateByUrl('/verwaltung/dsb-mannschaft/' + response.payload.id);
                    }
                });
                _this.notificationService.showNotification(notification);
            }
        }, function (response) {
            console.log('Failed');
            _this.saveLoading = false;
        });
        // this.vereinProvider.findById(this.currentVerein.vereinId)
        //   .then((response: Response<VereinDO>) => {
        //     if (!isNullOrUndefined(response)
        //       && !isNullOrUndefined(response.payload)
        //       && !isNullOrUndefined(response.payload.vereinId)) {
        //       console.log('Saved with id: ' + response.payload.vereinId);
        //
        //       const notification: Notification = {
        //         id:          NOTIFICATION_SAVE_DSBMANNSCHAFT,
        //         title:       'MANAGEMENT.DSBMANNSCHAFT_DETAIL.NOTIFICATION.SAVE.TITLE',
        //         description: 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.NOTIFICATION.SAVE.DESCRIPTION',
        //         severity:    NotificationSeverity.INFO,
        //         origin:      NotificationOrigin.USER,
        //         type:        NotificationType.OK,
        //         userAction:  NotificationUserAction.PENDING
        //       };
        //
        //       this.notificationService.observeNotification(NOTIFICATION_SAVE_DSBMANNSCHAFT)
        //         .subscribe(myNotification => {
        //           if (myNotification.userAction === NotificationUserAction.ACCEPTED) {
        //             this.saveLoading = false;
        //             this.router.navigateByUrl('/verwaltung/vereine/' + response.payload.id);
        //           }
        //         });
        //
        //       this.notificationService.showNotification(notification);
        //     }
        //   }, (response: Response<DsbMannschaftDO>) => {
        //     console.log('Failed');
        //     this.saveLoading = false;
        //
        //
        //   });
        // show response message
    };
    DsbMannschaftDetailComponent.prototype.onUpdate = function (ignore) {
        var _this = this;
        this.saveLoading = true;
        // persist
        this.DsbMannschaftDataProvider.update(this.currentDsbMannschaft)
            .then(function (response) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload.id)) {
                var id = _this.currentDsbMannschaft.id;
                var notification = {
                    id: NOTIFICATION_UPDATE_DSBMANNSCHAFT + id,
                    title: 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.NOTIFICATION.SAVE.TITLE',
                    description: 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.NOTIFICATION.SAVE.DESCRIPTION',
                    severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO,
                    origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
                    type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
                    userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
                };
                _this.notificationService.observeNotification(NOTIFICATION_UPDATE_DSBMANNSCHAFT + id)
                    .subscribe(function (myNotification) {
                    if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                        _this.saveLoading = false;
                        _this.router.navigateByUrl('/verwaltung/dsb-mannschaft');
                    }
                });
                _this.notificationService.showNotification(notification);
            }
        }, function (response) {
            console.log('Failed');
            _this.saveLoading = false;
        });
        // show response message
    };
    DsbMannschaftDetailComponent.prototype.onDelete = function (ignore) {
        var _this = this;
        this.deleteLoading = true;
        this.notificationService.discardNotification();
        var id = this.currentDsbMannschaft.id;
        var notification = {
            id: NOTIFICATION_DELETE_DSBMANNSCHAFT + id,
            title: 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.NOTIFICATION.DELETE.TITLE',
            description: 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.NOTIFICATION.DELETE.DESCRIPTION',
            descriptionParam: '' + id,
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].QUESTION,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].YES_NO,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_DSBMANNSCHAFT + id)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.DsbMannschaftDataProvider.deleteById(id)
                    .then(function (response) { return _this.handleDeleteSuccess(response); })
                    .catch(function (response) { return _this.handleDeleteFailure(response); });
            }
        });
        this.notificationService.showNotification(notification);
    };
    DsbMannschaftDetailComponent.prototype.entityExists = function () {
        return this.currentDsbMannschaft.id > 0;
    };
    DsbMannschaftDetailComponent.prototype.loadById = function (id) {
        var _this = this;
        this.DsbMannschaftDataProvider.findById(id)
            .then(function (response) { return _this.handleSuccess(response); })
            .catch(function (response) { return _this.handleFailure(response); });
    };
    DsbMannschaftDetailComponent.prototype.loadVerein = function () {
        var _this = this;
        this.vereinProvider.findAll()
            .then(function (response) { return _this.handleResponseArraySuccess(response); })
            .catch(function (response) { return _this.handleResponseArrayFailure(response); });
    };
    DsbMannschaftDetailComponent.prototype.handleSuccess = function (response) {
        this.currentDsbMannschaft = response.payload;
        this.loading = false;
    };
    DsbMannschaftDetailComponent.prototype.handleFailure = function (response) {
        this.loading = false;
    };
    DsbMannschaftDetailComponent.prototype.handleDeleteSuccess = function (response) {
        var _this = this;
        var notification = {
            id: NOTIFICATION_DELETE_DSBMANNSCHAFT_SUCCESS,
            title: 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.NOTIFICATION.DELETE_SUCCESS.TITLE',
            description: 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.NOTIFICATION.DELETE_SUCCESS.DESCRIPTION',
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_DSBMANNSCHAFT_SUCCESS)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.router.navigateByUrl('/verwaltung/dsb-mannschaft');
                _this.deleteLoading = false;
            }
        });
        this.notificationService.showNotification(notification);
    };
    DsbMannschaftDetailComponent.prototype.handleDeleteFailure = function (response) {
        var _this = this;
        var notification = {
            id: NOTIFICATION_DELETE_DSBMANNSCHAFT_FAILURE,
            title: 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.NOTIFICATION.DELETE_FAILURE.TITLE',
            description: 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.NOTIFICATION.DELETE_FAILURE.DESCRIPTION',
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].ERROR,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_DSBMANNSCHAFT_FAILURE)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.deleteLoading = false;
            }
        });
        this.notificationService.showNotification(notification);
    };
    DsbMannschaftDetailComponent.prototype.handleResponseArraySuccess = function (response) {
        this.verein = [];
        this.verein = response.payload;
        this.currentVerein = this.verein[0];
        this.loading = false;
    };
    DsbMannschaftDetailComponent.prototype.handleResponseArrayFailure = function (response) {
        this.verein = [];
        this.loading = false;
    };
    DsbMannschaftDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-dsb-mannschaft-detail',
            template: __webpack_require__(/*! ./dsb-mannschaft-detail.component.html */ "./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-detail/dsb-mannschaft-detail.component.html"),
            styles: [__webpack_require__(/*! ./dsb-mannschaft-detail.component.scss */ "./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-detail/dsb-mannschaft-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dsb_mannschaft_data_provider_service__WEBPACK_IMPORTED_MODULE_6__["DsbMannschaftDataProviderService"],
            _services_verein_data_provider_service__WEBPACK_IMPORTED_MODULE_7__["VereinDataProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], DsbMannschaftDetailComponent);
    return DsbMannschaftDetailComponent;
}(_shared_components__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-detail/dsb-mannschaft-detail.config.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-detail/dsb-mannschaft-detail.config.ts ***!
  \********************************************************************************************************************/
/*! exports provided: DSBMANNSCHAFT_DETAIL_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DSBMANNSCHAFT_DETAIL_CONFIG", function() { return DSBMANNSCHAFT_DETAIL_CONFIG; });
var DSBMANNSCHAFT_DETAIL_CONFIG = {
    moduleTranslationKey: 'MANAGEMENT',
    pageTitleTranslationKey: 'MANAGEMENT.DSBMANNSCHAFT_DETAIL.TITLE'
};


/***/ }),

/***/ "./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-overview/dsb-mannschaft-overview.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-overview/dsb-mannschaft-overview.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-overview-dialog [config]=\"config\"\n                     [rows]=\"rows\"\n                     [loading]=\"loading\"\n                     (onViewClicked)=\"onView($event)\"\n                     (onEditClicked)=\"onEdit($event)\"\n                     (onDeleteClicked)=\"onDelete($event)\">\n\n</bla-overview-dialog>\n"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-overview/dsb-mannschaft-overview.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-overview/dsb-mannschaft-overview.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL2RzYi1tYW5uc2NoYWZ0L2RzYi1tYW5uc2NoYWZ0LW92ZXJ2aWV3L2RzYi1tYW5uc2NoYWZ0LW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-overview/dsb-mannschaft-overview.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-overview/dsb-mannschaft-overview.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: NOTIFICATION_DELETE_DSB_MANNSCHAFT, DsbMannschaftOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_DELETE_DSB_MANNSCHAFT", function() { return NOTIFICATION_DELETE_DSB_MANNSCHAFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsbMannschaftOverviewComponent", function() { return DsbMannschaftOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/common */ "./src/app/modules/shared/components/common/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _services_dsb_mannschaft_data_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/dsb-mannschaft-data-provider.service */ "./src/app/modules/verwaltung/services/dsb-mannschaft-data-provider.service.ts");
/* harmony import */ var _dsb_mannschaft_overview_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dsb-mannschaft-overview.config */ "./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-overview/dsb-mannschaft-overview.config.ts");
/* harmony import */ var _shared_components_tables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/tables */ "./src/app/modules/shared/components/tables/index.ts");








var NOTIFICATION_DELETE_DSB_MANNSCHAFT = 'dsb_mannschaft_overview_delete';
var DsbMannschaftOverviewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DsbMannschaftOverviewComponent, _super);
    function DsbMannschaftOverviewComponent(DsbMannschaftDataProvider, router, notificationService) {
        var _this = _super.call(this) || this;
        _this.DsbMannschaftDataProvider = DsbMannschaftDataProvider;
        _this.router = router;
        _this.notificationService = notificationService;
        _this.config = _dsb_mannschaft_overview_config__WEBPACK_IMPORTED_MODULE_6__["DSB_MANNSCHAFT_OVERVIEW_CONFIG"];
        return _this;
    }
    DsbMannschaftOverviewComponent.prototype.ngOnInit = function () {
        this.loadTableRows();
    };
    DsbMannschaftOverviewComponent.prototype.onView = function (versionedDataObject) {
        this.navigateToDetailDialog2(versionedDataObject);
    };
    DsbMannschaftOverviewComponent.prototype.onEdit = function (versionedDataObject) {
        this.navigateToDetailDialog(versionedDataObject);
    };
    DsbMannschaftOverviewComponent.prototype.onDelete = function (versionedDataObject) {
        var _this = this;
        // show loading icon
        var id = versionedDataObject.id;
        this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_7__["showDeleteLoadingIndicatorIcon"])(this.rows, id);
        var notification = {
            id: NOTIFICATION_DELETE_DSB_MANNSCHAFT + id,
            title: 'MANAGEMENT.DSBMANNSCHAFT.NOTIFICATION.DELETE.TITLE',
            description: 'MANAGEMENT.DSBMANNSCHAFT.NOTIFICATION.DELETE.DESCRIPTION',
            descriptionParam: '' + id,
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_4__["NotificationSeverity"].QUESTION,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_4__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_4__["NotificationType"].YES_NO,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_4__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_DSB_MANNSCHAFT + id)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_4__["NotificationUserAction"].ACCEPTED) {
                _this.DsbMannschaftDataProvider.deleteById(id)
                    .then(function (response) { return _this.loadTableRows(); })
                    .catch(function (response) { return _this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_7__["hideLoadingIndicator"])(_this.rows, id); });
            }
        });
        this.notificationService.showNotification(notification);
    };
    DsbMannschaftOverviewComponent.prototype.loadTableRows = function () {
        var _this = this;
        this.loading = true;
        this.DsbMannschaftDataProvider.findAll()
            .then(function (response) { return _this.handleLoadTableRowsSuccess(response); })
            .catch(function (response) { return _this.handleLoadTableRowsFailure(response); });
    };
    DsbMannschaftOverviewComponent.prototype.navigateToDetailDialog = function (versionedDataObject) {
        this.router.navigateByUrl('/verwaltung/dsbmannschaft/' + versionedDataObject.id);
    };
    DsbMannschaftOverviewComponent.prototype.navigateToDetailDialog2 = function (versionedDataObject) {
        this.router.navigateByUrl('/verwaltung/dsbmannschaft/' + versionedDataObject.id);
    };
    DsbMannschaftOverviewComponent.prototype.handleLoadTableRowsFailure = function (response) {
        this.rows = [];
        this.loading = false;
    };
    DsbMannschaftOverviewComponent.prototype.handleLoadTableRowsSuccess = function (response) {
        this.rows = []; // reset array to ensure change detection
        this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_7__["toTableRows"])(response.payload);
        this.loading = false;
    };
    DsbMannschaftOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-dsb-mannschaft-overview',
            template: __webpack_require__(/*! ./dsb-mannschaft-overview.component.html */ "./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-overview/dsb-mannschaft-overview.component.html"),
            styles: [__webpack_require__(/*! ./dsb-mannschaft-overview.component.scss */ "./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-overview/dsb-mannschaft-overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dsb_mannschaft_data_provider_service__WEBPACK_IMPORTED_MODULE_5__["DsbMannschaftDataProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_notification__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], DsbMannschaftOverviewComponent);
    return DsbMannschaftOverviewComponent;
}(_shared_components_common__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-overview/dsb-mannschaft-overview.config.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-overview/dsb-mannschaft-overview.config.ts ***!
  \************************************************************************************************************************/
/*! exports provided: DSB_MANNSCHAFT_OVERVIEW_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DSB_MANNSCHAFT_OVERVIEW_CONFIG", function() { return DSB_MANNSCHAFT_OVERVIEW_CONFIG; });
/* harmony import */ var _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/tables/types/table-action-type.enum */ "./src/app/modules/shared/components/tables/types/table-action-type.enum.ts");
/* harmony import */ var _shared_components_tables_types_table_column_sort_order_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/tables/types/table-column-sort-order.enum */ "./src/app/modules/shared/components/tables/types/table-column-sort-order.enum.ts");
/* harmony import */ var _shared_components_tables_types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/tables/types/table-column-type.enum */ "./src/app/modules/shared/components/tables/types/table-column-type.enum.ts");



var DSB_MANNSCHAFT_OVERVIEW_CONFIG = {
    moduleTranslationKey: 'MANAGEMENT',
    pageTitleTranslationKey: 'MANAGEMENT.DSBMANNSCHAFT.TITLE',
    tableConfig: {
        columns: [
            {
                translationKey: 'MANAGEMENT.DSBMANNSCHAFT.TABLE.HEADERS.ID',
                propertyName: 'id',
                width: 7,
                type: _shared_components_tables_types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnType"].NUMBER,
                currentSortOrder: _shared_components_tables_types_table_column_sort_order_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnSortOrder"].ASCENDING
            },
            {
                translationKey: 'MANAGEMENT.DSBMANNSCHAFT.TABLE.HEADERS.DSBVEREINNUMMER',
                propertyName: 'vereinId',
                width: 7,
                type: _shared_components_tables_types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnType"].NUMBER,
                currentSortOrder: _shared_components_tables_types_table_column_sort_order_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnSortOrder"].ASCENDING
            },
            {
                translationKey: 'MANAGEMENT.DSBMANNSCHAFT.TABLE.HEADERS.DSBMANNSCHAFTNUMMER',
                propertyName: 'nummer',
                width: 20,
                type: _shared_components_tables_types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnType"].NUMBER,
                currentSortOrder: _shared_components_tables_types_table_column_sort_order_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnSortOrder"].ASCENDING
            }
        ],
        actions: {
            actionTypes: [_shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].EDIT, _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].DELETE],
            width: 6
        },
    }
};


/***/ }),

/***/ "./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-detail/dsb-mitglied-detail.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-detail/dsb-mitglied-detail.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <bla-common-dialog [config]=\"config\"\n                   [loading]=\"loading\">\n\n  <form id=\"dsbMitgliedForm\"\n        class=\"horizontal-form half-page\"\n        #dsbMitgliedForm=\"ngForm\">\n\n    <!-- VORNAME -->\n    <div class=\"form-group row\">\n      <label for=\"dsbMitgliedVorname\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.VORNAME.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               class=\"form-control\"\n               required\n               id=\"dsbMitgliedVorname\"\n               name=\"dsbMitgliedVorname\"\n               #dsbMitgliedVorname=\"ngModel\"\n               [(ngModel)]=\"currentMitglied.vorname\"\n               [class.is-invalid]=\"dsbMitgliedVorname.invalid && !dsbMitgliedVorname.untouched\"\n               placeholder=\"{{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.VORNAME.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.VORNAME.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <!-- NACHNAME -->\n    <div class=\"form-group row\">\n      <label for=\"dsbMitgliedNachname\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.NACHNAME.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               class=\"form-control\"\n               required\n               id=\"dsbMitgliedNachname\"\n               name=\"dsbMitgliedNachname\"\n               #dsbMitgliedNachname=\"ngModel\"\n               [(ngModel)]=\"currentMitglied.nachname\"\n               [class.is-invalid]=\"dsbMitgliedNachname.invalid && !dsbMitgliedNachname.untouched\"\n               placeholder=\"{{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.NACHNAME.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.NACHNAME.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <!-- GEBURTSDATUM -->\n    <div class=\"form-group row\">\n      <label for=\"dsbMitgliedGeburtsdatum\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.GEBURTSDATUM.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               class=\"form-control\"\n               required\n               pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\"\n               id=\"dsbMitgliedGeburtsdatum\"\n               name=\"dsbMitgliedGeburtsdatum\"\n               #dsbMitgliedGeburtsdatum=\"ngModel\"\n               [(ngModel)]=\"currentMitglied.geburtsdatum\"\n               [class.is-invalid]=\"dsbMitgliedGeburtsdatum.invalid && !dsbMitgliedGeburtsdatum.untouched\"\n               placeholder=\"{{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.GEBURTSDATUM.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.GEBURTSDATUM.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n<!--\n    <!-- MITGLIEDSNUMMER -->\n\n    <div class=\"form-group row\">\n      <label for=\"dsbMitgliedMitgliedsnummer\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.MITGLIEDSNUMMER.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               class=\"form-control\"\n               required\n               id=\"dsbMitgliedMitgliedsnummer\"\n               name=\"dsbMitgliedMitgliedsnummer\"\n               #dsbMitgliedMitgliedsnummer=\"ngModel\"\n               [(ngModel)]=\"currentMitglied.mitgliedsnummer\"\n               [class.is-invalid]=\"dsbMitgliedMitgliedsnummer.invalid && !dsbMitgliedMitgliedsnummer.untouched\"\n               placeholder=\"{{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.MITGLIEDSNUMMER.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.MITGLIEDSNUMMER.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <!-- NATIONALITAET -->\n    <div class=\"form-group row\">\n      <label for=\"dsbMitgliedNationalitaet\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.NATIONALITAET.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               class=\"form-control\"\n               required\n               pattern=\"[D|AT|CH|FR|IT|GB]\"\n               id=\"dsbMitgliedNationalitaet\"\n               name=\"dsbMitgliedNationalitaet\"\n               #dsbMitgliedNationalitaet=\"ngModel\"\n               [(ngModel)]=\"currentMitglied.nationalitaet\"\n               [class.is-invalid]=\"dsbMitgliedNationalitaet.invalid && !dsbMitgliedNationalitaet.untouched\"\n               placeholder=\"{{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.NATIONALITAET.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.NATIONALITAET.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <!-- TODO: VEREIN ID, use dropdown list -->\n    <div class=\"form-group row\">\n      <label for=\"dsbMitgliedVerein\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.VEREIN.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"number\"\n               class=\"form-control\"\n               required\n               min=\"1\"\n               id=\"dsbMitgliedVerein\"\n               name=\"dsbMitgliedVerein\"\n               #dsbMitgliedVerein=\"ngModel\"\n               [(ngModel)]=\"currentMitglied.vereinsId\"\n               [class.is-invalid]=\"dsbMitgliedVerein.invalid && !dsbMitgliedVerein.untouched\"\n               placeholder=\"{{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.VEREIN.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.VEREIN.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n    <!-- leitend -->\n    <div class=\"form-group row\">\n      <label for=\"dsbMitgliedKampfrichter\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.KAMPFRICHTER.LABEL' | translate }}</span>\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"checkbox\" class=\"form-control\" id=\"dsbMitgliedKampfrichter\"\n               name=\"dsbMitgliedKampfrichter\" [disabled]=\"currentMitglied.userId == null ? true: false\"\n               #dsbMitgliedKampfrichter=\"ngModel\"\n               [(ngModel)]=\"currentMitglied.kampfrichter\"\n               [class.is-invalid]=\"dsbMitgliedKampfrichter.invalid && !dsbMitgliedKampfrichter.untouched\">\n        <span *ngIf=\"currentMitglied.userId==null\">Mitglied hat noch keinen User-Account. Bitte lege vorher einen an: <a href=\"#\" onClick=\"return false;;\">Userregistrierung</a></span>\n\n\n      </div>\n    </div>\n\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-3\"></div>\n      <div class=\"col-sm-9 button-box\">\n\n\n        <bla-button *ngIf=\"!entityExists()\"\n                    [id]=\"'dsbMitgliedSaveButton'\"\n                    [disabled]=\"!dsbMitgliedForm.valid\"\n                    [loading]=\"saveLoading\"\n                    (onClick)=\"onSave($event)\">\n          {{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.SAVE' | translate }}\n        </bla-button>\n        <bla-button *ngIf=\"entityExists()\"\n                    [id]=\"'dsbMitgliedUpdateButton'\"\n                    [disabled]=\"!dsbMitgliedForm.valid\"\n                    [loading]=\"saveLoading\"\n                    (onClick)=\"onUpdate($event)\">\n          {{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.UPDATE' | translate }}\n        </bla-button>\n\n        <bla-button *ngIf=\"entityExists()\"\n                    [buttonType]=\"ButtonType.DANGER\"\n                    [loading]=\"deleteLoading\"\n                    (onClick)=\"onDelete($event)\">\n          {{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.DELETE' | translate }}\n        </bla-button>\n      </div>\n    </div>\n  </form>\n\n</bla-common-dialog>\n"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-detail/dsb-mitglied-detail.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-detail/dsb-mitglied-detail.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".half-page {\n  width: 50%; }\n\n.button-box {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  flex-wrap: wrap; }\n\n@media (max-width: 1400px) {\n  .half-page {\n    width: 80%; } }\n\n@media (max-width: 950px) {\n  .half-page {\n    width: 100%; } }\n\n#dsbMitgliedKampfrichter {\n  height: 40px;\n  width: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL2RzYi1taXRnbGllZC9kc2ItbWl0Z2xpZWQtZGV0YWlsL2RzYi1taXRnbGllZC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixlQUFlLEVBQUE7O0FBSWpCO0VBRUU7SUFDRSxVQUFVLEVBQUEsRUFDWDs7QUFNSDtFQUVFO0lBQ0UsV0FBVyxFQUFBLEVBQ1o7O0FBR0g7RUFDRSxZQUFZO0VBQ1osV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy92ZXJ3YWx0dW5nL2NvbXBvbmVudHMvZHNiLW1pdGdsaWVkL2RzYi1taXRnbGllZC1kZXRhaWwvZHNiLW1pdGdsaWVkLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYWxmLXBhZ2Uge1xuICB3aWR0aDogNTAlO1xufVxuXG4uYnV0dG9uLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi8vIGZvciBzbWFsbCBkZXZpY2VzXG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XG5cbiAgLmhhbGYtcGFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG59XG5cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuXG4gIC5oYWxmLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cbiNkc2JNaXRnbGllZEthbXBmcmljaHRlcntcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMThweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-detail/dsb-mitglied-detail.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-detail/dsb-mitglied-detail.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DsbMitgliedDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsbMitgliedDetailComponent", function() { return DsbMitgliedDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components */ "./src/app/modules/shared/components/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _services_dsb_mitglied_data_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/dsb-mitglied-data-provider.service */ "./src/app/modules/verwaltung/services/dsb-mitglied-data-provider.service.ts");
/* harmony import */ var _types_dsb_mitglied_do_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../types/dsb-mitglied-do.class */ "./src/app/modules/verwaltung/types/dsb-mitglied-do.class.ts");
/* harmony import */ var _dsb_mitglied_detail_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dsb-mitglied-detail.config */ "./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-detail/dsb-mitglied-detail.config.ts");









var ID_PATH_PARAM = 'id';
var NOTIFICATION_DELETE_DSB_MITGLIED = 'dsb_mitglied_detail_delete';
var NOTIFICATION_DELETE_DSB_MITGLIED_SUCCESS = 'dsb_mitglied_detail_delete_success';
var NOTIFICATION_DELETE_DSB_MITGLIED_FAILURE = 'dsb_mitglied_detail_delete_failure';
var NOTIFICATION_SAVE_DSB_MITGLIED = 'dsb_mitglied_detail_save';
var NOTIFICATION_UPDATE_DSB_MITGLIED = 'dsb_mitglied_detail_update';
var DsbMitgliedDetailComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DsbMitgliedDetailComponent, _super);
    function DsbMitgliedDetailComponent(dsbMitgliedDataProvider, router, route, notificationService) {
        var _this = _super.call(this) || this;
        _this.dsbMitgliedDataProvider = dsbMitgliedDataProvider;
        _this.router = router;
        _this.route = route;
        _this.notificationService = notificationService;
        _this.config = _dsb_mitglied_detail_config__WEBPACK_IMPORTED_MODULE_8__["DSB_MITGLIED_DETAIL_CONFIG"];
        _this.ButtonType = _shared_components__WEBPACK_IMPORTED_MODULE_4__["ButtonType"];
        _this.currentMitglied = new _types_dsb_mitglied_do_class__WEBPACK_IMPORTED_MODULE_7__["DsbMitgliedDO"]();
        _this.deleteLoading = false;
        _this.saveLoading = false;
        return _this;
    }
    DsbMitgliedDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.notificationService.discardNotification();
        this.route.params.subscribe(function (params) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(params[ID_PATH_PARAM])) {
                var id = params[ID_PATH_PARAM];
                if (id === 'add') {
                    _this.currentMitglied = new _types_dsb_mitglied_do_class__WEBPACK_IMPORTED_MODULE_7__["DsbMitgliedDO"]();
                    _this.loading = false;
                    _this.deleteLoading = false;
                    _this.saveLoading = false;
                }
                else {
                    _this.loadById(params[ID_PATH_PARAM]);
                }
            }
        });
    };
    DsbMitgliedDetailComponent.prototype.onSave = function (ignore) {
        var _this = this;
        this.saveLoading = true;
        // persist
        this.dsbMitgliedDataProvider.create(this.currentMitglied)
            .then(function (response) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload.id)) {
                console.log('Saved with id: ' + response.payload.id);
                var notification = {
                    id: NOTIFICATION_SAVE_DSB_MITGLIED,
                    title: 'MANAGEMENT.DSBMITGLIEDER_DETAIL.NOTIFICATION.SAVE.TITLE',
                    description: 'MANAGEMENT.DSBMITGLIEDER_DETAIL.NOTIFICATION.SAVE.DESCRIPTION',
                    severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO,
                    origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
                    type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
                    userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
                };
                _this.notificationService.observeNotification(NOTIFICATION_SAVE_DSB_MITGLIED)
                    .subscribe(function (myNotification) {
                    if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                        _this.saveLoading = false;
                        _this.router.navigateByUrl('/verwaltung/dsbmitglieder/' + response.payload.id);
                    }
                });
                _this.notificationService.showNotification(notification);
            }
        }, function (response) {
            console.log('Failed');
            _this.saveLoading = false;
        });
        // show response message
    };
    DsbMitgliedDetailComponent.prototype.onUpdate = function (ignore) {
        var _this = this;
        this.saveLoading = true;
        // persist
        this.dsbMitgliedDataProvider.update(this.currentMitglied)
            .then(function (response) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload.id)) {
                var id = _this.currentMitglied.id;
                var notification = {
                    id: NOTIFICATION_UPDATE_DSB_MITGLIED + id,
                    title: 'MANAGEMENT.DSBMITGLIEDER_DETAIL.NOTIFICATION.SAVE.TITLE',
                    description: 'MANAGEMENT.DSBMITGLIEDER_DETAIL.NOTIFICATION.SAVE.DESCRIPTION',
                    severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO,
                    origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
                    type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
                    userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
                };
                _this.notificationService.observeNotification(NOTIFICATION_UPDATE_DSB_MITGLIED + id)
                    .subscribe(function (myNotification) {
                    if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                        _this.saveLoading = false;
                        _this.router.navigateByUrl('/verwaltung/dsbmitglieder');
                    }
                });
                _this.notificationService.showNotification(notification);
            }
        }, function (response) {
            console.log('Failed');
            _this.saveLoading = false;
        });
        // show response message
    };
    DsbMitgliedDetailComponent.prototype.onDelete = function (ignore) {
        var _this = this;
        this.deleteLoading = true;
        this.notificationService.discardNotification();
        var id = this.currentMitglied.id;
        var notification = {
            id: NOTIFICATION_DELETE_DSB_MITGLIED + id,
            title: 'MANAGEMENT.DSBMITGLIEDER_DETAIL.NOTIFICATION.DELETE.TITLE',
            description: 'MANAGEMENT.DSBMITGLIEDER_DETAIL.NOTIFICATION.DELETE.DESCRIPTION',
            descriptionParam: '' + id,
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].QUESTION,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].YES_NO,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_DSB_MITGLIED + id)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.dsbMitgliedDataProvider.deleteById(id)
                    .then(function (response) { return _this.handleDeleteSuccess(response); })
                    .catch(function (response) { return _this.handleDeleteFailure(response); });
            }
        });
        this.notificationService.showNotification(notification);
    };
    DsbMitgliedDetailComponent.prototype.entityExists = function () {
        return this.currentMitglied.id >= 0;
    };
    DsbMitgliedDetailComponent.prototype.loadById = function (id) {
        var _this = this;
        this.dsbMitgliedDataProvider.findById(id)
            .then(function (response) { return _this.handleSuccess(response); })
            .catch(function (response) { return _this.handleFailure(response); });
    };
    DsbMitgliedDetailComponent.prototype.handleSuccess = function (response) {
        this.currentMitglied = response.payload;
        this.loading = false;
    };
    DsbMitgliedDetailComponent.prototype.handleFailure = function (response) {
        this.loading = false;
    };
    DsbMitgliedDetailComponent.prototype.handleDeleteSuccess = function (response) {
        var _this = this;
        var notification = {
            id: NOTIFICATION_DELETE_DSB_MITGLIED_SUCCESS,
            title: 'MANAGEMENT.DSBMITGLIEDER_DETAIL.NOTIFICATION.DELETE_SUCCESS.TITLE',
            description: 'MANAGEMENT.DSBMITGLIEDER_DETAIL.NOTIFICATION.DELETE_SUCCESS.DESCRIPTION',
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_DSB_MITGLIED_SUCCESS)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.router.navigateByUrl('/verwaltung/dsbmitglieder');
                _this.deleteLoading = false;
            }
        });
        this.notificationService.showNotification(notification);
    };
    DsbMitgliedDetailComponent.prototype.handleDeleteFailure = function (response) {
        var _this = this;
        var notification = {
            id: NOTIFICATION_DELETE_DSB_MITGLIED_FAILURE,
            title: 'MANAGEMENT.DSBMITGLIEDER_DETAIL.NOTIFICATION.DELETE_FAILURE.TITLE',
            description: 'MANAGEMENT.DSBMITGLIEDER_DETAIL.NOTIFICATION.DELETE_FAILURE.DESCRIPTION',
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].ERROR,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_DSB_MITGLIED_FAILURE)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.deleteLoading = false;
            }
        });
        this.notificationService.showNotification(notification);
    };
    DsbMitgliedDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-dsb-mitglied-detail',
            template: __webpack_require__(/*! ./dsb-mitglied-detail.component.html */ "./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-detail/dsb-mitglied-detail.component.html"),
            styles: [__webpack_require__(/*! ./dsb-mitglied-detail.component.scss */ "./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-detail/dsb-mitglied-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dsb_mitglied_data_provider_service__WEBPACK_IMPORTED_MODULE_6__["DsbMitgliedDataProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], DsbMitgliedDetailComponent);
    return DsbMitgliedDetailComponent;
}(_shared_components__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-detail/dsb-mitglied-detail.config.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-detail/dsb-mitglied-detail.config.ts ***!
  \**************************************************************************************************************/
/*! exports provided: DSB_MITGLIED_DETAIL_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DSB_MITGLIED_DETAIL_CONFIG", function() { return DSB_MITGLIED_DETAIL_CONFIG; });
var DSB_MITGLIED_DETAIL_CONFIG = {
    moduleTranslationKey: 'MANAGEMENT',
    pageTitleTranslationKey: 'MANAGEMENT.DSBMITGLIEDER_DETAIL.TITLE'
};


/***/ }),

/***/ "./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-overview/dsb-mitglied-overview.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-overview/dsb-mitglied-overview.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-overview-dialog [config]=\"config\"\n                     [rows]=\"rows\"\n                     [loading]=\"loading\"\n                     (onViewClicked)=\"onView($event)\"\n                     (onEditClicked)=\"onEdit($event)\"\n                     (onDeleteClicked)=\"onDelete($event)\">\n\n</bla-overview-dialog>\n"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-overview/dsb-mitglied-overview.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-overview/dsb-mitglied-overview.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL2RzYi1taXRnbGllZC9kc2ItbWl0Z2xpZWQtb3ZlcnZpZXcvZHNiLW1pdGdsaWVkLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-overview/dsb-mitglied-overview.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-overview/dsb-mitglied-overview.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: NOTIFICATION_DELETE_DSB_MITGLIED, DsbMitgliedOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_DELETE_DSB_MITGLIED", function() { return NOTIFICATION_DELETE_DSB_MITGLIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsbMitgliedOverviewComponent", function() { return DsbMitgliedOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/common */ "./src/app/modules/shared/components/common/index.ts");
/* harmony import */ var _shared_components_tables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/tables */ "./src/app/modules/shared/components/tables/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _services_dsb_mitglied_data_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/dsb-mitglied-data-provider.service */ "./src/app/modules/verwaltung/services/dsb-mitglied-data-provider.service.ts");
/* harmony import */ var _dsb_mitglied_overview_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dsb-mitglied-overview.config */ "./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-overview/dsb-mitglied-overview.config.ts");








var NOTIFICATION_DELETE_DSB_MITGLIED = 'dsb_mitglied_overview_delete';
var DsbMitgliedOverviewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DsbMitgliedOverviewComponent, _super);
    function DsbMitgliedOverviewComponent(dsbMitgliedDataProvider, router, notificationService) {
        var _this = _super.call(this) || this;
        _this.dsbMitgliedDataProvider = dsbMitgliedDataProvider;
        _this.router = router;
        _this.notificationService = notificationService;
        _this.config = _dsb_mitglied_overview_config__WEBPACK_IMPORTED_MODULE_7__["DSB_MITGLIED_OVERVIEW_CONFIG"];
        return _this;
    }
    DsbMitgliedOverviewComponent.prototype.ngOnInit = function () {
        this.loadTableRows();
    };
    DsbMitgliedOverviewComponent.prototype.onView = function (versionedDataObject) {
        this.navigateToDetailDialog(versionedDataObject);
    };
    DsbMitgliedOverviewComponent.prototype.onEdit = function (versionedDataObject) {
        this.navigateToDetailDialog(versionedDataObject);
    };
    DsbMitgliedOverviewComponent.prototype.onDelete = function (versionedDataObject) {
        var _this = this;
        // show loading icon
        var id = versionedDataObject.id;
        this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_4__["showDeleteLoadingIndicatorIcon"])(this.rows, id);
        var notification = {
            id: NOTIFICATION_DELETE_DSB_MITGLIED + id,
            title: 'MANAGEMENT.DSBMITGLIEDER.NOTIFICATION.DELETE.TITLE',
            description: 'MANAGEMENT.DSBMITGLIEDER.NOTIFICATION.DELETE.DESCRIPTION',
            descriptionParam: '' + id,
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].QUESTION,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].YES_NO,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_DSB_MITGLIED + id)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.dsbMitgliedDataProvider.deleteById(id)
                    .then(function (response) { return _this.loadTableRows(); })
                    .catch(function (response) { return _this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_4__["hideLoadingIndicator"])(_this.rows, id); });
            }
        });
        this.notificationService.showNotification(notification);
    };
    DsbMitgliedOverviewComponent.prototype.loadTableRows = function () {
        var _this = this;
        this.loading = true;
        this.dsbMitgliedDataProvider.findAll()
            .then(function (response) { return _this.handleLoadTableRowsSuccess(response); })
            .catch(function (response) { return _this.handleLoadTableRowsFailure(response); });
    };
    DsbMitgliedOverviewComponent.prototype.navigateToDetailDialog = function (versionedDataObject) {
        this.router.navigateByUrl('/verwaltung/dsbmitglieder/' + versionedDataObject.id);
    };
    DsbMitgliedOverviewComponent.prototype.handleLoadTableRowsFailure = function (response) {
        this.rows = [];
        this.loading = false;
    };
    DsbMitgliedOverviewComponent.prototype.handleLoadTableRowsSuccess = function (response) {
        this.rows = []; // reset array to ensure change detection
        this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_4__["toTableRows"])(response.payload);
        this.loading = false;
    };
    DsbMitgliedOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-dsb-mitglied-overview',
            template: __webpack_require__(/*! ./dsb-mitglied-overview.component.html */ "./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-overview/dsb-mitglied-overview.component.html"),
            styles: [__webpack_require__(/*! ./dsb-mitglied-overview.component.scss */ "./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-overview/dsb-mitglied-overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dsb_mitglied_data_provider_service__WEBPACK_IMPORTED_MODULE_6__["DsbMitgliedDataProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], DsbMitgliedOverviewComponent);
    return DsbMitgliedOverviewComponent;
}(_shared_components_common__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-overview/dsb-mitglied-overview.config.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-overview/dsb-mitglied-overview.config.ts ***!
  \******************************************************************************************************************/
/*! exports provided: DSB_MITGLIED_OVERVIEW_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DSB_MITGLIED_OVERVIEW_CONFIG", function() { return DSB_MITGLIED_OVERVIEW_CONFIG; });
/* harmony import */ var _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/tables/types/table-action-type.enum */ "./src/app/modules/shared/components/tables/types/table-action-type.enum.ts");
/* harmony import */ var _shared_components_tables_types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/tables/types/table-column-type.enum */ "./src/app/modules/shared/components/tables/types/table-column-type.enum.ts");


var DSB_MITGLIED_OVERVIEW_CONFIG = {
    moduleTranslationKey: 'MANAGEMENT',
    pageTitleTranslationKey: 'MANAGEMENT.DSBMITGLIEDER.TITLE',
    tableConfig: {
        columns: [
            {
                translationKey: 'MANAGEMENT.DSBMITGLIEDER.TABLE.HEADERS.VORNAME',
                propertyName: 'vorname',
                width: 20,
            },
            {
                translationKey: 'MANAGEMENT.DSBMITGLIEDER.TABLE.HEADERS.NACHNAME',
                propertyName: 'nachname',
                width: 20,
            },
            {
                translationKey: 'MANAGEMENT.DSBMITGLIEDER.TABLE.HEADERS.GEBURTSDATUM',
                propertyName: 'geburtsdatum',
                type: _shared_components_tables_types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnType"].DATE,
                width: 20,
            },
            {
                translationKey: 'MANAGEMENT.DSBMITGLIEDER.TABLE.HEADERS.MITGLIEDSNUMMER',
                propertyName: 'mitgliedsnummer',
                width: 20,
            }
        ],
        actions: {
            actionTypes: [_shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].EDIT, _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].DELETE],
            width: 6
        },
    }
};


/***/ }),

/***/ "./src/app/modules/verwaltung/components/index.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/verwaltung/components/index.ts ***!
  \********************************************************/
/*! exports provided: VerwaltungComponent, NOTIFICATION_DELETE_DSB_MITGLIED, DsbMitgliedOverviewComponent, DsbMitgliedDetailComponent, NOTIFICATION_DELETE_BENUTZER, BenutzerOverviewComponent, BenutzerNeuComponent, BenutzerDetailComponent, WettkampfklasseOverviewComponent, WettkampfklasseDetailComponent, NOTIFICATION_DELETE_DSB_MANNSCHAFT, DsbMannschaftOverviewComponent, DsbMannschaftDetailComponent, VereinDetailComponent, NOTIFICATION_DELETE_VEREINE, VereinOverviewComponent, NOTIFICATION_DELETE_LIGA, LigaOverviewComponent, LigaDetailComponent, SportjahrLigaAuswahlComponent, SportjahrOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _verwaltung_verwaltung_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verwaltung/verwaltung.component */ "./src/app/modules/verwaltung/components/verwaltung/verwaltung.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerwaltungComponent", function() { return _verwaltung_verwaltung_component__WEBPACK_IMPORTED_MODULE_0__["VerwaltungComponent"]; });

/* harmony import */ var _dsb_mitglied_dsb_mitglied_overview_dsb_mitglied_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dsb-mitglied/dsb-mitglied-overview/dsb-mitglied-overview.component */ "./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-overview/dsb-mitglied-overview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_DELETE_DSB_MITGLIED", function() { return _dsb_mitglied_dsb_mitglied_overview_dsb_mitglied_overview_component__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_DELETE_DSB_MITGLIED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DsbMitgliedOverviewComponent", function() { return _dsb_mitglied_dsb_mitglied_overview_dsb_mitglied_overview_component__WEBPACK_IMPORTED_MODULE_1__["DsbMitgliedOverviewComponent"]; });

/* harmony import */ var _dsb_mitglied_dsb_mitglied_detail_dsb_mitglied_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dsb-mitglied/dsb-mitglied-detail/dsb-mitglied-detail.component */ "./src/app/modules/verwaltung/components/dsb-mitglied/dsb-mitglied-detail/dsb-mitglied-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DsbMitgliedDetailComponent", function() { return _dsb_mitglied_dsb_mitglied_detail_dsb_mitglied_detail_component__WEBPACK_IMPORTED_MODULE_2__["DsbMitgliedDetailComponent"]; });

/* harmony import */ var _benutzer_benutzer_overview_benutzer_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./benutzer/benutzer-overview/benutzer-overview.component */ "./src/app/modules/verwaltung/components/benutzer/benutzer-overview/benutzer-overview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_DELETE_BENUTZER", function() { return _benutzer_benutzer_overview_benutzer_overview_component__WEBPACK_IMPORTED_MODULE_3__["NOTIFICATION_DELETE_BENUTZER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BenutzerOverviewComponent", function() { return _benutzer_benutzer_overview_benutzer_overview_component__WEBPACK_IMPORTED_MODULE_3__["BenutzerOverviewComponent"]; });

/* harmony import */ var _benutzer_benutzer_neu_benutzer_neu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./benutzer/benutzer-neu/benutzer-neu.component */ "./src/app/modules/verwaltung/components/benutzer/benutzer-neu/benutzer-neu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BenutzerNeuComponent", function() { return _benutzer_benutzer_neu_benutzer_neu_component__WEBPACK_IMPORTED_MODULE_4__["BenutzerNeuComponent"]; });

/* harmony import */ var _benutzer_benutzer_detail_benutzer_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./benutzer/benutzer-detail/benutzer-detail.component */ "./src/app/modules/verwaltung/components/benutzer/benutzer-detail/benutzer-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BenutzerDetailComponent", function() { return _benutzer_benutzer_detail_benutzer_detail_component__WEBPACK_IMPORTED_MODULE_5__["BenutzerDetailComponent"]; });

/* harmony import */ var _wettkampfklasse_wettkampfklasse_overview_wettkampfklasse_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wettkampfklasse/wettkampfklasse-overview/wettkampfklasse-overview.component */ "./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-overview/wettkampfklasse-overview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WettkampfklasseOverviewComponent", function() { return _wettkampfklasse_wettkampfklasse_overview_wettkampfklasse_overview_component__WEBPACK_IMPORTED_MODULE_6__["WettkampfklasseOverviewComponent"]; });

/* harmony import */ var _wettkampfklasse_wettkampfklasse_detail_wettkampfklasse_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wettkampfklasse/wettkampfklasse-detail/wettkampfklasse-detail.component */ "./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-detail/wettkampfklasse-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WettkampfklasseDetailComponent", function() { return _wettkampfklasse_wettkampfklasse_detail_wettkampfklasse_detail_component__WEBPACK_IMPORTED_MODULE_7__["WettkampfklasseDetailComponent"]; });

/* harmony import */ var _dsb_mannschaft_dsb_mannschaft_overview_dsb_mannschaft_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dsb-mannschaft/dsb-mannschaft-overview/dsb-mannschaft-overview.component */ "./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-overview/dsb-mannschaft-overview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_DELETE_DSB_MANNSCHAFT", function() { return _dsb_mannschaft_dsb_mannschaft_overview_dsb_mannschaft_overview_component__WEBPACK_IMPORTED_MODULE_8__["NOTIFICATION_DELETE_DSB_MANNSCHAFT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DsbMannschaftOverviewComponent", function() { return _dsb_mannschaft_dsb_mannschaft_overview_dsb_mannschaft_overview_component__WEBPACK_IMPORTED_MODULE_8__["DsbMannschaftOverviewComponent"]; });

/* harmony import */ var _dsb_mannschaft_dsb_mannschaft_detail_dsb_mannschaft_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dsb-mannschaft/dsb-mannschaft-detail/dsb-mannschaft-detail.component */ "./src/app/modules/verwaltung/components/dsb-mannschaft/dsb-mannschaft-detail/dsb-mannschaft-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DsbMannschaftDetailComponent", function() { return _dsb_mannschaft_dsb_mannschaft_detail_dsb_mannschaft_detail_component__WEBPACK_IMPORTED_MODULE_9__["DsbMannschaftDetailComponent"]; });

/* harmony import */ var _verein_verein_detail_verein_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./verein/verein-detail/verein-detail.component */ "./src/app/modules/verwaltung/components/verein/verein-detail/verein-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VereinDetailComponent", function() { return _verein_verein_detail_verein_detail_component__WEBPACK_IMPORTED_MODULE_10__["VereinDetailComponent"]; });

/* harmony import */ var _verein_verein_overview_verein_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./verein/verein-overview/verein-overview.component */ "./src/app/modules/verwaltung/components/verein/verein-overview/verein-overview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_DELETE_VEREINE", function() { return _verein_verein_overview_verein_overview_component__WEBPACK_IMPORTED_MODULE_11__["NOTIFICATION_DELETE_VEREINE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VereinOverviewComponent", function() { return _verein_verein_overview_verein_overview_component__WEBPACK_IMPORTED_MODULE_11__["VereinOverviewComponent"]; });

/* harmony import */ var _liga_liga_overview_liga_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./liga/liga-overview/liga-overview.component */ "./src/app/modules/verwaltung/components/liga/liga-overview/liga-overview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_DELETE_LIGA", function() { return _liga_liga_overview_liga_overview_component__WEBPACK_IMPORTED_MODULE_12__["NOTIFICATION_DELETE_LIGA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LigaOverviewComponent", function() { return _liga_liga_overview_liga_overview_component__WEBPACK_IMPORTED_MODULE_12__["LigaOverviewComponent"]; });

/* harmony import */ var _liga_liga_detail_liga_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./liga/liga-detail/liga-detail.component */ "./src/app/modules/verwaltung/components/liga/liga-detail/liga-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LigaDetailComponent", function() { return _liga_liga_detail_liga_detail_component__WEBPACK_IMPORTED_MODULE_13__["LigaDetailComponent"]; });

/* harmony import */ var _sportjahr_sportjahr_liga_auswahl_sportjahr_liga_auswahl_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sportjahr/sportjahr-liga-auswahl/sportjahr-liga-auswahl.component */ "./src/app/modules/verwaltung/components/sportjahr/sportjahr-liga-auswahl/sportjahr-liga-auswahl.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SportjahrLigaAuswahlComponent", function() { return _sportjahr_sportjahr_liga_auswahl_sportjahr_liga_auswahl_component__WEBPACK_IMPORTED_MODULE_14__["SportjahrLigaAuswahlComponent"]; });

/* harmony import */ var _sportjahr_sportjahr_overview_sportjahr_overview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sportjahr/sportjahr-overview/sportjahr-overview.component */ "./src/app/modules/verwaltung/components/sportjahr/sportjahr-overview/sportjahr-overview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SportjahrOverviewComponent", function() { return _sportjahr_sportjahr_overview_sportjahr_overview_component__WEBPACK_IMPORTED_MODULE_15__["SportjahrOverviewComponent"]; });



















/***/ }),

/***/ "./src/app/modules/verwaltung/components/liga/liga-detail/liga-detail.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/liga/liga-detail/liga-detail.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-common-dialog [config]=\"config\"\n                   [loading]=\"loading\">\n\n  <form id=\"ligaForm\"\n        class=\"horizontal-form half-page\"\n        #dsbMitgliedForm=\"ngForm\">\n\n    <!-- VORNAME -->\n    <div class=\"form-group row\">\n      <label for=\"ligaName\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.LIGA_DETAIL.FORM.NAME.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               class=\"form-control\"\n               required\n               id=\"ligaName\"\n               name=\"ligaName\"\n               #ligaName=\"ngModel\"\n               [(ngModel)]=\"currentLiga.name\"\n               [class.is-invalid]=\"ligaName.invalid && !ligaName.untouched\"\n               placeholder=\"{{ 'MANAGEMENT.LIGA_DETAIL.FORM.NAME.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.LIGA_DETAIL.FORM.NAME.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n\n\n    <!-- Region -->\n    <div class=\"form-group row\">\n      <label for=\"ligaRegion\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.LIGA_DETAIL.FORM.REGION.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <select class=\"form-control\"\n                id=\"ligaRegion\"\n                name=\"ligaRegion\"\n                #vereinRegion=\"ngModel\"\n                [(ngModel)]=\"currentRegion\">\n\n          <option [ngValue]=\"region\" *ngFor=\"let region of regionen\"> {{region.regionName}}</option>\n        </select>\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.LIGA_DETAIL.FORM.REGION.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <!-- Uebergeordnet -->\n    <div class=\"form-group row\">\n      <label for=\"ligaRegion\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.LIGA_DETAIL.FORM.UEBERGEORDNET.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <select class=\"form-control\"\n                id=\"ligaUebergeordnet\"\n                name=\"ligaUebergeordnet\"\n                #ligaUebergeordnet=\"ngModel\"\n                [(ngModel)]=\"currentUbergeordneteLiga\">\n          <option [ngValue]=\"uebergeordnet\" *ngFor=\"let uebergeordnet of allUebergeordnete\"> {{uebergeordnet.name}}</option>\n\n          placeholder=\"{{ 'MANAGEMENT.LIGA_DETAIL.FORM.UEBERGEORDNET.PLACEHOLDER' | translate }}\">\n        </select>\n\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.LIGA_DETAIL.FORM.UEBERGEORDNET.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n\n\n    <!-- Verantwortlicher -->\n    <div class=\"form-group row\">\n      <label for=\"ligaRegion\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.LIGA_DETAIL.FORM.VERANTWORTLICH_MAIL.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <select class=\"form-control\"\n                id=\"ligaVerantwortlicher\"\n                name=\"ligaVerantwortlicher\"\n                #ligaUebergeordnet=\"ngModel\"\n                [(ngModel)]=\"currentUser\">\n          <option [ngValue]=\"user\" *ngFor=\"let user of allUsers\"> {{user.email}}</option>\n\n          placeholder=\"{{ 'MANAGEMENT.LIGA_DETAIL.FORM.VERANTWORTLICH_MAIL.PLACEHOLDER' | translate }}\">\n        </select>\n\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.LIGA_DETAIL.FORM.VERANTWORTLICH_MAIL.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n\n\n\n\n    <!-- SAVE/UPDATE/DELETE BUTTON -->\n    <div class=\"form-group row\">\n      <div class=\"col-sm-3\"></div>\n      <div class=\"col-sm-9 button-box\">\n\n\n        <bla-button *ngIf=\"!entityExists()\"\n                    [id]=\"'ligaSaveButton'\"\n                    [disabled]=\"!dsbMitgliedForm.valid\"\n                    [loading]=\"saveLoading\"\n                    (onClick)=\"onSave($event)\">\n          {{ 'MANAGEMENT.LIGA_DETAIL.FORM.SAVE' | translate }}\n        </bla-button>\n        <bla-button *ngIf=\"entityExists()\"\n                    [id]=\"'ligaUpdateButton'\"\n                    [disabled]=\"!dsbMitgliedForm.valid\"\n                    [loading]=\"saveLoading\"\n                    (onClick)=\"onUpdate($event)\">\n          {{ 'MANAGEMENT.LIGA_DETAIL.FORM.UPDATE' | translate }}\n        </bla-button>\n\n        <bla-button *ngIf=\"entityExists()\"\n                    [buttonType]=\"ButtonType.DANGER\"\n                    [loading]=\"deleteLoading\"\n                    (onClick)=\"onDelete($event)\">\n          {{ 'MANAGEMENT.LIGA_DETAIL.FORM.DELETE' | translate }}\n        </bla-button>\n      </div>\n    </div>\n  </form>\n\n</bla-common-dialog>\n"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/liga/liga-detail/liga-detail.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/liga/liga-detail/liga-detail.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".half-page {\n  width: 50%; }\n\n.button-box {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  flex-wrap: wrap; }\n\n@media (max-width: 1400px) {\n  .half-page {\n    width: 80%; } }\n\n@media (max-width: 950px) {\n  .half-page {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL2xpZ2EvbGlnYS1kZXRhaWwvbGlnYS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixlQUFlLEVBQUE7O0FBSWpCO0VBRUU7SUFDRSxVQUFVLEVBQUEsRUFDWDs7QUFLSDtFQUVFO0lBQ0UsV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3ZlcndhbHR1bmcvY29tcG9uZW50cy9saWdhL2xpZ2EtZGV0YWlsL2xpZ2EtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbGYtcGFnZSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5idXR0b24tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcblxuICAuaGFsZi1wYWdlIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbn1cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuXG4gIC5oYWxmLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/liga/liga-detail/liga-detail.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/liga/liga-detail/liga-detail.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: LigaDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LigaDetailComponent", function() { return LigaDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components */ "./src/app/modules/shared/components/index.ts");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _user_services_user_profile_data_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../user/services/user-profile-data-provider.service */ "./src/app/modules/user/services/user-profile-data-provider.service.ts");
/* harmony import */ var _user_types_user_profile_do_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../user/types/user-profile-do.class */ "./src/app/modules/user/types/user-profile-do.class.ts");
/* harmony import */ var _services_liga_data_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/liga-data-provider.service */ "./src/app/modules/verwaltung/services/liga-data-provider.service.ts");
/* harmony import */ var _services_region_data_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/region-data-provider.service */ "./src/app/modules/verwaltung/services/region-data-provider.service.ts");
/* harmony import */ var _types_liga_do_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../types/liga-do.class */ "./src/app/modules/verwaltung/types/liga-do.class.ts");
/* harmony import */ var _types_region_do_class__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../types/region-do.class */ "./src/app/modules/verwaltung/types/region-do.class.ts");
/* harmony import */ var _liga_detail_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./liga-detail.config */ "./src/app/modules/verwaltung/components/liga/liga-detail/liga-detail.config.ts");














var ID_PATH_PARAM = 'id';
var NOTIFICATION_DELETE_LIGA = 'liga_detail_delete';
var NOTIFICATION_DELETE_LIGA_SUCCESS = 'liga_detail_delete_success';
var NOTIFICATION_DELETE_LIGA_FAILURE = 'liga_detail_delete_failure';
var NOTIFICATION_SAVE_LIGA = 'liga_detail_save';
var NOTIFICATION_UPDATE_LIGA = 'liga_detail_update';
var LigaDetailComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LigaDetailComponent, _super);
    function LigaDetailComponent(ligaDataProvider, regionProvider, userProvider, router, route, notificationService) {
        var _this = _super.call(this) || this;
        _this.ligaDataProvider = ligaDataProvider;
        _this.regionProvider = regionProvider;
        _this.userProvider = userProvider;
        _this.router = router;
        _this.route = route;
        _this.notificationService = notificationService;
        _this.config = _liga_detail_config__WEBPACK_IMPORTED_MODULE_12__["LIGA_DETAIL_CONFIG"];
        _this.ButtonType = _shared_components__WEBPACK_IMPORTED_MODULE_3__["ButtonType"];
        _this.currentLiga = new _types_liga_do_class__WEBPACK_IMPORTED_MODULE_10__["LigaDO"]();
        _this.currentUbergeordneteLiga = new _types_liga_do_class__WEBPACK_IMPORTED_MODULE_10__["LigaDO"]();
        _this.allUebergeordnete = [new _types_liga_do_class__WEBPACK_IMPORTED_MODULE_10__["LigaDO"]()];
        _this.currentRegion = new _types_region_do_class__WEBPACK_IMPORTED_MODULE_11__["RegionDO"]();
        _this.regionen = [new _types_region_do_class__WEBPACK_IMPORTED_MODULE_11__["RegionDO"]()];
        _this.currentUser = new _user_types_user_profile_do_class__WEBPACK_IMPORTED_MODULE_7__["UserProfileDO"]();
        _this.allUsers = [new _user_types_user_profile_do_class__WEBPACK_IMPORTED_MODULE_7__["UserProfileDO"]()];
        _this.deleteLoading = false;
        _this.saveLoading = false;
        return _this;
    }
    LigaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.notificationService.discardNotification();
        this.route.params.subscribe(function (params) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(params[ID_PATH_PARAM])) {
                _this.id = params[ID_PATH_PARAM];
                if (_this.id === 'add') {
                    _this.currentLiga = new _types_liga_do_class__WEBPACK_IMPORTED_MODULE_10__["LigaDO"]();
                    _this.loadUebergeordnete(); // additional Request for all 'liga' to get all uebergeordnete
                    _this.loadRegions(); // Request all regions from backend
                    _this.loadUsers();
                    _this.loading = false;
                    _this.deleteLoading = false;
                    _this.saveLoading = false;
                }
                else {
                    _this.loadById(params[ID_PATH_PARAM]);
                }
            }
        });
    };
    LigaDetailComponent.prototype.onSave = function (ignore) {
        var _this = this;
        this.saveLoading = true;
        if (typeof this.currentUbergeordneteLiga === 'undefined') {
            this.currentLiga.ligaUebergeordnetId = null;
        }
        else {
            this.currentLiga.ligaUebergeordnetId = this.currentUbergeordneteLiga.id;
        }
        if (typeof this.currentRegion === 'undefined') {
            this.currentLiga.regionId = null;
        }
        else {
            this.currentLiga.regionId = this.currentRegion.id;
        }
        if (typeof this.currentUser === 'undefined') {
            this.currentLiga.ligaVerantwortlichId = null;
        }
        else {
            this.currentLiga.ligaVerantwortlichId = this.currentUser.id;
        }
        // persist
        this.ligaDataProvider.create(this.currentLiga)
            .then(function (response) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(response)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(response.payload)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(response.payload.id)) {
                console.log('Saved with id: ' + response.payload.id);
                var notification = {
                    id: NOTIFICATION_SAVE_LIGA,
                    title: 'MANAGEMENT.LIGA_DETAIL.NOTIFICATION.SAVE.TITLE',
                    description: 'MANAGEMENT.LIGA_DETAIL.NOTIFICATION.SAVE.DESCRIPTION',
                    severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO,
                    origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
                    type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
                    userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
                };
                _this.notificationService.observeNotification(NOTIFICATION_SAVE_LIGA)
                    .subscribe(function (myNotification) {
                    if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                        _this.saveLoading = false;
                        _this.router.navigateByUrl('/verwaltung/liga/' + response.payload.id);
                    }
                });
                _this.notificationService.showNotification(notification);
            }
        }, function (response) {
            console.log('Failed');
            _this.saveLoading = false;
        });
        // show response message
    };
    LigaDetailComponent.prototype.onUpdate = function (ignore) {
        var _this = this;
        this.saveLoading = true;
        this.currentLiga.regionId = this.currentRegion.id;
        this.currentLiga.ligaUebergeordnetId = this.currentUbergeordneteLiga.id;
        this.currentLiga.ligaVerantwortlichId = this.currentUser.id;
        // persist
        this.ligaDataProvider.update(this.currentLiga)
            .then(function (response) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(response)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(response.payload)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(response.payload.id)) {
                var id = _this.currentLiga.id;
                var notification = {
                    id: NOTIFICATION_UPDATE_LIGA + id,
                    title: 'MANAGEMENT.LIGA_DETAIL.NOTIFICATION.SAVE.TITLE',
                    description: 'MANAGEMENT.LIGA_DETAIL.NOTIFICATION.SAVE.DESCRIPTION',
                    severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO,
                    origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
                    type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
                    userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
                };
                _this.notificationService.observeNotification(NOTIFICATION_UPDATE_LIGA + id)
                    .subscribe(function (myNotification) {
                    if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                        _this.saveLoading = false;
                        _this.router.navigateByUrl('/verwaltung/liga');
                    }
                });
                _this.notificationService.showNotification(notification);
            }
        }, function (response) {
            console.log('Failed');
            _this.saveLoading = false;
        });
    };
    LigaDetailComponent.prototype.onDelete = function (ignore) {
        var _this = this;
        this.deleteLoading = true;
        this.notificationService.discardNotification();
        var id = this.currentLiga.id;
        var notification = {
            id: NOTIFICATION_DELETE_LIGA + id,
            title: 'MANAGEMENT.LIGA_DETAIL.NOTIFICATION.DELETE.TITLE',
            description: 'MANAGEMENT.LIGA_DETAIL.NOTIFICATION.DELETE.DESCRIPTION',
            descriptionParam: '' + id,
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].QUESTION,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].YES_NO,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_LIGA + id)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.ligaDataProvider.deleteById(id)
                    .then(function (response) { return _this.handleDeleteSuccess(response); })
                    .catch(function (response) { return _this.handleDeleteFailure(response); });
            }
        });
        this.notificationService.showNotification(notification);
    };
    LigaDetailComponent.prototype.entityExists = function () {
        return this.currentLiga.id >= 0;
    };
    LigaDetailComponent.prototype.loadById = function (id) {
        var _this = this;
        this.ligaDataProvider.findById(id)
            .then(function (response) { return _this.handleSuccess(response); })
            .catch(function (response) { return _this.handleFailure(response); });
    };
    LigaDetailComponent.prototype.loadRegions = function () {
        var _this = this;
        this.regionProvider.findAll()
            .then(function (response) { return _this.handleResponseArraySuccess(response); })
            .catch(function (response) { return _this.handleResponseArrayFailure(response); });
    };
    LigaDetailComponent.prototype.loadUebergeordnete = function () {
        var _this = this;
        this.ligaDataProvider.findAll()
            .then(function (response) { return _this.handlUebergeordnetResponseArraySuccess(response); })
            .catch(function (response) { return _this.handleUebergeordnetResponseArrayFailure(response); });
    };
    LigaDetailComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userProvider.findAll()
            .then(function (response) { return _this.handleUserResponseArraySuccess(response); })
            .catch(function (response) { return _this.handleUserResponseArrayFailure(response); });
    };
    LigaDetailComponent.prototype.handleSuccess = function (response) {
        this.currentLiga = response.payload;
        this.loading = false;
        this.loadUebergeordnete(); // additional Request for all 'liga' to get all uebergeordnete
        this.loadRegions(); // Request all regions from backend
        this.loadUsers();
    };
    LigaDetailComponent.prototype.handleFailure = function (response) {
        this.loading = false;
    };
    LigaDetailComponent.prototype.handleDeleteSuccess = function (response) {
        var _this = this;
        var notification = {
            id: NOTIFICATION_DELETE_LIGA_SUCCESS,
            title: 'MANAGEMENT.LIGA_DETAIL.NOTIFICATION.DELETE_SUCCESS.TITLE',
            description: 'MANAGEMENT.LIGA_DETAIL.NOTIFICATION.DELETE_SUCCESS.DESCRIPTION',
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_LIGA_SUCCESS)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.router.navigateByUrl('/verwaltung/liga');
                _this.deleteLoading = false;
            }
        });
        this.notificationService.showNotification(notification);
    };
    LigaDetailComponent.prototype.handleDeleteFailure = function (response) {
        var _this = this;
        var notification = {
            id: NOTIFICATION_DELETE_LIGA_FAILURE,
            title: 'MANAGEMENT.LIGA_DETAIL.NOTIFICATION.DELETE_FAILURE.TITLE',
            description: 'MANAGEMENT.LIGA_DETAIL.NOTIFICATION.DELETE_FAILURE.DESCRIPTION',
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].ERROR,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_LIGA_FAILURE)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.deleteLoading = false;
            }
        });
        this.notificationService.showNotification(notification);
    };
    LigaDetailComponent.prototype.handleResponseArraySuccess = function (response) {
        var _this = this;
        this.regionen = [];
        this.regionen = response.payload;
        if (this.id === 'add') {
            this.currentRegion = this.regionen[0];
        }
        else {
            this.currentRegion = this.regionen.filter(function (region) { return region.id === _this.currentLiga.regionId; })[0];
        }
        this.loading = false;
    };
    LigaDetailComponent.prototype.handleResponseArrayFailure = function (response) {
        this.regionen = [];
        this.loading = false;
    };
    LigaDetailComponent.prototype.handlUebergeordnetResponseArraySuccess = function (response) {
        var _this = this;
        this.allUebergeordnete = [];
        this.allUebergeordnete = response.payload;
        if (this.id === 'add') {
            this.currentUbergeordneteLiga = this.allUebergeordnete[0];
        }
        else {
            this.currentUbergeordneteLiga = this.allUebergeordnete.filter(function (uebergeordnet) { return uebergeordnet.id === _this.currentLiga.ligaUebergeordnetId; })[0];
        }
        this.loading = false;
    };
    LigaDetailComponent.prototype.handleUebergeordnetResponseArrayFailure = function (response) {
        this.allUebergeordnete = [];
        this.loading = false;
    };
    LigaDetailComponent.prototype.handleUserResponseArraySuccess = function (response) {
        var _this = this;
        this.allUsers = [];
        this.allUsers = response.payload;
        if (this.id === 'add') {
            this.currentUser = this.allUsers[0];
        }
        else {
            this.currentUser = this.allUsers.filter(function (user) { return user.id === _this.currentLiga.ligaVerantwortlichId; })[0];
        }
        this.loading = false;
    };
    LigaDetailComponent.prototype.handleUserResponseArrayFailure = function (response) {
        this.allUsers = [];
        this.loading = false;
    };
    LigaDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-liga-detail',
            template: __webpack_require__(/*! ./liga-detail.component.html */ "./src/app/modules/verwaltung/components/liga/liga-detail/liga-detail.component.html"),
            styles: [__webpack_require__(/*! ./liga-detail.component.scss */ "./src/app/modules/verwaltung/components/liga/liga-detail/liga-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_liga_data_provider_service__WEBPACK_IMPORTED_MODULE_8__["LigaDataProviderService"],
            _services_region_data_provider_service__WEBPACK_IMPORTED_MODULE_9__["RegionDataProviderService"],
            _user_services_user_profile_data_provider_service__WEBPACK_IMPORTED_MODULE_6__["UserProfileDataProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], LigaDetailComponent);
    return LigaDetailComponent;
}(_shared_components__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/components/liga/liga-detail/liga-detail.config.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/liga/liga-detail/liga-detail.config.ts ***!
  \**************************************************************************************/
/*! exports provided: LIGA_DETAIL_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGA_DETAIL_CONFIG", function() { return LIGA_DETAIL_CONFIG; });
var LIGA_DETAIL_CONFIG = {
    moduleTranslationKey: 'MANAGEMENT',
    pageTitleTranslationKey: 'MANAGEMENT.LIGA_DETAIL.TITLE'
};


/***/ }),

/***/ "./src/app/modules/verwaltung/components/liga/liga-overview/liga-overview.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/liga/liga-overview/liga-overview.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-overview-dialog [config]=\"config\"\n                     [rows]=\"rows\"\n                     [loading]=\"loading\"\n                     (onViewClicked)=\"onView($event)\"\n                     (onEditClicked)=\"onEdit($event)\"\n                     (onDeleteClicked)=\"onDelete($event)\">\n</bla-overview-dialog>\n"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/liga/liga-overview/liga-overview.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/liga/liga-overview/liga-overview.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL2xpZ2EvbGlnYS1vdmVydmlldy9saWdhLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/liga/liga-overview/liga-overview.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/liga/liga-overview/liga-overview.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NOTIFICATION_DELETE_LIGA, LigaOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_DELETE_LIGA", function() { return NOTIFICATION_DELETE_LIGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LigaOverviewComponent", function() { return LigaOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/common */ "./src/app/modules/shared/components/common/index.ts");
/* harmony import */ var _shared_components_tables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/tables */ "./src/app/modules/shared/components/tables/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _services_liga_data_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/liga-data-provider.service */ "./src/app/modules/verwaltung/services/liga-data-provider.service.ts");
/* harmony import */ var _liga_overview_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./liga-overview.config */ "./src/app/modules/verwaltung/components/liga/liga-overview/liga-overview.config.ts");








var NOTIFICATION_DELETE_LIGA = 'liga_overview_delete';
var LigaOverviewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LigaOverviewComponent, _super);
    function LigaOverviewComponent(ligaDataProvider, router, notificationService) {
        var _this = _super.call(this) || this;
        _this.ligaDataProvider = ligaDataProvider;
        _this.router = router;
        _this.notificationService = notificationService;
        _this.config = _liga_overview_config__WEBPACK_IMPORTED_MODULE_7__["LIGA_OVERVIEW_CONFIG"];
        return _this;
    }
    LigaOverviewComponent.prototype.ngOnInit = function () {
        this.loadTableRows();
    };
    LigaOverviewComponent.prototype.onView = function (versionedDataObject) {
        this.navigateToDetailDialog(versionedDataObject);
    };
    LigaOverviewComponent.prototype.onEdit = function (versionedDataObject) {
        this.navigateToDetailDialog(versionedDataObject);
    };
    LigaOverviewComponent.prototype.onDelete = function (versionedDataObject) {
        var _this = this;
        // show loading icon
        var id = versionedDataObject.id;
        this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_4__["showDeleteLoadingIndicatorIcon"])(this.rows, id);
        var notification = {
            id: NOTIFICATION_DELETE_LIGA + id,
            title: 'MANAGEMENT.LIGA.NOTIFICATION.DELETE.TITLE',
            description: 'MANAGEMENT.LIGA.NOTIFICATION.DELETE.DESCRIPTION',
            descriptionParam: '' + id,
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].QUESTION,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].YES_NO,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_LIGA + id)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.ligaDataProvider.deleteById(id)
                    .then(function (response) { return _this.loadTableRows(); })
                    .catch(function (response) { return _this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_4__["hideLoadingIndicator"])(_this.rows, id); });
            }
        });
        this.notificationService.showNotification(notification);
    };
    LigaOverviewComponent.prototype.loadTableRows = function () {
        var _this = this;
        this.loading = true;
        this.ligaDataProvider.findAll()
            .then(function (response) { return _this.handleLoadTableRowsSuccess(response); })
            .catch(function (response) { return _this.handleLoadTableRowsFailure(response); });
    };
    LigaOverviewComponent.prototype.handleLoadTableRowsFailure = function (response) {
        this.rows = [];
        this.loading = false;
    };
    LigaOverviewComponent.prototype.handleLoadTableRowsSuccess = function (response) {
        this.rows = []; // reset array to ensure change detection
        this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_4__["toTableRows"])(response.payload);
        this.loading = false;
    };
    LigaOverviewComponent.prototype.navigateToDetailDialog = function (versionedDataObject) {
        this.router.navigateByUrl('/verwaltung/liga/' + versionedDataObject.id);
    };
    LigaOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-liga-overview',
            template: __webpack_require__(/*! ./liga-overview.component.html */ "./src/app/modules/verwaltung/components/liga/liga-overview/liga-overview.component.html"),
            styles: [__webpack_require__(/*! ./liga-overview.component.scss */ "./src/app/modules/verwaltung/components/liga/liga-overview/liga-overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_liga_data_provider_service__WEBPACK_IMPORTED_MODULE_6__["LigaDataProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], LigaOverviewComponent);
    return LigaOverviewComponent;
}(_shared_components_common__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/components/liga/liga-overview/liga-overview.config.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/liga/liga-overview/liga-overview.config.ts ***!
  \******************************************************************************************/
/*! exports provided: LIGA_OVERVIEW_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGA_OVERVIEW_CONFIG", function() { return LIGA_OVERVIEW_CONFIG; });
/* harmony import */ var _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/tables/types/table-action-type.enum */ "./src/app/modules/shared/components/tables/types/table-action-type.enum.ts");
/* harmony import */ var _shared_components_tables_types_table_column_sort_order_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/tables/types/table-column-sort-order.enum */ "./src/app/modules/shared/components/tables/types/table-column-sort-order.enum.ts");
/* harmony import */ var _shared_components_tables_types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/tables/types/table-column-type.enum */ "./src/app/modules/shared/components/tables/types/table-column-type.enum.ts");



var LIGA_OVERVIEW_CONFIG = {
    moduleTranslationKey: 'MANAGEMENT',
    pageTitleTranslationKey: 'MANAGEMENT.LIGA.TITLE',
    tableConfig: {
        columns: [
            {
                translationKey: 'MANAGEMENT.LIGA.TABLE.HEADERS.LIGANAME',
                propertyName: 'name',
                width: 20,
            },
            {
                translationKey: 'MANAGEMENT.LIGA.TABLE.HEADERS.REGIONNAME',
                propertyName: 'regionName',
                width: 20,
            },
            {
                translationKey: 'MANAGEMENT.LIGA.TABLE.HEADERS.UEBERGEORDNETNAME',
                propertyName: 'ligaUebergeordnetName',
                width: 20,
            },
            {
                translationKey: 'MANAGEMENT.LIGA.TABLE.HEADERS.VERANTWORTLICHMAIL',
                propertyName: 'ligaVerantwortlichMail',
                width: 7,
                type: _shared_components_tables_types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnType"].NUMBER,
                currentSortOrder: _shared_components_tables_types_table_column_sort_order_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnSortOrder"].ASCENDING
            }
        ],
        actions: {
            actionTypes: [_shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].EDIT, _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].DELETE],
            width: 6
        },
    }
};


/***/ }),

/***/ "./src/app/modules/verwaltung/components/sportjahr/sportjahr-liga-auswahl/sportjahr-liga-auswahl.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/sportjahr/sportjahr-liga-auswahl/sportjahr-liga-auswahl.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-simple-overview-dialog [config]=\"config\"\n                     [rows]=\"rows\"\n                     [loading]=\"loading\"\n                     (onRowClicked)=onView($event)>\n</bla-simple-overview-dialog>\n"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/sportjahr/sportjahr-liga-auswahl/sportjahr-liga-auswahl.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/sportjahr/sportjahr-liga-auswahl/sportjahr-liga-auswahl.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL3Nwb3J0amFoci9zcG9ydGphaHItbGlnYS1hdXN3YWhsL3Nwb3J0amFoci1saWdhLWF1c3dhaGwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/sportjahr/sportjahr-liga-auswahl/sportjahr-liga-auswahl.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/sportjahr/sportjahr-liga-auswahl/sportjahr-liga-auswahl.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: SportjahrLigaAuswahlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportjahrLigaAuswahlComponent", function() { return SportjahrLigaAuswahlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/common */ "./src/app/modules/shared/components/common/index.ts");
/* harmony import */ var _shared_components_tables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/tables */ "./src/app/modules/shared/components/tables/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _services_liga_data_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/liga-data-provider.service */ "./src/app/modules/verwaltung/services/liga-data-provider.service.ts");
/* harmony import */ var _sportjahr_liga_auswahl_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sportjahr-liga-auswahl.config */ "./src/app/modules/verwaltung/components/sportjahr/sportjahr-liga-auswahl/sportjahr-liga-auswahl.config.ts");








var SportjahrLigaAuswahlComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SportjahrLigaAuswahlComponent, _super);
    function SportjahrLigaAuswahlComponent(ligaDataProvider, router, notificationService) {
        var _this = _super.call(this) || this;
        _this.ligaDataProvider = ligaDataProvider;
        _this.router = router;
        _this.notificationService = notificationService;
        _this.config = _sportjahr_liga_auswahl_config__WEBPACK_IMPORTED_MODULE_7__["SPORTJAHR_LIGA_AUSWAHL_CONFIG"];
        return _this;
    }
    SportjahrLigaAuswahlComponent.prototype.ngOnInit = function () {
        this.loadTableRows();
    };
    SportjahrLigaAuswahlComponent.prototype.onView = function (versionedDataObject) {
        this.navigateToDetailDialog(versionedDataObject);
    };
    SportjahrLigaAuswahlComponent.prototype.loadTableRows = function () {
        var _this = this;
        this.loading = true;
        this.ligaDataProvider.findAll()
            .then(function (response) { return _this.handleLoadTableRowsSuccess(response); })
            .catch(function (response) { return _this.handleLoadTableRowsFailure(response); });
    };
    SportjahrLigaAuswahlComponent.prototype.handleLoadTableRowsFailure = function (response) {
        this.rows = [];
        this.loading = false;
    };
    SportjahrLigaAuswahlComponent.prototype.handleLoadTableRowsSuccess = function (response) {
        this.rows = []; // reset array to ensure change detection
        this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_4__["toTableRows"])(response.payload);
        this.loading = false;
    };
    SportjahrLigaAuswahlComponent.prototype.navigateToDetailDialog = function (versionedDataObject) {
        this.router.navigateByUrl('/verwaltung/sportjahr/liga/' + versionedDataObject.id);
    };
    SportjahrLigaAuswahlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-sportjahr-liga-auswahl',
            template: __webpack_require__(/*! ./sportjahr-liga-auswahl.component.html */ "./src/app/modules/verwaltung/components/sportjahr/sportjahr-liga-auswahl/sportjahr-liga-auswahl.component.html"),
            styles: [__webpack_require__(/*! ./sportjahr-liga-auswahl.component.scss */ "./src/app/modules/verwaltung/components/sportjahr/sportjahr-liga-auswahl/sportjahr-liga-auswahl.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_liga_data_provider_service__WEBPACK_IMPORTED_MODULE_6__["LigaDataProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], SportjahrLigaAuswahlComponent);
    return SportjahrLigaAuswahlComponent;
}(_shared_components_common__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/components/sportjahr/sportjahr-liga-auswahl/sportjahr-liga-auswahl.config.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/sportjahr/sportjahr-liga-auswahl/sportjahr-liga-auswahl.config.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: SPORTJAHR_LIGA_AUSWAHL_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPORTJAHR_LIGA_AUSWAHL_CONFIG", function() { return SPORTJAHR_LIGA_AUSWAHL_CONFIG; });
var SPORTJAHR_LIGA_AUSWAHL_CONFIG = {
    moduleTranslationKey: 'MANAGEMENT',
    pageTitleTranslationKey: 'MANAGEMENT.SPORTJAHR.TITLE',
    tableConfig: {
        columns: [
            {
                translationKey: 'MANAGEMENT.SPORTJAHR.TABLE.HEADERS.LIGANAME',
                propertyName: 'name',
                width: 20,
            },
            {
                translationKey: 'MANAGEMENT.SPORTJAHR.TABLE.HEADERS.REGIONNAME',
                propertyName: 'regionName',
                width: 20,
            },
            {
                translationKey: 'MANAGEMENT.SPORTJAHR.TABLE.HEADERS.UEBERGEORDNETNAME',
                propertyName: 'ligaUebergeordnetName',
                width: 20,
            },
            {
                translationKey: 'MANAGEMENT.SPORTJAHR.TABLE.HEADERS.VERANTWORTLICHMAIL',
                propertyName: 'ligaVerantwortlichMail',
                width: 7
            }
        ]
    }
};


/***/ }),

/***/ "./src/app/modules/verwaltung/components/sportjahr/sportjahr-overview/sportjahr-overview.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/sportjahr/sportjahr-overview/sportjahr-overview.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-overview-dialog [config]=\"config\"\n                     [rows]=\"rows\"\n                     [loading]=\"loading\"\n                     (onViewClicked)=\"onView($event)\"\n                     (onEditClicked)=\"onEdit($event)\">\n\n</bla-overview-dialog>\n"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/sportjahr/sportjahr-overview/sportjahr-overview.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/sportjahr/sportjahr-overview/sportjahr-overview.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL3Nwb3J0amFoci9zcG9ydGphaHItb3ZlcnZpZXcvc3BvcnRqYWhyLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/sportjahr/sportjahr-overview/sportjahr-overview.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/sportjahr/sportjahr-overview/sportjahr-overview.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: SportjahrOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportjahrOverviewComponent", function() { return SportjahrOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components */ "./src/app/modules/shared/components/index.ts");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services */ "./src/app/modules/shared/services/index.ts");
/* harmony import */ var _services_sportjahr_data_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/sportjahr-data-provider.service */ "./src/app/modules/verwaltung/services/sportjahr-data-provider.service.ts");
/* harmony import */ var _sportjahr_overview_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sportjahr-overview.config */ "./src/app/modules/verwaltung/components/sportjahr/sportjahr-overview/sportjahr-overview.config.ts");








var SportjahrOverviewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SportjahrOverviewComponent, _super);
    function SportjahrOverviewComponent(sportjahrDataProvider, router, notificationService, route) {
        var _this = _super.call(this) || this;
        _this.sportjahrDataProvider = sportjahrDataProvider;
        _this.router = router;
        _this.notificationService = notificationService;
        _this.route = route;
        _this.config = _sportjahr_overview_config__WEBPACK_IMPORTED_MODULE_7__["SPORTJAHR_LIGA_AUSWAHL_CONFIG"];
        return _this;
    }
    SportjahrOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(params.id)) {
                var id = params.id;
                _this.loadTableRows(id);
            }
        });
    };
    SportjahrOverviewComponent.prototype.onView = function (versionedDataObject) {
        this.navigateToDetailDialog(versionedDataObject);
    };
    SportjahrOverviewComponent.prototype.onEdit = function (versionedDataObject) {
        this.navigateToDetailDialog(versionedDataObject);
    };
    SportjahrOverviewComponent.prototype.loadTableRows = function (id) {
        var _this = this;
        this.loading = true;
        this.sportjahrDataProvider.findAllByLigaId(id)
            .then(function (response) { return _this.handleLoadTableRowsSuccess(response); })
            .catch(function (response) { return _this.handleLoadTableRowsFailure(response); });
    };
    SportjahrOverviewComponent.prototype.navigateToDetailDialog = function (versionedDataObject) {
        this.router.navigateByUrl('/verwaltung/sportjahr/' + versionedDataObject.id);
    };
    SportjahrOverviewComponent.prototype.handleLoadTableRowsFailure = function (response) {
        this.rows = [];
        this.loading = false;
    };
    SportjahrOverviewComponent.prototype.handleLoadTableRowsSuccess = function (response) {
        this.rows = []; // reset array to ensure change detection
        this.rows = Object(_shared_components__WEBPACK_IMPORTED_MODULE_3__["toTableRows"])(response.payload);
        this.loading = false;
    };
    SportjahrOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-sportjahr-overview',
            template: __webpack_require__(/*! ./sportjahr-overview.component.html */ "./src/app/modules/verwaltung/components/sportjahr/sportjahr-overview/sportjahr-overview.component.html"),
            styles: [__webpack_require__(/*! ./sportjahr-overview.component.scss */ "./src/app/modules/verwaltung/components/sportjahr/sportjahr-overview/sportjahr-overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sportjahr_data_provider_service__WEBPACK_IMPORTED_MODULE_6__["SportjahrDataProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services__WEBPACK_IMPORTED_MODULE_5__["NotificationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SportjahrOverviewComponent);
    return SportjahrOverviewComponent;
}(_shared_components__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/components/sportjahr/sportjahr-overview/sportjahr-overview.config.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/sportjahr/sportjahr-overview/sportjahr-overview.config.ts ***!
  \*********************************************************************************************************/
/*! exports provided: SPORTJAHR_LIGA_AUSWAHL_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPORTJAHR_LIGA_AUSWAHL_CONFIG", function() { return SPORTJAHR_LIGA_AUSWAHL_CONFIG; });
/* harmony import */ var _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/tables/types/table-action-type.enum */ "./src/app/modules/shared/components/tables/types/table-action-type.enum.ts");
/* harmony import */ var _shared_components_tables_types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/tables/types/table-column-type.enum */ "./src/app/modules/shared/components/tables/types/table-column-type.enum.ts");


var SPORTJAHR_LIGA_AUSWAHL_CONFIG = {
    moduleTranslationKey: 'MANAGEMENT',
    pageTitleTranslationKey: 'MANAGEMENT.SPORTJAHR_OVERVIEW.TITLE',
    tableConfig: {
        columns: [
            {
                translationKey: 'MANAGEMENT.SPORTJAHR_OVERVIEW.TABLE.HEADERS.NAME',
                propertyName: 'name',
                width: 20
            },
            {
                translationKey: 'MANAGEMENT.SPORTJAHR_OVERVIEW.TABLE.HEADERS.SPORTJAHR',
                propertyName: 'sportjahr',
                width: 20
            },
            {
                translationKey: 'MANAGEMENT.SPORTJAHR_OVERVIEW.TABLE.HEADERS.DEADLINE',
                propertyName: 'deadline',
                type: _shared_components_tables_types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnType"].DATE,
                width: 20
            },
            {
                translationKey: 'MANAGEMENT.SPORTJAHR_OVERVIEW.TABLE.HEADERS.WETTKAMPFTYPNAME',
                propertyName: 'wettkampfTypName',
                width: 20
            },
            {
                translationKey: 'MANAGEMENT.SPORTJAHR_OVERVIEW.TABLE.HEADERS.LIGALEITEREMAIL',
                propertyName: 'ligaleiterEmail',
                width: 20
            }
        ],
        actions: {
            actionTypes: [_shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].EDIT, _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].DELETE],
            width: 6
        },
    }
};


/***/ }),

/***/ "./src/app/modules/verwaltung/components/verein/verein-detail/verein-detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/verein/verein-detail/verein-detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-common-dialog [config]=\"config\"\n                   [loading]=\"loading\">\n\n  <form id=\"vereineForm\"\n        class=\"horizontal-form half-page\"\n        #vereineForm=\"ngForm\">\n\n    <!-- ID -->\n    <div class=\"form-group row\">\n      <label for=\"vereinName\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.VEREIN_DETAIL.FORM.VEREIN_NAME.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               class=\"form-control\"\n               required\n               id=\"vereinName\"\n               name=\"vereinName\"\n               #vereinName=\"ngModel\"\n               [(ngModel)]=\"currentVerein.name\"\n               [class.is-invalid]=\"vereinName.invalid && !vereinName.untouched\"\n               placeholder=\"{{ 'MANAGEMENT.VEREIN_DETAIL.FORM.VEREIN_NAME.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.VEREIN_DETAIL.FORM.VEREIN_NAME.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <!-- Identifier -->\n    <div class=\"form-group row\">\n      <label for=\"vereinIdentifier\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.VEREIN_DETAIL.FORM.VEREIN_IDENTIFIER.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               class=\"form-control\"\n               required\n               id=\"vereinIdentifier\"\n               name=\"vereinIdentifier\"\n               #vereinIdentifier=\"ngModel\"\n               [(ngModel)]=\"currentVerein.identifier\"\n               [class.is-invalid]=\"vereinIdentifier.invalid && !vereinIdentifier.untouched\"\n               placeholder=\"{{ 'MANAGEMENT.VEREIN_DETAIL.FORM.VEREIN_IDENTIFIER.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.VEREIN_DETAIL.FORM.VEREIN_IDENTIFIER.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <!-- REGION ID -->\n    <div class=\"form-group row\">\n      <label for=\"vereinRegion\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.VEREIN_DETAIL.FORM.VEREIN_REGION.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <select class=\"form-control\"\n                id=\"vereinRegion\"\n                name=\"vereinRegion\"\n                #vereinRegion=\"ngModel\"\n                [(ngModel)]=\"currentRegion\">\n          <option [ngValue]=\"region\" *ngFor=\"let region of regionen\"> {{region.regionName}}</option>\n        </select>\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.VEREIN_DETAIL.FORM.VEREIN_REGION.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-3\"></div>\n      <div class=\"col-sm-9 button-box\">\n\n\n        <bla-button *ngIf=\"!entityExists()\"\n                    [id]=\"'vereinSaveButton'\"\n                    [disabled]=\"!vereineForm.valid\"\n                    [loading]=\"saveLoading\"\n                    (onClick)=\"onSave($event)\">\n          {{ 'MANAGEMENT.VEREIN_DETAIL.FORM.SAVE' | translate }}\n        </bla-button>\n        <bla-button *ngIf=\"entityExists()\"\n                    [id]=\"'vereinUpdateButton'\"\n                    [disabled]=\"!vereineForm.valid\"\n                    [loading]=\"saveLoading\"\n                    (onClick)=\"onUpdate($event)\">\n          {{ 'MANAGEMENT.VEREIN_DETAIL.FORM.UPDATE' | translate }}\n        </bla-button>\n\n        <bla-button *ngIf=\"entityExists()\"\n                    [buttonType]=\"ButtonType.DANGER\"\n                    [loading]=\"deleteLoading\"\n                    (onClick)=\"onDelete($event)\">\n          {{ 'MANAGEMENT.VEREIN_DETAIL.FORM.DELETE' | translate }}\n        </bla-button>\n      </div>\n    </div>\n  </form>\n\n</bla-common-dialog>\n"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/verein/verein-detail/verein-detail.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/verein/verein-detail/verein-detail.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".half-page {\n  width: 50%; }\n\n.button-box {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  flex-wrap: wrap; }\n\n@media (max-width: 1400px) {\n  .half-page {\n    width: 80%; } }\n\n@media (max-width: 950px) {\n  .half-page {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL3ZlcmVpbi92ZXJlaW4tZGV0YWlsL3ZlcmVpbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixlQUFlLEVBQUE7O0FBSWpCO0VBRUU7SUFDRSxVQUFVLEVBQUEsRUFDWDs7QUFLSDtFQUVFO0lBQ0UsV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3ZlcndhbHR1bmcvY29tcG9uZW50cy92ZXJlaW4vdmVyZWluLWRldGFpbC92ZXJlaW4tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbGYtcGFnZSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5idXR0b24tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcblxuICAuaGFsZi1wYWdlIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbn1cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuXG4gIC5oYWxmLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/verein/verein-detail/verein-detail.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/verein/verein-detail/verein-detail.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: VereinDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereinDetailComponent", function() { return VereinDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components */ "./src/app/modules/shared/components/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _services_region_data_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/region-data-provider.service */ "./src/app/modules/verwaltung/services/region-data-provider.service.ts");
/* harmony import */ var _services_verein_data_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/verein-data-provider.service */ "./src/app/modules/verwaltung/services/verein-data-provider.service.ts");
/* harmony import */ var _types_region_do_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../types/region-do.class */ "./src/app/modules/verwaltung/types/region-do.class.ts");
/* harmony import */ var _types_verein_do_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../types/verein-do.class */ "./src/app/modules/verwaltung/types/verein-do.class.ts");
/* harmony import */ var _verein_detail_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./verein-detail.config */ "./src/app/modules/verwaltung/components/verein/verein-detail/verein-detail.config.ts");











var ID_PATH_PARAM = 'id';
var NOTIFICATION_DELETE_VEREIN = 'verein_detail_delete';
var NOTIFICATION_DELETE_VEREIN_SUCCESS = 'verein_detail_delete_success';
var NOTIFICATION_DELETE_VEREIN_FAILURE = 'verein_detail_delete_failure';
var NOTIFICATION_SAVE_VEREIN = 'verein_detail_save';
var NOTIFICATION_UPDATE_VEREIN = 'verein_detail_update';
var VereinDetailComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VereinDetailComponent, _super);
    function VereinDetailComponent(vereinProvider, regionProvider, router, route, notificationService) {
        var _this = _super.call(this) || this;
        _this.vereinProvider = vereinProvider;
        _this.regionProvider = regionProvider;
        _this.router = router;
        _this.route = route;
        _this.notificationService = notificationService;
        _this.regionType = 'KREIS';
        _this.config = _verein_detail_config__WEBPACK_IMPORTED_MODULE_10__["VEREIN_DETAIL_CONFIG"];
        _this.ButtonType = _shared_components__WEBPACK_IMPORTED_MODULE_4__["ButtonType"];
        _this.currentVerein = new _types_verein_do_class__WEBPACK_IMPORTED_MODULE_9__["VereinDO"]();
        _this.currentRegion = new _types_region_do_class__WEBPACK_IMPORTED_MODULE_8__["RegionDO"]();
        _this.regionen = [new _types_region_do_class__WEBPACK_IMPORTED_MODULE_8__["RegionDO"]()];
        _this.deleteLoading = false;
        _this.saveLoading = false;
        return _this;
    }
    VereinDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.notificationService.discardNotification();
        this.loadRegions(this.regionType); // Request all regions from the backend
        this.route.params.subscribe(function (params) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(params[ID_PATH_PARAM])) {
                var id = params[ID_PATH_PARAM];
                if (id === 'add') {
                    _this.currentVerein = new _types_verein_do_class__WEBPACK_IMPORTED_MODULE_9__["VereinDO"]();
                    _this.loading = false;
                    _this.deleteLoading = false;
                    _this.saveLoading = false;
                }
                else {
                    _this.loadById(params[ID_PATH_PARAM]);
                }
            }
        });
    };
    VereinDetailComponent.prototype.onSave = function (ignore) {
        var _this = this;
        this.saveLoading = true;
        // persist
        this.currentVerein.regionId = this.currentRegion.id; // Set selected region id
        console.log('Saving verein: ', this.currentVerein);
        this.vereinProvider.create(this.currentVerein)
            .then(function (response) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload.id)) {
                console.log('Saved with id: ' + response.payload.id);
                var notification = {
                    id: NOTIFICATION_SAVE_VEREIN,
                    title: 'MANAGEMENT.VEREIN_DETAIL.NOTIFICATION.SAVE.TITLE',
                    description: 'MANAGEMENT.VEREIN_DETAIL.NOTIFICATION.SAVE.DESCRIPTION',
                    severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO,
                    origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
                    type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
                    userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
                };
                _this.notificationService.observeNotification(NOTIFICATION_SAVE_VEREIN)
                    .subscribe(function (myNotification) {
                    if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                        _this.saveLoading = false;
                        _this.router.navigateByUrl('/verwaltung/vereine/' + response.payload.id);
                    }
                });
                _this.notificationService.showNotification(notification);
            }
        }, function (response) {
            console.log('Failed');
            _this.saveLoading = false;
        });
        // show response message
    };
    VereinDetailComponent.prototype.onUpdate = function (ignore) {
        var _this = this;
        this.saveLoading = true;
        // persist
        this.currentVerein.regionId = this.currentRegion.id; // Set selected region id
        this.vereinProvider.update(this.currentVerein)
            .then(function (response) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload.id)) {
                var id = _this.currentVerein.id;
                var notification = {
                    id: NOTIFICATION_UPDATE_VEREIN + id,
                    title: 'MANAGEMENT.VEREIN_DETAIL.NOTIFICATION.SAVE.TITLE',
                    description: 'MANAGEMENT.VEREIN_DETAIL.NOTIFICATION.SAVE.DESCRIPTION',
                    severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO,
                    origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
                    type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
                    userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
                };
                _this.notificationService.observeNotification(NOTIFICATION_UPDATE_VEREIN + id)
                    .subscribe(function (myNotification) {
                    if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                        _this.saveLoading = false;
                        _this.router.navigateByUrl('/verwaltung/vereine');
                    }
                });
                _this.notificationService.showNotification(notification);
            }
        }, function (response) {
            console.log('Failed');
            _this.saveLoading = false;
        });
        // show response message
    };
    VereinDetailComponent.prototype.onDelete = function (ignore) {
        var _this = this;
        this.deleteLoading = true;
        this.notificationService.discardNotification();
        var id = this.currentVerein.id;
        var notification = {
            id: NOTIFICATION_DELETE_VEREIN + id,
            title: 'MANAGEMENT.VEREIN_DETAIL.NOTIFICATION.DELETE.TITLE',
            description: 'MANAGEMENT.VEREIN_DETAIL.NOTIFICATION.DELETE.DESCRIPTION',
            descriptionParam: '' + id,
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].QUESTION,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].YES_NO,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_VEREIN + id)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.vereinProvider.deleteById(id)
                    .then(function (response) { return _this.handleDeleteSuccess(response); })
                    .catch(function (response) { return _this.handleDeleteFailure(response); });
            }
        });
        this.notificationService.showNotification(notification);
    };
    VereinDetailComponent.prototype.entityExists = function () {
        return this.currentVerein.id >= 0;
    };
    VereinDetailComponent.prototype.loadById = function (id) {
        var _this = this;
        this.vereinProvider.findById(id)
            .then(function (response) { return _this.handleSuccess(response); })
            .catch(function (response) { return _this.handleFailure(response); });
    };
    VereinDetailComponent.prototype.loadRegions = function (type) {
        var _this = this;
        this.regionProvider.findAllByType(type)
            .then(function (response) { return _this.handleResponseArraySuccess(response); })
            .catch(function (response) { return _this.handleResponseArrayFailure(response); });
    };
    VereinDetailComponent.prototype.handleSuccess = function (response) {
        var _this = this;
        this.currentVerein = response.payload;
        this.loading = false;
        this.currentRegion = this.regionen.filter(function (region) { return region.id === _this.currentVerein.regionId; })[0];
    };
    VereinDetailComponent.prototype.handleFailure = function (response) {
        this.loading = false;
    };
    VereinDetailComponent.prototype.handleDeleteSuccess = function (response) {
        var _this = this;
        var notification = {
            id: NOTIFICATION_DELETE_VEREIN_SUCCESS,
            title: 'MANAGEMENT.VEREIN_DETAIL.NOTIFICATION.DELETE_SUCCESS.TITLE',
            description: 'MANAGEMENT.VEREIN_DETAIL.NOTIFICATION.DELETE_SUCCESS.DESCRIPTION',
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_VEREIN_SUCCESS)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.router.navigateByUrl('/verwaltung/vereine');
                _this.deleteLoading = false;
            }
        });
        this.notificationService.showNotification(notification);
    };
    VereinDetailComponent.prototype.handleDeleteFailure = function (response) {
        var _this = this;
        var notification = {
            id: NOTIFICATION_DELETE_VEREIN_FAILURE,
            title: 'MANAGEMENT.VEREIN_DETAIL.NOTIFICATION.DELETE_FAILURE.TITLE',
            description: 'MANAGEMENT.VEREIN_DETAIL.NOTIFICATION.DELETE_FAILURE.DESCRIPTION',
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].ERROR,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_VEREIN_FAILURE)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.deleteLoading = false;
            }
        });
        this.notificationService.showNotification(notification);
    };
    VereinDetailComponent.prototype.handleResponseArrayFailure = function (response) {
        this.regionen = [];
        this.loading = false;
    };
    VereinDetailComponent.prototype.handleResponseArraySuccess = function (response) {
        this.regionen = []; // reset array to ensure change detection
        this.regionen = response.payload;
        this.currentRegion = this.regionen[0]; // Set first element of object as selected.
        this.loading = false;
    };
    VereinDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-verein-detail',
            template: __webpack_require__(/*! ./verein-detail.component.html */ "./src/app/modules/verwaltung/components/verein/verein-detail/verein-detail.component.html"),
            styles: [__webpack_require__(/*! ./verein-detail.component.scss */ "./src/app/modules/verwaltung/components/verein/verein-detail/verein-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_verein_data_provider_service__WEBPACK_IMPORTED_MODULE_7__["VereinDataProviderService"],
            _services_region_data_provider_service__WEBPACK_IMPORTED_MODULE_6__["RegionDataProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], VereinDetailComponent);
    return VereinDetailComponent;
}(_shared_components__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/components/verein/verein-detail/verein-detail.config.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/verein/verein-detail/verein-detail.config.ts ***!
  \********************************************************************************************/
/*! exports provided: VEREIN_DETAIL_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VEREIN_DETAIL_CONFIG", function() { return VEREIN_DETAIL_CONFIG; });
var VEREIN_DETAIL_CONFIG = {
    moduleTranslationKey: 'MANAGEMENT',
    pageTitleTranslationKey: 'MANAGEMENT.VEREIN_DETAIL.TITLE'
};


/***/ }),

/***/ "./src/app/modules/verwaltung/components/verein/verein-overview/verein-overview.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/verein/verein-overview/verein-overview.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-overview-dialog [config]=\"config\"\n                     [rows]=\"rows\"\n                     [loading]=\"loading\"\n                     (onViewClicked)=\"onView($event)\"\n                     (onEditClicked)=\"onEdit($event)\"\n                     (onDeleteClicked)=\"onDelete($event)\">\n\n</bla-overview-dialog>\n"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/verein/verein-overview/verein-overview.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/verein/verein-overview/verein-overview.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL3ZlcmVpbi92ZXJlaW4tb3ZlcnZpZXcvdmVyZWluLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/verein/verein-overview/verein-overview.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/verein/verein-overview/verein-overview.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NOTIFICATION_DELETE_VEREINE, VereinOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_DELETE_VEREINE", function() { return NOTIFICATION_DELETE_VEREINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereinOverviewComponent", function() { return VereinOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/common */ "./src/app/modules/shared/components/common/index.ts");
/* harmony import */ var _shared_components_tables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/tables */ "./src/app/modules/shared/components/tables/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _services_verein_data_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/verein-data-provider.service */ "./src/app/modules/verwaltung/services/verein-data-provider.service.ts");
/* harmony import */ var _verein_overview_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verein-overview.config */ "./src/app/modules/verwaltung/components/verein/verein-overview/verein-overview.config.ts");








var NOTIFICATION_DELETE_VEREINE = 'vereine_overview_delete';
var VereinOverviewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VereinOverviewComponent, _super);
    function VereinOverviewComponent(vereinDataProvider, router, notificationService) {
        var _this = _super.call(this) || this;
        _this.vereinDataProvider = vereinDataProvider;
        _this.router = router;
        _this.notificationService = notificationService;
        _this.config = _verein_overview_config__WEBPACK_IMPORTED_MODULE_7__["VEREIN_OVERVIEW_CONFIG"];
        return _this;
    }
    VereinOverviewComponent.prototype.ngOnInit = function () {
        this.loadTableRows();
    };
    VereinOverviewComponent.prototype.onView = function (versionedDataObject) {
        this.navigateToDetailDialog(versionedDataObject);
    };
    VereinOverviewComponent.prototype.onEdit = function (versionedDataObject) {
        this.navigateToDetailDialog(versionedDataObject);
    };
    VereinOverviewComponent.prototype.onDelete = function (versionedDataObject) {
        var _this = this;
        // show loading icon
        var id = versionedDataObject.id;
        this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_4__["showDeleteLoadingIndicatorIcon"])(this.rows, id);
        var notification = {
            id: NOTIFICATION_DELETE_VEREINE + id,
            title: 'MANAGEMENT.VEREINE.NOTIFICATION.DELETE.TITLE',
            description: 'MANAGEMENT.VEREINE.NOTIFICATION.DELETE.DESCRIPTION',
            descriptionParam: '' + id,
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].QUESTION,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].YES_NO,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_VEREINE + id)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.vereinDataProvider.deleteById(id)
                    .then(function (response) { return _this.loadTableRows(); })
                    .catch(function (response) { return _this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_4__["hideLoadingIndicator"])(_this.rows, id); });
            }
        });
        this.notificationService.showNotification(notification);
    };
    VereinOverviewComponent.prototype.loadTableRows = function () {
        var _this = this;
        this.loading = true;
        this.vereinDataProvider.findAll()
            .then(function (response) { return _this.handleLoadTableRowsSuccess(response); })
            .catch(function (response) { return _this.handleLoadTableRowsFailure(response); });
    };
    VereinOverviewComponent.prototype.navigateToDetailDialog = function (versionedDataObject) {
        this.router.navigateByUrl('/verwaltung/vereine/' + versionedDataObject.id);
    };
    VereinOverviewComponent.prototype.handleLoadTableRowsFailure = function (response) {
        this.rows = [];
        this.loading = false;
    };
    VereinOverviewComponent.prototype.handleLoadTableRowsSuccess = function (response) {
        this.rows = []; // reset array to ensure change detection
        this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_4__["toTableRows"])(response.payload);
        this.loading = false;
    };
    VereinOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-verein-overview',
            template: __webpack_require__(/*! ./verein-overview.component.html */ "./src/app/modules/verwaltung/components/verein/verein-overview/verein-overview.component.html"),
            styles: [__webpack_require__(/*! ./verein-overview.component.scss */ "./src/app/modules/verwaltung/components/verein/verein-overview/verein-overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_verein_data_provider_service__WEBPACK_IMPORTED_MODULE_6__["VereinDataProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], VereinOverviewComponent);
    return VereinOverviewComponent;
}(_shared_components_common__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/components/verein/verein-overview/verein-overview.config.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/verein/verein-overview/verein-overview.config.ts ***!
  \************************************************************************************************/
/*! exports provided: VEREIN_OVERVIEW_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VEREIN_OVERVIEW_CONFIG", function() { return VEREIN_OVERVIEW_CONFIG; });
/* harmony import */ var _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/tables/types/table-action-type.enum */ "./src/app/modules/shared/components/tables/types/table-action-type.enum.ts");

var VEREIN_OVERVIEW_CONFIG = {
    moduleTranslationKey: 'MANAGEMENT',
    pageTitleTranslationKey: 'MANAGEMENT.VEREINE.TITLE',
    tableConfig: {
        columns: [
            {
                translationKey: 'MANAGEMENT.VEREINE.TABLE.HEADERS.NAME',
                propertyName: 'name',
                width: 20,
            },
            {
                translationKey: 'MANAGEMENT.VEREINE.TABLE.HEADERS.IDENTIFIER',
                propertyName: 'identifier',
                width: 20,
            },
            {
                translationKey: 'MANAGEMENT.VEREINE.TABLE.HEADERS.REGION_NAME',
                propertyName: 'regionName',
                width: 20,
            }
        ],
        actions: {
            actionTypes: [_shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].EDIT, _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].DELETE],
            width: 6
        },
    }
};


/***/ }),

/***/ "./src/app/modules/verwaltung/components/verwaltung/verwaltung.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/verwaltung/verwaltung.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-navigation-dialog [config]=\"config\"></bla-navigation-dialog>\n"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/verwaltung/verwaltung.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/verwaltung/verwaltung.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Farbkonzept Website */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL3ZlcndhbHR1bmcvdmVyd2FsdHVuZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL3ZlcndhbHR1bmcvdmVyd2FsdHVuZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZhcmJrb256ZXB0IFdlYnNpdGUgKi9cbiRwcmltYXJ5OiAjMDJiZGQ1OyAvLyBMaW5rcywgTmF2YmFyXG4kcHJpbWFyeS1saWdodDogI2I0ZmZmZjsgLy8gU2lkZWJhci1CYWNrZ3JvdW5kXG4kcHJpbWFyeS1kYXJrOiAjMDA3YzkxOyAvLyBTaWRlYmFyLUZvbnRcbiRzZWNvbmRhcnk6ICNmZmMxMDc7IC8vIGhvdmVyIFRhYmxlc1xuJHNlY29uZGFyeS1saWdodDogI2ZmZjM1MDtcbiRzZWNvbmRhcnktZGFyazogI2ZmODMzYTsgLy8gaG92ZXIgTGlua3MsIExvZ29cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/verwaltung/verwaltung.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/verwaltung/verwaltung.component.ts ***!
  \**********************************************************************************/
/*! exports provided: VerwaltungComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerwaltungComponent", function() { return VerwaltungComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _verwaltung_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verwaltung.config */ "./src/app/modules/verwaltung/components/verwaltung/verwaltung.config.ts");



var VerwaltungComponent = /** @class */ (function () {
    function VerwaltungComponent() {
        this.config = _verwaltung_config__WEBPACK_IMPORTED_MODULE_2__["VERWALTUNG_CONFIG"];
    }
    VerwaltungComponent.prototype.ngOnInit = function () {
    };
    VerwaltungComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-verwaltung',
            template: __webpack_require__(/*! ./verwaltung.component.html */ "./src/app/modules/verwaltung/components/verwaltung/verwaltung.component.html"),
            styles: [__webpack_require__(/*! ./verwaltung.component.scss */ "./src/app/modules/verwaltung/components/verwaltung/verwaltung.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VerwaltungComponent);
    return VerwaltungComponent;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/components/verwaltung/verwaltung.config.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/verwaltung/verwaltung.config.ts ***!
  \*******************************************************************************/
/*! exports provided: VERWALTUNG_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERWALTUNG_CONFIG", function() { return VERWALTUNG_CONFIG; });
var VERWALTUNG_CONFIG = {
    moduleTranslationKey: 'MANAGEMENT',
    pageTitleTranslationKey: 'MANAGEMENT.VERWALTUNG.TITLE',
    navigationCardsConfig: {
        navigationCards: [
            {
                labelKey: 'MANAGEMENT.VERWALTUNG.NAVIGATION.DSBMITGLIEDER.LABEL',
                descriptionKey: 'MANAGEMENT.VERWALTUNG.NAVIGATION.DSBMITGLIEDER.DESCRIPTION',
                icon: 'users',
                route: 'dsbmitglieder'
            },
            {
                labelKey: 'MANAGEMENT.VERWALTUNG.NAVIGATION.BENUTZER.LABEL',
                descriptionKey: 'MANAGEMENT.VERWALTUNG.NAVIGATION.BENUTZER.DESCRIPTION',
                icon: 'address-card',
                route: 'benutzer'
            },
            {
                labelKey: 'MANAGEMENT.VERWALTUNG.NAVIGATION.KLASSEN.LABEL',
                descriptionKey: 'MANAGEMENT.VERWALTUNG.NAVIGATION.KLASSEN.DESCRIPTION',
                icon: 'wrench',
                route: 'klassen'
            },
            {
                labelKey: 'MANAGEMENT.VERWALTUNG.NAVIGATION.DSBMANNSCHAFTEN.LABEL',
                descriptionKey: 'MANAGEMENT.VERWALTUNG.NAVIGATION.DSBMANNSCHAFTEN.DESCRIPTION',
                icon: 'campground',
                route: 'dsbmannschaft'
            },
            {
                labelKey: 'MANAGEMENT.VERWALTUNG.NAVIGATION.VEREINE.LABEL',
                descriptionKey: 'MANAGEMENT.VERWALTUNG.NAVIGATION.VEREINE.DESCRIPTION',
                icon: 'sitemap',
                route: 'vereine'
            },
            {
                labelKey: 'MANAGEMENT.VERWALTUNG.NAVIGATION.LIGA.LABEL',
                descriptionKey: 'MANAGEMENT.VERWALTUNG.NAVIGATION.LIGA.DESCRIPTION',
                icon: 'users',
                route: 'liga'
            },
            {
                labelKey: 'MANAGEMENT.VERWALTUNG.NAVIGATION.SPORTJAHR.LABEL',
                descriptionKey: 'MANAGEMENT.VERWALTUNG.NAVIGATION.SPORTJAHR.DESCRIPTION',
                icon: 'cogs',
                route: 'sportjahr'
            }
        ]
    }
};


/***/ }),

/***/ "./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-detail/wettkampfklasse-detail.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-detail/wettkampfklasse-detail.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-common-dialog [config]=\"config\"\n                   [loading]=\"loading\">\n\n  <form id=\"wettkampfKlasseForm\"\n        class=\"horizontal-form half-page\"\n        #dsbMitgliedForm=\"ngForm\">\n\n\n    <!-- WETTKAMPF ID\n    <div class=\"form-group row\">\n      <label for=\"wettkampfKlasseId\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.WETTKAMPF_ID.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               class=\"form-control\"\n               required\n               id=\"wettkampfKlasseId\"\n               name=\"wettkampfKlasseId\"\n               #wettkampfKlasseId=\"ngModel\"\n               [(ngModel)]=\"currentWettkampfklasse.id\"\n               [class.is-invalid]=\"wettkampfKlasseId.invalid && !wettkampfKlasseId.untouched\"\n               placeholder=\"{{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.WETTKAMPF_ID.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.WETTKAMPF_ID.ERROR' | translate }}\n        </div>\n      </div>\n    </div>-->\n\n    <!-- WETTKAMPFKLASSE_NR -->\n    <div class=\"form-group row\">\n      <label for=\"wettkampfKlasseNr\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.WETTKAMPF_NR.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               class=\"form-control\"\n               required\n               id=\"wettkampfKlasseNr\"\n               name=\"wettkampfKlasseNr\"\n               #wettkampfKlasseNr=\"ngModel\"\n               maxlength=\"2\"\n               [(ngModel)]=\"currentWettkampfklasse.klasseNr\"\n               [class.is-invalid]=\"wettkampfKlasseNr.invalid && !wettkampfKlasseNr.untouched\"\n               placeholder=\"{{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.WETTKAMPF_NR.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.WETTKAMPF_NR.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <!-- WETTKAMPFKLASSE_NAME -->\n    <div class=\"form-group row\">\n      <label for=\"wettkampfKlasseName\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.WETTKAMPFNAME.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               class=\"form-control\"\n               required\n               id=\"wettkampfKlasseName\"\n               name=\"wettkampfKlasseName\"\n               #wettkampfKlasseName=\"ngModel\"\n               [(ngModel)]=\"currentWettkampfklasse.klasseName\"\n               [class.is-invalid]=\"wettkampfKlasseName.invalid && !wettkampfKlasseName.untouched\"\n               placeholder=\"{{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.WETTKAMPFNAME.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.WETTKAMPFNAME.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n\n    <!-- WETTKAMPF_JAHRGANG_MIN -->\n    <div class=\"form-group row\">\n      <label for=\"wettkampfKlasseJahrgangMin\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.WETTKAMPF_JAHRGANG_MIN.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               class=\"form-control\"\n               required\n               id=\"wettkampfKlasseJahrgangMin\"\n               name=\"wettkampfKlasseJahrgangMin\"\n               #wettkampfKlasseJahrgangMin=\"ngModel\"\n               maxlength=\"4\"\n               pattern=\"[0-9]{4}\"\n               [(ngModel)]=\"currentWettkampfklasse.klasseJahrgangMin\"\n               [class.is-invalid]=\"wettkampfKlasseJahrgangMin.invalid && !wettkampfKlasseJahrgangMin.untouched\"\n               placeholder=\"{{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.WETTKAMPF_JAHRGANG_MIN.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.WETTKAMPF_JAHRGANG_MIN.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <!-- WETTKAMPF_JAHRGANG_MAX -->\n    <div class=\"form-group row\">\n      <label for=\"wettkampfKlasseJahrgangMax\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.WETTKAMPF_JAHRGANG_MAX.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               class=\"form-control\"\n               required\n               id=\"wettkampfKlasseJahrgangMax\"\n               name=\"wettkampfKlasseJahrgangMax\"\n               #wettkampfKlasseJahrgangMax=\"ngModel\"\n               maxlength=\"4\"\n               pattern=\"[0-9]{4}\"\n               [(ngModel)]=\"currentWettkampfklasse.klasseJahrgangMax\"\n               [class.is-invalid]=\"wettkampfKlasseJahrgangMax.invalid && !wettkampfKlasseJahrgangMax.untouched\"\n               placeholder=\"{{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.WETTKAMPF_JAHRGANG_MAX.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.WETTKAMPF_JAHRGANG_MAX.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-3\"></div>\n      <div class=\"col-sm-9 button-box\">\n\n\n        <bla-button *ngIf=\"!entityExists()\"\n                    [id]=\"'wettkampfKlasseSaveButton'\"\n                    [disabled]=\"!dsbMitgliedForm.valid\"\n                    [loading]=\"saveLoading\"\n                    (onClick)=\"onSave($event)\">\n          {{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.SAVE' | translate }}\n        </bla-button>\n        <bla-button *ngIf=\"entityExists()\"\n                    [id]=\"'wettkampfKlasseUpdateButton'\"\n                    [disabled]=\"!dsbMitgliedForm.valid\"\n                    [loading]=\"saveLoading\"\n                    (onClick)=\"onUpdate($event)\">\n          {{ 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.FORM.UPDATE' | translate }}\n        </bla-button>\n\n        <!-- <bla-button *ngIf=\"entityExists()\"\n                     [buttonType]=\"ButtonType.DANGER\"\n                     [loading]=\"deleteLoading\"\n                     (onClick)=\"onDelete($event)\">\n           {{ 'MANAGEMENT.DSBMITGLIEDER_DETAIL.FORM.DELETE' | translate }}\n         </bla-button> -->\n       </div>\n     </div>\n   </form>\n\n </bla-common-dialog>\n"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-detail/wettkampfklasse-detail.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-detail/wettkampfklasse-detail.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".half-page {\n  width: 50%; }\n\n.button-box {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  flex-wrap: wrap; }\n\n@media (max-width: 1400px) {\n  .half-page {\n    width: 80%; } }\n\n@media (max-width: 950px) {\n  .half-page {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL3dldHRrYW1wZmtsYXNzZS93ZXR0a2FtcGZrbGFzc2UtZGV0YWlsL3dldHRrYW1wZmtsYXNzZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixlQUFlLEVBQUE7O0FBSWpCO0VBRUU7SUFDRSxVQUFVLEVBQUEsRUFDWDs7QUFLSDtFQUVFO0lBQ0UsV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3ZlcndhbHR1bmcvY29tcG9uZW50cy93ZXR0a2FtcGZrbGFzc2Uvd2V0dGthbXBma2xhc3NlLWRldGFpbC93ZXR0a2FtcGZrbGFzc2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbGYtcGFnZSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5idXR0b24tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcblxuICAuaGFsZi1wYWdlIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbn1cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuXG4gIC5oYWxmLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-detail/wettkampfklasse-detail.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-detail/wettkampfklasse-detail.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: WettkampfklasseDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WettkampfklasseDetailComponent", function() { return WettkampfklasseDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components */ "./src/app/modules/shared/components/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _services_wettkampfklassen_data_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/wettkampfklassen-data-provider.service */ "./src/app/modules/verwaltung/services/wettkampfklassen-data-provider.service.ts");
/* harmony import */ var _types_wettkampfklasse_do_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../types/wettkampfklasse-do.class */ "./src/app/modules/verwaltung/types/wettkampfklasse-do.class.ts");
/* harmony import */ var _wettkampfklasse_detail_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wettkampfklasse-detail.config */ "./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-detail/wettkampfklasse-detail.config.ts");









var ID_PATH_PARAM = 'id';
var NOTIFICATION_DELETE_DSB_MITGLIED = 'dsb_mitglied_detail_delete';
var NOTIFICATION_DELETE_DSB_MITGLIED_SUCCESS = 'dsb_mitglied_detail_delete_success';
var NOTIFICATION_DELETE_DSB_MITGLIED_FAILURE = 'dsb_mitglied_detail_delete_failure';
var NOTIFICATION_SAVE_DSB_MITGLIED = 'dsb_mitglied_detail_save';
var NOTIFICATION_UPDATE_DSB_MITGLIED = 'dsb_mitglied_detail_update';
var WettkampfklasseDetailComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WettkampfklasseDetailComponent, _super);
    function WettkampfklasseDetailComponent(wettkampfklasseDataProvider, router, route, notificationService) {
        var _this = _super.call(this) || this;
        _this.wettkampfklasseDataProvider = wettkampfklasseDataProvider;
        _this.router = router;
        _this.route = route;
        _this.notificationService = notificationService;
        _this.config = _wettkampfklasse_detail_config__WEBPACK_IMPORTED_MODULE_8__["WETTKAMPFKLASSE_DETAIL_CONFIG"];
        _this.ButtonType = _shared_components__WEBPACK_IMPORTED_MODULE_4__["ButtonType"];
        _this.currentWettkampfklasse = new _types_wettkampfklasse_do_class__WEBPACK_IMPORTED_MODULE_7__["WettkampfKlasseDO"]();
        _this.deleteLoading = false;
        _this.saveLoading = false;
        return _this;
    }
    WettkampfklasseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.notificationService.discardNotification();
        this.route.params.subscribe(function (params) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(params[ID_PATH_PARAM])) {
                var id = params[ID_PATH_PARAM];
                if (id === 'add') {
                    _this.currentWettkampfklasse = new _types_wettkampfklasse_do_class__WEBPACK_IMPORTED_MODULE_7__["WettkampfKlasseDO"]();
                    _this.loading = false;
                    _this.deleteLoading = false;
                    _this.saveLoading = false;
                }
                else {
                    _this.loadById(params[ID_PATH_PARAM]);
                }
            }
        });
    };
    WettkampfklasseDetailComponent.prototype.onSave = function (ignore) {
        var _this = this;
        this.saveLoading = true;
        // persist
        this.wettkampfklasseDataProvider.create(this.currentWettkampfklasse)
            .then(function (response) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload.id)) {
                console.log('Saved with id: ' + response.payload.id);
                var notification = {
                    id: NOTIFICATION_SAVE_DSB_MITGLIED,
                    title: 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.NOTIFICATION.SAVE.TITLE',
                    description: 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.NOTIFICATION.SAVE.DESCRIPTION',
                    severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO,
                    origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
                    type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
                    userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
                };
                _this.notificationService.observeNotification(NOTIFICATION_SAVE_DSB_MITGLIED)
                    .subscribe(function (myNotification) {
                    if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                        _this.saveLoading = false;
                        _this.router.navigateByUrl('/verwaltung/klassen/' + response.payload.id);
                    }
                });
                _this.notificationService.showNotification(notification);
            }
        }, function (response) {
            console.log('Failed');
            _this.saveLoading = false;
        });
        // show response message
    };
    WettkampfklasseDetailComponent.prototype.onUpdate = function (ignore) {
        var _this = this;
        this.saveLoading = true;
        // persist
        this.wettkampfklasseDataProvider.update(this.currentWettkampfklasse)
            .then(function (response) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload)
                && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(response.payload.id)) {
                var id = _this.currentWettkampfklasse.id;
                var notification = {
                    id: NOTIFICATION_UPDATE_DSB_MITGLIED + id,
                    title: 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.NOTIFICATION.SAVE.TITLE',
                    description: 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.NOTIFICATION.SAVE.DESCRIPTION',
                    severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO,
                    origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
                    type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
                    userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
                };
                _this.notificationService.observeNotification(NOTIFICATION_UPDATE_DSB_MITGLIED + id)
                    .subscribe(function (myNotification) {
                    if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                        _this.saveLoading = false;
                        _this.router.navigateByUrl('/verwaltung/klassen');
                    }
                });
                _this.notificationService.showNotification(notification);
            }
        }, function (response) {
            console.log('Failed');
            _this.saveLoading = false;
        });
        // show response message
    };
    WettkampfklasseDetailComponent.prototype.entityExists = function () {
        return this.currentWettkampfklasse.id >= 0;
    };
    WettkampfklasseDetailComponent.prototype.loadById = function (id) {
        var _this = this;
        this.wettkampfklasseDataProvider.findById(id)
            .then(function (response) { return _this.handleSuccess(response); })
            .catch(function (response) { return _this.handleFailure(response); });
    };
    WettkampfklasseDetailComponent.prototype.handleSuccess = function (response) {
        this.currentWettkampfklasse = response.payload;
        this.loading = false;
    };
    WettkampfklasseDetailComponent.prototype.handleFailure = function (response) {
        this.loading = false;
    };
    WettkampfklasseDetailComponent.prototype.handleDeleteSuccess = function (response) {
        var _this = this;
        var notification = {
            id: NOTIFICATION_DELETE_DSB_MITGLIED_SUCCESS,
            title: 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.NOTIFICATION.DELETE_SUCCESS.TITLE',
            description: 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.NOTIFICATION.DELETE_SUCCESS.DESCRIPTION',
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_DSB_MITGLIED_SUCCESS)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.router.navigateByUrl('/verwaltung/klassen');
                _this.deleteLoading = false;
            }
        });
        this.notificationService.showNotification(notification);
    };
    WettkampfklasseDetailComponent.prototype.handleDeleteFailure = function (response) {
        var _this = this;
        var notification = {
            id: NOTIFICATION_DELETE_DSB_MITGLIED_FAILURE,
            title: 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.NOTIFICATION.DELETE_FAILURE.TITLE',
            description: 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.NOTIFICATION.DELETE_FAILURE.DESCRIPTION',
            severity: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].ERROR,
            origin: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"].USER,
            type: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].OK,
            userAction: _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DELETE_DSB_MITGLIED_FAILURE)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED) {
                _this.deleteLoading = false;
            }
        });
        this.notificationService.showNotification(notification);
    };
    WettkampfklasseDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-wettkampfklasse-detail',
            template: __webpack_require__(/*! ./wettkampfklasse-detail.component.html */ "./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-detail/wettkampfklasse-detail.component.html"),
            styles: [__webpack_require__(/*! ./wettkampfklasse-detail.component.scss */ "./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-detail/wettkampfklasse-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_wettkampfklassen_data_provider_service__WEBPACK_IMPORTED_MODULE_6__["WettkampfklassenDataProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], WettkampfklasseDetailComponent);
    return WettkampfklasseDetailComponent;
}(_shared_components__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-detail/wettkampfklasse-detail.config.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-detail/wettkampfklasse-detail.config.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: WETTKAMPFKLASSE_DETAIL_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WETTKAMPFKLASSE_DETAIL_CONFIG", function() { return WETTKAMPFKLASSE_DETAIL_CONFIG; });
var WETTKAMPFKLASSE_DETAIL_CONFIG = {
    moduleTranslationKey: 'MANAGEMENT',
    pageTitleTranslationKey: 'MANAGEMENT.WETTKAMPFKLASSE_DETAIL.TITLE'
};


/***/ }),

/***/ "./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-overview/wettkampfklasse-overview.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-overview/wettkampfklasse-overview.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-overview-dialog [config]=\"config\"\n                     [rows]=\"rows\"\n                     [loading]=\"loading\"\n                     (onViewClicked)=\"onView($event)\"\n                     (onEditClicked)=\"onEdit($event)\"\n                     (onDeleteClicked)=\"onDelete($event)\">\n\n</bla-overview-dialog>\n"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-overview/wettkampfklasse-overview.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-overview/wettkampfklasse-overview.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVyd2FsdHVuZy9jb21wb25lbnRzL3dldHRrYW1wZmtsYXNzZS93ZXR0a2FtcGZrbGFzc2Utb3ZlcnZpZXcvd2V0dGthbXBma2xhc3NlLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-overview/wettkampfklasse-overview.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-overview/wettkampfklasse-overview.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: WettkampfklasseOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WettkampfklasseOverviewComponent", function() { return WettkampfklasseOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/common */ "./src/app/modules/shared/components/common/index.ts");
/* harmony import */ var _shared_components_tables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/tables */ "./src/app/modules/shared/components/tables/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _services_wettkampfklassen_data_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/wettkampfklassen-data-provider.service */ "./src/app/modules/verwaltung/services/wettkampfklassen-data-provider.service.ts");
/* harmony import */ var _wettkampfklasse_overview_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wettkampfklasse-overview.config */ "./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-overview/wettkampfklasse-overview.config.ts");








var WettkampfklasseOverviewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WettkampfklasseOverviewComponent, _super);
    function WettkampfklasseOverviewComponent(wettkampfklassenDataProvider, router, notificationService) {
        var _this = _super.call(this) || this;
        _this.wettkampfklassenDataProvider = wettkampfklassenDataProvider;
        _this.router = router;
        _this.notificationService = notificationService;
        _this.config = _wettkampfklasse_overview_config__WEBPACK_IMPORTED_MODULE_7__["WETTKAMPFKLASE_OVERVIEW_CONFIG"];
        return _this;
    }
    WettkampfklasseOverviewComponent.prototype.ngOnInit = function () {
        this.loadTableRows();
    };
    WettkampfklasseOverviewComponent.prototype.onView = function (versionedDataObject) {
        this.navigateToDetailDialog(versionedDataObject);
    };
    WettkampfklasseOverviewComponent.prototype.onEdit = function (versionedDataObject) {
        this.navigateToDetailDialog(versionedDataObject);
    };
    WettkampfklasseOverviewComponent.prototype.onDelete = function (versionedDataObject) {
        // TODO
    };
    WettkampfklasseOverviewComponent.prototype.loadTableRows = function () {
        var _this = this;
        this.loading = true;
        this.wettkampfklassenDataProvider.findAll()
            .then(function (response) { return _this.handleLoadTableRowsSuccess(response); })
            .catch(function (response) { return _this.handleLoadTableRowsFailure(response); });
    };
    WettkampfklasseOverviewComponent.prototype.handleLoadTableRowsFailure = function (response) {
        this.rows = [];
        this.loading = false;
    };
    WettkampfklasseOverviewComponent.prototype.handleLoadTableRowsSuccess = function (response) {
        this.rows = []; // reset array to ensure change detection
        this.rows = Object(_shared_components_tables__WEBPACK_IMPORTED_MODULE_4__["toTableRows"])(response.payload);
        this.loading = false;
    };
    WettkampfklasseOverviewComponent.prototype.navigateToDetailDialog = function (versionedDataObject) {
        this.router.navigateByUrl('/verwaltung/klassen/' + versionedDataObject.id);
    };
    WettkampfklasseOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-wettkampfklasse-overview',
            template: __webpack_require__(/*! ./wettkampfklasse-overview.component.html */ "./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-overview/wettkampfklasse-overview.component.html"),
            styles: [__webpack_require__(/*! ./wettkampfklasse-overview.component.scss */ "./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-overview/wettkampfklasse-overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_wettkampfklassen_data_provider_service__WEBPACK_IMPORTED_MODULE_6__["WettkampfklassenDataProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], WettkampfklasseOverviewComponent);
    return WettkampfklasseOverviewComponent;
}(_shared_components_common__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-overview/wettkampfklasse-overview.config.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/components/wettkampfklasse/wettkampfklasse-overview/wettkampfklasse-overview.config.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: WETTKAMPFKLASE_OVERVIEW_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WETTKAMPFKLASE_OVERVIEW_CONFIG", function() { return WETTKAMPFKLASE_OVERVIEW_CONFIG; });
/* harmony import */ var _shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/tables/types/table-action-type.enum */ "./src/app/modules/shared/components/tables/types/table-action-type.enum.ts");
/* harmony import */ var _shared_components_tables_types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/tables/types/table-column-type.enum */ "./src/app/modules/shared/components/tables/types/table-column-type.enum.ts");


var WETTKAMPFKLASE_OVERVIEW_CONFIG = {
    moduleTranslationKey: 'MANAGEMENT',
    pageTitleTranslationKey: 'MANAGEMENT.KLASSEN.TITLE',
    tableConfig: {
        columns: [
            {
                translationKey: 'MANAGEMENT.KLASSEN.TABLE.HEADERS.KLASSENR',
                propertyName: 'klasseNr',
                width: 20,
            },
            {
                translationKey: 'MANAGEMENT.KLASSEN.TABLE.HEADERS.KLASSENAME',
                propertyName: 'klasseName',
                width: 20,
            },
            {
                translationKey: 'MANAGEMENT.KLASSEN.TABLE.HEADERS.KLASSEALTERMIN',
                propertyName: 'klasseJahrgangMin',
                type: _shared_components_tables_types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnType"].NUMBER,
                width: 20,
            },
            {
                translationKey: 'MANAGEMENT.KLASSEN.TABLE.HEADERS.KLASSEALTERMAX',
                propertyName: 'klasseJahrgangMax',
                width: 20,
            }
        ],
        actions: {
            actionTypes: [_shared_components_tables_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].EDIT],
            width: 6
        },
    }
};


/***/ }),

/***/ "./src/app/modules/verwaltung/guards/benutzer-detail.guard.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/benutzer-detail.guard.ts ***!
  \********************************************************************/
/*! exports provided: BenutzerDetailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenutzerDetailGuard", function() { return BenutzerDetailGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BenutzerDetailGuard = /** @class */ (function () {
    function BenutzerDetailGuard() {
    }
    BenutzerDetailGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    BenutzerDetailGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BenutzerDetailGuard);
    return BenutzerDetailGuard;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/guards/benutzer-neu.guard.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/benutzer-neu.guard.ts ***!
  \*****************************************************************/
/*! exports provided: BenutzerNeuGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenutzerNeuGuard", function() { return BenutzerNeuGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BenutzerNeuGuard = /** @class */ (function () {
    function BenutzerNeuGuard() {
    }
    BenutzerNeuGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    BenutzerNeuGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BenutzerNeuGuard);
    return BenutzerNeuGuard;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/guards/benutzer-overview.guard.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/benutzer-overview.guard.ts ***!
  \**********************************************************************/
/*! exports provided: BenutzerOverviewGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenutzerOverviewGuard", function() { return BenutzerOverviewGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BenutzerOverviewGuard = /** @class */ (function () {
    function BenutzerOverviewGuard() {
    }
    BenutzerOverviewGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    BenutzerOverviewGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BenutzerOverviewGuard);
    return BenutzerOverviewGuard;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/guards/dsb-mannschaft-detail.guard.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/dsb-mannschaft-detail.guard.ts ***!
  \**************************************************************************/
/*! exports provided: DsbMannschaftDetailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsbMannschaftDetailGuard", function() { return DsbMannschaftDetailGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DsbMannschaftDetailGuard = /** @class */ (function () {
    function DsbMannschaftDetailGuard() {
    }
    DsbMannschaftDetailGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    DsbMannschaftDetailGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DsbMannschaftDetailGuard);
    return DsbMannschaftDetailGuard;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/guards/dsb-mannschaft-overview.guard.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/dsb-mannschaft-overview.guard.ts ***!
  \****************************************************************************/
/*! exports provided: DsbMannschaftOverviewGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsbMannschaftOverviewGuard", function() { return DsbMannschaftOverviewGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DsbMannschaftOverviewGuard = /** @class */ (function () {
    function DsbMannschaftOverviewGuard() {
    }
    DsbMannschaftOverviewGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    DsbMannschaftOverviewGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DsbMannschaftOverviewGuard);
    return DsbMannschaftOverviewGuard;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/guards/dsb-mitglied-detail.guard.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/dsb-mitglied-detail.guard.ts ***!
  \************************************************************************/
/*! exports provided: DsbMitgliedDetailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsbMitgliedDetailGuard", function() { return DsbMitgliedDetailGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DsbMitgliedDetailGuard = /** @class */ (function () {
    function DsbMitgliedDetailGuard() {
    }
    DsbMitgliedDetailGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    DsbMitgliedDetailGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DsbMitgliedDetailGuard);
    return DsbMitgliedDetailGuard;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/guards/dsb-mitglied-overview.guard.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/dsb-mitglied-overview.guard.ts ***!
  \**************************************************************************/
/*! exports provided: DsbMitgliedOverviewGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsbMitgliedOverviewGuard", function() { return DsbMitgliedOverviewGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DsbMitgliedOverviewGuard = /** @class */ (function () {
    function DsbMitgliedOverviewGuard() {
    }
    DsbMitgliedOverviewGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    DsbMitgliedOverviewGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DsbMitgliedOverviewGuard);
    return DsbMitgliedOverviewGuard;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/guards/index.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/index.ts ***!
  \****************************************************/
/*! exports provided: VerwaltungGuard, DsbMitgliedOverviewGuard, DsbMitgliedDetailGuard, BenutzerOverviewGuard, BenutzerNeuGuard, BenutzerDetailGuard, WettkampfklasseDetailGuard, WettkampfklasseOverviewGuard, DsbMannschaftDetailGuard, DsbMannschaftOverviewGuard, VereinDetailGuard, VereinOverviewGuard, LigaDetailGuard, LigaOverviewGuard, SportjahrLigaAuswahlGuard, SportjahrOverviewGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _verwaltung_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verwaltung.guard */ "./src/app/modules/verwaltung/guards/verwaltung.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerwaltungGuard", function() { return _verwaltung_guard__WEBPACK_IMPORTED_MODULE_0__["VerwaltungGuard"]; });

/* harmony import */ var _dsb_mitglied_overview_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dsb-mitglied-overview.guard */ "./src/app/modules/verwaltung/guards/dsb-mitglied-overview.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DsbMitgliedOverviewGuard", function() { return _dsb_mitglied_overview_guard__WEBPACK_IMPORTED_MODULE_1__["DsbMitgliedOverviewGuard"]; });

/* harmony import */ var _dsb_mitglied_detail_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dsb-mitglied-detail.guard */ "./src/app/modules/verwaltung/guards/dsb-mitglied-detail.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DsbMitgliedDetailGuard", function() { return _dsb_mitglied_detail_guard__WEBPACK_IMPORTED_MODULE_2__["DsbMitgliedDetailGuard"]; });

/* harmony import */ var _benutzer_overview_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./benutzer-overview.guard */ "./src/app/modules/verwaltung/guards/benutzer-overview.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BenutzerOverviewGuard", function() { return _benutzer_overview_guard__WEBPACK_IMPORTED_MODULE_3__["BenutzerOverviewGuard"]; });

/* harmony import */ var _benutzer_neu_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./benutzer-neu.guard */ "./src/app/modules/verwaltung/guards/benutzer-neu.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BenutzerNeuGuard", function() { return _benutzer_neu_guard__WEBPACK_IMPORTED_MODULE_4__["BenutzerNeuGuard"]; });

/* harmony import */ var _benutzer_detail_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./benutzer-detail.guard */ "./src/app/modules/verwaltung/guards/benutzer-detail.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BenutzerDetailGuard", function() { return _benutzer_detail_guard__WEBPACK_IMPORTED_MODULE_5__["BenutzerDetailGuard"]; });

/* harmony import */ var _wettkampfklasse_detail_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wettkampfklasse-detail.guard */ "./src/app/modules/verwaltung/guards/wettkampfklasse-detail.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WettkampfklasseDetailGuard", function() { return _wettkampfklasse_detail_guard__WEBPACK_IMPORTED_MODULE_6__["WettkampfklasseDetailGuard"]; });

/* harmony import */ var _wettkampfklasse_overview_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wettkampfklasse-overview.guard */ "./src/app/modules/verwaltung/guards/wettkampfklasse-overview.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WettkampfklasseOverviewGuard", function() { return _wettkampfklasse_overview_guard__WEBPACK_IMPORTED_MODULE_7__["WettkampfklasseOverviewGuard"]; });

/* harmony import */ var _dsb_mannschaft_detail_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dsb-mannschaft-detail.guard */ "./src/app/modules/verwaltung/guards/dsb-mannschaft-detail.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DsbMannschaftDetailGuard", function() { return _dsb_mannschaft_detail_guard__WEBPACK_IMPORTED_MODULE_8__["DsbMannschaftDetailGuard"]; });

/* harmony import */ var _dsb_mannschaft_overview_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dsb-mannschaft-overview.guard */ "./src/app/modules/verwaltung/guards/dsb-mannschaft-overview.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DsbMannschaftOverviewGuard", function() { return _dsb_mannschaft_overview_guard__WEBPACK_IMPORTED_MODULE_9__["DsbMannschaftOverviewGuard"]; });

/* harmony import */ var _verein_detail_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./verein-detail.guard */ "./src/app/modules/verwaltung/guards/verein-detail.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VereinDetailGuard", function() { return _verein_detail_guard__WEBPACK_IMPORTED_MODULE_10__["VereinDetailGuard"]; });

/* harmony import */ var _verein_overview_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./verein-overview.guard */ "./src/app/modules/verwaltung/guards/verein-overview.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VereinOverviewGuard", function() { return _verein_overview_guard__WEBPACK_IMPORTED_MODULE_11__["VereinOverviewGuard"]; });

/* harmony import */ var _liga_detail_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./liga-detail.guard */ "./src/app/modules/verwaltung/guards/liga-detail.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LigaDetailGuard", function() { return _liga_detail_guard__WEBPACK_IMPORTED_MODULE_12__["LigaDetailGuard"]; });

/* harmony import */ var _liga_overview_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./liga-overview.guard */ "./src/app/modules/verwaltung/guards/liga-overview.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LigaOverviewGuard", function() { return _liga_overview_guard__WEBPACK_IMPORTED_MODULE_13__["LigaOverviewGuard"]; });

/* harmony import */ var _sportjahr_liga_auswahl_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sportjahr-liga-auswahl.guard */ "./src/app/modules/verwaltung/guards/sportjahr-liga-auswahl.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SportjahrLigaAuswahlGuard", function() { return _sportjahr_liga_auswahl_guard__WEBPACK_IMPORTED_MODULE_14__["SportjahrLigaAuswahlGuard"]; });

/* harmony import */ var _sportjahr_overview_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sportjahr-overview.guard */ "./src/app/modules/verwaltung/guards/sportjahr-overview.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SportjahrOverviewGuard", function() { return _sportjahr_overview_guard__WEBPACK_IMPORTED_MODULE_15__["SportjahrOverviewGuard"]; });



















/***/ }),

/***/ "./src/app/modules/verwaltung/guards/liga-detail.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/liga-detail.guard.ts ***!
  \****************************************************************/
/*! exports provided: LigaDetailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LigaDetailGuard", function() { return LigaDetailGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LigaDetailGuard = /** @class */ (function () {
    function LigaDetailGuard() {
    }
    LigaDetailGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    LigaDetailGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LigaDetailGuard);
    return LigaDetailGuard;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/guards/liga-overview.guard.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/liga-overview.guard.ts ***!
  \******************************************************************/
/*! exports provided: LigaOverviewGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LigaOverviewGuard", function() { return LigaOverviewGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LigaOverviewGuard = /** @class */ (function () {
    function LigaOverviewGuard() {
    }
    LigaOverviewGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    LigaOverviewGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LigaOverviewGuard);
    return LigaOverviewGuard;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/guards/sportjahr-liga-auswahl.guard.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/sportjahr-liga-auswahl.guard.ts ***!
  \***************************************************************************/
/*! exports provided: SportjahrLigaAuswahlGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportjahrLigaAuswahlGuard", function() { return SportjahrLigaAuswahlGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SportjahrLigaAuswahlGuard = /** @class */ (function () {
    function SportjahrLigaAuswahlGuard() {
    }
    SportjahrLigaAuswahlGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    SportjahrLigaAuswahlGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SportjahrLigaAuswahlGuard);
    return SportjahrLigaAuswahlGuard;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/guards/sportjahr-overview.guard.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/sportjahr-overview.guard.ts ***!
  \***********************************************************************/
/*! exports provided: SportjahrOverviewGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportjahrOverviewGuard", function() { return SportjahrOverviewGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SportjahrOverviewGuard = /** @class */ (function () {
    function SportjahrOverviewGuard() {
    }
    SportjahrOverviewGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    SportjahrOverviewGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SportjahrOverviewGuard);
    return SportjahrOverviewGuard;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/guards/verein-detail.guard.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/verein-detail.guard.ts ***!
  \******************************************************************/
/*! exports provided: VereinDetailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereinDetailGuard", function() { return VereinDetailGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VereinDetailGuard = /** @class */ (function () {
    function VereinDetailGuard() {
    }
    VereinDetailGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    VereinDetailGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VereinDetailGuard);
    return VereinDetailGuard;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/guards/verein-overview.guard.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/verein-overview.guard.ts ***!
  \********************************************************************/
/*! exports provided: VereinOverviewGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereinOverviewGuard", function() { return VereinOverviewGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VereinOverviewGuard = /** @class */ (function () {
    function VereinOverviewGuard() {
    }
    VereinOverviewGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    VereinOverviewGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VereinOverviewGuard);
    return VereinOverviewGuard;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/guards/verwaltung.guard.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/verwaltung.guard.ts ***!
  \***************************************************************/
/*! exports provided: VerwaltungGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerwaltungGuard", function() { return VerwaltungGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");



var VerwaltungGuard = /** @class */ (function () {
    function VerwaltungGuard(currentUserService) {
        this.currentUserService = currentUserService;
    }
    VerwaltungGuard.prototype.canActivate = function () {
        return this.currentUserService.hasAnyPermisson([_shared_services_current_user__WEBPACK_IMPORTED_MODULE_2__["UserPermission"].CAN_READ_STAMMDATEN, _shared_services_current_user__WEBPACK_IMPORTED_MODULE_2__["UserPermission"].CAN_MODIFY_STAMMDATEN]);
    };
    VerwaltungGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_current_user__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]])
    ], VerwaltungGuard);
    return VerwaltungGuard;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/guards/wettkampfklasse-detail.guard.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/wettkampfklasse-detail.guard.ts ***!
  \***************************************************************************/
/*! exports provided: WettkampfklasseDetailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WettkampfklasseDetailGuard", function() { return WettkampfklasseDetailGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WettkampfklasseDetailGuard = /** @class */ (function () {
    function WettkampfklasseDetailGuard() {
    }
    WettkampfklasseDetailGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    WettkampfklasseDetailGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WettkampfklasseDetailGuard);
    return WettkampfklasseDetailGuard;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/guards/wettkampfklasse-overview.guard.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/verwaltung/guards/wettkampfklasse-overview.guard.ts ***!
  \*****************************************************************************/
/*! exports provided: WettkampfklasseOverviewGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WettkampfklasseOverviewGuard", function() { return WettkampfklasseOverviewGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WettkampfklasseOverviewGuard = /** @class */ (function () {
    function WettkampfklasseOverviewGuard() {
    }
    WettkampfklasseOverviewGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    WettkampfklasseOverviewGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WettkampfklasseOverviewGuard);
    return WettkampfklasseOverviewGuard;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/mapper/benutzer-mapper.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/verwaltung/mapper/benutzer-mapper.ts ***!
  \**************************************************************/
/*! exports provided: fromPayload, fromPayloadArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayload", function() { return fromPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayloadArray", function() { return fromPayloadArray; });
/* harmony import */ var _types_datatransfer_benutzer_dto_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/datatransfer/benutzer-dto.class */ "./src/app/modules/verwaltung/types/datatransfer/benutzer-dto.class.ts");

// export function toDO(benutzerDTO: BenutzerDTO): BenutzerDO {
//
// }
//
// export function toDTO(benutzerDO: BenutzerDO): BenutzerDTO {
//
// }
function fromPayload(payload) {
    return _types_datatransfer_benutzer_dto_class__WEBPACK_IMPORTED_MODULE_0__["BenutzerDTO"].copyFrom(payload);
}
function fromPayloadArray(payload) {
    var list = [];
    payload.forEach(function (single) { return list.push(fromPayload(single)); });
    return list;
}


/***/ }),

/***/ "./src/app/modules/verwaltung/mapper/benutzer-rolle-mapper.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/verwaltung/mapper/benutzer-rolle-mapper.ts ***!
  \********************************************************************/
/*! exports provided: fromPayloadBenutzerRolle, fromPayloadArrayBenutzerRolle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayloadBenutzerRolle", function() { return fromPayloadBenutzerRolle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayloadArrayBenutzerRolle", function() { return fromPayloadArrayBenutzerRolle; });
/* harmony import */ var _types_benutzer_rolle_do_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/benutzer-rolle-do.class */ "./src/app/modules/verwaltung/types/benutzer-rolle-do.class.ts");
/* harmony import */ var _types_datatransfer_benutzer_rolle_dto_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/datatransfer/benutzer-rolle-dto.class */ "./src/app/modules/verwaltung/types/datatransfer/benutzer-rolle-dto.class.ts");


// export function toDO(benutzerRolleDTO: BenutzerRolleDTO): BenutzerRolleDO {
//
// }
//
// export function toDTO(benutzerRolleDO: BenutzerRolleDO): BenutzerRolleDTO {
//
// }
function fromPayloadBenutzerRolle(payload) {
    var benutzerRolleDTO = _types_datatransfer_benutzer_rolle_dto_class__WEBPACK_IMPORTED_MODULE_1__["BenutzerRolleDTO"].copyFrom(payload);
    var benutzerRolleDO = new _types_benutzer_rolle_do_class__WEBPACK_IMPORTED_MODULE_0__["BenutzerRolleDO"]();
    benutzerRolleDO.id = benutzerRolleDTO.id;
    benutzerRolleDO.version = benutzerRolleDTO.version;
    benutzerRolleDO.email = benutzerRolleDTO.email;
    benutzerRolleDO.roleId = benutzerRolleDTO.roleId;
    benutzerRolleDO.roleName = benutzerRolleDTO.roleName;
    return benutzerRolleDO;
}
function fromPayloadArrayBenutzerRolle(payload) {
    var list = [];
    payload.forEach(function (single) { return list.push(fromPayloadBenutzerRolle(single)); });
    return list;
}


/***/ }),

/***/ "./src/app/modules/verwaltung/mapper/dsb-mitglied-mapper.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/verwaltung/mapper/dsb-mitglied-mapper.ts ***!
  \******************************************************************/
/*! exports provided: fromPayload, fromPayloadArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayload", function() { return fromPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayloadArray", function() { return fromPayloadArray; });
/* harmony import */ var _types_datatransfer_dsb_mitglied_dto_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/datatransfer/dsb-mitglied-dto.class */ "./src/app/modules/verwaltung/types/datatransfer/dsb-mitglied-dto.class.ts");

// export function toDO(dsbMitgliedDTO: DsbMitgliedDTO): DsbMitgliedDO {
//
// }
//
// export function toDTO(dsbMitgliedDO: DsbMitgliedDO): DsbMitgliedDTO {
//
// }
function fromPayload(payload) {
    return _types_datatransfer_dsb_mitglied_dto_class__WEBPACK_IMPORTED_MODULE_0__["DsbMitgliedDTO"].copyFrom(payload);
}
function fromPayloadArray(payload) {
    var list = [];
    payload.forEach(function (single) { return list.push(fromPayload(single)); });
    return list;
}


/***/ }),

/***/ "./src/app/modules/verwaltung/mapper/liga-mapper.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/verwaltung/mapper/liga-mapper.ts ***!
  \**********************************************************/
/*! exports provided: fromPayload, fromPayloadArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayload", function() { return fromPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayloadArray", function() { return fromPayloadArray; });
/* harmony import */ var _types_datatransfer_liga_dto_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/datatransfer/liga-dto.class */ "./src/app/modules/verwaltung/types/datatransfer/liga-dto.class.ts");

function fromPayload(payload) {
    return _types_datatransfer_liga_dto_class__WEBPACK_IMPORTED_MODULE_0__["LigaDTO"].copyFrom(payload);
}
function fromPayloadArray(payload) {
    var list = [];
    payload.forEach(function (single) { return list.push(fromPayload(single)); });
    return list;
}


/***/ }),

/***/ "./src/app/modules/verwaltung/mapper/role-mapper.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/verwaltung/mapper/role-mapper.ts ***!
  \**********************************************************/
/*! exports provided: toPayload, fromPayload, fromPayloadArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPayload", function() { return toPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayload", function() { return fromPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayloadArray", function() { return fromPayloadArray; });
/* harmony import */ var _types_datatransfer_role_dto_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/datatransfer/role-dto.class */ "./src/app/modules/verwaltung/types/datatransfer/role-dto.class.ts");

// export function toDO(roleDTO: RoleDTO): RoleDO {
//
// }
//
// export function toDTO(roleDO: RoleDO): RoleDTO {
//
// }
function toPayload(payload) {
    return _types_datatransfer_role_dto_class__WEBPACK_IMPORTED_MODULE_0__["RoleDTO"].copyFrom(payload);
}
function fromPayload(payload) {
    return _types_datatransfer_role_dto_class__WEBPACK_IMPORTED_MODULE_0__["RoleDTO"].copyFrom(payload);
}
function fromPayloadArray(payload) {
    var list = [];
    payload.forEach(function (single) { return list.push(fromPayload(single)); });
    return list;
}


/***/ }),

/***/ "./src/app/modules/verwaltung/mapper/sportjahr-mapper.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/verwaltung/mapper/sportjahr-mapper.ts ***!
  \***************************************************************/
/*! exports provided: fromPayload, fromPayloadArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayload", function() { return fromPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayloadArray", function() { return fromPayloadArray; });
/* harmony import */ var _types_datatransfer_sportjahr_dto_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/datatransfer/sportjahr-dto.class */ "./src/app/modules/verwaltung/types/datatransfer/sportjahr-dto.class.ts");

function fromPayload(payload) {
    return _types_datatransfer_sportjahr_dto_class__WEBPACK_IMPORTED_MODULE_0__["SportjahrDTO"].copyFrom(payload);
}
function fromPayloadArray(payload) {
    var list = [];
    payload.forEach(function (single) { return list.push(fromPayload(single)); });
    return list;
}


/***/ }),

/***/ "./src/app/modules/verwaltung/mapper/verein-mapper.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/verwaltung/mapper/verein-mapper.ts ***!
  \************************************************************/
/*! exports provided: fromPayload, fromPayloadArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayload", function() { return fromPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayloadArray", function() { return fromPayloadArray; });
/* harmony import */ var _types_datatransfer_verein_dto_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/datatransfer/verein-dto.class */ "./src/app/modules/verwaltung/types/datatransfer/verein-dto.class.ts");

function fromPayload(payload) {
    return _types_datatransfer_verein_dto_class__WEBPACK_IMPORTED_MODULE_0__["VereinDTO"].copyFrom(payload);
}
function fromPayloadArray(payload) {
    var list = [];
    payload.forEach(function (single) { return list.push(fromPayload(single)); });
    return list;
}


/***/ }),

/***/ "./src/app/modules/verwaltung/mapper/wettkampfklasse-mapper.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/verwaltung/mapper/wettkampfklasse-mapper.ts ***!
  \*********************************************************************/
/*! exports provided: fromPayload, fromPayloadArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayload", function() { return fromPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayloadArray", function() { return fromPayloadArray; });
/* harmony import */ var _types_datatransfer_wettkampfklasse_dto_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/datatransfer/wettkampfklasse-dto.class */ "./src/app/modules/verwaltung/types/datatransfer/wettkampfklasse-dto.class.ts");

function fromPayload(payload) {
    return _types_datatransfer_wettkampfklasse_dto_class__WEBPACK_IMPORTED_MODULE_0__["WettkampfKlasseDTO"].copyFrom(payload);
}
function fromPayloadArray(payload) {
    var list = [];
    payload.forEach(function (single) { return list.push(fromPayload(single)); });
    console.log(list);
    return list;
}


/***/ }),

/***/ "./src/app/modules/verwaltung/services/benutzer-data-provider.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/verwaltung/services/benutzer-data-provider.service.ts ***!
  \*******************************************************************************/
/*! exports provided: BenutzerDataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenutzerDataProviderService", function() { return BenutzerDataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _mapper_benutzer_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapper/benutzer-mapper */ "./src/app/modules/verwaltung/mapper/benutzer-mapper.ts");
/* harmony import */ var _mapper_benutzer_rolle_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mapper/benutzer-rolle-mapper */ "./src/app/modules/verwaltung/mapper/benutzer-rolle-mapper.ts");






var BenutzerDataProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BenutzerDataProviderService, _super);
    function BenutzerDataProviderService(restClient, currentUserService) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.currentUserService = currentUserService;
        _this.serviceSubUrl = 'v1/user';
        return _this;
    }
    BenutzerDataProviderService.prototype.create = function (payload) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.POST(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path('create').build(), payload)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_benutzer_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    BenutzerDataProviderService.prototype.update = function (payload) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.PUT(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path('uptRole').build(), payload)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_benutzer_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    BenutzerDataProviderService.prototype.deleteById = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.DELETE(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(id).build())
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
    BenutzerDataProviderService.prototype.findAll = function () {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(_this.getUrl())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_benutzer_rolle_mapper__WEBPACK_IMPORTED_MODULE_5__["fromPayloadArrayBenutzerRolle"])(data) });
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
    BenutzerDataProviderService.prototype.findUserRoleById = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path('userrole').path(id).build())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_benutzer_rolle_mapper__WEBPACK_IMPORTED_MODULE_5__["fromPayloadBenutzerRolle"])(data) });
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
    BenutzerDataProviderService.prototype.findById = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(id).build())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_benutzer_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    BenutzerDataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"], _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]])
    ], BenutzerDataProviderService);
    return BenutzerDataProviderService;
}(_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/services/dsb-mitglied-data-provider.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/verwaltung/services/dsb-mitglied-data-provider.service.ts ***!
  \***********************************************************************************/
/*! exports provided: DsbMitgliedDataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsbMitgliedDataProviderService", function() { return DsbMitgliedDataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _mapper_dsb_mitglied_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapper/dsb-mitglied-mapper */ "./src/app/modules/verwaltung/mapper/dsb-mitglied-mapper.ts");





var DsbMitgliedDataProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DsbMitgliedDataProviderService, _super);
    function DsbMitgliedDataProviderService(restClient, currentUserService) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.currentUserService = currentUserService;
        _this.serviceSubUrl = 'v1/dsbmitglied';
        return _this;
    }
    DsbMitgliedDataProviderService.prototype.create = function (payload) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.POST(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).build(), payload)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_dsb_mitglied_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    DsbMitgliedDataProviderService.prototype.deleteById = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.DELETE(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(id).build())
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
    DsbMitgliedDataProviderService.prototype.findAll = function () {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(_this.getUrl())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_dsb_mitglied_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayloadArray"])(data) });
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
    DsbMitgliedDataProviderService.prototype.findById = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(id).build())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_dsb_mitglied_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    DsbMitgliedDataProviderService.prototype.update = function (payload) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.PUT(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).build(), payload)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_dsb_mitglied_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    DsbMitgliedDataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"], _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]])
    ], DsbMitgliedDataProviderService);
    return DsbMitgliedDataProviderService;
}(_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/services/liga-data-provider.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/verwaltung/services/liga-data-provider.service.ts ***!
  \***************************************************************************/
/*! exports provided: LigaDataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LigaDataProviderService", function() { return LigaDataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _mapper_liga_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapper/liga-mapper */ "./src/app/modules/verwaltung/mapper/liga-mapper.ts");





var LigaDataProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LigaDataProviderService, _super);
    function LigaDataProviderService(restClient, currentUserService) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.currentUserService = currentUserService;
        _this.serviceSubUrl = 'v1/liga';
        return _this;
    }
    LigaDataProviderService.prototype.findAll = function () {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(_this.getUrl())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_liga_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayloadArray"])(data) });
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
    LigaDataProviderService.prototype.deleteById = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.DELETE(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(id).build())
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
    LigaDataProviderService.prototype.findById = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(id).build())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_liga_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    LigaDataProviderService.prototype.update = function (payload) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.PUT(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).build(), payload)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_liga_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    LigaDataProviderService.prototype.create = function (payload) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.POST(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).build(), payload)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_liga_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    LigaDataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"], _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]])
    ], LigaDataProviderService);
    return LigaDataProviderService;
}(_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/services/models/roles-versioned-data-object.class.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/services/models/roles-versioned-data-object.class.ts ***!
  \*****************************************************************************************/
/*! exports provided: RoleVersionedDataObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleVersionedDataObject", function() { return RoleVersionedDataObject; });
var RoleVersionedDataObject = /** @class */ (function () {
    function RoleVersionedDataObject(id, name) {
        this.version = 0;
        this.id = id;
        this.roleName = name;
    }
    return RoleVersionedDataObject;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/services/role-data-provider.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/verwaltung/services/role-data-provider.service.ts ***!
  \***************************************************************************/
/*! exports provided: RoleDataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDataProviderService", function() { return RoleDataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _mapper_role_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapper/role-mapper */ "./src/app/modules/verwaltung/mapper/role-mapper.ts");





var RoleDataProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleDataProviderService, _super);
    function RoleDataProviderService(restClient, currentUserService) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.currentUserService = currentUserService;
        _this.serviceSubUrl = 'v1/role';
        return _this;
    }
    RoleDataProviderService.prototype.findAll = function () {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(_this.getUrl())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_role_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayloadArray"])(data) });
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
    RoleDataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"], _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]])
    ], RoleDataProviderService);
    return RoleDataProviderService;
}(_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/services/sportjahr-data-provider.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/verwaltung/services/sportjahr-data-provider.service.ts ***!
  \********************************************************************************/
/*! exports provided: SportjahrDataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportjahrDataProviderService", function() { return SportjahrDataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _mapper_sportjahr_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapper/sportjahr-mapper */ "./src/app/modules/verwaltung/mapper/sportjahr-mapper.ts");





var SportjahrDataProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SportjahrDataProviderService, _super);
    function SportjahrDataProviderService(restClient, currentUserService) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.currentUserService = currentUserService;
        _this.serviceSubUrl = 'v1/sportjahr';
        return _this;
    }
    SportjahrDataProviderService.prototype.findAllByLigaId = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path('liga/' + id).build())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_sportjahr_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayloadArray"])(data) });
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
    SportjahrDataProviderService.prototype.deleteById = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.DELETE(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(id).build())
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
    SportjahrDataProviderService.prototype.findById = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(id).build())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_sportjahr_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    SportjahrDataProviderService.prototype.update = function (payload) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.PUT(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).build(), payload)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_sportjahr_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    SportjahrDataProviderService.prototype.create = function (payload) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.POST(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).build(), payload)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_sportjahr_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    SportjahrDataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"], _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]])
    ], SportjahrDataProviderService);
    return SportjahrDataProviderService;
}(_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/services/verein-data-provider.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/verwaltung/services/verein-data-provider.service.ts ***!
  \*****************************************************************************/
/*! exports provided: VereinDataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereinDataProviderService", function() { return VereinDataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _mapper_verein_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapper/verein-mapper */ "./src/app/modules/verwaltung/mapper/verein-mapper.ts");





var VereinDataProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VereinDataProviderService, _super);
    function VereinDataProviderService(restClient, currentUserService) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.currentUserService = currentUserService;
        _this.serviceSubUrl = 'v1/vereine';
        return _this;
    }
    VereinDataProviderService.prototype.findAll = function () {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(_this.getUrl())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_verein_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayloadArray"])(data) });
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
    VereinDataProviderService.prototype.deleteById = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.DELETE(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(id).build())
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
    VereinDataProviderService.prototype.findById = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(id).build())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_verein_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    VereinDataProviderService.prototype.update = function (payload) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.PUT(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).build(), payload)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_verein_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    VereinDataProviderService.prototype.create = function (payload) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.POST(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).build(), payload)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_verein_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    VereinDataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"], _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]])
    ], VereinDataProviderService);
    return VereinDataProviderService;
}(_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/services/wettkampfklassen-data-provider.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/services/wettkampfklassen-data-provider.service.ts ***!
  \***************************************************************************************/
/*! exports provided: WettkampfklassenDataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WettkampfklassenDataProviderService", function() { return WettkampfklassenDataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _mapper_wettkampfklasse_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapper/wettkampfklasse-mapper */ "./src/app/modules/verwaltung/mapper/wettkampfklasse-mapper.ts");





var WettkampfklassenDataProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WettkampfklassenDataProviderService, _super);
    function WettkampfklassenDataProviderService(restClient, currentUserService) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.currentUserService = currentUserService;
        _this.serviceSubUrl = 'v1/competitionclass';
        return _this;
    }
    WettkampfklassenDataProviderService.prototype.findAll = function () {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(_this.getUrl())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_wettkampfklasse_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayloadArray"])(data) });
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
    WettkampfklassenDataProviderService.prototype.findById = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(id).build())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_wettkampfklasse_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    WettkampfklassenDataProviderService.prototype.update = function (payload) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.PUT(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).build(), payload)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_wettkampfklasse_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    WettkampfklassenDataProviderService.prototype.create = function (payload) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.POST(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).build(), payload)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_wettkampfklasse_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    WettkampfklassenDataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"], _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]])
    ], WettkampfklassenDataProviderService);
    return WettkampfklassenDataProviderService;
}(_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/types/benutzer-rolle-do.class.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/benutzer-rolle-do.class.ts ***!
  \*********************************************************************/
/*! exports provided: BenutzerRolleDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenutzerRolleDO", function() { return BenutzerRolleDO; });
// bildet ab auf User-DTO auf Server-Seite
var BenutzerRolleDO = /** @class */ (function () {
    function BenutzerRolleDO() {
    }
    return BenutzerRolleDO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/datatransfer/benutzer-dto.class.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/datatransfer/benutzer-dto.class.ts ***!
  \*****************************************************************************/
/*! exports provided: BenutzerDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenutzerDTO", function() { return BenutzerDTO; });
var BenutzerDTO = /** @class */ (function () {
    function BenutzerDTO() {
    }
    BenutzerDTO.copyFrom = function (optional) {
        if (optional === void 0) { optional = {}; }
        var copy = new BenutzerDTO();
        copy.id = optional.id || null;
        copy.email = optional.email || '';
        copy.version = optional.version || null;
        return copy;
    };
    return BenutzerDTO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/datatransfer/benutzer-rolle-dto.class.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/datatransfer/benutzer-rolle-dto.class.ts ***!
  \***********************************************************************************/
/*! exports provided: BenutzerRolleDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenutzerRolleDTO", function() { return BenutzerRolleDTO; });
var BenutzerRolleDTO = /** @class */ (function () {
    function BenutzerRolleDTO() {
    }
    BenutzerRolleDTO.copyFrom = function (optional) {
        if (optional === void 0) { optional = {}; }
        var copy = new BenutzerRolleDTO();
        copy.id = optional.id || null;
        copy.email = optional.email || '';
        copy.roleId = optional.roleId || null;
        copy.roleName = optional.roleName || '';
        copy.version = optional.version || null;
        return copy;
    };
    return BenutzerRolleDTO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/datatransfer/dsb-mitglied-dto.class.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/datatransfer/dsb-mitglied-dto.class.ts ***!
  \*********************************************************************************/
/*! exports provided: DsbMitgliedDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsbMitgliedDTO", function() { return DsbMitgliedDTO; });
var DsbMitgliedDTO = /** @class */ (function () {
    function DsbMitgliedDTO() {
    }
    DsbMitgliedDTO.copyFrom = function (optional) {
        if (optional === void 0) { optional = {}; }
        var copy = new DsbMitgliedDTO();
        // show '0' value
        if (optional.id >= 0) {
            copy.id = optional.id;
        }
        else {
            copy.id = null;
        }
        copy.vorname = optional.vorname || '';
        copy.nachname = optional.nachname || '';
        copy.geburtsdatum = optional.geburtsdatum || '';
        copy.nationalitaet = optional.nationalitaet || '';
        copy.mitgliedsnummer = optional.mitgliedsnummer || '';
        copy.vereinsId = optional.vereinsId || null;
        copy.userId = optional.userId || null;
        copy.version = optional.version || null;
        copy.kampfrichter = optional.kampfrichter || false;
        return copy;
    };
    return DsbMitgliedDTO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/datatransfer/liga-dto.class.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/datatransfer/liga-dto.class.ts ***!
  \*************************************************************************/
/*! exports provided: LigaDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LigaDTO", function() { return LigaDTO; });
var LigaDTO = /** @class */ (function () {
    function LigaDTO() {
    }
    LigaDTO.copyFrom = function (optional) {
        if (optional === void 0) { optional = {}; }
        var copy = new LigaDTO();
        // show '0' value
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
        if (optional.ligaUebergeordnetId >= 0) {
            copy.ligaUebergeordnetId = optional.ligaUebergeordnetId;
        }
        else {
            copy.ligaUebergeordnetId = null;
        }
        if (optional.ligaVerantwortlichId >= 0) {
            copy.ligaVerantwortlichId = optional.ligaVerantwortlichId;
        }
        else {
            copy.ligaVerantwortlichId = null;
        }
        copy.name = optional.name || '';
        copy.regionName = optional.regionName || '';
        copy.ligaUebergeordnetName = optional.ligaUebergeordnetName || '';
        copy.ligaVerantwortlichMail = optional.ligaVerantwortlichMail || '';
        return copy;
    };
    return LigaDTO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/datatransfer/role-dto.class.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/datatransfer/role-dto.class.ts ***!
  \*************************************************************************/
/*! exports provided: RoleDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDTO", function() { return RoleDTO; });
var RoleDTO = /** @class */ (function () {
    function RoleDTO() {
    }
    RoleDTO.copyFrom = function (optional) {
        if (optional === void 0) { optional = {}; }
        var copy = new RoleDTO();
        copy.id = optional.id || null;
        copy.roleName = optional.roleName || '';
        copy.version = optional.version || null;
        return copy;
    };
    return RoleDTO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/datatransfer/sportjahr-dto.class.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/datatransfer/sportjahr-dto.class.ts ***!
  \******************************************************************************/
/*! exports provided: SportjahrDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportjahrDTO", function() { return SportjahrDTO; });
var SportjahrDTO = /** @class */ (function () {
    function SportjahrDTO() {
    }
    SportjahrDTO.copyFrom = function (optional) {
        if (optional === void 0) { optional = {}; }
        var copy = new SportjahrDTO();
        // show '0' value
        if (optional.id >= 0) {
            copy.id = optional.id;
        }
        else {
            copy.id = null;
        }
        if (optional.version >= 0) {
            copy.version = optional.version;
        }
        else {
            copy.version = null;
        }
        if (optional.wettkampfTypId >= 0) {
            copy.wettkampfTypId = optional.wettkampfTypId;
        }
        else {
            copy.version = null;
        }
        if (optional.sportjahr >= 0) {
            copy.sportjahr = optional.sportjahr;
        }
        else {
            copy.sportjahr = null;
        }
        if (optional.deadline >= 0) {
            copy.deadline = optional.deadline;
        }
        else {
            copy.deadline = null;
        }
        if (optional.ligaleiterID >= 0) {
            copy.ligaleiterID = optional.ligaleiterID;
        }
        else {
            copy.ligaleiterID = null;
        }
        copy.name = optional.name || '';
        copy.wettkampfTypName = optional.wettkampfTypName || '';
        copy.ligaleiterEmail = optional.ligaleiterEmail || '';
        return copy;
    };
    return SportjahrDTO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/datatransfer/verein-dto.class.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/datatransfer/verein-dto.class.ts ***!
  \***************************************************************************/
/*! exports provided: VereinDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereinDTO", function() { return VereinDTO; });
var VereinDTO = /** @class */ (function () {
    function VereinDTO() {
    }
    VereinDTO.copyFrom = function (optional) {
        if (optional === void 0) { optional = {}; }
        var copy = new VereinDTO();
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
    return VereinDTO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/datatransfer/wettkampfklasse-dto.class.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/datatransfer/wettkampfklasse-dto.class.ts ***!
  \************************************************************************************/
/*! exports provided: WettkampfKlasseDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WettkampfKlasseDTO", function() { return WettkampfKlasseDTO; });
var WettkampfKlasseDTO = /** @class */ (function () {
    function WettkampfKlasseDTO() {
    }
    WettkampfKlasseDTO.copyFrom = function (optional) {
        if (optional === void 0) { optional = {}; }
        var copy = new WettkampfKlasseDTO();
        // show '0' value
        if (optional.id >= 0) {
            copy.id = optional.id;
        }
        else {
            copy.id = null;
        }
        copy.klasseName = optional.klasseName || '';
        copy.klasseJahrgangMin = optional.klasseJahrgangMin || null;
        copy.klasseJahrgangMax = optional.klasseJahrgangMax || null;
        copy.klasseNr = optional.klasseNr || null;
        copy.version = optional.version || null;
        return copy;
    };
    return WettkampfKlasseDTO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/dsb-mannschaft-do.class.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/dsb-mannschaft-do.class.ts ***!
  \*********************************************************************/
/*! exports provided: DsbMannschaftDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsbMannschaftDO", function() { return DsbMannschaftDO; });
var DsbMannschaftDO = /** @class */ (function () {
    function DsbMannschaftDO() {
    }
    return DsbMannschaftDO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/dsb-mitglied-do.class.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/dsb-mitglied-do.class.ts ***!
  \*******************************************************************/
/*! exports provided: DsbMitgliedDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsbMitgliedDO", function() { return DsbMitgliedDO; });
var DsbMitgliedDO = /** @class */ (function () {
    function DsbMitgliedDO() {
        this.kampfrichter = false;
    }
    return DsbMitgliedDO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/liga-do.class.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/verwaltung/types/liga-do.class.ts ***!
  \***********************************************************/
/*! exports provided: LigaDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LigaDO", function() { return LigaDO; });
var LigaDO = /** @class */ (function () {
    function LigaDO() {
    }
    return LigaDO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/mannschaftsmitglied-do.class.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/mannschaftsmitglied-do.class.ts ***!
  \**************************************************************************/
/*! exports provided: MannschaftsMitgliedDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MannschaftsMitgliedDO", function() { return MannschaftsMitgliedDO; });
var MannschaftsMitgliedDO = /** @class */ (function () {
    function MannschaftsMitgliedDO() {
    }
    return MannschaftsMitgliedDO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/region-do.class.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/region-do.class.ts ***!
  \*************************************************************/
/*! exports provided: RegionDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionDO", function() { return RegionDO; });
var RegionDO = /** @class */ (function () {
    function RegionDO() {
    }
    return RegionDO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/role-do.class.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/verwaltung/types/role-do.class.ts ***!
  \***********************************************************/
/*! exports provided: RoleDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDO", function() { return RoleDO; });
// bildet ab auf Role-DTO auf Server-Seite
var RoleDO = /** @class */ (function () {
    function RoleDO() {
    }
    return RoleDO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/wettkampfklasse-do.class.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/wettkampfklasse-do.class.ts ***!
  \**********************************************************************/
/*! exports provided: WettkampfKlasseDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WettkampfKlasseDO", function() { return WettkampfKlasseDO; });
var WettkampfKlasseDO = /** @class */ (function () {
    function WettkampfKlasseDO() {
    }
    return WettkampfKlasseDO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/verwaltung.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/verwaltung/verwaltung.module.ts ***!
  \*********************************************************/
/*! exports provided: VerwaltungModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerwaltungModule", function() { return VerwaltungModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/modules/shared/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/modules/verwaltung/components/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards */ "./src/app/modules/verwaltung/guards/index.ts");
/* harmony import */ var _verwaltung_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./verwaltung.routing */ "./src/app/modules/verwaltung/verwaltung.routing.ts");









var VerwaltungModule = /** @class */ (function () {
    function VerwaltungModule() {
    }
    VerwaltungModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_verwaltung_routing__WEBPACK_IMPORTED_MODULE_8__["VERWALTUNG_ROUTES"]),
                _shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_6__["VerwaltungComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["DsbMitgliedOverviewComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["DsbMitgliedDetailComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["DsbMannschaftDetailComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["DsbMannschaftOverviewComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["BenutzerDetailComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["BenutzerNeuComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["BenutzerOverviewComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["WettkampfklasseOverviewComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["WettkampfklasseDetailComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["VereinDetailComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["VereinOverviewComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["LigaDetailComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["LigaOverviewComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["SportjahrLigaAuswahlComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["SportjahrOverviewComponent"]
            ],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_7__["VerwaltungGuard"],
                _guards__WEBPACK_IMPORTED_MODULE_7__["DsbMitgliedOverviewGuard"],
                _guards__WEBPACK_IMPORTED_MODULE_7__["DsbMitgliedDetailGuard"],
                _guards__WEBPACK_IMPORTED_MODULE_7__["DsbMannschaftOverviewGuard"],
                _guards__WEBPACK_IMPORTED_MODULE_7__["DsbMannschaftDetailGuard"],
                _guards__WEBPACK_IMPORTED_MODULE_7__["BenutzerOverviewGuard"],
                _guards__WEBPACK_IMPORTED_MODULE_7__["BenutzerNeuGuard"],
                _guards__WEBPACK_IMPORTED_MODULE_7__["BenutzerDetailGuard"],
                _guards__WEBPACK_IMPORTED_MODULE_7__["WettkampfklasseOverviewGuard"],
                _guards__WEBPACK_IMPORTED_MODULE_7__["WettkampfklasseDetailGuard"],
                _guards__WEBPACK_IMPORTED_MODULE_7__["VereinOverviewGuard"],
                _guards__WEBPACK_IMPORTED_MODULE_7__["VereinDetailGuard"],
                _guards__WEBPACK_IMPORTED_MODULE_7__["LigaOverviewGuard"],
                _guards__WEBPACK_IMPORTED_MODULE_7__["LigaDetailGuard"],
                _guards__WEBPACK_IMPORTED_MODULE_7__["SportjahrLigaAuswahlGuard"],
                _guards__WEBPACK_IMPORTED_MODULE_7__["SportjahrOverviewGuard"]
            ]
        })
    ], VerwaltungModule);
    return VerwaltungModule;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/verwaltung.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/verwaltung/verwaltung.routing.ts ***!
  \**********************************************************/
/*! exports provided: VERWALTUNG_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERWALTUNG_ROUTES", function() { return VERWALTUNG_ROUTES; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/app/modules/verwaltung/components/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards */ "./src/app/modules/verwaltung/guards/index.ts");


var VERWALTUNG_ROUTES = [
    { path: '', component: _components__WEBPACK_IMPORTED_MODULE_0__["VerwaltungComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["VerwaltungGuard"]] },
    {
        path: 'dsbmitglieder',
        component: _components__WEBPACK_IMPORTED_MODULE_0__["DsbMitgliedOverviewComponent"],
        pathMatch: 'full',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["DsbMitgliedOverviewGuard"]]
    },
    { path: 'dsbmitglieder/:id', component: _components__WEBPACK_IMPORTED_MODULE_0__["DsbMitgliedDetailComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["DsbMitgliedDetailGuard"]] },
    {
        path: 'benutzer',
        component: _components__WEBPACK_IMPORTED_MODULE_0__["BenutzerOverviewComponent"],
        pathMatch: 'full',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["BenutzerOverviewGuard"]]
    },
    { path: 'benutzer/add', component: _components__WEBPACK_IMPORTED_MODULE_0__["BenutzerNeuComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["BenutzerNeuGuard"]] },
    { path: 'benutzer/:id', component: _components__WEBPACK_IMPORTED_MODULE_0__["BenutzerDetailComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["BenutzerDetailGuard"]] },
    {
        path: 'dsbmannschaft',
        component: _components__WEBPACK_IMPORTED_MODULE_0__["DsbMannschaftOverviewComponent"],
        pathMatch: 'full',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["DsbMannschaftOverviewGuard"]]
    },
    { path: 'dsbmannschaft/:id', component: _components__WEBPACK_IMPORTED_MODULE_0__["DsbMannschaftDetailComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["DsbMannschaftDetailGuard"]] },
    {
        path: 'klassen',
        component: _components__WEBPACK_IMPORTED_MODULE_0__["WettkampfklasseOverviewComponent"],
        pathMatch: 'full',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["WettkampfklasseOverviewGuard"]]
    },
    { path: 'klassen/:id', component: _components__WEBPACK_IMPORTED_MODULE_0__["WettkampfklasseDetailComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["WettkampfklasseDetailGuard"]] },
    {
        path: 'vereine',
        component: _components__WEBPACK_IMPORTED_MODULE_0__["VereinOverviewComponent"],
        pathMatch: 'full',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["VereinOverviewGuard"]]
    },
    { path: 'vereine/:id', component: _components__WEBPACK_IMPORTED_MODULE_0__["VereinDetailComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["VereinDetailGuard"]] },
    {
        path: 'liga',
        component: _components__WEBPACK_IMPORTED_MODULE_0__["LigaOverviewComponent"],
        pathMatch: 'full',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["LigaOverviewGuard"]]
    },
    { path: 'liga/:id', component: _components__WEBPACK_IMPORTED_MODULE_0__["LigaDetailComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["LigaDetailGuard"]] },
    {
        path: 'sportjahr',
        pathMatch: 'full',
        component: _components__WEBPACK_IMPORTED_MODULE_0__["SportjahrLigaAuswahlComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["SportjahrLigaAuswahlGuard"]]
    },
    {
        path: 'sportjahr/liga',
        pathMatch: 'full',
        component: _components__WEBPACK_IMPORTED_MODULE_0__["LigaOverviewComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["LigaOverviewGuard"]]
    },
    {
        path: 'sportjahr/liga/:id',
        pathMatch: 'full',
        component: _components__WEBPACK_IMPORTED_MODULE_0__["SportjahrOverviewComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["SportjahrOverviewGuard"]]
    }
];


/***/ })

}]);
//# sourceMappingURL=src-app-modules-verwaltung-verwaltung-module.js.map