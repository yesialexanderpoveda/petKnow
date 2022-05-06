import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { AboutComponent } from "./pages/about/about.component"; 
import { FundationsComponent } from "./pages/fundations/fundations.component"; 
import { StoresComponent } from "./pages/stores/stores.component"; 

const routes: Routes = [

{
  path: '',
  component: AboutComponent,

  children: [

    {
      path: 'fundations',
      component: FundationsComponent
    },
    {
      path: 'stores',
      component: StoresComponent

    }
  ]
}


]

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class AboutRoutingModule {}