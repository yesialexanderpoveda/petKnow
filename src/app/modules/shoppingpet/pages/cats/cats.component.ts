import { Component, OnInit } from '@angular/core';
import { CatsService } from '../../services/cats.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
 
  filter_Cats: number = 0;
  catsFilter: number = 0;
  cats: any[] = [];
  message!: string;
  constructor(private catService: CatsService) { }

  catsforsubmenu: any[] = this.catService.filters
  ngOnInit(): void {

    this.getCategories(this.catsFilter)
    
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

  // HTTP OF THE API 
  
  filterCats(cat: any){
   
    this.filter_Cats = cat
    this.catService.getCategory(this.filter_Cats, this.catsFilter).subscribe((filter: any) => {
      this.cats = Object.values(filter).map((val: any) => {
        return ({id: `${val.id}`, url: `${val.url}`})
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
        return ({id: `${val.id}`, url: `${val.url}`})

      })
     
    })

    
    
  }


}

