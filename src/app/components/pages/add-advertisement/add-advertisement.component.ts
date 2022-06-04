import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdvertisementsService} from "../../../services/advertisements/advertisements.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.css']
})
export class AddAdvertisementComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]),
    content: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1000)])
  });
  serverError: boolean = false;

  constructor(private advertisement: AdvertisementsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.serverError = false;
    this.form.markAllAsTouched()
    if (this.form.valid) {
      this.advertisement.addAdvertisement(this.form.value).subscribe({
        next: (data) => {
          this.router.navigate(['advertisements']);
        },
        error: (error) => {
          this.serverError = true;
        }
      })
    }
  }

  getError(type: string) {
    console.log(type, this.form.get(type)?.errors);
    if (this.form.get(type)?.hasError('required')) {
      return 'This field is required';
    } else if (this.form.get(type)?.hasError('minlength')) {
      return 'This field must contain more than ' + this.form.get(type)?.getError('minlength')?.['requiredLength'] +
        ' characters';
    } else if (this.form.get(type)?.hasError('maxlength')) {
      return 'Length of this field must not exceed ' + this.form.get(type)?.getError('maxlength')?.['requiredLength'] +
        ' characters';
    }
    return ''
  }
}
