import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dogs } from '../models/models.interface';
@Injectable({
  providedIn: 'root'
})
export class DogsService {
  

  constructor(private http: HttpClient) { }
  
  

  getBase(filter: string){

    let BaseApiDog = `https://dog.ceo/api/breed/hound/${filter}/images`
  
    
    return this.http.get<Dogs>(BaseApiDog);
  }


}
