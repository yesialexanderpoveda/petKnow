import { Component, OnInit, ViewChild, ViewChildren, Renderer2, ElementRef, AfterViewInit, QueryList } from '@angular/core';
import { DogsService } from '../../services/dogs.service';
import { Store } from '@ngrx/store';
import { petShop } from 'src/app/ngrx/actions/car.actions';
import { Observable } from 'rxjs';
import { selectLoading } from 'src/app/ngrx/selectors/car.selector';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit, AfterViewInit {

   //FOR SAVE STORAGE 
  @ViewChildren('btn') BTN!: ElementRef[];
  
   /* @ViewChildren('btn') btn = {} as QueryList<ElementRef> */
   // VARIABLE FOR THE STORAGE 
  loading$: Observable<Boolean> = new Observable()
  
  // VARIABLES FOR THE API
  filter!: string;
  data: number = 0;
  dogs!: any[];

  pagination: any[] = [];

  constructor(
    private _dogservice: DogsService,
    private _store: Store<any>,
    private reder: Renderer2
    ) { }

  dogsForSubmenu = this._dogservice.filter

  ngOnInit(): void {
    
   this.loading$ =  this._store.select(selectLoading)

    this.changeDogs(this.filter)
    this._store.dispatch(petShop())

    
  }
  ngAfterViewInit(): void {

   
  }


  // SAVE OF STORAGE 
  
  rec(event: any){

    if (event.target.innerHTML === "Llevar"){
      
      console.log(event.path[2].__ngContext__[27], event.path[2].__ngContext__[22].textContent)
    }
   
  }

  

  // HTTP OF API 

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
