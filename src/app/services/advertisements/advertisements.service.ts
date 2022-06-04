import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {domain} from "../../../assets/services";

export interface ParticularAdvertisement {
  "content": string,
  "creation_date": string,
  "dislikes": number,
  "likes": number,
  "title": string,
  "user_id": number
}

export interface NewAdvertisement{
  "title": string,
  "content": string,
  "user_id": number
}


@Injectable({
  providedIn: 'root'
})
export class AdvertisementsService {

  constructor(private http: HttpClient) { }

  getAllAdvertisements(){
    return this.http.get<[ParticularAdvertisement]>(domain + "advertisements")
  }

  addAdvertisement(newAdvertisementData: NewAdvertisement){
    return this.http.post(domain + "advertisements", newAdvertisementData);
  }
}
