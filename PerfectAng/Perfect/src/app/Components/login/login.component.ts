import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  showErr = false
  durationInSeconds = 5;
  
  constructor(private userServ : UsersService , private router : Router , 
    public dialogRef : MatDialogRef<LoginComponent> , private _snackBar: MatSnackBar) { }

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

