import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import {MatDialog} from '@angular/material/dialog';
import { User } from 'src/app/Classes/User';
import { UsersService } from 'src/app/Services/users.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent implements OnInit {
   
  showUser = false
  user !: User
  totalProduct : number = 0

  constructor(private router : Router , public dialog: MatDialog , private userServ : UsersService , 
  private cartServ : CartService) { }

  ngOnInit(): void {
    if(this.userServ.GetCurrentUser() != null){
     this.totalProduct = this.cartServ.getNumItem()
      this.user = this.userServ.GetCurrentUser()
      this.showUser = true
    }
    this.cartServ.cartUpdated.subscribe(() => {
      this.fetchCartItems();
    });
    
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
  fetchCartItems(){
    this.totalProduct = this.cartServ.getNumItem()
  }
  }
