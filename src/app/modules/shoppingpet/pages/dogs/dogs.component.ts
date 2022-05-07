import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';
import { Store } from '@ngrx/store';
import { petShop } from 'src/app/ngrx/actions/car.actions';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {


  filter!: string;
  data: number = 0;
  dogs!: any[];

  pagination: any[] = [];

  constructor(
    private _dogservice: DogsService,
    private _store: Store<any>
    ) { }

  dogsForSubmenu = this._dogservice.filter

  ngOnInit(): void {
    
   
    this.changeDogs(this.filter)
    this._store.dispatch(petShop())

  }

  filterDogs(ctg: any) {

    this.data = ctg;
    this.pagination = this.dogs.slice(this.data, this.data + 3)

  }

  changeDogs(dog: any) {

    if (dog == 0) {

      this.filter = "ibizan"
      this.getDogs(this.filter);

    } else {

      this.filter = dog
      this.getDogs(this.filter);

    }

  }

  getDogs(dog: any) {

    if (dog == undefined) {


       this.filter = "ibizan"
   
       this._dogservice.getBase(this.filter).subscribe((data: any) => {

        this.dogs = data.message.map((dta: any) => {

          return ({img: `${dta}`, name: `${this.filter}`});

        })
        /* console.log(this.dogs[0].img) */
        this.pagination = this.dogs.slice(this.data, this.data + 3)
        
        
      })
    } else {

     this._dogservice.getBase(this.filter).subscribe((data: any) => {

        this.dogs = data.message.map((dta: any) => {

          return ({img: `${dta}`, name: `${this.filter}`});

        })

        this.pagination = this.dogs.slice(this.data, this.data + 3)

      })

    }

  }

}
