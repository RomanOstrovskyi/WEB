// import {Injectable} from '@angular/core';
// import {HttpClient} from "@angular/common/http";
// import {formatNumber} from "@angular/common";
//
// export interface LoginData {
//
// }
//
// export interface RegistrationData{
//
// }
//
// @Injectable({
//   providedIn: 'root'
// })
//
// export class AuthService {
//
//   constructor(private http: HttpClient) {
//   }
//
//   backendUrl = 'http://127.0.0.1:5000/'
//
//   login(data: LoginData) {
//     console.log("Login data from service", data);
//     return this.http.post<{
//       id: number
//     }>(this.backendUrl + "auth", data);
//   }
//
//   registration(data: RegistrationData){
//     console.log("Registration data from service", data);
//     return this.http.post<{
//       id: number
//     }>(this.backendUrl + "registration", data);
//   }
// }

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

export interface LoginData {
  email: string,
  password: string
}

export interface RegistrationData{

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookie: CookieService) {
  }
  backendUrl = 'http://127.0.0.1:5000/'

  login(data: LoginData) {
    console.log("Login data from service", data);
    this.cookie.set('credentials', btoa(data.email + ":" + data.password), 3600 * 24);
    return this.http.post<{
      id: number
    }>(this.backendUrl + "auth", data);
  }

  getToken(){
    console.log("credentials", this.cookie.get('credentials'))
    return this.cookie.get('credentials');
  }

  registration(data: RegistrationData){
    console.log("Registration data from service", data);
    return this.http.post<{
      id: number
    }>(this.backendUrl + "registration", data);
  }
}
