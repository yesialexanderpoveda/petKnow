import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './page/car.component';
import { CarRoutingModule } from './car-routing.module';



@NgModule({
  declarations: [
    CarComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule

  ]
})
export class CartModule { }
