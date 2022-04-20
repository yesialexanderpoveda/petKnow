import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatsComponent } from "./pages/cats/cats.component";
import { DogsComponent } from "./pages/dogs/dogs.component";
import { MenuComponent } from "./pages/menu/menu.component";

const routes: Routes = [
{
  path: '',
  component: MenuComponent,

  children:[
{
  path: '',
  component: DogsComponent
},
{
  path: 'cats',
  component: CatsComponent
},
{
 path: 'cats/:id',
 component: CatsComponent

},
{
  path: 'dogs',
  component: DogsComponent
},
{
  path: 'dogs/id',
  component: DogsComponent
  
}

]}


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PetRouterModule{ }