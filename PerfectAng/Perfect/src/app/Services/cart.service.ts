import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalProduct } from '../Classes/PersonalProduct';
import { ShoppingCart } from '../Classes/ShoppingCart';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  basicUrl : string ="https://localhost:44337/api/ShoppingCart/"
  
  UnregisterUserCart : ShoppingCart[] = []

  //personal Product
  // UnregisterUser : PersonalProduct[] = []

  constructor(private http : HttpClient , private userServ : UsersService) { }
  
  public AddCart(newCart : ShoppingCart) : Observable<any>{
    return this.http.post<any>(this.basicUrl+"addShoppingCart" , newCart)
  }

// //personal Product
//   public AddPersonalProduct(newPersonalProduct : PersonalProduct) : Observable<any>{
//     return this.http.post<any>(this.basicUrl+"addShoppingCart" , newPersonalProduct)
//   }

  public DeleteCart(id : number):Observable<any>{
    return this.http.delete<any>(this.basicUrl+`deleteShoppingCart/${id}`)
  }
  public GetAllCartByUserId(userid : number) : Observable<ShoppingCart[]>{
  return this.http.get<ShoppingCart[]>(this.basicUrl + `GetAllCartByUserId/${userid}`)
  }
  public AddToUnRegisterUserCart(newCart : ShoppingCart){
     this.UnregisterUserCart.push(newCart)
    console.log(this.UnregisterUserCart)
  }
  
// //personal Product-להוספת מוצר אישי
//   public AddToUnRegisterUser(newPersonalProduct : PersonalProduct){
//     this.UnregisterUser.push(newPersonalProduct)
//    console.log(this.UnregisterUser)
//  }

  public DeleteFromUnRegisterUserCart(id : number){
   
  }
  public GetUnRegisterCart() : ShoppingCart[]{
    return this.UnregisterUserCart
  }

}
