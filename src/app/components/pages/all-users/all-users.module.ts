import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { UserCardComponent } from './user-card/user-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatRippleModule} from "@angular/material/core";


@NgModule({
  declarations: [
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatRippleModule,
  ],
  providers: [],
  exports: [
    UserCardComponent
  ],
})

export class AllUsersModule {
}
