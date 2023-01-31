import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/Classes/ShoppingCart';
import { CartService } from 'src/app/Services/cart.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  header : string[] = ["מחק" , "כמות" , "מחיר" , "שם מוצר" , "תמונת מוצר"]
  cart !: ShoppingCart[]

  constructor(private cartServ : CartService , private userServ : UsersService) { }

  ngOnInit(): void {
    if(this.userServ.GetCurrentUser() == null){
     this.cart = this.cartServ.GetUnRegisterCart()
     console.log(this.cart)
    }
    else{
      this.cartServ.GetAllCartByUserId(this.userServ.GetCurrentUser().Id).subscribe(
        data => {
          this.cart = data
          console.log(this.cart)
        },
        err => {
          console.log(err)
        }
      )
    }
  }

}
