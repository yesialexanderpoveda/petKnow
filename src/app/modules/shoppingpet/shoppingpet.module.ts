import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialPetModule } from '../material/material.module';

import { MenuComponent } from './pages/menu/menu.component';
import { DogsComponent } from './pages/dogs/dogs.component';
import { CatsComponent } from './pages/cats/cats.component';
import { PetRouterModule } from './shoppingpet-routing.module';
import { SubmenuComponent } from './pages/submenu/submenu.component';





@NgModule({
  declarations: [
    MenuComponent,
    DogsComponent,
    CatsComponent,
    SubmenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PetRouterModule,
    MaterialPetModule
   
  ]
})
export class ShoppingpetModule { }
