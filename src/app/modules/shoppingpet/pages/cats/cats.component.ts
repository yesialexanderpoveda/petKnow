import { Component, OnInit } from '@angular/core';
import { CatsService} from '../../services/cats.service';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  titles = ["Ropa","Cajas","Corbata"]

  cats: string[] = [];
  message!: string;
  constructor(private catService: CatsService) { }

  ngOnInit(): void {
    this.getCategories()
    this.getFilter()
   }

  
  getFilter(){
  /* console.log(this.catService.filters)
   */
    
  }

  getCategories(){
   this.catService.getCategory('1','3').subscribe((filter: any) =>{
     Object.values(filter).map((val: any)=>{
         this.cats.push(val.url)
        
        })
      
   })  
}



}
