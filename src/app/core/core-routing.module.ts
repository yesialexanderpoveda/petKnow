import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {CoreComponent} from './pages/core/core.component'
const routes: Routes = [

{path: '',
 component: CoreComponent,
 
 children: [

  {
    path: 'home',
    loadChildren: () => import('../modules/home/home.module').then( m => m.HomeModule)

  }, 
  {
    path: 'pets'

  },
  {
    path: '**',
    redirectTo: 'home'
  }

 ] 
  

}
]


@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
