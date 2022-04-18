import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialPetModule } from '../modules/material/material.module';
import { RouterModule } from '@angular/router';

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
    RouterModule,
    MaterialPetModule

  ]
})
export class SharedModule { }