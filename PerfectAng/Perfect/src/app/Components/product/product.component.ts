import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Classes/Products';
import { Router ,ActivatedRoute } from '@angular/router';
import { SizeAndPriceService } from 'src/app/Services/size-and-price.service';
import { UsersService } from 'src/app/Services/users.service';
import { CartService } from 'src/app/Services/cart.service';
import { ShoppingCart } from 'src/app/Classes/ShoppingCart';
import { SizePrice } from 'src/app/Classes/SizePrice';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() categoryId !: number 
  allProducts !: Product[]
  cart !: ShoppingCart 
 // sizeAndPrice !: SizePrice[]
  constructor(private productServ: ProductService , private userServ : UsersService,
    private cartServ : CartService , private priceSizeServ : SizeAndPriceService , private myRouter : Router) { }

  ngOnInit(): void {
    debugger
    this.productServ.getProductsByCate(this.categoryId).subscribe(
      data => {
        this.allProducts = data
        for (let i = 0; i < this.allProducts.length; i++) {
         this.priceSizeServ.getSizeAndPriceByPId(this.allProducts[i].id).subscribe(
          data => {
            console.log(data)
            this.allProducts[i].sizeAndPrice = data
          },
          err => {
            console.log(err)
          }
         )
          
        }
      },
      err => {
        console.log(err)
      }
    )
  }

  showDetails(product : Product) {
    var id = product.id
    this.myRouter.navigate(["/singleP",id])
    console.log(product.id)
  }
  // OpenOption(id : number){
  //   this.priceSizeServ.getSizeAndPriceByPId(id).subscribe(
  //     data => {
  //      this.sizeAndPrice = data
  //      console.log(this.sizeAndPrice)
  //     },
  //     err => {
  //       console.log(err)
  //     }
  //   )
  // }
  AddToCart(productId : number , sizeId : number ){
   if(this.userServ.GetCurrentUser() == null){
      this.cart = new ShoppingCart( 0 , productId , 1 , sizeId)
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
