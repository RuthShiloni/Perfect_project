
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Classes/Products';
import { ShoppingCart } from 'src/app/Classes/ShoppingCart';
import { SizePrice } from 'src/app/Classes/SizePrice';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { SizeAndPriceService } from 'src/app/Services/size-and-price.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-single-product',
  templateUrl:'./single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
 product !: Product
 productId !: any
 sizeAndPrice !: SizePrice[]
 CurrentSizeId !: number
 cart !: ShoppingCart
  constructor(private route : ActivatedRoute ,private productServ : ProductService ,
   private sizeAndPriceServ : SizeAndPriceService , private userServ : UsersService , private cartServ : CartService) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
      this.productId = params.productId
    })
    this.productServ.GetProductById(this.productId).subscribe(
      data =>{
        console.log(data)
        this.product = data
      },
      err =>{
        console.log(err)
      }
    )
  }
  SaveCurrentSizeId(id : number){
   this.CurrentSizeId = id
  }
  AddToCart(){
    if(this.CurrentSizeId == null){
      alert("please choose size :)")
    }
    else if(this.userServ.GetCurrentUser() == null){
      this.cart = new ShoppingCart( 0 , this.productId , 1 , this.CurrentSizeId)
      console.log(this.cart)
      this.cartServ.AddToUnRegisterUserCart(this.cart);
   }
   else{
    this.cart = new ShoppingCart(this.userServ.GetCurrentUser().Id , this.productId , 1 ,this.CurrentSizeId)
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
