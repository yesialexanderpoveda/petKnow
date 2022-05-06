import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './page/car.component';


const routes: Routes = [

      {
        path: '',
        component: CarComponent
      
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }