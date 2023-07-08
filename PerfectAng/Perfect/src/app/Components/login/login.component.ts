import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CartService } from 'src/app/Services/cart.service';
import { ShoppingCart } from 'src/app/Classes/ShoppingCart';
import { PersonalProductService } from 'src/app/Services/personal-product.service';


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
  
  constructor(private userServ : UsersService ,
    public dialogRef : MatDialogRef<LoginComponent> , private _snackBar: MatSnackBar,
    public cartServ : CartService , private ppServ : PersonalProductService) { }

  ngOnInit(): void {
    this.showErr = false
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('',[Validators.required] )
  getErrorMessage() {
    this.showErr = false
    if (this.email.hasError('required') || this.pass.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  login(email : any , pass? : any ){
     this.userServ.Login(email , pass).subscribe(
      data=> {
        if(data == null)
          this.showErr = true
        else{ 
          //סוכם את מספר המוצרים 
          this.cartServ.GetAllCartByUserId(data.id).subscribe(res=>{
            console.log(res)
            this.userCart = res
            var item = 0
            this.userCart.forEach(e => {
             item += e.quantity
            });
            //סוכם את מספר המוצרים האישיים
            this.ppServ.GetPPByUserId(data.id).subscribe( 
              res=>{
                res.forEach(element => {
                  if(element.orderId == null)
                  item += element.quantity
                });
                //למה מחוץ ללולאה זה עושה את זה בלי הסכימה של המוצרים האישיים
               this.cartServ.SetNumItem(item)
               // console.log(item)
              }
            )
             this.cartServ.cartUpdated.emit()
          }
             )
        
          // _snackBar.open("login successfully" , "close")
          this._snackBar.open('התחברת בהצלחה', '', {
            duration: 3000
          });
          //console.log(data)
          this.dialogRef.close()
          this.userServ.SetCurrentUser(data);
        }
      },
      err =>{
         this.showErr = true
      }
    )
  }
}

