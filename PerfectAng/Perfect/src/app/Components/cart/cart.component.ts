import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonalProduct } from 'src/app/Classes/PersonalProduct';
import { ShoppingCart } from 'src/app/Classes/ShoppingCart';
import { CartService } from 'src/app/Services/cart.service';
import { OrdersService } from 'src/app/Services/orders.service';
import { PersonalProductService } from 'src/app/Services/personal-product.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  header : string[] = ["מחק" , "כמות" , "גודל","מחיר" , "שם מוצר" , "תמונת מוצר"]
  headerPP : string[] = ["מחק" , "כמות" ,"טקסט", "גודל" , "מחיר" , "תאור" , "תמונה להמחשה"]
  cart !: ShoppingCart[]
  personalProductUser : PersonalProduct[] = []
  deliveryP : number = 0
  price !: number 
  sumP !: number 
  pickUp = true
  delivery = false
  defaultValue = "option2"
  underline = false
  full = false
  fullpp = false
  show = false
  empty = true
  cachedDate !: Date;
  showErr : boolean = false

  //minDate !: Date;
  constructor(private cartServ : CartService , private userServ : UsersService ,
    private ppServ : PersonalProductService , private route : Router , private orderServ : OrdersService) {
      // const currentDate = new Date();
      // this.minDate = new Date(currentDate.getFullYear() ,currentDate.getMonth() ,currentDate.getDay() + 1);
     }
     date = new FormControl('' , [Validators.required])

  ngOnInit(): void {
    this.price = 0
    if(this.userServ.GetCurrentUser() == null){
     this.cart = this.cartServ.GetUnRegisterCart()
     console.log(this.cart)
     if (this.cart.length != 0 ){
      this.empty = false
      this.full = true
      this.show = true
     } 
     else{
      this.empty = true
      this.full = false
     }
     if(this.cart.length == 0 && this.personalProductUser.length == 0 )
     this.show = false
      this.cart.forEach(element => {
      this.price += element.idSizeNavigation.price  * element.quantity
    });
    this.sumP = this.price + this.deliveryP
    }

    else{
      this.cartServ.GetAllCartByUserId(this.userServ.GetCurrentUser().id).subscribe(
        
        data => {
          this.cart = data
          if (this.cart.length != 0){
            this.empty = false
            this.full = true
            this.show = true
           } 
           else{
            this.empty = true
            this.full = false
           } 
           if(this.cart.length == 0 && this.personalProductUser.length == 0 )
           this.show = false
           this.cart.forEach(element => {
            this.price += element.idSizeNavigation.price * element.quantity
          }); 
         this.sumP = this.price + this.deliveryP
        },
        err => {
          console.log(err)
        }
      )

      this.ppServ.GetPPByUserId(this.userServ.GetCurrentUser().id).subscribe(
        res => {
          debugger
          res.forEach(element => {
            if(element.orderId == null){
              this.personalProductUser.push(element)
            }
          });
         if(this.personalProductUser.length != 0){
          this.fullpp = true
          this.empty = false
          this.show = true
         }
         else {
          this.fullpp = false
         }
          console.log(this.personalProductUser)
          this.personalProductUser.forEach(element => {
            this.price += element.price * element.quantity
          });
          this.sumP = this.price + this.deliveryP
        },
        err =>{
          console.log(err)
        }
       )
    }
  }
  getErrorMessage() {
    
       return 'You must enter a date value';  
    
     //return this.date.hasError('') ? 'Not a valid date' : '';
  }
  deleteItem(element : ShoppingCart){
    if(this.userServ.GetCurrentUser() == null){
        this.cart =  this.cartServ.DeleteFromUnRegisterUserCart(element.id , element.idSizeNavigation.id)     
        console.log(typeof(this.cart))     
        this.cart = this.cart.filter(u =>  u.idSizeNavigation !== element.idSizeNavigation)
        this.cartServ.Remove(element.quantity)
        this.resetPage()
    }
    else{
        this.cartServ.DeleteCart(element.id).subscribe(
          data=>{
          this.cartServ.Remove(element.quantity)
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
    this.cartServ.isDelivary = true
   }
  PickUp(){
    this.cartServ.isDelivary = false
    this.delivery = false
    this.pickUp = true
    this.underline = true
    this.deliveryP = 0
    this.sumP = this.price
  }
  cacheDate(selectedDate: Date){
    this.cachedDate = selectedDate;
    console.log(this.cachedDate)
  }
  next(){
    console.log(this.deliveryP)
     this.orderServ.newOrder.deliveryPrice = this.deliveryP
     var currentDate = new Date()
     debugger
    //  if(this.cacheDate > currentDate.getDate)
    //  this.orderServ.newOrder.pickupDate = this.cachedDate
    //  else{
    //   this.showErr = true
    //   return
    //  }
     this.cartServ.productsToOrder = this.cart
     this.cartServ.personalPToOrder = this.personalProductUser
    this.route.navigate(["/paymentD"])
  }
  plusP(product : ShoppingCart){
    debugger
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
     this.cartServ.Add1()
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
    this.cartServ.Remove(1)
  }
  minusPp(pp : PersonalProduct){
    if(pp.quantity == 1)
    return
     pp.quantity -= 1
       this.ppServ.UpdatePersonalP(pp.id , pp ).subscribe(
        res => {
          this.resetPage()
          this.cartServ.Remove(1)
        },
        err => {
          console.log(err)
        }
        )
       
  
  }
  plusPp(pp : PersonalProduct){
    pp.quantity += 1
    this.ppServ.UpdatePersonalP(pp.id , pp).subscribe(
     data =>{
       console.log(data)
       this.resetPage()
       this.cartServ.Add1()
     },
     err => {
      console.log(err)
     }
    )
  }
  deletePersonalP(element : PersonalProduct){
    debugger
   this.ppServ.DeletePersonalP(element.id).subscribe(
    data => {
      this.cartServ.Remove(element.quantity)
      this.personalProductUser = this.personalProductUser.filter(u =>  u.id !== element.id)
      this.resetPage()
    },
    err => {
      console.log(err)
    }
   )
  }
  resetPage(){
    debugger
    if (this.cart.length != 0 ) {
      this.empty = false
      this.full = true
      this.show = true
     } 
     else{ 
      this.fullpp = false
      this.empty = true
      this.full = false
     }
     if(this.personalProductUser.length != 0)
     this.fullpp = true 
     else
     this.fullpp = false
     console.log(this.cart)
      this.price = 0;
      this.sumP = 0;
      this.cart.forEach(element => {
      this.price += element.idSizeNavigation.price * element.quantity
    });
    if(this.userServ.GetCurrentUser() != null)
    this.personalProductUser.forEach(element => {
      this.price += element.price * element.quantity
    })
    if(this.cart.length == 0 && this.personalProductUser.length == 0 )
    this.show = false
    this.sumP = this.price + this.deliveryP
  }
}
