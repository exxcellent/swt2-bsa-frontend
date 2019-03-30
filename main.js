(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/app/modules/playground/playground.module": [
		"./src/app/modules/playground/playground.module.ts",
		"src-app-modules-playground-playground-module"
	],
	"src/app/modules/settings/settings.module": [
		"./src/app/modules/settings/settings.module.ts",
		"src-app-modules-settings-settings-module"
	],
	"src/app/modules/sportjahresplan/sportjahresplan.module": [
		"./src/app/modules/sportjahresplan/sportjahresplan.module.ts",
		"src-app-modules-sportjahresplan-sportjahresplan-module"
	],
	"src/app/modules/user/user.module": [
		"./src/app/modules/user/user.module.ts",
		"common",
		"src-app-modules-user-user-module"
	],
	"src/app/modules/vereine/vereine.module": [
		"./src/app/modules/vereine/vereine.module.ts",
		"default~src-app-modules-vereine-vereine-module~src-app-modules-verwaltung-verwaltung-module",
		"common",
		"src-app-modules-vereine-vereine-module"
	],
	"src/app/modules/verwaltung/verwaltung.module": [
		"./src/app/modules/verwaltung/verwaltung.module.ts",
		"default~src-app-modules-vereine-vereine-module~src-app-modules-verwaltung-verwaltung-module",
		"common",
		"src-app-modules-verwaltung-verwaltung-module"
	],
	"src/app/modules/wettkampf/wettkampf.module": [
		"./src/app/modules/wettkampf/wettkampf.module.ts",
		"src-app-modules-wettkampf-wettkampf-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <!-- NavBar  -->\n  <bla-navbar></bla-navbar>\n\n  <!-- Sidebar  -->\n  <bla-sidebar></bla-sidebar>\n\n  <!-- Page Content -->\n  <div class=\"content {{isActive? 'inactive' : ''}}\"\n       style=\"display: flex; flex-direction: column\">\n\n    <div id=\"content-without-footer\">\n      <router-outlet></router-outlet>\n    </div>\n\n    <!-- Footer -->\n    <footer id=\"support\">\n      <div class=\"jumbotron jumbotron-fluid footer-copyright text-center py-3\">\n        <p>{{ 'APP.SUPPORT' | translate }}</p>\n        <a href=\"https://www.exxcellent.de/\"\n           target=\"_blank\"><img alt=\"Exxcellent Logo\"\n                                class=\"logoExxcellent\"\n                                src=\"../assets/img/EXX-logo.png\"></a>\n        <a href=\"https://www.reutlingen-university.de/\"\n           target=\"_blank\"><img alt=\"Hochschule Reutlingen Logo\"\n                                class=\"logoHR\"\n                                src=\"../assets/img/HR-Logo.png\"></a>\n        <a href=\"https://www.gras-it.de/\"\n           target=\"_blank\"><img alt=\"IT-Solutions Logo\"\n                                class=\"logoItSolutions\"\n                                src=\"../assets/img/IT-Solutions_Logo.png\"></a>\n      </div>\n\n      <div id=\"footer\"\n           style=\"flex-grow: 0\"\n           class=\"navbar navbar-expand-sm bg-light justify-content-center\">\n        <ul class=\"nav\">\n          <li class=\"nav-item\">\n            <a class=\"color-black\"\n               routerLink=\"/impressum\">{{ 'APP.IMPRESSUM' | translate }}\n            </a>\n          </li>\n        </ul>\n      </div>\n    </footer>\n\n    <!-- Notification -->\n    <bla-notification></bla-notification>\n\n  </div>\n\n</div>\n\n<div class=\"environment-corner-ribbon bottom-right\" *ngIf=\"!isProduction()\">{{getEnvironment()}}</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Farbkonzept Website */\nul ul a {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: #02bdd5; }\n.wrapper {\n  display: flex;\n  align-items: stretch;\n  height: 100%; }\n.content {\n  padding-top: 4em;\n  padding-left: 250px;\n  width: 100%; }\n.content.inactive {\n  padding-left: 80px; }\n#footer {\n  display: flex;\n  justify-content: center;\n  padding-left: 30px;\n  padding-right: 30px;\n  padding-top: 5px;\n  background-color: #DCDCDC !important; }\n.jumbotron {\n  margin-bottom: 0px;\n  background-color: #E8E8E8;\n  padding: 0px; }\n.flexContainer {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row; }\n.footerContainer {\n  width: 500px;\n  padding: 15px; }\n.logoItSolutions {\n  height: 40px;\n  margin: 10px; }\n.logoExxcellent {\n  height: 30px;\n  margin: 10px; }\n.logoHR {\n  height: 40px;\n  margin: 10px; }\n.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {\n  background-color: #ffc107; }\n@media (max-width: 768px) {\n  .content.inactive {\n    padding-top: 68px;\n    padding-left: 0px;\n    width: 100%; }\n  .content {\n    padding-top: 68px;\n    padding-left: 0px;\n    width: 100%; }\n  h1 {\n    font-size: 2em; }\n  h3 {\n    font-size: 1.5em; }\n  p {\n    font-size: 1.1em; }\n  a, a:hover, a:focus {\n    color: inherit;\n    text-decoration: none;\n    transition: all 0.3s; }\n  ul ul a {\n    font-size: 0.9em !important;\n    padding-left: 30px !important;\n    background: #02bdd5; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBQTtBQVFBO0VBQ0UsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixtQkFWZSxFQUFBO0FBY2pCO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixZQUFZLEVBQUE7QUFJZDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0FBR2I7RUFDRSxrQkFBa0IsRUFBQTtBQU1wQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0NBQW9DLEVBQUE7QUFJdEM7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTtBQUlkO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxZQUFZO0VBQ1osYUFBYSxFQUFBO0FBSWY7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBO0FBR2Q7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBO0FBR2Q7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBO0FBSWQ7RUFDRSx5QkE5RWlCLEVBQUE7QUFrRm5CO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVcsRUFBQTtFQUdiO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixXQUFXLEVBQUE7RUFHYjtJQUNFLGNBQWMsRUFBQTtFQUdoQjtJQUNFLGdCQUFnQixFQUFBO0VBR2xCO0lBQ0UsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG9CQUFvQixFQUFBO0VBRXRCO0lBQ0UsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixtQkFySGEsRUFBQSxFQXNIZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZhcmJrb256ZXB0IFdlYnNpdGUgKi9cbiRwcmltYXJ5OiAjMDJiZGQ1OyAvLyBMaW5rcywgTmF2YmFyXG4kcHJpbWFyeS1saWdodDogI2I0ZmZmZjsgLy8gU2lkZWJhci1CYWNrZ3JvdW5kXG4kcHJpbWFyeS1kYXJrOiAjMDA3YzkxOyAvLyBTaWRlYmFyLUZvbnRcbiRzZWNvbmRhcnk6ICNmZmMxMDc7IC8vIGhvdmVyIFRhYmxlc1xuJHNlY29uZGFyeS1saWdodDogI2ZmZjM1MDtcbiRzZWNvbmRhcnktZGFyazogI2ZmODMzYTsgLy8gaG92ZXIgTGlua3MsIExvZ29cblxudWwgdWwgYSB7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xufVxuXG4vLyB3cmFwcGVyXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8vIGNvbnRlbnQgc2lkZVxuLmNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogNGVtOyAvL2ZvciB0aGUgTmF2QmFyXG4gIHBhZGRpbmctbGVmdDogMjUwcHg7IC8vZm9yIHRoZSBTaWRlYmFyXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudC5pbmFjdGl2ZSB7XG4gIHBhZGRpbmctbGVmdDogODBweDsgLy9mb3IgdGhlIFNpZGViYXJcbn1cblxuI2NvbnRlbnQtd2l0aG91dC1mb290ZXIge1xufVxuXG4jZm9vdGVyIHsgLy8gZm9vdGVyIHdpdGggTG9nb3NcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RDRENEQyAhaW1wb3J0YW50O1xufVxuXG4vLyBib290c3RyYXAgY2hhbmdlc1xuLmp1bWJvdHJvbiB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RThFODtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4vLyBjb3ZlcnMgdGhlIGZvb3RlciBDb250YWluZXJzIG9mIHRoZSBmb290ZXJcbi5mbGV4Q29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZm9vdGVyQ29udGFpbmVyIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4vLyBMb2dvIENTU1xuLmxvZ29JdFNvbHV0aW9ucyB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubG9nb0V4eGNlbGxlbnQge1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmxvZ29IUiB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5cbi50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlciB0ZCwgLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeTtcbn1cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGVudC5pbmFjdGl2ZSB7XG4gICAgcGFkZGluZy10b3A6IDY4cHg7IC8vZm9yIHRoZSBOYXZCYXJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogNjhweDsgLy9mb3IgdGhlIE5hdkJhclxuICAgIHBhZGRpbmctbGVmdDogMHB4OyAvL2ZvciB0aGUgU2lkZWJhclxuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICB9XG4gIGEsIGE6aG92ZXIsIGE6Zm9jdXMge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgfVxuICB1bCB1bCBhIHtcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(translate, store, router) {
        var _this = this;
        this.translate = translate;
        this.store = store;
        this.router = router;
        translate.setDefaultLang('de');
        translate.use('de');
        store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(function (state) { return state.sidebarState; }))
            .subscribe(function (state) { return _this.isActive = state.toggleSidebar; });
    }
    AppComponent.prototype.isProduction = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production;
    };
    AppComponent.prototype.getEnvironment = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].label;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // scrolls up to top after page change
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                // trick the Router into believing it's last link wasn't previously loaded
                _this.router.navigated = false;
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/notification */ "./src/app/components/notification/index.ts");
/* harmony import */ var _components_sidebar_components_sidebar_item_sidebar_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sidebar/components/sidebar-item/sidebar-item.component */ "./src/app/components/sidebar/components/sidebar-item/sidebar-item.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_navbar_components_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbar/components/user-dropdown/user-dropdown.component */ "./src/app/components/navbar/components/user-dropdown/user-dropdown.component.ts");
/* harmony import */ var _components_sidebar_components_sidebar_subitem_sidebar_subitem_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sidebar/components/sidebar-subitem/sidebar-subitem.component */ "./src/app/components/sidebar/components/sidebar-subitem/sidebar-subitem.component.ts");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/home */ "./src/app/modules/home/index.ts");
/* harmony import */ var _modules_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/shared */ "./src/app/modules/shared/index.ts");
/* harmony import */ var _modules_shared_redux_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/shared/redux-store */ "./src/app/modules/shared/redux-store/index.ts");




// import ngx-translate and the http loader

















// AoT requires an exported function for factories
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _components_sidebar_components_sidebar_item_sidebar_item_component__WEBPACK_IMPORTED_MODULE_9__["SidebarItemComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_notification__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"],
                _components_navbar_components_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_16__["UserDropdownComponent"],
                _components_sidebar_components_sidebar_subitem_sidebar_subitem_component__WEBPACK_IMPORTED_MODULE_17__["SidebarSubitemComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], { useHash: true, onSameUrlNavigation: 'reload' }),
                /* REDUX-STORE */
                _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forRoot(_modules_shared_redux_store__WEBPACK_IMPORTED_MODULE_20__["APP_REDUCERS"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([]),
                /* BOGENLIGA */
                _modules_home__WEBPACK_IMPORTED_MODULE_18__["HomeModule"],
                _modules_shared__WEBPACK_IMPORTED_MODULE_19__["SharedModule"].forRoot(),
            ],
            exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]],
            /* HTTP INTERCEPTORS */
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _modules_shared__WEBPACK_IMPORTED_MODULE_19__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _modules_shared__WEBPACK_IMPORTED_MODULE_19__["ErrorInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _modules_home_components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home/components/home/home.component */ "./src/app/modules/home/components/home/home.component.ts");

var ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _modules_home_components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'vereine', loadChildren: 'src/app/modules/vereine/vereine.module#VereineModule' },
    { path: 'wettkaempfe', loadChildren: 'src/app/modules/wettkampf/wettkampf.module#WettkampfModule' },
    { path: 'settings', loadChildren: 'src/app/modules/settings/settings.module#SettingsModule' },
    { path: 'verwaltung', loadChildren: 'src/app/modules/verwaltung/verwaltung.module#VerwaltungModule' },
    {
        path: 'sportjahresplan',
        loadChildren: 'src/app/modules/sportjahresplan/sportjahresplan.module#SportjahresplanModule'
    },
    { path: 'user', loadChildren: 'src/app/modules/user/user.module#UserModule' },
    { path: 'playground', loadChildren: 'src/app/modules/playground/playground.module#PlaygroundModule' },
];


/***/ }),

/***/ "./src/app/components/navbar/components/user-dropdown/user-dropdown.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/navbar/components/user-dropdown/user-dropdown.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown-menu dropdown-menu-right\">\n  <a class=\"dropdown-item\"\n     (click)=\"showUserProfile()\">{{ 'NAVBAR.USER_DROPDOWN.PROFILE' | translate }}</a>\n  <a class=\"dropdown-item\"\n     (click)=\"showUserPwd()\">{{ 'NAVBAR.USER_DROPDOWN.PWD' | translate }}</a>\n  <div class=\"dropdown-divider\"></div>\n  <a class=\"dropdown-item\"\n     (click)=\"logout()\">{{ 'NAVBAR.USER_DROPDOWN.LOGOUT' | translate }}</a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/components/user-dropdown/user-dropdown.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/navbar/components/user-dropdown/user-dropdown.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu {\n  display: block; }\n\na, a:not([href]):not([tabindex]) {\n  color: #007c91;\n  cursor: pointer; }\n\na:active, a:not([href]):not([tabindex]):active {\n  color: #007c91;\n  background-color: #02bdd5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL2NvbXBvbmVudHMvdXNlci1kcm9wZG93bi91c2VyLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYztFQUNkLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvY29tcG9uZW50cy91c2VyLWRyb3Bkb3duL3VzZXItZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5hLCBhOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XG4gIGNvbG9yOiAjMDA3YzkxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmE6YWN0aXZlLCBhOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKTphY3RpdmUge1xuICBjb2xvcjogIzAwN2M5MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyYmRkNTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/components/user-dropdown/user-dropdown.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/navbar/components/user-dropdown/user-dropdown.component.ts ***!
  \***************************************************************************************/
/*! exports provided: UserDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDropdownComponent", function() { return UserDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services */ "./src/app/modules/shared/services/index.ts");




var UserDropdownComponent = /** @class */ (function () {
    function UserDropdownComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.onAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UserDropdownComponent.prototype.ngOnInit = function () {
    };
    UserDropdownComponent.prototype.ngOnChanges = function (changes) {
    };
    UserDropdownComponent.prototype.showUserProfile = function () {
        this.onAction.emit();
        this.router.navigateByUrl('/user/profile');
    };
    UserDropdownComponent.prototype.showUserPwd = function () {
        this.onAction.emit();
        this.router.navigateByUrl('/user/pwd');
    };
    UserDropdownComponent.prototype.logout = function () {
        this.onAction.emit();
        this.userService.logout();
        this.router.navigateByUrl('/home');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserDropdownComponent.prototype, "onAction", void 0);
    UserDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-user-dropdown',
            template: __webpack_require__(/*! ./user-dropdown.component.html */ "./src/app/components/navbar/components/user-dropdown/user-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./user-dropdown.component.scss */ "./src/app/components/navbar/components/user-dropdown/user-dropdown.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserDropdownComponent);
    return UserDropdownComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- fa-*x is the size of the icon with * = 2,3,4,5 -->\n<nav id=\"navbar\"\n     class=\"navbar navbar-expand navbar-dark fixed-top shadow-sm\">\n\n  <!-- Burger Toggle -->\n  <a id=\"sidebarCollapseNavBar\"\n     (click)=\"toggleNavbar()\">\n    <fa-icon [icon]=\"isActive ? 'bars' : 'times'\"\n             size=\"2x\"></fa-icon>\n  </a>\n\n  <!-- Logo and Titel -->\n  <a id=\"navbar-brand\"\n     routerLink=\"/home\">\n    <img\n      src=\"../assets/img/logo.png\"\n      style=\"width:45px;\">\n  </a>\n\n  <a id=\"navbar-header\"\n     routerLink=\"/home\">\n    <h3>{{'NAVBAR.TITLE' | translate }}</h3>\n  </a>\n\n\n  <!-- Links -->\n  <div id=\"navbar-right\"\n       class=\"nav navbar-nav ml-auto navbar-right\">\n\n    <!-- Login Button -->\n\n      <a *ngIf=\"!isLoggedIn\"\n         class=\"nav-link\"\n         routerLink=\"/user/login\">\n        <button class=\"btn btn-light\">Login</button>\n      </a>\n\n      <!-- Profil Dropdown -->\n\n    <a *ngIf=\"isLoggedIn\"\n       class=\"dropdown nav-link dropdown-toggle\"\n       (click)=\"toggleUserDropdown()\">\n      <fa-icon icon=\"user-circle\"\n               size=\"2x\"></fa-icon>\n    </a>\n\n    <bla-user-dropdown *ngIf=\"isUserDropdownVisible\"\n                       (onAction)=\"toggleUserDropdown()\"></bla-user-dropdown>\n\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Farbkonzept Website */\n#navbar {\n  height: 4em;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n#navbar a {\n  color: #007c91;\n  text-decoration: none; }\n#sidebarCollapseNavBar {\n  display: none; }\n#navbar-header {\n  padding-left: 2em; }\n#navbar-brand {\n  margin-left: 1.1em; }\n.navbar-dark {\n  background-color: #02bdd5;\n  padding: 0; }\n.dropdown-toggle::after {\n  vertical-align: .35em;\n  border-top: .5em solid;\n  border-right: .4em solid transparent;\n  border-left: .4em solid transparent; }\n@media (max-width: 768px) {\n  .navbar-dark {\n    padding: 0 1em 0 0; }\n  #sidebarCollapseNavBar {\n    display: block;\n    background: none;\n    border: none;\n    margin: 0 0 0 1em;\n    cursor: pointer;\n    outline: none; }\n  #sidebarCollapseNavBar span {\n    width: 80%;\n    height: 2px;\n    display: block;\n    background: black;\n    transition: all 0.8s cubic-bezier(0.81, -0.33, 0.345, 1.375);\n    opacity: 1;\n    margin: 5px auto; }\n  #navbar-brand, #navbar-header {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSx3QkFBQTtBQVFBO0VBQ0UsV0FBVztFQUNYLDZDQUE0QyxFQUFBO0FBRzlDO0VBQ0UsY0FBYztFQUNkLHFCQUFxQixFQUFBO0FBSXZCO0VBQ0UsYUFBYSxFQUFBO0FBR2Y7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UseUJBL0JlO0VBZ0NmLFVBQVUsRUFBQTtBQUlaO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsbUNBQW1DLEVBQUE7QUFLckM7RUFFRTtJQUNFLGtCQUFrQixFQUFBO0VBS3BCO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhLEVBQUE7RUFJZjtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUVkLGlCQUFpQjtJQUNqQiw0REFBOEQ7SUFDOUQsVUFBVTtJQUNWLGdCQUFnQixFQUFBO0VBR2xCO0lBQ0UsYUFBYSxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0ZXh0IGNvbG9yIG9mIGJvb3RzdHJhcFxuXG4vKiBGYXJia29uemVwdCBXZWJzaXRlICovXG4kcHJpbWFyeTogIzAyYmRkNTsgLy8gTGlua3MsIE5hdmJhclxuJHByaW1hcnktbGlnaHQ6ICNiNGZmZmY7IC8vIFNpZGViYXItQmFja2dyb3VuZFxuJHByaW1hcnktZGFyazogIzAwN2M5MTsgLy8gU2lkZWJhci1Gb250XG4kc2Vjb25kYXJ5OiAjZmZjMTA3OyAvLyBob3ZlciBUYWJsZXMsIEJ1dHRvblxuJHNlY29uZGFyeS1saWdodDogI2ZmZjM1MDtcbiRzZWNvbmRhcnktZGFyazogI2ZmODMzYTsgLy8gaG92ZXIgTGlua3MsIExvZ29cblxuI25hdmJhciB7XG4gIGhlaWdodDogNGVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTI1KTtcbn1cblxuI25hdmJhciBhIHtcbiAgY29sb3I6ICMwMDdjOTE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLy8gVG9nZ2xlIGhpZGRlbiB3aGlsZSBXZWJ2aWV3XG4jc2lkZWJhckNvbGxhcHNlTmF2QmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI25hdmJhci1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDJlbTtcbn1cblxuI25hdmJhci1icmFuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxLjFlbTtcbn1cblxuLm5hdmJhci1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8vIHNjYWxlIGRyb3Bkb3duIHRyaWFuZ2xlXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIHZlcnRpY2FsLWFsaWduOiAuMzVlbTtcbiAgYm9yZGVyLXRvcDogLjVlbSBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiAuNGVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogLjRlbSBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuXG4vLyBmb3Igc21hbGwgZGV2aWNlc1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgLm5hdmJhci1kYXJrIHtcbiAgICBwYWRkaW5nOiAwIDFlbSAwIDA7XG4gIH1cblxuXG4gIC8vIFRvZ2dsZSBzaG93biB3aGlsZSBpbiBtb2JpbGUgdmlld1xuICAjc2lkZWJhckNvbGxhcHNlTmF2QmFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDAgMCAwIDFlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBzdHlsZSBvZiByb3dzXG4gICNzaWRlYmFyQ29sbGFwc2VOYXZCYXIgc3BhbiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvL2JhY2tncm91bmQ6ICMwMmJkZDU7IC8vIzU1NTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC44cyBjdWJpYy1iZXppZXIoMC44MTAsIC0wLjMzMCwgMC4zNDUsIDEuMzc1KTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG4gIH1cblxuICAjbmF2YmFyLWJyYW5kLCAjbmF2YmFyLWhlYWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components */ "./src/app/modules/shared/components/index.ts");
/* harmony import */ var _shared_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/redux-store */ "./src/app/modules/shared/redux-store/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services */ "./src/app/modules/shared/services/index.ts");







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, store, userService) {
        var _this = this;
        this.translate = translate;
        this.store = store;
        this.userService = userService;
        this.ButtonType = _shared_components__WEBPACK_IMPORTED_MODULE_4__["ButtonType"];
        this.isUserDropdownVisible = false;
        store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(function (state) { return state.sidebarState; }))
            .subscribe(function (state) { return _this.isActive = state.toggleSidebar; });
        store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(function (state) { return state.userState; }))
            .subscribe(function (state) { return _this.isLoggedIn = state.isLoggedIn; });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    /**
     * Changes the language used on the Website
     * @param language
     */
    NavbarComponent.prototype.useLanguage = function (language) {
        this.translate.use(language);
    };
    /**
     * tells store that sidebar button was used -> Sidebar needs to change
     */
    NavbarComponent.prototype.toggleNavbar = function () {
        this.store.dispatch({ type: _shared_redux_store__WEBPACK_IMPORTED_MODULE_5__["TOGGLE_SIDEBAR"] });
    };
    NavbarComponent.prototype.toggleUserDropdown = function () {
        this.isUserDropdownVisible = !this.isUserDropdownVisible;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _shared_services__WEBPACK_IMPORTED_MODULE_6__["CurrentUserService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/index.ts":
/*!**************************************************!*\
  !*** ./src/app/components/notification/index.ts ***!
  \**************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return _notification_component__WEBPACK_IMPORTED_MODULE_0__["NotificationComponent"]; });




/***/ }),

/***/ "./src/app/components/notification/notification.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-modal-dialog [visible]=\"showDialog\"\n                  [modalDialogOption]=\"getModalDialogOption()\"\n                  (onClose)=\"modalDialogResult($event)\">\n  <h5 class=\"modal-dialog-header\">\n    <i class=\"fa\"\n       [ngClass]=\"getModalDialogHeadingIconClass()\"></i>\n    {{notification.title | translate }}\n  </h5>\n  <div class=\"modal-dialog-content\">\n    {{ getDescription() }}\n  </div>\n\n\n  <div class=\"modal-dialog-details\"\n       *ngIf=\"!!notification.details\">\n\n    <a\n      data-toggle=\"collapse\"\n      href=\"#collapseErrorMessage\"\n      aria-expanded=\"false\"\n      aria-controls=\"collapseErrorMessage\">\n      <i class=\"fas fa-caret-down\"></i> Mehr Informationen anzeigen\n    </a>\n\n    <div class=\"collapse\"\n         id=\"collapseErrorMessage\">\n      <div class=\"card card-body modal-dialog-error\">\n        <!-- show pre formatted payload -->\n        <pre><code>{{notification.details}}</code></pre>\n\n        <bla-button [buttonSize]=\"ButtonSize.SMALL\"\n                    (onClick)=\"showRaw()\">\n          <i class=\"fas fa-file-export\"></i> Fenster mit Rohdaten öffnen\n        </bla-button>\n      </div>\n    </div>\n\n\n  </div>\n</bla-modal-dialog>\n"

/***/ }),

/***/ "./src/app/components/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Farbkonzept Website */\n#notification-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n.modal-content {\n  border: 0; }\n.btn-notification {\n  min-width: 6rem; }\n.modal-dialog-details {\n  padding-top: 1rem; }\n.modal-dialog-error {\n  max-height: 15rem;\n  padding: 0.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBQTtBQVFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxTQUFTLEVBQUE7QUFHWDtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGlCQUNGLEVBQUE7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGYXJia29uemVwdCBXZWJzaXRlICovXG4kcHJpbWFyeTogIzAyYmRkNTsgLy8gTGlua3MsIE5hdmJhclxuJHByaW1hcnktbGlnaHQ6ICNiNGZmZmY7IC8vIFNpZGViYXItQmFja2dyb3VuZFxuJHByaW1hcnktZGFyazogIzAwN2M5MTsgLy8gU2lkZWJhci1Gb250XG4kc2Vjb25kYXJ5OiAjZmZjMTA3OyAvLyBob3ZlciBUYWJsZXMsIEJ1dHRvblxuJHNlY29uZGFyeS1saWdodDogI2ZmZjM1MDtcbiRzZWNvbmRhcnktZGFyazogI2ZmODMzYTsgLy8gaG92ZXIgTGlua3MsIExvZ29cblxuI25vdGlmaWNhdGlvbi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBib3JkZXI6IDA7XG59XG5cbi5idG4tbm90aWZpY2F0aW9uIHtcbiAgbWluLXdpZHRoOiA2cmVtO1xufVxuXG4ubW9kYWwtZGlhbG9nLWRldGFpbHMge1xuICBwYWRkaW5nLXRvcDogMXJlbVxufVxuXG4ubW9kYWwtZGlhbG9nLWVycm9yIHtcbiAgbWF4LWhlaWdodDogMTVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components */ "./src/app/modules/shared/components/index.ts");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _modules_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/shared */ "./src/app/modules/shared/index.ts");






var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(notificationService, translatePipe) {
        var _this = this;
        this.notificationService = notificationService;
        this.translatePipe = translatePipe;
        this.notification = new _modules_shared__WEBPACK_IMPORTED_MODULE_5__["Notification"]();
        this.showDialog = false;
        this.ModalDialogOption = _modules_shared__WEBPACK_IMPORTED_MODULE_5__["ModalDialogOption"];
        this.NotificationType = _modules_shared__WEBPACK_IMPORTED_MODULE_5__["NotificationType"];
        this.ButtonSize = _shared_components__WEBPACK_IMPORTED_MODULE_3__["ButtonSize"];
        this.notificationService.observeNotifications().subscribe(function (state) {
            _this.showDialog = state.showNotification;
            _this.notification = Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(state.notification) ? new _modules_shared__WEBPACK_IMPORTED_MODULE_5__["Notification"]() : state.notification;
        });
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    /**
     * I return the icon identifier for a given notification severity.
     *
     * @return string with icon identifier
     */
    NotificationComponent.prototype.getModalDialogHeadingIconClass = function () {
        var alertHeadingClass = 'info-circle';
        switch (this.notification.severity) {
            case _modules_shared__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].QUESTION:
                alertHeadingClass = 'question-circle';
                break;
            case _modules_shared__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].ERROR:
                alertHeadingClass = 'exclamation-circle';
                break;
            // default
            case _modules_shared__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"].INFO:
            default:
                alertHeadingClass = 'info-circle';
        }
        return alertHeadingClass;
    };
    NotificationComponent.prototype.showRaw = function () {
        var windowWithRawData = window.open('#');
        windowWithRawData.document.write(this.notification.details);
    };
    /**
     * I handle the user´s choice
     *
     * The user can press positive or negative option buttons
     *
     * @param $event of {@code ModalDialogResult}
     */
    NotificationComponent.prototype.modalDialogResult = function ($event) {
        if ($event === _modules_shared__WEBPACK_IMPORTED_MODULE_5__["ModalDialogResult"].OK || $event === _modules_shared__WEBPACK_IMPORTED_MODULE_5__["ModalDialogResult"].YES) {
            this.notificationService.updateNotification(_modules_shared__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].ACCEPTED);
        }
        else {
            this.notificationService.updateNotification(_modules_shared__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"].DECLINED);
        }
    };
    /**
     * I map the {@code NotificationType} to a {@code ModalDialogOption}
     *
     * @return {@code ModalDialogOption}
     */
    NotificationComponent.prototype.getModalDialogOption = function () {
        return _modules_shared__WEBPACK_IMPORTED_MODULE_5__["ModalDialogOption"][_modules_shared__WEBPACK_IMPORTED_MODULE_5__["NotificationType"][this.notification.type]];
    };
    NotificationComponent.prototype.getDescription = function () {
        var translated = this.translatePipe.transform(this.notification.description);
        if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.notification.descriptionParam)) {
            translated = translated.replace('%s', this.notification.descriptionParam);
        }
        return translated;
    };
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/components/notification/notification.component.html"),
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/notification/notification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modules_shared__WEBPACK_IMPORTED_MODULE_5__["NotificationService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/components/sidebar-item/sidebar-item.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/sidebar/components/sidebar-item/sidebar-item.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-link\"\n     [class.inactive]=\"isActive\">\n\n  <fa-icon [icon]=\"icon\"\n           size=\"lg\"></fa-icon>\n  <span *ngIf=\"!isActive\"\n        class=\"sidebar-text\"\n        [class.inactive]=\"isActive\">{{ label }}\n  </span>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/sidebar/components/sidebar-item/sidebar-item.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/sidebar/components/sidebar-item/sidebar-item.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Farbkonzept Website */\n.sidebar-link {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: start; }\n.sidebar-link.inactive {\n  justify-content: center; }\n.sidebar-text {\n  padding-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXItaXRlbS9zaWRlYmFyLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQUE7QUFRQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTtBQUd0QjtFQUNFLHVCQUF1QixFQUFBO0FBR3pCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvY29tcG9uZW50cy9zaWRlYmFyLWl0ZW0vc2lkZWJhci1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRmFyYmtvbnplcHQgV2Vic2l0ZSAqL1xuJHByaW1hcnk6ICMwMmJkZDU7IC8vIExpbmtzLCBOYXZiYXJcbiRwcmltYXJ5LWxpZ2h0OiAjYjRmZmZmOyAvLyBTaWRlYmFyLUJhY2tncm91bmRcbiRwcmltYXJ5LWRhcms6ICMwMDdjOTE7IC8vIFNpZGViYXItRm9udFxuJHNlY29uZGFyeTogI2ZmYzEwNzsgLy8gaG92ZXIgVGFibGVzLCBCdXR0b25cbiRzZWNvbmRhcnktbGlnaHQ6ICNmZmYzNTA7XG4kc2Vjb25kYXJ5LWRhcms6ICNmZjgzM2E7IC8vIGhvdmVyIExpbmtzLCBMb2dvXG5cbi5zaWRlYmFyLWxpbmsge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XG59XG5cbi5zaWRlYmFyLWxpbmsuaW5hY3RpdmUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNpZGViYXItdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDsgLy9tb3JlIHNwYWNlIHRvIEljb25cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/sidebar/components/sidebar-item/sidebar-item.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/sidebar/components/sidebar-item/sidebar-item.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SidebarItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarItemComponent", function() { return SidebarItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services */ "./src/app/modules/shared/services/index.ts");




var SidebarItemComponent = /** @class */ (function () {
    function SidebarItemComponent(store, currentUserService) {
        var _this = this;
        this.store = store;
        this.currentUserService = currentUserService;
        store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(function (state) { return state.sidebarState; }))
            .subscribe(function (state) { return _this.isActive = state.toggleSidebar; });
    }
    SidebarItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarItemComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarItemComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SidebarItemComponent.prototype, "subitems", void 0);
    SidebarItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-sidebar-item',
            template: __webpack_require__(/*! ./sidebar-item.component.html */ "./src/app/components/sidebar/components/sidebar-item/sidebar-item.component.html"),
            styles: [__webpack_require__(/*! ./sidebar-item.component.scss */ "./src/app/components/sidebar/components/sidebar-item/sidebar-item.component.scss"), __webpack_require__(/*! ../../sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _shared_services__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]])
    ], SidebarItemComponent);
    return SidebarItemComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/components/sidebar-subitem/sidebar-subitem.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/sidebar/components/sidebar-subitem/sidebar-subitem.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-subink\"\n     [class.inactive]=\"isActive\">\n\n  <span *ngIf=\"!isActive\"\n        class=\"sidebar-subtext\"\n        [class.inactive]=\"isActive\">{{ label }}\n  </span>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/sidebar/components/sidebar-subitem/sidebar-subitem.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/sidebar/components/sidebar-subitem/sidebar-subitem.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXItc3ViaXRlbS9zaWRlYmFyLXN1Yml0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sidebar/components/sidebar-subitem/sidebar-subitem.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/sidebar/components/sidebar-subitem/sidebar-subitem.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SidebarSubitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarSubitemComponent", function() { return SidebarSubitemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var SidebarSubitemComponent = /** @class */ (function () {
    function SidebarSubitemComponent(store) {
        var _this = this;
        this.store = store;
        store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(function (state) { return state.sidebarState; }))
            .subscribe(function (state) { return _this.isActive = state.toggleSidebar; });
    }
    SidebarSubitemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarSubitemComponent.prototype, "label", void 0);
    SidebarSubitemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-sidebar-subitem',
            template: __webpack_require__(/*! ./sidebar-subitem.component.html */ "./src/app/components/sidebar/components/sidebar-subitem/sidebar-subitem.component.html"),
            styles: [__webpack_require__(/*! ./sidebar-subitem.component.scss */ "./src/app/components/sidebar/components/sidebar-subitem/sidebar-subitem.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], SidebarSubitemComponent);
    return SidebarSubitemComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"sidebar\"\n     [class.inactive]=\"isActive\">\n  <div style=\"flex-grow: 1\">\n\n    <!-- Sidebar Header -->\n    <div class=\"sidebar-header\">\n      <h3 id=\"title\"\n          *ngIf=\"!isActive\">{{'NAVBAR.TITLE' | translate }}</h3>\n    </div>\n\n    <!-- Sidebar links config -->\n    <nav class=\"list-unstyled components\">\n      <ng-container *ngFor=\"let item of CONFIG\">\n\n        <li *ngIf=\"hasUserPermissions(item.permissons) && !(inProd === true && item.inProdVisible === false)\" [class.selected]=\"isSelected(item.route)\">\n\n          <!-- Item of Navigation (with Button for Dropdown) -->\n          <div class=\"sidebar-text-toggle\" [class.flexBox]=\"!isActive\" >\n\n            <a routerLink=\"{{item.route}}\"  class=\"navbar-text\" [class.flexChild]=\"!isActive\">\n              <bla-sidebar-item label=\"{{ item.label | translate }}\"\n                                [icon]=\"item.icon\"\n                                [subitems]=\"item.subitems\"></bla-sidebar-item>\n            </a>\n\n            <!-- Button for Dropdown -->\n            <button *ngIf=\"existSubitems(item.subitems) && isActive == false\" class=\"navbar-toggler sidbar-dropdown-toggle\" [class.flexChild]=\"!isActive\" [class.inactive]=\"isActive\" type=\"button\" data-toggle=\"collapse\" attr.data-target=\"#collapsibleNavbar{{ label }}\">\n              <fa-icon class=\"navbar-toggler-icon\" [icon]=\"faCaretDown\" size=\"lg\"></fa-icon>\n            </button>\n          </div>\n\n          <!-- Navbar links -->\n            <div *ngIf=\"existSubitems(item.subitems) && isActive == false\" class=\"nav-subitems collapse navbar-collapse\" [class.inactive]=\"isActive\" id=\"collapsibleNavbar{{ label }}\">\n              <ul class=\"navbar-nav\">\n                <ng-container *ngFor=\"let subitem of item.subitems\">\n                  <ng-container *ngIf=\"hasUserPermissions(subitem.permissons)\">\n                    <li class=\"nav-item\" [class.subselected]=\"isSelected(subitem.route)\">\n                      <a class=\"nav-link\" routerLink=\"{{subitem.route}}\">\n                        <bla-sidebar-subitem label=\"{{ subitem.label | translate }}\"></bla-sidebar-subitem>\n                      </a>\n                    </li>\n                  </ng-container>\n                </ng-container>\n              </ul>\n            </div>\n\n        </li>\n      </ng-container>\n    </nav>\n  </div>\n\n  <!-- Sidebar Footer -->\n  <div id=\"sidebarFooter\"\n       [class.inactive]=\"isActive\">\n\n    <a id=\"sidebarCollapseBottom\"\n       (click)=\"toggleSidebar()\">\n      <bla-sidebar-item label=\"{{ 'SIDEBAR.COLLAPSE' | translate }}\"\n                        [icon]=\"getSidebarCollapseIcon()\"></bla-sidebar-item>\n    </a>\n  </div>\n</nav>\n\n\n<div id=\"sidebar-backdrop\"\n     [class.backdrop-visible]=\"!isActive\"\n     [class.backdrop-hidden]=\"isActive\"\n     (click)=\"toggleSidebar()\"></div>\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Farbkonzept Website */\n#sidebar {\n  min-width: 250px;\n  max-width: 250px;\n  min-height: calc(100vh - 4em);\n  margin-top: 4em;\n  background: #b4ffff;\n  color: #007c91;\n  transition: all 0.3s;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  z-index: 12;\n  border-right: 1px solid rgba(0, 0, 0, 0.125); }\n#sidebar.inactive {\n  min-width: 80px;\n  max-width: 80px;\n  text-align: center; }\n#sidebar ul p {\n  color: #007c91;\n  padding: 10px; }\n#sidebar a {\n  padding: 10px;\n  font-size: 1.1em;\n  display: block;\n  text-align: left; }\n#sidebar .sidebar-header {\n  display: none; }\n#sidebar.inactive .sidebar-header p {\n  color: #007c91; }\n#sidebar ul.components {\n  padding: 20px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n#sidebar.inactive ul li a {\n  text-align: center; }\n#sidebar ul li.inactive > a, a[aria-expanded=\"true\"] {\n  color: #007c91;\n  background: #b4ffff; }\n#sidebarFooter {\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n/* Same dropdown links padding*/\n#sidebar.active ul ul a {\n  padding: 10px !important; }\n/* Changing the arrow position to bottom center position,\n   translateX(50%) works with right: 50%\n   to accurately  center the arrow */\n#sidebar.active .dropdown-toggle::after {\n  top: auto;\n  bottom: 10px;\n  right: 50%;\n  -webkit-transform: translateX(50%);\n  transform: translateX(50%); }\n#sidebarCollapseBottom {\n  background: #b4ffff;\n  display: flex;\n  flex-basis: 100%;\n  cursor: pointer;\n  color: #007c91; }\n#sidebarCollapseBottom span {\n  width: 80%;\n  height: 2px;\n  display: block;\n  background: #b4ffff;\n  transition: all 0.8s cubic-bezier(0.81, -0.33, 0.345, 1.375);\n  opacity: 1; }\n#sidebar-backdrop {\n  display: none; }\n.flexBox {\n  display: flex;\n  flex-direction: row; }\n.sidbar-dropdown-toggle {\n  color: #007c91;\n  outline: none; }\n.sidebar-text-toggle {\n  color: #007c91;\n  height: 3rem; }\n.sidebar-text-toggle .sidbar-dropdown-toggle {\n    color: #007c91; }\n.sidebar-text-toggle .navbar-text {\n    color: #007c91; }\n.nav-link {\n  color: #007c91; }\n.nav-link:hover {\n  color: #b4ffff;\n  background: #007c91; }\n.sidebar-text-toggle:hover {\n  color: #b4ffff;\n  background: #007c91; }\n.sidebar-text-toggle:hover .sidbar-dropdown-toggle {\n    color: #b4ffff; }\n.sidebar-text-toggle:hover .navbar-text {\n    color: #b4ffff; }\n.selected {\n  border-left: 8px solid #007c91; }\n.subselected {\n  font-weight: 800; }\n@media (max-width: 768px) {\n  #sidebar {\n    margin-left: 0;\n    margin-top: 4em;\n    min-height: calc(100vh); }\n  #sidebar a {\n    padding-left: 1em; }\n  #sidebar .sidebar-header {\n    display: block;\n    padding: 1em 0 0 1em; }\n  #sidebar.inactive {\n    margin-left: -80px; }\n  #sidebarFooter {\n    display: none; }\n  #sidebar-backdrop {\n    transition-duration: 0.4s;\n    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: background-color, visibility;\n    top: 52px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n    display: block;\n    z-index: 3; }\n  .backdrop-visible {\n    background-color: rgba(0, 0, 0, 0.6);\n    visibility: visible; }\n  .backdrop-hidden {\n    background-color: rgba(0, 0, 0, 0);\n    visibility: hidden; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBQTtBQVdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsZUFQaUI7RUFRakIsbUJBZHFCO0VBZXJCLGNBZG9CO0VBZXBCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixXQUFXO0VBQ1gsNENBZGtELEVBQUE7QUFrQnBEO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtBQUlwQjtFQUNFLGNBaENvQjtFQWlDcEIsYUFBYSxFQUFBO0FBSWY7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTtBQVdsQjtFQUNFLGFBQWEsRUFBQTtBQUlmO0VBQ0UsY0ExRG9CLEVBQUE7QUE2RHRCO0VBQ0UsZUFBZTtFQUNmLDZDQXpEa0QsRUFBQTtBQTREcEQ7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGNBdkVvQjtFQXdFcEIsbUJBekVxQixFQUFBO0FBNEV2QjtFQUNFLDBDQXRFa0QsRUFBQTtBQTJFcEQsK0JBQUE7QUFDQTtFQUNFLHdCQUF3QixFQUFBO0FBRzFCOztvQ0NqQ29DO0FEb0NwQztFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtFQUNWLGtDQUFrQztFQUVsQywwQkFBMEIsRUFBQTtBQUk1QjtFQUNFLG1CQXJHcUI7RUFzR3JCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBeEdvQixFQUFBO0FBNkd0QjtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQWxIcUI7RUFtSHJCLDREQUE4RDtFQUM5RCxVQUFVLEVBQUE7QUFJWjtFQUNFLGFBQWEsRUFBQTtBQUdmO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsY0FqSW9CO0VBa0lwQixhQUFhLEVBQUE7QUFHZjtFQUNFLGNBdElvQjtFQXVJcEIsWUFBWSxFQUFBO0FBRmQ7SUFLSSxjQTFJa0IsRUFBQTtBQXFJdEI7SUFTSSxjQTlJa0IsRUFBQTtBQWtKdEI7RUFDRSxjQW5Kb0IsRUFBQTtBQXNKdEI7RUFDRSxjQXhKcUI7RUF5SnJCLG1CQXhKb0IsRUFBQTtBQTRKdEI7RUFDRSxjQTlKcUI7RUErSnJCLG1CQTlKb0IsRUFBQTtBQTRKdEI7SUFLSSxjQWxLbUIsRUFBQTtBQTZKdkI7SUFTSSxjQXRLbUIsRUFBQTtBQTBLdkI7RUFDRSw4QkExS29CLEVBQUE7QUE2S3RCO0VBQ0UsZ0JBQWdCLEVBQUE7QUFJbEI7RUFDRTtJQUNFLGNBQWM7SUFDZCxlQWhMZTtJQWlMZix1QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGlCQUFpQixFQUFBO0VBRW5CO0lBQ0UsY0FBYztJQUNkLG9CQUFvQixFQUFBO0VBRXRCO0lBQ0Usa0JBQWtCLEVBQUE7RUFFcEI7SUFDRSxhQUFhLEVBQUE7RUFJZjtJQUNFLHlCQUF5QjtJQUN6Qiw0REFBNEQ7SUFDNUQsaURBQWlEO0lBQ2pELFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFVBQVUsRUFBQTtFQUdaO0lBQ0Usb0NBQW9DO0lBQ3BDLG1CQUFtQixFQUFBO0VBR3JCO0lBQ0Usa0NBQWtDO0lBQ2xDLGtCQUFrQixFQUFBLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGYXJia29uemVwdCBXZWJzaXRlICovXG4kcHJpbWFyeTogIzAyYmRkNTsgLy8gTGlua3MsIE5hdmJhclxuJHByaW1hcnktbGlnaHQ6ICNiNGZmZmY7IC8vIFNpZGViYXItQmFja2dyb3VuZFxuJHByaW1hcnktZGFyazogIzAwN2M5MTsgLy8gU2lkZWJhci1Gb250XG4kc2Vjb25kYXJ5OiAjZmZjMTA3OyAvLyBob3ZlciBUYWJsZXMsIEJ1dHRvblxuJHNlY29uZGFyeS1saWdodDogI2ZmZjM1MDtcbiRzZWNvbmRhcnktZGFyazogI2ZmODMzYTsgLy8gaG92ZXIgTGlua3MsIExvZ29cblxuJG5hdmJhci1oZWlnaHQ6IDRlbTtcbiRzaWRlYmFyLWJvcmRlci1zdHlsZTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyNSk7XG5cbiNzaWRlYmFyIHtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDRlbSk7IC8vZnVsbCB2aWV3IC0gTmF2YmFyIG9uIHRvcFxuICBtYXJnaW4tdG9wOiAkbmF2YmFyLWhlaWdodDsgLy9oZWlnaHQgb2YgTmF2QmFyXG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWxpZ2h0OyAvLyMzNDNhNDA7XG4gIGNvbG9yOiAkcHJpbWFyeS1kYXJrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkOyAvLyBzdGF5cyBmaXhlZCBvbiB0aGUgc2lkZSB3aGlsZSBzY3JvbGxpbmdcbiAgei1pbmRleDogMTI7IC8vIGxheWVycyBvZiB0aGUgcmVzdCBvZiB0aGUgcGFnZVxuICBib3JkZXItcmlnaHQ6ICRzaWRlYmFyLWJvcmRlci1zdHlsZTtcbn1cblxuLy8gYmFzaWMgc2lkZWJhciBpbmFjdGl2ZSBjc3NcbiNzaWRlYmFyLmluYWN0aXZlIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLy8gYmFzaWMgY3NzIGxpc3QgYW5kIHBhcmFncmFwaFxuI3NpZGViYXIgdWwgcCB7XG4gIGNvbG9yOiAkcHJpbWFyeS1kYXJrO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vLyBiYXNpYyBjc3MgbGlzdCBhbmQgbGlua1xuI3NpZGViYXIgYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAvL2NvbG9yOiAkcHJpbWFyeS1kYXJrO1xufVxuXG4vLy8vIGJhc2ljIGNzcyBsaXN0IGFuZCBsaW5rIHdpdGggaG92ZXJcbi8vI3NpZGViYXIgYTpob3ZlciB7XG4vLyAgY29sb3I6ICRwcmltYXJ5LWxpZ2h0O1xuLy8gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWRhcms7XG4vL31cblxuLy8gU2lkZWJhciBIZWFkZXJcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8vIFNpZGViYXIgSGVhZGVyIFRpdGxlc2hvcnRcbiNzaWRlYmFyLmluYWN0aXZlIC5zaWRlYmFyLWhlYWRlciBwIHtcbiAgY29sb3I6ICRwcmltYXJ5LWRhcms7XG59XG5cbiNzaWRlYmFyIHVsLmNvbXBvbmVudHMge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGJvcmRlci1ib3R0b206ICRzaWRlYmFyLWJvcmRlci1zdHlsZTtcbn1cblxuI3NpZGViYXIuaW5hY3RpdmUgdWwgbGkgYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3NpZGViYXIgdWwgbGkuaW5hY3RpdmUgPiBhLCBhW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcbiAgY29sb3I6ICRwcmltYXJ5LWRhcms7XG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWxpZ2h0O1xufVxuXG4jc2lkZWJhckZvb3RlciB7XG4gIGJvcmRlci10b3A6ICRzaWRlYmFyLWJvcmRlci1zdHlsZTtcbn1cblxuLy8gRHJvcGRvd25cblxuLyogU2FtZSBkcm9wZG93biBsaW5rcyBwYWRkaW5nKi9cbiNzaWRlYmFyLmFjdGl2ZSB1bCB1bCBhIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xufVxuXG4vKiBDaGFuZ2luZyB0aGUgYXJyb3cgcG9zaXRpb24gdG8gYm90dG9tIGNlbnRlciBwb3NpdGlvbixcbiAgIHRyYW5zbGF0ZVgoNTAlKSB3b3JrcyB3aXRoIHJpZ2h0OiA1MCVcbiAgIHRvIGFjY3VyYXRlbHkgIGNlbnRlciB0aGUgYXJyb3cgKi9cbiNzaWRlYmFyLmFjdGl2ZSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xufVxuXG4vLyBCdXR0b24gdG8gY2hhbmdlIHNtYWxsIHRvIHdpZGUgLyB3aWRlIHRvIHNtYWxsXG4jc2lkZWJhckNvbGxhcHNlQm90dG9tIHtcbiAgYmFja2dyb3VuZDogJHByaW1hcnktbGlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICRwcmltYXJ5LWRhcms7XG4gIC8vYm9yZGVyOiAxcHggc29saWQgIzM0M2E0MDtcbn1cblxuLy8gcm93cyBpbiBidXR0b25cbiNzaWRlYmFyQ29sbGFwc2VCb3R0b20gc3BhbiB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogJHByaW1hcnktbGlnaHQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGN1YmljLWJlemllcigwLjgxMCwgLTAuMzMwLCAwLjM0NSwgMS4zNzUpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vLyBoaWRlIHNpZGViYXIgYmFja2Ryb3Agb24gZGVza3RvcCBjbGllbnRzXG4jc2lkZWJhci1iYWNrZHJvcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mbGV4Qm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnNpZGJhci1kcm9wZG93bi10b2dnbGUge1xuICBjb2xvcjogJHByaW1hcnktZGFyaztcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNpZGViYXItdGV4dC10b2dnbGUge1xuICBjb2xvcjogJHByaW1hcnktZGFyaztcbiAgaGVpZ2h0OiAzcmVtO1xuXG4gIC5zaWRiYXItZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogJHByaW1hcnktZGFyaztcbiAgfVxuXG4gIC5uYXZiYXItdGV4dCB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWRhcms7XG4gIH1cbn1cblxuLm5hdi1saW5rIHtcbiAgY29sb3I6ICRwcmltYXJ5LWRhcms7XG59XG5cbi5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAkcHJpbWFyeS1saWdodDtcbiAgYmFja2dyb3VuZDogJHByaW1hcnktZGFyaztcbn1cblxuLy8gaG92ZXIgb3ZlciBjb21wbGV0ZSBlbGVtZW50IC0+IHRleHQgYW5kIHRvZ2dsZSBuZWVkIHRvIGNoYW5nZVxuLnNpZGViYXItdGV4dC10b2dnbGU6aG92ZXIge1xuICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWRhcms7XG5cbiAgLnNpZGJhci1kcm9wZG93bi10b2dnbGUge1xuICAgIGNvbG9yOiAkcHJpbWFyeS1saWdodDtcbiAgfVxuXG4gIC5uYXZiYXItdGV4dCB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWxpZ2h0O1xuICB9XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgJHByaW1hcnktZGFyaztcbn1cblxuLnN1YnNlbGVjdGVkIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjc2lkZWJhciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogJG5hdmJhci1oZWlnaHQ7IC8vaGVpZ2h0IG9mIE5hdkJhclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmgpOyAvL2Z1bGwgdmlldyAtIE5hdmJhciBvbiB0b3BcbiAgfVxuICAjc2lkZWJhciBhIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgfVxuICAjc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDFlbSAwIDAgMWVtO1xuICB9XG4gICNzaWRlYmFyLmluYWN0aXZlIHtcbiAgICBtYXJnaW4tbGVmdDogLTgwcHg7XG4gIH1cbiAgI3NpZGViYXJGb290ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvLyBzaG93IHNpZGViYXIgYmFja2Ryb3Agb24gbW9iaWxlIGRldmljZXNcbiAgI3NpZGViYXItYmFja2Ryb3Age1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIHZpc2liaWxpdHk7XG4gICAgdG9wOiA1MnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB6LWluZGV4OiAzO1xuICB9XG5cbiAgLmJhY2tkcm9wLXZpc2libGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLmJhY2tkcm9wLWhpZGRlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1cbiIsIi8qIEZhcmJrb256ZXB0IFdlYnNpdGUgKi9cbiNzaWRlYmFyIHtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDRlbSk7XG4gIG1hcmdpbi10b3A6IDRlbTtcbiAgYmFja2dyb3VuZDogI2I0ZmZmZjtcbiAgY29sb3I6ICMwMDdjOTE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEyO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTsgfVxuXG4jc2lkZWJhci5pbmFjdGl2ZSB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuI3NpZGViYXIgdWwgcCB7XG4gIGNvbG9yOiAjMDA3YzkxO1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbiNzaWRlYmFyIGEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEuMWVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbiNzaWRlYmFyLmluYWN0aXZlIC5zaWRlYmFyLWhlYWRlciBwIHtcbiAgY29sb3I6ICMwMDdjOTE7IH1cblxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpOyB9XG5cbiNzaWRlYmFyLmluYWN0aXZlIHVsIGxpIGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuI3NpZGViYXIgdWwgbGkuaW5hY3RpdmUgPiBhLCBhW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcbiAgY29sb3I6ICMwMDdjOTE7XG4gIGJhY2tncm91bmQ6ICNiNGZmZmY7IH1cblxuI3NpZGViYXJGb290ZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7IH1cblxuLyogU2FtZSBkcm9wZG93biBsaW5rcyBwYWRkaW5nKi9cbiNzaWRlYmFyLmFjdGl2ZSB1bCB1bCBhIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50OyB9XG5cbi8qIENoYW5naW5nIHRoZSBhcnJvdyBwb3NpdGlvbiB0byBib3R0b20gY2VudGVyIHBvc2l0aW9uLFxuICAgdHJhbnNsYXRlWCg1MCUpIHdvcmtzIHdpdGggcmlnaHQ6IDUwJVxuICAgdG8gYWNjdXJhdGVseSAgY2VudGVyIHRoZSBhcnJvdyAqL1xuI3NpZGViYXIuYWN0aXZlIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7IH1cblxuI3NpZGViYXJDb2xsYXBzZUJvdHRvbSB7XG4gIGJhY2tncm91bmQ6ICNiNGZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMwMDdjOTE7IH1cblxuI3NpZGViYXJDb2xsYXBzZUJvdHRvbSBzcGFuIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjYjRmZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBjdWJpYy1iZXppZXIoMC44MSwgLTAuMzMsIDAuMzQ1LCAxLjM3NSk7XG4gIG9wYWNpdHk6IDE7IH1cblxuI3NpZGViYXItYmFja2Ryb3Age1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5mbGV4Qm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxuXG4uc2lkYmFyLWRyb3Bkb3duLXRvZ2dsZSB7XG4gIGNvbG9yOiAjMDA3YzkxO1xuICBvdXRsaW5lOiBub25lOyB9XG5cbi5zaWRlYmFyLXRleHQtdG9nZ2xlIHtcbiAgY29sb3I6ICMwMDdjOTE7XG4gIGhlaWdodDogM3JlbTsgfVxuICAuc2lkZWJhci10ZXh0LXRvZ2dsZSAuc2lkYmFyLWRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6ICMwMDdjOTE7IH1cbiAgLnNpZGViYXItdGV4dC10b2dnbGUgLm5hdmJhci10ZXh0IHtcbiAgICBjb2xvcjogIzAwN2M5MTsgfVxuXG4ubmF2LWxpbmsge1xuICBjb2xvcjogIzAwN2M5MTsgfVxuXG4ubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogI2I0ZmZmZjtcbiAgYmFja2dyb3VuZDogIzAwN2M5MTsgfVxuXG4uc2lkZWJhci10ZXh0LXRvZ2dsZTpob3ZlciB7XG4gIGNvbG9yOiAjYjRmZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDA3YzkxOyB9XG4gIC5zaWRlYmFyLXRleHQtdG9nZ2xlOmhvdmVyIC5zaWRiYXItZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogI2I0ZmZmZjsgfVxuICAuc2lkZWJhci10ZXh0LXRvZ2dsZTpob3ZlciAubmF2YmFyLXRleHQge1xuICAgIGNvbG9yOiAjYjRmZmZmOyB9XG5cbi5zZWxlY3RlZCB7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgIzAwN2M5MTsgfVxuXG4uc3Vic2VsZWN0ZWQge1xuICBmb250LXdlaWdodDogODAwOyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjc2lkZWJhciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogNGVtO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmgpOyB9XG4gICNzaWRlYmFyIGEge1xuICAgIHBhZGRpbmctbGVmdDogMWVtOyB9XG4gICNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMWVtIDAgMCAxZW07IH1cbiAgI3NpZGViYXIuaW5hY3RpdmUge1xuICAgIG1hcmdpbi1sZWZ0OiAtODBweDsgfVxuICAjc2lkZWJhckZvb3RlciB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAjc2lkZWJhci1iYWNrZHJvcCB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgdmlzaWJpbGl0eTtcbiAgICB0b3A6IDUycHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHotaW5kZXg6IDM7IH1cbiAgLmJhY2tkcm9wLXZpc2libGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gIC5iYWNrZHJvcC1oaWRkZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modules_shared_redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/shared/redux-store */ "./src/app/modules/shared/redux-store/index.ts");
/* harmony import */ var _modules_shared_services_current_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _sidebar_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar.config */ "./src/app/components/sidebar/sidebar.config.ts");










var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(store, currentUserService, router) {
        var _this = this;
        this.store = store;
        this.currentUserService = currentUserService;
        this.router = router;
        this.CONFIG = _sidebar_config__WEBPACK_IMPORTED_MODULE_9__["SIDE_BAR_CONFIG"];
        this.inProd = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production;
        this.faCaretDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCaretDown"];
        store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(function (state) { return state.sidebarState; }))
            .subscribe(function (state) { return _this.isActive = state.toggleSidebar; });
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    /**
     * tells store that sidebar button was used -> Sidebar needs to change
     */
    SidebarComponent.prototype.toggleSidebar = function () {
        this.store.dispatch({ type: _modules_shared_redux_store__WEBPACK_IMPORTED_MODULE_7__["TOGGLE_SIDEBAR"] });
    };
    SidebarComponent.prototype.hasUserPermissions = function (userPermissions) {
        return this.currentUserService.hasAnyPermisson(userPermissions);
    };
    SidebarComponent.prototype.getSidebarCollapseIcon = function () {
        return this.isActive ? 'angle-double-right' : 'angle-double-left';
    };
    SidebarComponent.prototype.existSubitems = function (subitems) {
        if (Object(_shared_functions__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(subitems)) {
            return false;
        }
        else if (subitems.length === 0) {
            return false;
        }
        return true;
    };
    SidebarComponent.prototype.isSelected = function (itemroute) {
        return (this.router.url.indexOf(itemroute) >= 0);
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss"), __webpack_require__(/*! ./../../app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _modules_shared_services_current_user__WEBPACK_IMPORTED_MODULE_8__["CurrentUserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.config.ts":
/*!******************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.config.ts ***!
  \******************************************************/
/*! exports provided: SIDE_BAR_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDE_BAR_CONFIG", function() { return SIDE_BAR_CONFIG; });
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services */ "./src/app/modules/shared/services/index.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");


var SIDE_BAR_CONFIG = [
    {
        label: 'SIDEBAR.HOME',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"],
        route: '/home',
        permissons: [],
        subitems: []
    },
    {
        label: 'SIDEBAR.VEREINE',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSitemap"],
        route: '/vereine',
        permissons: [],
        subitems: []
    },
    {
        label: 'SIDEBAR.VERWALTUNG',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArchive"],
        route: '/verwaltung',
        permissons: [_shared_services__WEBPACK_IMPORTED_MODULE_0__["UserPermission"].CAN_READ_STAMMDATEN, _shared_services__WEBPACK_IMPORTED_MODULE_0__["UserPermission"].CAN_MODIFY_SYSTEMDATEN],
        subitems: [
            {
                label: 'DSB Mitglieder',
                route: '/verwaltung/dsbmitglieder',
                permissons: [_shared_services__WEBPACK_IMPORTED_MODULE_0__["UserPermission"].CAN_READ_STAMMDATEN, _shared_services__WEBPACK_IMPORTED_MODULE_0__["UserPermission"].CAN_MODIFY_SYSTEMDATEN]
            },
            {
                label: 'Klassen',
                route: '/verwaltung/klassen',
                permissons: [_shared_services__WEBPACK_IMPORTED_MODULE_0__["UserPermission"].CAN_READ_STAMMDATEN, _shared_services__WEBPACK_IMPORTED_MODULE_0__["UserPermission"].CAN_MODIFY_SYSTEMDATEN]
            },
            {
                label: 'Vereine',
                route: '/verwaltung/vereine',
                permissons: [_shared_services__WEBPACK_IMPORTED_MODULE_0__["UserPermission"].CAN_READ_STAMMDATEN, _shared_services__WEBPACK_IMPORTED_MODULE_0__["UserPermission"].CAN_MODIFY_SYSTEMDATEN]
            },
            {
                label: 'Ligen',
                route: '/verwaltung/liga',
                permissons: [_shared_services__WEBPACK_IMPORTED_MODULE_0__["UserPermission"].CAN_READ_STAMMDATEN, _shared_services__WEBPACK_IMPORTED_MODULE_0__["UserPermission"].CAN_MODIFY_SYSTEMDATEN]
            }
        ]
    },
    {
        label: 'SIDEBAR.WETTKAMPF',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBullseye"],
        route: '/wettkaempfe',
        permissons: [_shared_services__WEBPACK_IMPORTED_MODULE_0__["UserPermission"].CAN_READ_WETTKAMPF, _shared_services__WEBPACK_IMPORTED_MODULE_0__["UserPermission"].CAN_MODIFY_WETTKAMPF],
        subitems: []
    },
    {
        label: 'SIDEBAR.SPORTJAHRESPLAN',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCalendarAlt"],
        route: '/sportjahresplan',
        permissons: [_shared_services__WEBPACK_IMPORTED_MODULE_0__["UserPermission"].CAN_READ_SPORTJAHR, _shared_services__WEBPACK_IMPORTED_MODULE_0__["UserPermission"].CAN_MODIFY_SPORTJAHR],
        subitems: []
    },
    {
        label: 'SIDEBAR.SETTINGS',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCog"],
        route: '/settings',
        permissons: [_shared_services__WEBPACK_IMPORTED_MODULE_0__["UserPermission"].CAN_READ_SYSTEMDATEN, _shared_services__WEBPACK_IMPORTED_MODULE_0__["UserPermission"].CAN_MODIFY_SYSTEMDATEN],
        subitems: []
    },
    {
        label: 'SIDEBAR.PLAYGROUND',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFootballBall"],
        route: '/playground',
        permissons: [],
        subitems: [],
        inProdVisible: false
    }
];


/***/ }),

/***/ "./src/app/modules/home/components/home/home.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/home/components/home/home.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-common-dialog [config]=\"config\">\n\n  <div id=\"homePage\">\n    <h2 class=\"homeHeading\">{{'HOME.HOME.WELCOME' | translate }}</h2>\n    <p class=\"homeText\">{{ 'HOME.HOME.CONTENT' | translate }}</p>\n\n    <div class=\"homeContent\">\n\n      <!-- Row 1 -->\n      <div class=\"flexChild\">\n        <img class=\"mosaikImg\"\n             src=\"../../../../../assets/img/home_group.png\">\n      </div>\n\n      <div class=\"flexChild\">\n        <h3><a class=\"blackLink\"\n               routerLink=\"/wettkaempfe\">{{ 'HOME.HOME.WETTKAEMPFE' | translate }}</a></h3>\n\n        <table id=\"example\"\n               class=\"table table-hover table-sm table-responsive-sm thead-light table-striped\"\n               style=\"width:100%\">\n          <!-- headlines -->\n          <thead>\n          <tr>\n            <th>{{ 'TABLE.DATE' | translate }}</th>\n            <th>{{ 'TABLE.TIME' | translate }}</th>\n            <th>{{ 'TABLE.LIGA' | translate }}</th>\n            <th>{{ 'TABLE.PLACE' | translate }}</th>\n          </tr>\n          </thead>\n\n          <!-- Rows -->\n          <tbody>\n          <tr>\n            <td>03.11.2018</td>\n            <td>14:00</td>\n            <td>2. Bundesliga</td>\n            <td>Welzheim</td>\n          </tr>\n\n          <tr>\n            <td>17.11.2018</td>\n            <td>14:00</td>\n            <td>Landesliga Nord Recurve</td>\n            <td>Welzheim</td>\n          </tr>\n\n          <tr>\n            <td>17.11.2018</td>\n            <td>10:00</td>\n            <td>Landesliga A Compound</td>\n            <td>Hochdorf o. Essendorf</td>\n\n          <tr>\n            <td>17.11.2018</td>\n            <td>14:00</td>\n            <td>Württembergliga Compound</td>\n            <td>Hochdorf o. Essendorf</td>\n          </tr>\n\n          <tr>\n            <td>18.11.2018</td>\n            <td>10:00</td>\n            <td>Landesliga Süd Recurve</td>\n            <td>Hochdorf o. Essendorf</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <!-- Row 2 -->\n      <div class=\"flexChild\">\n        <h3>{{ 'HOME.HOME.BOX1HEADING' | translate }}</h3>\n        <p>{{ 'HOME.HOME.BOX1CONTENT' | translate }}</p>\n      </div>\n\n      <div class=\"flexChild\">\n        <img class=\"mosaikImg\"\n             src=\"../../../../../assets/img/home_halle.png\">\n      </div>\n\n    </div>\n</div>\n\n</bla-common-dialog>\n"

/***/ }),

/***/ "./src/app/modules/home/components/home/home.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/home/components/home/home.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Farbkonzept Website */\n.homeContent {\n  margin: 5px;\n  padding: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  align-content: space-around;\n  flex-wrap: wrap; }\n.flexChild {\n  flex: 1 0 45%;\n  margin: 20px;\n  margin-top: 50px; }\n.mosaikImg {\n  width: 90%; }\n.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {\n  background-color: #ffc107; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBQTtBQVNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGVBQWUsRUFBQTtBQUlqQjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7QUFJbEI7RUFDRSxVQUFVLEVBQUE7QUFHWjtFQUNFLHlCQTdCaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZhcmJrb256ZXB0IFdlYnNpdGUgKi9cbiRwcmltYXJ5OiAjMDJiZGQ1OyAvLyBMaW5rcywgTmF2YmFyXG4kcHJpbWFyeS1saWdodDogI2I0ZmZmZjsgLy8gU2lkZWJhci1CYWNrZ3JvdW5kXG4kcHJpbWFyeS1kYXJrOiAjMDA3YzkxOyAvLyBTaWRlYmFyLUZvbnRcbiRzZWNvbmRhcnk6ICNmZmMxMDc7IC8vIGhvdmVyIFRhYmxlc1xuJHNlY29uZGFyeS1saWdodDogI2ZmZjM1MDtcbiRzZWNvbmRhcnktZGFyazogI2ZmODMzYTsgLy8gaG92ZXIgTGlua3MsIExvZ29cblxuLy8gYmFzaWMgY3NzIG9mIGNvbnRlbnRcbi5ob21lQ29udGVudCB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi8vIGNvbnRhaW5lciBmb3IgcGljdHVyZXMgYW5kIHRleHRcbi5mbGV4Q2hpbGQge1xuICBmbGV4OiAxIDAgNDUlOyAvLyA0NSUgLT4gdHdvIGluIG9uZSByb3dcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4vLyBjc3MgZm9yIEltYWdlcyBvZiBjb250YWluZXJzXG4ubW9zYWlrSW1nIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHRkLCAudGFibGUtaG92ZXIgdGJvZHkgdHI6aG92ZXIgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/home/components/home/home.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/home/components/home/home.component.ts ***!
  \****************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.config */ "./src/app/modules/home/components/home/home.config.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.config = _home_config__WEBPACK_IMPORTED_MODULE_2__["HOME_CONFIG"];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/modules/home/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ../../../../app.component.scss */ "./src/app/app.component.scss"), __webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/home/home.config.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/components/home/home.config.ts ***!
  \*************************************************************/
/*! exports provided: HOME_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_CONFIG", function() { return HOME_CONFIG; });
var HOME_CONFIG = {
    moduleTranslationKey: 'HOME',
    pageTitleTranslationKey: 'HOME.HOME.TITLE'
};


/***/ }),

/***/ "./src/app/modules/home/components/impressum/impressum.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/home/components/impressum/impressum.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-common-dialog [config]=\"config\">\n\n  <div>\n    <p>Angaben gemäß § 5 TMG</p>\n    <p>Gero Gras <br>\n       Nürtinger Str. 28/2<br>\n       72663 Großbettlingen <br>\n    </p>\n    <p><strong>Vertreten durch: </strong><br>\n      Gero Gras<br>\n    </p>\n    <p><strong>Kontakt:</strong> <br>\n      Telefon: 07022-2435521<br>\n      E-Mail: <a href=\"mailto:info@gras-it.de\">info@gras-it.de</a><br></p>\n    <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br>\n      Gero Gras <br>\n      Nürtinger Str. 28/2<br>\n      72663 Großbettlingen <br></p>\n\n    <p><strong>Haftungsausschluss: </strong><br><br>\n      <strong>Haftung für Inhalte</strong><br><br>\n      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und\n      Aktualität\n      der Inhalte können wir jedoch keine Gewähr übernehmen.\n      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen\n      Gesetzen\n      verantwortlich.\n      Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde\n      Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.\n      Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben\n      hiervon unberührt.\n      Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten\n      Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte\n      umgehend\n      entfernen.\n\n      <br><br><strong>Haftung für Links</strong><br><br>\n      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb\n      können wir für diese fremden Inhalte auch keine Gewähr übernehmen.\n      Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.\n      Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige\n      Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.\n      Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer\n      Rechtsverletzung nicht zumutbar.\n      Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.\n\n      <br><br><strong>Urheberrecht</strong><br><br>\n      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen\n      Urheberrecht.\n      Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des\n      Urheberrechtes\n      bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.\n      Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die\n      Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.\n      Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine\n      Urheberrechtsverletzung\n      aufmerksam werden, bitten wir um einen entsprechenden Hinweis.\n      Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.\n\n    <h1>Datenschutzerklärung</h1>\n\n    <h3 id=\"dsg-general-intro\"></h3>\n\n    <p>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen\n       Daten (nachfolgend kurz „Daten“)\n       im Rahmen der Erbringung unserer Leistungen sowie innerhalb unseres Onlineangebotes und der mit ihm verbundenen\n       Webseiten, Funktionen und Inhalte\n       sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam bezeichnet als\n       „Onlineangebot“).\n       Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung“ oder „Verantwortlicher“ verweisen wir\n       auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).<br>\n      <br></p>\n\n    <h3 id=\"dsg-general-controller\">Verantwortlicher</h3>\n\n    <p><span class=\"tsmcontroller\">Gras IT-Solutions<br>\n                                Gero Gras<br>\n                                Nürtinger Str. 28/2<br>\n                                72663 Großbettlingen<br>\n                                info@gras-it.de</span></p>\n\n    <p><span class=\"tsmcontroller\">Vertreten durch:<br>\n                                Gero Gras<br></span></p>\n\n    <p><span class=\"tsmcontroller\">Kontakt:<br>\n                                Telefon: 07022-2435521<br>\n                                E-Mail: <a href=\"mailto:info@gras-it.de\">info@gras-it.de</a></span></p>\n\n    <h3 id=\"dsg-general-datatype\">Arten der verarbeiteten Daten:</h3>\n\n    <p>- Bestandsdaten (z.B., Personen-Stammdaten, Namen oder Adressen).<br>\n       - Kontaktdaten (z.B., E-Mail, Telefonnummern).<br>\n       - Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).<br>\n       - Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).<br>\n       - Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen).<br></p>\n\n    <h3 id=\"dsg-general-datasubjects\">Kategorien betroffener Personen</h3>\n\n    <p>Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch\n       als „Nutzer“).<br></p>\n\n    <h3 id=\"dsg-general-purpose\">Zweck der Verarbeitung</h3>\n\n    <p>- Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte.<br>\n       - Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.<br>\n       - Sicherheitsmaßnahmen.<br>\n       - Reichweitenmessung/Marketing<br></p>\n\n    <h3 id=\"dsg-general-terms\">Verwendete Begrifflichkeiten</h3>\n\n    <p>„Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare\n       natürliche\n       Person (im Folgenden „betroffene Person“) beziehen;\n       als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels\n       Zuordnung\n       zu einer Kennung wie einem Namen, zu einer Kennnummer, zu\n       Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen\n       identifiziert\n       werden kann, die Ausdruck der physischen, physiologischen,\n       genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person\n       sind.<br>\n      <br>\n       „Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche\n       Vorgangsreihe im Zusammenhang mit personenbezogenen Daten.\n       Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten.<br>\n      <br>\n       „Pseudonymisierung“ die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten\n       ohne\n       Hinzuziehung zusätzlicher Informationen nicht mehr einer\n       spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert\n       aufbewahrt werden und technischen und organisatorischen Maßnahmen\n       unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder\n       identifizierbaren\n       natürlichen Person zugewiesen werden.<br>\n      <br>\n       „Profiling“ jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese\n       personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte,\n       die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung,\n       wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen,\n       Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder\n       vorherzusagen.<br>\n      <br>\n       Als „Verantwortlicher“ wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die\n       allein oder gemeinsam mit anderen über die Zwecke und Mittel der\n       Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.<br>\n      <br>\n       „Auftragsverarbeiter“ eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die\n       personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.<br></p>\n\n    <h3 id=\"dsg-general-legalbasis\">Maßgebliche Rechtsgrundlagen</h3>\n\n    <p>Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit.\n       Für Nutzer aus dem Geltungsbereich der Datenschutzgrundverordnung (DSGVO), d.h. der EU und des EWG gilt, sofern\n       die\n       Rechtsgrundlage in der\n       Datenschutzerklärung nicht genannt wird, Folgendes:<br>\n       Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO; Die\n       Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und\n       Durchführung vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO; Die\n       Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen\n       Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO; Für den Fall, dass lebenswichtige Interessen der betroffenen\n       Person\n       oder einer anderen natürlichen Person eine\n       Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.\n       Die\n       Rechtsgrundlage für die erforderliche Verarbeitung zur\n       Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die\n       dem Verantwortlichen übertragen wurde ist Art. 6 Abs. 1 lit. e\n       DSGVO. Die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1\n       lit.\n       f DSGVO.Die Verarbeitung von Daten zu anderen Zwecken als denen, zu denen sie ehoben wurden, bestimmt sich nach\n       den\n       Vorgaben des Art 6 Abs. 4 DSGVO.\n       Die Verarbeitung von besonderen Kategorien von Daten (entsprechend Art. 9 Abs. 1 DSGVO) bestimmt sich nach den\n       Vorgaben des Art. 9 Abs. 2 DSGVO.</p>\n\n    <h3 id=\"dsg-general-securitymeasures\">Sicherheitsmaßnahmen</h3>\n\n    <p>Wir treffen nach Maßgabe der gesetzlichen Vorgabenunter Berücksichtigung des Stands der Technik, der\n       Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der\n       Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und\n       Freiheiten natürlicher Personen, geeignete technische und\n       organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.<br>\n      <br>\n       Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten\n       durch Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe,\n       Weitergabe,\n       der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine\n       Wahrnehmung von Betroffenenrechten, Löschung von Daten und Reaktion auf\n       Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der\n       Entwicklung, bzw. Auswahl von Hardware, Software sowie Verfahren,\n       entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche\n       Voreinstellungen.<br></p>\n\n    <h3 id=\"dsg-general-coprocessing\">Zusammenarbeit mit Auftragsverarbeitern, gemeinsam Verantwortlichen und\n                                      Dritten</h3>\n\n    <p>Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und Unternehmen (Auftragsverarbeitern,\n       gemeinsam Verantwortlichen oder Dritten) offenbaren,\n       sie an diese übermitteln oder ihnen sonst Zugriff auf die Daten gewähren, erfolgt dies nur auf Grundlage einer\n       gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der Daten an\n       Dritte, wie an Zahlungsdienstleister, zur Vertragserfüllung erforderlich ist), Nutzer eingewilligt haben, eine\n       rechtliche Verpflichtung dies vorsieht oder auf Grundlage unserer\n       berechtigten Interessen (z.B. beim Einsatz von Beauftragten, Webhostern, etc.).<br>\n      <br>\n       Sofern wir Daten anderen Unternehmen unserer Unternehmensgruppe offenbaren, übermitteln oder ihnen sonst den\n       Zugriff gewähren, erfolgt dies insbesondere zu\n       administrativen Zwecken als berechtigtes Interesse und darüberhinausgehend auf einer den gesetzlichen Vorgaben\n       entsprechenden Grundlage.</p>\n\n    <h3 id=\"dsg-general-thirdparty\">Übermittlungen in Drittländer</h3>\n\n    <p>Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen Union (EU), des Europäischen\n       Wirtschaftsraums\n       (EWR) oder der Schweizer Eidgenossenschaft) verarbeiten oder dies im Rahmen der Inanspruchnahme von Diensten\n       Dritter oder Offenlegung, bzw. Übermittlung von Daten an andere Personen oder Unternehmen geschieht, erfolgt dies\n       nur, wenn es zur Erfüllung unserer (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung, aufgrund einer\n       rechtlichen Verpflichtung oder auf Grundlage unserer berechtigten Interessen geschieht. Vorbehaltlich\n       gesetzlicher\n       oder vertraglicher Erlaubnisse, verarbeiten oder lassen wir die Daten in einem Drittland nur beim Vorliegen der\n       gesetzlichen Voraussetzungen. D.h. die Verarbeitung erfolgt z.B. auf Grundlage besonderer Garantien, wie der\n       offiziell\n       anerkannten Feststellung eines der EU entsprechenden Datenschutzniveaus (z.B. für die USA durch das „Privacy\n       Shield“) oder Beachtung offiziell anerkannter spezieller vertraglicher Verpflichtungen.</p>\n\n    <h3 id=\"dsg-general-rightssubject\">Rechte der betroffenen Personen</h3>\n\n    <p>Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf\n       Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen\n       Vorgaben.<br>\n      <br>\n       Sie haben entsprechend. den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten\n       oder\n       die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.<br>\n      <br>\n       Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht zu verlangen, dass betreffende Daten unverzüglich\n       gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der\n       Daten zu verlangen.<br>\n      <br>\n       Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns bereitgestellt haben nach Maßgabe\n       der gesetzlichen Vorgaben zu erhalten und deren Übermittlung an andere Verantwortliche zu fordern.<br>\n      <br>\n       SSie haben ferner nach Maßgabe der gesetzlichen Vorgaben das Recht, eine Beschwerde bei der zuständigen\n       Aufsichtsbehörde einzureichen.</p>\n\n    <h3 id=\"dsg-general-revokeconsent\">Widerrufsrecht</h3>\n\n    <p>Sie haben das Recht, erteilte Einwilligungen mit Wirkung für die Zukunft zu widerrufen.</p>\n\n    <h3 id=\"dsg-general-object\">Widerspruchsrecht</h3>\n\n    <p>Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach Maßgabe der gesetzlichen Vorgaben jederzeit\n       widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung\n       erfolgen.</p>\n\n    <h3 id=\"dsg-general-cookies\">Cookies und Widerspruchsrecht bei Direktwerbung</h3>\n\n    <p>Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden. Innerhalb der\n       Cookies können unterschiedliche Angaben gespeichert werden. Ein Cookie dient primär dazu, die Angaben zu einem\n       Nutzer (bzw. dem Gerät auf dem das Cookie gespeichert ist) während oder auch nach seinem Besuch innerhalb eines\n       Onlineangebotes zu speichern. Als temporäre Cookies, bzw. „Session-Cookies“ oder „transiente Cookies“, werden\n       Cookies bezeichnet, die gelöscht werden, nachdem ein Nutzer ein Onlineangebot verlässt und seinen Browser\n       schließt.\n       In einem solchen Cookie kann z.B. der Inhalt eines Warenkorbs in einem Onlineshop oder ein Login-Status\n       gespeichert\n       werden. Als „permanent“ oder „persistent“ werden Cookies bezeichnet, die auch nach dem Schließen des Browsers\n       gespeichert bleiben. So kann z.B. der Login-Status gespeichert werden, wenn die Nutzer diese nach mehreren Tagen\n       aufsuchen. Ebenso können in einem solchen Cookie die Interessen der Nutzer gespeichert werden, die für\n       Reichweitenmessung oder Marketingzwecke verwendet werden. Als „Third-Party-Cookie“ werden Cookies bezeichnet, die\n       von anderen Anbietern als dem Verantwortlichen, der das Onlineangebot betreibt, angeboten werden (andernfalls,\n       wenn\n       es nur dessen Cookies sind spricht man von „First-Party Cookies“).<br>\n      <br>\n       Wir können temporäre und permanente Cookies einsetzen und klären hierüber im Rahmen unserer Datenschutzerklärung\n       auf.<br>\n      <br>\n       Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die\n       entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies können in\n       den\n       Systemeinstellungen des Browsers gelöscht werden. Der Ausschluss von Cookies kann zu Funktionseinschränkungen\n       dieses Onlineangebotes führen.<br>\n      <br>\n       Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing\n       eingesetzten Cookies kann bei einer Vielzahl der Dienste, vor allem im Fall des\n       Trackings, über die US-amerikanische Seite <a href=\"http://www.aboutads.info/choices/\">http://www.aboutads.info/choices/</a>\n       oder die\n       EU-Seite <a href=\"http://www.youronlinechoices.com/\">http://www.youronlinechoices.com/</a> erklärt\n       werden. Des Weiteren kann die Speicherung von Cookies mittels deren Abschaltung in den\n       Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass dann\n       gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden\n       können.</p>\n\n    <h3 id=\"dsg-general-erasure\">Löschung von Daten</h3>\n\n    <p>Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht oder in ihrer Verarbeitung\n       eingeschränkt. Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die bei uns\n       gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung\n       keine gesetzlichen Aufbewahrungspflichten entgegenstehen.<br>\n      <br>\n       Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind,\n       wird\n       deren Verarbeitung eingeschränkt. D.h. die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das\n       gilt\n       z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.<br>\n      <br>\n    </p>\n\n    <h3>Änderungen und Aktualisierungen der Datenschutzerklärung</h3>\n\n    <p>Wir bitten Sie sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die\n       Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich\n       machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung)\n       oder eine sonstige individuelle Benachrichtigung erforderlich wird.<br>\n      <br>\n    </p>\n\n    <h3>Registrierfunktion</h3>\n\n    <p>Nutzer können ein Nutzerkonto anlegen. Im Rahmen der Registrierung werden die erforderlichen Pflichtangaben den\n       Nutzern mitgeteilt und auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO zu Zwecken der Bereitstellung des\n       Nutzerkontos\n       verarbeitet. Zu den verarbeiteten Daten gehören insbesondere die Login-Informationen (Name, Passwort sowie eine\n       E-Mailadresse). Die im Rahmen der Registrierung eingegebenen Daten werden für die Zwecke der Nutzung des\n       Nutzerkontos und dessen Zwecks verwendet.<br>\n      <br>\n       Die Nutzer können über Informationen, die für deren Nutzerkonto relevant sind, wie z.B. technische Änderungen,\n       per\n       E-Mail informiert werden. Wenn Nutzer ihr Nutzerkonto\n       gekündigt haben, werden deren Daten im Hinblick auf das Nutzerkonto, vorbehaltlich einer gesetzlichen\n       Aufbewahrungspflicht, gelöscht. Es obliegt den Nutzern, ihre Daten bei erfolgter Kündigung vor dem Vertragsende\n       zu\n       sichern. Wir sind berechtigt, sämtliche während der Vertragsdauer gespeicherten Daten des Nutzers\n       unwiederbringlich\n       zu löschen.<br>\n      <br>\n       Im Rahmen der Inanspruchnahme unserer Registrierungs- und Anmeldefunktionen sowie der Nutzung des Nutzerkontos,\n       speichern wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung. Die Speicherung erfolgt auf\n       Grundlage\n       unserer berechtigten Interessen, als auch der Nutzer an Schutz vor Missbrauch und sonstiger unbefugter Nutzung.\n       Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, außer sie ist zur Verfolgung unserer\n       Ansprüche\n       erforderlich oder es besteht hierzu besteht eine gesetzliche Verpflichtung gem. Art. 6 Abs. 1 lit. c. DSGVO. Die\n       IP-Adressen werden spätestens nach 7 Tagen anonymisiert oder gelöscht.<br>\n      <br>\n    </p>\n\n    <h3 id=\"dsg-contact\">Kontaktaufnahme</h3>\n\n    <p><span class=\"ts-muster-content\">Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via sozialer Medien) werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b. (im Rahmen vertraglicher-/vorvertraglicher Beziehungen), Art. 6 Abs. 1 lit. f. (andere Anfragen) DSGVO verarbeitet.. Die Angaben der Nutzer können in einem Customer-Relationship-Management System (\"CRM System\") oder vergleichbarer Anfragenorganisation gespeichert werden.<br>\n                                <br>\n                                Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir überprüfen die Erforderlichkeit alle zwei Jahre; Ferner gelten die gesetzlichen Archivierungspflichten.</span>\n    </p>\n\n    <h3>Newsletter</h3>\n\n    <p>Mit den nachfolgenden Hinweisen informieren wir Sie über die Inhalte unseres Newsletters sowie das Anmelde-,\n       Versand- und das statistische Auswertungsverfahren sowie Ihre Widerspruchsrechte auf. Indem Sie unseren\n       Newsletter\n       abonnieren, erklären Sie sich mit dem Empfang und den beschriebenen Verfahren einverstanden.<br>\n      <br>\n       Inhalt des Newsletters: Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen mit\n       werblichen Informationen (nachfolgend „Newsletter“) nur mit der Einwilligung der Empfänger oder einer\n       gesetzlichen\n       Erlaubnis. Sofern im Rahmen einer Anmeldung zum Newsletter dessen Inhalte konkret umschrieben werden, sind sie\n       für\n       die Einwilligung der Nutzer maßgeblich. Im Übrigen enthalten unsere Newsletter Informationen zu unseren\n       Leistungen\n       und uns.<br>\n      <br>\n       Double-Opt-In und Protokollierung: Die Anmeldung zu unserem Newsletter erfolgt in einem sog.\n       Double-Opt-In-Verfahren. D.h. Sie erhalten nach der Anmeldung eine E-Mail, in der Sie um die Bestätigung Ihrer\n       Anmeldung gebeten werden. Diese Bestätigung ist notwendig, damit sich niemand mit fremden E-Mailadressen anmelden\n       kann. Die Anmeldungen zum Newsletter werden protokolliert, um den Anmeldeprozess entsprechend den rechtlichen\n       Anforderungen nachweisen zu können. Hierzu gehört die Speicherung des Anmelde- und des Bestätigungszeitpunkts,\n       als\n       auch der IP-Adresse. Ebenso werden die Änderungen Ihrer bei dem Versanddienstleister gespeicherten Daten\n       protokolliert.<br>\n      <br>\n       Anmeldedaten: Um sich für den Newsletter anzumelden, reicht es aus, wenn Sie Ihre E-Mailadresse angeben. Optional\n       bitten wir Sie einen Namen, zwecks persönlicher Ansprache\n       im Newsletters anzugeben.<br>\n      <br>\n       Der Versand des Newsletters und die mit ihm verbundene Erfolgsmessung erfolgen auf Grundlage einer Einwilligung\n       der\n       Empfänger gem. Art. 6 Abs. 1 lit. a, Art. 7 DSGVO i.V.m § 7 Abs. 2 Nr. 3 UWG oder falls eine Einwilligung nicht\n       erforderlich ist, auf Grundlage unserer berechtigten Interessen am Direktmarketing gem. Art. 6 Abs. 1 lt. f.\n       DSGVO\n       i.V.m. § 7 Abs. 3 UWG<br>\n      <br>\n       Die Protokollierung des Anmeldeverfahrens erfolgt auf Grundlage unserer berechtigten Interessen gem. Art. 6 Abs.\n       1\n       lit. f DSGVO. Unser Interesse richtet sich auf den Einsatz eines nutzerfreundlichen sowie sicheren\n       Newslettersystems, das sowohl unseren geschäftlichen Interessen dient, als auch den Erwartungen der Nutzer\n       entspricht und uns ferner den Nachweis von Einwilligungen erlaubt.<br>\n      <br>\n       Kündigung/Widerruf - Sie können den Empfang unseres Newsletters jederzeit kündigen, d.h. Ihre Einwilligungen\n       widerrufen. Einen Link zur Kündigung des Newsletters finden Sie am Ende eines jeden Newsletters. Wir können die\n       ausgetragenen E-Mailadressen bis zu drei Jahren auf Grundlage unserer berechtigten Interessen speichern bevor wir\n       sie löschen, um eine ehemals gegebene Einwilligung nachweisen zu können. Die Verarbeitung dieser Daten wird auf\n       den\n       Zweck einer möglichen Abwehr von Ansprüchen beschränkt. Ein individueller Löschungsantrag ist jederzeit möglich,\n       sofern zugleich das ehemalige Bestehen einer Einwilligung bestätigt wird.<br>\n      <br>\n    </p>\n\n    <h3>Newsletter - Mailjet</h3>\n\n    <p>Der Versand der Newsletter erfolgt mittels des Versanddienstleisters Mailjet SAS,13-13 bis, rue de l’Aubrac,\n       75012\n       Paris, France. Die Datenschutzbestimmungen des\n       Versanddienstleisters können Sie hier einsehen: <a href=\"https://www.mailjet.de/privacy-policy/\">https://www.mailjet.de/privacy-policy/</a>.\n       Der Versanddienstleister wird auf Grundlage unserer berechtigten Interessen gem.\n       Art. 6 Abs. 1 lit. f. DSGVO und eines Auftragsverarbeitungsvertrages gem. Art. 28 Abs. 3 S.\n       1 DSGVO eingesetzt.<br>\n      <br>\n       Der Versanddienstleister kann die Daten der Empfänger in pseudonymer Form, d.h. ohne Zuordnung zu einem Nutzer,\n       zur\n       Optimierung oder Verbesserung der eigenen Services nutzen, z.B. zur technischen Optimierung des Versandes und der\n       Darstellung der Newsletter oder für statistische Zwecke verwenden. Der Versanddienstleister nutzt die Daten\n       unserer Newsletterempfänger jedoch nicht, um diese selbst anzuschreiben oder um die Daten an Dritte\n       weiterzugeben.<br>\n      <br>\n    </p>\n\n    <h3 id=\"dsg-hostingprovider\">Hosting und E-Mail-Versand</h3>\n\n    <p><span class=\"ts-muster-content\">Die von uns in Anspruch genommenen Hosting-Leistungen dienen der Zurverfügungstellung der folgenden Leistungen: Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste, E-Mail-Versand, Sicherheitsleistungen sowie technische Wartungsleistungen, die wir zum Zwecke des Betriebs dieses Onlineangebotes einsetzen.<br>\n                                <br>\n                                Hierbei verarbeiten wir, bzw. unser Hostinganbieter Bestandsdaten, Kontaktdaten, Inhaltsdaten, Vertragsdaten, Nutzungsdaten, Meta- und Kommunikationsdaten von Kunden, Interessenten und Besuchern dieses Onlineangebotes auf Grundlage unserer berechtigten Interessen an einer effizienten und sicheren Zurverfügungstellung dieses Onlineangebotes\n                                gem. Art. 6 Abs. 1 lit. f DSGVO i.V.m. Art. 28 DSGVO (Abschluss Auftragsverarbeitungsvertrag).</span>\n    </p>\n\n    <h3 id=\"dsg-logfiles\">Erhebung von Zugriffsdaten und Logfiles</h3>\n\n    <p><span class=\"ts-muster-content\">Wir, bzw. unser Hostinganbieter, erhebt auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO Daten über\n                                jeden Zugriff auf den Server, auf dem sich dieser Dienst befindet (sogenannte Serverlogfiles). Zu den Zugriffsdaten gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite), IP-Adresse und der anfragende Provider.<br>\n                                <br>\n                               Logfile-Informationen werden aus Sicherheitsgründen (z.B. zur Aufklärung von Missbrauchs- oder Betrugshandlungen) für die Dauer von maximal 7 Tagen gespeichert und danach gelöscht. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.</span>\n    </p>\n\n    <h3 id=\"dsg-matomo\">Reichweitenmessung mit Matomo</h3>\n\n    <p><span class=\"ts-muster-content\">Im Rahmen der Reichweitenanalyse von Matomo werden\n                                auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse,\n                                Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6\n                                Abs. 1 lit. f. DSGVO) die folgenden Daten verarbeitet: der von Ihnen verwendete\n                                Browsertyp und die Browserversion, das von Ihnen verwendete Betriebssystem, Ihr\n                                Herkunftsland, Datum und Uhrzeit der Serveranfrage, die Anzahl der Besuche, Ihre\n                                Verweildauer auf der Website sowie die von Ihnen betätigten externen Links. Die\n                                IP-Adresse der Nutzer wird anonymisiert, bevor sie gespeichert wird.<br>\n                                <br>\n                                Matomo verwendet Cookies, die auf dem Computer der Nutzer gespeichert werden und die\n                                eine Analyse der Benutzung unseres Onlineangebotes durch die Nutzer ermöglichen.\n                                Dabei können aus den verarbeiteten Daten pseudonyme Nutzungsprofile der Nutzer\n                                erstellt werden. Die Cookies haben eine Speicherdauer von einer Woche. Die durch das\n                                Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden nur auf\n                                unserem Server gespeichert und nicht an Dritte weitergegeben.<br>\n                                <br>\n                                Nutzer können der anonymisierten Datenerhebung durch das Programm Matomo jederzeit\n                                mit Wirkung für die Zukunft widersprechen, indem sie auf den untenstehenden Link\n                                klicken. In diesem Fall wird in ihrem Browser ein sog. Opt-Out-Cookie abgelegt, was zur\n                                Folge hat, dass Matomo keinerlei Sitzungsdaten mehr erhebt. Wenn Nutzer ihre Cookies\n                                löschen, so hat dies jedoch zur Folge, dass auch das Opt-Out-Cookie gelöscht\n                                wird und daher von den Nutzern erneut aktiviert werden muss.<br>\n                                <br>\n                                Die Logs mit den Daten der Nutzer werden nach spätestens 6 Monaten\n                                gelöscht.<br>\n                                <br>\n                                <iframe style=\"border: 0; height: 200px; width: 600px;\"\n                                        src=\"https://stats.gras-it.de/index.php?module=CoreAdminHome&amp;action=optOut&amp;language=de&amp;backgroundColor=&amp;fontColor=&amp;fontSize=&amp;fontFamily=\"></iframe>.</span>\n    </p>\n\n    <h3>Onlinepräsenzen in sozialen Medien</h3>\n\n    <p>Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und Plattformen, um mit den dort aktiven Kunden,\n       Interessenten und Nutzern kommunizieren und sie dort über unsere Leistungen informieren zu können.<br>\n      <br>\n       Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der Europäischen Union verarbeitet werden\n       können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer\n       erschwert werden könnte. Im Hinblick auf US-Anbieter die unter dem Privacy-Shield zertifiziert sind, weisen wir\n       darauf hin, dass sie sich damit verpflichten, die Datenschutzstandards der EU einzuhalten.<br>\n      <br>\n       Ferner werden die Daten der Nutzer im Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So können z.B.\n       aus dem Nutzungsverhalten und sich daraus ergebenden Interessen der Nutzer Nutzungsprofile erstellt werden. Die\n       Nutzungsprofile können wiederum verwendet werden, um z.B. Werbeanzeigen innerhalb und außerhalb der Plattformen\n       zu\n       schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im Regelfall Cookies auf\n       den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer gespeichert\n       werden. Ferner können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern verwendeten Geräte\n       gespeichert werden (insbesondere wenn die Nutzer Mitglieder der jeweiligen Plattformen sind und bei diesen\n       eingeloggt sind).<br>\n      <br>\n       Die Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf Grundlage unserer berechtigten Interessen an\n       einer effektiven Information der Nutzer und Kommunikation mit den Nutzern gem. Art. 6 Abs. 1 lit. f. DSGVO. Falls\n       die Nutzer von den jeweiligen Anbietern der Plattformen um eine Einwilligung in die vorbeschriebene\n       Datenverarbeitung gebeten werden, ist die Rechtsgrundlage der Verarbeitung Art. 6 Abs. 1 lit. a., Art. 7\n       DSGVO.<br>\n      <br>\n       Für eine detaillierte Darstellung der jeweiligen Verarbeitungen und der Widerspruchsmöglichkeiten (Opt-Out),\n       verweisen wir auf die nachfolgend verlinkten Angaben der Anbieter.<br>\n      <br>\n       Auch im Fall von Auskunftsanfragen und der Geltendmachung von Nutzerrechten, weisen wir darauf hin, dass diese am\n       effektivsten bei den Anbietern geltend gemacht werden können. Nur die Anbieter haben jeweils Zugriff auf die\n       Daten\n       der Nutzer und können direkt entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe\n       benötigen, dann können Sie sich an uns wenden.<br>\n      <br>\n       - Facebook, -Seiten, -Gruppen, (Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,\n       Irland)\n       auf Grundlage einer\n      <a href=\"https://www.facebook.com/legal/terms/page_controller_addendum\">Vereinbarung über gemeinsame Verarbeitung\n                                                                              personenbezogener Daten</a>\n       - Datenschutzerklärung:\n      <a href=\"https://www.facebook.com/about/privacy/\">https://www.facebook.com/about/privacy/</a>,\n       speziell für Seiten:\n      <a href=\"https://www.facebook.com/legal/terms/information_about_page_insights_data\">https://www.facebook.com/legal/terms/information_about_page_insights_data</a>,\n       Opt-Out:\n      <a href=\"https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fads%2Fpreferences%2F%3Fentry_product%3Dad_settings_screen\">https://www.facebook.com/settings?tab=ads</a>\n       und <a href=\"http://www.youronlinechoices.com/\">http://www.youronlinechoices.com</a>, Privacy Shield:\n      <a href=\"https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active\">https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active</a><br>\n      <br>\n       - Google/ YouTube (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) – Datenschutzerklärung:\n      <a href=\"https://policies.google.com/privacy\">https://policies.google.com/privacy</a>, Opt-Out:\n      <a href=\"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fadssettings.google.com%2Fauthenticated&followup=https%3A%2F%2Fadssettings.google.com%2Fauthenticated&flowName=GlifWebSignIn&flowEntry=ServiceLogin\">https://adssettings.google.com/authenticated</a>,\n       Privacy Shield:\n      <a href=\"https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active\">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active</a><br>\n      <br>\n       - Instagram (Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA) – Datenschutzerklärung/ Opt-Out:\n      <a href=\"https://help.instagram.com/519522125107875\">http://instagram.com/about/legal/privacy/</a>.<br>\n      <br>\n       - Twitter (Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA) - Datenschutzerklärung:\n      <a href=\"https://twitter.com/de/privacy\">https://twitter.com/de/privacy</a>, Opt-Out:\n      <a href=\"https://twitter.com/personalization\">https://twitter.com/personalization</a>, Privacy Shield:\n      <a href=\"https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active\">https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active</a>.<br>\n      <br>\n       - Pinterest (Pinterest Inc., 635 High Street, Palo Alto, CA, 94301, USA) – Datenschutzerklärung/ Opt-Out:\n      <a href=\"https://policy.pinterest.com/de/privacy-policy\">https://about.pinterest.com/de/privacy-policy</a>.\n       - LinkedIn (LinkedIn Ireland Unlimited Company Wilton Place, Dublin 2, Irland) - Datenschutzerklärung\n      <a href=\"https://www.linkedin.com/legal/privacy-policy\">https://www.linkedin.com/legal/privacy-policy</a> ,\n       Opt-Out: <a href=\"https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out\">https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out</a>,\n       Privacy Shield: <a href=\"https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active\">https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active</a>.<br>\n      <br>\n       - Xing (XING AG, Dammtorstraße 29-32, 20354 Hamburg, Deutschland) - Datenschutzerklärung/ Opt-Out:\n      <a href=\"https://privacy.xing.com/de/datenschutzerklaerung\">https://privacy.xing.com/de/datenschutzerklaerung</a>.<br>\n      <br>\n       - Wakalet (Wakelet Limited, 76 Quay Street, Manchester, M3 4PR, United Kingdom)\n       - Datenschutzerklärung/ Opt-Out:\n      <a href=\"https://wakelet.com/privacy.html\">https://wakelet.com/privacy.html</a>.<br>\n      <br>\n       - Soundcloud (SoundCloud Limited, Rheinsberger Str. 76/77, 10115 Berlin, Deutschland) - Datenschutzerklärung/\n       Opt-Out: <a href=\"https://soundcloud.com/pages/privacy\">https://soundcloud.com/pages/privacy</a>.\n    </p>\n\n\n    <h3 id=\"dsg-thirdparty-einleitung\">Einbindung von Diensten und Inhalten Dritter</h3>\n\n    <p><span class=\"ts-muster-content\">Wir setzen innerhalb unseres Onlineangebotes auf\n                                Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung\n                                und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f.\n                                DSGVO) Inhalts- oder Serviceangebote von Drittanbietern ein, um deren Inhalte und\n                                Services, wie z.B. Videos oder Schriftarten einzubinden (nachfolgend einheitlich\n                                bezeichnet als “Inhalte”).<br>\n                                <br>\n                                Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte, die IP-Adresse der\n                                Nutzer wahrnehmen, da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden\n                                könnten. Die IP-Adresse ist damit für die Darstellung dieser Inhalte\n                                erforderlich. Wir bemühen uns nur solche Inhalte zu verwenden, deren jeweilige\n                                Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden. Drittanbieter\n                                können ferner so genannte Pixel-Tags (unsichtbare Grafiken, auch als \"Web Beacons\"\n                                bezeichnet) für statistische oder Marketingzwecke verwenden. Durch die\n                                \"Pixel-Tags\" können Informationen, wie der Besucherverkehr auf den Seiten dieser\n                                Website ausgewertet werden. Die pseudonymen Informationen können ferner in Cookies\n                                auf dem Gerät der Nutzer gespeichert werden und unter anderem technische\n                                Informationen zum Browser und Betriebssystem, verweisende Webseiten, Besuchszeit sowie\n                                weitere Angaben zur Nutzung unseres Onlineangebotes enthalten, als auch mit solchen\n                                Informationen aus anderen Quellen verbunden werden.</span></p>\n\n    <h3 id=\"dsg-thirdparty-vimeo\">Vimeo</h3>\n\n    <p><span class=\"ts-muster-content\">Wir können die Videos der Plattform\n                                “Vimeo” des Anbieters Vimeo Inc., Attention: Legal Department, 555 West\n                                18th Street New York, New York 10011, USA, einbinden. Datenschutzerklärung:\n                                <a target=\"_blank\"\n                                   href=\"https://vimeo.com/privacy\">https://vimeo.com/privacy</a>. WIr\n                                weisen darauf hin, dass Vimeo Google Analytics einsetzen kann und verweisen hierzu auf\n                                die Datenschutzerklärung (<a target=\"_blank\"\n                                                             href=\"https://www.google.com/policies/privacy\">https://www.google.com/policies/privacy</a>)\n                                sowie Opt-Out-Möglichkeiten für Google-Analytics (<a target=\"_blank\"\n                                                                                     href=\"http://tools.google.com/dlpage/gaoptout?hl=de\">http://tools.google.com/dlpage/gaoptout?hl=de</a>)\n                                oder die Einstellungen von Google für die Datennutzung zu Marketingzwecken\n                                (<a target=\"_blank\"\n                                    href=\"https://adssettings.google.com/\">https://adssettings.google.com/.</a>).</span>\n    </p>\n\n    <h3 id=\"dsg-thirdparty-youtube\">Youtube</h3>\n\n    <p><span class=\"ts-muster-content\">Wir binden die Videos der Plattform\n                                “YouTube” des Anbieters Google LLC, 1600 Amphitheatre Parkway, Mountain\n                                View, CA 94043, USA, ein. Datenschutzerklärung: <a target=\"_blank\"\n                                                                                   href=\"https://www.google.com/policies/privacy/\">https://www.google.com/policies/privacy/</a>,\n                                Opt-Out: <a target=\"_blank\"\n                                            href=\"https://adssettings.google.com/authenticated\">https://adssettings.google.com/authenticated</a>.</span>\n    </p>\n\n    <h3 id=\"dsg-thirdparty-googlefonts\">Google Fonts</h3>\n\n    <p><span class=\"ts-muster-content\">Wir binden die Schriftarten (\"Google Fonts\") des\n                                Anbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein.\n                                Datenschutzerklärung: <a target=\"_blank\"\n                                                         href=\"https://www.google.com/policies/privacy/\">https://www.google.com/policies/privacy/</a>,\n                                Opt-Out: <a target=\"_blank\"\n                                            href=\"https://adssettings.google.com/authenticated\">https://adssettings.google.com/authenticated</a>.</span>\n    </p>\n\n    <h3 id=\"dsg-thirdparty-googlerecaptcha\">Google ReCaptcha</h3>\n\n    <p><span class=\"ts-muster-content\">Wir binden die Funktion zur Erkennung von Bots, z.B.\n                                bei Eingaben in Onlineformularen (\"ReCaptcha\") des Anbieters Google LLC, 1600\n                                Amphitheatre Parkway, Mountain View, CA 94043, USA, ein. Datenschutzerklärung:\n                                <a target=\"_blank\"\n                                   href=\"https://www.google.com/policies/privacy/\">https://www.google.com/policies/privacy/</a>,\n                                Opt-Out: <a target=\"_blank\"\n                                            href=\"https://adssettings.google.com/authenticated\">https://adssettings.google.com/authenticated</a>.</span>\n    </p>\n\n    <h3 id=\"dsg-thirdparty-openstreetmap\">OpenStreetMap</h3>\n\n    <p><span class=\"ts-muster-content\">Wir binden die Landkarten des Dienstes\n                                \"OpenStreetMap\" ein (<a target=\"_blank\"\n                                                        href=\"https://www.openstreetmap.de\">https://www.openstreetmap.de</a>), die auf Grundlage der\n                                Open Data Commons Open Database Lizenz (ODbL) durch die OpenStreetMap Foundation (OSMF)\n                                angeboten werden. Datenschutzerklärung: <a target=\"_blank\"\n                                                                           href=\"https://wiki.openstreetmap.org/wiki/Privacy_Policy\">https://wiki.openstreetmap.org/wiki/Privacy_Policy</a>.<br>\n\n                                <br>\n                                Nach unserer Kenntnis werden die Daten der Nutzer durch OpenStreetMap\n                                ausschließlich zu Zwecken der Darstellung der Kartenfunktionen und\n                                Zwischenspeicherung der gewählten Einstellungen verwendet. Zu diesen Daten\n                                können insbesondere IP-Adressen und Standortdaten der Nutzer gehören, die\n                                jedoch nicht ohne deren Einwilligung (im Regelfall im Rahmen der Einstellungen ihrer\n                                Mobilgeräte vollzogen), erhoben werden.<br>\n                                <br>\n                                Die Daten können in den USA verarbeitet werden. Weitere Informationen können\n                                Sie der Datenschutzerklärung von OpenStreetMap entnehmen: <a target=\"_blank\"\n                                                                                             href=\"https://wiki.openstreetmap.org/wiki/Privacy_Policy\">https://wiki.openstreetmap.org/wiki/Privacy_Policy</a>.</span>\n    </p>\n\n    <h3>Verwendung von Facebook Social Plugins</h3>\n\n    <p>Wir nutzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und\n       wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs.\n       1 lit. f. DSGVO) Social Plugins (\"Plugins\") des sozialen Netzwerkes facebook.com, welches von der Facebook\n       Ireland\n       Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland betrieben wird (\"Facebook\").<br>\n       Hierzu können z.B. Inhalte wie Bilder, Videos oder Texte und Schaltflächen gehören, mit denen Nutzer Inhalte\n       dieses\n       Onlineangebotes innerhalb von Facebook teilen können. Die Liste und das Aussehen der Facebook Social Plugins kann\n       hier eingesehen werden:\n      <a href=\"https://developers.facebook.com/docs/plugins/\">https://developers.facebook.com/docs/plugins/</a>.<br>\n      <br>\n       Facebook ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische\n       Datenschutzrecht einzuhalten\n       (<a href=\"https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active\">https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active</a>).<br>\n      <br>\n       Wenn ein Nutzer eine Funktion dieses Onlineangebotes aufruft, die ein solches Plugin enthält, baut sein Gerät\n       eine\n       direkte Verbindung mit den Servern von Facebook auf. Der Inhalt des Plugins wird von Facebook direkt an das Gerät\n       des Nutzers übermittelt und von diesem in das Onlineangebot eingebunden. Dabei können aus den verarbeiteten Daten\n       Nutzungsprofile der Nutzer erstellt werden. Wir haben daher keinen Einfluss auf den Umfang der Daten, die\n       Facebook\n       mit Hilfe dieses Plugins erhebt und informiert die Nutzer daher entsprechend unserem Kenntnisstand.<br>\n      <br>\n       Durch die Einbindung der Plugins erhält Facebook die Information, dass ein Nutzer die entsprechende Seite des\n       Onlineangebotes aufgerufen hat. Ist der Nutzer bei Facebook eingeloggt, kann Facebook den Besuch seinem\n       Facebook-Konto zuordnen. Wenn Nutzer mit den Plugins interagieren, zum Beispiel den Like Button betätigen oder\n       einen Kommentar abgeben, wird die entsprechende Information von Ihrem Gerät direkt an Facebook übermittelt und\n       dort\n       gespeichert. Falls ein Nutzer kein Mitglied von Facebook ist, besteht trotzdem die Möglichkeit, dass Facebook\n       seine\n       IP-Adresse in Erfahrung bringt und speichert. Laut Facebook wird in Deutschland nur eine anonymisierte IP-Adresse\n       gespeichert<br>\n      <br>\n       Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Facebook sowie die\n       diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz der Privatsphäre der Nutzer, können diese den\n       Datenschutzhinweisen von Facebook entnehmen:\n      <a href=\"https://www.facebook.com/about/privacy/\">https://www.facebook.com/about/privacy/</a>.<br>\n      <br>\n       Wenn ein Nutzer Facebookmitglied ist und nicht möchte, dass Facebook über dieses Onlineangebot Daten über ihn\n       sammelt und mit seinen bei Facebook gespeicherten Mitgliedsdaten verknüpft, muss er sich vor der Nutzung unseres\n       Onlineangebotes bei Facebook ausloggen und seine Cookies löschen. Weitere Einstellungen und Widersprüche zur\n       Nutzung von Daten für Werbezwecke, sind innerhalb der Facebook-Profileinstellungen möglich:\n      <a href=\"https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fads%2Fpreferences%2F%3Fentry_product%3Dad_settings_screen\">https://www.facebook.com/settings?tab=ads</a>\n       oder über die US-amerikanische Seite\n      <a href=\"http://optout.aboutads.info/?c=2&lang=EN\">http://www.aboutads.info/choices/</a> oder die EU-Seite\n      <a href=\"http://www.youronlinechoices.com/\">http://www.youronlinechoices.com/</a>. Die Einstellungen erfolgen\n       plattformunabhängig, d.h. sie werden für alle Geräte, wie Desktopcomputer oder mobile Geräte übernommen.<br>\n      <br>\n    </p>\n\n  </div>\n\n\n</bla-common-dialog>\n"

/***/ }),

/***/ "./src/app/modules/home/components/impressum/impressum.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/home/components/impressum/impressum.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Farbkonzept Website */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2ltcHJlc3N1bS9pbXByZXNzdW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy9pbXByZXNzdW0vaW1wcmVzc3VtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRmFyYmtvbnplcHQgV2Vic2l0ZSAqL1xuJHByaW1hcnk6ICMwMmJkZDU7IC8vIExpbmtzLCBOYXZiYXJcbiRwcmltYXJ5LWxpZ2h0OiAjYjRmZmZmOyAvLyBTaWRlYmFyLUJhY2tncm91bmRcbiRwcmltYXJ5LWRhcms6ICMwMDdjOTE7IC8vIFNpZGViYXItRm9udFxuJHNlY29uZGFyeTogI2ZmYzEwNzsgLy8gaG92ZXIgVGFibGVzXG4kc2Vjb25kYXJ5LWxpZ2h0OiAjZmZmMzUwO1xuJHNlY29uZGFyeS1kYXJrOiAjZmY4MzNhOyAvLyBob3ZlciBMaW5rcywgTG9nb1xuIl19 */"

/***/ }),

/***/ "./src/app/modules/home/components/impressum/impressum.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/home/components/impressum/impressum.component.ts ***!
  \**************************************************************************/
/*! exports provided: ImpressumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpressumComponent", function() { return ImpressumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _impressum_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impressum.config */ "./src/app/modules/home/components/impressum/impressum.config.ts");



var ImpressumComponent = /** @class */ (function () {
    function ImpressumComponent() {
        this.config = _impressum_config__WEBPACK_IMPORTED_MODULE_2__["IMPRESSUM_CONFIG"];
    }
    ImpressumComponent.prototype.ngOnInit = function () {
    };
    ImpressumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-impressum',
            template: __webpack_require__(/*! ./impressum.component.html */ "./src/app/modules/home/components/impressum/impressum.component.html"),
            styles: [__webpack_require__(/*! ./impressum.component.scss */ "./src/app/modules/home/components/impressum/impressum.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImpressumComponent);
    return ImpressumComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/impressum/impressum.config.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/home/components/impressum/impressum.config.ts ***!
  \***********************************************************************/
/*! exports provided: IMPRESSUM_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMPRESSUM_CONFIG", function() { return IMPRESSUM_CONFIG; });
var IMPRESSUM_CONFIG = {
    moduleTranslationKey: 'HOME',
    pageTitleTranslationKey: 'HOME.IMPRESSUM.TITLE'
};


/***/ }),

/***/ "./src/app/modules/home/guards/home.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/home/guards/home.guard.ts ***!
  \***************************************************/
/*! exports provided: HomeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeGuard", function() { return HomeGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");



var HomeGuard = /** @class */ (function () {
    function HomeGuard(currentUserService) {
        this.currentUserService = currentUserService;
    }
    HomeGuard.prototype.canActivate = function () {
        return this.currentUserService.hasAnyPermisson([]);
    };
    HomeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_current_user__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]])
    ], HomeGuard);
    return HomeGuard;
}());



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/modules/shared/index.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/modules/home/components/home/home.component.ts");
/* harmony import */ var _components_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/impressum/impressum.component */ "./src/app/modules/home/components/impressum/impressum.component.ts");
/* harmony import */ var _guards_home_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/home.guard */ "./src/app/modules/home/guards/home.guard.ts");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.routing */ "./src/app/modules/home/home.routing.ts");










var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_home_routing__WEBPACK_IMPORTED_MODULE_9__["HOME_ROUTES"]),
                _shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forChild(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_7__["ImpressumComponent"]],
            providers: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_8__["HomeGuard"]] // provide Guards here
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/modules/home/home.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/home/home.routing.ts ***!
  \**********************************************/
/*! exports provided: HOME_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_ROUTES", function() { return HOME_ROUTES; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/modules/home/components/home/home.component.ts");
/* harmony import */ var _components_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/impressum/impressum.component */ "./src/app/modules/home/components/impressum/impressum.component.ts");
/* harmony import */ var _guards_home_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/home.guard */ "./src/app/modules/home/guards/home.guard.ts");



var HOME_ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_2__["HomeGuard"]] },
    { path: 'impressum', component: _components_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_1__["ImpressumComponent"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_2__["HomeGuard"]] },
];


/***/ }),

/***/ "./src/app/modules/home/index.ts":
/*!***************************************!*\
  !*** ./src/app/modules/home/index.ts ***!
  \***************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.module */ "./src/app/modules/home/home.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return _home_module__WEBPACK_IMPORTED_MODULE_0__["HomeModule"]; });




/***/ }),

/***/ "./src/app/modules/shared/components/alerts/alert/alert.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shared/components/alerts/alert/alert.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [id]=\"id\"\n     class=\"alert animation fade-in\"\n     [ngClass]=\"getAlertClass()\"\n     *ngIf=\"visible\"\n     role=\"alert\">\n  <div *ngIf=\"hasHeadline()\">\n    <h4 class=\"alert-heading\">\n      <span>\n          <i class=\"fa\"\n             [ngClass]=\"getAlertHeadingIconClass()\"></i>\n      </span>\n      <span> {{ header }}</span>\n    </h4>\n    <hr>\n  </div>\n\n  <ng-content></ng-content>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/shared/components/alerts/alert/alert.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/components/alerts/alert/alert.component.ts ***!
  \***************************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _types_alert_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/alert-type.enum */ "./src/app/modules/shared/components/alerts/types/alert-type.enum.ts");




var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.visible = true;
        this.disabled = false;
        this.alertType = _types_alert_type_enum__WEBPACK_IMPORTED_MODULE_3__["AlertType"].INFO;
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.prototype.hasHeadline = function () {
        return !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.header);
    };
    AlertComponent.prototype.getAlertClass = function () {
        var alertClass = 'alert-primary';
        switch (this.alertType) {
            case _types_alert_type_enum__WEBPACK_IMPORTED_MODULE_3__["AlertType"].QUESTION:
                alertClass = 'alert-secondary';
                break;
            case _types_alert_type_enum__WEBPACK_IMPORTED_MODULE_3__["AlertType"].SUCCESS:
                alertClass = 'alert-success';
                break;
            case _types_alert_type_enum__WEBPACK_IMPORTED_MODULE_3__["AlertType"].WARNING:
                alertClass = 'alert-warning';
                break;
            case _types_alert_type_enum__WEBPACK_IMPORTED_MODULE_3__["AlertType"].DANGER:
                alertClass = 'alert-danger';
                break;
            // default
            case _types_alert_type_enum__WEBPACK_IMPORTED_MODULE_3__["AlertType"].INFO:
            default:
                alertClass = 'alert-primary';
        }
        return alertClass;
    };
    AlertComponent.prototype.getAlertHeadingIconClass = function () {
        var alertHeadingClass = 'fa-info-circle';
        switch (this.alertType) {
            case _types_alert_type_enum__WEBPACK_IMPORTED_MODULE_3__["AlertType"].QUESTION:
                alertHeadingClass = 'fa-question-circle';
                break;
            case _types_alert_type_enum__WEBPACK_IMPORTED_MODULE_3__["AlertType"].SUCCESS:
                alertHeadingClass = 'fa-check';
                break;
            case _types_alert_type_enum__WEBPACK_IMPORTED_MODULE_3__["AlertType"].WARNING:
                alertHeadingClass = 'fa-exclamation-triangle';
                break;
            case _types_alert_type_enum__WEBPACK_IMPORTED_MODULE_3__["AlertType"].DANGER:
                alertHeadingClass = 'fa-exclamation-circle';
                break;
            // default
            case _types_alert_type_enum__WEBPACK_IMPORTED_MODULE_3__["AlertType"].INFO:
            default:
                alertHeadingClass = 'fa-info-circle';
        }
        return alertHeadingClass;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlertComponent.prototype, "visible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlertComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AlertComponent.prototype, "alertType", void 0);
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/modules/shared/components/alerts/alert/alert.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/alerts/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/components/alerts/index.ts ***!
  \***********************************************************/
/*! exports provided: AlertComponent, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/modules/shared/components/alerts/alert/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });

/* harmony import */ var _types_alert_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/alert-type.enum */ "./src/app/modules/shared/components/alerts/types/alert-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _types_alert_type_enum__WEBPACK_IMPORTED_MODULE_1__["AlertType"]; });





/***/ }),

/***/ "./src/app/modules/shared/components/alerts/types/alert-type.enum.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/components/alerts/types/alert-type.enum.ts ***!
  \***************************************************************************/
/*! exports provided: AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
var AlertType;
(function (AlertType) {
    AlertType[AlertType["INFO"] = 0] = "INFO";
    AlertType[AlertType["QUESTION"] = 1] = "QUESTION";
    AlertType[AlertType["SUCCESS"] = 2] = "SUCCESS";
    AlertType[AlertType["WARNING"] = 3] = "WARNING";
    AlertType[AlertType["DANGER"] = 4] = "DANGER";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/modules/shared/components/breadcrumbs/breadcrumbs/breadcrumbs.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/breadcrumbs/breadcrumbs/breadcrumbs.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"breadcrumb-container\"\n     aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li *ngFor=\"let breadCrumb of getBreadCrumbs()\"\n        class=\"breadcrumb-item\"\n        [class.active]=\"breadCrumb.isLast\">\n\n      <a *ngIf=\"!breadCrumb.isLast\"\n         [routerLink]=\"breadCrumb.route\">\n        <span>{{breadCrumb.label}}</span>\n      </a>\n\n      <span *ngIf=\"breadCrumb.isLast\">{{breadCrumb.label}}</span>\n\n    </li>\n\n  </ol>\n</nav>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/breadcrumbs/breadcrumbs/breadcrumbs.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/breadcrumbs/breadcrumbs/breadcrumbs.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumb {\n  border-radius: 0;\n  height: 3rem; }\n\n.breadcrumb-item a, .breadcrumb-item a:visited {\n  color: #02bdd5;\n  text-decoration: none; }\n\n.breadcrumb-item a:hover {\n  color: #ff833a; }\n\n@media (max-width: 768px) {\n  #breadcrumb-container {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsY0FBYztFQUNkLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGNBQWMsRUFBQTs7QUFLaEI7RUFFRTtJQUNFLGFBQWEsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgaGVpZ2h0OiAzcmVtO1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtIGEsIC5icmVhZGNydW1iLWl0ZW0gYTp2aXNpdGVkIHtcbiAgY29sb3I6ICMwMmJkZDU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZjgzM2E7XG59XG5cblxuLy8gZm9yIHNtYWxsIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXG4gICNicmVhZGNydW1iLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/components/breadcrumbs/breadcrumbs/breadcrumbs.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/breadcrumbs/breadcrumbs/breadcrumbs.component.ts ***!
  \********************************************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _types_breadcrumb_dto_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/breadcrumb-dto.class */ "./src/app/modules/shared/components/breadcrumbs/types/breadcrumb-dto.class.ts");






var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(router, translate) {
        this.router = router;
        this.translate = translate;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        if (Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.moduleTranslationKey)) {
            console.warn('BreadcrumbsComponent: Property "moduleTranslationKey" must be defined');
        }
    };
    BreadcrumbsComponent.prototype.getBreadCrumbs = function () {
        var homeBreadCrumb = new _types_breadcrumb_dto_class__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbDO"](this.translate.transform('HOME.HOME.TITLE'), '/home', false);
        var breadCrumbs = [];
        var urlSegments = this.router.url.split('/');
        var route = '';
        for (var i = 1; i < urlSegments.length; i++) {
            var urlSegment = urlSegments[i];
            if (urlSegment.trim().length > 0) {
                // start always with home
                if (i === 1 && urlSegment.toUpperCase() !== 'HOME') {
                    breadCrumbs.push(homeBreadCrumb);
                }
                var translationKey = this.moduleTranslationKey + "." + urlSegment.toUpperCase() + ".TITLE"; // page translation key
                var label = this.translate.transform("" + translationKey);
                route += "/" + urlSegment;
                if (label !== translationKey) {
                    // translation key exists
                    var breadCrumb = new _types_breadcrumb_dto_class__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbDO"](label, route, (i === urlSegments.length - 1));
                    breadCrumbs.push(breadCrumb);
                }
                else if (urlSegment === 'add') {
                    var breadCrumb = new _types_breadcrumb_dto_class__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbDO"](this.translate.transform('BREADCRUMB.NEW_ENTITY'), route, (i === urlSegments.length - 1));
                    breadCrumbs.push(breadCrumb);
                }
                else if (Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(+urlSegment)) {
                    var breadCrumb = new _types_breadcrumb_dto_class__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbDO"](urlSegment, route, (i === urlSegments.length - 1));
                    breadCrumbs.push(breadCrumb);
                }
            }
        }
        return breadCrumbs;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BreadcrumbsComponent.prototype, "moduleTranslationKey", void 0);
    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-breadcrumbs',
            template: __webpack_require__(/*! ./breadcrumbs.component.html */ "./src/app/modules/shared/components/breadcrumbs/breadcrumbs/breadcrumbs.component.html"),
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
            styles: [__webpack_require__(/*! ./breadcrumbs.component.scss */ "./src/app/modules/shared/components/breadcrumbs/breadcrumbs/breadcrumbs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/breadcrumbs/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/shared/components/breadcrumbs/index.ts ***!
  \****************************************************************/
/*! exports provided: BreadcrumbsComponent, BreadcrumbDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ "./src/app/modules/shared/components/breadcrumbs/breadcrumbs/breadcrumbs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__["BreadcrumbsComponent"]; });

/* harmony import */ var _types_breadcrumb_dto_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/breadcrumb-dto.class */ "./src/app/modules/shared/components/breadcrumbs/types/breadcrumb-dto.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbDO", function() { return _types_breadcrumb_dto_class__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbDO"]; });





/***/ }),

/***/ "./src/app/modules/shared/components/breadcrumbs/types/breadcrumb-dto.class.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/shared/components/breadcrumbs/types/breadcrumb-dto.class.ts ***!
  \*************************************************************************************/
/*! exports provided: BreadcrumbDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbDO", function() { return BreadcrumbDO; });
var BreadcrumbDO = /** @class */ (function () {
    function BreadcrumbDO(label, route, isLast) {
        this.label = label;
        this.route = route;
        this.isLast = isLast;
    }
    return BreadcrumbDO;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/buttons/button/button.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/button/button.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\n  [id]=\"id\"\n  [name]=\"id\"\n  *ngIf=\"visible\"\n  (click)=\"onButtonClick()\"\n  [disabled]=\"isDisabled()\"\n  type=\"button\"\n  class=\"btn\"\n  [ngClass]=\"getButtonClass()\"\n  [style.min-width]=\"minWidth\"\n\n>\n  <!-- TODO make class configurable -->\n\n  <!-- show loading indicator -->\n  <span style=\"padding-right: 3px\">\n    <fa-icon *ngIf=\"loading\"\n             icon=\"sync\"\n             [spin]=\"true\"></fa-icon>\n  </span>\n\n  <!-- show content of the <bla-button> element -->\n  <ng-content></ng-content>\n\n\n</button>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/buttons/button/button.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/button/button.component.ts ***!
  \******************************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types_button_size_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/button-size.enum */ "./src/app/modules/shared/components/buttons/types/button-size.enum.ts");
/* harmony import */ var _types_button_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/button-type.enum */ "./src/app/modules/shared/components/buttons/types/button-type.enum.ts");




var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.visible = true;
        this.disabled = false;
        this.loading = false;
        this.buttonType = _types_button_type_enum__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].PRIMARY;
        this.buttonSize = _types_button_size_enum__WEBPACK_IMPORTED_MODULE_2__["ButtonSize"].NORMAL;
        /**
         * The value is send via the event emitter to the parent component
         * @type {any} event emitter value
         */
        this.value = null;
        /**
         * The parent component can receive the onClick event.
         * @type {EventEmitter<any>} void or the defined return value
         */
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    /**
     * Disable the button, if the disabled flag is true or
     * the button action (invoked by the onButtonClick event) is running
     *
     * @returns {boolean} true, if the disabled or loading flag is true
     */
    ButtonComponent.prototype.isDisabled = function () {
        return this.disabled || this.loading;
    };
    ButtonComponent.prototype.onButtonClick = function () {
        if (!this.value || this.value.length === 0) {
            this.onClick.emit();
        }
        else {
            this.onClick.emit(this.value);
        }
    };
    ButtonComponent.prototype.getButtonClass = function () {
        var buttonClass = 'btn-primary';
        switch (this.buttonType) {
            case _types_button_type_enum__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].SECONDARY:
                buttonClass = 'btn-secondary';
                break;
            case _types_button_type_enum__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].SUCCESS:
                buttonClass = 'btn-success';
                break;
            case _types_button_type_enum__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].WARNING:
                buttonClass = 'btn-warning';
                break;
            case _types_button_type_enum__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].DANGER:
                buttonClass = 'btn-danger';
                break;
            case _types_button_type_enum__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].LINK:
                buttonClass = 'btn-link';
                break;
            case _types_button_type_enum__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].PRIMARY_OUTLINE:
                buttonClass = 'btn-outline-primary';
                break;
            case _types_button_type_enum__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].SECONDARY_OUTLINE:
                buttonClass = 'btn-outline-secondary';
                break;
            case _types_button_type_enum__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].SUCCESS_OUTLINE:
                buttonClass = 'btn-outline-success';
                break;
            case _types_button_type_enum__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].WARNING_OUTLINE:
                buttonClass = 'btn-outline-warning';
                break;
            case _types_button_type_enum__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].DANGER_OUTLINE:
                buttonClass = 'btn-outline-danger';
                break;
            // default
            case _types_button_type_enum__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].PRIMARY:
            default:
                buttonClass = 'btn-primary';
        }
        buttonClass += ' ';
        switch (this.buttonSize) {
            case _types_button_size_enum__WEBPACK_IMPORTED_MODULE_2__["ButtonSize"].LARGE_BLOCK:
                buttonClass += 'btn-lg btn-block';
                break;
            case _types_button_size_enum__WEBPACK_IMPORTED_MODULE_2__["ButtonSize"].SMALL:
                buttonClass += 'btn-sm';
                break;
            case _types_button_size_enum__WEBPACK_IMPORTED_MODULE_2__["ButtonSize"].NORMAL:
            default:
        }
        return buttonClass;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "visible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonComponent.prototype, "minWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ButtonComponent.prototype, "buttonType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ButtonComponent.prototype, "buttonSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "onClick", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/modules/shared/components/buttons/button/button.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/buttons/download-button/download-button.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/download-button/download-button.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\n  (click)=\"onFileDownload()\"\n  *ngIf=\"visible\"\n  [disabled]=\"isDisabled()\"\n  [id]=\"id\"\n  [name]=\"id\"\n  [ngClass]=\"getButtonClass()\"\n  [style.min-width]=\"minWidth\"\n  class=\"btn\"\n  type=\"button\"\n\n>\n  <!-- TODO make class configurable -->\n\n  <!-- show loading indicator -->\n  <span style=\"padding-right: 3px\">\n    <fa-icon *ngIf=\"loading\"\n             [spin]=\"true\"\n             icon=\"sync\"></fa-icon>\n  </span>\n\n  <!-- show content of the <bla-button> element -->\n  <ng-content></ng-content>\n\n\n</button>\n\n<a #downloadLink>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/buttons/download-button/download-button.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/download-button/download-button.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DownloadButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadButtonComponent", function() { return DownloadButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony import */ var _services_notification_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/notification/types */ "./src/app/modules/shared/services/notification/types/index.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/button.component */ "./src/app/modules/shared/components/buttons/button/button.component.ts");
/* harmony import */ var _services_download_button_resource_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/download-button-resource-provider.service */ "./src/app/modules/shared/components/buttons/download-button/services/download-button-resource-provider.service.ts");






var NOTIFICATION_DOWNLOAD_SUCCESS = 'download_success';
var NOTIFICATION_DOWNLOAD_FAILURE = 'download_failure';
var DownloadButtonComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DownloadButtonComponent, _super);
    function DownloadButtonComponent(downloadButtonResourceProvider, notificationService) {
        var _this = _super.call(this) || this;
        _this.downloadButtonResourceProvider = downloadButtonResourceProvider;
        _this.notificationService = notificationService;
        return _this;
    }
    DownloadButtonComponent.prototype.ngOnInit = function () {
    };
    DownloadButtonComponent.prototype.onFileDownload = function () {
        var _this = this;
        this.loading = true;
        this.downloadButtonResourceProvider.download(this.downloadUrl, this.fileName, this.aElementRef)
            .then(function (response) { return _this.handleSuccess(response); })
            .catch(function (response) { return _this.handleFailure(response); });
    };
    DownloadButtonComponent.prototype.handleSuccess = function (response) {
        var _this = this;
        var notification = {
            id: NOTIFICATION_DOWNLOAD_SUCCESS,
            title: 'FILE_DOWNLOAD.NOTIFICATION.SUCCESS',
            description: this.fileName,
            severity: _services_notification_types__WEBPACK_IMPORTED_MODULE_3__["NotificationSeverity"].INFO,
            origin: _services_notification_types__WEBPACK_IMPORTED_MODULE_3__["NotificationOrigin"].USER,
            type: _services_notification_types__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].OK,
            userAction: _services_notification_types__WEBPACK_IMPORTED_MODULE_3__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DOWNLOAD_SUCCESS)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _services_notification_types__WEBPACK_IMPORTED_MODULE_3__["NotificationUserAction"].ACCEPTED) {
                console.log('Download ' + _this.fileName + ' from ' + response.payload + ' completed');
                _this.loading = false;
            }
        });
        this.notificationService.showNotification(notification);
    };
    DownloadButtonComponent.prototype.handleFailure = function (response) {
        var _this = this;
        var notification = {
            id: NOTIFICATION_DOWNLOAD_FAILURE,
            title: 'FILE_DOWNLOAD.NOTIFICATION.FAILURE',
            description: this.fileName,
            severity: _services_notification_types__WEBPACK_IMPORTED_MODULE_3__["NotificationSeverity"].ERROR,
            origin: _services_notification_types__WEBPACK_IMPORTED_MODULE_3__["NotificationOrigin"].USER,
            type: _services_notification_types__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].OK,
            userAction: _services_notification_types__WEBPACK_IMPORTED_MODULE_3__["NotificationUserAction"].PENDING
        };
        this.notificationService.observeNotification(NOTIFICATION_DOWNLOAD_FAILURE)
            .subscribe(function (myNotification) {
            if (myNotification.userAction === _services_notification_types__WEBPACK_IMPORTED_MODULE_3__["NotificationUserAction"].ACCEPTED) {
                console.log('Download ' + _this.fileName + ' failed');
                _this.loading = false;
            }
        });
        this.notificationService.showNotification(notification);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DownloadButtonComponent.prototype, "downloadUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DownloadButtonComponent.prototype, "fileName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('downloadLink'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DownloadButtonComponent.prototype, "aElementRef", void 0);
    DownloadButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-download-button',
            template: __webpack_require__(/*! ./download-button.component.html */ "./src/app/modules/shared/components/buttons/download-button/download-button.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_download_button_resource_provider_service__WEBPACK_IMPORTED_MODULE_5__["DownloadButtonResourceProviderService"],
            _services_notification__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], DownloadButtonComponent);
    return DownloadButtonComponent;
}(_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]));



/***/ }),

/***/ "./src/app/modules/shared/components/buttons/download-button/services/download-button-resource-provider.service.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/download-button/services/download-button-resource-provider.service.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: DownloadButtonResourceProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadButtonResourceProviderService", function() { return DownloadButtonResourceProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _data_provider_services_resource_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data-provider/services/resource-provider.service */ "./src/app/modules/shared/data-provider/services/resource-provider.service.ts");




var DownloadButtonResourceProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DownloadButtonResourceProviderService, _super);
    function DownloadButtonResourceProviderService(restClient) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.serviceSubUrl = '';
        return _this;
    }
    DownloadButtonResourceProviderService.prototype.download = function (url, fileName, aElement) {
        return this.downloadFile(url, fileName, aElement);
    };
    DownloadButtonResourceProviderService.prototype.getRestClient = function () {
        return this.restClient;
    };
    DownloadButtonResourceProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"]])
    ], DownloadButtonResourceProviderService);
    return DownloadButtonResourceProviderService;
}(_data_provider_services_resource_provider_service__WEBPACK_IMPORTED_MODULE_3__["ResourceProviderService"]));



/***/ }),

/***/ "./src/app/modules/shared/components/buttons/dropdown/dropdown.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/dropdown/dropdown.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown-fixed col-lg-3\">\n  <ul class=\"\">\n    <li (click)=\"onClick(mannschaft)\"\n        *ngFor=\"let mannschaft of mannschaften\"\n        class=\"list-group-item bg-primary dropdown-element\">\n      <a class=\"text-white\">{{currentVerein.name}} {{mannschaft.nummer}}</a>\n    </li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/shared/components/buttons/dropdown/dropdown.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/dropdown/dropdown.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-fixed {\n  position: absolute;\n  z-index: 999; }\n\n.dropdown-element {\n  cursor: pointer; }\n\n.list-group-item:hover {\n  background-color: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9ucy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBSWQ7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbnMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tZml4ZWR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xufVxuXG5cbi5kcm9wZG93bi1lbGVtZW50e1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGlzdC1ncm91cC1pdGVtOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/shared/components/buttons/dropdown/dropdown.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/dropdown/dropdown.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vereine_types_vereine_do_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vereine/types/vereine-do.class */ "./src/app/modules/vereine/types/vereine-do.class.ts");



var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        this.mannschaften = [];
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DropdownComponent.prototype.ngOnInit = function () {
    };
    DropdownComponent.prototype.onClick = function (id) {
        this.clicked.emit(id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DropdownComponent.prototype, "mannschaften", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _vereine_types_vereine_do_class__WEBPACK_IMPORTED_MODULE_2__["VereineDO"])
    ], DropdownComponent.prototype, "currentVerein", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DropdownComponent.prototype, "clicked", void 0);
    DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/modules/shared/components/buttons/dropdown/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.scss */ "./src/app/modules/shared/components/buttons/dropdown/dropdown.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/buttons/index.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/index.ts ***!
  \************************************************************/
/*! exports provided: ButtonComponent, DropdownComponent, DownloadButtonComponent, VereineDropdownComponent, ButtonType, ButtonSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button/button.component */ "./src/app/modules/shared/components/buttons/button/button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return _button_button_component__WEBPACK_IMPORTED_MODULE_0__["ButtonComponent"]; });

/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown/dropdown.component */ "./src/app/modules/shared/components/buttons/dropdown/dropdown.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_1__["DropdownComponent"]; });

/* harmony import */ var _download_button_download_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download-button/download-button.component */ "./src/app/modules/shared/components/buttons/download-button/download-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DownloadButtonComponent", function() { return _download_button_download_button_component__WEBPACK_IMPORTED_MODULE_2__["DownloadButtonComponent"]; });

/* harmony import */ var _vereine_dropdown_vereine_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vereine-dropdown/vereine-dropdown.component */ "./src/app/modules/shared/components/buttons/vereine-dropdown/vereine-dropdown.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VereineDropdownComponent", function() { return _vereine_dropdown_vereine_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["VereineDropdownComponent"]; });

/* harmony import */ var _types_button_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/button-type.enum */ "./src/app/modules/shared/components/buttons/types/button-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return _types_button_type_enum__WEBPACK_IMPORTED_MODULE_4__["ButtonType"]; });

/* harmony import */ var _types_button_size_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/button-size.enum */ "./src/app/modules/shared/components/buttons/types/button-size.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonSize", function() { return _types_button_size_enum__WEBPACK_IMPORTED_MODULE_5__["ButtonSize"]; });









/***/ }),

/***/ "./src/app/modules/shared/components/buttons/types/button-size.enum.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/types/button-size.enum.ts ***!
  \*****************************************************************************/
/*! exports provided: ButtonSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonSize", function() { return ButtonSize; });
var ButtonSize;
(function (ButtonSize) {
    ButtonSize[ButtonSize["LARGE_BLOCK"] = 0] = "LARGE_BLOCK";
    ButtonSize[ButtonSize["NORMAL"] = 1] = "NORMAL";
    ButtonSize[ButtonSize["SMALL"] = 2] = "SMALL";
})(ButtonSize || (ButtonSize = {}));


/***/ }),

/***/ "./src/app/modules/shared/components/buttons/types/button-type.enum.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/types/button-type.enum.ts ***!
  \*****************************************************************************/
/*! exports provided: ButtonType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return ButtonType; });
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["PRIMARY"] = 0] = "PRIMARY";
    ButtonType[ButtonType["SECONDARY"] = 1] = "SECONDARY";
    ButtonType[ButtonType["SUCCESS"] = 2] = "SUCCESS";
    ButtonType[ButtonType["WARNING"] = 3] = "WARNING";
    ButtonType[ButtonType["DANGER"] = 4] = "DANGER";
    ButtonType[ButtonType["LINK"] = 5] = "LINK";
    ButtonType[ButtonType["PRIMARY_OUTLINE"] = 6] = "PRIMARY_OUTLINE";
    ButtonType[ButtonType["SECONDARY_OUTLINE"] = 7] = "SECONDARY_OUTLINE";
    ButtonType[ButtonType["SUCCESS_OUTLINE"] = 8] = "SUCCESS_OUTLINE";
    ButtonType[ButtonType["WARNING_OUTLINE"] = 9] = "WARNING_OUTLINE";
    ButtonType[ButtonType["DANGER_OUTLINE"] = 10] = "DANGER_OUTLINE";
})(ButtonType || (ButtonType = {}));


/***/ }),

/***/ "./src/app/modules/shared/components/buttons/vereine-dropdown/vereine-dropdown.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/vereine-dropdown/vereine-dropdown.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3\">\n  <bla-button class=\"\" (click)=\"toggleDropdown()\">Mannschaften &#9660;</bla-button>\n  <bla-dropdown class=\"bg-primary\" *ngIf=\"dropdownIsVisible\" (clicked)=\"onClick($event)\" [currentVerein]=\"currentVerein\" [mannschaften]=\"mannschaften\"></bla-dropdown>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/buttons/vereine-dropdown/vereine-dropdown.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/vereine-dropdown/vereine-dropdown.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9ucy92ZXJlaW5lLWRyb3Bkb3duL3ZlcmVpbmUtZHJvcGRvd24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/shared/components/buttons/vereine-dropdown/vereine-dropdown.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/buttons/vereine-dropdown/vereine-dropdown.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: VereineDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereineDropdownComponent", function() { return VereineDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vereine_types_vereine_do_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vereine/types/vereine-do.class */ "./src/app/modules/vereine/types/vereine-do.class.ts");



var VereineDropdownComponent = /** @class */ (function () {
    function VereineDropdownComponent() {
        this.onMannschaftClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mannschaften = [];
        this.dropdownIsVisible = false;
    }
    VereineDropdownComponent.prototype.ngOnInit = function () {
    };
    VereineDropdownComponent.prototype.toggleDropdown = function () {
        this.dropdownIsVisible = !this.dropdownIsVisible;
    };
    VereineDropdownComponent.prototype.onClick = function (versionedDataObject) {
        this.onMannschaftClick.emit(versionedDataObject);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VereineDropdownComponent.prototype, "onMannschaftClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], VereineDropdownComponent.prototype, "mannschaften", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _vereine_types_vereine_do_class__WEBPACK_IMPORTED_MODULE_2__["VereineDO"])
    ], VereineDropdownComponent.prototype, "currentVerein", void 0);
    VereineDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-vereine-dropdown',
            template: __webpack_require__(/*! ./vereine-dropdown.component.html */ "./src/app/modules/shared/components/buttons/vereine-dropdown/vereine-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./vereine-dropdown.component.scss */ "./src/app/modules/shared/components/buttons/vereine-dropdown/vereine-dropdown.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VereineDropdownComponent);
    return VereineDropdownComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/common/common-component.class.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/shared/components/common/common-component.class.ts ***!
  \****************************************************************************/
/*! exports provided: CommonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponent", function() { return CommonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonComponent = /** @class */ (function () {
    function CommonComponent() {
        this.visible = true;
        this.loading = false;
        this.disabled = false;
        this.userPermissions = [];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CommonComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommonComponent.prototype, "visible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommonComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommonComponent.prototype, "disabled", void 0);
    return CommonComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/common/common-secured-component.class.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/components/common/common-secured-component.class.ts ***!
  \************************************************************************************/
/*! exports provided: CommonSecuredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonSecuredComponent", function() { return CommonSecuredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_component_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-component.class */ "./src/app/modules/shared/components/common/common-component.class.ts");


var CommonSecuredComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CommonSecuredComponent, _super);
    function CommonSecuredComponent(userService) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.userPermissions = userService.getPermissions();
        return _this;
    }
    return CommonSecuredComponent;
}(_common_component_class__WEBPACK_IMPORTED_MODULE_1__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/shared/components/common/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/components/common/index.ts ***!
  \***********************************************************/
/*! exports provided: CommonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-component.class */ "./src/app/modules/shared/components/common/common-component.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonComponent", function() { return _common_component_class__WEBPACK_IMPORTED_MODULE_0__["CommonComponent"]; });




/***/ }),

/***/ "./src/app/modules/shared/components/dialogs/common-dialog/common-dialog.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dialogs/common-dialog/common-dialog.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-breadcrumbs [moduleTranslationKey]=\"config.moduleTranslationKey\"></bla-breadcrumbs>\n\n<div class=\"dialog-content\">\n\n  <bla-page-heading>{{config.pageTitleTranslationKey | translate }}</bla-page-heading>\n\n  <ng-content *ngIf=\"!loading\"></ng-content>\n\n  <div *ngIf=\"loading\"\n       class=\"dialog-loading-indicator\">\n\n    <fa-icon icon=\"sync\"\n             [spin]=\"'true'\"\n             size=\"4x\"\n             style=\"margin-top: 2em; margin-bottom: 2em;\">\n\n    </fa-icon>\n\n    <p>{{'DIALOG.LOADING' | translate}}</p>\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/modules/shared/components/dialogs/common-dialog/common-dialog.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dialogs/common-dialog/common-dialog.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-content {\n  padding: 1em; }\n\n.dialog-loading-indicator {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9ncy9jb21tb24tZGlhbG9nL2NvbW1vbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9kaWFsb2dzL2NvbW1vbi1kaWFsb2cvY29tbW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctY29udGVudCB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuLmRpYWxvZy1sb2FkaW5nLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/components/dialogs/common-dialog/common-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dialogs/common-dialog/common-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CommonDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonDialogComponent", function() { return CommonDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./src/app/modules/shared/components/common/index.ts");



var CommonDialogComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CommonDialogComponent, _super);
    function CommonDialogComponent() {
        return _super.call(this) || this;
    }
    CommonDialogComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommonDialogComponent.prototype, "config", void 0);
    CommonDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-common-dialog',
            template: __webpack_require__(/*! ./common-dialog.component.html */ "./src/app/modules/shared/components/dialogs/common-dialog/common-dialog.component.html"),
            styles: [__webpack_require__(/*! ./common-dialog.component.scss */ "./src/app/modules/shared/components/dialogs/common-dialog/common-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonDialogComponent);
    return CommonDialogComponent;
}(_common__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/shared/components/dialogs/detail-dialog/detail-dialog.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dialogs/detail-dialog/detail-dialog.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-breadcrumbs [moduleTranslationKey]=\"config.moduleTranslationKey\"></bla-breadcrumbs>\n\n<div class=\"dialog-content\">\n  <bla-page-heading>{{config.pageTitleTranslationKey | translate }}</bla-page-heading>\n\n  <div class=\"detail-dialog-form\">\n\n    <bla-horizontal-form class=\"column-1\"\n                         [config]=\"config.formConfig\"\n                         [content]=\"formContent\"\n                         [loading]=\"loading\"></bla-horizontal-form>\n  </div>\n\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/dialogs/detail-dialog/detail-dialog.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dialogs/detail-dialog/detail-dialog.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-content {\n  padding: 1em; }\n\n.detail-dialog-form {\n  padding-top: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9ncy9kZXRhaWwtZGlhbG9nL2RldGFpbC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9ncy9kZXRhaWwtZGlhbG9nL2RldGFpbC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5kZXRhaWwtZGlhbG9nLWZvcm0ge1xuICBwYWRkaW5nLXRvcDogMWVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/shared/components/dialogs/detail-dialog/detail-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dialogs/detail-dialog/detail-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DetailDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDialogComponent", function() { return DetailDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _common_common_secured_component_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/common-secured-component.class */ "./src/app/modules/shared/components/common/common-secured-component.class.ts");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms */ "./src/app/modules/shared/components/forms/index.ts");





var DetailDialogComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DetailDialogComponent, _super);
    function DetailDialogComponent(currentUserService) {
        var _this = _super.call(this, currentUserService) || this;
        _this.currentUserService = currentUserService;
        return _this;
    }
    DetailDialogComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailDialogComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _forms__WEBPACK_IMPORTED_MODULE_4__["FormContent"])
    ], DetailDialogComponent.prototype, "formContent", void 0);
    DetailDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-detail-dialog',
            template: __webpack_require__(/*! ./detail-dialog.component.html */ "./src/app/modules/shared/components/dialogs/detail-dialog/detail-dialog.component.html"),
            styles: [__webpack_require__(/*! ./detail-dialog.component.scss */ "./src/app/modules/shared/components/dialogs/detail-dialog/detail-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_current_user__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]])
    ], DetailDialogComponent);
    return DetailDialogComponent;
}(_common_common_secured_component_class__WEBPACK_IMPORTED_MODULE_3__["CommonSecuredComponent"]));



/***/ }),

/***/ "./src/app/modules/shared/components/dialogs/index.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/shared/components/dialogs/index.ts ***!
  \************************************************************/
/*! exports provided: OverviewDialogComponent, CommonDialogComponent, DetailDialogComponent, NavigationDialogComponent, SimpleOverviewDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overview_dialog_overview_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview-dialog/overview-dialog.component */ "./src/app/modules/shared/components/dialogs/overview-dialog/overview-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverviewDialogComponent", function() { return _overview_dialog_overview_dialog_component__WEBPACK_IMPORTED_MODULE_0__["OverviewDialogComponent"]; });

/* harmony import */ var _common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-dialog/common-dialog.component */ "./src/app/modules/shared/components/dialogs/common-dialog/common-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonDialogComponent", function() { return _common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_1__["CommonDialogComponent"]; });

/* harmony import */ var _detail_dialog_detail_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-dialog/detail-dialog.component */ "./src/app/modules/shared/components/dialogs/detail-dialog/detail-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailDialogComponent", function() { return _detail_dialog_detail_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DetailDialogComponent"]; });

/* harmony import */ var _navigation_dialog_navigation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation-dialog/navigation-dialog.component */ "./src/app/modules/shared/components/dialogs/navigation-dialog/navigation-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationDialogComponent", function() { return _navigation_dialog_navigation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["NavigationDialogComponent"]; });

/* harmony import */ var _simple_overview_dialog_simple_overview_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple-overview-dialog/simple-overview-dialog.component */ "./src/app/modules/shared/components/dialogs/simple-overview-dialog/simple-overview-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleOverviewDialogComponent", function() { return _simple_overview_dialog_simple_overview_dialog_component__WEBPACK_IMPORTED_MODULE_4__["SimpleOverviewDialogComponent"]; });








/***/ }),

/***/ "./src/app/modules/shared/components/dialogs/navigation-dialog/navigation-dialog.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dialogs/navigation-dialog/navigation-dialog.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-common-dialog [config]=\"config\">\n\n  <bla-navigation-cards [config]=\"config.navigationCardsConfig\"></bla-navigation-cards>\n\n  <ng-content></ng-content>\n\n</bla-common-dialog>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/dialogs/navigation-dialog/navigation-dialog.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dialogs/navigation-dialog/navigation-dialog.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9ncy9uYXZpZ2F0aW9uLWRpYWxvZy9uYXZpZ2F0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/shared/components/dialogs/navigation-dialog/navigation-dialog.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dialogs/navigation-dialog/navigation-dialog.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: NavigationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationDialogComponent", function() { return NavigationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./src/app/modules/shared/components/common/index.ts");



var NavigationDialogComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NavigationDialogComponent, _super);
    function NavigationDialogComponent() {
        return _super.call(this) || this;
    }
    NavigationDialogComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationDialogComponent.prototype, "config", void 0);
    NavigationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-navigation-dialog',
            template: __webpack_require__(/*! ./navigation-dialog.component.html */ "./src/app/modules/shared/components/dialogs/navigation-dialog/navigation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./navigation-dialog.component.scss */ "./src/app/modules/shared/components/dialogs/navigation-dialog/navigation-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationDialogComponent);
    return NavigationDialogComponent;
}(_common__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/shared/components/dialogs/overview-dialog/overview-dialog.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dialogs/overview-dialog/overview-dialog.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-breadcrumbs [moduleTranslationKey]=\"config.moduleTranslationKey\"></bla-breadcrumbs>\n\n<div class=\"dialog-content\">\n\n  <!-- Heading -->\n  <section class=\"overview-dialog-header\">\n    <bla-page-heading>{{config.pageTitleTranslationKey | translate }}</bla-page-heading>\n\n    <div class=\"overview-dialog-add\">\n      <button class=\"btn btn-success\"\n              routerLink=\"add\">\n        <fa-icon icon=\"plus\"></fa-icon>\n        <span> Neu</span>\n      </button>\n    </div>\n  </section>\n\n  <!-- Content -->\n  <section class=\"overview-dialog-content\">\n\n    <bla-data-table [config]=\"config.tableConfig\"\n                    [rows]=\"rows\"\n                    [loading]=\"loading\"\n                    (onViewEntry)=\"onView($event)\"\n                    (onEditEntry)=\"onEdit($event)\"\n                    (onDeleteEntry)=\"onDelete($event)\">\n\n    </bla-data-table>\n\n  </section>\n\n  <!-- Footer -->\n  <section class=\"overview-dialog-footer\">\n\n\n  </section>\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/dialogs/overview-dialog/overview-dialog.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dialogs/overview-dialog/overview-dialog.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-content {\n  padding: 1em; }\n\n.overview-dialog-header {\n  padding-bottom: 1em; }\n\n.overview-dialog-header .overview-dialog-add {\n    display: flex;\n    justify-content: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9ncy9vdmVydmlldy1kaWFsb2cvb3ZlcnZpZXctZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRHJCO0lBSUksYUFBYTtJQUNiLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9kaWFsb2dzL292ZXJ2aWV3LWRpYWxvZy9vdmVydmlldy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5vdmVydmlldy1kaWFsb2ctaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcblxuICAub3ZlcnZpZXctZGlhbG9nLWFkZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/shared/components/dialogs/overview-dialog/overview-dialog.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dialogs/overview-dialog/overview-dialog.component.ts ***!
  \************************************************************************************************/
/*! exports provided: OverviewDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewDialogComponent", function() { return OverviewDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _common_common_secured_component_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/common-secured-component.class */ "./src/app/modules/shared/components/common/common-secured-component.class.ts");




var OverviewDialogComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OverviewDialogComponent, _super);
    function OverviewDialogComponent(currentUserService) {
        var _this = _super.call(this, currentUserService) || this;
        _this.currentUserService = currentUserService;
        _this.onEditClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onViewClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onDeleteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    OverviewDialogComponent.prototype.ngOnInit = function () {
    };
    OverviewDialogComponent.prototype.onView = function (versionedDataObject) {
        this.onViewClicked.emit(versionedDataObject);
    };
    OverviewDialogComponent.prototype.onEdit = function (versionedDataObject) {
        this.onEditClicked.emit(versionedDataObject);
    };
    OverviewDialogComponent.prototype.onDelete = function (versionedDataObject) {
        this.onDeleteClicked.emit(versionedDataObject);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OverviewDialogComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], OverviewDialogComponent.prototype, "rows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OverviewDialogComponent.prototype, "onEditClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OverviewDialogComponent.prototype, "onViewClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OverviewDialogComponent.prototype, "onDeleteClicked", void 0);
    OverviewDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-overview-dialog',
            template: __webpack_require__(/*! ./overview-dialog.component.html */ "./src/app/modules/shared/components/dialogs/overview-dialog/overview-dialog.component.html"),
            styles: [__webpack_require__(/*! ./overview-dialog.component.scss */ "./src/app/modules/shared/components/dialogs/overview-dialog/overview-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_current_user__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]])
    ], OverviewDialogComponent);
    return OverviewDialogComponent;
}(_common_common_secured_component_class__WEBPACK_IMPORTED_MODULE_3__["CommonSecuredComponent"]));



/***/ }),

/***/ "./src/app/modules/shared/components/dialogs/simple-overview-dialog/simple-overview-dialog.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dialogs/simple-overview-dialog/simple-overview-dialog.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-breadcrumbs [moduleTranslationKey]=\"config.moduleTranslationKey\"></bla-breadcrumbs>\n\n<div class=\"dialog-content\">\n\n  <!-- Heading -->\n  <section class=\"overview-dialog-header\">\n    <bla-page-heading>{{config.pageTitleTranslationKey | translate }}</bla-page-heading>\n  </section>\n\n  <!-- Content -->\n  <section class=\"overview-dialog-content\">\n\n    <bla-data-table [config]=\"config.tableConfig\"\n                    [rows]=\"rows\"\n                    [loading]=\"loading\"\n                    (onViewEntry)=\"onView($event)\"\n                    (onEditEntry)=\"onEdit($event)\"\n                    (onDeleteEntry)=\"onDelete($event)\"\n                    (onRowEntry)=\"onRowClick($event)\">\n\n    </bla-data-table>\n\n  </section>\n\n  <!-- Footer -->\n  <section class=\"overview-dialog-footer\">\n\n\n  </section>\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/dialogs/simple-overview-dialog/simple-overview-dialog.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dialogs/simple-overview-dialog/simple-overview-dialog.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-content {\n  padding: 1em; }\n\n.overview-dialog-header {\n  padding-bottom: 1em; }\n\n.overview-dialog-header .overview-dialog-add {\n    display: flex;\n    justify-content: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9ncy9zaW1wbGUtb3ZlcnZpZXctZGlhbG9nL3NpbXBsZS1vdmVydmlldy1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkFBbUIsRUFBQTs7QUFEckI7SUFJSSxhQUFhO0lBQ2IseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZ3Mvc2ltcGxlLW92ZXJ2aWV3LWRpYWxvZy9zaW1wbGUtb3ZlcnZpZXctZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1jb250ZW50IHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4ub3ZlcnZpZXctZGlhbG9nLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG5cbiAgLm92ZXJ2aWV3LWRpYWxvZy1hZGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/components/dialogs/simple-overview-dialog/simple-overview-dialog.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dialogs/simple-overview-dialog/simple-overview-dialog.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SimpleOverviewDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleOverviewDialogComponent", function() { return SimpleOverviewDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _common_common_secured_component_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/common-secured-component.class */ "./src/app/modules/shared/components/common/common-secured-component.class.ts");




var SimpleOverviewDialogComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SimpleOverviewDialogComponent, _super);
    function SimpleOverviewDialogComponent(currentUserService) {
        var _this = _super.call(this, currentUserService) || this;
        _this.currentUserService = currentUserService;
        _this.onEditClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onViewClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onDeleteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onRowClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    SimpleOverviewDialogComponent.prototype.ngOnInit = function () {
    };
    SimpleOverviewDialogComponent.prototype.onView = function (versionedDataObject) {
        this.onViewClicked.emit(versionedDataObject);
    };
    SimpleOverviewDialogComponent.prototype.onEdit = function (versionedDataObject) {
        this.onEditClicked.emit(versionedDataObject);
    };
    SimpleOverviewDialogComponent.prototype.onDelete = function (versionedDataObject) {
        this.onDeleteClicked.emit(versionedDataObject);
    };
    SimpleOverviewDialogComponent.prototype.onRowClick = function (versionedDataObject) {
        this.onRowClicked.emit(versionedDataObject);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SimpleOverviewDialogComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SimpleOverviewDialogComponent.prototype, "rows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SimpleOverviewDialogComponent.prototype, "onEditClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SimpleOverviewDialogComponent.prototype, "onViewClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SimpleOverviewDialogComponent.prototype, "onDeleteClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SimpleOverviewDialogComponent.prototype, "onRowClicked", void 0);
    SimpleOverviewDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-simple-overview-dialog',
            template: __webpack_require__(/*! ./simple-overview-dialog.component.html */ "./src/app/modules/shared/components/dialogs/simple-overview-dialog/simple-overview-dialog.component.html"),
            styles: [__webpack_require__(/*! ./simple-overview-dialog.component.scss */ "./src/app/modules/shared/components/dialogs/simple-overview-dialog/simple-overview-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_current_user__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]])
    ], SimpleOverviewDialogComponent);
    return SimpleOverviewDialogComponent;
}(_common_common_secured_component_class__WEBPACK_IMPORTED_MODULE_3__["CommonSecuredComponent"]));



/***/ }),

/***/ "./src/app/modules/shared/components/dropdowns/dropdown-menu/dropdown-menu.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dropdowns/dropdown-menu/dropdown-menu.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Example single danger button -->\n<div *ngIf=\"visible\"\n     class=\"btn-group bla-dropdown-menu\">\n  <button (click)=\"toggleMenu()\"\n          [disabled]=\"isDisabled()\"\n          [id]=\"id\"\n          [name]=\"id\"\n          class=\"btn btn-light dropdown-toggle bla-dropdown-menu\"\n          type=\"button\">\n    {{ getSelectedItemLabel() }}\n  </button>\n\n  <div *ngIf=\"isMenuVisible()\"\n       class=\"dropdown-menu show dropdown-menu-left\">\n    <span (click)=\"selectItem(item.id)\"\n          *ngFor=\"let item of items\"\n          class=\"dropdown-item\">\n      {{item[optionFieldSelector]}}\n    </span>\n  </div>\n\n</div>\n\n\n<!--\n<div class=\"select-wrapper\">\n  <select (change)=\"sendSelectedItem()\"\n          [(ngModel)]=\"selectedItemId\"\n\n          [disabled]=\"isDisabled()\"\n          [id]=\"id\"\n          [name]=\"id\"\n          [ngStyle]=\"getCustomStyle()\"\n          class=\"bla-dropdown-menu\">\n\n    <option *ngIf=\"showItemListPlaceholder()\"\n            disabled\n            hidden\n            selected\n            value=\"0\">\n      {{ 'DROPDOWN.PLEASE_SELECT_ITEM' | translate }}\n    </option>\n    <option *ngIf=\"showEmptyItemListPlaceholder()\"\n            disabled\n            hidden\n            selected\n            value=\"0\">\n      {{ 'DROPDOWN.NO_ENTRIES_FOUND' | translate }}\n    </option>\n\n    <option *ngFor=\"let item of items\"\n            [ngValue]=\"item.id\">\n      {{item[optionFieldSelector]}}\n    </option>\n\n  </select>\n</div>\n-->\n"

/***/ }),

/***/ "./src/app/modules/shared/components/dropdowns/dropdown-menu/dropdown-menu.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dropdowns/dropdown-menu/dropdown-menu.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-item {\n  cursor: pointer; }\n\n.dropdown-item:active {\n  color: #007c91;\n  background-color: #02bdd5; }\n\n.bla-dropdown-menu {\n  width: 100%;\n  min-width: 100%;\n  max-width: 100%;\n  text-align: left; }\n\n.dropdown-toggle::after {\n  position: absolute;\n  right: 1em;\n  top: 1em; }\n\n.dropdown-menu {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd25zL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQ0YsRUFBQTs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVEsRUFBQTs7QUFHVjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd25zL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyXG59XG5cbi5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDA3YzkxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDJiZGQ1O1xufVxuXG4uYmxhLWRyb3Bkb3duLW1lbnUge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMWVtO1xuICB0b3A6IDFlbTtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/shared/components/dropdowns/dropdown-menu/dropdown-menu.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/dropdowns/dropdown-menu/dropdown-menu.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DropdownMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuComponent", function() { return DropdownMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var DropdownMenuComponent = /** @class */ (function () {
    function DropdownMenuComponent(translate) {
        this.translate = translate;
        this.visible = true;
        this.disabled = false;
        this.loading = false;
        this.pleaseSelectItemPlaceholderTranslationKey = 'DROPDOWN.PLEASE_SELECT_ITEM';
        this.emptyItemListPlaceholderTranslationKey = 'DROPDOWN.NO_ENTRIES_FOUND';
        this.loadingPlaceholderTranslationKey = 'DROPDOWN.LOADING';
        /**
         *
         * @type {Array} of VersionedDataObject
         */
        this.items = [];
        /**
         * The parent component can receive the onClick event.
         * @type {EventEmitter<VersionedDataObject>} void or the defined return value
         */
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         *
         * @type {number} id of the preselected item
         */
        this.selectedItemId = 0;
        this.menuVisible = false;
    }
    DropdownMenuComponent.prototype.ngOnInit = function () {
    };
    DropdownMenuComponent.prototype.ngOnChanges = function (changes) {
    };
    DropdownMenuComponent.prototype.showMenu = function () {
        console.log('showMenu()');
        this.menuVisible = true;
    };
    DropdownMenuComponent.prototype.toggleMenu = function () {
        console.log('toggleMenu()');
        this.menuVisible = !this.menuVisible;
    };
    DropdownMenuComponent.prototype.hideMenu = function () {
        console.log('hideMenu()');
        this.menuVisible = false;
    };
    DropdownMenuComponent.prototype.isMenuVisible = function () {
        return this.menuVisible;
    };
    DropdownMenuComponent.prototype.selectItem = function (itemId) {
        console.log('selectItem() with ' + JSON.stringify(itemId));
        if (itemId !== 0) {
            this.selectedItemId = itemId;
            this.sendSelectedItem();
        }
        this.hideMenu();
    };
    DropdownMenuComponent.prototype.getSelectedItemLabel = function () {
        if (this.showLoadingPlaceholder()) {
            return this.translate.transform(this.loadingPlaceholderTranslationKey);
        }
        if (this.showEmptyItemListPlaceholder()) {
            return this.translate.transform(this.emptyItemListPlaceholderTranslationKey);
        }
        if (this.showItemListPlaceholder()) {
            return this.translate.transform(this.pleaseSelectItemPlaceholderTranslationKey);
        }
        return this.findItemById(this.selectedItemId)[this.optionFieldSelector];
    };
    /**
     * Disable the button, if the disabled flag is true or
     * the button action (invoked by the onButtonClick event) is running
     *
     * @returns {boolean} true, if the disabled or loading flag is true. Also disabled, if no item can be selected.
     */
    DropdownMenuComponent.prototype.isDisabled = function () {
        return this.disabled || this.loading || this.showEmptyItemListPlaceholder();
    };
    DropdownMenuComponent.prototype.sendSelectedItem = function () {
        if (this.selectedItemId !== 0) {
            this.onSelect.emit(this.findItemById(this.selectedItemId));
        }
    };
    DropdownMenuComponent.prototype.showLoadingPlaceholder = function () {
        return this.loading;
    };
    DropdownMenuComponent.prototype.showItemListPlaceholder = function () {
        return this.selectedItemId === 0 && this.items.length > 0;
    };
    DropdownMenuComponent.prototype.showEmptyItemListPlaceholder = function () {
        return this.selectedItemId === 0 && this.items.length === 0;
    };
    DropdownMenuComponent.prototype.findItemById = function (selectedItemId) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === selectedItemId) {
                return item;
            }
        }
        return null;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DropdownMenuComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownMenuComponent.prototype, "visible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownMenuComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownMenuComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownMenuComponent.prototype, "pleaseSelectItemPlaceholderTranslationKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownMenuComponent.prototype, "emptyItemListPlaceholderTranslationKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownMenuComponent.prototype, "loadingPlaceholderTranslationKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DropdownMenuComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DropdownMenuComponent.prototype, "optionFieldSelector", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownMenuComponent.prototype, "onSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownMenuComponent.prototype, "selectedItemId", void 0);
    DropdownMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-dropdown-menu',
            template: __webpack_require__(/*! ./dropdown-menu.component.html */ "./src/app/modules/shared/components/dropdowns/dropdown-menu/dropdown-menu.component.html"),
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
            styles: [__webpack_require__(/*! ./dropdown-menu.component.scss */ "./src/app/modules/shared/components/dropdowns/dropdown-menu/dropdown-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]])
    ], DropdownMenuComponent);
    return DropdownMenuComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/dropdowns/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/shared/components/dropdowns/index.ts ***!
  \**************************************************************/
/*! exports provided: DropdownMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-menu/dropdown-menu.component */ "./src/app/modules/shared/components/dropdowns/dropdown-menu/dropdown-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuComponent", function() { return _dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_0__["DropdownMenuComponent"]; });




/***/ }),

/***/ "./src/app/modules/shared/components/forms/control/form-content-mapper.function.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/forms/control/form-content-mapper.function.ts ***!
  \*****************************************************************************************/
/*! exports provided: toFormContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFormContent", function() { return toFormContent; });
/* harmony import */ var _types_form_content_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/form-content.class */ "./src/app/modules/shared/components/forms/types/form-content.class.ts");

function toFormContent(payload) {
    return new _types_form_content_class__WEBPACK_IMPORTED_MODULE_0__["FormContent"]({ payload: payload });
}


/***/ }),

/***/ "./src/app/modules/shared/components/forms/horizontal-form/horizontal-form.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/forms/horizontal-form/horizontal-form.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"showContent()\"\n      [formGroup]=\"form\">\n\n\n  <div class=\"form-group row\"\n       *ngFor=\"let property of config.properties\">\n    <label for=\"{{ 'formField_' + property.propertyName }}\"\n           class=\"col-sm-2 col-form-label\">\n      <span>{{ property.translationKey | translate }}</span>\n      <span *ngIf=\"property.required\"> *</span>\n    </label>\n    <div class=\"col-sm-10\">\n      <input [type]=\"getPropteryType(property)\"\n             class=\"form-control\"\n             [required]=\"property.required\"\n             [pattern]=\"property.regex\"\n             id=\"{{ 'formField_' + property.propertyName }}\"\n\n             [value]=\"content.getText(property)\"\n\n             placeholder=\"{{ property.translationKey | translate }}\">\n\n      <div class=\"invalid-feedback\">\n        {{ 'LOGIN.USERNAME.ERROR' | translate }}\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-10\">\n      <button type=\"submit\"\n              class=\"btn btn-primary\">Sign in\n      </button>\n    </div>\n  </div>\n</form>\n\n\n<pre><code>{{ content | json }}</code></pre>\n\n<pre><code>{{ config | json }}</code></pre>\n\n"

/***/ }),

/***/ "./src/app/modules/shared/components/forms/horizontal-form/horizontal-form.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/forms/horizontal-form/horizontal-form.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvZm9ybXMvaG9yaXpvbnRhbC1mb3JtL2hvcml6b250YWwtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/shared/components/forms/horizontal-form/horizontal-form.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/forms/horizontal-form/horizontal-form.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: HorizontalFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalFormComponent", function() { return HorizontalFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common */ "./src/app/modules/shared/components/common/index.ts");
/* harmony import */ var _types_form_content_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/form-content.class */ "./src/app/modules/shared/components/forms/types/form-content.class.ts");
/* harmony import */ var _types_form_protperty_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types/form-protperty-type.enum */ "./src/app/modules/shared/components/forms/types/form-protperty-type.enum.ts");







var HorizontalFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HorizontalFormComponent, _super);
    function HorizontalFormComponent(formBuilder) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.dummy = { name: '' };
        return _this;
    }
    Object.defineProperty(HorizontalFormComponent.prototype, "propertyForms", {
        get: function () {
            return this.form.get('properties');
        },
        enumerable: true,
        configurable: true
    });
    HorizontalFormComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            properties: this.formBuilder.array([])
        });
        // this.config.properties.forEach(this.addProperty);
    };
    HorizontalFormComponent.prototype.addProperty = function (property) {
        var propertyFormGroup = this.formBuilder.group({
            propertyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.propertyForms.push(propertyFormGroup);
    };
    HorizontalFormComponent.prototype.showContent = function () {
        return !this.loading && !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(this.content);
    };
    HorizontalFormComponent.prototype.getPropteryType = function (property) {
        switch (property.type) {
            case _types_form_protperty_type_enum__WEBPACK_IMPORTED_MODULE_6__["FormPropertyType"].PASSWORD:
                return 'password';
            case _types_form_protperty_type_enum__WEBPACK_IMPORTED_MODULE_6__["FormPropertyType"].NUMBER:
                return 'number';
            case _types_form_protperty_type_enum__WEBPACK_IMPORTED_MODULE_6__["FormPropertyType"].TEXT:
            default:
                return 'text';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HorizontalFormComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _types_form_content_class__WEBPACK_IMPORTED_MODULE_5__["FormContent"])
    ], HorizontalFormComponent.prototype, "content", void 0);
    HorizontalFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-horizontal-form',
            template: __webpack_require__(/*! ./horizontal-form.component.html */ "./src/app/modules/shared/components/forms/horizontal-form/horizontal-form.component.html"),
            styles: [__webpack_require__(/*! ./horizontal-form.component.scss */ "./src/app/modules/shared/components/forms/horizontal-form/horizontal-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], HorizontalFormComponent);
    return HorizontalFormComponent;
}(_common__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/shared/components/forms/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/shared/components/forms/index.ts ***!
  \**********************************************************/
/*! exports provided: HorizontalFormComponent, FormActionType, FormContent, FormPropertyType, toFormContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _horizontal_form_horizontal_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horizontal-form/horizontal-form.component */ "./src/app/modules/shared/components/forms/horizontal-form/horizontal-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HorizontalFormComponent", function() { return _horizontal_form_horizontal_form_component__WEBPACK_IMPORTED_MODULE_0__["HorizontalFormComponent"]; });

/* harmony import */ var _types_form_action_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/form-action-type.enum */ "./src/app/modules/shared/components/forms/types/form-action-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormActionType", function() { return _types_form_action_type_enum__WEBPACK_IMPORTED_MODULE_1__["FormActionType"]; });

/* harmony import */ var _types_form_content_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/form-content.class */ "./src/app/modules/shared/components/forms/types/form-content.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormContent", function() { return _types_form_content_class__WEBPACK_IMPORTED_MODULE_2__["FormContent"]; });

/* harmony import */ var _types_form_protperty_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/form-protperty-type.enum */ "./src/app/modules/shared/components/forms/types/form-protperty-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormPropertyType", function() { return _types_form_protperty_type_enum__WEBPACK_IMPORTED_MODULE_3__["FormPropertyType"]; });

/* harmony import */ var _control_form_content_mapper_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control/form-content-mapper.function */ "./src/app/modules/shared/components/forms/control/form-content-mapper.function.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toFormContent", function() { return _control_form_content_mapper_function__WEBPACK_IMPORTED_MODULE_4__["toFormContent"]; });








/***/ }),

/***/ "./src/app/modules/shared/components/forms/types/form-action-type.enum.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/components/forms/types/form-action-type.enum.ts ***!
  \********************************************************************************/
/*! exports provided: FormActionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormActionType", function() { return FormActionType; });
var FormActionType;
(function (FormActionType) {
    FormActionType[FormActionType["SAVE"] = 0] = "SAVE";
    FormActionType[FormActionType["DELETE"] = 1] = "DELETE";
    FormActionType[FormActionType["CANCEL"] = 2] = "CANCEL";
})(FormActionType || (FormActionType = {}));


/***/ }),

/***/ "./src/app/modules/shared/components/forms/types/form-content.class.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shared/components/forms/types/form-content.class.ts ***!
  \*****************************************************************************/
/*! exports provided: FormContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContent", function() { return FormContent; });
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");

var FormContent = /** @class */ (function () {
    function FormContent(optional) {
        if (optional === void 0) { optional = {}; }
        this.payload = optional.payload || null;
        this.disabledActions = optional.disabledActions || [];
        this.hiddenActions = optional.hiddenActions || [];
        this.loadingActions = optional.loadingActions || [];
    }
    FormContent.copyFrom = function (sourceObject) {
        var formContent = new FormContent();
        formContent.payload = sourceObject.payload;
        formContent.disabledActions = sourceObject.disabledActions;
        formContent.hiddenActions = sourceObject.hiddenActions;
        formContent.loadingActions = sourceObject.loadingActions;
        return formContent;
    };
    /**
     * gets text from this property
     *
     * @param {FormPropertyConfig} property
     * @returns {string}
     */
    FormContent.prototype.getText = function (property) {
        var extractedAttribute;
        if (Object(_shared_functions__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(property.propertyName) || property.propertyName.length === 0) {
            extractedAttribute = this.payload;
        }
        else {
            extractedAttribute = this.resolveNestedObjectProperties(property.propertyName);
        }
        return extractedAttribute;
    };
    FormContent.prototype.resolveNestedObjectProperties = function (path) {
        try {
            var separator = '.';
            return path.replace('[', separator).replace(']', '').split(separator).reduce(function getNestedProperty(obj, property) {
                return obj[property];
            }, this.payload);
        }
        catch (err) {
            return undefined;
        }
    };
    return FormContent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/forms/types/form-protperty-type.enum.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shared/components/forms/types/form-protperty-type.enum.ts ***!
  \***********************************************************************************/
/*! exports provided: FormPropertyType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPropertyType", function() { return FormPropertyType; });
var FormPropertyType;
(function (FormPropertyType) {
    FormPropertyType[FormPropertyType["TEXT"] = 0] = "TEXT";
    FormPropertyType[FormPropertyType["NUMBER"] = 1] = "NUMBER";
    FormPropertyType[FormPropertyType["PASSWORD"] = 2] = "PASSWORD";
})(FormPropertyType || (FormPropertyType = {}));


/***/ }),

/***/ "./src/app/modules/shared/components/headings/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/components/headings/index.ts ***!
  \*************************************************************/
/*! exports provided: PageHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-heading/page-heading.component */ "./src/app/modules/shared/components/headings/page-heading/page-heading.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeadingComponent", function() { return _page_heading_page_heading_component__WEBPACK_IMPORTED_MODULE_0__["PageHeadingComponent"]; });




/***/ }),

/***/ "./src/app/modules/shared/components/headings/page-heading/page-heading.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/headings/page-heading/page-heading.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"font-size: 3.3vh\">\n  <ng-content></ng-content>\n</h1>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/headings/page-heading/page-heading.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/shared/components/headings/page-heading/page-heading.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PageHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeadingComponent", function() { return PageHeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageHeadingComponent = /** @class */ (function () {
    function PageHeadingComponent() {
    }
    PageHeadingComponent.prototype.ngOnInit = function () {
    };
    PageHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-page-heading',
            template: __webpack_require__(/*! ./page-heading.component.html */ "./src/app/modules/shared/components/headings/page-heading/page-heading.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageHeadingComponent);
    return PageHeadingComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/index.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/shared/components/index.ts ***!
  \****************************************************/
/*! exports provided: CommonComponent, CommonSecuredComponent, AlertComponent, AlertType, ButtonComponent, DropdownComponent, DownloadButtonComponent, VereineDropdownComponent, ButtonType, ButtonSize, ModalDialogComponent, ModalDialogOption, ModalDialogResult, PageHeadingComponent, BreadcrumbsComponent, BreadcrumbDO, OverviewDialogComponent, CommonDialogComponent, DetailDialogComponent, NavigationDialogComponent, SimpleOverviewDialogComponent, DataTableComponent, TableEmptyPlaceholderComponent, TableLoadingPlaceholderComponent, showDeleteLoadingIndicatorIcon, hideLoadingIndicator, toTableRows, HorizontalFormComponent, FormActionType, FormContent, FormPropertyType, toFormContent, CenteredLayoutComponent, ColLayoutComponent, GridLayoutComponent, RowLayoutComponent, TooltipComponent, DropdownMenuComponent, QuicksearchListComponent, SelectionlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerts */ "./src/app/modules/shared/components/alerts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alerts__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _alerts__WEBPACK_IMPORTED_MODULE_0__["AlertType"]; });

/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/app/modules/shared/components/buttons/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return _buttons__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return _buttons__WEBPACK_IMPORTED_MODULE_1__["DropdownComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DownloadButtonComponent", function() { return _buttons__WEBPACK_IMPORTED_MODULE_1__["DownloadButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VereineDropdownComponent", function() { return _buttons__WEBPACK_IMPORTED_MODULE_1__["VereineDropdownComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return _buttons__WEBPACK_IMPORTED_MODULE_1__["ButtonType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonSize", function() { return _buttons__WEBPACK_IMPORTED_MODULE_1__["ButtonSize"]; });

/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals */ "./src/app/modules/shared/components/modals/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDialogComponent", function() { return _modals__WEBPACK_IMPORTED_MODULE_2__["ModalDialogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDialogOption", function() { return _modals__WEBPACK_IMPORTED_MODULE_2__["ModalDialogOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDialogResult", function() { return _modals__WEBPACK_IMPORTED_MODULE_2__["ModalDialogResult"]; });

/* harmony import */ var _headings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./headings */ "./src/app/modules/shared/components/headings/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeadingComponent", function() { return _headings__WEBPACK_IMPORTED_MODULE_3__["PageHeadingComponent"]; });

/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumbs */ "./src/app/modules/shared/components/breadcrumbs/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return _breadcrumbs__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbDO", function() { return _breadcrumbs__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbDO"]; });

/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs */ "./src/app/modules/shared/components/dialogs/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverviewDialogComponent", function() { return _dialogs__WEBPACK_IMPORTED_MODULE_5__["OverviewDialogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonDialogComponent", function() { return _dialogs__WEBPACK_IMPORTED_MODULE_5__["CommonDialogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailDialogComponent", function() { return _dialogs__WEBPACK_IMPORTED_MODULE_5__["DetailDialogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationDialogComponent", function() { return _dialogs__WEBPACK_IMPORTED_MODULE_5__["NavigationDialogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleOverviewDialogComponent", function() { return _dialogs__WEBPACK_IMPORTED_MODULE_5__["SimpleOverviewDialogComponent"]; });

/* harmony import */ var _tables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tables */ "./src/app/modules/shared/components/tables/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return _tables__WEBPACK_IMPORTED_MODULE_6__["DataTableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableEmptyPlaceholderComponent", function() { return _tables__WEBPACK_IMPORTED_MODULE_6__["TableEmptyPlaceholderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableLoadingPlaceholderComponent", function() { return _tables__WEBPACK_IMPORTED_MODULE_6__["TableLoadingPlaceholderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showDeleteLoadingIndicatorIcon", function() { return _tables__WEBPACK_IMPORTED_MODULE_6__["showDeleteLoadingIndicatorIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoadingIndicator", function() { return _tables__WEBPACK_IMPORTED_MODULE_6__["hideLoadingIndicator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toTableRows", function() { return _tables__WEBPACK_IMPORTED_MODULE_6__["toTableRows"]; });

/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms */ "./src/app/modules/shared/components/forms/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HorizontalFormComponent", function() { return _forms__WEBPACK_IMPORTED_MODULE_7__["HorizontalFormComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormActionType", function() { return _forms__WEBPACK_IMPORTED_MODULE_7__["FormActionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormContent", function() { return _forms__WEBPACK_IMPORTED_MODULE_7__["FormContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormPropertyType", function() { return _forms__WEBPACK_IMPORTED_MODULE_7__["FormPropertyType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toFormContent", function() { return _forms__WEBPACK_IMPORTED_MODULE_7__["toFormContent"]; });

/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts */ "./src/app/modules/shared/components/layouts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CenteredLayoutComponent", function() { return _layouts__WEBPACK_IMPORTED_MODULE_8__["CenteredLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColLayoutComponent", function() { return _layouts__WEBPACK_IMPORTED_MODULE_8__["ColLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridLayoutComponent", function() { return _layouts__WEBPACK_IMPORTED_MODULE_8__["GridLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RowLayoutComponent", function() { return _layouts__WEBPACK_IMPORTED_MODULE_8__["RowLayoutComponent"]; });

/* harmony import */ var _tooltips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tooltips */ "./src/app/modules/shared/components/tooltips/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return _tooltips__WEBPACK_IMPORTED_MODULE_9__["TooltipComponent"]; });

/* harmony import */ var _dropdowns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dropdowns */ "./src/app/modules/shared/components/dropdowns/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuComponent", function() { return _dropdowns__WEBPACK_IMPORTED_MODULE_10__["DropdownMenuComponent"]; });

/* harmony import */ var _selectionlists__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selectionlists */ "./src/app/modules/shared/components/selectionlists/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuicksearchListComponent", function() { return _selectionlists__WEBPACK_IMPORTED_MODULE_11__["QuicksearchListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionlistComponent", function() { return _selectionlists__WEBPACK_IMPORTED_MODULE_11__["SelectionlistComponent"]; });

/* harmony import */ var _common_common_component_class__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/common-component.class */ "./src/app/modules/shared/components/common/common-component.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonComponent", function() { return _common_common_component_class__WEBPACK_IMPORTED_MODULE_12__["CommonComponent"]; });

/* harmony import */ var _common_common_secured_component_class__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/common-secured-component.class */ "./src/app/modules/shared/components/common/common-secured-component.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonSecuredComponent", function() { return _common_common_secured_component_class__WEBPACK_IMPORTED_MODULE_13__["CommonSecuredComponent"]; });

















/***/ }),

/***/ "./src/app/modules/shared/components/layouts/centered-layout/centered-layout.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/layouts/centered-layout/centered-layout.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-col-layout>\n  <div [ngStyle]=\"getWith()\"></div>\n  <div [ngStyle]=\"getMaxWidth()\"\n       class=\"centered-content\">\n    <ng-content></ng-content>\n  </div>\n  <div [ngStyle]=\"getWith()\"></div>\n</bla-col-layout>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/layouts/centered-layout/centered-layout.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/layouts/centered-layout/centered-layout.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered-content {\n  flex-grow: 2;\n  min-width: 60%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0cy9jZW50ZXJlZC1sYXlvdXQvY2VudGVyZWQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0cy9jZW50ZXJlZC1sYXlvdXQvY2VudGVyZWQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcmVkLWNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDI7XG4gIG1pbi13aWR0aDogNjAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/shared/components/layouts/centered-layout/centered-layout.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/layouts/centered-layout/centered-layout.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CenteredLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenteredLayoutComponent", function() { return CenteredLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CenteredLayoutComponent = /** @class */ (function () {
    function CenteredLayoutComponent() {
        this.width = 60;
    }
    CenteredLayoutComponent.prototype.ngOnInit = function () {
    };
    CenteredLayoutComponent.prototype.getMaxWidth = function () {
        return JSON.parse("{\"min-width\":\"" + this.width + "\", \"max-width\":\"" + this.width + "%\"}");
    };
    CenteredLayoutComponent.prototype.getWith = function () {
        var width = (100 - this.width) / 2;
        return JSON.parse("{\"min-width\":\"" + width + "\", \"max-width\":\"" + width + "%\"}");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CenteredLayoutComponent.prototype, "width", void 0);
    CenteredLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-centered-layout',
            template: __webpack_require__(/*! ./centered-layout.component.html */ "./src/app/modules/shared/components/layouts/centered-layout/centered-layout.component.html"),
            styles: [__webpack_require__(/*! ./centered-layout.component.scss */ "./src/app/modules/shared/components/layouts/centered-layout/centered-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CenteredLayoutComponent);
    return CenteredLayoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/layouts/col-layout/col-layout.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/layouts/col-layout/col-layout.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-layout\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/layouts/col-layout/col-layout.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/layouts/col-layout/col-layout.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-layout {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row; }\n\n:host /deep/ * {\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0cy9jb2wtbGF5b3V0L2NvbC1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2xheW91dHMvY29sLWxheW91dC9jb2wtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1sYXlvdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG46aG9zdCAvZGVlcC8gKiB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/shared/components/layouts/col-layout/col-layout.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/components/layouts/col-layout/col-layout.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ColLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColLayoutComponent", function() { return ColLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColLayoutComponent = /** @class */ (function () {
    function ColLayoutComponent() {
    }
    ColLayoutComponent.prototype.ngOnInit = function () {
    };
    ColLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-col-layout',
            template: __webpack_require__(/*! ./col-layout.component.html */ "./src/app/modules/shared/components/layouts/col-layout/col-layout.component.html"),
            styles: [__webpack_require__(/*! ./col-layout.component.scss */ "./src/app/modules/shared/components/layouts/col-layout/col-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColLayoutComponent);
    return ColLayoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/layouts/grid-layout/grid-layout.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/shared/components/layouts/grid-layout/grid-layout.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-layout\"\n     [class.align-center]=\"alignCenter\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/layouts/grid-layout/grid-layout.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/shared/components/layouts/grid-layout/grid-layout.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-layout {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.align-center {\n  justify-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0cy9ncmlkLWxheW91dC9ncmlkLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2xheW91dHMvZ3JpZC1sYXlvdXQvZ3JpZC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1sYXlvdXQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hbGlnbi1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/components/layouts/grid-layout/grid-layout.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/layouts/grid-layout/grid-layout.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GridLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLayoutComponent", function() { return GridLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridLayoutComponent = /** @class */ (function () {
    function GridLayoutComponent() {
        this.alignCenter = false;
    }
    GridLayoutComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GridLayoutComponent.prototype, "alignCenter", void 0);
    GridLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-grid-layout',
            template: __webpack_require__(/*! ./grid-layout.component.html */ "./src/app/modules/shared/components/layouts/grid-layout/grid-layout.component.html"),
            styles: [__webpack_require__(/*! ./grid-layout.component.scss */ "./src/app/modules/shared/components/layouts/grid-layout/grid-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridLayoutComponent);
    return GridLayoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/layouts/index.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/shared/components/layouts/index.ts ***!
  \************************************************************/
/*! exports provided: CenteredLayoutComponent, ColLayoutComponent, GridLayoutComponent, RowLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _centered_layout_centered_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./centered-layout/centered-layout.component */ "./src/app/modules/shared/components/layouts/centered-layout/centered-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CenteredLayoutComponent", function() { return _centered_layout_centered_layout_component__WEBPACK_IMPORTED_MODULE_0__["CenteredLayoutComponent"]; });

/* harmony import */ var _col_layout_col_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./col-layout/col-layout.component */ "./src/app/modules/shared/components/layouts/col-layout/col-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColLayoutComponent", function() { return _col_layout_col_layout_component__WEBPACK_IMPORTED_MODULE_1__["ColLayoutComponent"]; });

/* harmony import */ var _grid_layout_grid_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-layout/grid-layout.component */ "./src/app/modules/shared/components/layouts/grid-layout/grid-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridLayoutComponent", function() { return _grid_layout_grid_layout_component__WEBPACK_IMPORTED_MODULE_2__["GridLayoutComponent"]; });

/* harmony import */ var _row_layout_row_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./row-layout/row-layout.component */ "./src/app/modules/shared/components/layouts/row-layout/row-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RowLayoutComponent", function() { return _row_layout_row_layout_component__WEBPACK_IMPORTED_MODULE_3__["RowLayoutComponent"]; });







/***/ }),

/***/ "./src/app/modules/shared/components/layouts/row-layout/row-layout.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/layouts/row-layout/row-layout.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row-layout\">\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/modules/shared/components/layouts/row-layout/row-layout.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/layouts/row-layout/row-layout.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-layout {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0cy9yb3ctbGF5b3V0L3Jvdy1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0cy9yb3ctbGF5b3V0L3Jvdy1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWxheW91dCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/components/layouts/row-layout/row-layout.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/components/layouts/row-layout/row-layout.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RowLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowLayoutComponent", function() { return RowLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RowLayoutComponent = /** @class */ (function () {
    function RowLayoutComponent() {
    }
    RowLayoutComponent.prototype.ngOnInit = function () {
    };
    RowLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-row-layout',
            template: __webpack_require__(/*! ./row-layout.component.html */ "./src/app/modules/shared/components/layouts/row-layout/row-layout.component.html"),
            styles: [__webpack_require__(/*! ./row-layout.component.scss */ "./src/app/modules/shared/components/layouts/row-layout/row-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RowLayoutComponent);
    return RowLayoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/modals/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/components/modals/index.ts ***!
  \***********************************************************/
/*! exports provided: ModalDialogComponent, ModalDialogOption, ModalDialogResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-dialog/modal-dialog.component */ "./src/app/modules/shared/components/modals/modal-dialog/modal-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDialogComponent", function() { return _modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ModalDialogComponent"]; });

/* harmony import */ var _types_modal_dialog_option_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/modal-dialog-option.enum */ "./src/app/modules/shared/components/modals/types/modal-dialog-option.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDialogOption", function() { return _types_modal_dialog_option_enum__WEBPACK_IMPORTED_MODULE_1__["ModalDialogOption"]; });

/* harmony import */ var _types_modal_dialog_result_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/modal-dialog-result.enum */ "./src/app/modules/shared/components/modals/types/modal-dialog-result.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDialogResult", function() { return _types_modal_dialog_result_enum__WEBPACK_IMPORTED_MODULE_2__["ModalDialogResult"]; });






/***/ }),

/***/ "./src/app/modules/shared/components/modals/modal-dialog/modal-dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/shared/components/modals/modal-dialog/modal-dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"modal\"\n  [class.show]=\"visible\"\n  id=\"exampleModal\"\n  tabindex=\"-1\"\n  role=\"dialog\">\n  <div class=\"modal-dialog animation \"\n       [class.fade-in]=\"visible\"\n       style=\"padding-top: 10%;\"\n       role=\"document\">\n    <div class=\"modal-content\"\n         [ngSwitch]=\"modalDialogOption\">\n      <div class=\"modal-header\">\n        <!-- display complex header with <h5> inside the modal dialog element tags -->\n        <ng-content select=\"h5\"\n                    class=\"modal-title\"></ng-content>\n\n        <!-- display simple text header with attribute value -->\n        <h5 *ngIf=\"!!header\"\n            class=\"modal-title\">{{ header }}</h5>\n      </div>\n\n      <div class=\"modal-body\">\n        <ng-content></ng-content>\n      </div>\n\n\n      <div class=\"modal-footer modal-dialog-ok\"\n           *ngSwitchCase=\"ModalDialogOption.OK\">\n        <bla-button [buttonType]=\"ButtonType.PRIMARY\"\n                    [minWidth]=\"minOptionButtonWidth\"\n                    (onClick)=\"closeDialog(ModalDialogResult.OK)\">\n          {{ 'NOTIFICATION.BUTTON.OK' | translate }}\n        </bla-button>\n      </div>\n\n      <div class=\"modal-footer modal-dialog-ok-cancel\"\n           *ngSwitchCase=\"ModalDialogOption.OK_CANCEL\">\n        <bla-button [buttonType]=\"ButtonType.SECONDARY\"\n                    [minWidth]=\"minOptionButtonWidth\"\n                    (onClick)=\"closeDialog(ModalDialogResult.CANCEL)\">\n          {{ 'NOTIFICATION.BUTTON.CANCEL' | translate }}\n        </bla-button>\n        <bla-button [buttonType]=\"ButtonType.PRIMARY\"\n                    [minWidth]=\"minOptionButtonWidth\"\n                    (onClick)=\"closeDialog(ModalDialogResult.OK)\">\n          {{ 'NOTIFICATION.BUTTON.OK' | translate }}\n        </bla-button>\n      </div>\n      <div class=\"modal-footer modal-dialog-yes-no\"\n           *ngSwitchCase=\"ModalDialogOption.YES_NO\">\n\n        <bla-button [buttonType]=\"ButtonType.SECONDARY\"\n                    [minWidth]=\"minOptionButtonWidth\"\n                    (onClick)=\"closeDialog(ModalDialogResult.NO)\">\n          {{ 'NOTIFICATION.BUTTON.NO' | translate }}\n        </bla-button>\n        <bla-button [buttonType]=\"ButtonType.PRIMARY\"\n                    [minWidth]=\"minOptionButtonWidth\"\n                    (onClick)=\"closeDialog(ModalDialogResult.YES)\">\n          {{ 'NOTIFICATION.BUTTON.YES' | translate }}\n        </bla-button>\n\n      </div>\n\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/shared/components/modals/modal-dialog/modal-dialog.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/shared/components/modals/modal-dialog/modal-dialog.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Farbkonzept Website */\n.show {\n  display: block;\n  background-color: rgba(0, 0, 0, 0.5); }\n.modal-content {\n  border: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWxzL21vZGFsLWRpYWxvZy9tb2RhbC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQUE7QUFRQTtFQUNFLGNBQWM7RUFDZCxvQ0FBb0MsRUFBQTtBQUd0QztFQUNFLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWxzL21vZGFsLWRpYWxvZy9tb2RhbC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGYXJia29uemVwdCBXZWJzaXRlICovXG4kcHJpbWFyeTogIzAyYmRkNTsgLy8gTGlua3MsIE5hdmJhclxuJHByaW1hcnktbGlnaHQ6ICNiNGZmZmY7IC8vIFNpZGViYXItQmFja2dyb3VuZFxuJHByaW1hcnktZGFyazogIzAwN2M5MTsgLy8gU2lkZWJhci1Gb250XG4kc2Vjb25kYXJ5OiAjZmZjMTA3OyAvLyBob3ZlciBUYWJsZXNcbiRzZWNvbmRhcnktbGlnaHQ6ICNmZmYzNTA7XG4kc2Vjb25kYXJ5LWRhcms6ICNmZjgzM2E7IC8vIGhvdmVyIExpbmtzLCBMb2dvXG5cbi5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBib3JkZXI6IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/components/modals/modal-dialog/modal-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/modals/modal-dialog/modal-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ModalDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDialogComponent", function() { return ModalDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../buttons */ "./src/app/modules/shared/components/buttons/index.ts");
/* harmony import */ var _types_modal_dialog_option_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/modal-dialog-option.enum */ "./src/app/modules/shared/components/modals/types/modal-dialog-option.enum.ts");
/* harmony import */ var _types_modal_dialog_result_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/modal-dialog-result.enum */ "./src/app/modules/shared/components/modals/types/modal-dialog-result.enum.ts");






var ModalDialogComponent = /** @class */ (function () {
    function ModalDialogComponent() {
        this.visible = false;
        this.disabled = false;
        this.modalDialogOption = _types_modal_dialog_option_enum__WEBPACK_IMPORTED_MODULE_4__["ModalDialogOption"].OK;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ButtonType = _buttons__WEBPACK_IMPORTED_MODULE_3__["ButtonType"];
        this.ModalDialogOption = _types_modal_dialog_option_enum__WEBPACK_IMPORTED_MODULE_4__["ModalDialogOption"];
        this.ModalDialogResult = _types_modal_dialog_result_enum__WEBPACK_IMPORTED_MODULE_5__["ModalDialogResult"];
        this.minOptionButtonWidth = '6rem'; // uniform size of all options
    }
    ModalDialogComponent.prototype.ngOnInit = function () {
    };
    ModalDialogComponent.prototype.closeDialog = function (result) {
        this.visible = false;
        this.onClose.emit(result);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalDialogComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalDialogComponent.prototype, "visible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalDialogComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ModalDialogComponent.prototype, "modalDialogOption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalDialogComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalDialogComponent.prototype, "onClose", void 0);
    ModalDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-modal-dialog',
            template: __webpack_require__(/*! ./modal-dialog.component.html */ "./src/app/modules/shared/components/modals/modal-dialog/modal-dialog.component.html"),
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
            styles: [__webpack_require__(/*! ./modal-dialog.component.scss */ "./src/app/modules/shared/components/modals/modal-dialog/modal-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalDialogComponent);
    return ModalDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/modals/types/modal-dialog-option.enum.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/components/modals/types/modal-dialog-option.enum.ts ***!
  \************************************************************************************/
/*! exports provided: ModalDialogOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDialogOption", function() { return ModalDialogOption; });
var ModalDialogOption;
(function (ModalDialogOption) {
    ModalDialogOption[ModalDialogOption["OK"] = 0] = "OK";
    ModalDialogOption[ModalDialogOption["OK_CANCEL"] = 1] = "OK_CANCEL";
    ModalDialogOption[ModalDialogOption["YES_NO"] = 2] = "YES_NO";
})(ModalDialogOption || (ModalDialogOption = {}));


/***/ }),

/***/ "./src/app/modules/shared/components/modals/types/modal-dialog-result.enum.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/components/modals/types/modal-dialog-result.enum.ts ***!
  \************************************************************************************/
/*! exports provided: ModalDialogResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDialogResult", function() { return ModalDialogResult; });
var ModalDialogResult;
(function (ModalDialogResult) {
    ModalDialogResult[ModalDialogResult["OK"] = 0] = "OK";
    ModalDialogResult[ModalDialogResult["CANCEL"] = 1] = "CANCEL";
    ModalDialogResult[ModalDialogResult["YES"] = 2] = "YES";
    ModalDialogResult[ModalDialogResult["NO"] = 3] = "NO";
})(ModalDialogResult || (ModalDialogResult = {}));


/***/ }),

/***/ "./src/app/modules/shared/components/navigation-cards/index.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shared/components/navigation-cards/index.ts ***!
  \*********************************************************************/
/*! exports provided: NavigationCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_cards_navigation_cards_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-cards/navigation-cards.component */ "./src/app/modules/shared/components/navigation-cards/navigation-cards/navigation-cards.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationCardsComponent", function() { return _navigation_cards_navigation_cards_component__WEBPACK_IMPORTED_MODULE_0__["NavigationCardsComponent"]; });




/***/ }),

/***/ "./src/app/modules/shared/components/navigation-cards/navigation-cards/navigation-cards.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/navigation-cards/navigation-cards/navigation-cards.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bla-grid-layout>\n\n  <div class=\"card navigation-card\"\n       *ngFor=\"let card of config.navigationCards\">\n    <a class=\"card-header-link\"\n       [routerLink]=\"card.route\">\n      <div class=\"card-header\">\n        <fa-icon [icon]=\"card.icon\"\n                 size=\"3x\"></fa-icon>\n      </div>\n    </a>\n\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{ card.labelKey | translate }}</h5>\n      <p class=\"card-text\">{{ card.descriptionKey | translate }}</p>\n      <button class=\"btn btn-primary\"\n              [routerLink]=\"card.route\">{{ card.labelKey | translate }}\n      </button>\n    </div>\n  </div>\n\n</bla-grid-layout>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/navigation-cards/navigation-cards/navigation-cards.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/navigation-cards/navigation-cards/navigation-cards.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-card {\n  width: 18rem;\n  margin: 1em 1em 0 0; }\n\n.card-header-link, .card-header-link:hover, .card-header-link:visited, .card-header-link:active {\n  color: #000; }\n\n.card-header {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1jYXJkcy9uYXZpZ2F0aW9uLWNhcmRzL25hdmlnYXRpb24tY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL25hdmlnYXRpb24tY2FyZHMvbmF2aWdhdGlvbi1jYXJkcy9uYXZpZ2F0aW9uLWNhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24tY2FyZCB7XG4gIHdpZHRoOiAxOHJlbTtcbiAgbWFyZ2luOiAxZW0gMWVtIDAgMDtcbn1cblxuLmNhcmQtaGVhZGVyLWxpbmssIC5jYXJkLWhlYWRlci1saW5rOmhvdmVyLCAuY2FyZC1oZWFkZXItbGluazp2aXNpdGVkLCAuY2FyZC1oZWFkZXItbGluazphY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/shared/components/navigation-cards/navigation-cards/navigation-cards.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/navigation-cards/navigation-cards/navigation-cards.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: NavigationCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationCardsComponent", function() { return NavigationCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./src/app/modules/shared/components/common/index.ts");



var NavigationCardsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NavigationCardsComponent, _super);
    function NavigationCardsComponent() {
        var _this = _super.call(this) || this;
        _this.config = { navigationCards: [] };
        return _this;
    }
    NavigationCardsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationCardsComponent.prototype, "config", void 0);
    NavigationCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-navigation-cards',
            template: __webpack_require__(/*! ./navigation-cards.component.html */ "./src/app/modules/shared/components/navigation-cards/navigation-cards/navigation-cards.component.html"),
            styles: [__webpack_require__(/*! ./navigation-cards.component.scss */ "./src/app/modules/shared/components/navigation-cards/navigation-cards/navigation-cards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationCardsComponent);
    return NavigationCardsComponent;
}(_common__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/shared/components/selectionlists/index.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/shared/components/selectionlists/index.ts ***!
  \*******************************************************************/
/*! exports provided: QuicksearchListComponent, SelectionlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quicksearch_list_quicksearch_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quicksearch-list/quicksearch-list.component */ "./src/app/modules/shared/components/selectionlists/quicksearch-list/quicksearch-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuicksearchListComponent", function() { return _quicksearch_list_quicksearch_list_component__WEBPACK_IMPORTED_MODULE_0__["QuicksearchListComponent"]; });

/* harmony import */ var _selectionlist_selectionlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectionlist/selectionlist.component */ "./src/app/modules/shared/components/selectionlists/selectionlist/selectionlist.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionlistComponent", function() { return _selectionlist_selectionlist_component__WEBPACK_IMPORTED_MODULE_1__["SelectionlistComponent"]; });





/***/ }),

/***/ "./src/app/modules/shared/components/selectionlists/quicksearch-list/quicksearch-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/selectionlists/quicksearch-list/quicksearch-list.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quicksearch-list\">\n\n  <div class=\"input-group mb-3\">\n    <input (input)=\"onSearch($event.target.value)\"\n           [disabled]=\"isDisabled()\"\n           [id]=\"id\"\n           [name]=\"id\"\n           [placeholder]=\"getPlacholder()\"\n           class=\"form-control quicksearch-list-search\"\n           type=\"text\">\n    <div class=\"input-group-append\"\n         style=\"\">\n      <span class=\"input-group-text\"\n            id=\"basic-addon2\">\n        <fa-icon [icon]=\"findIcon\"></fa-icon>\n      </span>\n    </div>\n  </div>\n\n  <bla-selectionlist (onSelect)=\"onItemSelect($event)\"\n                     [disabled]=\"isDisabled()\"\n                     [id]=\"'selectionList' + id\"\n                     [items]=\"getFilteredItems()\"\n                     [loading]=\"loading\"\n                     [multipleSelections]=\"multipleSelections\"\n                     [optionFieldSelector]=\"optionFieldSelector\"\n                     [selectedItemIds]=\"getSelectedItemIds()\"\n                     [style.height]=\"selectionListHeight\"\n                     class=\"quicksearch-list-select\">\n\n  </bla-selectionlist>\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/selectionlists/quicksearch-list/quicksearch-list.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/selectionlists/quicksearch-list/quicksearch-list.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quicksearch-list {\n  display: flex;\n  flex-direction: column; }\n\n.quicksearch-list-select {\n  height: 10em; }\n\n.input-group-append {\n  flex-grow: unset;\n  height: calc(2.25rem + 2px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvc2VsZWN0aW9ubGlzdHMvcXVpY2tzZWFyY2gtbGlzdC9xdWlja3NlYXJjaC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQU14QjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQjtFQUNoQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvc2VsZWN0aW9ubGlzdHMvcXVpY2tzZWFyY2gtbGlzdC9xdWlja3NlYXJjaC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1aWNrc2VhcmNoLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucXVpY2tzZWFyY2gtbGlzdC1zZWFyY2gge1xufVxuXG4ucXVpY2tzZWFyY2gtbGlzdC1zZWxlY3Qge1xuICBoZWlnaHQ6IDEwZW07XG59XG5cbi5pbnB1dC1ncm91cC1hcHBlbmQge1xuICBmbGV4LWdyb3c6IHVuc2V0O1xuICBoZWlnaHQ6IGNhbGMoMi4yNXJlbSArIDJweCk7XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/components/selectionlists/quicksearch-list/quicksearch-list.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/selectionlists/quicksearch-list/quicksearch-list.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: QuicksearchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuicksearchListComponent", function() { return QuicksearchListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");





var QuicksearchListComponent = /** @class */ (function () {
    function QuicksearchListComponent(translate) {
        this.translate = translate;
        this.visible = true;
        this.disabled = false;
        this.loading = false;
        this.placeholderTranslationKey = 'SELECTIONLIST.SEARCH_PLACEHOLDER';
        this.emptyItemListPlaceholderTranslationKey = 'SELECTIONLIST.NO_ENTRIES_FOUND';
        this.loadingPlaceholderTranslationKey = 'SELECTIONLIST.LOADING';
        /**
         *
         * @type {Array} of VersionedDataObject
         */
        this.items = [];
        /**
         * The parent component can receive the onClick event.
         * @type {EventEmitter<VersionedDataObject>} void or the defined return value
         */
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         *
         * @type {number} id of the preselected item
         */
        this.selectedItemIds = [];
        this.filteredItems = [];
        this.findIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSearch"];
    }
    QuicksearchListComponent.prototype.ngOnInit = function () {
        this.filteredItems = this.items;
    };
    QuicksearchListComponent.prototype.ngOnChanges = function (changes) {
    };
    QuicksearchListComponent.prototype.onItemSelect = function ($event) {
        this.onSelect.emit($event);
    };
    QuicksearchListComponent.prototype.isDisabled = function () {
        return this.disabled || Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.items) || this.items.length === 0 || this.loading;
    };
    QuicksearchListComponent.prototype.getPlacholder = function () {
        return this.translate.transform(this.placeholderTranslationKey);
    };
    QuicksearchListComponent.prototype.getFilteredItems = function () {
        return this.filteredItems;
    };
    QuicksearchListComponent.prototype.getSelectedItemIds = function () {
        return this.selectedItemIds;
    };
    QuicksearchListComponent.prototype.onSearch = function (searchValue) {
        // filter array on change
        if (this.lastSearchValue !== searchValue) {
            this.filteredItems = this.filterArray(searchValue).slice(0);
            this.lastSearchValue = searchValue;
            this.onItemSelect([]);
        }
    };
    QuicksearchListComponent.prototype.resetState = function () {
        this.filteredItems = this.items;
    };
    QuicksearchListComponent.prototype.filterArray = function (searchValue) {
        this.selectedItemIds = [];
        // this-context not known in filter method thus the need for an auxiliary variable
        var searchAttribute = this.optionFieldSelector;
        return this.items.filter(function (el) {
            if (Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(searchAttribute)) {
                var elToString = String(el);
                return elToString.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
            }
            return el[searchAttribute].toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuicksearchListComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuicksearchListComponent.prototype, "visible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuicksearchListComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuicksearchListComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], QuicksearchListComponent.prototype, "multipleSelections", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuicksearchListComponent.prototype, "placeholderTranslationKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuicksearchListComponent.prototype, "emptyItemListPlaceholderTranslationKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuicksearchListComponent.prototype, "loadingPlaceholderTranslationKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuicksearchListComponent.prototype, "selectionListHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], QuicksearchListComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuicksearchListComponent.prototype, "optionFieldSelector", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuicksearchListComponent.prototype, "onSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], QuicksearchListComponent.prototype, "selectedItemIds", void 0);
    QuicksearchListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-quicksearch-list',
            template: __webpack_require__(/*! ./quicksearch-list.component.html */ "./src/app/modules/shared/components/selectionlists/quicksearch-list/quicksearch-list.component.html"),
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
            styles: [__webpack_require__(/*! ./quicksearch-list.component.scss */ "./src/app/modules/shared/components/selectionlists/quicksearch-list/quicksearch-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]])
    ], QuicksearchListComponent);
    return QuicksearchListComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/selectionlists/selectionlist/selectionlist.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/selectionlists/selectionlist/selectionlist.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select #selectModel=\"ngModel\"\n        (ngModelChange)=\"onSelectionChanged($event)\"\n        [(ngModel)]=\"selectedItemIds\"\n        [disabled]=\"isDisabled()\"\n        [id]=\"id\"\n        [multiple]=\"isMultibleSelectionAllowed()\"\n        [name]=\"id\"\n        [size]=\"getListSize()\"\n        class=\"form-control selection-list\">\n\n  <option *ngIf=\"showEmptyItemListPlaceholder()\"\n          class=\"placeholder-option\"\n          disabled\n          value=\"0\">\n    {{ 'SELECTIONLIST.NO_ENTRIES_FOUND' | translate }}\n  </option>\n\n  <option *ngIf=\"showLoadingPlaceholder()\"\n          class=\"placeholder-option\"\n          disabled\n          value=\"0\">\n    {{ 'SELECTIONLIST.LOADING' | translate }}\n  </option>\n\n  <ng-container *ngIf=\"!showLoadingPlaceholder() && !showEmptyItemListPlaceholder()\">\n    <option *ngFor=\"let item of items\"\n            [ngValue]=\"item.id\">\n      {{ item[optionFieldSelector] }}\n    </option>\n  </ng-container>\n\n</select>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/selectionlists/selectionlist/selectionlist.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/selectionlists/selectionlist/selectionlist.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selection-list {\n  height: 100%;\n  max-height: 100%;\n  min-height: 100%;\n  width: 100%;\n  min-width: 100%;\n  max-width: 100%;\n  overflow-y: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvc2VsZWN0aW9ubGlzdHMvc2VsZWN0aW9ubGlzdC9zZWxlY3Rpb25saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBRWYsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL3NlbGVjdGlvbmxpc3RzL3NlbGVjdGlvbmxpc3Qvc2VsZWN0aW9ubGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3Rpb24tbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/shared/components/selectionlists/selectionlist/selectionlist.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/selectionlists/selectionlist/selectionlist.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SelectionlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionlistComponent", function() { return SelectionlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");



var SelectionlistComponent = /** @class */ (function () {
    function SelectionlistComponent() {
        this.visible = true;
        this.disabled = false;
        this.loading = false;
        this.multipleSelections = true;
        this.emptyItemListPlaceholderTranslationKey = 'SELECTIONLIST.NO_ENTRIES_FOUND';
        this.loadingPlaceholderTranslationKey = 'SELECTIONLIST.LOADING';
        /**
         *
         * @type {Array} of VersionedDataObject
         */
        this.items = [];
        /**
         * The parent component can receive the onClick event.
         * @type {EventEmitter<VersionedDataObject>} void or the defined return value
         */
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         *
         * @type {number} id of the preselected item
         */
        this.selectedItemIds = [];
    }
    SelectionlistComponent.prototype.ngOnInit = function () {
    };
    SelectionlistComponent.prototype.ngOnChanges = function (changes) {
    };
    SelectionlistComponent.prototype.isDisabled = function () {
        return this.disabled || this.showEmptyItemListPlaceholder() || this.showLoadingPlaceholder();
    };
    SelectionlistComponent.prototype.isMultibleSelectionAllowed = function () {
        return Object(_shared_functions__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.multipleSelections) || this.multipleSelections;
    };
    SelectionlistComponent.prototype.onSelectionChanged = function ($event) {
        var _this = this;
        var selectedItems = [];
        $event.forEach(function (itemId) {
            _this.items.forEach(function (item) {
                if (item.id === itemId) {
                    selectedItems.push(item);
                }
            });
        });
        console.log('On Selection Changed: ' + JSON.stringify(selectedItems));
        this.onSelect.emit(selectedItems);
    };
    SelectionlistComponent.prototype.getListSize = function () {
        if (this.showEmptyItemListPlaceholder()) {
            return 1;
        }
        else {
            return this.items.length;
        }
    };
    SelectionlistComponent.prototype.showEmptyItemListPlaceholder = function () {
        return Object(_shared_functions__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.items) || this.items.length === 0;
    };
    SelectionlistComponent.prototype.showLoadingPlaceholder = function () {
        return this.loading;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectionlistComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectionlistComponent.prototype, "visible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectionlistComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectionlistComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectionlistComponent.prototype, "multipleSelections", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectionlistComponent.prototype, "emptyItemListPlaceholderTranslationKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectionlistComponent.prototype, "loadingPlaceholderTranslationKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SelectionlistComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectionlistComponent.prototype, "optionFieldSelector", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectionlistComponent.prototype, "onSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SelectionlistComponent.prototype, "selectedItemIds", void 0);
    SelectionlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-selectionlist',
            template: __webpack_require__(/*! ./selectionlist.component.html */ "./src/app/modules/shared/components/selectionlists/selectionlist/selectionlist.component.html"),
            styles: [__webpack_require__(/*! ./selectionlist.component.scss */ "./src/app/modules/shared/components/selectionlists/selectionlist/selectionlist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectionlistComponent);
    return SelectionlistComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/tables/control/base-table-sorter.class.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/shared/components/tables/control/base-table-sorter.class.ts ***!
  \*************************************************************************************/
/*! exports provided: BaseTableSorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTableSorter", function() { return BaseTableSorter; });
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _types_table_column_sort_order_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/table-column-sort-order.enum */ "./src/app/modules/shared/components/tables/types/table-column-sort-order.enum.ts");


var BaseTableSorter = /** @class */ (function () {
    function BaseTableSorter(tableConfig) {
        var _this = this;
        this.config = tableConfig;
        this.config.columns.forEach(function (column) {
            if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(column.currentSortOrder)
                && column.currentSortOrder !== _types_table_column_sort_order_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnSortOrder"].UNSORTED) {
                // save state to show the (ascending/ descending) sort order icons
                _this.currentlySortedColumn = column;
            }
        });
    }
    BaseTableSorter.prototype.refreshCurrentSorting = function (rows) {
        if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(rows)) {
            // the custom sorter overrides the sorterImplementation method
            rows.sort(this.sorterImplementation(this.currentlySortedColumn));
        }
        return rows;
    };
    /**
     *
     * @param rows to be sorted
     * @param sortColumn will be stored to show the ascending/ descending sort icons
     * @returns {TableRow[]} sorted rows with the sorting functions from the sorterImplementation method
     */
    BaseTableSorter.prototype.sortByColumn = function (rows, sortColumn) {
        if (!this.config) {
            console.warn('No table configuration found. Abort sorting column: ', sortColumn.propertyName);
            return rows;
        }
        this.toggleSortOrder(sortColumn);
        // the custom sorter overrides the sorterImplementation method
        rows.sort(this.sorterImplementation(sortColumn));
        // save state to show the (ascending/ descending) sort order icons
        this.currentlySortedColumn = sortColumn;
        return rows;
    };
    /**
     *
     * @param column
     * @returns {any} css classes to show the ascending/ descending sort icons
     */
    BaseTableSorter.prototype.getSortingClasses = function (column) {
        if (column.sortable) {
            if (this.currentlySortedColumn
                && this.currentlySortedColumn === column) {
                return ['sortable', _types_table_column_sort_order_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnSortOrder"][column.currentSortOrder].toLowerCase()];
            }
            else {
                return ['sortable', 'unsorted'];
            }
        }
        else {
            return [''];
        }
    };
    /**
     * Default sort function to sort an array alphabetically
     *
     * @see sortTwoFunctions
     *
     * @param currentlySortedColumn
     * @param overrideSortOrder is used, if the sort order of a previous sort function should adopted.
     * Override sort order, if this function is the second one of the sortTwoFunctions method
     * @returns {(rowA:any, rowB:any)=>(number|number|number)} sort function
     */
    BaseTableSorter.prototype.sortAlphabetical = function (currentlySortedColumn, overrideSortOrder) {
        var turnAroundSortOrder = this.setUpSortOrder(currentlySortedColumn.currentSortOrder);
        if (overrideSortOrder) {
            turnAroundSortOrder = this.setUpSortOrder(overrideSortOrder);
        }
        return function alphabetically(rowA, rowB) {
            var payloadA = rowA.getText(currentlySortedColumn);
            var payloadB = rowB.getText(currentlySortedColumn);
            if (payloadA === undefined) {
                payloadA = '';
            }
            if (payloadB === undefined) {
                payloadB = '';
            }
            if (payloadA.localeCompare(payloadB) < 0) {
                return -1 * turnAroundSortOrder;
            }
            else if (payloadA.localeCompare(payloadB) > 0) {
                return turnAroundSortOrder;
            }
            return 0;
        };
    };
    BaseTableSorter.prototype.sortNumber = function (currentlySortedColumn, overrideSortOrder) {
        var turnAroundSortOrder = this.setUpSortOrder(currentlySortedColumn.currentSortOrder);
        if (overrideSortOrder) {
            turnAroundSortOrder = this.setUpSortOrder(overrideSortOrder);
        }
        return function numberSort(rowA, rowB) {
            var payloadA = rowA.getText(currentlySortedColumn);
            var payloadB = rowB.getText(currentlySortedColumn);
            if (payloadA === undefined) {
                payloadA = '';
            }
            if (payloadB === undefined) {
                payloadB = '';
            }
            if (payloadA.localeCompare(payloadB, undefined, { numeric: true }) < 0) {
                return -1 * turnAroundSortOrder;
            }
            else if (payloadA.localeCompare(payloadB, undefined, { numeric: true }) > 0) {
                return turnAroundSortOrder;
            }
            return 0;
        };
    };
    /**
     * Sort date objects
     *
     * @see sortTwoFunctions
     *
     * @param currentlySortedColumn
     * @param overrideSortOrder is used, if the sort order of a previous sort function should adopted.
     * Override sort order, if this function is the second one of the sortTwoFunctions method
     * @returns {(rowA:any, rowB:any)=>(number|number|number)}
     */
    BaseTableSorter.prototype.sortOnDate = function (currentlySortedColumn, overrideSortOrder) {
        var turnAroundSortOrder = this.setUpSortOrder(currentlySortedColumn.currentSortOrder);
        if (overrideSortOrder) {
            turnAroundSortOrder = this.setUpSortOrder(overrideSortOrder);
        }
        return function dateSort(rowA, rowB) {
            var path = currentlySortedColumn.propertyName
                .replace('[', '.')
                .replace(']', '')
                .split('.');
            var resolvePropertyFunction = function resolveProperty(obj, property) {
                return obj[property];
            };
            // resolve property of nested objects via dot-notation, e.g. "updatevolumeTO.istepcontainerTO.name"
            var payloadA = path.reduce(resolvePropertyFunction, rowA.payload);
            var payloadB = path.reduce(resolvePropertyFunction, rowB.payload);
            // parse date and compare the timestamps
            var date1 = new Date(Date.parse(payloadA));
            var date2 = new Date(Date.parse(payloadB));
            if (date1.getTime() < date2.getTime()) {
                return -1 * turnAroundSortOrder;
            }
            else if (date1.getTime() > date2.getTime()) {
                return turnAroundSortOrder;
            }
            return 0;
        };
    };
    /**
     *
     * @param currentlySortedColumn
     * @param customPropertySortOrder
     * @param overrideSortOrder is used, if the sort order of a previous sort function should adopted.
     * Override sort order, if this function is the second one of the sortTwoFunctions method
     * @returns {(rowA:any, rowB:any)=>(number|number|number)}
     */
    BaseTableSorter.prototype.sortWithCustomPropertySortOrder = function (currentlySortedColumn, customPropertySortOrder, overrideSortOrder) {
        var turnAroundSortOrder = this.setUpSortOrder(currentlySortedColumn.currentSortOrder);
        if (overrideSortOrder) {
            turnAroundSortOrder = this.setUpSortOrder(overrideSortOrder);
        }
        // return equals/ do nothing, if no custom sort order defined
        if (!customPropertySortOrder) {
            return function zero(rowA, rowB) {
                return 0;
            };
        }
        return function customSort(rowA, rowB) {
            var path = currentlySortedColumn.propertyName
                .replace('[', '.')
                .replace(']', '')
                .split('.');
            var resolvePropertyFunction = function resolveProperty(obj, property) {
                return obj[property];
            };
            // resolve property of nested objects via dot-notation, e.g. "updatevolumeTO.istepcontainerTO.name"
            var payloadA = path.reduce(resolvePropertyFunction, rowA.payload);
            var payloadB = path.reduce(resolvePropertyFunction, rowB.payload);
            // get the sort priority from the customPropertySortOrder array
            var priorityA = customPropertySortOrder.find(function (state) { return state.property === payloadA; }).sortOrderPriority;
            var priorityB = customPropertySortOrder.find(function (state) { return state.property === payloadB; }).sortOrderPriority;
            if (priorityA < priorityB) {
                return -1 * turnAroundSortOrder;
            }
            else if (priorityA > priorityB) {
                return turnAroundSortOrder;
            }
            return 0;
        };
    };
    BaseTableSorter.prototype.sortTwoFunctions = function (compareFn1, compareFn2) {
        return function biSort(c, d) {
            var result = compareFn1(c, d);
            if (result === 0) {
                return compareFn2(c, d);
            }
            return result;
        };
    };
    BaseTableSorter.prototype.setUpSortOrder = function (sortOrder) {
        return (sortOrder === _types_table_column_sort_order_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnSortOrder"].DESCENDING) ? -1 : 1;
    };
    BaseTableSorter.prototype.toggleSortOrder = function (sortColumn) {
        if (sortColumn.currentSortOrder === _types_table_column_sort_order_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnSortOrder"].ASCENDING) {
            sortColumn.currentSortOrder = _types_table_column_sort_order_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnSortOrder"].DESCENDING;
        }
        else {
            sortColumn.currentSortOrder = _types_table_column_sort_order_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnSortOrder"].ASCENDING;
        }
    };
    return BaseTableSorter;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/tables/control/default-table-sorter.class.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/tables/control/default-table-sorter.class.ts ***!
  \****************************************************************************************/
/*! exports provided: DefaultTableSorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTableSorter", function() { return DefaultTableSorter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/table-column-type.enum */ "./src/app/modules/shared/components/tables/types/table-column-type.enum.ts");
/* harmony import */ var _base_table_sorter_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-table-sorter.class */ "./src/app/modules/shared/components/tables/control/base-table-sorter.class.ts");



var DefaultTableSorter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DefaultTableSorter, _super);
    function DefaultTableSorter(tableConfig) {
        return _super.call(this, tableConfig) || this;
    }
    DefaultTableSorter.prototype.sorterImplementation = function (currentlySortedColumn) {
        if (currentlySortedColumn !== undefined) {
            switch (currentlySortedColumn.type) {
                case _types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnType"].NUMBER:
                    return this.sortNumber(currentlySortedColumn);
                case _types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnType"].DATE:
                    return this.sortOnDate(currentlySortedColumn);
                case _types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnType"].TRANSLATION_KEY:
                    return this.sortTwoFunctions(
                    // attention: the translation keys are sorted, not the visible (translated) text
                    this.sortAlphabetical(currentlySortedColumn), 
                    // use first column
                    this.sortAlphabetical(this.config.columns[0], currentlySortedColumn.currentSortOrder));
                default:
                    return this.sortAlphabetical(currentlySortedColumn);
            }
        }
    };
    return DefaultTableSorter;
}(_base_table_sorter_class__WEBPACK_IMPORTED_MODULE_2__["BaseTableSorter"]));



/***/ }),

/***/ "./src/app/modules/shared/components/tables/control/loading-indicator.function.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/tables/control/loading-indicator.function.ts ***!
  \****************************************************************************************/
/*! exports provided: showDeleteLoadingIndicatorIcon, hideLoadingIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDeleteLoadingIndicatorIcon", function() { return showDeleteLoadingIndicatorIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoadingIndicator", function() { return hideLoadingIndicator; });
/* harmony import */ var _types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/table-action-type.enum */ "./src/app/modules/shared/components/tables/types/table-action-type.enum.ts");

function showDeleteLoadingIndicatorIcon(rows, id) {
    rows.forEach(function (row) {
        if (row.payload.id === id) {
            // append loading action types to row
            row.disabledActions = [_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].VIEW, _types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].EDIT, _types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].DELETE];
            row.loadingActions = row.loadingActions.concat([_types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_0__["TableActionType"].DELETE]);
        }
    });
    return rows;
}
function hideLoadingIndicator(rows, id) {
    rows.forEach(function (row) {
        if (row.payload.id === id) {
            // append loading action types to row
            row.disabledActions = [];
            row.loadingActions = [];
        }
    });
    return rows;
}


/***/ }),

/***/ "./src/app/modules/shared/components/tables/control/table-config-mapper.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/shared/components/tables/control/table-config-mapper.ts ***!
  \*********************************************************************************/
/*! exports provided: tableConfigWithDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableConfigWithDefaults", function() { return tableConfigWithDefaults; });
/* harmony import */ var _types_table_column_sort_order_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/table-column-sort-order.enum */ "./src/app/modules/shared/components/tables/types/table-column-sort-order.enum.ts");
/* harmony import */ var _types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/table-column-type.enum */ "./src/app/modules/shared/components/tables/types/table-column-type.enum.ts");


var DEFAULT_TABLE_ACTION_CONFIG = {
    actionTypes: [],
    width: 4,
    icons: {
        edit: {
            active: 'edit',
            inactive: 'edit'
        },
        delete: {
            active: 'trash',
            inactive: 'trash',
        },
        view: {
            active: 'eye',
            inactive: 'eye'
        },
        loading: {
            active: 'sync',
            inactive: 'sync'
        }
    },
    localizationKeys: {
        actionColum: 'TABLE.HEADERS.ACTION',
        edit: 'TABLE.ACTIONS.EDIT',
        delete: 'TABLE.ACTIONS.DELETE',
        view: 'TABLE.ACTIONS.VIEW'
    }
};
var DEFAULT_TABLE_CONFIG = {
    columns: []
};
var DEFAULT_COLUMN_CONFIG = {
    translationKey: '',
    propertyName: '',
    type: _types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_1__["TableColumnType"].TEXT,
    width: 0,
    sortable: true,
    currentSortOrder: _types_table_column_sort_order_enum__WEBPACK_IMPORTED_MODULE_0__["TableColumnSortOrder"].UNSORTED,
    dateAndTimeFormat: {
        de: {
            language: 'de-DE',
            dateFormat: 'dd.MM.yyyy',
            timeFormat: 'mediumTime'
        },
        en: {
            language: 'en-US',
            dateFormat: 'MM/dd/yyyy',
            timeFormat: 'mediumTime'
        },
    },
    truncationLength: 0
};
function columnConfigWithDefaults(optional) {
    // clone defaults
    var columnConfig = Object.assign({}, DEFAULT_COLUMN_CONFIG);
    if (optional.translationKey) {
        columnConfig.translationKey = optional.translationKey;
    }
    if (optional.propertyName) {
        columnConfig.propertyName = optional.propertyName;
    }
    if (optional.type) {
        columnConfig.type = optional.type;
    }
    if (optional.localizationSet) {
        columnConfig.localizationSet = optional.localizationSet;
    }
    if (optional.width) {
        columnConfig.width = optional.width;
    }
    if (optional.sortable != null) {
        columnConfig.sortable = optional.sortable;
    }
    if (optional.currentSortOrder) {
        columnConfig.currentSortOrder = optional.currentSortOrder;
    }
    if (optional.dateAndTimeFormat) {
        columnConfig.dateAndTimeFormat = optional.dateAndTimeFormat;
    }
    if (optional.truncationLength > 0) {
        columnConfig.truncationLength = optional.truncationLength;
    }
    if (optional.propertyMapper) {
        columnConfig.propertyMapper = optional.propertyMapper;
    }
    if (optional.stylesMapper) {
        columnConfig.stylesMapper = optional.stylesMapper;
    }
    if (optional.mappingFunction) {
        columnConfig.mappingFunction = optional.mappingFunction;
    }
    return columnConfig;
}
function tableActionConfigWithDefaults(optional) {
    if (optional === void 0) { optional = {}; }
    // clone defaults
    var actionsWithDefaults = Object.assign({}, DEFAULT_TABLE_ACTION_CONFIG);
    if (optional.actionTypes) {
        actionsWithDefaults.actionTypes = optional.actionTypes;
    }
    if (optional.width > 0) {
        actionsWithDefaults.width = optional.width;
    }
    if (optional.iconUrls) {
        actionsWithDefaults.icons = optional.iconUrls;
    }
    if (optional.localizationKeys) {
        actionsWithDefaults.localizationKeys = optional.localizationKeys;
    }
    return actionsWithDefaults;
}
function tableConfigWithDefaults(optional) {
    if (optional === void 0) { optional = {}; }
    // clone defaults
    var tableConfig = Object.assign({}, DEFAULT_TABLE_CONFIG);
    if (optional.columns) {
        var columnConfig_1 = [];
        optional.columns.forEach(function (column) {
            columnConfig_1.push(columnConfigWithDefaults(column));
        });
        tableConfig.columns = columnConfig_1;
    }
    tableConfig.actions = tableActionConfigWithDefaults(optional.actions);
    return tableConfig;
}


/***/ }),

/***/ "./src/app/modules/shared/components/tables/control/table-row-mapper.function.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/shared/components/tables/control/table-row-mapper.function.ts ***!
  \***************************************************************************************/
/*! exports provided: toTableRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTableRows", function() { return toTableRows; });
/* harmony import */ var _types_table_row_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/table-row.class */ "./src/app/modules/shared/components/tables/types/table-row.class.ts");

function toTableRows(payload) {
    var rows = [];
    payload.forEach(function (mitglied) { return rows.push(new _types_table_row_class__WEBPACK_IMPORTED_MODULE_0__["TableRow"]({ payload: mitglied })); });
    return rows;
}


/***/ }),

/***/ "./src/app/modules/shared/components/tables/data-table/data-table.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/shared/components/tables/data-table/data-table.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n<table class=\"table table-hover table-sm table-responsive-sm thead-light\"\n       [id]=\"id\"\n       *ngIf=\"visible\">\n  <!-- Table Head with Headings and sort buttons -->\n  <thead>\n\n  <tr>\n    <th *ngFor=\"let column of config.columns\"\n        [style.width]=\"getColumnWidth(column.width)\">\n\n      <!-- sortable columns -->\n      <div style=\"white-space: nowrap;\">\n        {{ column.translationKey | translate}}\n        <span id=\"{{column.translationKey.toLowerCase()}}Sorted\"\n              (click)=\"sortColumn(column)\">\n            <fa-icon [icon]=\"getSortingIcon(column)\"></fa-icon>\n        </span>\n      </div>\n    </th>\n\n    <!-- action column should not be sortable -->\n    <th [style.width]=\"getColumnWidth(config.actions.width)\"\n        *ngIf=\"hasActions()\">\n      <div>\n        {{ config.actions.localizationKeys.actionColum | translate}}\n      </div>\n    </th>\n\n  </tr>\n\n  </thead>\n\n\n  <tbody *ngIf=\"!isLoading() && !isEmptyTable()\">\n  <tr *ngFor=\"let row of rows\"\n      [id]=\"getRowId(row)\"\n      (click)=\"hasActions() == false && onRowClicked(row.payload)\"\n      [style.cursor]=\"!hasActions() ? 'pointer' : 'default'\"\n      [class.disabled]=\"hasLoadingActions(row)\"> <!-- Click event is only active if table has no action items -->\n\n    <!-- data columns -->\n    <td *ngFor=\"let column of config.columns\"\n        [id]=\"getCellId(row, column)\"\n        [ngSwitch]=\"column.type\"\n        [class]=\"getStyleClass(row, column)\">\n\n          <span *ngSwitchCase=\"TableColumnType.TEXT\">\n            {{formatText(row, column)}}\n          </span>\n\n\n      <span *ngSwitchCase=\"TableColumnType.NUMBER\">\n            {{formatNumber(row, column)}}\n          </span>\n\n\n      <span *ngSwitchCase=\"TableColumnType.DATE\">\n            {{ row.getText(column) | date: 'dd.MM.yyyy' }}\n\n            <!--{{formatDate(row, column)}}-->\n\n          </span>\n\n      <span *ngSwitchCase=\"TableColumnType.TRANSLATION_KEY\">\n           {{getLocalizedText(row, column)}}\n          </span>\n\n      <span *ngSwitchCase=\"TableColumnType.CUSTOM_MAPPING\">\n           {{getMappedText(row, column)}}\n          </span>\n\n      <span *ngSwitchDefault>\n            {{formatText(row, column)}}\n          </span>\n    </td>\n\n    <!-- action column -->\n    <td id=\"{{id + 'Actions'}}\"\n        *ngIf=\"hasActions()\">\n        <span *ngFor=\"let action of config.actions.actionTypes\" class=\"action_icon\">\n          <a (click)=\"onIconClicked(row, action)\"\n             [title]=\"determineTitle(row, action) | translate\">\n             <fa-icon *ngIf=\"isActionVisible(row, action)\"\n                      [icon]=\"determineIcon(row, action)\"\n                      [spin]=\"determineIcon(row, action) === 'sync'\"\n                      class=\"table-icon\">\n             </fa-icon>\n          </a>\n\n\n        </span>\n    </td>\n\n  </tr>\n  </tbody>\n\n  <!-- placeholder for empty tables -->\n  <tbody bla-table-empty-placeholder\n         [visible]=\"!isLoading() && isEmptyTable()\"\n         [colspan]=\"getNumberOfColumns()\">\n  </tbody>\n\n  <!-- placeholder for loading tables -->\n  <tbody bla-table-loading-placeholder\n         [visible]=\"isLoading()\"\n         [colspan]=\"getNumberOfColumns()\">\n  </tbody>\n\n  <tfoot>\n\n  </tfoot>\n\n</table>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/tables/data-table/data-table.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/shared/components/tables/data-table/data-table.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-icon {\n  margin-right: 5px; }\n\n.disabled {\n  color: rgba(0, 0, 0, 0.35);\n  background-color: rgba(0, 0, 0, 0.035); }\n\n.action_icon:hover {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvdGFibGVzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLDBCQUF5QjtFQUN6QixzQ0FBcUMsRUFBQTs7QUFHdkM7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL3RhYmxlcy9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuMzUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wMzUpO1xufVxuXG4uYWN0aW9uX2ljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/components/tables/data-table/data-table.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/shared/components/tables/data-table/data-table.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes */ "./src/app/modules/shared/pipes/index.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common */ "./src/app/modules/shared/components/common/index.ts");
/* harmony import */ var _control_base_table_sorter_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../control/base-table-sorter.class */ "./src/app/modules/shared/components/tables/control/base-table-sorter.class.ts");
/* harmony import */ var _control_default_table_sorter_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../control/default-table-sorter.class */ "./src/app/modules/shared/components/tables/control/default-table-sorter.class.ts");
/* harmony import */ var _control_table_config_mapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../control/table-config-mapper */ "./src/app/modules/shared/components/tables/control/table-config-mapper.ts");
/* harmony import */ var _types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../types/table-action-type.enum */ "./src/app/modules/shared/components/tables/types/table-action-type.enum.ts");
/* harmony import */ var _types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../types/table-column-type.enum */ "./src/app/modules/shared/components/tables/types/table-column-type.enum.ts");











var DataTableComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DataTableComponent, _super);
    function DataTableComponent(truncationPipe, translatePipe) {
        var _this = _super.call(this) || this;
        _this.truncationPipe = truncationPipe;
        _this.translatePipe = translatePipe;
        _this.rows = [];
        _this.onEditEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onViewEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onDeleteEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onRowEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // do not remove, the view uses this enum
        _this.TableColumnType = _types_table_column_type_enum__WEBPACK_IMPORTED_MODULE_10__["TableColumnType"];
        _this.initialized = false;
        return _this;
    }
    DataTableComponent.prototype.ngOnInit = function () {
        var clone = this.config;
        this.config = Object(_control_table_config_mapper__WEBPACK_IMPORTED_MODULE_8__["tableConfigWithDefaults"])(clone);
        // if no sorter implementation is passed, use the default sorter
        if (!this.tableSorter) {
            this.tableSorter = new _control_default_table_sorter_class__WEBPACK_IMPORTED_MODULE_7__["DefaultTableSorter"](this.config);
        }
        this.tableSorter.refreshCurrentSorting(this.rows);
        this.initialized = true;
    };
    DataTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.initialized) {
            this.tableSorter.refreshCurrentSorting(this.rows);
        }
    };
    /*
     * ~~~~ sorting methods ~~~~
     */
    DataTableComponent.prototype.getSortingIcon = function (column) {
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
    DataTableComponent.prototype.sortColumn = function (sortColumn) {
        this.rows = this.tableSorter.sortByColumn(this.rows, sortColumn);
    };
    /*
     * ~~~~ getter methods ~~~~
     */
    DataTableComponent.prototype.getColumnWidth = function (columnWidth) {
        if (columnWidth === void 0) { columnWidth = 0; }
        if (columnWidth && columnWidth > 0) {
            return columnWidth + '%';
        }
        else {
            return '0';
        }
    };
    DataTableComponent.prototype.formatText = function (row, column) {
        var text = row.getText(column);
        if (column.truncationLength > 0) {
            return this.truncationPipe.transform(text, column.truncationLength);
        }
        else {
            return text;
        }
    };
    DataTableComponent.prototype.formatNumber = function (row, column) {
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
    DataTableComponent.prototype.getMappedText = function (row, column) {
        if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(column.mappingFunction)) {
            return this.translatePipe.transform(this.prependLocalizationKey(column.localizationSet, column.mappingFunction(row.getText(column))));
        }
    };
    DataTableComponent.prototype.getLocalizedText = function (row, column) {
        return this.translatePipe.transform(this.prependLocalizationKey(column.localizationSet, row.getText(column)));
    };
    DataTableComponent.prototype.resolveNestedObjectProperties = function (theObject, path) {
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
    DataTableComponent.prototype.prependLocalizationKey = function (localizationSet, localizationKey) {
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
    DataTableComponent.prototype.isActionVisible = function (row, action) {
        return !(row.hiddenActions.indexOf(action) > -1);
    };
    DataTableComponent.prototype.hasLoadingActions = function (row) {
        return row.loadingActions.length > 0;
    };
    /**
     *
     * @param row current row with the action config
     * @param action current action
     * @returns {string} path to the icon
     */
    DataTableComponent.prototype.determineIcon = function (row, action) {
        var iconSelector = _types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_9__["TableActionType"][action].toLowerCase();
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
    DataTableComponent.prototype.determineTitle = function (row, action) {
        if (row.disabledActions.indexOf(action) > -1 || row.loadingActions.indexOf(action) > -1) {
            return '';
        }
        var iconSelector = _types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_9__["TableActionType"][action].toLowerCase();
        return this.config.actions.localizationKeys[iconSelector];
    };
    /**
     * Triggers the corresponding event emitter with the payload of the row
     *
     * @param row with click event on an action
     * @param action clicked action type
     */
    DataTableComponent.prototype.onIconClicked = function (row, action) {
        if (this.isActionEventAllowed(row, action)) {
            switch (action) {
                case _types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_9__["TableActionType"].EDIT:
                    this.onEdit(row.payload);
                    break;
                case _types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_9__["TableActionType"].DELETE:
                    this.onDelete(row.payload);
                    break;
                case _types_table_action_type_enum__WEBPACK_IMPORTED_MODULE_9__["TableActionType"].VIEW:
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
    DataTableComponent.prototype.isLoading = function () {
        return this.loading;
    };
    /**
     *
     * @returns {boolean} true, if the content array is empty or undefined
     */
    DataTableComponent.prototype.isEmptyTable = function () {
        return !!this.rows ? this.rows.length === 0 : true;
    };
    /**
     *
     * @returns {boolean} true, if the configuration contains any action array element
     */
    DataTableComponent.prototype.hasActions = function () {
        return !!this.config.actions.actionTypes ? this.config.actions.actionTypes.length > 0 : false;
    };
    /**
     *
     * @returns {number} number of table header columns
     */
    DataTableComponent.prototype.getNumberOfColumns = function () {
        return !!this.config.columns ? this.config.columns.length + 1 : 0;
    };
    DataTableComponent.prototype.getCellId = function (row, column) {
        if (Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(column.propertyName) || column.propertyName.length === 0) {
            return column.translationKey.replace('.', '') + "-" + row.payload.id;
        }
        else {
            return column.propertyName.replace('.', '') + "-" + row.payload.id;
        }
    };
    DataTableComponent.prototype.getRowId = function (row) {
        return "payload-id-" + row.payload.id;
    };
    DataTableComponent.prototype.getStyleClass = function (row, column) {
        if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(column.stylesMapper)) {
            return column.stylesMapper(row.getText(column));
        }
    };
    /*
     * ~~~~ private methods ~~~~
     */
    DataTableComponent.prototype.isActionEventAllowed = function (row, action) {
        return row.disabledActions.indexOf(action) === -1
            && !this.disabled
            && row.loadingActions.indexOf(action) === -1;
    };
    DataTableComponent.prototype.onEdit = function (affectedRowPayload) {
        this.onEditEntry.emit(affectedRowPayload);
    };
    DataTableComponent.prototype.onView = function (affectedRowPayload) {
        this.onViewEntry.emit(affectedRowPayload);
    };
    DataTableComponent.prototype.onDelete = function (affectedRowPayload) {
        this.onDeleteEntry.emit(affectedRowPayload);
    };
    DataTableComponent.prototype.onRowClicked = function (affectedRowPayload) {
        this.onRowEntry.emit(affectedRowPayload);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataTableComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DataTableComponent.prototype, "rows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _control_base_table_sorter_class__WEBPACK_IMPORTED_MODULE_6__["BaseTableSorter"])
    ], DataTableComponent.prototype, "tableSorter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataTableComponent.prototype, "onEditEntry", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataTableComponent.prototype, "onViewEntry", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataTableComponent.prototype, "onDeleteEntry", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataTableComponent.prototype, "onRowEntry", void 0);
    DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/modules/shared/components/tables/data-table/data-table.component.html"),
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], _pipes__WEBPACK_IMPORTED_MODULE_4__["TruncationPipe"]],
            styles: [__webpack_require__(/*! ./data-table.component.scss */ "./src/app/modules/shared/components/tables/data-table/data-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pipes__WEBPACK_IMPORTED_MODULE_4__["TruncationPipe"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]])
    ], DataTableComponent);
    return DataTableComponent;
}(_common__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/shared/components/tables/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/components/tables/index.ts ***!
  \***********************************************************/
/*! exports provided: DataTableComponent, TableEmptyPlaceholderComponent, TableLoadingPlaceholderComponent, showDeleteLoadingIndicatorIcon, hideLoadingIndicator, toTableRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/modules/shared/components/tables/data-table/data-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__["DataTableComponent"]; });

/* harmony import */ var _table_empty_placeholder_table_empty_placeholder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-empty-placeholder/table-empty-placeholder.component */ "./src/app/modules/shared/components/tables/table-empty-placeholder/table-empty-placeholder.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableEmptyPlaceholderComponent", function() { return _table_empty_placeholder_table_empty_placeholder_component__WEBPACK_IMPORTED_MODULE_1__["TableEmptyPlaceholderComponent"]; });

/* harmony import */ var _table_loading_placeholder_table_loading_placeholder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-loading-placeholder/table-loading-placeholder.component */ "./src/app/modules/shared/components/tables/table-loading-placeholder/table-loading-placeholder.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableLoadingPlaceholderComponent", function() { return _table_loading_placeholder_table_loading_placeholder_component__WEBPACK_IMPORTED_MODULE_2__["TableLoadingPlaceholderComponent"]; });

/* harmony import */ var _control_loading_indicator_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control/loading-indicator.function */ "./src/app/modules/shared/components/tables/control/loading-indicator.function.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showDeleteLoadingIndicatorIcon", function() { return _control_loading_indicator_function__WEBPACK_IMPORTED_MODULE_3__["showDeleteLoadingIndicatorIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoadingIndicator", function() { return _control_loading_indicator_function__WEBPACK_IMPORTED_MODULE_3__["hideLoadingIndicator"]; });

/* harmony import */ var _control_table_row_mapper_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control/table-row-mapper.function */ "./src/app/modules/shared/components/tables/control/table-row-mapper.function.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toTableRows", function() { return _control_table_row_mapper_function__WEBPACK_IMPORTED_MODULE_4__["toTableRows"]; });








/***/ }),

/***/ "./src/app/modules/shared/components/tables/table-empty-placeholder/table-empty-placeholder.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/tables/table-empty-placeholder/table-empty-placeholder.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- placeholder for empty tables -->\n<tr *ngIf=\"visible\">\n  <td style=\"text-align: center\"\n      [colSpan]=\"colspan\">\n\n    <div style=\"display: flex; flex-direction: column; align-items: center\">\n      <fa-icon [icon]=\"['far', 'meh-rolling-eyes']\"\n               size=\"4x\"\n               style=\"margin-top: 2em; margin-bottom: 2em;\">\n\n      </fa-icon>\n\n      <p>{{'TABLE.NO_ENTRIES_FOUND' | translate}}</p>\n    </div>\n\n\n  </td>\n</tr>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/tables/table-empty-placeholder/table-empty-placeholder.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/tables/table-empty-placeholder/table-empty-placeholder.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: TableEmptyPlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEmptyPlaceholderComponent", function() { return TableEmptyPlaceholderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var TableEmptyPlaceholderComponent = /** @class */ (function () {
    function TableEmptyPlaceholderComponent() {
        this.visible = false;
    }
    TableEmptyPlaceholderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableEmptyPlaceholderComponent.prototype, "visible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TableEmptyPlaceholderComponent.prototype, "colspan", void 0);
    TableEmptyPlaceholderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            /* tslint:disable */
            selector: '[bla-table-empty-placeholder]',
            /* tslint:enable */
            template: __webpack_require__(/*! ./table-empty-placeholder.component.html */ "./src/app/modules/shared/components/tables/table-empty-placeholder/table-empty-placeholder.component.html"),
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableEmptyPlaceholderComponent);
    return TableEmptyPlaceholderComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/tables/table-loading-placeholder/table-loading-placeholder.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/tables/table-loading-placeholder/table-loading-placeholder.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tr *ngIf=\"visible\">\n  <td style=\"text-align: center; \"\n      [colSpan]=\"colspan\">\n    <div style=\"display: flex; flex-direction: column; align-items: center\">\n      <fa-icon icon=\"sync\"\n               [spin]=\"'true'\"\n               size=\"4x\"\n               style=\"margin-top: 2em; margin-bottom: 2em;\">\n\n      </fa-icon>\n\n      <p>{{'TABLE.LOADING' | translate}}</p>\n    </div>\n\n  </td>\n</tr>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/tables/table-loading-placeholder/table-loading-placeholder.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/tables/table-loading-placeholder/table-loading-placeholder.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: TableLoadingPlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableLoadingPlaceholderComponent", function() { return TableLoadingPlaceholderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var TableLoadingPlaceholderComponent = /** @class */ (function () {
    function TableLoadingPlaceholderComponent() {
        this.visible = false;
    }
    TableLoadingPlaceholderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableLoadingPlaceholderComponent.prototype, "visible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TableLoadingPlaceholderComponent.prototype, "colspan", void 0);
    TableLoadingPlaceholderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            /* tslint:disable */
            selector: '[bla-table-loading-placeholder]',
            /* tslint:enable */
            template: __webpack_require__(/*! ./table-loading-placeholder.component.html */ "./src/app/modules/shared/components/tables/table-loading-placeholder/table-loading-placeholder.component.html"),
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableLoadingPlaceholderComponent);
    return TableLoadingPlaceholderComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/tables/types/table-action-type.enum.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/components/tables/types/table-action-type.enum.ts ***!
  \**********************************************************************************/
/*! exports provided: TableActionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableActionType", function() { return TableActionType; });
var TableActionType;
(function (TableActionType) {
    TableActionType[TableActionType["EDIT"] = 0] = "EDIT";
    TableActionType[TableActionType["VIEW"] = 1] = "VIEW";
    TableActionType[TableActionType["DELETE"] = 2] = "DELETE";
})(TableActionType || (TableActionType = {}));


/***/ }),

/***/ "./src/app/modules/shared/components/tables/types/table-column-sort-order.enum.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/tables/types/table-column-sort-order.enum.ts ***!
  \****************************************************************************************/
/*! exports provided: TableColumnSortOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableColumnSortOrder", function() { return TableColumnSortOrder; });
var TableColumnSortOrder;
(function (TableColumnSortOrder) {
    TableColumnSortOrder[TableColumnSortOrder["UNSORTED"] = 0] = "UNSORTED";
    TableColumnSortOrder[TableColumnSortOrder["ASCENDING"] = 1] = "ASCENDING";
    TableColumnSortOrder[TableColumnSortOrder["DESCENDING"] = 2] = "DESCENDING";
})(TableColumnSortOrder || (TableColumnSortOrder = {}));


/***/ }),

/***/ "./src/app/modules/shared/components/tables/types/table-column-type.enum.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/components/tables/types/table-column-type.enum.ts ***!
  \**********************************************************************************/
/*! exports provided: TableColumnType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableColumnType", function() { return TableColumnType; });
var TableColumnType;
(function (TableColumnType) {
    TableColumnType[TableColumnType["TEXT"] = 0] = "TEXT";
    TableColumnType[TableColumnType["NUMBER"] = 1] = "NUMBER";
    TableColumnType[TableColumnType["DATE"] = 2] = "DATE";
    TableColumnType[TableColumnType["TRANSLATION_KEY"] = 3] = "TRANSLATION_KEY";
    TableColumnType[TableColumnType["CUSTOM_MAPPING"] = 4] = "CUSTOM_MAPPING"; // use a function to manipulate the cell value
})(TableColumnType || (TableColumnType = {}));


/***/ }),

/***/ "./src/app/modules/shared/components/tables/types/table-row.class.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/components/tables/types/table-row.class.ts ***!
  \***************************************************************************/
/*! exports provided: TableRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return TableRow; });
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");

var TableRow = /** @class */ (function () {
    function TableRow(optional) {
        if (optional === void 0) { optional = {}; }
        this.payload = optional.payload || null;
        this.disabledActions = optional.disabledActions || [];
        this.hiddenActions = optional.hiddenActions || [];
        this.loadingActions = optional.loadingActions || [];
    }
    TableRow.copyFrom = function (sourceObject) {
        var row = new TableRow();
        row.payload = sourceObject.payload;
        row.disabledActions = sourceObject.disabledActions;
        row.hiddenActions = sourceObject.hiddenActions;
        row.loadingActions = sourceObject.loadingActions;
        return row;
    };
    /**
     * gets text from this row at the given column
     *
     * we apply propertyMapper if defined and propertyName
     *
     * @param {TableColumnConfig} column
     * @returns {string}
     */
    TableRow.prototype.getText = function (column) {
        var extractedAttribute;
        if (Object(_shared_functions__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(column.propertyName) || column.propertyName.length === 0) {
            extractedAttribute = this.payload;
        }
        else {
            extractedAttribute = this.resolveNestedObjectProperties(column.propertyName);
        }
        if (!Object(_shared_functions__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(column.propertyMapper)) {
            return String(column.propertyMapper(extractedAttribute));
        }
        else {
            if (Object(_shared_functions__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(extractedAttribute)) {
                return '';
            }
            else {
                return String(extractedAttribute);
            }
        }
    };
    TableRow.prototype.resolveNestedObjectProperties = function (path) {
        try {
            var separator = '.';
            return path.replace('[', separator).replace(']', '').split(separator).reduce(function getNestedProperty(obj, property) {
                return obj[property];
            }, this.payload);
        }
        catch (err) {
            return undefined;
        }
    };
    return TableRow;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/tooltips/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/components/tooltips/index.ts ***!
  \*************************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/modules/shared/components/tooltips/tooltip/tooltip.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_0__["TooltipComponent"]; });




/***/ }),

/***/ "./src/app/modules/shared/components/tooltips/tooltip/tooltip.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shared/components/tooltips/tooltip/tooltip.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span [attr.value]=\"value\"\n      class=\"bla-tooltip-top\">\n  <ng-content></ng-content>\n</span>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/tooltips/tooltip/tooltip.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shared/components/tooltips/tooltip/tooltip.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bla-tooltip-top {\n  position: relative;\n  cursor: help; }\n\n.bla-tooltip-top::before, .bla-tooltip-top::after {\n  position: absolute;\n  left: 50%;\n  transition: all ease 0.3s;\n  opacity: 0;\n  display: none; }\n\n.bla-tooltip-top::before {\n  content: \"\";\n  top: -20px;\n  margin-left: -8px;\n  border-width: 10px 8px 0 8px;\n  border-style: solid;\n  border-color: #212529 transparent transparent transparent; }\n\n.bla-tooltip-top::after {\n  content: attr(value);\n  color: #fff;\n  text-align: center;\n  top: -20px;\n  background: #212529;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n  margin-left: -100px;\n  width: 200px;\n  border-radius: 5px;\n  padding: 12px; }\n\n.bla-tooltip-top:hover::before, .bla-tooltip-top:hover::after {\n  opacity: 1;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9leHhjZWxsZW50L3N3dDItYnNhLWZyb250ZW5kL2JvZ2VubGlnYS9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvdG9vbHRpcHMvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUdqQiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLHlEQUF5RCxFQUFBOztBQUczRDtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFFVixtQkFBbUI7RUFDbkIsb0NBQTRCO1VBQTVCLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBSWY7RUFDRSxVQUFVO0VBQ1YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy90b29sdGlwcy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxhLXRvb2x0aXAtdG9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IGhlbHA7XG59XG5cbi5ibGEtdG9vbHRpcC10b3A6OmJlZm9yZSwgLmJsYS10b29sdGlwLXRvcDo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4zcztcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJsYS10b29sdGlwLXRvcDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAtMjBweDtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG5cbiAgLy8gdHJpYW5nbGUgb2YgdGhlIHBvcHVwXG4gIGJvcmRlci13aWR0aDogMTBweCA4cHggMCA4cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzIxMjUyOSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLmJsYS10b29sdGlwLXRvcDo6YWZ0ZXIge1xuICBjb250ZW50OiBhdHRyKHZhbHVlKTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAtMjBweDtcblxuICBiYWNrZ3JvdW5kOiAjMjEyNTI5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICBtYXJnaW4tbGVmdDogLTEwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLy8gc2hvdyBibGEtdG9vbHRpcC10b3Bcbi5ibGEtdG9vbHRpcC10b3A6aG92ZXI6OmJlZm9yZSwgLmJsYS10b29sdGlwLXRvcDpob3Zlcjo6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/shared/components/tooltips/tooltip/tooltip.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/shared/components/tooltips/tooltip/tooltip.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.value = '';
    }
    TooltipComponent.prototype.ngOnInit = function () {
    };
    TooltipComponent.prototype.ngOnChanges = function (changes) {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TooltipComponent.prototype, "value", void 0);
    TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bla-tooltip',
            template: __webpack_require__(/*! ./tooltip.component.html */ "./src/app/modules/shared/components/tooltips/tooltip/tooltip.component.html"),
            styles: [__webpack_require__(/*! ./tooltip.component.scss */ "./src/app/modules/shared/components/tooltips/tooltip/tooltip.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/data-provider/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/shared/data-provider/index.ts ***!
  \*******************************************************/
/*! exports provided: UriBuilder, DataProviderService, RestClient, JwtInterceptor, ErrorInterceptor, RequestResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_utils_uri_builder_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/utils/uri-builder.class */ "./src/app/modules/shared/data-provider/services/utils/uri-builder.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UriBuilder", function() { return _services_utils_uri_builder_class__WEBPACK_IMPORTED_MODULE_0__["UriBuilder"]; });

/* harmony import */ var _services_data_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/data-provider.service */ "./src/app/modules/shared/data-provider/services/data-provider.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataProviderService", function() { return _services_data_provider_service__WEBPACK_IMPORTED_MODULE_1__["DataProviderService"]; });

/* harmony import */ var _services_rest_client_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/rest-client.class */ "./src/app/modules/shared/data-provider/services/rest-client.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestClient", function() { return _services_rest_client_class__WEBPACK_IMPORTED_MODULE_2__["RestClient"]; });

/* harmony import */ var _interceptors_jwt_interceptor_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/jwt-interceptor.class */ "./src/app/modules/shared/data-provider/interceptors/jwt-interceptor.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _interceptors_jwt_interceptor_class__WEBPACK_IMPORTED_MODULE_3__["JwtInterceptor"]; });

/* harmony import */ var _interceptors_error_interceptor_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/error-interceptor.class */ "./src/app/modules/shared/data-provider/interceptors/error-interceptor.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _interceptors_error_interceptor_class__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"]; });

/* harmony import */ var _types_request_result_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/request-result.enum */ "./src/app/modules/shared/data-provider/types/request-result.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestResult", function() { return _types_request_result_enum__WEBPACK_IMPORTED_MODULE_5__["RequestResult"]; });









/***/ }),

/***/ "./src/app/modules/shared/data-provider/interceptors/error-interceptor.class.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/data-provider/interceptors/error-interceptor.class.ts ***!
  \**************************************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_error_handling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/error-handling */ "./src/app/modules/shared/services/error-handling/index.ts");




var MAX_RETRIES = 2;
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(errorHandlingService) {
        this.errorHandlingService = errorHandlingService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request)
            .pipe(
        // add retries
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(MAX_RETRIES), 
        // add error handling
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error, caught) {
            // handle connection (0), client (4xx), server (5xx) and custom error codes (9xx)
            if (error.status === 0 || error.status >= 400) {
                return _this.errorHandlingService.handleHttpError(error);
                // caught and handle the error
                // return of(error);
            }
            throw error;
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_error_handling__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlingService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/shared/data-provider/interceptors/jwt-interceptor.class.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/data-provider/interceptors/jwt-interceptor.class.ts ***!
  \************************************************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(currentUserService) {
        this.currentUserService = currentUserService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        try {
            // add authorization header with jwt token if available
            var jwt = this.currentUserService.getJsonWebToken();
            if (jwt) {
                request = request.clone({
                    setHeaders: {
                        Authorization: "Bearer " + jwt
                    }
                });
            }
        }
        catch (e) {
            // TODO correct error handling
            console.log('JWT token could not be append to http request header. Please login.');
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_current_user__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/shared/data-provider/services/data-provider.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/data-provider/services/data-provider.service.ts ***!
  \********************************************************************************/
/*! exports provided: DataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProviderService", function() { return DataProviderService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utils_uri_builder_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/uri-builder.class */ "./src/app/modules/shared/data-provider/services/utils/uri-builder.class.ts");


var DataProviderService = /** @class */ (function () {
    function DataProviderService() {
        this.dataServiceConfig = {
            baseUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backendBaseUrl
        };
    }
    /**
     * return <BASE_URL>/<SERVICE_SUB_URL>
     */
    DataProviderService.prototype.getUrl = function () {
        return new _utils_uri_builder_class__WEBPACK_IMPORTED_MODULE_1__["UriBuilder"]()
            .fromPath(this.dataServiceConfig.baseUrl)
            .path(this.serviceSubUrl)
            .build();
    };
    return DataProviderService;
}());



/***/ }),

/***/ "./src/app/modules/shared/data-provider/services/resource-provider.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/data-provider/services/resource-provider.service.ts ***!
  \************************************************************************************/
/*! exports provided: ResourceProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceProviderService", function() { return ResourceProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _data_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-provider.service */ "./src/app/modules/shared/data-provider/services/data-provider.service.ts");



var ResourceProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ResourceProviderService, _super);
    function ResourceProviderService() {
        return _super.call(this) || this;
    }
    /**
     * Download a resource from a given url with a fileName.
     *
     * @param url to the resource
     * @param fileName of the downloaded file
     * @param targetHtmlLinkElement dynamically extended with the resource url
     */
    ResourceProviderService.prototype.downloadFile = function (url, fileName, targetHtmlLinkElement) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getRestClient().DOWNLOAD(url)
                .then(function (resource) {
                if (_this.getWindow().navigator) {
                    console.log('Browser navigator information: '
                        + JSON.stringify(_this.getWindow().navigator.appVersion.toString()));
                    // internet explorer
                    if (_this.getWindow().navigator.msSaveBlob) {
                        console.log('IE detected: msSaveBlob');
                        _this.getWindow().navigator.msSaveBlob(resource, fileName);
                    }
                    else if (_this.getWindow().navigator.msSaveOrOpenBlob) {
                        console.log('IE detected: msSaveOrOpenBlob');
                        _this.getWindow().navigator.msSaveOrOpenBlob(resource, fileName);
                    }
                    else if (_this.getWindow().navigator.appVersion.toString().indexOf('.NET') > 0) {
                        console.log('IE detected: Open tab');
                        var windowWithRawData = _this.getWindow().open('#');
                        windowWithRawData.document.write('loading...');
                        windowWithRawData.location.href = _this.getWindow().URL.createObjectURL(resource);
                    }
                    else {
                        // normal browsers
                        console.log('Normal browser detected');
                        // simulate click on <a> element
                        var link = targetHtmlLinkElement.nativeElement;
                        var blobUrl = void 0;
                        blobUrl = _this.getWindow().URL.createObjectURL(resource);
                        link.href = blobUrl;
                        link.download = fileName;
                        link.click();
                        _this.getWindow().URL.revokeObjectURL(blobUrl);
                    }
                }
                else {
                    reject({ result: ___WEBPACK_IMPORTED_MODULE_1__["RequestResult"].FAILURE });
                }
                resolve({ result: ___WEBPACK_IMPORTED_MODULE_1__["RequestResult"].SUCCESS, payload: url });
            }, function (error) {
                if (error.status === 0) {
                    reject({ result: ___WEBPACK_IMPORTED_MODULE_1__["RequestResult"].CONNECTION_PROBLEM });
                }
                else {
                    reject({ result: ___WEBPACK_IMPORTED_MODULE_1__["RequestResult"].FAILURE });
                }
            });
        });
    };
    ResourceProviderService.prototype.getWindow = function () {
        return window;
    };
    return ResourceProviderService;
}(_data_provider_service__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]));



/***/ }),

/***/ "./src/app/modules/shared/data-provider/services/rest-client.class.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/shared/data-provider/services/rest-client.class.ts ***!
  \****************************************************************************/
/*! exports provided: RestClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestClient", function() { return RestClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
    // 'demo header':  'demo header value',
    })
};
var RestClient = /** @class */ (function () {
    function RestClient(http) {
        this.http = http;
    }
    /**
     * Perform a GET request to receive a response of the given type T
     *
     * @param url of the REST resource
     * @constructor type of response T
     */
    RestClient.prototype.GET = function (url) {
        console.log('Send GET request to ' + url);
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).toPromise();
    };
    /**
     * Perform a POST request to create a new instance of the given payload and
     * receive a response of the given type T
     *
     * @param url of the REST resource
     * @param payload
     * @constructor type of response T
     */
    RestClient.prototype.POST = function (url, payload) {
        console.log('Send POST request to ' + url + ' with payload ' + JSON.stringify(payload));
        return this.http.post(url, payload, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).toPromise();
    };
    /**
     * Perform a PUT request to update an existing instance of the given payload and
     * receive a response of the given type T
     *
     * @param url of the REST resource
     * @param payload
     * @constructor type of response T
     */
    RestClient.prototype.PUT = function (url, payload) {
        console.log('Send PUT request to ' + url + ' with payload ' + JSON.stringify(payload));
        return this.http.put(url, payload, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).toPromise();
    };
    /**
     * Perform a DELETE request to delete an existing instance with a given id with the url
     *
     * @param url of the REST resource
     * @constructor type of response T
     */
    RestClient.prototype.DELETE = function (url) {
        console.log('Send DELETE request to ' + url);
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).toPromise();
    };
    RestClient.prototype.DOWNLOAD = function (url) {
        var objectUrl = null;
        console.log('Download: Send GET request to ' + url);
        return this.http.get(url, { responseType: 'blob' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).toPromise();
    };
    RestClient.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.warn("Backend returned status code " + error.status + ", " +
                ("body was: " + JSON.stringify(error.error)));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    RestClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RestClient);
    return RestClient;
}());



/***/ }),

/***/ "./src/app/modules/shared/data-provider/services/utils/uri-builder.class.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/data-provider/services/utils/uri-builder.class.ts ***!
  \**********************************************************************************/
/*! exports provided: UriBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UriBuilder", function() { return UriBuilder; });
var UriBuilder = /** @class */ (function () {
    function UriBuilder() {
        this.uri = '';
    }
    /**
     * Create a new instance representing a relative URI initialized from a URI path.
     * @param fullPath
     */
    UriBuilder.prototype.fromPath = function (fullPath) {
        this.uri = fullPath;
        return this;
    };
    /**
     * Append path to the existing path.
     * @param pathElement
     */
    UriBuilder.prototype.path = function (pathElement) {
        this.uri = this.appendPath(this.uri, '' + pathElement);
        return this;
    };
    UriBuilder.prototype.build = function () {
        return this.uri;
    };
    /**
     * return <URL>/<PATH>
     */
    UriBuilder.prototype.appendPath = function (url, path) {
        return [url, path].join('/');
    };
    return UriBuilder;
}());



/***/ }),

/***/ "./src/app/modules/shared/data-provider/types/request-result.enum.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/data-provider/types/request-result.enum.ts ***!
  \***************************************************************************/
/*! exports provided: RequestResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestResult", function() { return RequestResult; });
var RequestResult;
(function (RequestResult) {
    RequestResult[RequestResult["PENDING"] = 0] = "PENDING";
    RequestResult[RequestResult["SUCCESS"] = 1] = "SUCCESS";
    RequestResult[RequestResult["FAILURE"] = 2] = "FAILURE";
    RequestResult[RequestResult["CONNECTION_PROBLEM"] = 3] = "CONNECTION_PROBLEM";
})(RequestResult || (RequestResult = {}));


/***/ }),

/***/ "./src/app/modules/shared/functions/index.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/shared/functions/index.ts ***!
  \***************************************************/
/*! exports provided: isNullOrUndefined, isNullOrEmpty, isNull, isUndefined, isNumber, isString, isBoolean, isObject, isPrimitive, isArray, resolveNestedObjectProperties, prependLocalizationKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-utils */ "./src/app/modules/shared/functions/is-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return _is_utils__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullOrEmpty", function() { return _is_utils__WEBPACK_IMPORTED_MODULE_0__["isNullOrEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _is_utils__WEBPACK_IMPORTED_MODULE_0__["isNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _is_utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _is_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _is_utils__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _is_utils__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _is_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _is_utils__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _is_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony import */ var _property_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-resolver */ "./src/app/modules/shared/functions/property-resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveNestedObjectProperties", function() { return _property_resolver__WEBPACK_IMPORTED_MODULE_1__["resolveNestedObjectProperties"]; });

/* harmony import */ var _translation_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translation-utils */ "./src/app/modules/shared/functions/translation-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prependLocalizationKey", function() { return _translation_utils__WEBPACK_IMPORTED_MODULE_2__["prependLocalizationKey"]; });






/***/ }),

/***/ "./src/app/modules/shared/functions/is-utils.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/shared/functions/is-utils.ts ***!
  \******************************************************/
/*! exports provided: isNullOrUndefined, isNullOrEmpty, isNull, isUndefined, isNumber, isString, isBoolean, isObject, isPrimitive, isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrEmpty", function() { return isNullOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
function isNullOrUndefined(value) {
    return value === undefined || value === null;
}
function isNullOrEmpty(value) {
    return isNullOrUndefined(value) || value.length === 0;
}
function isNull(value) {
    return value === null;
}
function isUndefined(value) {
    return value === undefined;
}
function isNumber(value) {
    return typeof value === 'number';
}
function isString(value) {
    return typeof value === 'string';
}
function isBoolean(value) {
    return typeof value === 'boolean';
}
function isObject(value) {
    return value !== null && typeof value === 'object';
}
function isPrimitive(value) {
    return (typeof value !== 'object' && typeof value !== 'function') || value === null;
}
function isArray(value) {
    return Array.isArray(value);
}


/***/ }),

/***/ "./src/app/modules/shared/functions/property-resolver.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/functions/property-resolver.ts ***!
  \***************************************************************/
/*! exports provided: resolveNestedObjectProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveNestedObjectProperties", function() { return resolveNestedObjectProperties; });
function resolveNestedObjectProperties(theObject, path) {
    try {
        var separator = '.';
        return path.replace('[', separator).replace(']', '').split(separator).reduce(function getNestedProperty(obj, property) {
            return obj[property];
        }, theObject);
    }
    catch (err) {
        return undefined;
    }
}


/***/ }),

/***/ "./src/app/modules/shared/functions/translation-utils.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/functions/translation-utils.ts ***!
  \***************************************************************/
/*! exports provided: prependLocalizationKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependLocalizationKey", function() { return prependLocalizationKey; });
function prependLocalizationKey(localizationSet, localizationKey) {
    if (localizationSet) {
        return localizationSet + "." + localizationKey;
    }
    else {
        return localizationKey;
    }
}


/***/ }),

/***/ "./src/app/modules/shared/index.ts":
/*!*****************************************!*\
  !*** ./src/app/modules/shared/index.ts ***!
  \*****************************************/
/*! exports provided: SharedModule, NOTIFICATION_STATE, SIDEBAR_STATE, UriBuilder, DataProviderService, RestClient, JwtInterceptor, ErrorInterceptor, RequestResult, APP_REDUCERS, CommonComponent, CommonSecuredComponent, TruncationPipe, LocalDataProviderService, LocalStorageDataProvider, SessionStorageDataProvider, AlertComponent, AlertType, ButtonComponent, DropdownComponent, DownloadButtonComponent, VereineDropdownComponent, ButtonType, ButtonSize, ModalDialogComponent, ModalDialogOption, ModalDialogResult, PageHeadingComponent, BreadcrumbsComponent, BreadcrumbDO, OverviewDialogComponent, CommonDialogComponent, DetailDialogComponent, NavigationDialogComponent, SimpleOverviewDialogComponent, DataTableComponent, TableEmptyPlaceholderComponent, TableLoadingPlaceholderComponent, showDeleteLoadingIndicatorIcon, hideLoadingIndicator, toTableRows, HorizontalFormComponent, FormActionType, FormContent, FormPropertyType, toFormContent, CenteredLayoutComponent, ColLayoutComponent, GridLayoutComponent, RowLayoutComponent, TooltipComponent, DropdownMenuComponent, QuicksearchListComponent, SelectionlistComponent, CurrentUserService, UserPermission, UserSignInDTO, ErrorHandlingService, NotificationService, SHOW_NOTIFICATION, ACCEPT_NOTIFICATION, DECLINE_NOTIFICATION, DISCARD_NOTIFICATION, ShowNotification, AcceptNotification, DeclineNotification, DiscardNotification, initialNavigationState, notificationReducer, TOGGLE_SIDEBAR, ToggleSidebar, initialSidebarState, sidebarReducer, LOGIN, LOGOUT, Login, Logout, initialUserState, userReducer, Notification, NotificationType, NotificationOrigin, NotificationSeverity, NotificationUserAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _data_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UriBuilder", function() { return _data_provider__WEBPACK_IMPORTED_MODULE_1__["UriBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataProviderService", function() { return _data_provider__WEBPACK_IMPORTED_MODULE_1__["DataProviderService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestClient", function() { return _data_provider__WEBPACK_IMPORTED_MODULE_1__["RestClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _data_provider__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _data_provider__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestResult", function() { return _data_provider__WEBPACK_IMPORTED_MODULE_1__["RequestResult"]; });

/* harmony import */ var _local_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-data-provider */ "./src/app/modules/shared/local-data-provider/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalDataProviderService", function() { return _local_data_provider__WEBPACK_IMPORTED_MODULE_2__["LocalDataProviderService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageDataProvider", function() { return _local_data_provider__WEBPACK_IMPORTED_MODULE_2__["LocalStorageDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionStorageDataProvider", function() { return _local_data_provider__WEBPACK_IMPORTED_MODULE_2__["SessionStorageDataProvider"]; });

/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux-store */ "./src/app/modules/shared/redux-store/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_STATE", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["NOTIFICATION_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_STATE", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APP_REDUCERS", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["APP_REDUCERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHOW_NOTIFICATION", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["SHOW_NOTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCEPT_NOTIFICATION", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["ACCEPT_NOTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DECLINE_NOTIFICATION", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["DECLINE_NOTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DISCARD_NOTIFICATION", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["DISCARD_NOTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowNotification", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["ShowNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AcceptNotification", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["AcceptNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeclineNotification", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["DeclineNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscardNotification", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["DiscardNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialNavigationState", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["initialNavigationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationReducer", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["notificationReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_SIDEBAR", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["TOGGLE_SIDEBAR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleSidebar", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["ToggleSidebar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialSidebarState", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["initialSidebarState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sidebarReducer", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["sidebarReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["LOGIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["LOGOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["Logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialUserState", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["initialUserState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return _redux_store__WEBPACK_IMPORTED_MODULE_3__["userReducer"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/app/modules/shared/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonSecuredComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["CommonSecuredComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["AlertType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DownloadButtonComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["DownloadButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VereineDropdownComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["VereineDropdownComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["ButtonType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonSize", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["ButtonSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDialogComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["ModalDialogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDialogOption", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["ModalDialogOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDialogResult", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["ModalDialogResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeadingComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["PageHeadingComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbDO", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbDO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverviewDialogComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["OverviewDialogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonDialogComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["CommonDialogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailDialogComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["DetailDialogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationDialogComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["NavigationDialogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleOverviewDialogComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["SimpleOverviewDialogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["DataTableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableEmptyPlaceholderComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["TableEmptyPlaceholderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableLoadingPlaceholderComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["TableLoadingPlaceholderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showDeleteLoadingIndicatorIcon", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["showDeleteLoadingIndicatorIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoadingIndicator", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["hideLoadingIndicator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toTableRows", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["toTableRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HorizontalFormComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["HorizontalFormComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormActionType", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["FormActionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormContent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["FormContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormPropertyType", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["FormPropertyType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toFormContent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["toFormContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CenteredLayoutComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["CenteredLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColLayoutComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["ColLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridLayoutComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["GridLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RowLayoutComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["RowLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["TooltipComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["DropdownMenuComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuicksearchListComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["QuicksearchListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionlistComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["SelectionlistComponent"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "./src/app/modules/shared/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrentUserService", function() { return _services__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPermission", function() { return _services__WEBPACK_IMPORTED_MODULE_5__["UserPermission"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSignInDTO", function() { return _services__WEBPACK_IMPORTED_MODULE_5__["UserSignInDTO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingService", function() { return _services__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return _services__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _services__WEBPACK_IMPORTED_MODULE_5__["Notification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return _services__WEBPACK_IMPORTED_MODULE_5__["NotificationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationOrigin", function() { return _services__WEBPACK_IMPORTED_MODULE_5__["NotificationOrigin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationSeverity", function() { return _services__WEBPACK_IMPORTED_MODULE_5__["NotificationSeverity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationUserAction", function() { return _services__WEBPACK_IMPORTED_MODULE_5__["NotificationUserAction"]; });

/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes */ "./src/app/modules/shared/pipes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TruncationPipe", function() { return _pipes__WEBPACK_IMPORTED_MODULE_6__["TruncationPipe"]; });










/***/ }),

/***/ "./src/app/modules/shared/local-data-provider/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/local-data-provider/index.ts ***!
  \*************************************************************/
/*! exports provided: LocalDataProviderService, LocalStorageDataProvider, SessionStorageDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/app/modules/shared/local-data-provider/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalDataProviderService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["LocalDataProviderService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageDataProvider", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["LocalStorageDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionStorageDataProvider", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["SessionStorageDataProvider"]; });




/***/ }),

/***/ "./src/app/modules/shared/local-data-provider/services/data-sources/local-storage-data-provider.class.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/shared/local-data-provider/services/data-sources/local-storage-data-provider.class.ts ***!
  \***************************************************************************************************************/
/*! exports provided: LocalStorageDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageDataProvider", function() { return LocalStorageDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");



var STORAGE_KEY_PREFIX = 'bogenliga_';
var LocalStorageDataProvider = /** @class */ (function () {
    function LocalStorageDataProvider(storage) {
        this.storage = storage;
    }
    LocalStorageDataProvider.prototype.set = function (key, value) {
        this.storage.set(STORAGE_KEY_PREFIX + key, value);
    };
    LocalStorageDataProvider.prototype.get = function (key) {
        return this.storage.get(STORAGE_KEY_PREFIX + key);
    };
    LocalStorageDataProvider.prototype.remove = function (key) {
        this.storage.remove(STORAGE_KEY_PREFIX + key);
    };
    LocalStorageDataProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], LocalStorageDataProvider);
    return LocalStorageDataProvider;
}());



/***/ }),

/***/ "./src/app/modules/shared/local-data-provider/services/data-sources/session-storage-data-provider.class.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/shared/local-data-provider/services/data-sources/session-storage-data-provider.class.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: SessionStorageDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorageDataProvider", function() { return SessionStorageDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");



var STORAGE_KEY_PREFIX = 'bogenliga_';
var SessionStorageDataProvider = /** @class */ (function () {
    function SessionStorageDataProvider(storage) {
        this.storage = storage;
    }
    SessionStorageDataProvider.prototype.set = function (key, value) {
        this.storage.set(STORAGE_KEY_PREFIX + key, value);
    };
    SessionStorageDataProvider.prototype.get = function (key) {
        return this.storage.get(STORAGE_KEY_PREFIX + key);
    };
    SessionStorageDataProvider.prototype.remove = function (key) {
        this.storage.remove(STORAGE_KEY_PREFIX + key);
    };
    SessionStorageDataProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SessionStorageDataProvider);
    return SessionStorageDataProvider;
}());



/***/ }),

/***/ "./src/app/modules/shared/local-data-provider/services/index.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/local-data-provider/services/index.ts ***!
  \**********************************************************************/
/*! exports provided: LocalDataProviderService, LocalStorageDataProvider, SessionStorageDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _local_data_provider_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-data-provider.service */ "./src/app/modules/shared/local-data-provider/services/local-data-provider.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalDataProviderService", function() { return _local_data_provider_service__WEBPACK_IMPORTED_MODULE_0__["LocalDataProviderService"]; });

/* harmony import */ var _data_sources_local_storage_data_provider_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-sources/local-storage-data-provider.class */ "./src/app/modules/shared/local-data-provider/services/data-sources/local-storage-data-provider.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageDataProvider", function() { return _data_sources_local_storage_data_provider_class__WEBPACK_IMPORTED_MODULE_1__["LocalStorageDataProvider"]; });

/* harmony import */ var _data_sources_session_storage_data_provider_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-sources/session-storage-data-provider.class */ "./src/app/modules/shared/local-data-provider/services/data-sources/session-storage-data-provider.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionStorageDataProvider", function() { return _data_sources_session_storage_data_provider_class__WEBPACK_IMPORTED_MODULE_2__["SessionStorageDataProvider"]; });






/***/ }),

/***/ "./src/app/modules/shared/local-data-provider/services/local-data-provider.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/shared/local-data-provider/services/local-data-provider.service.ts ***!
  \********************************************************************************************/
/*! exports provided: LocalDataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalDataProviderService", function() { return LocalDataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _data_sources_local_storage_data_provider_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-sources/local-storage-data-provider.class */ "./src/app/modules/shared/local-data-provider/services/data-sources/local-storage-data-provider.class.ts");
/* harmony import */ var _data_sources_session_storage_data_provider_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-sources/session-storage-data-provider.class */ "./src/app/modules/shared/local-data-provider/services/data-sources/session-storage-data-provider.class.ts");






/**
 * I provider data from the local user client and abstract the data source.
 *
 * The data sources can be
 * - session storage
 * - local storage
 * - in memory storage (fallback)
 *
 * @see https://www.npmjs.com/package/angular-webstorage-service
 */
var LocalDataProviderService = /** @class */ (function () {
    function LocalDataProviderService(localStorageDataProvider, sessionStorageDataProvider) {
        this.localStorageDataProvider = localStorageDataProvider;
        this.sessionStorageDataProvider = sessionStorageDataProvider;
    }
    /**
     * Persists key-value pair in session storage.
     *
     * Data will be lost after closing the browser tab.
     *
     * @param key
     * @param value
     */
    LocalDataProviderService.prototype.setSessionScoped = function (key, value) {
        var sessionStorageAvailable = Object(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["isStorageAvailable"])(sessionStorage);
        if (sessionStorageAvailable) {
            this.sessionStorageDataProvider.set(key, value);
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Persists key-value pair in local storage.
     *
     * Data remain in browser (similar to cookies)
     *
     * @param key
     * @param value
     */
    LocalDataProviderService.prototype.setPermanently = function (key, value) {
        var localStorageAvailable = Object(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["isStorageAvailable"])(localStorage);
        if (localStorageAvailable) {
            this.localStorageDataProvider.set(key, value);
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Returns a key-value pair from all local data sources.
     *
     * 1. try session storage
     * 2. try local storage
     *
     * @param key
     * @return value
     */
    LocalDataProviderService.prototype.get = function (key) {
        var sessionStorageAvailable = Object(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["isStorageAvailable"])(sessionStorage);
        var localStorageAvailable = Object(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["isStorageAvailable"])(localStorage);
        var value = null;
        if (sessionStorageAvailable) {
            value = this.sessionStorageDataProvider.get(key);
        }
        if (Object(_shared_functions__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(value) && localStorageAvailable) {
            value = this.localStorageDataProvider.get(key);
        }
        return value;
    };
    /**
     * Removes a key-value pair from all local data sources
     *
     * @param key
     */
    LocalDataProviderService.prototype.remove = function (key) {
        var sessionStorageAvailable = Object(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["isStorageAvailable"])(sessionStorage);
        var localStorageAvailable = Object(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["isStorageAvailable"])(localStorage);
        if (sessionStorageAvailable) {
            this.sessionStorageDataProvider.remove(key);
        }
        if (localStorageAvailable) {
            this.localStorageDataProvider.remove(key);
        }
    };
    LocalDataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_sources_local_storage_data_provider_class__WEBPACK_IMPORTED_MODULE_4__["LocalStorageDataProvider"],
            _data_sources_session_storage_data_provider_class__WEBPACK_IMPORTED_MODULE_5__["SessionStorageDataProvider"]])
    ], LocalDataProviderService);
    return LocalDataProviderService;
}());



/***/ }),

/***/ "./src/app/modules/shared/pipes/index.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/shared/pipes/index.ts ***!
  \***********************************************/
/*! exports provided: TruncationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _truncation_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./truncation.pipe */ "./src/app/modules/shared/pipes/truncation.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TruncationPipe", function() { return _truncation_pipe__WEBPACK_IMPORTED_MODULE_0__["TruncationPipe"]; });




/***/ }),

/***/ "./src/app/modules/shared/pipes/truncation.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/pipes/truncation.pipe.ts ***!
  \*********************************************************/
/*! exports provided: TruncationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncationPipe", function() { return TruncationPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TruncationPipe = /** @class */ (function () {
    function TruncationPipe() {
    }
    TruncationPipe.prototype.transform = function (input, truncationLength) {
        if (input.length > truncationLength) {
            return input.substring(0, truncationLength) + '...';
        }
        else {
            return input;
        }
    };
    TruncationPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'truncation'
        })
    ], TruncationPipe);
    return TruncationPipe;
}());



/***/ }),

/***/ "./src/app/modules/shared/redux-store/app.reducer.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/redux-store/app.reducer.ts ***!
  \***********************************************************/
/*! exports provided: APP_REDUCERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_REDUCERS", function() { return APP_REDUCERS; });
/* harmony import */ var _feature_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature/notification */ "./src/app/modules/shared/redux-store/feature/notification/index.ts");
/* harmony import */ var _feature_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature/sidebar */ "./src/app/modules/shared/redux-store/feature/sidebar/index.ts");
/* harmony import */ var _feature_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature/user */ "./src/app/modules/shared/redux-store/feature/user/index.ts");



var APP_REDUCERS = {
    notificationState: _feature_notification__WEBPACK_IMPORTED_MODULE_0__["notificationReducer"],
    sidebarState: _feature_sidebar__WEBPACK_IMPORTED_MODULE_1__["sidebarReducer"],
    userState: _feature_user__WEBPACK_IMPORTED_MODULE_2__["userReducer"],
};


/***/ }),

/***/ "./src/app/modules/shared/redux-store/app.state.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/redux-store/app.state.ts ***!
  \*********************************************************/
/*! exports provided: NOTIFICATION_STATE, SIDEBAR_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_STATE", function() { return NOTIFICATION_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_STATE", function() { return SIDEBAR_STATE; });
var NOTIFICATION_STATE = 'notificationState';
var SIDEBAR_STATE = 'sidebarState';


/***/ }),

/***/ "./src/app/modules/shared/redux-store/feature/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/redux-store/feature/index.ts ***!
  \*************************************************************/
/*! exports provided: SHOW_NOTIFICATION, ACCEPT_NOTIFICATION, DECLINE_NOTIFICATION, DISCARD_NOTIFICATION, ShowNotification, AcceptNotification, DeclineNotification, DiscardNotification, initialNavigationState, notificationReducer, TOGGLE_SIDEBAR, ToggleSidebar, initialSidebarState, sidebarReducer, LOGIN, LOGOUT, Login, Logout, initialUserState, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification */ "./src/app/modules/shared/redux-store/feature/notification/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHOW_NOTIFICATION", function() { return _notification__WEBPACK_IMPORTED_MODULE_0__["SHOW_NOTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCEPT_NOTIFICATION", function() { return _notification__WEBPACK_IMPORTED_MODULE_0__["ACCEPT_NOTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DECLINE_NOTIFICATION", function() { return _notification__WEBPACK_IMPORTED_MODULE_0__["DECLINE_NOTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DISCARD_NOTIFICATION", function() { return _notification__WEBPACK_IMPORTED_MODULE_0__["DISCARD_NOTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowNotification", function() { return _notification__WEBPACK_IMPORTED_MODULE_0__["ShowNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AcceptNotification", function() { return _notification__WEBPACK_IMPORTED_MODULE_0__["AcceptNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeclineNotification", function() { return _notification__WEBPACK_IMPORTED_MODULE_0__["DeclineNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscardNotification", function() { return _notification__WEBPACK_IMPORTED_MODULE_0__["DiscardNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialNavigationState", function() { return _notification__WEBPACK_IMPORTED_MODULE_0__["initialNavigationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationReducer", function() { return _notification__WEBPACK_IMPORTED_MODULE_0__["notificationReducer"]; });

/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/app/modules/shared/redux-store/feature/sidebar/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_SIDEBAR", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_SIDEBAR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleSidebar", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_1__["ToggleSidebar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialSidebarState", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_1__["initialSidebarState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sidebarReducer", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_1__["sidebarReducer"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/app/modules/shared/redux-store/feature/user/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["LOGIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["LOGOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["Logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialUserState", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["initialUserState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["userReducer"]; });






/***/ }),

/***/ "./src/app/modules/shared/redux-store/feature/notification/index.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/shared/redux-store/feature/notification/index.ts ***!
  \**************************************************************************/
/*! exports provided: SHOW_NOTIFICATION, ACCEPT_NOTIFICATION, DECLINE_NOTIFICATION, DISCARD_NOTIFICATION, ShowNotification, AcceptNotification, DeclineNotification, DiscardNotification, initialNavigationState, notificationReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.actions */ "./src/app/modules/shared/redux-store/feature/notification/notification.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHOW_NOTIFICATION", function() { return _notification_actions__WEBPACK_IMPORTED_MODULE_0__["SHOW_NOTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCEPT_NOTIFICATION", function() { return _notification_actions__WEBPACK_IMPORTED_MODULE_0__["ACCEPT_NOTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DECLINE_NOTIFICATION", function() { return _notification_actions__WEBPACK_IMPORTED_MODULE_0__["DECLINE_NOTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DISCARD_NOTIFICATION", function() { return _notification_actions__WEBPACK_IMPORTED_MODULE_0__["DISCARD_NOTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowNotification", function() { return _notification_actions__WEBPACK_IMPORTED_MODULE_0__["ShowNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AcceptNotification", function() { return _notification_actions__WEBPACK_IMPORTED_MODULE_0__["AcceptNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeclineNotification", function() { return _notification_actions__WEBPACK_IMPORTED_MODULE_0__["DeclineNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscardNotification", function() { return _notification_actions__WEBPACK_IMPORTED_MODULE_0__["DiscardNotification"]; });

/* harmony import */ var _notification_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.reducer */ "./src/app/modules/shared/redux-store/feature/notification/notification.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialNavigationState", function() { return _notification_reducer__WEBPACK_IMPORTED_MODULE_1__["initialNavigationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationReducer", function() { return _notification_reducer__WEBPACK_IMPORTED_MODULE_1__["notificationReducer"]; });





/***/ }),

/***/ "./src/app/modules/shared/redux-store/feature/notification/notification.actions.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/shared/redux-store/feature/notification/notification.actions.ts ***!
  \*****************************************************************************************/
/*! exports provided: SHOW_NOTIFICATION, ACCEPT_NOTIFICATION, DECLINE_NOTIFICATION, DISCARD_NOTIFICATION, ShowNotification, AcceptNotification, DeclineNotification, DiscardNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_NOTIFICATION", function() { return SHOW_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCEPT_NOTIFICATION", function() { return ACCEPT_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECLINE_NOTIFICATION", function() { return DECLINE_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCARD_NOTIFICATION", function() { return DISCARD_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowNotification", function() { return ShowNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptNotification", function() { return AcceptNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclineNotification", function() { return DeclineNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscardNotification", function() { return DiscardNotification; });
var SHOW_NOTIFICATION = '[Navigation] Show Notification';
var ACCEPT_NOTIFICATION = '[Navigation] Accept Notification';
var DECLINE_NOTIFICATION = '[Navigation] Decline Notification';
var DISCARD_NOTIFICATION = '[Navigation] Descard Notification';
var ShowNotification = /** @class */ (function () {
    function ShowNotification(payload) {
        this.payload = payload;
        this.type = SHOW_NOTIFICATION;
    }
    return ShowNotification;
}());

var AcceptNotification = /** @class */ (function () {
    function AcceptNotification() {
        this.type = ACCEPT_NOTIFICATION;
    }
    return AcceptNotification;
}());

var DeclineNotification = /** @class */ (function () {
    function DeclineNotification() {
        this.type = DECLINE_NOTIFICATION;
    }
    return DeclineNotification;
}());

var DiscardNotification = /** @class */ (function () {
    function DiscardNotification() {
        this.type = DISCARD_NOTIFICATION;
    }
    return DiscardNotification;
}());



/***/ }),

/***/ "./src/app/modules/shared/redux-store/feature/notification/notification.reducer.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/shared/redux-store/feature/notification/notification.reducer.ts ***!
  \*****************************************************************************************/
/*! exports provided: initialNavigationState, notificationReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialNavigationState", function() { return initialNavigationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationReducer", function() { return notificationReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_notification_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/notification/types */ "./src/app/modules/shared/services/notification/types/index.ts");
/* harmony import */ var _notification_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.actions */ "./src/app/modules/shared/redux-store/feature/notification/notification.actions.ts");



var initialNavigationState = {
    showNotification: false,
    notification: new _services_notification_types__WEBPACK_IMPORTED_MODULE_1__["Notification"]()
};
function notificationReducer(state, action) {
    if (state === void 0) { state = initialNavigationState; }
    var newState;
    switch (action.type) {
        case _notification_actions__WEBPACK_IMPORTED_MODULE_2__["SHOW_NOTIFICATION"]: {
            newState = {
                notification: action.payload,
                showNotification: true
            };
            break;
        }
        case _notification_actions__WEBPACK_IMPORTED_MODULE_2__["ACCEPT_NOTIFICATION"]: {
            var modifiedState = newState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
            modifiedState.notification.userAction = _services_notification_types__WEBPACK_IMPORTED_MODULE_1__["NotificationUserAction"].ACCEPTED;
            modifiedState.showNotification = false;
            break;
        }
        case _notification_actions__WEBPACK_IMPORTED_MODULE_2__["DECLINE_NOTIFICATION"]: {
            var modifiedState = newState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
            modifiedState.notification.userAction = _services_notification_types__WEBPACK_IMPORTED_MODULE_1__["NotificationUserAction"].DECLINED;
            modifiedState.showNotification = false;
            break;
        }
        case _notification_actions__WEBPACK_IMPORTED_MODULE_2__["DISCARD_NOTIFICATION"]: {
            var modifiedState = newState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
            modifiedState.notification = null;
            modifiedState.showNotification = false;
            break;
        }
        default:
            // do nothing
            return state;
    }
    console.log('REDUX [NotificationReducer] ' + action.type + ' with new state ' + JSON.stringify(newState));
    return newState;
}


/***/ }),

/***/ "./src/app/modules/shared/redux-store/feature/sidebar/index.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shared/redux-store/feature/sidebar/index.ts ***!
  \*********************************************************************/
/*! exports provided: TOGGLE_SIDEBAR, ToggleSidebar, initialSidebarState, sidebarReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.actions */ "./src/app/modules/shared/redux-store/feature/sidebar/sidebar.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_SIDEBAR", function() { return _sidebar_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_SIDEBAR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleSidebar", function() { return _sidebar_actions__WEBPACK_IMPORTED_MODULE_0__["ToggleSidebar"]; });

/* harmony import */ var _sidebar_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.reducer */ "./src/app/modules/shared/redux-store/feature/sidebar/sidebar.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialSidebarState", function() { return _sidebar_reducer__WEBPACK_IMPORTED_MODULE_1__["initialSidebarState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sidebarReducer", function() { return _sidebar_reducer__WEBPACK_IMPORTED_MODULE_1__["sidebarReducer"]; });





/***/ }),

/***/ "./src/app/modules/shared/redux-store/feature/sidebar/sidebar.actions.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/shared/redux-store/feature/sidebar/sidebar.actions.ts ***!
  \*******************************************************************************/
/*! exports provided: TOGGLE_SIDEBAR, ToggleSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_SIDEBAR", function() { return TOGGLE_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleSidebar", function() { return ToggleSidebar; });
var TOGGLE_SIDEBAR = '[Sidebar] Show Notification';
var ToggleSidebar = /** @class */ (function () {
    function ToggleSidebar() {
        this.type = TOGGLE_SIDEBAR;
    }
    return ToggleSidebar;
}());



/***/ }),

/***/ "./src/app/modules/shared/redux-store/feature/sidebar/sidebar.reducer.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/shared/redux-store/feature/sidebar/sidebar.reducer.ts ***!
  \*******************************************************************************/
/*! exports provided: initialSidebarState, sidebarReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialSidebarState", function() { return initialSidebarState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarReducer", function() { return sidebarReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sidebar_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.actions */ "./src/app/modules/shared/redux-store/feature/sidebar/sidebar.actions.ts");


var initialSidebarState = {
    toggleSidebar: true,
};
function sidebarReducer(state, action) {
    if (state === void 0) { state = initialSidebarState; }
    var newState;
    switch (action.type) {
        case _sidebar_actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_SIDEBAR"]: {
            newState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { toggleSidebar: !state.toggleSidebar });
            break;
        }
        default:
            // do nothing
            return state;
    }
    console.log('REDUX [SidebarReducer] ' + action.type + ' with new state ' + JSON.stringify(newState));
    return newState;
}


/***/ }),

/***/ "./src/app/modules/shared/redux-store/feature/user/index.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/shared/redux-store/feature/user/index.ts ***!
  \******************************************************************/
/*! exports provided: LOGIN, LOGOUT, Login, Logout, initialUserState, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.actions */ "./src/app/modules/shared/redux-store/feature/user/user.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["Logout"]; });

/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.reducer */ "./src/app/modules/shared/redux-store/feature/user/user.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialUserState", function() { return _user_reducer__WEBPACK_IMPORTED_MODULE_1__["initialUserState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return _user_reducer__WEBPACK_IMPORTED_MODULE_1__["userReducer"]; });





/***/ }),

/***/ "./src/app/modules/shared/redux-store/feature/user/user.actions.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/redux-store/feature/user/user.actions.ts ***!
  \*************************************************************************/
/*! exports provided: LOGIN, LOGOUT, Login, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
var LOGIN = '[User] Login';
var LOGOUT = '[User] Logout';
var Login = /** @class */ (function () {
    function Login(payload) {
        this.payload = payload;
        this.type = LOGIN;
    }
    return Login;
}());

var Logout = /** @class */ (function () {
    function Logout() {
        this.type = LOGOUT;
    }
    return Logout;
}());



/***/ }),

/***/ "./src/app/modules/shared/redux-store/feature/user/user.reducer.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/redux-store/feature/user/user.reducer.ts ***!
  \*************************************************************************/
/*! exports provided: initialUserState, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialUserState", function() { return initialUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.actions */ "./src/app/modules/shared/redux-store/feature/user/user.actions.ts");


var initialUserState = {
    isLoggedIn: false,
    user: null
};
function userReducer(state, action) {
    if (state === void 0) { state = initialUserState; }
    var newState;
    switch (action.type) {
        case _user_actions__WEBPACK_IMPORTED_MODULE_1__["LOGIN"]: {
            newState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { user: action.payload, isLoggedIn: true });
            break;
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]: {
            newState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { user: null, isLoggedIn: false });
            break;
        }
        default:
            // do nothing
            return state;
    }
    console.log('REDUX [UserReducer] ' + action.type + ' with new state ' + JSON.stringify(newState));
    return newState;
}


/***/ }),

/***/ "./src/app/modules/shared/redux-store/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/shared/redux-store/index.ts ***!
  \*****************************************************/
/*! exports provided: NOTIFICATION_STATE, SIDEBAR_STATE, APP_REDUCERS, SHOW_NOTIFICATION, ACCEPT_NOTIFICATION, DECLINE_NOTIFICATION, DISCARD_NOTIFICATION, ShowNotification, AcceptNotification, DeclineNotification, DiscardNotification, initialNavigationState, notificationReducer, TOGGLE_SIDEBAR, ToggleSidebar, initialSidebarState, sidebarReducer, LOGIN, LOGOUT, Login, Logout, initialUserState, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ "./src/app/modules/shared/redux-store/feature/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHOW_NOTIFICATION", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["SHOW_NOTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCEPT_NOTIFICATION", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["ACCEPT_NOTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DECLINE_NOTIFICATION", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["DECLINE_NOTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DISCARD_NOTIFICATION", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["DISCARD_NOTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowNotification", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["ShowNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AcceptNotification", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["AcceptNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeclineNotification", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["DeclineNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscardNotification", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["DiscardNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialNavigationState", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["initialNavigationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationReducer", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["notificationReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_SIDEBAR", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_SIDEBAR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleSidebar", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["ToggleSidebar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialSidebarState", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["initialSidebarState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sidebarReducer", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["sidebarReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["LOGIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["Logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialUserState", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["initialUserState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return _feature__WEBPACK_IMPORTED_MODULE_0__["userReducer"]; });

/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.state */ "./src/app/modules/shared/redux-store/app.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_STATE", function() { return _app_state__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_STATE", function() { return _app_state__WEBPACK_IMPORTED_MODULE_1__["SIDEBAR_STATE"]; });

/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.reducer */ "./src/app/modules/shared/redux-store/app.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APP_REDUCERS", function() { return _app_reducer__WEBPACK_IMPORTED_MODULE_2__["APP_REDUCERS"]; });






/***/ }),

/***/ "./src/app/modules/shared/services/current-user/current-user.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/services/current-user/current-user.service.ts ***!
  \******************************************************************************/
/*! exports provided: CurrentUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserService", function() { return CurrentUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _local_data_provider_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../local-data-provider/services */ "./src/app/modules/shared/local-data-provider/services/index.ts");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux-store */ "./src/app/modules/shared/redux-store/index.ts");
/* harmony import */ var _notification_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notification/types */ "./src/app/modules/shared/services/notification/types/index.ts");
/* harmony import */ var _types_user_sign_in_dto_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types/user-sign-in-dto.class */ "./src/app/modules/shared/services/current-user/types/user-sign-in-dto.class.ts");










var CURRENT_USER_KEY = 'current_user';
var LOGIN_EMAIL_KEY = 'login_email';
var CurrentUserService = /** @class */ (function () {
    function CurrentUserService(localDataProviderService, store, router) {
        this.localDataProviderService = localDataProviderService;
        this.store = store;
        this.router = router;
        this.currentUser = new _types_user_sign_in_dto_class__WEBPACK_IMPORTED_MODULE_9__["UserSignInDTO"]();
        this.observeUserState();
        this.observeSessionExpiredNotifications();
        this.loadCurrentUser();
    }
    CurrentUserService.prototype.persistCurrentUser = function (currentUser) {
        this.localDataProviderService.setPermanently(CURRENT_USER_KEY, JSON.stringify(currentUser));
        this.store.dispatch(new _redux_store__WEBPACK_IMPORTED_MODULE_7__["Login"](currentUser));
    };
    CurrentUserService.prototype.loadCurrentUser = function () {
        console.log('Load current user from storage');
        var currentUserValue = this.localDataProviderService.get(CURRENT_USER_KEY);
        if (currentUserValue != null) {
            this.store.dispatch(new _redux_store__WEBPACK_IMPORTED_MODULE_7__["Login"](_types_user_sign_in_dto_class__WEBPACK_IMPORTED_MODULE_9__["UserSignInDTO"].copyFromJson(JSON.parse(currentUserValue))));
        }
    };
    CurrentUserService.prototype.getEmail = function () {
        return this.getCurrentUser().email;
    };
    CurrentUserService.prototype.getUserId = function () {
        return this.getCurrentUser().id;
    };
    CurrentUserService.prototype.getJsonWebToken = function () {
        return this.getCurrentUser().jwt;
    };
    CurrentUserService.prototype.getPermissions = function () {
        return this.getCurrentUser().permissions;
    };
    CurrentUserService.prototype.hasPermission = function (permission) {
        return this.getCurrentUser().permissions.indexOf(permission) >= 0;
    };
    CurrentUserService.prototype.hasAllPermissions = function (requiredPermissions) {
        var userPermissions = this.getPermissions();
        // preconditions
        if (this.isUserLoggedIn === false) { // no user and data needs permission --> access denied
            return false;
        }
        else if (requiredPermissions.length === 0) { // no permissions needed
            return true;
        }
        else if (Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(userPermissions) || userPermissions.length === 0) {
            // permissions needed but user has none
            return false;
        }
        return requiredPermissions.every(function hasPermissions(value) {
            return (userPermissions.indexOf(value) >= 0);
        });
    };
    CurrentUserService.prototype.hasAnyPermisson = function (requiredPermissions) {
        var userPermissions = this.getPermissions();
        // preconditions
        if (requiredPermissions.length > 0 && this.isUserLoggedIn === false) { // no user and data needs permission --> access denied
            return false;
        }
        else if (requiredPermissions.length === 0) { // no permissions needed
            return true;
        }
        else if (requiredPermissions.length > 0 && this.isUserLoggedIn === false) { // no user and data needs permission --> access denied
            return false;
        }
        else if (Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(userPermissions) || userPermissions.length === 0) {
            // permissions needed but user has none
            return false;
        }
        for (var _i = 0, requiredPermissions_1 = requiredPermissions; _i < requiredPermissions_1.length; _i++) {
            var requiredPermission = requiredPermissions_1[_i];
            if (userPermissions.indexOf(userPermissions[requiredPermission]) >= 0) {
                return true;
            }
        }
        return false;
    };
    CurrentUserService.prototype.isLoggedIn = function () {
        return this.getUserId() === null;
    };
    CurrentUserService.prototype.logout = function () {
        this.localDataProviderService.remove(CURRENT_USER_KEY);
        this.store.dispatch(new _redux_store__WEBPACK_IMPORTED_MODULE_7__["Logout"]());
    };
    CurrentUserService.prototype.rememberUsername = function (email) {
        this.localDataProviderService.setPermanently(LOGIN_EMAIL_KEY, email);
    };
    CurrentUserService.prototype.getRememberedUsername = function () {
        return this.localDataProviderService.get(LOGIN_EMAIL_KEY);
    };
    CurrentUserService.prototype.forgetUsername = function () {
        return this.localDataProviderService.remove(LOGIN_EMAIL_KEY);
    };
    CurrentUserService.prototype.observeUserState = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(function (state) { return state.userState; }))
            .subscribe(function (state) {
            _this.isUserLoggedIn = state.isLoggedIn;
            _this.currentUser = Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(state.user) ? new _types_user_sign_in_dto_class__WEBPACK_IMPORTED_MODULE_9__["UserSignInDTO"]() : state.user;
        });
    };
    CurrentUserService.prototype.observeSessionExpiredNotifications = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(function (state) { return state.notificationState; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (notificationState) { return !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(notificationState.notification); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (notificationState) { return notificationState.notification; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (notification) { return notification.id === 'NO_SESSION_ERROR'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (notification) { return notification.userAction === _notification_types__WEBPACK_IMPORTED_MODULE_8__["NotificationUserAction"].ACCEPTED; })).subscribe(function (notification) {
            _this.logout();
            _this.router.navigateByUrl('user/login');
        });
    };
    CurrentUserService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    CurrentUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_local_data_provider_services__WEBPACK_IMPORTED_MODULE_6__["LocalDataProviderService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CurrentUserService);
    return CurrentUserService;
}());



/***/ }),

/***/ "./src/app/modules/shared/services/current-user/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/services/current-user/index.ts ***!
  \***************************************************************/
/*! exports provided: CurrentUserService, UserPermission, UserSignInDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _current_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-user.service */ "./src/app/modules/shared/services/current-user/current-user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrentUserService", function() { return _current_user_service__WEBPACK_IMPORTED_MODULE_0__["CurrentUserService"]; });

/* harmony import */ var _types_user_permission_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/user-permission.enum */ "./src/app/modules/shared/services/current-user/types/user-permission.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPermission", function() { return _types_user_permission_enum__WEBPACK_IMPORTED_MODULE_1__["UserPermission"]; });

/* harmony import */ var _types_user_sign_in_dto_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/user-sign-in-dto.class */ "./src/app/modules/shared/services/current-user/types/user-sign-in-dto.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSignInDTO", function() { return _types_user_sign_in_dto_class__WEBPACK_IMPORTED_MODULE_2__["UserSignInDTO"]; });






/***/ }),

/***/ "./src/app/modules/shared/services/current-user/types/user-permission.enum.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/services/current-user/types/user-permission.enum.ts ***!
  \************************************************************************************/
/*! exports provided: UserPermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPermission", function() { return UserPermission; });
var UserPermission;
(function (UserPermission) {
    /*
     * Permissions to work with:
     * DSB_Mitglied
     * Verein
     * Region
     * Liga
     */
    UserPermission[UserPermission["CAN_READ_STAMMDATEN"] = 0] = "CAN_READ_STAMMDATEN";
    UserPermission[UserPermission["CAN_MODIFY_STAMMDATEN"] = 1] = "CAN_MODIFY_STAMMDATEN";
    /*
     * Permissions to work with:
     * Wettkampf
     * Match
     * Passe
     * Kampfrichter
     */
    UserPermission[UserPermission["CAN_READ_WETTKAMPF"] = 2] = "CAN_READ_WETTKAMPF";
    UserPermission[UserPermission["CAN_MODIFY_WETTKAMPF"] = 3] = "CAN_MODIFY_WETTKAMPF";
    /*
     * Permissions to work with:
     * Veranstaltung
     * Wettkampftyp
     * Ligatabelle
     * Klasse
     * Disziplin
     */
    UserPermission[UserPermission["CAN_READ_SPORTJAHR"] = 4] = "CAN_READ_SPORTJAHR";
    UserPermission[UserPermission["CAN_MODIFY_SPORTJAHR"] = 5] = "CAN_MODIFY_SPORTJAHR";
    /**
     * Permissions to work with: Benutzer Rolle Recht Configuration
     */
    UserPermission[UserPermission["CAN_READ_SYSTEMDATEN"] = 6] = "CAN_READ_SYSTEMDATEN";
    UserPermission[UserPermission["CAN_MODIFY_SYSTEMDATEN"] = 7] = "CAN_MODIFY_SYSTEMDATEN";
})(UserPermission || (UserPermission = {}));


/***/ }),

/***/ "./src/app/modules/shared/services/current-user/types/user-sign-in-dto.class.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/services/current-user/types/user-sign-in-dto.class.ts ***!
  \**************************************************************************************/
/*! exports provided: UserSignInDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignInDTO", function() { return UserSignInDTO; });
/* harmony import */ var _user_permission_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-permission.enum */ "./src/app/modules/shared/services/current-user/types/user-permission.enum.ts");

var UserSignInDTO = /** @class */ (function () {
    function UserSignInDTO() {
        this.id = 0;
        this.version = 0;
        this.email = null;
        this.jwt = null;
        this.permissions = null;
    }
    UserSignInDTO.copyFromJson = function (json) {
        var userSign = new UserSignInDTO();
        userSign.id = json.id;
        userSign.version = json.version;
        userSign.email = json.email;
        userSign.jwt = json.jwt;
        userSign.permissions = [];
        // map string list to enum list
        if (json.permissions) {
            json.permissions.forEach(function (permission) {
                var userPermission = _user_permission_enum__WEBPACK_IMPORTED_MODULE_0__["UserPermission"][permission];
                userSign.permissions.push(userPermission);
            });
        }
        return userSign;
    };
    return UserSignInDTO;
}());



/***/ }),

/***/ "./src/app/modules/shared/services/error-handling/error-handling.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/services/error-handling/error-handling.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ErrorHandlingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingService", function() { return ErrorHandlingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notification */ "./src/app/modules/shared/services/notification/index.ts");




// client errors
var HTTP_BAD_REQUEST = 400;
var HTTP_UNAUTHORIZED = 401;
var HTTP_FORBIDDEN = 403;
var HTTP_NOT_FOUND = 404;
var HTTP_UNPROCESSABLE_ENTITY = 422;
// server errors
var HTTP_INTERNAL_SERVER_ERROR = 500;
var HTTP_SERVICE_UNAVAILABLE = 503;
var UNEXPECTED_ERROR = 'UNEXPECTED_ERROR';
var ErrorHandlingService = /** @class */ (function () {
    function ErrorHandlingService(notificationService) {
        this.notificationService = notificationService;
    }
    // handle http errors
    ErrorHandlingService.prototype.handleHttpError = function (httpError) {
        var errorDto = httpError.error;
        var statusCode = httpError.status;
        var errorCategory = Math.round(statusCode / 100);
        if (errorCategory === 4) {
            this.handleHttpClientError(statusCode, errorDto);
        }
        else if (errorCategory === 5) {
            this.handleHttpServerError(statusCode, errorDto);
        }
        else if (errorCategory === 0) {
            this.handleHttpConnectionError(statusCode, errorDto);
            throw httpError;
        }
        else {
            this.handleUnexpectedError(statusCode, errorDto);
        }
        throw httpError;
    };
    // create notification
    ErrorHandlingService.prototype.handleUnexpectedError = function (statusCode, errorDto) {
        console.error('Unexpected error: ' + statusCode + ("body was: " + JSON.stringify(errorDto)));
        var notification = {
            id: UNEXPECTED_ERROR,
            title: 'NOTIFICATION.ERROR.' + UNEXPECTED_ERROR + '.TITLE',
            description: 'NOTIFICATION.ERROR.' + UNEXPECTED_ERROR + '.DESCRIPTION',
            severity: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationSeverity"].ERROR,
            origin: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationOrigin"].USER,
            type: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].OK,
            userAction: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationUserAction"].PENDING
        };
        this.notificationService.showNotification(notification);
    };
    ErrorHandlingService.prototype.handleHttpClientError = function (statusCode, errorDto) {
        console.error('Client error');
        if (statusCode === HTTP_FORBIDDEN) {
            console.error('FORBIDDEN');
        }
        else if (statusCode === HTTP_BAD_REQUEST && Object(_shared_functions__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(errorDto)) {
            errorDto = { errorCode: 'BAD_REQUEST', errorMessage: null, param: null };
        }
        else if (statusCode === HTTP_NOT_FOUND) {
            errorDto = { errorCode: 'ENTITY_NOT_FOUND_ERROR', errorMessage: null, param: null };
        }
        console.warn("body was: " + JSON.stringify(errorDto));
        var notification = {
            id: errorDto.errorCode,
            title: 'NOTIFICATION.ERROR.' + errorDto.errorCode + '.TITLE',
            description: 'NOTIFICATION.ERROR.' + errorDto.errorCode + '.DESCRIPTION',
            details: errorDto.errorMessage,
            severity: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationSeverity"].ERROR,
            origin: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationOrigin"].USER,
            type: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].OK,
            userAction: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationUserAction"].PENDING
        };
        this.notificationService.showNotification(notification);
    };
    ErrorHandlingService.prototype.handleHttpServerError = function (statusCode, errorDto) {
        console.error("Server error: body was: " + JSON.stringify(errorDto));
        var notification = {
            id: errorDto.errorCode,
            title: 'NOTIFICATION.ERROR.' + errorDto.errorCode + '.TITLE',
            description: 'NOTIFICATION.ERROR.' + errorDto.errorCode + '.DESCRIPTION',
            details: errorDto.errorMessage,
            severity: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationSeverity"].ERROR,
            origin: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationOrigin"].USER,
            type: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].OK,
            userAction: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationUserAction"].PENDING
        };
        this.notificationService.showNotification(notification);
    };
    ErrorHandlingService.prototype.handleHttpConnectionError = function (statusCode, errorDto) {
        var connectionError = 'CONNECTION_ERROR';
        var notification = {
            id: connectionError,
            title: 'NOTIFICATION.ERROR.' + connectionError + '.TITLE',
            description: 'NOTIFICATION.ERROR.' + connectionError + '.DESCRIPTION',
            severity: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationSeverity"].ERROR,
            origin: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationOrigin"].SYSTEM,
            type: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].OK,
            userAction: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationUserAction"].PENDING
        };
        this.notificationService.showNotification(notification);
    };
    ErrorHandlingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notification__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], ErrorHandlingService);
    return ErrorHandlingService;
}());



/***/ }),

/***/ "./src/app/modules/shared/services/error-handling/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/shared/services/error-handling/index.ts ***!
  \*****************************************************************/
/*! exports provided: ErrorHandlingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_handling_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-handling.service */ "./src/app/modules/shared/services/error-handling/error-handling.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingService", function() { return _error_handling_service__WEBPACK_IMPORTED_MODULE_0__["ErrorHandlingService"]; });




/***/ }),

/***/ "./src/app/modules/shared/services/index.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/shared/services/index.ts ***!
  \**************************************************/
/*! exports provided: CurrentUserService, UserPermission, UserSignInDTO, ErrorHandlingService, NotificationService, Notification, NotificationType, NotificationOrigin, NotificationSeverity, NotificationUserAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrentUserService", function() { return _current_user__WEBPACK_IMPORTED_MODULE_0__["CurrentUserService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPermission", function() { return _current_user__WEBPACK_IMPORTED_MODULE_0__["UserPermission"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSignInDTO", function() { return _current_user__WEBPACK_IMPORTED_MODULE_0__["UserSignInDTO"]; });

/* harmony import */ var _error_handling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-handling */ "./src/app/modules/shared/services/error-handling/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingService", function() { return _error_handling__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingService"]; });

/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification */ "./src/app/modules/shared/services/notification/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return _notification__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _notification__WEBPACK_IMPORTED_MODULE_2__["Notification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return _notification__WEBPACK_IMPORTED_MODULE_2__["NotificationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationOrigin", function() { return _notification__WEBPACK_IMPORTED_MODULE_2__["NotificationOrigin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationSeverity", function() { return _notification__WEBPACK_IMPORTED_MODULE_2__["NotificationSeverity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationUserAction", function() { return _notification__WEBPACK_IMPORTED_MODULE_2__["NotificationUserAction"]; });






/***/ }),

/***/ "./src/app/modules/shared/services/notification/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/services/notification/index.ts ***!
  \***************************************************************/
/*! exports provided: NotificationService, Notification, NotificationType, NotificationOrigin, NotificationSeverity, NotificationUserAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.service */ "./src/app/modules/shared/services/notification/notification.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return _notification_service__WEBPACK_IMPORTED_MODULE_0__["NotificationService"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/app/modules/shared/services/notification/types/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["Notification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["NotificationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationOrigin", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["NotificationOrigin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationSeverity", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["NotificationSeverity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationUserAction", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["NotificationUserAction"]; });





/***/ }),

/***/ "./src/app/modules/shared/services/notification/notification.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/services/notification/notification.service.ts ***!
  \******************************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/functions */ "./src/app/modules/shared/functions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux-store */ "./src/app/modules/shared/redux-store/index.ts");
/* harmony import */ var _redux_store_feature_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux-store/feature/notification */ "./src/app/modules/shared/redux-store/feature/notification/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./src/app/modules/shared/services/notification/types/index.ts");








var NotificationService = /** @class */ (function () {
    function NotificationService(store) {
        this.store = store;
        this.notificationActive = false;
        this.currentNotification = null;
        this.observeCurrentNotifications();
    }
    NotificationService.prototype.showNotification = function (notification) {
        this.store.dispatch(new _redux_store_feature_notification__WEBPACK_IMPORTED_MODULE_6__["ShowNotification"](notification));
    };
    NotificationService.prototype.getCurrentNotification = function () {
        return this.currentNotification;
    };
    NotificationService.prototype.observeNotification = function (notificationId) {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_redux_store__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_STATE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (state) { return !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(state); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (state) { return !Object(_shared_functions__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(state.notification); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (state) { return state.notification.id === notificationId; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (state) { return state.notification; }));
    };
    NotificationService.prototype.updateNotification = function (userAction) {
        if (userAction === _types__WEBPACK_IMPORTED_MODULE_7__["NotificationUserAction"].ACCEPTED) {
            this.store.dispatch({ type: _redux_store_feature_notification__WEBPACK_IMPORTED_MODULE_6__["ACCEPT_NOTIFICATION"] });
        }
        else if (userAction === _types__WEBPACK_IMPORTED_MODULE_7__["NotificationUserAction"].DECLINED) {
            this.store.dispatch({ type: _redux_store_feature_notification__WEBPACK_IMPORTED_MODULE_6__["DECLINE_NOTIFICATION"] });
        }
    };
    NotificationService.prototype.discardNotification = function () {
        this.store.dispatch({ type: _redux_store_feature_notification__WEBPACK_IMPORTED_MODULE_6__["DISCARD_NOTIFICATION"] });
    };
    NotificationService.prototype.observeNotifications = function () {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_redux_store__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_STATE"]));
    };
    /**
     * I select the {@code NOTIFICATION_STATE} of the application redux state and map the values to local copies.
     *
     */
    NotificationService.prototype.observeCurrentNotifications = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_redux_store__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_STATE"])).subscribe(function (state) {
            _this.notificationActive = state.showNotification;
            _this.currentNotification = state.notification;
        });
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/modules/shared/services/notification/types/index.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shared/services/notification/types/index.ts ***!
  \*********************************************************************/
/*! exports provided: Notification, NotificationType, NotificationOrigin, NotificationSeverity, NotificationUserAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.class */ "./src/app/modules/shared/services/notification/types/notification.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _notification_class__WEBPACK_IMPORTED_MODULE_0__["Notification"]; });

/* harmony import */ var _notification_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-type.enum */ "./src/app/modules/shared/services/notification/types/notification-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return _notification_type_enum__WEBPACK_IMPORTED_MODULE_1__["NotificationType"]; });

/* harmony import */ var _notification_origin_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-origin.enum */ "./src/app/modules/shared/services/notification/types/notification-origin.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationOrigin", function() { return _notification_origin_enum__WEBPACK_IMPORTED_MODULE_2__["NotificationOrigin"]; });

/* harmony import */ var _notification_severity_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-severity.enum */ "./src/app/modules/shared/services/notification/types/notification-severity.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationSeverity", function() { return _notification_severity_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationSeverity"]; });

/* harmony import */ var _notification_user_action_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification-user-action.enum */ "./src/app/modules/shared/services/notification/types/notification-user-action.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationUserAction", function() { return _notification_user_action_enum__WEBPACK_IMPORTED_MODULE_4__["NotificationUserAction"]; });








/***/ }),

/***/ "./src/app/modules/shared/services/notification/types/notification-origin.enum.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/services/notification/types/notification-origin.enum.ts ***!
  \****************************************************************************************/
/*! exports provided: NotificationOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationOrigin", function() { return NotificationOrigin; });
/**
 * Defines the origin of the notification.
 *
 * System initialized event or
 * user initialized event.
 */
var NotificationOrigin;
(function (NotificationOrigin) {
    NotificationOrigin[NotificationOrigin["SYSTEM"] = 0] = "SYSTEM";
    NotificationOrigin[NotificationOrigin["USER"] = 1] = "USER";
})(NotificationOrigin || (NotificationOrigin = {}));


/***/ }),

/***/ "./src/app/modules/shared/services/notification/types/notification-severity.enum.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/shared/services/notification/types/notification-severity.enum.ts ***!
  \******************************************************************************************/
/*! exports provided: NotificationSeverity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSeverity", function() { return NotificationSeverity; });
var NotificationSeverity;
(function (NotificationSeverity) {
    NotificationSeverity[NotificationSeverity["INFO"] = 0] = "INFO";
    NotificationSeverity[NotificationSeverity["ERROR"] = 1] = "ERROR";
    NotificationSeverity[NotificationSeverity["QUESTION"] = 2] = "QUESTION";
})(NotificationSeverity || (NotificationSeverity = {}));


/***/ }),

/***/ "./src/app/modules/shared/services/notification/types/notification-type.enum.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/services/notification/types/notification-type.enum.ts ***!
  \**************************************************************************************/
/*! exports provided: NotificationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["OK"] = 0] = "OK";
    NotificationType[NotificationType["OK_CANCEL"] = 1] = "OK_CANCEL";
    NotificationType[NotificationType["YES_NO"] = 2] = "YES_NO";
})(NotificationType || (NotificationType = {}));


/***/ }),

/***/ "./src/app/modules/shared/services/notification/types/notification-user-action.enum.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/shared/services/notification/types/notification-user-action.enum.ts ***!
  \*********************************************************************************************/
/*! exports provided: NotificationUserAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationUserAction", function() { return NotificationUserAction; });
var NotificationUserAction;
(function (NotificationUserAction) {
    NotificationUserAction[NotificationUserAction["PENDING"] = 0] = "PENDING";
    NotificationUserAction[NotificationUserAction["ACCEPTED"] = 1] = "ACCEPTED";
    NotificationUserAction[NotificationUserAction["DECLINED"] = 2] = "DECLINED";
})(NotificationUserAction || (NotificationUserAction = {}));


/***/ }),

/***/ "./src/app/modules/shared/services/notification/types/notification.class.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/services/notification/types/notification.class.ts ***!
  \**********************************************************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var _notification_origin_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-origin.enum */ "./src/app/modules/shared/services/notification/types/notification-origin.enum.ts");
/* harmony import */ var _notification_severity_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-severity.enum */ "./src/app/modules/shared/services/notification/types/notification-severity.enum.ts");
/* harmony import */ var _notification_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-type.enum */ "./src/app/modules/shared/services/notification/types/notification-type.enum.ts");
/* harmony import */ var _notification_user_action_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-user-action.enum */ "./src/app/modules/shared/services/notification/types/notification-user-action.enum.ts");




var Notification = /** @class */ (function () {
    function Notification() {
        this.severity = _notification_severity_enum__WEBPACK_IMPORTED_MODULE_1__["NotificationSeverity"].INFO;
        this.origin = _notification_origin_enum__WEBPACK_IMPORTED_MODULE_0__["NotificationOrigin"].SYSTEM;
        this.type = _notification_type_enum__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].OK;
        this.userAction = _notification_user_action_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationUserAction"].PENDING;
    }
    return Notification;
}());



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components */ "./src/app/modules/shared/components/index.ts");
/* harmony import */ var _data_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _local_data_provider_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./local-data-provider/services */ "./src/app/modules/shared/local-data-provider/services/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services */ "./src/app/modules/shared/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _components_navigation_cards__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/navigation-cards */ "./src/app/modules/shared/components/navigation-cards/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes */ "./src/app/modules/shared/pipes/index.ts");



















/*
 * define font awesome icon libraries
 */
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["fab"]); // add all icon types
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_14__["CurrentUserService"],
                _services__WEBPACK_IMPORTED_MODULE_14__["ErrorHandlingService"],
                _services__WEBPACK_IMPORTED_MODULE_14__["NotificationService"],
                _local_data_provider_services__WEBPACK_IMPORTED_MODULE_13__["LocalDataProviderService"],
                _local_data_provider_services__WEBPACK_IMPORTED_MODULE_13__["LocalStorageDataProvider"],
                _local_data_provider_services__WEBPACK_IMPORTED_MODULE_13__["SessionStorageDataProvider"],
                _data_provider__WEBPACK_IMPORTED_MODULE_12__["RestClient"]
            ]
        };
    };
    SharedModule.forChild = function () {
        return {
            ngModule: SharedModule_1,
            providers: []
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild(),
                _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_10__["StorageServiceModule"]
            ],
            exports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
                _components__WEBPACK_IMPORTED_MODULE_11__["ButtonComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["AlertComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["ModalDialogComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["PageHeadingComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbsComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["OverviewDialogComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["CommonDialogComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["DetailDialogComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["DataTableComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["TableEmptyPlaceholderComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["TableLoadingPlaceholderComponent"],
                _pipes__WEBPACK_IMPORTED_MODULE_18__["TruncationPipe"],
                _components__WEBPACK_IMPORTED_MODULE_11__["HorizontalFormComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["CenteredLayoutComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["ColLayoutComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["GridLayoutComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["RowLayoutComponent"],
                _components_navigation_cards__WEBPACK_IMPORTED_MODULE_17__["NavigationCardsComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["NavigationDialogComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["DropdownComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["VereineDropdownComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["NavigationDialogComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["TooltipComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["DropdownMenuComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["SelectionlistComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["QuicksearchListComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["DownloadButtonComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["SimpleOverviewDialogComponent"]
            ],
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_11__["ButtonComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["DropdownComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["VereineDropdownComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["AlertComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["ModalDialogComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["PageHeadingComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbsComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["OverviewDialogComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["CommonDialogComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["DetailDialogComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["DataTableComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["TableEmptyPlaceholderComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["TableLoadingPlaceholderComponent"],
                _pipes__WEBPACK_IMPORTED_MODULE_18__["TruncationPipe"],
                _components__WEBPACK_IMPORTED_MODULE_11__["HorizontalFormComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["CenteredLayoutComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["ColLayoutComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["GridLayoutComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["RowLayoutComponent"],
                _components_navigation_cards__WEBPACK_IMPORTED_MODULE_17__["NavigationCardsComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["NavigationDialogComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["SimpleOverviewDialogComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["TooltipComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["DropdownMenuComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["SelectionlistComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["QuicksearchListComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["DownloadButtonComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/modules/vereine/types/vereine-do.class.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/vereine/types/vereine-do.class.ts ***!
  \***********************************************************/
/*! exports provided: VereineDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereineDO", function() { return VereineDO; });
var VereineDO = /** @class */ (function () {
    function VereineDO() {
    }
    return VereineDO;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    label: 'TEST',
    backendBaseUrl: 'http://localhost:9000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/exxcellent/swt2-bsa-frontend/bogenliga/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map