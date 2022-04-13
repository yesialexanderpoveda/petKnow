import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialPetModule } from '../modules/material/material.module';


import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    MaterialPetModule
  ]
})
export class SharedModule { }