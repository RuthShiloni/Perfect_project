import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/Classes/Address';
import { User } from 'src/app/Classes/User';
import { AddressService } from 'src/app/Services/address.service';
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
  currentAdd !: Address

  constructor(private userServ : UsersService , private addressServ : AddressService , private router : Router) { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date(currentYear - 13, 11, 31);
  }

  ngOnInit(): void {
    this.user = this.userServ.GetCurrentUser()
    console.log(typeof this.user.Addresses)
    if(this.user.Addresses != null){ 
       this.isfull = true
       this.currentAdd = this.user.Addresses[0]
    }    
  }
  onDateChange(event :any) {
    this.selectedDate = event.value;
    console.log(this.selectedDate); // logs the selected date in a Date object format
  }
  Update(lname : string , fname : string , phone : string , email : string){
   this.newUser = new User(this.user.id , fname , lname , phone , email,this.user.password)
   this.userServ.UpdateUser(this.user.id , this.newUser).subscribe(
    response => {
      alert("seccede update")
    },
    err => {
      console.log(err)
    }
   )
  }
  AddAddress(city : string , street : string , numB : any , numH : any){
   this.newAddress = new Address(city , street , numH , numB , this.user.id)
   this.addressServ.AddAddress(this.newAddress).subscribe(
    success=>{
      alert("התעדכן בהצלחה")
    },
    err =>{
      console.log(err)
    }
   )
  }
  exit(){ 
    window.location.reload()
    sessionStorage.removeItem('currentUser')
  }
}
