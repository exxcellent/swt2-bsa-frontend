(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-user-user-module"],{

/***/ "./src/app/modules/user/components/login/login.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/user/components/login/login.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-common-dialog [config]=\"config\">\n\n  <div id=\"login\">\n    <div id=\"login-dialog\">\n\n      <bla-alert [visible]=\"(loginResult === LoginResult.SUCCESS)\"\n                 header=\"{{ 'USER.LOGIN.NOTIFICATION.LOGIN_SUCCESSFUL.HEADER' | translate }}\"\n                 [alertType]=\"AlertType.SUCCESS\">\n        {{ 'USER.LOGIN.NOTIFICATION.LOGIN_SUCCESSFUL.TEXT' | translate }}\n      </bla-alert>\n\n      <bla-alert [visible]=\"(loginResult === LoginResult.FAILURE)\"\n                 header=\"{{ 'USER.LOGIN.NOTIFICATION.LOGIN_FAILURE.HEADER' | translate }}\"\n                 [alertType]=\"AlertType.DANGER\">\n        {{ 'USER.LOGIN.NOTIFICATION.LOGIN_FAILURE.TEXT' | translate }}\n      </bla-alert>\n\n      <bla-alert [visible]=\"(loginResult === LoginResult.CONNECTION_PROBLEM)\"\n                 header=\"{{ 'USER.LOGIN.NOTIFICATION.LOGIN_CONNECTION_PROBLEM.HEADER' | translate }}\"\n                 [alertType]=\"AlertType.WARNING\">\n        {{ 'USER.LOGIN.NOTIFICATION.LOGIN_CONNECTION_PROBLEM.TEXT' | translate }}\n      </bla-alert>\n\n      <div class=\"card mb-4 shadow-sm\">\n        <div class=\"card-body login-dialog\">\n\n          <form id=\"loginForm\"\n                #loginForm=\"ngForm\">\n\n            <!-- Logo -->\n            <div class=\"imgcontainer\">\n              <img src=\"../assets/img/logo.png\"\n                   alt=\"Logo\"\n                   class=\"avatar\">\n\n              <h5 class=\"h3 mb-3 font-weight-normal\">{{ 'USER.LOGIN.HEADER' | translate }}</h5>\n            </div>\n\n            <!-- Input -->\n            <div class=\"container\">\n              <div class=\"form-group\">\n                <label for=\"loginEmail\">{{ 'USER.LOGIN.USERNAME.LABEL' | translate }}</label>\n                <input type=\"email\"\n                       class=\"form-control\"\n                       name=\"loginEmail\"\n                       id=\"loginEmail\"\n                       #loginEmail=\"ngModel\"\n                       [(ngModel)]=\"credentials.username\"\n                       required\n                       pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,63}$\"\n                       [class.is-invalid]=\"(loginEmail.invalid && !loginEmail.untouched) || (loginResult === LoginResult.FAILURE)\"\n                       placeholder=\"{{ 'USER.LOGIN.USERNAME.LABEL' | translate }}\">\n\n                <div class=\"invalid-feedback\">\n                  {{ 'USER.OGIN.USERNAME.ERROR' | translate }}\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"loginPassword\">{{ 'USER.LOGIN.PASSWORD.LABEL' | translate }}</label>\n                <input type=\"password\"\n                       class=\"form-control\"\n                       id=\"loginPassword\"\n                       name=\"loginPassword\"\n                       #loginPassword=\"ngModel\"\n                       [(ngModel)]=\"credentials.password\"\n                       required\n                       minlength=\"3\"\n                       (keyup.enter)=\"onLogin($event)\"\n                       [class.is-invalid]=\"(loginPassword.invalid && !loginPassword.untouched) || (loginResult === LoginResult.FAILURE)\"\n                       placeholder=\"{{ 'USER.LOGIN.PASSWORD.PLACEHOLDER' | translate }}\">\n\n                <div class=\"invalid-feedback\">\n                  {{ 'USER.LOGIN.PASSWORD.ERROR' | translate }}\n                </div>\n              </div>\n\n              <div class=\"form-group form-check\">\n                <input type=\"checkbox\"\n                       class=\"form-check-input\"\n                       id=\"loginRememberMe\"\n                       name=\"loginRememberMe\"\n                       [(ngModel)]=\"credentials.rememberMe\">\n                <label class=\"form-check-label\"\n                       for=\"loginRememberMe\">{{ 'USER.LOGIN.REMEMBER_ME.LABEL' | translate }}</label>\n              </div>\n\n              <bla-button [id]=\"'loginButton'\"\n                          [buttonSize]=\"ButtonSize.LARGE_BLOCK\"\n                          [disabled]=\"!loginForm.valid\"\n                          [loading]=\"loading\"\n                          (onClick)=\"onLogin($event)\">{{ 'USER.LOGIN.BUTTON.LOGIN' | translate }}\n              </bla-button>\n\n            </div>\n          </form>\n\n        </div>\n\n      </div>\n\n      <!-- Shortcut Login only visible if not in prod mode -->\n      <div *ngIf=\"!(inProd === true)\">\n        <bla-alert header=\"Testbenutzer:\"\n                   [alertType]=\"AlertType.INFO\">\n          <p>Username: admin@bogenliga.de <br>Password: admin<br>Rolle: ADMIN<br>\n            <bla-button [buttonSize]=\"ButtonSize.SMALL\"\n                        [value]=\"testAdminUser\"\n                        (onClick)=\"onAutoLogin($event)\">Login als Admin\n            </bla-button>\n          </p>\n          <p>Username: moderator@bogenliga.de <br>Password: moderator<br>Rolle: MODERATOR<br>\n            <bla-button [buttonSize]=\"ButtonSize.SMALL\"\n                        [value]=\"testModeratorUser\"\n                        (onClick)=\"onAutoLogin($event)\">Login als Moderator\n            </bla-button>\n          </p>\n          <p>Username: user@bogenliga.de <br>Password: user <br>Rolle: USER<br>\n            <bla-button [buttonSize]=\"ButtonSize.SMALL\"\n                        [value]=\"testUserUser\"\n                        (onClick)=\"onAutoLogin($event)\">Login als User\n            </bla-button>\n          </p>\n          <p>Username: Malorie.Artman@bogenliga.de <br>Password: swt2 <br>Rolle: USER<br>\n            <bla-button [buttonSize]=\"ButtonSize.SMALL\"\n                        [value]=\"testDummyUserUser\"\n                        (onClick)=\"onAutoLogin($event)\">Login als Test-Benutzer\n            </bla-button>\n          </p>\n          <p>Username: Nicholas.Corle@bogenliga.de <br>Password: swt2 <br>Rolle: MODERATOR<br>\n            <bla-button [buttonSize]=\"ButtonSize.SMALL\"\n                        [value]=\"testDummyModeratorUser\"\n                        (onClick)=\"onAutoLogin($event)\">Login als Test-Moderator\n            </bla-button>\n          </p>\n        </bla-alert>\n      </div>\n    </div>\n\n  </div>\n\n</bla-common-dialog>\n"

/***/ }),

/***/ "./src/app/modules/user/components/login/login.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/user/components/login/login.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Farbkonzept Website */\n#login {\n  display: flex;\n  justify-content: center; }\n#login-dialog {\n  width: 500px;\n  max-width: 500px; }\n/* Center the avatar image inside this container */\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0; }\n/* Avatar image */\nimg.avatar {\n  width: 40%;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvdXNlci9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdCQUFBO0FBU0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7QUFHekI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7QUFHbEIsa0RBQUE7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTtBQUd2QixpQkFBQTtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGYXJia29uemVwdCBXZWJzaXRlICovXG4kcHJpbWFyeTogIzAyYmRkNTsgLy8gTGlua3MsIE5hdmJhclxuJHByaW1hcnktbGlnaHQ6ICNiNGZmZmY7IC8vIFNpZGViYXItQmFja2dyb3VuZFxuJHByaW1hcnktZGFyazogIzAwN2M5MTsgLy8gU2lkZWJhci1Gb250XG4kc2Vjb25kYXJ5OiAjZmZjMTA3OyAvLyBob3ZlciBUYWJsZXNcbiRzZWNvbmRhcnktbGlnaHQ6ICNmZmYzNTA7XG4kc2Vjb25kYXJ5LWRhcms6ICNmZjgzM2E7IC8vIGhvdmVyIExpbmtzLCBMb2dvXG5cbi8vIExvZ2luIFN0bHllXG4jbG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2xvZ2luLWRpYWxvZyB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLyogQ2VudGVyIHRoZSBhdmF0YXIgaW1hZ2UgaW5zaWRlIHRoaXMgY29udGFpbmVyICovXG4uaW1nY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XG59XG5cbi8qIEF2YXRhciBpbWFnZSAqL1xuaW1nLmF2YXRhciB7XG4gIHdpZHRoOiA0MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/modules/user/components/login/login.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/user/components/login/login.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_components_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/alerts */ "./src/app/modules/shared/components/alerts/index.ts");
/* harmony import */ var _shared_components_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/buttons */ "./src/app/modules/shared/components/buttons/index.ts");
/* harmony import */ var _services_login_data_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/login-data-provider.service */ "./src/app/modules/user/services/login-data-provider.service.ts");
/* harmony import */ var _types_credentials_do_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../types/credentials-do.class */ "./src/app/modules/user/types/credentials-do.class.ts");
/* harmony import */ var _types_login_result_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../types/login-result.enum */ "./src/app/modules/user/types/login-result.enum.ts");
/* harmony import */ var _login_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login.config */ "./src/app/modules/user/components/login/login.config.ts");











var LOGIN_REDIRECT_QUERY_PARAM = 'destination';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginDataProviderService, route, router) {
        this.loginDataProviderService = loginDataProviderService;
        this.route = route;
        this.router = router;
        this.credentials = new _types_credentials_do_class__WEBPACK_IMPORTED_MODULE_8__["CredentialsDO"]();
        this.loading = false;
        this.loginResult = _types_login_result_enum__WEBPACK_IMPORTED_MODULE_9__["LoginResult"].PENDING;
        this.ButtonSize = _shared_components_buttons__WEBPACK_IMPORTED_MODULE_6__["ButtonSize"];
        this.AlertType = _shared_components_alerts__WEBPACK_IMPORTED_MODULE_5__["AlertType"];
        this.LoginResult = _types_login_result_enum__WEBPACK_IMPORTED_MODULE_9__["LoginResult"];
        this.inProd = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production;
        // TODO: remove after development
        this.testAdminUser = new _types_credentials_do_class__WEBPACK_IMPORTED_MODULE_8__["CredentialsDO"]('admin@bogenliga.de', 'admin');
        this.testModeratorUser = new _types_credentials_do_class__WEBPACK_IMPORTED_MODULE_8__["CredentialsDO"]('moderator@bogenliga.de', 'moderator');
        this.testUserUser = new _types_credentials_do_class__WEBPACK_IMPORTED_MODULE_8__["CredentialsDO"]('user@bogenliga.de', 'user');
        this.testDummyModeratorUser = new _types_credentials_do_class__WEBPACK_IMPORTED_MODULE_8__["CredentialsDO"]('Nicholas.Corle@bogenliga.de', 'swt2');
        this.testDummyUserUser = new _types_credentials_do_class__WEBPACK_IMPORTED_MODULE_8__["CredentialsDO"]('Malorie.Artman@bogenliga.de', 'swt2');
        // TODO: remove after development
        this.config = _login_config__WEBPACK_IMPORTED_MODULE_10__["USER_LOGIN_CONFIG"];
        this.destinationRouteAfterLogin = '/home';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(params[LOGIN_REDIRECT_QUERY_PARAM])) {
                _this.destinationRouteAfterLogin = params[LOGIN_REDIRECT_QUERY_PARAM];
            }
        });
        this.initRememberedUsername();
    };
    /**
     * I send the login credentials to the backend sign in service.
     *
     * Show a success notification and redirect to the destination route from the url query parameter.
     *
     * On error, show an error notification.
     *
     * @param $event ignore
     */
    LoginComponent.prototype.onLogin = function ($event) {
        var _this = this;
        this.loading = true;
        this.loginDataProviderService.signIn(this.credentials)
            .then(function () { return _this.handleSuccessfulLogin(); }, function (loginResult) { return _this.showFailedLogin(loginResult); });
    };
    // TODO: remove after development
    LoginComponent.prototype.onAutoLogin = function ($event) {
        this.credentials = $event;
        this.onLogin(null);
    };
    LoginComponent.prototype.initRememberedUsername = function () {
        this.credentials.username = this.loginDataProviderService.getEmailAddress();
        if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(this.credentials.username)) {
            this.credentials.rememberMe = true;
        }
    };
    LoginComponent.prototype.showFailedLogin = function (loginResult) {
        this.loading = false;
        this.loginResult = loginResult;
    };
    LoginComponent.prototype.handleSuccessfulLogin = function () {
        this.loading = false;
        this.loginResult = _types_login_result_enum__WEBPACK_IMPORTED_MODULE_9__["LoginResult"].SUCCESS;
        this.router.navigateByUrl(this.destinationRouteAfterLogin);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/user/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/user/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_data_provider_service__WEBPACK_IMPORTED_MODULE_7__["LoginDataProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/components/login/login.config.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/user/components/login/login.config.ts ***!
  \***************************************************************/
/*! exports provided: USER_LOGIN_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGIN_CONFIG", function() { return USER_LOGIN_CONFIG; });
var USER_LOGIN_CONFIG = {
    moduleTranslationKey: 'USER',
    pageTitleTranslationKey: 'USER.LOGIN.TITLE'
};


/***/ }),

/***/ "./src/app/modules/user/components/user-profile/user-profile.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/user/components/user-profile/user-profile.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-common-dialog [config]=\"config\"\n                   [loading]=\"loading\">\n\n  <form id=\"userProfileForm\"\n        class=\"horizontal-form half-page\"\n        #userProfileForm=\"ngForm\">\n\n    <!-- VORNAME -->\n    <div class=\"form-group row\">\n      <label for=\"userProfileVorname\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'USER.PROFILE.FORM.VORNAME.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               readonly\n               class=\"form-control-plaintext\"\n               id=\"userProfileVorname\"\n               name=\"userProfileVorname\"\n               #userProfileVorname=\"ngModel\"\n               [(ngModel)]=\"currentUserProfile.vorname\"\n               [class.is-invalid]=\"userProfileVorname.invalid && !userProfileVorname.untouched\"\n               placeholder=\"{{ 'USER.PROFILE.FORM.VORNAME.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'USER.PROFILE.FORM.VORNAME.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <!-- NACHNAME -->\n    <div class=\"form-group row\">\n      <label for=\"userProfileNachname\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'USER.PROFILE.FORM.NACHNAME.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               readonly\n               class=\"form-control-plaintext\"\n               id=\"userProfileNachname\"\n               name=\"userProfileNachname\"\n               #userProfileNachname=\"ngModel\"\n               [(ngModel)]=\"currentUserProfile.nachname\"\n               [class.is-invalid]=\"userProfileNachname.invalid && !userProfileNachname.untouched\"\n               placeholder=\"{{ 'USER.PROFILE.FORM.NACHNAME.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'USER.PROFILE.FORM.NACHNAME.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <!-- EMAIL -->\n    <div class=\"form-group row\">\n      <label for=\"userProfileEmail\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'USER.PROFILE.FORM.EMAIL.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               readonly\n               class=\"form-control-plaintext\"\n               id=\"userProfileEmail\"\n               name=\"userProfileEmail\"\n               #userProfileEmail=\"ngModel\"\n               [(ngModel)]=\"currentUserProfile.email\"\n               [class.is-invalid]=\"userProfileEmail.invalid && !userProfileEmail.untouched\"\n               placeholder=\"{{ 'USER.PROFILE.FORM.EMAIL.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'USER.PROFILE.FORM.EMAIL.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <!-- GEBURTSDATUM -->\n    <div class=\"form-group row\">\n      <label for=\"userProfileGeburtsdatum\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'USER.PROFILE.FORM.GEBURTSDATUM.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               readonly\n               class=\"form-control-plaintext\"\n               pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\"\n               id=\"userProfileGeburtsdatum\"\n               name=\"userProfileGeburtsdatum\"\n               #userProfileGeburtsdatum=\"ngModel\"\n               [(ngModel)]=\"currentUserProfile.geburtsdatum\"\n               [class.is-invalid]=\"userProfileGeburtsdatum.invalid && !userProfileGeburtsdatum.untouched\"\n               placeholder=\"{{ 'USER.PROFILE.FORM.GEBURTSDATUM.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'USER.PROFILE.FORM.GEBURTSDATUM.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n\n    <!-- MITGLIEDSNUMMER -->\n    <div class=\"form-group row\">\n      <label for=\"userProfileMitgliedsnummer\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'USER.PROFILE.FORM.MITGLIEDSNUMMER.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               readonly\n               class=\"form-control-plaintext\"\n               id=\"userProfileMitgliedsnummer\"\n               name=\"userProfileMitgliedsnummer\"\n               #userProfileMitgliedsnummer=\"ngModel\"\n               [(ngModel)]=\"currentUserProfile.mitgliedsnummer\"\n               [class.is-invalid]=\"userProfileMitgliedsnummer.invalid && !userProfileMitgliedsnummer.untouched\"\n               placeholder=\"{{ 'USER.PROFILE.FORM.MITGLIEDSNUMMER.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'USER.PROFILE.FORM.MITGLIEDSNUMMER.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <!-- NATIONALITAET -->\n    <div class=\"form-group row\">\n      <label for=\"userProfileNationalitaet\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'USER.PROFILE.FORM.NATIONALITAET.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               readonly\n               class=\"form-control-plaintext\"\n               pattern=\"[D|AT|CH|FR|IT|GB]\"\n               id=\"userProfileNationalitaet\"\n               name=\"userProfileNationalitaet\"\n               #userProfileNationalitaet=\"ngModel\"\n               [(ngModel)]=\"currentUserProfile.nationalitaet\"\n               [class.is-invalid]=\"userProfileNationalitaet.invalid && !userProfileNationalitaet.untouched\"\n               placeholder=\"{{ 'USER.PROFILE.FORM.NATIONALITAET.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'USER.PROFILE.FORM.NATIONALITAET.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n\n    <!-- TODO: VEREIN ID, use dropdown list -->\n    <div class=\"form-group row\">\n      <label for=\"userProfileVerein\"\n             class=\"col-sm-3 col-form-label\">\n        <span>{{ 'USER.PROFILE.FORM.VEREIN.LABEL' | translate }}</span>\n        <span> *</span>\n      </label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\"\n               readonly\n               class=\"form-control-plaintext\"\n               id=\"userProfileVerein\"\n               name=\"userProfileVerein\"\n               #userProfileVerein=\"ngModel\"\n               [(ngModel)]=\"currentUserProfile.vereinsId\"\n               [class.is-invalid]=\"userProfileVerein.invalid && !userProfileVerein.untouched\"\n               placeholder=\"{{ 'USER.PROFILE.FORM.VEREIN.PLACEHOLDER' | translate }}\">\n\n        <div class=\"invalid-feedback\">\n          {{ 'USER.PROFILE.FORM.VEREIN.ERROR' | translate }}\n        </div>\n      </div>\n    </div>\n  </form>\n\n</bla-common-dialog>\n"

/***/ }),

/***/ "./src/app/modules/user/components/user-profile/user-profile.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/user/components/user-profile/user-profile.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".half-page {\n  width: 50%; }\n\n.button-box {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  flex-wrap: wrap; }\n\n@media (max-width: 1400px) {\n  .half-page {\n    width: 80%; } }\n\n@media (max-width: 950px) {\n  .half-page {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvdXNlci9jb21wb25lbnRzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixlQUFlLEVBQUE7O0FBSWpCO0VBRUU7SUFDRSxVQUFVLEVBQUEsRUFDWDs7QUFLSDtFQUVFO0lBQ0UsV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXIvY29tcG9uZW50cy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbGYtcGFnZSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5idXR0b24tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcblxuICAuaGFsZi1wYWdlIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbn1cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuXG4gIC5oYWxmLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/user/components/user-profile/user-profile.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/user/components/user-profile/user-profile.component.ts ***!
  \********************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components */ "./src/app/modules/shared/components/index.ts");
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _services_user_profile_data_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-profile-data-provider.service */ "./src/app/modules/user/services/user-profile-data-provider.service.ts");
/* harmony import */ var _types_user_profile_do_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types/user-profile-do.class */ "./src/app/modules/user/types/user-profile-do.class.ts");
/* harmony import */ var _user_profile_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profile.config */ "./src/app/modules/user/components/user-profile/user-profile.config.ts");








var UserProfileComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserProfileComponent, _super);
    function UserProfileComponent(userProfileDataProvider, router, route, notificationService) {
        var _this = _super.call(this) || this;
        _this.userProfileDataProvider = userProfileDataProvider;
        _this.router = router;
        _this.route = route;
        _this.notificationService = notificationService;
        _this.config = _user_profile_config__WEBPACK_IMPORTED_MODULE_7__["USER_PROFILE_CONFIG"];
        _this.ButtonType = _shared_components__WEBPACK_IMPORTED_MODULE_3__["ButtonType"];
        _this.currentUserProfile = new _types_user_profile_do_class__WEBPACK_IMPORTED_MODULE_6__["UserProfileDO"]();
        return _this;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.notificationService.discardNotification();
        this.loadCurrentUserProfile();
    };
    UserProfileComponent.prototype.loadCurrentUserProfile = function () {
        var _this = this;
        this.userProfileDataProvider.findCurrentUserProfile()
            .then(function (response) { return _this.handleSuccess(response); })
            .catch(function (response) { return _this.handleFailure(response); });
    };
    UserProfileComponent.prototype.handleSuccess = function (response) {
        this.currentUserProfile = response.payload;
        this.loading = false;
    };
    UserProfileComponent.prototype.handleFailure = function (response) {
        this.loading = false;
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/modules/user/components/user-profile/user-profile.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/modules/user/components/user-profile/user-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_profile_data_provider_service__WEBPACK_IMPORTED_MODULE_5__["UserProfileDataProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_notification__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}(_shared_components__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/user/components/user-profile/user-profile.config.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user/components/user-profile/user-profile.config.ts ***!
  \*****************************************************************************/
/*! exports provided: USER_PROFILE_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PROFILE_CONFIG", function() { return USER_PROFILE_CONFIG; });
var USER_PROFILE_CONFIG = {
    moduleTranslationKey: 'USER',
    pageTitleTranslationKey: 'USER.PROFILE.TITLE'
};


/***/ }),

/***/ "./src/app/modules/user/components/user-pwd/user-pwd.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/user/components/user-pwd/user-pwd.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-common-dialog [config]=\"config\">\n\n  <div id=\"pwd\">\n    <div id=\"userPwd-dialog\">\n\n      <bla-alert [visible]=\"(loginResult === LoginResult.SUCCESS)\"\n                 header=\"{{ 'USER.PWD.NOTIFICATION.PWD_SUCCESSFUL.HEADER' | translate }}\"\n                 [alertType]=\"AlertType.SUCCESS\">\n        {{ 'USER.PWD.NOTIFICATION.PWD_SUCCESSFUL.TEXT' | translate }}\n      </bla-alert>\n\n      <bla-alert [visible]=\"(loginResult === LoginResult.FAILURE)\"\n                 header=\"{{ 'USER.PWD.NOTIFICATION.PWD_FAILURE.HEADER' | translate }}\"\n                 [alertType]=\"AlertType.DANGER\">\n        {{ 'USER.PWD.NOTIFICATION.PWD_FAILURE.TEXT' | translate }}\n      </bla-alert>\n\n      <bla-alert [visible]=\"(loginResult === LoginResult.CONNECTION_PROBLEM)\"\n                 header=\"{{ 'USER.PWD.NOTIFICATION.PWD_CONNECTION_PROBLEM.HEADER' | translate }}\"\n                 [alertType]=\"AlertType.WARNING\">\n        {{ 'USER.PWD.NOTIFICATION.PWD_CONNECTION_PROBLEM.TEXT' | translate }}\n      </bla-alert>\n\n      <div class=\"card mb-4 shadow-sm\">\n        <div class=\"card-body userPwd-dialog\">\n\n          <form id=\"userPwdForm\"\n                #userPwdForm=\"ngForm\">\n\n            <!-- Logo -->\n            <div class=\"imgcontainer\">\n              <img src=\"../assets/img/logo.png\"\n                   alt=\"Logo\"\n                   class=\"avatar\">\n\n            </div>\n\n            <!-- Input -->\n            <div class=\"container\">\n              <div class=\"form-group\">\n                <label for=\"userPwdFormPassword\">{{ 'USER.PWD.FORM.PASSWORD.LABEL' | translate }}</label>\n                <input type=\"password\"\n                       class=\"form-control\"\n                       id=\"userPwdFormPassword\"\n                       name=\"userPwdFormPassword\"\n                       #userPwdFormPassword=\"ngModel\"\n                       [(ngModel)]=\"changeCredentials.password\"\n                       required\n                       [class.is-invalid]=\"(userPwdFormPassword.invalid && !userPwdFormPassword.untouched)\"\n                       placeholder=\"{{ 'USER.PWD.FORM.PASSWORD.PLACEHOLDER' | translate }}\">\n\n                <div class=\"invalid-feedback\">\n                  {{ 'USER.PWD.FORM.PASSWORD.ERROR' | translate }}\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"userPwdFormNewPwd\">{{ 'USER.PWD.FORM.NEWPASSWORD.LABEL' | translate }}</label>\n                <input type=\"password\"\n                       class=\"form-control\"\n                       required\n                       minlength=\"8\"\n                       pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$\"\n                       id=\"userPwdFormNewPwd\"\n                       name=\"userPwdFormNewPwd\"\n                       #userPwdFormNewPwd=\"ngModel\"\n                       [(ngModel)]=\"changeCredentials.newPassword\"\n                       [class.is-invalid]=\"(userPwdFormNewPwd.invalid && !userPwdFormNewPwd.untouched)\"\n                       placeholder=\"{{ 'USER.PWD.FORM.NEWPASSWORD.PLACEHOLDER' | translate }}\">\n\n                <div class=\"invalid-feedback\">\n                  {{ 'USER.PWD.FORM.NEWPASSWORD.ERROR' | translate }}\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"userPwdFormVerifyPwd\">{{ 'USER.PWD.FORM.VERIFYPASSWORD.LABEL' | translate }}</label>\n                <input type=\"password\"\n                       class=\"form-control\"\n                       id=\"userPwdFormVerifyPwd\"\n                       name=\"userPwdFormVerifyPwd\"\n                       #userPwdFormVerifyPwd=\"ngModel\"\n                       [(ngModel)]=\"changeCredentials.verifyPassword\"\n                       required\n                       minlength=\"8\"\n                       [class.is-invalid]=\"userPwdFormVerifyPwd.value != userPwdFormNewPwd.value\"\n                       placeholder=\"{{ 'USER.PWD.FORM.VERIFYPASSWORD.PLACEHOLDER' | translate }}\">\n\n                <div class=\"invalid-feedback\">\n                  {{ 'USER.PWD.FORM.VERIFYPASSWORD.ERROR' | translate }}\n                </div>\n              </div>\n\n              <bla-button\n                [id]=\"'userPwdUpdateButton'\"\n                [disabled]=\"!userPwdForm.valid\"\n                (onClick)=\"onUpdate($event)\">{{ 'USER.PWD.FORM.UPDATE' | translate }}\n              </bla-button>\n\n            </div>\n          </form>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n</bla-common-dialog>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/modules/user/components/user-pwd/user-pwd.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/user/components/user-pwd/user-pwd.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Farbkonzept Website */\n#pwd {\n  display: flex;\n  justify-content: center; }\n#userPwd-dialog {\n  width: 500px;\n  max-width: 500px; }\n/* Center the avatar image inside this container */\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0; }\n/* Avatar image */\nimg.avatar {\n  width: 40%;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvdXNlci9jb21wb25lbnRzL3VzZXItcHdkL3VzZXItcHdkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdCQUFBO0FBU0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7QUFHekI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7QUFHbEIsa0RBQUE7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTtBQUd2QixpQkFBQTtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyL2NvbXBvbmVudHMvdXNlci1wd2QvdXNlci1wd2QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGYXJia29uemVwdCBXZWJzaXRlICovXG4kcHJpbWFyeTogIzAyYmRkNTsgLy8gTGlua3MsIE5hdmJhclxuJHByaW1hcnktbGlnaHQ6ICNiNGZmZmY7IC8vIFNpZGViYXItQmFja2dyb3VuZFxuJHByaW1hcnktZGFyazogIzAwN2M5MTsgLy8gU2lkZWJhci1Gb250XG4kc2Vjb25kYXJ5OiAjZmZjMTA3OyAvLyBob3ZlciBUYWJsZXNcbiRzZWNvbmRhcnktbGlnaHQ6ICNmZmYzNTA7XG4kc2Vjb25kYXJ5LWRhcms6ICNmZjgzM2E7IC8vIGhvdmVyIExpbmtzLCBMb2dvXG5cbi8vIExvZ2luIFN0bHllXG4jcHdkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiN1c2VyUHdkLWRpYWxvZyB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLyogQ2VudGVyIHRoZSBhdmF0YXIgaW1hZ2UgaW5zaWRlIHRoaXMgY29udGFpbmVyICovXG4uaW1nY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XG59XG5cbi8qIEF2YXRhciBpbWFnZSAqL1xuaW1nLmF2YXRhciB7XG4gIHdpZHRoOiA0MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/user/components/user-pwd/user-pwd.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/user/components/user-pwd/user-pwd.component.ts ***!
  \************************************************************************/
/*! exports provided: UserPwdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPwdComponent", function() { return UserPwdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/alerts */ "./src/app/modules/shared/components/alerts/index.ts");
/* harmony import */ var _services_user_pwd_data_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-pwd-data-provider.service */ "./src/app/modules/user/services/user-pwd-data-provider.service.ts");
/* harmony import */ var _types_changecredentials_do_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types/changecredentials-do.class */ "./src/app/modules/user/types/changecredentials-do.class.ts");
/* harmony import */ var _types_login_result_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types/login-result.enum */ "./src/app/modules/user/types/login-result.enum.ts");
/* harmony import */ var _user_pwd_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-pwd.config */ "./src/app/modules/user/components/user-pwd/user-pwd.config.ts");







var UserPwdComponent = /** @class */ (function () {
    //  public loading = false;
    function UserPwdComponent(userPwdDataProvider) {
        this.userPwdDataProvider = userPwdDataProvider;
        this.config = _user_pwd_config__WEBPACK_IMPORTED_MODULE_6__["USER_PWD_CONFIG"];
        this.changeCredentials = new _types_changecredentials_do_class__WEBPACK_IMPORTED_MODULE_4__["ChangeCredentialsDO"]();
        this.loginResult = _types_login_result_enum__WEBPACK_IMPORTED_MODULE_5__["LoginResult"].PENDING;
        this.LoginResult = _types_login_result_enum__WEBPACK_IMPORTED_MODULE_5__["LoginResult"];
        this.AlertType = _shared_components_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertType"];
    }
    UserPwdComponent.prototype.ngOnInit = function () {
    };
    UserPwdComponent.prototype.onUpdate = function (ignore) {
        //    this.loading = true;
        var _this = this;
        // persist
        this.userPwdDataProvider.update(this.changeCredentials)
            .then(function () { return _this.handleSuccessUpdate(); }, function (loginResult) { return _this.showFailedUpdate(loginResult); });
    };
    UserPwdComponent.prototype.showFailedUpdate = function (loginResult) {
        //    this.loading = false;
        this.loginResult = loginResult;
    };
    UserPwdComponent.prototype.handleSuccessUpdate = function () {
        //    this.loading = false;
        this.loginResult = _types_login_result_enum__WEBPACK_IMPORTED_MODULE_5__["LoginResult"].SUCCESS;
    };
    UserPwdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-user-pwd',
            template: __webpack_require__(/*! ./user-pwd.component.html */ "./src/app/modules/user/components/user-pwd/user-pwd.component.html"),
            styles: [__webpack_require__(/*! ./user-pwd.component.scss */ "./src/app/modules/user/components/user-pwd/user-pwd.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_pwd_data_provider_service__WEBPACK_IMPORTED_MODULE_3__["UserPwdDataProviderService"]])
    ], UserPwdComponent);
    return UserPwdComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/components/user-pwd/user-pwd.config.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/user/components/user-pwd/user-pwd.config.ts ***!
  \*********************************************************************/
/*! exports provided: USER_PWD_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PWD_CONFIG", function() { return USER_PWD_CONFIG; });
var USER_PWD_CONFIG = {
    moduleTranslationKey: 'USER',
    pageTitleTranslationKey: 'USER.PWD.TITLE'
};


/***/ }),

/***/ "./src/app/modules/user/guards/user.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/user/guards/user.guard.ts ***!
  \***************************************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");



var UserGuard = /** @class */ (function () {
    function UserGuard(currentUserService) {
        this.currentUserService = currentUserService;
    }
    UserGuard.prototype.canActivate = function () {
        return true;
    };
    UserGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_current_user__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]])
    ], UserGuard);
    return UserGuard;
}());



/***/ }),

/***/ "./src/app/modules/user/services/login-data-provider.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/user/services/login-data-provider.service.ts ***!
  \**********************************************************************/
/*! exports provided: LoginDataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDataProviderService", function() { return LoginDataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_redux_store_feature_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/redux-store/feature/user */ "./src/app/modules/shared/redux-store/feature/user/index.ts");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _types_login_result_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types/login-result.enum */ "./src/app/modules/user/types/login-result.enum.ts");
/* harmony import */ var _types_model_credentials_dto_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types/model/credentials-dto.class */ "./src/app/modules/user/types/model/credentials-dto.class.ts");








var LoginDataProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginDataProviderService, _super);
    /**
     * Constructor with dependency injection
     *
     * @param restClient service for all REST requests
     * @param currentUserService to handle all actions with the current user
     * @param store to access the application state managed by the redux store
     */
    function LoginDataProviderService(restClient, currentUserService, store) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.currentUserService = currentUserService;
        _this.store = store;
        /*
         * define common REST service url for all requests in this data provider
         */
        _this.serviceSubUrl = 'v1/user/signin';
        return _this;
    }
    /**
     * I send a sign in request to the backend.
     *
     * On a successful sign in, the user data will be stored with the {@code CurrentUserService}.
     *
     * @param credentialsDO with the sign in payload
     * @return Promise with
     * resolve(), if the request was successful
     * reject(), if an error occurred
     */
    LoginDataProviderService.prototype.signIn = function (credentialsDO) {
        var _this = this;
        // check remember me flag
        if (credentialsDO.rememberMe) {
            this.currentUserService.rememberUsername(credentialsDO.username);
        }
        else {
            this.currentUserService.forgetUsername();
        }
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            var credentialsDTO = new _types_model_credentials_dto_class__WEBPACK_IMPORTED_MODULE_7__["CredentialsDTO"](credentialsDO.username, credentialsDO.password);
            _this.sendSignInRequest(credentialsDTO, resolve, reject);
        });
    };
    LoginDataProviderService.prototype.getEmailAddress = function () {
        return this.currentUserService.getRememberedUsername();
    };
    /**
     * I send the request and handle the response
     */
    LoginDataProviderService.prototype.sendSignInRequest = function (credentialsDTO, resolve, reject) {
        var _this = this;
        this.restClient.POST(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_3__["UriBuilder"]().fromPath(this.getUrl()).build(), credentialsDTO)
            .then(function (data) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            _this.currentUserService.persistCurrentUser(data);
            resolve(_types_login_result_enum__WEBPACK_IMPORTED_MODULE_6__["LoginResult"].SUCCESS);
        }, function (error) {
            _this.store.dispatch({ type: _shared_redux_store_feature_user__WEBPACK_IMPORTED_MODULE_4__["LOGOUT"], user: null });
            _this.currentUserService.logout();
            if (error.status === 0) {
                reject(_types_login_result_enum__WEBPACK_IMPORTED_MODULE_6__["LoginResult"].CONNECTION_PROBLEM);
            }
            else {
                reject(_types_login_result_enum__WEBPACK_IMPORTED_MODULE_6__["LoginResult"].FAILURE);
            }
        });
    };
    LoginDataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_3__["RestClient"],
            _shared_services_current_user__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], LoginDataProviderService);
    return LoginDataProviderService;
}(_shared_data_provider__WEBPACK_IMPORTED_MODULE_3__["DataProviderService"]));



/***/ }),

/***/ "./src/app/modules/user/services/user-pwd-data-provider.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/user/services/user-pwd-data-provider.service.ts ***!
  \*************************************************************************/
/*! exports provided: UserPwdDataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPwdDataProviderService", function() { return UserPwdDataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _types_model_changecredentials_dto_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/model/changecredentials-dto.class */ "./src/app/modules/user/types/model/changecredentials-dto.class.ts");




var UserPwdDataProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserPwdDataProviderService, _super);
    function UserPwdDataProviderService(restClient) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.serviceSubUrl = 'v1/user';
        return _this;
    }
    UserPwdDataProviderService.prototype.update = function (changeCredentialsDO) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var changeCredentialsDTO = new _types_model_changecredentials_dto_class__WEBPACK_IMPORTED_MODULE_3__["ChangeCredentialsDTO"](changeCredentialsDO.password, changeCredentialsDO.newPassword);
            _this.sendupdaterequest(changeCredentialsDTO, resolve, reject);
        });
    };
    UserPwdDataProviderService.prototype.sendupdaterequest = function (changeCredentialsDTO, resolve, reject) {
        this.restClient.PUT(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(this.getUrl()).build(), changeCredentialsDTO)
            .then(function (data) {
            resolve(_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS);
        }, function (error) {
            if (error.status === 0) {
                reject({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].CONNECTION_PROBLEM });
            }
            else {
                reject({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].FAILURE });
            }
        });
    };
    UserPwdDataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"]])
    ], UserPwdDataProviderService);
    return UserPwdDataProviderService;
}(_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]));



/***/ }),

/***/ "./src/app/modules/user/types/changecredentials-do.class.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/user/types/changecredentials-do.class.ts ***!
  \******************************************************************/
/*! exports provided: ChangeCredentialsDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeCredentialsDO", function() { return ChangeCredentialsDO; });
var ChangeCredentialsDO = /** @class */ (function () {
    function ChangeCredentialsDO(password, newPassword) {
        this.password = !!password ? password : '';
        this.newPassword = !!newPassword ? newPassword : '';
        this.verifyPassword = !!newPassword ? newPassword : '';
    }
    return ChangeCredentialsDO;
}());



/***/ }),

/***/ "./src/app/modules/user/types/login-result.enum.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/user/types/login-result.enum.ts ***!
  \*********************************************************/
/*! exports provided: LoginResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginResult", function() { return LoginResult; });
var LoginResult;
(function (LoginResult) {
    LoginResult[LoginResult["PENDING"] = 0] = "PENDING";
    LoginResult[LoginResult["SUCCESS"] = 1] = "SUCCESS";
    LoginResult[LoginResult["FAILURE"] = 2] = "FAILURE";
    LoginResult[LoginResult["CONNECTION_PROBLEM"] = 3] = "CONNECTION_PROBLEM";
})(LoginResult || (LoginResult = {}));


/***/ }),

/***/ "./src/app/modules/user/types/model/changecredentials-dto.class.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/user/types/model/changecredentials-dto.class.ts ***!
  \*************************************************************************/
/*! exports provided: ChangeCredentialsDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeCredentialsDTO", function() { return ChangeCredentialsDTO; });
var ChangeCredentialsDTO = /** @class */ (function () {
    function ChangeCredentialsDTO(password, newPassword) {
        this.password = password;
        this.newPassword = newPassword;
    }
    return ChangeCredentialsDTO;
}());



/***/ }),

/***/ "./src/app/modules/user/user.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/user/user.module.ts ***!
  \*********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/modules/shared/index.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/modules/user/components/login/login.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/modules/user/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_user_pwd_user_pwd_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-pwd/user-pwd.component */ "./src/app/modules/user/components/user-pwd/user-pwd.component.ts");
/* harmony import */ var _guards_user_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/user.guard */ "./src/app/modules/user/guards/user.guard.ts");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user.routing */ "./src/app/modules/user/user.routing.ts");











var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_user_routing__WEBPACK_IMPORTED_MODULE_10__["USER_ROUTES"]),
                _shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forChild(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"], _components_user_pwd_user_pwd_component__WEBPACK_IMPORTED_MODULE_8__["UserPwdComponent"]],
            providers: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_9__["UserGuard"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/modules/user/user.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/user/user.routing.ts ***!
  \**********************************************/
/*! exports provided: USER_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ROUTES", function() { return USER_ROUTES; });
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/modules/user/components/login/login.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/modules/user/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_user_pwd_user_pwd_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user-pwd/user-pwd.component */ "./src/app/modules/user/components/user-pwd/user-pwd.component.ts");
/* harmony import */ var _guards_user_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/user.guard */ "./src/app/modules/user/guards/user.guard.ts");




var USER_ROUTES = [
    { path: 'profile', pathMatch: 'full', component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"], canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_3__["UserGuard"]] },
    { path: 'pwd', pathMatch: 'full', component: _components_user_pwd_user_pwd_component__WEBPACK_IMPORTED_MODULE_2__["UserPwdComponent"], canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_3__["UserGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"], canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_3__["UserGuard"]] },
];


/***/ })

}]);
//# sourceMappingURL=src-app-modules-user-user-module.js.map