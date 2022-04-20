import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DogsService {

  race!: string
  
  constructor(private http: HttpClient) { }

  getBase(){
    this.race = "english"
    let BaseApiDog = `https://dog.ceo/api/breed/hound/${this.race}/images`
    return this.http.get(BaseApiDog);
  }


}
