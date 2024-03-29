import { NgModule } from '@angular/core';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ProductComponent } from './Components/product/product.component';
import { NavigationComponent } from './Components/Navigation/navigation.component';
import { CartComponent } from './Components/cart/cart.component';
import { AboutComponent } from './Components/about/about.component';
import { RegulationsComponent } from './Components/regulations/regulations.component';
import { LoginComponent } from './Components/login/login.component';
import { PaymentDetailsComponent } from './Components/payment-details/payment-details.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { SingleBlogComponent } from './Components/single-blog/single-blog.component';
import { UserOptionComponent } from './Components/user-option/user-option.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ClubComponent } from './Components/club/club.component';
import { PersonalProductComponent } from './Components/personal-product/personal-product.component';
import { CreditComponent } from './Components/credit/credit.component';



const routes: Routes = [
  {path : "singleP/:productId" , component : SingleProductComponent},
  {path: "", component: HomePageComponent },
  {path: "home", component: HomePageComponent},
  {path : "nav" , component : NavigationComponent},
  { path: "cart", component: CartComponent },
  {path:"products",component:ProductComponent},
 {path:"about", component:AboutComponent},
 {path:"club", component:ClubComponent},
  {path:"contact", component:ContactUsComponent},
  {path:"regulations", component:RegulationsComponent},
  {path:"paymentD" , component: PaymentDetailsComponent },
  {path : "login" , component : LoginComponent},
  {path : "blogs" , component : BlogsComponent},
  {path : "singleBlog/:blogId" , component : SingleBlogComponent},
  {path : "UserOp" , component : UserOptionComponent},
  {path:"personalProduct", component:PersonalProductComponent},
  {path: "credit" , component : CreditComponent}
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

