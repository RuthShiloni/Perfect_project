import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Classes/Products';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
import { CartService } from 'src/app/Services/cart.service';
import { ShoppingCart } from 'src/app/Classes/ShoppingCart';
import { Category } from 'src/app/Classes/Category';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  allProducts !: Product[]
  cart !: ShoppingCart 
  allCategories !: Category[]
  allProductByCate !: Product[]
  showAll : boolean = true
  showByCateg : boolean = false
 
  constructor(private productServ: ProductService , private userServ : UsersService,
    private cartServ : CartService , private categServ : CategoriesService , private myRouter : Router) { }

  ngOnInit(): void {
    this.productServ.GetAllProduct().subscribe(
      data => {
        this.allProducts = data
        console.log(data)
      },
      err => {
        console.log(err)
      }
    )
    this.categServ.GetAllCategories().subscribe(
      data => {
        this.allCategories = data
        console.log(this.allCategories)
      },
      err => {
        console.log(err)
      }
    )
  }
  ShowByCat(id : number){
    debugger
    this.productServ.getProductsByCate(id).subscribe(
      data => {
        this.allProductByCate = data
        console.log(this.allProductByCate)
        this.showAll = false
        this.showByCateg = true
      }
    )
  }

  showDetails(product : Product) {
    var id = product.id
    this.myRouter.navigate(["/singleP",id])
    console.log(product.id)
  }
  AddToCart(productId : number , sizeId : number ){
   if(this.userServ.GetCurrentUser() == null){
      this.cart = new ShoppingCart(0 , productId , 1 , sizeId)
      console.log(this.cart)
      this.cartServ.AddToUnRegisterUserCart(this.cart);
      console.log(this.cartServ.UnregisterUserCart)
   }
   else{
    this.cart = new ShoppingCart(this.userServ.GetCurrentUser().Id , productId , 1 ,sizeId)
    console.log(this.cart)
    this.cartServ.AddCart(this.cart).subscribe(
      data =>{
        console.log(data)
      },
      err =>{
        console.log(err)
      }
    )
   }
  }
}
