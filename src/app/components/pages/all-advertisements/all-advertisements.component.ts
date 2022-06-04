import { Component, OnInit } from '@angular/core';
import {AdvertisementsService, ParticularAdvertisement} from "../../../services/advertisements/advertisements.service";

@Component({
  selector: 'app-all-advertisements',
  templateUrl: './all-advertisements.component.html',
  styleUrls: ['../background-rectangle.css', './all-advertisements.component.css']
})
export class AllAdvertisementsComponent implements OnInit {
  allAdvertisements: Array<ParticularAdvertisement> = [];
  constructor(private advertisement: AdvertisementsService) { }

  ngOnInit(): void {
    this.advertisement.getAllAdvertisements().subscribe(data => {
      this.allAdvertisements = data;
    })
  }

}
