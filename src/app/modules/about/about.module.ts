import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { FundationsComponent } from './pages/fundations/fundations.component';
import { StoresComponent } from './pages/stores/stores.component';



@NgModule({
  declarations: [
    AboutComponent,
    FundationsComponent,
    StoresComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
