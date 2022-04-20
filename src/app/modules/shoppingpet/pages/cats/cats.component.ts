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

  ngOnInit(): void {
    this.getFunny();
   }

  getFunny(){
   
    this.catService.getFunny().subscribe((data: any) => {
        data.map((dta: any)=>{
          let Cats = Object.values(dta.url).join('');
           this.cats.push(Cats)
        })
    })
    
   console.log(this.cats)
    
  }

  getCategories(categories: any){
  this.catService.getCategory(categories).subscribe((data) => {
    console.log(data)
  })
}



}
