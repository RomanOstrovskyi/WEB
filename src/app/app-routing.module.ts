import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/pages/login/login.component";
import {RegistrationComponent} from "./components/pages/registration/registration.component";
import {AllUsersComponent} from "./components/pages/all-users/all-users.component";
import {AllAdvertisementsComponent} from "./components/pages/all-advertisements/all-advertisements.component";
import {AddAdvertisementComponent} from "./components/pages/add-advertisement/add-advertisement.component";
import {BasicAuthGuardGuard} from "./services/guard/basic-auth-guard.guard";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "users", component: AllUsersComponent, canActivate:[BasicAuthGuardGuard]},
  {path: "advertisements", component: AllAdvertisementsComponent, canActivate:[BasicAuthGuardGuard]},
  {path: "add_advertisement", component: AddAdvertisementComponent, canActivate:[BasicAuthGuardGuard]}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
