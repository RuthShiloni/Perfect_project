import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/Services/users.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Classes/User';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  clubForm: FormGroup;
  newUser!: User

  constructor(private userServ: UsersService, private router: Router) {
    this.clubForm = new FormGroup({
      fulltName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),

    })   
}
  

    ngOnInit(): void {
  }

getErrorMessage(parameter: string): string | null {
  const control = this.clubForm.get(parameter);
  if (!control) {
    return null; // או ערך ברירת מחדל אחר
  }
  if (control.hasError('required')) {
    return 'This field is required.';
  }

  if (control.hasError('email')) {
    return 'Invalid email address.';
  }

  if (control.hasError('pattern')) {
   
    if (parameter === 'fulltName') {
      return 'fulltName must contain only letters.';
    }
    if (parameter === 'message') {
      return 'message  must contain only letters.';
    }
  }

  return null;
}



  onSubmit() {
    if (this.clubForm.invalid) {
      
      // Perform necessary actions for invalid form
      return;
    }

  
//   public dialogRef!: MatDialogRef<ContactUsComponent> 
//   @Inject(MAT_DIALOG_DATA) public data:any
//  }








  }}
