import { Component, OnInit } from '@angular/core';
import { animationHeader } from './animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], 
  animations: [animationHeader]
})
export class HomeComponent implements OnInit {

  isOpen = true; 
  
  toogle(){

    this.isOpen = !this.isOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
