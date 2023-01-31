import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Classes/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  basicUrl : string = "https://localhost:44337/api/User/"
  currentUser !: User 
  constructor(private http : HttpClient) { }

  public GetAllUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.basicUrl + "getAllUser")
  }
  public GetUserBtId(id : number) : Observable<User>{
    return this.http.get<User>(this.basicUrl + `getUserById/${id}`)
  }
  public AddUser(user : User) : Observable<any>{
    return this.http.post<any>(this.basicUrl + "addUser" , user)
  }
  public DeleteUser(id : number) : Observable<any>{
    return this.http.delete<any>(this.basicUrl + `deleteUser/${id}`)
  }
  public UpdateUser(id : number , user : User) : Observable<any>{
    return this.http.put<any>(this.basicUrl + `updateUser/${id}` , user)
  }
  public GetCurrentUser() : User{
    return this.currentUser
  }
}
