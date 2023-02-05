import { NgModule } from '@angular/core';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ProductComponent } from './Components/product/product.component';
import { AboutComponent } from './Components/about/about.component';
import { RegulationsComponent } from './Components/regulations/regulations.component';


const routes: Routes = [
  
   { path: "home", component: HomePageComponent,
    /*children:[
      {path:"item1",component:xxx}
    ]*/
  },
  {path:"about", component:AboutComponent},
  {path :"singleP/:productId" , component : SingleProductComponent},
  {path:"regulations", component:RegulationsComponent},
  {path:"products",component:ProductComponent},
  {path:"products/:category",component:ProductComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

