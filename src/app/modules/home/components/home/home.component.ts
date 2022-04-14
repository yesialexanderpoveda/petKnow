import { Component, OnInit } from '@angular/core';
import { animationAbrowLeft, animationAbrowRight, animationDog, animationCat } from './animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [animationAbrowLeft, animationAbrowRight, animationDog, animationCat]
})
export class HomeComponent implements OnInit{

  show: boolean = true;
  event: string | undefined;


  displayEvent(value: string) {
    
    this.event = value    
     
  }
  

  constructor() { }

  ngOnInit(): void {



  }





}
