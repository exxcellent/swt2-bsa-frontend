(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/modules/user/mapper/user-profile-mapper.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/user/mapper/user-profile-mapper.ts ***!
  \************************************************************/
/*! exports provided: fromPayload, fromPayloadArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayload", function() { return fromPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayloadArray", function() { return fromPayloadArray; });
/* harmony import */ var _types_model_user_profile_dto_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/model/user-profile-dto.class */ "./src/app/modules/user/types/model/user-profile-dto.class.ts");

function fromPayload(payload) {
    return _types_model_user_profile_dto_class__WEBPACK_IMPORTED_MODULE_0__["UserProfileDTO"].copyFrom(payload);
}
function fromPayloadArray(payload) {
    var list = [];
    payload.forEach(function (single) { return list.push(fromPayload(single)); });
    return list;
}


/***/ }),

/***/ "./src/app/modules/user/services/user-profile-data-provider.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user/services/user-profile-data-provider.service.ts ***!
  \*****************************************************************************/
/*! exports provided: UserProfileDataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileDataProviderService", function() { return UserProfileDataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _mapper_user_profile_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapper/user-profile-mapper */ "./src/app/modules/user/mapper/user-profile-mapper.ts");





var UserProfileDataProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserProfileDataProviderService, _super);
    function UserProfileDataProviderService(restClient, currentUserService) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.currentUserService = currentUserService;
        _this.serviceSubUrl = 'v1/user';
        return _this;
    }
    UserProfileDataProviderService.prototype.findAll = function () {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(_this.getUrl())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_user_profile_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayloadArray"])(data) });
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
    UserProfileDataProviderService.prototype.findById = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(id).build())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_user_profile_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    UserProfileDataProviderService.prototype.findCurrentUserProfile = function () {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        var id = this.currentUserService.getUserId();
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(id).build())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_user_profile_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    UserProfileDataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"], _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]])
    ], UserProfileDataProviderService);
    return UserProfileDataProviderService;
}(_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]));



/***/ }),

/***/ "./src/app/modules/user/types/credentials-do.class.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/user/types/credentials-do.class.ts ***!
  \************************************************************/
/*! exports provided: CredentialsDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialsDO", function() { return CredentialsDO; });
var CredentialsDO = /** @class */ (function () {
    function CredentialsDO(username, password) {
        this.rememberMe = false;
        this.username = !!username ? username : '';
        this.password = !!password ? password : '';
    }
    return CredentialsDO;
}());



/***/ }),

/***/ "./src/app/modules/user/types/model/credentials-dto.class.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/user/types/model/credentials-dto.class.ts ***!
  \*******************************************************************/
/*! exports provided: CredentialsDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialsDTO", function() { return CredentialsDTO; });
var CredentialsDTO = /** @class */ (function () {
    function CredentialsDTO(username, password) {
        this.username = username;
        this.password = password;
    }
    return CredentialsDTO;
}());



/***/ }),

/***/ "./src/app/modules/user/types/model/user-profile-dto.class.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/user/types/model/user-profile-dto.class.ts ***!
  \********************************************************************/
/*! exports provided: UserProfileDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileDTO", function() { return UserProfileDTO; });
var UserProfileDTO = /** @class */ (function () {
    function UserProfileDTO() {
    }
    UserProfileDTO.copyFrom = function (optional) {
        if (optional === void 0) { optional = {}; }
        var copy = new UserProfileDTO();
        // show '0' value
        if (optional.id >= 0) {
            copy.id = optional.id;
        }
        else {
            copy.id = null;
        }
        copy.vorname = optional.vorname || '';
        copy.nachname = optional.nachname || '';
        copy.email = optional.email || '';
        copy.geburtsdatum = optional.geburtsdatum || '';
        copy.nationalitaet = optional.nationalitaet || '';
        copy.mitgliedsnummer = optional.mitgliedsnummer || '';
        copy.vereinsId = optional.vereinsId || null;
        copy.userId = optional.userId || null;
        copy.version = optional.version || null;
        return copy;
    };
    return UserProfileDTO;
}());



/***/ }),

/***/ "./src/app/modules/user/types/user-profile-do.class.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/user/types/user-profile-do.class.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileDO", function() { return UserProfileDO; });
var UserProfileDO = /** @class */ (function () {
    function UserProfileDO() {
    }
    return UserProfileDO;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map