import { Component, OnInit } from '@angular/core';
import { CatsService } from '../../services/cats.service';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
 
  filter_Cats: number = 0;
  catsFilter: number = 0;
  cats: string[] = [];
  message!: string;
  constructor(private catService: CatsService) { }

  catsforsubmenu: any[] = this.catService.filters
  ngOnInit(): void {

    this.getCategories(this.catsFilter)
    
  }

  filterCats(cat: any){
   
    this.filter_Cats = cat
    this.catService.getCategory(this.filter_Cats, this.catsFilter).subscribe((filter: any) => {
      this.cats = Object.values(filter).map((val: any) => {
        return val.url

      })

    })


    
  }
  changeCat(cat: any) {

    if (cat == 0) {

      this.catsFilter = 3
      this.getCategories(this.catsFilter)

    } else {

      let a = this.catsforsubmenu.filter(name => cat === name.name);
      this.catsFilter = a[0].id
      this.getCategories(this.catsFilter);

    }
    
  }

  getCategories(cat: any) {

    
    if (this.catsFilter == 0) {

      this.catsFilter = 3;

    } else {

      this.catsFilter = cat;

    }

    this.catService.getCategory(this.filter_Cats, this.catsFilter).subscribe((filter: any) => {
      this.cats = Object.values(filter).map((val: any) => {
        return val.url

      })

    })


  }


}

