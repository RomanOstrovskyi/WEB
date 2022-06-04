import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatRipple} from "@angular/material/core";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() fullName: string = '';
  @Input() email: string = '';
  @Input() country: string = '';
  @ViewChild(MatRipple) ripple: MatRipple = {} as MatRipple;

  constructor() {
  }

  ngOnInit(): void {
  }

  /** Shows a centered and persistent ripple. */
  launchRipple() {
    const rippleRef = this.ripple.launch({
      persistent: true,
      centered: true
    });

    // Fade out the ripple later.
    rippleRef.fadeOut();
  }


}
