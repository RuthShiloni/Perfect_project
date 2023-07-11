import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Address } from 'src/app/Classes/Address';
import { Order } from 'src/app/Classes/Order';
import { PersonalProduct } from 'src/app/Classes/PersonalProduct';
import { User } from 'src/app/Classes/User';
import { AddressService } from 'src/app/Services/address.service';
import { OrdersService } from 'src/app/Services/orders.service';
import { PersonalProductService } from 'src/app/Services/personal-product.service';
import { ProductToOrderService } from 'src/app/Services/product-to-order.service';
import { ProductService } from 'src/app/Services/product.service';
import { SizeAndPriceService } from 'src/app/Services/size-and-price.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-option',
  templateUrl: './user-option.component.html',
  styleUrls: ['./user-option.component.scss']
})
export class UserOptionComponent implements OnInit {

  user !: User
  newUser !: User
  minDate !: Date;
  maxDate !: Date;
  selectedDate !: Date
  newAddress !: Address
  isfull : boolean = false
  hide : boolean = true
  currentAdd !: Address
  allOrders !: Order[]
  noOrder : boolean = false
  orders : boolean = false
 

  constructor(private userServ : UsersService , private addressServ : AddressService , private router : Router ,
    private orderServ : OrdersService ,private pToOrderServ : ProductToOrderService ,
    private ppServ : PersonalProductService , private _snackBar : MatSnackBar) { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date(currentYear - 13, 11, 31);
  }
  panelOpenState = false;
  ngOnInit(): void {
    this.user = this.userServ.GetCurrentUser()
    console.log(typeof this.user.address)
    if(this.user.address != null){ 
       this.isfull = true
       this.hide = false
       this.currentAdd = this.user.address
    }    
    this.orderServ.GetAllOrdersByUserId(this.user.id).subscribe(
      res => {
        console.log(res)
        this.allOrders = res
        if(this.allOrders.length == 0)
        this.noOrder = true
        else{
          this.orders = true
          this.allOrders.forEach(element => {
            element.productToOrders?.forEach(e => {
              if(e.id != null)
             this.pToOrderServ.GetProductToOrderById(e.id).subscribe(
              res => {
                e.product = res.product
                e.size = res.size
              }
             )
            });
            element.personalProducts?.forEach(ele =>{
             if(ele.id != null)
             this.ppServ.GetPPById(ele.id).subscribe(
              res => {
                ele.shape = res.shape
                ele.colorId1Navigation = res.colorId1Navigation
                ele.colorId2Navigation = res.colorId2Navigation
                ele.cream = res.cream
                ele.layers = res.layers
              } ,
              err => {
                console.log(err)
              }
             )
            });
          });
        }    
      },
      err =>{
        console.log(err)
      }
    )
  }
  onDateChange(event :any) {
    this.selectedDate = event.value;
    console.log(this.selectedDate); // logs the selected date in a Date object format
  }
  Update(lname : string , fname : string , phone : string , email : string){
   this.newUser = new User(this.user.id , fname , lname , phone , email,this.user.password,this.selectedDate)
   this.userServ.UpdateUser(this.user.id , this.newUser).subscribe(
    response => {
      //alert("seccede update")
      this._snackBar.open(':)  המשתמש התעדכן במערכת בהצלחה ', '', {
        duration: 3000
      });
    },
    err => {
      console.log(err)
    }
   )
  }
  AddAddress(city : string , street : string , numB : any , numH : any){
   this.newAddress = new Address(city , street , numH , numB , this.user.id , 0)
   this.addressServ.AddAddress(this.newAddress).subscribe(
    success=>{
     // alert("התעדכן בהצלחה")
     this._snackBar.open(':)  הכתובת התווספה למערכת בהצלחה ', '', {
      duration: 3000
    });
    },
    err =>{
      console.log(err)
    }
   )
  }
  UpdateAddress(city : string , street : string , numB : any , numH : any){
    console.log(this.currentAdd.id)
    this.newAddress = new Address(city , street , numH , numB , this.user.id , this.currentAdd.id)
    this.addressServ.UpdateAddress(this.newAddress,this.currentAdd.id).subscribe(
      res =>{
        this._snackBar.open(':)  הכתובת התעדכנה במערכת בהצלחה ', '', {
          duration: 3000
        });
      },
      err => {
        console.log(err)
      }
    )
  }
  exit(){ 
    window.location.reload()
    sessionStorage.removeItem('currentUser')
  }
  showP(id : number){
    this.router.navigate(["/singleP", id])
  }
}
