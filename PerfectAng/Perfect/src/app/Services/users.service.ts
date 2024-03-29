import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Classes/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private basicUrl : string = "https://localhost:44337/api/User/"
 // private currentUser !: User 
  constructor(private http : HttpClient) { }

  public GetAllUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.basicUrl + "getAllUser")
  }
  public GetUserById(id : number) : Observable<User>{
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
  public Login(email : string , pass : string) : Observable<User>{
    return this.http.get<User>(this.basicUrl + `Login/${email}/${pass}`)
  }
  public GetCurrentUser() : User{
   var str = sessionStorage.getItem('currentUser')
   if(str != null)
   var user =JSON.parse(str) 
   return user
  }
  public SetCurrentUser(user : User){
   var jsonUser = JSON.stringify(user)
   sessionStorage.setItem('currentUser' , jsonUser)
  }
}
