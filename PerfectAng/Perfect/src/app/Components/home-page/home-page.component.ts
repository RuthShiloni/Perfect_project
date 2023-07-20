import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public Dialog: MatDialog , public router : Router
    
    ) { }


  
  openDialog(): void {
    const dialogRef = this.Dialog.open(ContactUsComponent, {
      width: '60%',
      height: '600px',
      data: {
        id: 2
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  
  ngOnInit(): void {   
  }
  buyNow(){
    this.router.navigate(["/products"])
  }
  contact(){
    this.router.navigate(["/contact"])
  }
  about(){
    this.router.navigate(["/about"])
  }
  club(){
    this.router.navigate(["/club"])
  }

}
