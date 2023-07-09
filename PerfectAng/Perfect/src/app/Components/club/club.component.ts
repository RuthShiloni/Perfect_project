import { analyzeFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Classes/User';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  showErr = false
  clubForm: FormGroup;
  newUser!: User

  constructor(private userServ: UsersService, private router: Router) {
    this.clubForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Zא-ת][a-zA-Zא-ת ]+")
    ]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Zא-ת][a-zA-Zא-ת ]+")]),
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      Birthday: new FormControl('', Validators.compose([Validators.required, this.dateIsPast])),
      address: new FormControl('', [Validators.minLength(2),Validators.pattern("[a-zA-Z][a-zA-Z ]+")])
    })
  }

  ngOnInit(): void {

  }
  dateIsPast(control: AbstractControl): { [key: string]: any } | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
  
    if (selectedDate < currentDate) {
      return null; // התאריך תקין
    } else {
      return { pastDate: true }; // התאריך אינו קטן מהיום הנוכחי
    }
  }
  // getErrorMessage(s:string) {
  //   // clubForm.get('email')?.invalid
  //   // this.showErr = false
  //   if (this.clubForm.get('email')?.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.clubForm.get('email')?.hasError('email') ? 'Not a valid email' : '';

  // }
  // ...

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
    
    if (parameter === 'password') {
      return 'Invalid password. Password must be at least 8 characters long.';
    }
    
    if (parameter === 'firstName') {
      return 'First name must contain only letters.';
    }
    if (parameter === 'lastName') {
      return 'lastName  must contain only letters.';
    }

    
    if(parameter === 'Birthday' ){

      const selectedDate = new Date(control.value);
      const currentDate = new Date();
    
      if (selectedDate < currentDate) {
        return null; // התאריך תקין
      } else {
        return 'iutiutiutiu' // התאריך אינו קטן מהיום הנוכחי
      }
    }
  }

  return null;
}




  onSubmit() {
    this.addUser()
    // if (this.clubForm.invalid) {

    //   // Perform necessary actions for invalid form
    //   return;
    // }

    // Perform necessary actions for valid form
  }


  addUser() {
    if (!this.clubForm.valid) {
      alert("טופס לא תקין");
      return;
    }
    this.newUser=new User(0,this.clubForm.controls.firstName.value,this.clubForm.controls.lastName.value,this.clubForm.controls.phoneNumber.value,this.clubForm.controls.email.value,this.clubForm.controls.password.value,this.clubForm.controls.address.value,this.clubForm.controls.address.value)
    // this.newUser = new User(0, this.clubForm.controls.firstName.value,
    //   this.clubForm.controls.lastName.value, this.clubForm.controls.phoneNumber.value,
    //   this.clubForm.controls.email.value, this.clubForm.controls.password.value,
    //   this.clubForm.controls.Birthday.value != new Date() ? this.clubForm.controls.Birthday.value : null)
      
    this.userServ.AddUser(this.newUser).subscribe(data => {
      debugger
      if (data == true)
        alert("Added user successfully")
      /// לבדוק למה זה לא עושה את השורה שזה 
      ///הוספה של יוזר חדש-(שאינו קיים) אך לא תקין???
      if (data == false)
        alert("Error adding user ")
    },
      err => {
        alert("Error-user exist");
        console.log(err);
      })
  }
}






