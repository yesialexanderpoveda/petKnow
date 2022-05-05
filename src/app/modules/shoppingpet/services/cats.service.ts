
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cats } from '../models/models.interface';

@Injectable({
  providedIn: 'root'
})
export class CatsService {


 BaseApiCats = "https://api.thecatapi.com/v1/images/search?limit=3&order=Desc&page=";

 filters = [

  {id: 1, name: "Sombreros"}, 
  {id: 15, name: "Ropa" },
  {id: 5, name: "Boxes"},
  {id: 7, name: "Ties"}
  
 
]
  constructor
  ( private http: HttpClient) { }



  getCategory(pag: number, categories: number):Observable<any>{
    let url = `${this.BaseApiCats}${pag}&category_ids=${categories}`
    return this.http.get<Cats>(url);
  }
  
  
    
  getFunny(){
        return this.filters
      }
    
  
    
  }




  

