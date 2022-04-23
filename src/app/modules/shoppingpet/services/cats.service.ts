
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cats, CategoryCat } from '../models/models.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {


 BaseApiCats = "https://api.thecatapi.com/v1/images/search?limit=3&order=Desc&page=";

 
 
  constructor(private http: HttpClient ) {}



  getCategory(pag: string, categories: string){
    let url = `${this.BaseApiCats}${pag}&category_ids=${categories}`
    return this.http.get<Cats>(url);
  }




  
}
