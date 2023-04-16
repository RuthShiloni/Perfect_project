import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import {MatDialog} from '@angular/material/dialog';
import { User } from 'src/app/Classes/User';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
   
  showUser = false
  user !: User
  constructor(private router : Router , public dialog: MatDialog , private userServ : UsersService) { }

  ngOnInit(): void {
    if(this.userServ.GetCurrentUser() != null){
      this.user = this.userServ.GetCurrentUser()
      this.showUser = true
    }
  }
  ShowProducts(){
   this.router.navigate(["/products"])
  }
  showCart(){
    this.router.navigate(["/cart"])
  }
  home(){
    this.router.navigate([""])
  }
  login(){
    const dialogRef = this.dialog.open(LoginComponent)

    dialogRef.afterClosed().subscribe(data => {
      if(this.userServ.GetCurrentUser() != null){
        this.user = this.userServ.GetCurrentUser()
        this.showUser = true
      }
    });
  }
  Openoption(){
    this.router.navigate(["/UserOp"])
  }
  }
