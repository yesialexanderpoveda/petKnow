import { Component, OnInit } from '@angular/core';
import { CatsService} from '../../services/cats.service';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  
  cats: string[] = [];
  message!: string;
  constructor(private catService: CatsService) { }

  catsforsubmenu: any[] = this.catService.filters
  ngOnInit(): void {
    this.getCategories()
    this.getFilter()
   }

  
  getFilter(){
   console.log(this.catsforsubmenu, 'submenu of cats');
   
    
  }
  changeCat(cat: any) {
    console.log(cat, 'from submenu cats');
}
  getCategories(){
   this.catService.getCategory('1','3').subscribe((filter: any) =>{
     Object.values(filter).map((val: any)=>{
         this.cats.push(val.url)
        
        })
      
   })  
}



}
