"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var auth_service_1 = require('../../service/auth.service');
var LogoutComponent = (function () {
    function LogoutComponent(authService) {
        //Injectalva van
        this.authService = null;
        //Szulo komponjenstol jon
        this.user = {};
        this.authService = authService;
    }
    LogoutComponent.prototype.requestLogout = function () {
        this.authService.requestLogout(this.user, "/api/logout").subscribe(this.logoutHandler);
    };
    LogoutComponent.prototype.logoutHandler = function () {
        console.log('Logout ok!');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LogoutComponent.prototype, "user", void 0);
    LogoutComponent = __decorate([
        core_1.Component({
            selector: 'logout',
            templateUrl: 'logout.component.html',
            providers: [auth_service_1.AuthService],
            styles: []
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;
//# sourceMappingURL=logout.component.js.map