import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { LikeIconComponent } from './like-icon/like-icon.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    LikeIconComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
  ],
  providers: [],
  exports: [
    LikeIconComponent
  ],
})

export class AdvertisementCardModule {
}
