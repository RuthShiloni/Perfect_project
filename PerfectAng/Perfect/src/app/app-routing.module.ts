import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ProductComponent } from './Components/product/product.component';
import { NavigationComponent } from './Components/Navigation/navigation.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CartComponent } from './Components/cart/cart.component';

const routes: Routes = [
  {path : "singleP/:productId" , component : SingleProductComponent},
  {
    path: "", component: HomePageComponent,
    //  children:[
    //    //{path:"",component:NavigationComponent} ,
    // //   {path : "footer" , component : FooterComponent}
    //  ]
  },
  //{path:"",component:NavigationComponent},
  {path : "cart" , component : CartComponent},
  {
    path:"products",component:ProductComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

