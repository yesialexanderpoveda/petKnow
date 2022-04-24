import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialPetModule } from '../material/material.module';
import { PetRouterModule } from './shoppingpet-routing.module';
import { FilterPipe } from './pipes/filter.pipe';

import { MenuComponent } from './pages/menu/menu.component';
import { DogsComponent } from './pages/dogs/dogs.component';
import { CatsComponent } from './pages/cats/cats.component';
import { SubmenuComponent } from './pages/submenu/submenu.component';
import { FilterComponent } from './pages/filter/filter.component';




@NgModule({
  declarations: [
    MenuComponent,
    DogsComponent,
    CatsComponent,
    SubmenuComponent,
    FilterPipe,
    FilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PetRouterModule,
    MaterialPetModule
   
  ]
})
export class ShoppingpetModule { }
