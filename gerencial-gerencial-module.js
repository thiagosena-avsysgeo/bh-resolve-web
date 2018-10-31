(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gerencial-gerencial-module"],{

/***/ "./src/app/modules/gerencial/component/gerencial-layout/gerencial-layout.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/gerencial/component/gerencial-layout/gerencial-layout.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/gerencial/component/gerencial-layout/gerencial-layout.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/gerencial/component/gerencial-layout/gerencial-layout.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <div fxFlex=\"1 1 auto\"></div>\r\n  <h2 class=\"section-header\">{{ titulo }}</h2>\r\n  <div fxFlex=\"1 1 auto\"></div>\r\n</mat-toolbar>\r\n<br>\r\n\r\n<mat-card>\r\n  <h3>Gerenciar Usuários</h3>\r\n  <br>\r\n  <mat-card-content>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n\r\n        <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" matSort>\r\n\r\n          <!-- Checkbox -->\r\n          <ng-container matColumnDef=\"Selecao\">\r\n            <mat-header-cell *matHeaderCellDef>\r\n              <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                [indeterminate]=\"selection.hasValue() && !isAllSelected()\" color=\"primary\">\r\n              </mat-checkbox>\r\n            </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">\r\n              <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\r\n                [checked]=\"selection.isSelected(row)\" color=\"primary\">\r\n              </mat-checkbox>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Id Column -->\r\n          <ng-container matColumnDef=\"id\">\r\n            <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let usuario\"> {{usuario.id}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- nome Column -->\r\n          <ng-container matColumnDef=\"nome\">\r\n            <mat-header-cell *matHeaderCellDef> NOME </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let usuario\"> {{usuario.nome}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- cpf Column -->\r\n          <ng-container matColumnDef=\"cpf\">\r\n            <mat-header-cell *matHeaderCellDef> CPF </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let usuario\"> {{usuario.cpf}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Permissões Column -->\r\n          <ng-container matColumnDef=\"tipo\">\r\n            <mat-header-cell *matHeaderCellDef> TIPO </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let usuario\"> {{usuario.tipo}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Email Column -->\r\n          <ng-container matColumnDef=\"email\">\r\n            <mat-header-cell *matHeaderCellDef> E-MAIL </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let usuario\"> {{usuario.email}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Botão editar -->\r\n          <ng-container matColumnDef=\"Editar\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Editar</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\" class=\"action-cell\">\r\n              <button mat-icon-button (click)=\"editarPermissao(row)\">\r\n                <mat-icon>edit</mat-icon>\r\n              </button>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Botão excluir -->\r\n          <ng-container matColumnDef=\"Excluir\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Excluir</mat-header-cell>,\r\n            <mat-cell *matCellDef=\"let row\" class=\"action-cell\">\r\n              <button mat-icon-button (click)=\"deletarUsuario(row)\">\r\n                <mat-icon>delete</mat-icon>\r\n              </button>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n\r\n        <mat-paginator [pageSizeOptions]=\"[10, 15, 20]\"></mat-paginator>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<br>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/modules/gerencial/component/gerencial-layout/gerencial-layout.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/gerencial/component/gerencial-layout/gerencial-layout.component.ts ***!
  \********************************************************************************************/
/*! exports provided: GerencialLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerencialLayoutComponent", function() { return GerencialLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GerencialLayoutComponent = /** @class */ (function () {
    function GerencialLayoutComponent() {
        this.titulo = 'Painel de Gestão';
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
        this.displayedColumns = ['Selecao', 'id', 'nome', 'cpf', 'tipo', 'email', 'Editar', 'Excluir'];
        this.dataSource = ELEMENT_DATA;
    }
    GerencialLayoutComponent.prototype.ngOnInit = function () {
    };
    GerencialLayoutComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.length;
        return numSelected === numRows;
    };
    GerencialLayoutComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.forEach(function (row) { return _this.selection.select(row); });
    };
    GerencialLayoutComponent.prototype.editarPermissao = function () {
    };
    GerencialLayoutComponent.prototype.deletarUsuario = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], GerencialLayoutComponent.prototype, "paginator", void 0);
    GerencialLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gerencial-layout',
            template: __webpack_require__(/*! ./gerencial-layout.component.html */ "./src/app/modules/gerencial/component/gerencial-layout/gerencial-layout.component.html"),
            styles: [__webpack_require__(/*! ./gerencial-layout.component.css */ "./src/app/modules/gerencial/component/gerencial-layout/gerencial-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GerencialLayoutComponent);
    return GerencialLayoutComponent;
}());

var ELEMENT_DATA = [
    { id: 1, nome: 'Administrador1', cpf: 11111111111, tipo: 'administrador', email: 'teste1@teste.com' },
    { id: 2, nome: 'Administrador2', cpf: 11111111112, tipo: 'administrador', email: 'teste2@teste.com' },
    { id: 3, nome: 'Atendente1', cpf: 11111111113, tipo: 'atendente', email: 'teste3@teste.com' },
    { id: 4, nome: 'Atendente2', cpf: 11111111114, tipo: 'atendente', email: 'teste4@teste.com' },
    { id: 5, nome: 'Atendente3', cpf: 11111111115, tipo: 'atendente', email: 'teste5@teste.com' },
];


/***/ }),

/***/ "./src/app/modules/gerencial/component/gerencial/gerencial.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/gerencial/component/gerencial/gerencial.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/gerencial/component/gerencial/gerencial.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/gerencial/component/gerencial/gerencial.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Gerencial-Works</p>\r\n"

/***/ }),

/***/ "./src/app/modules/gerencial/component/gerencial/gerencial.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/gerencial/component/gerencial/gerencial.component.ts ***!
  \******************************************************************************/
/*! exports provided: GerencialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerencialComponent", function() { return GerencialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GerencialComponent = /** @class */ (function () {
    function GerencialComponent() {
        this.titulo = 'Painel de Gestão';
    }
    GerencialComponent.prototype.ngOnInit = function () {
    };
    GerencialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gerencial',
            template: __webpack_require__(/*! ./gerencial.component.html */ "./src/app/modules/gerencial/component/gerencial/gerencial.component.html"),
            styles: [__webpack_require__(/*! ./gerencial.component.css */ "./src/app/modules/gerencial/component/gerencial/gerencial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GerencialComponent);
    return GerencialComponent;
}());



/***/ }),

/***/ "./src/app/modules/gerencial/gerencial-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/gerencial/gerencial-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: GerencialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerencialRoutingModule", function() { return GerencialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_gerencial_gerencial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/gerencial/gerencial.component */ "./src/app/modules/gerencial/component/gerencial/gerencial.component.ts");
/* harmony import */ var _component_gerencial_layout_gerencial_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/gerencial-layout/gerencial-layout.component */ "./src/app/modules/gerencial/component/gerencial-layout/gerencial-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _component_gerencial_layout_gerencial_layout_component__WEBPACK_IMPORTED_MODULE_3__["GerencialLayoutComponent"], children: [
            { path: 'gerencial', component: _component_gerencial_gerencial_component__WEBPACK_IMPORTED_MODULE_2__["GerencialComponent"] },
        ]
    }
];
var GerencialRoutingModule = /** @class */ (function () {
    function GerencialRoutingModule() {
    }
    GerencialRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], GerencialRoutingModule);
    return GerencialRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/gerencial/gerencial.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/gerencial/gerencial.module.ts ***!
  \*******************************************************/
/*! exports provided: GerencialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerencialModule", function() { return GerencialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _gerencial_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gerencial-routing.module */ "./src/app/modules/gerencial/gerencial-routing.module.ts");
/* harmony import */ var _component_gerencial_gerencial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/gerencial/gerencial.component */ "./src/app/modules/gerencial/component/gerencial/gerencial.component.ts");
/* harmony import */ var _shared_material_components_material_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/material-components/material-components.module */ "./src/app/shared/material-components/material-components.module.ts");
/* harmony import */ var _component_gerencial_layout_gerencial_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/gerencial-layout/gerencial-layout.component */ "./src/app/modules/gerencial/component/gerencial-layout/gerencial-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var GerencialModule = /** @class */ (function () {
    function GerencialModule() {
    }
    GerencialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _gerencial_routing_module__WEBPACK_IMPORTED_MODULE_3__["GerencialRoutingModule"],
                _shared_material_components_material_components_module__WEBPACK_IMPORTED_MODULE_5__["MaterialComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            declarations: [
                _component_gerencial_gerencial_component__WEBPACK_IMPORTED_MODULE_4__["GerencialComponent"],
                _component_gerencial_layout_gerencial_layout_component__WEBPACK_IMPORTED_MODULE_6__["GerencialLayoutComponent"]
            ],
            bootstrap: [_component_gerencial_gerencial_component__WEBPACK_IMPORTED_MODULE_4__["GerencialComponent"]],
        })
    ], GerencialModule);
    return GerencialModule;
}());



/***/ })

}]);
//# sourceMappingURL=gerencial-gerencial-module.js.map