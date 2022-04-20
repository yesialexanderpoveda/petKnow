
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {


 BaseApiCats = "https://api.thecatapi.com/v1/images/search?limit=10&order=Desc&page=1&category_ids=";

 /*
 
 categories 
 
 Funny = 3;
 Clothes = 15;
 Boxes = 5;
 ties = 7; 
 
 */
  constructor(private http: HttpClient ) {}


  getFunny(){

    let funny = `${this.BaseApiCats}3`;
     return this.http.get(funny);
  }

  getCategory(categories: string){
    let url = `${this.BaseApiCats}${categories}`
    return this.http.get(url);
  }


  getCat(){
     
     
  }

  
}
