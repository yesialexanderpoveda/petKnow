import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

  @Input() 

  titlesCats = ["Ropa","Cajas","Sombreros"];
  tilDogs = [ "Basset","Blood","English"];
  
  
  
  constructor() { }

  ngOnInit(): void {
  }
 



  
}
