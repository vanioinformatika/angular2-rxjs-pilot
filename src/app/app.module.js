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
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var common_2 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var auth_service_1 = require("../service/auth.service");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var appheader_component_1 = require("./appheader/appheader.component");
var appfooter_component_1 = require("./appfooter/appfooter.component");
var home_component_1 = require("./home/home.component");
var profile_component_1 = require("./profile/profile.component");
var technologyinfo_component_1 = require("./technologyinfo/technologyinfo.component");
var error404_component_1 = require("./error/error404.component");
var login_component_1 = require("./login/login.component");
var logout_component_1 = require("./logout/logout.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule, platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule, app_routing_1.routing],
        declarations: [
            app_component_1.AppComponent, appheader_component_1.AppHeaderComponent, appfooter_component_1.AppFooterComponent,
            home_component_1.HomeComponent, profile_component_1.ProfileComponent, technologyinfo_component_1.TechnologyInfoComponent, login_component_1.LoginComponent,
            logout_component_1.LogoutComponent, error404_component_1.Error404Component
        ],
        providers: [
            auth_service_1.AuthService,
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            { provide: common_2.APP_BASE_HREF, useValue: '/' }
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map