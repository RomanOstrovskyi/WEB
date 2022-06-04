import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { RegistrationComponent } from './components/pages/registration/registration.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ProfileComponent } from './components/pages/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AllUsersComponent} from "./components/pages/all-users/all-users.component";
import {AllAdvertisementsComponent} from "./components/pages/all-advertisements/all-advertisements.component";
import {AddAdvertisementComponent} from "./components/pages/add-advertisement/add-advertisement.component";
import {AllUsersModule} from "./components/pages/all-users/all-users.module";
import {AllAdvertisementsModule} from "./components/pages/all-advertisements/all-advertisements.module";
import {BasicInterceptor} from "./services/interceptors/basic.interceptor";
import {BasicAuthGuardGuard} from "./services/guard/basic-auth-guard.guard";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    NavbarComponent,
    AllUsersComponent,
    AllAdvertisementsComponent,
    AddAdvertisementComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    MatCheckboxModule,
    AllUsersModule,
    AllAdvertisementsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicInterceptor,
      multi: true
    },BasicAuthGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
