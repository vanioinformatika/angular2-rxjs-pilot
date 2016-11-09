import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { TechnologyInfoComponent } from "./technologyinfo/technologyinfo.component";
import { LoginComponent } from "./login/login.component";
import { Error404Component } from "./error/error404.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/profile', component: ProfileComponent },
  { path: 'technologyinfo/:id', component: TechnologyInfoComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: Error404Component }
];
export const routing = RouterModule.forRoot(routes);
