import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  constructor(private service: AboutService) { }
  stores!: any[] 
   renderServie (){
   this.stores = this.service.store;
  }
  

  ngOnInit(): void {
  this.renderServie()
  }

}
