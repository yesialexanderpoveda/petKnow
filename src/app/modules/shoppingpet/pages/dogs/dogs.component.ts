import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

   dogs: string[]=[]; 
   pagination: string[]=[];
  constructor(private _dogservice: DogsService) { }

  ngOnInit(): void {
  this.getDogs()
  }

  getDogs(){
   this._dogservice.getBase().subscribe((data: any)=>{

      data.message.map((dta: any)=>{
        
        this.dogs.push(dta)
        
      })
      console.log(this.dogs.slice(0,3))
      this.pagination =  this.dogs.slice(0,3)
      })
     
    
  }

}
