import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  ShowProducts(){
   this.router.navigate(["/products"])
  }
  showCart(){
    this.router.navigate(["/cart"])
  }
}
