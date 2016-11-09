import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AuthService } from '../service/auth.service';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from "./appheader/appheader.component";
import { AppFooterComponent } from "./appfooter/appfooter.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { TechnologyInfoComponent } from "./technologyinfo/technologyinfo.component";
import { Error404Component } from "./error/error404.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";

@NgModule({
  imports: [ FormsModule, ReactiveFormsModule, BrowserModule, HttpModule, JsonpModule, routing ],
  declarations: [
     AppComponent,  AppHeaderComponent, AppFooterComponent,
     HomeComponent, ProfileComponent, TechnologyInfoComponent, LoginComponent,
     LogoutComponent, Error404Component
  ],
  providers:[
    AuthService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
