import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router , RouterModule  } from '@angular/router';
import { Address } from 'src/app/Classes/Address';
import { User } from 'src/app/Classes/User';
import { CartService } from 'src/app/Services/cart.service';
import { OrdersService } from 'src/app/Services/orders.service';
import { UsersService } from 'src/app/Services/users.service';



@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss',
]
})
export class PaymentDetailsComponent implements OnInit {
  isdelivary = false
  
  constructor(private _formBuilder: FormBuilder , private myrouter : Router , private cartServ : CartService ,
    private userServ : UsersService , private orderServ : OrdersService) {
  }
  firstFormGroup !: FormGroup;
  secondFormGroup !: FormGroup;
  ThirdFormGroup !: FormGroup
  isEditable = true;
  selectedOption !: string
  currentUser !: User
  address !: Address

  ngOnInit(): void {
  this.currentUser = this.userServ.GetCurrentUser()
    this.isdelivary = this.cartServ.isDelivary
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', [Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Zא-ת][a-zA-Zא-ת ]+")]] ,
      firstCtr2 : ['' ,  [Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Zא-ת][a-zA-Zא-ת ]+")]]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', [Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Zא-ת][a-zA-Zא-ת ]+")]],
      secondCtrl1 : ['' ,  [Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Zא-ת][a-zA-Zא-ת ]+")]],
      secondCtrl2: ['',  [Validators.required, Validators.pattern('^[0-9]+$')]],
      secondCtrl3: ['',  [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
    this.ThirdFormGroup = this._formBuilder.group({
      thirdCtrl : ['' , [Validators.required ,  Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
    if(this.userServ.GetCurrentUser() != null){
     this.firstFormGroup.controls['firstCtrl'].setValue(this.currentUser.firstName)
     this.firstFormGroup.controls['firstCtr2'].setValue(this.currentUser.lastName)
     this.secondFormGroup.controls['secondCtrl'].setValue(this.currentUser.address?.city)
     this.secondFormGroup.controls['secondCtrl1'].setValue(this.currentUser.address?.street)
     this.secondFormGroup.controls['secondCtrl2'].setValue(this.currentUser.address?.buildingN)
     this.secondFormGroup.controls['secondCtrl3'].setValue(this.currentUser.address?.houseN)
     this.ThirdFormGroup.controls['thirdCtrl'].setValue(this.currentUser.phone)
    }
  }
  payment(){
    debugger
    console.log(this.cartServ.isDelivary)
    if(this.cartServ.isDelivary === true){
       this.orderServ.newOrder.delivery = this.firstFormGroup.value.firstCtrl + " last name : "+this.firstFormGroup.value.firstCtr2 +" City: "+
    this.secondFormGroup.value.secondCtrl + " Street : "+  this.secondFormGroup.value.secondCtrl1+" Building number : "+  
    this.secondFormGroup.value.secondCtrl2 + " House number : "+  this.secondFormGroup.value.secondCtrl3
    }
   else{
    this.orderServ.newOrder.delivery = "הזמנה באיסוף עצמי"
   }
    this.myrouter.navigate(["/credit"])
  }


}
 


