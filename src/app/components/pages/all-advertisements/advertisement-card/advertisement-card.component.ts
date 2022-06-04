import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-advertisement-card',
  templateUrl: './advertisement-card.component.html',
  styleUrls: ['./advertisement-card.component.css']
})
export class AdvertisementCardComponent implements OnInit {
  panelOpenState = false;
  @Input() title: string = '';
  @Input() content: string = '';

  constructor() { }

  ngOnInit(): void {

    console.log();
  }

}
