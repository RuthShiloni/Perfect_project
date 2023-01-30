import { NgModule } from '@angular/core';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ProductComponent } from './Components/product/product.component';


const routes: Routes = [
  
   { path: "home", component: HomePageComponent,
    /*children:[
      {path:"item1",component:xxx}
    ]*/
  },
  
  {path : "singleP/:productId" , component : SingleProductComponent},
  {path:"products",component:ProductComponent},
  {path:"products/:category",component:ProductComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

