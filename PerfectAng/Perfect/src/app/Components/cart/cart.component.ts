import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCart } from 'src/app/Classes/ShoppingCart';
import { CartService } from 'src/app/Services/cart.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  header : string[] = ["מחק" , "כמות" , "גודל","מחיר" , "שם מוצר" , "תמונת מוצר"]
  cart !: ShoppingCart[]
  deliveryP : number = 0
  price !: number 
  sumP !: number 
  pickUp = false
  delivery = false
  underline = false
  full = false
  empty = true
  //minDate !: Date;
  constructor(private cartServ : CartService , private userServ : UsersService
    , private route : Router ) {
      // const currentDate = new Date();
      // this.minDate = new Date(currentDate.getFullYear() ,currentDate.getMonth() ,currentDate.getDay() + 1);
     }

  ngOnInit(): void {
    this.price = 0
    if(this.userServ.GetCurrentUser() == null){
     this.cart = this.cartServ.GetUnRegisterCart()
     console.log(this.cart)
     if (this.cart.length != 0 ){
      this.empty = false
      this.full = true
     } 
     else{
      this.empty = true
      this.full = false
     }
      this.cart.forEach(element => {
      this.price += element.idSizeNavigation.price  * element.quantity
    });
    this.sumP = this.price + this.deliveryP
    }
    else{
      this.cartServ.GetAllCartByUserId(this.userServ.GetCurrentUser().id).subscribe(
        data => {
          this.cart = data
          if (this.cart.length != 0 ){
            this.empty = false
            this.full = true
           } 
           else{
            this.empty = true
            this.full = false
           }
         this.cart.forEach(element => {
          this.price += element.idSizeNavigation.price * element.quantity
        });
        this.sumP = this.price + this.deliveryP
        },
        err => {
          console.log(err)
        }
      )
    }
  }
  deleteItem(id : number , pId : number , idSize : any){
    if(this.userServ.GetCurrentUser() == null){
        this.cart =  this.cartServ.DeleteFromUnRegisterUserCart(pId , idSize.id)     
        console.log(typeof(this.cart))     
        this.cart = this.cart.filter(u =>  u.idSizeNavigation !== idSize)
        this.resetPage()
    }
    else{
        this.cartServ.DeleteCart(id).subscribe(
          data=>{
          console.log(data)
          this.ngOnInit()
          },
          err =>{
            console.log(err)
          }
        ) 
    } 
    
  }
  Delivery(){
    this.delivery = true
    this.pickUp = false
    this.underline = true
    this.deliveryP = 50
    this.sumP = this.price + this.deliveryP
   }
  PickUp(){
    this.delivery = false
    this.pickUp = true
    this.underline = true
    this.deliveryP = 0
    this.sumP = this.price
  }
  next(){
   
    this.route.navigate(["/paymentD"])
  }
  plusP(product : ShoppingCart){
    if(this.userServ.GetCurrentUser() != null){
       product.quantity += 1
       this.cartServ.UpdateCart(product.id , product).subscribe(
        data =>{
          console.log(data)
          this.resetPage()
        }
       )
    }
    else{
      product.quantity += 1
      this.cartServ.UpdateUnRegisterCart(product , product.productId)
     this.resetPage()
    }  
  }
  minusP(product : ShoppingCart){
    if(product.quantity == 1)
        return
    if(this.userServ.GetCurrentUser() != null){
        product.quantity -= 1
        this.cartServ.UpdateCart(product.id , product).subscribe()
        this.resetPage()
    }
    else{
        product.quantity -= 1
        this.cartServ.UpdateUnRegisterCart(product , product.productId)
        this.resetPage()
    }
   
  }
  resetPage(){
    if (this.cart.length != 0 ){
      this.empty = false
      this.full = true
     } 
     else{
      this.empty = true
      this.full = false
     }
     console.log(this.cart)
      this.price = 0;
      this.sumP = 0;
      this.cart.forEach(element => {
      this.price += element.idSizeNavigation.price * element.quantity
    });
    console.log(this.price)
    this.sumP = this.price + this.deliveryP
  }
}
