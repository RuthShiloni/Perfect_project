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
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
 product !: Product
 productId !: any
 sizeAndPrice !: SizePrice[]
 CurrentSize !: SizePrice
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
  SaveCurrentSizeId(size : SizePrice){
   this.CurrentSize = size
  }
  AddToCart(){
    if(this.CurrentSize == null){
      alert("please choose size :)")
    }
    else if(this.userServ.GetCurrentUser() == null){
      this.cart = new ShoppingCart( 0 ,this.CurrentSize.id , this.product.id , 1 ,this.CurrentSize , this.product , 0)
      console.log(this.cart)
      this.cartServ.AddToUnRegisterUserCart(this.cart);
   }
   else{
    this.cartServ.GetAllCartByUserId(this.userServ.GetCurrentUser().id).subscribe(
      data => {
        if (data.findIndex(e => e.idSizeNavigation.id == this.CurrentSize.id) >= 0) {
          const element = data.find(e => e.idSizeNavigation.id == this.CurrentSize.id)!;
          this.cart = new ShoppingCart(this.userServ.GetCurrentUser().id ,this.CurrentSize.id , this.product.id , 1 ,this.CurrentSize , this.product , 0 )
          this.cartServ.UpdateCart(element.id, this.cart).subscribe(
            data => { },
            err => {
              console.log(err)
            }
          )
        }
        else {
          this.cart = new ShoppingCart(this.userServ.GetCurrentUser().id ,this.CurrentSize.id , this.product.id , 1 ,this.CurrentSize , this.product , 0 )
          this.cartServ.AddCart(this.cart).subscribe(
            data => {
            },
            err => {
              console.log(err)
            }
          )
        }   
     }
    )
   }
  }
}
