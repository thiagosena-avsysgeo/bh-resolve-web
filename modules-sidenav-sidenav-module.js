(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-sidenav-sidenav-module"],{

/***/ "./src/app/modules/sidenav/components/sidenav.component.css":
/*!******************************************************************!*\
  !*** ./src/app/modules/sidenav/components/sidenav.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Navbar */\r\n\r\n.navbar-container {\r\n  display: flex;\r\n}\r\n\r\n.brand-container {\r\n  padding-left: 6px;\r\n}\r\n\r\n.user-menu-box {\r\n  padding: 8px;\r\n}\r\n\r\n.settings-menu-box {\r\n  width: 100%;\r\n}\r\n\r\n#financeiro-button-box\r\n{\r\n  height: 100%;\r\n  bottom: 0;\r\n}\r\n\r\n.mat-button-wrapper a:focus a:hover {\r\n  color: #fbfbfb;\r\n}\r\n\r\n#botao-cadastros-dashboard {\r\n  border-bottom: 3px solid #59ffd8;\r\n  width: 150px;\r\n  height: 100%;\r\n}\r\n\r\n#botao-financeiro-cadastros:hover {\r\n  background: #e0fcf5;\r\n}\r\n\r\n#botao-financeiro-cadasrtos {\r\n  border-bottom: 3px solid #7a99ff;\r\n  width: 150px;\r\n  height: 100%;\r\n}\r\n\r\n#botao-financeiro-cadastros:hover{\r\n  background: #e0e6f9;\r\n}\r\n\r\n#botao-financeiro-ficha {\r\n  border-bottom: 3px solid #c67cff;\r\n  width: 150px;\r\n  height: 100%;\r\n}\r\n\r\n#botao-financeiro-ficha:hover{\r\n  background: #eed8ff;\r\n}\r\n\r\n#botao-financeiro-recursos {\r\n  border-bottom: 3px solid #59ffd8;\r\n  width: 150px;\r\n  height: 100%;\r\n}\r\n\r\n#botao-financeiro-recursos:hover{\r\n  background: #e0fcf5;\r\n}\r\n\r\n#botao-financeiro-cadastros {\r\n  border-bottom: 3px solid #7a99ff;\r\n  width: 150px;\r\n  height: 100%;\r\n}\r\n\r\n#botao-financeiro-cadastros:hover{\r\n  background: #e0e6f9;\r\n}\r\n\r\n/* Sidenav */\r\n\r\n.sidenav {\r\n  width: 140px;\r\n}\r\n\r\n.sidenav-container {\r\n  top: 64px !important;\r\n  width: 100%;\r\n}\r\n\r\n.menu-button-item {\r\n  width: 100%;\r\n  text-align: left;\r\n  padding-top: 8px;\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.menu-button-icon {\r\n  margin-right: 8px;\r\n}\r\n\r\n.content-container {\r\n  padding: 8px;\r\n}\r\n\r\n.is-active-dashboard {\r\n  border-right: 3px solid #89f7ff !important;\r\n  background: #fbfbfb;\r\n}\r\n\r\n.is-active-ficha {\r\n  border-right: 3px solid #c67cff !important;\r\n  background: #fbfbfb;\r\n}\r\n\r\n.is-active-cadastros {\r\n  border-right: 3px solid #7a99ff !important;\r\n  background: #fbfbfb;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/sidenav/components/sidenav.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/sidenav/components/sidenav.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"navbar-container\" color=\"primary\">\r\n\r\n  <!-- Botão menu -->\r\n  <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"menu-button\">\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n  <div class=\"brand-container\">{{ title }}</div>\r\n\r\n  <!-- Spacer -->\r\n  <span style=\"flex: 1 1 auto\"></span>\r\n\r\n  <!-- Botões Barra Superior -->\r\n  <div id=\"cadastro-button-box\" *ngIf=\"router.url.includes('/app/cadastro')\">\r\n    <a mat-button *ngFor=\"let cadastroItem of cadastroMenuItems\" routerLink=\"{{ cadastroItem.route }}\" [id]=\"cadastroItem.color\">{{ cadastroItem.name }}\r\n      <!-- <mat-icon class=\"menu-button-icon\">{{ cadastroItem.icon }}</mat-icon> -->\r\n    </a>\r\n  </div>\r\n\r\n  <!-- Botões recurso -->\r\n  <!-- <div id=\"recurso-button-box\" *ngIf=\"false\">\r\n    <button mat-button>Item 1</button>\r\n    <button mat-button>Item 1</button>\r\n    <button mat-button>Item 1</button>\r\n  </div> -->\r\n\r\n  <button mat-icon-button class=\"menu-button\" [matMenuTriggerFor]=\"userMenu\">\r\n    <mat-icon>account_circle</mat-icon>\r\n  </button>\r\n\r\n  <!-- MENU DO USUÁRIO -->\r\n  <mat-menu #userMenu=\"matMenu\" overlapTrigger=\"false\">\r\n    <button mat-button style=\"width: 100%\" (click)=\"sair()\">Sair</button>\r\n    <!-- <div class=\"user-menu-box\">\r\n      TODO: Menu do usuário\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <div class=\"settings-menu-box\" align=\"right\">\r\n      <button mat-icon-button class=\"menu-button\">\r\n        <mat-icon>account_box</mat-icon>\r\n      </button>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <div class=\"settings-menu-box\" align=\"right\">\r\n      <button mat-icon-button class=\"menu-button\">\r\n        <mat-icon>settings</mat-icon>\r\n      </button>\r\n    </div> -->\r\n  </mat-menu>\r\n\r\n</mat-toolbar>\r\n\r\n<!-- Sidenav container -->\r\n<mat-sidenav-container class=\"sidenav-container\" fullscreen>\r\n\r\n  <!-- Sidenav -->\r\n  <mat-sidenav #sidenav mode=\"side\" opened=\"true\" class=\"sidenav\">\r\n    <a mat-button class=\"menu-button-item\" *ngFor=\"let item of menuItems\" routerLink=\"{{ item.route }}\" routerLinkActive=\"{{ item.isActive }}\">\r\n      <mat-icon class=\"menu-button-icon\">{{ item.icon }}</mat-icon>\r\n      <span>{{ item.name }}</span>\r\n    </a>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content class=\"content-container\">\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/sidenav/components/sidenav.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/sidenav/components/sidenav.component.ts ***!
  \*****************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = 'Belotur';
        this.menuItems = [
            { name: 'Relação', icon: 'list', route: '/app/cadastro/relacao-cadastros', isActive: 'is-active-ficha' },
            { name: 'Cadastro', icon: 'how_to_reg', route: '/app/cadastro/formulario', isActive: 'is-active-cadastros' },
            { name: 'Dashboard', icon: 'dashboard', route: '/app/cadastro/dashboard', isActive: 'is-active-dashboard' },
        ];
        this.cadastroMenuItems = [
            { name: 'Relação', icon: 'list', route: '/app/cadastro/relacao-cadastros', isActive: 'is-active-ficha' },
            { name: 'Cadastro', icon: 'how_to_reg', route: '/app/cadastro/formulario', isActive: 'is-active-cadastros' },
            { name: 'Dashboard', icon: 'dashboard', route: '/app/cadastro/dashboard', isActive: 'is-active-dashboard' },
        ];
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.sair = function () {
        this.authService.sair();
        this.router.navigate(['/login']);
    };
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/modules/sidenav/components/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/modules/sidenav/components/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/modules/sidenav/sidenav-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/sidenav/sidenav-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SidenavRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavRoutingModule", function() { return SidenavRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidenav.component */ "./src/app/modules/sidenav/components/sidenav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _components_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"], children: [
            { path: 'cadastro', loadChildren: '../cadastro/cadastro.module#CadastroModule' },
            { path: 'gerencial', loadChildren: '../gerencial/gerencial.module#GerencialModule' }
        ]
    }
];
var SidenavRoutingModule = /** @class */ (function () {
    function SidenavRoutingModule() {
    }
    SidenavRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], SidenavRoutingModule);
    return SidenavRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/sidenav/sidenav.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/sidenav/sidenav.module.ts ***!
  \***************************************************/
/*! exports provided: SidenavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavModule", function() { return SidenavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidenav.component */ "./src/app/modules/sidenav/components/sidenav.component.ts");
/* harmony import */ var _sidenav_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidenav-routing.module */ "./src/app/modules/sidenav/sidenav-routing.module.ts");
/* harmony import */ var _shared_material_components_material_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/material-components/material-components.module */ "./src/app/shared/material-components/material-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SidenavModule = /** @class */ (function () {
    function SidenavModule() {
    }
    SidenavModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sidenav_routing_module__WEBPACK_IMPORTED_MODULE_4__["SidenavRoutingModule"],
                _shared_material_components_material_components_module__WEBPACK_IMPORTED_MODULE_5__["MaterialComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            declarations: [
                _components_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"],
            ],
            exports: [
                _components_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"]
            ]
        })
    ], SidenavModule);
    return SidenavModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-sidenav-sidenav-module.js.map