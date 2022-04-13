import { Component, OnInit } from '@angular/core';
import { MenuAnimation} from './animatios';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [MenuAnimation]
})
export class HeaderComponent implements OnInit { 

    isOpen = false;

    toggle(){
      this.isOpen = !this.isOpen;
      
    }
  constructor() { }

  ngOnInit(): void {
  }

}
