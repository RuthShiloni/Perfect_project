import { Component, OnInit } from '@angular/core';
import { FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {
  

  constructor() { }

   //monthControl = new FormControl('', Validators.required);
   month : number[] = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 ,12]
   years : number[]=[]
   currentYear !: number
  ngOnInit(): void {
   this.currentYear = new Date().getFullYear()
   this.years.push(this.currentYear)
    for (let i = this.currentYear; i < this.currentYear + 10 ; i++) {
      debugger
      this.years.push(i)
    }
    console.log(this.years)
  }

}
