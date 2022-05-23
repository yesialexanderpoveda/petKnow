import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';
import { Store } from '@ngrx/store';
import { petShop, petShoped } from 'src/app/ngrx/actions/car.actions';
import { Observable } from 'rxjs';
import { selectLoading, selectFeaturelistPets} from 'src/app/ngrx/selectors/car.selector';
import Swal from 'sweetalert2';
import { AppState } from 'src/app/ngrx/app.state';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {


   // VARIABLE FOR THE STORAGE 
  loading$: Observable<Boolean> = new Observable()
  pt_storage$: Observable<any> = new Observable()
  pet_storage!: any[]
  // VARIABLES FOR THE API
  filter!: string;
  data: number = 0;
  dogs!: any[];

  pagination: any[] = [];

  constructor(
    private _dogservice: DogsService,
    private _store: Store<any>,
    private  _Store: Store<AppState>
    ) { }

  dogsForSubmenu = this._dogservice.filter

  ngOnInit(): void {
    
    // loaging data 
    
   this.loading$ =  this._store.select(selectLoading)
    this.changeDogs(this.filter)
    this.store()
    

    
  }



  // SAVE OF STORAGE 
  
 async rec(event: any){

    if (event.composedPath()[0].textContent === "Llevar"){
     /*  console.log(event.composedPath()[2].firstChild.src, event.composedPath()[2].children[1].textContent) */
      let id = event.composedPath()[2].children[1].textContent;
      let img = event.composedPath()[2].firstChild.src;
      this._store.dispatch(petShop())
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
          const pet_s = []; 
      
          if(event.composedPath()){
          
            console.log(id, img)
            pet_s.push({ id: `${id}`, img: `${img}`}) 
            
          }
           
           
           if(this.pet_storage == undefined){
            console.log('gato') 
            this.pet_storage = pet_s 
             
           }else{
            
           
            
            this.pet_storage.push({
              
              id: `${id}`,  
              img: `${img}`
              
              })
           }
           
           
            console.log(this.pet_storage) 
           // send data 
          this._store.dispatch(petShoped({

             pets: this.pet_storage
            
          }
          ))
          Swal.fire(
            'Estas a un paso de tener tu mascota!',
            'Tus pedidos estan en el paquete de regalos',
            'success'
          )
        }
      })
     
    }
   
  }


  
  // 
  async store(){
    
    this.pt_storage$ = await this._Store.select(selectFeaturelistPets);
           /*  console.log(this.pt_storage$, 'storage')  */
            
           
            this.pt_storage$.forEach(ele =>{
              console.log(ele.length)
          if(ele.length != 0){
            this.pet_storage = ele
          }
              
              
            })
              
            
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
