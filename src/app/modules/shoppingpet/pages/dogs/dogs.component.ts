import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {


  filter!: string;

  dogs: string[] = [];

  pagination: string[] = [];

  constructor(private _dogservice: DogsService) { }

  dogsForSubmenu = this._dogservice.filter

  ngOnInit(): void {

    this.changeDogs(this.filter)
    console.log(this._dogservice.filter, "I'm dog service");

  }

  changeDogs(dog: any) {

    if (dog == 0) {

      this.filter = "ibizan"
      this.getDogs(this.filter);

    } else {

      this.filter = dog
      this.getDogs(this.filter);

    }

  }

  async getDogs(dog: any) {

    if (dog == undefined) {

      console.log(dog, 'recieve dog');
      this.filter = "ibizan"

      await this._dogservice.getBase(this.filter).subscribe((data: any) => {

        data.message.map((dta: any) => {

          this.dogs.push(dta)

        })

        this.pagination = this.dogs.slice(0, 3)
        console.log(this.dogs.slice(0, 3), this.dogs.length)

      })
    } else {

      await this._dogservice.getBase(this.filter).subscribe((data: any) => {

        this.dogs = data.message.map((dta: any) => {

          return dta;

        })

        console.log(this.dogs.slice(0, 3), this.dogs.length)
        this.pagination = this.dogs.slice(0, 3)

      })

    }

  }

}
