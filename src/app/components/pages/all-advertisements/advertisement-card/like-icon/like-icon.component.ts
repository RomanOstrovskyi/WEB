import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-like-icon',
  templateUrl: './like-icon.component.html',
  styleUrls: ['./like-icon.component.css']
})
export class LikeIconComponent implements OnInit {
  hover: boolean = false;
  click: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onHover() {
    this.hover = true;
  }

  onHoverOut(){
    this.hover = false;
  }

  onClick(){
    this.click = !this.click;
  }

}
