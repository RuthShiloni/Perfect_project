import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router , RouterModule  } from '@angular/router';



@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss',
]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder , private myrouter : Router) {
  }
  firstFormGroup !: FormGroup;
  secondFormGroup !: FormGroup;
  ThirdFormGroup !: FormGroup
  isEditable = true;

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required] ,
      firstCtr2 : ['' , Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      secondCtrl2: ['', Validators.required],
      secondCtrl3: ['', Validators.required]
    });
    this.ThirdFormGroup = this._formBuilder.group({
      thirdCtrl : ['' , [Validators.required ,  Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }
  payment(){
    this.myrouter.navigate(["/credit"])
  }


}
 


