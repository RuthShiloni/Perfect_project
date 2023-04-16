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
import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './Components/payment-details/payment-details.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { SingleBlogComponent } from './Components/single-blog/single-blog.component';
import { UserOptionComponent } from './Components/user-option/user-option.component';

const routes: Routes = [
  {path : "singleP/:productId" , component : SingleProductComponent},
  {path: "", component: HomePageComponent },
  {path : "nav" , component : NavigationComponent},
  { path: "cart", component: CartComponent },
  {path:"products",component:ProductComponent},
  {path:"about", component:AboutComponent},
  {path:"regulations", component:RegulationsComponent},
  {path:"paymentD" , component: PaymentDetailsComponent},
  {path : "login" , component : LoginComponent},
  {path : "blogs" , component : BlogsComponent},
  {path : "singleBlog/:blogId" , component : SingleBlogComponent},
  {path : "UserOp" , component : UserOptionComponent},
  { path: '', component: AppComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

