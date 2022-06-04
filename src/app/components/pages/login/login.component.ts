import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required])
  });
  serverError: string = '';

  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.serverError = '';
    this.form.markAllAsTouched();
    console.log("data", this.form.value)
    if(this.form.valid){
      this.auth.login(this.form.value).subscribe({
          next: (data) => {

            this.router.navigate(['users'])
          },
          error: (error) => {
            error = error?.error;
            if(error?.hasOwnProperty('message')){
              this.serverError = error.message;
            }
          }
        }
      );
    }

  }

  getErrorMessage(type: string) {
    if (this.form.get(type)?.hasError('required')) {
      return 'This field is required';
    } else if (this.form.get(type)?.hasError('email')){
      return "Email is not valid"
    } else if (this.form.get(type)?.hasError('minlength')){
      return 'This field must contain more than ' + this.form.get(type)?.getError('minlength')?.['requiredLength'] +
        ' characters';
    }
    return this.form.get(type)?.hasError(type) ? `Not a valid ${type}` : '';
  }
}
