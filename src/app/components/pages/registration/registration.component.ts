import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstname: new FormControl('',[Validators.minLength(2), Validators.maxLength(20)]),
    lastname: new FormControl('',[Validators.minLength(2)]),
    email: new FormControl('', [Validators.email, Validators.required,Validators.minLength(7)]),
    phone_number: new FormControl('',[Validators.minLength(1)]),
    country: new FormControl('',[Validators.minLength(2)]),
    city: new FormControl('',[Validators.minLength(2)]),
    district: new FormControl('',[Validators.minLength(2)]),
    address: new FormControl('',[Validators.minLength(2)]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      console.log("data", this.form.value)
      this.auth.registration(this.form.value).subscribe( data =>{
          console.log("data", data);
        }
      );
    }
}

  getErrorMessage(type: string) {
    if (this.form.get(type)?.hasError('required')) {
      return 'This field is required';
    } else if (this.form.get(type)?.hasError('minlength')) {
      return 'This field must contain more than ' + this.form.get(type)?.getError('minlength')?.['requiredLength'] +
        ' characters';}

    return this.form.get(type)?.hasError(type) ? `Not a valid ${type}` : '';
  }



}
