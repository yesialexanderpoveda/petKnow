import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';
@Component({
  selector: 'app-fundations',
  templateUrl: './fundations.component.html',
  styleUrls: ['./fundations.component.scss']
})
export class FundationsComponent implements OnInit {

  constructor(private service: AboutService) { }

   fundations!: any[];  
  renderService(){
    this.fundations = this.service.fundations 
  }
  
  ngOnInit(): void {
   this.renderService()
  }

}
