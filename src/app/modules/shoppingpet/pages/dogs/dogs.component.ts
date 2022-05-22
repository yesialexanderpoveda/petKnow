import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';
import { Store } from '@ngrx/store';
import { petShop } from 'src/app/ngrx/actions/car.actions';
import { Observable } from 'rxjs';
import { selectLoading } from 'src/app/ngrx/selectors/car.selector';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {


   // VARIABLE FOR THE STORAGE 
  loading$: Observable<Boolean> = new Observable()
  
  // VARIABLES FOR THE API
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
    
   this.loading$ =  this._store.select(selectLoading)

    this.changeDogs(this.filter)
    this._store.dispatch(petShop())

    
  }



  // SAVE OF STORAGE 
  
  rec(event: any){

    if (event.target.innerHTML === "Llevar"){
      
      Swal.fire({
        title: '¿Quieres llevar esta mascota?',
        text: "",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          
          console.log(event.path[2].__ngContext__[27], event.path[2].__ngContext__[22].textContent)
          
          Swal.fire(
            'Estas a un paso de tener tu mascota!',
            'Tus pedidos estan en el paquete de regalos',
            'success'
          )
        }
      })
     
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
