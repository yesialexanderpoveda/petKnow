import { Component, OnInit } from '@angular/core';
import { CatsService} from '../../services/cats.service';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  message!: string;
  constructor(private catService: CatsService) { }


  getFunny(){
   
    this.catService.getFunny().subscribe((data) => {
      console.log(data)
    })
    
  }

  getCategories(categories: any){
  this.catService.getCategory(categories).subscribe((data) => {
    console.log(data)
  })
}

  ngOnInit(): void {
   this.getFunny();
  }

}
