"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require("./home/home.component");
var profile_component_1 = require("./profile/profile.component");
var technologyinfo_component_1 = require("./technologyinfo/technologyinfo.component");
var login_component_1 = require("./login/login.component");
var error404_component_1 = require("./error/error404.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'user/profile', component: profile_component_1.ProfileComponent },
    { path: 'technologyinfo/:id', component: technologyinfo_component_1.TechnologyInfoComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', component: error404_component_1.Error404Component }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map