import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  exports: [
    A11yModule,
    MatIconModule
  ]
})
export class MaterialPetModule {}
