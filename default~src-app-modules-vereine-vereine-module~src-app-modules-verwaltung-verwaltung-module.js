(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-modules-vereine-vereine-module~src-app-modules-verwaltung-verwaltung-module"],{

/***/ "./src/app/modules/verwaltung/mapper/dsb-mannschaft-mapper.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/verwaltung/mapper/dsb-mannschaft-mapper.ts ***!
  \********************************************************************/
/*! exports provided: fromPayload, fromPayloadArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayload", function() { return fromPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayloadArray", function() { return fromPayloadArray; });
/* harmony import */ var _types_datatransfer_dsb_mannschaft_dto_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/datatransfer/dsb-mannschaft-dto.class */ "./src/app/modules/verwaltung/types/datatransfer/dsb-mannschaft-dto.class.ts");

// export function toDO(mannschaftDTO: MannschaftDTO): MannschaftDO {
//
// }
//
// export function toDTO(mannschaftDO: MannschaftDO): MannschaftDTO {
//
// }
function fromPayload(payload) {
    return _types_datatransfer_dsb_mannschaft_dto_class__WEBPACK_IMPORTED_MODULE_0__["DsbMannschaftDTO"].copyFrom(payload);
}
function fromPayloadArray(payload) {
    var list = [];
    payload.forEach(function (single) { return list.push(fromPayload(single)); });
    return list;
}


/***/ }),

/***/ "./src/app/modules/verwaltung/mapper/region-mapper.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/verwaltung/mapper/region-mapper.ts ***!
  \************************************************************/
/*! exports provided: fromPayload, fromPayloadArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayload", function() { return fromPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPayloadArray", function() { return fromPayloadArray; });
/* harmony import */ var _types_datatransfer_region_dto_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/datatransfer/region-dto.class */ "./src/app/modules/verwaltung/types/datatransfer/region-dto.class.ts");

function fromPayload(payload) {
    return _types_datatransfer_region_dto_class__WEBPACK_IMPORTED_MODULE_0__["RegionDTO"].copyFrom(payload);
}
function fromPayloadArray(payload) {
    var list = [];
    payload.forEach(function (single) { return list.push(fromPayload(single)); });
    return list;
}


/***/ }),

/***/ "./src/app/modules/verwaltung/services/dsb-mannschaft-data-provider.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/verwaltung/services/dsb-mannschaft-data-provider.service.ts ***!
  \*************************************************************************************/
/*! exports provided: DsbMannschaftDataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsbMannschaftDataProviderService", function() { return DsbMannschaftDataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _mapper_dsb_mannschaft_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapper/dsb-mannschaft-mapper */ "./src/app/modules/verwaltung/mapper/dsb-mannschaft-mapper.ts");





var DsbMannschaftDataProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DsbMannschaftDataProviderService, _super);
    function DsbMannschaftDataProviderService(restClient, currentUserService) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.currentUserService = currentUserService;
        _this.serviceSubUrl = 'v1/dsbmannschaft';
        return _this;
    }
    DsbMannschaftDataProviderService.prototype.create = function (payload, payload2) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.POST(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).build(), payload)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_dsb_mannschaft_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
            }, function (error) {
                if (error.status === 0) {
                    reject({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].CONNECTION_PROBLEM });
                }
                else {
                    reject({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].FAILURE });
                }
            });
            _this.restClient.POST(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).build(), payload2)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_dsb_mannschaft_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    DsbMannschaftDataProviderService.prototype.deleteById = function (id) {
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
    DsbMannschaftDataProviderService.prototype.findAll = function () {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(_this.getUrl())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_dsb_mannschaft_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayloadArray"])(data) });
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
    DsbMannschaftDataProviderService.prototype.findById = function (id) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(id).build())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_dsb_mannschaft_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    DsbMannschaftDataProviderService.prototype.update = function (payload) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.PUT(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).build(), payload)
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_dsb_mannschaft_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayload"])(data) });
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
    DsbMannschaftDataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"], _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]])
    ], DsbMannschaftDataProviderService);
    return DsbMannschaftDataProviderService;
}(_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/services/region-data-provider.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/verwaltung/services/region-data-provider.service.ts ***!
  \*****************************************************************************/
/*! exports provided: RegionDataProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionDataProviderService", function() { return RegionDataProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-provider */ "./src/app/modules/shared/data-provider/index.ts");
/* harmony import */ var _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/current-user */ "./src/app/modules/shared/services/current-user/index.ts");
/* harmony import */ var _mapper_region_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapper/region-mapper */ "./src/app/modules/verwaltung/mapper/region-mapper.ts");





var RegionDataProviderService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RegionDataProviderService, _super);
    function RegionDataProviderService(restClient, currentUserService) {
        var _this = _super.call(this) || this;
        _this.restClient = restClient;
        _this.currentUserService = currentUserService;
        _this.serviceSubUrl = 'v1/regionen';
        return _this;
    }
    RegionDataProviderService.prototype.findAll = function () {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(_this.getUrl())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_region_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayloadArray"])(data) });
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
    RegionDataProviderService.prototype.findAllByType = function (type) {
        var _this = this;
        // return promise
        // sign in success -> resolve promise
        // sign in failure -> reject promise with result
        return new Promise(function (resolve, reject) {
            _this.restClient.GET(new _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["UriBuilder"]().fromPath(_this.getUrl()).path(type).build())
                .then(function (data) {
                resolve({ result: _shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RequestResult"].SUCCESS, payload: Object(_mapper_region_mapper__WEBPACK_IMPORTED_MODULE_4__["fromPayloadArray"])(data) });
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
    RegionDataProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["RestClient"], _shared_services_current_user__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]])
    ], RegionDataProviderService);
    return RegionDataProviderService;
}(_shared_data_provider__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]));



/***/ }),

/***/ "./src/app/modules/verwaltung/types/datatransfer/dsb-mannschaft-dto.class.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/datatransfer/dsb-mannschaft-dto.class.ts ***!
  \***********************************************************************************/
/*! exports provided: DsbMannschaftDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsbMannschaftDTO", function() { return DsbMannschaftDTO; });
var DsbMannschaftDTO = /** @class */ (function () {
    function DsbMannschaftDTO() {
    }
    DsbMannschaftDTO.copyFrom = function (optional) {
        if (optional === void 0) { optional = {}; }
        var copy = new DsbMannschaftDTO();
        // show '0' value
        if (optional.id >= 0) {
            copy.id = optional.id;
        }
        else {
            copy.id = null;
        }
        if (optional.benutzerId >= 0) {
            copy.benutzerId = optional.benutzerId;
        }
        else {
            copy.benutzerId = null;
        }
        if (optional.vereinId >= 0) {
            copy.vereinId = optional.vereinId;
        }
        else {
            copy.vereinId = null;
        }
        if (optional.veranstaltungID >= 0) {
            copy.veranstaltungID = optional.veranstaltungID;
        }
        else {
            copy.veranstaltungID = null;
        }
        copy.version = optional.version || null;
        copy.nummer = optional.nummer || '';
        return copy;
    };
    return DsbMannschaftDTO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/datatransfer/region-dto.class.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/datatransfer/region-dto.class.ts ***!
  \***************************************************************************/
/*! exports provided: RegionDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionDTO", function() { return RegionDTO; });
var RegionDTO = /** @class */ (function () {
    function RegionDTO() {
    }
    RegionDTO.copyFrom = function (optional) {
        if (optional === void 0) { optional = {}; }
        var copy = new RegionDTO();
        if (optional.id >= 0) {
            copy.id = optional.id;
        }
        else {
            copy.id = null;
        }
        if (optional.uebergeordnet >= 0) {
            copy.regionUebergeordnet = optional.uebergeordnet;
        }
        else {
            copy.regionUebergeordnet = null;
        }
        copy.regionName = optional.name || '';
        copy.regionKuerzel = optional.kuerzel || '';
        copy.regionTyp = optional.typ || '';
        copy.version = optional.version || null;
        return copy;
    };
    return RegionDTO;
}());



/***/ }),

/***/ "./src/app/modules/verwaltung/types/verein-do.class.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/verwaltung/types/verein-do.class.ts ***!
  \*************************************************************/
/*! exports provided: VereinDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VereinDO", function() { return VereinDO; });
var VereinDO = /** @class */ (function () {
    function VereinDO() {
    }
    return VereinDO;
}());



/***/ })

}]);
//# sourceMappingURL=default~src-app-modules-vereine-vereine-module~src-app-modules-verwaltung-verwaltung-module.js.map