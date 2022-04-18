import { Component, OnInit } from '@angular/core';
import { CatsService} from '../../services/cats.service';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  message!: string;
  constructor(private catService: CatsService) { }

  
  getService(): void {

    this.message = this.catService.urlApiCats;
    console.log(this.message)
  }

  ngOnInit(): void {
  }

}
