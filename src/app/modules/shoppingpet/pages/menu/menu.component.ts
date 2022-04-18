import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


public navC = {name: "", route: ""}

 pets = [
  { name: "Gatos", route: "./cats"},
  { name: "Perros", route: "./dogs"}
]

  constructor(public router:Router) {
   
    

   }
  ngOnInit(): void {}  
   
  
  


}
