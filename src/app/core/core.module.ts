import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module ';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './pages/core/core.component';


@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule, 
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
