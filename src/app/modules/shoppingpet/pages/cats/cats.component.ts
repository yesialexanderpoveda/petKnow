import { Component, OnInit } from '@angular/core';
import { CatsService } from '../../services/cats.service';
import { Store } from '@ngrx/store';
import { petShoped, petShop } from 'src/app/ngrx/actions/car.actions';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/ngrx/app.state';
import { selectFeaturelistPets } from 'src/app/ngrx/selectors/car.selector';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  // store
  pet_storage!: any[]
  pt_storage$: Observable<any> = new Observable()
  //http
  filter_Cats: number = 0;
  catsFilter: number = 0;
  cats: any[] = [];
  message!: string;

  constructor(private catService: CatsService, private _store: Store, private _Store: Store<AppState>) { }

  catsforsubmenu: any[] = this.catService.filters
  ngOnInit(): void {

    this.getCategories(this.catsFilter)
    this.store()
  }


  // SAVE OF STORAGE 

  async rec(event: any) {

    if (event.composedPath()[0].textContent === "Llevar") {
      /*  console.log(event.composedPath()[2].firstChild.src, event.composedPath()[2].children[1].textContent) */
      // I declare let becouse eventPaht is don´t functional inside of promise  swal 
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

          if (event.composedPath()) {
            
            pet_s.push({ id: `${id}`, img: `${img}` })

          }


          if (this.pet_storage == undefined) {
           
            this.pet_storage = pet_s

          } else {


            this.pet_storage.push({

              id: `${id}`,
              img: `${img}`

            })
          }


          
          // ** send data **
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

  async store() {

    this.pt_storage$ = await this._Store.select(selectFeaturelistPets);
    

    this.pt_storage$.forEach(ele => {
    
      if (ele.length != 0) {
        this.pet_storage = ele
      }

    })

  }
  // HTTP OF THE API 

  filterCats(cat: any) {

    this.filter_Cats = cat
    this.catService.getCategory(this.filter_Cats, this.catsFilter).subscribe((filter: any) => {
      this.cats = Object.values(filter).map((val: any) => {
        return ({ id: `${val.id}`, url: `${val.url}` })
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
        return ({ id: `${val.id}`, url: `${val.url}` })

      })

    })



  }


}

