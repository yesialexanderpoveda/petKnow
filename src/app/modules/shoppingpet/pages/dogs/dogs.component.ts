import { Component, OnInit} from '@angular/core';
import { DogsService } from '../../services/dogs.service';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {


   filter!: string; 
  
   dogs: string[]=[];

   pagination: string[]=[];

  constructor(private _dogservice: DogsService) { }

  ngOnInit(): void { 
    this.getDogs()
     console.log(this._dogservice.filter, "I'm dog service");
  }

  changeDogs(dog: any){

    console.log(dog, 'from submenu dog');
  }
  getDogs(){

   if(this.filter == undefined){
     this.filter = "ibizan"
   }
   
   this._dogservice.getBase(this.filter).subscribe((data: any)=>{

    data.message.map((dta: any)=>{
      
      this.dogs.push(dta)
      
    })
    console.log(this.dogs.slice(0,3))
    this.pagination =  this.dogs.slice(0,3)
    })

     
  }

}
