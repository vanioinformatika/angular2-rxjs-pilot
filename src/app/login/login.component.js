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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var auth_service_1 = require("../../service/auth.service");
var LoginComponent = (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.email = new forms_1.FormControl();
        this.password = new forms_1.FormControl();
    }
    LoginComponent.prototype.loginButtonHandler = function (event) {
        this.requestLogin();
    };
    LoginComponent.prototype.requestLogin = function () {
        console.log("Login:", this.email.value, this.password.value);
        var creds = {
            email: this.email.value,
            password: this.password.value
        };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        var options = new http_1.RequestOptions({
            headers: headers,
            body: JSON.stringify(creds)
        });
        this.authService.requestLogin('/login', options)
            .subscribe(function (data) {
            console.log("JWT:", data);
        }, function (err) {
            console.log(err);
        }, function () { return console.log("Done"); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: 'login.component.html',
        providers: [auth_service_1.AuthService],
        styles: []
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map