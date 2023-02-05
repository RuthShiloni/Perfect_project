import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';



@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss',
]
})
export class PaymentDetailsComponent implements OnInit {
  stepperOrientation: Observable<"horizontal" | "vertical">;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
     this.stepperOrientation = breakpointObserver
     .observe('(min-width: 800px)')
     .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

 firstFormGroup = this._formBuilder.group({
  firstCtrl: ['', Validators.required],
  firstCtrl2: ['' , Validators.required]
});
secondFormGroup = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
  secondCtrl2 : ['', Validators.required],
  secondCtrl3 : ['', Validators.required],
  secondCtrl4 : ['', Validators.required]
});
thirdFormGroup = this._formBuilder.group({
  thirdCtrl: ['', Validators.required],
});
  ngOnInit(): void {
  }




}
 


