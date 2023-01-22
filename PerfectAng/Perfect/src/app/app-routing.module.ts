import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ProductComponent } from './Components/product/product.component';

const routes: Routes = [
  {path : "singleP/:productId" , component : SingleProductComponent}
];

const routes: Routes = [
  {
    path: "home", component: HomePageComponent,
    /*children:[
      {path:"item1",component:xxx}
    ]*/
  },
  {
    path:"products",component:ProductComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

