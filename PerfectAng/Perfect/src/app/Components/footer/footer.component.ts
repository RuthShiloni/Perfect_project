import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'src/app/Services/users.service';
import { LoginComponent } from '../login/login.component';
import { User } from 'src/app/Classes/User';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog , private userServ : UsersService , private router : Router ,
    private _snackBar: MatSnackBar) { }

  user !:User

  ngOnInit(): void {
  }

  login(){
    
    const dialogRef = this.dialog.open(LoginComponent)

    dialogRef.afterClosed().subscribe(data => {
      if(this.userServ.GetCurrentUser() != null){
         this.user = this.userServ.GetCurrentUser()
         window.location.reload()
      }
    });
  }

}
