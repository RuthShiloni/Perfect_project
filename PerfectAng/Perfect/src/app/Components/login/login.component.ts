import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CartService } from 'src/app/Services/cart.service';
import { ShoppingCart } from 'src/app/Classes/ShoppingCart';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  showErr = false
  durationInSeconds = 5;
  userCart : ShoppingCart[] = []
  
  constructor(private userServ : UsersService , private router : Router , 
    public dialogRef : MatDialogRef<LoginComponent> , private _snackBar: MatSnackBar,
    public cartServ : CartService) { }

  ngOnInit(): void {
    this.showErr = false
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    this.showErr = false
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  login(email : any , pass : any ){
     this.userServ.Login(email , pass).subscribe(
      data=> {
        if(data == null)
          this.showErr = true
        else{ 
          debugger
          this.cartServ.GetAllCartByUserId(data.id).subscribe(res=>{
            console.log(res)
            this.userCart = res
            var item = 0
            this.userCart.forEach(e => {
             item += e.quantity
            });
            this.cartServ.SetNumItem(item)
             this.cartServ.cartUpdated.emit()
          }
             )
        
          this._snackBar.open("login successfully" , "close")
          console.log(data)
          this.router.navigate([""])
          this.dialogRef.close()
          this.userServ.SetCurrentUser(data);
        }
      }
    )
  }
}

