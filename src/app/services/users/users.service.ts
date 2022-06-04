import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {domain} from "../../../assets/services";

export interface ParticularUser {
  "city": string,
  "country": string,
  "district": string,
  "email": string,
  "firstname": string,
  "lastname": string,
  "phone_number": string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    return this.http.get<[ParticularUser]>(domain + 'users');
  }
}
