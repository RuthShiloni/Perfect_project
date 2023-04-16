import { NgModule } from '@angular/core';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ProductComponent } from './Components/product/product.component';
import { NavigationComponent } from './Components/Navigation/navigation.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CartComponent } from './Components/cart/cart.component';
import { AboutComponent } from './Components/about/about.component';
import { RegulationsComponent } from './Components/regulations/regulations.component';
import { LoginComponent } from './Components/login/login.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ClubComponent } from './Components/club/club.component';
import { PersonalProductComponent } from './Components/personal-product/personal-product.component';

const routes: Routes = [
  {path : "singleP/:productId" , component : SingleProductComponent},
  {path: "", component: HomePageComponent},
  {path: "home", component: HomePageComponent},
  { path: "cart", component: CartComponent },
  {path:"products",component:ProductComponent},
 {path:"about", component:AboutComponent},
  {path:"login", component:LoginComponent},
  // {path:"blog", component:},
  {path:"club", component:ClubComponent},
  {path:"contact", component:ContactUsComponent},
  {path:"regulations", component:RegulationsComponent},
  {path:"personalProduct", component:PersonalProductComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

