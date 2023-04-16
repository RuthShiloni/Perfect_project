import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Classes/User';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-option',
  templateUrl: './user-option.component.html',
  styleUrls: ['./user-option.component.scss']
})
export class UserOptionComponent implements OnInit {

  user !: User
  newUser !: User
  minDate !: Date;
  maxDate !: Date;
  selectedDate !: Date

  constructor(private userServ : UsersService) { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date(currentYear - 13, 11, 31);
  }

  ngOnInit(): void {
    this.user = this.userServ.GetCurrentUser()
  }
  onDateChange(event :any) {
    this.selectedDate = event.value;
    console.log(this.selectedDate); // logs the selected date in a Date object format
  }
  Update(lname : string , fname : string , phone : string , email : string){
   this.newUser = new User(this.user.id , fname , lname , phone , email)
   this.userServ.UpdateUser(this.user.id , this.newUser).subscribe(
    response => {
      alert("seccede update")
    },
    err => {
      console.log(err)
    }
   )
  }
  exit(){ 
    window.location.reload()
    sessionStorage.removeItem('currentUser')
  }
}
