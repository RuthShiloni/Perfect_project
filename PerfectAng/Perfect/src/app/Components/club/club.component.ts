import { analyzeFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      Birthday: new FormControl(new Date()),
    })
  }

  ngOnInit(): void {

  }

  getErrorMessage() {
    if (this.clubForm.value.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.clubForm.value.hasError('email') ? 'Not a valid email' : '';
  }

  addUser() {
    if (!this.clubForm.valid) {
      alert("טופס לא תקין");
      return;
    }
    this.newUser = new User(0, this.clubForm.controls.firstName.value,
      this.clubForm.controls.lastName.value, this.clubForm.controls.phoneNumber.value,
      this.clubForm.controls.email.value, this.clubForm.controls.password.value,
      this.clubForm.controls.Birthday.value != new Date() ? this.clubForm.controls.Birthday.value : null)
      
    this.userServ.AddUser(this.newUser).subscribe(data => {
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






