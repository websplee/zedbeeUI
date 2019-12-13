(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-custom-auth-custom-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/custom-auth/custom-auth.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom-auth/custom-auth.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  custom-auth works!\n</p>\n"

/***/ }),

/***/ "./src/app/custom-auth/custom-auth-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/custom-auth/custom-auth-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomAuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAuthRoutingModule", function() { return CustomAuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");
/* harmony import */ var _loans_app_loans_resolve_user_resolve_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loans-app/loans/resolve-user/resolve-user.component */ "./src/app/loans-app/loans/resolve-user/resolve-user.component.ts");





const routes = [
    {
        path: '',
        component: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthComponent"],
        children: [
            {
                path: 'login',
                component: _loans_app_loans_resolve_user_resolve_user_component__WEBPACK_IMPORTED_MODULE_4__["ResolveUserComponent"],
            },
        ],
    },
];
let CustomAuthRoutingModule = class CustomAuthRoutingModule {
};
CustomAuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CustomAuthRoutingModule);



/***/ }),

/***/ "./src/app/custom-auth/custom-auth.component.scss":
/*!********************************************************!*\
  !*** ./src/app/custom-auth/custom-auth.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1hdXRoL2N1c3RvbS1hdXRoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/custom-auth/custom-auth.component.ts":
/*!******************************************************!*\
  !*** ./src/app/custom-auth/custom-auth.component.ts ***!
  \******************************************************/
/*! exports provided: CustomAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAuthComponent", function() { return CustomAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomAuthComponent = class CustomAuthComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-custom-auth',
        template: __webpack_require__(/*! raw-loader!./custom-auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom-auth/custom-auth.component.html"),
        styles: [__webpack_require__(/*! ./custom-auth.component.scss */ "./src/app/custom-auth/custom-auth.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CustomAuthComponent);



/***/ }),

/***/ "./src/app/custom-auth/custom-auth.module.ts":
/*!***************************************************!*\
  !*** ./src/app/custom-auth/custom-auth.module.ts ***!
  \***************************************************/
/*! exports provided: CustomAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAuthModule", function() { return CustomAuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _custom_auth_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-auth-routing.module */ "./src/app/custom-auth/custom-auth-routing.module.ts");
/* harmony import */ var _custom_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-auth.component */ "./src/app/custom-auth/custom-auth.component.ts");
/* harmony import */ var _loans_app_loans_loans_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loans-app/loans/loans.module */ "./src/app/loans-app/loans/loans.module.ts");










let CustomAuthModule = class CustomAuthModule {
};
CustomAuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_custom_auth_component__WEBPACK_IMPORTED_MODULE_8__["CustomAuthComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAlertModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCheckboxModule"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthModule"],
            _loans_app_loans_loans_module__WEBPACK_IMPORTED_MODULE_9__["LoansModule"],
            _custom_auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["CustomAuthRoutingModule"]
        ]
    })
], CustomAuthModule);



/***/ })

}]);
//# sourceMappingURL=app-custom-auth-custom-auth-module-es2015.js.map