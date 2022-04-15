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
    path: 'about',
    loadChildren: () => import('../modules/about/about.module').then(m => m.AboutModule)

  },
  {
    path: 'pets',
    loadChildren: () => import('../modules/shoppingpet/shoppingpet.module').then(m=> m.ShoppingpetModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('../modules/cart/cart.module').then(m => m.CartModule) 
    
  },
  {
    path: 'order',
    loadChildren: ()=> import('../modules/order/order.module').then(m => m.OrderModule) 
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
