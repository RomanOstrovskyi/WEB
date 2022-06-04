import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AdvertisementCardComponent } from './advertisement-card/advertisement-card.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {AdvertisementCardModule} from "./advertisement-card/advertisement-card.module";


@NgModule({
  declarations: [
    AdvertisementCardComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    MatIconModule,
    AdvertisementCardModule,
  ],
  providers: [],
  exports: [
    AdvertisementCardComponent
  ],
})

export class AllAdvertisementsModule {
}
